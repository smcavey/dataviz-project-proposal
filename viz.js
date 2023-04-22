import { csvParse, select, timeParse } from 'd3';
import { lineChart } from './lineChart';
import { menu } from './menu';

export const viz = (
  container,
  { state, setState }
) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const optionsData = [
    { value: 'hdi', label: 'hdi' },
    { value: 'hdi_male', label: 'male' },
    { value: 'hdi_female', label: 'female' },
  ];

  select(container).call(menu, {
    optionsData,
    value: state.value,
    onChange: (value) => {
      setState((state) => ({
        ...state,
        value,
      }));
    },
  });

  if (!state.value) {
    setState((state) => ({
      ...state,
      value: 'hdi',
    }));
    return;
  }

  const svg = select(container)
    .selectAll('svg')
    .data([null])
    .join('svg')
    .attr('width', width)
    .attr('height', height);

  // state.data could be:
  // * undefined
  // * 'LOADING'
  // * An array of objects
  const { data } = state;

  if (data && data !== 'LOADING') {
    let selectedDataset;
    switch (state.value) {
      case 'hdi':
        selectedDataset = state.hdi;
        break;
      case 'hdi_male':
        selectedDataset = state.hdi_male;
        break;
      case 'hdi_female':
        selectedDataset = state.hdi_female;
        break;
      default:
        selectedDataset = state.hdi;
        break;
    }
    svg.call(lineChart, {
      data: selectedDataset,
      width,
      height,
      xValue: (selectedDataset) => selectedDataset.Date,
      yValue: (selectedDataset) => selectedDataset.Value,
      margin: {
        top: 70,
        bottom: 70,
        right: 125,
        left: 65,
      },
      xAxisLabel: 'Year',
      yAxisLabel: 'HDI Value',
      colorLegendLabel: 'UNDP Region',
      colorLegendX: 845,
      colorLegendY: 70,
      event: (selectedDataset) => selectedDataset.Event
    });
  }

  if (data === undefined) {
    setState((state) => ({
      ...state,
      data: 'LOADING',
    }));
    fetch('data.csv')
      .then((response) => response.text())
      .then((csvString) => {
        const data = csvParse(csvString);
        const parseDate = timeParse('%Y');
        let hdi = [];
        let hdi_male = [];
        let hdi_female = [];
        for (const d of data) {
          // female subset
          if (d['Date'].includes('female')) {
            d['Date'] = parseDate(
              d['Date'].toString().slice(11)
            );
            hdi_female.push(d);
            // male subset
          } else if (d['Date'].includes('male')) {
            d['Date'] = parseDate(
              d['Date'].toString().slice(9)
            );
            hdi_male.push(d);
            // non-gendered subset
          } else {
            d['Date'] = parseDate(
              d['Date'].toString().slice(24)
            );
            hdi.push(d);
          }
        }

        setState((state) => ({
          ...state,
          data,
          hdi,
          hdi_male,
          hdi_female,
        }));
      });
  }
};

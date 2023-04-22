import {
  extent,
  scaleLinear,
  scaleTime,
  scaleOrdinal,
  line,
  schemeCategory10,
  flatGroup,
  select,
} from 'd3';
import { axes } from './axes';
import { colorLegend } from './colorLegend';

export const lineChart = (
  selection,
  {
    data,
    width,
    height,
    xValue,
    yValue,
    margin,
    xAxisLabel,
    yAxisLabel,
    colorLegendLabel,
    colorLegendX,
    colorLegendY,
    event,
    colorValue = (d) => {
      switch (d.UNDP_Developing_Regions) {
        case 'SSA':
          return 'Sub-Saharan Arfica';
        case 'SA':
          return 'South Asia';
        case 'AS':
          return 'Arab States';
        case 'ECA':
          return 'Europe / Central Asia';
        case 'EAP':
          return 'East Asia / Pacific';
        case 'LAC':
          return 'Latin America / Caribbean';
        default:
          return 'N/A';
      }
    },
  }
) => {
  const filteredData = data.filter((d) => {
    return !isNaN(xValue(d)) && !isNaN(yValue(d));
  });

  const xScale = scaleTime()
    .domain(extent(filteredData, xValue))
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain(extent(filteredData, yValue))
    .range([height - margin.bottom, margin.top]);

  selection.call(axes, {
    xScale,
    yScale,
    xAxisLabel,
    yAxisLabel,
  });

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)));

  const colorScale = scaleOrdinal()
    .domain([
      ...new Set(
        filteredData.map((d) => colorValue(d))
      ),
    ])
    .range(schemeCategory10);

  selection.call(colorLegend, {
    colorScale,
    colorLegendLabel,
    colorLegendX,
    colorLegendY,
  });

  const lineValue = (d) => d.Country;

  const grouped = flatGroup(
    filteredData,
    lineValue
  );
  //console.log(grouped);
  const tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('pointer-events', 'none')
    .style('opacity', 0);

  selection
    .selectAll('path.line')
    .data(grouped)
    .join('path')
    .attr('class', 'line')
    .attr('d', (d) => lineGenerator(d[1]))
    .attr('stroke', (d) =>
      colorScale(colorValue(d[1][0]))
    )
    .attr('stroke-width', 2)
    .attr('fill', 'none')
    .attr('stroke-width', 0.5)

    .on('mouseover', function (event, d) {
      d3.select(this).attr('stroke-width', 3);
      selection
        .append('text')
        .attr('class', 'd3-tooltip')
        .attr('x', event.pageX + 10)
        .attr('y', event.pageY - 10)
        .text(d[0]);
    })
    .on('mouseout', function (event, d) {
      d3.select(this).attr('stroke-width', 0.5);
      selection.select('.d3-tooltip').remove();
    });
  selection
    .selectAll('.dot')
    .data(
      filteredData.filter((d) => d.Event !== '')
    )
    .join('circle')
    .attr('class', 'dot')
    .attr('cx', (d) => xScale(xValue(d)))
    .attr('cy', (d) => yScale(yValue(d)))
    .attr('r', 3)
    .attr('fill', (d) =>
      d.event !== '' ? 'black' : 'none'
    )
    .attr('display', (d) =>
      d.event !== '' ? 'block' : 'none'
    )
    .on('mouseover', function (event, d) {
      d3.select(this).attr('r', 6);
      tooltip
        .style('opacity', 1)
        .html(
          `<div>Country: ${d.Country}</div><div>Year: ${d.Date.getFullYear()}</div><div>Event: ${d.Event}</div>`
        )
        .style('left', event.pageX + 10 + 'px')
        .style('top', event.pageY - 10 + 'px');
    })
    .on('mouseout', function () {
      d3.select(this).attr('r', 3);
      tooltip.style('opacity', 0);
    });
};

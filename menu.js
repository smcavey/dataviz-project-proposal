export const menu = (
  selection,
  { optionsData, onChange, value }
) => {
  const selectElement = selection
    .selectAll('select')
    .data([null])
    .join('select')
    .on('change', (event) => {
      onChange(event.target.value);
    });

  selectElement
    .selectAll('option')
    .data(optionsData)
    .join('option')
    .attr('value', (d) => d.value)
    .text((d) => d.label);

  selectElement.property('value', value);
};
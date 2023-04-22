import { axisLeft, axisBottom } from 'd3';

export const axes = (
  selection,
  {
    xScale,
    yScale,
    xAxisLabel,
    yAxisLabel,
    titleLabel = xAxisLabel + ' vs. ' + yAxisLabel,
    xAxisLabelOffset = 20,
    yAxisLabelOffset = 50,
    titleOffset = 25
  }
) => {
  selection
    .selectAll('g.y-axis')
    .data([null])
    .join('g')
    .attr(
      'transform',
      `translate(${xScale.range()[0]},0)`
    )
    .attr('class', 'y-axis')
    .call(axisLeft(yScale));

  selection
    .selectAll('g.x-axis')
    .data([null])
    .join('g')
    .attr(
      'transform',
      `translate(0, ${yScale.range()[0]})`
    )
    .attr('class', 'x-axis')
    .call(axisBottom(xScale));

  selection
    .selectAll('g.y-axis-label')
    .data([null])
    .join('text')
    .attr('class', 'y-axis-label')
    .attr('text-anchor', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr(
      'x',
      -(yScale.range()[0] + yScale.range()[1]) / 2
    )
    .attr(
      'y',
      xScale.range()[0] - yAxisLabelOffset
    )
    .text(yAxisLabel);

  selection
    .selectAll('g.x-axis-label')
    .data([null])
    .join('text')
    .attr('class', 'x-axis-label')
    .attr(
      'x',
      (xScale.range()[0] + xScale.range()[1]) / 2
    )
    .attr(
      'y',
      yScale.range()[0] + xAxisLabelOffset
    )
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'hanging')
    .text(xAxisLabel);
  // console.log('xScale', xScale.range());
  // console.log('yScale', yScale.range());
  selection
  	.selectAll('g.title')
    .data([null])
  	.join('text')
  	.attr('text-anchor', 'middle')
    .attr(
      'x',
      (xScale.range()[0] + xScale.range()[1]) / 2
    )
    .attr(
      'y',
      yScale.range()[1] - titleOffset
    )
  	.text(titleLabel)
};

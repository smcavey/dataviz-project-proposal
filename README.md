# Data Visualization Project

## Data

The HDI (human development index) dataset was downloaded from https://www.kaggle.com/datasets/iamsouravbanerjee/human-development-index-dataset. This data gives HDI values for each country, GII (gender inequality index), mean life expectancy info, income info, education, and other attributes for every country over time. The focus of this project will show the change of HDI values per country over a time period from 1990 to 2021. The data also includes the HDI for males and females per country over the same time period. See HDI_clean.csv for the actual data.

## Prototypes & Sketches

I’ve created a proof of concept visualization of this data:
![image](https://github.com/smcavey/dataviz-project-proposal/blob/master/samples/hdi_sketch_v2.jpeg)
This shows a rough idea of how all HDI values will be visualized over time. Given there are ~180 countries there will need to be some interactivity to be able to filter out some countries or make specific data points more bold than others. These methods include hovering a mouse over a line to make it more bold, or make the other lines more opaque. Another option may be toggling regions or continents to filter down the visual clutter.

The very first version of experimenting with the dataset yielded:
[![image](https://github.com/smcavey/dataviz-project-proposal/blob/master/samples/mean_life_expectancy_syria.jpg)
This just shows points over a series of time, future prototypes of time series data would involve a line plot. However, this dataset shows an interesting dip. Such a dip would be nice to have context that explains the anomaly.

The next version of experimenting with the dataset yeilded:
[![image](https://github.com/smcavey/dataviz-project-proposal/blob/master/samples/life_expec_vs_gni_all.jpg)
This demonstrates potentially how cluttered this visualization could get as this is ~180 datapoints, however I invision using ~180 lines across the entire dataset will be even more cluttered.

## Questions

The following questions will drive the visualization and interaction decisions for this project:

 * How much has HDI changed over time?
 * Presumably certain countries have been had more drastic changes in HDI over time, these are the real areas of interest, but which countries?
 * How close/far off the countries HDI is comparatively for males and females?
 * Have the gaps between the two shrunk over time as we might expect?
 * How might we best identify the case where HDI decreases over time?
 * How might we best identify the case where the gap between the HDI of male and females has grown?
 * How do I present HDI, HDI for males, and HDI for females for ~180 countries in a single visualization without the entire screen being lines?

## Tasks

The following tasks will partially drive answering the above questions and developing a visualization:

 * Create a pivot table of the attributes per year to have time series data
 * Try to find answers for the anomalies in the data (where there are rapid dips/gains in data)
 * Research appropriate groupings/filters to cut down on visual clutter

## Open Questions

HDI is composed of health, education, and standard of living. It might be difficult to accurately describe changes in HDI as it has a lot of factors. In certain cases it may be easy to answer: we assume HDI would have gone down after the Taliban has taken over the government in Afghanistan, but is it misleading to so simply explain that as the source of change? Is it better to filter HDI on continent/region or by the human development group in the attribute so as to better identify changes per country that are anomalous from the other countries in the same development group or region? 

## Milestones

Over roughly the next 8 weeks:
 1. See if I need to create a pivot table, rough visualization with chosen attributes of HDI, HDI male, HDI female
 2. Visualize HDI
 3. Visualizae HDI male/HDI female
 4. Overlay prior 2 weeks visualizations
 5. Toggleable filter to turn on/off HDI male/HDI female
 6. Mouse hover highlighting
 7. Filtering by group
 8. Explanations for drastic dips/gains in HDI

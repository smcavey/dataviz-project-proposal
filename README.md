# Data Visualization Project

## Data

The HDI (human development index) dataset was downloaded from https://www.kaggle.com/datasets/iamsouravbanerjee/human-development-index-dataset. This data gives HDI values for each country, GII (gender inequality index), mean life expectancy info, income info, education, and other attributes for every country over time. The focus of this project will show the change of HDI values per country over a time period from 1990 to 2021. The data also includes the HDI for males and females per country over the same time period. See HDI_clean.csv for the actual data.

## Prototypes & Sketches

I’ve created a proof of concept visualization of this data:
![image](https://github.com/smcavey/dataviz-project-proposal/blob/master/samples/hdi_sketch_v2.jpeg)
This shows a rough idea of how all HDI values will be visualized over time. Given there are ~180 countries there will need to be some interactivity to be able to filter out some countries or make specific data points more bold than others. These methods include hovering a mouse over a line to make it more bold, or make the other lines more opaque. Another option may be toggling regions or continents to filter down the visual clutter.

The very first version of experimenting with the dataset yielded:
![image](https://github.com/smcavey/dataviz-project-proposal/blob/master/samples/mean_life_expectancy_syria.jpg)
This just shows points over a series of time, future prototypes of time series data would involve a line plot. However, this dataset shows an interesting dip. Such a dip would be nice to have context that explains the anomaly.

The next version of experimenting with the dataset yeilded:
![image](https://github.com/smcavey/dataviz-project-proposal/blob/master/samples/life_expec_vs_gni_all.jpg)
This demonstrates potentially how cluttered this visualization could get as this is ~180 datapoints, however I invision using ~180 lines across the entire dataset will be even more cluttered.

Using the UNDP_Developing_Regions attribute from the dataset to create a color legend and color each point, we were able to make out some distinct groups of the data:
![image](https://github.com/smcavey/dataviz-project-proposal/blob/master/samples/scatter-color.jpg)

## Possible Explanation for Trend Changes (speculation based on perceived significant events)
* Syria drop in 2011 - [Syrian Civil War](https://en.wikipedia.org/wiki/Syrian_civil_war)
* Haiti drop in 2010 - [Earthquake with an est. 300k death toll](https://www.britannica.com/event/2010-Haiti-earthquake)
* Libya drop in 2011 - [Libyan Revolt of 2011](https://www.britannica.com/event/Libya-Revolt-of-2011)
* Malawi jump in 1995 - [New President Bakili Muluzi and Constitution](http://pcwcr.princeton.edu/reports/malawi1995.html)
* Tajikistan drop in 1991 - [Tajikistani Civil War 1991-1997](https://en.wikipedia.org/wiki/Tajikistani_Civil_War)
* Burunda drop in 1993 - [Tutsis Ethnic Cleansing](https://en.wikipedia.org/wiki/1993_ethnic_violence_in_Burundi)
* Kuwait jump in 1994 - [Post Gulf War](https://en.wikipedia.org/wiki/Iraqi_invasion_of_Kuwait)
* Sudan drop in 2012 - [Ethnic Violence](https://en.wikipedia.org/wiki/2012_in_South_Sudan)
* Central African Reupblic drop in 2013 - [Rebels Take Power of Gov](https://www.worldvision.ca/stories/disaster-relief/central-african-republic-conflict-fast-facts#:~:text=Violence%20erupted%20in%20the%20Central,Bozize%20and%20forcibly%20seized%20power.)
* Yemen drop in 2015 - [Yemeni Civil War](https://en.wikipedia.org/wiki/Yemeni_civil_war_(2014%E2%80%93present)
* Russia drop in 1991 - [Gorbachev Resigns and Fall of USSR](https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union)
* Sri Lanka drop 2004 - [~30k Deaths from Earthquake](https://en.wikipedia.org/wiki/Effect_of_the_2004_Indian_Ocean_earthquake_on_Sri_Lanka)
* Zimbabwe jump in 2009 - [Adopts Foreign Currency Ending Hyperinflation](https://en.wikipedia.org/wiki/Hyperinflation_in_Zimbabwe#:~:text=In%202009%2C%20the%20government%20abandoned,foreign%20currencies%2C%20mostly%20US%20dollars.)

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

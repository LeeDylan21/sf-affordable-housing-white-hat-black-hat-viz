# sf-affordable-housing-white-hat-black-hat-viz

Inspired by the political weaponization of affordable housing on both the NIMBY (not in my backyard) and YIMBY (yes in my backyard) sides, I created this project to show how the same data can be manipulated to mislead the viewer. By utilizing Vega-Lite and data from San Francisco's Open Data Portal, this project consists of [four interactive visualizations](https://observablehq.com/d/178c776e03a3568e) in an Observable Notebook. In my two white hat visualizations I display the data in a clear and accurate way. In my two black hat visualizations I use deceptive techniques to try to paint a particular narrative.

## White Hat Techniques Utilized
| Visualization | Technique | Rationale |
| --- | --- | --- |
| Stacked Bar Chart | Use of neighborhood as a primary encoding (Axis) and supervisorial district as secondary encoding (color) | While both are useful, it is easier for viewers to identify with a cultural boundary rather than a strictly political one |
| Stacked Bar Chart | Horizontal bars sorted by most to least affordable housing units being built | Quickly points the viewer to the answer of the main question: "Which neighborhood is building the most affordable housing |
| Stacked Bar Chart | District selector | To enable viewers to also compare districts |
| Stacked Bar Chart | Tooltip with neighborhood, district, district units, total neighborhood units, and region | With precise numbers, the viewer can more easily compare neighborhoods with extremely similar numbers of units being built. |
| Geospatial Map | Use of a map | Helps especially those who do not live in San Francisco physically visualize where developments were being built |
| Geospatial Map | Developments color-coded by region | Neighborhood colors were simplified to regional colors as to not overwhelm the viewer with too many colors |
| Geospatial Map | Circle size scaled with number of units within a project | Properly weighs larger developments against smaller ones |
| Geospatial Map | Neighborhood multi-select tool | Maintains continuity with the stacked bar chart, helps viewers to explore both visualizations in tandem |
| Geospatial Map | Tooltip with project name, neighborhood, district, project units, and total neighborhood units | Allows viewers greater insight into each particular development and the context of the neighborhood around it |


## Black Hat Techniques Utilized
| Visualization | Technique | Rationale |
| --- | --- | --- |
| Stacked Bar Chart | Unit axis shifted from 0 - 1800 to 50 - 1600 | Slightly exaggerates neighborhood differences, cuts off top and bottom such that many neighborhoods seem like they are building no housing rather than some but not much |
| Stacked Bar Chart | District colors reassigned from red to blue | Implies a moral issue at hand or shirking of a moral duty by certain districts |
| Stacked Bar Chart | Title rewritten from "San Francisco's Affordable Housing by Neighborhood and District" to "The Burden of Affordable Housing: Which Neighborhoods Carry the Weight | Heightened language signals crisis |
| Stacked Bar Chart | Axes rewritten from "Total Affordable Housing Units Being Built" and "Neighborhood" to "Housing Burden (Units)" and "Neighborhood Responsibility" | Heightened language signals crisis |
| Stacked Bar Chart | Chart sorted in a valley shape with red districts on the left and blue districts on the right | Suggests a trend from more bad (red) to neutral (nothing) to more good (blue) |
| Geospatial Map | Circles are scaled using an exponent of 0.1 | Circles size is mostly indistinguishable between 4 units and 300 units  |
| Geospatial Map | "Regions" renamed to "Zone Designations", "Affordable Housing" renamed to "Housing Density Burden", "Project Units" renamed to "Alleviated Units", and "Total Neighborhood Units" renamed to "Total Contribution by Neighborhood" | Heightened language signals crisis  |
| Geospatial Map | Region colors assigned an increasing opacity scale of red | Indicates more danger the greater the opacity of red |
| Geospatial Map | Map shifted southward and eastward | Emphasizes the "problem zone" and cuts off part of Treasure Island implying that it isn't important |

## Acknowledgements
Data from this project was collected from a 05/18/2025 snapshot of the Mayor's Office of Housing and Community Development Affordable Housing Pipeline from DataSF (San Francisco's Open Data Portal). It also utilizes the Map of Supervisor Districts (2022) from DataSF. This project was submitted as a final project for DS4200 Information Visualization at Northeastern University. A more in-depth write-up can be found [here](https://github.com/LeeDylan21/sf-affordable-housing-white-hat-black-hat-viz/blob/main/write-up.pdf).

## Wrap-up
While the sharing of information can never be unbiased, it is still important to avoid intentionally misleading viewers and to educate others about how to identify when visualizations are deceptive. This project underscores just how radically different data can be presented when someone has a hidden agenda.

# sf-affordable-housing-white-hat-black-hat-viz

Inspired by the political weaponization of affordable housing on both the NIMBY (not in my backyard) and YIMBY (yes in my backyard) sides, I created this project to show how the same data can be manipulated to mislead the viewer. By utilizing Vega-Lite and data from San Francisco's Open Data Portal, this project consists of [four interactive visualizations](https://observablehq.com/d/178c776e03a3568e) in an Observable Notebook. In my two white hat visualizations I display the data in a clear and accurate way. In my two black hat visualizations I use deceptive techniques to try to paint a particular narrative.

Black Hat Techniques Utilized
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

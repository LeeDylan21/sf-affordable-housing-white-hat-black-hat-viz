vl.layer(
  vl.markGeoshape({ stroke: "black", strokeOpacity: 0.3, fill: "lightblue", fillOpacity: 0.6 })
    .data({ values: sfBounds })
    .project({ 
      type: "mercator",
      center: [-122.44, 37.77],
      scale: 200000
    }),

  vl.markCircle()
    .data(filteredDataWhite)
    .encode(
      vl.longitude().field("Longitude"),
      vl.latitude().field("Latitude"),
      vl.size().fieldQ("MOHCD Affordable Units")
      .scale({ range: [50, 1000] })
      .legend({ title: "Affordable Units" }),
      vl.color().fieldN("Region")
      .scale({
        domain: ["North", "East", "West", "South", "Central"],
        range: [
          "#2ca02c", // green
          "#d62728", // red
          "#9467bd", // purple
          "#8c564b", // brown
          "#e377c2"  // pink
        ]
      }),
      vl.tooltip([
        { field: "Project Name", type: "nominal", title: "Project Name" },
        { field: "City Analysis Neighborhood", type: "nominal", title: "Neighborhood" },
        { field: "Supervisor District", type: "nominal", title: "District" },
        { field: "MOHCD Affordable Units", type: "quantitative", title: "Project Units" },
        { field: "Total Neighborhood Affordable Units", type: "quantitative", title: "Total Neighborhood Units"}
      ])
    ),
  vl.markText({ fontSize: 10, fontWeight: "bold", dy: -8 })
    .data(customDistrictLabels)
    .encode(
      vl.longitude().field("Longitude"),
      vl.latitude().field("Latitude"),
      vl.text().field("Label"),
      vl.color().value("black")
    )
  )
  .width(800)
  .height(600)
  .project({ 
    type: "mercator",
    center: [-122.44, 37.77],
    scale: 200000
  })
  .title({
    "text":"Map of Affordable Housing Projects in San Francisco by Directional Region",
    "subtitle": "All active projects as of May 13th, 2025"
  })
  .render()

// Deceptive techniques: non-linear circle scaling compresses real size differences, 
// all-red opacity scheme evokes crisis/danger, loaded field labels ("Housing Density Burden", 
// "Alleviated Units"), map re-centered/cropped to emphasize the "problem zone"

viewof selectedNeighborhoodsBlack = Inputs.select(
  ["All", ...directionOrderedNeighborhoods],
  { 
    label: "Filter by Neighborhood(s)", 
    multiple: true,
    value: ["All"]
  }
)

filteredDataBlack = selectedNeighborhoodsBlack.includes("All") || selectedNeighborhoodsBlack.length === 0
  ? augmentedHousing
  : augmentedHousing.filter(d => selectedNeighborhoodsBlack.includes(d["City Analysis Neighborhood"]))

vl.layer(
  vl.markGeoshape({ stroke: "black", strokeOpacity: 0.3, fill: "lightblue", fillOpacity: 0.6 })
    .data({ values: sfBounds })
    .project({ 
      type: "mercator",
      center: [-122.40, 37.75],
      scale: 180000
    }),

  vl.markCircle()
    .data(filteredDataBlack)
    .encode(
      vl.longitude().field("Longitude"),
      vl.latitude().field("Latitude"),
      vl.size().fieldQ("MOHCD Affordable Units")
      .scale({ 
        range: [0, 1000],
        type: "pow",
        exponent: "0.1"
      })
      .legend({ title: "Housing Density Burden" }),
      vl.color().fieldN("Region")
      .scale({
        domain: ["South", "East", "North", "West", "Central"],
        range: [
          "#FF0000FF", // 100% opacity (fully opaque red)
          "#FF000099", // 60% opacity
          "#FF000066", // 40% opacity
          "#FF000033", // 20% opacity
          "#FF00001A", // 10% opacity
        ]
      })
      .legend({ title: "Zone Designation" }),
      vl.tooltip([
        { field: "Project Name", type: "nominal", title: "Project Name" },
        { field: "City Analysis Neighborhood", type: "nominal", title: "Neighborhood" },
        { field: "Supervisor District", type: "nominal", title: "Zone Designation" },
        { field: "MOHCD Affordable Units", type: "quantitative", title: "Alleviated Units" },
        { field: "Total Neighborhood Affordable Units", type: "quantitative", title: "Total Contribution by Neighborhood"}
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
    center: [-122.4, 37.75],
    scale: 180000
  })
  .title({
    "text": "San Francisco’s Uneven Burden: Who Bears the Housing Load?",
    "subtitle": "As of May 13th, 2025"
  })
  .render()

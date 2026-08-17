vl.markBar()
  .data(augmentedHousing)
  .transform(
    vl.groupby(["City Analysis Neighborhood", "Supervisor District", "Total Neighborhood Affordable Units", "Region"])
      .aggregate(vl.sum("MOHCD Affordable Units").as("Affordable Units")),
    vl.filter(districtFilter)
  )
  .params(districtFilter)
  .encode(
    vl.x().fieldQ("Affordable Units")
      .axis({ title: "Total Affordable Housing Units Being Built" })
      .scale({ domain: [0, 1800] }),
    vl.y().fieldN("City Analysis Neighborhood")
      .sort(vl.sum("Affordable Units").order("descending"))
      .axis({ title: "Neighborhood" }),
    vl.color().fieldN("Supervisor District")
      .sort(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"])
      .legend({ title: "District" })
      .scale({
        domain: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        scheme: "tableau20"
      }),vl.tooltip([
      { field: "City Analysis Neighborhood", type: "nominal", title: "Neighborhood" },
      { field: "Supervisor District", type: "nominal", title: "District" },
      { field: "Affordable Units", type: "quantitative", title: "District Units" },
      { field: "Total Neighborhood Affordable Units", type: "quantitative", title: "Total Neighborhood Units"},
      { field: "Region", type: "nominal", title: "Region" }
    ])
  )
  .title({ 
    "text": "San Francisco's Affordable Housing by Neighborhood and District",
    "subtitle": "All active projects as of May 13th, 2025"
  })
  .width(700)
  .render()

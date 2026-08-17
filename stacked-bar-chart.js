// Deceptive techniques: y-axis truncated (50-1600 instead of 0-1800), 
// misleading valley-shaped sort order, red-to-blue color scale implying a moral gradient

vl.markBar({ clip: true })
  .data(augmentedHousing)
  .transform(
    vl.groupby(["City Analysis Neighborhood", "Supervisor District", "Total Neighborhood Affordable Units", "Region"])
      .aggregate(vl.sum("MOHCD Affordable Units").as("Affordable Units")),
    vl.filter(districtFilter)
  )
  .params(districtFilter)
  .encode(
    vl.y().fieldQ("Affordable Units")
      .axis({ title: "Housing Burden (Units)" })
      .scale({ domain: [50, 1600] }),
    vl.x().fieldN("City Analysis Neighborhood")
      .sort(["Financial District/South Beach",
            "South of Market",
            "Tenderloin",
            "Western Addition",
            "Nob Hill",
            "Sunset/Parkside",
            "Hayes Valley",
            "Treasure Island",
            "Chinatown",
            "Haight Ashbury",
            "Inner Richmond",
            "Presidio Heights",
            "Marina",
            "Castro/Upper Market",
            "North Beach",
            "Portola",
            "Noe Valley",
            "Japantown",
            "Pacific Heights",
            "Outer Richmond",
            "Russian Hill",
            "Excelsior",
            "Outer Mission",
            "Bernal Heights",
            "Visitacion Valley",
            "Twin Peaks",
            "Lakeshore",
            "Potrero Hill",
            "West of Twin Peaks",
            "Mission Bay",
            "Mission",
            "Bayview Hunters Point"
             ])
      .axis({ title: "Neighborhood Responsibility" }),
    vl.color().fieldN("Supervisor District")
      .sort(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"])
      .legend({ title: "District Standing" })
      .scale({
        domain: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        scheme: "redblue",
        domainMid: 900
      }),
    vl.tooltip([
      { field: "City Analysis Neighborhood", type: "nominal", title: "Neighborhood" },
      { field: "Supervisor District", type: "nominal", title: "District" },
      { field: "Affordable Units", type: "quantitative", title: "District Units" },
      { field: "Total Neighborhood Affordable Units", type: "quantitative", title: "Total Neighborhood Units"},
      { field: "Region", type: "nominal", title: "Region" }
    ])
  )
  .title({
    "text": "The Burden of Affordable Housing: Which Neighborhoods Carry the Weight?",
    "subtitle": "As of May 13th, 2025"
  })
  .width(700)
  .render()

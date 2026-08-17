// Manually order neighborhoods by direction
directionOrderedNeighborhoods = [
  // North
  "Chinatown",
  "Financial District/South Beach",
  "Marina",
  "Nob Hill",
  "North Beach",
  "Pacific Heights",
  "Presidio Heights",
  "Russian Hill",
  "Treasure Island",
  
  // South
  "Bayview Hunters Point",
  "Bernal Heights",
  "Excelsior",
  "Outer Mission",
  "Portola",
  "Visitacion Valley",
  
  // East
  "Mission Bay",
  "Potrero Hill",
  "South of Market",
  
  // West
  "Inner Richmond",
  "Lakeshore",
  "Outer Richmond",
  "Sunset/Parkside",
  "West of Twin Peaks",
  
  // Central
  "Castro/Upper Market",
  "Haight Ashbury",
  "Hayes Valley",
  "Japantown",
  "Mission",
  "Noe Valley",
  "Tenderloin",
  "Twin Peaks",
  "Western Addition"
];

// Create the Supervisor District Selector
districtFilter = vl.selectSingle("DistrictFilter")
  .fields(["Supervisor District"])
  .bind({
    input: "select",
    name: "Supervisor District Selector:  ",
    options: [
      null,
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
    ],
    labels: [
      "All Districts",
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
    ]
  });

// Manually label districts on the geojson map
customDistrictLabels = [
  { Label: "District 1", Longitude: -122.484075, Latitude: 37.778820 },
  { Label: "District 2", Longitude: -122.451468, Latitude: 37.795229 },
  { Label: "District 3", Longitude: -122.410330, Latitude: 37.798986 },
  { Label: "District 4", Longitude: -122.494388, Latitude: 37.744213 },
  { Label: "District 5", Longitude: -122.434512, Latitude: 37.776963 },
  { Label: "District 6", Longitude: -122.388324, Latitude: 37.778056 },
  { Label: "District 7", Longitude: -122.461900, Latitude: 37.736119 },
  { Label: "District 8", Longitude: -122.435093, Latitude: 37.755201 },
  { Label: "District 9", Longitude: -122.415278, Latitude: 37.733814 },
  { Label: "District 10", Longitude: -122.391084, Latitude: 37.743319 },
  { Label: "District 11", Longitude: -122.443275, Latitude: 37.715690 }
]

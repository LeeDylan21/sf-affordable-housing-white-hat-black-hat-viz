housing = await FileAttachment("SF_MOHCD_Affordable_Housing_Pipeline_20250518.csv").csv()

// Geojson was manually corrected before importing
sfBounds = await FileAttachment("Supervisor_Districts_FinalCleaned.geojson").json()

// Aggregate total affordable housing units by neighborhood
totalHousingByNeighborhood = {
  const total = {};
  housing.forEach(d => {
    const neighborhood = d["City Analysis Neighborhood"];
    const units = +d["MOHCD Affordable Units"];
    if (!total[neighborhood]) total[neighborhood] = 0;
    total[neighborhood] += units;
  });
  return total;
}

// Assign each neighborhood a directional region
neighborhoodToRegionMap = {
  const map = {
    "Financial District/South Beach": "North",
    "Chinatown": "North",
    "North Beach": "North",
    "Russian Hill": "North",
    "Marina": "North",
    "Pacific Heights": "North",
    "Nob Hill": "North",
    "Treasure Island": "North",
    "Presidio Heights": "North",
  
    "Bayview Hunters Point": "South",
    "Visitacion Valley": "South",
    "Outer Mission": "South",
    "Excelsior": "South",
    "Portola": "South",
    "Bernal Heights": "South",
  
    "South of Market": "East",
    "Mission Bay": "East",
    "Potrero Hill": "East",
  
    "West of Twin Peaks": "West",
    "Sunset/Parkside": "West",
    "Lakeshore": "West",
    "Inner Richmond": "West",
    "Outer Richmond": "West",
    
    "Mission": "Central",
    "Tenderloin": "Central",
    "Western Addition": "Central",
    "Hayes Valley": "Central",
    "Twin Peaks": "Central",
    "Haight Ashbury": "Central",
    "Castro/Upper Market": "Central",
    "Noe Valley": "Central",
    "Japantown": "Central"
  }
  return map
}

// Build final processed dataset
augmentedHousing = housing.map( d=> ({
    ...d,
    "Total Neighborhood Affordable Units": +totalHousingByNeighborhood[d["City Analysis Neighborhood"]],
    "Region": neighborhoodToRegionMap[d["City Analysis Neighborhood"]]
  }));

import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const jsonData = require("./countriesStatesCities.json");

function App() {
  const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();

  const availableState = jsonData.countries.find(
    (c) => c.name === selectedCountry
  );

  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );

  return (
    <div className="App">
      <FormControl sx={{ width: "30%", margin: "2%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{ textAlign: "left" }}
        >
          <MenuItem>--Choose Country--</MenuItem>
          {jsonData.countries.map((value, key) => {
            return (
              <MenuItem value={value.name} key={key}>
                {value.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ width: "30%", margin: "2%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{ textAlign: "left" }}
        >
          <MenuItem>--Choose State--</MenuItem>
          {availableState?.states.map((e, key) => {
            return (
              <MenuItem value={e.name} key={key}>
                {e.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ width: "30%", margin: "2%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="City"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={{ textAlign: "left" }}
        >
          <MenuItem>--Choose City--</MenuItem>
          {availableCities?.cities.map((e, key) => {
            return (
              <MenuItem value={e.name} key={key}>
                {e.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;

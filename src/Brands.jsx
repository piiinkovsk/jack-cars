import React, {useState, useEffect} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Brands({ content }) {
  const [brands, setBrands] = useState(
    new Set(
      content.map((element) => {
        return element.brand;
      })
    )
  );

  const [activeBrand, setActiveBrand] = useState();

  useEffect(() => {
    const filteredBrand = content.filter((item) => {
      return item.brand === activeBrand, filteredBrand;
    }, [activeBrand])});

  
  return (
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeBrand}
        label={activeBrand}
        onChange={(event) => setActiveBrand(event.target.value)}
      >
        {[...brands].map((element) => {
          return <MenuItem value={element}>{element}</MenuItem>;
        })}
      </Select>
  );
}

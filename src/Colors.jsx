import React, {useState, useEffect} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Models({ content, filteredModels }) {
  const [activeModel, setActiveModel] = useState();
  const [models, setModels] = useState([]);

  useEffect(() => {
    const filteredModels = filteredBrand.map((e) => {
      return e.model;
    });
    console.log(filteredModels);
    }, [activeBrand]);

  
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

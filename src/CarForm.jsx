import React from "react";
import { useState } from "react";
import "./carform.css";
import DropDownList from "./DropDownList.jsx";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

export default function CarForm({ content }) {
  const [brands, setBrands] = useState(
    new Set(
      content.map((element) => {
        return element.brand;
      })
    )
  );
  const [activeBrand, setActiveBrand] = useState(""); //brand.jsx
  const [activeModel, setActiveModel] = useState(""); //model.jsx
  const [activeColor, setActiveColor] = useState("");
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);


  useEffect(() => {
    const filteredBrand = content.filter((item) => {
      return item.brand === activeBrand;
    });
    
    const filteredModels = filteredBrand.map((e) => {
      return e.model;
    });
    setModels([...new Set(filteredModels)]);
  }, [activeBrand]);

  useEffect(()=>{
    const filteredColors = content.filter(_element => _element.brand === activeBrand).filter(_element => _element.model === activeModel).map((_element) => {
     return _element.color; 
    });
    setColors([...new Set(filteredColors)]);
  },[activeModel]);

  return (
    <div className="car-form">

      <DropDownList 
      _labelId="demo-simple-select-label"
      _id="demo-simple-select"
      _activeElement={activeBrand}
      _event={(event) => setActiveModel(event.target.value)}
      _data = {[...brands]}/>
      
     <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeBrand}
        label={activeBrand}
        onChange={(event) => setActiveBrand(event.target.value)}
      >
        {[...brands].map((element) => {
          return <MenuItem key={element} value={element}>{element}</MenuItem>;
        })}
      </Select>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeModel}
        label={activeModel}
        onChange={(event) => setActiveModel(event.target.value)}
      >
        {models.map((element) => {
          return <MenuItem key={element} value={element}>{element}</MenuItem>;
        })}
      </Select>

   
      <Select
        labelId="demo-simple-select-label2"
        id="demo-simple-select2"
        value={activeColor}
        label={activeColor}
        onChange={(event) => setActiveColor(event.target.value)}
      >
        {colors.map((element) => {
          return <MenuItem key={element} value={element}>{element}</MenuItem>;
        })}
      </Select>
    </div>
  );
}

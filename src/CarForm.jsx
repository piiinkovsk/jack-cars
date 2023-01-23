import React from "react";
import { useState } from "react";
import "./carform.css";
import DropDownList from "./Brands";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import Models from "./Models.jsx";
import Brands from "./Models.jsx";

export default function CarForm({ content }) {
  const [brands, setBrands] = useState(
    new Set(
      content.map((element) => {
        return element.brand;
      })
    )
  );

  const [activeBrand, setActiveBrand] = useState(); //brand.jsx
  const [activeModel, setActiveModel] = useState(); //model.jsx
  const [activeColor, setActiveColor] = useState();
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);


  useEffect(() => {
    const filteredBrand = content.filter((item) => {
      return item.brand === activeBrand;
    });
    
    const filteredModels = filteredBrand.map((e) => {
      return e.model;
    });
    console.log(filteredModels);

    setModels([...new Set(filteredModels)]);

    // // const filteredColors = filteredBrand.map((i) => {
    // //     // return (e.model === i.model ? i.color : "")
    // //     console.log(i.color);
    // // });
    // // setColors([...new Set(filteredColors)]);

  }, [activeBrand]);

  useEffect(()=>{
    // const filteredColors = content.filter(_element => _element.brand === activeBrand).filter(_element => _element.brand === activeModel)
    
    const filteredColors = content.filter(_element => _element.brand === activeBrand)
    console.log(filteredColors)
    setColors([...new Set(filteredColors)]);
  },[activeModel]);

  return (
    <div className="car-form">
      {/* <Models 
      content={content}
      ></Models>
      <Brands></Brands> */}

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

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeModel}
        label={activeModel}
        onChange={(event) => setActiveModel(event.target.value)}
      >
        {models.map((element) => {
          return <MenuItem value={element}>{element}</MenuItem>;
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
          return <MenuItem value={element}>{element}</MenuItem>;
        })}
      </Select>

      {/* <DropDownList type={element.year} label="Year"></DropDownList> */}
    </div>
  );
}

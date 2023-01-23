import React from "react";
import "./dropdownlist.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

export default function DropDownList({_labelId, _id, _data, _activeElement, _event}){
    <Select
        labelId={_labelId}
        id={_id}
        value={_activeElement}
        label={_activeElement}
        onChange={_event}
      >
        {{_data}.map((element) => {
          return <MenuItem key={element} value={element}>{element}</MenuItem>;
        })}
      </Select>
}
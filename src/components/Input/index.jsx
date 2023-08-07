import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import * as Style from "./style";
import { Countries } from "./style";
import { data } from "./data";
import ModalWindow from "../Modal";

const Input = () => {
  const [active, setActive] = useState(true);

  const click = () => {
    setActive(!active);
  };

  return (
    <Style.Wrapper>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          onFocus={() => click()}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for country"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Style.CountryBox active={active}>
        {data.map((el) => (
          <Countries>{el.name}</Countries>
        ))}
      </Style.CountryBox>
    </Style.Wrapper>
  );
};

export default Input;

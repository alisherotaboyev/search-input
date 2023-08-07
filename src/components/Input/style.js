import { Paper } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const CountryBox = styled.div`
  width: 385px;
  height: 300px;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
  overflow-y: auto;
  display: ${({ active }) => (active == true ? "none" : "block")};
`;

const Countries = styled.div`
  width: 100%;
  padding-block: 10px;
  font-family: "Roboto";
  font-size: 20px;
  border-bottom: 1px solid #dddddd;
  cursor: pointer;
`;

export { Wrapper, CountryBox, Countries };

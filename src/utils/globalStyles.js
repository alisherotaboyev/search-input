import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
        background-color: transparent !important;
        position: absolute;
        z-index: -2000;
    }

    .MuiPaper-elevation {
        box-shadow: none !important;
    }

    MuiAccordionroot: {
        "&.MuiAccordion-root:before": {
        backgroundColor: "white" !important;
    }
`;

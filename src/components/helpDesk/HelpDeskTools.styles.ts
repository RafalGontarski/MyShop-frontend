import Link from "@mui/material/Link";
import styled from "styled-components";


export const HelpDeskAdvantageChildLink = styled(Link)`
  && {
    color: #000;
    margin-right: 20px;
    text-decoration: none;
    font-size: 0.9rem;
    margin-left: 9%;
    white-space: nowrap;


    &:hover {
      color: #008000;
    }

    @media (max-width: 1050px) {
      white-space: normal;
    }
  }
`
import {css} from "styled-components";
import {color} from "../variables/color";

export const ButtonTemplate = () => css`
  background-color: ${color.footerColor};
  padding: 10px 20px;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

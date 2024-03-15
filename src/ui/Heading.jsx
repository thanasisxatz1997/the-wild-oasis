import styled, { css } from "styled-components";

//we use the css keyword just to get the syntax highliting
// const test = css`
//   text-align: center;
//   ${10 > 20 && "background-color: yellow;"}
// `;
//css keyword is used in front of a template literal
const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: ${10 > 5 ? "30px" : "5px"};
      font-weigh: 600px;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: ${10 > 5 ? "30px" : "5px"};
      font-weigh: 600px;
    `}

    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: ${10 > 5 ? "30px" : "5px"};
      font-weigh: 600px;
    `}

  line-height:1.4;
`;

export default Heading;

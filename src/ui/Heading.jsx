import styled, { css } from "styled-components";

//we use the css keyword just to get the syntax highliting
// const test = css`
//   text-align: center;
//   ${10 > 20 && "background-color: yellow;"}
// `;
//css keyword is used in front of a template literal
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weigh: 600px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weigh: 600px;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weigh: 500px;
    `}

  line-height:1.4;
`;

export default Heading;

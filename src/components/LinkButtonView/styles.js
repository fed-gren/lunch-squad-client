import styled from "styled-components";

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 0.2rem;

  /* customizing attribute */
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ borderRadius }) => borderRadius && ` border-radius: ${borderRadius};`}
  ${({ bgColor }) => bgColor && ` background-color: ${bgColor};`}
  ${({ color }) => color && ` color: ${color};`}
  ${({ fontSize }) => fontSize && ` font-size: ${fontSize};`}
`;

export default { Button };

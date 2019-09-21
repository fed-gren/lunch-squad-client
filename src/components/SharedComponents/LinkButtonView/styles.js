import styled from "styled-components";

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 0.2rem;
  cursor: pointer;

  /* customizing attribute */
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ isOff }) => isOff && `background-color: #888;`}

  &:active {
  ${({ activeBgColor }) =>
    activeBgColor && `background-color: ${activeBgColor};`}
  }
`;

export default { Button };

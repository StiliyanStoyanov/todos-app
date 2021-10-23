import styled from "styled-components";
type OverlayProps = {zIndex?: number};
export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  z-index: ${props => props.zIndex ?? 10};
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 48px);
  background-color: lightblue;
  opacity: 0.4;
`
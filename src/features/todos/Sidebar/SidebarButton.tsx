import styled from "styled-components";

export const SidebarButton = styled.button<{isActive: boolean}>`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
  color: #34373d;
  font-weight: 700;
  white-space: nowrap;
  border: 1px solid transparent;
  background-color: ${props => props.isActive ? '#ededed' : 'transparent'};
  transition: background-color 0.1s linear;
  margin: 4px 0;
  &:hover {
    background-color: #fafafa;
  }
  span {
    padding-left: 12px;
  }
  svg {
    flex-shrink: 0;
  }
`
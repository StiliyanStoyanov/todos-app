import styled, {CSSObject} from 'styled-components';
import {containerProps} from "./constant";
import {ContainerProps} from "./types";

const containerStyles = (props: ContainerProps): CSSObject => ({
    boxSizing: props.boxSizing,
    position: props.position,
    height: props.height,
    zIndex: props.zIndex,
    outline: props.outline,
    overflow: props.overflow,
    overflowX: props.overflowX,
    overflowY: props.overflowY,
    maxHeight: props.maxHeight,
    minHeight: props.minHeight,
    width: props.width,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    margin: props.margin,
    marginTop: props.marginTop,
    marginRight: props.marginRight,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
    padding: props.padding,
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft,
    border: props.border,
    borderTop: props.borderTop,
    borderRight: props.borderRight,
    borderBottom: props.borderBottom,
    borderLeft: props.borderLeft,
});

export const Container = styled('div').withConfig({
    displayName: 'FlexContainer',
    shouldForwardProp: prop => !containerProps.includes(prop)
})<ContainerProps>(containerStyles)







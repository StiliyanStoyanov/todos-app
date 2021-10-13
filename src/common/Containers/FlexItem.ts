import styled, {CSSObject} from "styled-components";
import {Container} from "./Container";
import {FlexItemProps} from "./types";
import {flexItemProps} from "./constant";

const flexItemStyles = (props: FlexItemProps): CSSObject => ({
    order: props.order,
    flex: props.flex,
    alignSelf: props.alignSelf,
    justifySelf: props.justifySelf,
    flexBasis: props.flexBasis,
    flexShrink: props.flexShrink,
    flexGrow: props.flexGrow,
});
export const FlexItem = styled(Container).withConfig({
    displayName: 'FlexItem',
    shouldForwardProp: prop => !flexItemProps.includes(prop)
})<FlexItemProps>(flexItemStyles)
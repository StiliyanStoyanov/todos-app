import styled, {CSSObject} from 'styled-components';
import {flexItemProps} from "./constant";
import {FlexContainerProps} from "./container.types.";

const flexStyles = (props:FlexContainerProps): CSSObject => {
    const {children, theme, inline, wrap, column, center, ...rest} = props;
    const display = inline ? 'inline-flex' : 'flex';
    return {
        display,
        ...(center) && {justifyContent: 'center', alignItems: 'center'},
        ...(wrap) && {flexWrap: 'wrap'},
        ...(column) && {flexDirection: 'column'},
        ...rest
    };
};

export const FlexContainer = styled('div').withConfig({
    displayName: 'FlexContainer',
    shouldForwardProp: prop => !flexItemProps.includes(prop)
})<FlexContainerProps>(flexStyles)







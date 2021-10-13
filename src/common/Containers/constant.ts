export const containerProps = [
    'display', 'boxSizing', 'position', 'zIndex',
    'outline', 'overflow', 'overflowX', 'overflowY',
    'height', 'maxHeight', 'minHeight', 'width', 'maxWidth', 'minWidth',
    'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
    'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft'
];
export const flexContainerProps = ['inline', 'wrap', 'column', 'center', 'justifyContent', 'justifyItems', 'alignItems', 'alignContent',];
export const flexItemProps = [ 'order', 'flex', 'flexShrink', 'flexGrow', 'flexBasis', 'alignSelf', 'justifySelf', ...flexContainerProps];

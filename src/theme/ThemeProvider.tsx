import {FC} from "react";
import {CssBaseline, GlobalStyles, ThemeProvider as MuiThemeProvider} from "@mui/material";
import {lightTheme} from "./theme";
import {globalStyles} from "./globalStyles";

// https://mui.com/customization/theming/
// https://mui.com/components/css-baseline/
const global = <GlobalStyles styles={globalStyles}/>
export const ThemeProvider: FC = (props) => {
    return (
        <MuiThemeProvider theme={lightTheme}>
            <CssBaseline/>
            {global}
            {props.children}
        </MuiThemeProvider>
    )
}
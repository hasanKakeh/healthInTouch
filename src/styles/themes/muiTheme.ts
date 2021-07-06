import { createMuiTheme } from "@material-ui/core";

import colors from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.primary1,
      contrastText: '#fff'
    },
  },
  overrides: {
      MuiTab:{textColorPrimary:{color:"#fff"}}
  },
});
export default theme;

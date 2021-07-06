import "./App.css";

import NavBar from "./components/organisms/navBar";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Pages/loginPage";
import SearchPage from "./components/Pages/searchPage";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/themes/index";
import muiTheme from "./styles/themes/muiTheme";
function App() {
  return (
    <div className="">
      <MuiThemeProvider theme={muiTheme}>
   
        <ThemeProvider theme={theme}>
   
          <NavBar />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={SearchPage} />
          </Switch>
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

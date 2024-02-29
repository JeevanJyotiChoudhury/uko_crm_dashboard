
import CRM from "./pages/dashboards/crm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import useSettings from "./hooks/useSettings";
import { createCustomTheme } from "./theme";
import LayoutV3 from "./layouts/layout-v3/DashboardLayout";
import "./i18n";
import RTL from "./components/RTL";

function App() {
  const { settings } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RTL>
          <CssBaseline />
          <LayoutV3>
          <CRM />
          </LayoutV3>
        </RTL>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

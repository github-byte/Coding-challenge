import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { palette } from './colorPalette';
import Navbar from './header';
import InventoryStats from './inventory-stats';
import InventoryData from './inventory-data';

const App = () => {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...palette
        },
      }),
    [mode],
  );

  const coloringPattern = {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.light : theme.palette.background.dark,
    color: theme.palette.mode === 'light' ? theme.palette.text.secondary : theme.palette.text.primary
  }

  return (<ThemeProvider theme={theme}>
    <div style={coloringPattern} className="App">
      <Box sx={{ padding: 2 }}>
        <Navbar colorMode={colorMode} />
        <h1 style={{ fontWeight: 400 }}>Inventory stats</h1>
        <InventoryStats />
        <InventoryData />
      </Box>
    </div>
  </ThemeProvider>
  );
}

export default App;

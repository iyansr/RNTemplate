import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';

import MainBottomNavigation from '@modules/navigation/MainBottomNavigation';
import { theme } from '@modules/theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MainBottomNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;

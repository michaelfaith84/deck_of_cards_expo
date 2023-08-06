import FontAwesome from '@expo/vector-icons/FontAwesome';import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import {PaperProvider} from "react-native-paper";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

async function setScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setScreenOrientation()
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();


  return (
      <PaperProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false}} />
            <Stack.Screen name="games/casino_blackjack/index" options={{ headerTitle: "Casino Blackjack"}} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
      </PaperProvider>
  );
}

AppRegistry.registerComponent("Deck Of Cards", () => RootLayoutNav);
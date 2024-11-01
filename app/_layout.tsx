import '../global.css';

import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="product" options={{ headerShown: false, title: "Product" }} />
      <Stack.Screen name="categories" options={{ headerShown: false, title: "Categories" }} />
      <Stack.Screen name="carts" options={{ headerShown: false, title: "Cart" }} />
    </Stack>
  );
}

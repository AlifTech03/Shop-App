import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="order" />
    </Tabs>
  );
}

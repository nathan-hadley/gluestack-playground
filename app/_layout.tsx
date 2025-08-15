import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      <StatusBar barStyle="default" />
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}

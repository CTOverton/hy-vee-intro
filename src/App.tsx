import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "@/navigations/rootNavigator";

export default function App() {
  return (
      <SafeAreaProvider>
          <RootNavigator />
      </SafeAreaProvider>
  )
}

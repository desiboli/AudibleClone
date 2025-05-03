import "./global.css"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-800">
      <Text className="text-gray-100 text-2xl font-bold">Hellooo!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

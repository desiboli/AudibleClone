import "./global.css"
import { StatusBar } from "expo-status-bar"
import { FlatList, View } from "react-native"
import books from "./src/dummyBooks"
import BookListItem from "./src/components/BookListItem"

export default function App() {
  return (
    <View className="flex-1 justify-center bg-slate-800 p-4 pt-20">
      <FlatList
        data={books}
        renderItem={({ item }) => <BookListItem book={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 4 }}
      />

      <StatusBar style="auto" />
    </View>
  )
}

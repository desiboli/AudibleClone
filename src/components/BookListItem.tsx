import { Image, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

type Book = {
  title: string
  author: string
  thumbnail_url: string
}

interface BookListItemProps {
  book: Book
}

export default function BookListItem({ book }: BookListItemProps) {
  return (
    <View className="flex-row items-center gap-4">
      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-16 aspect-square rounded-md"
      />
      <View className="flex-1 gap-1">
        <Text className="text-gray-100 text-2xl font-bold">{book.title}</Text>
        <Text className="text-gray-400">{book.author}</Text>
      </View>
      <AntDesign name="playcircleo" size={24} color="gainsboro" />
    </View>
  )
}

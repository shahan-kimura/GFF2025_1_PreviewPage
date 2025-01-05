'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface Game {
  id: number
  title: string
  imageUrl: string
}

const games: Game[] = [
  {
    id: 1,
    title: "MONOFILM",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "猪突猛猛ー進",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "金羊毛伝説",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "ぽいぽいアイランド",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "風雲折紙城",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "地獄落下",
    imageUrl: "/placeholder.svg?height=200&width=300",
  }
]

export default function GameShowcase() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <header className="text-center py-12 bg-white/80 backdrop-blur-sm">
        <h1 className="text-5xl font-black mb-4">学生作品 試遊会</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">秋葉原校1年生</h2>
        <div className="bg-blue-500 text-white py-2 px-4 rounded-full inline-block">
          どどーんと！チーム制作6作品大公開！
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card 
              key={game.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => router.push(`/games/${game.id}`)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={game.imageUrl}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-center">{game.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}


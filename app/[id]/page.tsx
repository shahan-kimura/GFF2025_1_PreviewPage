'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GamePageProps {
  params: {
    id: string
  }
}

const gameData = {
  1: {
    title: "MONOFILM",
    genre: "3Dアクションゲーム",
    engine: "Unity",
    concept: "白と黒を切り替える主人公が、環境を活用してゴールを目指すパズル型アクションゲーム。シンプルな操作性と奥深い戦略性を重視。",
    features: [
      "色の切り替えを駆使したギミック",
      "短時間で楽しめるレベル設計",
      "幅広い層をターゲット"
    ],
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300"
    ],
    technologies: [
      "ゲームエンジン: Unity",
      "プログラミング言語: C#",
      "ツール: Blender（簡易モデリング）、Photoshop（テクスチャ作成）"
    ],
    developmentPeriod: "3か月間（チーム制作）",
    reflections: [
      "工夫点: 色切り替えのギミック実装でパフォーマンスを維持するため、メモリ使用量を最適化。",
      "課題: テストプレイで得たフィードバックを元に、難易度調整を改善中。"
    ],
    demoLink: "https://example.com/play-demo-1",
    videoId: "dQw4w9WgXcQ"
  },
  2: {
    title: "猪突猛猛ー進",
    genre: "3D弾幕避けゲーム",
    engine: "Unity",
    targetAudience: "弾幕ゲームが好きな6歳以上のプレイヤー",
    concept: "異世界に迷い込んだ主人公が、迫りくる化け物（イノシシなど）から逃げつつ、元の世界に戻る方法を探すサバイバル型弾幕ゲーム。緊張感のある回避アクションを楽しめます。",
    features: [
      "回避に特化したプレイ",
      "シンプルなクリア条件",
      "スタミナ管理"
    ],
    gameplay: [
      "プレイヤーは攻撃ができない代わりに、巧みな操作とダッシュ/ジャンプを駆使して敵の攻撃を避ける必要があります。",
      "制限時間内に生き残ればゲームクリア。ステージごとに以下の時間が設定されています：",
      "ステージ1: 1分",
      "ステージ2: 2分",
      "ステージ3: 3分",
      "ダッシュにはスタミナゲージを消費。ゲージが無くなるとダッシュ不可。",
      "スタミナ回復を見極めた戦略的な操作が必要。"
    ],
    controls: [
      "WASDキーで移動（上下左右）",
      "ダッシュ: 前後左右方向に可能（クールダウンあり）",
      "ジャンプ: 回避動作の補助"
    ],
    technologies: [
      "ゲームエンジン: Unity",
      "プログラミング言語: C#"
    ],
    playPoints: [
      "スリリングな弾幕回避体験と、時間内生存を目指す緊張感が魅力。",
      "スタミナの消費と回復を見極め、最適な動きを選択するスキルが試されます。"
    ],
    demoLink: "https://example.com/play-demo-2",
    videoId: "jNQXAC9IVRw"
  },
  3: {
    title: "金羊毛伝説",
    genre: "3Dパズルアクション",
    engine: "Unity",
    concept: "持ち運べる砂ブロックを使ってゴールまでの道を考える空間パズルアクションゲーム。",
    features: [
      "シンプルな操作性",
      "自由度の高いパズル要素",
      "ストーリー性"
    ],
    gameplay: [
      "ジャンプとブロック把持の2つの操作のみで遊べるシステム",
      "ブロックを自由に積み上げることができ、独自の攻略ルートを作成可能",
      "白い羊が金色の羊になるため、山頂の黄金の花を目指す物語"
    ],
    technologies: [
      "ゲームエンジン: Unity",
      "プログラミング言語: C#"
    ],
    developmentPeriod: "3か月間（チーム制作）",
    summary: "シンプルな操作性と奥深いパズル要素を組み合わせた3Dアクションゲーム。プレイヤーの創造性を活かした攻略が可能な作品です。",
    demoLink: "https://example.com/play-demo-3",
    videoId: "yASIUWNZkQI"
  },
  4: {
    title: "ぽいぽいアイランド",
    genre: "3D横スクロールシューティングアクション",
    engine: "Unity",
    concept: "何でも拾って縦横無尽に投げ返すハチャメチャ感が楽しい3D横スクロールシューティングアクションゲーム。",
    features: [
      "多様な投擲システム",
      "ボス戦システム",
      "アイテム収集要素"
    ],
    gameplay: [
      "ココナッツや倒した敵を投げ物として活用可能",
      "ザコ敵を倒した後にボスが出現する段階的な進行",
      "アイテムを集めることで強力な攻撃が可能になるシステム"
    ],
    technologies: [
      "ゲームエンジン: Unity",
      "プログラミング言語: C#"
    ],
    developmentPeriod: "3か月間（チーム制作）",
    summary: "無人島を舞台に、様々なものを投げて戦う独特なアクションゲーム。6歳以上のアクションゲームファンをターゲットとした、爽快感のある作品です。",
    demoLink: "https://example.com/play-demo-4",
    videoId: "dQw4w9WgXcQ"
  },
  5: {
    title: "風雲折紙城",
    genre: "アクション探索",
    engine: "Unity",
    concept: "折り紙忍者を操作し、三つの変化アクションを駆使して城内から脱出を目指す探索アクションゲーム。",
    features: [
      "三つの変化アクション",
      "タイムアタック要素",
      "探索要素"
    ],
    gameplay: [
      "カエル、手裏剣、平面の3つの形態変化による多彩なアクション",
      "お宝収集後のカウントダウンによる緊張感のある脱出",
      "鍵とお宝を集めながら進むステージ構成"
    ],
    technologies: [
      "ゲームエンジン: Unity",
      "プログラミング言語: C#"
    ],
    platform: "WindowsPC",
    developmentPeriod: "3か月間（チーム制作）",
    summary: "忍者と折り紙の要素を組み合わせた独創的な探索アクションゲーム。形態変化による多彩なアクションと時間制限による緊張感が特徴的な作品です。",
    demoLink: "https://example.com/play-demo-5",
    videoId: "jNQXAC9IVRw"
  },
  6: {
    title: "地獄落下",
    genre: "3Dアクション",
    engine: "Unity",
    concept: "キャラクターがひたすら下へ向かって降り続ける3Dアクションゲームです。プレイヤーは障害物を避けながら地獄の最下層に挑戦します。",
    features: [
      "落ちる爽快感"
    ],
    technologies: [
      "ゲームエンジン: Unity",
      "プログラミング言語: C#"
    ],
    developmentPeriod: "3か月間（チーム制作）",
    demoLink: "https://example.com/play-demo-6",
    videoId: "yASIUWNZkQI"
  }
}

export default function GamePage({ params }: GamePageProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const game = gameData[params.id as keyof typeof gameData]

  if (!game) {
    return <div>ゲームが見つかりません</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6">{game.title}</h1>
        
        <div className="aspect-video mb-6">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${game.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="features">特徴</TabsTrigger>
            <TabsTrigger value="gameplay">ゲームプレイ</TabsTrigger>
            <TabsTrigger value="details">詳細情報</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">概要</h2>
            <p><strong>ジャンル:</strong> {game.genre}</p>
            <p><strong>エンジン:</strong> {game.engine}</p>
            {game.targetAudience &&game.targetAudience && <p><strong>ターゲット層:</strong> {game.targetAudience}</p>}
            <p><strong>コンセプト:</strong> {game.concept}</p>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">特徴</h2>
            <ul className="list-disc pl-5">
              {game.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="gameplay" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">ゲームプレイ</h2>
            {game.gameplay && (
              <ul className="list-disc pl-5">
                {game.gameplay.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {game.controls && (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">操作方法</h3>
                <ul className="list-disc pl-5">
                  {game.controls.map((control, index) => (
                    <li key={index}>{control}</li>
                  ))}
                </ul>
              </>
            )}
          </TabsContent>
          <TabsContent value="details" className="mt-4">
            <h2 className="text-xl font-semibold mb-2">詳細情報</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">使用技術</h3>
            <ul className="list-disc pl-5">
              {game.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            {game.developmentPeriod && (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">開発期間</h3>
                <p>{game.developmentPeriod}</p>
              </>
            )}
            {game.reflections && (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">プロジェクトの振り返り</h3>
                <ul className="list-disc pl-5">
                  {game.reflections.map((reflection, index) => (
                    <li key={index}>{reflection}</li>
                  ))}
                </ul>
              </>
            )}
            {game.playPoints && (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">プレイのポイント</h3>
                <ul className="list-disc pl-5">
                  {game.playPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}
            {game.summary && (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">まとめ</h3>
                <p>{game.summary}</p>
              </>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <a
            href={game.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            プレイデモを試す
          </a>
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            戻る
          </a>
        </div>
      </div>
    </div>
  )
}


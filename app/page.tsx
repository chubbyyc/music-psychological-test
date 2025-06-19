"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Music, Play, ArrowLeft, RotateCcw, Heart, Star, Sparkles } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
}

interface Result {
  type: string
  title: string
  description: string
  bands: string[]
  reason: string
  songs: { band: string; song: string }[]
  avatar: string
  color: string
  bgPattern: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "開學第一天，你覺得今天是什麼天氣？",
    options: ["綿綿細雨的陰天", "陽光燦爛的大晴天", "颳風下雨的雨天", "微風徐徐的涼爽天"],
  },
  {
    id: 2,
    question: "走進一間新教室，你會如何選座位？",
    options: ["看看有沒有認識的人一起坐", "坐第一排專心聽課", "哪裡有空位就坐哪，沒有特別偏好", "最後一排或靠窗座位"],
  },
  {
    id: 3,
    question: "一個人走在校園時，你會？",
    options: [
      "耳機不離身，一定打開音樂",
      "靜靜聆聽聽周遭聲音，風吹、鳥鳴、人聲的雜音",
      "邊走邊做白日夢，想像在演自己的 MV",
      "一邊走一邊想等一下要吃什麼",
    ],
  },
  {
    id: 4,
    question: "走著走著，你突然覺得想停下來一下，你會想停在哪",
    options: [
      "羅馬廣場旁的座位，偶爾有風吹樹動",
      "光線灑進總圖三樓的靠窗位置",
      "坐在操場中間，看大家來來去去",
      "想停就停，沒有特別偏好",
    ],
  },
  {
    id: 5,
    question: "以下哪個瞬間最讓你忍不住想聽音樂？",
    options: ["考完期中期末，走出教室時", "獨自在河堤散步時", "午餐後到上課前的小歇片刻", "洗完澡看手機發呆"],
  },
  {
    id: 6,
    question: "你在 IG 最常發哪種類型的限動？",
    options: ["截圖歌詞配一張照片", "迷因、想到什麼發什麼", "精心拍照排版後的日常分享", "幾乎不發，但常看別人發什麼"],
  },
  {
    id: 7,
    question: "朋友向你傾訴感情困擾時，你的反應是？",
    options: [
      "安靜聽完，給對方一點時間消化",
      "分享自己的經歷，希望讓對方有共鳴",
      "一邊聽一邊幫對方罵，無條件支持對方",
      "理性分析整件事的邏輯，不給予意見",
    ],
  },
  {
    id: 8,
    question: "在小組報告中，你通常擔任什麼角色？",
    options: ["負責做簡報，統整架構與美編", "零散但源源不絕的靈感提供者", "上台報告者", "默默貢獻，哪裡有洞補哪裡"],
  },
  {
    id: 9,
    question: "你最受不了學校裡的哪種人？",
    options: [
      "喜歡在討論時插話主導整場氣氛的人",
      "太過熱情，第一次見面就要揪活動的人",
      "躺分但在老師面前又樂於表現自己的人",
      "小劇場一堆、過度敏感的人",
    ],
  },
  {
    id: 10,
    question: "如果要幫你的校園生活用一張圖做為代表，那會是？",
    options: [
      "傍晚的系館走廊，光線斜斜地照進來",
      "深夜的總圖地下室，只剩你在書桌前苦讀",
      "中午時段熱鬧的指南路，跟朋友邊聊天邊排隊",
      "操場隨意坐著發呆，看人走來走去",
    ],
  },
]

const results: Record<string, Result> = {
  A: {
    type: "A",
    title: "深夜播放清單型",
    description:
      "你是一個習慣在安靜中思考的人，喜歡夜晚獨自走回宿舍或窩在房間邊聽歌邊放空。你擅長傾聽、不急著表達，卻總能捕捉生活中細膩的感受。旋律不需複雜，只要一段詞能講中你心裡的情緒，就會讓你反覆播放。推薦你一些能陪你慢慢感受情緒、詞寫細膩的歌。",
    bands: ["甜約翰", "理想混蛋", "Crispy脆樂團", "椅子樂團", "庸俗救星"],
    reason:
      "用簡潔旋律與飽含情感的詞句刻畫內心世界，聲音溫柔卻有力，像是為你量身打造的深夜獨白。適合夜深人靜時戴上耳機，靜靜地與自己對話。",
    songs: [
      { band: "甜約翰", song: "容易厭倦的時刻" },
      { band: "理想混蛋", song: "接住你" },
      { band: "Crispy脆樂團", song: "黑暗的盡頭" },
      { band: "椅子樂團", song: "Aphrodite" },
      { band: "傻子與白痴", song: "象牙舟" },
    ],
    avatar: "🌙",
    color: "from-purple-400 via-indigo-400 to-blue-400",
    bgPattern: "bg-gradient-to-br from-purple-100 to-indigo-100",
  },
  B: {
    type: "B",
    title: "校園走跳播放型",
    description:
      "你走進哪裡，哪裡就開始有節奏。你的步伐、講話語速甚至換衣服的節奏，似乎都跟音樂有默契。你喜歡音樂給你的動能，也會把喜歡的歌一首首丟給朋友分享。你是那種最容易現場跟著唱跳、也最會在生活裡設計氣氛的人。推薦你一些節奏感強、現場感重的歌。",
    bands: ["麋先生", "美秀集團", "怕胖團", "粗大Band", "滅火器"],
    reason:
      "現場感強烈、節奏爽快、hook 一聽就記得，適合你這種喜歡用音樂炒熱空氣、調節日常情緒的節奏人。不管是趕課路上還是朋友聚會，播下去立刻 get in the mood！",
    songs: [
      { band: "麋先生", song: "小朋友" },
      { band: "美秀集團", song: "我要你愛" },
      { band: "怕胖團", song: "流浪王子" },
      { band: "粗大Band", song: "大薯" },
      { band: "滅火器", song: "火山戀曲" },
    ],
    avatar: "🎵",
    color: "from-orange-400 via-red-400 to-pink-400",
    bgPattern: "bg-gradient-to-br from-orange-100 to-pink-100",
  },
  C: {
    type: "C",
    title: "情境對白收集型",
    description:
      "你是個會默默記下生活裡每個微妙畫面的人：斜灑的光、操場的風、對話中的一句話。你總能為自己的心情找到一句剛剛好的歌詞、剛剛好的旋律。音樂對你來說是一種影像輔助的旁白，紀錄著你經過的每一段情緒風景。",
    bands: ["淺堤", "溫室雜草", "DSPS", "庸俗救星", "宇宙人"],
    reason:
      "用旋律講故事，用歌詞描寫生活中的片刻心境。不管是窗邊陽光、夜晚自習、下課前五分鐘，都能找到適合搭配的聲音。適合你這種熱愛在平凡中找詩意的感受型聽眾。",
    songs: [
      { band: "淺堤", song: "禮物" },
      { band: "DSPS", song: "我會不會又睡到下午了" },
      { band: "溫室雜草", song: "How to be a boy" },
      { band: "庸俗救星", song: "窗簾" },
      { band: "宇宙人", song: "浪費一整天" },
    ],
    avatar: "📸",
    color: "from-green-400 via-teal-400 to-cyan-400",
    bgPattern: "bg-gradient-to-br from-green-100 to-teal-100",
  },
  D: {
    type: "D",
    title: "耳朵特調感知型",
    description:
      "你聽音樂的方式與眾不同，對聲音的質地與層次異常敏感。你不一定喜歡跟唱，但你會記得一首歌中的混響、一段合成器鋪陳或某個瞬間的空氣感。音樂對你來說不是娛樂，而是空間、感官與情緒的延伸材料。",
    bands: ["deca joins", "我是機車少女", "恐龍的皮", "落日飛車", "JADE"],
    reason:
      "兼具氣氛感與聲響層次，擅長用低調卻有存在感的編曲創造「聽進去」的感覺。旋律可能不高亢，但耐聽且令人沈靜，適合你在走廊、深夜、獨處時聆聽、進入自己的聲音宇宙",
    songs: [
      { band: "deca joins", song: "海浪" },
      { band: "我是機車少女", song: "Last Summer （月亮惹的禍）" },
      { band: "恐龍的皮", song: "Millions of Years Apart" },
      { band: "落日飛車", song: "Let There Be Light Again" },
      { band: "JADE", song: "I Am Love" },
    ],
    avatar: "🎧",
    color: "from-blue-400 via-cyan-400 to-teal-400",
    bgPattern: "bg-gradient-to-br from-blue-100 to-cyan-100",
  },
  E: {
    type: "E",
    title: "豐沛情緒釋放型",
    description:
      "你的情緒像一首歌，有高有低、有主歌鋪陳，也有副歌爆發。你容易被旋律牽動，也總能在副歌的那一瞬間瞬間破防。你習慣把生活過成一齣戲，音樂是你內心戲的背景音，一段旋律能喚起你整個學期的記憶。",
    bands: ["傷心欲絕", "老王樂隊", "鹿洐人", "康士坦的變化球", "hue"],
    reason:
      "擅長把情緒拉滿，旋律流暢、起伏明確，是為你這種情感共鳴強烈的人量身打造。當你需要一場音樂式的情緒宣洩，他們會是最懂你的存在。",
    songs: [
      { band: "傷心欲絕", song: "月光灑落的地方" },
      { band: "老王樂隊", song: "我還年輕 我還年輕" },
      { band: "鹿洐人", song: "爛笑話" },
      { band: "康士坦的變化球", song: "美好的事可不可以發生在我身上" },
      { band: "hue", song: "河" },
    ],
    avatar: "🎭",
    color: "from-pink-400 via-rose-400 to-red-400",
    bgPattern: "bg-gradient-to-br from-pink-100 to-rose-100",
  },
}

export default function TaiwanBandQuiz() {
  const [currentStep, setCurrentStep] = useState<"start" | "quiz" | "result">("start")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<Result | null>(null)

  const calculateResult = (answers: number[]) => {
    // Simple scoring algorithm based on answer patterns
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 }

    answers.forEach((answer, index) => {
      switch (index) {
        case 0: // Weather question
          if (answer === 0) scores.A += 2
          if (answer === 1) scores.B += 2
          if (answer === 2) scores.E += 2
          if (answer === 3) scores.C += 2
          break
        case 1: // Seating question
          if (answer === 0) scores.B += 1
          if (answer === 1) scores.E += 1
          if (answer === 2) scores.C += 1
          if (answer === 3) scores.A += 2
          break
        case 2: // Walking question
          if (answer === 0) scores.B += 2
          if (answer === 1) scores.D += 2
          if (answer === 2) scores.E += 2
          if (answer === 3) scores.C += 1
          break
        case 3: // Stopping place
          if (answer === 0) scores.C += 2
          if (answer === 1) scores.A += 2
          if (answer === 2) scores.B += 1
          if (answer === 3) scores.D += 1
          break
        case 4: // Music moments
          if (answer === 0) scores.E += 2
          if (answer === 1) scores.A += 2
          if (answer === 2) scores.C += 2
          if (answer === 3) scores.D += 1
          break
        case 5: // IG posts
          if (answer === 0) scores.A += 2
          if (answer === 1) scores.B += 2
          if (answer === 2) scores.C += 2
          if (answer === 3) scores.D += 2
          break
        case 6: // Friend problems
          if (answer === 0) scores.A += 2
          if (answer === 1) scores.C += 1
          if (answer === 2) scores.E += 2
          if (answer === 3) scores.D += 1
          break
        case 7: // Group work
          if (answer === 0) scores.C += 1
          if (answer === 1) scores.E += 1
          if (answer === 2) scores.B += 2
          if (answer === 3) scores.A += 2
          break
        case 8: // Annoying people
          if (answer === 0) scores.A += 1
          if (answer === 1) scores.D += 2
          if (answer === 2) scores.E += 2
          if (answer === 3) scores.C += 1
          break
        case 9: // Campus image
          if (answer === 0) scores.C += 2
          if (answer === 1) scores.A += 2
          if (answer === 2) scores.B += 2
          if (answer === 3) scores.D += 2
          break
      }
    })

    const maxScore = Math.max(...Object.values(scores))
    const resultType = Object.keys(scores).find(
      (key) => scores[key as keyof typeof scores] === maxScore,
    ) as keyof typeof results
    return results[resultType]
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const finalResult = calculateResult(newAnswers)
      setResult(finalResult)
      setCurrentStep("result")
    }
  }

  const resetQuiz = () => {
    setCurrentStep("start")
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const openSpotify = (band: string, song: string) => {
    const query = encodeURIComponent(`${band} ${song}`)
    window.open(`https://open.spotify.com/search/${query}`, "_blank")
  }

  if (currentStep === "start") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 relative overflow-hidden flex items-center justify-center p-4">
        {/* 裝飾性幾何圖形 */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-green-300 rotate-45 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-300 rounded-full opacity-80 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-10 w-24 h-8 bg-blue-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-red-300 rotate-45 opacity-40 animate-spin"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-teal-300 rounded-full opacity-60 animate-bounce delay-700"></div>

        <div className="w-full max-w-md relative z-10">
          <Card className="bg-white shadow-2xl border-4 border-black relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* 彩色邊框 */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400"></div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

            <CardContent className="p-8 text-center relative">
              {/* 裝飾性星星 */}
              <div className="absolute top-4 right-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute top-6 left-6">
                <Star className="w-4 h-4 text-pink-400 animate-spin" />
              </div>

              <div className="mb-6">
                <div className="text-7xl mb-4 animate-bounce">🎵</div>
                <h1 className="text-3xl font-black text-gray-800 mb-3 transform -rotate-1">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    歌荒了嗎？
                  </span>
                </h1>
                <p className="text-gray-700 text-base font-bold leading-relaxed bg-yellow-100 p-3 rounded-2xl border-2 border-yellow-300 transform rotate-1">
                  從你的校園習慣，推薦你合拍的台灣樂團！
                </p>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl border-3 border-dashed border-blue-300">
                <p className="text-sm text-blue-800 font-semibold flex items-center justify-center">
                  <Heart className="w-4 h-4 mr-2 text-red-400" />
                  透過 10 個校園生活問題，找到最適合你的台灣獨立樂團
                  <Heart className="w-4 h-4 ml-2 text-red-400" />
                </p>
              </div>

              <Button
                onClick={() => setCurrentStep("quiz")}
                className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white font-black py-4 rounded-full shadow-lg transform transition hover:scale-105 border-4 border-white text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">🎵 開始測驗 🎵</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 hover:opacity-20 transition-opacity"></div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (currentStep === "quiz") {
    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 relative overflow-hidden flex items-center justify-center p-4">
        {/* 動態裝飾元素 */}
        <div className="absolute top-16 left-8 w-12 h-12 bg-yellow-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-24 right-12 w-8 h-8 bg-green-300 rotate-45 opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 bg-orange-300 rounded-full opacity-70 animate-bounce delay-300"></div>
        <div className="absolute bottom-16 right-20 w-16 h-6 bg-blue-300 rounded-full opacity-40 animate-pulse delay-500"></div>

        <div className="w-full max-w-md relative z-10">
          <Card className="bg-white shadow-2xl border-4 border-black relative overflow-hidden">
            {/* 彩色進度邊框 */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400"></div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

            <CardContent className="p-6 relative">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goBack}
                    disabled={currentQuestion === 0}
                    className="p-2 bg-pink-100 hover:bg-pink-200 rounded-full border-2 border-pink-300"
                  >
                    <ArrowLeft className="w-4 h-4 text-pink-600" />
                  </Button>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm border-2 border-white shadow-lg">
                    {currentQuestion + 1} / {questions.length}
                  </div>
                </div>
                <div className="relative">
                  <Progress value={progress} className="h-4 mb-4 bg-gray-200 border-2 border-gray-300" />
                  <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 rounded-full opacity-20"></div>
                </div>
              </div>

              <div className="mb-8">
                <div className="bg-gradient-to-r from-yellow-100 to-pink-100 p-4 rounded-2xl border-3 border-dashed border-yellow-300 mb-6">
                  <h2 className="text-lg font-bold text-gray-800 leading-relaxed text-center">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left justify-start p-4 h-auto text-sm hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 border-3 border-gray-300 hover:border-pink-400 transition-all transform hover:scale-102 hover:-rotate-1 bg-white shadow-md"
                    >
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold mr-3 w-8 h-8 rounded-full flex items-center justify-center text-xs border-2 border-white shadow-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-medium">{option}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (currentStep === "result" && result) {
    return (
      <div className={`min-h-screen ${result.bgPattern} relative overflow-hidden p-4`}>
        {/* 結果頁面裝飾 */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full opacity-60 animate-bounce border-4 border-pink-300"></div>
        <div className="absolute top-20 right-16 w-12 h-12 bg-yellow-300 rotate-45 opacity-70 animate-pulse border-2 border-yellow-500"></div>
        <div className="absolute bottom-20 left-20 w-20 h-8 bg-green-300 rounded-full opacity-50 animate-bounce delay-300 border-2 border-green-500"></div>
        <div className="absolute bottom-32 right-12 w-14 h-14 bg-blue-300 rounded-full opacity-60 animate-pulse delay-500 border-3 border-blue-500"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <Card className="bg-white shadow-2xl border-4 border-black mb-4 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* 彩色邊框 */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400"></div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

            <CardContent className="p-6 relative">
              {/* 裝飾性元素 */}
              <div className="absolute top-6 right-6">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute top-8 left-6">
                <Star className="w-6 h-6 text-pink-400 animate-spin" />
              </div>

              <div className="text-center mb-8">
                <div
                  className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center text-6xl border-4 border-white shadow-2xl animate-bounce`}
                >
                  {result.avatar}
                </div>
                <h1 className="text-3xl font-black text-gray-800 mb-4 transform -rotate-1">
                  <span className={`bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                    {result.title}
                  </span>
                </h1>
                <div
                  className={`inline-block bg-gradient-to-r ${result.color} text-white px-6 py-3 rounded-full text-lg font-black border-4 border-white shadow-lg transform rotate-2`}
                >
                  類型 {result.type}
                </div>
              </div>

              <div className="mb-8">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-2xl border-3 border-dashed border-pink-300 mb-4">
                  <h3 className="font-black text-gray-800 mb-3 text-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    人格描述
                    <Heart className="w-5 h-5 ml-2 text-red-400" />
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed bg-white p-4 rounded-2xl border-2 border-gray-200 shadow-sm">
                  {result.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-2xl border-3 border-dashed border-yellow-300 mb-4">
                  <h3 className="font-black text-gray-800 mb-3 text-lg flex items-center justify-center">
                    <Music className="w-5 h-5 mr-2 text-orange-500" />
                    推薦樂團
                    <Music className="w-5 h-5 ml-2 text-orange-500" />
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  {result.bands.map((band, index) => (
                    <span
                      key={index}
                      className={`bg-gradient-to-r ${result.color} text-white px-4 py-2 rounded-full text-sm font-bold border-2 border-white shadow-lg transform hover:scale-110 transition-transform cursor-pointer`}
                    >
                      {band}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed bg-white p-4 rounded-2xl border-2 border-gray-200 shadow-sm">
                  {result.reason}
                </p>
              </div>

              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-2xl border-3 border-dashed border-green-300 mb-4">
                  <h3 className="font-black text-gray-800 mb-3 text-lg flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2 text-green-500" />
                    推薦歌曲
                    <Play className="w-5 h-5 ml-2 text-green-500" />
                  </h3>
                </div>
                <div className="space-y-3">
                  {result.songs.map((song, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border-3 border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div>
                        <div className="font-bold text-gray-800 text-sm">{song.band}</div>
                        <div className="text-gray-600 text-xs">{song.song}</div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => openSpotify(song.band, song.song)}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full text-xs font-bold border-2 border-white shadow-lg transform hover:scale-110 transition-transform"
                      >
                        <Play className="w-3 h-3 mr-1" />
                        播放
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={resetQuiz}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  重新測驗
                </Button>
                <Button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "台灣樂團推薦測驗",
                        text: `我是${result.title}！快來測測你適合哪種台灣樂團`,
                        url: window.location.href,
                      })
                    }
                  }}
                  className={`flex-1 bg-gradient-to-r ${result.color} text-white font-bold py-3 rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  分享結果
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}

// 測驗數據
const questions = [
  {
    id: 1,
    question: "開學第一天，你覺得今天是什麼天氣？",
    options: ["綿綿細雨的陰天", "陽光燦爛的大晴天", "颳風下雨的雨天", "微風徐徐的涼爽天"],
    // 請在這裡放入你的音樂連結
    musicUrl: "YOUR_QUESTION_1_MUSIC_URL.mp3",
  },
  {
    id: 2,
    question: "走進一間新教室，你會如何選座位？",
    options: ["看看有沒有認識的人一起坐", "坐第一排專心聽課", "哪裡有空位就坐哪，沒有特別偏好", "最後一排或靠窗座位"],
    musicUrl: "YOUR_QUESTION_2_MUSIC_URL.mp3",
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
    musicUrl: "YOUR_QUESTION_3_MUSIC_URL.mp3",
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
    musicUrl: "YOUR_QUESTION_4_MUSIC_URL.mp3",
  },
  {
    id: 5,
    question: "以下哪個瞬間最讓你忍不住想聽音樂？",
    options: ["考完期中期末，走出教室時", "獨自在河堤散步時", "午餐後到上課前的小歇片刻", "洗完澡看手機發呆"],
    musicUrl: "YOUR_QUESTION_5_MUSIC_URL.mp3",
  },
  {
    id: 6,
    question: "你在 IG 最常發哪種類型的限動？",
    options: ["截圖歌詞配一張照片", "迷因、想到什麼發什麼", "精心拍照排版後的日常分享", "幾乎不發，但常看別人發什麼"],
    musicUrl: "YOUR_QUESTION_6_MUSIC_URL.mp3",
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
    musicUrl: "YOUR_QUESTION_7_MUSIC_URL.mp3",
  },
  {
    id: 8,
    question: "在小組報告中，你通常擔任什麼角色？",
    options: ["負責做簡報，統整架構與美編", "零散但源源不絕的靈感提供者", "上台報告者", "默默貢獻，哪裡有洞補哪裡"],
    musicUrl: "YOUR_QUESTION_8_MUSIC_URL.mp3",
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
    musicUrl: "YOUR_QUESTION_9_MUSIC_URL.mp3",
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
    musicUrl: "YOUR_QUESTION_10_MUSIC_URL.mp3",
  },
]

const results = {
  A: {
    type: "A",
    title: "深夜播放清單型",
    description:
      "你是一個習慣在安靜中思考的人，喜歡夜晚獨自走回宿舍或窩在房間邊聽歌邊放空。你擅長傾聽、不急著表達，卻總能捕捉生活中細膩的感受。旋律不需複雜，只要一段詞能講中你心裡的情緒，就會讓你反覆播放。推薦你一些能陪你慢慢感受情緒、詞寫細膩的歌。",
    bands: ["甜約翰", "理想混蛋", "Crispy脆樂團", "椅子樂團", "庸俗救星"],
    reason:
      "用簡潔旋律與飽含情感的詞句刻畫內心世界，聲音溫柔卻有力，像是為你量身打造的深夜獨白。適合夜深人靜時戴上耳機，靜靜地與自己對話。",
    songs: [
      { band: "甜約翰", song: "容易厭倦的時刻", albumCover: "容易厭倦的時刻.jpg" },
      { band: "理想混蛋", song: "接住你", albumCover: "接住你.jpg" },
      { band: "Crispy脆樂團", song: "黑暗的盡頭", albumCover: "黑暗的盡頭.jpg" },
      { band: "椅子樂團", song: "Aphrodite", albumCover: "Aphrodite.jpg" },
      { band: "傻子與白痴", song: "象牙舟", albumCover: "象牙舟.jpg" },
    ],
    // 請替換為你的插畫圖片
    avatar: "a.png",
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
      { band: "麋先生", song: "小朋友", albumCover: "小朋友.png" },
      { band: "美秀集團", song: "我要你愛", albumCover: "我要你愛.png" },
      { band: "怕胖團", song: "流浪王子", albumCover: "流浪王子.png" },
      { band: "粗大Band", song: "大薯", albumCover: "大薯.png" },
      { band: "滅火器", song: "火山戀曲", albumCover: "火山戀曲.png" },
    ],
    avatar: "b.png",
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
      { band: "淺堤", song: "禮物", albumCover: "禮物.png" },
      { band: "DSPS", song: "我會不會又睡到下午了", albumCover: "我會不會又睡到下午了.png" },
      { band: "溫室雜草", song: "How to be a boy", albumCover: "How to be a boy.png" },
      { band: "庸俗救星", song: "窗簾", albumCover: "窗簾.png" },
      { band: "宇宙人", song: "浪費一整天", albumCover: "浪費一整天.png" },
    ],
    avatar: "c.png",
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
      { band: "deca joins", song: "海浪", albumCover: "海浪.png" },
      { band: "我是機車少女", song: "Last Summer （月亮惹的禍）", albumCover: "Last Summer （月亮惹的禍）.png" },
      { band: "恐龍的皮", song: "Millions of Years Apart", albumCover: "Millions of Years Apart.png" },
      { band: "落日飛車", song: "Let There Be Light Again", albumCover: "Let There Be Light Again.png" },
      { band: "JADE", song: "I Am Love", albumCover: "I Am Love.png" },
    ],
    avatar: "d.png",
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
      { band: "傷心欲絕", song: "月光灑落的地方", albumCover: "月光灑落的地方.png" },
      { band: "老王樂隊", song: "我還年輕 我還年輕", albumCover: "我還年輕 我還年輕.png" },
      { band: "鹿洐人", song: "爛笑話", albumCover: "album-cover-23.png" },
      { band: "康士坦的變化球", song: "美好的事可不可以發生在我身上", albumCover: "美好的事可不可以發生在我身上.png" },
      { band: "hue", song: "河", albumCover: "河.png" },
    ],
    avatar: "e.png",
  },
}

// 全域變數
let currentQuestion = 0
let answers = []
let currentResult = null
let isMuted = false

// DOM 元素
const startPage = document.getElementById("start-page")
const quizPage = document.getElementById("quiz-page")
const resultPage = document.getElementById("result-page")
const startBtn = document.getElementById("start-btn")
const backBtn = document.getElementById("back-btn")
const restartBtn = document.getElementById("restart-btn")
const shareBtn = document.getElementById("share-btn")
const muteBtn = document.getElementById("mute-btn")

// 音頻元素
const startAudio = document.getElementById("start-audio")
const questionAudio = document.getElementById("question-audio")
const resultAudio = document.getElementById("result-audio")

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  startBtn.addEventListener("click", startQuiz)
  backBtn.addEventListener("click", goBack)
  restartBtn.addEventListener("click", resetQuiz)
  shareBtn.addEventListener("click", shareResult)
  muteBtn.addEventListener("click", toggleMute)

  // 設置音頻自動播放
  setupAudioAutoplay()
})

// 設置音頻自動播放
function setupAudioAutoplay() {
  // 為了符合瀏覽器政策，需要用戶互動後才能自動播放
  document.addEventListener("click", enableAutoplay, { once: true })
}

function enableAutoplay() {
  startAudio.muted = false
  questionAudio.muted = false
  resultAudio.muted = false
}

// 音樂控制
function toggleMute() {
  isMuted = !isMuted
  const muteIcon = document.getElementById("mute-icon")

  if (isMuted) {
    startAudio.muted = true
    questionAudio.muted = true
    resultAudio.muted = true
    muteIcon.textContent = "🔇"
    muteBtn.classList.add("muted")
  } else {
    startAudio.muted = false
    questionAudio.muted = false
    resultAudio.muted = false
    muteIcon.textContent = "🔊"
    muteBtn.classList.remove("muted")
  }
}

function stopAllAudio() {
  startAudio.pause()
  questionAudio.pause()
  resultAudio.pause()
}

function playAudio(audioElement) {
  if (!isMuted) {
    audioElement.currentTime = 0
    audioElement.play().catch((e) => console.log("Audio play failed:", e))
  }
}

// 開始測驗
function startQuiz() {
  stopAllAudio()
  showPage("quiz")
  loadQuestion()
}

// 載入問題
function loadQuestion() {
  const question = questions[currentQuestion]

  // 更新問題計數器
  document.getElementById("current-q").textContent = currentQuestion + 1
  document.getElementById("total-q").textContent = questions.length
  document.getElementById("question-num").textContent = currentQuestion + 1

  // 更新進度條
  const progress = ((currentQuestion + 1) / questions.length) * 100
  document.getElementById("progress-fill").style.width = progress + "%"

  // 載入並播放音樂
  const audioSource = document.getElementById("audio-source")
  audioSource.src = question.musicUrl
  questionAudio.load()
  playAudio(questionAudio)

  // 更新問題文字
  document.getElementById("question-text").textContent = question.question

  // 生成選項
  const optionsContainer = document.getElementById("options-container")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const optionBtn = document.createElement("button")
    optionBtn.className = "option-btn"
    optionBtn.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `
    optionBtn.addEventListener("click", () => selectAnswer(index))
    optionsContainer.appendChild(optionBtn)
  })

  // 更新返回按鈕狀態
  backBtn.disabled = currentQuestion === 0
}

// 選擇答案
function selectAnswer(answerIndex) {
  answers.push(answerIndex)

  if (currentQuestion < questions.length - 1) {
    currentQuestion++
    loadQuestion()
  } else {
    calculateResult()
    showResult()
  }
}

// 返回上一題
function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--
    answers.pop()
    loadQuestion()
  }
}

// 計算結果
function calculateResult() {
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
  const resultType = Object.keys(scores).find((key) => scores[key] === maxScore)
  currentResult = results[resultType]
}

// 顯示結果
function showResult() {
  stopAllAudio()
  showPage("result")
  playAudio(resultAudio)

  // 更新結果插畫
  document.getElementById("result-avatar").src = `images/${currentResult.avatar}`

  // 更新結果標題和類型
  document.getElementById("result-title").textContent = currentResult.title
  document.querySelector(".result-shadow").textContent = currentResult.title
  document.getElementById("result-type").textContent = `類型 ${currentResult.type}`

  // 更新描述
  document.getElementById("result-description").textContent = currentResult.description

  // 更新樂團標籤
  const bandsContainer = document.getElementById("bands-container")
  bandsContainer.innerHTML = ""
  currentResult.bands.forEach((band) => {
    const bandTag = document.createElement("span")
    bandTag.className = "band-tag"
    bandTag.textContent = band
    bandsContainer.appendChild(bandTag)
  })

  // 更新樂團推薦原因
  document.getElementById("bands-reason").textContent = currentResult.reason

  // 更新歌曲列表
  const songsContainer = document.getElementById("songs-container")
  songsContainer.innerHTML = ""
  currentResult.songs.forEach((song) => {
    const songItem = document.createElement("div")
    songItem.className = "song-item"
    songItem.innerHTML = `
            <div class="song-info">
                <img src="images/${song.albumCover}" alt="${song.song} 專輯封面" class="album-cover">
                <div class="song-details">
                    <div class="song-band">${song.band}</div>
                    <div class="song-title">${song.song}</div>
                </div>
            </div>
            <button class="spotify-btn" onclick="openSpotify('${song.band}', '${song.song}')">
                播放
            </button>
        `
    songsContainer.appendChild(songItem)
  })
}

// 開啟 Spotify
function openSpotify(band, song) {
  const query = encodeURIComponent(`${band} ${song}`)
  window.open(`https://open.spotify.com/search/${query}`, "_blank")
}

// 重新開始測驗
function resetQuiz() {
  currentQuestion = 0
  answers = []
  currentResult = null
  stopAllAudio()
  showPage("start")
  playAudio(startAudio)
}

// 分享結果
function shareResult() {
  if (navigator.share) {
    navigator.share({
      title: "台灣樂團推薦測驗",
      text: `我是${currentResult.title}！快來測測你適合哪種台灣樂團`,
      url: window.location.href,
    })
  } else {
    // 備用分享方式
    const shareText = `我是${currentResult.title}！快來測測你適合哪種台灣樂團 ${window.location.href}`
    navigator.clipboard.writeText(shareText).then(() => {
      alert("分享連結已複製到剪貼簿！")
    })
  }
}

// 頁面切換
function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })
  document.getElementById(`${pageName}-page`).classList.add("active")
}

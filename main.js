// main.js

// 1. 把所有題目放進一個陣列
const quizData = [
  {
    question: "走進一間新教室，你會如何選座位？",
    options: [
      "看看有沒有認識的人一起坐",
      "坐第一排專心聽課",
      "哪裡有空位就坐哪，沒有特別偏好",
      "最後一排或靠窗座位"
    ]
  },
  {
    question: "一個人走在校園時，你會？",
    options: [
      "耳機不離身，一定打開音樂",
      "靜靜聆聽周遭聲音，風吹、鳥鳴、人聲的雜音",
      "邊走邊做白日夢，想像在演自己的 MV",
      "一邊走一邊想等一下要吃什麼"
    ]
  },
  {
    question: "走著走著，你突然覺得想停下來一下，你會想停在哪？",
    options: [
      "羅馬廣場旁的座位，偶爾有風吹樹動",
      "光線灑進總圖三樓的靠窗位置",
      "坐在操場中間，看大家來來去去",
      "想停就停，沒有特別偏好"
    ]
  },
  {
    question: "以下哪個瞬間最讓你忍不住想聽音樂？",
    options: [
      "考完期中期末，走出教室時",
      "獨自在河堤散步時",
      "午餐後到上課前的小歇片刻",
      "洗完澡看手機發呆"
    ]
  },
  {
    question: "你在 IG 最常發哪種類型的限動？",
    options: [
      "截圖歌詞配一張照片",
      "迷因、想到什麼發什麼",
      "精心拍照排版後的日常分享",
      "幾乎不發，但常看別人發什麼"
    ]
  },
  {
    question: "朋友向你傾訴感情困擾時，你的反應是？",
    options: [
      "安靜聽完，給對方一點時間消化",
      "分享自己的經歷，希望讓對方有共鳴",
      "一邊聽一邊幫對方罵，無條件支持對方",
      "理性分析整件事的邏輯，不給予意見"
    ]
  },
  {
    question: "在小組報告中，你通常擔任什麼角色？",
    options: [
      "負責做簡報，統整架構與美編",
      "零散但源源不絕的靈感提供者",
      "上台報告者",
      "默默貢獻，哪裡有洞補哪裡"
    ]
  },
  {
    question: "你最受不了學校裡的哪種人？",
    options: [
      "喜歡在討論時插話主導整場氣氛的人",
      "太過熱情，第一次見面就要揪活動的人",
      "躺分但在老師面前又樂於表現自己的人",
      "小劇場一堆、過度敏感的人"
    ]
  },
  {
    question: "如果要幫你的校園生活用一張圖做為代表，那會是？",
    options: [
      "傍晚的系館走廊，光線斜斜地照進來",
      "深夜的總圖地下室，只剩你在書桌前苦讀",
      "中午時段熱鬧的指南路，跟朋友邊聊天邊排隊",
      "操場隨意坐著發呆，看人走來走去"
    ]
  }
];

// 2. 渲染題目的 function
let currentIndex = 0;
const introCard    = document.querySelector('.intro-card');
const questionCard = document.querySelector('.question-card');
const qHead        = questionCard.querySelector('.question-head');
const optsList     = questionCard.querySelector('.options');

function showQuestion(index) {
  const item = quizData[index];
  qHead.textContent = `Q${index+1}. ${item.question}`;
  optsList.innerHTML = '';
  item.options.forEach(opt => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => {
      // 這裡可以處理答案 (例如儲存回答)，然後載入下一題
      currentIndex++;
      if (currentIndex < quizData.length) {
        showQuestion(currentIndex);
      } else {
        alert('測驗結束！');
        // 或者跳到結果頁
      }
    });
    li.appendChild(btn);
    optsList.appendChild(li);
  });
}

// 3. 綁開始按鈕
document.querySelector('.start-btn').addEventListener('click', () => {
  introCard.style.display    = 'none';
  questionCard.style.display = 'block';
  showQuestion(0);
});

const practiceTemplates = {
  安定: {
    緊: {
      prepare: "坐姿或跪坐，雙腳貼地，雙手放腿上，讓脊椎自然延伸。",
      breathing: "吸氣 4 拍、停 2 拍、吐氣 6 拍，重複直到肩膀下沉。",
      observe: "把注意放在肋骨的開合，感受心率慢慢往下。",
      closing: "最後三次深呼吸，輕揉胸口，告訴自己已經足夠安穩。",
      caution: "若感到暈眩，改為鼻吸口吐且縮短拍數。"
    },
    疲憊: {
      prepare: "躺下或靠牆坐，支撐好頭頸，準備薄毯。",
      breathing: "鼻吸鼻吐，吸氣 3 拍、吐氣 5 拍，吐氣比吸氣更長。",
      observe: "聽自己的呼吸聲，讓下腹微微起伏，避免聳肩。",
      closing: "伸展手指腳趾，再緩慢坐起，帶著柔和目光看向前方。",
      caution: "若出現頭暈，請轉為側躺並放慢呼吸。"
    },
    心浮: {
      prepare: "先寫下心中最吵的三件事，放在身旁。",
      breathing: "吸氣 4 拍、吐氣 4 拍，節奏穩定如同步行。",
      observe: "吸氣時感受空氣經過鼻翼，吐氣時感受喉嚨微微放鬆。",
      closing: "把手心貼在胸口，說聲謝謝，然後把紙折好收起。",
      caution: "若思緒湧現，回到呼吸聲，不必壓抑。"
    },
    情緒多: {
      prepare: "找一個靠背，腳掌貼地，準備一張空白紙與筆。",
      breathing: "吸氣 4 拍、停 2 拍、吐氣 6 拍，吐氣時輕聲哈氣。",
      observe: "注意胸腔與腹部的膨脹，允許情緒在呼吸間流動。",
      closing: "在紙上寫下當前感受的顏色或形容詞，折好收起。",
      caution: "若情緒強烈，時間縮短至 3 分鐘並保持睜眼。"
    },
    頭腦過載: {
      prepare: "站起來，雙腳與髖同寬，膝蓋微彎，深呼吸三次。",
      breathing: "方形呼吸：吸 4、停 4、吐 4、停 4，視線柔焦。",
      observe: "每次吐氣時，想像多餘的訊息從腳底流出。",
      closing: "用手掌輕敲頭頂與肩胛，喚醒身體的界線感。",
      caution: "若停留不適，將停留秒數改為 2 拍即可。"
    }
  },
  提神: {
    疲憊: {
      prepare: "站姿或坐姿挺直，打開窗戶換氣。",
      breathing: "三段吸氣（鼻-鼻-鼻）再長吐，重複 6 次。",
      observe: "吸氣時抬頭、吐氣時下巴微收，讓脖頸放鬆。",
      closing: "伸懶腰並轉動肩膀，確認精神已微微提起。",
      caution: "避免過度用力吸氣，保持平穩。"
    },
    心浮: {
      prepare: "找到可以行走的空間，腳步放慢。",
      breathing: "步伐配合呼吸：兩步吸、兩步吐，節奏一致。",
      observe: "注意腳掌踩地的溫度與壓力變化，讓心跟上腳步。",
      closing: "停下來做一次深呼吸，確認視線變得清晰。",
      caution: "若感到喘，步伐變小但保持一致。"
    }
  },
  放鬆: {
    緊: {
      prepare: "靠牆站立，後腦勺輕貼牆面，感受支撐。",
      breathing: "吐氣帶聲音：吸 4 吐 6，吐氣時讓肩頸往下沉。",
      observe: "注意肩胛骨逐漸貼近牆面，胸腔柔軟。",
      closing: "雙手掃過肩膀到手指，像撫平皺褶。",
      caution: "若肩頸疼痛，改為坐姿並用枕頭支撐。"
    },
    情緒多: {
      prepare: "點一盞小燈，光線柔和，坐在安靜角落。",
      breathing: "4-7-8 呼吸：吸 4、停 7、吐 8，吐氣細長。",
      observe: "吐氣時感受胸口鬆開，讓情緒有出口。",
      closing: "在心中說：我允許自己慢下來，然後輕閉雙眼。",
      caution: "若暈眩，縮短停留時間至 3-4 拍。"
    }
  },
  專注: {
    頭腦過載: {
      prepare: "清理桌面，只留筆記本與一杯水，設定 10 分鐘計時。",
      breathing: "鼻吸口吐，吸 4 吐 6，吐氣時肩膀往後下。",
      observe: "把注意力放在鼻翼與上唇的氣流，維持穩定節奏。",
      closing: "寫下此刻最重要的一件事，開始行動前再呼吸一次。",
      caution: "若思緒跳躍，輕聲計數呼吸 1 到 10。"
    },
    心浮: {
      prepare: "找一張椅子坐直，腳掌貼地，手心向下放在大腿。",
      breathing: "等長呼吸：吸 5 吐 5，保持肚臍微微收。",
      observe: "感受坐骨穩穩著地，眼神看向固定點。",
      closing: "確認背部與頸部放鬆，再開始手邊的任務。",
      caution: "若緊張上升，改成吸 4 吐 6 以延長吐氣。"
    }
  },
  睡前: {
    緊: {
      prepare: "調暗燈光，躺下雙膝彎曲，腳掌踩地。",
      breathing: "鼻吸鼻吐，吸 4 吐 6，配合下腹起伏。",
      observe: "吸氣時肋骨打開，吐氣時肩膀貼向床面。",
      closing: "雙手交疊放在心口，告訴自己：今晚可以好好休息。",
      caution: "若有打嗝或不適，改為吸 3 吐 5。"
    },
    情緒多: {
      prepare: "在床邊點一盞暖光燈，準備紙筆。",
      breathing: "吸 4、停 2、吐 8，吐氣細長，聲音輕。",
      observe: "吐氣時想像把白天的波動放到紙上。",
      closing: "寫下三件謝謝自己的事，再把紙折好。",
      caution: "若情緒上升，先改成 3 分鐘，保持睜眼。"
    }
  }
};

const solarTerms = [
  {
    name: "立春",
    range: "2月上旬",
    body: "肝木舒展，筋膜需要伸展感",
    emotion: "心悸易急，渴望展開",
    rhythm: "早睡早起，晨間 10 分鐘伸展",
    practice: "3 分鐘肋間開展呼吸：吸氣撐開側腰，吐氣放鬆肩膀。",
    duration: "3-5",
    signalsBody: ["早醒或易抽筋", "肩頸僵硬", "右側身體緊"],
    signalsHeart: ["情緒忽高忽低", "急著安排計畫", "對外界敏感"],
    practiceShort: "5 分鐘側腰呼吸：坐姿，雙手抱肋骨，吸氣撐開，吐氣收回。",
    practiceLong: "12 分鐘緩慢拜日：每個吸吐配合手臂上舉與前屈，保持呼吸均勻。",
    reminders: ["不用一次展開所有計畫", "身體緊時先做伸展再冥想"],
    card: "立春｜讓身體先舒展，計畫再慢慢生長。"
  },
  {
    name: "雨水",
    range: "2月下旬",
    body: "脾胃轉暖，消化需要穩定",
    emotion: "心情易潮濕，內在需要曬太陽",
    rhythm: "中午曬光 10 分鐘，晚間早睡",
    practice: "5 分鐘腹式呼吸：吸氣肚皮鼓起，吐氣收回，讓消化火穩定。",
    duration: "5-10",
    signalsBody: ["胃口不定", "手腳冰涼", "晨起嘴苦"],
    signalsHeart: ["情緒容易悶", "想要窩在室內", "思緒黏滯"],
    practiceShort: "5 分鐘腹部熱敷 + 呼吸，促進暖流。",
    practiceLong: "15 分鐘陰瑜珈蝴蝶式搭配腹式呼吸。",
    reminders: ["熱飲少甜，保持溫潤", "做事留白，避免過度排程"],
    card: "雨水｜在溫度回升中，讓消化火穩穩亮起。"
  },
  {
    name: "驚蟄",
    range: "3月上旬",
    body: "肝膽醒來，肩頸易緊",
    emotion: "情緒易爆發，需要出口",
    rhythm: "午後走動 15 分鐘，拉長肩頸",
    practice: "3 分鐘叩齒吐氣：舌頂上顎，叩齒 24 下後吐長氣。",
    duration: "3-5",
    signalsBody: ["肩頸緊繃", "睡眠片段", "胸悶"],
    signalsHeart: ["易怒", "期待轉換", "對聲音敏感"],
    practiceShort: "5 分鐘肩頸滾動 + 長吐氣。",
    practiceLong: "10 分鐘貓牛式配合呼吸，緩慢帶動脊椎。",
    reminders: ["允許自己伸展打哈欠", "避免咖啡過量"],
    card: "驚蟄｜讓壓力像雷聲散開，肩頸跟著放鬆。"
  },
  {
    name: "春分",
    range: "3月下旬",
    body: "肝脾平衡，循環需要調和",
    emotion: "心緒搖擺，尋找中心",
    rhythm: "中午 10 分鐘靜坐，晚間輕走",
    practice: "5 分鐘方形呼吸，讓內在回到中線。",
    duration: "5-10",
    signalsBody: ["血壓波動", "眼睛乾澀", "手腳麻"],
    signalsHeart: ["做決定猶豫", "內心分岔", "想要停一下"],
    practiceShort: "5 分鐘方形呼吸配合手心向下安放。",
    practiceLong: "12 分鐘緩慢站立冥想，觀察重心在足弓。",
    reminders: ["先穩定中線再談效率", "保持水分"],
    card: "春分｜左右拉扯時，先找到腳下的中心。"
  },
  {
    name: "清明",
    range: "4月上旬",
    body: "肺與肝協作，排濁需要通暢",
    emotion: "思念與清明並存，心需被看見",
    rhythm: "晨間開窗換氣，黃昏走路 10 分鐘",
    practice: "3 分鐘鼻吸口吐，吐氣想像霧氣散開。",
    duration: "3-5",
    signalsBody: ["鼻塞或喉癢", "眼睛易酸", "胸悶"],
    signalsHeart: ["想起過往的人", "情緒低潮", "需要有人聽"],
    practiceShort: "5 分鐘胸肋開展 + 輕柔敲擊胸骨。",
    practiceLong: "10 分鐘行禪，步伐配合呼吸，感受鼻翼清透。",
    reminders: ["說話放慢，留白給呼吸", "避免熬夜"] ,
    card: "清明｜讓霧氣散開，留下被看見的心。"
  },
  {
    name: "穀雨",
    range: "4月下旬",
    body: "脾胃吸收，肌肉需要暖流",
    emotion: "情緒轉暖但仍敏感",
    rhythm: "餐後散步 15 分鐘，減少冰冷食物",
    practice: "5 分鐘腹式呼吸加上雙手搓熱覆腹。",
    duration: "5-10",
    signalsBody: ["腹脹", "四肢倦", "舌苔厚"],
    signalsHeart: ["情緒想靠近人", "容易分心", "想要穩定節奏"],
    practiceShort: "8 分鐘腹部按摩配合呼吸。",
    practiceLong: "12 分鐘陰瑜珈嬰兒式到斯芬克斯式緩慢切換。",
    reminders: ["避免一次吃太多", "保持溫熱飲品"],
    card: "穀雨｜讓消化火慢慢點亮，心也跟著暖起來。"
  },
  {
    name: "立夏",
    range: "5月上旬",
    body: "心火漸升，循環加速",
    emotion: "喜悅與躁動交錯",
    rhythm: "午后小憩 20 分鐘，晚間提早收心",
    practice: "3 分鐘吐納：吸 4 吐 8，吐氣帶聲音，降心火。",
    duration: "3-5",
    signalsBody: ["心跳偏快", "手心熱", "口乾"],
    signalsHeart: ["開心但坐不住", "容易衝動", "想做很多事"],
    practiceShort: "5 分鐘坐姿前彎配合長吐氣。",
    practiceLong: "10 分鐘心臟區伸展，搭配 4-7-8 呼吸。",
    reminders: ["避免重口味與熬夜", "午後喝溫開水"],
    card: "立夏｜把心火放輕，喜悅會更久。"
  },
  {
    name: "小滿",
    range: "5月下旬",
    body: "胃納漸滿，濕氣易累積",
    emotion: "心中有期待，需要節奏感",
    rhythm: "早上醒來喝溫水，下午拉伸 8 分鐘",
    practice: "5 分鐘側臥腹式呼吸，幫助脾胃運化。",
    duration: "5-10",
    signalsBody: ["胃口大開", "容易嗜睡", "腿部沉重"],
    signalsHeart: ["期待放假", "容易分心", "情緒溫和但懶散"],
    practiceShort: "6 分鐘站立側彎，配合手肘開展。",
    practiceLong: "12 分鐘動態貓牛，保持呼吸流暢。",
    reminders: ["少量多餐", "避免晚間過飽"],
    card: "小滿｜留下適量空間，身心都有餘裕。"
  },
  {
    name: "芒種",
    range: "6月上旬",
    body: "脾胃濕熱，肌肉易黏滯",
    emotion: "焦躁與忙碌並行",
    rhythm: "下午溫和流汗 15 分鐘，睡前伸展",
    practice: "5 分鐘鼻吸口吐，吐氣帶聲，讓熱氣散掉。",
    duration: "5-10",
    signalsBody: ["胃悶", "身體沉重", "汗多"],
    signalsHeart: ["待辦多", "情緒急", "想快點完成"],
    practiceShort: "8 分鐘扭轉伸展，幫助排氣。",
    practiceLong: "15 分鐘陰瑜珈側臥開胸，配合慢呼吸。",
    reminders: ["避免冰飲", "保持輕食"],
    card: "芒種｜讓熱氣有出口，忙碌也能慢下來。"
  },
  {
    name: "夏至",
    range: "6月下旬",
    body: "心火最盛，睡眠需要呵護",
    emotion: "喜悅、疲倦交替，容易波動",
    rhythm: "午後小睡 15 分鐘，夜間提早放屏幕",
    practice: "3 分鐘吐氣延長：吸 4 吐 8，搭配肩膀下沉。",
    duration: "3-5",
    signalsBody: ["入睡慢", "胸悶", "口破"],
    signalsHeart: ["情緒易爆", "開心後虛掉", "渴望安靜"],
    practiceShort: "5 分鐘胸骨敲擊 + 長吐氣。",
    practiceLong: "10 分鐘雙腿靠牆，觀察心跳慢下來。",
    reminders: ["少量咖啡因", "晚餐清爽"],
    card: "夏至｜在最盛的陽光裡，給心一個陰影處。"
  }
];

const libraryItems = [
  {
    title: "方形呼吸基礎",
    type: "呼吸",
    duration: "5 分鐘",
    difficulty: "入門",
    context: "心浮或會議前的安定",
    caution: "孕期請將停留拍數縮短。",
    tags: ["安定", "專注"]
  },
  {
    title: "地板身體掃描",
    type: "身體掃描",
    duration: "12 分鐘",
    difficulty: "入門",
    context: "睡前放鬆或午休重啟",
    caution: "腰部不適者可墊枕。",
    tags: ["放鬆", "睡前"]
  },
  {
    title: "慈心短禱",
    type: "慈心",
    duration: "8 分鐘",
    difficulty: "中階",
    context: "情緒波動或想練習善意時",
    caution: "若情緒強烈，可改成對自己說話。",
    tags: ["情緒", "善意"]
  },
  {
    title: "單點專注呼吸",
    type: "專注",
    duration: "10 分鐘",
    difficulty: "入門",
    context: "工作啟動前或腦袋散亂時",
    caution: "若頭暈，改為眼睛微張。",
    tags: ["專注", "工作"]
  },
  {
    title: "睡前溫柔呼吸",
    type: "睡前",
    duration: "6 分鐘",
    difficulty: "入門",
    context: "睡前過度思考、翻覆難眠",
    caution: "若有呼吸不適請諮詢醫師。",
    tags: ["睡前", "安定"]
  }
];

const writings = [
  {
    title: "春分：左右搖擺時的穩定課",
    category: "節氣筆記",
    summary: "把腳掌貼地，用等長呼吸讓心找到中心線，行走時也能保持。",
    readingTime: "4 分鐘",
    tags: ["春分", "呼吸", "行禪"]
  },
  {
    title: "當呼吸卡住時",
    category: "呼吸與覺察",
    summary: "紀錄我如何用 4-7-8 呼吸穿越焦慮，並把注意放在肩頸放鬆。",
    readingTime: "5 分鐘",
    tags: ["焦慮", "放鬆"]
  },
  {
    title: "修行路上的拖延",
    category: "修行困惑",
    summary: "把練習拆成 3 分鐘行動，避免因為完美主義而停滯。",
    readingTime: "3 分鐘",
    tags: ["習慣", "行動"]
  },
  {
    title: "把練習帶進早晨通勤",
    category: "生活整合",
    summary: "用步行配合呼吸，讓通勤路變成專注與安定的入口。",
    readingTime: "4 分鐘",
    tags: ["通勤", "專注"]
  }
];

const addReveal = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".card, .section-header, .hero-intro, .hero-cards > div").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
};

const renderPracticeCard = () => {
  const duration = document.getElementById("duration").value;
  const purpose = document.getElementById("purpose").value;
  const body = document.getElementById("body").value;
  const template = practiceTemplates[purpose]?.[body] || practiceTemplates["安定"]["緊"];

  document.getElementById("practice-title").textContent = `${purpose} · ${duration} 分鐘 · 身體：${body}`;

  const content = [
    { title: "準備", text: template.prepare },
    { title: "呼吸指引", text: template.breathing },
    { title: "觀照提示", text: template.observe },
    { title: "結束語", text: template.closing },
    { title: "注意事項", text: template.caution }
  ]
    .map(
      block => `
      <div class="practice-block">
        <p class="eyebrow">${block.title}</p>
        <p>${block.text}</p>
      </div>
    `
    )
    .join("");

  document.getElementById("practice-content").innerHTML = content;
};

const renderSolarFilters = () => {
  const bodySet = new Set();
  const emotionSet = new Set();
  solarTerms.forEach(term => {
    bodySet.add(term.body);
    emotionSet.add(term.emotion);
  });

  const bodyFilter = document.getElementById("bodyFilter");
  const emotionFilter = document.getElementById("emotionFilter");

  bodySet.forEach(val => {
    const option = document.createElement("option");
    option.value = val;
    option.textContent = val;
    bodyFilter.appendChild(option);
  });

  emotionSet.forEach(val => {
    const option = document.createElement("option");
    option.value = val;
    option.textContent = val;
    emotionFilter.appendChild(option);
  });
};

const renderSolarGrid = () => {
  const bodyFilter = document.getElementById("bodyFilter").value;
  const emotionFilter = document.getElementById("emotionFilter").value;
  const durationFilter = document.getElementById("durationFilter").value;

  const filtered = solarTerms.filter(term => {
    const matchBody = bodyFilter ? term.body === bodyFilter : true;
    const matchEmotion = emotionFilter ? term.emotion === emotionFilter : true;
    const matchDuration = durationFilter ? term.duration === durationFilter : true;
    return matchBody && matchEmotion && matchDuration;
  });

  document.getElementById("solar-grid").innerHTML = filtered
    .map(
      term => `
      <div class="card lift solar-card" tabindex="0" data-name="${term.name}">
        <p class="eyebrow">${term.range}</p>
        <h4>${term.name}</h4>
        <p class="badge">身體：${term.body}</p>
        <p class="badge">情緒：${term.emotion}</p>
        <p class="badge">生活節奏：${term.rhythm}</p>
        <p>${term.practice}</p>
        <p class="badge">時長：${term.duration} 分鐘</p>
      </div>
    `
    )
    .join("");

  document.querySelectorAll(".solar-card").forEach(card => {
    card.addEventListener("click", () => showSolarDetail(card.dataset.name));
    card.addEventListener("keypress", e => {
      if (e.key === "Enter") showSolarDetail(card.dataset.name);
    });
  });

  if (filtered.length) {
    showSolarDetail(filtered[0].name);
  } else {
    document.getElementById("solar-detail").innerHTML = "<p>沒有符合條件的節氣，嘗試移除部分篩選。</p>";
  }
};

const showSolarDetail = name => {
  const term = solarTerms.find(item => item.name === name);
  if (!term) return;

  document.getElementById("solar-detail").innerHTML = `
    <div class="card-header">
      <div>
        <p class="eyebrow">節氣詳頁</p>
        <h3>${term.name}｜${term.range}</h3>
      </div>
      <div class="badge">身體：${term.body}</div>
    </div>
    <p class="muted-text">這個節氣的氣候與節奏：${term.rhythm}，適合用呼吸與伸展找到緩衝。</p>
    <div class="detail-grid">
      <div class="detail-block">
        <p class="eyebrow">身體訊號</p>
        <ul>${term.signalsBody.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="detail-block">
        <p class="eyebrow">心的訊號</p>
        <ul>${term.signalsHeart.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="detail-block">
        <p class="eyebrow">今日練習</p>
        <p>5-8 分鐘：${term.practiceShort}</p>
        <p>10-15 分鐘：${term.practiceLong}</p>
      </div>
      <div class="detail-block">
        <p class="eyebrow">常見偏誤與溫柔提醒</p>
        <ul>${term.reminders.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="practice-card card lift" aria-label="節氣卡">
      <div class="card-header">
        <p class="eyebrow">節氣卡</p>
        <h4>${term.card}</h4>
      </div>
      <p>分享給需要的朋友：讓節氣成為生活的緩衝，而非壓力來源。</p>
    </div>
  `;
};

const renderLibrary = () => {
  const keyword = document.getElementById("librarySearch").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;

  document.getElementById("library-list").innerHTML = libraryItems
    .filter(item => {
      const matchKeyword = keyword
        ? item.title.toLowerCase().includes(keyword) || item.context.toLowerCase().includes(keyword)
        : true;
      const matchType = type ? item.type === type : true;
      return matchKeyword && matchType;
    })
    .map(
      item => `
      <div class="card lift">
        <p class="eyebrow">${item.type}｜${item.duration}</p>
        <h4>${item.title}</h4>
        <p>${item.context}</p>
        <p class="badge">難度：${item.difficulty}</p>
        <p class="badge">注意：${item.caution}</p>
        <div>${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    `
    )
    .join("");
};

const renderWritings = () => {
  const keyword = document.getElementById("writingSearch").value.toLowerCase();
  const category = document.getElementById("writingFilter").value;

  document.getElementById("writing-list").innerHTML = writings
    .filter(item => {
      const matchKeyword = keyword
        ? item.title.toLowerCase().includes(keyword) || item.summary.toLowerCase().includes(keyword)
        : true;
      const matchCategory = category ? item.category === category : true;
      return matchKeyword && matchCategory;
    })
    .map(
      item => `
      <div class="card lift">
        <p class="eyebrow">${item.category}｜${item.readingTime}</p>
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <div>${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    `
    )
    .join("");
};

const init = () => {
  renderPracticeCard();
  renderSolarFilters();
  renderSolarGrid();
  renderLibrary();
  renderWritings();
  addReveal();

  document.getElementById("generate").addEventListener("click", renderPracticeCard);
  document.getElementById("bodyFilter").addEventListener("change", renderSolarGrid);
  document.getElementById("emotionFilter").addEventListener("change", renderSolarGrid);
  document.getElementById("durationFilter").addEventListener("change", renderSolarGrid);
  document.getElementById("librarySearch").addEventListener("input", renderLibrary);
  document.getElementById("typeFilter").addEventListener("change", renderLibrary);
  document.getElementById("writingSearch").addEventListener("input", renderWritings);
  document.getElementById("writingFilter").addEventListener("change", renderWritings);
};

document.addEventListener("DOMContentLoaded", init);

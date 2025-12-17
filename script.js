const practiceMap = {
  安定: {
    prep: "找到穩固座位，雙腳貼地，手機靜音，給自己 5 分鐘安靜時間。",
    breath: "4-6 呼吸：吸氣數 4，吐氣數 6，肩膀隨吐氣沉下。",
    observe: "留意胸口微幅起伏，覺察身體重量落在坐墊與腳底。",
    closing: "合掌胸前，向自己說：我允許此刻慢下來。",
    notes: "若心思飄走，回到吐氣延長，不責備。",
  },
  提神: {
    prep: "坐或站立，脊椎拉長，窗戶微開換氣。",
    breath: "3-3-3 方形呼吸：吸 3、停 3、吐 3，輕柔進行。",
    observe: "感受氣流觸及鼻尖的清涼，讓眼神柔和但明亮。",
    closing: "輕敲眉心與後腦，喚醒專注。",
    notes: "避免過度用力屏息，保持身體鬆軟。",
  },
  放鬆: {
    prep: "躺或坐皆可，拉一條薄毯覆蓋腹部讓安全感升起。",
    breath: "延長吐氣：吸 4、吐 8，想像吐出緊繃。",
    observe: "依序掃描手指、肩膀、腹部，找到可以再鬆一點的地方。",
    closing: "張口哈一口氣，輕撫鎖骨，允許身體沉重。",
    notes: "若出現情緒波動，只需陪伴呼吸，不必分析。",
  },
  專注: {
    prep: "桌面整理，移除分心物，準備紙筆記錄覺察。",
    breath: "5 次單點專注：吸氣時感受鼻尖，吐氣時只聽見氣聲。",
    observe: "把注意力停在鼻尖與眉心之間，覺察思緒飄走再帶回。",
    closing: "寫下此刻的清晰度 1-10，為自己設定下一步。",
    notes: "若心躁，先做兩次深吐氣再開始。",
  },
  睡前: {
    prep: "調暗燈光，躺姿或盤坐，將電子產品放遠。",
    breath: "漸進式放鬆：吸氣時微收拳，吐氣時鬆開，全身跟著鬆。",
    observe: "聽見腹部起伏的聲音，把注意放在身體沉入床面的感受。",
    closing: "在心裡說：我允許自己休息，今晚夠了。",
    notes: "若有焦慮浮現，放在心口，讓吐氣帶走緊張。",
  },
};

const bodyAdjustments = {
  緊: "在吐氣時刻意放鬆下巴與肩胛，想像肌肉像砂子滑落。",
  疲憊: "每三次呼吸做一次長吐氣，讓身體重量全然托付椅面或床面。",
  心浮: "把注意力放在足底，吸氣時感受地板支撐，吐氣時沉降。",
  情緒多: "命名情緒：為它取個色彩，吸氣迎接，吐氣送出，不壓抑。",
  頭腦過載: "將手放在後腦，吸氣拱背，吐氣微收下巴，給大腦一個緩衝。",
};

const solarTerms = [
  {
    name: "立春",
    range: "2 月上旬",
    body: "肝",
    mood: "清明",
    duration: "5-8 分鐘",
    focus: "肝氣舒展，胸肋鬆開",
    quickPractice: "3 分鐘站立擴胸呼吸，手臂隨吸氣側舉，吐氣放下。",
    climate: "寒意漸退，風起，身體像剛醒需要伸展，避免暴衝。",
    bodySignals: ["胸悶、兩肋緊", "晨起僵硬", "眼睛乾澀"],
    mindSignals: ["煩躁易怒", "方向想很多但未落地", "渴望開始又怕失敗"],
    practiceShort: ["站姿，雙腳與肩同寬", "吸氣雙臂側舉，胸口展開", "吐氣手臂下放，膝微彎", "重複 8 次，感受肋骨展開"],
    practiceLong: ["3 分鐘方形呼吸安住", "5 次貓牛伸展，喚醒脊椎", "坐姿扭轉 2 回合，覺察肋骨空間", "最後 2 分鐘靜坐，聽心跳放慢"],
    reminders: "不要急著立下過多目標，先讓身體醒透再啟動計畫。",
    share: "立春：先鬆開兩肋，再談新的開始。",
  },
  {
    name: "雨水",
    range: "2 月下旬",
    body: "腎",
    mood: "滋養",
    duration: "5-8 分鐘",
    focus: "腎氣回潤，補充水份與休息",
    quickPractice: "4 分鐘仰躺腹式呼吸，吐氣更長。",
    climate: "空氣潮濕，氣溫未穩，重點是保暖與補水。",
    bodySignals: ["腰部酸沉", "腳踝冰冷", "睡眠易醒"],
    mindSignals: ["安全感不足", "擔心進度落後", "難以放鬆入睡"],
    practiceShort: ["仰躺，雙手覆腹", "吸氣腹部微漲，吐氣慢放", "每吐氣默念：我被支撐", "持續 4 分鐘"],
    practiceLong: ["坐姿 1 分鐘調息", "貓牛伸展 6 次", "橋式停留 5 呼吸，暖腰", "最後 3 分鐘側臥休息"],
    reminders: "行程不要塞滿，補水與保暖優先，允許自己早睡。",
    share: "雨水：把自己泡在溫柔裡，讓腰背回暖。",
  },
  {
    name: "驚蟄",
    range: "3 月上旬",
    body: "肝",
    mood: "清明",
    duration: "3-5 分鐘",
    focus: "肝木升發，舒展筋膜",
    quickPractice: "3 分鐘拍打肝經與深吐氣。",
    climate: "雷聲初動，陽氣升，情緒也會搖晃，保持節奏即可。",
    bodySignals: ["肩頸緊", "手腳發麻", "胸肋漲"],
    mindSignals: ["情緒起伏快", "思緒跳躍", "渴望行動卻分心"],
    practiceShort: ["站立拍打大腿內側 1 分鐘", "深吐氣 6 次，嘴巴微開", "手掌搓熱覆眼，停 30 秒"],
    practiceLong: ["1 分鐘 4-6 呼吸", "坐姿側彎左右各 5 呼吸", "低弓步 2 組，覺察腳底", "2 分鐘靜坐，聽內在的安靜"],
    reminders: "避免咖啡因過量，少說快話，讓能量有出口而不爆衝。",
    share: "驚蟄：聽雷，也聽身體要伸展的訊號。",
  },
  {
    name: "春分",
    range: "3 月下旬",
    body: "肝",
    mood: "安穩",
    duration: "5-8 分鐘",
    focus: "陰陽平衡，軸心穩定",
    quickPractice: "4 分鐘站立平衡：單腳抬起，呼吸穩定後換邊。",
    climate: "日夜等長，調整作息成規律，讓能量平均分配。",
    bodySignals: ["站立易晃", "腰側緊", "頭重眼花"],
    mindSignals: ["情緒拉鋸", "難做決定", "渴望秩序感"],
    practiceShort: ["站立山式 1 分鐘", "單腳站 3 呼吸後換邊，做 3 輪", "雙手合十胸前，吐氣肩放鬆"],
    practiceLong: ["2 分鐘觀呼吸", "太陽式簡化版 3 輪", "坐姿扭轉 2 輪", "躺姿放鬆 3 分鐘"],
    reminders: "不必追求完美平衡，只要找回軸心；用餐與睡眠保持固定時間。",
    share: "春分：站穩軸心，再分配能量。",
  },
  {
    name: "清明",
    range: "4 月上旬",
    body: "肺",
    mood: "清明",
    duration: "3-5 分鐘",
    focus: "肺氣清新，鼻腔暢通",
    quickPractice: "3 分鐘鼻尖覺察呼吸，吐氣微長。",
    climate: "空氣清亮但風大，保持溫暖避免受寒，適合戶外緩走。",
    bodySignals: ["鼻塞或過敏", "肩膀緊", "胸口悶"],
    mindSignals: ["思緒容易飄", "想法過多", "需要清理感受"],
    practiceShort: ["坐姿，指尖觸碰鼻翼旁，感受吸吐", "吐氣時間比吸氣長 2 拍", "每吐氣想像霧氣排出，持續 3-4 分鐘"],
    practiceLong: ["1 分鐘安住呼吸", "手肘環抱肩膀，吸氣抬肘，吐氣放下 6 次", "站立開合跳式輕版 30 秒", "最後 2 分鐘步行覺察"],
    reminders: "避免冷飲與熬夜，若過敏發作，改做溫和腹式呼吸。",
    share: "清明：吸入清新，吐出雜霧。",
  },
  {
    name: "立夏",
    range: "5 月上旬",
    body: "心",
    mood: "鬆軟",
    duration: "5-8 分鐘",
    focus: "心火漸旺，保持涼感與節奏",
    quickPractice: "5 分鐘舌尖抵上顎的涼涼呼吸，吐氣微長。",
    climate: "氣溫升高，容易煩躁，練習降火與安神。",
    bodySignals: ["口苦口乾", "手心熱", "睡不沉"],
    mindSignals: ["情緒易爆", "愛鑽牛角尖", "心跳偏快"],
    practiceShort: ["坐姿，舌尖抵上顎，鼻吸嘴吐", "吐氣時想像涼風吹過胸口", "重複 5 分鐘"],
    practiceLong: ["1 分鐘腳底拍打", "跪坐貓牛 6 次", "嬰兒式停留 8 呼吸", "2 分鐘慈心：願我心柔軟"],
    reminders: "避免熬夜與重口味，多喝溫水；情緒升溫時先退後三步。",
    share: "立夏：心火升時，用涼感呼吸降溫。",
  },
  {
    name: "小滿",
    range: "5 月下旬",
    body: "脾",
    mood: "滋養",
    duration: "5-8 分鐘",
    focus: "脾胃運化，避免濕重",
    quickPractice: "4 分鐘坐姿揉腹與長吐氣，幫助消化。",
    climate: "雨水增多，身體易覺濕重，重點是助消化、少甜冷。",
    bodySignals: ["腹脹", "四肢沈重", "食慾不振"],
    mindSignals: ["懶散想賴床", "思緒黏膩", "難以集中"],
    practiceShort: ["雙手畫圈揉腹 1 分鐘", "吸氣提肋骨，吐氣收腹 10 次", "坐姿前彎 5 呼吸，留意背部伸展"],
    practiceLong: ["站姿抖動 1 分鐘，甩掉濕悶", "椅子式 5 次，啟動腿部", "貓牛 6 次", "最後 3 分鐘腹式呼吸"],
    reminders: "飲食七分飽即可，避免生冷甜膩，保持輕度流汗。",
    share: "小滿：少一點負擔，脾胃才有餘裕。",
  },
  {
    name: "夏至",
    range: "6 月下旬",
    body: "心",
    mood: "安穩",
    duration: "8-12 分鐘",
    focus: "陽極轉陰，守住節奏",
    quickPractice: "5 分鐘坐姿觀心跳，吐氣時肩放鬆。",
    climate: "日長夜短，情緒易亢奮，要記得收斂與午休。",
    bodySignals: ["午后心悸", "手腳熱", "口渴"],
    mindSignals: ["易怒或亢奮", "睡眠淺", "下午精神下滑"],
    practiceShort: ["坐姿，雙手覆心，數 10 個呼吸", "每吐氣想像心跳往內收", "肩頸輕柔轉動 1 分鐘"],
    practiceLong: ["3 分鐘觀呼吸配慈心：願我安穩", "跪坐前彎 8 呼吸", "橋式 5 呼吸，打開胸口", "仰躺放鬆 3 分鐘"],
    reminders: "避免晚間重訓與夜間大餐，午休 15 分鐘會讓心更穩。",
    share: "夏至：最亮之時，也要學會收心。",
  },
  {
    name: "處暑",
    range: "8 月下旬",
    body: "肺",
    mood: "收斂",
    duration: "3-5 分鐘",
    focus: "暑濕漸退，肺氣收斂",
    quickPractice: "3 分鐘縮唇呼吸，吐氣延長。",
    climate: "炎熱退場，早晚溫差大，開始收斂作息與情緒。",
    bodySignals: ["喉嚨乾癢", "皮膚乾", "呼吸短"],
    mindSignals: ["難收心", "想延續夏日派對", "情緒拉扯"],
    practiceShort: ["坐姿，嘴型像吹蠟燭吐氣 2 分鐘", "吸氣鼻入，吐氣嘴出，延長 2 拍", "最後 1 分鐘雙臂環抱，感受肺區溫度"],
    practiceLong: ["1 分鐘觀呼吸", "貓牛 6 次", "坐姿側彎左右各 5 呼吸", "嬰兒式 2 分鐘，感受背部擴張"],
    reminders: "避免冷氣直吹，晚上增加薄被；心情收斂，聚會減量。",
    share: "處暑：把散漫收回胸口，慢慢換季。",
  },
  {
    name: "白露",
    range: "9 月上旬",
    body: "肺",
    mood: "收斂",
    duration: "5-8 分鐘",
    focus: "秋氣初現，潤肺保溫",
    quickPractice: "5 分鐘腹式呼吸 + 肩胛擴張。",
    climate: "早晚涼，空氣乾，記得添衣與補水，讓呼吸溫潤。",
    bodySignals: ["鼻乾咽癢", "皮膚緊繃", "肩背痠"],
    mindSignals: ["思緒轉向內在", "略有失落", "需要安全感"],
    practiceShort: ["坐姿，雙手覆腹，做 10 次深呼吸", "肩胛擴張：雙手前伸交握，吸氣肩胛分開，吐氣還原 8 次", "最後 1 分鐘嘴角上揚，輕柔微笑"],
    practiceLong: ["1 分鐘調息", "貓牛 6 次", "胸開伸展（雙手後十指扣）5 呼吸", "仰躺抱膝 2 分鐘"],
    reminders: "避免熬夜，睡前熱敷胸背；保持室內濕度，聲音不要過度使用。",
    share: "白露：讓呼吸有濕度，心自然柔軟。",
  },
];

const library = [
  {
    title: "4-6 呼吸安定法",
    type: "呼吸",
    duration: "5 分鐘",
    difficulty: "入門",
    context: "焦躁、會議前、需要穩定情緒",
    cautions: "孕婦可，若頭暈減少回合。",
    tags: ["安定", "短練習"],
  },
  {
    title: "身體掃描入睡版",
    type: "睡前",
    duration: "10 分鐘",
    difficulty: "溫和",
    context: "失眠、腦袋停不下來",
    cautions: "心悸者可縮短，若情緒浮現請停留在胸口呼吸。",
    tags: ["睡前", "放鬆"],
  },
  {
    title: "慈心短咒：願我柔軟",
    type: "慈心",
    duration: "6 分鐘",
    difficulty: "入門",
    context: "心情硬、對自己苛責時",
    cautions: "若情緒湧現，先回到呼吸，再繼續默念。",
    tags: ["慈心", "情緒"],
  },
  {
    title: "專注呼吸計數",
    type: "專注",
    duration: "8 分鐘",
    difficulty: "入門",
    context: "工作切換、讀書前",
    cautions: "若頭暈，降低計數；保持肩頸放鬆。",
    tags: ["專注", "計數呼吸"],
  },
  {
    title: "步行覺察小旅行",
    type: "身體掃描",
    duration: "12 分鐘",
    difficulty: "中等",
    context: "午休、需要轉換心情",
    cautions: "留意交通安全，步伐放慢。",
    tags: ["步行", "覺察"],
  },
];

const writings = [
  {
    title: "春分：如何站穩自己的軸心",
    category: "節氣筆記",
    summary: "分享春分時我用的平衡練習，避免過度擴張或收斂。",
    reading: "5 分鐘",
    tags: ["春分", "平衡", "呼吸"],
  },
  {
    title: "呼吸與覺察：三分鐘也足夠",
    category: "呼吸與覺察",
    summary: "把練習拆小後，才能天天做。記錄我常用的 3 分鐘流程。",
    reading: "4 分鐘",
    tags: ["短練習", "覺察"],
  },
  {
    title: "修行困惑：我是不是做錯了？",
    category: "修行困惑",
    summary: "當感覺不到效果時，反而是練習觀察期待的好時刻。",
    reading: "6 分鐘",
    tags: ["期待", "疑惑"],
  },
  {
    title: "生活整合：通勤也能練習",
    category: "生活整合",
    summary: "分享通勤時的呼吸節奏與姿勢，讓地鐵成為安靜島。",
    reading: "3 分鐘",
    tags: ["通勤", "整合"],
  },
];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.18 }
);

const attachReveal = () => {
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
};

const generatePracticeCard = () => {
  const duration = document.getElementById("duration").value;
  const purpose = document.getElementById("purpose").value;
  const bodyState = document.getElementById("bodyState").value;
  const base = practiceMap[purpose];
  const adjust = bodyAdjustments[bodyState];

  document.getElementById("cardTitle").textContent = `${purpose} × ${duration}`;
  document.getElementById("cardMood").textContent = `身體：${bodyState}`;
  document.getElementById("prep").textContent = base.prep;
  document.getElementById("breath").textContent = base.breath;
  document.getElementById("observe").textContent = `${base.observe} ${adjust}`;
  document.getElementById("closing").textContent = base.closing;
  document.getElementById("notes").textContent = `${base.notes} 若不適，改為自然呼吸。`;
};

const renderSolarCards = (list) => {
  const grid = document.getElementById("solarGrid");
  grid.innerHTML = "";
  list.forEach((term) => {
    const card = document.createElement("div");
    card.className = "card solar-card reveal";
    card.innerHTML = `
      <p class="eyebrow">${term.range}</p>
      <h4>${term.name}</h4>
      <p>${term.focus}</p>
      <div class="meta">
        <span class="chip">身體：${term.body}</span>
        <span class="chip">情緒：${term.mood}</span>
        <span class="chip">時長：${term.duration}</span>
      </div>
      <p class="quick">短練習：${term.quickPractice}</p>
    `;
    card.addEventListener("click", () => renderSolarDetail(term));
    grid.appendChild(card);
    observer.observe(card);
  });
};

const renderSolarDetail = (term) => {
  document.getElementById("detailEyebrow").textContent = term.name;
  document.getElementById("detailTitle").textContent = `${term.name} ｜ ${term.focus}`;
  document.getElementById("detailRange").textContent = term.range;
  document.getElementById("detailTags").textContent = `身體：${term.body} ｜ 情緒：${term.mood}`;
  document.getElementById("detailClimate").textContent = term.climate;
  document.getElementById("detailReminders").textContent = term.reminders;
  document.getElementById("shareTitle").textContent = `${term.name} · ${term.mood}`;
  document.getElementById("shareSummary").textContent = term.share;

  const bodyList = document.getElementById("bodySignals");
  const mindList = document.getElementById("mindSignals");
  const shortList = document.getElementById("practiceShort");
  const longList = document.getElementById("practiceLong");
  bodyList.innerHTML = "";
  mindList.innerHTML = "";
  shortList.innerHTML = "";
  longList.innerHTML = "";

  term.bodySignals.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    bodyList.appendChild(li);
  });
  term.mindSignals.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    mindList.appendChild(li);
  });
  term.practiceShort.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    shortList.appendChild(li);
  });
  term.practiceLong.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    longList.appendChild(li);
  });
};

const filterSolar = () => {
  const body = document.getElementById("filterBody").value;
  const mood = document.getElementById("filterMood").value;
  const duration = document.getElementById("filterDuration").value;
  const filtered = solarTerms.filter((term) => {
    const bodyOk = body === "all" || term.body === body;
    const moodOk = mood === "all" || term.mood === mood;
    const durationOk = duration === "all" || term.duration === duration;
    return bodyOk && moodOk && durationOk;
  });
  renderSolarCards(filtered);
};

const renderLibrary = () => {
  const grid = document.getElementById("libraryGrid");
  const query = document.getElementById("librarySearch").value.toLowerCase();
  const type = document.getElementById("libraryFilter").value;
  grid.innerHTML = "";
  library
    .filter((item) => {
      const matchType = type === "all" || item.type === type;
      const matchSearch =
        item.title.toLowerCase().includes(query) ||
        item.context.toLowerCase().includes(query);
      return matchType && matchSearch;
    })
    .forEach((item) => {
      const card = document.createElement("div");
      card.className = "card library-card reveal";
      card.innerHTML = `
        <h4>${item.title}</h4>
        <p class="meta">
          <span class="chip">${item.type}</span>
          <span class="chip">${item.duration}</span>
          <span class="chip">${item.difficulty}</span>
        </p>
        <p>${item.context}</p>
        <p class="meta"><span class="chip">注意事項</span> ${item.cautions}</p>
        <div class="meta">${item.tags
          .map((t) => `<span class="chip">${t}</span>`)
          .join("")}</div>
      `;
      grid.appendChild(card);
      observer.observe(card);
    });
};

const renderWriting = () => {
  const grid = document.getElementById("writingGrid");
  const query = document.getElementById("writingSearch").value.toLowerCase();
  grid.innerHTML = "";
  writings
    .filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query))
    )
    .forEach((item) => {
      const card = document.createElement("div");
      card.className = "card writing-card reveal";
      card.innerHTML = `
        <p class="eyebrow">${item.category}</p>
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <p class="meta">
          <span class="chip">${item.reading}</span>
          ${item.tags.map((t) => `<span class="chip">${t}</span>`).join("")}
        </p>
      `;
      grid.appendChild(card);
      observer.observe(card);
    });
};

const attachEvents = () => {
  document.getElementById("generate").addEventListener("click", generatePracticeCard);
  document.getElementById("filterBody").addEventListener("change", filterSolar);
  document.getElementById("filterMood").addEventListener("change", filterSolar);
  document.getElementById("filterDuration").addEventListener("change", filterSolar);
  document.getElementById("librarySearch").addEventListener("input", renderLibrary);
  document.getElementById("libraryFilter").addEventListener("change", renderLibrary);
  document.getElementById("writingSearch").addEventListener("input", renderWriting);
  document.querySelectorAll(".hero-cards .card").forEach((card) => {
    card.addEventListener("click", () => {
      const target = card.getAttribute("data-target");
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    });
  });
};

const generatePattern = () => {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "pattern-layer");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "0 0 800 800");
  svg.style.position = "fixed";
  svg.style.inset = 0;
  svg.style.pointerEvents = "none";
  svg.style.opacity = "0.2";
  svg.style.mixBlendMode = "multiply";
  const defs = document.createElementNS(svgNS, "defs");
  const pattern = document.createElementNS(svgNS, "pattern");
  pattern.setAttribute("id", "geo");
  pattern.setAttribute("width", "120");
  pattern.setAttribute("height", "120");
  pattern.setAttribute("patternUnits", "userSpaceOnUse");

  for (let i = 0; i < 5; i++) {
    const poly = document.createElementNS(svgNS, "polygon");
    const size = 40 + i * 8;
    const points = Array.from({ length: 6 })
      .map((_, idx) => {
        const angle = (Math.PI / 3) * idx;
        const x = 60 + size * Math.cos(angle);
        const y = 60 + size * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
    poly.setAttribute("points", points);
    poly.setAttribute("fill", "none");
    poly.setAttribute("stroke", i % 2 === 0 ? "#7f8c8d" : "#c8b4ab");
    poly.setAttribute("stroke-width", "0.6");
    poly.setAttribute("opacity", `${0.18 - i * 0.02}`);
    pattern.appendChild(poly);
  }
  defs.appendChild(pattern);
  svg.appendChild(defs);

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", "800");
  rect.setAttribute("height", "800");
  rect.setAttribute("fill", "url(#geo)");
  svg.appendChild(rect);

  document.body.appendChild(svg);
};

const init = () => {
  attachReveal();
  generatePracticeCard();
  renderSolarCards(solarTerms);
  renderLibrary();
  renderWriting();
  attachEvents();
  generatePattern();
};

init();

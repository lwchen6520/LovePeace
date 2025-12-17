const practicePresets = {
  安定: {
    setup: "找一個支撐良好的坐姿或靠牆，腳掌著地，感受地面的重量。",
    breath: "4-6-6 呼吸：吸氣 4 拍，停 2 拍，吐氣 6 拍，共 8 輪。",
    mind: "把注意力放在胸口上下起伏，若分心就溫柔帶回呼吸。",
    close: "雙手覆在心口，向自己說：我正在學習慢下來。",
    note: "若感到胸悶，可改成鼻吸鼻吐的平穩呼吸。",
  },
  提神: {
    setup: "坐在光線充足處，背打直，眼神柔焦。",
    breath: "交替鼻吸呼：右手拇指按右鼻孔，左鼻吸 4 拍、停 2 拍、右鼻吐 4 拍，換邊重複。",
    mind: "覺察背部是否塌陷，吸氣時讓脊椎向上生長。",
    close: "張嘴打呵欠，讓眼周放鬆，再回到清明的當下。",
    note: "鼻道不通時改做平穩深呼吸，避免用力過猛。",
  },
  放鬆: {
    setup: "選一個靠背椅或坐墊，讓骨盆穩穩著地。",
    breath: "延長吐氣：吸氣 4 拍、吐氣 8 拍，肩頸隨吐氣下沉。",
    mind: "掃描眉心、下顎、肩膀，找到緊繃處並邀請它軟化。",
    close: "微微搖晃身體，像海浪一樣，直到找到舒服的位置。",
    note: "若覺得頭重腳輕，可加上腳底貼地的感覺。",
  },
  專注: {
    setup: "桌面清空，只留下必要物品，手機飛航。",
    breath: "盒式呼吸：吸 4、停 4、吐 4、停 4，循環 6–8 輪。",
    mind: "在吸氣時默念「在」、吐氣時默念「此」，把注意力與呼吸綁在一起。",
    close: "寫下當前最重要的一件事，帶著清晰開始行動。",
    note: "若心跳加快，縮短屏息時間，改為 4-2-4-2。",
  },
  睡前: {
    setup: "躺在床上或坐在床邊，房間燈光調暗，保持溫暖。",
    breath: "階梯式吐氣：吸 4 拍，分三段慢慢吐出，吐完停 2 拍。",
    mind: "把注意力放在腹部起伏，想像每次吐氣都把一天的緊繃放下。",
    close: "讓下巴微收，感覺身體變得沉重，允許自己入睡。",
    note: "若有焦慮想法，寫在紙上暫存，再回到呼吸。",
  },
};

const bodyAdjustments = {
  緊: {
    breath: "加入肩頸旋轉，吐氣時讓肩膀往後畫圈。",
    mind: "每次吐氣時刻意放鬆肩頸與下顎，感受熱度釋放。",
    note: "若出現麻木感，先停下搓手增加循環。",
  },
  疲憊: {
    setup: "增加一條薄毯或靠枕，讓身體有被承接的感覺。",
    breath: "用鼻吸鼻吐，時間比平常慢一點，維持 6–8 輪即可。",
    mind: "在吐氣時感受身體落回座位的重量，允許自己休息。",
    note: "避免閉氣過久，讓節奏自然即可。",
  },
  心浮: {
    breath: "延長吐氣到 8–10 拍，幫助神經系統下行。",
    mind: "把視線放低，看向桌面或地面，讓眼神安定。",
    note: "若分心嚴重，先喝一杯溫水再回來。",
  },
  情緒多: {
    setup: "準備紙筆，練習後可寫下浮現的情緒字詞。",
    mind: "承認情緒存在，不急著推開，讓呼吸像容器一樣。",
    note: "若情緒強烈，可先做 3 次深吐氣再開始。",
  },
  頭腦過載: {
    breath: "調整為鼻吸口吐，吐氣時微發出「哈」聲，釋放壓力。",
    mind: "用手指輕敲眉心與太陽穴，提醒自己回到身體。",
    note: "避免邊滑手機邊練習，給大腦一段純粹的空檔。",
  },
};

const solarTerms = [
  {
    id: "lichun",
    name: "立春",
    range: "2月初旬",
    body: "肝木舒展、筋膜解凍",
    emotion: "輕鬆展開、收拾倦怠",
    rhythm: "早睡早起，晨光伸展 5 分鐘。",
    practice: "3 分鐘胸肋開展呼吸，雙手插腰，吸氣側肋撐開，吐氣讓肩膀落下。",
    duration: 3,
    detail: {
      climate: "寒意開始退去，空氣仍涼，需要緩緩解凍而非猛衝。",
      bodySignals: ["早晨僵硬、筋骨卡卡", "指甲易斷、皮膚乾", "胸口悶、肋骨緊"],
      heartSignals: ["期待與慌張並存", "想做很多事但不知道從哪開始", "容易躁動或碎念"],
      practices: {
        short: ["坐姿，雙手抱胸，吸氣撐開背部，吐氣抱緊自己 8 次。", "站起，手指插腰，側肋呼吸 6 輪。"],
        long: ["貓牛 10 次讓脊椎暖身。", "站立側彎左右各 6 次，配合深呼吸。", "最後 3 分鐘坐姿冥想，感受腳底著地。"],
      },
      reminders: ["暖身要慢，不要硬拉筋膜。", "計畫少一點，先讓身體醒來。"],
      card: "立春 · 用慢醒的身體迎接新意，從胸肋開始打開呼吸。",
    },
  },
  {
    id: "yushui",
    name: "雨水",
    range: "2月下旬",
    body: "脾胃轉暖、潤養喉嚨",
    emotion: "平緩踏實、收斂急躁",
    rhythm: "喝溫水、少冰飲，餐後散步 10 分鐘。",
    practice: "5 分鐘腹式呼吸：雙手覆在肚臍，吸氣腹部膨脹、吐氣收回。",
    duration: 5,
    detail: {
      climate: "雨意漸多、濕度上升，身體需要暖脾胃、減少寒濕累積。",
      bodySignals: ["胃口忽大忽小", "手腳冰涼", "下背微痠"],
      heartSignals: ["情緒被天氣牽動", "容易想賴床", "做事拖延"],
      practices: {
        short: ["坐姿腹式呼吸 10 輪。", "舌尖頂上顎，吞嚥口水，喉嚨保濕。"],
        long: ["貓牛 8 次後，進入嬰兒式 2 分鐘。", "站立前彎，膝蓋微彎，讓脊椎放鬆。", "最後腹式呼吸 5 分鐘收尾。"],
      },
      reminders: ["餐前先喝溫水，避免冰飲。", "若頭重，減少甜食。"],
      card: "雨水 · 溫暖腹部，讓每一口氣像細雨滋養。",
    },
  },
  {
    id: "jingzhe",
    name: "驚蟄",
    range: "3月上旬",
    body: "肝膽醒、筋膜彈性",
    emotion: "放下躁動、換氣清明",
    rhythm: "晨間 3 分鐘拍打經絡，晚間早睡。",
    practice: "3 分鐘拍打大腿外側與肩臂，搭配吐氣聲。",
    duration: 3,
    detail: {
      climate: "雷聲初動，萬物甦醒，身體需要把鬱悶排出。",
      bodySignals: ["肩頸緊、偏頭痛", "胸悶想嘆氣", "指甲周圍乾裂"],
      heartSignals: ["情緒易爆、想辯解", "無名火", "難以靜坐"],
      practices: {
        short: ["站姿，輕拍大腿外側、手臂，配合吐氣聲 2 分鐘。", "坐下做 6 輪側肋呼吸。"],
        long: ["貓牛 10 次，搭配吐氣聲。", "低弓步左右各 8 呼吸。", "最後坐姿觀察胸口開闔 3 分鐘。"],
      },
      reminders: ["不必強迫安靜，允許身體動一動。", "有怒氣時先用吐氣聲排出。"],
      card: "驚蟄 · 讓雷聲帶走鬱悶，用吐氣聲清出空間。",
    },
  },
  {
    id: "chunfen",
    name: "春分",
    range: "3月下旬",
    body: "肝脾平衡、內外均衡",
    emotion: "收斂急躁、安穩推進",
    rhythm: "白天曬太陽 10 分鐘，晚間提早收工。",
    practice: "5 分鐘側彎呼吸：站立，雙手交握上提，左右各 8 呼吸。",
    duration: 5,
    detail: {
      climate: "晝夜平分，容易熬夜，需要把平衡落實在作息。",
      bodySignals: ["午后易睏", "胸悶或打嗝", "肩胛骨卡住"],
      heartSignals: ["想同時推很多專案", "情緒拉扯、猶豫", "想跳過暖身"],
      practices: {
        short: ["站立側彎左右各 6 次。", "坐姿，吸氣雙手上舉，吐氣往前折疊 6 輪。"],
        long: ["拜日式 A 3 回合，配合平穩呼吸。", "坐姿前彎 2 分鐘。", "最後 5 分鐘靜坐，關注呼吸平衡。"],
      },
      reminders: ["避免熬夜，平衡從作息開始。", "練習時不要急著加速。"],
      card: "春分 · 讓晝夜的平衡成為身體的平衡，呼吸左右等長。",
    },
  },
  {
    id: "guyu",
    name: "穀雨",
    range: "4月下旬",
    body: "脾胃滋養、筋骨柔軟",
    emotion: "溫柔沉澱、少內耗",
    rhythm: "三餐守時，飯後百步走，減少生冷。",
    practice: "5 分鐘坐姿前彎：吸氣拉長脊椎，吐氣折疊，保持呼吸。",
    duration: 5,
    detail: {
      climate: "雨水充足，濕氣重，消化系統需要被照顧。",
      bodySignals: ["下肢浮腫", "胃口不穩", "皮膚黏膩"],
      heartSignals: ["情緒悶、想躲起來", "容易疲倦", "專注力下降"],
      practices: {
        short: ["坐姿前彎 2 分鐘，膝蓋可微彎。", "腹式呼吸 10 輪。"],
        long: ["拜日式慢版 3 回合。", "坐姿扭轉左右各 8 呼吸。", "最後仰躺抱膝 2 分鐘。"],
      },
      reminders: ["避免大汗淋漓的運動，專注在深呼吸。", "喝溫水，減少冰品。"],
      card: "穀雨 · 像土壤喝足水，讓腹部暖起來，脾胃有力。",
    },
  },
  {
    id: "xiaoman",
    name: "小滿",
    range: "5月下旬",
    body: "心火調和、下肢循環",
    emotion: "鬆開急躁、轉為溫和",
    rhythm: "午間短休，晚間清爽淋浴後再練。",
    practice: "3 分鐘腳底接地：赤腳踩地，吸氣抬腳跟、吐氣放下。",
    duration: 3,
    detail: {
      climate: "氣溫升高、濕熱並存，容易心煩氣燥。",
      bodySignals: ["腳踝腫、易流汗", "胸悶心悸", "睡不安穩"],
      heartSignals: ["容易煩躁、動作變快", "想一口氣完成所有事", "情緒急促"],
      practices: {
        short: ["腳跟抬放 20 次，專注腳底接地。", "坐姿，吸氣抬肩、吐氣放鬆 10 次。"],
        long: ["站立前彎 1 分鐘，搭配深呼吸。", "腳底按摩球滾動 2 分鐘。", "最後仰躺休息 5 分鐘。"],
      },
      reminders: ["避免在大熱時段練激烈動作。", "感到煩躁時改做長吐氣。"],
      card: "小滿 · 腳底接地，把心火往下送，讓身體安穩。",
    },
  },
  {
    id: "xiazhi",
    name: "夏至",
    range: "6月下旬",
    body: "心小腸、血液循環",
    emotion: "敞開但守界、慢熱與冷靜",
    rhythm: "早晨涼爽時練習，午後補水，睡前拉伸 5 分鐘。",
    practice: "5 分鐘心中心呼吸：雙手疊放胸口，吸氣胸口膨脹，吐氣肩膀落下。",
    duration: 5,
    detail: {
      climate: "日照最長，身體容易熱，上火、出汗多，需要清心降火。",
      bodySignals: ["口乾舌燥", "心悸或睡淺", "肩頸緊、血液循環加速"],
      heartSignals: ["情緒外放但易耗能", "容易被打斷影響情緒", "難以靜坐"],
      practices: {
        short: ["心中心呼吸 10 輪。", "坐姿側彎左右各 6 次，讓胸口打開。"],
        long: ["拜日式慢版 2 回合。", "駱駝式或改良版 6 呼吸。", "最後仰躺扭轉 2 分鐘，感受吐氣放鬆。"],
      },
      reminders: ["避免空腹或暴食後練習。", "練習後補水並坐下休息。"],
      card: "夏至 · 讓陽光停留在胸口，再把熱度往下送回腳底。",
    },
  },
  {
    id: "chushu",
    name: "處暑",
    range: "8月下旬",
    body: "肺脾轉涼、收斂熱氣",
    emotion: "收束外放、回到節奏",
    rhythm: "早晚各 5 分鐘呼吸練習，午間保持水分。",
    practice: "3 分鐘手陽明拍打：輕拍手臂外側，配合長吐氣。",
    duration: 3,
    detail: {
      climate: "暑氣漸退，早晚涼，身體需要把熱氣收回並保暖。",
      bodySignals: ["早晚溫差易鼻塞", "皮膚乾", "胃口恢復"],
      heartSignals: ["情緒收斂，想重新安排生活", "容易感傷或疲倦", "想靜下來"],
      practices: {
        short: ["手臂外側輕拍 2 分鐘。", "坐姿 4-6 呼吸 8 輪。"],
        long: ["站姿前彎 1 分鐘。", "貓牛 10 次。", "坐姿長吐氣冥想 5 分鐘。"],
      },
      reminders: ["早晚加件薄外套。", "避免熬夜，讓身體收斂。"],
      card: "處暑 · 暑氣退場，身體向內收，呼吸慢而細。",
    },
  },
  {
    id: "bailu",
    name: "白露",
    range: "9月初",
    body: "肺氣潤養、喉嚨保濕",
    emotion: "柔軟感傷、需要陪伴",
    rhythm: "晨間溫水、晚間熱敷胸口，留 5 分鐘靜坐。",
    practice: "5 分鐘噘嘴呼吸：吸氣鼻入、吐氣嘴噘，像吹溫暖的霧氣。",
    duration: 5,
    detail: {
      climate: "早晚露重，乾燥上升，容易咳嗽或喉嚨不適。",
      bodySignals: ["喉嚨乾、咳", "鼻腔敏感", "皮膚乾癢"],
      heartSignals: ["易感傷、想家", "需要溫柔陪伴", "容易陷入回憶"],
      practices: {
        short: ["噘嘴呼吸 12 輪。", "雙手輕撫鎖骨，配合長吐氣。"],
        long: ["貓牛 8 次後，嬰兒式 2 分鐘。", "胸口擴展式 6 呼吸。", "最後仰躺 5 分鐘，聽呼吸聲。"],
      },
      reminders: ["保持喉嚨濕潤，少吃炸物。", "練習後穿上保暖外套。"],
      card: "白露 · 用溫暖的吐氣濕潤喉嚨，讓肺氣被呵護。",
    },
  },
  {
    id: "hanlu",
    name: "寒露",
    range: "10月上旬",
    body: "肺腎協作、保暖下肢",
    emotion: "收斂內觀、穩定節奏",
    rhythm: "早晨熱飲、晚上熱敷腰部，避免久坐。",
    practice: "3 分鐘腳踝繞圈與深吐氣，腳底踏實。",
    duration: 3,
    detail: {
      climate: "露水更寒，溫差拉大，需守護呼吸道與下肢保暖。",
      bodySignals: ["腰背涼、下肢冰", "晨起鼻塞", "肌肉緊縮"],
      heartSignals: ["想安靜、少社交", "情緒沈穩但易低落", "需要安全感"],
      practices: {
        short: ["腳踝繞圈各 15 下，配合長吐氣。", "雙手搓熱覆在腰上，深呼吸 6 輪。"],
        long: ["貓牛 10 次。", "橋式 8 呼吸。", "仰躺抱膝搖晃 2 分鐘，最後靜躺。"],
      },
      reminders: ["練習前先保暖腳踝。", "若頭暈，減少抬頭動作。"],
      card: "寒露 · 把熱度送到腰腿，呼吸像圍巾一樣保護胸口。",
    },
  },
  {
    id: "lidong",
    name: "立冬",
    range: "11月上旬",
    body: "腎氣收藏、骨盆保暖",
    emotion: "內聚沉穩、慢下腳步",
    rhythm: "早睡、暖飲，練習前先伸展脊椎。",
    practice: "5 分鐘膝胸抱腿：仰躺抱膝，吸氣放開、吐氣抱緊。",
    duration: 5,
    detail: {
      climate: "寒意明顯，身體進入收藏期，需要溫暖核心與腰腎。",
      bodySignals: ["手腳冰冷", "下背緊", "想吃熱湯"],
      heartSignals: ["想待在室內", "情緒沉靜", "需要更多睡眠"],
      practices: {
        short: ["仰躺抱膝 10 次。", "手心搓熱放在腰上，深呼吸 8 輪。"],
        long: ["貓牛 10 次。", "橋式 8 呼吸。", "坐姿前彎 2 分鐘，最後靜坐 3 分鐘。"],
      },
      reminders: ["穿襪子練習，避免受寒。", "不要硬撐，量力而為。"],
      card: "立冬 · 讓腰腎被溫暖包裹，呼吸慢慢收藏能量。",
    },
  },
];

let currentSolarResults = solarTerms;

const practiceLibrary = [
  {
    title: "方盒呼吸",
    type: "呼吸",
    duration: "5 分鐘",
    difficulty: "初階",
    context: "專注、會議前、寫作前暖身",
    caution: "若頭暈，縮短停留秒數。",
    tags: ["專注", "短版"],
  },
  {
    title: "身體掃描（短版）",
    type: "身體掃描",
    duration: "10 分鐘",
    difficulty: "初階",
    context: "睡前、緩解焦慮、長途旅行後",
    caution: "若出現情緒波動，可停留在胸口多呼吸。",
    tags: ["睡前", "放鬆"],
  },
  {
    title: "慈心祝福",
    type: "慈心",
    duration: "12 分鐘",
    difficulty: "中階",
    context: "與人起衝突後、需要柔軟時",
    caution: "若情緒太強烈，可先做 3 輪深呼吸再開始。",
    tags: ["情緒", "柔軟"],
  },
  {
    title: "單一目標專注",
    type: "專注",
    duration: "8 分鐘",
    difficulty: "初階",
    context: "開始工作或學習前",
    caution: "專注過程中若焦慮，回到呼吸。",
    tags: ["專注", "開始"]
  },
  {
    title: "睡前落地儀式",
    type: "睡前",
    duration: "7 分鐘",
    difficulty: "初階",
    context: "睡前、旅行時換環境",
    caution: "若腿麻，改為坐姿也可。",
    tags: ["睡前", "放鬆"],
  },
  {
    title: "行走觀息",
    type: "呼吸",
    duration: "6 分鐘",
    difficulty: "中階",
    context: "散步、午休時段",
    caution: "保持腳步慢，避免邊滑手機。",
    tags: ["行走", "專注"]
  },
];

const writings = [
  {
    title: "驚蟄：把怒氣變成呼吸聲",
    category: "節氣筆記",
    summary: "雷聲提醒我們，情緒也需要出口。用吐氣聲拍打，鬆開身體的緊。",
    readTime: "4 min read",
    tags: ["驚蟄", "情緒", "呼吸"],
  },
  {
    title: "當心浮時，先讓眼神落地",
    category: "呼吸與覺察",
    summary: "視線放低，吐氣拉長，讓漂浮的心落回身體。簡單的視線調整就能安定。",
    readTime: "3 min read",
    tags: ["專注", "眼神", "吐氣"],
  },
  {
    title: "修行不是一次性突破",
    category: "修行困惑",
    summary: "真正的練習是一點點累積。與其追求大突破，不如守住每一次回來的能力。",
    readTime: "5 min read",
    tags: ["日常", "節奏", "耐心"],
  },
  {
    title: "讓節氣成為生活的提醒",
    category: "生活整合",
    summary: "把日曆上的節氣變成身體的鬧鐘：調整作息、飲食與微練習。",
    readTime: "4 min read",
    tags: ["節氣", "生活", "實踐"],
  },
  {
    title: "睡前 7 分鐘的落地儀式",
    category: "生活整合",
    summary: "不用冗長儀式，只需 7 分鐘讓神經系統收斂，身體自然進入睡眠。",
    readTime: "3 min read",
    tags: ["睡前", "放鬆"],
  },
];

function createPattern() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("id", "pattern-bg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "0 0 800 800");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.position = "fixed";
  svg.style.inset = "0";
  svg.style.zIndex = "-1";
  svg.style.opacity = "0.6";
  svg.style.pointerEvents = "none";

  const defs = document.createElementNS(svgNS, "defs");
  const pattern = document.createElementNS(svgNS, "pattern");
  pattern.setAttribute("id", "geom");
  pattern.setAttribute("patternUnits", "userSpaceOnUse");
  pattern.setAttribute("width", "120");
  pattern.setAttribute("height", "120");

  const bg = document.createElementNS(svgNS, "rect");
  bg.setAttribute("width", "120");
  bg.setAttribute("height", "120");
  bg.setAttribute("fill", "rgba(255,255,255,0.2)");
  pattern.appendChild(bg);

  for (let i = 0; i < 8; i++) {
    const circle = document.createElementNS(svgNS, "circle");
    const x = 15 + i * 12;
    const y = (i % 4) * 24 + 20;
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", i % 2 === 0 ? "rgba(159,179,200,0.25)" : "rgba(184,198,185,0.22)");
    pattern.appendChild(circle);
  }

  for (let i = 0; i < 4; i++) {
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", i * 30);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 120 - i * 10);
    line.setAttribute("y2", 120);
    line.setAttribute("stroke", "rgba(31,27,22,0.05)");
    line.setAttribute("stroke-width", "1");
    pattern.appendChild(line);
  }

  const poly = document.createElementNS(svgNS, "polygon");
  poly.setAttribute("points", "60,10 90,60 60,110 30,60");
  poly.setAttribute("fill", "rgba(214,200,190,0.2)");
  pattern.appendChild(poly);

  defs.appendChild(pattern);
  svg.appendChild(defs);

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", "100%");
  rect.setAttribute("height", "100%");
  rect.setAttribute("fill", "url(#geom)");
  svg.appendChild(rect);

  document.body.appendChild(svg);
}

function combinePractice(duration, intention, body) {
  const base = practicePresets[intention];
  const adjust = bodyAdjustments[body] || {};
  const merged = {
    setup: adjust.setup || base.setup,
    breath: `${base.breath} ${adjust.breath || ""}`.trim(),
    mind: `${base.mind} ${adjust.mind || ""}`.trim(),
    close: base.close,
    note: `${base.note} ${adjust.note || ""}`.trim(),
  };
  return {
    title: `${intention} · ${duration} 分鐘`,
    ...merged,
    close: `${merged.close} 時間：約 ${duration} 分鐘。`,
  };
}

function renderPracticeCard() {
  const duration = document.getElementById("duration").value;
  const intention = document.getElementById("intention").value;
  const body = document.getElementById("body").value;
  const card = combinePractice(duration, intention, body);
  document.getElementById("practice-title").textContent = card.title;
  document.getElementById("practice-setup").textContent = card.setup;
  document.getElementById("practice-breath").textContent = card.breath;
  document.getElementById("practice-mind").textContent = card.mind;
  document.getElementById("practice-close").textContent = card.close;
  document.getElementById("practice-note").textContent = card.note;
}

function renderSolarFilters() {
  const bodySelect = document.getElementById("filter-body");
  const emotionSelect = document.getElementById("filter-emotion");
  const bodies = new Set();
  const emotions = new Set();
  solarTerms.forEach((term) => {
    bodies.add(term.body);
    emotions.add(term.emotion);
  });
  bodies.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    bodySelect.appendChild(opt);
  });
  emotions.forEach((e) => {
    const opt = document.createElement("option");
    opt.value = e;
    opt.textContent = e;
    emotionSelect.appendChild(opt);
  });
}

function renderSolarGrid(list = solarTerms) {
  const grid = document.getElementById("solar-grid");
  grid.innerHTML = "";
  if (!list || list.length === 0) {
    const emptyCard = document.createElement("div");
    emptyCard.className = "card list-item detail-empty";
    emptyCard.textContent = "目前沒有符合條件的節氣，調整篩選再看看。";
    grid.appendChild(emptyCard);
    return;
  }
  list.forEach((term) => {
    const card = document.createElement("div");
    card.className = "card list-item";
    card.innerHTML = `
      <div class="meta">${term.range}</div>
      <h3>${term.name}</h3>
      <div class="tags">
        <span class="chip">身體：${term.body}</span>
        <span class="chip">情緒：${term.emotion}</span>
        <span class="chip">練習：${term.duration} 分鐘</span>
      </div>
      <p>${term.rhythm}</p>
      <p class="meta">練習：${term.practice}</p>
      <button class="btn ghost" data-term="${term.id}">查看詳情</button>
    `;
    grid.appendChild(card);
  });
}

function renderSolarDetail(term, list = solarTerms) {
  const container = document.getElementById("solar-detail");

  if (!list || list.length === 0) {
    container.innerHTML = `<div class="detail-empty">目前沒有符合條件的節氣，調整篩選再看看。</div>`;
    return;
  }

  const source = list || solarTerms;
  const selected = term || source[0];

  container.innerHTML = `
    <h3>${selected.name} · ${selected.range}</h3>
    <p>${selected.detail.climate}</p>
    <div class="detail-grid">
      <div>
        <p class="label">身體訊號</p>
        <ul>${selected.detail.bodySignals.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="label">心的訊號</p>
        <ul>${selected.detail.heartSignals.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="detail-grid">
      <div>
        <p class="label">今日練習 5–8 分鐘</p>
        <ol>${selected.detail.practices.short.map((s) => `<li>${s}</li>`).join("")}</ol>
      </div>
      <div>
        <p class="label">今日練習 10–15 分鐘</p>
        <ol>${selected.detail.practices.long.map((s) => `<li>${s}</li>`).join("")}</ol>
      </div>
    </div>
    <div>
      <p class="label">常見偏誤與溫柔提醒</p>
      <ul>${selected.detail.reminders.map((r) => `<li>${r}</li>`).join("")}</ul>
    </div>
    <div class="card" style="margin-top:12px; background: rgba(255,255,255,0.85);">
      <p class="eyebrow">節氣卡</p>
      <p>${selected.detail.card}</p>
    </div>
  `;
}

function filterSolar() {
  const body = document.getElementById("filter-body").value;
  const emotion = document.getElementById("filter-emotion").value;
  const duration = document.getElementById("filter-duration").value;
  let filtered = solarTerms;
  if (body !== "all") filtered = filtered.filter((t) => t.body === body);
  if (emotion !== "all") filtered = filtered.filter((t) => t.emotion === emotion);
  if (duration !== "all") filtered = filtered.filter((t) => `${t.duration}` === duration);
  currentSolarResults = filtered;
  renderSolarGrid(filtered);
  renderSolarDetail(filtered[0], filtered);
}

function renderLibrary(list = practiceLibrary) {
  const container = document.getElementById("library-list");
  container.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card list-item";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <div class="tags">
        <span class="chip">${item.type}</span>
        <span class="chip">${item.duration}</span>
        <span class="chip">${item.difficulty}</span>
      </div>
      <p class="meta">適合：${item.context}</p>
      <p class="meta">注意：${item.caution}</p>
      <div class="tags">${item.tags.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
    `;
    container.appendChild(card);
  });
}

function filterLibrary() {
  const keyword = document.getElementById("library-search").value.toLowerCase();
  const type = document.getElementById("library-filter").value;
  const filtered = practiceLibrary.filter((item) => {
    const matchType = type === "all" || item.type === type;
    const matchKeyword = item.title.toLowerCase().includes(keyword) || item.context.toLowerCase().includes(keyword);
    return matchType && matchKeyword;
  });
  renderLibrary(filtered);
}

function renderWriting(list = writings) {
  const container = document.getElementById("writing-list");
  container.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card list-item";
    card.innerHTML = `
      <div class="meta">${item.category} · ${item.readTime}</div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="tags">${item.tags.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
    `;
    container.appendChild(card);
  });
}

function filterWriting() {
  const keyword = document.getElementById("writing-search").value.toLowerCase();
  const category = document.getElementById("writing-filter").value;
  const filtered = writings.filter((item) => {
    const matchCategory = category === "all" || item.category === category;
    const text = `${item.title} ${item.summary} ${item.tags.join(" ")}`.toLowerCase();
    return matchCategory && text.includes(keyword);
  });
  renderWriting(filtered);
}

function registerEvents() {
  document.getElementById("generate").addEventListener("click", renderPracticeCard);
  document.getElementById("download-card").addEventListener("click", () => {
    alert("下載功能即將上線，現在可截圖或另存練習卡。");
  });

  document.getElementById("filter-body").addEventListener("change", filterSolar);
  document.getElementById("filter-emotion").addEventListener("change", filterSolar);
  document.getElementById("filter-duration").addEventListener("change", filterSolar);
  document.getElementById("library-search").addEventListener("input", filterLibrary);
  document.getElementById("library-filter").addEventListener("change", filterLibrary);
  document.getElementById("writing-search").addEventListener("input", filterWriting);
  document.getElementById("writing-filter").addEventListener("change", filterWriting);

  document.getElementById("solar-grid").addEventListener("click", (e) => {
    if (e.target.matches("button[data-term]")) {
      const term = solarTerms.find((t) => t.id === e.target.dataset.term);
      renderSolarDetail(term, currentSolarResults);
    }
  });

  document.querySelectorAll(".link-card").forEach((card) => {
    card.addEventListener("click", () => {
      const target = card.dataset.target;
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function init() {
  createPattern();
  renderPracticeCard();
  renderSolarFilters();
  renderSolarGrid();
  currentSolarResults = solarTerms;
  renderSolarDetail();
  renderLibrary();
  renderWriting();
  registerEvents();
  setupReveal();
}

window.addEventListener("DOMContentLoaded", init);

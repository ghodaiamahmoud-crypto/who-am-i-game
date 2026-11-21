const levels = [
    // المستوى الأول: مكونات الكمبيوتر
    [
        {
            question: "أنا العقل المسؤول عن تنفيذ التعليمات ومعالجة البيانات داخل الكمبيوتر. مين أنا؟",
            answers: ["RAM", "CPU", "Mouse", "Monitor"],
            correct: 1,
            hints: ["أنا موجود داخل صندوق الكمبيوتر.", "أُعتبر عقل الكمبيوتر.", "اسمي اختصار Central Processing Unit."]
        },
        {
            question: "أنا ذاكرة مؤقتة، أفقد بياناتي عند إغلاق الجهاز. مين أنا؟",
            answers: ["Hard Disk", "Flash", "RAM", "DVD"],
            correct: 2,
            hints: ["أساعد في تشغيل البرامج.", "أخزن البيانات مؤقتًا.", "اسمي Random Access Memory."]
        },
        {
            question: "أنا أستخدم لتحريك المؤشر والضغط على العناصر في الشاشة. مين أنا؟",
            answers: ["Keyboard", "Mouse", "Printer", "Speaker"],
            correct: 1,
            hints: ["أنا جهاز إدخال.", "يمكن أن أكون لاسلكيًا.", "أنا الفأرة."]
        },
        {
            question: "أنا أعرض الصور والنصوص والفيديوهات أمامك. مين أنا؟",
            answers: ["Monitor", "CPU", "Router", "Scanner"],
            correct: 0,
            hints: ["أنا جهاز إخراج.", "أعرض لك ما يحدث داخل الكمبيوتر.", "أنا الشاشة."]
        },
        {
            question: "أنا أستخدم لإدخال الحروف والأرقام والأوامر للكمبيوتر. مين أنا؟",
            answers: ["Screen", "Keyboard", "Printer", "USB"],
            correct: 1,
            hints: ["أحتوي على أزرار كثيرة.", "تستخدم أصابعي للتعامل معي.", "أنا لوحة المفاتيح."]
        }
    ],

    // المستوى الثاني: البرامج والتطبيقات
    [
        {
            question: "أنا نظام تشغيل مشهور من شركة Microsoft. مين أنا؟",
            answers: ["Linux", "Android", "Windows", "iOS"],
            correct: 2,
            hints: ["أعمل على أجهزة الكمبيوتر.", "لدي إصدارات مثل 10 و11.", "أنا Windows."]
        },
        {
            question: "أنا برنامج تستخدمه لتصفح مواقع الإنترنت. مين أنا؟",
            answers: ["Paint", "Chrome", "Calculator", "WordPad"],
            correct: 1,
            hints: ["أفتح صفحات الويب.", "لدي شعار دائري بألوان متعددة.", "أنا Google Chrome."]
        },
        {
            question: "أنا برنامج مشهور لكتابة وتنسيق المستندات. مين أنا؟",
            answers: ["Excel", "PowerPoint", "Word", "Access"],
            correct: 2,
            hints: ["أستخدم في كتابة الأبحاث.", "أستطيع تغيير الخطوط والألوان.", "أنا Microsoft Word."]
        },
        {
            question: "أنا برنامج يستخدم لإنشاء العروض التقديمية بالشرائح. مين أنا؟",
            answers: ["Word", "PowerPoint", "Notepad", "Chrome"],
            correct: 1,
            hints: ["أستخدم في شرح المشاريع.", "أتعامل مع Slides.", "أنا PowerPoint."]
        },
        {
            question: "أنا برنامج أستخدم لتنظيم البيانات في جداول وإجراء الحسابات. مين أنا؟",
            answers: ["Excel", "Paint", "VLC", "Chrome"],
            correct: 0,
            hints: ["أتعامل مع الخلايا.", "أستخدم المعادلات.", "أنا Microsoft Excel."]
        }
    ],

    // المستوى الثالث: لغات البرمجة
    [
        {
            question: "أنا لغة أستخدم لبناء هيكل صفحات الويب. مين أنا؟",
            answers: ["CSS", "HTML", "SQL", "Python"],
            correct: 1,
            hints: ["أنا من أساسيات تطوير الويب.", "أحدد العناوين والفقرات والصور.", "أنا HTML."]
        },
        {
            question: "أنا لغة أتحكم في ألوان وتصميم صفحات الويب. مين أنا؟",
            answers: ["HTML", "Java", "CSS", "SQL"],
            correct: 2,
            hints: ["أهتم بالمظهر.", "أغير الخلفية والخطوط والمسافات.", "أنا CSS."]
        },
        {
            question: "أنا لغة تجعل صفحات الويب تفاعلية وتضيف الحركة والمنطق. مين أنا؟",
            answers: ["CSS", "JavaScript", "HTML", "XML"],
            correct: 1,
            hints: ["أعمل مع HTML وCSS.", "أتعامل مع الأزرار والأحداث.", "أنا JavaScript."]
        },
        {
            question: "أنا لغة برمجة مشهورة بسهولة القراءة، وأستخدم في الذكاء الاصطناعي. مين أنا؟",
            answers: ["Python", "HTML", "CSS", "SQL"],
            correct: 0,
            hints: ["اسمي مرتبط بحيوان.", "لدي استخدامات كثيرة.", "أنا Python."]
        },
        {
            question: "أنا لغة تستخدم لإدارة قواعد البيانات والاستعلام عن المعلومات. مين أنا؟",
            answers: ["CSS", "SQL", "Photoshop", "HTML"],
            correct: 1,
            hints: ["أتعامل مع قواعد البيانات.", "أستخدم أمر SELECT.", "أنا SQL."]
        }
    ],

    // المستوى الرابع: عالم التكنولوجيا
    [
        {
            question: "أنا جهاز يربط الشبكات ببعضها ويوجه البيانات. مين أنا؟",
            answers: ["Keyboard", "Router", "Monitor", "Scanner"],
            correct: 1,
            hints: ["أستخدم في الشبكات.", "أساعد الأجهزة على الاتصال بالإنترنت.", "أنا Router."]
        },
        {
            question: "أنا مجموعة من البيانات المنظمة التي يمكن تخزينها واسترجاعها. مين أنا؟",
            answers: ["Database", "Mouse", "Browser", "Screen"],
            correct: 0,
            hints: ["أخزن المعلومات بطريقة منظمة.", "يمكن البحث في بياناتي.", "أنا Database."]
        },
        {
            question: "أنا مجال يهتم بحماية الأجهزة والشبكات والبيانات من الهجمات. مين أنا؟",
            answers: ["Graphic Design", "Cybersecurity", "Animation", "Typing"],
            correct: 1,
            hints: ["أهتم بالحماية الرقمية.", "أواجه الفيروسات والهجمات.", "أنا Cybersecurity."]
        },
        {
            question: "أنا تقنية تجعل الأجهزة تحاكي بعض قدرات التفكير والتعلم البشري. مين أنا؟",
            answers: ["Artificial Intelligence", "Keyboard", "USB", "Monitor"],
            correct: 0,
            hints: ["أنا تقنية حديثة.", "أستطيع تحليل البيانات والتعلم منها.", "أنا الذكاء الاصطناعي AI."]
        },
        {
            question: "أنا عنوان يستخدم للتعرف على موقع أو جهاز على شبكة الإنترنت. مين أنا؟",
            answers: ["CPU", "IP Address", "RAM", "HTML"],
            correct: 1,
            hints: ["أستخدم في الشبكات.", "قد يحتوي عنواني على أرقام ونقاط.", "أنا IP Address."]
        }
    ]
];

let currentLevel = 0;
let currentQuestion = 0;
let score = 0;
let hintIndex = 0;
let questions = [];
let answered = false;

const levelNames = [
    "مكونات الكمبيوتر",
    "البرامج والتطبيقات",
    "لغات البرمجة",
    "عالم التكنولوجيا"
];

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

function showLevels() {
    showScreen("levels-screen");
}

function goHome() {
    showScreen("home-screen");
}

function startGame(levelIndex) {
    currentLevel = levelIndex;
    currentQuestion = 0;
    score = 0;

    // خلط الأسئلة حتى لا تظهر بنفس الترتيب كل مرة
    questions = [...levels[levelIndex]].sort(() => Math.random() - 0.5);

    document.getElementById("score").textContent = score;
    showScreen("game-screen");
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    hintIndex = 0;

    const q = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `السؤال ${currentQuestion + 1}`;

    document.getElementById("progress-text").textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("progress-fill").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    document.getElementById("question-text").textContent = q.question;
    document.getElementById("hint-text").textContent = "اضغط على زر التلميح لو احتجت مساعدة.";
    document.getElementById("feedback").textContent = "";

    const nextBtn = document.getElementById("next-btn");
    nextBtn.classList.add("hidden");
    nextBtn.textContent = currentQuestion === questions.length - 1
        ? "عرض النتيجة 🏆"
        : "السؤال التالي ➜";

    const hintBtn = document.querySelector(".hint-btn");
    hintBtn.disabled = false;
    hintBtn.textContent = "كشف تلميح 🔍";

    const answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, btn);
        answersContainer.appendChild(btn);
    });
}

function showHint() {
    if (answered) return;

    const q = questions[currentQuestion];

    if (hintIndex < q.hints.length) {
        document.getElementById("hint-text").textContent =
            "💡 " + q.hints[hintIndex];

        // خصم نقطتين مقابل كل تلميح
        score = Math.max(0, score - 2);
        document.getElementById("score").textContent = score;

        hintIndex++;
    }

    if (hintIndex >= q.hints.length) {
        const hintBtn = document.querySelector(".hint-btn");
        hintBtn.disabled = true;
        hintBtn.textContent = "انتهت التلميحات";
    }
}

function checkAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];
    const allButtons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");

    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.correct) {
        selectedButton.classList.add("correct");

        // 10 نقاط للإجابة الصحيحة
        score += 10;

        feedback.textContent = "🎉 إجابة صحيحة! أحسنت!";
        feedback.style.color = "#48d597";
    } else {
        selectedButton.classList.add("wrong");
        allButtons[q.correct].classList.add("correct");

        feedback.textContent =
            "❌ إجابة غير صحيحة! الإجابة هي: " + q.answers[q.correct];

        feedback.style.color = "#ff7d91";
    }

    document.getElementById("score").textContent = score;

    document.querySelector(".hint-btn").disabled = true;
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    showScreen("result-screen");

    document.getElementById("final-score").textContent =
        `${score} / 50`;

    let message;

    if (score >= 40) {
        message = "🌟 عبقري! أنت خبير في عالم الكمبيوتر والبرمجة!";
    } else if (score >= 25) {
        message = "👏 ممتاز! معلوماتك جيدة جدًا، استمر في التعلم!";
    } else if (score >= 10) {
        message = "💪 بداية جيدة! حاول مرة أخرى لتحصل على نقاط أكثر.";
    } else {
        message = "🚀 لا تستسلم! العب مرة أخرى وتعلم معلومات جديدة.";
    }

    document.getElementById("result-message").textContent =
        `${levelNames[currentLevel]} — ${message}`;
}
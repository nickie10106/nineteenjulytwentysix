// ==========================================
// THE QUIZ DATABASE
// ==========================================
const quizzes = {
    'quiz-1': {
        icon: 'img/4.png',
        title: 'know me',
        subtitle: 'how well do you know me?',
        questions: [
            { q: "What would kill me if I ate it?", options: ["Mozerella Pizza", "Chicken Masala", "Bing Su", "Congee"], correct: 2 },
            { q: "What was NOT a career I considered as a child?", options: ["Runway Model", "Deep Sea Explorer", "Archeologist", "Author", "Fashion Designer"], correct: 1 },
            { q: "What are my nicknames for my babies (Natalie, Benjamin and Valerie)?", options: ["Nutella, Ben, Vally", "Nat, Ben, Val", "Sunshine, Monster1, Monster2", "NatNat, Benjy, ValVal"], correct: 4 },
            { q: "What flowers do I like?", options: ["Pink Roses", "Carnations", "Sunflowers", "Sweet Pea"], correct: [1, 2, 3, 4] },
            { q: "If I had 10 million dollars, what is the first thing I would buy?", options: ["Old Malls", "Stocks", "Clothes", "Property"], correct: 1 },
            { q: "I admire pandas. What is the number 1 reason I look up to them?", options: ["False thumbs", "Pretty previlege", "Sit on babies", "Laziness"], correct: 2 },
            { q: "Which part of Singapore do I live in?", options: ["Sengkang", "Botanic Gardens", "Punggol", "Yio Chu Kang"], correct: 3 },
            { q: "What was my original hair colour?", options: ["Chocolate brown", "Pitch black", "Tan brown", "Raven"], correct: 1 },
            { q: "What did I study before Psychology?", options: ["Journalism", "Creative Writing", "Mass Communications", "Graphic Design"], correct: 3 },
            { q: "What would 100% motivate me while Im in worm mode?", options: ["Death", "Deadlines", "Nothing can motivate me", "Boredom"], correct: 4 },
            { q: "When I imagine myself, what hair colour do I imagine myself in?", options: ["Plum", "Pink", "Blonde", "Whatever I have on"], correct: 3 },
            { q: "Which phobia do I NOT have?", options: ["Cacophobia", "Molluscophobia", "Thalassophobia", "Trypophobia"], correct: 3 }
        ]
    },
    'quiz-2': {
        icon: 'img/5.png',
        title: 'my favs',
        subtitle: 'This should be the easiest one since I like so many things. Just know I will judge you if you get it wrong.',
        questions: [
            { q: "What is my favourite shade of pink?", options: ["Fuschsia", "Carnation Pink", "Dusty Pink", "Blush Pink"], correct: 3 },
            { q: "What is my favourite type of chocolate?", options: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"], correct: 3 },
            { q: "What is my favourite ship of all time?", options: ["HaruMichi", "JonDami", "Wolfstar", "SuperCorp"], correct: 3 },
            { q: "Who is my favourite fictional vampire?", options: ["Carmilla From Carmilla", "Lestat from Interview w The Vampire", "Alucard from Hellsing", "Mika from Owari no Seraph"], correct: [2, 3] },
            { q: "What is my favourite type of Lolita subculture?", options: ["Kawaii", "Gothic", "Guro/Gore", "Hime/Princess"], correct: 4 },
            { q: "What is my second favourite animal?", options: ["Bottlenose dolphins", "Bengal Tigers", "Capybara", "Small Clawed River Otters"], correct: 1 },
            { q: "What is my favourite classic?", options: ["Wuthering Heights", "Through the Looking Glass", "The Picture of Dorian Gray", "The Little Mermaid"], correct: [3, 4] },
            { q: "What is my favourite hair colour I have done?", options: ["Cotton Candy", "Lilac", "Split Hair", "Changes Everyday"], correct: 1 },
            { q: "What is my favourite place in Singapore?", options: ["The Zoo", "Sentosa Beach", "My Bed", "The Singapore Art Gallery"], correct: 2 },
            { q: "What is my favourite food?", options: ["Aglio Olio", "Tonkatsu Ramen", "Chinese Prawn Noodle", "Nasi Lemak"], correct: 4 },
            { q: "What is my favourite romance trope?", options: ["Love Triangle", "Fantasy Enemies to Lovers", "Slowburn Friends to Lovers", "Fated Pairs"], correct: 3 }
        ]
    },
    'quiz-3': {
        icon: 'img/6.png',
        title: 'アニメ',
        subtitle: 'I had to learn about your anime ranking list against my will so now you have no choice but to pay attention to mine.',
        questions: [
            { q: "What is the anime that got me into anime?", options: ["Inuyasha", "YuYuHakusho", "Sailor Moon", "Blood C"], correct: 1 },
            { q: "My favourite mangaka of all time is ___________.", options: ["Mochizuki Jun (Pandora Hearts)", "Takahashi Rumiko (Inuyasha)", "Takeuchi Naoko (Sailor Moon)", "Tanemura Arina (Kaitou Jeanne)"], correct: 4 },
            { q: "I say that this anime ruinned my life cause it got me into yaoi.", options: ["Kuroko no Basuke", "Yuri on Ice!!", "Free!Iwatobi Swim Club", "Haikyu!!"], correct: 3 },
            { q: "What is the one genre of anime I avoid (not for bad reasons, I just don\'t like it)?", options: ["Mecha", "Harem", "Ecchi", "Shounen"], correct: 1 },
            { q: "Which character did I pray to everyday before GCSEs?", options: ["Sailor Moon", "Clow Reed (Cardcaptor Sakura)", "Rei (Ensemble Stars)", "Dazai (Bungou Stray Dogs)"], correct: 3 },
            { q: "What is my favourite genre of anime to watch when Im stressed?", options: ["Gag Anime", "Slice of Life", "Shoujo", "Horror"], correct: 1 },
            { q: "Which character did I collect many figures of when I was a child?", options: ["Makoto (Free!Iwatobi)", "Hatsune Miku (Vocaloid)", "Asuka (Evangelion)", "Mirajane (Fairytail)"], correct: 2 },
            { q: "Which fairytail character do I want to marry?", options: ["Mirajane", "Lucy", "Cana", "Lisanna"], correct: 2 },
            { q: "Who was Ichigo from Bleach supposed to end up with?", options: ["Rukia", "Kuchiki Rukia", "Rukia NOT Orihime", "The first shinigami he met, Rukia"], correct: [1, 2, 3, 4] },
            { q: "What genre of anime was I obsessed with growing up?", options: ["Idol", "Magical Girl", "Romance", "Action"], correct: [1, 2] }
        ]
    },
    'quiz-4': {
        icon: 'img/8.png',
        title: 'star signs',
        subtitle: 'We can\'t be soulmates if you don\'t know about our star charts.',
        questions: [
            { q: "Where was our first date?", options: ["Cinema", "Coffee Shop", "Park", "Restaurant"], correct: 1 }
        ]
    },
    'quiz-5': {
        icon: 'img/9.png',
        title: 'side quests',
        subtitle: 'I procrastinate by doing random side quests and coming back with 100 balls of yarn. How many of my hobbies do you know about?',
        questions: [
            { q: "Where was our first date?", options: ["Cinema", "Coffee Shop", "Park", "Restaurant"], correct: 1 }
        ]
    },
    'quiz-6': {
        icon: 'img/10.png',
        title: '2 truths, 1 lie',
        subtitle: 'I have made too many oopsie daisies. Let\'s see which ones you know of.',
        questions: [
            { q: "Where was our first date?", options: ["Cinema", "Coffee Shop", "Park", "Restaurant"], correct: 1 }
        ]
    }
};

// ==========================================
// QUIZ ENGINE VARIABLES
// ==========================================
let currentQuizId = '';
let currentQuestionIndex = 0;
let score = 0;
let noButtonScale = 1;

// 1. Open the Start Screen for a specific quiz
function openQuizStart(quizId) {
    currentQuizId = quizId;
    const quizData = quizzes[quizId];
    
    // Reset the "NO" button size
    noButtonScale = 1;
    document.getElementById('quiz-no-btn').style.transform = `scale(1)`;

    // Inject the specific quiz details into the Start Screen
    document.getElementById('start-icon').src = quizData.icon;
    document.getElementById('start-title').innerText = quizData.title;
    document.getElementById('start-subtitle').innerText = quizData.subtitle;

    showScreen('quiz-start-screen');
}

// 2. Shrink the NO button on the Start Screen
function shrinkNoButton() {
    noButtonScale -= 0.2; // Shrinks by 20%
    if (noButtonScale < 0.2) noButtonScale = 0.2; // Prevents it from disappearing completely
    document.getElementById('quiz-no-btn').style.transform = `scale(${noButtonScale})`;
}

// 3. Start the actual questions
function startQuizQuestions() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    showScreen('quiz-question-screen');
}

// 4. Load a question and update UI
function loadQuestion() {
    const quizData = quizzes[currentQuizId];
    const qData = quizData.questions[currentQuestionIndex];

    // Update Headers
    document.getElementById('q-icon-left').src = quizData.icon;
    document.getElementById('q-icon-right').src = quizData.icon;
    document.getElementById('q-title').innerText = quizData.title;
    document.getElementById('q-subtitle').innerText = quizData.subtitle;

    // Update Progress Bar
    const progressPercent = (currentQuestionIndex / quizData.questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
    document.getElementById('progress-star').style.left = `${progressPercent}%`;

    // Update Question Text
    document.getElementById('q-number').innerText = `Q${currentQuestionIndex + 1}`;
    document.getElementById('q-text').innerText = qData.q;

    // Update Answers Container
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = ''; // Clear old buttons
    
    // Ensure container is clickable again for the new question
    answersContainer.classList.remove('disabled');
    
    qData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'pill-btn';
        btn.innerText = option;
        
        // NOTICE: We are now passing 'btn' itself as a third setting!
        btn.onclick = () => handleAnswer(index, qData.correct, btn);
        answersContainer.appendChild(btn);
    });
}

// 5. Check Answer with Color Feedback & Delay
function handleAnswer(selectedIndex, correctAnswers, clickedBtn) {
    // 1. Instantly lock inputs so they can't double-click or pick another option
    const container = document.getElementById('answers-container');
    container.classList.add('disabled');

    // 2. Verify if choice is correct (handles single number or array)
    let isCorrect = false;
    if (Array.isArray(correctAnswers)) {
        isCorrect = correctAnswers.includes(selectedIndex);
    } else {
        isCorrect = (selectedIndex === correctAnswers);
    }

    // 3. Paint the button based on correctness
    if (isCorrect) {
        score++;
        clickedBtn.classList.add('correct-choice');
    } else {
        clickedBtn.classList.add('wrong-choice');
        
        // Optional: If you want to also highlight the right answer so he learns,
        // you could uncomment the lines below!
        /*
        Array.from(container.children).forEach((btn, idx) => {
            if (Array.isArray(correctAnswers) ? correctAnswers.includes(idx) : idx === correctAnswers) {
                btn.classList.add('correct-choice');
            }
        });
        */
    }

    // 4. Wait exactly 1.2 seconds before transitioning to give him time to look
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizzes[currentQuizId].questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200); 
}

// 6. Show the Final Score & Dynamic Image
function showResults() {
    const quizData = quizzes[currentQuizId];
    const totalQuestions = quizData.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Update Headers
    document.getElementById('result-icon').src = quizData.icon;
    document.getElementById('result-title').innerText = quizData.title;
    document.getElementById('result-subtitle').innerText = quizData.subtitle;
    document.getElementById('result-score').innerText = `${percentage}%`;

    // Dynamic Images & Messages based on exact score ranges
    const imgElement = document.getElementById('result-image');
    const msgElement = document.getElementById('result-message');

    if (percentage >= 91) {
        // 91% to 100%
        imgElement.src = 'img/re91100.png';
        msgElement.innerText = "Soulmate behaviour? I guess you really do know me.";
    } else if (percentage >= 76) {
        // 76% to 90%
        imgElement.src = 'img/re7690.png';
        msgElement.innerText = "Shut up! I get it. I've been percieved.";
    } else if (percentage >= 61) {
        // 61% to 75%
        imgElement.src = 'img/re6175.png';
        msgElement.innerText = "Hmmm... Some might you DO know me.";
    } else if (percentage >= 41) {
        // 41% to 60%
        imgElement.src = 'img/re4160.png';
        msgElement.innerText = "well, thats a merit... i guess..."; // Matches your design!
    } else if (percentage >= 21) {
        // 21% to 40%
        imgElement.src = 'img/re2140.png';
        msgElement.innerText = "Better luck next time, King. Your elephant memory sucks.";
    } else {
        // 0% to 20%
        imgElement.src = 'img/re0020.png';
        msgElement.innerText = "I thought you would've known me better than that...";
    }

    showScreen('quiz-result-screen');
}


// ==========================================
// 1. THE IMPORTANT DATES (JS months start at 0!)
// ==========================================
const birthdayDate = new Date(2020, 6, 19, 0, 0, 0).getTime(); // July 19, 2026
const officialDate = new Date(2026, 3, 25, 0, 0, 0).getTime(); // April 25, 2026

// ==========================================
// 2. SCREEN NAVIGATION LOGIC
// ==========================================
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show the requested screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// When "Yes" is clicked on the Gateway Screen
document.getElementById('yes-btn').addEventListener('click', () => {
    const now = new Date().getTime();
    
    if (now >= birthdayDate) {
        // If it IS his birthday, go straight to the Menu!
        showScreen('menu-screen');
    } else {
        // If it is NOT his birthday yet, send him to the Countdown lock screen
        showScreen('countdown-screen');
    }
});

// Track the size multiplier of the Yes button (starts at 100%)
let yesButtonScale = 1;

// When "No" is clicked, make the Yes button grow bigger and bigger!
document.getElementById('no-btn').addEventListener('click', () => {
    yesButtonScale += 0.35; // Increases the size by 35% with every single click!
    
    const yesBtn = document.getElementById('yes-btn');
    if (yesBtn) {
        yesBtn.style.transform = `scale(${yesButtonScale})`;
    }
});


// ==========================================
// 3. TIMER 1: COUNTDOWN TO BIRTHDAY (Screen 2)
// ==========================================
function updateBirthdayCountdown() {
    const timerDisplay = document.getElementById('timer');
    if (!timerDisplay) return;

    const now = new Date().getTime();
    const distance = birthdayDate - now; // Future date minus now

    // If the birthday has already arrived
    if (distance < 0) {
        timerDisplay.innerHTML = "It's time! Refresh the page!";
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


// ==========================================
// 4. TIMER 2: TOTAL DATING COUNTER (Menu Screen)
// ==========================================
function updateDatingCounter() {
    const counterDisplay = document.getElementById('hours-counter');
    if (!counterDisplay) return;

    const now = new Date().getTime();
    const distance = now - officialDate; // Now minus past date (Counts UP)

    // Time calculations for total days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Displays inside your custom green widget frame!
    counterDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


// ==========================================
// 5. START BOTH TIMERS LIVE
// ==========================================
// Run them immediately so there is no lag
updateBirthdayCountdown();
updateDatingCounter();

// Keep them updated every single second
setInterval(() => {
    updateBirthdayCountdown();
    updateDatingCounter();
}, 1000);
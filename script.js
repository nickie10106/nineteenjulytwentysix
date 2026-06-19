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
            { q: "What was NOT a career I considered as a child?", options: ["Rich Person", "Deep Sea Explorer", "Archeologist", "Author", "Surgeon", "Botanist", "Astrologist"], correct: 5 },
            { q: "What are my nicknames for my babies (Natalie, Benjamin and Valerie)?", options: ["Nutella, Ben, Vally", "Nat, Ben, Val", "My Sunshine, Monster1, Monster2", "Baby NatNat, Benjy, ValVal"], correct: 3 },
            { q: "If I had 10 million dollars, what is the first venture would I fund?", options: ["Turning old malls into housing for the homeless", "Bribe schools to make education less academic focused and more on exploration", "Fund independent art studios and provide 3D printing filament made of recycled bottles", "Fund wildlife sanctuaries for marine research so that marine life do not need to stay in aquariums"], correct: 1 },
            { q: "I admire pandas. What is the number 1 reason I look up to them?", options: ["They have false thumbs that allow them to grip things and so they don't have to move to grab things. They just stretch.", "They are bad at everything but they get by solely by pretty previlege and they are treated like precious treasures just for being cute", "They sit on their babies a lot on accident. Their carelessness reminds me of my childhood.", "They can roll around all day and they have no survival instincts so their body would prioritise being lazy over finding food"], correct: 2 }
        ]
    },
    'quiz-2': {
        icon: 'img/5.png',
        title: 'my favs',
        subtitle: 'This should be the easiest one since I like so many things. Just know I will judge you if you get it wrong.',
        questions: [
            { q: "Where was our first date?", options: ["Cinema", "Coffee Shop", "Park", "Restaurant"], correct: 1 }
        ]
    },
    'quiz-3': {
        icon: 'img/6.png',
        title: 'アニメ',
        subtitle: 'I had to learn about your anime ranking list against my will so now you have no choice but to pay attention to mine.',
        questions: [
            { q: "Where was our first date?", options: ["Cinema", "Coffee Shop", "Park", "Restaurant"], correct: 1 }
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
    
    qData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'pill-btn';
        btn.innerText = option;
        btn.onclick = () => handleAnswer(index, qData.correct);
        answersContainer.appendChild(btn);
    });
}

// 5. Check Answer and Move to Next
function handleAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) { score++; }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizzes[currentQuizId].questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
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
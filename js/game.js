/* ==========================================
   NIRD Quest - Game Logic (FIXED)
   ========================================== */

// Game State
let pendingFeedbackData = null; 

let gameState = {
    currentQuestion: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    answeredQuestions: [],
    isAnimating: false,
    previousScreen: 'welcome',
    battleResult: null,
    currentLevel: 1, // ADD THIS
    totalLevels: 4   // ADD THIS
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen'),
    learn: document.getElementById('learn-screen')
};

const gameElements = {
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    score: document.getElementById('score'),
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    scenarioContext: document.getElementById('scenario-context'),
    choicesContainer: document.getElementById('choices-container'),
    feedbackModal: document.getElementById('feedback-modal'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackTitle: document.getElementById('feedback-title'),
    pointsChange: document.getElementById('points-change'),
    nirdCardContent: document.getElementById('nird-card-content'),
    questionCard: document.getElementById('question-card')
};

const resultElements = {
    rankBadge: document.getElementById('rank-badge'),
    resultsTitle: document.getElementById('results-title'),
    finalScore: document.getElementById('final-score'),
    rankTitle: document.getElementById('rank-title'),
    rankDescription: document.getElementById('rank-description'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    winnerDisplay: document.getElementById('winner-display')
};

/* ==========================================
   Screen Management
   ========================================== */

function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = screens[screenName];
    if (targetScreen) {
        setTimeout(() => {
            targetScreen.classList.add('active');
            targetScreen.classList.add('screen-enter');
            
            setTimeout(() => {
                targetScreen.classList.remove('screen-enter');
            }, 500);
        }, 100);
    }
}

/* ==========================================
   Level Progress Management
   ========================================== */

function showLevelProgress() {
    const levelProgress = document.getElementById('level-progress');
    if (levelProgress) {
        levelProgress.style.display = 'block';
    }
}

function hideLevelProgress() {
    const levelProgress = document.getElementById('level-progress');
    if (levelProgress) {
        levelProgress.style.display = 'none';
    }
}

function updateLevelProgress() {
    const levelName = document.getElementById('current-level-name');
    if (levelName) {
        const levels = [
            { name: 'Level 1: Basics', icon: '⚔️' },
            { name: 'Level 2: Advanced', icon: '🛡️' },
            { name: 'Level 3: Expert', icon: '👑' },
            { name: 'Level 4: Master', icon: '🏆' }
        ];
        
        if (gameState.currentLevel <= levels.length) {
            levelName.textContent = levels[gameState.currentLevel - 1].name;
            
            // Update icon
            const iconElement = document.querySelector('.current-level-icon');
            if (iconElement) {
                iconElement.textContent = levels[gameState.currentLevel - 1].icon;
            }
        }
    }
    
    // Update unlocked levels
    updateUnlockedLevels();
}

function updateUnlockedLevels() {
    const levelItems = document.querySelectorAll('.next-level-item');
    levelItems.forEach((item, index) => {
        const level = index + 2; // Levels start at 2 for next-level-items
        
        // Unlock levels based on score or completion
        // For now, let's unlock all levels (you can add conditions later)
        if (level <= gameState.currentLevel + 1) {
            item.classList.remove('locked');
            item.classList.add('unlocked');
            item.onclick = () => switchLevel(level);
        } else {
            item.classList.add('locked');
            item.classList.remove('unlocked');
            item.onclick = null;
        }
    });
}

function toggleLevelProgress() {
    const levelProgress = document.getElementById('level-progress');
    if (levelProgress) {
        levelProgress.classList.toggle('expanded');
        levelProgress.classList.toggle('collapsed');
    }
}

function switchLevel(level) {
    if (level <= gameState.totalLevels && level !== gameState.currentLevel) {
        // Save current progress
        const confirmSwitch = confirm(`Switch to Level ${level}? Your current progress will be saved.`);
        
        if (confirmSwitch) {
            gameState.currentLevel = level;
            updateLevelProgress();
            
            // Reset current question for new level
            gameState.currentQuestion = 0;
            
            // Get new questions for this level
            // You can create different question sets per level
            questions = getRandomQuestions(10);
            
            // Reload first question
            loadQuestion();
            
            // Collapse the menu
            toggleLevelProgress();
        }
    }
}

/* ==========================================
   Game Functions
   ========================================== */

// CHANGE: Start game now shows intro battle FIRST
async function startGame() {
    // Get random questions for this session
    questions = getRandomQuestions(10);
    
    // Reset game state
    gameState = {
        currentQuestion: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        answeredQuestions: [],
        isAnimating: false,
        previousScreen: 'welcome',
        battleResult: null,
        currentLevel: 1,
        totalLevels: 4
    };
    
    // Reset battle intro flag
    if (typeof resetBattleIntro === 'function') {
        resetBattleIntro();
    }
    
    // Update score display
    updateScoreDisplay();
    
    // Show game screen
    showScreen('game');
    
    // ADD THESE TWO LINES:
    showLevelProgress();
    updateLevelProgress();
    
    // Show intro battle BEFORE first question
    if (typeof showIntroBattle === 'function') {
        await showIntroBattle();
    }
    
    // After intro battle, load first question
    loadQuestion();
}

// Global function for skip button
function startGameAfterIntro() {
    loadQuestion();
}

function loadQuestion() {
    const question = questions[gameState.currentQuestion];
    
    // Update progress
    updateProgress();
    
    // Animate question card
    gameElements.questionCard.classList.add('card-flip');
    
    setTimeout(() => {
        // Update question content
        gameElements.questionNumber.textContent = `Q${gameState.currentQuestion + 1}`;
        gameElements.questionText.textContent = question.question;
        
        // Update context if exists
        if (question.context) {
            gameElements.scenarioContext.innerHTML = `<span class="context-icon">📌</span> ${question.context}`;
        } else {
            gameElements.scenarioContext.innerHTML = '';
        }
        
        // Generate choice buttons
        renderChoices(question.choices);
        
        // Remove animation class
        gameElements.questionCard.classList.remove('card-flip');
    }, 300);
}

function renderChoices(choices) {
    const letters = ['A', 'B', 'C', 'D'];
    
    gameElements.choicesContainer.innerHTML = choices.map((choice, index) => `
        <button class="choice-btn card-slide-in" 
                onclick="selectAnswer(${index})"
                data-index="${index}">
            <span class="choice-letter">${letters[index]}</span>
            <span class="choice-text">${choice.text}</span>
        </button>
    `).join('');
}

// CHANGE: After selecting answer, show quick battle then feedback
async function selectAnswer(choiceIndex) {
    if (gameState.isAnimating) return;
    gameState.isAnimating = true;
    
    const question = questions[gameState.currentQuestion];
    const selectedChoice = question.choices[choiceIndex];
    const isCorrect = selectedChoice.correct;
    
    // Get all choice buttons
    const choiceButtons = document.querySelectorAll('.choice-btn');
    
    // Disable all buttons
    choiceButtons.forEach(btn => btn.classList.add('disabled'));
    
    // Mark selected button
    const selectedButton = choiceButtons[choiceIndex];
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        gameState.correctAnswers++;
    } else {
        selectedButton.classList.add('wrong');
        gameState.wrongAnswers++;
        
        // Show correct answer
        question.choices.forEach((choice, idx) => {
            if (choice.correct) {
                choiceButtons[idx].classList.add('correct');
            }
        });
    }
    
    // Update score
    const pointsEarned = selectedChoice.points;
    gameState.score += pointsEarned;
    
    // Animate score change
    animateScoreChange(pointsEarned);
    
    // Record answer
    gameState.answeredQuestions.push({
        questionId: question.id,
        correct: isCorrect,
        points: pointsEarned
    });
    
    // Store feedback data for later
    pendingFeedbackData = {
        isCorrect: isCorrect,
        points: pointsEarned,
        question: question
    };
    
    // CHANGE: Show quick battle animation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (typeof showQuickBattle === 'function') {
        await showQuickBattle(isCorrect);
    }
    
    // After battle, show feedback
    showFeedback(isCorrect, pointsEarned, question);
}

function showFeedback(isCorrect, points, question) {
    // Update feedback content
    if (isCorrect) {
        gameElements.feedbackIcon.textContent = '✅';
        gameElements.feedbackIcon.className = 'feedback-icon success';
        gameElements.feedbackTitle.textContent = 'Bonne réponse !';
        gameElements.feedbackTitle.className = 'feedback-title success';
    } else {
        gameElements.feedbackIcon.textContent = '❌';
        gameElements.feedbackIcon.className = 'feedback-icon error';
        gameElements.feedbackTitle.textContent = 'Pas tout à fait...';
        gameElements.feedbackTitle.className = 'feedback-title error';
    }
    
    // Update points display
    const pointsText = points >= 0 ? `+${points}` : `${points}`;
    gameElements.pointsChange.textContent = `${pointsText} 🪙`;
    gameElements.pointsChange.className = `points-change ${points >= 0 ? 'positive' : 'negative'}`;
    
    // Update NIRD card content
    const pillar = pillars[question.pillar];
    gameElements.nirdCardContent.innerHTML = `
        <div class="nird-pillar-badge" style="background: ${pillar.color}20; color: ${pillar.color}; display: inline-block; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; margin-bottom: 0.5rem;">
            ${pillar.icon} ${pillar.name}
        </div>
        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">${question.nirdInfo.title}</h4>
        <p>${question.nirdInfo.content}</p>
    `;
    
    // Show modal
    gameElements.feedbackModal.classList.add('active');
    
    // Clear pending data
    pendingFeedbackData = null;
}

function nextQuestion() {
    // Hide feedback modal
    gameElements.feedbackModal.classList.remove('active');
    gameState.isAnimating = false;
    
    // Check if game is over
if (gameState.currentQuestion >= questions.length - 1) {
        // Check if this is Level 1 ending
        if (gameState.currentLevel === 1) {
            setTimeout(() => {
                showResultsWithLevel2Option();
            }, 300);
        } else {
            setTimeout(() => {
                showResults();
            }, 300);
        }
    } else {
        // Load next question
        gameState.currentQuestion++;
        loadQuestion();
    }
}


function updateProgress() {
    const progress = ((gameState.currentQuestion + 1) / questions.length) * 100;
    gameElements.progressFill.style.width = `${progress}%`;
    gameElements.progressText.textContent = `Question ${gameState.currentQuestion + 1}/${questions.length}`;
}

function updateScoreDisplay() {
    gameElements.score.textContent = gameState.score;
}

function animateScoreChange(points) {
    const scoreElement = gameElements.score;
    scoreElement.classList.add('counter-animate');
    
    const startScore = gameState.score - points;
    const endScore = gameState.score;
    const duration = 500;
    const steps = 20;
    const increment = (endScore - startScore) / steps;
    let current = startScore;
    let step = 0;
    
    const interval = setInterval(() => {
        current += increment;
        step++;
        scoreElement.textContent = Math.round(current);
        
        if (step >= steps) {
            clearInterval(interval);
            scoreElement.textContent = endScore;
            scoreElement.classList.remove('counter-animate');
        }
    }, duration / steps);
}

/* ==========================================
   Results Functions
   ========================================== */

function showResults() {
    showScreen('results');
    
    hideLevelProgress();
    // Get rank based on score
    const rank = getRank(gameState.score);
    
    // Update results display
    resultElements.rankBadge.textContent = rank.icon;
    resultElements.resultsTitle.textContent = gameState.score >= 0 ? 'Félicitations !' : 'Fin du quiz !';
    resultElements.finalScore.textContent = gameState.score;
    resultElements.rankTitle.textContent = rank.title;
    resultElements.rankDescription.textContent = rank.description;
    resultElements.correctCount.textContent = gameState.correctAnswers;
    resultElements.wrongCount.textContent = gameState.wrongAnswers;
    
    // Determine overall winner
    const nirdWins = gameState.correctAnswers > gameState.wrongAnswers;
    
    // Show winner display
    const winnerDisplay = resultElements.winnerDisplay;
    if (winnerDisplay) {
        if (nirdWins) {
            winnerDisplay.innerHTML = `
                <div class="winner-announcement nird-wins">
                    <div class="winner-fighter">
                        ${createStickFigureSVG('nird', false)}
                    </div>
                    <h3>🎉 NIRD Triomphe !</h3>
                    <p>Le numérique responsable a vaincu les Big Tech !</p>
                </div>
            `;
        } else {
            winnerDisplay.innerHTML = `
                <div class="winner-announcement bigtech-wins">
                    <div class="winner-fighter">
                        ${createStickFigureSVG('bigtech', false)}
                    </div>
                    <h3>😔 Les Big Tech l'emportent...</h3>
                    <p>Mais ne vous découragez pas, continuez à apprendre !</p>
                </div>
            `;
        }
    }
    
    // Trigger confetti for high scores
    if (gameState.score >= 250 || nirdWins) {
        createConfetti();
    }


}


    /* ==========================================
   Level 2 Transition Functions
   ========================================== */

function showResultsWithLevel2Option() {
    showScreen('results');
    hideLevelProgress();
    
    const rank = getRank(gameState.score);
    
    resultElements.rankBadge.textContent = rank.icon;
    resultElements.resultsTitle.textContent = 'Niveau 1 Terminé !';
    resultElements.finalScore.textContent = gameState.score;
    resultElements.rankTitle.textContent = rank.title;
    resultElements.rankDescription.textContent = rank.description;
    resultElements.correctCount.textContent = gameState.correctAnswers;
    resultElements.wrongCount.textContent = gameState.wrongAnswers;
    
    const nirdWins = gameState.correctAnswers > gameState.wrongAnswers;
    
    const winnerDisplay = resultElements.winnerDisplay;
    if (winnerDisplay) {
        const winnerHTML = nirdWins 
            ? `<div class="winner-announcement nird-wins">
                    <div class="winner-fighter">${createStickFigureSVG('nird', false)}</div>
                    <h3>🎉 NIRD Triomphe au Niveau 1 !</h3>
                    <p>Prêt pour le défi financier ?</p>
               </div>`
            : `<div class="winner-announcement bigtech-wins">
                    <div class="winner-fighter">${createStickFigureSVG('bigtech', false)}</div>
                    <h3>😔 Big Tech l'emporte au Niveau 1...</h3>
                    <p>Tentez le Niveau 2 !</p>
               </div>`;
        
        winnerDisplay.innerHTML = winnerHTML + `
            <div class="level2-cta" style="margin-top: 1.5rem;">
                <button class="btn-primary level2-btn" onclick="startLevel2()">
                    <span class="btn-icon">🏢</span>
                    Niveau 2: Défis Financiers
                    <span class="btn-arrow">→</span>
                </button>
            </div>
        `;
    }
    
    if (gameState.score >= 250 || nirdWins) {
        createConfetti();
    }
}

function startLevel2() {
    // Update to Level 2
    gameState.currentLevel = 2;
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.answeredQuestions = [];
    
    // Load Level 2 questions
    questions = getLevel2Questions(10);
    
    // Hide all screens, show Level 2 battle overlay
    Object.values(screens).forEach(s => s.classList.remove('active'));
    
    // Initialize and show Level 2
    if (typeof initLevel2Game === 'function') {
        initLevel2Game();
    }
}

function getRank(score) {
    for (const rank of ranks) {
        if (score >= rank.minScore) {
            return rank;
        }
    }
    return ranks[ranks.length - 1];
}

function restartGame() {
    hideLevelProgress(); 
    showScreen('welcome');
}

function shareResult() {
    const rank = getRank(gameState.score);
    const nirdWins = gameState.correctAnswers > gameState.wrongAnswers;
    const battleText = nirdWins ? '⚔️ NIRD a triomphé !' : '😔 Les Big Tech ont gagné cette fois...';
    
    const text = `🏆 J'ai obtenu ${gameState.score} NIRD Coins et le titre de "${rank.title}" dans NIRD Quest !
${battleText}

Testez vos connaissances sur le numérique responsable : #NIRD #NuitDeLInfo2025`;
    
    if (navigator.share) {
        navigator.share({
            title: 'NIRD Quest - Mon résultat',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Résultat copié dans le presse-papier !');
        }).catch(() => {
            alert(text);
        });
    }
}

/* ==========================================
   Learn Screen Functions
   ========================================== */

function showLearnMore() {
    gameState.previousScreen = document.querySelector('.screen.active').id.replace('-screen', '');
    showScreen('learn');
}

function goBack() {
    showScreen(gameState.previousScreen);
}

/* ==========================================
   Visual Effects
   ========================================== */

function createConfetti() {
    const colors = ['#4A90D9', '#2ECC71', '#9B59B6', '#1ABC9C', '#F39C12'];
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

/* ==========================================
   Stick Figure SVG Generator
   ========================================== */

function createStickFigureSVG(type, flipped = false) {
    const color = type === 'nird' ? '#2ECC71' : '#E74C3C';
    const hatColor = type === 'nird' ? '#4A90D9' : '#9B59B6';
    const scale = flipped ? -1 : 1;
    
    return `
        <svg width="120" height="180" viewBox="0 0 120 180" style="transform: scaleX(${scale})">
            <!-- Hat -->
            <g class="fighter-hat">
                <path d="M 40 25 Q 38 22 42 20 L 75 18 Q 78 20 76 24 L 72 35 L 44 37 Z"
                    fill="${hatColor}" stroke="#2c2c2c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <!-- Head -->
            <circle cx="60" cy="50" r="18" fill="white" stroke="#2c2c2c" stroke-width="3"/>
            <!-- Eyes -->
            <circle cx="53" cy="48" r="3" fill="#2c2c2c"/>
            <circle cx="67" cy="48" r="3" fill="#2c2c2c"/>
            <!-- Body -->
            <path d="M 60 68 Q 62 90 60 110" stroke="#2c2c2c" stroke-width="3" fill="none" stroke-linecap="round" class="fighter-body"/>
            <!-- Left arm -->
            <path d="M 60 75 Q 40 80 35 95" stroke="#2c2c2c" stroke-width="3" fill="none" stroke-linecap="round" class="fighter-left-arm"/>
            <!-- Right arm -->
            <path d="M 60 75 Q 80 80 85 95" stroke="#2c2c2c" stroke-width="3" fill="none" stroke-linecap="round" class="fighter-right-arm"/>
            <!-- Left leg -->
            <path d="M 60 110 Q 50 130 45 150" stroke="#2c2c2c" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- Right leg -->
            <path d="M 60 110 Q 70 130 75 150" stroke="#2c2c2c" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- Color indicator -->
            <circle cx="60" cy="85" r="8" fill="${color}" opacity="0.8"/>
        </svg>
    `;
}

/* ==========================================
   Initialize on DOM Load
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    initParticles();
        const currentLevelToggle = document.getElementById('current-level-toggle');
    if (currentLevelToggle) {
        currentLevelToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLevelProgress();
        });
    }
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (screens.game.classList.contains('active') && !gameState.isAnimating) {
            if (e.key === '1' || e.key === 'a' || e.key === 'A') {
                selectAnswer(0);
            } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
                selectAnswer(1);
            }
        }
        
        // Enter to continue in feedback modal
        if (gameElements.feedbackModal.classList.contains('active') && e.key === 'Enter') {
            nextQuestion();
        }
        
        // Enter to start game on welcome screen
        if (screens.welcome.classList.contains('active') && e.key === 'Enter') {
            startGame();
        }
    });
});
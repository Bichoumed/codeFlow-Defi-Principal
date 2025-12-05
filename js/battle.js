/* ==========================================
   BATTLE ANIMATIONS - battle.js (FIXED)
   ========================================== */

// Battle State
let battleState = {
    phase: 'idle',
    winner: null,
    currentAnswer: null,
    hasShownIntro: false
};

// Dialogue sequences for INTRO ONLY
const cloudDialogues = {
    nird: [
        "I fight for freedom and sustainability!",
        "Open source is the future!",
        "We'll see who wins this battle!"
    ],
    bigtech: [
        "Your data belongs to us!",
        "Resistance is futile!",
        "Let the games begin!"
    ]
};

// DOM Elements for battle
const battleElements = {
    overlay: null,
    nirdFighter: null,
    bigtechFighter: null,
    nirdSpeech: null,
    bigtechSpeech: null,
    resultPopup: null,
    resultContent: null,
    resultIcon: null,
    resultTitle: null,
    resultMessage: null,
    battleTitle: null,
    battleSubtitle: null
};

// Initialize battle elements
function initBattleElements() {
    battleElements.overlay = document.getElementById('battle-overlay');
    battleElements.nirdFighter = document.getElementById('nird-fighter');
    battleElements.bigtechFighter = document.getElementById('bigtech-fighter');
    battleElements.nirdSpeech = document.getElementById('nird-speech');
    battleElements.bigtechSpeech = document.getElementById('bigtech-speech');
    battleElements.resultPopup = document.getElementById('result-popup');
    battleElements.resultContent = document.getElementById('result-popup-content');
    battleElements.resultIcon = document.getElementById('result-icon');
    battleElements.resultTitle = document.getElementById('result-title');
    battleElements.resultMessage = document.getElementById('result-message');
    battleElements.battleTitle = document.getElementById('battle-title-text');
    battleElements.battleSubtitle = document.getElementById('battle-subtitle');
}

// Show intro battle ONLY (called when game starts)
function showIntroBattle() {
    return new Promise((resolve) => {
        initBattleElements();
        
        battleState.phase = 'intro';
        battleState.hasShownIntro = true;
        
        // Reset fighter states
        resetFighterStates();
        
        // Update title
        if (battleElements.battleTitle) battleElements.battleTitle.textContent = 'Epic Showdown';
        if (battleElements.battleSubtitle) battleElements.battleSubtitle.textContent = 'The battle is about to begin...';
        
        // Show battle overlay
        battleElements.overlay.classList.add('active');
        
        // Hide speeches initially
        battleElements.nirdSpeech.style.display = 'none';
        battleElements.bigtechSpeech.style.display = 'none';
        
        // Dialogue sequence
        const dialogueSequence = [
            { speaker: 'nird', text: cloudDialogues.nird[0], delay: 800 },
            { speaker: 'bigtech', text: cloudDialogues.bigtech[0], delay: 3500 },
            { speaker: 'nird', text: cloudDialogues.nird[1], delay: 6500 },
            { speaker: 'bigtech', text: cloudDialogues.bigtech[1], delay: 9500 },
            { speaker: 'nird', text: cloudDialogues.nird[2], delay: 12500 }
        ];
        
        dialogueSequence.forEach(({ speaker, text, delay }) => {
            setTimeout(() => {
                if (battleState.phase !== 'intro') return;
                
                // Hide both speeches
                battleElements.nirdSpeech.style.display = 'none';
                battleElements.bigtechSpeech.style.display = 'none';
                
                // Show current speaker
                if (speaker === 'nird') {
                    battleElements.nirdSpeech.querySelector('p').textContent = text;
                    battleElements.nirdSpeech.style.display = 'block';
                    battleElements.nirdSpeech.style.animation = 'none';
                    setTimeout(() => battleElements.nirdSpeech.style.animation = 'bubblePop 0.5s ease forwards', 10);
                } else {
                    battleElements.bigtechSpeech.querySelector('p').textContent = text;
                    battleElements.bigtechSpeech.style.display = 'block';
                    battleElements.bigtechSpeech.style.animation = 'none';
                    setTimeout(() => battleElements.bigtechSpeech.style.animation = 'bubblePop 0.5s ease forwards', 10);
                }
            }, delay);
        });
        
        // After all dialogue, hide overlay and start game
        setTimeout(() => {
            // Hide speeches
            battleElements.nirdSpeech.style.display = 'none';
            battleElements.bigtechSpeech.style.display = 'none';
            
            // Hide overlay
            battleElements.overlay.classList.remove('active');
            battleState.phase = 'idle';
            
            resolve();
        }, 15000); // Total dialogue time
    });
}

// Quick battle after answer (NO dialogue, just instant victory/defeat)
function showQuickBattle(isCorrectAnswer) {
    return new Promise((resolve) => {
        initBattleElements();
        
        battleState.currentAnswer = isCorrectAnswer;
        battleState.phase = 'quick';
        
        // Reset fighter states
        resetFighterStates();
        
        // Update title
        if (battleElements.battleTitle) battleElements.battleTitle.textContent = 'Battle!';
        if (battleElements.battleSubtitle) battleElements.battleSubtitle.textContent = 'Quick fight!';
        
        // Show battle overlay
        battleElements.overlay.classList.add('active');
        
        // Hide speeches
        battleElements.nirdSpeech.style.display = 'none';
        battleElements.bigtechSpeech.style.display = 'none';
        
        // Immediate attack and victory
        setTimeout(() => {
            if (isCorrectAnswer) {
                // NIRD wins - attack BigTech
                battleElements.nirdFighter.classList.add('attacking-right');
                
                setTimeout(() => {
                    // BigTech gets defeated
                    battleElements.bigtechFighter.classList.add('hit');
                    
                    setTimeout(() => {
                        showVictory('nird');
                        setTimeout(() => {
                            battleElements.overlay.classList.remove('active');
                            battleState.phase = 'idle';
                            resolve();
                        }, 1500);
                    }, 300);
                }, 200);
            } else {
                // BigTech wins - attack NIRD
                battleElements.bigtechFighter.classList.add('attacking-left');
                
                setTimeout(() => {
                    // NIRD gets defeated
                    battleElements.nirdFighter.classList.add('hit');
                    
                    setTimeout(() => {
                        showVictory('bigtech');
                        setTimeout(() => {
                            battleElements.overlay.classList.remove('active');
                            battleState.phase = 'idle';
                            resolve();
                        }, 1500);
                    }, 300);
                }, 200);
            }
        }, 500);
    });
}

// Show victory animation (defeated character falls)
function showVictory(winner) {
    battleState.winner = winner;
    
    if (winner === 'nird') {
        // BigTech defeated
        battleElements.bigtechFighter.style.transform = 'rotate(90deg) scaleX(-1)';
        battleElements.bigtechFighter.style.opacity = '0.6';
        
        // Show happy eyes on NIRD
        const nirdSvg = document.getElementById('nird-svg');
        if (nirdSvg) {
            nirdSvg.querySelectorAll('.eye-normal').forEach(el => el.style.display = 'none');
            nirdSvg.querySelectorAll('.eye-happy').forEach(el => el.style.display = '');
            nirdSvg.querySelectorAll('.mouth-happy').forEach(el => el.style.display = '');
        }
        
        // Show defeated eyes on BigTech
        const bigtechSvg = document.getElementById('bigtech-svg');
        if (bigtechSvg) {
            bigtechSvg.querySelectorAll('.eye-evil').forEach(el => el.style.display = 'none');
            bigtechSvg.querySelectorAll('.eye-defeated').forEach(el => el.style.display = '');
        }
        
        if (battleElements.battleTitle) battleElements.battleTitle.textContent = 'NIRD Wins!';
        if (battleElements.battleSubtitle) battleElements.battleSubtitle.textContent = 'Victory for open source!';
    } else {
        // NIRD defeated
        battleElements.nirdFighter.style.transform = 'rotate(-90deg)';
        battleElements.nirdFighter.style.opacity = '0.6';
        
        // Show defeated eyes on NIRD
        const nirdSvg = document.getElementById('nird-svg');
        if (nirdSvg) {
            const normalEyes = nirdSvg.querySelectorAll('.eye-normal');
            normalEyes.forEach(el => el.style.display = 'none');
            
            // Add X eyes if not present
            if (!nirdSvg.querySelector('.eye-x')) {
                const xEye1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                xEye1.setAttribute('d', 'M 49 46 L 57 52 M 49 52 L 57 46');
                xEye1.setAttribute('stroke', '#2c2c2c');
                xEye1.setAttribute('stroke-width', '3');
                xEye1.setAttribute('stroke-linecap', 'round');
                xEye1.setAttribute('class', 'eye-x');
                nirdSvg.appendChild(xEye1);
                
                const xEye2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                xEye2.setAttribute('d', 'M 63 46 L 71 52 M 63 52 L 71 46');
                xEye2.setAttribute('stroke', '#2c2c2c');
                xEye2.setAttribute('stroke-width', '3');
                xEye2.setAttribute('stroke-linecap', 'round');
                xEye2.setAttribute('class', 'eye-x');
                nirdSvg.appendChild(xEye2);
            }
        }
        
        if (battleElements.battleTitle) battleElements.battleTitle.textContent = 'Big Tech Wins!';
        if (battleElements.battleSubtitle) battleElements.battleSubtitle.textContent = 'Better luck next time!';
    }
}

// Reset fighter visual states
function resetFighterStates() {
    // Reset NIRD fighter
    const nirdSvg = document.getElementById('nird-svg');
    if (nirdSvg) {
        nirdSvg.querySelectorAll('.eye-normal').forEach(el => el.style.display = '');
        nirdSvg.querySelectorAll('.eye-happy').forEach(el => el.style.display = 'none');
        nirdSvg.querySelectorAll('.mouth-happy').forEach(el => el.style.display = 'none');
        nirdSvg.querySelectorAll('.eye-x').forEach(el => el.remove());
    }
    
    // Reset Big Tech fighter
    const bigtechSvg = document.getElementById('bigtech-svg');
    if (bigtechSvg) {
        bigtechSvg.querySelectorAll('.eye-evil').forEach(el => el.style.display = '');
        bigtechSvg.querySelectorAll('.eye-defeated').forEach(el => el.style.display = 'none');
    }
    
    // Reset positions
    if (battleElements.nirdFighter) {
        battleElements.nirdFighter.style.transform = '';
        battleElements.nirdFighter.style.opacity = '1';
        battleElements.nirdFighter.classList.remove('attacking-right', 'hit');
    }
    if (battleElements.bigtechFighter) {
        battleElements.bigtechFighter.style.transform = 'scaleX(-1)';
        battleElements.bigtechFighter.style.opacity = '1';
        battleElements.bigtechFighter.classList.remove('attacking-left', 'hit');
    }
}

// Skip battle
function skipBattle() {
    if (battleState.phase === 'intro') {
        // Skip intro dialogue
        battleElements.nirdSpeech.style.display = 'none';
        battleElements.bigtechSpeech.style.display = 'none';
        battleElements.overlay.classList.remove('active');
        battleState.phase = 'idle';
        
        // Trigger game start if callback exists
        if (typeof startGameAfterIntro === 'function') {
            startGameAfterIntro();
        }
    } else if (battleState.phase === 'quick') {
        // Skip quick battle
        battleElements.overlay.classList.remove('active');
        battleState.phase = 'idle';
    }
}

// Reset intro flag
function resetBattleIntro() {
    battleState.hasShownIntro = false;
    battleState.phase = 'idle';
    battleState.winner = null;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initBattleElements();
    /* ==========================================
   Level 2 Game - Question-Driven Battle
   ========================================== */

let level2QuestionsArray = [];
let level2CurrentQuestion = 0;

function initLevel2Game() {
    console.log('initLevel2Game called'); // Debug
    
    // Initialize elements
    initLevel2Elements();
    
    // Reset battle state
    resetLevel2Battle();
    
    // Create windows
    createBuildingWindows(level2Elements.bigtechWindows, 'bigtech');
    createBuildingWindows(level2Elements.nirdWindows, 'nird');
    
    // Get questions
    if (typeof getLevel2Questions === 'function') {
        level2QuestionsArray = getLevel2Questions(10);
        console.log('Loaded questions:', level2QuestionsArray.length); // Debug
    } else {
        console.error('getLevel2Questions not found!');
        return;
    }
    
    level2CurrentQuestion = 0;
    
    // Show overlay
    const overlay = document.getElementById('level2-battle-overlay');
    console.log('Overlay element:', overlay); // Debug
    
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.classList.add('active');
        console.log('Overlay shown'); // Debug
    } else {
        console.error('level2-battle-overlay not found in HTML!');
    }
    
    // Show first question after short delay
    setTimeout(() => {
        showLevel2Question();
    }, 500);
}

function showLevel2Question() {
    console.log('showLevel2Question called, current:', level2CurrentQuestion); // Debug
    
    const questionCloud = document.getElementById('level2-question-cloud');
    const questionText = document.getElementById('level2-question-text');
    const questionNumber = document.getElementById('level2-question-number');
    const choicesContainer = document.getElementById('level2-choices');
    
    if (!questionCloud) {
        console.error('level2-question-cloud not found!');
        return;
    }
    
    if (level2CurrentQuestion >= level2QuestionsArray.length) {
        endLevel2Game();
        return;
    }
    
    const question = level2QuestionsArray[level2CurrentQuestion];
    
    // Update display
    questionNumber.textContent = `Q${level2CurrentQuestion + 1}`;
    questionText.textContent = question.question;
    
    // Generate choices
    choicesContainer.innerHTML = question.choices.map((choice, index) => `
        <button class="cloud-choice-btn" onclick="selectLevel2Answer(${index})">
            <span class="choice-letter">${index === 0 ? 'A' : 'B'}</span>
            <span class="choice-text">${choice.text}</span>
        </button>
    `).join('');
    
    // Show cloud
    questionCloud.style.display = 'block';
}

function selectLevel2Answer(choiceIndex) {
    const question = level2QuestionsArray[level2CurrentQuestion];
    const selectedChoice = question.choices[choiceIndex];
    const isCorrect = selectedChoice.correct;
    
    // Disable buttons
    document.querySelectorAll('.cloud-choice-btn').forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === choiceIndex) btn.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect && question.choices[i].correct) btn.classList.add('correct');
    });
    
    // Update score
    gameState.score += selectedChoice.points;
    if (isCorrect) gameState.correctAnswers++;
    else gameState.wrongAnswers++;
    
    // Attack animation
    const attacker = isCorrect ? 'nird' : 'bigtech';
    const damage = Math.floor(Math.random() * 15) + 15;
    
    setTimeout(() => {
        document.getElementById('level2-question-cloud').style.display = 'none';
        
        // Update health
        if (attacker === 'nird') {
            level2BattleState.bigtechHealth = Math.max(0, level2BattleState.bigtechHealth - damage);
            level2BattleState.bigtechBuildingDamage = Math.min(100, level2BattleState.bigtechBuildingDamage + damage);
        } else {
            level2BattleState.nirdHealth = Math.max(0, level2BattleState.nirdHealth - damage);
            level2BattleState.nirdBuildingDamage = Math.min(100, level2BattleState.nirdBuildingDamage + damage);
        }
        
        level2BattleState.turn++;
        updateLevel2Visuals(attacker, attacker === 'nird' ? 'bigtech' : 'nird', damage);
        
        // Show result popup
        setTimeout(() => {
            showAnswerPopup(isCorrect);
        }, 1200);
    }, 800);
}

function showAnswerPopup(isCorrect) {
    const popup = document.getElementById('result-popup');
    document.getElementById('result-icon').textContent = isCorrect ? '🎉' : '😔';
    document.getElementById('result-title').textContent = isCorrect ? 'NIRD attaque!' : 'Big Tech attaque!';
    document.getElementById('result-message').textContent = isCorrect 
        ? 'Bravo! Tu es sur la bonne voie!' 
        : "C'est pas grave, continue d'apprendre!";
    popup.classList.add('active');
}

function closeResultPopup() {
    document.getElementById('result-popup').classList.remove('active');
    
    // Check if game over
    if (level2BattleState.bigtechHealth <= 0 || level2BattleState.nirdHealth <= 0) {
        level2BattleState.winner = level2BattleState.bigtechHealth <= 0 ? 'nird' : 'bigtech';
        showLevel2VictoryScreen();
        return;
    }
    
    level2CurrentQuestion++;
    
    if (level2CurrentQuestion >= level2QuestionsArray.length) {
        level2BattleState.winner = level2BattleState.bigtechHealth < level2BattleState.nirdHealth ? 'nird' : 'bigtech';
        showLevel2VictoryScreen();
    } else {
        showLevel2Question();
    }
}
}



);
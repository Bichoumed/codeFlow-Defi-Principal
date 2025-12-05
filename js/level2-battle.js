/* ==========================================
   LEVEL 2 BATTLE - Building & Warrior System
   Converted from React to Vanilla JavaScript
   ========================================== */

// Level 2 Battle State
let level2BattleState = {
    bigtechHealth: 100,
    nirdHealth: 100,
    bigtechBuildingDamage: 0,
    nirdBuildingDamage: 0,
    winner: null,
    turn: 0,
    autoPlay: true,
    battleStarted: false,
    battleInterval: null
};

// DOM Elements for Level 2
const level2Elements = {
    overlay: null,
    bigtechBuilding: null,
    nirdBuilding: null,
    bigtechWarrior: null,
    nirdWarrior: null,
    bigtechHealthFill: null,
    nirdHealthFill: null,
    bigtechHealthText: null,
    nirdHealthText: null,
    turnCounter: null,
    bigtechWindows: null,
    nirdWindows: null,
    victoryOverlay: null,
    victoryContent: null,
    victoryTitle: null,
    victoryWinner: null,
    victoryMessage: null
};

/* ==========================================
   Initialize Level 2 Elements
   ========================================== */

function initLevel2Elements() {
    level2Elements.overlay = document.getElementById('level2-battle-overlay');
    level2Elements.bigtechBuilding = document.getElementById('bigtech-building');
    level2Elements.nirdBuilding = document.getElementById('nird-building');
    level2Elements.bigtechWarrior = document.getElementById('bigtech-warrior');
    level2Elements.nirdWarrior = document.getElementById('nird-warrior');
    level2Elements.bigtechHealthFill = document.getElementById('bigtech-health-fill');
    level2Elements.nirdHealthFill = document.getElementById('nird-health-fill');
    level2Elements.bigtechHealthText = document.getElementById('bigtech-health-text');
    level2Elements.nirdHealthText = document.getElementById('nird-health-text');
    level2Elements.turnCounter = document.getElementById('level2-turn');
    level2Elements.bigtechWindows = document.getElementById('bigtech-windows');
    level2Elements.nirdWindows = document.getElementById('nird-windows');
    level2Elements.victoryOverlay = document.getElementById('level2-victory-overlay');
    level2Elements.victoryContent = document.getElementById('level2-victory-content');
    level2Elements.victoryTitle = document.getElementById('level2-victory-title');
    level2Elements.victoryWinner = document.getElementById('level2-victory-winner');
    level2Elements.victoryMessage = document.getElementById('level2-victory-message');
}

/* ==========================================
   Create Building Windows
   ========================================== */

function createBuildingWindows(container, side) {
    if (!container) return;
    
    const windowCount = window.innerWidth < 768 ? 24 : 48; // 4x6 or 6x8 grid
    container.innerHTML = '';
    
    for (let i = 0; i < windowCount; i++) {
        const windowEl = document.createElement('div');
        windowEl.className = 'window';
        windowEl.style.setProperty('--glow-delay', `${i * 0.05}s`);
        windowEl.dataset.index = i;
        container.appendChild(windowEl);
    }
}

/* ==========================================
   Update Building Damage Visual
   ========================================== */

function updateBuildingDamage(side, damagePercentage) {
    const building = side === 'bigtech' ? level2Elements.bigtechBuilding : level2Elements.nirdBuilding;
    const windowsContainer = side === 'bigtech' ? level2Elements.bigtechWindows : level2Elements.nirdWindows;
    
    if (!building || !windowsContainer) return;
    
    const windows = windowsContainer.querySelectorAll('.window');
    const totalWindows = windows.length;
    
    // Update windows based on damage
    windows.forEach((windowEl, index) => {
        const threshold = (index / totalWindows) * 100;
        
        if (damagePercentage > threshold) {
            windowEl.classList.add('destroyed');
            windowEl.classList.remove('cracked');
        } else if (damagePercentage > threshold - 15) {
            windowEl.classList.add('cracked');
            windowEl.classList.remove('destroyed');
        } else {
            windowEl.classList.remove('destroyed', 'cracked');
        }
    });
    
    // Update damage overlay
    const damageOverlay = building.querySelector('.building-damage-overlay');
    if (damageOverlay) {
        damageOverlay.style.opacity = damagePercentage / 150;
    }
    
    // Update building logo
    const logo = building.querySelector('.building-logo');
    if (logo) {
        logo.classList.toggle('faded', damagePercentage > 50);
    }
    
    // Add cracks
    updateBuildingCracks(building, damagePercentage);
    
    // Add fire effect for heavy damage
    updateFireEffect(building, damagePercentage);
    
    // Building tilt for heavy damage
    if (damagePercentage > 70) {
        building.style.transform = side === 'bigtech' ? 'rotate(4deg)' : 'rotate(-4deg)';
    } else if (damagePercentage > 40) {
        building.style.transform = side === 'bigtech' ? 'rotate(2deg)' : 'rotate(-2deg)';
    } else {
        building.style.transform = 'rotate(0deg)';
    }
}

/* ==========================================
   Update Building Cracks
   ========================================== */

function updateBuildingCracks(building, damagePercentage) {
    let cracksContainer = building.querySelector('.building-cracks');
    
    if (!cracksContainer) {
        cracksContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cracksContainer.classList.add('building-cracks');
        cracksContainer.setAttribute('viewBox', '0 0 100 100');
        cracksContainer.setAttribute('preserveAspectRatio', 'none');
        cracksContainer.innerHTML = `
            <path class="crack1" d="M 20 10 L 25 40 L 30 45 L 28 90"/>
            <path class="crack2" d="M 75 15 L 72 45 L 78 50 L 75 95"/>
            <path class="crack3" d="M 50 20 L 45 60 L 55 65 L 50 85"/>
        `;
        building.querySelector('.building-body').appendChild(cracksContainer);
    }
    
    const crack1 = cracksContainer.querySelector('.crack1');
    const crack2 = cracksContainer.querySelector('.crack2');
    const crack3 = cracksContainer.querySelector('.crack3');
    
    if (damagePercentage > 25) crack1.classList.add('visible');
    if (damagePercentage > 50) crack2.classList.add('visible');
    if (damagePercentage > 70) crack3.classList.add('visible');
}

/* ==========================================
   Update Fire Effect
   ========================================== */

function updateFireEffect(building, damagePercentage) {
    let fireContainer = building.querySelector('.building-fire');
    let smokeEl = building.querySelector('.building-smoke');
    
    if (!fireContainer) {
        fireContainer = document.createElement('div');
        fireContainer.className = 'building-fire';
        fireContainer.innerHTML = `
            <span class="fire-icon">🔥</span>
            <span class="fire-icon">⚡</span>
        `;
        building.appendChild(fireContainer);
    }
    
    if (!smokeEl) {
        smokeEl = document.createElement('div');
        smokeEl.className = 'building-smoke';
        smokeEl.textContent = '☁️';
        building.appendChild(smokeEl);
    }
    
    if (damagePercentage > 60) {
        fireContainer.classList.add('active');
        smokeEl.style.opacity = '1';
    } else {
        fireContainer.classList.remove('active');
        smokeEl.style.opacity = '0';
    }
}

/* ==========================================
   Attack Function
   ========================================== */

function level2Attack(attacker) {
    if (level2BattleState.winner) return;
    
    const damage = Math.floor(Math.random() * 15) + 10; // 10-25 damage
    const target = attacker === 'bigtech' ? 'nird' : 'bigtech';
    
    // Update battle state
    if (attacker === 'bigtech') {
        level2BattleState.nirdHealth = Math.max(0, level2BattleState.nirdHealth - damage);
        level2BattleState.nirdBuildingDamage = Math.min(100, level2BattleState.nirdBuildingDamage + damage);
    } else {
        level2BattleState.bigtechHealth = Math.max(0, level2BattleState.bigtechHealth - damage);
        level2BattleState.bigtechBuildingDamage = Math.min(100, level2BattleState.bigtechBuildingDamage + damage);
    }
    
    level2BattleState.turn++;
    
    // Visual updates
    updateLevel2Visuals(attacker, target, damage);
    
    // Check for winner
    checkLevel2Winner();
}

/* ==========================================
   Update Visuals After Attack
   ========================================== */

function updateLevel2Visuals(attacker, target, damage) {
    // Update turn counter
    if (level2Elements.turnCounter) {
        level2Elements.turnCounter.textContent = level2BattleState.turn;
    }
    
    // Animate attacker
    const attackerWarrior = attacker === 'bigtech' 
        ? level2Elements.bigtechWarrior 
        : level2Elements.nirdWarrior;
    
    if (attackerWarrior) {
        attackerWarrior.classList.add('attacking');
        setTimeout(() => attackerWarrior.classList.remove('attacking'), 500);
    }
    
    // Animate target (hit + building shake)
    setTimeout(() => {
        const targetWarrior = target === 'bigtech' 
            ? level2Elements.bigtechWarrior 
            : level2Elements.nirdWarrior;
        
        const targetBuilding = target === 'bigtech' 
            ? level2Elements.bigtechBuilding 
            : level2Elements.nirdBuilding;
        
        if (targetWarrior) {
            targetWarrior.classList.add('hit');
            setTimeout(() => targetWarrior.classList.remove('hit'), 300);
        }
        
        if (targetBuilding) {
            targetBuilding.classList.add('shake');
            setTimeout(() => targetBuilding.classList.remove('shake'), 500);
        }
        
        // Update health bars
        updateLevel2HealthBars();
        
        // Update building damage
        updateBuildingDamage('bigtech', level2BattleState.bigtechBuildingDamage);
        updateBuildingDamage('nird', level2BattleState.nirdBuildingDamage);
        
    }, 300);
}

/* ==========================================
   Update Health Bars
   ========================================== */

function updateLevel2HealthBars() {
    if (level2Elements.bigtechHealthFill) {
        level2Elements.bigtechHealthFill.style.width = `${level2BattleState.bigtechHealth}%`;
    }
    if (level2Elements.nirdHealthFill) {
        level2Elements.nirdHealthFill.style.width = `${level2BattleState.nirdHealth}%`;
    }
    if (level2Elements.bigtechHealthText) {
        level2Elements.bigtechHealthText.textContent = `${level2BattleState.bigtechHealth}%`;
    }
    if (level2Elements.nirdHealthText) {
        level2Elements.nirdHealthText.textContent = `${level2BattleState.nirdHealth}%`;
    }
}

/* ==========================================
   Check for Winner
   ========================================== */

function checkLevel2Winner() {
    if (level2BattleState.bigtechHealth <= 0 && !level2BattleState.winner) {
        level2BattleState.winner = 'nird';
        endLevel2Battle();
    } else if (level2BattleState.nirdHealth <= 0 && !level2BattleState.winner) {
        level2BattleState.winner = 'bigtech';
        endLevel2Battle();
    }
}

/* ==========================================
   End Battle
   ========================================== */

function endLevel2Battle() {
    // Stop auto-battle
    if (level2BattleState.battleInterval) {
        clearInterval(level2BattleState.battleInterval);
        level2BattleState.battleInterval = null;
    }
    
    level2BattleState.autoPlay = false;
    
    // Show victory screen after a delay
    setTimeout(() => {
        showLevel2VictoryScreen();
    }, 1000);
}

/* ==========================================
   Show Victory Screen
   ========================================== */

function showLevel2VictoryScreen() {
    if (!level2Elements.victoryOverlay) return;
    
    const isNirdWinner = level2BattleState.winner === 'nird';
    
    // Update victory content
    if (level2Elements.victoryContent) {
        level2Elements.victoryContent.classList.toggle('bigtech-win', !isNirdWinner);
    }
    
    if (level2Elements.victoryTitle) {
        level2Elements.victoryTitle.innerHTML = '🏆 Victory! 🏆';
    }
    
    if (level2Elements.victoryWinner) {
        level2Elements.victoryWinner.textContent = isNirdWinner ? 'NIRD Wins!' : 'Big Tech Wins!';
    }
    
    if (level2Elements.victoryMessage) {
        if (isNirdWinner) {
            level2Elements.victoryMessage.innerHTML = `
                <p><strong style="color: #34d399;">🎉 Yeay! Tu es sur la bonne voie!</strong></p>
                <p>En choisissant les principes NIRD et les logiciels libres, nous construisons un monde numérique qui est :</p>
                <ul>
                    <li>✓ Plus durable et écologique</li>
                    <li>✓ Accessible et inclusif pour tous</li>
                    <li>✓ Transparent et éthiquement responsable</li>
                    <li>✓ Libre de tout verrouillage propriétaire</li>
                </ul>
            `;
        } else {
            level2Elements.victoryMessage.innerHTML = `
                <p><strong style="color: #a78bfa;">C'est pas grave, tu as perdu mais tu peux faire mieux!</strong></p>
                <p>Les Big Tech ont gagné cette bataille, mais pas la guerre ! Nous pouvons encore choisir un meilleur chemin avec les principes NIRD.</p>
                <p style="font-size: 0.85rem; margin-top: 1rem;">Chaque petit changement compte. Commence aujourd'hui en explorant les alternatives open source !</p>
            `;
        }
    }
    
    // Show overlay
    level2Elements.victoryOverlay.classList.add('active');
    
    // Hide battle overlay
    if (level2Elements.overlay) {
        level2Elements.overlay.classList.remove('active');
    }
}

/* ==========================================
   Close Victory Screen & Continue
   ========================================== */

function closeLevel2Victory() {
    if (level2Elements.victoryOverlay) {
        level2Elements.victoryOverlay.classList.remove('active');
    }
    
    // Store battle result for quiz
    if (typeof gameState !== 'undefined') {
        gameState.battleResult = level2BattleState.winner;
    }
}

/* ==========================================
   Skip Level 2 Battle
   ========================================== */

function skipLevel2Battle() {
    // Stop auto-battle
    if (level2BattleState.battleInterval) {
        clearInterval(level2BattleState.battleInterval);
        level2BattleState.battleInterval = null;
    }
    
    // Randomly determine winner for skipped battle
    level2BattleState.winner = Math.random() > 0.5 ? 'nird' : 'bigtech';
    
    // Set final state
    if (level2BattleState.winner === 'nird') {
        level2BattleState.bigtechHealth = 0;
        level2BattleState.bigtechBuildingDamage = 100;
    } else {
        level2BattleState.nirdHealth = 0;
        level2BattleState.nirdBuildingDamage = 100;
    }
    
    updateLevel2HealthBars();
    updateBuildingDamage('bigtech', level2BattleState.bigtechBuildingDamage);
    updateBuildingDamage('nird', level2BattleState.nirdBuildingDamage);
    
    // Show victory immediately
    showLevel2VictoryScreen();
}

/* ==========================================
   Start Level 2 Auto Battle
   ========================================== */

function startLevel2AutoBattle() {
    if (level2BattleState.battleInterval) return;
    
    level2BattleState.battleStarted = true;
    level2BattleState.autoPlay = true;
    
    level2BattleState.battleInterval = setInterval(() => {
        if (level2BattleState.winner) {
            clearInterval(level2BattleState.battleInterval);
            return;
        }
        
        // Random attacker
        const attacker = Math.random() > 0.5 ? 'bigtech' : 'nird';
        level2Attack(attacker);
        
    }, 1200); // Attack every 1.2 seconds
}

/* ==========================================
   Reset Level 2 Battle
   ========================================== */

function resetLevel2Battle() {
    // Stop any running battle
    if (level2BattleState.battleInterval) {
        clearInterval(level2BattleState.battleInterval);
        level2BattleState.battleInterval = null;
    }
    
    // Reset state
    level2BattleState = {
        bigtechHealth: 100,
        nirdHealth: 100,
        bigtechBuildingDamage: 0,
        nirdBuildingDamage: 0,
        winner: null,
        turn: 0,
        autoPlay: true,
        battleStarted: false,
        battleInterval: null
    };
    
    // Reset visuals
    updateLevel2HealthBars();
    updateBuildingDamage('bigtech', 0);
    updateBuildingDamage('nird', 0);
    
    if (level2Elements.turnCounter) {
        level2Elements.turnCounter.textContent = '0';
    }
    
    // Reset building transforms
    if (level2Elements.bigtechBuilding) {
        level2Elements.bigtechBuilding.style.transform = 'rotate(0deg)';
    }
    if (level2Elements.nirdBuilding) {
        level2Elements.nirdBuilding.style.transform = 'rotate(0deg)';
    }
}

/* ==========================================
   Show Level 2 Intro Battle
   Called from game.js when starting Level 2
   ========================================== */

/* ==========================================
   Level 2 Game - Question-Driven Battle
   ========================================== */

let level2QuestionsArray = [];
let level2CurrentQuestion = 0;

function initLevel2Game() {
    // Initialize elements
    initLevel2Elements();
    
    // Reset battle state
    resetLevel2Battle();
    
    // Create windows
    createBuildingWindows(level2Elements.bigtechWindows, 'bigtech');
    createBuildingWindows(level2Elements.nirdWindows, 'nird');
    
    // Get questions
    // Get questions
    level2QuestionsArray = getLevel2Questions(10);
    level2CurrentQuestion = 0;
    
    // Show overlay
    if (level2Elements.overlay) {
        level2Elements.overlay.classList.add('active');
    }
    
    // Show first question
    showLevel2Question();
}

function showLevel2Question() {
    const questionCloud = document.getElementById('level2-question-cloud');
    const questionText = document.getElementById('level2-question-text');
    const questionNumber = document.getElementById('level2-question-number');
    const choicesContainer = document.getElementById('level2-choices');
    
    if (!questionCloud || level2CurrentQuestion >= level2QuestionsArray.length) {
        // All questions answered - determine final winner
        endLevel2Game();
        return;
    }
    
   const question = level2QuestionsArray[level2CurrentQuestion];
    
    // Update question display
    questionNumber.textContent = `Q${level2CurrentQuestion + 1}`;
    questionText.textContent = question.question;
    
    // Generate choices
    const letters = ['A', 'B'];
    choicesContainer.innerHTML = question.choices.map((choice, index) => `
        <button class="cloud-choice-btn" onclick="selectLevel2Answer(${index})">
            <span class="choice-letter">${letters[index]}</span>
            <span class="choice-text">${choice.text}</span>
        </button>
    `).join('');
    
    // Show cloud with animation
    questionCloud.style.display = 'block';
    questionCloud.classList.add('cloud-appear');
    setTimeout(() => questionCloud.classList.remove('cloud-appear'), 500);
}

function selectLevel2Answer(choiceIndex) {
    const question = level2QuestionsArray[level2CurrentQuestion];
    const selectedChoice = question.choices[choiceIndex];
    const isCorrect = selectedChoice.correct;
    
    // Disable buttons
    const buttons = document.querySelectorAll('.cloud-choice-btn');
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    // Mark answer
    buttons[choiceIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
        question.choices.forEach((c, i) => {
            if (c.correct) buttons[i].classList.add('correct');
        });
    }
    
    // Update score
    gameState.score += selectedChoice.points;
    if (isCorrect) {
        gameState.correctAnswers++;
    } else {
        gameState.wrongAnswers++;
    }
    
    // Determine attacker based on answer
    const attacker = isCorrect ? 'nird' : 'bigtech';
    
    // Hide question cloud
    setTimeout(() => {
        document.getElementById('level2-question-cloud').style.display = 'none';
        
        // Play attack animation
        playLevel2Attack(attacker, isCorrect);
    }, 1000);
}

function playLevel2Attack(attacker, isCorrect) {
    const damage = Math.floor(Math.random() * 15) + 15; // 15-30 damage
    const target = attacker === 'bigtech' ? 'nird' : 'bigtech';
    
    // Update health
    if (attacker === 'bigtech') {
        level2BattleState.nirdHealth = Math.max(0, level2BattleState.nirdHealth - damage);
        level2BattleState.nirdBuildingDamage = Math.min(100, level2BattleState.nirdBuildingDamage + damage);
    } else {
        level2BattleState.bigtechHealth = Math.max(0, level2BattleState.bigtechHealth - damage);
        level2BattleState.bigtechBuildingDamage = Math.min(100, level2BattleState.bigtechBuildingDamage + damage);
    }
    
    level2BattleState.turn++;
    
    // Animate
    updateLevel2Visuals(attacker, target, damage);
    
    // Show result popup
    setTimeout(() => {
        showLevel2AnswerResult(isCorrect);
    }, 1500);
}

function showLevel2AnswerResult(isCorrect) {
    const popup = document.getElementById('result-popup');
    const icon = document.getElementById('result-icon');
    const title = document.getElementById('result-title');
    const message = document.getElementById('result-message');
    
    if (isCorrect) {
        icon.textContent = '🎉';
        title.textContent = 'NIRD attaque!';
        message.textContent = 'Bravo! Tu es sur la bonne voie vers la résistance numérique!';
        popup.classList.add('nird-win');
        popup.classList.remove('bigtech-win');
    } else {
        icon.textContent = '😔';
        title.textContent = 'Big Tech attaque!';
        message.textContent = "C'est pas grave, tu peux faire mieux! Continue d'apprendre.";
        popup.classList.add('bigtech-win');
        popup.classList.remove('nird-win');
    }
    
    popup.classList.add('active');
}

function closeResultPopup() {
    document.getElementById('result-popup').classList.remove('active');
    
    // Check if either building is destroyed
    if (level2BattleState.bigtechHealth <= 0) {
        level2BattleState.winner = 'nird';
        showLevel2VictoryScreen();
        return;
    }
    if (level2BattleState.nirdHealth <= 0) {
        level2BattleState.winner = 'bigtech';
        showLevel2VictoryScreen();
        return;
    }
    
    // Next question
    level2CurrentQuestion++;
    
    if (level2CurrentQuestion >= level2QuestionsArray.length) {
        endLevel2Game();
    } else {
        showLevel2Question();
    }
}

function endLevel2Game() {
    // Determine winner by health remaining
    if (level2BattleState.bigtechHealth < level2BattleState.nirdHealth) {
        level2BattleState.winner = 'nird';
    } else if (level2BattleState.nirdHealth < level2BattleState.bigtechHealth) {
        level2BattleState.winner = 'bigtech';
    } else {
        // Tie - winner based on correct answers
        level2BattleState.winner = gameState.correctAnswers >= gameState.wrongAnswers ? 'nird' : 'bigtech';
    }
    
    showLevel2VictoryScreen();
}

/* ==========================================
   Initialize on DOM Load
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements when DOM is ready
    initLevel2Elements();
});

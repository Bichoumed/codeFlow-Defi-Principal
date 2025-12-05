# 📋 NIRD Level 2 Integration Guide

## 🗂️ New Files to Add

Copy these files to your `nird-quest-modified/` folder:

```
nird-quest-modified/
├── css/
│   └── level2-battle.css    ← NEW (copy from this folder)
├── js/
│   ├── level2-battle.js     ← NEW (copy from this folder)
│   └── questions-level2.js  ← NEW (copy from this folder)
```

---

## 📝 Modifications to Existing Files

### 1️⃣ index.html

#### ADD after line 9 (after `battle-animations.css`):
```html
<link rel="stylesheet" href="css/level2-battle.css">
```

#### ADD after line 453 (after `<script src="js/battle.js"></script>`):
```html
<script src="js/questions-level2.js"></script>
<script src="js/level2-battle.js"></script>
```

#### ADD before line 441 (before the closing `</div>` of `.app-container`):
```html
<!-- Level 2 Battle Overlay -->
<div class="level2-battle-overlay" id="level2-battle-overlay">
    <div class="level2-battle-header">
        <h2>🏢 The Digital Battle</h2>
        <p>Big Tech vs NIRD - The Future of Technology</p>
    </div>
    
    <div class="level2-arena">
        <!-- Big Tech Side -->
        <div class="building-side bigtech-side">
            <div class="building bigtech-building" id="bigtech-building">
                <div class="building-roof"></div>
                <div class="building-body">
                    <div class="windows-grid" id="bigtech-windows"></div>
                    <div class="building-logo">🏢</div>
                </div>
                <div class="building-damage-overlay"></div>
            </div>
            <div class="warrior bigtech-warrior" id="bigtech-warrior">
                <div class="warrior-body"></div>
                <div class="warrior-weapon">⚔️</div>
            </div>
            <div class="health-bar-wrapper">
                <div class="health-label">Big Tech</div>
                <div class="health-bar"><div class="health-fill bigtech" id="bigtech-health-fill"></div></div>
                <div class="health-text" id="bigtech-health-text">100%</div>
            </div>
        </div>
        
        <!-- VS Badge -->
        <div class="vs-badge">VS</div>
        
        <!-- NIRD Side -->
        <div class="building-side nird-side">
            <div class="building nird-building" id="nird-building">
                <div class="building-roof nird"></div>
                <div class="building-body nird">
                    <div class="windows-grid" id="nird-windows"></div>
                    <div class="building-logo">🌱</div>
                </div>
                <div class="building-damage-overlay"></div>
            </div>
            <div class="warrior nird-warrior" id="nird-warrior">
                <div class="warrior-body"></div>
                <div class="warrior-weapon">🛡️</div>
            </div>
            <div class="health-bar-wrapper">
                <div class="health-label">NIRD</div>
                <div class="health-bar"><div class="health-fill nird" id="nird-health-fill"></div></div>
                <div class="health-text" id="nird-health-text">100%</div>
            </div>
        </div>
    </div>
    
    <div class="level2-controls">
        <div class="turn-counter">Turn: <span id="level2-turn">0</span></div>
        <button class="skip-btn" id="skip-level2-battle" onclick="skipLevel2Battle()">Skip ⏭️</button>
    </div>
</div>

<!-- Level 2 Victory Screen -->
<div class="level2-victory-overlay" id="level2-victory-overlay">
    <div class="victory-content" id="level2-victory-content">
        <div class="victory-trophy">🏆</div>
        <h2 class="victory-title" id="level2-victory-title">Victory!</h2>
        <p class="victory-winner" id="level2-victory-winner">NIRD Wins!</p>
        <div class="victory-message" id="level2-victory-message"></div>
        <button class="btn-primary" onclick="closeLevel2Victory()">Continue →</button>
    </div>
</div>
```

---

### 2️⃣ game.js

#### FIND lines 374-378 (in `nextQuestion()` function):
```javascript
if (gameState.currentQuestion >= questions.length - 1) {
    // Show results
    setTimeout(() => {
        showResults();
    }, 300);
}
```

#### REPLACE WITH:
```javascript
if (gameState.currentQuestion >= questions.length - 1) {
    // Check if this is Level 1 ending
    if (gameState.currentLevel === 1) {
        // Show Level 1 results with "Go to Level 2" button
        setTimeout(() => {
            showResultsWithLevel2Option();
        }, 300);
    } else {
        setTimeout(() => {
            showResults();
        }, 300);
    }
}
```

#### ADD after `showResults()` function (around line 473):
```javascript
/* ==========================================
   Level 2 Transition
   ========================================== */

function showResultsWithLevel2Option() {
    showScreen('results');
    hideLevelProgress();
    
    // Get rank based on score
    const rank = getRank(gameState.score);
    
    // Update results display
    resultElements.rankBadge.textContent = rank.icon;
    resultElements.resultsTitle.textContent = gameState.score >= 0 ? 'Niveau 1 Terminé !' : 'Fin du niveau 1 !';
    resultElements.finalScore.textContent = gameState.score;
    resultElements.rankTitle.textContent = rank.title;
    resultElements.rankDescription.textContent = rank.description;
    resultElements.correctCount.textContent = gameState.correctAnswers;
    resultElements.wrongCount.textContent = gameState.wrongAnswers;
    
    // Determine overall winner for Level 1
    const nirdWins = gameState.correctAnswers > gameState.wrongAnswers;
    
    // Show winner display with Level 2 button
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
                    <h3>😔 Les Big Tech l'emportent au Niveau 1...</h3>
                    <p>Tentez votre chance au Niveau 2 !</p>
               </div>`;
        
        winnerDisplay.innerHTML = winnerHTML + `
            <div class="level2-cta" style="margin-top: 1.5rem;">
                <button class="btn-primary level2-btn" onclick="startLevel2()">
                    <span class="btn-icon">🏢</span>
                    Passer au Niveau 2: Défis Financiers
                    <span class="btn-arrow">→</span>
                </button>
            </div>
        `;
    }
    
    // Trigger confetti for high scores
    if (gameState.score >= 250 || nirdWins) {
        createConfetti();
    }
}

async function startLevel2() {
    // Update level
    gameState.currentLevel = 2;
    gameState.currentQuestion = 0;
    
    // Keep score from Level 1
    const level1Score = gameState.score;
    
    // Reset question counters but keep total score
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.answeredQuestions = [];
    
    // Load Level 2 questions (financial themed)
    questions = getLevel2Questions(10);
    
    // Show game screen
    showScreen('game');
    showLevelProgress();
    updateLevelProgress();
    
    // Show Level 2 intro battle
    if (typeof showLevel2IntroBattle === 'function') {
        await showLevel2IntroBattle();
    }
    
    // Load first Level 2 question
    loadQuestion();
}
```

---

## 🎮 How It Works

### Flow:
1. **Level 1 starts** → Existing battle animation plays → Quiz questions
2. **Level 1 ends** → Results screen shows with "**Passer au Niveau 2**" button
3. **Click Level 2 button** → Level 2 Building Battle animation plays (auto-battle)
4. **Battle ends** → Victory popup appears:
   - If NIRD wins: "Yeay! Tu es sur la bonne voie!"
   - If Big Tech wins: "C'est pas grave, tu as perdu mais tu peux faire mieux!"
5. **Close popup** → Level 2 quiz questions (financial themes) begin

### Level 2 Features:
- **Building damage system**: Windows break, cracks appear, fire effects
- **Auto-battle**: Attacks happen automatically every 1.2 seconds
- **Skip button**: Can skip to see result immediately
- **15 financial-themed questions** about Big Tech costs vs NIRD alternatives

---

## ✅ Testing Checklist

- [ ] CSS file loads (check browser console for errors)
- [ ] JS files load in correct order
- [ ] Level 1 completes and shows Level 2 button
- [ ] Level 2 battle animation displays
- [ ] Buildings show damage as health decreases
- [ ] Victory screen shows correct message
- [ ] Quiz loads after closing victory popup

---

## 🐛 Troubleshooting

**Battle doesn't show?**
- Check that `level2-battle-overlay` element exists in HTML
- Verify CSS file is linked correctly

**Questions don't load?**
- Make sure `questions-level2.js` is loaded BEFORE `level2-battle.js`
- Check that `getLevel2Questions()` function exists

**Styling looks broken?**
- Verify CSS file path is correct
- Check for CSS conflicts with existing styles

---

Good luck with La Nuit de l'Info 2025! 🚀

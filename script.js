// Get elements
let clickcounter = document.getElementById("ClickCount")
let cpccounter = document.getElementById("CPC")
let cpscounter = document.getElementById("CPS")
let button = document.getElementById("ClickMe")
let plusone = document.getElementById("Plus1CPC")
let plusfive = document.getElementById("Plus5CPC")
let plusten = document.getElementById("Plus10CPC")
let plusoneCPS = document.getElementById("Plus1CPS")
let resetButton = document.getElementById("ResetGame")


// Variables
let clicks = 0
let cpc = 1
let cps = 0

// =========================================
// LOAD SAVED VALUES
// =========================================
if (localStorage.getItem("clicks")) {
    clicks = parseInt(localStorage.getItem("clicks"))
}

if (localStorage.getItem("cpc")) {
    cpc = parseInt(localStorage.getItem("cpc"))
}

if (localStorage.getItem("cps")) {
    cps = parseInt(localStorage.getItem("cps"))
}

// Update UI after loading
clickcounter.textContent = clicks
cpccounter.textContent = cpc
cpscounter.textContent = cps

// =========================================
// FUNCTIONS
// =========================================

function saveGame() {
    localStorage.setItem("clicks", clicks)
    localStorage.setItem("cpc", cpc)
    localStorage.setItem("cps", cps)
}

function clicked() {
    clicks += cpc
    clickcounter.textContent = clicks
    saveGame()
}

function autoclicked() {
    clicks += cps
    clickcounter.textContent = clicks
    saveGame()
}

function plusCPCone() {
    if (clicks >= 25) {
        clicks -= 25
        cpc += 1

        clickcounter.textContent = clicks
        cpccounter.textContent = cpc
        saveGame()
    }
}

function plusCPCfive() {
    if (clicks >= 75) {
        clicks -= 75
        cpc += 5

        clickcounter.textContent = clicks
        cpccounter.textContent = cpc
        saveGame()
    }
}

function plusCPCten() {
    if (clicks >= 125) {
        clicks -= 125
        cpc += 10

        clickcounter.textContent = clicks
        cpccounter.textContent = cpc
        saveGame()
    }
}

function plusCPSone() {
    if (clicks >= 50) {
        clicks -= 50
        cps += 1

        clickcounter.textContent = clicks
        cpscounter.textContent = cps
        saveGame()
    }
}

function resetGame() {
    localStorage.clear()

    clicks = 0
    cpc = 1
    cps = 0

    clickcounter.textContent = clicks
    cpccounter.textContent = cpc
    cpscounter.textContent = cps

    alert("Game reset!")
}


// =========================================
// EVENT LISTENERS
// =========================================

button.addEventListener("click", clicked)
plusone.addEventListener("click", plusCPCone)
plusfive.addEventListener("click", plusCPCfive) 
plusten.addEventListener("click", plusCPCten)
plusoneCPS.addEventListener("click", plusCPSone)
resetButton.addEventListener("click", resetGame)


// Auto-click timer
setInterval(autoclicked, 1000)

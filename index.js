let count = 0
let countEl = document.getElementById("start")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
    
}
function save() {
    let countDash = count + "-"
    saveEl.textContent += countDash
    countEl.textContent = 0
    
}
function decrement() {
    count -= 1
    countEl.innerText = count
    
}
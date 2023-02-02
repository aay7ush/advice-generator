const adviceId = document.querySelector(".id")
const adviceMsg = document.querySelector(".advice")
const generateBtn = document.querySelector(".generate-btn")

generateBtn.addEventListener("click", async () => {
  const res = await fetch("https://api.adviceslip.com/advice")
  const {
    slip: { id, advice },
  } = await res.json()
  adviceId.innerHTML = `advice #${id}`
  adviceMsg.innerHTML = `<q>${advice}</q>`
})

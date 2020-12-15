const textWrapper = document.querySelector('.ml2')
let anim
let step = 0

function goAnimation() {
  if (step > 0) textWrapper.innerHTML = `Step ${step + 1}`
  setup()

  anim.add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  })
  
  anim.add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
    complete: () => {
      step++
      goAnimation()
    }
  })
}

function setup() {
  anim = anime.timeline({})
  textWrapper.style.opacity = 1
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
}

goAnimation()
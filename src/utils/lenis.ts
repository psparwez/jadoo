import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let lenis: Lenis

export const createLenis = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenis
}

export const getLenis = () => lenis

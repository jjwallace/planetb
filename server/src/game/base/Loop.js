export default class Loop {
  constructor (updateObject) {
    console.log('Loop Active')

    const hrtimeMs = function () {
      const time = process.hrtime()
      return time[0] * 1000 + time[1] / 1000000
    }

    const TICK_RATE = 60
    let tick = 0
    let previous = hrtimeMs()
    const tickLengthMs = 1000 / TICK_RATE

    const loop = () => {
      setTimeout(loop, tickLengthMs)
      const now = hrtimeMs()
      const delta = (now - previous) / 1000
      // console.log('delta', delta)

      // Update The Game
      updateObject.updateGame()

      previous = now
      tick++
    }

    loop() // starts the loop
  }
}

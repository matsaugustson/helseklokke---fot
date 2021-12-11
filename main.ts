input.onGesture(Gesture.ThreeG, function () {
    steps += 2
    basic.showNumber(steps)
    radio.sendNumber(steps)
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showNumber(steps)
    radio.sendNumber(steps)
})
let steps = 0
radio.setGroup(1)
steps = 0

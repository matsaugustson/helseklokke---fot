input.onGesture(Gesture.ThreeG, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
})
radio.setGroup(1)
basic.showIcon(IconNames.Square)

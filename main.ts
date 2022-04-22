input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.hello.playUntilDone()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B C5 A C5 B C5 A ", 120)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.StickFigure)
})

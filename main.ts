function Définir_Y () {
    if (input.acceleration(Dimension.Y) >= Math.abs(limite)) {
        Y = 1
    } else {
        Y = 0
    }
    if (input.acceleration(Dimension.Y) <= limite) {
        Y2 = 1
    } else {
        Y2 = 0
    }
    if (input.acceleration(Dimension.Y) > limite && input.acceleration(Dimension.Y) < Math.abs(limite)) {
        Y0 = 1
    } else {
        Y0 = 0
    }
}
function Definir_X () {
    if (input.acceleration(Dimension.X) >= Math.abs(limite)) {
        X = 1
    } else {
        X = 0
    }
    if (input.acceleration(Dimension.X) <= limite) {
        X2 = 1
    } else {
        X2 = 0
    }
    if (input.acceleration(Dimension.X) > limite && input.acceleration(Dimension.X) < Math.abs(limite)) {
        X0 = 1
    } else {
        X0 = 0
    }
}
let X0 = 0
let X2 = 0
let X = 0
let Y0 = 0
let Y2 = 0
let Y = 0
let limite = 0
limite = -200
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Definir_X()
    Définir_Y()
    if (Y0 && X0) {
        basic.showIcon(IconNames.Yes)
    }
    if (Y0 && X2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (Y0 && X) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (Y2 && X0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (Y2 && X2) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    }
    if (Y2 && X) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    }
    if (Y && X0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (Y && X2) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    }
    if (Y && X) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    }
})

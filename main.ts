let m = 0
basic.forever(function () {
    m = Math.trunc(Math.map(input.magneticForce(Dimension.Strength), 0, 2048, 0, 9))
    if (m <= 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (m < 7 && m > 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (m >= 7) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})

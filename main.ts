let nseo = 0
input.onButtonPressed(Button.A, function () {
    nseo = input.compassHeading()
    if (nseo == 0) {
        basic.showString("N")
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    } else if (nseo >= 180) {
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            `)
    }
})

input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 999; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
    }
})
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && false)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && false)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        basic.pause(100)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && false)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            basic.pause(100)
        }
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && false)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(100)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && false)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(100)
        }
    }
})

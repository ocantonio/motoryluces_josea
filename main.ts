let dirección = 0
let distancia = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia > 10) {
        strip.showRainbow(1, 360)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        dirección = randint(0, 1)
        if (dirección == 0) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
            strip.show()
            basic.pause(200)
        } else {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
            strip.show()
            basic.pause(200)
        }
    }
    basic.pause(100)
})

let distancia = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia > 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    basic.pause(100)
})

function LEDOFF () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P9, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(100)
}
function LEDON () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P9, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(100)
}
basic.forever(function () {
    LEDON()
    basic.pause(1000)
    LEDOFF()
    basic.pause(1000)
})

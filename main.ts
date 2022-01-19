let Range = 0
let Turn = false
basic.showString(maqueen.IR_read_version())
basic.forever(function () {
    music.playMelody("C5 G - - - G - - ", 120)
    Turn = true
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            break;
        } else {
            Range = maqueen.Ultrasonic(PingUnit.Centimeters)
            if (Range > 1) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 140)
            } else {
                if (Turn) {
                    maqueen.servoRun(maqueen.Servos.S1, 90)
                } else {
                    maqueen.servoRun(maqueen.Servos.S2, 90)
                }
            }
        }
        Turn = !(Turn)
    }
    maqueen.motorStop(maqueen.Motors.All)
})

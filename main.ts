/**
 * Controls the Adafruit 7-segment numeric led display
 */
//% color="#ff7f50" icon="\uf06e" block="Numeric LED"
namespace eyes {
    //% blockId=splitIncoming
    //% block="split incoming"
    export function splitIncoming (str: string) {
        comma1 = -1
        comma2 = -1
        for (let index = 0; index <= str.length; index++) {
            c = str.charAt(index)
            if (c == ",") {
                if (comma1 == -1) {
                    comma1 = index
                } else {
                    comma2 = index
                }
            }
        }
        button = str.substr(0, comma1)
        xstr = str.substr(comma1 + 1, comma2 - comma1 - 1)
        ystr = str.substr(comma2 + 1, 999)
        xTilt = parseFloat(xstr)
        yTilt = parseFloat(ystr)
    }


    let yTilt = 0
    let xTilt = 0
    let ystr = ""
    let xstr = ""
    let button = ""
    let c = ""
    let comma2 = 0
    let comma1 = 0
    let leftAngle = 20
    let rightAngle = 160
    let upAngle = 30
    let downAngle = 160
    let openAngle = 30
    let closeAngle = 180
    crickit.servo1.setAngle(90)
    crickit.servo2.setAngle(90)
    crickit.servo3.setAngle(openAngle)
    basic.forever(function () {
        
    })
}
/**
 * Controls the TCL/GIC mechanical eyes
 */
//% color="#ff7f50" icon="\uf06e" block="Eyes"
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

    //% blockId=setLeftAngle
    //% block="set angles left %left right %right"
    //% left.min=20 left.max=160
    //% right.min=20 right.right=160
    export function setLeftRightAngle(left: number, right: number) {
        _leftAngle = left
        _rightAngle = right
    }

    //% blockId=setUpDownAngle
    //% block="set angles up %up down %down"
    //% up.min=20 up.max=160
    //% down.min=20 down.max=160
    export function setUpDownAngle(up: number, down: number) {
        _upAngle = up
        _downAngle = down
    }

    //% blockId=setOpenCloseAngle
    //% block="set angles open %open close %close"
    //% open.min=20 open.max=160
    //% close.min=20 close.max=160
    export function setOpenCloseAngle(open: number, close: number) {
        _openAngle = open
        _openAngle = close
    }

    //% block
    export function leftAngle() {
        return _leftAngle
    }


    let yTilt = 0
    let xTilt = 0
    let ystr = ""
    let xstr = ""
    let button = ""
    let c = ""
    let comma2 = 0
    let comma1 = 0
    let _leftAngle = 20
    let _rightAngle = 160
    let _upAngle = 30
    let _downAngle = 160
    let _openAngle = 30
    let _closeAngle = 180
    crickit.servo1.setAngle(90)
    crickit.servo2.setAngle(90)
    crickit.servo3.setAngle(_openAngle)
    basic.forever(function () {
        
    })
}
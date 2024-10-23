/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program controls a servo motor
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

//Spin Clockwise
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

//Spin Counter clockwise
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
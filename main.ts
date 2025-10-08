/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program shows the temperature
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let currentTemperature: number

// show temperature
currentTemperature = input.temperature();

input.onButtonPressed(Button.A, function () {

    // read temperature
    basic.showString('The temperature is:')

    // display on LED screen
    basic.showNumber(currentTemperature)
    basic.showString('C.')
})

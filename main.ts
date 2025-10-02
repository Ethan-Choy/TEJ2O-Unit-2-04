/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program displays the temperature
*/

let currentTemperature: number
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// show temperature
currentTemperature = input.temperature();

input.onButtonPressed(Button.A, function () {
    // read temperature
    basic.showString('The temperature is:')
    // display temperature
    basic.showNumber(currentTemperature)
    basic.showString('C.')
})

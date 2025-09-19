/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program shows the temperature
*/

// show temperature
let currentTemperature = input.temperature();

input.onButtonPressed(Button.A, function () {

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// read temperature
basic.showString('The temperature is:')

// display on LED screen
basic.showNumber(currentTemperature)
basic.showString('C.')
})
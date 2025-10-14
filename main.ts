/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program shows the temperature
*/

// variable
let temperatureInCelsius: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button A is pressed, it shows the temperature
input.onButtonPressed(Button.A, function () {
    //show the temperature
    basic.showString("The temperature is :")
    temperatureInCelsius = input.temperature()
    basic.showNumber(temperatureInCelsius)
    basic.showString("C.")
    basic.showIcon(IconNames.Happy)
})

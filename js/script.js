// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * This function gets users hours worked and hourly wage to calculate how much is earned
 */
function calculateClicked() {
  //input
  const hoursWorked = parseInt(document.getElementById("hours").value)
  const wages = parseInt(document.getElementById("wage").value)

  //process
  const pay = (hoursWorked * wages) * (1 - 0.18)
  const taxes = (hoursWorked * wages * 0.18)
  
  //output
  document.getElementById("money-earned").innerHTML = 
    "<p>Your pay will be: $ " +  pay.toFixed(2) + "!</p>"
  document.getElementById("taxes").innerHTML =
    "<p>The government will take: $" + taxes.toFixed(2) + ".</p>"
}
// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * This function gets the users input and calculates the area of a trapezoid
 */
function calculateClicked() {
  //input
  const aBase = parseInt(document.getElementById("a-base").value)
  const bBase = parseInt(document.getElementById("b-base").value)
  const height = parseInt(document.getElementById("height").value)

  //process
  const area = ((aBase + bBase) / 2) * height
  
  //output
  document.getElementById("area-of-trapezoid").innerHTML = "<p>The area of the trapezoid is: " +  area + " mm²!</p>"
}
"use strict";
// Select color input
const colorEl = document.getElementById("colorPicker");

// Select size input
const gridWidthEl = document.getElementById("inputWidth");
const gridHeightEL = document.getElementById("inputHeight");
const pixelCanvasEl = document.getElementById("pixelCanvas");
const sizePickerEl = document.getElementById("sizePicker");

// Default grid
let width = gridWidthEl.value;
let height = gridHeightEL.value;
makeGrid(height, width);

// When size is submitted by the user, call makeGrid()
sizePickerEl.addEventListener("submit", (e) => {
  // Prevents the page from refreshing after every clicks on the submit button
  e.preventDefault();
  let width = gridWidthEl.value;
  let height = gridHeightEL.value;
  pixelCanvasEl.firstElementChild.remove();

  makeGrid(height, width);
});

/**
 * @makeGrid create a grid of squares
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */

function makeGrid(height, width) {
  //   let row = pixelCanvasEl.insertRow(0);
  //   let cell = row.insertCell(0);
  for (let i = 0; i < height; i++) {
    let row = pixelCanvasEl.insertRow(i);
    // table columns
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", (e) => {
        cell.style.backgroundColor = colorEl.value;
      });
    }
  }
}

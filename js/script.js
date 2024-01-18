// script.js

// Get the elements from the HTML file
const luasForm = document.getElementById("luas-form");
const kelilingForm = document.getElementById("keliling-form");
const sisiLuas = document.getElementById("sisi-luas");
const sisiKeliling = document.getElementById("sisi-keliling");
const hitungLuas = document.getElementById("hitung-luas");
const hitungKeliling = document.getElementById("hitung-keliling");
const luasResult = document.getElementById("luas-result");
const kelilingResult = document.getElementById("keliling-result");

// Define a function to calculate the area of a square
function calculateArea(sisi) {
    return sisi * sisi;
}

// Define a function to calculate the perimeter of a square
function calculatePerimeter(sisi) {
    return 4 * sisi;
}

// Add an event listener to the luas form
luasForm.addEventListener("submit", function(event) {
    // Prevent the default behavior of the form
    event.preventDefault();
    // Get the value of the sisi input
    let sisi = sisiLuas.value;
    // Validate the input
    if (sisi > 0) {
        // Calculate the area
        let area = calculateArea(sisi);
        // Display the result
        luasResult.textContent = "Luas Persegi adalah " + area + " cm\u00B2.";
    } else {
        // Display an error message
        luasResult.textContent = "Sisi harus lebih besar dari nol.";
    }
});

// Add an event listener to the keliling form
kelilingForm.addEventListener("submit", function(event) {
    // Prevent the default behavior of the form
    event.preventDefault();
    // Get the value of the sisi input
    let sisi = sisiKeliling.value;
    // Validate the input
    if (sisi > 0) {
        // Calculate the perimeter
        let perimeter = calculatePerimeter(sisi);
        // Display the result
        kelilingResult.textContent = "Keliling Persegi adalah " + perimeter + " cm.";
    } else {
        // Display an error message
        kelilingResult.textContent = "Sisi harus lebih besar dari nol.";
    }
});

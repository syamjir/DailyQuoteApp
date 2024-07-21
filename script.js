"use strict";

// Selecting the necessary DOM elements
const btnEl = document.getElementById("showQuote");
const dataEl = document.getElementById("dailyQuote");

// Function to fetch the daily advice
async function fetchDailyQuote() {
  try {
    // Fetching data from the advice API
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    // Returning the advice from the fetched data
    return data.slip.advice;
  } catch (error) {
    // Handling errors during the fetch operation
    console.error("Error fetching advice:", error);
    alert("Fetching error. Please try again in a moment.");
  }
}

// Event listener for button click to show the daily quote
btnEl.addEventListener("click", async function () {
  // Set the loading text before fetching the advice
  dataEl.textContent = "Loading...";

  // Fetching the daily advice
  const advice = await fetchDailyQuote();

  // Updating the DOM with the fetched advice
  dataEl.textContent = advice;
});

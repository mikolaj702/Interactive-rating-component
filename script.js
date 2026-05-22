const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");

const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thank-you-card");

const selectedRating = document.getElementById("selected-rating");

let currentRating = 0;

ratingButtons.forEach((button) => {

  button.addEventListener("click", () => {

    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    currentRating = button.textContent;
  });

});

submitBtn.addEventListener("click", () => {

  if (currentRating === 0) {
    alert("Please select a rating!");
    return;
  }

  selectedRating.textContent =
    `You selected ${currentRating} out of 5`;

  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");

});
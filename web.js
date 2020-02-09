const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");


const showModal = () => {
  signupModal.style.display = "block";
};


const closeModal = () => {
  signupModal.style.display = "none";
};


signup.addEventListener("click", () => {
  showModal();
});

// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});
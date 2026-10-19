// North Star Bakery - Touchstone 4

const bakeryItems = [
  {
    name: "Fresh Bread",
    message: "Our fresh bread is baked for a simple and delicious bakery experience."
  },
  {
    name: "Pastries",
    message: "Try our selection of pastries for a sweet bakery treat."
  },
  {
    name: "Cakes",
    message: "Our cakes are a great choice for celebrations and special occasions."
  }
];

const customerPreferences = {
  storageKey: "northStarFavourite",
  defaultItem: "Fresh Bread"
};

// Display the customer's selected bakery favourite
function showFavourite() {
  const select = document.getElementById("bakeryFavourite");
  const result = document.getElementById("favouriteResult");

  if (!select || !result) {
    return;
  }

  const selectedItem = select.value;
  const item = bakeryItems.find(product => product.name === selectedItem);

  if (item) {
    result.textContent = "Your favourite: " + item.name + ". " + item.message;
    localStorage.setItem(customerPreferences.storageKey, selectedItem);
  }
}

// Restore the saved favourite after refreshing the page
function loadFavourite() {
  const select = document.getElementById("bakeryFavourite");

  if (!select) {
    return;
  }

  const savedItem =
    localStorage.getItem(customerPreferences.storageKey) ||
    customerPreferences.defaultItem;

  select.value = savedItem;
  showFavourite();
}

// Show an error beside a form field
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);

  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Validate the contact form
function validateContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name || !email || !message) {
    return;
  }

  let isValid = true;

  showError("nameError", "");
  showError("emailError", "");
  showError("messageError", "");

  if (name.value.trim().length < 2) {
    showError("nameError", "Please enter at least 2 characters for your name.");
    isValid = false;
  }

  if (
    email.value.trim() === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    showError("messageError", "Please enter a message

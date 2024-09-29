// Function to validate the form data
function validateForm() {
  const tagline = document.getElementById("tagline").value;
  const contact = document.getElementById("contact").value;
  const quantity = document.getElementById("quantity").value;

  // Validate tagline (maximum 50 characters)
  if (tagline.length > 50) {
      alert("Tagline should not exceed 50 characters.");
      return false;
  }

  // Validate contact (9 digits)
  if (!/^\d{9}$/.test(contact)) {
      alert("Please enter a valid 9-digit contact number.");
      return false;
  }

  // Validate quantity (at least 1)
  if (quantity < 1 || isNaN(quantity)) {
      alert("Quantity must be at least 1.");
      return false;
  }

  return true;
}

// Function to process the form submission and generate a receipt
function processOrder(event) {
  event.preventDefault(); // Prevent form submission

  // Validate form data before proceeding
  if (!validateForm()) return;

  // Get form data
  const tagline = document.getElementById("tagline").value;
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;
  const deliveryDate = document.getElementById("delivery-date").value;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const contact = document.getElementById("contact").value;

  // Generate current date for receipt
  const currentDate = new Date().toLocaleDateString();

  // Generate receipt HTML
  const receipt = `
      <h2>Order Receipt</h2>
      <p><strong>Date:</strong> ${currentDate}</p>
      <p><strong>Recipient's Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Tagline:</strong> ${tagline}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong>Size:</strong> ${size}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
      <h3>Your order has been received. Thank you!</h3>
  `;

  // Display the receipt
  document.getElementById("receipt").innerHTML = receipt;
}

// Attach event listener to form submission
document.getElementById("orderForm").addEventListener("submit", processOrder);

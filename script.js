 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
 const firebaseConfig = {
  apiKey: "AIzaSyB4KakLV9H_g78TolT9DEJMw-nSRyHfC2g",
  authDomain: "hackathon-8bb85.firebaseapp.com",
  databaseURL: "https://hackathon-8bb85-default-rtdb.firebaseio.com",
  projectId: "hackathon-8bb85",
  storageBucket: "hackathon-8bb85.firebasestorage.app",
  messagingSenderId: "152289098449",
  appId: "1:152289098449:web:7840f8736cf5cae0d4e3f0",
  measurementId: "G-43DHY7VJ51"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const feedbackForm = document.getElementById('feedbackForm');
 

 
  feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const rating = document.getElementById('rating').value;
  const message = document.getElementById('message').value;
  push(ref(database, 'feedbacks'), { name, email, rating, message })
  .then(() => {
    alert("Thank you for your feedback!");
    feedbackForm.reset();
  })
  .catch((error) => {
    alert("Error submitting feedback: " + error.message);
  });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const popup = document.getElementById("popup");
    const popupName = document.getElementById("popup-name");
    const popupPrice = document.getElementById("popup-price");
    const quantitySpan = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-price");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const confirmBtn = document.getElementById("confirm");
  
    let currentPrice = 0;
    let currentName = "";
    let quantity = 1;
  
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const card = button.closest(".product-card");
        currentName = card.querySelector("h4").innerText;
        const priceText = card.querySelector("p").innerText;
        currentPrice = parseInt(priceText.replace(/[^\d]/g, ""));
        quantity = 1;
  
        popupName.innerText = currentName;
        popupPrice.innerText = `Price: PKR ${currentPrice}`;
        quantitySpan.innerText = quantity;
        totalPrice.innerText = `PKR ${currentPrice * quantity}`;
  
        popup.classList.remove("hidden");
      });
    });
  
    increaseBtn.onclick = () => {
      quantity++;
      quantitySpan.innerText = quantity;
      totalPrice.innerText = `PKR ${currentPrice * quantity}`;
    };
  
    decreaseBtn.onclick = () => {
      if (quantity > 1) {
        quantity--;
        quantitySpan.innerText = quantity;
        totalPrice.innerText = `PKR ${currentPrice * quantity}`;
      }
    };
  
    confirmBtn.onclick = () => {
      alert(`✅ ${quantity} x ${currentName} added to cart.\n💰 Total: PKR ${currentPrice * quantity}`);
      popup.classList.add("hidden");
    };
  });
  


  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the visibility of the nav items
  }
  
  
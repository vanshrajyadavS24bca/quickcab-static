// EMAILJS INIT
emailjs.init("nTvZb8PbMDrqjcNWP");

// PRICE DATA
const prices = {
  "Kia Sonet": 3500,
  "Honda Amaze": 3200,
  "Maruti Brezza": 3200,
  "Ertiga": 3500,
  "Swift": 3200,
  "Thar": 2500,
  "Royal Enfield": 1200,
  "KTM Duke": 1500,
  "Access 125": 500,
  "Honda Activa Electric": 700,
  "tvs IQube": 900,
  "Activa": 500
};
document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".type");
  const categories = document.querySelectorAll(".category");
  const viewAll = document.querySelector(".view-all");

  // 🔥 CATEGORY SWITCH
  buttons.forEach(button => {
    button.addEventListener("click", function () {

      const target = this.getAttribute("data-category");

      // remove active from all
      buttons.forEach(btn => btn.classList.remove("active"));
      categories.forEach(cat => cat.classList.remove("active"));

      // add active to selected
      this.classList.add("active");

      const selectedCategory = document.getElementById(target);

      if(selectedCategory){
        selectedCategory.classList.add("active");
      }

    });
  });
});

// TOAST
function showToast(msg){
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// PRICE CALCULATOR
document.getElementById("checkPrice").addEventListener("click", function(){

  const vehicle = document.getElementById("vehicle").value;
  const days = document.getElementById("days").value;

  if(vehicle === "Select Vehicle" || !days){
    showToast("⚠️ Fill all details");
    return;
  }

  const total = prices[vehicle] * days;

  document.getElementById("priceBox").innerText =
    "Estimated Price: ₹" + total;

});

// AUTO FILL VEHICLE
document.querySelectorAll(".rent-btn").forEach(btn => {
  btn.addEventListener("click", function(){

    const vehicle = this.parentElement.querySelector("h3").innerText;

    document.getElementById("vehicle").value = vehicle;

    window.scrollTo({ top: 0, behavior: "smooth" });

  });
});

// FORM SUBMIT
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_kqf2bur", "template_vteon2w", form)
    .then(() => {
      showToast("✅ Booking sent!");
      form.reset();
    })
    .catch(() => {
      showToast("❌ Failed!");
    });
});

// WHATSAPP
document.getElementById("waBtn").addEventListener("click", function(){

  const vehicle = document.getElementById("vehicle").value;
  const days = document.getElementById("days").value;

  const msg = encodeURIComponent(
    `Rental Request 🚖
Vehicle: ${vehicle}
Days: ${days}`
  );

  this.href = `https://wa.me/918126470424?text=${msg}`;
});
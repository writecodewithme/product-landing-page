window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50 && window.pageYOffset < 550) {
      navbar.style.backgroundColor = "green";
    } 
     else if(window.pageYOffset > 550 ) {
      navbar.style.backgroundColor = "red";
    } 
    else {
      navbar.style.backgroundColor = "black";
    }
  };


  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");
  const popupForm = document.getElementById("popup-form");
  const submitBtn = document.getElementById("submit-btn");

  setTimeout(function() {
    popup.style.display = "block";
  }, 2000);

  closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
  });

  popupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(popupForm);
    const fullName = formData.get("yourname");

    popupForm.innerHTML = `
    <div class="thanks-note">
      <h2>Thank You <span class="display-name">${fullName}</span>!</h2>
      <i class="icofont-gift"></i>
            <p>Use this coupon code:<span class="code">  23GT5S78#FG</span> to get 10% discount.</p>
      </div>
    `;
  });


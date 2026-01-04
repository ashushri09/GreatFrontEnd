// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.



const subscribeButton = document.getElementById("subscribe-btn")
const emailInput = document.getElementById("email-input")

const hint = document.getElementById("hint")

const body = document.querySelector("body")


subscribeButton.addEventListener("click",()=>{
        let email = emailInput.value;
        console.log("button is click",email);
        
        if (!email || email === ""){
            showHint("Email address is required.")
        }else if (!isValidEmail(email)){
            showHint("Please enter a valid email address.")
        }else{ 
            showHint("")
    const randomFail = Math.random() < 0.5;
    if (randomFail) {
      showToast("Error", "Failed to subscribe. Please ensure your email is correct or try again later.");
    } else {
      showToast("Success", "Subscription successful! Please check your email to confirm.");
    }
        }   
        }

    
)


function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



function showHint(message) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.classList.add("invisible");
  }
  hint.classList.remove("invisible");
  hint.innerHTML = message;
}



function showToast(status, message) {
  const existingToast = document.getElementById("toast");
  if (existingToast) {
    existingToast.remove();
  }
  const color = status === "Success" ? "green" : "red";
  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <div
    id="toast"
    class="flex items-center gap-3 py-1 pl-1 mr-3.5 bg-${color}-50 rounded-full absolute left-4 top-10 md:left-1/2 md:-translate-x-1/2 md:top-9 md:pr-2.5"
  >
    <div class="flex items-center bg-white px-2.5 py-0.5 rounded-full shadow-[0_1px_2px_0_rgb(0_0_0/0.06),_0_1px_3px_0_rgb(0_0_0/0.10)] font-medium text-sm text-center text-${color}-700">
      ${status}
    </div>
    <p class="flex items-center gap-1 font-medium text-sm text-${color}-700">
      ${message}
    </p>
  </div>
  `
  );
}
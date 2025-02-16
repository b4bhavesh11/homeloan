document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add login functionality here (e.g., check credentials, show error, etc.)
});

// Function to update the clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12; // Convert 24-hour format to 12-hour
    hours = hours ? hours : 12; // 0 becomes 12
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero
    seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    clock.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call it once immediately to display time right away
updateClock();


function validateEmpId() {
    const empId = document.getElementById('empId').value;
    const empIdError = document.getElementById('empIdError');
  
    if (empId.length < 5 || empId.length > 6) {
      empIdError.textContent = "Employee ID must be between 5 and 6 digits.";
      empIdError.style.color = "red";
    } else {
      empIdError.textContent = ""; 
    }
  }
  
  function login() {
    // Your login logic here
  }


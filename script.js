const toggleSwitch = document.getElementById('darkModeToggle');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});







// Function to open a modal by ID
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close a modal by ID
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Assign each button to open the corresponding modal
document.getElementById("learnMoreBtn1").onclick = function() {
    openModal("myModal1");
};
document.getElementById("learnMoreBtn2").onclick = function() {
    openModal("myModal2");
};
document.getElementById("learnMoreBtn3").onclick = function() {
    openModal("myModal3");
};

// Assign each close button to close the corresponding modal
var closeButtons = document.getElementsByClassName("close");
Array.from(closeButtons).forEach((button, index) => {
    button.onclick = function() {
        closeModal(`myModal${index + 1}`);
    };
});



// Close modal if user clicks outside of it
window.onclick = function(event) {
    var modals = ["myModal1", "myModal2", "myModal3"];
    modals.forEach(modalId => {
        var modal = document.getElementById(modalId);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};




function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); 
  }



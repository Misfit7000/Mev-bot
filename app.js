const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");
const cryptoPopup = document.getElementById("cryptoPopup");
const closePopup = document.getElementById("closePopup");

const buttons = document.querySelectorAll('.deposit-btn');
buttons.forEach(button => {
  button.addEventListener("click", showPopup);
});
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

        const solanaBtn = document.getElementById('solana-btn');
        const ethBtn = document.getElementById('eth-btn');
        const solanaContent = document.getElementById('solana-content');
        const ethContent = document.getElementById('eth-content');

        solanaBtn.addEventListener('click', function() {
            solanaContent.classList.remove('hidden');
            ethContent.classList.add('hidden');
            solanaBtn.classList.add('active');
            ethBtn.classList.remove('active');
        });

        ethBtn.addEventListener('click', function() {
            ethContent.classList.remove('hidden');
            solanaContent.classList.add('hidden');
            ethBtn.classList.add('active');
            solanaBtn.classList.remove('active');
        });


let isAborted = false; // Flag to track if the program is aborted
    let timeoutId = null;  // Variable to hold timeout ID

    // Function to write to the console
    function writeToConsole(message, delay) {
        return new Promise(resolve => {
            timeoutId = setTimeout(() => {
                if (!isAborted) {
                    const consoleElement = document.getElementById("console");
                    consoleElement.innerHTML += `<br>${message}`;
                }
                resolve();
            }, delay);
        });
    }

    // Function to simulate console output
    async function simulateConsoleOutput() {
        isAborted = false; // Reset abort flag
        const consoleElement = document.getElementById("console");
        consoleElement.innerHTML = "Console Output:"; // Clear previous output

        const messages = [
            { text: "Running program...", delay: 3000 },
            { text: "Accessing Blockchain...", delay: 2000 },
            { text: "Connecting to server...", delay: 1500 },
            { text: "Loading assets...", delay: 2000 },
            { text: "Program execution started!", delay: 1500 },
            { text: "Initialtion failed insufficient balance...", delay: 1500 },
            { text: "Programe execution failed...", delay: 1500 }

        ];

        for (const message of messages) {
            if (isAborted) {
                writeToConsole("Program Aborted", 0); // Display abort message immediately
                break;
            }
            await writeToConsole(message.text, message.delay);
        }
    }

    // Event listener for the start button
    document.getElementById("startConsole").addEventListener("click", simulateConsoleOutput);

    // Event listener for the abort button
    document.getElementById("abortConsole").addEventListener("click", () => {
        isAborted = true;
        clearTimeout(timeoutId); // Cancel any pending timeouts
        const consoleElement = document.getElementById("console");
        consoleElement.innerHTML += "<br>Program Aborted"; // Immediately show abort message
    });


    // Get elements


// Function to show the popup
function showPopup() {
  cryptoPopup.style.display = "flex";
}

// Function to close the popup
function closePopupHandler() {
  cryptoPopup.style.display = "none";
}

// Attach event listeners to both buttons


// Close pop-up when 'x' is clicked
closePopup.addEventListener("click", closePopupHandler);

// Close pop-up when clicking outside the content area
window.addEventListener("click", function(event) {
    if (event.target == cryptoPopup) {
      closePopupHandler();
    }
});



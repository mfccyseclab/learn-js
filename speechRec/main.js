let element = document.getElementById('text');
let spinner = document.getElementById('spinner');

// Check if SpeechRecognition is supported
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();

  // Set recognition properties
  recognition.lang = "en-GB";
  recognition.continuous = true;

  // Start recognition when the page is clicked
  document.onclick = () => {
    recognition.start();
    element.innerText = "Listening...";
    spinner.style.display = "block"; // Show spinner
  };

  // Handle recognition results
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(" ");
    element.innerText = transcript;
  };

  // Handle errors
  recognition.onerror = (event) => {
    element.innerText = `Error occurred: ${event.error}`;
    spinner.style.display = "none"; // Hide spinner on error
  };

  // Inform when recognition ends
  recognition.onend = () => {
    //element.innerText = "Click anywhere to restart listening.";
    spinner.style.display = "none"; // Hide spinner when recognition ends
  };
} else {
  element.innerText = "Speech Recognition is not supported in this browser.";
}
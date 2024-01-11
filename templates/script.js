// this function will send the message to the bot
function displayMessage() {
    let userMessage = document.getElementById("input-message").value;
    let chatContainer = document.getElementById("user-message-container");

    // Create a new chat bubble element
    let chatBubble = document.createElement("div");
    chatBubble.classList.add("chat-bubble");

    // Create a paragraph element for the message content
    let messageContent = document.createElement("p");
    messageContent.textContent = userMessage;

    // Create a span element for the timestamp
    let timestamp = document.createElement("span");
    timestamp.textContent = getCurrentTime();

    //Add the user icon to the chatbubble
    let image = document.createElement("img");
    
    // set the source and alt attributes
    image.src = "assets/user.png";
    image.alt = "user image";

    // Append the message content and timestamp to the chat bubble
    chatBubble.appendChild(messageContent);
    chatBubble.appendChild(timestamp);

    // Append the chat bubble to the chat container
    chatContainer.appendChild(image);
    chatContainer.appendChild(chatBubble);

    // Clear the input field
    document.getElementById("input-message").value = "";
}

function getCurrentTime() {
    let currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return currentTime;
}


// Adding event listener for the button
let sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", displayMessage);



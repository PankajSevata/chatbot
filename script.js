const chatbot = {
    responses: {
        "hello": "Hi there! How can I assist you today?",
        "hi": "Hello! How can I help you?",
        "what are the school hours?": "Our school operates from 8 AM to 3 PM, Monday to Friday.",
        "when does school start and end?": "School starts at 8 AM and ends at 3 PM.",
        "can you tell me the school timings?": "Sure! The school hours are from 8 AM to 3 PM, Monday to Friday.",
        "how to apply for admission?": "You can apply for admission by visiting our admissions office or applying online through our website.",
        "what are the contact details?": "You can reach us at (123) 456-7890 or email us at contact@school.edu.",
    },

    getResponse: function (userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        return this.responses[lowerCaseMessage] || "I'm sorry, I don't understand that question.";
    }
};

document.querySelector('#sendButton').addEventListener('click', () => {
    const userMessage = document.querySelector('#userMessage').value;
    if (userMessage.trim() === '') return;

    addMessage('user-message', userMessage);

    const botResponse = chatbot.getResponse(userMessage);
    setTimeout(() => {
        addMessage('bot-message', botResponse);
    }, 500);

    document.querySelector('#userMessage').value = '';
});

function addMessage(type, text) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = text;
    document.querySelector('#chatlogs').appendChild(messageElement);
    document.querySelector('#chatbox').scrollTop = document.querySelector('#chatbox').scrollHeight;
}
 
console.log("winnin");

chrome.runtime.onMessage.addListener(messageReceived);

function messageReceived(message, sender, sendResponse) {
    console.log(message.txt);
    
}
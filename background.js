console.log("runnin");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        txt: "Yurrr"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
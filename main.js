const database = firebase.database().ref();
const allMessages = document.getElementById("responseBox");
const usernameElem = document.getElementById("username");
const messageElem = document.getElementById("content");
const titleElem = document.getElementById("title")
const sendBtn = document.getElementById("send-btn");


function addMessageToBoard(rowData){
    const data = rowData.val();

    console.log(data);

    let singleMessage = makeSingleMessageHTML(data.USERNAME, data.TITLE, data.MESSAGE);

    // allMessages.append(singleMessage);
    allMessages.insertBefore(singleMessage, allMessages.firstChild);
}

function makeSingleMessageHTML(usernameTxt, titleTxt, messageTxt){
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("single-message");


    let usernameP = document.createElement("p");
    usernameP.classList.add("single-message-username");
    usernameP.innerHTML = titleTxt + " by " + usernameTxt;
    parentDiv.append(usernameP);

    let messageP = document.createElement("p");
    messageP.innerHTML = messageTxt;
    parentDiv.append(messageP);

    return parentDiv;
}

database.on("child_added", addMessageToBoard);
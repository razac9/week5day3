const database = firebase.database().ref();

const allMessages = document.getElementById("responseBox");
const usernameElem = document.getElementById("username");
const messageElem = document.getElementById("content");
const titleElem = document.getElementById("title")
const sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", updateDB);


function updateDB(event){
    event.preventDefault();
    const data = {
        USERNAME: usernameElem.value,
        MESSAGE: messageElem.value,
        TITLE: titleElem.value
    }

    database.push(data);

    messageElem.value = "";
    titleElem.value = "";

}
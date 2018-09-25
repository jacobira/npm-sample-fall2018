
class messages {
    constructor(){
        this.messages = ['apple', 'bandana', 'Guava'];
        // this.getMessages();
    }
    getMessages() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200) {
                messages.messages = this.responseText;
            }
        };
        xhttp.open("GET", "", true);
        xhttp.send();
    }
    displayMessage() {
        this.messages.forEach(message => {
            let element = document.createElement("li");
            let text = document.createTextNode(message);
            element.appendChild(text);
            document.getElementById('messageList').appendChild(element);
        });
    }
}
let stuff = new messages();
stuff.displayMessage();
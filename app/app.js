
class messages {
    constructor(){
        this.messages = [];
        this.getMessages();
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
        let container = document.getElementsByClassName('messages');
        
    }
}
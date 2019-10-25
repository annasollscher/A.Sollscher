class Contact extends Domer {
    _name = "";
    _gmail = "";
    _subject = "";

    onClick() {
        //Onclick fångar vad du har i textrutan. Vi måste fånga det i en variabel.    
        let name = this._name;
        alert(name);
    }

    onClick2() {
        let gmail = this._gmail;
        alert(gmail);
    }

    onClick3() {
        let subject = this._subject;
        alert(subject);
    }

    render(html) { //Läs om till HTML 
        return html`
    <section>
    <em><strong>Contact me here:</strong></em>
    <br>
    <em><strong>Name:</strong></em>
    <br>
    <input type="text" bind="_name" placeholder="Name">
    <button type="text" click="onClick">Send</button>
    <br>
    <em><strong>Gmail:</strong></em>
    <br>
    <input type="gmail" bind="_gmail" placeholder="Mail">
    <button type="text" click="onClick2">Send</button>
    <br>
    <em><strong>Subject:</strong></em>
    <br>
    <input type="subject"bind="_subject" placeholder="Subject">
    <button type="text" click="onClick3">Send</button>
    </section>


     `
    }
}

class Contact extends Domer {
    _name = ""; //privat attribut
    _gmail = "";
    _subject = "";
    _title = "";
    _date = "";
    _concertlist = "";          //skapar ett privat attribut med concertlist
    constructor(concertlist) { // konstruktor som har en concertlist
        super()                    //Ärver från domer
        this._concertlist = concertlist //this = pekar på objektet.
    }

    onClickAddConcert() { // skriver ut new concert, name, title, date, gmail, subject på hemsidan
        this._concertlist.addConcert(new Concert(this._name, this._gmail, this._subject, this._title, this._date));

    }
    onClickRemoveConcert() { //Tar bort name, date, title, date, gmail, subject från listan, dvs "remove". 
        this._concertlist.removeConcert(new Concert(this._name, this._gmail, this._subject, this._title, this._date));
    }

    render(html) { //Läser om till HTML
        return html`
    <section>
    <em><strong>Contact me here:</strong></em>
    <br>
    <em><strong>Name:</strong></em>
    <br>
    <input type="text" bind="_name" placeholder="Name">
    <br>
    <em><strong>Gmail:</strong></em>
    <br>
    <input type="gmail" bind="_gmail" placeholder="Email">
    <br>
    <em><strong>Subject:</strong></em>
    <br>
    <input type="subject"bind="_subject" placeholder="Subject">
    <br>
    <em><strong>Add concert title:</strong></em>
    <br>
    <input type="text" bind="_title" placeholder="Write concert title here">
    <br>
    <em><strong>Date:</strong></em>
    <br>
    <input type= "text" bind="_date" placeholder="Write date for concert here">
    <br>
    <br>
    <button click= "onClickAddConcert">Press here to add everything</button>
    <br>
    <br>
    <button click="onClickRemoveConcert">Press here to remove everything</button>
    </section>
    `
    }
}

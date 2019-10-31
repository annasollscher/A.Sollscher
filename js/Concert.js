class Concert extends Domer {
    _name = ""; //privat= _ attribut 
    _gmail = "";
    _subject = "";
    _title = "";
    _date = "";
    constructor(name, gmail, subject, title, date) { // En konstruktor som tar emot name,date,gmail,subject,title
        super(); //Ärver från Domer
        this._name = name; //this= pekar på sig själv, alltså this name = name
        this._gmail = gmail;
        this._subject = subject;
        this._title = title;
        this._date = date;
    }

    //Name och gmail ska vara på samma rad, subject på en enskild rad och title, date på samma rad.
    render(html) {   //Förvandlar till HTML. Render är en metod som ärver av domer, metoden ska returnera en sträng.
        return html` 
        <h3>This is the information that you have submitted</h3>
        <li>${this._name}</li> <!---detta puschas in i UL taggen --->
        <li>${this._gmail}</li>
        <li>${this._subject}</li>
        <li>${this._title}</li>
        <li>${this._date}</li>
        
        `;
    }

}


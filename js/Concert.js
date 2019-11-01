class Concert extends Domer {
    _name = ""; //privat= _ attribut 
    _gmail = "";
    _subject = "";
    _title = "";
    _date = "";
    constructor(name, gmail, subject, title, date) { // En konstruktor som tar emot name,gmail,subject,title, date
        super(); //Ärver från Domer
        this._name = name; //this= pekar på sig själv, alltså this name = name
        this._gmail = gmail;
        this._subject = subject;
        this._title = title;
        this._date = date;
    }

    //Lista med name, gmail, subject,title,date
    render(html) {   //Förvandlar till HTML. Render är en metod som ärver av domer, metoden ska returnera en sträng.
        return html` 
        <h3>This is the information that you have submitted</h3> <!---Texten dyker upp när fälten är inskrivna, och användaren trycker på knappen!--->
        <li>${this._name}</li> <!---detta puschas in i UL taggen --->
        <li>${this._gmail}</li>
        <li>${this._subject}</li>
        <li>${this._title}</li>
        <li>${this._date}</li>
        
        `;
    }

}


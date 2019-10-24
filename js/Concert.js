class Concert extends Domer { //class med namn och datum
    _name= "";
    _date="";
    constructor(name,date){ //  byggt 2 st konstruktor med namn, datum 
        super();
        this._name=name;
        this._date=date;
    }

    render (html){ 
        return html`
        <li>${this._name} ${this._date}</li>
        `;
    }

}

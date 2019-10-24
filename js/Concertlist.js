class Concertlist extends Domer {
    _concerts = []; // en array med konserter 
    _consert = "";
    constructor() {
        super();
    }

    addConcert(newConcert) { // Lagt till i konsertlist 
        this._concerts.push(newConcert);
    }

    render(html) {
        return html`

    <section>
    <ul>${this._concerts}</ul>
    </section>
    `
    }
}

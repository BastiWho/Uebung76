class Buch {
    constructor(titel, autor, isbn, preis) {
      this.titel = titel;
      this.autor = autor;
      this.isbn = isbn;
      this.preis = preis;
    }
  
    getTitel() {
      return this.titel;
    }
  
    setTitel(neuerTitel) {
      this.titel = neuerTitel;
    }
  
    getAutor() {
      return this.autor;
    }
  
    setAutor(neuerAutor) {
      this.autor = neuerAutor;
    }
  
    getISBN() {
      return this.isbn;
    }
  
    setISBN(neueISBN) {
      this.isbn = neueISBN;
    }
  
    getPreis() {
      return this.preis + "€";
    }
  
    setPreis(neuerPreis) {
      this.preis = neuerPreis;
    }
  }
  
  const buch1 = new Buch("Weber's Gasgrillbibel", "Manuel Weyer", "978-3833879500", 32.00);
  const buch2 = new Buch("JavaScript All-in-One For Dummies", "Chris Minnick", "978-1119906834", 31.99);
  const buch3 = new Buch("Mimik: Psychothriller", "Sebastian Fitzek", "978-3426281574", 24.00);
  
  const buchArray = [buch1, buch2, buch3];
  
  buchArray.forEach((buch) => {
    console.log(`${buch.getTitel()} (${buch.getAutor()}): ${buch.getPreis()}`);
  });
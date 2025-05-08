class mobil {
    constructor(merek, warna, tahun) {
        this.merek = merek;
        this.warna = warna;
        this.tahun = tahun;
    }

    info() {
        return `Mobil ${this.merek} berwarna ${this.warna} tahun ${this.tahun}`;
    }
}

const avanza = new mobil("Avanza", "Hitam", 2020);
console.log(avanza.info()); 

function Mobil(merk, warna) {
    this.merk = merk;
    this.warna = warna;
    this.info = function () {
    return `Mobil ini adalah ${this.merk} berwarna
    ${this.warna}.`;
}}

const Avanza = new Mobil("Toyota Avanza", "Hitam");
console.log(avanza.info());
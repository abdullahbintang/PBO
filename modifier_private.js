// private
class Pasien {
    #penyakit; // Private field
  
    constructor(nama, penyakit) {
      this.nama = nama;       // Public
      this.#penyakit = penyakit; // Private
    }
  
    getInfoMedis() {
      return `Pasien ${this.nama} menderita penyakit: ${this.#penyakit}`;
    }
  }
  
  const pasien1 = new Pasien("Dimas", "Hipertensi");
  
  console.log(pasien1.getInfoMedis()); 
  console.log(pasien1.nama);
  
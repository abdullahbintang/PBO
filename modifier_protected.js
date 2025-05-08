class Karyawan {
    constructor(nama, gaji) {
      this.nama = nama;     // Public
      this._gaji = gaji;    // Simulasi Protected
    }
  
    infoGaji() {
      return `${this.nama} memiliki gaji sebesar Rp${this._gaji}`;
    }
  }
  
  class Manager extends Karyawan {
    constructor(nama, gaji, departemen) {
      super(nama, gaji);
      this.departemen = departemen;
    }
  
    detailManager() {
      // Bisa mengakses _gaji karena ini subclass
      return `${this.nama} adalah manager di ${this.departemen} dengan gaji Rp${this._gaji}`;
    }
  }
  
  const manajer1 = new Manager("Sinta", 12000000, "IT");
  console.log(manajer1.detailManager());  
  console.log(manajer1._gaji);            
  
let tempat = ['Papua', 'Jawa', 'Kalimantan', 'Sulawesi', 'Papus', 'NTT', 'NTB'];
let jenisPesawat = ['Batik Air', 'Garuda', 'Speedis', 'Jet'];
let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

function makeData (x) {
  return {
    id: x + 1,
    asal: tempat[Math.floor(Math.random() * tempat.length)],
    tujuan: tempat[Math.floor(Math.random() * tempat.length)],
    maskapai: jenisPesawat[Math.floor(Math.random() * jenisPesawat.length)],
    waktu: bulan[Math.floor(Math.random() * bulan.length)] + ' ' + String(Math.floor(Math.random() * 30) + 1) + ', 2023. ' + hari[Math.floor(Math.random() * hari.length)],
  };
}

const initialState = {
  counter: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAMBAH': {
      return {
        ...state,
        counter: [
          ...state.counter,
          makeData(state.counter.length),
        ],
      };
    }
    case 'HAPUS': {
      state.counter.pop();
      return {
        ...state,
        counter: state.counter.slice(0, state.counter.length),
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;
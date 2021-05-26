// 1. MEMBUAT PILIHAN COMPUTER
// versi ringkas
function getComp() {
  const comp = Math.random()
  if (comp < 0.34) return 'TANGAN'
  if (comp >= 0.34 && comp < 0.67) return 'GAJAH'
  return 'SEMUT'

  // Versi panjang
  //     var comp = Math.random();
  //     if (comp < 0.34) {
  //         (comp = 'TANGAN');
  //     }
  //     else if (comp >= 0.34 && comp < 0.67) {
  //         (comp = 'GAJAH');
  //     }
  //     else {
  //         (comp = 'SEMUT');
  //     };
  //     return comp;
}

// 2. MEMBUAT FUNSGI HASIL
function getHasil(pilComp, pilPlayer) {
  // Versi pendek
  if (pilPlayer == pilComp) return 'SERI'
  if (pilPlayer == `TANGAN`)
    return pilComp == `SEMUT` ? 'ANDA MENANG!!!' : 'ANDA KALAH'
  if (pilPlayer == `GAJAH`)
    return pilComp == `SEMUT` ? 'ANDA KALAH' : 'ANDA MENANG!!!'
  if (pilPlayer == `SEMUT`)
    return pilComp == `TANGAN` ? 'ANDA KALAH' : 'ANDA MENANG!!!'

  // versi panjang
  // if (pilPlayer == `TANGAN` && pilComp == `SEMUT`) return `ANDA MENANG!!!`;
  // if (pilPlayer == `TANGAN` && pilComp == `GAJAH`) return `ANDA KALAH`;
  // if (pilPlayer == `GAJAH` && pilComp == `SEMUT`) return `ANDA KALAH`;
  // if (pilPlayer == `GAJAH` && pilComp == `TANGAN`) return `ANDA MENANG!!!`;
  // if (pilPlayer == `SEMUT` && pilComp == `GAJAH`) return `ANDA MENANG!!!`;
  // if (pilPlayer == `SEMUT` && pilComp == `TANGAN`)return `ANDA KALAH`;
  // return 'ANDA SERI';
}

// 3. MEMBUAT PILIHAN PLAYER dan menampilkan hasil
//MEMBUAT UL.LISTPLAYER LI menjadi array
const player = document.querySelectorAll('ul.listplayer li')
//memanggil setiap object pada array untuk diberikan perlakuan dengan FOREACH
player.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilComp = getComp()
    const pilPlayer = pil.className
    const hasil = getHasil(pilComp, pilPlayer)

    const info = document.querySelector('.hasil')
    info.innerHTML = hasil

    const hasilComp = document.querySelector('.pilcomp')
    hasilComp.innerHTML = pilComp
  })
})

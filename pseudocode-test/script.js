// 1. Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100
function tampilkanDeret() {
  let hasil = [];
  for (let i = 50; i <= 100; i += 5) {
    let label = "";
    if (i <= 60) {
      label = "KURANG";
    } else if (i > 60 && i <= 70) {
      label = "CUKUP";
    } else if (i > 70 && i <= 80) {
      label = "BAIK";
    } else {
      label = "LUAR BIASA";
    }
    hasil.push(`${i} - ${label}`);
  }
  return hasil;
}
console.log(tampilkanDeret());

// 2. Buatlah deret bilangan Fibonacci sebanyak 20
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(fibonacci(20));

// 3. Buatlah tampilan berikut sesuai variable x :
function triangle(x) {
  let hasil = "";
  for (let i = 1; i <= x; i++) {
    hasil += "*".repeat(i) + "\n";
  }
  return hasil;
}
console.log(triangle(5));

// 4. Buatlah tampilan terbilang dari variable x yang berupa 4 digit angka ( lebih besar dari 2000 ) :
function numberToWords(x) {
  if (x < 2000) return "Angka harus lebih besar dari 2000";

  const satuan = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
  ];
  const belasan = [
    "Sepuluh",
    "Sebelas",
    "Dua Belas",
    "Tiga Belas",
    "Empat Belas",
    "Lima Belas",
    "Enam Belas",
    "Tujuh Belas",
    "Delapan Belas",
    "Sembilan Belas",
  ];
  const puluhan = [
    "",
    "",
    "Dua Puluh",
    "Tiga Puluh",
    "Empat Puluh",
    "Lima Puluh",
    "Enam Puluh",
    "Tujuh Puluh",
    "Delapan Puluh",
    "Sembilan Puluh",
  ];

  let result = "";
  let ribuan = Math.floor(x / 1000);
  let ratusan = Math.floor((x % 1000) / 100);
  let puluh = Math.floor((x % 100) / 10);
  let satu = x % 10;

  result += satuan[ribuan] + " Ribu ";
  if (ratusan > 0)
    result += ratusan === 1 ? "Seratus " : satuan[ratusan] + " Ratus ";
  if (puluh === 1) {
    result += belasan[satu] + " ";
  } else {
    if (puluh > 1) result += puluhan[puluh] + " ";
    if (satu > 0) result += satuan[satu] + " ";
  }

  return result;
}
console.log(numberToWords(2234));
console.log(numberToWords(8500));
console.log(numberToWords(7001));

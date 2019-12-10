/**
 * ================
 * Mengisi Gudang
 * ================
 * 
 * [Description]
 * Terdapat function mengisiGudang yang menerima 3 parameter.
 * - Parameter pertama : `kapasitas` gudang menampung barang
 * - Parameter kedua : daftar nama `barang yang dibolehkan` mengisi gudang
 * - Parameter ketiga : daftar barang dan masing-masing jumlahnya `yang diantar` ke gudang
 * 
 * [PROSES]:
 * - Barang yang mengisi gudang harus sesuai dengan daftar nama barang yang diperbolehkan,
 *   maka selain itu barang ditolak
 * - Jika tidak ada barang yang sesuai dengan daftar nama barang yang diperbolehkan,
 *   maka akan menampilan pesan "Tidak ada barang yang mengisi gudang"
 * - Jika jumlah barang yang mengisi melebihi kapasitas gudang,
 *   maka akan menampilkan pesan "Maaf, barang yang diterima melebihi kapasitas gudang"
 * - Jika gudang masih ada ruang atau pas penuh,
 *   maka akan menampilkan pesan berisi daftar nama barang serta masing-masing jumlahnya,
 *   total jumlah barang digudang dan jumlah kapasitas yang masih tersedia
 * 
 * [RULES]:
 * - HANYA BOLEH MENGGUNAKAN BUILT IN FUNCTION .push() dan .unshift()
 * - Fungsi TIDAK menampilkan apapun dalam prosesnya
 */

function mengisiGudang(kapasitas, diperbolehkan, dikirim) {
    let isiGudang = [];
    let jumlahDikirim = 0;

    for (let i = 0; i < dikirim.length; i++) {
        for (let j = 0; j < diperbolehkan.length; j++) {
            if (dikirim[i][0] === diperbolehkan[j]) {
                isiGudang.push(dikirim[i]);
                jumlahDikirim += dikirim[i][1];
            }
        }
    }

    if (jumlahDikirim > kapasitas) {
        isiGudang = 'Maaf, barang yang diterima melebihi kapasitas gudang';
    } else if (isiGudang.length === 0) {
        isiGudang = 'Tidak ada barang yang mengisi gudang';
    } else {
        isiGudang.push(`Terisi: ${jumlahDikirim}, Sisa: ${kapasitas - jumlahDikirim}`);
    }
    
    return isiGudang;
}

console.log(mengisiGudang(400, ["Kertas HVS", "Lemari", "Proyektor"], [["Proyektor", 70], ["Lemari", 60], ["Kertas HVS", 80], ["Kursi", 20], ["Meja", 4]]));
/* OUTPUT
[ [ 'Proyektor', 70 ],
[ 'Lemari', 60 ],
[ 'Kertas HVS', 80 ],
'Terisi: 210, Sisa: 190' ]
*/

console.log(mengisiGudang(500, ["Laptop", "Printer", "AC"], [["Printer", 410], ["Laptop", 210], ["Telepon", 20], ["Wifi", 4]]));
/* OUTPUT
Maaf, barang yang diterima melebihi kapasitas gudang
*/
  
console.log(mengisiGudang(300, ["Celana Jeans"], [["Kemeja", 100], ["Jaket Parka", 100], ["Celana Jeans", 140]]));
/* OUTPUT
[ [ 'Celana Jeans', 140 ], 'Terisi: 140, Sisa: 160' ]
*/

console.log(mengisiGudang(50, ["Beras", "Kedelai"], [["Jagung", 50], ["Kacang Tanah", 20], ["Ubi Jalar", 40]]));
/* OUTPUT
Tidak ada barang yang mengisi gudang
*/
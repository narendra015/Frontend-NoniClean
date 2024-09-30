document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // const idProduct = document.getElementById('id_product').value;
    const namaProduct = document.getElementById('nama_product').value;
    const foto = document.getElementById('foto').files[0];
    const harga = document.getElementById('harga').value;
    const kategori = document.getElementById('kategori').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const jumlah = document.getElementById('jumlah').value;

    // Form validation and simple logging
    if (namaProduct && foto && harga && kategori && deskripsi && jumlah) {
        console.log({
            // idProduct,
            namaProduct,
            foto,
            harga,
            kategori,
            deskripsi,
            jumlah
        });
        alert('Produk berhasil ditambahkan!');
    } else {
        alert('Semua field harus diisi!');
    }
});

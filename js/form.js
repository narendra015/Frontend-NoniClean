document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const namaProduct = document.getElementById('nama_product').value;
    const foto = document.getElementById('foto').files[0];
    const harga = document.getElementById('harga').value;
    const kategori = document.getElementById('kategori').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const jumlah = document.getElementById('jumlah').value;

    // Buat FormData object untuk menghandle file
    const formData = new FormData();
    formData.append('nama_product', namaProduct);
    formData.append('foto', foto);  // Mengirim file
    formData.append('harga', harga);
    formData.append('kategori', kategori);
    formData.append('deskripsi', deskripsi);
    formData.append('jumlah', jumlah);

    try {
        const response = await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Produk berhasil ditambahkan!');
        } else {
            alert('Gagal menambahkan produk.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan, silakan coba lagi.');
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const productList = document.getElementById('product-list');

    try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        data.data.forEach(product => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${product.id_product}</td>
                <td>${product.nama_product}</td>
                <td><img src="${product.foto}" alt="Foto Produk" width="50"></td>
                <td>${product.harga}</td>
                <td>${product.kategori}</td>
                <td>${product.deskripsi}</td>
                <td>${product.jumlah}</td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="editProduct(${product.id_product})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id_product})">Delete</button>
                </td>
            `;
            productList.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});

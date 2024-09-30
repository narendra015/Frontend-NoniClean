const Product = [
  {
    id_product : 1,
    nama_product: "Floor Cleaner",
    foto: "gambar/Floor cleaner.png",
    harga: 30000,
    kategori: "Home Care",
    deskripsi: "Diformulasikan untuk membersihkan lantai, membunuh bakteri dan mengharumkan ruangan. Tersedia aroma apel, lemon, lavender dan sereh",
    jumlah: 10,
  },
  {
    id_product: 2,
    nama_product: "karbol",
    foto: "gambar/karbol.png",
    harga: 30000,
    kategori: "Home Care",
    deskripsi: "Cairan pembersih lantai kamar mandi yang mengandung disinfectant dengan aroma yang menyegarkan. Tersedia aroma lemon, sereh dan pinus",
    jumlah: 10,
  },
  {
    id_product: 3,
    nama_product: "Dishwashing",
    foto: "gambar/Dishwashing.png",
    harga: 30000,
    kategori: "Home Care",
    deskripsi: "Sabun pencuci piring dengan keharuman yang menyegarkan, mampu membersihkan noda & lemak di piring atau peralatan dapur dengan cepat",
    
  },
  {
    id_product: 4,
    nama_product: "Disinfectant",
    foto: "gambar/Disinfectant.png",
    harga: 30000,
    kategori: "Home Care",
    deskripsi: "Cairan disinfectant yang ampuh membunuh bakteri",
    jumlah: 10,
  },

];

// Function untuk membuat daftar produk dalam bentuk card
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="add-actives">
      <div class="card-image">
        <img src="${product.foto}" alt="${product.nama_product}" class="img">
      </div>
      <div class="card-body">
        <div class="card-text">
          <p>${product.nama_product}</p>
          <h4>${product.deskripsi}</h4>
        </div>
      </div>
      <a onclick="toggleIcon('heartIcon${product.id_product}', 'fa-regular', 'fa-solid', '#db0f0f')" class="icon">
        <i id="heartIcon${product.id_product}" class="fa-regular fa-heart" style="color: #ff0000;"></i>
      </a>
      <a class="icon" href="detail-product.html"><i class="bi bi-cart3" style="color: #93019d;"></i></a>
    </div>
  `;

  return card;
}

 // Function untuk menambahkan produk ke dalam halaman HTML
function addProductsToPage() {
    const ProductList = document.querySelector(".list-product");
    Product.forEach((product) => {
      const productCard = createProductCard(product);
      ProductList.appendChild(productCard);
    });

  }

  document.addEventListener("DOMContentLoaded", function () {
    console.log("Halaman telah dimuat sepenuhnya.");
  
    // Panggil fungsi untuk menambahkan produk ke halaman HTML
    addProductsToPage();
  });

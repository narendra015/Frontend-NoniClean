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
    id: 2,
    name: "karbol",
    description: "Cairan pembersih lantai kamar mandi yang mengandung disinfectant dengan aroma yang menyegarkan. Tersedia aroma lemon, sereh dan pinus",
    image: "gambar/karbol.png",
  },
  {
    id: 3,
    name: "Dishwashing",
    description: "Sabun pencuci piring dengan keharuman yang menyegarkan, mampu membersihkan noda & lemak di piring atau peralatan dapur dengan cepat",
    image: "gambar/Dishwashing.png",
  },
  {
    id: 4,
    name: "Disinfectant",
    description: "Cairan disinfectant yang ampuh membunuh bakteri",
    image: "gambar/Disinfectant.png",
  },

];

// Function untuk membuat daftar produk dalam bentuk card
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="add-actives">
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" class="img">
      </div>
      <div class="card-body">
        <div class="card-text">
          <p>${product.name}</p>
          <h4>${product.description}</h4>
        </div>
      </div>
      <a onclick="toggleIcon('heartIcon${product.id}', 'fa-regular', 'fa-solid', '#db0f0f')" class="icon">
        <i id="heartIcon${product.id}" class="fa-regular fa-heart" style="color: #ff0000;"></i>
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

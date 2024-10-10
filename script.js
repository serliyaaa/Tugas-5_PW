// script.js

// Daftar produk
const rentals = [
    { name: "Masker Selam", price: "Rp 100.000/hari", image: "images/alat_selam1.jpg" },
    { name: "Fin Selam", price: "Rp 50.000/hari", image: "images/alat_selam2.jpg" },
    { name: "Tabung Oksigen", price: "Rp 200.000/hari", image: "images/alat_selam3.jpg" },
    { name: "Wetsuit", price: "Rp 150.000/hari", image: "images/wetsuit.jpg" },
    { name: "Snorkel", price: "Rp 30.000/hari", image: "images/snorkel.jpg" }
];

// Mengambil elemen section dengan id "product-list"
const productList = document.getElementById("product-list");

// Menambahkan setiap produk ke dalam section
rentals.forEach(product => {
    // Membuat elemen div untuk produk
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Menambahkan gambar produk
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.classList.add("product-image");

    // Menambahkan nama produk
    const name = document.createElement("h3");
    name.textContent = product.name;

    // Menambahkan harga produk
    const price = document.createElement("p");
    price.textContent = product.price;

    // Menyusun elemen produk
    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);

    // Menambahkan produk ke dalam daftar produk
    productList.appendChild(productDiv);
});

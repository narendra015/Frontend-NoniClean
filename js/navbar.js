// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a href="index.html">
                <img src="gambar/logo.png" alt="Noni Clean" height="50px">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Product
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="product.html">Home Care</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="product.html">Laundry</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="product.html">Industry</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"></li>
                    <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item"></li>
                    <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item"></li>
                    <a class="nav-link" href="listproduct.html">List Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"></a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div class="icons">
                    <a href="favorit.html"><i class="fa-regular fa-heart"></i></a>
                    <a href="cart.html"><i class="fa-solid fa-shopping-cart"></i></a>
                    <a href="profile.html"><i class="fa-regular fa-user"></i></a>
                    <a onclick="logout()" href="userlogin.html"><i class="fa fa-right-from-bracket"></i></a>
                </div>
            </div>
        </div>
    </nav>
    `;
    
    document.querySelector("header").innerHTML = navbar;
});

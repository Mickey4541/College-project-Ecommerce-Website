// var main = document.querySelector("#main")
// var crsr = document.querySelector(".cursor")
// // dets function ko small bracket maa pass 
// // garera console.log(dets) garni ho vani mouse ko move vako x axis ko Ra
// // y axis maa move vako points haru 
// // dinxa . ra dets.x ra dets.y garni
// // ho vani x-axis ra y-axis kaa points haru dinxa. Yo sabai 
// // console bat harna sakinxa.
// main.addEventListener("mousemove",function(dets){
//     //aani aaha crsr.style maa left taba kaam garxa jaba hamile css maa .cursor lai position absolute dinxam.
//     crsr.style.left = dets.x+"px" //x axis maa move gareko px maa
//     crsr.style.top = dets.y+"px"   //y axis maa move gareko

// })



var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {
    crsr.style.left = event.clientX + "px";
    crsr.style.top = event.clientY + "px";
});


var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {
    crsr.style.left = event.clientX + 50 + "px";
    crsr.style.top = event.clientY +50 + "px";
});






/// Function to update cart count in the navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('#lg-bag sup').textContent = cart.length;
}

// Call updateCartCount when the page loads
window.addEventListener('load', updateCartCount);

// Function to handle adding a product to the cart (using name as unique identifier)
function addToCart(productName, productImage, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProduct = cart.find(product => product.name === productName);

    if (existingProduct) {
        alert('This product is already in your cart. You can update the quantity manually.');
    } else {
        cart.push({ name: productName, image: productImage, price: productPrice, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

// Function to handle adding a product to the cart (using image as unique identifier)
function addToCartByImage(productName, productImage, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProduct = cart.find(product => product.image === productImage);

    if (existingProduct) {
        alert('This product is already in your cart. You can update the quantity manually.');
    } else {
        cart.push({ name: productName, image: productImage, price: productPrice, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

// Event listener for "Add To Cart" buttons in the product listing
document.querySelectorAll('.product a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let productName = this.parentNode.querySelector('.description h5').textContent;
        let productImage = this.parentNode.querySelector('img').getAttribute('src');
        let productPrice = parseFloat(this.parentNode.querySelector('.description h4').textContent.replace('$', ''));
        addToCart(productName, productImage, productPrice);
    });
});

// Event listener for "Add To Cart" button on the single product page
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('.single-pro-details .normal');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', function(event) {
            event.preventDefault();
            let productName = document.querySelector('.single-pro-details h4').textContent;
            let productImage = document.querySelector('.single-pro-image img').getAttribute('src');
            let productPrice = parseFloat(document.querySelector('.single-pro-details h2').textContent.replace('$', ''));
            addToCartByImage(productName, productImage, productPrice);
            // window.location.href = "cart.html"; // Redirect to the cart page
        });
    }
});

// Menu toggle for mobile view
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

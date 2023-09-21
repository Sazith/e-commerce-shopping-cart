const shoppingCart = [];
let productCount = 0;
const totalProductMessage = document.getElementById('totalProductMessage');
totalProductMessage.style.display = 'none';

function addToCart(productName, price) {
    const totalProductMessage = document.getElementById('totalProductMessage');
    totalProductMessage.style.display = 'block';
    shoppingCart.push({ productName, price });
    updateCart();
    productCount = productCount + 1;
    totalProductMessage.innerHTML = "Total Product : " + productCount;
    const noProducyt = document.getElementById('noProductMessage');
    if (productCount > 0) {
        noProducyt.style.display = 'none';
    }
}
function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCart();
    productCount = productCount - 1;
    const noProducyt = document.getElementById('noProductMessage');
    const totalProductMessage = document.getElementById('totalProductMessage');
    totalProductMessage.innerHTML = "Product Add: " + productCount;
    if (productCount <= 0) {
        noProducyt.style.display = 'block';
        totalProductMessage.style.display = 'none';
    }

}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    shoppingCart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.productName} - $${item.price} <button class="remove-button" onclick="removeFromCart(${index})">Remove<i class="fa-solid fa-trash-can"></i></button>`;
        cartItems.appendChild(listItem);
    });
}

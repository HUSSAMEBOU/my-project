// navbar Scroll
window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
});


//Scroll up
document.querySelector('#to-top').addEventListener('click',()=>{

    let TopInterval = setInterval(()=>{
      
        let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

        if(ArrowTop.scrollTop > 0){
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50;
        }
        if(ArrowTop.scrollTop < 1){
            clearInterval(TopInterval)
        }
    },10)
}, false);


function showscroll(){
    let TopButton = document.getElementById('to-top');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        TopButton.classList.add('show')
    }else{
        TopButton.classList.remove('show')
    }
}

window.onscroll = () =>{
    showscroll();
}

// navbar toggle

const menuBtn = document.getElementById('menu_btn')
const navLinks = document.getElementById('nav_links')
const menuIcon = document.querySelector('i');

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open')
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})

// تحديث عداد السلة
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

// عرض السلة
function showCart() {
    const cartPopup = document.getElementById("cart-popup");
    const cartItemsList = document.getElementById("cart-items-list");
    const totalPriceElement = document.getElementById("total-price");

    // إعادة تعيين السلة المعروضة
    cartItemsList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - sp ${item.price} 
            <button class="remove-item" data-index="${index}">حذف</button>`;
        cartItemsList.appendChild(li);
        totalPrice += parseFloat(item.price);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
    cartPopup.style.display = "flex";
}

// إغلاق السلة
function closeCart() {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "none";
}


// إضافة وجبة إلى السلة
function addToCart(event) {
    const button = event.target;
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");

    const item = { id, name, price };

    cart.push(item);
    updateCartCount();
}

// حذف وجبة من السلة
function removeItem(event) {
    const index = event.target.getAttribute("data-index");
    cart.splice(index, 1);
    updateCartCount();
    showCart();
}

// ربط الأزرار وإضافة الأحداث
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", addToCart);
});

document.getElementById("cart-btn").addEventListener("click", showCart);
document.getElementById("cart-close").addEventListener("click", closeCart);

// التعامل مع حذف العناصر من السلة
document.getElementById("cart-items-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-item")) {
        removeItem(event);
    }
});

// تعريف السلة كـ مصفوفة لحفظ العناصر (من localStorage إذا كانت موجودة)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// تحديث عداد السلة
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// عرض السلة
function showCart() {
    const cartPopup = document.getElementById("cart-popup");
    const cartItemsList = document.getElementById("cart-items-list");
    const totalPriceElement = document.getElementById("total-price");

    // إعادة تعيين السلة المعروضة
    cartItemsList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - sp ${item.price} 
            <button class="remove-item" data-index="${index}">حذف</button>`;
        cartItemsList.appendChild(li);
        totalPrice += parseFloat(item.price);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
    cartPopup.style.display = "flex";
}

// عند تحميل الصفحة (استرجاع السلة من localStorage)
window.onload = function() {
    updateCartCount(); // تحديث عداد السلة عند تحميل الصفحة
};


// إغلاق السلة
function closeCart() {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "none";
}

// إضافة وجبة إلى السلة
function addToCart(event) {
    const button = event.target;
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");

    const item = { id, name, price };

    cart.push(item);
    updateCartCount();
}

// حذف وجبة من السلة
function removeItem(event) {
    const index = event.target.getAttribute("data-index"); // أخذ index العنصر المحذوف
    if (index !== null) {
        // إزالة العنصر من السلة باستخدام index
        cart.splice(index, 1);
        updateCartCount();
        showCart();
    }
}


// ربط الأزرار وإضافة الأحداث
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", addToCart);
});

document.getElementById("cart-btn").addEventListener("click", showCart);
document.getElementById("cart-close").addEventListener("click", closeCart);

// التعامل مع حذف العناصر من السلة
document.getElementById("cart-items-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-item")) {
        removeItem(event);
    }
});


// Login
const profile = document.getElementById('profile');

profile.addEventListener('click', function() {
  // Redirect to login.php
  window.location.href = 'AuthSystem/login.php';
});



// Items

const desktop = [
  {
    name: "Desktop Computer 1",
    price: 999.99,
    image_url: "img/products/desktop1.png",
    details: "High-performance desktop with the latest specifications.",
  },
  {
    name: "Desktop Computer 2",
    price: 1299.99,
    image_url: "img/products/desktop2.png",
    details: "Gaming desktop with dedicated graphics card and RGB lighting.",
  },
  {
    name: "Desktop Computer 3",
    price: 799.99,
    image_url: "img/products/desktop3.png",
    details: "Budget-friendly desktop for everyday tasks and productivity.",
  },
];

const laptop = [
  {
    name: "Laptop 1",
    price: 1299.99,
    image_url: "img/products/laptop1.png",
    details: "High-performance laptop with the latest specifications.",
  },
  {
    name: "Laptop 2",
    price: 1499.99,
    image_url: "img/products/laptop2.png",
    details: "Gaming laptop with dedicated graphics card and RGB lighting.",
  },
  {
    name: "Laptop 3",
    price: 899.99,
    image_url: "img/products/laptop3.png",
    details: "Budget-friendly laptop for everyday tasks and productivity.",
  },
];

const processor = [
  {
    name: "intel i9",
    price: 1299.99,
    image_url: "img/Products/intel i9.png",
    details: "High-performance laptop with the latest specifications.",
  },
  {
    name: "intel i7",
    price: 1499.99,
    image_url: "img/Products/intel i7.png",
    details: "Gaming laptop with dedicated graphics card and RGB lighting.",
  },
  {
    name: "intel i5",
    price: 899.99,
    image_url: "img/Products/intel i5.png",
    details: "Budget-friendly laptop for everyday tasks and productivity.",
  },
];

// Motherboards
const motherboards = [
  {
    name: "Motherboard 1",
    price: 199.99,
    image_url: "img/products/motherboard1.png",
    details: "High-quality motherboard with advanced features.",
  },
  {
    name: "Motherboard 2",
    price: 149.99,
    image_url: "img/products/motherboard2.png",
    details: "Budget-friendly motherboard for general use.",
  },
  // Add more motherboard items as needed
];

// VGA (Graphics Cards)
const vga = [
  {
    name: "Graphics Card 1",
    price: 299.99,
    image_url: "img/products/vga1.png",
    details: "Powerful graphics card for gaming and professional applications.",
  },
  {
    name: "Graphics Card 2",
    price: 199.99,
    image_url: "img/products/vga2.png",
    details: "Entry-level graphics card for basic graphics needs.",
  },
  // Add more VGA items as needed
];

// RAM
const ram = [
  {
    name: "RAM Module 1",
    price: 79.99,
    image_url: "img/products/ram1.png",
    details: "High-speed RAM module for improved system performance.",
  },
  {
    name: "RAM Module 2",
    price: 49.99,
    image_url: "img/products/ram2.png",
    details: "Budget-friendly RAM module for everyday use.",
  },
  // Add more RAM items as needed
];

// HDD (Hard Drives)
const hdd = [
  {
    name: "Hard Drive 1",
    price: 89.99,
    image_url: "img/products/hdd1.png",
    details: "Large-capacity hard drive for storage-intensive tasks.",
  },
  {
    name: "Hard Drive 2",
    price: 59.99,
    image_url: "img/products/hdd2.png",
    details: "Budget-friendly hard drive for basic storage needs.",
  },
  // Add more HDD items as needed
];

// PSU (Power Supply Units)
const psu = [
  {
    name: "Power Supply Unit 1",
    price: 129.99,
    image_url: "img/products/psu1.png",
    details: "High-efficiency power supply unit for stable power delivery.",
  },
  {
    name: "Power Supply Unit 2",
    price: 79.99,
    image_url: "img/products/psu2.png",
    details: "Budget-friendly power supply unit for standard usage.",
  },
  // Add more PSU items as needed
];

// Casing
const casing = [
  {
    name: "Casing 1",
    price: 69.99,
    image_url: "img/products/casing1.png",
    details: "Sleek and durable casing for housing your components.",
  },
  {
    name: "Casing 2",
    price: 49.99,
    image_url: "img/products/casing2.png",
    details: "Economical casing for a basic setup.",
  },
  // Add more casing items as needed
];

// Fan
const fan = [
  {
    name: "Fan 1",
    price: 29.99,
    image_url: "img/products/fan1.png",
    details: "High-performance cooling fan for optimal system temperature.",
  },
  {
    name: "Fan 2",
    price: 19.99,
    image_url: "img/products/fan2.png",
    details: "Quiet and budget-friendly fan for standard cooling needs.",
  },
  // Add more fan items as needed
];

// Peripherals
const perip = [
  {
    name: "Peripheral 1",
    price: 49.99,
    image_url: "img/products/mouse1.png",
    details: "Premium peripheral for enhanced user experience.",
  },
  {
    name: "Peripheral 2",
    price: 29.99,
    image_url: "img/products/headset1.png",
    details: "Budget-friendly peripheral for everyday use.",
  },
  // Add more peripheral items as needed
];

// Chairs & Tables
const chair = [
  {
    name: "Chair 1",
    price: 99.99,
    image_url: "img/products/chair1.png",
    details: "Comfortable and ergonomic chair for long hours of use.",
  },
  {
    name: "Chair 2",
    price: 79.99,
    image_url: "img/products/chair2.png",
    details: "Affordable chair for basic seating needs.",
  },
  // Add more chair items as needed
];


// IDs
  const desktopLink = document.getElementById('desktop-link');
  const productBody = document.getElementById('product_body');
  const defaultHomeSection = document.getElementById('default-home');
  const home = document.getElementById("home");
  const laptopLink = document.getElementById('laptop-link');
  const processorLink = document.getElementById('processor-link');
const motherboardsLink = document.getElementById('motherboards-link');
const vgaLink = document.getElementById('vga-link');
const ramLink = document.getElementById('ram-link');
const hddLink = document.getElementById('hdd-link');
const psuLink = document.getElementById('psu-link');
const casingLink = document.getElementById('casing-link');
const fanLink = document.getElementById('fan-link');
const peripLink = document.getElementById('perip-link');
const chairLink = document.getElementById('chair-link');

 

const desktopItems = desktop;
const laptopItems = laptop;
const processorItems = processor;
const motherboardsItems = motherboards;
const vgaItems = vga;
const ramItems = ram;
const hddItems = hdd;
const psuItems = psu;
const casingItems = casing;
const fanItems = fan;
const peripItems = perip;
const chairItems = chair;

function htmlSafeJSONStringify(obj) {
  return JSON.stringify(obj)
    .replace(/"/g, '&quot;')  // Replace double quotes with HTML entity &quot;
    .replace(/'/g, '&#39;');  // Replace single quotes with HTML entity &#39;
}

  function loadItems(items) {
    const itemsHTML = items.map(item => `
    <div key="${item.name}" class="desktop-item">
      <img class="product-img" src="${item.image_url}" alt="${item.name}">
      <h3 class="product-name">${item.name}</h3>
      <p class="product-price">Price: $${item.price.toFixed(2)}</p>
      <button class="add-to-cart-btn" onclick="addToCart(${htmlSafeJSONStringify(item)})">
        <i class='bx bxs-cart'></i> Add to cart
      </button>
    </div>
  `);

  
    productBody.style.display = "grid";
    productBody.innerHTML = itemsHTML.join('');
    defaultHomeSection.style.display = "none";
  }

  desktopLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(desktopItems);
  });
  
  laptopLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(laptopItems);
  });
  
  processorLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(processorItems);
  });
  
  productBody.style.display = "none"

  home.addEventListener("click", function(event){
   location.reload()
   productBody.style.display = "none"

  })

  motherboardsLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(motherboards);
  });
  
  vgaLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(vga);
  });
  
  ramLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(ram);
  });
  
  hddLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(hdd);
  });
  
  psuLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(psu);
  });
  
  casingLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(casing);
  });
  
  fanLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(fan);
  });
  
  peripLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(perip);
  });
  
  chairLink.addEventListener("click", function (event) {
    event.preventDefault();
    loadItems(chair);
  });


  const cartBody = document.getElementById("cart-body");
const cartButton = document.getElementById("cart-button");
const displayQuantity = document.getElementById("quantity");
const displayTotalPrice = document.getElementById("total-price"); 

cartBody.style.display = "none";
let isCartVisible = false;

const cartItems = [];

function addToCart(item) {
  const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);

  if (existingItemIndex !== -1) {
    // Item already exists in the cart, update quantity
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // Item doesn't exist, add it to the cart
    cartItems.push({ ...item, quantity: 1 });
  }

  

  updateCartDisplay();
}

function removeFromCart(itemName) {
  const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === itemName);

  if (existingItemIndex !== -1) {
    // Item exists in the cart
    if (cartItems[existingItemIndex].quantity > 1) {
      // If quantity is more than 1, decrement the quantity
      cartItems[existingItemIndex].quantity -= 1;
    } else {
      // If quantity is 1, remove the item from the cart
      cartItems.splice(existingItemIndex, 1);
    }

    updateCartDisplay();
  }
}




function updateCartDisplay() {
  let itemCounter = 0;
  let totalPrice = 0;

  const cartItemHTML = cartItems.map((cartItem) => {
    itemCounter += cartItem.quantity;
    totalPrice += cartItem.price * cartItem.quantity;
  
    return `
      <div key="${cartItem.name}" class="cart-item">
        <img class="cart-img" src="${cartItem.image_url}" alt="${cartItem.name}">
        <div>
          <h3 class="cart-name">${cartItem.name}</h3>
          <p class="cart-price">Price: $${cartItem.price.toFixed(2)}</p>
          <p class="cart-quantity">Quantity: ${cartItem.quantity}</p>
        </div>
        <button class="remove-cart-btn" onclick="removeFromCart('${cartItem.name}')">Remove</button>
      </div>
    `;
  });
  
  cartBody.innerHTML = cartItemHTML.join('');
  displayQuantity.textContent = totalPrice.toFixed(2)

}

cartButton.addEventListener("click", function () {
  isCartVisible = !isCartVisible;

  if (isCartVisible) {
    cartBody.style.display = "grid";
  } else {
    cartBody.style.display = "none";
  }
});



// img slider

let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});




// cart

// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.cart-list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classcart-list.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classcart-list.remove('active');
// })

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }
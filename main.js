// Items

const desktop = [
  {
    name: "Desktop Computer 1",
    price: 999.99,
    image_url: "C:\wamp64\www\Computer-Shop\img\Products\desktop1.png",
    details: "High-performance desktop with the latest specifications.",
  },
  {
    name: "Desktop Computer 2",
    price: 1299.99,
    image_url: "C:\wamp64\www\Computer-Shop\img\Products\desktop2.png",
    details: "Gaming desktop with dedicated graphics card and RGB lighting.",
  },
  {
    name: "Desktop Computer 3",
    price: 799.99,
    image_url: "C:\wamp64\www\Computer-Shop\img\Products\desktop3.png",
    details: "Budget-friendly desktop for everyday tasks and productivity.",
  },
];

const laptop = [
  {
    name: "Laptop 1",
    price: 1299.99,
    image_url: "https://www.nanotek.lk/uploads/product/21-20230810062415-kv-pd.png",
    details: "High-performance laptop with the latest specifications.",
  },
  {
    name: "Laptop 2",
    price: 1499.99,
    image_url: "mg/Products/laptop2.png",
    details: "Gaming laptop with dedicated graphics card and RGB lighting.",
  },
  {
    name: "Laptop 3",
    price: 899.99,
    image_url: "https://www.nanotek.lk/product/1743",
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
    image_url: "https://www.nanotek.lk/product/1136",
    details: "Gaming laptop with dedicated graphics card and RGB lighting.",
  },
  {
    name: "intel i5",
    price: 899.99,
    image_url: "https://www.nanotek.lk/product/1743",
    details: "Budget-friendly laptop for everyday tasks and productivity.",
  },
];


// IDs
  const desktopLink = document.getElementById('desktop-link');
  const productBody = document.getElementById('product_body');
  const defaultHomeSection = document.getElementById('default-home');
  const home = document.getElementById("home");
  const laptopLink = document.getElementById('laptop-link');
 

  const desktopItems = desktop;
  const laptopItems = laptop;

  function loadDesktopItems(){
    
      const itemsHTML = desktopItems.map(item => `
      <div class="desktop-item">
        <img class="product-img" src="${item.image_url}" alt="${item.name}">
        <h3 class="product-name">${item.name}</h3>
        <p class="product-price">Price: $${item.price.toFixed(2)}</p>
      
      </div>
    `);


    productBody.innerHTML = itemsHTML.join('');

    defaultHomeSection.style.display = "none";
  }

  function loadLaptopItems(){
    const itemsHTML = laptopItems.map(item => `
      <div class="desktop-item">
        <img class="product-img" src="${item.image_url}" alt="${item.name}">
        <h3 class="product-name">${item.name}</h3>
        <p class="product-price">Price: $${item.price.toFixed(2)}</p>
      
      </div>
    `);


    productBody.innerHTML = itemsHTML.join('');

    defaultHomeSection.style.display = "none";
  }

  desktopLink.addEventListener("click", function(event){
    event.preventDefault();
    loadDesktopItems();

  })

  laptopLink.addEventListener("click", function(event){
    event.preventDefault();
    loadLaptopItems();

  })
  

  home.addEventListener("click", function(event){
   location.reload()

  })

 



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
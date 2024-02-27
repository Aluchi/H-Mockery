let productsInBag = localStorage.getItem("products-in-bag");
productsInBag = JSON.parse(productsInBag)

const emptyBagContainer = document.querySelector("#empty-bag");
const bagProductsContainer = document.querySelector("#bag-products");
const bagActionsContainer = document.querySelector("#bag-actions");
const boughtBagContainer = document.querySelector("#bought-bag");
let buttonsDelete = document.querySelectorAll(".bag-delete-product");


function uploadBagProducts(){
    if (productsInBag && productsInBag.length > 0) {


        emptyBagContainer.classList.add("disabled");
        bagProductsContainer.classList.remove("disabled");
        bagActionsContainer.classList.remove("disabled");
        boughtBagContainer.classList.add("disabled");
    
        bagProductsContainer.innerHTML = ``;
    
        productsInBag.forEach(product => {
    
            const div = document.createElement("div");
            div.classList.add("bag-product");
            div.innerHTML = `
                <img class="bag-product-img" src="${product.image} alt="${product.title}">
                <div class="bag-title-product">
                    <small>Title</small>
                    <h3>${product.title}</h3>
                </div>
                <div class="bag-quantity-product">
                    <small>Quantity</small>
                    <p>${product.quantity}</p>
                </div>
                <div class="bag-price-product">
                    <small>Price</small>
                    <p>$${product.price}</p>
                </div>
                <div class="bag-subtotal-product">
                    <small>Subtotal</small>
                    <p>${product.price * product.quantity}</p>
                </div>
                <button class="bag-delete-product" id="${product.id}">
                    <i class="bi bi-trash"></i>
                </button>
            `;
    
            bagProductsContainer.append(div);
    
        })
        
    
    } else {
    
        emptyBagContainer.classList.remove("disabled");
        bagProductsContainer.classList.add("disabled");
        bagActionsContainer.classList.add("disabled");
        boughtBagContainer.classList.add("disabled");
    
    }

    updateDeleteButtons();

}

uploadBagProducts();

function updateDeleteButtons() {
    buttonsDelete = document.querySelectorAll(".bag-delete-product");

    buttonsDelete.forEach(button => {
        button.addEventListener("click", deleteFromBag)
    });

}

function deleteFromBag(e){
    const idButton = e.currentTarget.id;
    const index = productsInBag.findIndex(product => product.id === idButton);
    
    productsInBag.splice(index, 1);
    uploadBagProducts();

    localStorage.setItem("proucts-in-bag", JSON.stringify(productsInBag));

}

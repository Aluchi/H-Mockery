

//PRODUCTS
const productsArray = [
    // SHIRTS
    {
        id: `shirt-01`,
        title: `Sample item`,
        image: `../imgs/shirts/01.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 10
    },
    {
        id: `shirt-02`,
        title: `Sample item 2`,
        image: `../imgs/shirts/02.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 15
    },
    {
        id: `shirt-03`,
        title: `Sample item 3`,
        image: `../imgs/shirts/03.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 20
    },
    {
        id: `shirt-04`,
        title: `Sample item 4`,
        image: `../imgs/shirts/04.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 15.50
    },
    {
        id: `shirt-05`,
        title: `Sample item 5`,
        image: `../imgs/shirts/05.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 12
    },
    {
        id: `shirt-06`,
        title: `Sample item 6`,
        image: `../imgs/shirts/06.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 14.50
    },
    {
        id: `shirt-07`,
        title: `Sample item 7`,
        image: `../imgs/shirts/07.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 18
    },
    {
        id: `shirt-08`,
        title: `Sample item 8`,
        image: `../imgs/shirts/08.jpg`,
        category: {
            name: `Shirts`,
            id: `shirts`
        },
        type: `shirt`,
        price: 19.99
    },

    // TROUSERS

    {
        id: `trouser-01`,
        title: `Trouser`,
        image: `../imgs/trousers/01.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },
    {
        id: `trouser-02`,
        title: `Trouser 2`,
        image: `../imgs/trousers/02.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },
    {
        id: `trouser-03`,
        title: `Trouser 3`,
        image: `../imgs/trousers/03.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },
    {
        id: `trouser-04`,
        title: `Trouser 4`,
        image: `../imgs/trousers/04.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },
    {
        id: `trouser-05`,
        title: `Trouser 5`,
        image: `../imgs/trousers/05.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },
    {
        id: `trouser-06`,
        title: `Trouser 6`,
        image: `../imgs/trousers/04.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },
    {
        id: `trouser-07`,
        title: `Trouser 7`,
        image: `../imgs/trousers/03.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },
    {
        id: `trouser-08`,
        title: `Trouser 8`,
        image: `../imgs/trousers/02.jpg`,
        category: {
            name: `Trousers`,
            id: `trousers`
        },
        type: `trouser`,
        price: 30
    },


    // JACKETS
    {
        id: `jacket-01`,
        title: `Jacket`,
        image: `../imgs/jackets/01.jpg`,
        category: {
            name: `Jackets`,
            id: `Jackets`
        },
        type: `jacket`,
        price: 30
    },
    {
        id: `jacket-02`,
        title: `Jacket 2`,
        image: `../imgs/jackets/02.jpg`,
        category: {
            name: `Jackets`,
            id: `jackets`
        },
        type: `jacket`,
        price: 30
    },
    {
        id: `jacket-03`,
        title: `Jacket 3`,
        image: `../imgs/jackets/03.jpg`,
        category: {
            name: `Jackets`,
            id: `jackets`
        },
        type: `jacket`,
        price: 35
    },
    {
        id: `jacket-04`,
        title: `Jacket 4`,
        image: `../imgs/jackets/04.jpg`,
        category: {
            name: `Jackets`,
            id: `jackets`
        },
        type: `jacket`,
        price: 25.50
    },
    {
        id: `jacket-05`,
        title: `Jacket 5`,
        image: `../imgs/jackets/05.jpg`,
        category: {
            name: `Jackets`,
            id: `jackets`
        },
        type: `jacket`,
        price: 20
    },
    {
        id: `jacket-06`,
        title: `Jacket 6`,
        image: `../imgs/jackets/04.jpg`,
        category: {
            name: `Jackets`,
            id: `jackets`
        },
        type: `jacket`,
        price: 21
    },
    {
        id: `jacket-07`,
        title: `Jacket 7`,
        image: `../imgs/jackets/03.jpg`,
        category: {
            name: `Jackets`,
            id: `jackets`
        },
        type: `jacket`,
        price: 25
    },
    {
        id: `jacket-08`,
        title: `Jacket 8`,
        image: `../imgs/jackets/02.jpg`,
        category: {
            name: `Jackets`,
            id: `jackets`
        },
        type: `jacket`,
        price: 40
    }

];


const productsContainer = document.querySelector("#products-container");
const buttonsCategories = document.querySelectorAll(".button-categories");
const mainTitle = document.querySelector("#main-title");
let addButtons = document.querySelectorAll(".product-add-to-bag");
let bagNumber = document.querySelector("#bag-number");

function loadProducts(chosenProducts) {

    productsContainer.innerHTML = "";

    chosenProducts.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <a href="">
                <img src="${product.image}" alt="${product.title}" class="product-img">
            </a>
            <div class="product-details">
                <a href="">
                    <h3 class="product-title">${product.title}</h3>
                </a>
                <p class="product-price">$${product.price}</p>
                <span>${product.type}</span>
                <button class="product-add-to-bag" id="${product.id}">Add to the bag</button>
            </div>
        `;
        
        productsContainer.append(div);
    })

    updateAddButtons();
}

loadProducts(productsArray);

buttonsCategories.forEach(button => {
    button.addEventListener("click", (e) => {

        buttonsCategories.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "view-all-button") {
            const productCategory = productsArray.find(product => product.category.id === e.currentTarget.id);
            
            mainTitle.innerText = productCategory.category.name;

            const productsbutton = productsArray.filter(product => product.category.id === e.currentTarget.id);
            loadProducts(productsbutton);
        } else {
            mainTitle.innerText = "ALL PRODUCTS";
            loadProducts(productsArray);
        }
    })
});


function updateAddButtons() {
    addButtons = document.querySelectorAll(".product-add-to-bag");

    addButtons.forEach(button => {
        button.addEventListener("click", addToBag)
    });

}

let productsInBag;

let productsInBagLS = localStorage.getItem("products-in-bag");

if (productsInBagLS){
    productsInBag = JSON.parse(productsInBagLS);
    updateBagNumber();
} else {
    productsInBag = [];
}

function addToBag(e){
    
    const idButton = e.currentTarget.id;
    const addedProduct = productsArray.find(product => product.id === idButton);

    if(productsInBag.some(product => product.id === idButton)){
        const index = productsInBag.findIndex(product => product.id === idButton);
        productsInBag[index].quantity++;
    } else {
        addedProduct.quantity = 1;
        productsInBag.push(addedProduct);
    }

    updateBagNumber();

    localStorage.setItem("products-in-bag", JSON.stringify(productsInBag));

}

function updateBagNumber(){
    let newBagNumber = productsInBag.reduce((acc, product) => acc + product.quantity, 0);
    bagNumber.innerText = newBagNumber;
}
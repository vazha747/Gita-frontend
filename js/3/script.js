document.addEventListener("DOMContentLoaded", function(){

// declare variable from id in html
const productList = document.getElementById("product-list")


    const products = [
        {
            id:1,
            name: "Apple",
            price: 1.99,
            description: "This is an apple"            
        }, 
        {
            id:2,
            name: "Orange",
            price: 2.99,
            description: "This is an orange"
        },
    ]

    
    products.forEach(products => {
        const listItem = document.createElement("li")
        listItem.classList.add("product-item")

        const productInfo = document.createElement("div")

        const productName = document.createElement("h3")
        productName.textContent = products.name
        productInfo.appendChild(productName)

        const productDescription = document.createElement("p")
        productDescription.textContent = products.description
        productInfo.appendChild(productDescription)

        const productPrice = document.createElement("p")
        productPrice.textContent = `Price : $${products.price}`
        productInfo.appendChild(productPrice)

        const addToCartButton = document.createElement("button")
        addToCartButton.textContent = "Add to cart"

        addToCartButton.addEventListener("click", function(){
            alert(products.price)
        })

        productInfo.appendChild(addToCartButton)

        listItem.appendChild(productInfo)

        productList.appendChild(listItem)
 
    })

})
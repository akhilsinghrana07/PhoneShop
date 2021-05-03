var productList = [
    {
        "id": 6,
  "title": "Apple iPhone 11",
  "image": "./images/products/iphone/iphone3.jpeg",
  "price": 760,
  "topProduct": "true",
  "category": "Apple"
},

{
  "id": 3,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone2.jpeg",
  "price": 265,
  "topProduct": "true",
  "category": "Headphones"
},
{
  "id": 4,
  "title": "Apple iPhone 11",
  "image": "./images/products/iphone/iphone2.jpeg",
  "price": 850,
  "topProduct": "true",
  "category": "Apple"
},
{
  "id": 8,
  "title": "Apple iPhone 11",
  "image": "./images/products/iphone/iphone4.jpeg",
  "price": 290,
  "category": "Apple"
},
{
  "id": 5,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone3.jpeg",
  "price": 250,
  "category": "Headphones"
},

{
  "id": 7,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone4.jpeg",
  "price": 365,
  "category": "Headphones"
},


{
  "id": 10,
  "title": "Apple iPhone 11 Pro",
  "image": "./images/products/iphone/iphone5.jpeg",
  "price": 385,
  "category": "Apple"
},
{
  "id": 11,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone6.jpeg",
  "price": 475,
  "category": "Headphones"
},
{
  "id": 13,
  "title": "Apple iPhone 11",
  "image": "./images/products/iphone/iphone6.jpeg",
  "price": 800,
  "category": "Apple"
},
{
  "id": 12,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone7.jpeg",
  "price": 850,
  "category": "Special Products"
},

{
  "id": 14,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone7.jpeg",
  "price": 360,
  "category": "Headphones"
},
{
  "id": 9,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone5.jpeg",
  "price": 320,
  "category": "Headphones"
},
{
  "id": 15,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone8.jpeg",
  "price": 305,
  "category": "Headphones"
},
{
  "id": 16,
  "title": "Samsung Galaxy",
  "image": "./images/products/sumsung/samsung6.jpeg",
  "price": 400,
  "category": "Samsung"
},
{
  "id": 17,
  "title": "Samsung Galaxy",
  "image": "./images/products/sumsung/samsung5.jpeg",
  "price": 550,
  "category": "Samsung"
},
{
  "id": 2,
  "title": "Apple iPhone 11",
  "image": "./images/products/iphone/iphone1.jpeg",
  "price": 300,
  "category": "Apple"
},
{
  "id": 18,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone9.jpeg",
  "price": 630,
  "category": "Headphones"
},
{
  "id": 20,
  "title": "Samsung Galaxy",
  "image": "./images/products/sumsung/samsung4.jpeg",
  "price": 270,
  "category": "Samsung"
},
{
  "id": 19,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone10.jpeg",
  "price": 250,
  "category": "Headphones"
},
{
  "id": 1,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone1.jpeg",
  "price": 265,
  "category": "Headphones"
},
{
  "id": 24,
  "title": "Samsung Galaxy",
  "image": "./images/products/sumsung/samsung2.jpeg",
  "price": 500,
  "category": "Samsung"
},
{
  "id": 21,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone11.jpeg",
  "price": 700,
  "category": "Headphones"
},

{
  "id": 25,
  "title": "Samsung Galaxy",
  "image": "./images/products/sumsung/samsung1.jpeg",
  "price": 450,
  "category": "Samsung"
},
{
  "id": 22,
  "title": "Samsung Galaxy",
  "image": "./images/products/sumsung/samsung3.jpeg",
  "price": 460,
  "category": "Samsung"
},
{
  "id": 23,
  "title": "Sony WH-CH510",
  "image": "./images/products/headphone/headphone12.jpeg",
  "price": 600,
  "category": "Headphones"
}
];

var category = ['All category','Apple', 'Samsung', 'Headphones']

var pageNo = 1;

var selectedCategory = 'All category';

var pageSize = 9;

this.getCategory();

function getCategory(){     
     var categoryItem = '';
    category.forEach((obj, index)=> {
        categoryItem += `<p class=${selectedCategory == obj ? "selected-category" : "pointer" } id='${obj}' onclick="categoryFilter('${obj}')">${obj}</p>`
    })
        document.getElementById('category-list').innerHTML = categoryItem
    }


    var dropdownlist = '';
    category.forEach((obj, index)=> {
        if(obj !==  'All category'){
             dropdownlist += `<option>${obj}</option>`
        }
       
    })
document.getElementById('categoryListSelect').innerHTML = dropdownlist  

document.getElementById("sortingRange").value = "default";
document.getElementById('product-total').innerHTML = productList.length;
document.getElementById("input-product-file").value = null;
document.getElementById("input-product-name").value  = null;
document.getElementById("input-product-price").value = null;

// product listing in onload 
getProductList(productList);


// document.querySelector("addProductForm").addEventListener("click", function(event) {
//          event.preventDefault();
// }, false);

// to add the product's item
function addProduct(){
  
   let name = document.getElementById("input-product-name").value;
    let price= document.getElementById("input-product-price").value
    let inputFile = document.getElementById("input-product-file").files[0];
    let isTopProduct = document.getElementById('topProduct').checked 

    if(!name){
        document.getElementById("error-msg-title").innerHTML = "Please Enter the Title";
        return
    }
     document.getElementById("error-msg-title").innerHTML = "";


    if(!price){
        document.getElementById("error-msg-price").innerHTML = "Please Enter the Price";
        return
    }
    document.getElementById("error-msg-price").innerHTML = "";

    if(!inputFile){
        document.getElementById("error-msg-file").innerHTML = "Please Upload the file";
        return
    }
    document.getElementById("error-msg-file").innerHTML = "";


    const file = inputFile;
    const reader = new FileReader();

    reader.onloadend = () => {
        productList.push({
            title: name,
            price: price,
            category: "dress",
            topProduct : isTopProduct,
            image : reader.result
        })
        getProductList(productList);    
    };
    reader.readAsDataURL(file);
    document.getElementById("input-product-name").value = null
    document.getElementById("input-product-price").value = null
    document.getElementById("input-product-file").value = null ;
    document.getElementById("errormsg").innerHTML = "";
    document.getElementById('fileName').innerHTML = "";
    document.getElementById("cancelBtn").click();
     document.getElementById('topProduct').checked = false;
}

function getFileName(){
    let file = document.getElementById('input-product-file')
    document.getElementById('fileName').innerHTML = file.files[0].name
     document.getElementById('error-msg-file').innerHTML = ""
}

function sortProduct(){
  var range = document.getElementById('sortingRange').value;
  var sortedProduct = [];

  let products =  JSON.parse(JSON.stringify(productList)) ;

  if(selectedCategory !== "All category" && selectedCategory){
      products =  products.filter(product => product.category === selectedCategory)
  }
 
  if(range == 'low'){
      sortedProduct = products.sort(function(a,b){
          return a.price - b.price;
          }
      );
  }
  if(range == 'high'){
      sortedProduct = products.sort(function(a,b){
          return b.price - a.price;
          }
      );
  }
  if(range == "default"){
      sortedProduct = productList
  }

  getProductList(sortedProduct, true);
}
function changePage(number){
  pageNo = number;
  let selectedProducts = productList
  if(selectedCategory !== "All category" && selectedCategory){
      selectedProducts =  selectedProducts.filter(product => product.category === selectedCategory)
  }
  getProductList(selectedProducts)
}

function categoryFilter(val){
  selectedCategory = val;
  document.getElementById(val).className="selected-category"
  changePage(1);
  getCategory();
}

function getProductList(products, disableTopProductSort){
    // Show Product List 
    var productItem = '';
    var topProducts = '';
    console.log(products.length)
    let totalProduct = Math.ceil(products.length/pageSize);
    
    
    var paginationList = ``

    var i;
    for (i = 0; i < totalProduct; i++) {
        paginationList += `<li class="page-item"><button class="page-link" onclick="changePage(${i+1})">${i+1}</button></li>`;
    } 

    document.getElementById('pagination').innerHTML = paginationList;
    
    let endPageNumber = pageNo * pageSize;
    let startPageNumber = endPageNumber - pageSize ;
    var slicedproducts = products.slice(startPageNumber, endPageNumber);
    slicedproducts.forEach((obj, index)=> {

    productItem += `<div class="col-12 col-sm-4">
    <div class="product category__products">
    <div class="product__header">
      <img src=${obj.image} alt="product">
    </div>
    <div class="product__footer">
      <h3>${obj.title}</h3>
      <div class="product__price">
        <h4>$${obj.price}</h4>
      </div>
    </div>
  </div>
  </div>`
    })
        
    productList.forEach((obj, index)=> {

      if(obj.topProduct){
            topProducts += ` <section class="row py-2">
                              <div class="row1">
                                <div class="column1">
                          <img style="width: 5rem;" src=${obj.image} alt="" />
                          </div>
                          <div class="column2">
                              <h6  style="font-size: medium;">${obj.title}</h6>
                              <div class="rating">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <div>
                              <span>${obj.price}</span>
                              </div>
                            </div>
                          </div>
                      </section>`

      }
  })
   document.getElementById('product-item').innerHTML = productItem;

   if(!disableTopProductSort){
        document.getElementById('top-products').innerHTML = topProducts; 
   }
}

function uploadBtn(){
    document.getElementById("input-product-file").click()
}




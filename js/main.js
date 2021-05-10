var productList = [
    {
  "productId": "p06",
  "name": "Apple iPhone 11",
  "imgUrl": "./images/products/iphone/iphone3.jpeg",
  "price": 760,
  "topProduct": "true",
  "category": "Apple"
},

{
  "productId": "p03",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone2.jpeg",
  "price": 265,
  "topProduct": "true",
  "category": "Headphones"
},
{
  "productId": "p04",
  "name": "Apple iPhone 11",
  "imgUrl": "./images/products/iphone/iphone2.jpeg",
  "price": 850,
  "topProduct": "true",
  "category": "Apple"
},
{
  "productId": "p08",
  "name": "Apple iPhone 11",
  "imgUrl": "./images/products/iphone/iphone4.jpeg",
  "price": 290,
  "category": "Apple"
},
{
  "productId": "p05",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone3.jpeg",
  "price": 250,
  "category": "Headphones"
},

{
  "productId": "p07",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone4.jpeg",
  "price": 365,
  "category": "Headphones"
},


{
  "productId": "p10",
  "name": "Apple iPhone 11 Pro",
  "imgUrl": "./images/products/iphone/iphone5.jpeg",
  "price": 385,
  "category": "Apple"
},
{
  "productId": "p11",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone6.jpeg",
  "price": 475,
  "category": "Headphones"
},
{
  "productId": "p13",
  "name": "Apple iPhone 11",
  "imgUrl": "./images/products/iphone/iphone6.jpeg",
  "price": 800,
  "category": "Apple"
},
{
  "productId": "p12",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone7.jpeg",
  "price": 850,
  "category": "Special Products"
},

{
  "productId": "p14",
  "name": "Sony WH-CH510",
  "imgUrl":"./images/products/headphone/headphone7.jpeg",
  "price": 360,
  "category": "Headphones"
},
{
  "productId": "p09",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone5.jpeg",
  "price": 320,
  "category": "Headphones"
},
{
  "productId": "p15",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone8.jpeg",
  "price": 305,
  "category": "Headphones"
},
{
  "productId": "p16",
  "name": "Samsung Galaxy",
  "imgUrl": "./images/products/sumsung/samsung6.jpeg",
  "price": 400,
  "category": "Samsung"
},
{
  "productId": "p17",
  "name": "Samsung Galaxy",
  "imgUrl": "./images/products/sumsung/samsung5.jpeg",
  "price": 550,
  "category": "Samsung"
},
{
  "productId": "p2",
  "name": "Apple iPhone 11",
  "imgUrl": "./images/products/iphone/iphone1.jpeg",
  "price": 300,
  "category": "Apple"
},
{
  "productId": "p18",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone9.jpeg",
  "price": 630,
  "category": "Headphones"
},
{
  "productId": "p20",
  "name": "Samsung Galaxy",
  "imgUrl": "./images/products/sumsung/samsung4.jpeg",
  "price": 270,
  "category": "Samsung"
},
{
  "productId": "p19",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone10.jpeg",
  "price": 250,
  "category": "Headphones"
},
{
  "productId": "p01",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone1.jpeg",
  "price": 265,
  "category": "Headphones"
},
{
  "productId": "p24",
  "name": "Samsung Galaxy",
  "imgUrl": "./images/products/sumsung/samsung2.jpeg",
  "price": 500,
  "category": "Samsung"
},
{
  "productId": "p21",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone11.jpeg",
  "price": 700,
  "category": "Headphones"
},

{
  "productId": "p25",
  "name": "Samsung Galaxy",
  "imgUrl": "./images/products/sumsung/samsung1.jpeg",
  "price": 450,
  "category": "Samsung"
},
{
  "productId": "p22",
  "name": "Samsung Galaxy",
  "imgUrl": "./images/products/sumsung/samsung3.jpeg",
  "price": 460,
  "category": "Samsung"
},
{
  "productId": "p23",
  "name": "Sony WH-CH510",
  "imgUrl": "./images/products/headphone/headphone12.jpeg",
  "price": 600,
  "category": "Headphones"
}
];

var category = ['All category','Apple', 'Samsung', 'Headphones'];

var pageNo = 1;

var selectedCategory = 'All category';

var pageSize = 9;

var editProductIndex = null;

var priceSliderValue = 0;   

document.getElementById('priceRange').value = 0;

var updatedProduct = [];

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
document.getElementById('categoryListSelectEdit').innerHTML = dropdownlist

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
            productId : 'pn' + productList.length,
            name: name,
            price: price,
            category: document.getElementById('categoryListSelect').value,
            topProduct : isTopProduct,
            imgUrl : reader.result
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

function editModelView(id){
    let product = productList.findIndex((obj) => obj.productId === id );
    editProductIndex = product;
    product = productList[product];
    document.getElementById("edit-product-name").value = product.name
    document.getElementById("edit-product-price").value = product.price
    document.getElementById('categoryListSelectEdit').value = product.category
    document.getElementById('editTopProduct').checked = product.topProduct
    document.getElementById('editModelViewBtn').click();
}

function editProduct(){
  
    let name = document.getElementById("edit-product-name").value;
    let price= document.getElementById("edit-product-price").value
    let inputFile = document.getElementById("edit-product-file").files[0];
    //let isTopProduct = document.getElementById('editTopProduct').checked 

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

    // if(!inputFile){
    //     document.getElementById("error-msg-file").innerHTML = "Please Upload the file";
    //     return
    // }


    document.getElementById("error-msg-file").innerHTML = "";


    let editObj = productList[editProductIndex]

    editObj['name'] = name;
    editObj['price'] = price;
    editObj['topProduct'] =  document.getElementById('editTopProduct').checked
    editObj['category'] = document.getElementById('categoryListSelectEdit').value


    if(!inputFile){
        productList[editProductIndex] = editObj

        getProductList(productList);

    }else{

        const file = inputFile;
        const reader = new FileReader();

        reader.onloadend = () => {

            editObj['imgUrl'] =  reader.result;
            productList[editProductIndex] = editObj
            
            getProductList(productList);    
        };
        reader.readAsDataURL(file);

    }



    document.getElementById("edit-product-name").value = null
    document.getElementById("edit-product-price").value = null
    document.getElementById("edit-product-file").value = null ;
    document.getElementById("errormsg").innerHTML = "";
    document.getElementById('editFileName').innerHTML = "";
    document.getElementById("editCancelBtn").click();
    document.getElementById('topProduct').checked = false;
    categoryFilter('All category')
}


function getFileName(){
    let file = document.getElementById('input-product-file')
    document.getElementById('fileName').innerHTML = file.files[0].name
    document.getElementById('error-msg-file').innerHTML = ""
}

function getEditFileName(){
    let file = document.getElementById('edit-product-file')
    document.getElementById('editFileName').innerHTML = file.files[0].name
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
      sortedProduct = products.sort(function(a,b){
        return b.productId - a.productId;
        }
    );
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
    document.getElementById('priceRange').value = 0;

}


function getProductList(products, disableTopProductSort, disableUpdateProduct){
    // Show Product List 
    var productItem = '';
    var topProducts = '';
    let totalProduct = Math.ceil(products.length/pageSize);
    
    
    var paginationList = ``

    var i;
    for (i = 0; i < totalProduct; i++) {
        if(pageNo === i+1){
            paginationList += `<li class="page-item"><button class="page-link" style="border:1px solid #fa475a;  color:#fa475a;" onclick="changePage(${i+1})">${i+1}</button></li>`;
  
        }else{
            paginationList += `<li class="page-item"><button class="page-link" style="border:1px solid #ccc; color:#ccc;" onclick="changePage(${i+1})">${i+1}</button></li>`;
  
        }
   
    } 

    document.getElementById('pagination').innerHTML = paginationList;

    if(!disableUpdateProduct){
        updatedProduct = JSON.parse(JSON.stringify(products))

        var maxPrice =  Math.max(...products.map((obj)=> obj.price));

        document.getElementById('priceRange').max = maxPrice

        document.getElementById("priceMax").innerHTML =  maxPrice
       
    }
  
    
    let endPageNumber = pageNo * pageSize;
    let startPageNumber = endPageNumber - pageSize ;
    var slicedproducts = products.slice(startPageNumber, endPageNumber);
    slicedproducts.forEach((obj, index)=> {

    productItem += `<div class="col-12 col-sm-4">
    <div class="product category__products" onclick="editModelView('${obj.productId}');">
    <div class="product__header"  >
      <img src=${obj.imgUrl}  alt="product">
    </div>
    <div class="product__footer">
      <h3>${obj.name}</h3>
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
                                <div class="column1" >
                          <img style="width: 5rem;" src=${obj.imgUrl} alt="" />
                          </div>
                          <div class="column2">
                              <h6  style="font-size: medium;">${obj.name}</h6>
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


function changePrice(){
  var priceRangeValue = document.getElementById('priceRange').value;
 
  document.getElementById("priceMax").innerHTML =  priceRangeValue
    

  var filteredProduct = updatedProduct.filter((obj)=>  {
      return  priceRangeValue > obj.price 
  } )

  getProductList(filteredProduct, null, true)
}



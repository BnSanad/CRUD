var productName=document.getElementById('pName')
var productPrice=document.getElementById('pPrice')
var productCategory=document.getElementById('pCategory')
var productDescription=document.getElementById('pDescription')
var addBtn=document.getElementById('addBtn')
var updatedIndex=0
var allproduct=[]
// local storage 

if(localStorage.getItem('product')!=null){

    allproduct=JSON.parse(localStorage.getItem('product'))
    displayProducts()

}





// fun of add 

function addProduct(){
    if(valdite()==true){
        if(addBtn.innerHTML=="Add product"){
            var product ={
    
                name:productName.value,
                price:productPrice.value,
                category:productCategory.value,
                desscription:productDescription.value
            
               }
               allproduct.push(product)
               localStorage.setItem('product',JSON.stringify(allproduct))
               console.log(allproduct);
               clearData()
               displayProducts()
        }
        else{
            updateData()
        }

    }
    else{
        alert(valdite())
    }
    
  
}

// crud => create read update delete

// fun of clear 
function clearData(){

    productName.value=''
    productPrice.value=''
    productCategory.value=''
    productDescription.value=''

}

// fun of dis
function displayProducts(){
    var cartona=''
    for(var i=0;i<allproduct.length;i++){
        cartona+=`<tr>
        <td>${i}</td>
        <td>${allproduct[i].name}</td>
        <td>${allproduct[i].price}</td>
        <td>${allproduct[i].category}</td>
        <td>${allproduct[i].desscription}</td>
        <td><button onclick='getValues(${i})' class="btn btn-warning">Update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById('tData').innerHTML=cartona
}


// fun of delete 
function deleteProduct(index){
    
    allproduct.splice(index,1)
    console.log(allproduct);
    displayProducts()
    localStorage.setItem('product',JSON.stringify(allproduct))
}


// fun of search 
function search(){
    var term=document.getElementById('searchValue').value 
    var cartona=''
    for(var i=0;i<allproduct.length;i++){
        if(allproduct[i].name.toLowerCase().includes(term.toLowerCase())){
            cartona+=`<tr>
            <td>${i}</td>
            <td>${allproduct[i].name.replace(term,`<span class="bg-info">${term}</span>`)}</td>
            <td>${allproduct[i].price}</td>
            <td>${allproduct[i].category}</td>
            <td>${allproduct[i].desscription}</td>
            <td><button class="btn btn-warning">Update</button></td>
            <td><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></td>
        </tr>`
        }
    }

    document.getElementById('tData').innerHTML=cartona

}

var x=''
x.includes()
x.toLowerCase()






// fun of update 
 
function getValues(index){

    updatedIndex=index
    productName.value=allproduct[index].name
    productPrice.value=allproduct[index].price
    productCategory.value=allproduct[index].category
    productDescription.value=allproduct[index].desscription
    addBtn.innerHTML='update'
    

}

function updateData(){

    var updatedProduct ={

        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desscription:productDescription.value
    
       }
       allproduct.splice(updatedIndex,1,updatedProduct)
       displayProducts()
       clearData()
       localStorage.setItem('product',JSON.stringify(allproduct))
       addBtn.innerHTML='Add product'


}

// ^ must start with 
// $ must end with 
// var regexp=/^[a-z]{2,5}$/i
// console.log(regexp.test('Ahmed'));
// var test='hello Ali mohamed ali'
// console.log(test.replace(/ali/ig,'karim'));
// 
function valdite(){
    
    var reg=/^[a-z]{2,5}$/
    var regxp=/^[2-7][1-5]$/
    if(reg.test(productName.value)==true && regxp.test(productPrice.value)==true){
        return true
    }
    else if(reg.test(productName.value)==false){
        return 'name must start with captial letter '
    }
    else if(regxp.test(productPrice.value)==false){
        return 'min 21 and max 75'
    }



}
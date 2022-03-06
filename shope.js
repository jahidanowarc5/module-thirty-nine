

const displayLocalStorageCurt = () => {
    const curt = getCurt();
    for(const name in curt){
        displayProducts(name);
    }
}

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if(!name){
        return;
    }
displayProducts(name);
addProductToCurt(name);

    nameField.value = '';
}

const displayProducts = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCurt = () => {
 const curt = localStorage.getItem('curt');
 let curtObj;
   if(curt){
       curtObj = JSON.parse(curt);

   }
   else{
       curtObj = {};
   }
   return curtObj;
   
}
const addProductToCurt = name => {
    const curt = getCurt();
    if(curt[name]){
        curt[name] = curt[name] + 1;
    }
    else{
        curt[name] = 1;
    }
    const curtStringified = JSON.stringify(curt);
    localStorage.setItem('curt', curtStringified);
}


const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('curt');

}
displayLocalStorageCurt();
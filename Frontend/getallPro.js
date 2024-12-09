
function getAllNotes(){
    fetch('https://localhost:7203/GetAllProducts')
    .then(data=>{return data.json();})
    .then(response=>{
        response.forEach(user =>{
            const markup=`<td>${user.prod_id}</td><td>${user.prod_name}</td><td>${user.prod_description}</td><td>${user.prod_brand}</td><td>${user.prod_price}</td><td>${user.category_id}</td>`
            document.querySelector('table').insertAdjacentHTML('beforeend',markup);
        })
    })
    .catch(error => console.log(error));
    }
    getAllNotes();


   

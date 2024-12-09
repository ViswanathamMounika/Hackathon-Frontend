
function getAllNotes(){
    fetch('https://localhost:7203/api/Category/GetAllCatagories')
    .then(data=>{return data.json();})
    .then(response=>{
        response.forEach(user =>{
            const markup=`<td>${user.category_id}</td><td>${user.category_name}</td>`
            document.querySelector('table').insertAdjacentHTML('beforeend',markup);
        })
    })
    .catch(error => console.log(error));
    }
    getAllNotes();


   

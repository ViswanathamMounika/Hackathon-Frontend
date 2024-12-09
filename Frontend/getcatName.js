function getNote(){
    var l=document.getElementById("expe").value;
    console.log(l);
            
    /*fetch(`https://localhost:7203/api/Category/GetByCatagoryName?name=${l}`)
    .then(data=>data.json())
    .then(response=>response.forEach(element => {
        const markup=`<li><h5>Product Details By category Name</h5>
                    Category Name        : ${element.name}<br>
                    Product ID           : ${element.prod_id}<br>
                    PRoduct Name         : ${element.prod_name}<br>
                    Product Description  : ${element.prod_desc}<br>
                    Brand                : ${element.brand}
                    Price                : ${element.price}<br></li>`
                    

                    document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
        
    }))
    .catch(error=>console.log(error));*/

    fetch('https://localhost:7203/api/Category/GetByCatagoryName?name=${l}')
    .then(data=>{return data.json();})
    .then(response=>{
        response.forEach(user =>{
            const markup=`<td>${user.pro_id}</td><td>${user.prod_name}</td><td>${user.prod_description}</td><td>${user.prod_brand}</td><td>${user.prod_price}</td><td>${user.category_id}</td>`
            document.querySelector('table').insertAdjacentHTML('beforeend',markup);
        })
    })
    .catch(error => console.log(error));
  }
  getNote();
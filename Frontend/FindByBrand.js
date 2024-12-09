
 
    var l=document.getElementById("loc").value;
    console.log(l);
            
    fetch(`https://localhost:7203/GetByBrand/`)
    .then(data=>data.json())
    .then(response=>response.forEach(element => {
        const markup=`<li><h5>Products By Brand</h5>
                    Category Name        : ${element.name}<br>
                    Product Id     : ${element.prod_id}<br>
                    Product Name      : ${element.prod_name}<br>
                    Product Description     : ${element.prod_desc}<br>
                    Price : ${element.price}</li>`
                    

                    document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
        
    }))
    .catch(error=>console.log(error));

               


    
               

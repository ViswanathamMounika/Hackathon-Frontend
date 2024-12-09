function Updcat() {
  const btn = document.getElementById("addc")
  btn.addEventListener("submit", (e) =>{
    e.preventDefault()
    
  })
    let uid = document.getElementById("Cid").value
    let inname = document.getElementById("CName").value
   
    
    fetch(`https://localhost:7203/api/Category/UpdateCatagory?id=${uid}`,{

    
      
      method: "PUT",
  
      
      body: JSON.stringify({
        category_id:uid,
        category_name: inname,
       
      }),
  
     
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((Response) => {
        if(Response.status===200){
            alert("Successfully updated");
            window.location.href='cat.html';
        }
    })
}
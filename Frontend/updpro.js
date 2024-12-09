function Updcat() {
    const btn = document.getElementById("addc");

    btn.addEventListener("submit", (e) => {
        e.preventDefault();
        
    });
        // Get form values after form submission
        let id = document.getElementById("PID").value;
        console.log(id);
        let pname = document.getElementById("PN").value;
        let pbrand = document.getElementById("PB").value;
        let pdesc = document.getElementById("PD").value;
        let pprice = document.getElementById("pp").value;
        let catid = document.getElementById("CID").value;
        console.log(catid);

        // Send PUT request to update the product
        fetch(`https://localhost:7203/UpdateProduct?id=${id}&prod_id=${id}&prod_name=${pname}&prod_description=${pdesc}&prod_brand=${pbrand}&prod_price=${pprice}&category_id=${catid}`, {
            method: "PUT",
            body: JSON.stringify({

                prod_id: id,
                prod_name: pname,
                prod_description: pdesc,
                prod_price: pprice,
                prodd_brand:pbrand,
                category_id: catid
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            if (response.status === 200) {
                alert("Successfully updated");
                window.location.href = 'pro.html';
            } else {
                alert("Error: Could not update product.");
            }
        })
        .catch((error) => {
            console.error("Error updating product:", error);
            alert("An error occurred while updating the product.");
        });
    
}

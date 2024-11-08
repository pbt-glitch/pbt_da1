document.getElementById('orderForm').addEventListener('submit', function(event) {  
    event.preventDefault();  

    // Reset error messages  
    document.getElementById('errorMessages').innerHTML = '';  
    document.getElementById('orderDetails').innerHTML = '';  

    // Get values  
    const quantity = document.getElementById('quantity').value;  
    const product = document.getElementById('product').value;  
    const type = document.getElementById('type').value;  
    const price = document.getElementById('price').value;  

    // Validate inputs  
    let errors = [];  

    if (quantity <= 0) {  
        errors.push('Số lượng phải lớn hơn 0.');  
    }  
    if (!product) {  
        errors.push('Bạn phải chọn sản phẩm.');  
    }  
    if (!type) {  
        errors.push('Bạn phải chọn loại sản phẩm.');  
    }  
    if (price <= 0) {  
        errors.push('Đơn giá phải lớn hơn 0.');  
    }  

    // Display error messages or order details  
    if (errors.length > 0) {  
        document.getElementById('errorMessages').innerHTML = errors.map(err => `<div class="error">${err}</div>`).join('');  
    } else {  
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;  
        document.getElementById('orderDetails').innerHTML = `  
            <h3>Thông tin đặt hàng:</h3>  
            <p>Sản phẩm: ${product}</p>  
            <p>Số lượng: ${quantity}</p>  
            <p>Đơn giá: ${price}</p>  
            <p>Hình thức giao hàng: ${deliveryMethod}</p>  
            <p>Tổng tiền: ${quantity * price}</p>  
        `;  
    }  
});
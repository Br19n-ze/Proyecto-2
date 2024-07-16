function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').files[0];
    
    if (name && price && image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgSrc = e.target.result;

            const catalog = document.getElementById('catalog');
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${imgSrc}" alt="${name}">
                <h2>${name}</h2>
                <p>$${price}</p>
                <button onclick="removeProduct(this)">Eliminar</button>
            `;
            catalog.appendChild(productCard);
        }
        reader.readAsDataURL(image);
    } else {
        alert('Por favor complete todos los campos.');
    }
}

function removeProduct(button) {
    const productCard = button.parentElement;
    productCard.remove();
}

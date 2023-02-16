// Memory Price Calculation
function getRamPrice(ramPrice) {
    const ramPriceAmount = document.getElementById('ram-price-amount');
    ramPriceAmount.innerText = ramPrice;
    totalPrice();
}

// Storage Price Calculation
function getSsdPrice(ssdPrice) {
    const ssdPriceAmount = document.getElementById('ssd-price-amount');

    ssdPriceAmount.innerText = ssdPrice;
    totalPrice();
}

// Delivery Charge Calculation
function getDelivery(charge) {
    const deliveryAmount = document.getElementById('delivery-price-amount');
    deliveryAmount.innerText = charge;
    totalPrice();
}

// totalPrize
function totalPrice() {
    const totalPrice = document.getElementById('total-price-amount')
    const ramPriceAmount = document.getElementById('ram-price-amount');
    const ssdPriceAmount = document.getElementById('ssd-price-amount');
    const deliveryAmount = document.getElementById('delivery-price-amount');
    const finalTotalAmount = document.getElementById('final-total-amount');

    const allTotalPrice = totalPrice.innerText = 1299 + parseFloat(ramPriceAmount.innerText) + parseFloat(ssdPriceAmount.innerText) + parseFloat(deliveryAmount.innerText);

    finalTotalAmount.innerText = allTotalPrice;
    return allTotalPrice;

}

// Ram Price Include
document.getElementById('ram-8gb').addEventListener('click', function () {
    getRamPrice(0);
})
document.getElementById('ram-16gb').addEventListener('click', function () {
    getRamPrice(180);
})

// SSd Price Include
document.getElementById('ssd-256gb').addEventListener('click', function () {
    getSsdPrice(0);
})
document.getElementById('ssd-512gb').addEventListener('click', function () {
    getSsdPrice(100);
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
    getSsdPrice(180);
})

// Delivery Charge Included
document.getElementById('regular-delivery').addEventListener('click', function () {
    getDelivery(0);
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    getDelivery(20);
})

// Getting the Promo Calculation
document.getElementById('promo-apply').addEventListener('click', function () {
    const finalTotalAmount = document.getElementById('final-total-amount');
    const promoCode = document.getElementById('promo-code');
    const totalDiscount = (totalPrice() / 100) * 20;
    const getValue = promoCode.value;
    if (getValue.toLowerCase() == 'stevekaku') {
        finalTotalAmount.innerText = totalPrice() - totalDiscount;
        console.log('workd')
    }
    promoCode.value = '';

})

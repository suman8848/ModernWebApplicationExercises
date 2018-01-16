const item = {
    "name":"Biscuit",
    "type":"regular",
    "category":"food",
    "price": 2.0
}

function applyCoupon(category){
    return function (discount){
        return function (price){
            let toBeDiscountedAmount = price * discount;
            return price - toBeDiscountedAmount;
        }

    }
}


console.log(applyCoupon("food")(0.1)(item.price));
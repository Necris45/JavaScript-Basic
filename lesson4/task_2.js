/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

const basket = {
    goods: [
        {id: 12312,
         product_name: 'Чипсы',
         price: 45,
         quantity: 8},
        {id: 12312,
         product_name: 'Газировка',
         price: 50,
         quantity: 3}],
    countBasketPrice () {
        return this.goods.reduce((totalPrice, cartItem) =>
            totalPrice + cartItem.price * cartItem.quantity, 0)
    }
};


console.log(basket.countBasketPrice())
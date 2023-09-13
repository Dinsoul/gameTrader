import {useState} from "react";

// const Types = { Flour: 'Мука',
//     Dried_fruit: 'Сухофрукты',
//     Meat: 'Мясо',
//     Corn: 'Зерно',
//     Fabrics: 'Ткани',
//     Dye: 'Краска'
// };

const Quality = {
    Normal: 'Нормальное',
    Lightly_spoiled: 'Слегка испорчен',
    Half_spoiled: ['Половина испортилась',],
    Almost_spoiled: 'Почти весь пропал',
    All_spoiled: 'Испорчен в хлам'
}
// function randomNumberInRange (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const Product = (products) => {

    const [amount] = useState(5);
    const [price] = useState(6);


    const [product] = useState({
        quantity: amount,
        weight: '10',
        type: ["Мука", 'Сухофрукты', 'Мясо', 'Зерно', 'Ткани', 'Краска'],
        quality: Quality.Normal,
        cost:price
    });


    const getProducts = (product) => {
      let products = [];
        for (let item in product) {
            products.push(<li key={item.id}>Купил {product.quantity} единиц {product.type.randElement()} (состояние {product.quality}) за {product.cost}</li>);

        }
        return products;
    }

    // const totalBalance = (product) => {
    //     let
    // }

    return <ul>
        {getProducts(product)}
    </ul>;
}
export default Product;
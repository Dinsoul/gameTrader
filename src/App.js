import './App.css';
import Product from "./Objects/Product";
import {useState} from "react";
import City from "./Objects/City";
import Events from "./Objects/Events";

function randomNumberInRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {

    const [cart, setCart] = useState(0);
    const [money, setMoney] = useState(0);
    const [road, setRoad] = useState(0);
    const [burden, setBurden] = useState(0);
    const [price, setPrice] = useState(0);
    const [balanceCart, setBalanceCart] = useState(0);
    const [balanceMoney, setBalanceMoney] = useState(0);

    // const randomNumberInRange = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // };
    const handleClick = () => {
      setCart(randomNumberInRange(50,100));
      setMoney(randomNumberInRange(100,200));
      setRoad(randomNumberInRange(50,100));
      setPrice(randomNumberInRange(1,10));
      setBurden(randomNumberInRange(1,10));
    }


    // const balance = (cart, money) => {
    //
    // }


  return (
    <div className="App">
      <header className="App-header">
          <button onClick={handleClick} className="b1"> Нажми для запуска игры </button>
          <div>Размер телеги: {cart} единиц</div>
          <div>Денег в наличии: {money} монет</div>
          <Product/>
          <div>Денег осталось {balanceMoney}</div>
          <div>В телеге осталось {balanceCart}</div>
          <div>Следующий город {<City/>} ехать до него {road} лиг </div>
          <Events trace={road}/>

      </header>
    </div>
  );
}

export default App;

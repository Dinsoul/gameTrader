import {useState} from "react";


Object.defineProperty(
    Object.prototype,
    'randElement',
    {
        value: function() {
            var rand = Math.floor(Math.random() * this.length);
            return this[rand];
        }
    }
);

function City() {

    const [cities] = useState(['Город1', 'Город2', 'Город3', 'Город4', 'Город5', 'Город6']);

    return(
       <>{cities.randElement()}</>
    );
}
export default City;
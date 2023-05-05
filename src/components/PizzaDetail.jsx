import { useParams } from "react-router-dom";
import React from 'react'
import axios, { Axios } from "axios";

const PizzaDetail = () =>{
    
    const[pizza, setPizza] = React.useState();
    const {id} = useParams();

    React.useEffect(()=>{
       async function fetchPizza (){
        try{
            const {data} = await axios.get(`http://192.168.31.180:3000/pizzas/${id}`);
            
            setPizza(data);
      
          }catch(error){
              console.log('ERROR',error.message);
              alert('Ошибка при получении пицц')
          }finally{
      
          }
       }
       fetchPizza();
    },[])

    if(!pizza){
        return 'Загрузка...'
    }
    return(
        <div className="detail">
            <div className="detail__body">
            <img src={pizza.imageUrl}/>
              <div className="detail__info">
                <div className="detail__info__title">Название пиццы:<span className="titlestyle">{pizza.title}</span></div>
                <div className="detail__info__price">Цена пиццы:<span className="titlestyle">{pizza.price}</span></div>

              </div>
            </div>
        </div>
    )
}

export default PizzaDetail;
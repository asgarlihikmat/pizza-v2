import { useParams } from "react-router-dom";
import React from 'react'
import axios from "axios";

const PizzaDetail = () =>{
    
    const[pizza, setPizza] = React.useState();
    const {id} = useParams();

    React.useEffect(()=>{
       async function fetchPizza (){
        try{
            const {data} = axios.get(
              'http://192.168.31.180:3000/pizzas/'+id
            );
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
        <div>
            <img src={pizza.imageUrl}/>
               <h2>{pizza.title}</h2>
               <h3>{pizza.price}</h3>
        </div>
    )
}

export default PizzaDetail;
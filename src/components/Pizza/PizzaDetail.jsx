import { useParams } from "react-router-dom";
import React from 'react'
import axios, { Axios } from "axios";
import PizzaBlock from "./PizzaBlock";
import PizzaBlockForDetail from "./PizzaBlockForDetail";

const PizzaDetail = () =>{
    
    const[pizza, setPizza] = React.useState();
    const {id} = useParams();

    React.useEffect(()=>{
       async function fetchPizza (){
        try{
            const {data} = await axios.get(`https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz/${id}`);
            
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
        return ''
    }
    return(
        <div className="detail">
            <div className="detail__body">
            <img src={pizza.imageUrl}/>
              <div className="detail__info">
                
                    <PizzaBlockForDetail key={pizza.id} {...pizza}/>
              </div>
            </div>
        </div>
    )
}

export default PizzaDetail;
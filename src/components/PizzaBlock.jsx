
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../redux/addSlice';
import alertify from 'alertifyjs';

const PizzaBlock = ({id,title,imageUrl,sizes,types,price}) => {
    const typeName = ['тонкое','традиционное']
    const[activeSize,setActiveSize] = React.useState();
    const[activeType,setActiveType] = React.useState();
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.addSlice.addedPizza.find((obj) => obj.id === id));
    
    const addedCount = cartItem ? cartItem.count : 0;
    
    const addNewPizza = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            type: typeName[activeType],
            size: sizes[activeSize]
        }
        alertify.success('Вы добавили ' + title);
        dispatch(addPizza(item))
    }

    return(
            <div className="blockpizza">
             <div className="blockpizza__image"><img src={imageUrl}/></div>
             <div className="blockpizza__title">{title}</div>
             <div className="blockpizza__category">
                 <div className="blockpizza__one">
                     <ul>
                        {types.map((type,index) => (
                             <li key={index} onClick={() => setActiveType(index)} className={activeType === index ? 'active':''}>{typeName[type]}</li> 
                        ))}
                     </ul>
                 </div>
                 <div className="blockpizza__two">
                     <ul>
                     {sizes.map((size,index) => (
                            <li key={index} className={activeSize === index ? 'active': ''} onClick={() => setActiveSize(index)}>{size}</li>                            
                        ))}
                     </ul>
                 </div>
             </div>

         <div className="blockpizza__price__add">
             <div className="blockpizza__price">от {price} ₽</div>
             <div onClick={() => addNewPizza()} className="blockpizza__add"><button>+ Добавить {addedCount > 0 && <span>{addedCount}</span>}</button></div>
         </div>
         </div>
    )
}


export default PizzaBlock;
import { useWhyDidYouUpdate } from 'ahooks';
import React, { useCallback } from 'react'
import Test2 from './Test2';

const Test = () => {
    const[number,setNumber] = React.useState(0);
    const[active,setActive] = React.useState(false);

    const onPlus = React.useCallback( () => {
        setNumber((number) => number + 1)
    },[])

    const onMinus = React.useCallback( () => {
        setNumber((number) => number - 1)
    },[])

    const activation = () => {
        console.log('Elchin ucun exclusive checking ');
    }

    return(

      <div> 
        <h1>{number}</h1> 
        <h1>{active}</h1>
            <Test2 activation={activation} onPlus={onPlus} onMinus={onMinus}/>
      </div>
    )
}

export default Test;
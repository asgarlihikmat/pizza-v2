import React from 'react'

const Test2 = React.memo(({onPlus,onMinus,activation}) => {
        console.log('Rerender Test2 Componentx');

    return(
      <div>
            
           <button onClick={onPlus} type="button" class="btn btn-success">+</button>
           <button onClick={onMinus} type="button" class="btn btn-danger">-</button>
           <button onClick={activation} type="button" class="btn btn-warning">Rerender</button>
      </div>
    )
})

export default Test2;
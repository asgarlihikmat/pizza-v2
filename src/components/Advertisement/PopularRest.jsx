import mac from '../../assets/popular/mac.avif'
import kfc from '../../assets/popular/kfc.avif'
import pap from '../../assets/popular/pap.avif'
import bir from '../../assets/popular/bir.avif'
import friday from '../../assets/popular/friday.avif'
import kafecity from '../../assets/popular/caf.avif'
import shaurma from '../../assets/popular/shaur.avif'
import tendir from '../../assets/popular/tendir.avif'

import left from '../../assets/icons/left-arrow.png'
import right from '../../assets/icons/right-arrow.png'
import { useRef } from 'react'
const PopularRest = () => {

    const started = useRef();

    function rightClick(){
         started.current.scrollBy({
            left: 1000,
            behavior: "smooth",
          });

    }
    function leftClick(){
        started.current.scrollBy({
            left: -1000,
            behavior: "smooth",
          });
    }
    return(
        <div className="pop__container">
            <div className="right-left">
                <img onClick={() => leftClick()} className='scroll-left' src={left}/>
                <img onClick={() => rightClick()} className='scroll-right' src={right}/>
            </div>
            <div ref={started} className="pop__wrapper">
            
            <div className="box">
                <img src={mac}/>
                <div className="box__title">McDonald's</div>
            </div>
            <div className="box">
                <img src={kfc}/>
                <div className="box__title">KFC</div>
            </div>
            <div className="box">
                <img src={pap}/>
                <div className="box__title">Papa Johns</div>
            </div>
            <div className="box">
                <img src={bir}/>
                <div className="box__title">BiR-iKi DONER</div>
            </div>
            <div className="box">
                <img src={friday}/>
                <div className="box__title">FRYDAY</div>
            </div>
            <div  className="box">
                <img src={kafecity}/>
                <div className="box__title">CafeCity</div>
            </div>
            <div className="box">
                <img src={shaurma}/>
                <div className="box__title">Shaurma №1</div>
            </div>
            <div className="box">
                <img src={tendir}/>
                <div className="box__title">Tendir & Mendir</div>
            </div>
            <div className="box">
                <img src={mac}/>
                <div className="box__title">McDonald's</div>
            </div>
            <div className="box">
                <img src={kfc}/>
                <div className="box__title">KFC</div>
            </div>
            <div className="box">
                <img src={pap}/>
                <div className="box__title">Papa Johns</div>
            </div>
            <div className="box">
                <img src={bir}/>
                <div className="box__title">BiR-iKi DONER</div>
            </div>
            <div className="box">
                <img src={friday}/>
                <div className="box__title">FRYDAY</div>
            </div>
            <div className="box">
                <img src={kafecity}/>
                <div className="box__title">CafeCity</div>
            </div>
            <div className="box">
                <img src={shaurma}/>
                <div className="box__title">Shaurma №1</div>
            </div>
            <div className="box">
                <img src={tendir}/>
                <div className="box__title">Tendir & Mendir</div>
            </div>
        </div>
        </div>
    )
}

export default PopularRest;
import mac from '../../assets/popular/mac.avif'
import kfc from '../../assets/popular/kfc.avif'
import pap from '../../assets/popular/pap.avif'
import bir from '../../assets/popular/bir.avif'
import friday from '../../assets/popular/friday.avif'

const PopularRest = () => {
    return(
        <div className="pop__wrapper">
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
        </div>
    )
}

export default PopularRest;
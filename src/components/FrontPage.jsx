import banner from '../images/banner.jpg'
import Goods from './Goods'

export default function FrontPage(){
    return (
        <div>
            <img src={banner} width={'100%'} alt='banner'/>
            <Goods/>
        </div>
    )
}
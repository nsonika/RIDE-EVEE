import carbg from '../assets/car_bg.png'
import { ExploreCabs } from './Form/ExploreCabs'
import './Page1.css'
export const Page1 = () => {
    return(
        <>
        <div className="page1">
        <img src={carbg} alt="" className='bg'/>
        <ExploreCabs/>
        </div>
        </>
    )
}
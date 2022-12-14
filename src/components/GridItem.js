import { useState } from 'react'
import styles from '../components/GridItem.module.css'
const GridItem = ({index,isSelected})=>{
    const [isClicked,setIsClicked] = useState(false);

    const onClickHandler = () => {
        setIsClicked((prevState) => {
            return !prevState
        });
    }
    return (
        <div className={`${styles['grid-item']} ${isClicked || isSelected ?  styles['clicked']: ""}`} onClick = {onClickHandler}>
            {/* {index} */}
        </div>   
    );
}
export default GridItem;
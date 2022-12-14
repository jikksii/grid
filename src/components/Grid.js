import { useEffect, useRef, useState } from 'react';
import styles from '../components/Grid.module.css'
import GridItem from './GridItem';


const SIZE = 20;
const Grid = ({indexes}) => {


    const [selectedIndexes,setSelectedIndexes] = useState([]);
    const [startingIndexes,setStartingIndexes] = useState(indexes);
    
    useEffect(function(){

        console.log({length1 : startingIndexes.length,length2 : selectedIndexes.length});
        if(startingIndexes.length === 0) return;


        setTimeout(function(){
            const chooseRandomIndexes = ( startingIndexes) => {
                const newStartingIndexes = [...startingIndexes];
                const removedIndexes  = [];
                removedIndexes.push(newStartingIndexes.shift());
                setStartingIndexes(newStartingIndexes);
                return removedIndexes;
            }
            const newSelectedIndexes = [...selectedIndexes];
    
            const randoms = chooseRandomIndexes(startingIndexes);
            randoms.forEach(function(element){
                newSelectedIndexes.push(element);
            })
            setSelectedIndexes(newSelectedIndexes);
        },100)
       
    },[selectedIndexes,startingIndexes]);


    const gridItems = [];
    for (let index = 0; index < SIZE * SIZE; index++) {
        gridItems.push(<GridItem key={index} index={index} isSelected = {selectedIndexes.indexOf(index) >= 0}/>)
    }
    return (
        <div className={`${styles["grid-container"]}`}>
            {gridItems}
        </div>
    )
}
export default Grid;
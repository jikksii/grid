import { useEffect,useState } from 'react';
import styles from '../components/Grid.module.css'
import GridItem from './GridItem';


const SIZE = 20;
const Grid =  ({indexes,speed}) => {


    const [selectedIndexes,setSelectedIndexes] = useState([]);
    const [startingIndexes,setStartingIndexes] = useState(indexes);
    const [removeOneStep,setRemoveOneStep] = useState(indexes.length  * speed / 100);

    useEffect(function(){
        setSelectedIndexes([]);
        setStartingIndexes(indexes)
        setRemoveOneStep(indexes.length  * speed / 100)
    },[indexes,speed])
    
    useEffect(function(){
        if(startingIndexes.length === 0) return;
        setTimeout(function(){
            const getRandomInt = (max) => {
                return Math.floor(Math.random() * (max - 1)) + 1;            
            }

            const chooseRandomIndexes = ( startingIndexes) => {
                const newStartingIndexes = [...startingIndexes];
                const removedIndexes  = [];
                const elementsToRemove = getRandomInt(Math.min(removeOneStep,startingIndexes.length))
                for (let index = 0; index < elementsToRemove; index++) {
                    let indexToRemove = getRandomInt(newStartingIndexes.length);
                    if(newStartingIndexes.length === 1){
                        indexToRemove  = 0;
                    }
                    const removedElement = newStartingIndexes[indexToRemove];
                    removedIndexes.push(removedElement);
                    newStartingIndexes.splice(indexToRemove,1);
                }
                setStartingIndexes(newStartingIndexes);
                return removedIndexes;
            }
            const newSelectedIndexes = [...selectedIndexes];
    
            const randoms = chooseRandomIndexes(startingIndexes);
            randoms.forEach(function(element){
                newSelectedIndexes.push(element);
            })
            setSelectedIndexes(newSelectedIndexes);
        },50)
       
    },[selectedIndexes,startingIndexes,removeOneStep]);


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
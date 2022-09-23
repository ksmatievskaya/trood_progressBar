import './progressBar.scss';
import { useSelector } from 'react-redux';
import {ItemsSelector, itemsReset} from './progressBarSlice';
import {sizeSelector} from './sizeSlice';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const ProgressBar = () => {
    const items = useSelector(ItemsSelector.selectAll);
    const size = useSelector(sizeSelector.selectAll);
    const dispatch = useDispatch();
    const valArr = [];
    let valCount = 0;

    // counting sum of values of each item
    items.forEach(({value}) => {
        valArr.push(value);
        valCount = valArr.reduce((prev, next) => prev + next);
    })

  
    //function for reset button
    const onReset = () => {
        dispatch(itemsReset());
    }


    // function to render all items
    const renderItems = (arr) => {
        if (arr.length == 0) {
            return
        }
        return arr.map(({id, name, value, color}) => {
            const bg = {backgroundColor: `${color}`};
            const percents = value / valCount * 100;
            const prettyPercents = Math.round((percents) * 10) / 10;
            return (<div className='progress_legend'>
                        <span className='progress_legendCircle' style={bg}></span>
                        <span className='progress_legendItem' key={id}>{name}: {value} ({prettyPercents} %) </span>
                    </div>)
        })
    }

    const legendElements = renderItems(items);

        // rendering progressBar depending on values
        const colorsArr = [];
        if (items.length === 0) {
            return <h5 className='progress_header'>Enter some values</h5>
        }

        for(let i = 0; i < items.length; i++) {
            const barArr = []; 
            const colorWidth = (items[i].value / valCount * 100) * size[0].width / 100;
            for(let j = 0; j < colorWidth / 15; j++) {
                barArr.push(<div className="progress_item" style={{background: items[i].color}} key={uuidv4()}></div>)
            }
    
            colorsArr.push(<div className='progress_color' key={i} style={{width: `${colorWidth}px`}}>{barArr}</div>) 
        }


    return (
        <div className='progress'>
            <div className='progress_arr' style={{width: `${size[0].width}px`, height: `${size[0].height}px`}}>
                {colorsArr}
            </div>
            <div className='progress_legend'>
                {legendElements}
            </div>
            <button className='progress_btn' onClick={() => onReset()}>Reset</button>
        </div>
    )
}

export default ProgressBar;
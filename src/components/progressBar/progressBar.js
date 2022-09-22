import './progressBar.scss';
import { useSelector } from 'react-redux';
import {ItemsSelector, itemsReset} from './progressBarSlice';
import { useDispatch } from 'react-redux';


const ProgressBar = () => {
    const items = useSelector(ItemsSelector.selectAll);
    const progressArr= [];
    const dispatch = useDispatch();
    const valArr = [];
    let valCount = 0;
    const {value} = items;

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

    // cycle for rendering small pieces in progress bar
    for(let i = 0; i < 62; i++) {
        progressArr.push(<div className="progress_item" key={i}></div>)
    }

    return (
        <div className='progress'>
            <div className="progress_arr">
            {progressArr}
            </div>
            <div className='progress_legend'>
                {legendElements}
            </div>
            <button className='progress_btn' onClick={() => onReset()}>Reset</button>
        </div>
    )
}

export default ProgressBar;
import './progressBar.scss';
import { useSelector } from 'react-redux';
import {ItemsSelector} from './progressBarSlice';
import { useDispatch } from 'react-redux';
import { itemsReset } from './progressBarSlice';

const ProgressBar = () => {
    // const items = useSelector(ItemsSelector.selectAll);
    const progressArr = [];
    const dispatch = useDispatch();

    const onReset = () => {
        dispatch(itemsReset());
    }

    for(let i = 0; i < 62; i++) {
        progressArr.push(<div className="progress_item"></div>)
    }

    return (
        <div className='progress'>
            <div className="progress_arr">
            {progressArr}
            </div>
            <button className='progress_btn' onClick={() => onReset()}>Reset</button>
        </div>
    )
}

export default ProgressBar;
import './Form.scss';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';
import { getRndColor } from '../utils/utils';
import { itemAdded } from '../progressBar/progressBarSlice';
import { sizeAdded } from '../progressBar/sizeSlice';

const Form = () => {

    const [itemName, setItemName] = useState('');
    const [itemVal, setItemVal] = useState('');
    const [barWidth, setBarWidth] = useState('');
    const [barHeight, setBarHeight] = useState('');
    const dispatch = useDispatch();

    const onSubmitHandlerProgress = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            name: itemName,
            value: Number(itemVal),
            color: getRndColor()
        }
        dispatch(itemAdded(newItem));
        setItemName('');
        setItemVal('');
    }

    const onSubmitHandlerSize = (e) => {
        e.preventDefault();
        const newSize = {
            id: 0,
            width: Number(barWidth),
            height: Number(barHeight)
        }

        dispatch(sizeAdded(newSize));
        setBarWidth('');
        setBarHeight('');
    }

    return (
        <div className='forms'>
            <form action="" method="POST" className="form" onSubmit={onSubmitHandlerProgress}>
                <div className='form_input'>
                    Name* : <input type='text'
                                 name='name'
                                 id='name'
                                 required
                                 value={itemName}
                                 onChange={(e) => setItemName(e.target.value)}/>
                </div>
                <div className='form_input'>
                    Value* : <input type='text'
                                 name='val'
                                 id='val'
                                 required
                                 pattern="[0-9]*" 
                                 inputmode="numeric"
                                 value={itemVal}
                                 onChange={(e) => setItemVal(e.target.value)}/>
                                 <div className='form_info'>Only numbers</div>
                </div>
                <button type='submit' className='form_btn'>Add!</button>
            </form>

            <form action="" method='POST' className='form' onSubmit={onSubmitHandlerSize}>
                <div className='form_input'>
                    Bar line height: <input type='text'
                                            min='10'
                                             name='name'
                                             id='height'
                                             value={barHeight}
                                             onChange={(e) => setBarHeight(e.target.value)}/>
                                             <div className='form_info'>Only numbers from 10</div>
                </div>
                <div className='form_input'>
                    Bar line max-width: <input type='number'
                                            min='100'
                                            max='1400'
                                             name='count'
                                             id='width'
                                             value={barWidth}
                                             onChange={(e) => setBarWidth(e.target.value)}/>
                                             <div className='form_info'>Only numbers from 100 to 1400</div>
                </div>
                <button type='submit' className='form_btn'>Set!</button>
            </form>

        </div>
    )
}

export default Form;
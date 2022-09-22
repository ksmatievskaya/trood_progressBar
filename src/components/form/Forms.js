import './Form.scss';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';
import { getRndColor } from '../utils/utils';
import { itemAdded } from '../progressBar/progressBarSlice';

const Form = () => {

    const [itemName, setItemName] = useState('');
    const [itemVal, setItemVal] = useState('');
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            name: itemName,
            value: itemVal,
            color: getRndColor()
        }

        dispatch(itemAdded(newItem));

        setItemName('');
        setItemVal('');
    }


    return (
        <div className='forms'>
            <form action="" method="POST" className="form" onSubmit={onSubmitHandler}>
                <div className='form_input'>
                    Name: <input type='text'
                                 name='name'
                                 id='name'
                                 value={itemName}
                                 onChange={(e) => setItemName(e.target.value)}/>
                </div>
                <div className='form_input'>
                    Value: <input type='text'
                                 name='val'
                                 id='val'
                                 value={itemVal}
                                 onChange={(e) => setItemVal(e.target.value)}/>
                </div>
                <button type='submit' className='form_btn'>Add!</button>
            </form>

            <form action="" method='POST' className='form'>
                <div className='form_input'>
                    Bar line height: <input type='text' name='name'/>
                </div>
                <div className='form_input'>
                    Bar line width: <input type='text' name='count'/>
                </div>
                <button type='submit' className='form_btn'>Set!</button>
            </form>

        </div>
    )
}

export default Form;
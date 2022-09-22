import './Form.scss';

const Form = () => {

    return (
        <div className='forms'>
            <form action="" method="POST" className="form">
                <div className='form_input'>
                    Name: <input type='text' name='name'/>
                </div>
                <div className='form_input'>
                    Value: <input type='text' name='count'/>
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
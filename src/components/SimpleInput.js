import {useRef, useState} from 'react';


const SimpleInput = (props) => {
    // Read the value when need it
    const firstNameInputRef = useRef();

    // Log the value with each key stroke
    const [enteredLastName, setEnteredLastName] = useState('');

    const lastNameInputChangeHandler = event => {
        setEnteredLastName(event.target.value);

    }

    const formSubmissionHandler = event => {
        event.preventDefault();


        // Get the value
        const enteredFirstName = firstNameInputRef.current.value;
        console.log(enteredFirstName);

        console.log(enteredLastName);


        // Reset the value
        // Directly manipulating the DOM!
        firstNameInputRef.current.value = '';

        setEnteredLastName('');
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='firstName'>Your First Name</label>
                <input type='text' id='firstName' ref={firstNameInputRef}/>

                <label htmlFor='lastName'>Your Last Name</label>
                <input type='text' id='lastName' onChange={lastNameInputChangeHandler} value={enteredLastName}/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

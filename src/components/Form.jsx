import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PropTypes from 'prop-types';
import { v4 as uuidiv4 } from "uuid";

const Form = ({ add }) => {

    const [note, setNote] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        if (note === '') {
            alert('Please enter a note');
            return;
        }
        
        const id = uuidiv4();
        const newNote = { id: id, note: note };
        add(newNote);
        setNote('');
    }


    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Write some notes..."
                        onChange={(e) => setNote(e.target.value)}
                        value={note}
                    />
                    <button className="btn btn-success" type="submit">
                        <FaPlus />
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;

Form.propTypes = {
    add: PropTypes.func,
};
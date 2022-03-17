import React, {useState} from 'react'


export default function TextForm(props) {
    const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter your text here');
    // console.log(useState('Enter your text here'));
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myTextBox" className="form-label">Text Area</label>
                <textarea className="form-control" id="myTextBox" value={text} onChange={onChange} rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upClick}>Convert to uppercase</button>
        </div>
    )
}
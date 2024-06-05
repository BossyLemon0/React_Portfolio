import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Form.css';

export default function Contact(props){
    const [state, handleSubmit] = useForm("mzbnlkqo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
    <div className = 'slides contact'>
        <div className= 'titles'>Contact Me</div>
        <form onSubmit={handleSubmit}>
            <div className="name">
                <label for=""></label>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Name"
                    required  
                ></input>
            </div>
            <div className="email">
                <label for="email">
                    Email 
                </label>
                <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                    required
                ></input>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="message">
                <label
                    className="form-input"
                    type="date"
                    placeholder="email"
                    required
                ></label>
                <textarea
                    className="form-input"
                    type="text"
                    placeholder="Message"
                    required
                ></textarea>
            </div>
            <button type = 'submit' className = 'submit_btn' disabled={state.submitting}>
                submit
            </button>
        </form>

        {/* <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form> */}
    </div>
    );
}
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Form.css';

export default function Contact(props){
    const [state, handleSubmit] = useForm("mzbnlkqo");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }

    // on focus add glow to hr line
    function onFocus(event){
        console.log(event.target.parentElement.children[0])
        event.target.parentElement.children[0].classList.add('glow')
    }
    function onBlur(event){
        console.log(event.target.parentElement.children[0])
        event.target.parentElement.children[0].classList.remove('glow')
    }

    return (
    <div className ={` slides ${state.succeeded ? "success " : "contact"}`}>
        {
            state.succeeded ?
            <div className="titles success">LET'S GLOW!</div> 
            :
            <>
                <div className= 'titles'>Contact Me</div>
                <div className="formContainer">
                    <form onSubmit={handleSubmit} className="form">
             <div className="name" onFocus={onFocus} onBlur={onBlur}>
                 <input
                     className="form-input"
                     type="text"
                     placeholder="Name"
                     required  
                     name="name"

                 ></input>
                 <hr className="hr-line"/>
             </div>
             <div className="email">
                 <input
                     className="form-input"
                     type="email"
                     placeholder="Email"
                     required
                     name="email"
                 ></input>
                 <ValidationError 
                     prefix="Email" 
                     field="email"
                     errors={state.errors}
                 />
                <hr className="hr-line"/>
             </div>
             <div className="message">
                 {/* <label
                     className="form-input"
                     type="date"
                     placeholder="email"
                     required
                 ></label> */}
                 <textarea
                     className="form-input"
                     type="text"
                     placeholder="Message"
                     required
                     name="message"
                     maxLength="315"
                     rows="7"
                 ></textarea>
                <hr className="hr-line"/>
             </div>
             <button type = 'submit' className = 'submit_btn' disabled={state.submitting}>
                 submit
             </button>
                    </form>
                </div>

            </>
        }
    </div>
    );
}
import React, { lazy, Suspense } from "react";
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Form.css';
import useMediaQuery from "./customHooks/useMediaQuery"
const SubmitBtnComponent = lazy(()=> import('./FormSuccess'));



export default function Contact(props){
    const [state, handleSubmit] = useForm("mzbnlkqo");
    const renderLoader = () => <div className="titles">Loading...</div>
    const isTabletorPhone = useMediaQuery('(max-width: 767px)');

    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }

    // on focus add glow to hr line
    function onFocus(event){
        console.log(event.target.parentElement.children[0])
        event.target.parentElement.children[1].classList.add('glow')
    }
    function onBlur(event){
        console.log(event.target.parentElement.children[0])
        event.target.parentElement.children[1].classList.remove('glow')
    }

    return (
        // ${state.succeeded ? "success" : "contact"}
    <div className ={` end_slide contact`}>
        {
            state.succeeded ?(
                <Suspense fallback = {renderLoader()}>
                    <SubmitBtnComponent/>
                </Suspense>
            )
            :(
            <>
            {
               state.submitting ? (
                <div className="titles success">
                Loading...
                </div>
               )  : (
                <>
            {
                isTabletorPhone ? (
                    <div className= 'titles contactPadding'>Contact</div>
                ):(
                    <div className= 'titles contactPadding'>Contact Me</div>
                )
            }
            <div className="formContainer">
            <form onSubmit={handleSubmit} className="form">
             <div className="name" onFocus={onFocus} onBlur={onBlur}>
                 <input
                     className="form-input"
                     type="text"
                     placeholder="Name"
                     required  
                     name="name"
                     autoComplete="off"

                 ></input>
                 <hr className="hr-line"/>
             </div>
             <div className="email" onFocus={onFocus} onBlur={onBlur}>
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
             <div className="message" onFocus={onFocus} onBlur={onBlur}>
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
             <div className="buttonContainer">
                <button type = 'submit' className = 'submit_btn skillBox' disabled={state.submitting}>
                    submit
                </button>
             </div>


                    </form>
            </div>
                </>
               )
            }
            
            </> 
            )

        }
    </div>
    );
}
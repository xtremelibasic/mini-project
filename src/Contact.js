import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function Contact(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function changeName(event){
        setName(event.target.value)
    }
    function changeEmail(event){
        setEmail(event.target.value)
    }
    function changeSubject(event){
        setSubject(event.target.value)
    }
    function changeMessage(event){
        setMessage(event.target.value)
    }

    function submitMessage(event){
        event.preventDefault();
        const objectToSend = {
            "name" : name,
            "email" : email,
            "subject" : subject,
            "message" : message
        }
        console.log(objectToSend)
    }

    return (
        <div className="page">
            <Header goToMenu={props.contactToMenu} goToHomepage={props.contactToHomepage} goToOrders={props.contactToOrders} />
            <form>
                <input type="text" value={name} onChange={changeName} placeholder='Your name' /><br/>
                <input type="email" value={email} onChange={changeEmail} placeholder='Your email' /><br/>
                <input type="text" value={subject} onChange={changeSubject} placeholder='Subject' /><br/>
                <textarea value={message} onChange={changeMessage} placeholder="Send us a message"></textarea><br/>
                <button type="submit" onClick={submitMessage}>Send</button>
            </form>
            <div className="Address">
                <pre>
                    25 Crazy Street,<br/>
                    Crazy Town,<br/>
                    Crazy Council,<br/>
                    CA1 3DG.<br/><br/>
                    +44 123456789
                </pre>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
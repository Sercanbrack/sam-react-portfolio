import React, { useState } from 'react'

const Contact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            name: name,
            email: email,
            message: message
        })

        console.log(`${name} left the following message: "${message}"`)
        console.log(`Please get back to them at ${email}`)

        setName('')
        setEmail('')
        setMessage('')

    }

    return (
        <div className='Contact container'>
            <h2 className='section-title'>Contact</h2>
            <br></br><br></br>
            <form className='contact-form' onSubmit={handleFormSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    name='contact-name'
                    className='contact-input w-50'
                ></input>
                <input
                    type='text'
                    placeholder='Email'
                    name='contact-email'
                    className='contact-input w-50'
                ></input>
                <textarea
                    type='text'
                    placeholder='Leave your message here! :D'
                    name='contact-message'
                    className='contact-input w-75'
                ></textarea>
                <button type='submit' className='btn btn-dark w-25'>Submit</button>
            </form>

        </div>
    );

}

export default Contact
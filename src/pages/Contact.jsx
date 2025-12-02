import React, { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // Opens user's email app with pre-filled fields
        window.location.href = `mailto:lexigramapp@outlook.com?subject=Contact Request&body=My email: ${email}`
    }

    return (
        <div className="contact-container">
            <img className='app-icon' src="../assets/app-icon.png" alt="App Icon" />
            <h1>Contact Us</h1>

            <form onSubmit={handleSubmit} className="contact-form">
                <label>Your Email</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                />

                <button type="submit">Send Email</button>
            </form>
        </div>
    )
}

export default Contact

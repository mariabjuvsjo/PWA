import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../App.css'


function SignIn() {
    const navigate = useNavigate()



    const [informa, setInforma] = useState({
        username: '',
        password: ''
    })


    const { username, password } = informa

    const handleForm = (e) => {
        setInforma((stateInfo) => ({
            ...stateInfo,
            [e.target.name]: e.target.value

        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log("sucess")
            navigate('/raport')
        } catch (err) {
            alert("no username or password")
        }
    }

    return (
        <>

            <form onSubmit={handleSubmit} className="form">
                <div className="form-item">
                    <h2>Log In</h2>
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="is-input" placeholder="Email" id="email" autoComplete="off" />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="is-input" placeholder="Password" id="password" />
                </div>
                <div className="form-item">
                    <button type="submit" className="button is-button">Sign in</button>
                </div>
            </form>
        </>

    )
}

export default SignIn
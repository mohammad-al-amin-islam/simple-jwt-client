import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const style = {
        width: "50%",
        height: "30px",
        margin: '5px 5px'
    };
    const navigate = useNavigate();
    const handleFromSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/order')
                }
                console.log(data);
            })
    }
    return (
        <div>
            <form onSubmit={handleFromSubmit}>
                <input style={style} type="email" name="email" placeholder='Email' />
                <br />
                <input style={style} type="password" name="password" placeholder='password' />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
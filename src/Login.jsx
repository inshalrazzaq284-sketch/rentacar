import React, { useState } from 'react';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            alert('Sign In Successful! Welcome: ' + email);
        } else {
            alert('Account Created! Name: ' + name + ' | Phone: ' + phone);
        }
    };

    return (
        <div style={{ maxWidth: '360px', margin: '70px auto', padding: '25px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'Arial' }}>

            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                {isLogin ? 'Rent a Car - Sign In' : 'Rent a Car - Sign Up'}
            </h2>

            <form onSubmit={handleSubmit}>

                {!isLogin && (
                    <>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Full Name:</label><br />
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label>Phone Number:</label><br />
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
                            />
                        </div>
                    </>
                )}

                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
                    />
                </div>

                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </button>

            </form>

            <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
                >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </span>
            </p>

        </div>
    );
}

export default Login;
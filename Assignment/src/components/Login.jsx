import React, { useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(''); // Clear error on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError('Please fill in all fields.');
            return;
        }
        // --- Place your actual authentication logic here ---
        console.log("Attempting login with:", form);
        // Example: alert('Logged in!');
        // In a real app, you'd make an API call:
        // try {
        //     const response = await fetch('/api/login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(form)
        //     });
        //     const data = await response.json();
        //     if (response.ok) {
        //         alert('Login successful!');
        //         // Redirect or update auth state
        //     } else {
        //         setError(data.message || 'Login failed. Please check your credentials.');
        //     }
        // } catch (err) {
        //     setError('Network error. Please try again.');
        // }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Subtle, professional background gradient
            background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', // Light blue gradient
            fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" // Professional font
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: '#fff',
                    padding: '2.5rem', // Increased padding
                    borderRadius: '10px', // Softer border radius
                    // Enhanced box shadow for depth
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '380px', // Slightly wider for better content distribution
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem', // Consistent spacing
                }}
            >
                <h2 style={{ 
                    textAlign: 'center', 
                    marginBottom: '0.8rem', // Adjusted margin
                    color: '#2c3e50', // Darker, more professional blue-grey
                    fontSize: '2rem', // Larger, more impactful title
                    fontWeight: '600'
                }}>
                    Login
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#7f8c8d', // Subtler secondary text color
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem'
                }}>
                    Access your account securely
                </p>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" style={{ 
                        fontWeight: '500', // Medium font weight
                        color: '#34495e', // Darker label text
                        marginBottom: '0.6rem', // More space below label
                        display: 'block',
                        fontSize: '0.9rem'
                    }}>
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.9rem 1rem', // Increased padding for a larger hit area
                            borderRadius: '5px', // Slightly rounded corners
                            border: '1px solid #dcdfe6', // Soft border color
                            fontSize: '1rem',
                            color: '#34495e',
                            transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            // Add pseudo-classes for interactivity (though they need a CSS-in-JS library like Emotion/Styled Components or external CSS for true :focus, :hover)
                            // For inline style, this is a limitation, but we can imply intent.
                        }}
                        placeholder="john.doe@example.com"
                        autoComplete="username"
                    />
                </div>
                
                {/* Password Field */}
                <div>
                    <label htmlFor="password" style={{ 
                        fontWeight: '500', 
                        color: '#34495e',
                        marginBottom: '0.6rem',
                        display: 'block',
                        fontSize: '0.9rem'
                    }}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={form.password}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.9rem 1rem',
                            borderRadius: '5px',
                            border: '1px solid #dcdfe6',
                            fontSize: '1rem',
                            color: '#34495e',
                            transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        }}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />
                </div>
                
                {error && (
                    <div style={{ 
                        color: '#c0392b', // A deeper red for error
                        textAlign: 'center', 
                        fontSize: '0.9rem', 
                        padding: '0.7rem', 
                        background: '#fdecea', // Light red background
                        borderRadius: '5px',
                        border: '1px solid #e74c3c'
                    }}>
                        {error}
                    </div>
                )}
                
                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        // A clean, consistent primary blue
                        background: '#3498db', 
                        color: '#fff',
                        padding: '1rem 1.5rem', // Generous padding
                        border: 'none',
                        borderRadius: '5px',
                        fontWeight: '600',
                        fontSize: '1.05rem', // Slightly larger font
                        cursor: 'pointer',
                        letterSpacing: '0.5px',
                        marginTop: '0.5rem', // Extra space above button
                        boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)', // Subtle shadow for button
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                >
                    Login to Account
                </button>
                
                {/* Forgot Password Link */}
                <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#7f8c8d', marginTop: '0.5rem' }}>
                    <a href="#" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '500' }}>
                        Forgot Password?
                    </a>
                </div>

                {/* Sign Up Link */}
                <div style={{ 
                    textAlign: 'center', 
                    fontSize: '0.9rem', 
                    color: '#7f8c8d', 
                    marginTop: '1.5rem', 
                    paddingTop: '1.5rem', 
                    borderTop: '1px solid #ecf0f1' // Lighter, subtle top border
                }}>
                    Don't have an account? 
                    <a href="#" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '600', marginLeft: '0.4rem' }}>
                        Sign Up Now
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
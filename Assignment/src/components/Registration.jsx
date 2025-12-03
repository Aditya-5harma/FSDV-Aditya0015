import React, { useState } from "react";

const Registration = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Email is invalid";
        if (!form.password) newErrors.password = "Password is required";
        else if (form.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (form.confirmPassword !== form.password)
            newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            setSubmitted(true);
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.title}>Register</h2>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Name</label>
                    <input
                        style={styles.input}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {errors.name && <span style={styles.error}>{errors.name}</span>}
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email</label>
                    <input
                        style={styles.input}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {errors.email && <span style={styles.error}>{errors.email}</span>}
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password</label>
                    <input
                        style={styles.input}
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {errors.password && (
                        <span style={styles.error}>{errors.password}</span>
                    )}
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Confirm Password</label>
                    <input
                        style={styles.input}
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {errors.confirmPassword && (
                        <span style={styles.error}>{errors.confirmPassword}</span>
                    )}
                </div>
                <button style={styles.button} type="submit">
                    Register
                </button>
                {submitted && (
                    <div style={styles.success}>Registration successful!</div>
                )}
            </form>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        background: "#fff",
        padding: "2rem 2.5rem",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(44, 62, 80, 0.15)",
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
    },
    title: {
        textAlign: "center",
        marginBottom: "0.5rem",
        color: "#2575fc",
        fontWeight: "bold",
        fontSize: "2rem",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
    },
    label: {
        fontWeight: "500",
        color: "#333",
        marginBottom: "0.2rem",
    },
    input: {
        padding: "0.7rem",
        borderRadius: "6px",
        border: "1px solid #ddd",
        fontSize: "1rem",
        outline: "none",
        transition: "border 0.2s",
    },
    error: {
        color: "#e74c3c",
        fontSize: "0.9rem",
        marginTop: "0.2rem",
    },
    button: {
        background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
        color: "#fff",
        padding: "0.8rem",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
        fontSize: "1.1rem",
        cursor: "pointer",
        marginTop: "0.5rem",
        transition: "background 0.2s",
    },
    success: {
        color: "#27ae60",
        textAlign: "center",
        marginTop: "1rem",
        fontWeight: "bold",
        fontSize: "1.1rem",
    },
};

export default Registration;
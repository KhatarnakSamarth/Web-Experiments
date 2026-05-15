import { useEffect, useState } from "react";

const RegisterationForm = () => {
    // Form Data State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const API_URL = 'I Copied Somebodies Code'
    // Error State
    const [errors, setErrors] = useState({});
    // Success Message State
    const [success, setSuccess] = useState("");
    // API Users State
    const [users, setUsers] = useState([]);
    // Loading State
    const [loading, setLoading] = useState(true);
    // useEffect for API Fetching
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);
    // Handle Input Changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // Form Validation Function
    const validateForm = () => {
        let newErrors = {};
        // Name Validation
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        // Email Validation
        if (!formData.email.includes("@")) {
            newErrors.email = "Email must contain @";
        }
        // Password Validation
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };
    // Form Submit Function
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess("");
        } else {
            setErrors({});

            fetch(API_URL, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return res.json();
                })
                .then((newUser) => {
                    setUsers([...users, newUser]); // use API response
                    setSuccess("Registration Successful!");
                    setFormData({ name: "", email: "", password: "" });
                })
                .catch((error) => {
                    setErrors({ api: "Failed to register user. Try again." });
                    console.error("API Error:", error);
                });
        }
    };

    return (
        <div className="app-container">
            <div className="form-card">
                <h1 className="form-title">Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}

                    <button type="submit" className="submit-btn">Register</button>
                </form>

                {success && <p className="success-text">{success}</p>}
                {errors.api && <p className="error-text api-error">{errors.api}</p>}

                <div className="api-section">
                    <h2 className="api-title">User Data from API</h2>
                    {loading ? (
                        <p className="loading-text">Loading...</p>
                    ) : (
                        users.map((user) => (
                            <div key={user.id} className="user-card">
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );

}
export default RegisterationForm
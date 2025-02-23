import React, {useState} from "react";

const RegisterScreen = () => {
    const [username, setUsername] = useState("");
    const handlerRegister = () => {
        localStorage.setItem("username", username)
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5"
        }}>
            <form onSubmit={handlerRegister} style={{
                display: "flex",
                flexDirection: "column",
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                width: "300px"
            }}>
                <label htmlFor="username" style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "5px"
                }}>Username: </label>
                <input id="username" placeholder="username" style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "15px",
                    fontSize: "16px"
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />

                <label htmlFor="password" style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "5px"
                }}>Password: </label>
                <input id="password" placeholder="password" type="password" style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "15px",
                    fontSize: "16px"
                }}/>

                <button style={{
                    padding: "10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px"
                }} >
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterScreen;

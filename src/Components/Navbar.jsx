import React from "react";

const Navbar = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                marginBottom: "20px",
            }}
        >
            <h3>Logo</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <p>Home</p>
                <p>About</p>
                <p>Category</p>
                <p>Contacts</p>
            </div>
        </div>
    );
};

export default Navbar;

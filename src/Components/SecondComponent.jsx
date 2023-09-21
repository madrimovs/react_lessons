import React, { useState } from "react";

const SecondComponent = ({ props }) => {
    const [sanash, setSanash] = useState(0);

    const clickBtn = () => {
        setSanash(sanash + 1);
    };

    return (
        <div
            style={{
                width: "25%",
                border: "3px solid black",
                marginBottom: "10px",
            }}
        >
            <img style={{ width: "100%" }} src={props.image} alt="" />
            <div style={{ padding: "5px", textAlign: "center" }}>
                <h3 className="title">{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.category}</p>
                <p>{props.price}</p>
            </div>
            <button onClick={clickBtn} className="btn btn-warning w-100">
                Sanoq {sanash}
            </button>
        </div>
    );
};

export default SecondComponent;

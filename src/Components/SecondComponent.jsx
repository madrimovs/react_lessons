import React, { useState } from "react";

const SecondComponent = ({ props }) => {
    const [showMore, setShowMore] = useState(false);

    const showMoreFunc = () => {
        setShowMore(!showMore);
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

                <button onClick={showMoreFunc}>
                    {showMore ? "Hidden" : "Show"} details
                </button>

                {showMore && <p>{props.description}</p>}

                <p>{props.category}</p>
                <p>{props.price}</p>
            </div>
            <button className="btn btn-warning w-100">Sanoq</button>
        </div>
    );
};

export default SecondComponent;

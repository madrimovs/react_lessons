import React from "react";
import "./myComponent.css";

import products from "../../API/BASE_URL";
import SecondComponent from "../SecondComponent";

const MyComponent = () => {
    return (
        <div className="my_component">
            {products.slice(0, 6).map((product) => (
                <SecondComponent key={product.id} props={product} />
            ))}
        </div>
    );
};

export default MyComponent;

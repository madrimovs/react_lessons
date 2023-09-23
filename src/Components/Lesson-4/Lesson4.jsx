import React, { useState } from "react";

import { data } from "./data";

const Lesson4 = () => {
    const [index, setIndex] = useState(0);

    const clickfunc = () => setIndex(index + 1);

    let data2 = data[index];

    return (
        <div className="mt-5 mb-5 text-center">
            <p className="h1 mt-1">{data2.name}</p>
            <div className="text-center mb-5">
                <img className="" src={data2.url} alt="" />
            </div>
            <button className="btn btn-success w-50 mx-auto" onClick={clickfunc}>
                Next
            </button>
        </div>
    );
};

export default Lesson4;

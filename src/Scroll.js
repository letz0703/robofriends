import React from "react";

const Scroll = (props) => {
    return (
        <div
            className="pt4"
            style={{
                overflowY: "scroll",
                border: "0 solid black",
                height: "80vh",
            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;

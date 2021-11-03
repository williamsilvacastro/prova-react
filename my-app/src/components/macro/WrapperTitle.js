import React from "react";

function WrapperTitle(props) {
    return (
        <>
            <div class="card card_border mb-5">
                <div class="cards__heading">
                    <h3>{props.title}</h3>
                </div>
                <div class="card-body">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default WrapperTitle;
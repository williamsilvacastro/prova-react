import React from "react";
function GridCard(props) {
    return (
        <>
            <div className="col mb-4">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GridCard;
import React from "react";

function StatisticCard(props) {
    let name = "lnr lnr-" + props.name;
    let color = "text-"+ props.color+" number"
    // name num e desc
    return (
        <>
            <div className="col-sm-6 pr-sm-2 statistics-grid">
                <div className="card card_border border-primary-top p-4">
                    <i className={name}> </i>
                    <h3 className={color}>{props.num}</h3>
                    <p className="stat-text">{props.desc}</p>
                </div>
            </div>
        </>
    );
}

export default StatisticCard;
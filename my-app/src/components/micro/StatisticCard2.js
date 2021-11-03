import React from "react";

function StatisticCard2(props) {
    // name e update
    return (
        <>
            <div className="col-lg-6 pr-lg-2 chart-grid">
                <div className="card text-center card_border">
                    <div className="card-header chart-grid__header">
                        {props.name}
                    </div>
                    <div className="card-body">
                        {/* <!-- bar chart --> */}
                        <div id="container">
                            <canvas id="barchart"></canvas>
                        </div>
                        {/* <!-- //bar chart --> */}
                    </div>
                    <div className="card-footer text-muted chart-grid__footer">
                        {props.update}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StatisticCard2;
import React from "react";

import MainContent from "../../components/macro/main-content/MainContent";
import StatisticCard from "../../components/micro/StatisticCard";
import StatisticCard2 from "../../components/micro/StatisticCard2";

function Index() {
    return (
        <>
            <section>

                <MainContent>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb my-breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                    <div className="welcome-msg pt-3 pb-4">
                        <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
                        <p>Very detailed and featured admin.</p>
                    </div>
                    {/* <!-- statistics data --> */}
                    <div className="statistics">
                        <div className="row">
                            <div className="col-xl-6 pr-xl-2">
                                <div className="row">
                                    <StatisticCard name="users" num="29.75 M" desc="Total Users"/>
                                    <StatisticCard name="eye" num="51.25 K" desc="Daily Visitors"/>
                                </div>
                            </div>
                            <div className="col-xl-6 pl-xl-2">
                                <div className="row">
                                    <StatisticCard name="cloud-download" num="166.89 M" desc="Downloads"/>
                                    <StatisticCard name="cart" num="1,250k" desc="Purchased"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- //statistics data --> */}

                    {/* <!-- charts --> */}
                    <div className="chart">
                        <div className="row">
                            <StatisticCard2 name="Bar Chart" update="Updated 2 hours ago"/>
                            <StatisticCard2 name="Line Chart" update="Updated just now"/>
                        </div>
                    </div>
                    {/* <!-- //charts --> */}
                </MainContent>
            </section>
        </>
    );
}

export default Index;
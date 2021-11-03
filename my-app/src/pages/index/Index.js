import React from "react";

import MainContent from "../../components/macro/main-content/MainContent";

function Index() {
    return (
        <>
            <section>

                <MainContent>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb my-breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                    <div class="welcome-msg pt-3 pb-4">
                        <h1>Hi <span class="text-primary">John</span>, Welcome back</h1>
                        <p>Very detailed and featured admin.</p>
                    </div>
                </MainContent>
            </section>
        </>
    );
}

export default Index;
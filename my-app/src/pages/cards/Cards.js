import React from "react";

import MainContent from "../../components/macro/main-content/MainContent";

function Cards() {
    return (
        <>
            <MainContent>
                <nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb my-breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Elements</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Cards</li>
                    </ol>
                </nav>
            </MainContent>
        </>
    );
}

export default Cards;
import React from "react"
import { Switch, Route} from "react-router-dom"
import index from "./pages/index/Index";
import Cards from "./pages/cards/Cards";
import Pricing from "./pages/pricing/Pricing";
import Blocks from "./pages/blocks/Blocks";
import Forms from "./pages/forms/Forms";



export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={index} exact/>
            <Route path="/index.html" component={index} />
            <Route path="/cards.html" component={Cards} />
            <Route path="/pricing.html" component={Pricing} />
            <Route path="/blocks.html" component={Blocks} />
            <Route path="/Forms.html" component={Forms} />
        </Switch>
    )
}
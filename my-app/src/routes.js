import React from "react"
import { Switch, Route} from "react-router-dom"
import index from "./pages/index/Index";
import Cards from "./pages/cards/Cards";



export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={index} exact/>
            <Route path="/index.html" component={index} />
            <Route path="/cards.html" component={Cards} />
        </Switch>
    )
}
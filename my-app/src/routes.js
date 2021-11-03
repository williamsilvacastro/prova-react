import React from "react"
import { Switch, Route} from "react-router-dom"
import index from "./pages/index/Index";



export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={index} exact/>
            <Route path="/index.html" component={index} exact/>
        </Switch>
    )
}
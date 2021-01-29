import { Routes } from "../interfaces/routes"
import { Route } from 'react-router-dom'

export const getRoutes = (routes: Routes[]) =>{
    return routes.map((prop, key) =>{
        return(
            <Route path={prop.path} component={prop.component} key={key} />
        )
    })
}
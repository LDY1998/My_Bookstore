import React, {lazy, Suspense} from "react";
import { Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";


const SuspenseComponent = Component => props => {
    return (
    <Suspense fallback={null}>
        <Component {...props}></Component>
    </Suspense>
   )
}

const HomeComponent = lazy(() => import("../components/HomeComponent/Home"));


export default [
    {
        
      routes: [
       {
        path: "/",
        routes: [

          {  
              path: "/",
              exact: true,
              render: () => <Redirect to={"/home"}/>
          },
          {
              path:"/home",
              component: SuspenseComponent(HomeComponent)
          }
        ]
       }  
     ]
    }
];
// routes.js
import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from "../App";
import Homepage from "../Component/Homepage";
import Language from "../Component/Language";
import Javascripts from "../Component/Javascripts";
import Css from "../Component/Css";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import MongoDBRoadmap from "../Component/MongoDBRoadmap";
import Java from "../Component/Java";
import Express from "../Component/Express";

import Vue from "../Component/Vue";
import Nodejs from "../Component/Nodejs";

import Bootstraps from "../Component/Bootstraps";
import C from "../Component/C";
import Sql from "../Component/Sql";
import Python from "../Component/Python";
import Php from "../Component/Php";
import Heading from "../Component/Heading";
import Cpp from "../Component/Cpp";
import Kotlin from "../Component/Kotlin";
import Typescripts from "../Component/Typescripts";
import Reacts from "../Component/Reacts";
import Html from "../Component/Html";
import Csharp from "../Component/Csharp";
import Jquery from "../Component/Jquery";
import Tailwinds from "../Component/Tailwinds";
import R from "../Component/R";
import Dsa from "../Component/Dsa";
import Git from "../Component/Git";
import Ruby from "../Component/Ruby";
import Json from "../Component/Json";
import LandingPage from "../Component/Landingpage";
import Angular from "../Component/Angular";
import About from "../Component/About";
import React, { useEffect, useState } from 'react';
import Ai from "../Component/Ai";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <SignUp />
      }, {
        path: "ai",
        element:<Ai/>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "language",
        element: <Language />
       
      },{
        path: "home",
        element: <Homepage/>
       
      }, {
        path: "about",
        element: <About/>
       
      },{
        path: "language/c#",
        element: <Csharp/>
       
      },{
        path: "language/jquery",
        element: <Jquery/>
       
      },
      {
        path: "language/javascript", 
        element: <Javascripts />
      },
      {
        path: "language/css", 
        element: <Css />
      },{
        path: "language/tailwind", 
        element: <Tailwinds/>
      },{
        path: "language/r", 
        element:<R/>
      },
      {
        path: "language/mongo", 
        element: <MongoDBRoadmap />
      },
      {
        path: "language/java", 
        element: <Java/>
      },
      {
        path: "language/express", 
        element:<Express />
      },

      {
        path: "language/vue", 
        element: <Vue/>
      },
      
      {
        path: "language/python", 
        element: <Python/>
      },
      {
        path: "language/nodejs", 
        element: <Nodejs/>
      },
      {
        path: "language/ruby", 
        element: <Ruby/>
      },{
        path: "language/bootstrap", 
        element: <Bootstraps/>
      },{
        path: "language/c", 
        element: <C/>
      },{
        path: "language/sql", 
        element: <Sql/>
      },{
        path: "language/php", 
        element: <Php/>
      },{
        path: "language/kotlin", 
        element: <Kotlin/>
      },{
        path: "language/git", 
        element: <Git/>
      },{
        path: "heading", 
        element: <Heading/>
      },{
        path: "language/dsa", 
        element:<Dsa/>
      },{
        path: "language/cpp", 
        element:<Cpp/>
      },{
        path: "language/html", 
        element:<Html/>
      },{
        path: "language/react", 
        element:<Reacts/>
      },{
        path: "language/typescript", 
        element:<Typescripts/>
      },{
        path: "language/json", 
        element:<Json/>
      },{
        path: "/singup", 
        element:<SignUp/>
      },{
        path: "language/angular", 
        element:<Angular/>
      },
      {
        path: "",
        element: <LandingPage/>
      }
    ]
  }
]);

export default router;

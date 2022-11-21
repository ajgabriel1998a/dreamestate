import React, { Component, useState, useEffect } from "react";
import RouterApp from "./RouterApp";
import "./styles/Styles.css";
import Footer from "./Component/Footer/Footer";
import Loader from "./Component/Loader/Loader";



const App = () => {


    
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        })


        return (
            <div>

                <div>
                    {isLoading == true ?
                        <Loader /> :
                        <>
                            <RouterApp />
                            <Footer />
                        </>
                    }
                </div>
            </div>
        )
    }

    export default App;

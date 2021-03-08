import { Button } from '@material-ui/core';
import React from 'react';


const Home = () => {
    return (
        <div className="home">

            <div className="home__lrow">
                <img src="/images/logo.png" alt="" className="home__llogo"></img>


                <div className="home__l">

                    <h1 className="home__ltitle">¡Empieza tu camino ahora!</h1>
                    <div className="home__buttons">
                        <Button variant="contained" color="secondary" style={{
                            borderRadius: 100,
                            backgroundColor: "#8349C1",
                            padding: "16px",
                            width: "180px"
                        }}>
                            Registrate
            </Button>

                        <Button variant="outlined" color="primary" style={{
                            borderRadius: 100,
                            borderColor: "#8349C1",
                            padding: "16px",
                            width: "180px"
                        }}>
                            Ingresa
            </Button>
                    </div>




                </div>
            </div>


            <div className="home__r">
                <img src="/images/logo.png" alt="" className="home__llogo"></img>
            </div>
        </div>
    )
}

export default Home;
import { useState } from "react";
import yellowCardIcon from ".././images/card_icon.svg";
import whiteCardIcon from '.././images/white_card_icon.svg';

function OurServices() {

    const [toggleYellow, setToggleYellow] = useState([true, true, true, true])

    function handleToggle(index) {
        switch (index) {
            case 0:
                setToggleYellow([false, true, true, true])
                break;
            case 1:
                setToggleYellow([true, false, true, true])
                break;
            case 2:
                setToggleYellow([true, true, false, true])
                break;
            case 3:
                setToggleYellow([true, true, true, false])
                break;
            default:
                setToggleYellow([true, true, true, true])
                break;
        }
    }

    return <>
        <div id="our-services" className="grid-item" >
            <h1 className="primary main-heading">Our Services</h1>
            <div className="services-container">
                <div onMouseMove={() => {
                    handleToggle(0)
                }}
                    onMouseOut={() => {
                        handleToggle()
                    }
                    }
                    className="services-item">
                    <div>
                        <img src={toggleYellow[0] ? yellowCardIcon : whiteCardIcon}

                            alt="" className="services-icon" />
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <div
                    onMouseMove={() => {
                        handleToggle(1)
                    }}
                    onMouseOut={() => {
                        handleToggle()
                    }
                    }
                    className="services-item" >
                    <div>
                        <img src={toggleYellow[1] ? yellowCardIcon : whiteCardIcon}
                            alt="" className="services-icon" />
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <div
                    onMouseMove={() => {
                        handleToggle(2)
                    }}
                    onMouseOut={() => {
                        handleToggle()
                    }
                    }
                    className="services-item">
                    <div>
                        <img src={toggleYellow[2] ? yellowCardIcon : whiteCardIcon}

                            alt="" className="services-icon" />
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <div
                    onMouseMove={() => {
                        handleToggle(3)
                    }}
                    onMouseOut={() => {
                        handleToggle()
                    }
                    }
                    className="services-item">
                    <div>
                        <img src={toggleYellow[3] ? yellowCardIcon : whiteCardIcon}

                            alt="" className="services-icon" />
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div >
        </div >
    </>;
}

export default OurServices;
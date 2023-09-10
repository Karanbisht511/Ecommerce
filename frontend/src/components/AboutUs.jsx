import smilingGirl from '../images/girl_smiling.png'
import karan from '../images/karan.png'
import manjeet from '../images/manjeet.png'
import rishabh from '../images/rishabh.png'

function AboutUs() {
    return <>
        <div id="aboutus" className="grid-item">
            <div className="aboutus-container">
                <div className="girl-image">
                    <img src={smilingGirl} alt="" />
                </div>
                <div className="aboutus-content">
                    <h2 className='primary'>About Us</h2>
                    <p className='secondary'>In the office,remote, or a mix of two, with miro, your team can connect, collaborate and co-create in one space no matter where you are. </p>
                </div>
                <div className="item-wrapper">
                    <div className="aboutus-item">
                        <div className="our-pic">
                            <img src={manjeet} alt="" />
                        </div>
                        <div className='name'>Manjeet Singh</div>
                        <div className='role'>UX Designer</div>
                    </div>
                    <div className="aboutus-item">
                        <div className="our-pic">
                            <img src={rishabh} alt="" />
                        </div>
                        <div className="name">Rishabh Rautela</div>
                        <div className='role'>UX Designer</div>
                    </div>
                    <div className="aboutus-item">
                        <div className="our-pic">
                            <img src={karan} alt="" />
                        </div>
                        <div className="name">Karan Bisht</div>
                        <div className='role'>Software Developer</div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default AboutUs;

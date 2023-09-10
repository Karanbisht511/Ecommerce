import college from './../images/1.jpg'

function TopColleges() {
    return <>
        <div id="top-colleges" className='grid-item'>
            <h1 className='primary main-heading'>Top Colleges</h1>
            <div className="colleges-container">
                <div className="college-item">
                    <img src={college} alt="" />
                    <div>
                        <div className='primary-two'>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="college-item">
                    <img src={college} alt="" />
                    <div>
                        <div className='primary-two'>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="college-item">
                    <img src={college} alt="" />
                    <div>
                        <div className='primary-two'>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="college-item">
                    <img src={college} alt="" />
                    <div>
                        <div className='primary-two'>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div></>;
}

export default TopColleges;
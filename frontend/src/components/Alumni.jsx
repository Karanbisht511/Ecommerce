import NorthEastIcon from '@mui/icons-material/NorthEast';

function Alumni() {
    return <>
        <div id="alumni" className='grid-item'>
            <div className="alumni-container">
                <div className="alumni-tagline">
                    <h1 className='primary'>Meet your Alumni</h1>
                    <p className='secondary'>In the office,remote, or a mix of two, with miro, your team can connect, collaborate and co-create in one space no matter where you are. </p>
                </div>
                <div className="alumnis">
                    <div className="alumni-item first-item">
                        <div className='flexbox'>
                            <div className="primary">Manjeet</div> <NorthEastIcon />
                        </div>
                        <div className="three-circle flexbox">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam
                        </div>
                        <div className="circle bottom"></div>
                    </div>
                    <div className="alumni-item second-item">
                        <div className='flexbox'>
                            <div className="primary">Rishabh</div> <NorthEastIcon />
                        </div>
                        <div className="three-circle flexbox">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam
                        </div>
                        <div className="circle bottom"></div>
                    </div>
                    <div className="alumni-item third-item">
                        <div className='flexbox'>
                            <div className="primary">Rohit</div> <NorthEastIcon />
                        </div>
                        <div className="three-circle flexbox">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam
                        </div>
                        <div className="circle bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Alumni;
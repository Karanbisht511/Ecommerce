import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import iconApple from '../images/icon-apple.svg';
import iconPlayStore from '../images/icon-playstore.svg';
import iconFinanceFlow from '../images/iconfinanceflow.svg'

function Footer() {
    return <>
        <div id="footer" className="border grid-item">
            <div className="footer-container">
                <div className="brand-partner border">
                    <img src={iconFinanceFlow} alt="" />
                    FinanceFlow</div>
                <div className="social-media">
                    <div className='social-media-icon'> <InstagramIcon /> </div>
                    <div className='social-media-icon'> <FacebookIcon /> </div>
                    <div className='social-media-icon'> <LinkedInIcon /> </div>
                </div>
                <div className="links border">
                    <div id="menu">MENU</div>
                    <div className="line"></div>
                    <div id="links-container">
                        <div>HOME</div>
                        <div>TOKENS</div>
                        <div>ABOUT</div>
                        <div>BLOG</div>
                        <div>PRICING</div>
                        <div>CONTACT US</div>
                    </div>
                </div>
                <div className="downloadApp border">
                    <h2>DOWNLOAD OUR APPLICATION</h2>
                    <p className='secondary-two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem enim</p>
                    <p className='secondary-two'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem enim</p>
                    <div className="link-btn">
                        <button className='store-button'>
                            <div> <img src={iconApple} alt="" /></div>
                            <div>APP STORE</div>
                        </button>
                        <button className='store-button'>
                            <div> <img src={iconPlayStore} alt="" /></div>
                            <div>PLAY STORE</div>
                        </button>
                    </div>

                </div>
                <div className="copyright border">
                    <div className="copyright-line"></div>
                    <div> All right reserved</div>
                </div>
            </div>
        </div>
    </>;
}

export default Footer;
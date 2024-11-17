import "../Sass/about.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <Link to="/Merrill_Reid/">Return home</Link>
        <div className="about_wrapper">
                <section>
                    <h1>About</h1>
                    <p>This app is designed as a tool for personal and workplace development. The results of this test are only a guide.</p>

                    <h1>Acknowledgements</h1>
                    <p>This app was designed and developed by <a href="https://github.com/JJenk89" target="_blank">JJenk89 (Github)</a></p>
                    <p>Thanks to Dr David W. Merrill and Dr Roger H. Reid for developing the original research that made this test possible.</p>
                    <p>Thanks to the following photographers for providing royalty-free stock images used on this site:</p>
                    
                </section>
                <footer>
                    <div>
                    Background by Bruno Thethe: 
                    <a href="https://www.pexels.com/photo/blue-pink-and-yellow-illustration-1910230/" target="_blank" rel="noopener noreferrer">Pexels</a>
                    </div>

                    <div>
                    Analytical page photo by Tima Miroshnichenko: <a href="https://www.pexels.com/photo/a-woman-sitting-with-her-hands-on-her-chin-10625955/" target="_blank" rel="noopener noreferrer">Pexels</a>
                    </div>

                    <div>
                    Amiable Photo by fauxels:  <a href="https://www.pexels.com/photo/photo-of-people-holding-each-other-s-hands-3184423/" target="_blank" rel="noopener noreferrer">Pexels</a>
                    </div>

                    <div>
                    Driver Photo by Negative Space:   <a href="https://www.pexels.com/photo/man-walking-on-sidewalk-near-people-standing-and-sitting-beside-curtain-wall-building-34092/" target="_blank" rel="noopener noreferrer">Pexels</a>
                    </div>

                    <div>
                    Expressive Photo by Helena Lopes:   <a href="https://www.pexels.com/photo/photograph-of-men-having-conversation-seating-on-chair-1015568/ " target="_blank" rel="noopener noreferrer">Pexels</a>
                    </div>
                </footer>
        </div>
        </> 
     );
}
 
export default Footer;
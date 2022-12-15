import twitter_icon from './Images/twitter-icon.png'
import facebook_icon from './Images/facebook-icon.png'
import instagram_icon from './Images/instagram-icon.png'
import github_icon from './Images/github-icon.png'


export default function Footer(){
    return(
        <div>
            <img src={twitter_icon} alt="twitter icon" className="social first" />
            <img src={facebook_icon} alt="facebook icon" className="social" />
            <img src={instagram_icon} alt="instagram icon" className="social" />
            <img src={github_icon} alt="github icon" className="social" />
        </div>
    )
}
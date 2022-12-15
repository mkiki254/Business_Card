import prof_pic from './Images/prof-pic.jpg'
import email_icon from './Images/email-icon.png'
import linkedin_icon from './Images/linkedin-icon.png'

export default function Info(){
    return(
        <div>
            <img src={prof_pic} alt="profile pic" className="prof-pic" />
            <h2 className="name">Charles Kariuki</h2>
            <h4 className="title">Frontend Developer</h4>
            <h4 className="email">kariukicharles440@gmail.com</h4>
            <button className="email-button"><img src={email_icon} /> Email</button>
            <button className="linkedin-button"><img src={linkedin_icon} /> LinkedIn</button>
        </div>
    )
}
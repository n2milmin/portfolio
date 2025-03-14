import './home.css'
import website_pic from "../files/website_img.png"
import resume from "../files/nicolemilmine_resume.pdf"
import coverletter from "../files/CoverLetter.pdf"

const Home = () => {

    // Handle clicking on personal project photo or text 
    const handleGithub = () => {
        try {
            window.open(
                "https://github.com/n2milmin/my_wedding_site",
                '_blank'
            )
        } catch (e) {
            <Alert icon={<CheckIcon fontSize="inherit" />}>
                Something went wrong, please try again in a minute.
            </Alert>
        }
    }

    return (
        <div className="personal">
            <div className="philosophy">
                <h1>Personal Philosophy</h1>
                <p>
                    Continuous learning and embracing challenges as opportunities for growth drive success.
                </p>
            </div>
            <h1>Bio</h1>
            <div className="bio">
                <p className='left'>
                    I am a dedicated professional with a diverse background in both academia and the tech industry, currently completing a Computer Programming and Analysis diploma at George Brown College, with graduation expected in April 2025. In addition to my academic studies, I have gained hands-on experience as a remote AI Trainer at Outlier, where I focused on developing and evaluating image- and text-based machine learning models. This role involved creating and testing prompts to assess the models' ability to meet their intended requirements. My practical experience in AI, combined with ongoing coursework in machine learning, has deepened my understanding of artificial intelligence and its potential to shape future technologies.
                </p>
                <p>
                    Previously, I spent over a year as a Software Quality Assurance Analyst Co-op at Unitron, a Sonova brand, where I developed expertise in regression testing, release testing, and bug investigation for both mobile and software applications. This role honed my attention to detail and my ability to identify and resolve issues in software systems. Outside of work, I enjoy knitting as a creative outlet and spending time with my two cats. I am passionate about problem-solving and continuous improvement and look forward to contributing my technical skills and collaborative mindset to meaningful projects, all while staying at the forefront of emerging technologies.
                </p>
            </div>
            <div className="project">
                <h1>Personal Project</h1>
                <img className="site_photo" src={ website_pic } alt="Website Photo" width="800px" onClick={ handleGithub } />
                <div className="site_description">
                    <h2 onClick={ handleGithub }>Wedding Website</h2>
                    <p>
                        This is a personal wedding website for my partner and me. Why pay someone else to create something or use a pre-made template when I can personalize my own as a side project? This will be used for my wedding.
                    </p>
                    <br/> <br/>
                    <h4>Contains</h4>
                    <ul>
                        <li>Home page with a countdown, photo and nav bar </li>
                        <li>RSVP form for guests questions regarding meal choice and accomidation requirements</li>
                        <li>Registry (we have yet to put thought into this) </li>
                        <li>Gallery with API connection to a Google Album for the wedding </li>
                        <li>Details containing directions, itinerary & accommodations information </li>
                        <li>Guest Responses personal use page that will only be accessible with the correct url that will not be provided to anyone. Will show a comprehensive list of guests & their responses. Won't be pretty, just practical.</li>
                    </ul>
                </div>
            </div>
            <div className="coverletter">
                <h1>Cover Letter</h1>
                <iframe 
                    src={ coverletter }
                    width="700px"
                    height="400px"
                />
            </div>
            <div className="resume">
                <h1>Resume</h1>
                <iframe 
                    src={ resume }
                    width="700px"
                    height="400px"
                />
            </div>
        </div>
    )
}

export default Home;
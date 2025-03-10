import website_pic from "../website_img.png"

const Home = () => {

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
                <h2>Personal Philosophy</h2>
                
            </div>
            <div className="bio">
                <h2>Bio</h2>
                <p>

                </p>
            </div>
            <div className="project">
                <h2>Personal Projects</h2>
                <img className="site_photo" src={ website_pic } alt="Website Photo" />
                <div className="site_description">
                    <h3>Wedding Website</h3>
                    <a href="https://github.com/n2milmin/my_wedding_site" target="_blank"/>
                    <p className="description">
                        This is a personal wedding website for my partner and me. Why pay someone else to create something or use a pre-made template when I can personalize my own as a side project? This will be used for my wedding.
                    </p>
                    <ul className="website_contains">
                        <li>Home page with a countdown, photo and nav bar (complete)</li>
                        <li>RSVP form for guests questions regarding meal choice and accomidation requirements (incomplete)</li>
                        <li>Registry (we have yet to put thought into this) (incomplete)</li>
                        <li>Gallery with API connection to a Google Album for the wedding (incomplete)</li>
                        <li>Details containing directions, itinerary & accommodations information (in-progress)</li>
                        <li>Guest Responses personal use page that will only be accessible with the correct url that will not be provided to anyone. Will show a comprehensive list of guests & their responses. Won't be pretty, just practical.</li>
                    </ul>
                </div>
            </div>
            <div className="coverletter">
                <h2>Cover Letter</h2>
                <iframe 
                    src="https://docs.google.com/document/d/1I-8l2WrwKuu0mV1tEET27ftGJ7cSnRqjeDcS1f0sBYA/edit?tab=t.0"
                    
                />
            </div>
            <div className="resume">
                <h2>Resume</h2>
                <iframe 
                    src="https://docs.google.com/document/d/1tMMvufJXQ1jk71vAR7krpfxpzKZ5AwW5pL70cE80PnI/edit?usp=sharing"
                    
                />
            </div>
        </div>
    )
}

export default Home;
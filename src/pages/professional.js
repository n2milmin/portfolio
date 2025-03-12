import './professional.css'
import TrueFit from '../files/truefit.png'
import uremoteplus from '../files/uremoteplus.png'
import referenceletter from '../files/Reference Letter - Kevin Lee.pdf'

const Professional = () => {

    return (
        <div className="professional">
            <div className="samples">
                <h1>Professional Work Samples</h1>
                <div className='outlier'>
                    <h2>Outlier</h2>
                    <p>
                        Outlier hired me for AI Training. Outlier partners with organizations to train large language models, helping cutting-edge generative AI models write better code. Projects typically include discrete, highly variable problems that involve engaging with these models as they learn to code.
                        I have been hired for two such projects. One was text prompt-based, like ChatGPT, while the other was image-based. I work to identify biases, improve model performance, and continuously enhance the models' ability to handle complex, real-world scenarios by utilizing specified techniques for content and context understanding.
                    </p>
                </div>
                <div className="fitting">
                    <h2>Hearing Aid Fitting Software</h2>
                    <img src={ TrueFit } alt='TrueFit Fitting/Tuning Screen'/>
                    <a 
                        href='https://www.unitron.com/au/en_au/professionals/truefit.html' 
                        target='_blank'>
                            Unitron Fitting Software - TrueFit
                    </a>
                    <p>
                        TrueFit is a long-standing software that I had the privilege of working on. My responsibilities consisted of designing and executing test plans to validate software features and identifying bugs or issues that could impact the user experience. Whether bug verification or language translation testing, I was thorough in my execution, leading to releases 5.0 and 5.4.
                    </p>
                </div>
                <div className="mobile">
                    <h2>Hearing Aid Mobile Software</h2>
                    <img src={ uremoteplus } alt='Unitron Remote Plus App Screenshots'/>
                    <a 
                        href='https://play.google.com/store/apps/details?id=com.sonova.unitron.rcapp&hl=en_CA' 
                        target='_blank'>
                            Unitron Remote Plus - Mobile App
                    </a>
                    <p>
                        Unitron Remote Plus is not as long-standing as TrueFit but impacts users just as much. While I was not present for the leap from physical remotes to an application, I enjoyed the opportunity to ensure the app provided a seamless experience for users, enabling them to effortlessly manage and adjust their hearing aids on the go. My responsibilities spanned cross-platform and regression testing to bug investigation and verification, ensuring the application's functionality, stability, and user-friendly interface.
                    </p>
                </div>
            </div>
            <div className="volunteer">
                <h1>Volunteer Experience</h1>
                <div className="sam">
                    <h2>Community Health Caring KW</h2>
                    <a href='https://healthcaringkw.org/' target='_blank'>www.healthcaringkw.org</a>
                    <p>
                        An off-handed comment by my best friend led to an inadvertent volunteering/consulting opportunity with this organization. A mention of a poorly managed Excel spreadsheet and her struggle to fix it found me explaining the simplicity and then deciding to execute the solution myself. As a non-profit organization, they receive an abundance of donations from the stores in town. Each item of a donation was counted and input into a new line (three bags of spaghetti, two bags of rigatoni, etc.), which was messy and complicated to track in the long run. I took half an hour of my morning to create a simplified table with a few calculations to make tracking donation types easy. The manager informed me that they were eternally grateful, and I told them I'd be willing to help anytime. 
                    </p>
                </div>
                <div className="remax">
                    <h2>Remax Solid Gold Client Thanksgiving Pancake Breakfast</h2>
                    <p>
                        My mother is a real estate agent with Remax Solid Gold in Kitchener, Ontario. The Octoberfest Parade always passes the office, so on the day of the parade, the real estate agents host a pancake breakfast for their clients. For the past three years, I have accompanied my mother to assist them from 6 am to 11 am to set up, cook pancakes, and clean up. I find it a wonderful networking opportunity, as I get to interact with happy families who are more than willing to ask about the 'random college student' helping out. My interactions have helped build a wide network of people that I never would've interacted with in another scenario. 
                    </p>
                </div>
            </div>
            <div className="recommendations">
                <h1>Recommendation Letter</h1>
                <iframe 
                    src={ referenceletter }
                />
            </div>
            <div className="awards">
                {/* Smart Serve ??? // Dad's for diploma */}
            </div>
        </div>
    )
}

export default Professional;
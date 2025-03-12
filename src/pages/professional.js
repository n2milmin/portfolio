import TrueFit from '../files/truefit.png'
import uremoteplus from '../files/uremoteplus.png'

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
                    <h2>Fitting Software</h2>
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
                <h2>Volunteer Experience</h2>
                <div className="remax">
                    good for networking with a wide range of people 
                </div>
                <div className="sam">

                </div>
            </div>
            <div className="recommendations">
                <h2>Recommendation Letters</h2>
                <iframe 
                    src="https://drive.google.com/file/d/1H_-gJKfoQ6UsrT7a7cPdlX34lH-W7vsJ/view?usp=sharing"
                />
                <p>There is a second one but I was unable to get it off a broken phone on time.</p>
            </div>
            <div className="awards">
                {/* Smart Serve ??? // Dad's for diploma */}
            </div>
        </div>
    )
}
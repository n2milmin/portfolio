import './academic.css';
import dlSpring from '../files/Dean_letter_Spring_2023.pdf';
import dlFall from '../files/Dean_letter_Fall_2024.pdf';

const Academic = () => {

    return (
        <div className="academic">
            <div className="degrees">
                <h1>Educatiion</h1>
                <div className="gbc">
                    <h2>Computer Programming and Analysis from George Brown College</h2>
                    <a 
                        href="https://www.georgebrown.ca/programs/computer-programming-and-analysis-program-online-t197" 
                        target="_blank">
                            Program Page
                    </a>
                    <h3>January 2023 - April 2025</h3>
                    <p>
                        The Computer Programming and Analysis (Online) three-year advanced diploma program offers comprehensive programming and IT analysis training. As a graduate of this program, you’ll have a solid foundation to advance your career in the dynamic and constantly evolving world of IT.
                    </p>
                </div>
                <div className="uw">
                    <h2>Physics and Astronomy Honours Bachelor of Science with Co-op from the University of Waterloo</h2>
                    <a 
                        href="https://uwaterloo.ca/future-students/programs/physics-and-astronomy" 
                        target="_blank">
                            Program Page
                    </a>
                    <h3>September 2019 - August 2022 (voluntarily ceased)</h3>
                    <p>
                        With a Physics and Astronomy degree, you can use your passion for physics and space to pursue careers as an astronomer, aerospace scientist, or a researcher in theoretical physics, astrophysics, as well as data analysis for space and atmospheric institutes.
                    </p>
                </div>
            </div>
            <div className="awards">
                <h1>Awards</h1>
                <div className="deanslist">
                    <h2>Deans List</h2>
                    <h3>Spring 2023, Fall 2024</h3>
                    <iframe 
                        src={ dlSpring}
                        width="700px"
                        height="400px"
                    />
                    <iframe 
                        src={ dlFall }
                        width="700px"
                        height="400px"
                    />
                </div>
            </div>
            <div className="work">
                <h1>Projects</h1>
                <div className="capstone">
                    <h2>Capstone</h2>
                    <div className="links">
                        <a 
                            href="https://drive.google.com/file/d/1AK0EZggoQ9_Lzic5AZ7MedrcSdnFdEtF/view?usp=sharing" 
                            target="_blank" >
                                Project Summary
                        </a>
                        <a 
                            href="https://drive.google.com/file/d/10idA6Ws8SkQg5rZhN3PIA4pyGOQiWS7f/view?usp=sharing" 
                            target="_blank" >
                                Project Vision
                        </a>
                        <a 
                            href="https://drive.google.com/file/d/1COWWn2d6hRRo4Rh4oL8NeIwkRsvOKkh1/view?usp=sharing" 
                            target="_blank" >
                                Project/Business Requirements
                        </a>
                        <a 
                            href="https://drive.google.com/file/d/1MAQQa710vhvDKGayytBJija6iktOZTsl/view?usp=sharing" 
                            target="_blank" >
                                Project Plan
                        </a>
                        <a 
                            href="https://drive.google.com/file/d/1NUXQdB9sSG3VVyP7pjy0pjTNOKjvZxC7/view?usp=sharing" 
                            target="_blank" >
                                Requirements Analysis and Design
                        </a>
                        <a 
                            href="" 
                            target="_blank" >
                                Wireframes/Mockups
                        </a>
                        <a 
                            href="" 
                            target="_blank" >
                                System Implementation
                        </a>
                        <ul className="statusreports">
                            <li>
                                <a 
                                    href="https://drive.google.com/file/d/1_hTsvJZhLcdrtrK4xKNvqSmpH-oajrnc/view?usp=sharing" 
                                    target="_blank">
                                        Status Report 1
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://drive.google.com/file/d/1IXUn6Mckcl6AX_4UFfiuwWN3fJ2sfZPs/view?usp=sharing" 
                                    target="_blank" >
                                        Status Report 2
                                </a>
                            </li>
                            {/* <li>
                                <a 
                                    href=""
                                    target="_blank">
                                        Status Report 3
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="android">
                    <h2>Kome Android</h2>
                    <iframe 
                        src=""
                        
                    />
                </div>
                <div className="apple">
                    <h2>Kome Mobile</h2>
                    <iframe 
                        src=""
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default Academic;
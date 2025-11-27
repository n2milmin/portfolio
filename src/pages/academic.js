import './academic.css';
import dlSpring from '../files/Dean_letter_Spring_2023.pdf';
import dlFall from '../files/Dean_letter_Fall_2024.pdf';
import screenshots from '../files/Android Prototype Screenshots.pdf';

const Academic = () => {

    return (
        <div className="academic">
            <div className="degrees">
                <h1>Education</h1>
                <div className="gbc">
                    <h2>Computer Programming and Analysis Advanced Diploma <br/>George Brown College</h2>
                    <h3>January 2023 - April 2025</h3>
                    <a 
                        href="https://www.georgebrown.ca/programs/computer-programming-and-analysis-program-online-t197" 
                        target="_blank">
                            Program Page
                    </a>
                    <p>
                        The Computer Programming and Analysis (Online) three-year advanced diploma program offers comprehensive programming and IT analysis training. As a graduate of this program, you’ll have a solid foundation to advance your career in the dynamic and constantly evolving world of IT.
                    </p>
                </div>
                <div className="uw">
                    <h2>Physics and Astronomy Honours Bachelor of Science with Co-op <br/>University of Waterloo</h2>
                    <h3>September 2019 - August 2022 (voluntarily ceased)</h3>
                    <a 
                        href="https://uwaterloo.ca/future-students/programs/physics-and-astronomy" 
                        target="_blank">
                            Program Page
                    </a>
                    <p>
                        With a Physics and Astronomy degree, you can use your passion for physics and space to pursue careers as an astronomer, aerospace scientist, or a researcher in theoretical physics, astrophysics, as well as data analysis for space and atmospheric institutes.
                    </p>
                </div>
            </div>
            <div className="awards">
                <h1>Awards</h1>
                <div className="deanslist">
                    <h2>Deans List</h2>
                    <h3 className='spring_title'>Spring 2023</h3>
                    <iframe 
                        className='spring_iframe'
                        src={ dlSpring}
                        width="700px"
                        height="400px"
                    />
                    <h3 className='fall_title'>Fall 2024</h3>
                    <iframe 
                        className='fall_iframe'
                        src={ dlFall }
                        width="700px"
                        height="400px"
                    />
                </div>
            </div>
            <div className="work">
                <h1>Projects</h1>
                
                <div className="capstone">
                    <div className='description'>
                        <h2>Capstone</h2>
                        <h3>September 2024 - April 2025</h3>
                        <p>GitHub is currently private</p>
                        <p>
                            The Healthy Food Decider app takes a user-centric, data-driven approach to meal planning. It makes it easy for users to find recipes and meal suggestions that suit their dietary needs. Key features include personalized dietary preferences, recipe recommendations, and meal history.
                        </p>
                    </div>
                    <ul className="links">
                        <h3>Relevant Documents</h3>
                        <li>
                            <a 
                                href="https://drive.google.com/file/d/1AK0EZggoQ9_Lzic5AZ7MedrcSdnFdEtF/view?usp=sharing" 
                                target="_blank">
                                    Project Summary
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://drive.google.com/file/d/10idA6Ws8SkQg5rZhN3PIA4pyGOQiWS7f/view?usp=sharing" 
                                target="_blank">
                                    Project Vision
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://drive.google.com/file/d/1COWWn2d6hRRo4Rh4oL8NeIwkRsvOKkh1/view?usp=sharing" 
                                target="_blank">
                                    Project/Business Requirements
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://drive.google.com/file/d/1MAQQa710vhvDKGayytBJija6iktOZTsl/view?usp=sharing" 
                                target="_blank">
                                    Project Plan
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://drive.google.com/file/d/1NUXQdB9sSG3VVyP7pjy0pjTNOKjvZxC7/view?usp=sharing" 
                                target="_blank">
                                    Requirements Analysis and Design
                            </a>
                        </li>
                        <li>
                            <a 
                                href="" 
                                target="_blank">
                                    Wireframes/Mockups
                            </a>
                        </li>
                        <li>
                            <a 
                                href="" 
                                target="_blank">
                                    System Implementation
                            </a>
                        </li>
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
                                target="_blank">
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
                    {/* Taken from Figma's share / embeded section */}
                    <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1);'}} width="800" height="450" src="https://embed.figma.com/proto/VOcG8YiQTFR0n53Z8MqnE7/Kome---Mobile-App?node-id=85-3573&starting-point-node-id=85%3A3573&embed-host=share" allowfullscreen></iframe>
                </div>
                
                <div className="mobile">
                    <div className='android'>
                    <h2>Kome Android</h2>
                        <h3>September 2024 - December 2024</h3>
                        <a 
                            href='https://github.com/Harrybandukda/COMP3074_GroupProject'
                            target='_blank'>
                                GitHub
                        </a>
                        , 
                        <a 
                            className='proposal'
                            href='https://drive.google.com/file/d/15Ot48pSytWlM1EwcG2kEdo0STNfkA-1C/view?usp=sharing'
                            target='_blank'>
                                Project Proposal
                        </a>
                        <p>
                            For Mobile Development I, our Capstone group built an Android prototype of the Food Decider application. Using Android Studio and Java, we created a working UI and a semi-working backend. No database data was created, but you are able to edit the user's preferences and there are a few recipes. 
                        </p>
                    </div>
                    <iframe 
                        src={ screenshots }
                        height="400px"
                    />
                    <div className="apple">
                        <h2>Kome iOS</h2>
                        <h3>January 2025 - April 2025</h3>
                        <a 
                            href='https://github.com/AnnaShiba/COMP3097_GroupProject'
                            target='_blank'>
                                GitHub
                        </a>
                        , 
                        <a 
                            className='proposal'
                            href='https://drive.google.com/file/d/1xXCS3_GxF60TgWpuiXf-PH4xHZdYu1kF/view?usp=sharing'
                            target='_blank'>
                                Project Proposal
                        </a>
                        <p>
                            For Mobile Development II, our Capstone group is building the iOS version of the Food Decider application. Using XCode, Swift, and SwiftUI, we are creating a working UI and a semi-working backend. Unfortunately, we didn't complete it, but it was a great way to learn how to make a rotund app with Swift.
                        </p>
                    </div>
                </div>

                <div className='forgottwo'> 
                    <div className='converter'>
                        <h2>Currency Converter Android App</h2>
                        <a 
                            href='https://github.com/n2milmin/101462077_COMP30744_A2.git'
                            target='_blank'>
                                GitHub
                        </a>
                        , 
                        <a  
                            href='https://www.youtube.com/watch?v=kx-kCzv4YWQ'
                            target='_blank'>
                                YouTube
                        </a>
                        <p>
                            Mobile Development I focused on AndroidStudio development early on and react-native near the end. For the final assignment, a Currency Converter, I utilized AndroidStudio and Java. With the application of an API, the app collects real-time currency rates and converts the given price to the correct currency. Feel free to watch the attached YouTube video to go through the code and demonstration. 
                        </p>
                    </div>

                    <div className='databases'>
                        <h2>Databases</h2>
                        <h3>FullStack</h3>
                        <a
                            href='https://github.com/n2milmin/COMP3133_FullStack_II/tree/master/n2milmin_COMP3133_101462077_Assignment1'
                            target='_blank'>
                            GitHub
                        </a>
                        <p>
                            For the first assignment in the FullStack II course, we were tasked with creating the backend of an application using JavaScript, Apollo, Mongoose, and Express. I enjoyed learning Apollo and how it interacts with Mongoose, but the real struggle came from merging the front and backend with the final assignment. Unfortunately, I didn't complete the assignment fully before the deadline, but I did learn how difficult proper merging can be.
                        </p>
                        <h3></h3>
                    </div>

                    <div className='microservices'>
                        <h2>Microservice Web Application</h2>
                        <a
                            href='https://github.com/n2milmin/COMP3095-Web-App-Java'
                            target='_blank'>
                            GitHub
                        </a>
                        <p>
                            The Web Application Development in Java course taught me how to create and work with microservices. We utilized the Spring Framework to develop a web application based on Servlets, JavaBeans, JavaServer Pages technology, Model-View-Controller Architecture and JavaServer Faces.
                            Topics covered included Java REST services / JUnit testing, JPA, inter-process communication, API gateways, circuit breaker pattern, event-driven architecture, Spring security front-end development with Spring MVC, database migrations, and web application logging. 
                            Programs, frameworks and libraries using in the course include; Spring, Spring Boot, Spring Cloud, Spring Actuator, Spring Hibernate, Spring Security, Java REST Services, JUnit, JPA, API gateways, JWT, MongoDB, Mongo Express, Postman, Docker, Postgres Database, PGP Admin, Bootstrap, Webflux WebClient, Eureka Server and Dashboard, IAM, Keycloak, Resilience4J, Zipkin, Apache Kafka and Kafka UI, Zookeeper, Prometheus, Grafana, OAuth2, OpenID Connect, Thymeleaf, Lombok, Liquidbase, Flyaway, Swagger, OpenAPI, Logback, ELK Stack, and Elasticsearch.
                        </p>
                    </div>

                    <div className='ml'>
                        <h2>Machine Learning Assignment</h2>
                        <a
                            href='https://youtu.be/p9_JAcJ0F_Y'
                            target='_blank'>
                            YouTube
                        </a>
                        <a
                            href='https://colab.research.google.com/drive/1ifXsm4z1OrveysiN5CAMymaR1W4Nbbph?usp=sharing'
                            target='_blank'>
                            Google Colab
                        </a>
                        <p>
                            The final project for the Machine Learning course required a demonstration of the skills learned over the year, including data preparation, data splitting, regularization, overparameterization, data augmentation, and convoluted neural networks. I chose to work with the Butterfly Image Classification dataset made by phucthaiv02 on Kaggle. Utilizing the Pandas, NumPy, TensorFlow, Scikit-learn, and Matplotlib libraries, I demonstrated my skills by creating sequential models, validating the responses against the same test data, and comparing the results. I was unable to find the completed project, but the first draft is available above. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academic;

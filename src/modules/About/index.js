import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import {Link} from "react-router-dom";
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I appreciate you giving me your time and attention so I will 
                    just give you some basic information about me.
                </p>

                <p>
                    While I do not have a very large amount of React experience, I find front end
                    development fascinating and would love to have more hands on experience with it. 
                </p>

                <p>
                    A few facts about me:
                    <ul>
                        <li>I am a Junior at the University of Dallas</li>
                        <li>Some hobbies include playing guitar, hiking, and basketball</li>
                        <li>Favorite books: "Quo Vadis", "Anna Karenina", and "My Antonia"</li>
                        <li>I am the president of the homeless ministry club on campus</li>
                    </ul>
                </p>

                <p>Below is a link to GitHub to access the code I wrote for this website.</p>


            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
            <Link to='https://github.com/TaanHabchy' className='flat-button-code'>Link To Code</Link>
        </div>

        <Loader type='pacman' />
        </>
    )
}

export default About
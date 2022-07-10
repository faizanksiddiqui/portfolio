import React from 'react'
import './styles/Section.scss'
import man2 from './assets/man2.jpg'

const Section = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={man2} alt="" />
                </div>


                <div className="section__content">
                    <h1>Who is Faizan</h1>
                    <p>1 years experience in Web Development</p>
                    <p>Professional UI & UX Designer</p>
                    <p>Working on Difference project</p>
                    <p>Knowledge of C++</p>
                    <p>Javascript Developer</p>
                    <p>React js Developer</p>
                </div>



            </div>


        </div>
    )
}

export default Section

import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <div className='my-5  '>
                <h1 className='text-center text-warning font-bold text-3xl mb-5'>About Me</h1>
                <div className='text-center'>
                    <img className='riko-image mt-9' src="images/me/profile.jpg" alt="" />
                    <h2>Syed Tarikul Islam</h2>
                    <p className='fw-bloder text-muted'>Full Stack Web Developer</p>
                    <p className='pb-1'><small className='text-muted'>email: tarikulislamriko910@gmail.com</small></p>
                </div>
                <hr className='pb-1' />
                <div className=''>
                    <p className='px-20'>About Me: This is Tarikul Islam (RIKO), A full Stack Web developer. Currently i'm graduating in Computer Science And Engineering of Bangladesh Army University of Science & Technology. I am very much interested in computer programming and web development. I also familiar with machine learning. Everyday i am learning and gathering knowledge in the sector of Computer Science. I am skilled in some programming languages and some scripting languages that is given at the bellow part of this page</p>
                </div>

                <div className='text-center skills'>
                    <br />
                    <h3>My Skills:</h3>
                    <br />
                    <div>
                        <div className='grid grid-cols-6 '>
                            <img src="images/skills/c.png" alt="" />
                            <img src="images/skills/c++.png" alt="" />
                            <img src="images/skills/javascript.png" alt="" />
                            <img src="images/skills/python.png" alt="" />
                            <img src="images/skills/bootstrap.png" alt="" />
                            <img src="images/skills/tailwind.png" alt="" />
                        </div>
                        <br />
                        <div className='grid grid-cols-4 '>
                            <img src="images/skills/firebase.png" alt="" />
                            <img src="images/skills/html.png" alt="" />
                            <img src="images/skills/css.png" alt="" />
                            <img src="images/skills/react.png" alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <div className='text-center mt-5 mb-10'>
                    <h3>My Goals: </h3>
                    <ul>
                        <li>Becaome a brilliant React developer</li>
                        <li>I want to mastering in javascript</li>
                        <li>My ambition is to get a job as a web developer</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
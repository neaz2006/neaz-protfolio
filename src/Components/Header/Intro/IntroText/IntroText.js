import React from 'react';
import Typewriter from 'typewriter-effect';

const IntroText = () => {

    return (
        <>

            <h5>Hello , I'm </h5>
            <h1>Neaz Mahmud Mozumder</h1>
            <h4><Typewriter
                options={{
                    strings: ['Web Developer', 'Pogramer'],
                    autoStart: true,
                    loop: true,
                }}
            /></h4>
            <br />
            <p>
                A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
            </p>
            <a href="/" className="btn btn-info" style={{marginBottom: "40px"}}>Get in touch </a>

        </>
    );
};

export default IntroText;
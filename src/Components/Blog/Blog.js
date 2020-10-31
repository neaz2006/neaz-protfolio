import React from 'react';
import { Container } from 'react-bootstrap';
import { FaMediumM } from 'react-icons/fa';
import './Blog.css'

const Blog = () => {
    return (

        <Container>
            <h1 className="text-center mt-5" >My Blog</h1>
            <section className="row text-center">
                <div class="card mt-5" >
                    <img src="https://i.ibb.co/BwBTR27/1-WY4-Hy-Ts4kh-PJq-PAX2f-CMg.jpg" class="card " alt="..."></img>
                    <div class="card mt-5-body">
                        <h5 class="card mt-5-title">Top 10 questions For interview</h5>
                        <p class="card mt-5-text mt-3">What is Event in JavaScript ?
                        Answer : Events are actions or occurrence that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user clicks a button on a webpage you might want to respond to that action by displaying an information box  
                        2 . How Event Handler work in JavaScript?       
                                ....</p>
                        <a href="https://medium.com/p/a6751f1f999f/edit" class="btn btn-info">More info......<span className="icon__style"><FaMediumM /></span></a>   
                    </div>
                </div>
                <div class="card mt-5" >
                    <img src="https://i.ibb.co/tprs1jg/1-a-Lg1-G2-UAla-Kp-Bop-Rnm-CRg.png" class="card " alt="..."></img>
                    <div class="card mt-5-body">
                        <h5 class="card mt-5-title">Introduction to React.js</h5>
                        <p class="card mt-5-text mt-3 ">React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications....</p>
                        <a href="https://neazmozumder.medium.com/how-to-started-with-react-router-bcb6ad5c4ec1" class="btn btn-info">More info......<span className="icon__style"><FaMediumM /></span></a> 
                    </div>
                </div>
                <div class="card mt-5">
                    <img src="https://i.ibb.co/5j7p0T6/1-QDme-Wi-xn-Fxzfwbs-Trxun-Q.jpg" class="card " alt="..."></img>
                    <div class="card mt-5-body">
                        <h5 class="card mt-5-title">JavaScript Summary !</h5>
                        <p class="card mt-5-text mt-3">JavaScript is a single thread, prototype based programming language that support 
                        multiple programming paradigm like Object Oriented programming, functional programming and procedural .
                        Hence javascript is single thread programming language that work synchronously from its born habit, but it can do some asynchronous job by help ...</p>
                        <a href="https://neazmozumder.medium.com/javascript-summary-beacdf0ef2a6" class="btn btn-info">More info......<span className="icon__style"><FaMediumM /></span></a> 
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Blog;
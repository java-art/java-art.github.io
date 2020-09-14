import {Link} from 'react-router-dom'
import React, {Component} from "react";

class FooterHandler extends Component {

    render() {
        return <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Online<span>Java</span>Class</h3>

                <p className="footer-company-name">&copy;Copyright 2015-2020 All rights reserved.<br/> This blog is
                    fully run by myself and the powerful React framework</p>
            </div>

            <div className="footer-center">

                <div>
                    <Link to="about" >
                        <i className="fap fap-avatar"/>
                        About Me
                    </Link>
                </div>
                <div>
                    <Link to="privacy" >
                        <i className="fap fap-privacy"/>
                        <p>Privacy Policy</p>
                    </Link>
                </div>
                <div>
                    <Link to="terms" >
                        <i className="fap fap-terms"/>
                        <p>Terms of Use</p>
                    </Link>
                </div>
                <div>
                    <i className="fap fap-mail"/>
                    <p><a href="mailto:support@company.com">contact@onlinejavaclass.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About Online Java Class</span>
                    Online Java Class has different classes in Java for beginners and professionals.
                </p>

                <div className="footer-icons">
                    <a href="#"><i className="fap fap-linkedin"/></a>
                    <a href="#"><i className="fap fap-github"/></a>
                </div>

            </div>

        </footer>;
    }
}
export default FooterHandler;
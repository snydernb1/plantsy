import './Footer.css'
import img from './imgs/footer-med.png'

export default function Footer ({}) {
    return (
        <footer id='footer'>

            <div className='footerGithub'>
                <h3>Have a question? Well, I've got some answers.</h3>
                <div className='links'>
                    <a href='https://github.com/snydernb1' target='_blank' className="githubLink" id='githibLink'>
                    <i className="fa fa-github" />
                    <p>Nick Snyder</p>
                    </a>
                    <a href='https://www.linkedin.com/in/nicholas-snyder-2714a5a1/' target='_blank' className="githubLink" id='githibLink'>
                    <i className="fa fa-linkedin" />
                    <p>Nick Snyder</p>
                    </a>
                </div>
            </div>

            <img src={img} id='footerImg'/>
            <section className='footerBot'>
                <div>
                    <p className='footerBotBold'>United States  |  English (US)  |  $ (USD)</p>
                </div>
                <div className='footerBotRight'>
                    <p className='footerBotBold'>2023 Plantsy</p>
                    <a href='https://www.python.org/' target='_blank' className='techLinks'>Python</a>
                    <a href='https://flask.palletsprojects.com/en/1.1.x/' target='_blank' className='techLinks'>Flask</a>
                    <a href='https://docs.sqlalchemy.org/en/13/' target='_blank' className='techLinks'>SQLAlchemy</a>
                    <a href='https://www.javascript.com/' target='_blank' className='techLinks'>JavaScript</a>
                    <a href='https://react.dev/' target='_blank' className='techLinks'>React</a>
                    <a href='https://redux.js.org/' target='_blank' className='techLinks'>Redux</a>
                    <a href='https://www.w3.org/Style/CSS/Overview.en.html' target='_blank' className='techLinks'>CSS</a>
                </div>
            </section>

        </footer>
    );
};

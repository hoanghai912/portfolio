import { Link } from 'react-router-dom'

import './About.css'

function About() {

    return (
        <div className='about background-all'>
            <div className='about__wrapper'>
                <h1 className='about_title-all'>About me</h1>

                <div className='about__content'>

                    <div className='about__left'>
                        <img className='about__left__avatar' src='avatar.jpg' alt="avatar">
                        </img>

                        <a 
                            style={{display:"block"}} 
                            className='about__left__cv-vi btn' 
                            href='https://hoanghai912.github.io/mycv/'
                            target='_blank'
                        >My CV (Vietnamese)</a>
                        <div className='about__left__cv-en btn'>My CV (English)</div>

                        <Link to='/contact'>
                            <div className='about__left__contact btn'>Contact</div>
                        </Link>

                        <a 
                            className='about__left__github btn'
                            href='https://github.com/hoanghai912'
                            target='_blank'
                            style={{display:"block"}}
                        >GitHub</a>
                    </div>
                    
                    <div className='about__right'>
                        <div className='about__right__title'>Hello, I'm Hai</div>
                        <div className='about__right__shortDesc'>A Web developer with strength in front-end</div>

                        <div className='about__right__desc'>
                            I'm a front-end developer who still needs to gain more work experience. 
                            However, with enthusiasm and passion for this field, I will constantly learn 
                            and strive to develop myself and pursue my dreams.
                        </div>

                        <div className='about__right__info'>
                            <h3>Some Info</h3>
                            <ul>
                                <li>My full name is Hoang Tien Hai, but you can call me Hai if you'd like.</li>
                                <li>I was born and raised in Dong Nai, Viet Nam</li>
                                <li>My birth year is 2002, a nice number.</li>
                                <li>My childhood dream was to be a programmer.</li>
                                <li>I have been exposed to many other programming languages such as Pascal, C++, C#, AutoIT, Python, JavaScript, and more.</li>
                                <li>The life motto that I follow is "Do your best or Nothing".</li>
                                <li>I can describe my strengths in short: Curiosity and passion.</li>
                            </ul>
                        </div>
                        <div className='about__right__hobbies'>
                            <h3>Some Hobbies</h3>
                            <ul>
                                <li>Coding 🧑‍💻</li>
                                <li>Football ⚽️⚽️</li>
                                <li>Enjoy old music and play the guitar 🎧🎸</li>
                                <li>Curious about new things ⚙️💡</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
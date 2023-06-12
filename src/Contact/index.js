

import './Contact.css'

function Contact() {

    return (
        <div className='contact background-all'>
            <div className='contact__wrapper'>
                <h1 className='contact__fullTitle'>Contact me</h1>

                <div className='contact__wrapper__group'>
                    <div className='contact__wrapper__group__email'>
                        <i className="fa-solid fa-envelope icon"></i>
                        <p className='contact_title'>Email</p>
                        <p style={{fontSize:"1.2em"}}>haih2212@gmail.com</p>
                    </div>

                    <div className='contact__wrapper__group__phone contact__wrapper__group-decMargin'>
                        <i className="fa-solid fa-phone icon"></i>
                        <p className='contact_title'>Phone</p>
                        <p style={{fontSize:"1.2em"}}>+84943901138</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
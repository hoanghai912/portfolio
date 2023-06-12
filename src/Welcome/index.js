import { Link } from "react-router-dom"
import "./Welcome.css"

function Welcome() {

    function Button({name, className, iconClass}) {
        return (
            <div className={className}>
                <i className={iconClass}></i>
                <p>{name}</p>
            </div>
        )
    }

    return (
        <div className="welcome">
            <div className="background"></div>
            <div className="welcome__wrapper">

                <h1 className="welcome__title" style={{textAlign:"center"}}>Welcome to my Portfolio</h1>
                <div className="welcome__btnGr">
                    <Link to='/' className="welcome__btnGr-link">
                        <Button className="welcome__btnGr__btn" name="Home" iconClass="fa-solid fa-house fa-2x icon"/>
                    </Link>
                    
                    <Link to='/about' className="welcome__btnGr-link">
                        <Button className="welcome__btnGr__btn" name="About Me" iconClass="fa-solid fa-circle-info fa-2x icon"/>
                    </Link>

                    <Link to='/projects' className="welcome__btnGr-link">
                        <Button className="welcome__btnGr__btn" name="My Project" iconClass="fa-solid fa-diagram-project fa-2x icon"/>
                    </Link>
                    
                    <Link to='/contact' className="welcome__btnGr-link">
                        <Button className="welcome__btnGr__btn" name="Contact" iconClass="fa-solid fa-address-book fa-2x icon"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome
import { Link } from 'react-router-dom'

import './Sidebar.css'

function Sidebar() {
    function Button({className, iconClass}) {
        return (
            <div className={className}>
                <i className={iconClass}></i>
            </div>
        )
    }

    return (
        <div className='sidebar'>
            <Link to='/' className="sidebar__link">
                <Button className="sidebar__btn" iconClass="fa-solid fa-house fa-2x icon"/>
            </Link>
            
            <Link to='/about' className="sidebar__link">
                <Button className="sidebar__btn" iconClass="fa-solid fa-circle-info fa-2x icon"/>
            </Link>

            <Link to='/projects' className="sidebar__link">
                <Button className="sidebar__btn" iconClass="fa-solid fa-diagram-project fa-2x icon"/>
            </Link>
            
            <Link to='/contact' className="sidebar__link">
                <Button className="sidebar__btn" iconClass="fa-solid fa-address-book fa-2x icon"/>
            </Link>
        </div>
    )
}

export default Sidebar
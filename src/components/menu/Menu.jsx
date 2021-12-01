import './menu.scss';

const Menu = (props) => {
    return (
        <div className={'menu ' + (props.menuOpen && 'active')}>
        <ul>
            <li onClick={props.setMenuOpen}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={props.setMenuOpen}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li onClick={props.setMenuOpen}>
                <a href='#works'>Works</a>
            </li>
            <li onClick={props.setMenuOpen}>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li onClick={props.setMenuOpen}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>

        </div>
    )
}

export default Menu;
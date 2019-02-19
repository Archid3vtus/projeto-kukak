import React from 'react';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <div className={"nav-wrapper " + props.color}>
                    <a href="./" className="brand-logo center">{props.title}</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
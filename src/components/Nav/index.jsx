import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';

Nav.propTypes = {
    
};

function Nav(props) {
    return (
        <nav>
            <a href="#">Thịnh hành</a>
            <a href="#">Quan tâm</a>
            <a href="#">Cộng đồng</a>
            <div class="animation"></div>
        </nav>
    );
}

export default Nav;
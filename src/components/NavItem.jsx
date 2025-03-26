import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.js";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(TwitterContext);
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;
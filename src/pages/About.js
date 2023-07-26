import React from 'react';
import {Link} from 'react-router-dom';
import Backdrop from '../components/About/Backdrop/Backdrop';
import DrawerAppBar from '../components/AppBar/DrawerAppBar';

export default function About() {

    return(
        <>
            <DrawerAppBar />
            <Backdrop />
        </>
    );

}
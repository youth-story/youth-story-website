import React from 'react';
import Heading from './Heading';

export default function Backdrop() {
    return(
        <div style={{color: 'black',border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Heading />
        </div>
    );
}
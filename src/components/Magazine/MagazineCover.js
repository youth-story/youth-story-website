import React from 'react';
import {Link} from 'react-router-dom';

export default function MagazineCover({title, info, editor, editorPic, date, cover, tag, edition}) {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
        },
        content: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        magazineCover: {
            width: '50%',
            height: '50%',
        },
    };

    return (
        <>
            <div style={styles.container}>
                <img src={cover} alt='Magazine Cover' style={styles.magazineCover} />
                <div style={styles.content}>
                    <h1>{title}</h1>
                    <p>{info}</p>
                </div>
            </div>
        </>
    );

}
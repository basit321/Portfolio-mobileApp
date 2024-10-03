import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image }) {
    const { theme } = useContext(ThemeContext);
    const useStyles = makeStyles(() => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 35,
            height: 35,
            borderRadius: 50,
            border: `1px solid #FFF`,
            color: '#FFF',
            transition: 'all 0.3s',
            '&:hover': {
                backgroundColor: '#333',
                color: '#FFF',
                transform: 'scale(1.1)',
            },
        },
        icon: {
            fontSize: '1.2rem',
            transition: 'all 0.2s',
        },
    }));

    const classes = useStyles();

    return (
        <div key={id} className='singleProjectDark'
        style={{ backgroundColor: theme.primary400 }}
        >
            <div className='projectImageWrapper'>
                <img src={image} alt={name} className='projectImage' />
            </div>
            <div className='projectContentDark'>
                <h2 className='projectTitleDark'>{name}</h2>
                <p className='projectDescDark'>{desc}</p>
              
                <div className='projectTags'>
                    {tags.map((tag, id) => (
                        <span key={id} className='projectTag'>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleProject;

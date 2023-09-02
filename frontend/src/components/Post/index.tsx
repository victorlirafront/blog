import StyledPost from './Post.styled';
import Link from 'next/link';
import { removeEspecialChars } from '../../helperFunctions/removeEspecialChars'
import dateFormatter from '@/helperFunctions/dateFormatter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Post = function (props: any) {
    const dateObject = new Date(props.date);
    const formattedDate = dateObject.toLocaleDateString();
    
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <StyledPost 
            data-aos-delay="100" 
            data-aos="fade-up" 
            style={props.style} >
            <div
                className="post-image"
                style={{ backgroundImage: `url(${props.post_image})` }}
            ></div>
            <div className="post-body">
                <div className="category-wrapper">
                    <p className="post-date">{dateFormatter(formattedDate)}</p>
                    <p className="post-category">javascript</p>
                </div>

                <h1 className="post-title">{props.title}</h1>
                <p className="post-content">
                    {props.content.length > 100
                        ? removeEspecialChars(props.content.substring(0, 100)) + ' ...'
                        : removeEspecialChars(props.content)}
                </p>

                <ul className="post-author">
                    <li>Autor: {props.author}</li>
                </ul>

                <Link
                    href={`Posts/${props.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <div className="read-more-wrapper">
                        <p>Leia mais</p>
                        <img src="./arrow-right.png?v=3" />
                    </div>
                </Link>
            </div>
        </StyledPost>
    );
};

export default Post;

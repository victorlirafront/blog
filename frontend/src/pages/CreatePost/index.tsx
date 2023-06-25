import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Axios from 'axios';
import { StyledCreatePost } from './CreatePost.styled';

const CreatePost = function () {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const submitPost = function (e: any) {
        e.preventDefault();

        Axios.post('http://localhost:3001/api/create', {
            author: author,
            title: title,
            content: content,
            category: category,
            date: new Date().toISOString(),
        });
    };

    return (
        <React.Fragment>
            <Header />
            <StyledCreatePost>
                <form id="form">
                    <div className="form-control username">
                        <label htmlFor="username">Autor</label>
                        <input
                            id="username"
                            type="text"
                            onChange={e => {
                                setAuthor(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-control title">
                        <label htmlFor="title">Título</label>
                        <input
                            id="title"
                            type="text"
                            onChange={e => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-control category">
                        <label htmlFor="category">Categoria</label>
                        <input
                            id="category"
                            type="text"
                            onChange={e => {
                                setCategory(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="post-text">Conteúdo</label>
                        <textarea
                            id="post-content"
                            onChange={e => {
                                setContent(e.target.value);
                            }}
                        ></textarea>
                    </div>

                    <div className="form-control meta-title">
                        <label htmlFor="meta-title">Meta tag - Title</label>
                        <input
                            id="meta-title"
                            type="text"
                            // onChange={e => {
                            //     setCategory(e.target.value);
                            // }}
                        />
                    </div>

                    <div className="form-control meta-description">
                        <label htmlFor="meta-description">
                            Meta tag - Description
                        </label>
                        <input
                            id="meta-description"
                            type="text"
                            // onChange={e => {
                            //     setTitle(e.target.value);
                            // }}
                        />
                    </div>

                    <button className="submit" onClick={submitPost}>
                        submit
                    </button>
                </form>
            </StyledCreatePost>
        </React.Fragment>
    );
};

export default CreatePost;

import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/layout/Header';
import { GetStaticProps } from 'next';
import MainPage from './MainPage';
import Post from '@/components/Post';
import About from '@/components/About';

export default function Home({ data }: any) {
    return (
        <Fragment>
            <Head>
                <title>My personal blog</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <About/>
            <MainPage>
                {data.map((value: any, index: any) => {
                    return (
                        <Post
                            key={value.id}
                            id={value.id}
                            title={value.title}
                            content={value.content}
                            author={value.author}
                            meta_tag_title={value.meta_tag_title}
                            meta_tag_description={value.meta_tag_description}
                            post_image={value.post_image}
                            date={value.date}
                        />
                    );
                })}
            </MainPage>
        </Fragment>
    );
}

export interface MyComponentProps {
    data: any;
}

export const getStaticProps: GetStaticProps<MyComponentProps> = async () => {
    const response = await fetch('http://localhost:3001/api/get');
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
};

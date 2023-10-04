import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import MainPage from './MainPage';
import Post from '@/components/Post';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Axios from 'axios';
import Pagination from '@/components/Pagination';
import { GetStaticProps } from 'next';

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
                <link rel="icon" href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/js_QxOIctz2p.png?updatedAt=1688608526457" />
            </Head>
            <Header />
            <About/>
            <MainPage>
                <div className="container">
                    {data.results.map((post: any, index: any) => {
                        let costumizeFirstPost = false;

                        index === 0 ? costumizeFirstPost = true : false
                        
                        const styled = {
                            minWidth: "calc(66.66667% - 40px)"
                        }

                        return (
                            <Post
                                style={costumizeFirstPost ? styled : {}}
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                                meta_tag_title={post.meta_tag_title}
                                meta_tag_description={post.meta_tag_description}
                                post_image={post.post_image}
                                date={post.date}
                            />
                        );
                    })}
                </div>
            </MainPage>
            <Pagination/>
            <Footer/>
        </Fragment>
    );
}

export interface MyComponentProps {
    data: any;
}

export const getStaticProps = async () => {
    try {
        const response = await Axios.get('https://blog-backend-tau-three.vercel.app/api/get?page=1&limit=5');
        const data = response.data; // Extract data from the response

        return {
            props: {
                data // Pass the extracted data as props
            },revalidate: 10, // In seconds
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                data: [] // Return an empty array or handle the error as needed
            }
        };
    }
};
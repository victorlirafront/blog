import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import MainPage from './MainPage';
import Post from '@/components/Post';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Axios from 'axios';
import Pagination from '@/components/Pagination';
import { GlobalContext } from '../Context/pagination';
import { useContext } from "react";
import { useEffect } from 'react';

interface IPost {
    id: any
    title: string
    content: string
    date: string
    category: string
    meta_tag_title: string
    meta_tag_description: string
    post_image: string
    author: string
}

interface IData {
    data: {
        totalPages: number
        next: {
            page: number
            limit: number
        }
        previous: {
            page: number
            limit: number
        }
        results: IPost[]
    }
}

export default function Home({ data }: IData) {
    let { setPage } = useContext(GlobalContext);

    useEffect(() => {
        setPage(data.next?.page);
    }, [])

    const checkNextPage = function () {
        if (data?.next) {
            return true
        } else {
            return false
        }
    }

    const checkPreviousPage = function () {
        if (data?.previous) {
            return true
        } else {
            return false
        }
    }

    return (
        <Fragment>
            <Head>
                <title>Victor Lira | Blog</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/binary-code_WBpGXnWnG.png?updatedAt=1700431546132" />
            </Head>
            <Header />
            <About />
            <MainPage>
                <div className="container">
                    {data.results.map((post: IPost, index: number) => {
                        let costumizeFirstPost = false;

                        index === 0 ? costumizeFirstPost = true : false

                        const styled = {
                            width: "calc(66.66667% - 40px)",
                            minWidth: "300px"
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
                                category={post.category}
                            />
                        );
                    })}
                </div>
            </MainPage>
            <Pagination pageLength={Math.ceil(data.totalPages)} page={data?.next?.page - 1} hasNextPage={checkNextPage()} hasPreviousPage={checkPreviousPage()} />
            <Footer />
        </Fragment>
    )
}

export const getServerSideProps = async (context: any) => {
    try {
        const page = "1"
        const limit = "8"
        const category = "all"
        const response = await Axios.get(`http://localhost:3001/api/get?page=${page}&limit=${limit}&category=${category}`);
        const data = response.data; // Extract data from the response

        return {
            props: {
                data // Pass the extracted data as props
            },
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
import { Fragment } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutMe = function () {
    return (
        <Fragment>
            <Head>
                <title>About me | blog</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/binary-code_WBpGXnWnG.png?updatedAt=1700431546132"
                />
            </Head>
            <Header/>

            <Footer />
        </Fragment>
    );
};

export default AboutMe;

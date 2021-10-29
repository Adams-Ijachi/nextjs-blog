import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from './../../components/layout';



const FirstPost = () => {

    return ( 
        <Layout >
            <div className={""}>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1 >First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Second Post</a>  
                    </Link>

                </h2>

                <Image src="/images/profile.jpg" alt="First Post" width={400} height={400} />
            </div>
        </Layout>
     );
}
 
export default FirstPost;

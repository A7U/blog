import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '../../components/nav';
import 'react-quill/dist/quill.snow.css';
// github test
const Post = () => {
    const router = useRouter();
    const { title } = router.query;

    const [post, showPost] = useState("");
    useEffect(() => {
        fetch(`/api/fetchPost?title=${title}`)
        .then(res => res.json())
        .then(json => showPost(json))
    });

    let Post = Object.values(post);

    return(

        Post.map(p => {
            return(
            
            <div className={"min-h-screen min-w-screen bg-gray-900"}>

            <Head>
                <title>Blog - Ok</title>
            </Head>

            <Navigation/>

            <div className={"flex flex-row justify-center p-12"}>
            <div className={"grid shadow-2xl p-6 max-w-4xl px-12"}>
                <h1 className={"text-white text-bold text-8xl text-center p-6"}>{p.title}</h1>
                <div className={"text-white ql-align-center"}>
                    <div dangerouslySetInnerHTML={{__html: p.message}}></div>
                    
                </div>
            </div>
            </div>




            
            </div>
            
            )

        })

    )

}

export default Post
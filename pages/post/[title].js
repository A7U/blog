import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '../../components/nav';
import ReactMarkdown from 'react-markdown'

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
                let title = p.title.replace(/-/g, ' ')
                return(
                
                <div className={"min-h-screen min-w-screen bg-gray-900"}>
    
                <Head>
                    <title>{title}</title>
                    <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"></link>
                </Head>
    
                <Navigation/>
    
                <div className={"flex flex-row justify-center p-12"}>
                <div className={"grid shadow-2xl p-6 max-w-4xl px-12"}>
                    <h1 className={"text-white text-bold text-8xl text-center p-6"}>{title}</h1>
                    <div className={"text-white ql-align-center"}>
                        {/* <div dangerouslySetInnerHTML={{__html: p.message}}></div> */}
                        <ReactMarkdown>{p.message}</ReactMarkdown>
                    </div>
                </div>
                </div>
                
                </div>
                
                )
    
            })
    
        )
    }

export default Post
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import moment from 'moment';
import Loading from './postLoading';
import Broken from './notFound';

function Posts() {

    const [posts, setPosts] = useState("");
    const [loading, setLoading] = useState(false);
    const [notFound, setnotFound] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('/api/fetch')
        .then(res => res.json())
        .then(async json => {
        if(json.length < 1) { setLoading(false);  setnotFound(true)}
         await setPosts(json)
         setLoading(false)
        })
    }, []);

    let Post = Object.values(posts)
    if(loading === true) {
        return(<Loading />)
    }
    if(notFound === true) {
        return(<Broken />)
    }
    return(
    <>
        {Post.map(e => {
            let title = e.title.replace(/-/g, ' ')
                    return(
            <div key={title}>
                <Head>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin={"anonymous"}></link>
                </Head>
                <div className={"flex flex-row text-white items-center justify-center p-8 w-full "}>
                    <Link href={`/post/${e.title}`}>
                        <div className="hover:shadow-2xl text-center bg-gray-800 w-max transition duration-200 ease-in-out transform hover:scale-105">
                            <img src={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2Fc%2F2%2F679702.jpg&f=1&nofb=1"} className={"max-w-4xl"}/>
                            <div className={"p-4"}>
                                <a className={"font-bold text-5xl"}>{title}</a>
                                <div className={'py-2 text-gray-400'}>
                                    <div>
                                        <i className={"fas fa-clock"}/> {moment(e.date).format('DD MMM YYYY')} 
                                    </div>
                                    <i className={"far fa-user"}/> {e.poster}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
      })}
    </>
    )
}


export default Posts
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import moment from 'moment';
import Loading from './postLoading';

function Posts() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    const [posts, setPosts] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('/api/fetch')
        .then(res => res.json())
        .then(async json => {
         await setPosts(json)
         setLoading(false)
        })
    }, []);

    let Post = Object.values(posts)
    if(loading === true) {
        return(
            Post.map(() => {
                return(<Loading />)
            })
        )
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
                        <div className="hover:shadow-2xl p-6 text-center bg-gray-800 w-6/12 transition duration-200 ease-in-out transform hover:scale-105">
                            <img src={"https://via.placeholder.com/1920"} width="500" height={"500"} className={"w-96 p-4 mx-auto"}/>
                            <a className={"font-bold text-5xl"}>{title}</a>
                            <div className={'p-2 text-gray-400'}>
                                <div>
                                    <i className={"fas fa-clock"}/> {moment(e.date).format('DD MMM YYYY')} 
                                </div>
                                <i className={"far fa-user"}/> {e.poster}
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
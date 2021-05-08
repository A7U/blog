import Head from 'next/head';

export default function NotFound() {
    return(
        <>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin={"anonymous"}></link>
            </Head>
            <div className={"flex flex-row text-white items-center justify-center p-8 w-full"}>
                <div className="hover:shadow-2xl p-64 text-center text-3xl bg-gray-800 w-6/12 transition duration-200 ease-in-out transform hover:scale-105">
                    <i class="fas fa-exclamation-triangle"></i> No posts found!
                </div>
            </div>
        </>
    
    )
}
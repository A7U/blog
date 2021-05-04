import Head from 'next/head';

export default function Loading() {
    return(

        <>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin={"anonymous"}></link>
            </Head>
            <div className={"flex flex-row text-white items-center justify-center p-8 w-full animate-pulse"}>
                <div className="hover:shadow-2xl p-60 text-center bg-gray-800 w-6/12 transition duration-200 ease-in-out transform hover:scale-105">
                    <i className={"fas fa-circle-notch animate-spin"}></i>
                </div>
            </div>
        </>
    
    )
}
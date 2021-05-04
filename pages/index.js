import Head from 'next/head'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Posts from '../components/posts'
import Navigation from '../components/nav';

export default function Home() {

  return (
    <div className={'bg-gray-900'}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={"min-h-screen"}>
        <div className={"text-center md:text-left p-10 text-white"}>
          <h1 className={"text-4xl"}>
            <strong>Blog - made with NextJS</strong>
          </h1>
        </div>

          <div>
            <Posts/>
          </div>

        </main>
    </div>
  )
}

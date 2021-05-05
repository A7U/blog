import Head from "next/head";
import Navigation from '../../components/nav';
import CreatePost from '../../components/createPost';

export default function Create() {

  return (
    <div className={"bg-gray-900 min-h-screen"}>
      <Head>
        <title>Create new post</title>
      </Head>

      <Navigation />
      <main>
          <div className={"flex flex-row justify-center p-12 m-12"}>
            <CreatePost/>
          </div>
      </main>
     
    </div>
  );
}

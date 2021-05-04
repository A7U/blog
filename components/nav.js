import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <div className={"flex justify-between p-6 text-white bg-gray-800"}>
        <Link href="/">
          <button
            className={
              "rounded-md bg-gray-600 w-20 h-10 hover:bg-gray-700 transform hover:scale-110 transition duration-300 ease-in-out shadow-2xl"
            }
          >
            Home
          </button>
        </Link>
        <Link href="/post/create">
          <button
            className={"rounded-md bg-gray-600 w-20 h-10 hover:bg-gray-700 transform hover:scale-110 transition duration-300 ease-in-out"}
          >
            Post
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;

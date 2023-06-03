import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { useState } from "react";
import Logo from "@/components/Logo";
import Loading from "@/pages/Loading";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="bg-black min-h-screen">
        <Loading />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="bg-gray-800 rounded-lg shadow p-6 w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-gray-200 text-2xl font-semibold">
            Hello, <span className="text-white">Guest</span>
          </h2>
          <p className="text-gray-300 mt-2">
            You need to sign in to access this page.
          </p>
          <div className="text-center w-full gap-3 pt-8">
            <button
              onClick={() => signIn("google")}
              className="bg-white p-2 px-4 rounded-lg"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
}

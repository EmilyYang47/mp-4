'use client'

import Link from "next/link";
import {useState} from "react";

export default function Home() {
    const [keyword, setKeyword] = useState("");
    return (
        <main className="flex flex-col items-center min-h-screen w-[95vw] mx-8 pt-28 bg-blue-100">
          <div className="w-full max-w-lg shadow-xl bg-white rounded-3xl ">
            <div className="text-center">
                    <h2 className="text-3xl font-bold p-2">Icon Finder</h2>
                    <p className="text-neutral-500">
                        Search for icons by entering keyword
                    </p>
            </div>

            <div>
              <div className="py-3 px-7">
                  <label htmlFor="keyword" className="font-semibold">
                      keyword
                  </label>
                  <div className="relative">
                    <input
                        id="keyword"
                        placeholder="e.g. arrow, baloon, cake"
                        value={keyword}
                        className="border-2 w-full p-2 rounded-lg"
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                    />
                  </div>
              </div>

              <div className="text-center">
                <Link
                    href={`/${keyword}`}
                    className="inline-block text-white bg-blue-700 hover:bg-sky-600 active:bg-sky-900 active:translate-y-[0.3vh] transform font-medium rounded-lg text-sm px-50 py-2.5 my-5"
                >
                    Get Icon
                </Link>
              </div>
            </div>
          </div>
        </main>


    );
}
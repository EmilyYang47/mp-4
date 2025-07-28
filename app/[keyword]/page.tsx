import Icon from "../../components/Icon";
import Loading from "../../components/Loading";
import {Suspense} from "react";

export default async function IconPage({params,}: {params: Promise<{keyword: string}>;}) {
    const keyword = decodeURIComponent((await params).keyword);

    return (
        <main className="flex flex-col items-center min-h-screen w-[95vw] mx-8 py-10 bg-blue-100">
            <Suspense
                fallback={
                    <main className="flex flex-col items-center justify-center">
                        <Loading/>
                    </main>
                }
            >
                <Icon keyword={keyword}/>
            </Suspense>
        </main>
    );
}
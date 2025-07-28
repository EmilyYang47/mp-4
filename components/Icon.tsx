import getIcon from "@/lib/getIcon";
// import Image from 'next/image';

export default async function Icon({keyword}: { keyword: string }) {
    const iconData = await getIcon(keyword);

    console.log(iconData); 

    if (!iconData) {
        return (
            <main className="flex flex-col items-center justify-center pt-48">
                <div className="min-w-64 max-w-64 shadow-lg bg-white p-8 rounded-xl">
                    {iconData === undefined ? (
                        <p className="text-center">
                            Oh no! We couldn&apos;t find any weather information for{" "}
                            <span className="underline">{keyword}</span>
                        </p>
                    ) : (
                        <p className="text-center">
                            Something went wrong while calling API for weather data. Please
                            try again later.
                        </p>
                    )}
                </div>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-6xl shadow-xl bg-white p-4 rounded-2xl">
                <header className="text-center">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold">Icons related to {keyword}</h2>
                        <div className="w-9"/>
                        {/* Spacer for alignment */}
                    </div> <br/>
                </header>
                <div>
                    <h3 className="mb-4 text-xl font-semibold">Icons</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                        {
                            iconData.imageUrlArray.map((imageUrl) =>
                                (                                    
                                    <img src={imageUrl} alt="image" key={imageUrl}/> 
                                    
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );

    
}
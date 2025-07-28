import Link from "next/link"; 

export default function Footer(){
    return(
        <>
            <footer className="bg-gray-100 p-2" >
                <p>All Rights Reserved by Emily Yang <Link href="../credits/credits.html"> Credits</Link> &copy;</p>
            </footer>
        </>
    )
}

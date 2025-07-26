'use client'

import Link from "next/link";
import {useState} from "react";


// const StyledMain=styled.main`
//     height: 100vh;
//     margin: auto; 
//     padding-top: 4%; 
// `;

// const StyledForm=styled.div`
//     background-color: rgb(249, 220, 219); 
//     width: 60%;
//     border-radius: 3vw; 
//     margin:7% auto; 
//     padding: 1.5%; 
//     text-align: center; 

//     // creates a shadow of this object: 
//     // first parameter is the horizontal location from object, 
//     // second parameter is vertical location from object, 
//     // third parameter is the blur, 
//     // fourth parameter is the color of shadow. 
//     // Resource: https://www.w3schools.com/css/css3_shadows_box.asp 
//     box-shadow:0.5vw 0.5vw 0.5vw #999; 
// `; 

// const StyledLink = styled(Link)`
//     text-align: center;
//     margin: 5% auto;
//     width: 17%; 
//     background-color:rgb(228, 136, 93); 
//     border-radius: 10vw; 
//     padding: 1.8%;

//     // change curser to pointer when it is placed on the button. 
//     // Resource: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3 
//     cursor: pointer;
//     box-shadow: 0.1vw 0.1vw 0.1vw #999; 

//     // add the hover and active effects using "&"
//     // Resource: https://codesandbox.io/p/sandbox/styled-components-hover-dduyd?file=%2Fsrc%2FApp.js%3A12%2C4-13%2C11 
    
//     /* change color of button to rgb(245, 111, 49) when the cursor hovers on the button. 
//     Resource: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3 */
//     &:hover {
//         background-color: rgb(245, 111, 49); 
//     }

//     /* change color of button to rgb(245, 111, 49) and move the button 0.3vh downward when the button is being clicked. 
//     Resource: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3 */
//     &:active {
//         background-color: rgb(245, 111, 49);
//         transform: translateY(0.3vh);
//     }
// `; 

// const StyledH3=styled.h3`
//     color: rgb(230, 81, 12); 
//     font-size: calc(2px + 3.2vh); 
// `; 
// const StyledPCenter=styled.p`
//     font-size: calc(2px + 1.9vh); 
//     margin-top: 0.6%; 
//     margin: auto; 
// `; 

// const StyledP=styled.p`
//     font-size: calc(2px + 1.9vh); 
//     margin-top: 0.6%; 
// `; 


export default function Home() {
    const [icon, setIcon] = useState("");
    return (
        <main className="flex flex-col items-center min-h-screen w-[95vw] mx-auto p-4 pt-28 bg-blue-100">
          <div className="w-full max-w-lg shadow-xl bg-white rounded-3xl ">
            <div className="text-center">
                    <h2 className="text-3xl font-bold p-2">Icon Finder</h2>
                    <p className="text-neutral-500">
                        Search for icons by entering their name
                    </p>
            </div>

            <div>
              <div className="py-3 px-7">
                  <label htmlFor="icon" className="font-semibold">
                      Icon Name
                  </label>
                  <div className="relative">
                    <input
                        id="icon"
                        placeholder="e.g. arrow, baloon, cake"
                        value={icon}
                        className="border-2 w-full p-2 rounded-lg"
                        onChange={(e) => {
                            setIcon(e.target.value);
                        }}
                    />
                  </div>
              </div>

              <div className="text-center">
                <Link
                    href={`/${icon}`}
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
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import car1 from './assets/download.jpeg'
// import { SlOptions } from "react-icons/sl";
// import { FcLike } from "react-icons/fc";
// import { BiCommentDetail } from "react-icons/bi";
// import { IoMdShareAlt } from "react-icons/io";
// import './index.css';
// // import video from "./assets/my-video.mp4";

// // component aasa function hy jo JSX return kare
// function Post(Props) {
//   console.log("props, ", Props);

//   return (
//     <div className="post-container">
//       <div className="post-header">
//         <div className="post-user-detail">
//           <img
//             src={Props.profilePhoto}
//             alt="Hedy Lamarr"
//             className="dp"
//             id="my-id"
//           />
//           <div>
//             <h3>{Props.name}</h3>
//             <span>15 min ago</span>
//           </div>
//         </div>
//         <SlOptions />
//       </div>

//       <p>
//         kuxh bhi Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Nesciunt architecto quaerat sunt illum, esse eveniet quas minima, non
//         aperiam, praesentium impedit itaque enim fugit? Iure explicabo molestiae
//         asperiores exercitationem minus.
//       </p>

//       {Props.postImage ? (
//         <img
//           src={Props.postImage}
//           alt="post image"
//           className="post-photo"
//           id="my-id"
//         />
//       ) : null}

//       {/* <video src={Props.postImage} height={400} width={400} muted autoPlay controls loop></video> */}

//       <div>
//         <FcLike />
//         <BiCommentDetail />
//         <IoMdShareAlt />
//       </div>
//     </div>
//   );
// }

// const postData = [
//   {
//     name: "sssss",
//     // postImage: fruitImage,
//     profilePhoto:
//       "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg",
//   },
//   {
//     name: "aaaaaaaaaa",
//     postImage: car1,
//     profilePhoto: "https://i.imgur.com/yXOvdOSs.jpg",
//   },
//   {
//     name: "shhhhhhhhhhh",
//     postImage: car1,
//     profilePhoto: "https://i.imgur.com/yXOvdOSs.jpg",
//   },
// ];

// function App() {
//   return (
//     <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
//       {postData.map((post) => {
//         console.log("post ", post);
//         return (
//           <Post
//             name={post.name}
//             postImage={post.postImage}
//             profilePhoto={post.profilePhoto}
//           />
//         );
//       })}
//     </div>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// *********************State ***************************

// agar humne screen per koi chez change karky dekhani hy tw state ka use aaye ga
//  ye kaam asal main APP.jsx main kerna hai 
import { useState } from "react";

// function App() {
//   const [num, setNum] = useState(0);

//   console.log("component chala");

//   const myFun = () => {};
//   // console.log("usestate ki return value ", a);

//   return (
//     <>
//       <button
//         onClick={() => {
//           console.log("add");
//           setNum(num + 1);
//         }}
//       >
//         add
//       </button>

//       <p>{num}</p>

//       <button
//         onClick={() => {
//           console.log("minus");
//           setNum(num - 1);
//         }}
//       >
//         minus
//       </button>
//     </>
//   );
// }

function App() {
  let isLoggedIn = false;

  return (
    <div className="testing">
      {isLoggedIn ? <>admin side</> : null}
    </div>
  );
}

export default App;

// Hooks:
// hooks name start with use 
// you can only call Hooks at the top of your components



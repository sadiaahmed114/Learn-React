import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import car1 from './assets/download.jpeg'
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import './index.css'

function Post(Props){

  console.log("props" , Props.name)
  return(
    <div className='post-container'>
    <div className='post-header'>
      <div className='post-user-detail'>
          <img
            src={Props.profilePhoto}
            alt="car"
            className="dp"
            id="my-id"
          />
          <h3>{Props.name}</h3>
          <span>15 mins ago</span>
          </div>
          <SlOptions />
          </div>
          <p>
            {Props.text}
          </p>
          {
          Props.postImage ? <img
            src={Props.postImage}
            // {/* <video src={Props.postImage} height={400} width={400} muted autoPlay controls loop></video> */}
            alt="car"
            className="post-photo"
            id="my-id"
          /> : null 
        }


          <div className='icons'>
            <FcLike /> 
            <FaComment />
            <FaShare />
          </div>
    </div>
  )
}


function App(){
  return(
    <div style={{display:"flex" , gap:"20px" , flexDirection:"column"}}>
    <Post name="Mirha"  postImage={car1}  profilePhoto="https://i.imgur.com/yXOvdOSs.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?"/>
    <Post name="Ayan"   profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?"/>
    <Post name="Shaheer" postImage={car1}   profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?"/>
    <Post name="Awan"  postImage={car1}  profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?"/>
    <Post name="Shehzad"  postImage={car1}  profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"/>
    <Post name="Ammar"  postImage={car1}  profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"/>
    <Post name="Zain"   profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?"/>
    <Post name="Alayar"  postImage={car1} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?"  profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"/>
    <Post name="Asima"  postImage={car1}  profilePhoto="https://i.imgur.com/yXOvdOSs.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?"/>
    <Post name="Bilal"  postImage={car1}  profilePhoto="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"/>
    {/* <SlOptions /> */}
    {/* <div className='post-container'>
    <div className='post-header'>
      <div className='post-user-detail'>
          <img
            src="https://i.imgur.com/yXOvdOSs.jpg"
            alt="car"
            className="dp"
            id="my-id"
          />
          <h3>MAlIK Sahab</h3>
          <span>15 mins ago</span>
          </div>
          <SlOptions />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?
          </p>
          <img
            src={car1}
            alt="car"
            className="post-photo"
            id="my-id"
          />
          <div className='icons'>
            <FcLike /> 
            <FaComment />
            <FaShare />
          </div>
    </div> */}
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import car1 from './assets/download.jpeg'
// import { SlOptions } from "react-icons/sl";
// import { FcLike } from "react-icons/fc";
// import { FaComment } from "react-icons/fa";
// import { FaShare } from "react-icons/fa";
// import './index.css'

// function Post(){
//   return(
//     <div className='post-container'>
//     <div className='post-header'>
//       <div className='post-user-detail'>
//           <img
//             src="https://i.imgur.com/yXOvdOSs.jpg"
//             alt="car"
//             className="dp"
//             id="my-id"
//           />
//           <h3>MAlIK Sahab</h3>
//           <span>15 mins ago</span>
//           </div>
//           <SlOptions />
//           </div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?
//           </p>
//           <img
//             src={car1}
//             alt="car"
//             className="post-photo"
//             id="my-id"
//           />
//           <div className='icons'>
//             <FcLike /> 
//             <FaComment />
//             <FaShare />
//           </div>
//     </div>
//   )
// }

// function App(){
//   return(
//     <div style={{display:"flex" , gap:"20px" , flexDirection:"column"}}>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     <Post/>
//     {/* <SlOptions /> */}
//     {/* <div className='post-container'>
//     <div className='post-header'>
//       <div className='post-user-detail'>
//           <img
//             src="https://i.imgur.com/yXOvdOSs.jpg"
//             alt="car"
//             className="dp"
//             id="my-id"
//           />
//           <h3>MAlIK Sahab</h3>
//           <span>15 mins ago</span>
//           </div>
//           <SlOptions />
//           </div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus incidunt qui dignissimos impedit ea corrupti! Recusandae, deleniti. Error, illum?
//           </p>
//           <img
//             src={car1}
//             alt="car"
//             className="post-photo"
//             id="my-id"
//           />
//           <div className='icons'>
//             <FcLike /> 
//             <FaComment />
//             <FaShare />
//           </div>
//     </div> */}
//     </div>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

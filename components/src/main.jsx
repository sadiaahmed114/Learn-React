import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import car1 from './assets/download.jpeg'
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import './index.css'

function Post(){
  return(
    <div className='post-container'>
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
    </div>
  )
}

function App(){
  return(
    <div style={{display:"flex" , gap:"20px" , flexDirection:"column"}}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
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

import { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
// import '../styles/globals.css'

export default function Home() {

  const [image, setImage] = useState(null);

  const uploadToClient = async () => {
    const body = new FormData();
    body.append("file", image)

    const response = await axios.post("/api/upload");
  }

  return (
    <div className='black'>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <p class="main-content"> Language Translator</p>
          </div>
          <div class="col-md-2"></div>

        </div>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <p class="sub-content">Convert Any language to your Required language</p>
          </div>
          <div class="col-md-3"></div>

        </div>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-2">

            {/* <input className='btn' type="file" /> */}
            <form method="post" action="/api/rajini" enctype="multipart/form-data" >
              {/* <button class="btn">Upload<input class="choose" name="myImage" onChange={(e) => { setImage(e.target.value) }} type="file" /></button> */}
              <input name="logo" className='btn' type="file" />
            </form>
            <p class="small-content">or drop your file here</p>
          </div>
          <div class="col-md-2">
            <button class="btn">Download</button>
            <p class="small-content">Get ur file here</p>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
  );

}

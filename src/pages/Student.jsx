import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Student() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
     
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <img className='logo-student'
      src="data:image/jpeg;base64,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" alt="" />
      <h1 className='home-student'> JAYA ENGINEERING COLLEGE</h1>
       
        <p className='home-para2'>Approved by AICTE New Delhi, NAAC | Affiliated to Anna University, chennai<br/>
         A Telugu Minority Institute<br/>
        </p>

        <img  className ="logo-student1"src="https://jec.ac.in/wp-content/uploads/2022/11/NAAC-logo.png" alt="" />
        <img  className = "logo-student2"src="https://jec.ac.in/wp-content/uploads/2022/11/IIC-logo.png" alt="" />
        <img  className="logo-student3"src="https://jec.ac.in/wp-content/uploads/2022/11/Layer-2-3.gif" alt="" />
       <div className='history'>
        <h1 className='header-student'>STUDENT HISTORY SHEET</h1>
        <div className='photo'></div>
        <input  className="photo-update"
        type="file"
        id="photoInput"
        accept="image/*"
        onChange={handleFileChange}
      />
      
      {/* Display selected file information (optional) */}
      <p className="upload"id="fileInfo">
        
      </p>
     
       </div>
       <div className='student-history'>
        <form>
        <h2 className='hist-stud'>Register No:<input type = "text"/></h2>
        <h2 className='stud-hist'>Course:<select>
        <option value="B.E">B.E</option>
        <option value="B.Tech">B.Tech</option>
        <option value="MBA">MBA</option>
        <option value="MCA">MCA</option>
        </select></h2>
        <h2 className='hist-stud'> Name:<input type = "text"/></h2>
        <h2 className='hist-stud'>Date of Birth:<input type = "text"/></h2>
        <h2 className='hist-stud'>Father's/Gaurdian'sName:<input type = "text"/></h2>
        <h2 className='hist-stud'>Occupation<input type = "text"/></h2>
        <h2 className='hist-stud'>Phone No:<input type = "text"/></h2>
        <h2 className='hist-stud'>E-mail:<input type = "text"/></h2>
        <h2 className='hist-stud'>Aadhar Number:<input type = "text"/></h2>
        <h2 className='hist-stud'>Pan Number:<input type = "text"/></h2>
        <h2 className='stud-hist'>Nature of Admission:<select>
        <option value="B.E">Counselling</option>
        <option value="B.Tech">Management</option>
        </select></h2>
        <h2 className='hist-stud1'>Permanent Address:</h2><textarea type = "text"/>
        <h2 className='hist-stud1'>Present Address:</h2><textarea type = "text"/>
        <h2 className='hist-stud'> Father's Name:<input type = "text"/></h2>
        <h2 className='hist-stud'>Mother's Name:<input type = "text"/></h2>
        <h2 className='hist-stud'>No. of Brother/Sister's:<input type = "text"/></h2>
        <h2 className='stud-hist'>Nature of Admission:<select>
        <option value="B.E">OC</option>
        <option value="B.Tech">BC</option>
        <option value="MBC">MBC</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        </select></h2>
        <i className="arrow"onClick={()=>navigate('/student1')} class="fa-solid fa-arrow-right fa-2xl"></i>
        </form>
       </div>
    </div>
  )
}

import React from 'react'
import { useState } from 'react';

export default function Student() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div>
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
        <h2 className='hist-stud'>1. Name:<input type = "text"/></h2>
        <h2 className='hist-stud'>Date of Birth:<input type = "text"/></h2>
        <h2 className='hist-stud'>2.Father's/Gaurdian's Name:<input type = "text"/></h2>
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
        <h2 className='hist-stud'>Family Background: Father's Name:<input type = "text"/></h2>
        <h2 className='hist-stud'>Mother's Name:<input type = "text"/></h2>
        <h2 className='hist-stud'>No. of Brother/Sister's:<input type = "text"/></h2>
        <h2 className='stud-hist'>Nature of Admission:<select>
        <option value="B.E">OC</option>
        <option value="B.Tech">BC</option>
        <option value="MBC">MBC</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        </select></h2>
        <table>
          <tr>
            <th>Date of Change</th>
            <th>Address & Telephone Number</th>
          </tr>
          <tr>
    <td>1.</td>
    <td></td>
  </tr>
  <tr>
    <td>2.</td>
    <td></td>
  </tr>
        </table>
        </form>
       </div>
    </div>
  )
}

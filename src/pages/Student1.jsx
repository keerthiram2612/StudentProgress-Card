import React, { Component } from 'react';
import Student2 from './Student2'
import Student3 from "./Student3"
import Student4 from "./Student4"

class Student1 extends Component {
   

  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      newGrade: {
        subCode: '',
        subject: '',
        grade: '',
        passFail: '',
        year: '',
      },
    };
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState((prevState) => ({
      newGrade: { ...prevState.newGrade, [id]: value },
    }));
  };

  handleAddRow = () => {
    const { grades, newGrade } = this.state;
    if (newGrade.subCode && newGrade.subject && newGrade.grade && newGrade.passFail && newGrade.year) {
      this.setState({
        grades: [...grades, newGrade],
        newGrade: {
          subCode: '',
          subject: '',
          grade: '',
          passFail: '',
          year: '',
        },
      });
    }
  };

  render() {
    const { grades, newGrade } = this.state;
    

    return (
       
      <div>
        <div>
            <h2 className='medical-stud'>Student Marksheet</h2>
        </div>
        <h3 className='sem-1'>Semester 1:</h3>
        <div>
          <h4>Day Scholar/Hosteller:</h4>
          <input
            type="text"
            id="subCode"
            placeholder="Sub Code"
            value={newGrade.subCode}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={newGrade.subject}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            id="grade"
            placeholder="Grade"
            value={newGrade.grade}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            id="passFail"
            placeholder="Pass/Fail"
            value={newGrade.passFail}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            id="year"
            placeholder="Year of Passing"
            value={newGrade.year}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddRow}>Add Row</button>
          <table border="1" cellspacing="0">
          <thead>
            <tr>
              <th>Sub Code</th>
              <th>Subject</th>
              <th>Grade</th>
              <th>Pass/Fail</th>
              <th>Year of Passing</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subCode}</td>
                <td>{grade.subject}</td>
                <td>{grade.grade}</td>
                <td>{grade.passFail}</td>
                <td>{grade.year}</td>
              </tr>
            ))}
             
          </tbody>
        </table>
        </div>
        <Student2/>
        <Student3/>
        <Student4/>
        <button className='stud1'>Submit</button>
      </div>
      
    );
  }
}

export default Student1;

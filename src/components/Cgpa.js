import React from 'react'
import Navbar from './Navbar'
import './Cgpa.css';
import logo from './icons-img6.png';
import grade from './courseqe.jpg'
 const Cgpa = () => {
    return (
        <>
          <Navbar />
          <section className='border-box box1'>
    <h2>Grading System</h2> 
   <p>Grading is done on a 10-point scale by means of the letter grades: O, A, B, C, D, E, F.  
  On the 10-point scale, these letter grades carry the following numerical values: </p> 
  <div className="tb">
      <table>
        <tr>
          <th>Letter Grade</th>
          <th>O</th>
          <th></th>
          <th>A</th>
          <th></th>
          <th>B</th>
          <th></th>
          <th>C</th>
          <th></th>
          <th>D</th>
          <th></th>
          <th>E</th>
          <th></th>
          <th>F</th>
        </tr>
        <tr>
          <td>Point Equivalence:</td>
          <td>10</td>
          <td></td>
          <td>9</td>
          <td></td>
          <td>8</td>
          <td></td>
          <td>7</td>
          <td></td>
          <td>6</td>
          <td></td>
          <td>4</td>
          <td></td>
          <td>0</td>
        </tr>
      </table>
    </div> 

  <p> Where F grade is fail grade.
  In addition to the above grades, there is a temporary grade, I (Incomplete).  The I-grade indicates that a small part of the total requirements of the course remains to be completed and that the student has done satisfactory work in all other aspects of the course. The I grade needs to be converted to a proper letter grade within 1 month of the start of the next semester.</p>  
  <p align="justify"> <p className='cor'>Notification: Formula for CGPA to Percentage Conversion</p> </p>
  <a href="https://iitmandi.ac.in/academics/files/CGPA_to_Percentage_Certificate_26022020.PDF" target="_blank" className='btn'>
    Link
  </a>
    </section>
    <img src={logo} alt="student" className='im'/>

    <section className='border-box box2'>
    <h2> CGPA Calculation</h2> 
    <p >
    The performance in a semester is indicated by the Semester Grade Point Average (SGPA), which is a weighted average of the grades in all the courses done by the student in the given semester. The SGPA is calculated as follows:
    <table align="center"><tr><td><img  className='center' src={grade} alt="student" /></td></tr>
    </table>
where ci stands for the credit in a course and gi the point equivalent of the grade obtained in that course. The summation is over the number of courses n in the semester.
The performance up to any time in the course of the student’s program is indicated by the student’s Cumulative Grade Point Average (CGPA), which is also calculated by the above formula, except that the averaging is done over all of the courses that the student has done during his/her entire program up to that point. If the student has earned an F grade in a course in any semester, that also goes into the calculation of the CGPA. As and when the student finally clears the course, the record of the F is removed and replaced by the new passing grade, thereby modifying the CGPA. (If the student fails in an elective course, he/she needs to pass either that same course or an equivalent course chosen under the same elective slot in consultation with the faculty advisor). Thus, when the student graduates, the final CGPA is calculated on the basis of only the passing grades.

    </p> 
    </section>
        </>
      );

}
export default Cgpa;
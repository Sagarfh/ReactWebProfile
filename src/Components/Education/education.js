import React from 'react';
import "./education.css";

function Education() {
  return (
        <>  
        <div className='profilebg'>
            
            <div class="container edu">
              <div class="row">

                <div class="col">
                    <h4 className='edu1'>EDUCATION</h4>
                    <h5>Hello, The Education pursued by me area as follows.</h5>
                    <h5>The Highest Education pursued by me is M.Tech in Computer Science.</h5>
                      <br/><br/>
                      <table class="table table-striped table-dark">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Course</th>
                            <th scope="col">University/Board</th>
                            <th scope="col">School/College</th>
                            <th scope="col">Year Of Passing</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td>M.Tech (CSE) </td>
                            <td>AUTONOMOUS  </td>
                            <td>K.L.E Technological University  </td>
                            <td>2022</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>B.E (CSE)  </td>
                            <td>VTU</td>
                            <td>K.L.E Institute Of Technology</td>
                            <td>2020</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>PUC  </td>
                            <td>STATE</td>
                            <td>Chetan P.U Science College</td>
                            <td>2016</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>SSLC  </td>
                            <td>STATE</td>
                            <td>Chinmaya Vidyalaya</td>
                            <td>2014</td>
                          </tr>
                        </tbody>
                      </table>
                </div>

              </div>
            </div>

        </div>
        </>
  );
}

export default Education;

import React from 'react';
import "./aboutMe.css";

function AboutMe() {
  return (
        <>  
        <div className='profilebg'>
            
            <div class="container aboutMe">
              <div class="row">

                <div class="col-7">
                    <h4 className='aboutme'>ABOUT ME</h4>
                    <h5>Hello, I'm a UI/UX Designer & Frontend Developer from Victoria, Australia. 
                      I hold a master degree of Web Design from the World University.</h5>
                      <br/><br/>
                      <table class="table table-striped table-dark">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td>Name  </td>
                            <td>Sagar Honnabindagi</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>Email  </td>
                            <td>sagarhonnabindagi@gmail.com</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>Phone  </td>
                            <td>+91 8553829986</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>Date of birth  </td>
                            <td>27 May 1998</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>Nationality  </td>
                            <td>India</td>
                          </tr>
                        </tbody>
                      </table>
                </div>

                <div class="col-1"></div>

                <div class="col-4">
                <div class="card" style={{width: "18rem"}}>
                  <img class="card-img-top" src={require('../../Assets/images/guy.png')} alt="Card image cap"/>
                  <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                  {/*<img className='guyImage' src={require('../../Assets/images/guy.png')}/>*/}
                </div>
              </div>
            </div>

        </div>
        </>
  );
}

export default AboutMe;

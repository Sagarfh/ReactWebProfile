import React from 'react';
import './profile.css';

function Profile() {
  return (
        <>  
        <div className='profilebg'>

            <div class="container column1">
              <div class="row">
                <div class="col-sm column2">
                    <h4 className='profile-hello'>HELLO I'M</h4>
                    <h2>SAGAR HONNABINDAGI</h2>
                    <h4 className='profile-ui'>UI DESIGNER / FRONTEND DEVELOPER</h4>
                </div>
                <div class="col-sm ">
                  <img className='guyImage' src={require('../../Assets/images/guy.png')}/>
                </div>
              </div>
            </div>

    
    
        </div>
        </>
  );
}

export default Profile;

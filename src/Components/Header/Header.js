import React from 'react';

import { FcBusinessman,FcFile,FcDatabase,FcIdea,FcKindle,FcReading,FcTodoList } from "react-icons/fc";

//import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";

function Hello() {
  return (
        <>          
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="/"><FcBusinessman size={25}/>Profile</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-item nav-link" href="/AboutMe"><FcReading size={25}/>AboutMe</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item nav-link" href="/Education"><FcIdea size={25}/>Education</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item nav-link" href="/Certification"><FcKindle size={25}/>Certification</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item nav-link" href="/Projects"><FcDatabase size={25}/>Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item nav-link" href="/Publications"><FcKindle size={25}/>Publications</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item nav-link" href="/Activities"><FcTodoList size={25}/>Activities</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-item nav-link" href="/CV"><FcFile size={25}/>CV</a>
                    </li>
                  </ul>
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
        </>
  );
}

export default Hello;

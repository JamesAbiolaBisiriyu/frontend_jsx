import React from 'react'

const Navyb = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark py-3 fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">Frontend Bootcamp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          {/* <!-- ms-auto shifts the nav-menu to the right hand side --> */}
          <li class="nav-item">
            <a href="#learn" class="nav-link">What You'll Learn</a>
          </li>
          <li class="nav-item">
            <a href="#questions" class="nav-link">Questions</a>
          </li>
          <li class="nav-item">
            <a href="#instructors" class="nav-link">Instructors</a>
          </li>
        </ul>
      </div>

    </div>

  </nav>
  
  <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
    <div class="container">
      <div class="d-sm-flex align-items-center justify-content-between ">
       
        <div>
          <h1>Become a <span class="text-warning">Web Developer</span></h1>
          <p class="lead my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a modi odit,
            exercitationem animi neque ipsa impedit nisi! Quo nobis blanditiis quas,
            suscipit vero ex sapiente eius voluptas adipisci eligendi.
          </p>
          <button class="btn btn-success btn lg" data-bs-toggle="modal">Start The Enrollment</button>
        </div>
        <img class="img-fluid w-50 d-none d-sm-block " src="./assets/showcase.svg" alt=""/>
      </div>
    </div>
  </section>
  


    </div>
  )
}

export default Navyb
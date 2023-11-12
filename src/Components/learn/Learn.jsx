import React from 'react'

const Learn = () => {
  return (
    <div>
       <section id="learn" class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src="assets/fundamentals.svg" class="img-fluid" alt=""/>
        </div>
        <div class="col-md p-5">
          <h2>Learn The Fundamentals </h2>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat quibusdam perspiciatis molestias explicabo amet sit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tenetur dicta molestiae ex totam facere dolorem velit officia obcaecati quos maiores quisquam
            architecto doloribus nam, sed molestias eius ipsa vel veniam.
          </p>
          <a href="#" class="btn btn-light mt-3">
            <i class="bi bi-chevron-right"></i>
            Read More
          </a>
        </div>
      </div>
    </div>

  </section>

  <section id="learn" class="p-5 bg-dark text-light">
    <div class="container">
      <div class="row align-items-center justify-content-between">

        <div class="col-md p-5">
          <h2>Learn React </h2>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat quibusdam perspiciatis molestias explicabo amet sit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tenetur dicta molestiae ex totam facere dolorem velit officia obcaecati quos maiores quisquam
            architecto doloribus nam, sed molestias eius ipsa vel veniam.
          </p>
          <a href="#" class="btn btn-light mt-3">
            <i class="bi bi-chevron-right"></i>
            Read More
          </a>
        </div>
        <div class="col-md">
          <img src="assets/react.svg" class="img-fluid" alt=""/>
        </div>
      </div>
    </div>

  </section>


    </div>
  )
}

export default Learn
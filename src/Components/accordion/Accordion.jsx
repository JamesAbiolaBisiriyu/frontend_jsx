import React from 'react'

const Accordion = () => {
  return (
     <section id="questions" class="p-5">
    <div class="container">
      <h2 class="text-center mb-4">
        Frequently Asked Questions
      </h2>
      <div class="accordion accordion-flush" id="questions">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-one">
              Where exactly are you located?
            </button>
          </h2>
          <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#questions-one">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Incidunt sit esse nobis magni. Voluptates laboriosam veniam neque dolores magni laudantium nisi.
              Quasi facilis ratione, perspiciatis officiis, nisi molestiae odit expedita voluptates animi iste nemo,
              dolores repudiandae. Eligendi natus error distinctio, fuga eaque veniam
              minima aperiam, dolore quod consequatur iste dolores.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-Two">
              How much does it cost to attend?
            </button>
          </h2>
          <div id="question-Two" class="accordion-collapse collapse" data-bs-parent="#question-Two">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam,
              illo ducimus assumenda iusto quo ab ipsum quibusdam dolor quis dolores eum quae animi repellendus sapiente
              iure sit incidunt
              blanditiis qui est nesciunt atque maiores delectus placeat. Cumque dolores minus saepe veritatis ad?
              Blanditiis expedita eius quisquam nisi architecto magnam?
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-Three">
              What do I need to Know?
            </button>
          </h2>
          <div id="question-Three" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam,
              illo ducimus assumenda iusto quo ab ipsum quibusdam dolor quis dolores eum quae animi repellendus sapiente
              iure sit incidunt
              blanditiis qui est nesciunt atque maiores delectus placeat. Cumque dolores minus saepe veritatis ad?
              Blanditiis expedita eius quisquam nisi architecto magnam?
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-four">
              How do I sign up?
            </button>
          </h2>
          <div id="question-four" class="accordion-collapse collapse" data-bs-parent="#questions-four">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Incidunt sit esse nobis magni. Voluptates laboriosam veniam neque dolores magni laudantium nisi.
              Quasi facilis ratione, perspiciatis officiis, nisi molestiae odit expedita voluptates animi iste nemo,
              dolores repudiandae. Eligendi natus error distinctio, fuga eaque veniam
              minima aperiam, dolore quod consequatur iste dolores.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-five">
              Did You Help Me Find a Job?
            </button>
          </h2>
          <div id="question-five" class="accordion-collapse collapse" data-bs-parent="#questions-five">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Incidunt sit esse nobis magni. Voluptates laboriosam veniam neque dolores magni laudantium nisi.
              Quasi facilis ratione, perspiciatis officiis, nisi molestiae odit expedita voluptates animi iste nemo,
              dolores repudiandae. Eligendi natus error distinctio, fuga eaque veniam
              minima aperiam, dolore quod consequatur iste dolores.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Accordion
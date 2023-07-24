const Home = () => {
    return (
    <>
    <body>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://repository-images.githubusercontent.com/534599230/33298306-6c8f-4f1e-a038-84228f700b10" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2017January/mos-image-5-650_011017024903.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/dbcf295e210c17da295a4ad2211de8fa34749f423ef37133ca91da636c5d6f6c1628432061893.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://4.bp.blogspot.com/-3FYBbdOHbXA/WMw-l92DMdI/AAAAAAAA4P4/JgtBwZYYHWMYntyzkjX-gb6qEfg9Rfe8gCEw/s1600/2.png" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
               
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>

      <h1 style={{ textAlign: "center" }}>COURSES</h1>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://miro.medium.com/v2/resize:fit:800/0*ZEPJsASfB2z7hi_0"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">FULL STACK DEVELOPMENT</h5>
                <p class="card-text">
                Full Stack Development helps you in creating responsive and good website.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.springboard.com/blog/wp-content/uploads/2022/09/programmng-language.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">CODING</h5>
                <p class="card-text">
                Coding can help you improve your problem-solving skills.
                </p>
                <a href="#" class="btn btn-primary">
                 Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Web development</h5>
                <p class="card-text">
                Web development is the process to create basic,reactive and responsive website.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.designerpeople.com/wp-content/uploads/2020/01/Graphic-design-types-inspiration.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">GRAPHICS DESIGNING</h5>
                <p class="card-text">
                Graphics Designing improves designing skills and is also used in the frontend part .
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
    </>
    );
  };
  
  export default Home;
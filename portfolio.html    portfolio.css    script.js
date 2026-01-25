<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Professional Portfolio</title>
  <link rel="stylesheet" href="portfolio.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

</head>
<body>

<header>
  <nav class="navbar">
    <div class="logo">Portfolio</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#our services">Our Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="menu" onclick="toggleMenu()">☰</div>
  </nav>
</header>

<!-- Home -->
<section class="home" id="home">
  <div class="home-left">
    <h1>Assalamualaikum</h1>
    <h2>Hi, I'm <span>Musharib Khalid</span></h2>
    <h3>Frontend Web Developer</h3>
    <p>I design and build modern frontend experiences using HTML, CSS and JavaScript.</p>
    <div class="social-icons">
  <a href="https://www.linkedin.com/in/musharib-khalid-0132493a2/" target="_blank" class="icon linkedin">
    <i class="fab fa-linkedin-in"></i>
  </a>

  <a href="https://github.com/MusharibKhalid" target="_blank" class="icon github">
    <i class="fab fa-github"></i>
  </a>

  <a href="https://www.facebook.com/" target="_blank" class="icon facebook">
    <i class="fab fa-facebook-f"></i>
  </a>
</div>

    <a href="#contact" class="btn">Contact Me</a>
  </div>

  <div class="home-right">
    <img src="home.png" alt="profile">
  </div>
</section>

<!-- About -->
<section class="about" id="about">
  <h2 id="about">About <span class="me">Me</span></h2>
  <div class="about-container">

    <!-- Image Side -->
    <div class="about-img">
      <img src="home.png" alt="Profile">
    </div>

    <!-- Text Box Side -->
    <div class="about-content">
      <h3 id="text">Forntend <span>Developer</span></h3>
      <p>
        <!-- Frontend Developer with a strong passion for creating modern,
        responsive, and user-focused web interfaces. I enjoy transforming
        ideas into visually appealing designs using clean code and
        creative layouts. My goal is to build smooth digital experiences
        that are both functional and engaging. -->
        I am a passionate Frontend Developer dedicated to building modern, responsive, and user-friendly web experiences. I specialize in HTML, CSS, and JavaScript, with hands-on experience in frameworks like React and Vue. I enjoy transforming creative ideas into clean, efficient, and interactive interfaces that look great on any device. My goal is to craft websites that not only function smoothly but also leave a lasting impression on users through intuitive design and attention to detail.
      </p>
      <div class="button-wrapper">
         <a href="#more" class="read-more-btn">Read More</a>
      </div>
    </div>

  </div>
</section>

<!-- Skills -->
<!-- <section class="section" id="our services">
  <h2>Our Services</h2>
  <div class="skills">
    <div class="skill">HTML</div>
    <div class="skill">CSS</div>
    <div class="skill">JavaScript</div>
    <div class="skill">Responsive Design</div>
  </div>
</section> -->

<section class="services" id="our services">
  <h2 class="h2">My Web Development Services</h2>

  <div class="services-container">

    <div class="service-box">
      <h3>Front-End Development</h3>
      <p>
        I specialize in front-end development by creating visually appealing, clean,
        and user-friendly website interfaces using HTML, CSS, and JavaScript. My goal
        is to design layouts that are easy to navigate, responsive on all devices,
        and engaging for users. A strong front-end improves user experience and helps
        businesses make a positive first impression.
      </p>
    </div>

    <div class="service-box">
      <h3>Back-End Development</h3>
      <p>
        I provide reliable back-end development services that focus on building secure,
        scalable, and efficient server-side systems. This includes handling databases,
        managing user authentication, and ensuring smooth communication between the
        server and the website. A powerful back-end ensures that the website performs
        efficiently and securely.
      </p>
    </div>

    <div class="service-box">
      <h3>Responsive Website Design</h3>
      <p>
        I develop fully responsive websites that adapt perfectly to all screen sizes,
        including mobile phones, tablets, and desktops. Using modern responsive design
        techniques, I ensure consistent layout and usability across devices. Responsive
        design improves accessibility, user satisfaction, and search engine rankings.
      </p>
    </div>

  </div>
</section>

<section class="skills">
  <h2 class="h2">My Skills</h2>

  <div class="skills-container">

    <div class="skill-box">
      <h3>HTML</h3>
      <p>
        HTML is the foundation of every website and is used to structure web pages
        effectively. I write clean and semantic HTML code to ensure proper page
        structure, accessibility, and search engine optimization. Well-structured
        HTML makes websites easier to maintain and scale.
      </p>
    </div>

    <div class="skill-box">
      <h3>CSS</h3>
      <p>
        CSS is used to design and style websites by adding layouts, colors, fonts,
        and animations. I use modern CSS techniques to create responsive and visually
        attractive designs. Good CSS enhances the overall appearance and professional
        look of a website.
      </p>
    </div>

    <div class="skill-box">
      <h3>JavaScript</h3>
      <p>
        JavaScript adds interactivity and dynamic behavior to websites. I use it to
        create features like form validation, sliders, dynamic content loading, and
        user-friendly interactions. JavaScript helps deliver a modern and engaging
        user experience.
      </p>
    </div>

  </div>
</section>



<!-- Contact Section -->
<section class="section contact" id="contact">
  <h2>Get In <span id="touch">Touch</span></h2>

  <div class="contact-container">

    <!-- Contact Info -->
    <div class="contact-info">
      <div class="contact-card">
        <h3>Email</h3>
        <p>musharibkhalid2006@gmail.com</p>
      </div>

      <div class="contact-card">
        <h3>Phone</h3>
        <p>+92 317 2226476</p>
      </div>

      <div class="contact-card">
        <h3>Location</h3>
        <p>Pakistan</p>
      </div>
    </div>

    <!-- Contact Form -->
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>

  </div>
</section>


<script src="script.js"></script>
</body>
</html>

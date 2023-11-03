<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tech Haven</title>

    <!-- link to css -->

    <link rel="stylesheet" href="style.css" />

    <!-- Box icon -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
    />
  </head>
  <body>
    <!-- Navbar -->

    <header>
      <a href="#" class="logo">
        <img src="img/logo.png" alt="Tech Haven Logo"
      /></a>

      <!-- Nav List -->

      <ul class="navbar">
        <li><a href="#home" class="home-active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <!-- Profile -->

      <div class="profile">
        <img src="img/profile.png" alt="" />
        <span>Name name</span>
        <box-icon name="caret-down"></box-icon>
      </div>
    </header>

    <!-- img slider -->

    <div class="slider">
      <div class="list">
        <div class="item">
          <img src="img/banner01.jpg" alt="" />
        </div>
        <div class="item">
          <img src="img/banner02.jpg" alt="" />
        </div>
        <div class="item">
          <img src="img/banner03.jpg" alt="" />
        </div>
        <div class="item">
          <img src="img/banner04.jpg" alt="" />
        </div>
        <div class="item">
          <img src="img/banner05.jpg" alt="" />
        </div>
      </div>
      <div class="buttons">
        <button type="button" id="prev"><</button>
        <button type="button" id="next">></button>
      </div>
      <ul class="dots">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <!-- Footer

       <section class="Footer" id="Footer">
         <div class="Footer-box"></div>
         <a href="#" class="logo"><box-icon name='basket'></box-icon>Tech Haven</a>

       </section> -->

    <!-- link to js -->
    <script src="main.js"></script>
  </body>
</html>

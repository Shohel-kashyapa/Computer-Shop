

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register form</title>

    <!--  css link  -->
    <link rel="stylesheet" href="auth_style.css">

</head>
<body>
  <div class="form-container">
      <form action="register_form.php" method="post">
          <h3>register now</h3>
          <?php
          if(isset($error)){
              foreach($error as $error){
                  echo '<span class="error-msg">'.$error.'</span>';
              };
          };
          ?>
          <label>
              <input type="text" name="name" required placeholder="enter you name">
          </label>
          <label>
              <input type="email" name="email" required placeholder="enter your email">
          </label>
          <label>
              <input type="password" name="password" required placeholder="enter your password">
          </label>
          <label>
              <input type="password" name="c_password" required placeholder="confirm your password">
          </label>
          <label>
              <select name="user_type">
                  <option value="user">user</option>
                  <option value="admin">admin</option>
              </select>
          </label>
          <input type="submit" name="submit" value="register now" class="form-btn">
          <p>already have an account? <a href="login.php">login now</a> </p>
      </form>
  </div>

</body>
</html>
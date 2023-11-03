<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login form</title>

    <!-- custom css file link  -->
    <link rel="stylesheet" href="auth_style.css">

</head>
<body>

<div class="form-container">

    <form action="login_form.php" method="post"">
        <h3>login now</h3>
        <label>
            <input type="email" name="email" required placeholder="enter your email">
        </label>
        <label>
            <input type="password" name="password" required placeholder="enter your password">
        </label>
        <input type="submit"value="login now" class="form-btn">
        <p>don't have an account? <a href="register.php">register now</a></p>
    </form>

</div>

</body>
</html>
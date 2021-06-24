<!DOCTYPE html>
<html>
<head>
	<title>Code Learner's site</title>
	<link rel="stylesheet" href="stylee.css">
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div class="menu_bar">
	         <h1><i><b><font color="#ffffff">Code Learner's Site</b></i></h1>
		<ul>
		<li class="active"><a href="#">Home</a><i class="fa fa-home"></i></li>
		<li><a href="#"><i class="fa fa-graduation-cap"></i>Tutorial</a>
		<div class="sub-menu-1">
				<ul>
					<li><a href="#">   </a></li>
					<li><a href="#">   </a></li>
				</ul>
			</div>
		</li>
		<li><a href="#"><i class="fa fa-lock"></i>Project</a>
		<div class="sub-menu-1">
				<ul>
					<li><a href="#">Game</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">Management</a><i class="fa fa-angle-right"></i></li>
				</ul>
			</div>
		</li>
		<li><a href="#"><i class="fa fa-quora"></i>Quiz</a>
		<div class="sub-menu-1">
				<ul>
					<li><a href="#">1- Basic Python</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">2- Variable and Data Types</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">3- Operators and Expression</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">4- Input and Output</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">5- Functions</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">6- If Else and Loops</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">7- Numbers</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">8- String</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">9- List</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">10- Set</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">11- Dictionary</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">12- Tuple</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">13- Random Data Generation</a><i class="fa fa-angle-right"></i></li>
				</ul>
			</div>
		</li>
		<li><a href="#"><i class="fa fa-history"></i>History</a>
		<div class="sub-menu-1">
				<ul>
					<li><a href="#">Recent Places</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">Previous result</a><i class="fa fa-angle-right"></i></li>
				</ul>
			</div>
		</li>
		</ul>
</div>
<div class="header">
   <h2>Log in</h2>
</div>
<form method="post" action="login.php">
        <div class="input-group">
		    <label>Username</label>
		    <input type="text" name="username" value="" required>
		</div>
		<div class="input-group">
		   <label>password</label>
		    <input type="password" name="password" value="" required>
		</div>
		<div class="input-group">
		      <button type="submit" name="login" class="btn">login</button>
		</div>
		<p>
		     Not yet a member? <a href="register.php">Sign up</a>
	   </p>
</form>
</body>
</html>
			
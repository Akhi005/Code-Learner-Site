<!DOCTYPE html>
<html>
<head>
	<title>Code Learner's site</title>
	<link rel="stylesheet" href="stylee.css">
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<?php
include 'connection.php' ;

if(isset($_POST['register'])){
	$username=mysqli_real_escape_string($con,$_POST['username']);
	$email=mysqli_real_escape_string($con,$_POST['email']);
	$password=mysqli_real_escape_string($con,$_POST['password']);
	$c_password=mysqli_real_escape_string($con,$_POST['c_password']);
 
   $pass=password_hash($password,PASSWORD_BCRYPT);
   $c_pass=password_hash($c_password,PASSWORD_BCRYPT);
   
   $emailquery="select*from users where email='$email'";
   $query = mysqli_query($con,$emailquery);
   $emailcount=mysqli_num_rows($query);
   if($emailcount>0){
	   echo "email already exists";
   }
   else
   {
	   if($password===$c_password){
		   $insertquery ="insert into users(username, email, password,c_password) 
						 values('$username','$email','$pass','$c_pass')";
			$iquery=mysqli_query($con,$insertquery);
		if($iquery){
				?>
				<script>
				 alert('inserted successful');
				</script>
				<?php
				}
				else{
				?>
				<script>
				 alert('no inserted');
				</script>
				<?php
				}			
	   }else{
		   ?>
		   <script>
		   alert("password are not matching");
	      </script>
		  <?php
	   }
   }
}

?>
<div class="menu_bar">
	         <h1><i><b><font color="#ffffff">Code Learner's Site</b></i></h1>
		<ul>
		<li class="active"><a href="#">Home</a><i class="fa fa-home"></i></li>
		<li><a href="#"><i class="fa fa-graduation-cap"></i>Tutorial</a>
		<div class="sub-menu-1">
				<ul>
					<li><a href="index.php">PDF</a></li>
					<li><a href="https://repl.it/repls/AlarmedMeagerObjectcode">Code Editor</a>					
					</li>
				</ul>
			</div>
		</li>
		<li><a href="#"><i class="fa fa-lock"></i>Project</a>
		<div class="sub-menu-1">
				<ul>
					
					<li><a href="file:///D:/PycharmProjects/my first program/templates/Calculator Project.py"><i class="fa fa-angle-right"></i>How to make a Scientific Calculator</a>
					</li>
					<li><a href="#">How to make a Calender</a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">How to make a Alarm Clock </a><i class="fa fa-angle-right"></i></li>
					<li><a href="#">How to make a Space Invaders Game</a><i class="fa fa-angle-right"></i></li>
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
	
		</ul>
</div>
<div class="header">
   <h2>Register</h2>
</div>
 <form action="register.php" method = "post" >    
        <div class="input-group">
		    <label>Username</label>
		    <input type="text" name="username" value="" required > 
		</div>
		<div class="input-group">
			<label>Email</label>
		   <input type="text" name="email" value="" required >
		</div>
		<div class="input-group">
		   <label>password</label>
		    <input type="password" name="password" value="" required >
		</div>
		<div class="input-group">
		   <label>Confirm password</label>
		    <input type="password" name="c_password" value="" required >
		</div>
		<div class="input-group">
		      <button type="submit" name="register" class="btn">Register</button>
		</div>
		<p>
		    Already a member? <a href="login.php">Sign in</a>
	   </p>
</form>
</body>
</html>
			
<?php
 $username = "root";
 $password = "";
 $server = "localhost";
 $db = "registration";
 
$con = mysqli_connect($server,$username,$password,$db);
if($con){
?>
<script>
 alert('connection successful');
</script>
<?php
}
else{
	?>
	<script>
	alert("No connection");
	</script>
	<?php
}
?>


<!DOCTYPE html>
<html>
<head>
	<title>Code    Learner's   site</title>
	<link rel="stylesheet" href="poun.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>	
	<style>
		body, html {
		  height: 90%;
		  margin: 0;
		}
		
		.bg {
		  /* The image used */
		  background-image: url("n1.jpg");
		
		  /* Full height */
		  height: 100%; 
		
		  /* Center and scale the image nicely */
		  background-position: center;
		  background-repeat: no-repeat;
		  background-size: cover;
		}
		</style>   
	<div class="menu_bar">
	         <h1><i><b><font color="#ffffff">Code  Learner's  Site</b></i></h1>
		<ul>
		<li class="active"><a href="#">Home</a><i class="fa fa-home"></i></li>
		
		<li><a href="t1.html"><i class="fa fa-graduation-cap"></i>Tutorial</a>
		<div class="sub-menu-1">
				<ul>
					<li><a href="t1.html"><i class="fa fa-graduation-cap"></i>python</a>
				</ul>
			</div>
		</li>
		<li><a href="project.html"><i class="fa fa-graduation-cap"></i>project</a>
		
		</li>
		<li><a href="#"><i class="fa fa-quora"></i>Quiz</a>
		<div class="sub-menu-1">
				<ul>
					<li><a href="page1.html">Python</a><i class="fa fa-angle-right"></i></li>
					
				</ul>
			</div>
		</li>
		
		</ul>
	</div>
</body>
</html>
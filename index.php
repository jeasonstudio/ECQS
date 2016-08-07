<?php
	$con = mysqli_connect("202.204.49.162:1521","publicjw","jwpublicdatazczx");
	if(!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	mysqli_select_db("jw.js_jssyb", $con);
	if($con){
		echo "select done";
	}else{
		echo "slect failed";
	}
	mysql_close($con);
	
?>
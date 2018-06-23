<?php
	if(isset($_FILES['resume'])){
	    
		// Creates the Variables needed to upload the file
		
		$UploadName = $_FILES['resume']['name'];
		$ext = substr($UploadName,strrpos($UploadName,"."));
		$UploadName = $_POST['fname'].$_POST['lname'].$ext;
		$UploadTmp = $_FILES['resume']['tmp_name'];
		$UploadType = $_FILES['resume']['type'];
		$FileSize = $_FILES['resume']['size'];
		
		// Removes Unwanted Spaces and characters from the files names of the files being uploaded
		
		$UploadName = preg_replace("#[^a-z0-9.]#i", "", $UploadName);
		
		// Upload File Size Limit 
		
		/*if(($FileSize > 125000)){
			
			die("Error - File to Big");
			
		}*/
		
		// Checks a File has been Selected and Uploads them into a Directory on your Server
		
		if(!$UploadTmp){
			die("No File Selected, Please Upload Again");
		}else{
			move_uploaded_file($UploadTmp, "uploads/$UploadName");
		}
	}
?>

<html>
<head>
<title>Data Sociate: Analysis result</title>
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
</head>
<body>
<p id="text" style="font-family: Raleway;  box-sizing: border-box; font-size:200%" >Your profile will be analysed</p>
<br/><br/>
<img src="img/under_construction.png" alt="under construction image"></img>
</body>
</html>
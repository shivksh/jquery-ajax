<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js" type="text/javascript"></script>    
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.min.js"></script>
</head>
<body>
    <h1 id="heading"> Subject Choosing Form </h1>
    <form action="" method="" enctype="multipart/form-data" >

        <label for="">Class Id</label>
        <input type="text" id="class" name="class"><br>
        <h5 id="classdata"></h5>

        <label for="">First Name</label>
        <input type="text" id="fname" name="fname" ><br>
        <h5 id="fdata"></h5>


        <label for="">Last Name</label>
        <input type="text" id="lname" name="lname" ><br>
        <h5 id="ldata"></h5>


        <label for="">Phone Number</label>
        <input type="text" id="pname" name="pname" ><br>
        <h5 id="pdata"></h5>

        

        <input type="file"  id="image" name="image" ><br>
        <img id="blah" src="#" alt="your image" width="100px" height="100px" />
        
        <h5 id="filedata"></h5>


        <h5 id="radiodata"></h5>
        <div class="science">
       <input type="radio" id="science" name="sub" value="Science">
       <label for="">Science</label><br>
        <input type="checkbox" id="check" name="scc[]"  value="Physics">
        <label for=""> Physics</label><br>
        <input type="checkbox" id="check" name="scc[]"  value="Chemistry">
        <label for=""> Chemistry</label><br>
        <input type="checkbox" id="check" name="scc[]"  value="Biology">
        <label for=""> Biology</label><br><br>
       </div>


       <h5 id="check"></h5>

       <div class="commerce">   
       <input type="radio" id="commerce" name="sub" value="Commerce">
       <label for="">Commerce</label><br>
        <input type="checkbox" id="check" name="scc[]"  value="Accounts">
        <label for=""> Accounts</label><br>
        <input type="checkbox" id="check" name="scc[]"  value="Business">
        <label for=""> Bussiness</label><br>
        <input type="checkbox" id="check" name="scc[]"  value="Banking">
        <label for=""> Banking</label><br><br>
       </div>

        <input type="submit" id="submit" name="submit" >
        <!-- <button type="submit">submit</button> -->
    </form>
<div id="load"></div>

    <script src="javascript.js" ></script>
</body>
</html>
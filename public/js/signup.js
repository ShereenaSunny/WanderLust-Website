
  
function funpass()
{
    var name=document.getElementById("username").value;
    var phone=document.getElementById("phone").value;
    var pass=document.getElementById("password").value;
    var pass1=document.getElementById("Cpassword").value; 
    
    
    if(username==""||phone==""||password==""||Cpassword=="")
        {
            alert("please fill entire form.");
            return false;
        }
    else if(isNaN(username)==false)
    {
            alert("please enter characters only!");
            return false;
    }
    else if(password!=Cpassword1)
        {
            alert("password dosent match!");
            return false;
        }
    else if(username.length<=3||username.length>=10)
        {
            alert("please enter username more than 3 and upto 10 characters.");
        }
    else if(phone.length<10 || phone.length>10)
        {
             alert("phone number should be of 10 digits!");
        }
    else
        {
            alert("successfully registered.");
            document.location="login";
            return true;
            
        }
    
}
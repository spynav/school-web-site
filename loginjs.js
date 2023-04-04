


 


 function confirmPassword(p2) {
    var p2=formname111.pword.value;
    if (p2=="1234") 
    {
        return true;
    }
     else {
         return false;
     }
}


function  confirmusername(un2) {
    
  
    var un2=formname111.uname.value;
    if (un2=="username") 
    {
        return true;
    }
     else {
         return false;
     }
}

 




function validation(){
    
 var p2=formname111.pword.value;
  
 var un2=formname111.uname.value;

if (confirmusername()==true){
    
    if(confirmPassword()==true){
        
        alert("Login completed Successfully");
        return true;

}else{
    alert("Enter password as 1234");
    return false;
}


}else{
    alert("Enter username as username");
    return false;
}
}

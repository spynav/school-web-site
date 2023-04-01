function validateform(regform){
    var uid = regform.userid.value;
    var pword=regform.pw.value;
    var uname=regform.name.value;
    var add=regform.address.value;
    var country=regform.ctr.value;
    var zip=regform.zip.value;
    var mail=regform.mail.value;
    var gen=regform.gen;
     
    var eng=regform.en;
    var neng=regform.nonen;

    var returnvalue=false;
    var a=true;
    var b=true;
    var c=true;
    var d=true;
    var e=true;
    var f=true;
     



    function validuserid(uid){
        var uidlen = uid.length;
        
        if (uidlen ==0 || uidlen <5 || uidlen>12 ){
           return false; 
        }
        else{
            return true;
        }
    }
    function validpw(){
        var pwdlen = pword.length;
         
        if ( pwdlen ==0 ||  pwdlen <7 ||  pwdlen>12 ){
           return false; 
        }
        else{
            return true;
        }
    }
    function validname(uname){
        var alp =/^[A-Za-z]+$/;
        
        if(uname.match(alp)){
            return true;
        }else{
            return false;
        }
    }
    function validadd(){
        if (add==""){
            return false;
        }else{
            return true;
        }

    }
    function validcntry(country){
        if(country == "Default"){
            return false;
        }else{
            return true;
        }
    }
    function validzip(){
        if(zip==""){
            return false;
        }else{
            return true;
        }
            
         
    }
    function validgen()
    {
        x = 0;
        if (gen[0].checked) {
            x++;
        }
        if (gen[1].checked) {
            x++;
        }
        if (x == 0) {
            return false;
        }
    
        else {
            return true;
        }
    }

    function validlan(){
        x = 0;
        if (eng.checked) {
            x++;
        }
        if (neng.checked) {
            x++;
        }
        if (x == 0) {
            return false;
        }
    
        else {
            return true;
        }
        
    }
    

    function validemail(){
        var mailv = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(mail.match(mailv)){
            return true;
        }else{
            return false;
        }
        
    }
    
     




    if (uid==""|| pword=="" || uname=="" || country=="" || mail=="" ||  gen.checked==false || eng.checked==false  ){
        alert("there are empty fields, please fill them ");
        a=false;
    }

    if(validuserid(uid)==false){
       alert("userid is invalid");
        b=false;
        
    }
    else{
        if(validpw(pword)==false){
            alert("Password is Invalid");
            c=false;
        }else{
            if(validname(uname)==false){
                alert("User name is invalid");
                d=false;

            }else{
                if(validadd()==false){
                    alert("Address is Requred");
                    e=false;
                }else{
                    if(validcntry(country)==false){
                        alert("Country feald is empty");
                        f=false;
                    }else{
                        if(validzip()==false){
                            alert("Zip code is requred");

                        }else{
                            if(validemail()==false){
                                alert("Email isnt Correct");

                            }else{
                              if(validgen()==false){
                                alert("Gender requerd");

                              }else{
                                if(validlan()==false){
                                    alert("Language Requerd");

                                }
                            }
                        }
                      }
                    }
                }
            }

        }
    } 
        
        
   
    


    if (a==true && b==true && c==true){
        returnvalue=true;
    }
    
    return returnvalue;
     
}




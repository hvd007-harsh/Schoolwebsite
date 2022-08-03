const validate= (data,req,res)=>{
    const {name, Password, PhoneNo}= data;
    var valid = true; 
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(name == '' || name.length <= 6 ){
        res.send({ message: " Enter the full name "})
        valid = false;
    }
    else if(Password.length <8 || Password == ''){
         res.send({ message: "Password must be greater than 8 and less than 15 character"});
         valid = false;
    }
    else if(!Password.match(format)){
        res.send({ message: "Please put some special character"});
        valid = false;
    }
    else if((isNaN(PhoneNo)) || PhoneNo.length < 10){
              res.send({message: "Please enter the valid Phone No."});
        valid = false;
    }
    return valid;
}
module.exports = validate;
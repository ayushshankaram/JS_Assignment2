


function check_validation(event){
    event.preventDefault();

    const phone = document.getElementById('phno').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const c_pass = document.getElementById('confpass').value;
    
    // console.log(phone);
    // console.log(email);
    // console.log(pass);
    // console.log(c_pass);

    
    const checkPhone = /^\d{10}$/;
    const checkEmail = /[a-zA-Z0-9_]+@[a-zA-Z0-9.]+/gm;

    let check = true;


    if (!checkEmail.test(email)){
        check = false;
        alert("Enter valid E-mail ID")

    }

    if (!checkPhone.test(phone)){
        alert("Enter a valid Indian(+91) Phone number")
        check = false;
    }

    if (pass != c_pass){
        alert("Passwords not matching")
        
        check = false;

    }


    if (check == true){
        document.getElementById('Sign_up').submit();
        alert("All Good , Details Submitted! ")
    }

     
}
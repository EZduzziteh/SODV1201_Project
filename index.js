/* SODV 1201 Introduction to Web Programming
SODV 1201 Term Project- Co-Worker Work Spaces and Properties
 Program designed and coded by: SODV 1201 Group 2: Sasha Greene,  Gurleen Kaur, Paul K Kho, Evan Maclean
 Instructor:                   Dima Marachi
 Due       :     Phase 1   : June 2 2022
                 Phase 2   : June 24 2022
*/


function checkForm() {
    var name  =  document.SignUpForm.name.value;
    var email =  document.SignUpForm.email.value;
    var mobile = document.SignUpForm.mobile.value;
    var role =   document.SignUpForm.role.value;

    if (name==" " || name==null) {
            alert("Fields cannot be empty.");
            return false;
    }else if(email==" " || email ==null ) {
            alert("Please enter valid email.");
            return false;
    }
    else if (mobile==" " || mobile== null) {
        alert("Please enter valid phone number.");
        return false;
    }
    else if ( role ==" " || role == null) {
        alert("Please select a role.");
        return false;
    }
    }
    function accessGranted() {
        alert("Thank you. Please press any key to enter.");
        // Call Function to CoWorker webpage or Owner webpage
        
    }

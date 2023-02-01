$(document).ready(function(){

    // Operational variables
    let isSuccess = true
    let isSubmitting = false

    // onclick submit button 
    $(".register-btn").click(function(e){
        e.preventDefault();
        isSubmitting = true

        // Button event changes while submitting
        $(".register-btn").text("loading...")
        $(".register-btn").attr('disabled', true);
        $(".register-btn").addClass('register-btn-disabled');

        // Loader animation start 
        $("#form-loader").show();

        // Get form data 
        const formData = {
            firstname : $("#firstname").val(),
            lastname : $("#lastname").val(),
            email : $("#email").val(),
            phone : $("#phone").val(),
            address : $("#address").val(),
            secondAddress : $("#second-address").val(),
            country : $("#country").val(),
            city : $("#city").val(),
            gender : $("input[name=gender]:checked").val(),
            aboutInput : $("#aboutInput").val(),
            terms : $("#terms").prop("checked"),
        }

        // Register the user 
        validateForm(formData)

        // submitUserForm()

        // Rregister user on success 
        isSuccess ? registerUser(formData) : ''

        // Button event changes while submitting
        setTimeout(function() {
            $(".register-btn").text("Register")
            $(".register-btn").removeAttr('disabled');
            $(".register-btn").removeClass('register-btn-disabled');

            // Loader animation stop 
            $("#form-loader").hide();
        }, 1000);

        
        // Scroll to top of page
        !isSuccess ? $("html, body").animate({ scrollTop: 0 }, "fast") : '';
        

        

    });



    // Registerion function 
    function validateForm(formData){
        $('#formSuccessMessage').hide()

        // Firstname validation 
        if(!formData.firstname || !formData.lastname){
            $(!formData.firstname ? "#firstname" : "#lastname").addClass("form-invalid");            
            $('#formErrorMessage').text('*Name is required').show()
            return isSuccess = false;

        // Check if first name contains only alphabetic characters
        }else if (/^[a-zA-Z]+$/.test(formData.firstname) ==false || /^[a-zA-Z]+$/.test(formData.lastname) == false) {
            $(/^[a-zA-Z]+$/.test(formData.firstname) == false ? "#firstname" : "#lastname").addClass("form-invalid");            
            $('#formErrorMessage').text('*Invalid name format. Must contain alphabets only').show()
            return isSuccess = false;

            // Check if first name contains only alphabetic characters
        }else if (formData.firstname.length < 3 || formData.lastname.length < 3) {
            $("#firstname").addClass("form-invalid");            
            $('#formErrorMessage').text('*Name must have at least 3 characters').show()
            return isSuccess = false;
        }

         //Email validation 
         else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(formData.email) == false){
            $("#email").addClass("form-invalid");            
            $('#formErrorMessage').text('*Invalid email').show()
            return isSuccess = false;
        }

        //Phone number validation 
        else if(/^0[0-9]{9,10}$/.test(formData.phone) == false){
            $("#phone").addClass("form-invalid");            
            $('#formErrorMessage').text('*Invalid phone number format').show()
            return isSuccess = false;
        }

        //Address validation 
        else if(!formData.address){
            $("#address").addClass("form-invalid");            
            $('#formErrorMessage').text('*Address is required').show()
            return isSuccess = false;
        }

        //Gender validation 
        else if(!formData.gender){
            $('#formErrorMessage').text('*Gender is required').show()
            return isSuccess = false;
        }

    
         //Agree to terms and condition
         else if(!formData.terms){
            $('#formErrorMessage').text('*You must agree to term and conditions').show()
            return isSuccess = false;
        }

    }

    // On form click to refresh error messaes 
    $('#myForm input').click(function(){
        if(!isSuccess){
            $(".form-input").removeClass("form-invalid");            
            $('#formErrorMessage').text('').hide()
            isSuccess = true;
        }
    })


    // form loader animation
    var angle = 0;
    setInterval(function() {
    angle += 100; // Increment the angle by 10 degrees on each step
    $('#form-loader').css('transform', 'rotate(' + angle + 'deg)');
    $('#form-loader').css('transition', 'transform 1s');
    }, 100);



    // Register user on success function 
    function registerUser(formData){
        console.log(formData)
        $('#formSuccessMessage').show()

    }



    var recaptcha_response = '';
    function submitUserForm() {
        if(recaptcha_response.length == 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '';
            return false;
        }
        return true;
    }
     
    function verifyCaptcha(token) {
        recaptcha_response = token;
        document.getElementById('g-recaptcha-error').innerHTML = '';
    }




});
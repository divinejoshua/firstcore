$(document).ready(function(){

     // Get font size from localStorage
     let fontSize = localStorage.getItem('font-size');

     if(fontSize == 'normal'){
         normalFont()
     } else if(fontSize == 'large'){
         increaseFont()
     }else if(fontSize == 'small'){
         decreaseFont()
     }

     
//=========== On click font buttons  ====== ====
    // Add font 
    $('#normal-font').click(function(){
        normalFont()
    })

    // Normal font 
    $('#add-font').click(function(){
        increaseFont()
    })

    // Reduce font 
    $('#reduce-font').click(function(){
        decreaseFont()
    })

     
// ==========Font control functions =================
    //  Normal font function 
     function normalFont(){
        $('body').css('font-size', '14px');
        localStorage.setItem('font-size', 'normal');
    }

    //  increase font function 
    function increaseFont(){
        $('body').css('font-size', '20px');
        localStorage.setItem('font-size', 'large');
    }

    //  decrease font function 
    function decreaseFont(){
        $('body').css('font-size', '11px');
        localStorage.setItem('font-size', 'small');
    }
 


});
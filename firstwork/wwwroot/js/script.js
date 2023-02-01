$(document).ready(function(){

      // Loader 
      pageLoad()

      function pageLoad() {
          $('.container').hide()
          $('footer').hide()
      }
  
      function afterPageLoad() {
          $('.container').show()
          $('footer').show()
          $('.load').hide()
      }

        setTimeout(afterPageLoad, 500);


    // On page load 
    checkThemeStatus() //Check if dark mode is enabled

    // Side bar toggle button click
    $("#toggle").click(function() {
        $("#sidebar").toggleClass("open");
        $(".container").toggleClass("container-opacity");
    });


    // Dark mode onclick
    $(".slider").click(function() {
        $("body").toggleClass("dark-mode");
        darkMode()
    });

    // Turn on dark mode
    function darkMode() {
        if ($("body").hasClass('dark-mode')) {
            $('.header-logo').attr('src', 'images/header-logo-white.png');
            $('#dark-mode-check').prop('checked');
            localStorage.setItem('darkmode', true);
        } else {
            $('.header-logo').attr('src', 'images/header-logo.png');
            $('#dark-mode-check').removeAttr('checked');
            localStorage.setItem('darkmode', false);
        }
      
       
    }

    // This function is called when the page is loaded
    function checkThemeStatus(){
        if (localStorage.getItem('darkmode') === 'true') {
            $(".slider").click()
            $("body").toggleClass("dark-mode");
            darkMode();
        }
    }



    // Seach function 

    $(".header-search-btn").click(function() {
        $(".search-form").toggleClass("show-form");
    }); 
   

});
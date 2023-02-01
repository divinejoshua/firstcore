$(document).ready(function(){

    
    // The image list 
    let sliderImages =  ['image-slider1.jpg','image-slider2.jpg','image-slider3.jpg']
    currentSliderImage = 0 
    $('.image-slider-item').attr('src', "images/"+sliderImages[currentSliderImage]);

    // Function to slide images 
    function slideRight(currentSliderImage){
        if (this.currentSliderImage >= sliderImages.length-1){
            this.currentSliderImage = 0;
            $("#slider-dot-3").removeClass("active-slider-dot");
        }else { 
            this.currentSliderImage = this.currentSliderImage + 1;
        }

        $("#slider-dot-"+Number(this.currentSliderImage)).removeClass("active-slider-dot");
        $("#slider-dot-"+Number(this.currentSliderImage+1)).addClass("active-slider-dot");
        
       
        // Set image
        $('.image-slider-item').attr('src', "images/"+sliderImages[this.currentSliderImage]);
    }

    // Auto slide after 2 seconds 
    setInterval(function() {slideRight(0)}, 2000);



    // PRODUCT PAGE =================================================

    let productImage = ['product-img1.jpg', 'product-img2.jpg', 'product-img3.jpg']
    let currentProductImage = 0
    $('.product-image').attr('src', "images/"+productImage[currentProductImage]);

    // Right Button 
    $(".move-right").click(function() {
        if (currentProductImage >= productImage.length-1){
            currentProductImage = 0
        } else {
            currentProductImage = currentProductImage + 1;
        }



        // Show video
        if(currentProductImage==2){
            $('video').show()
            $('.product-image').hide()
        }else {
            $('video').hide()
            $('.product-image').show()
            $('.product-image').attr('src', "images/"+productImage[currentProductImage]);     
        }
            
            $('.product-image').attr('src', "images/"+productImage[currentProductImage]);
        });
        
        // Left Button 
    $(".move-left").click(function() {
        if (currentProductImage ==0){
            currentProductImage = 2
        } else {
            currentProductImage = currentProductImage - 1;
        }


        // Show video
        if(currentProductImage==2){
            $('video').show()
            $('.product-image').hide()
        }else {
            $('video').hide()
            $('.product-image').show()
            $('.product-image').attr('src', "images/"+productImage[currentProductImage]);     
        }


        
        $('.product-image').attr('src', "images/"+productImage[currentProductImage]);
    });

    // Image One 
    $("#img-1").click(function() {
        currentProductImage = 0
        $('video').hide()
        $('.product-image').show()
        $('.product-image').attr('src', "images/"+productImage[currentProductImage]);
    });

     // Image Two 
     $("#img-2").click(function() {
        currentProductImage = 1
        $('video').hide()
        $('.product-image').show()
        $('.product-image').attr('src', "images/"+productImage[currentProductImage]);
    });

     // Image Three 
     $("#img-3").click(function() {
        currentProductImage = 2
        $('video').show()
        $('.product-image').hide()
    });





    


});
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDIT US AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {

           // PRE LOADER SCRIPTS
            $(window).load(function () {
                $("#loader").fadeOut();
                $("#pre-div").delay(1000).fadeOut("slow");
            });

            // SLIDER SCRIPTS
            $('#carousel-slider').carousel({
                interval: 2000 //TIME IN MILLI SECONDS
            })
           
            //  SCROLL SCRIPT FUNCTION FOR NAVBAR 
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
            //scrollReveal scripts
            window.scrollReveal = new scrollReveal();

            //REVIEWS SPEED
            $('#reviews').carousel({
                interval: 4000 //TIME IN MILLI SECONDS
            })
            // PRETTYPHOTO FUNCTION 

            $("a.preview").prettyPhoto({
                social_tools: false
            });
            // IMPACT KNOB CIRCLE 
            $(function () {
                $(".dial").knob();
            });
            /*====================================
            WRITE YOUR SCRIPTS HERE
            ======================================*/


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });
    //volunteer///
    document.addEventListener('DOMContentLoaded', function () {
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');
    
        tabLinks.forEach(link => {
            link.addEventListener('click', function () {
                const targetTab = this.getAttribute('data-tab');
    
                // Remove active class from all tab links and contents
                tabLinks.forEach(link => link.classList.remove('active'));
                tabContents.forEach(content => content.style.display = 'none');
    
                // Add active class to the clicked tab link and corresponding content
                this.classList.add('active');
                document.getElementById(targetTab).style.display = 'block';
            });
        });
    
        // Show the first tab content by default
        if (tabContents.length > 0) {
            tabContents[0].style.display = 'block';
        }
    });

    

//navigation bar

document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Check if the required elements exist
    if (tabLinks.length > 0 && tabContents.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function () {
                const targetTab = this.getAttribute('data-tab');

                // Remove active class from all tab links and hide all tab contents
                tabLinks.forEach(link => link.classList.remove('active'));
                tabContents.forEach(content => content.style.display = 'none');

                // Add active class to the clicked tab link and show corresponding content
                this.classList.add('active');
                const activeContent = document.getElementById(targetTab);
                if (activeContent) {
                    activeContent.style.display = 'block';
                }
            });
        });

        // Show the first tab content by default, if it exists
        tabLinks[0].classList.add('active'); // Ensure the first tab is active by default
        if (tabContents.length > 0) {
            tabContents[0].style.display = 'block'; // Display the first tab content
        }
    }
});
//carousel
$(document).ready(function () {
    // Function to adjust the size of carousel images
    function adjustCarouselImages() {
        var images = $("#carousel-slider .carousel-inner img");
        
        images.each(function() {
            var img = $(this);
            var containerWidth = img.parent().width(); // Get the parent container's width
            var containerHeight = img.parent().height(); // Get the parent container's height

            // Apply the width and height to the image
            img.css({
                "width": containerWidth + "px", // Set width to the container's width
                "height": containerHeight + "px", // Set height to the container's height
                "object-fit": "cover" // Ensure image maintains its aspect ratio without distortion
            });
        });
    }

    // Function to enable or disable carousel sliding based on screen size
    function toggleCarousel() {
        var screenWidth = window.innerWidth;
        
        if (screenWidth >= 768) { // Desktop view
            // Enable carousel sliding (in case it's disabled in mobile view)
            $('#carousel-slider').carousel('cycle');  // Start the carousel sliding
        } else { // Mobile view
            // Disable carousel sliding and show only the first image
            $('#carousel-slider').carousel('pause'); // Stop the carousel from sliding
            $('#carousel-slider .carousel-inner .item').not(':first').hide(); // Hide all except the first item
        }
    }

    // Call functions on page load
    adjustCarouselImages();
    toggleCarousel();

    // Adjust images and carousel behavior on window resize
    $(window).resize(function () {
        adjustCarouselImages();
        toggleCarousel();
    });
});

    // Custom Toggle Script for Dropdown
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function () {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function () {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
});


}(jQuery));

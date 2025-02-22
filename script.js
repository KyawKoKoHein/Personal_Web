$(document).ready(function () {
    // Fade-in effect for other sections
    $(".fade-in").css("opacity", "0").each(function (i) {
        $(this).delay(500 * i).animate({ opacity: 1 }, 1000);
    });

    // Check if the skill bars are visible in the viewport
    function checkSkillsInView() {
        $(".skill-bar").each(function () {
            var skillBarTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            // If the skill bar is in the viewport, animate it
            if (skillBarTop < windowBottom - 50) {
                var skill = $(this).find(".progress");
                if (!skill.hasClass("animated")) {  // Check if already animated
                    var width = skill.hasClass("java") ? "90%" :
                        skill.hasClass("spring-boot") ? "90%" :
                            skill.hasClass("js") ? "70%" :
                                skill.hasClass("php") ? "85%" :
                                    skill.hasClass("laravel") ? "85%" :
                                        skill.hasClass("apache-tomcat") ? "70%" :
                                            skill.hasClass("databases") ? "90%" : "0%";
                    skill.animate({ width: width }, 1000); // Animate over 1 second
                    skill.addClass("animated"); // Prevent re-triggering the animation
                }
            }
        });
    }

    // Call the function initially
    checkSkillsInView();

    // Trigger skill bar animation on scroll
    $(window).on("scroll", function () {
        checkSkillsInView();
    });
});

const text = "I'm a passionate web developer, Kyaw Ko Ko Hein";
let index = 0;
const typingTextElement = document.getElementById("typingText");

function typeWriter() {
    if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed here (100ms per character)
    }
}

// Start typing effect once the page is loaded
window.onload = function () {
    typeWriter();
};
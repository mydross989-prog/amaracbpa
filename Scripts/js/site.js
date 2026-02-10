$(document).ready(function () {
    // Navbar scroll effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Smooth scrolling
    $('a.nav-link[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Module Hover Animation
    $('.module-card').hover(
        function () { $(this).find('.module-icon i').addClass('bx-tada'); },
        function () { $(this).find('.module-icon i').removeClass('bx-tada'); }
    );

    // AI Chatbot Initialization (Simulated)
    console.log("Amarac AI Chatbot (Azure AI Integration) initialized.");
    
    // Add a floating chatbot trigger if not exists
    if ($('#ai-chatbot-trigger').length === 0) {
        $('body').append(`
            <div id="ai-chatbot-trigger" style="position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #F45D48; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; box-shadow: 0 10px 20px rgba(244, 93, 72, 0.4); z-index: 1000; transition: all 0.3s ease;">
                <i class='bx bx-bot' style="font-size: 30px;"></i>
                <div id="chatbot-badge" style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background: #00C2A0; border-radius: 50%; border: 2px solid white;"></div>
            </div>
        `);
    }

    $('#ai-chatbot-trigger').on('click', function() {
        alert("Amarac AI Assistant Powered by Microsoft Azure AI:\n\n'Hello! How can I help you automate your business today?'");
    });
});

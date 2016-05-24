$(function() {
    var $message = $('#message');

    $('button.btn.btn-default').click(function(){
        var letter = $( this ).html(); 

        // Delete key
        if ($( this ).hasClass('delete-btn')) {
            var html = $message.html();
            $message.html(html.substr(0, html.length - 1));
            // Set letter to an empty string so we don't print the word delete
            letter = '';
        };

        // Space bar
        if ($( this ).hasClass('space-btn')) {
            // Add a space
            letter = ' ';
        };

        // Enter key
        if ($ ( this ).hasClass('enter-btn')) {
            letter = '\n';
        };

        // Tab key
        if ($ ( this ).hasClass('tab-btn')) {
            letter = '\t';
        };

        // Caps lock
        if ($ ( this ).hasClass('caps-lock-btn')) {
            letter = '';
            $('button.btn.btn-default').toggleClass('uppercase');
        };

        // Shift key
        if ($ ( this ).hasClass('shift-btn')) {
            letter = '';
            $('button.btn.btn-default').toggleClass('uppercase');
        };

        if ($ ( this ).hasClass('uppercase')) {
            letter = letter.toUpperCase();
        };

        // Add letter to textarea
        $message.html($message.html() + letter);
        // Remove focus from button after added 
        $('button.btn.btn-default').blur();

    });
});
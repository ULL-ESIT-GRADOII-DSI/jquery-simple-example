var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        /* check to see if the content of the input box is empty */
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>"). // create a new paragraph element as a jQuery object, 
              text(                  // change the text content
                $(".comment-input input").val() // access the content of the input box
              );
            /* instead of the new comment just appearing */
            $new_comment.hide();
            $(".comments").append($new_comment);
            /* let’s have it fade in... */
            $new_comment.fadeIn();
            /* clear out the input box */
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);

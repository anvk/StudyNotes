/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Functionality for the popup window with note information */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    // constructor
    studyNotes.noteInfoPopup = function (container, config) {
        
        // Main variables
        var that = {
            container: $(container),
            noteInfoDelayShow: config.noteInfoDelayShow,
            noteInfoDelayHide: config.noteInfoDelayHide,
            noteInfoDelayBeforeHide: config.noteInfoDelayBeforeHide,
            beforeHideTimer: null
        };
        
        // Function to start a process of showing a div on the screen
        that.showPopup = function () {
            // Clear any timer is there is one
            clearTimeout(that.beforeHideTimer);
            that.beforeHideTimer = null;
            
            var timeToFadeIn = that.noteInfoDelayShow;
            
            // If there is an animation then just skip it and show the div
            if (that.container.is(':animated')) {
                // Stop any animation
                that.container.stop(true);
                
                // get a proper time needed to complete animation
                timeToFadeIn = ( (that.container.css("opacity") * 100) / 60 ) * timeToFadeIn;
            }
            
            // Show the div. Slowly or immediately
            that.container.fadeTo(timeToFadeIn, .6, function () {
                // set a timer to make the div to disappear
                that.beforeHideTimer = setTimeout(that.hidePopup, that.noteInfoDelayBeforeHide);
            });
        };
        
        // Function to start a process of hiding a div on the screen
        that.hidePopup = function () {
            that.container.fadeOut(that.noteInfoDelayHide);
        };
        
        return that;
    };

})(jQuery, studyNotes);
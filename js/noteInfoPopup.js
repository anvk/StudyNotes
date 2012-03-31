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
            delayShow: config.delayShow,
            delayHide: config.delayHide,
            delayBeforeHide: config.delayBeforeHide,
            opacity: config.opacity,
            beforeHideTimer: null
        };
        
        // Function which will be called right before returning that
        that.initComponent = function() {};
        
        // Function to start a process of showing a div on the screen
        that.showPopup = function (currentScreen) {
            
            // Change text of the div immediately
            that.setNoteData(currentScreen);
            
            // Clear any timer is there is one
            clearTimeout(that.beforeHideTimer);
            that.beforeHideTimer = null;
            
            var timeToFadeIn = that.delayShow;
            
            // If there is an animation then just skip it and show the div
            if (that.container.is(':animated')) {
                // Stop any animation
                that.container.stop(true);
                
                // get a proper time needed to complete animation
                timeToFadeIn = ( (that.container.css("opacity") * 100) / (that.opacity * 100) ) * timeToFadeIn;
            }
            
            // Show the div. Slowly or immediately
            that.container.fadeTo(timeToFadeIn, that.opacity, function () {
                // set a timer to make the div to disappear
                that.beforeHideTimer = setTimeout(that.hidePopup, that.delayBeforeHide);
            });
        };
        
        // Function to start a process of hiding a div on the screen
        that.hidePopup = function () {
            that.container.fadeOut(that.delayHide);
        };
        
        // Function to change the text on the div which is being shown and hidden
        that.setNoteData = function (currentScreen) {
            that.container.empty();
            
            var category = currentScreen.currentCategory;
            var note = currentScreen.currentNote;
                                       
            var complexDiv = $("<div/>").css("display", "block").css("overflow", "hidden")
                            .append($("<div/>").html("Category: " + category.name).css("float", "left"))
                            .append($("<div/>").html((currentScreen.noteIndex + 1) + "/" + category.notes.length).css("float", "right"));
            
            that.container.append(complexDiv);
            that.container.append($("<div/>").html("Name: " + note.name));
            that.container.append($("<div/>").html("Created By: " + note.author));
            that.container.append($("<div/>").html("Revision: " + note.revision));
        };
        
        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
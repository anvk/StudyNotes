/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Functionality for the popup window with note information */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    // constructor
    studyNotes.noteInfoPopup = function (config) {
        
        // Component variables
        var that = {
            beforeHideTimer: null
        };
        
        that = $.extend(config, that);
        
        // Function which will be called right before returning that
        that.initComponent = function() {};
        
        // Function to start a process of showing a div on the screen
        that.showPopup = function (currentScreen) {
            
            // Change text of the div immediately
            that.setNoteData(currentScreen);
            
            // Clear any timer is there is one
            clearTimeout(that.beforeHideTimer);
            that.beforeHideTimer = null;
            
            var timeToFadeIn = that.delayShow,
                opacity = that.opacity,
                container = that.container;
            
            // If there is an animation then just skip it and show the div
            if (that.container.is(':animated')) {
                // Stop any animation
                that.container.stop(true);
                
                // get a proper time needed to complete animation
                timeToFadeIn = ( (container.css("opacity") * 100) / (opacity * 100) ) * timeToFadeIn;
            }
            
            // Show the div. Slowly or immediately
            container.fadeTo(timeToFadeIn, opacity, function () {
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
            
            var category = currentScreen.currentCategory,
                note = currentScreen.currentNote,
                container = that.container;
                
            container.empty();
                              
            var complexDiv = $("<div/>").css("display", "block").css("overflow", "hidden")
                            .append($("<div/>").html("Category: " + category.name).css("float", "left"))
                            .append($("<div/>").html((currentScreen.noteIndex + 1) + "/" + category.notes.length).css("float", "right"));
            
            container.append(complexDiv);
            container.append($("<div/>").html("Name: " + note.name));
            container.append($("<div/>").html("Created By: " + note.author));
            container.append($("<div/>").html("Revision: " + note.revision));
        };
        
        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
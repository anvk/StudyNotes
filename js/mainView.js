/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Controller part of the main View. */
/* All UI interactions go here */

/*global jQuery, studyNotes, window*/

// Function which is loaded on the app startup
(function ($, studyNotes) {

    "use strict";

    window.appBootstrap = function () {

        var config = studyNotes.config,
            core = studyNotes.core(config),
            controlPanel = studyNotes.controlPanel(".controlPanel", config),
            noteInfoPopup = studyNotes.noteInfoPopup(".noteInfoPopup", config.globals.noteInfo);

        // First set the debug settings
        core.setDebug();
        
        // Make any config/core preparations in advance
        core.setDefaults();
        noteInfoPopup.showPopup(config.currentState.currentScreen);

        // Create a markup for all notes
        core.loadNotes();

        // Show only an active default note
        core.showCurrentScreen();

        // Add swipeEvents
        $(".noteViews").live('swipedown',function() {

            core.changeScreen({
                type: "category",
                next: true
            });
            
            noteInfoPopup.showPopup(config.currentState.currentScreen);
        });

        $(".noteViews").live('swipeup',function() {

            core.changeScreen({
                type: "category",
                next: false
            });
            
            noteInfoPopup.showPopup(config.currentState.currentScreen);
        });

        $(".noteViews").live('swipeleft',function() {

            core.changeScreen({
                type: "note",
                next: false
            });
            
            noteInfoPopup.showPopup(config.currentState.currentScreen);
        });

        $(".noteViews").live('swiperight',function() {

            core.changeScreen({
                type: "note",
                next: true
            });
            
            noteInfoPopup.showPopup(config.currentState.currentScreen);
        });
    };

})(jQuery, studyNotes);
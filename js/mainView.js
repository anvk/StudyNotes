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
            noteInfoPopup = studyNotes.noteInfoPopup(".noteInfoPopup", config.globals);

        // First set the debug settings
        core.setDebug();

        // Create a markup for all notes
        core.loadNotes();

        // Show only an active default note
        core.showCurrentScreen();

        // Add swipeEvents
        $(".noteViews").live('swipedown',function() {
            //alert("Swiped Down");

            core.changeScreen({
                type: "category",
                next: true
            });
            
            noteInfoPopup.showPopup();
        });

        $(".noteViews").live('swipeup',function() {
            //alert("Swiped Up");

            core.changeScreen({
                type: "category",
                next: false
            });
            
            noteInfoPopup.showPopup();
        });

        $(".noteViews").live('swipeleft',function() {
            //alert("Swiped Left");

            core.changeScreen({
                type: "note",
                next: true
            });
            
            noteInfoPopup.showPopup();
        });

        $(".noteViews").live('swiperight',function() {
            //alert("Swiped Right");

            core.changeScreen({
                type: "note",
                next: false
            });
            
            noteInfoPopup.showPopup();
        });
    };

})(jQuery, studyNotes);
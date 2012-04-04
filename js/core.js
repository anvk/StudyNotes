/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Main functionality of the application. */
/* All calculations and config modifications go here */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    window.appBootstrap = function () {

        var config = studyNotes.config,
            core = studyNotes.core(config),
            controlPanel = studyNotes.controlPanel(".controlPanel", config.globals),
            noteInfoPopup = studyNotes.noteInfoPopup(".noteInfoPopup", config.globals.noteInfo),
            mainView = studyNotes.mainView(".mainView", config, noteInfoPopup, controlPanel);

        noteInfoPopup.showPopup(config.currentState.currentScreen);
    };

    studyNotes.core = function (config) {
        var that = {};
        
        // Function which will be called right before returning that
        that.initComponent = function() {
            // First set the debug settings
            that.setDebug();
            
            // Make any config/core preparations in advance
            that.setDefaults();
        };

        that.setDefaults = function() {
            var currentScreen = config.currentState.currentScreen;
            
            if (!currentScreen.currentCategory) {
                config.currentState.currentScreen.currentCategory = config.categories[currentScreen.categoryIndex];
            }
            
            if (!currentScreen.currentNote) {
                config.currentState.currentScreen.currentNote = currentScreen.currentCategory.notes[currentScreen.noteIndex];
            }
        };
        
        // Function which sets interaction and view of the app to test in a browser
        that.setDebug = function() {
            if (!config.currentState.debug) {
                return;
            }

            var debugConfig = config.globals.debugConfig;
            $(".mainView").css({
                height: debugConfig.height,
                width: debugConfig.width
            });
        };

        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
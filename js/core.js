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
            
            controlPanel = studyNotes.controlPanel({
                container: $(".controlPanel"),
                slideImageButtonClass: "slideButtonImage",
                strings: {
                    slideImageButtonSlideOut: "".concat(config.globals.imagePath, "slideOut", config.globals.noteExtension),
                    slideImageButtonSlideIn: "".concat(config.globals.imagePath, "slideIn", config.globals.noteExtension)
                }
            }),
            
            noteInfoPopup = studyNotes.noteInfoPopup({ 
                container: $(".noteInfoPopup"),
                delayShow: 2000,
                delayHide: 2000,
                delayBeforeHide: 2000,
                opacity: 0.6
            }),
            
            mainView = studyNotes.mainView({
                container: $(".mainView"),
                notesViewContainer: $(".noteViews"),
                noteInfoPopup: noteInfoPopup,
                controlPanel: controlPanel
            }, config);

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
            // Remove JQuery loading page
            $(".ui-loader").css({ "display": "none" });
            $(".ui-page").css({ "min-height": "550px" });

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
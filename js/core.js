/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Main functionality of the application. */
/* All calculations and config modifications go here */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    window.appBootstrap = function () {

        var config = studyNotes.config,
            
            core = studyNotes.core({
                debug: config.currentState.debug,
                currentScreen: config.currentState.currentScreen,
                categories: config.categories,
                debugConfig: config.currentState.debugConfig,
                mainViewContainer: $(".mainView")
            }),
            
            controlPanel = studyNotes.controlPanel({
                container: $(".controlPanel"),
                slideImageButtonClass: "slideButtonImage",
                strings: {
                    slideImageButtonSlideOut: "images/slideOut.png",
                    slideImageButtonSlideIn: "images/slideIn.png"
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
                container: core.mainViewContainer,
                notesViewContainer: $(".noteViews"),
                noteInfoPopup: noteInfoPopup,
                controlPanel: controlPanel,
                currentScreen: core.currentScreen,
                categories: core.categories,
                strings: {
                    notePath: config.globals.notePath,
                    noteExtension: config.globals.noteExtension,
                    types: {
                        category: "category",
                        note: "note"
                    }
                },
                styles: {
                    noteView: "noteView",
                    noteImage: "noteImage",
                    activeNote: "activeNote"
                }
            });

        noteInfoPopup.showPopup(config.currentState.currentScreen);
    };

    studyNotes.core = function (config) {
        var that = {};
        
        that = $.extend(config, that);
        
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
            
            var currentScreen = that.currentScreen;
            if (!currentScreen.currentCategory) {
                that.currentScreen.currentCategory = that.categories[currentScreen.categoryIndex];
            }
            
            if (!currentScreen.currentNote) {
                that.currentScreen.currentNote = currentScreen.currentCategory.notes[currentScreen.noteIndex];
            }
        };
        
        // Function which sets interaction and view of the app to test in a browser
        that.setDebug = function() {
            var debugConfig = that.debugConfig;
            
            if (!debugConfig.debug) {
                return;
            }

            that.mainViewContainer.css({
                height: debugConfig.height,
                width: debugConfig.width
            });
        };

        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
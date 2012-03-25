/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Main functionality of the application. */
/* All calculations and config modifications go here */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    studyNotes.core = function (config) {
        var that = {};

        // Function which sets interaction and view of the app to test in a browser
        that.setDebug = function() {
            if (!config.currentState.debug) {
                return;
            }

            $(".mainView").css({
                height: "600px",
                width: "1024px"
            });
        };

        // Function which creates UI markup with notes based on the config
        that.loadNotes = function() {
            var noteViewsSelector = ".noteViews";
            var globals = config.globals;
            $.each(config.categories, function (i, category) {

                // Add a selection of the category here to somewhere
                $.each(category.notes, function (j, note) {

                    var noteView = $("<div />").append($("<img />")
                                               .attr("src", "".concat(globals.notePath, category.name,"/", note.name, globals.noteExtension))
                                               .addClass("noteImage"));
/*                     var noteView = $("<div />").attr("background-image", "".concat(globals.notePath, category.name,"/", note.name, globals.noteExtension)); */
                    
                    $(noteViewsSelector).append(noteView.addClass("".concat("noteView category-", category.name, "-", note.name)));

                });

            });
        };

        // Function which hides all notes and shows only an active one
        that.showCurrentScreen = function() {
            var noteViewSelector = ".noteView";
            var currentScreen = config.currentState.currentScreen;

            var activeCategoryName = config.categories[currentScreen.categoryIndex].name;
            var activeNoteName = config.categories[currentScreen.categoryIndex].notes[currentScreen.noteIndex].name;

            $(noteViewSelector).removeClass("activeNote");

            $("".concat(".category-", activeCategoryName, "-", activeNoteName)).addClass("activeNote");
        };

        // Function which changes the currentScreen structure and forces a refresh of the screen
        //
        // It expects an object of type
        // {
        //   next - true/false defines an increment or a decrement for the changing screens
        //   type - category/note defines how screen would be changed
        // }
        that.changeScreen = function (data) {
            if(!!!data) {
                return;
            }

            data.type = (data.type === undefined) ? "" : data.type;
            data.next = (data.next === undefined) ? true : data.next;

            var currentScreen = config.currentState.currentScreen;
            var index = 0;
            var maxIndex = 0;
            var newIndex = 0;

            if (data.type === "note") {
                index = currentScreen.noteIndex;
                maxIndex = config.categories[currentScreen.categoryIndex].notes.length - 1;
            } else if (data.type === "category") {
                index = currentScreen.categoryIndex;
                maxIndex = config.categories.length - 1;
            }

            if (data.next) {
                newIndex = (index === maxIndex) ? 0 : ++index;
            } else {
                newIndex = (index === 0) ? maxIndex : --index;
            }

            if (data.type === "note") {
                config.currentState.currentScreen.noteIndex = newIndex;
            } else if (data.type === "category") {
                config.currentState.currentScreen.categoryIndex = newIndex;
                config.currentState.currentScreen.noteIndex = 0;
            }

            that.showCurrentScreen();
        };

        return that;
    };

})(jQuery, studyNotes);
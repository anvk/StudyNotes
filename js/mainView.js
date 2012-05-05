/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Functionality for the main View where users see their notes */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    // constructor
    studyNotes.mainView = function (config) {
        
        // Main variables
        var that = {};
        
        that = $.extend(config, that);
        
        // Function which will be called right before returning that
        that.initComponent = function() {
            // Create a markup for all the pages
            that.loadNotes();
            
            // Show only an active default note
            that.showCurrentScreen();
            
            // Add swipeEvents
            that.notesViewContainer.live('swipedown',function() {
    
                that.changeScreen({
                    type: "category",
                    next: true
                });
                
                that.noteInfoPopup.showPopup(that.currentScreen);
                that.controlPanel.slideIn();
            });
    
            that.notesViewContainer.live('swipeup',function() {
    
                that.changeScreen({
                    type: "category",
                    next: false
                });
                
                that.noteInfoPopup.showPopup(that.currentScreen);
                that.controlPanel.slideIn();
            });
    
            that.notesViewContainer.live('swipeleft',function() {
    
                that.changeScreen({
                    type: "note",
                    next: false
                });
                
                that.noteInfoPopup.showPopup(that.currentScreen);
                that.controlPanel.slideIn();
            });
    
            that.notesViewContainer.live('swiperight',function() {
    
                that.changeScreen({
                    type: "note",
                    next: true
                });
                
                that.noteInfoPopup.showPopup(that.currentScreen);
                that.controlPanel.slideIn();
            });
        };
        
        // Function which creates UI markup with notes based on the stuff
        that.loadNotes = function() {
            var strings = that.strings;
            $.each(that.categories, function (i, category) {

                // Add a selection of the category here to somewhere
                $.each(category.notes, function (j, note) {
                    // Create a div with a centered and scaled image inside
                    var noteView = $("<div />").append($("<img />")
                                               .attr("src", "".concat(strings.notePath, category.name,"/", note.name, strings.noteExtension))
                                               .addClass("noteImage"));
                    // Add a class for every note so that we can find any note we want later on
                    that.notesViewContainer.append(noteView.addClass("".concat("noteView category-", category.name, "-", note.name)));
                });
            });
        };
        
        // Function which hides all notes and shows only an active one
        that.showCurrentScreen = function() {
            var noteViewSelector = ".noteView";

            var activeCategoryName = that.categories[that.currentScreen.categoryIndex].name;
            var activeNoteName = that.categories[that.currentScreen.categoryIndex].notes[that.currentScreen.noteIndex].name;

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
            // If data is empty then just chill
            if(!!!data) {
                return;
            }
            
            // Be default type is empty and by default the swipe movement bring next screen in the sequence
            data.type = (data.type === undefined) ? "" : data.type;
            data.next = (data.next === undefined) ? true : data.next;
            
            var index = 0;
            var maxIndex = 0;
            var newIndex = 0;
            
            // Get current index and max screen numbers depending on type
            if (data.type === "note") {
                index = that.currentScreen.noteIndex;
                maxIndex = that.categories[that.currentScreen.categoryIndex].notes.length - 1;
            } else if (data.type === "category") {
                index = that.currentScreen.categoryIndex;
                maxIndex = that.categories.length - 1;
            }
            
            // Calculate next item in the sequence. Remember that we are not stoping at the max and moving to 0
            if (data.next) {
                newIndex = (index === maxIndex) ? 0 : ++index;
            } else {
                newIndex = (index === 0) ? maxIndex : --index;
            }
            
            // Update current state
            if (data.type === "note") {
                that.currentScreen.noteIndex = newIndex;
                
                that.currentScreen.currentNote = that.categories[that.currentScreen.categoryIndex].notes[newIndex];
            } else if (data.type === "category") {
                that.currentScreen.categoryIndex = newIndex;
                that.currentScreen.noteIndex = 0;
                
                that.currentScreen.currentCategory = that.categories[newIndex];
                that.currentScreen.currentNote = that.categories[newIndex].notes[0];
            }
            
            // Update the screen
            that.showCurrentScreen();
        };
                
        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
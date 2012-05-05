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
            
            var typeCategory = that.strings.types.category,
                typeNote = that.strings.types.note;
            
            // Add swipeEvents
            that.notesViewContainer.live('swipedown',function() {
                that.doSlide({
                    type: typeCategory,
                    next: true
                });
            });
    
            that.notesViewContainer.live('swipeup',function() {
                that.doSlide({
                    type: typeCategory,
                    next: false
                });
            });
    
            that.notesViewContainer.live('swipeleft',function() {
                that.doSlide({
                    type: typeNote,
                    next: false
                });
            });
    
            that.notesViewContainer.live('swiperight',function() {
                that.doSlide({
                    type: typeNote,
                    next: true
                });
            });
        };
        
        that.doSlide = function (data) {
            that.changeScreen(data);
            that.noteInfoPopup.showPopup(that.currentScreen);
            that.controlPanel.slideIn();
        };
        
        // Function which creates UI markup with notes based on the stuff
        that.loadNotes = function() {
            var notePath = that.strings.notePath,
                noteExtension = that.strings.noteExtension,
                noteImageStyle = that.styles.noteImage,
                noteViewStyle = that.styles.noteView;
            
            $.each(that.categories, function (i, category) {

                // Add a selection of the category here to somewhere
                $.each(category.notes, function (j, note) {
                    // Create a div with a centered and scaled image inside
                    var noteView = $("<div />").append($("<img />")
                                               .attr("src", "".concat(notePath, category.name, "/", note.name, noteExtension))
                                               .addClass(noteImageStyle));
                    // Add a class for every note so that we can find any note we want later on
                    that.notesViewContainer.append(noteView.addClass("".concat(noteViewStyle , " category-", category.name, "-", note.name)));
                });
            });
        };
        
        // Function which hides all notes and shows only an active one
        that.showCurrentScreen = function() {
            var noteViewSelector = ".noteView";

            var activeCategoryName = that.categories[that.currentScreen.categoryIndex].name;
            var activeNoteName = that.categories[that.currentScreen.categoryIndex].notes[that.currentScreen.noteIndex].name;

            $(noteViewSelector).removeClass(that.styles.activeNote);

            $("".concat(".category-", activeCategoryName, "-", activeNoteName)).addClass(that.styles.activeNote);
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
            
            var currentScreen = that.currentScreen,
                categories = that.categories,
                index = 0,
                maxIndex = 0,
                newIndex = 0,
                next = data.next,
                type = data.type,
                currentNotes = categories[currentScreen.categoryIndex].notes,
                typeCategory = that.strings.types.category,
                typeNote = that.strings.types.note;
            
            // Be default type is empty and by default the swipe movement bring next screen in the sequence
            type = (type === undefined) ? "" : type;
            next = (next === undefined) ? true : next;
            
            // Get current index and max screen numbers depending on type
            if (type === typeNote) {
                index = currentScreen.noteIndex;
                maxIndex = currentNotes.length - 1;
            } else if (type === typeCategory) {
                index = currentScreen.categoryIndex;
                maxIndex = categories.length - 1;
            }
            
            // Calculate next item in the sequence. Remember that we are not stoping at the max and moving to 0
            if (next) {
                newIndex = (index === maxIndex) ? 0 : ++index;
            } else {
                newIndex = (index === 0) ? maxIndex : --index;
            }
            
            // Update current state
            if (type === typeNote) {
                currentScreen.noteIndex = newIndex;
                currentScreen.currentNote = currentNotes[newIndex];
            } else if (type === typeCategory) {
                currentScreen.categoryIndex = newIndex;
                currentScreen.noteIndex = 0;
                currentScreen.currentCategory = categories[newIndex];
                currentScreen.currentNote = categories[newIndex].notes[0];
            }
            
            // Update the screen
            that.showCurrentScreen();
        };
                
        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
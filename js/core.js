/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Main functionality of the application. */
/* All calculations and config modifications go here */

var core = new function() {
    var that = this;
    
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
        
        for(var i=0; i < config.categories.length; i++) {
            var category = config.categories[i];
            // Add a selection of the category here to somewhere
            
            for(var j=0; j < category.notes.length; j++) {
                note = category.notes[j];
                
                var noteView = $("<div />").append($("<img />").attr("src", 
                        "".concat(globals.notePath, category.name,"/", note.name, globals.noteExtension)));
                
                $(noteViewsSelector).append(noteView.addClass("".concat("noteView category-", category.name, "-", note.name)));
            }
        }
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
    
    that.changeCategory = function(isNext, categoryIndex) {
        
        if (categoryIndex || categoryIndex === 0) {
            config.currentState.currentScreen.categoryIndex = categoryIndex;
            return;
        }
        
        var numCategories = config.categories.length;
        var currentCategoryIndex = config.currentState.currentScreen.categoryIndex;
        
        if (isNext) {
            config.currentState.currentScreen.categoryIndex = (currentCategoryIndex === numCategories-1) ? 0 : ++currentCategoryIndex;
        } else {
            config.currentState.currentScreen.categoryIndex = (currentCategoryIndex === 0) ? numCategories-1 : --currentCategoryIndex;
        }
        
        that.changeNote(true, 0);
    };
    
    that.changeNote = function(isNext, noteIndex) {

        if (noteIndex || noteIndex === 0) {
            config.currentState.currentScreen.noteIndex = noteIndex;
            return;
        }
        
        var numNotes = config.categories[config.currentState.currentScreen.categoryIndex].notes.length;
        var currentNoteIndex = config.currentState.currentScreen.noteIndex;
        
        if (isNext) {
            config.currentState.currentScreen.noteIndex = (currentNoteIndex === numNotes-1) ? 0 : ++currentNoteIndex;
        } else {
            config.currentState.currentScreen.noteIndex = (currentNoteIndex === 0) ? numNotes-1 : --currentNoteIndex;
        }
    };
    
};

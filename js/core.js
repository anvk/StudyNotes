/* Alexey Novak, Yuriy Zenevich */
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
    that.showNote = function() {
        var noteViewSelector = ".noteViews";
        var activeNote = config.currentState.activeNote;
        
        $(noteViewSelector).removeClass("activeNote");
        
        $("".concat(".category-", activeNote.category, "-", activeNote.note)).addClass("activeNote");
    };
};
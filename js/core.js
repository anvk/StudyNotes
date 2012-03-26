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
        
        var currentScreen = config.currentState.currentScreen;
        var index = 0;
        var maxIndex = 0;
        var newIndex = 0;
        
        // Get current index and max screen numbers depending on type
        if (data.type === "note") {
            index = currentScreen.noteIndex;
            maxIndex = config.categories[currentScreen.categoryIndex].notes.length - 1;
        } else if (data.type === "category") {
            index = currentScreen.categoryIndex;
            maxIndex = config.categories.length - 1;
        }
        
        // Calculate next item in the sequence. Remember that we are not stoping at the max and moving to 0
        if (data.next) {
            newIndex = (index === maxIndex) ? 0 : ++index;
        } else {
            newIndex = (index === 0) ? maxIndex : --index;
        }
        
        // Update current state
        if (data.type === "note") {
            config.currentState.currentScreen.noteIndex = newIndex;
        } else if (data.type === "category") {
            config.currentState.currentScreen.categoryIndex = newIndex;
            config.currentState.currentScreen.noteIndex = 0;
        }
        
        // Update the screen
        that.showCurrentScreen();
    };
    
};

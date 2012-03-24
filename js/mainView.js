/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Controller part of the main View. */
/* All UI interactions go here */

// Function which is loaded on the app startup
function appBootstrap() {
    // First set the debug settings
    core.setDebug();
    
    // Create a markup for all notes
    core.loadNotes();
    
    // Show only an active default note
    core.showCurrentScreen();
    
    // Add swipeEvents
    $(".noteViews").live('swipedown',function() {
        alert("Swiped Down");
        
        core.changeCategory(true);
        core.showCurrentScreen();
    });
    
    $(".noteViews").live('swipeup',function() {
        alert("Swiped Up");
        
        core.changeCategory(false);
        core.showCurrentScreen();
    });
    
    $(".noteViews").live('swipeleft',function() {
        alert("Swiped Left");
        
        core.changeNote(false);
        core.showCurrentScreen();
    });
    
    $(".noteViews").live('swiperight',function() {
        alert("Swiped Right");
        
        core.changeNote(true);
        core.showCurrentScreen();
    });
};
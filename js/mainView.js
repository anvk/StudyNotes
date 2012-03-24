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
        
        core.changeScreen({
            type: "category",
            next: true
        });
    });
    
    $(".noteViews").live('swipeup',function() {
        alert("Swiped Up");
        
        core.changeScreen({
            type: "category",
            next: false
        });
    });
    
    $(".noteViews").live('swipeleft',function() {
        alert("Swiped Left");
        
        core.changeScreen({
            type: "note",
            next: true
        });
    });
    
    $(".noteViews").live('swiperight',function() {
        alert("Swiped Right");
        
        core.changeScreen({
            type: "note",
            next: false
        });
    });
};
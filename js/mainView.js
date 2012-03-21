/* Alexey Novak, Yuriy Zenevich */
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
    core.showNote();
};
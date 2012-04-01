/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Control panel for StudyNotes */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    // constructor
    studyNotes.controlPanel = function (container, config) {
        
        // Main variables
        var that = {
            container: $(container)
        };
        
        // Function which will be called right before returning that
        that.initComponent = function() {
            that.container.click(function(){
                that.container.animate({right: "0px"}, {queue:false, duration:3000});
            });
        };
                
        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
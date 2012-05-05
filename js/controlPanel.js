/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Control panel for StudyNotes */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    // constructor
    studyNotes.controlPanel = function (config) {
        
        // Main variables
        var that = {
            slideButton: null
        };
        
        that = $.extend(config, that);
        
        // Function which will be called right before returning that
        that.initComponent = function() {
            var slideButton = $("<div />", {"class": "slideButton"});
            
            slideButton.append($("<div />", {
                    "css": {
                        "vertical-align": "middle",
                        "text-align": "center",
                        "display": "table-cell",
                        "width": "30px",
                        "height": "30px"
                    }
                }).append($("<img />", {
                    "class": that.slideImageButtonClass,
                    "src": that.strings.slideImageButtonSlideOut
                }))
            );
            
            that.container.append(slideButton);
            
            that.container.click(that.slideOut);
            
            that.slideButton = slideButton;
        };
        
        that.slideOut = function() {
            that.container.animate({right: "-10px"}, {queue:false, duration:2000});
            $("." + that.slideImageButtonClass).attr("src", that.strings.slideImageButtonSlideIn);
        };
        
        that.slideIn = function() {
            that.container.animate({right: "-220px"}, {queue:false, duration:2000});
            $("." + that.slideImageButtonClass).attr("src", that.strings.slideImageButtonSlideOut);
        };
        
        that.initComponent();
        return that;
    };

})(jQuery, studyNotes);
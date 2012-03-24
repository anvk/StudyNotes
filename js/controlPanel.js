/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Main functionality of the application. */
/* All calculations and config modifications go here */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    var setupStudyNotes = function (that) {
        that.panel = studyNotes.controlPanel.panel(that.panelContainer);
    };

    var buildMarkup = function (that) {
        that.panelContainer = $("<div/>").addClass("controlPanel-panel");
        that.container.append(that.panelContainer);
    };

    studyNotes.createWidget = function (container) {
        return {
            container: $(container)
        };
    };

    studyNotes.controlPanel = function (container, config) {
        var that = studyNotes.createWidget(container);

        that.show = function () {};
        that.hide = function () {};

        buildMarkup(that);
        setupStudyNotes(that);

        return that;
    };

    studyNotes.controlPanel.panel = function (container) {
        var that = studyNotes.createWidget(container);
        return that;
    };

})(jQuery, studyNotes);
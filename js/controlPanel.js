/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Main functionality of the application. */
/* All calculations and config modifications go here */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

    var setupStudyNotes = function (that) {
        that.panel = studyNotes.controlPanel.panel(that.panelContainer);
        that.latch = studyNotes.controlPanel.latch(that.latchContainer);
    };

    var buildMarkup = function (that) {
        that.container.addClass("hidden");
        that.panelContainer = $("<div/>").addClass("controlPanel-panel");
        that.latchContainer = $("<div/>").addClass("controlPanel-latch");
        that.container.append(that.panelContainer);
        that.container.prepend(that.latchContainer);
    };

    studyNotes.createWidget = function (container) {
        return {
            container: $(container)
        };
    };

    studyNotes.controlPanel = function (container, config) {
        var that = studyNotes.createWidget(container);

        buildMarkup(that);
        setupStudyNotes(that);

        return that;
    };

    studyNotes.controlPanel.panel = function (container) {
        var that = studyNotes.createWidget(container);
        return that;
    };

    studyNotes.controlPanel.latch = function (container) {
        var that = studyNotes.createWidget(container);
        return that;
    };

})(jQuery, studyNotes);
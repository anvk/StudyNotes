/* Alexey Novak, Yura Zenevich */
/* March 2012 */

/* Functionality for the popup window with note information */

/*global jQuery, studyNotes*/

(function ($, studyNotes) {

    "use strict";

/*
    studyNotes.noteInfoPopup = function (container, config) {
        var that = studyNotes.createWidget(container);

        buildMarkup(that);
        setupNoteInfoPopup(that);

        return that;
    };

    var buildMarkup = function (that) {
        that.container.addClass("hidden");
        that.panelPopupContainer = $("<div/>").addClass("noteInfoPopup");
        that.container.append(that.panelPopupContainer);
    };
    
    var setupNoteInfoPopup = function (that) {
        that.panelPopup = studyNotes.noteInfoPopup.panel(that.panelPopupContainer);
        that.visible = false;
    };
    
    studyNotes.noteInfoPopup.panel = function (container) {
        var that = studyNotes.createWidget(container);
        return that;
    };
    
    var hideShowInfoPopup = function (that, visible) {
        if (!that.visible && visible) {
            alert('1');
        } else if (!that.visible && !visible) {
            alert('2');
        }
    };
*/

    studyNotes.noteInfoPopup = function (container, config) {
        
        var that = {
            container: $(container),
            fadingOut: false,
            noteInfoDelayShow: config.noteInfoDelayShow,
            noteInfoDelayHide: config.noteInfoDelayHide,
            noteInfoDelayBeforeHide: config.noteInfoDelayBeforeHide,
            beforeHideTimer: null
        };
        
        that.showPopup = function () {
            clearTimeout(that.beforeHideTimer);
            that.beforeHideTimer = null;
            
            var timeToFaidIn = that.noteInfoDelayShow;
            
            if (that.fadingOut) {
                that.fadingOut = false;
                that.container.stop().show(1, that.waitBeforeHide);
                timeToFaidIn = 1;
                return;
            }
               
            that.container.fadeIn(timeToFaidIn, that.waitBeforeHide);
        };
        
        that.waitBeforeHide = function () {
            that.beforeHideTimer = setTimeout(that.hidePopup, that.noteInfoDelayBeforeHide);
        };
        
        that.hidePopup = function () {
            that.fadingOut = true;
            that.container.fadeOut(that.noteInfoDelayHide);
        };
        
        return that;
    };

})(jQuery, studyNotes);
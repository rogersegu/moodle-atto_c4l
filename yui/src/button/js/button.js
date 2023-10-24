// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto - Components for Learning UI logic added.
 *
 * @package    atto_c4l
 * @copyright  2021 Roger Segú {@link https://rogersegu.me}
 * @author     Roger Segú {@link https://rogersegu.me}
 * @author     Based on code originally written by Justin Hunt {@link https://poodll.com}.
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_c4l-button
 */

/**
 * Atto text editor plugin custom button class logic.
 *
 * @namespace M.atto_c4l
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var components = [
    {
        name: M.util.get_string('keyconcept', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-keyconcept-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-keyconcept\">" +
            "{{PLACEHOLDER}}</div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales."
    },
    {
        name: M.util.get_string('tip', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-tip-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-tip\">" +
            "{{PLACEHOLDER}}</div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales."
    },
    {
        name: M.util.get_string('reminder', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-reminder-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-reminder\">" +
            "{{PLACEHOLDER}}</div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales."
    },
    {
        name: M.util.get_string('quote', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-quote-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-quote\">" +
            "<div class=\"c4l-quote-body\"><div class=\"c4l-quote-line\"></div><div class=\"c4l-quote-text\">" +
            "<p>{{PLACEHOLDER}}</p>" +
            "</div></div><div class=\"c4l-quote-caption\"><span>Marcus Tullius Cicero</span>" +
            "De Finibus Bonorum et Malorum</div></div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus." +
            " Praesent dictum in velit sed dapibus."
    },
    {
        name: M.util.get_string('dodontcards', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-dodontcards-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-dodontcards\">" +
            "<div class=\"c4l-dodontcards-do\">{{PLACEHOLDER}}</div>" +
            "<div class=\"c4l-dodontcards-dont\">Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Phasellus a posuere nibh, eu mollis lacus. " +
            "Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes," +
            " nascetur ridiculus mus.</div></div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus." +
            " Praesent dictum in velit sed dapibus." +
            "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
        name: M.util.get_string('readingcontext', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-readingcontext-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-readingcontext\">" +
            "<p>{{PLACEHOLDER}}</p>" +
            "<div class=\"c4l-readingcontext-caption\"><span>Marcus Tullius Cicero</span>" +
            "De Finibus Bonorum et Malorum</div></div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo, hendrerit ac sem vitae," +
            " posuere egestas nisi. Lorem ipsum dolor sit amet. " +
            "Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi."
    },
    {
        name: M.util.get_string('example', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-example-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-example\">" +
            "<h1>Lorem impsum dolor sit amet</h1>" +
            "<p>{{PLACEHOLDER}}</p></div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Phasellus a posuere nibh, eu mollis lacus." +
            " Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes," +
            " nascetur ridiculus mus."
    },
    {
        name: M.util.get_string('figure', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-figure-icon",
        code: "<p class=\"c4l-spacer\"></p><figure class=\"c4l-figure\">" +
            "<img src=\"https://source.unsplash.com/random/800x600\" alt=\"Lorem impsum dolor sit amet\">" +
            "<figcaption><em class=\"c4l-figure-footer\">{{PLACEHOLDER}}</em><span class=\"c4l-figure-caption\">" +
            "<strong>Font: </strong>Phasellus a posuere nibh.</span>" +
            "</figcaption></figure><p><br></p>",
        text: "Consectetur adipiscing elit."
    },
    {
        name: M.util.get_string('tag', 'atto_c4l'),
        type: "contextual",
        imageClass: "atto-c4l-tag-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-display-left\"><div class=\"c4l-tag\">{{PLACEHOLDER}}</div></div>",
        text: "Lorem ipsum"
    },
    {
        name: M.util.get_string('attention', 'atto_c4l'),
        type: "procedural",
        imageClass: "atto-c4l-attention-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-attention\">" +
            "{{PLACEHOLDER}}</div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales."
    },
    {
        name: M.util.get_string('estimatedtime', 'atto_c4l'),
        type: "procedural",
        imageClass: "atto-c4l-estimatedtime-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-inline-group\"><div class=\"c4l-estimatedtime\">" +
            "{{PLACEHOLDER}} <span>min</span></div></div>",
        text: "15"
    },
    {
        name: M.util.get_string('duedate', 'atto_c4l'),
        type: "procedural",
        imageClass: "atto-c4l-duedate-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-inline-group\"><div class=\"c4l-duedate\">{{PLACEHOLDER}}</div></div>",
        text: "November 17th"
    },
    {
        name: M.util.get_string('proceduralcontext', 'atto_c4l'),
        type: "procedural",
        imageClass: "atto-c4l-proceduralcontext-icon",
        code: "<p class=\"c4l-spacer\"></p><p class=\"c4l-proceduralcontext\">" +
            "{{PLACEHOLDER}}</p><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus." +
            " Praesent dictum in velit sed dapibus." +
            " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis lorem aliquet," +
            " fermentum dolor ac, venenatis turpis."
    },
    {
        name: M.util.get_string('learningoutcomes', 'atto_c4l'),
        type: "procedural",
        imageClass: "atto-c4l-learningoutcomes-icon",
        code: "<p class=\"c4l-spacer\"></p>" +
        "<div class=\"c4l-learningoutcomes\"><h6 class=\"c4l-learningoutcomes-title\">Learning Outcomes</h6>" +
        '<ul class="c4l-learningoutcomes-list"><li>{{PLACEHOLDER}}</li><li>Curabitur non nulla sit amet ' +
        "nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</li>" +
        "<li>Nulla porttitor accumsan tincidunt. " +
        "Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis " +
        "quis ac lectus.</li></ul></div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus." +
            " Praesent dictum in velit sed dapibus." +
            " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis lorem aliquet," +
            " fermentum dolor ac, venenatis turpis."
    },
    {
        name: M.util.get_string('gradingvalue', 'atto_c4l'),
        type: "evaluative",
        imageClass: "atto-c4l-gradingvalue-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-inline-group\"><div class=\"c4l-gradingvalue\">" +
            "<span>Grading value: </span>{{PLACEHOLDER}}</div></div>",
        text: "33.3%"
    },
    {
        name: M.util.get_string('expectedfeedback', 'atto_c4l'),
        type: "evaluative",
        imageClass: "atto-c4l-expectedfeedback-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-expectedfeedback\">" +
            "<p>{{PLACEHOLDER}}</p></div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus." +
            " Praesent dictum in velit sed dapibus."
    },
    {
        name: M.util.get_string('allpurposecard', 'atto_c4l'),
        type: "helper",
        imageClass: "atto-c4l-allpurposecard-icon",
        code: "<p class=\"c4l-spacer\"></p><div class=\"c4l-allpurposecard\">" +
            "<p>{{PLACEHOLDER}}</p></div><p><br></p>",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus." +
            " Praesent dictum in velit sed dapibus." +
            " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
        name: M.util.get_string('inlinetag', 'atto_c4l'),
        type: "helper",
        imageClass: "atto-c4l-inlinetag-icon",
        code: "<span class=\"c4l-inlinetag\">{{PLACEHOLDER}}</span>",
        text: "Text"
    },
];

var componentsArray = Y.Array(components);

Y.namespace('M.atto_c4l').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {

    initializer: function() {
        // If we don't have the capability to view then give up.
        if (this.get('disabled')) {
            return;
        }

        var theicon = 'iconone';

        // Add the c4l icon/buttons
        this.addButton({
            icon: 'ed/' + theicon,
            iconComponent: 'atto_c4l',
            buttonName: theicon,
            callback: this._displayDialogue,
            callbackArgs: theicon
        });
    },

    /**
    * Displays the c4l buttons
    *
    * @method _displayDialogue
    * @private
    */
    _displayDialogue: function(e, clickedicon) {
        e.preventDefault();
        var width = 600;

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle', 'atto_c4l'),
            width: width + 'px',
            focusAfterHide: clickedicon
        });

        // Dialog doesn't detect changes in width without this
        // if you reuse the dialog, this seems necessary
        if (dialogue.width !== width + 'px') {
            dialogue.set('width', width + 'px');
        }

        // Creates container
        var bodycontent = Y.Node.create('<div class="atto-c4l-plugin-container"></div>');
        var buttonsGrid = Y.Node.create('<div class="atto-c4l-buttons-grid"></div>');

        this._assembleButtons(buttonsGrid);
        bodycontent.append(buttonsGrid);

        var setOfButtons = bodycontent.all('button');
        setOfButtons.on('click', this._doInsert, this, 0);
        dialogue.set('bodyContent', bodycontent);
        dialogue.show();
        this.markUpdated();
    },

    /**
    * Inserts the output in the editor
    * @method _doInsert
    * @private
    */
    _doInsert: function(e) {
        e.preventDefault();
        var selectedButton = e.target.get('id');
        var componentCode = components[selectedButton].code;
        var placeholder = components[selectedButton].text;
        var selText = window.getSelection().toString();
        if (selText.length > 0) {
            placeholder = selText;
        }
        componentCode = componentCode.replace('{{PLACEHOLDER}}', placeholder);
        this.getDialogue({
            focusAfterHide: null
        }).hide();
        this.editor.focus();
        this.get('host').insertContentAtFocusPoint(componentCode);
        this.markUpdated();
    },

    /**
    * Assembles the grid of buttons that will be included in the plugin modal
    * @method _assembleButtons
    * @private
    */
    _assembleButtons: function(buttonsGrid) {
        for (var i = 0; i < componentsArray.length; i++) {
            var newButton = Y.Node.create('<button></button>');
            newButton.set('innerHTML', componentsArray[i].name);
            newButton.set('id', i);
            var iconClass = componentsArray[i].imageClass;
            newButton.addClass('atto-c4l-dialog-button ' + iconClass);
            newButton.appendTo(Y.one('body'));
            buttonsGrid.append(newButton);
        }
    }
});

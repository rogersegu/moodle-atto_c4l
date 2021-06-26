YUI.add('moodle-atto_c4l-button', function (Y, NAME) {

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

/*
 * @package    atto_c4l
 * @copyright  COPYRIGHTINFO
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_c4l-button
 */

/**
 * Atto text editor Components for Learning plugin.
 *
 * @namespace M.atto_c4l
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */




 var components = [
     {
        name: M.util.get_string('keyconcept', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-keyconcept-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-keyconcept\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>"
     },
     {
        name: M.util.get_string('tip', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-tip-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-tip\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>"
     }, 
     {
        name: M.util.get_string('reminder', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-reminder-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-reminder\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>"
     },
     {
        name: M.util.get_string('attention', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-attention-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-attention\">Aquest és un bloc de text de mostra, el pots esborrar i enganxar aquí el teu text.</div><p><br></p>"
     }, 
     {
        name: M.util.get_string('quote', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-quote-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-quote\"><div class=\"c4l-quote-body\"><div class=\"c4l-quote-line\"></div><div class=\"c4l-quote-text\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus.</p></div></div><div class=\"c4l-quote-caption\"><span>Marcus Tullius Cicero</span>De Finibus Bonorum et Malorum</div></div><p><br></p>"
     },
     {
        name: M.util.get_string('dodontcards', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-dodontcards-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-dodontcards\"><div class=\"c4l-dodontcards-do\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div><div class=\"c4l-dodontcards-dont\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div></div><p><br></p>"
     }, 
     {
        name: M.util.get_string('readingcontext', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-readingcontext-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-readingcontext\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi.</p><div class=\"c4l-readingcontext-caption\"><span>Marcus Tullius Cicero</span>De Finibus Bonorum et Malorum</div></div><p><br></p>"
     },
     {
        name: M.util.get_string('example', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-example-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-example\"><h1>Lorem impsum dolor sit amet</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div><p><br></p>"
     },
     {
        name: M.util.get_string('figure', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-figure-icon",
        code:"<p class=\"c4l-spacer\"></p><figure class=\"c4l-figure\"><img src=\"https://source.unsplash.com/random/800x600\" alt=\"Lorem impsum dolor sit amet\"><figcaption><em class=\"c4l-figure-footer\">Consectetur adipiscing elit.</em><span class=\"c4l-figure-caption\">Phasellus a posuere nibh.</span></figcaption></figure><p><br></p>"
     }, 
     {
        name: M.util.get_string('tag', 'atto_c4l'), 
        type:"contextual",
        imageClass: "c4l-tag-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-display-left\"><div class=\"c4l-tag\">Lorem ipsum</div></div><p><br></p>"
     },
     {
        name: M.util.get_string('estimatedtime', 'atto_c4l'), 
        type:"procedural",
        imageClass: "c4l-estimatedtime-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-inline-group\"><div class=\"c4l-estimatedtime\">15 <span>min</span></div></div>"
     }, 
     {
        name: M.util.get_string('duedate', 'atto_c4l'), 
        type:"procedural",
        imageClass: "c4l-duedate-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-inline-group\"><div class=\"c4l-duedate\">17 de novembre</div></div>"
     },
     {
        name: M.util.get_string('proceduralcontext', 'atto_c4l'), 
        type:"procedural",
        imageClass: "c4l-proceduralcontext-icon",
        code:"<p class=\"c4l-spacer\"></p><p class=\"c4l-proceduralcontext\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis lorem aliquet, fermentum dolor ac, venenatis turpis.</p><p><br></p>"
     }, 
     {
        name: M.util.get_string('gradingvalue', 'atto_c4l'), 
        type:"evaluative",
        imageClass: "c4l-gradingvalue-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-inline-group\"><div class=\"c4l-gradingvalue\"><span>Grading value: </span>33.3%</div></div>"
     },
     {
        name: M.util.get_string('expectedfeedback', 'atto_c4l'), 
        type:"evaluative",
        imageClass: "c4l-expectedfeedback-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-expectedfeedback\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus.</p></div><p><br></p>"
     }, 
     {
        name: M.util.get_string('allpurposecard', 'atto_c4l'), 
        type:"helper",
        imageClass: "c4l-allpurposecard-icon",
        code:"<p class=\"c4l-spacer\"></p><div class=\"c4l-allpurposecard\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p></div><p><br></p>"
     },
     {
        name: M.util.get_string('inlinetag', 'atto_c4l'), 
        type:"helper",
        imageClass: "c4l-inlinetag-icon",
        code:"<span class=\"c4l-inlinetag\">Text</span>"
     },
        
    ];




var NumOfComponents = components.length;

var currentButton;

var componentsArray = Y.Array(components);

 Y.namespace('M.atto_c4l').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
 
     /**
      * A reference to the current selection at the time that the dialogue
      * was opened.
      *
      * @property _currentSelection
      * @type Range
      * @private
      */
     _currentSelection: null,
 
     initializer: function() {
         // If we don't have the capability to view then give up.
         if (this.get('disabled')){
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
      * Display the c4l buttons
      *
      * @method _displayDialogue
      * @private
      */
     _displayDialogue: function(e, clickedicon) {
         e.preventDefault();
         var width=600;
 
         var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle', 'atto_c4l'),
             width: width + 'px',
             focusAfterHide: clickedicon
         });
         //dialog doesn't detect changes in width without this
         //if you reuse the dialog, this seems necessary
         if(dialogue.width !== width + 'px'){
             dialogue.set('width',width+'px');
         }
         

         //create content container
         var bodycontent =  Y.Node.create('<div class="c4l-plugin-container"></div>');
         var buttonsGrid = Y.Node.create('<div class="c4l-buttons-grid"></div>');
         
         var newButton;
         var selectedButton;
         var counter = 0;
         var iconClass;

         this._assembleButtons(buttonsGrid,newButton,counter,iconClass,'contextual');
         bodycontent.append(buttonsGrid);

        var SetOfbuttons = bodycontent.all('button');
        console.log(SetOfbuttons);
        SetOfbuttons.on("click", function (e) {
            selectedButton= e.target.get('id');
            
            console.log(selectedButton );
            componentCode = components[selectedButton].code;
            console.log(componentCode);
        });
        SetOfbuttons.on('click', this._doInsert, this, 0);
        

         dialogue.set('bodyContent', bodycontent);
         dialogue.show();
         this.markUpdated();
     },


     /**
      * Inserts the users input onto the page
      * @method _getDialogueContent
      * @private
      */
     _doInsert : function(e,componentsIndex){
         
         e.preventDefault();
         this.getDialogue({
             focusAfterHide: null
         }).hide();
         
         this.editor.focus();
         this.get('host').insertContentAtFocusPoint(componentCode);
         this.markUpdated();
     },

     _assembleButtons : function(buttonsGrid,newButton,counter,iconClass,componentsType) {
        for (i = 0; i < componentsArray.length; i++) {

         console.log('nom del component contextual: ' + componentsArray[i].name);
            
         newButton = Y.Node.create('<button></button>');
         newButton.set('innerHTML',componentsArray[i].name);
         newButton.set('id',counter);
         iconClass = componentsArray[i].imageClass;
         newButton.addClass('c4l-dialog-button ' + iconClass);
         newButton.appendTo(Y.one('body'));
         buttonsGrid.append(newButton);
         counter++;
         }
     }
   });

}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});

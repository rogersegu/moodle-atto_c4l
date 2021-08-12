YUI.add("moodle-atto_c4l-button",function(e,t){var n=[{name:M.util.get_string("keyconcept","atto_c4l"),type:"contextual",imageClass:"c4l-keyconcept-icon",code:'<p class="c4l-spacer"></p><div class="c4l-keyconcept">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>'},{name:M.util.get_string("tip","atto_c4l"),type:"contextual",imageClass:"c4l-tip-icon",code:'<p class="c4l-spacer"></p><div class="c4l-tip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>'},{name:M.util.get_string("reminder","atto_c4l"),type:"contextual",imageClass:"c4l-reminder-icon",code:'<p class="c4l-spacer"></p><div class="c4l-reminder">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>'},{name:M.util.get_string("attention","atto_c4l"),type:"contextual",imageClass:"c4l-attention-icon",code:'<p class="c4l-spacer"></p><div class="c4l-attention">Aquest \u00e9s un bloc de text de mostra, el pots esborrar i enganxar aqu\u00ed el teu text.</div><p><br></p>'},{name:M.util.get_string("quote","atto_c4l"),type:"contextual",imageClass:"c4l-quote-icon",code:'<p class="c4l-spacer"></p><div class="c4l-quote"><div class="c4l-quote-body"><div class="c4l-quote-line"></div><div class="c4l-quote-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus.</p></div></div><div class="c4l-quote-caption"><span>Marcus Tullius Cicero</span>De Finibus Bonorum et Malorum</div></div><p><br></p>'},{name:M.util.get_string("dodontcards","atto_c4l"),type:"contextual",imageClass:"c4l-dodontcards-icon",code:'<p class="c4l-spacer"></p><div class="c4l-dodontcards"><div class="c4l-dodontcards-do">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div><div class="c4l-dodontcards-dont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div></div><p><br></p>'},{name:M.util.get_string("readingcontext","atto_c4l"),type:"contextual",imageClass:"c4l-readingcontext-icon",code:'<p class="c4l-spacer"></p><div class="c4l-readingcontext"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi.</p><div class="c4l-readingcontext-caption"><span>Marcus Tullius Cicero</span>De Finibus Bonorum et Malorum</div></div><p><br></p>'},{name:M.util.get_string("example","atto_c4l"),type:"contextual",imageClass:"c4l-example-icon",code:'<p class="c4l-spacer"></p><div class="c4l-example"><h1>Lorem impsum dolor sit amet</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div><p><br></p>'},{name:M.util.get_string("figure","atto_c4l"),type:"contextual",imageClass:"c4l-figure-icon",code:'<p class="c4l-spacer"></p><figure class="c4l-figure"><img src="https://source.unsplash.com/random/800x600" alt="Lorem impsum dolor sit amet"><figcaption><em class="c4l-figure-footer">Consectetur adipiscing elit.</em><span class="c4l-figure-caption"><strong>Font: </strong>Phasellus a posuere nibh.</span></figcaption></figure><p><br></p>'},{name:M.util.get_string("tag","atto_c4l"),type:"contextual",imageClass:"c4l-tag-icon",code:'<p class="c4l-spacer"></p><div class="c4l-display-left"><div class="c4l-tag">Lorem ipsum</div></div>'},{name:M.util.get_string("estimatedtime","atto_c4l"),type:"procedural",imageClass:"c4l-estimatedtime-icon",code:'<p class="c4l-spacer"></p><div class="c4l-inline-group"><div class="c4l-estimatedtime">15 <span>min</span></div></div>'},{name:M.util.get_string("duedate","atto_c4l"),type:"procedural",imageClass:"c4l-duedate-icon",code:'<p class="c4l-spacer"></p><div class="c4l-inline-group"><div class="c4l-duedate">November 17th</div></div>'},{name:M.util.get_string("proceduralcontext","atto_c4l"),type:"procedural",imageClass:"c4l-proceduralcontext-icon",code:'<p class="c4l-spacer"></p><p class="c4l-proceduralcontext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis lorem aliquet, fermentum dolor ac, venenatis turpis.</p><p><br></p>'},{name:M.util.get_string("gradingvalue","atto_c4l"),type:"evaluative",imageClass:"c4l-gradingvalue-icon",code:'<p class="c4l-spacer"></p><div class="c4l-inline-group"><div class="c4l-gradingvalue"><span>Grading value: </span>33.3%</div></div>'},{name:M.util.get_string("expectedfeedback","atto_c4l"),type:"evaluative",imageClass:"c4l-expectedfeedback-icon",code:'<p class="c4l-spacer"></p><div class="c4l-expectedfeedback"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus.</p></div><p><br></p>'},{name:M.util.get_string("allpurposecard","atto_c4l"),type:"helper",imageClass:"c4l-allpurposecard-icon",code:'<p class="c4l-spacer"></p><div class="c4l-allpurposecard"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p></div><p><br></p>'
},{name:M.util.get_string("inlinetag","atto_c4l"),type:"helper",imageClass:"c4l-inlinetag-icon",code:'<span class="c4l-inlinetag">Text</span>'}],r=n.length,s,o=e.Array(n);e.namespace("M.atto_c4l").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,initializer:function(){if(this.get("disabled"))return;var e="iconone";this.addButton({icon:"ed/"+e,iconComponent:"atto_c4l",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},_displayDialogue:function(t,r){t.preventDefault();var i=600,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle","atto_c4l"),width:i+"px",focusAfterHide:r});s.width!==i+"px"&&s.set("width",i+"px");var o=e.Node.create('<div class="c4l-plugin-container"></div>'),u=e.Node.create('<div class="c4l-buttons-grid"></div>'),a,f,l=0,c;this._assembleButtons(u,a,l,c,"contextual"),o.append(u);var h=o.all("button");h.on("click",function(e){f=e.target.get("id"),componentCode=n[f].code}),h.on("click",this._doInsert,this,0),s.set("bodyContent",o),s.show(),this.markUpdated()},_doInsert:function(e,t){e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),this.editor.focus(),this.get("host").insertContentAtFocusPoint(componentCode),this.markUpdated()},_assembleButtons:function(t,n,r,s,u){for(i=0;i<o.length;i++)n=e.Node.create("<button></button>"),n.set("innerHTML",o[i].name),n.set("id",r),s=o[i].imageClass,n.addClass("c4l-dialog-button "+s),n.appendTo(e.one("body")),t.append(n),r++}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});

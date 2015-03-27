Ext.data.JsonP.Widgets_nlFokkezbForm_controllers_widget({"tagname":"class","name":"Widgets.nlFokkezbForm.controllers.widget","autodetected":{},"files":[{"filename":"widget.js","href":"widget7.html#Widgets-nlFokkezbForm-controllers-widget"}],"requires":["Widgets.nlFokkezbForm.lib.validator"],"members":[{"name":"validator","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"property-validator","meta":{}},{"name":"Controller","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-Controller","meta":{}},{"name":"getField","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-getField","meta":{}},{"name":"getValues","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-getValues","meta":{}},{"name":"init","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-init","meta":{}},{"name":"isValid","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-isValid","meta":{}},{"name":"setValues","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"method-setValues","meta":{}},{"name":"change","tagname":"event","owner":"Widgets.nlFokkezbForm.controllers.widget","id":"event-change","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Widgets.nlFokkezbForm.controllers.widget","short_doc":"Main controller of the widget. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Requires</h4><div class='dependency'><a href='#!/api/Widgets.nlFokkezbForm.lib.validator' rel='Widgets.nlFokkezbForm.lib.validator' class='docClass'>Widgets.nlFokkezbForm.lib.validator</a></div><h4>Files</h4><div class='dependency'><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget' target='_blank'>widget.js</a></div></pre><div class='doc-contents'><p>Main controller of the widget.</p>\n\n<p>See the <a href=\"#!/guide/getting_started\">Getting Started</a> guide.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-validator' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-property-validator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-property-validator' class='name expandable'>validator</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Exposes <a href=\"#!/api/Widgets.nlFokkezbForm.lib.validator\" rel=\"Widgets.nlFokkezbForm.lib.validator\" class=\"docClass\">Widgets.nlFokkezbForm.lib.validator</a></p>\n</div><div class='long'><p>Exposes <a href=\"#!/api/Widgets.nlFokkezbForm.lib.validator\" rel=\"Widgets.nlFokkezbForm.lib.validator\" class=\"docClass\">Widgets.nlFokkezbForm.lib.validator</a></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-Controller' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-method-Controller' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-Controller' class='name expandable'>Controller</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor for the form. ...</div><div class='long'><p>Constructor for the form.</p>\n\n<p>Automatically calls <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-init\" class=\"docClass\">init</a> if it has <code>args.fieldsets</code>, <code>args.fields</code> or <code>args.config</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments passed to the controller.</p>\n</div></li></ul></div></div></div><div id='method-getField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-method-getField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-getField' class='name expandable'>getField</a>( <span class='pre'>name</span> ) : Object|undefined<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the controller of a field, e.g. ...</div><div class='long'><p>Get the controller of a field, e.g. to call its value, validation or focus methods.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the field to get.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|undefined</span><div class='sub-desc'><p>Controller of the field or <code>undefined</code> if not found.</p>\n</div></li></ul></div></div></div><div id='method-getValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-method-getValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-getValues' class='name expandable'>getValues</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get all field values. ...</div><div class='long'><p>Get all field values.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Values as object with field names as keys.</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-init' class='name expandable'>init</a>( <span class='pre'>opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initialize the form. ...</div><div class='long'><p>Initialize the form.</p>\n\n<p>Called automatically by <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-method-Controller\" rel=\"Widgets.nlFokkezbForm.controllers.widget-method-Controller\" class=\"docClass\">Controller</a> if it has <code>args.fieldsets</code> or <code>args.fields</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opts</span> : Object<div class='sub-desc'><p>Options. Either <code>opts.fieldsets</code> or <code>opts.fields</code> is required.</p>\n<ul><li><span class='pre'>config</span> : String (optional)<div class='sub-desc'><p>Path of a CommonJS or JSON file to extend <code>args</code> with.</p>\n</div></li><li><span class='pre'>table</span> : Object[] (optional)<div class='sub-desc'><p>Optional properties to apply to the <code>Ti.UI.TableView</code>.</p>\n</div></li><li><span class='pre'>fieldsets</span> : Object[] (optional)<div class='sub-desc'><p>Array of fieldsets.</p>\n</div></li><li><span class='pre'>fields</span> : Object[] (optional)<div class='sub-desc'><p>Array of fields.</p>\n</div></li><li><span class='pre'>values</span> : Object (optional)<div class='sub-desc'><p>Values as object with field names as keys.</p>\n</div></li><li><span class='pre'>listener</span> : Function (optional)<div class='sub-desc'><p>Listener for the form's <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget-event-change\" rel=\"Widgets.nlFokkezbForm.controllers.widget-event-change\" class=\"docClass\">change</a> event.</p>\n</div></li><li><span class='pre'>filter</span> : Function (optional)<div class='sub-desc'><p>Function to filter values before returning them.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'><p>If the required options are missing.</p>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-isValid' class='name expandable'>isValid</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Validate all fields. ...</div><div class='long'><p>Validate all fields.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns <code>true</code> if all fields are valid.</p>\n</div></li></ul></div></div></div><div id='method-setValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-method-setValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-method-setValues' class='name expandable'>setValues</a>( <span class='pre'>Values</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set field values. ...</div><div class='long'><p>Set field values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Values</span> : Object<div class='sub-desc'><p>as object with field names as keys.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-change' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.widget'>Widgets.nlFokkezbForm.controllers.widget</span><br/><a href='source/widget7.html#Widgets-nlFokkezbForm-controllers-widget-event-change' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.widget-event-change' class='name expandable'>change</a>( <span class='pre'>e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the value of the field changes. ...</div><div class='long'><p>Fired when the value of the field changes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>Event</p>\n<ul><li><span class='pre'>field</span> : String<div class='sub-desc'><p>The name of the field that has changed.</p>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The new value.</p>\n</div></li><li><span class='pre'>form</span> : Object<div class='sub-desc'><p>The form controller.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});
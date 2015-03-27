Ext.data.JsonP.Widgets_nlFokkezbForm_lib_util({"tagname":"class","name":"Widgets.nlFokkezbForm.lib.util","autodetected":{},"files":[{"filename":"util.js","href":"util.html#Widgets-nlFokkezbForm-lib-util"}],"private":true,"members":[{"name":"extractProperties","tagname":"method","owner":"Widgets.nlFokkezbForm.lib.util","id":"method-extractProperties","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Widgets.nlFokkezbForm.lib.util","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/util.html#Widgets-nlFokkezbForm-lib-util' target='_blank'>util.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Utilities.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-extractProperties' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.lib.util'>Widgets.nlFokkezbForm.lib.util</span><br/><a href='source/util.html#Widgets-nlFokkezbForm-lib-util-method-extractProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.lib.util-method-extractProperties' class='name expandable'>extractProperties</a>( <span class='pre'>arguments, key, string</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Extracts properties out of arguments. ...</div><div class='long'><p>Extracts properties out of arguments. Best understood by example:</p>\n\n<pre class='inline-example '><code>extractProperties({ label:'foo' }, 'label', 'text');\n// { text:'foo' }\n\nextractProperties({ labelid:'foo' }, 'label', 'text');\n// { text: L('foo') }\n\nextractProperties({ label:{ text:'foo', color:'red' } }, 'label', 'text');\n// { text:'foo', color:'red' }\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arguments</span> : Object<div class='sub-desc'><p>Arguments in which the key can be found.</p>\n</div></li><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Property or property+id to find in arguments</p>\n</div></li><li><span class='pre'>string</span> : String<div class='sub-desc'><p>Property or property+id to set in properties</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Extracted properties</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});
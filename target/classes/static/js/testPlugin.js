;(function($){
	// 新版
	var pluginName = 'myTable';
	var defaults = {a:1};
	function Plugin(element,options){
		this._element = element;
		this._options = $.extend({},defaults,options);
		this._defaults = defaults;
		this._name = pluginName;
		this._tpl = '<table>\
						<thead>\
							<tr>\
								<td>1</td>\
								<td>2</td>\
								<td>3</td>\
								<td>4</td>\
								<td>5</td>\
							</tr>\
						</thead>\
						<tbody>\
						</tbody>\
					</table>';
		this.init();
	}
	Plugin.prototype.init = function(){
		var $tpl = $(this._tpl);
		var data = this._options.data;
		for (var i = 0; i < data.length; i++) {
			var $tr = $('<tr data-id="' + i + '"></tr>');
			for(var key in data[i]){
				$tr.append('<td>' + data[i][key] + '</td>');
			}
			$tpl.append($tr);
		}
		$tpl.find('tr').click(this.triggerMyEvent);
		$(this._element).append($tpl);
	}
	Plugin.prototype.triggerMyEvent = function(e){
		var transObj = {id:$(e.currentTarget).data('id')};
		var myEvent = $.Event('my.click',transObj);
		$(e.currentTarget).trigger(myEvent);
	}
	$.fn[pluginName] = function(options){
		return this.each(function(){
			if (!$.data(this,'plugin_' + pluginName)) {
				$.data(this,'plugin_' + pluginName,new Plugin(this,options))
			} else {}
		});
	}
	//旧版
	// $.fn.myTable = function(options){
	// 	// console.log(this);
	// 	var tpl = '<table>\
	// 					<thead>\
	// 						<tr>\
	// 							<td>1</td>\
	// 							<td>2</td>\
	// 							<td>3</td>\
	// 							<td>4</td>\
	// 							<td>5</td>\
	// 						</tr>\
	// 					</thead>\
	// 					<tbody>\
	// 					</tbody>\
	// 				</table>';
	// 	var $tpl = $(tpl);
	// 	var data = options.data;
	// 	for (var i = 0; i < data.length; i++) {
	// 		var $tr = $('<tr data-id="' + i + '"></tr>');
	// 		for(var key in data[i]){
	// 			$tr.append('<td>' + data[i][key] + '</td>');
	// 		}
	// 		$tpl.append($tr);
	// 	}
	// 	$tpl.find('tr').click(triggerMyEvent);
	// 	$(this).append($tpl);
	// };
	// function triggerMyEvent(e){
	// 	var transObj = {id:$(e.currentTarget).data('id')};
	// 	var myEvent = $.Event('my.click',transObj);
	// 	$(e.currentTarget).trigger(myEvent);
	// }
	var pluginName2 = 'myEmbedModalTable';
	var defaults2 = {b:2};
	var EmbedModal = function(element,options){
		this._element = element;
		this._options = $.extend({},defaults2,options);
		this._defaults = defaults2;
		this._name = pluginName2;
		this._tplModal = '<div class="modal fade" id="embed-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
							  <div class="modal-dialog" role="document">\
							    <div class="modal-content">\
							      <div class="modal-header">\
							        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
							        <h4 class="modal-title" id="myModalLabel">Modal title</h4>\
							      </div>\
							      <div class="modal-body">\
							      	cdamklcdacdacdascadc\
							      </div>\
							      <div class="modal-footer">\
							        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
							        <button type="button" class="btn btn-primary">Save changes</button>\
							      </div>\
							    </div>\
							  </div>\
							</div>';
		this._tplBtn = '<button type="button" class="btn btn-primary btn-lg embed-btn" data-toggle="modal" data-target="#embed-modal">\
						内置按钮</button>';
		this.init();
	}
	EmbedModal.prototype.init = function(){
		// var $tpl = $(this._tpl);
		// var data = this._options.data;
		// for (var i = 0; i < data.length; i++) {
		// 	var $tr = $('<tr data-id="' + i + '"></tr>');
		// 	for(var key in data[i]){
		// 		$tr.append('<td>' + data[i][key] + '</td>');
		// 	}
		// 	$tpl.find('tbody').append($tr);
		// }
		// $tpl.find('tr').click(this.triggerMyEvent);
		$(this._element).append($(this._tplModal));
		$(this._element).append($(this._tplBtn));
	}
	$.fn[pluginName2] = function(options){
		return this.each(function(){
			if (!$.data(this,'plugin_' + pluginName2)) {
				$.data(this,'plugin_' + pluginName2,new EmbedModal(this,options))
			} else {}
		});
	}
	// ======================模拟场景=======================
	var pluginName3 = 'lifecycleInfo'
	var defaults3 = {reportId:0,id:0000};
	var LifeCyclePlugin = function(element,options){
		this._element = element;
		this._options = $.extend({},defaults3,options);
		this._name = pluginName3;
		this._tpl = '<div style="background-color:skyblue;color:#fff"></div>';
		this.init();
	}
	LifeCyclePlugin.prototype.init = function(){
		$(this._element).empty();
		$(this._element).append($(this._tpl).text(JSON.stringify(this._options)));
		console.log('init success!!!!!!!!');
		console.log(this._options);
	}
	$.fn[pluginName3] = function(options){
		return this.each(function(){
			// if (!$.data(this,'plugin_' + pluginName2)) {
			// 	$.data(this,'plugin_' + pluginName2,new EmbedModal(this,options))
			// } else {}
			new LifeCyclePlugin(this,options);
		});
	}
})(jQuery);
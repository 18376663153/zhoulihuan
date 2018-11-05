;(function ($) {
    var pluginName = 'KcyLifecycleInfo';
    var defaults = {reportId:0,id:0000};
    var tplStr = '<div class="tables-container">\
	      		<div class="table-pane">\
	      			<div class="table-title-pane" style="display:flex;align-items: center;cursor: default;font-size: 16px;margin-bottom: 10px;">\
                                  <div class="collapsing-triangle" style="display: inline-block;width: 0px;height: 0px;\
                                  border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #ccc;"></div>\
                                  &nbsp;\
                                  <span>工程</span>\
                              </div>\
                              <div class="table-body-pane">\
                                  <table class="table gongcheng-table">\
                                    <thead>\
                                        <tr style="background-color: #ddd;">\
                                            <th>当前状态</th><th>项目编号</th><th>项目名称</th><th>工程类别</th><th>日期</th><th>委托单位</th><th>工程地址</th><th>作业部门</th><th>项目负责人</th><th>操作</th>\
                                        </tr>\
                                    </thead>\
                                    <tbody>\
                                    </tbody>\
                                </table>\
                              </div>\
                          </div>\
                          <div class="table-pane">\
                              <div class="table-title-pane" style="display:flex;align-items: center;cursor: default;font-size: 16px;margin-bottom: 10px;">\
                                  <div class="collapsing-triangle" style="display: inline-block;width: 0px;height: 0px;\
                                  border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #ccc;"></div>\
                                  &nbsp;\
                                  <span>合同</span>\
                              </div>\
                              <div class="table-body-pane">\
                                  <table class="table hetong-table">\
                                    <thead>\
                                        <tr style="background-color: #ddd;">\
                                            <th>合同编号</th><th>合同工程名称</th><th>经办人</th><th>合同样板一份</th><th>我方合同盖章</th><th>甲方合同盖章</th><th>到账金额</th><th>合同档案编号</th><th>工程编号</th><th>操作</th>\
                                        </tr>\
                                    </thead>\
                                    <tbody>\
                                        \
                                    </tbody>\
                                </table>\
                              </div>\
                          </div>\
                          <div class="table-pane">\
                              <div class="table-title-pane" style="display:flex;align-items: center;cursor: default;font-size: 16px;margin-bottom: 10px;">\
                                  <div class="collapsing-triangle" style="display: inline-block;width: 0px;height: 0px;\
                                  border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #ccc;"></div>\
                                  &nbsp;\
                                  <span>欠单</span>\
                              </div>\
                              <div class="table-body-pane">\
                                  <table class="table qiandan-table">\
                                    <thead>\
                                        <tr style="background-color: #ddd;">\
                                            <th>欠款情况</th><th>经手人</th><th>欠单时间</th><th>合同负责人</th><th>项目编号</th><th>项目名称</th><th>应收款</th><th>委托单位</th><th>到账进度</th><th>操作</th>\
                                        </tr>\
                                    </thead>\
                                    <tbody>\
                                        \
                                    </tbody>\
                                </table>\
                              </div>\
                          </div>\
                          <div class="table-pane">\
                              <div class="table-title-pane" style="display:flex;align-items: center;cursor: default;font-size: 16px;margin-bottom: 10px;">\
                                  <div class="collapsing-triangle" style="display: inline-block;width: 0px;height: 0px;\
                                  border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #ccc;"></div>\
                                  &nbsp;\
                                  <span>收款</span>\
                              </div>\
                              <div class="table-body-pane">\
                                  <table class="table shoukuan-table">\
                                    <thead>\
                                        <tr style="background-color: #ddd;">\
                                            <th>实收款</th><th>发票日期</th><th>发票号</th><th>项目编号</th><th>项目名称</th><th>应收款</th><th>委托单位</th><th>工程类别</th><th>作业部门</th><th>项目负责人</th>\
                                        </tr>\
                                    </thead>\
                                    <tbody>\
                                        \
                                    </tbody>\
                                </table>\
                              </div>\
                          </div>\
                          <div class="table-pane">\
                              <div class="table-title-pane" style="display:flex;align-items: center;cursor: default;font-size: 16px;margin-bottom: 10px;">\
                                  <div class="collapsing-triangle" style="display: inline-block;width: 0px;height: 0px;\
                                  border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #ccc;"></div>\
                                  &nbsp;\
                                  <span>工作量明细</span>\
                              </div>\
                              <div class="table-body-pane">\
                                  <table class="table gongzuoliang-table">\
                                    <thead>\
                                        <tr style="background-color: #ddd;">\
                                            <th>项目编号</th><th>项目名称</th><th>作业部门</th><th>项目负责人</th><th>内部工作量</th><th>外部工作量</th><th>工作内容</th><th>计量单位</th><th>经营科审核时间</th><th>工程类别</th>\
                                        </tr>\
                                    </thead>\
                                    <tbody>\
                                        \
                                    </tbody>\
                                </table>\
                              </div>\
                          </div>\
                          <div class="table-pane">\
                              <div class="table-title-pane" style="display:flex;align-items: center;cursor: default;font-size: 16px;margin-bottom: 10px;">\
                                  <div class="collapsing-triangle" style="display: inline-block;width: 0px;height: 0px;\
                                  border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 5px solid #ccc;"></div>\
                                  &nbsp;\
                                  <span>提成明细</span>\
                              </div>\
                              <div class="table-body-pane">\
                                  <table class="table ticheng-table">\
                                    <thead>\
                                        <tr style="background-color: #ddd;">\
                                            <th>项目编号</th><th>项目名称</th><th>提交资料时间</th><th>提成比例(%)</th><th>提成数</th><th>经营科审核时间</th><th>作业员</th><th>作业部门</th><th>是否办结</th><th>当前状态</th>\
                                        </tr>\
                                    </thead>\
                                    <tbody>\
                                        \
                                    </tbody>\
                                </table>\
                              </div>\
                          </div>\
                      </div>';
    var KcyLifecyclePlugin = function (elements, options) {
        this._elements = elements;
        this._options = $.extend({},defaults,options);
        this._name = pluginName;
        this._defaults = defaults;
        this._tplStr = tplStr;
        this._data = {};
        this.init();
    }
    KcyLifecyclePlugin.prototype.init = function () {
        var info = this.getInfo();
    }
    KcyLifecyclePlugin.prototype.initDom = function(data){
        $(this._elements).empty();
        var $tpl = $(this._tplStr);
        if(data['gongchengs'].length == 0){
            $tpl.find('.gongcheng-table').closest('.table-pane').hide();
        }
        if(data['hetongs'].length == 0){
            $tpl.find('.hetong-table').closest('.table-pane').hide();
        }
        if(data['qiandans'].length == 0){
            $tpl.find('.qiandan-table').closest('.table-pane').hide();
        }
        if(data['shoukuans'].length == 0){
            $tpl.find('.shoukuan-table').closest('.table-pane').hide();
        }
        if(data['gongzuoliangs'].length == 0){
            $tpl.find('.gongzuoliang-table').closest('.table-pane').hide();
        }
        if(data['tichengs'].length == 0){
            $tpl.find('.ticheng-table').closest('.table-pane').hide();
        }
        for (var i = 0, l = data['gongchengs'].length; i < l; i++) {
            var currGongcheng = data['gongchengs'][i];
            var trStr = '<tr>\
                            <td>{{CurrentStepName}}</td><td>{{XiangmuBianhao}}</td><td>{{Name}}</td><td>{{GongchengLeibie}}</td><td>{{Riqi}}</td><td>{{WeituoDanwei}}</td><td>{{GongchengDizhi}}</td><td>{{ZuoyeBumen_str}}</td>\
                            <td>{{XiangmuFuzeren}}</td><td class="detail-btn" style="color: deepskyblue;cursor: pointer">详情</td>\
                        </tr>';
            for (var key in currGongcheng) {
                if (String(currGongcheng[key]).indexOf('+0000') > 0) {
                    currGongcheng[key] = dateFormatter(String(currGongcheng[key]));
                }
                trStr = trStr.replace('{{'+key+'}}',currGongcheng[key]);
            }
            var $tr = $(trStr);
            $tr.data('rowobj',{reportId:3,reportName:'查看所有工程',id:currGongcheng.Id});
            $tpl.find('.gongcheng-table tbody').append($tr);
        }
        for (var i = 0, l = data['hetongs'].length; i < l; i++) {
            var currHetongs = data['hetongs'][i];
            var trStr = '<tr>\
							<td>{{HetongBianhao}}</td><td>{{Name}}</td><td>{{JingbanRen_str}}</td><td>{{HetongYangbanYifen}}</td><td>{{WofangHetongGaizhang}}</td><td>{{JiafangHetongGaizhang}}</td>\
							<td>{{DaozhangJine}}</td><td>{{DanganBianhao}}</td><td>{{XiangmuBianhao}}</td><td class="detail-btn" style="color: deepskyblue;cursor: pointer">详情</td>\
						</tr>';
            for (var key in currHetongs) {
                if (String(currHetongs[key]).indexOf('+0000') > 0) {
                    currHetongs[key] = dateFormatter(String(currHetongs[key]));
                }
                trStr = trStr.replace('{{'+key+'}}',currHetongs[key]);
            }
            var $tr = $(trStr);
            $tr.data('rowobj',{reportId:16,reportName:'查看合同',id:currHetongs.Id});
            $tpl.find('.hetong-table tbody').append($tr);
        }
        for (var i = 0, l = data['qiandans'].length; i < l; i++) {
            var currQiandan = data['qiandans'][i];
            var trStr = '<tr>\
                            <td>{{Name}}</td><td>{{jingshouren}}</td><td>{{qiandanshijian}}</td><td>{{hetongfuzeren_str}}</td><td>{{XiangmuBianhao}}</td>\
                            <td>{{xiangmumingcheng}}</td><td>{{Yingshoukuan}}</td><td>{{WeituoDanwei}}</td><td>{{daozhangjindu}}</td><td class="detail-btn" style="color: deepskyblue;cursor: pointer">详情</td>\
                        </tr>';
            for (var key in currQiandan) {
                if (String(currQiandan[key]).indexOf('+0000') > 0) {
                    currQiandan[key] = dateFormatter(String(currQiandan[key]));
                }
                trStr = trStr.replace('{{'+key+'}}',currQiandan[key]);
            }
            var $tr = $(trStr);
            $tr.data('rowobj',{reportId:17,reportName:'查看欠单',id:currQiandan.Id});
            $tpl.find('.qiandan-table tbody').append($tr);
        }
        for (var i = 0, l = data['shoukuans'].length; i < l; i++) {
            var currShoukuan = data['shoukuans'][i];
            var trStr = '<tr>\
                            <td>{{shishoukuan}}</td><td>{{fapiaoriqi}}</td><td>{{fapiaohao}}</td><td>{{XiangmuBianhao}}</td><td>{{gongchengmingcheng}}</td><td>{{Yingshoukuan}}</td>\
                            <td>{{WeituoDanwei}}</td><td>{{GongchengLeibie}}</td><td>{{ZuoyeBumen}}</td><td>{{XiangmuFuzeren}}</td>\
                        </tr>';
            for (var key in currShoukuan) {
                if (String(currShoukuan[key]).indexOf('+0000') > 0) {
                    currShoukuan[key] = dateFormatter(String(currShoukuan[key]));
                }
                trStr = trStr.replace('{{'+key+'}}',currShoukuan[key]);
            }

            $tpl.find('.shoukuan-table tbody').append($(trStr));
        }
        for (var i = 0, l = data['gongzuoliangs'].length; i < l; i++) {
            var currGongzuoliang = data['gongzuoliangs'][i];
            var trStr = '<tr>\
                            <td>{{XiangmuBianhao}}</td><td>{{Name}}</td><td>{{ZuoyeBumen}}</td><td>{{XiangmuFuzeren}}</td><td>{{n}}</td><td>{{vn}}</td>\
                            <td>{{gongzuoneirong_Name}}</td><td>{{jiliangdanwei}}</td><td>{{ShenheShijian}}</td><td>{{GongchengLeibie}}</td>\
                        </tr>';
            for (var key in currGongzuoliang) {
                if (String(currGongzuoliang[key]).indexOf('+0000') > 0) {
                    currGongzuoliang[key] = dateFormatter(String(currGongzuoliang[key]));
                }
                trStr = trStr.replace('{{'+key+'}}',currGongzuoliang[key]);
            }
            $tpl.find('.gongzuoliang-table tbody').append($(trStr));
        }
        for (var i = 0, l = data['tichengs'].length; i < l; i++) {
            var currTicheng = data['tichengs'][i];
            var trStr = '<tr>\
                            <td>{{XiangmuBianhao}}</td><td>{{Name}}</td><td>{{TiJiaoZiLiaoShijian}}</td><td>{{bili}}</td><td>{{ticheng}}</td><td>{{ShenheShijian}}</td>\
                            <td>{{zuoyeyuan}}</td><td>{{ZuoyeBumen}}</td><td>{{shifoubanjie}}</td><td>{{CurrentStepName}}</td>\
                        </tr>';
            for (var key in currTicheng) {
                if (String(currTicheng[key]).indexOf('+0000') > 0) {
                    currTicheng[key] = dateFormatter(String(currTicheng[key]));
                }
                trStr = trStr.replace('{{'+key+'}}',currTicheng[key]);
            }
            $tpl.find('.ticheng-table tbody').append($(trStr));
        }
        $tpl.find('td:contains({{)').text('');
        $tpl.find('.table-title-pane').click(function(e){
            var $thisTablePane = $(this).closest('.table-pane').find('.table-body-pane');
            var $collapsingTriangle = $(this).find('.collapsing-triangle');
            var thisTableVisible = $thisTablePane.is(':visible');
            if(thisTableVisible){
                $collapsingTriangle.css({'transform':'rotate(-90deg)'})
                $thisTablePane.slideUp(200);
            }else {
                $collapsingTriangle.css({'transform':'rotate(0deg)'})
                $thisTablePane.slideDown(200);
            }
        })
        $tpl.find('.detail-btn').click(function (e) {
           console.log($(this).closest('tr').data('rowobj'));
            var transObj = {transData:$(this).closest('tr').data('rowobj')};
            var openDetailEvent = $.Event('kcy.lifecycle.detail.click',transObj);
            $(this).trigger(openDetailEvent);
        });
        $(this._elements).append($tpl);
    }
    KcyLifecyclePlugin.prototype.getInfo = function(){
        var resultData = {};
        var url = "http://127.0.0.1:8999/CycleSearch/" + this._options['reportId'] + '/' + this._options['id'];
        var thisRef = this;
        $.ajax({
            type:'get',
            url:url,
            async:true,
            success:function (data) {
                console.log(data);
                thisRef.initDom(data);
            }
        })
    }
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            new KcyLifecyclePlugin(this,options);
        });
    }
    function dateFormatter(dateStr) {
        return dateStr.substring(0,dateStr.indexOf('T'));
    }
})(jQuery);
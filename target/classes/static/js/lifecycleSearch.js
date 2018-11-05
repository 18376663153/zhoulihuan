var vm = new Vue({
	el:'#app',
	data:{
		conditions:[
		],
        allUser:{},
		conditionValues:{},
		currTemplate:'',
		templates:[],
		isShowLayer2:false,
		inputInfo:[],
		outputInfo:[],
        keywordInput:'',
		keyword:'',
        tableCurrentPage:1,
        currPageSize:15,
        tableData:[],
		pageInfo:{},
		seniorSearchParam:{
			'_cehuixiangmu':{},
			'_cehuihetong':{},
			'_qiandan':{},
			'_shoukuan':{},
			'_gongzuofenpei':{},
			'_chanzhifenpei':{},
		},
        tableFieldMap:{},
        layer2Collapse:{
		    input:{
		        '_cehuihetong':false,
		        '_cehuixiangmu':false,
		        '_chanzhifenpei':false,
		        '_gongzuofenpei':false,
		        '_qiandan':false,
		        '_shoukuan':false,
            },
            output:{
                '_cehuihetong':false,
                '_cehuixiangmu':false,
                '_chanzhifenpei':false,
                '_gongzuofenpei':false,
                '_qiandan':false,
                '_shoukuan':false,
            }
        },
        layer2AddFieldInfo:{
            input:{
                '_cehuihetong':{field:'',value:'',show:false},
                '_cehuixiangmu':{field:'',value:'',show:false},
                '_chanzhifenpei':{field:'',value:'',show:false},
                '_gongzuofenpei':{field:'',value:'',show:false},
                '_qiandan':{field:'',value:'',show:false},
                '_shoukuan':{field:'',value:'',show:false},
            },
            output:{
                '_cehuihetong':{field:'',value:'',show:false},
                '_cehuixiangmu':{field:'',value:'',show:false},
                '_chanzhifenpei':{field:'',value:'',show:false},
                '_gongzuofenpei':{field:'',value:'',show:false},
                '_qiandan':{field:'',value:'',show:false},
                '_shoukuan':{field:'',value:'',show:false},
            }
        },
        isSeniorSearch:false,
        allLayer2InfoTypeMap:[
            {tableName:'_cehuixiangmu',tableAlias:'工程'},
            {tableName:'_cehuihetong',tableAlias:'合同'},
            {tableName:'_qiandan',tableAlias:'欠单'},
            {tableName:'_shoukuan',tableAlias:'收款'},
            {tableName:'_gongzuofenpei',tableAlias:'工作量明细'},
            {tableName:'_chanzhifenpei',tableAlias:'提成明细'}
        ],
        newTemplateName:'',
	},
	methods:{
		changeLayer:function(){
			this.isShowLayer2 = !this.isShowLayer2;
		},
        chooseTemplate:function (templateId) {
			$.ajax({
                type:'get',
				async:false,
                url:servicePath + '/Template/getInputOutputByTemplateId/' + templateId,
				success:function (data) {
                	if(data.inputInfo.length == 0){
                        vm.inputInfo = JSON.parse(JSON.stringify(data.outputInfo));
					}else{
						vm.inputInfo = data.inputInfo;
					}
					vm.outputInfo = data.outputInfo;
                }
			})
            for(var i=this.inputTableArr.length;i>=0;i--){
                Vue.set(this.layer2Collapse['input'],this.inputTableArr[i],true);
            }
            for(var i=this.outputTableArr.length;i>=0;i--){
                Vue.set(this.layer2Collapse['output'],this.outputTableArr[i],true);
            }
        },
        doSearch:function () {
			this.keyword = this.keywordInput;
            this.tableCurrentPage = 1;
            this.isSeniorSearch = false;
			this.searchResult();
        },
		searchResult:function(){
			var param = {};
			param.currentPage = this.tableCurrentPage;
			param.pageSize = this.currPageSize;
			param.keyword = this.keyword;
			param.inputInfo = this.inputInfo;
			param.outputInfo = this.outputInfo;
			param.inputTables = this.inputTableArr;
            param.outputTables = this.outputTableArr;
            param.inAndOutTableArr = this.inAndOutTableArr;
            $.ajax({
                type:'post',
                url:servicePath + '/CycleSearch/getTableData',
				contentType:'application/json',
                data:JSON.stringify(param),
                success:function (data) {
					vm.pageInfo=data;
                }
            })
		},
        pageSizeChangeHandler:function (val) {

        },
        currentPageChangeHandler:function (val) {
			this.tableCurrentPage = val;
			if(this.isSeniorSearch){
                this.seniorSearchResult();
            }else {
                this.searchResult();
            }
        },
        inputActiveTag:function (tableName) {
			var isActive = false;
			if (this.inputTableArr.indexOf(tableName) > -1) {
				isActive = true;
			}
			return isActive;
        },
        filterInputTableField:function (tableName) {
            var arr = [];
            this.inputInfo.forEach(function (value) {
                if(value.TableName === tableName){
                    arr.push(value);
                }
            })
            return arr;
        },
		filterOutputTableField:function (tableName) {
            var arr = [];
            this.outputInfo.forEach(function (value) {
                if(value.TableName === tableName){
                    arr.push(value);
                }
            })
            return arr;
        },
        doSeniorSearch:function () {
            this.isSeniorSearch = true;
            this.tableCurrentPage = 1;
			this.seniorSearchResult();
        },
        seniorSearchResult:function(){
            var param = {};
            param.currentPage = this.tableCurrentPage;
            param.pageSize = this.currPageSize;
            param.seniorSearchParam = this.seniorSearchParam;
            param.inputInfo = this.inputInfo;
            param.outputInfo = this.outputInfo;
            param.inputTables = this.inputTableArr;
            param.outputTables = this.outputTableArr;
            param.inAndOutTableArr = this.inAndOutTableArr;
            $.ajax({
                type:'post',
                url:servicePath + '/CycleSearch/getTableDataSenior',
                contentType:'application/json',
                data:JSON.stringify(param),
                success:function (data) {
                    vm.pageInfo=data;
                    vm.isShowLayer2 = false;
                }
            })
        },
        doInfoTypeTitleClick:function (inOrOut, tableName) {
		    Vue.set(this.layer2Collapse[inOrOut],tableName,!this.layer2Collapse[inOrOut][tableName])
            if(!this.layer2Collapse[inOrOut][tableName]){
                Vue.set(this.layer2AddFieldInfo[inOrOut][tableName],'show',false)
            }
        },
        doAddField:function (inOrOut,tableName,field,value) {
            var obj = {FieldName:field,TableName:tableName}
            if('input' === inOrOut){
                this.inputInfo.push(obj);
                Vue.set(this.seniorSearchParam[tableName],field,value);
            }else{
                this.outputInfo.push(obj);
            }
        },
        excludeSelectedField:function (inOrOut,tableName,key) {
		    var isSelacted = false;
            if('input' === inOrOut){
                this.inputInfo.forEach(function (item) {
                    if (item.FieldName === key && item.TableName === tableName){
                        isSelacted = true;
                    }
                })
            }else if('output' === inOrOut){
                this.outputInfo.forEach(function (item) {
                    if (item.FieldName === key && item.TableName === tableName){
                        isSelacted = true;
                    }
                })
            }
            return isSelacted;
        },
        showAddFieldDiv:function (inOrOut, tableName,e) {
		    var isContentShow = this.layer2Collapse[inOrOut][tableName];
		    if(isContentShow){
                Vue.set(this.layer2AddFieldInfo[inOrOut][tableName],'show',!this.layer2AddFieldInfo[inOrOut][tableName]['show'])
                e.stopPropagation();
            }else{
                // this.layer2AddFieldInfo[inOrOut][tableName]['show']
                // Vue.set();
                Vue.set(this.layer2AddFieldInfo[inOrOut][tableName],'show',true)
            }
        },
        doCancleAddField:function (inOrOut, tableName) {
            Vue.set(this.layer2AddFieldInfo[inOrOut][tableName],'show',false)
        },
        resultTableHeaderCellStyle:function (row, column,rowIndex,columnIndex) {
            // var styleRow0 = {'background-color':'#0a819c',color:'#fff','text-align':'center'};
            // var styleRow1 = {'background-color':'#488c6c',color:'#fff'};
		    // switch (row.rowIndex) {
            //     case 0:
            //         return styleRow0;
            //     case 1:
            //         return styleRow1;
            // }
            var styleRow = {'background-color':'rgb(52, 187, 124)',color:'#fff'};
            return styleRow;
        },
        resultTableRowStyle:function(){
            var styleRow = {'max-height':'10px'};
            return styleRow;
        },
        doRemoveInputItem:function (inputField) {
            for (var i=0,l=this.inputInfo.length;i<l;i++) {
                var TableName1 = this.inputInfo[i]['TableName'];
                var FieldName1 = this.inputInfo[i]['FieldName'];
                var TableName2 = inputField['TableName'];
                var FieldName2 = inputField['FieldName'];
                if(TableName1 === TableName2 && FieldName1 === FieldName2){
                    this.inputInfo.splice(i,1)
                    break;
                }
            }
            Vue.delete(this.seniorSearchParam[inputField.TableName],[inputField.FieldName]);
        },
        doRemoveOutputItem:function(outputField){
            for (var i=0,l=this.outputInfo.length;i<l;i++) {
                var TableName1 = this.outputInfo[i]['TableName'];
                var FieldName1 = this.outputInfo[i]['FieldName'];
                var TableName2 = outputField['TableName'];
                var FieldName2 = outputField['FieldName'];
                if(TableName1 === TableName2 && FieldName1 === FieldName2){
                    this.outputInfo.splice(i,1)
                    break;
                }
            }
        },
        doResultTableClick:function (row,event,column) {
            console.log(row);
            console.log(event);
            console.log(column);
        },
        doTemplateSave:function () {
            var param = {
                inputInfo:this.inputInfo,
                outputInfo:this.outputInfo,
                newTemplateName:this.newTemplateName
            };
            $.ajax({
                type:'post',
                url:servicePath +　'/Template/saveAsNewTemplate',
                data:JSON.stringify(param),
                contentType:'application/json',
                success:function (data) {

                }
            })
        },
        test:function (scope) {
            return scope.row[scope.column.property];
        },
        userFilter:function (scope) {
		    var prop = scope.column.property;
            var rowInfo = scope.row;
            var returnStr = this.allUser[rowInfo[prop]]?this.allUser[rowInfo[prop]].name:'';
            return returnStr;
        },
        userFilter2:function (ids) {
		    var returnStr = '';
		    if (ids) {
                ids = new String(ids);
                var idArr = ids.split(',');
                var nameArr = idArr.map(function (value, index) {
                    return vm.allUser[value]?vm.allUser[value].name:'';
                })
                returnStr = nameArr.join(',');
            }
            return returnStr;
        },
        filterUserField:function (fieldName) {
		    var isUserField = false;
            fieldName = fieldName.toLowerCase();
            var index1 = fieldName.lastIndexOf('yuan');
            var indexFlag1 = fieldName.length-4;
            var index2 = fieldName.lastIndexOf('ren');
            var indexFlag2 = fieldName.length-3;
            var index3 = fieldName.lastIndexOf('user');
            var indexFlag3 = fieldName.length-4;
            if(index1 === indexFlag1 || index2 === indexFlag2 || index3 === indexFlag3){
                isUserField = true;
            }
            return isUserField;
        },
        formatColumn:function (row,column,cellValue,index) {
            console.log(row);
            console.log(column);
            console.log(cellValue);
            console.log(index);
            var prop = column.property;
            var returnStr = '';
            if (this.filterUserField(prop)) {
                returnStr = this.userFilter2(cellValue);
            }else{
                returnStr = cellValue;
            }
            // returnStr = this.keywordFormat(returnStr);
            return returnStr;
        },
        keywordFormat:function (str) {
		    if (this.keyword && str) {
		        str = new String(str);
                var keywordArr = this.keyword.split('\\s+');
                keywordArr.forEach(function (value, index) {
                    var reg = new RegExp(value,'g');
                    str = str.replace(reg,'<span style="color: red;">' + value + '</span>');
                })
            }
            return str;
        },
        keywordFormat2:function (scope) {
		    var fieldName = scope.column.property;
            var isUserField = this.filterUserField(fieldName);
            var str = scope.row[scope.column.property];
            // if (isUserField) {
            //     str = this.userFilter2(str);
            // }
            if (this.keyword && str){
                var keywordArr = this.keyword.split(/\s+/);
                keywordArr.forEach(function (value, index) {
                    var reg = new RegExp(value,'g');
                    str = new String(str);
                    str = str.replace(reg,'<span style="color: red;">' + value + '</span>');
                })
            }
            return str;
        }
	},
	computed:{
		inputTableArr:function () {
			var tableArr = [];
			for (var i=this.inputInfo.length-1;i>=0;i--) {
                var tableName = this.inputInfo[i]['TableName']
				if (tableArr.indexOf(tableName) == -1){
					tableArr.push(tableName);
				}
			}
			return tableArr;
        },
		outputTableArr:function () {
            var tableArr = [];
            for (var i=this.outputInfo.length-1;i>=0;i--) {
                var tableName = this.outputInfo[i]['TableName']
                if (tableArr.indexOf(tableName) == -1){
                    tableArr.push(tableName);
                }
            }
            return tableArr;
        },
        inAndOutTableArr:function () {
            var tableArr = [];
            for (var i=this.outputInfo.length-1;i>=0;i--) {
                var tableName = this.outputInfo[i]['TableName']
                if (tableArr.indexOf(tableName) == -1){
                    tableArr.push(tableName);
                }
            }
            for (var i=this.outputInfo.length-1;i>=0;i--) {
                var tableName = this.outputInfo[i]['TableName']
                if (tableArr.indexOf(tableName) == -1){
                    tableArr.push(tableName);
                }
            }
            return tableArr;
        }
	},
	created:function () {
		$.ajax({
			type:'get',
			url:servicePath + '/Template/getAllTemplate',
			success:function (data) {
				vm.currTemplate = data[0].TemplateId;
				vm.templates = data;
                vm.chooseTemplate(vm.currTemplate);
                vm.searchResult();
            }
		})
        $.ajax({
            type:'get',
            url:servicePath + '/User/getAllUser',
            success:function (data) {
                vm.allUser = data;
            }
        })
        this.tableFieldMap = tableFieldInfoMap;
    }
});
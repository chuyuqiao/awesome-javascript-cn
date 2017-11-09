// ----------------------------------------------------------
//  组件
// ----------------------------------------------------------
// 选择组件
// Select2 4.0.3
// 重置
$('#mySelect2').val(null).trigger('change');
// 多选返回为数组
$('#mySelect2').val();

// 选择框取值
$('#myselect option:selected').val();
// 表单重置
//表单事件绑定
table.unbind("click");
table.on('click', '.detail', function() {});
// DataTables


jQuery.validator.addMethod("myCheck", function (value, element) {
            return myCheck(value);
}, "this can not be null!");


$('#myId input[name=myName]:checked').val()

$('#myId input[name=myName]')

// 展开关闭
var g = ['<div'];
if (data.length > 32) {
	g = g.concat(['class="hide toggle">',data,
		'<a href="javascript:void(0)" class="pull-right expandCollapseBtn">收起&#x2191;</a></div><div class="toggle">',
		data.substr(0, 32),'...<a href="javascript:void(0)" class="pull-right expandCollapseBtn">展开&#x2193;</a></div>']);
} else {
	g = g.concat([ '>', data, '</div>' ]);
}
return g.join('');

table.on('click', '.expandCollapseBtn', function() {
	$(this).closest('td').children('.toggle').toggleClass('hide');
});
//js True和False
// JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true。
//开关切换按钮
/*遮罩*/
// .rel {
//     position: relative;
// }

// .overlay {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left:0;
//     background: rgba(255,255,255,0.3);
//     z-index: 50;
// }

// .overlay > .fa {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin-left: -15px;
//     margin-top: -15px;
//     color: #20c5ad;
//     font-size: 30px;
//     line-height: 1;
// }

// .nowrap {
// 	white-space: nowrap;
// }

// @media (min-width: 992px) {
// 	.sm-only {
// 		display: none;
// 	}
// }
<div class="form-group">
	<label class="control-label col-md-2 col-sm-2 col-xs-2">开启状态<font color="red">*</font></label>
	<div class="col-md-6 col-sm-6 col-xs-6 form-inline">
		<label class="radio control-label">
		<input type="radio" name="switchState" class="a8" value="1" checked />开启</label>
		<label class="radio control-label">
		<input type="radio" name="switchState" class="a8" value="2" />关闭</label>
	</div>
</div>
// --------------------------------------------------------
//  性能优化
// --------------------------------------------------------

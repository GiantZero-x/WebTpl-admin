var mypcas=new PCAS("province,请选择省份","city,请选择城市","county,请选择县区");layui.use(["form","jquery"],function(){var e,n,t=layui.form(),l=layui.jquery;t.on("select(province)",function(n){console.log(n.elem),console.log(n.value),e=n.value,mypcas.SetValue(n.value,"",""),t.render("select")}),t.on("select(city)",function(l){console.log(l.elem),console.log(l.value),n=l.value,mypcas.SetValue(e,l.value,""),t.render("select")}),t.on("select(county)",function(l){console.log(l.elem),console.log(l.value),mypcas.SetValue(e,n,l.value),t.render("select")}),t.verify({username:function(e){return new RegExp("^[a-zA-Z0-9_一-龥\\s·]+$").test(e)?/(^\_)|(\__)|(\_+$)/.test(e)?"用户名首尾不能出现下划线'_'":/^\d+\d+\d$/.test(e)?"用户名不能全为数字":void 0:"用户名不能有特殊字符"},pass:[/(?!^\[0-9]+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,20}/,"密码必须6到20位，且不能出现空格"],mobile:function(e){if(!new RegExp(/^0?(13|14|15|18|17)[0-9]{9}$/).test(e))return"手机号格式不正确"},idcard:function(e){if(!new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/).test(e))return"身份证号码格式不正确"},address:function(e){if(""==e)return"请输入正确的详细地址"}}),l('input[name="username"]').on("blur",function(){var e=l(this).val();new RegExp("^[a-zA-Z0-9_一-龥\\s·]+$").test(e)||layer.msg("用户名不能有特殊字符"),/(^\_)|(\__)|(\_+$)/.test(e)&&layer.msg("用户名首尾不能出现下划线'_'"),/^\d+\d+\d$/.test(e)&&layer.msg("用户名不能全为数字")}),t.on("submit(useradd)",function(e){return console.log(parseJson(e.field)),layer_close(),!1})});
### 介绍：

基于bootstrap3，用来生成quartz cron表达式，特别感谢博主：http://www.cnblogs.com/yanweidie/p/3537144.html和https://github.com/hsal/cronGen ，插件在这两者的基础上进行合并和优化,插件使用简单

### 使用示例：
1、引入依赖
   ```
 <link href="bootstrap.min.css" rel="stylesheet">
    <link href="font/font-awesome.min.css" rel="stylesheet">
    <link href="cronGen.css" rel="stylesheet">
    <script src="jquery-2.1.4.min.js"></script>
    <script src="cronGen.min.new.js"></script>
    <script src="bootstrap.min.js"></script>
```

2、bootstrap form表单：
```
	<div class="container">
		<form role="form" class="form-inline">
			<div class="form-group">
				<label for="cron">Cron</label>
				<input id="cron" class="form-control" />
			</div>
		</form>
	</div>
``` 
3、初始化：
```
	$(function() {
	    $("#cron").cronGen({
	    	direction : 'right'
	    	});
	});
```
### 介绍：

基于bootstrap5，用来生成quartz cron表达式，可配置弹出窗口的位置。

### 使用示例：
1. 引入依赖
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.css" rel="stylesheet" crossorigin="anonymous">
   <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css" rel="stylesheet">
   <link href="./src/cronGen.css" rel="stylesheet">
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.js"></script>
   <script src="./src/cronGen.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.js"></script>
   ```

2. bootstrap form表单：
   ```html
	<div class="container">
		<form role="form" class="form-inline">
			<div class="form-group">
				<label for="cron">Cron</label>
				<input id="cron" class="form-control" />
			</div>
		</form>
	</div>
   ``` 
3. 初始化：
   ```js
	$(function() {
	    $("#cron").cronGen({
	        direction : 'right'
	    });
	});
   ```
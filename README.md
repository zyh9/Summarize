# 辉辉的个人总结

## 盒子水平垂直居中（4种方法）
```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
        <style>
          *{
            margin: 0;
            padding: 0;
          }
          /*方法4*/
          /*body{
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
          }*/
          #box{
            width: 100px;
            height: 100px;
            background: red;
            /*方法1*/
            /*position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -50px;
            margin-top: -50px;*/
            /*方法2*/
            /*position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);*/
            /*方法3*/
            /*position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;*/
          }
        </style>
      </head>
      <body>
        <div id="box"></div>
      </body>
    </html>
```

## 图片水平垂直居中
```
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8">
    		<title></title>
    		<style type="text/css">
    			.box,.box2{
    				width: 500px;
    				height: 500px;
    				border: 1px solid #000;
    				text-align: center;
    				float: left;
    				margin-right: 50px;
    			}
    			.box img{
    				display: inline-block;
    				vertical-align: middle;
    				width: 300px;
    				height: 300px;
    			}
    			.box span,.box2 span{
    				display: inline-block;
    				vertical-align: middle;
    				height: 100%;
    				width: 0;
    			}
    			.box2 a{
    				display: inline-block;
    				vertical-align: middle;
    				width: 300px;
    				height: 300px;
    			}
    			.box2 img{
    				display: block;
    				border: 0;
    				width: 300px;
    				height: 300px;
    			}
    		</style>
    	</head>
    	<body>
    		<div class="box">
    			<img src="img/小西瓜.jpg" />
    			<!--在img标签后边直接加一个空标签-->
    			<span></span>
    		</div>
    		<div class="box2">
    			<a href="#"><img src="img/小西瓜.jpg" /></a>
    			<!--在a标签后边直接加一个空标签-->
    			<span></span>
    		</div>
    	</body>
    </html>
```

# 辉辉的个人总结

## 盒子水平垂直居中（5种方法）

> 一、盒子没有固定的宽和高
```

	1、transforms 变形

		这是最简单的方法，不仅能实现绝对居中同样的效果，
		
		也支持联合可变高度方式使用。
		
		内容块定义transform: translate(-50%,-50%)
		
		必须加上top: 50%; left: 50%;

		优点：

			1.内容可变高度
			
			2.代码量少

		缺点：

		1.IE8不支持
		
		2.属性需要写浏览器厂商前缀
		
		3.可能干扰其他transform效果
		
		4.某些情形下会出现文本或元素边界渲染模糊的现象

		<div class="wrapper">
			我不知道我的宽度和高度是多少，我要实现水平垂直居中。
		</div>
		
		    .wrapper {
                    padding: 20px;
                    background: orange;
                    color: #fff;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
               	}


	2、在父级元素上面加上上面3条样式，就可以实现子元素水平垂直居中。

		<div class="wrapper">
			我不知道我的宽度和高度是多少，我要实现水平垂直居中。
		</div>
       
            .wrapper {
                    padding: 20px;
                    background: orange;
                    color: #fff;
               	}
       	
       	/*只需要在父元素上加这三条*/
        justify-content: center; /*子元素水平居中*/
        align-items: center; /*子元素垂直居中*/
        display: flex; /*弹性盒模型*/
        
        
    3、在父级元素上面添加一条样式，子级元素上面添加一条样式，就可以实现子元素水平垂直居中。
				
		<div class="wrapper">
			我不知道我的宽度和高度是多少，我要实现水平垂直居中。
		</div>
       
            .wrapper {
                    padding: 20px;
                    background: orange;
                    color: #fff;
                    /*添加这条样式*/
                    margin:auto;
               	}
       	
       	/*只需要在父元素上加这一条*/
        display: flex; /*弹性盒模型*/
```

> 二、盒子有固定的宽和高
```

	1、margin 负间距

		此方案代码关键点：
		
		1.必需知道该div的宽度和高度
		
		2.然后设置位置为绝对位置
		
		3.距离页面窗口左边框和上边框的距离设置为50%，这个50%就是指页面窗口的宽度和高度的50%
		
		4.最后将该div分别左移和上移，左移和上移的大小就是该div宽度和高度的一半

		<div class="wrapper">
			我知道我的宽度和高度是多少，我要实现水平垂直居中。
		</div>
		
		    .wrapper {
                    width: 400px;
                    height: 20px;
                    padding: 20px;
                    background: orange;
                    color: #fff;
                    position: absolute;
                    top:50%;
                    left:50%;
                    margin-top: -10px;
                    margin-left: -200px;
               	}
       
       	
 	2、margin:auto实现绝对定位元素的居中（该方法兼容ie8以上浏览器）

		此方案代码关键点：
		
			1、上下左右均0位置定位
			
			2、margin: auto

		<div class="wrapper">
			我知道我的宽度和高度是多少，我要实现水平垂直居中。
		</div>
		
	        .wrapper {
                    width: 400px;
                    height: 20px;
                    padding:20px;
                    background: orange;
                    color: #fff;
                    position: absolute;
                    left:0;
                    right:0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
               }
```

> 代码举例
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
              
                /*方法1:适用于宽高固定的情况*/
                /*#box{
                    width: 100px;
                    height: 100px;
                    background: red;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -50px;
                    margin-top: -50px;
                }*/
              
                /*方法2:适用于宽高固定的情况*/
                /*#box{
                    width: 100px;
                    height: 100px;
                    background: red;
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                }*/
              
                /*方法3:适用于宽高不固定的情况*/
                /*#box{
                    padding: 50px;
                    background: red;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }*/
              
                /*方法4:适用于宽高不固定的情况*/
                /*body{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #box{
                    padding: 50px;
                    background: red;
                }*/
              
         	    /*方法5:适用于宽高不固定的情况*/
                /*body{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    display: flex;
                }
                #box{
                    padding: 50px;
                    background: red;
                    margin: auto;
                }*/
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

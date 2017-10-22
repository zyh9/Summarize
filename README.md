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
			justify-content: center;	/*子元素水平居中*/
			align-items: center;		/*子元素垂直居中*/
			display: flex;				/*弹性盒模型*/
		
		
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
		display: flex;		/*弹性盒模型*/
```

> 二、盒子有固定的宽和高

```
		1、margin 负间距
		
			此方案代码关键点：
			
				1.必须知道该div的宽度和高度
				
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

### AMD/CMD/CommonJs到底是什么？它们有什么区别？

		1：AMD/CMD/CommonJs是JS模块化开发的标准，目前对应的实现是RequireJs/SeaJs/nodeJs
		
		2：CommonJs主要针对服务端，AMD/CMD主要针对浏览器端，所以最容易混淆的是AMD/CMD。
		
			针对服务器端和针对浏览器端有什么本质的区别呢？
				服务器端一般采用同步加载文件，也就是说需要某个模块，服务器端便停下来，等待它加载再执行。
				而浏览器端要保证效率，需要采用异步加载，这就需要一个预处理，提前将所需要的模块文件并行加载好。
			
		3：AMD/CMD区别
		
			虽然都是并行加载js文件，但还是有所区别
			AMD是预加载，在并行加载js文件同时，还会解析执行该模块
			（因为还需要执行，所以在加载某个模块前，这个模块的依赖模块需要先加载完成）；
			而CMD是懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。
			
		4：AMD/CMD的优缺点，一个的优点就是另一个的缺点， 可以对照浏览。
				
                AMD优点：加载快速，尤其遇到多个大文件，因为并行解析，所以同一时间可以解析多个文件。
                AMD缺点：并行加载，异步处理，加载顺序不一定，可能会造成一些困扰，甚至为程序埋下大坑。
			
                CMD优点：因为只有在使用的时候才会解析执行js文件，因此，每个JS文件的执行顺序在代码中是有体现的，是可控的。
                CMD缺点：执行等待时间会叠加。因为每个文件执行时是同步执行（串行执行），因此时间是所有文件解析执行时间之和，
                		尤其在文件较多较大时，这种缺点尤为明显。
			
		5：如何使用？
		
			CommonJs的话，因为nodeJs就是它的实现，所以使用node就行，也不用引入其他包
			AMD则是通过<script>标签引入RequireJs
			CMD则是通过<script>标签引入SeaJs

### HTTP、TCP/IP、Socket、UDP区别

		互联网的实现，分成好几层。每一层都有自己的功能，就像建筑物一样，每一层都靠下一层支持。
		用户接触到的，只是最上面的一层，根本没有感觉到下面的层。
		要理解互联网，必须从最下层开始，自下而上理解每一层的功能。
		
			**应用层**
			
				**传输层**
				
					**网络层**
					
						**链接层**
						
							**实体层**
		
		IP协议对应于网络层，TCP协议对应于传输层，而HTTP协议对应于应用层
		
		TCP/IP协议是传输层协议，主要解决数据如何在网络中传输，而HTTP是应用层协议，主要解决如何包装数据
		
		关于TCP/IP和HTTP协议的关系，网络有一段比较容易理解的介绍：
		
			我们在传输数据时，可以只使用(传输层)TCP/IP协议，但是那样的话，如果没有应用层，
			便无法识别数据内容。如果想要使传输的数据有意义，则必须使用到应用层协议。
			
		而我们平时说的最多的Socket是什么呢，实际上Socket是对TCP/IP协议的封装，
		Socket本身并不是协议，而是一个调用接口(API)。通过Socket，我们才能使用TCP/IP协议。
		实际上，Socket跟TCP/IP协议没有必然的联系。Socket编程接口在设计的时候，就希望也能适应其他的网络协议。
		所以说，Socket的出现只是使得程序员更方便地使用TCP/IP协议栈而已，是对TCP/IP协议的抽象。
		
		关于TCP/IP和Socket协议的关系网络有一段关于socket和TCP/IP协议关系的说法比较容易理解：
		
			TCP/IP只是一个协议栈，就像操作系统的运行机制一样，必须要具体实现，同时还要提供对外的操作接口。
			TCP/IP也要提供可供程序员做网络开发所用的接口，这就是Socket编程接口。
			
			
		TCP：面向连接、传输可靠(保证数据正确性,保证数据顺序)、用于传输大量数据(流模式)、速度慢，
			建立连接需要开销较多(时间，系统资源)。
		
		UDP：面向非连接、传输不可靠、用于传输少量数据(数据包模式)、速度快。
		
		1.	TCP是面向连接的，虽然说网络的不安全不稳定特性决定了多少次握手都不能保证连接的可靠性，
			但TCP的三次握手在最低限度上(实际上也很大程度上保证了)保证了连接的可靠性;
			而UDP不是面向连接的，UDP传送数据前并不与对方建立连接，对接收到的数据也不发送确认信号，
			发送端不知道数据是否会正确接收，当然也不用重发，所以说UDP是无连接的、不可靠的一种数据传输协议。
			
		2.	也正由于1所说的特点，使得UDP的开销更小数据传输速率更高，
			因为不必进行收发数据的确认，所以UDP的实时性更好。
			知道了TCP和UDP的区别，就不难理解为何采用TCP传输协议的MSN比采用UDP的QQ传输文件慢了，
			但并不能说QQ的通信是不安全的，因为程序员可以手动对UDP的数据收发进行验证，
			比如可以由发送方对每个数据包进行编号然后由接收方进行验证，即使是这样，
			UDP因为在底层协议的封装上没有采用类似TCP的“三次握手”而实现了TCP所无法达到的传输效率。

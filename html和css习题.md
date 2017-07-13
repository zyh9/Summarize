# html和css习题

---

## 内容目录

 [toc]

### 一、 写出html和css的注释	

> 1.html注释 <！---->
> 2.css注释 /**/

### 二、写出伪类选择符的正确顺序。

> 1.a:link (超链接的初始状态)
> 2.a:visited (超链接被访问后的状态)
> 3.a:hover (鼠标划过超链接时的状态)
> 4.a:active (鼠标按下时超链接的状态)

### 三、HTML5 基本结构

	<!doctype html> 命名文档类型
	<html> 说明我们写的是标记语言
	<head> 文件头部
	<meta charset="utf-8"/> 编码格式
	<title></title> 文件标题
	</head>
	<body> 文件主体
	</body>
	</html>

### 四、HTML基本语法（1.常规标记<常规标记> 2.空标记 ）

> 常规标记：<标记 属性="属性值"  属性="属性值"></标记>

> 空标记：<标记 属性="属性值" />

### 五、创建内部样式的语法：

	<style type="text/css"></style>

### 六、写出CSS语法

> 选择符{属性:属性值; 属性:属性值;}

### 七、外部样式一种调用方法

	<link rel="stylesheet" type="text/css" href="css文件路径"/>

### 八、CSS选择符大概包括哪几种，分别写出ID选择符、CLASS选择符、包含选择符，群组选择符的语法。

> CSS选择符：元素选择符，id选择符，class选择符，群组选择符，包含选择符，伪类选择符...

> 元素选择符：元素名称{属性：属性值；}

> id选择符：#id名{属性：属性值;}

> class选择符：.class名{属性：属性值;}

> 群组选择符：选择符1，选择符2，选择符3...{属性：属性值;}

> 包含选择符：选择符1 选择符2{属性：属性值;}

> 伪类选择符：a:link{属性：属性值;}  a:visited{属性：属性值;}  a:hover{属性：属性值;}  a:active{属性：属性值;}

### 九、相对路径的三种写法。

> 1.当当前文件与目标文件在同一目录下，写法如下：目标文件文件名+扩展名；

> 2.当当前文件与目标文件所处的文件夹在同一目录下，写法如下：文件夹名/目标文件全称+扩展名；

> 3.当当前文件所处的文件夹和目标文件所处的文件夹在同一目录下，写法如下：../目标文件所处文件夹名/目标文件文件名+扩展名

### 十、超链接写法。

	<a href="目标文件路径及全称/链接地址">链接文本/图片</a>
	
	<a href="#"></a>空链接
	
	<a href="#" target="_blank">新窗口打开</a>

### 十一、多行文本框（文本域）

	textarea文本域
	
	rows:规定文本区内的可见行数
	
	cols:规定文本区内的可见宽度(以平均字符数计)
	
	resize:
		none(默认值，用户无法调整元素尺寸)
		both(用户可调整元素的高度和宽度)
		horizontal(用户可调整元素的宽度)
		vertical(用户可调整元素的高度)

### 十二、下拉菜单

	select/option下拉选框

### 十三、写出单选按钮并默认选中

	checked  在页面加载时默认选定的 input元素。
		<input type="radio" name="" checked/>
		或者checked="checked"
		
	disabled  属性规定加载时应该禁用的 input元素。
		<input type="radio" name="" disabled/>
		或者disabled="disabled"

### 十四、边框属性及属性值

> border-top-width(边框宽度)
> border-top-style(边框样式)
> border-top-color(边框颜色)
> 边框的方向：top(上边)  bottom(下边)  left(左边)  right(右边)
> 边框的线型：solid:实线，dashed:虚线，dotted:点状线，double:双线，none:没有边框;

### 十五、加粗属性及属性值

> font-weight:normal(正常)/bold(加粗)/bolder(加粗)/100-900(100-500为常规字体，600-900为加粗字体)

### 十六、水平对齐属性及属性值。

> text-align:left/right/center/justify（两端对齐中文不起作用）

### 十七、垂直对齐属性及属性值。

> vertical-align:top（顶端）/middle（中间）/bottom（底部）

### 十八、背景属性及属性值

> 选择符{background-color:颜色值;}

> 选择符{background-image:url(背景图片的路径及全称);}

> 选择符{background-repeat:no-repeat(不平铺)/repeat(默认平铺)/repeat-x(横向平铺)/repeat-y(纵向平铺);}

> 选择符{background-position:left(左边)/center(中间)/right(右边)/数值(像素值)  top(上边)/center(中间)/bottom(下边)/数值(像素值);}

> 选择符{background-attachment:scroll(滚动)/fixed(固定);}

### 十九、浮动属性及属性值

> float:none(没有)/left(左边)/right(右边)

### 二十、清除浮动的方法（至少三种）

	1.万能清除法：
		选择符：after{content:"."; clear:both; display:block; height:0; overflow:hidden; visibility:hidden;}
		
	2.clear清除浮动
		clear：元素的某个方向上不能有浮动元素，需要给块元素添加
		属性值：left  right  both
		在浮动元素下方添加空div,并给该元素添加声明：{clear:both;}
		
	3.结构：
		<div class="box">
			<div class="top"></div>
			<br clear="both" />
		</div>
		
	4.overflow:hidden
		给父元素添加声明{overflow:hidden;}

### 二十一、定位属性及属性值（标明相对于谁定位）

> position:static/relative/absolute/fixed

> 1.static：默认值，无特殊定位，对象遵循HTML原则；

> 2.relative：相对定位，对象不可层叠，将依据right，top，left，bottom（相对定位）；

> 3.absolute：绝对定位，将对象从文档流中拖离出来，使用left/right/top/bottom等属性，相对其最接近的一个并有定位设置的父元素进行绝对定位；
如果不存在这样的父对象，则依据document，而其层叠通过z-index属性定义；

> 4.fixed：固定定位，对象定位遵从绝对定位方式（absolute）；但是要遵守一些规范（IE6浏览器不支持此定位）根据浏览器的窗口来定义自己的位置。

### 二十二、兼容最小高度的两种写法

> 兼容元素具备最小高度自适应的方法：

> hack1:min-height:value; _height:value;

> hack2:min-height:value; height:auto!important; height:value;(建议使用)

### 二十三、怎样使一个宽为200px和高为200px的盒子，水平垂直居中于浏览器中?写出CSS样式代码

	box{ width:200px;
	height:200px;
	background: green;
	position: absolute;
	left:50%;
	top:50%;
	margin-left:-100px;
	margin-top:-100px;}

### 二十四、雪碧图的好处，并写明利用哪个属性进行操作

> 雪碧图优点：

> 1.折叠减少加载网页图片时对服务器的请求次数
可以合并多数背景图片和小图标，方便在任何位置使用，这样不同位置的请求只需要调用一个图片，
从而减少对服务器的请求次数，降低服务器压力，同时提高了页面的加载速度，节约服务器的流量。

> 2.折叠提高页面的加载速度
sprite技术的其中一个好处是图片的加载时间(在有许多sprite时，单张图片的加载时间)。
由所需图片拼成的一张GIF图片的尺寸会明显小于所有图片拼合前的大小。
单张的GIF只有相关的一个色表，而单独分割的每一张GIF都有自己的一个色表，这就增加了总体的大小。
因此，单独的一张JPEG或者PNG，sprite在大小上非常可能比把一张图分成多张得来的图片总尺寸小。

> 3.折叠减少鼠标滑过的一些bug
IE6不会主动预加载鼠标滑过即a:hover中的背景图片，所以，如果使用多张图片，鼠标滑过会出现闪白的现象。使用CSS雪碧，由于一张图片即可，所以不会出现这种现象。
	
> 雪碧图利用background-position属性进行操作

### 二十五、说明块和内嵌以及Inline-block的区别，并列举所知道的block，inline以及inline-block类型的标签

> display:block

> 1.block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。

> 2.block元素可以设置width，height属性。块级元素即使设置了宽度，仍然是独占一行。

> 3.block元素可以设置margin和padding属性。

> display:inline

> 1.inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。

> 2.inline元素设置width，height属性无效。

> 3.inline元素的margin和padding属性，水平方向的padding-left,padding-right,margin-left,margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
	
> display:inline-block

> 1.简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。

> 2.一般我们会用display:block，display:inline或者display:inline-block来调整元素的布局级别，其实display的参数远远不止这三种，仅仅是比较常用而已。

> 3.IE（低版本IE）本来是不支持inline-block的，所以在IE中对内联元素使用display:inline-block，理论上IE是不识别的，但使用display:inline-block在IE下会触发layout，从而使内联元素拥有了display:inline-block属性的表象。
	
> 常用的块状元素：div,(h1-h6),p,dl,dt,dd,ol,ul,table,tr,td等；

> 常见的内联元素：a,span,i,em,strong,b,del等；

> inline-block标签：img,input；

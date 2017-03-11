# HTML5
看 《HTML5 基础知识丶核心技术与前沿案例》 一书自己动手写的 Demo,下面是一些笔记。
---
### 3. CSS3 新手详解

- 百分比是一个例外，当数值为百分之零时，在 `CSS` 中一定要写成 0% 而非 0。

- 在 `CSS` 中， `line-height: 150%` 与 `line-height: 1.5` 有何差别呢？答案是，二者的差别在于继承性，使用百分比时，会首先计算父元素 `line-height` 的值，然后将这一像素值继承给子元素。而使用无单位的 1.5 时，子元素继承的是 1.5 这个系数，再分别计算其对应的 `line-height` 像素值。下面举个例子来说明。

        <style type="text/css">
        	body {
        		font-size: 24px;
        		line-height: 150%; 
        	}

        	p {
        		font-size: 18px;
        	}
        </style>
        </head>
        <body>
    	      <p>
    		        Play your beauty and imagination, explore the infinite possibilities of web development, and now sincerely invite you to start the HTML5 study tour.
    	      </p>
        </body>
        
 对于上面这个例子，如果在 `body` 中设置了 `line-height: 150%`，那么 `body`本身的行高就等于 `24 * 150% = 36px`, 这时候它的子元素 `p` 也会继承这一个值。
 
 如果我们在 `body` 中设置了 `line-height: 1.5`， 那么 `body` 本身的行高就等于 `24 * 1.5 = 36px`， 这个时候它的子元素会获得一个系数 `1.5`， 如果想得到行高，它需要利用自身的 `font-size` 去计算，也就是说 `p` 的行高等于 `18 * 1.5 = 27px`.
 
 可以参照 [《css行高line-height的一些深入理解及应用》](http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)。
 
- 不同的浏览器对 `Web`字体 的支持并不相同， IE浏览器支持 `eot` 字体， `Chrome， Safari， Firefox` 等浏览器支持 `ttf` 和 `woff` 字体。其中 `woff` 字体是最佳的格式，一方面它经过了有效的压缩来减少档案的大小，另一方面它不涉及加密，也不涉及数位著作权管理的限制。

- 将文字首行缩进到人们看不到的地方，再运用背景样式显示图片内容，这样的方式在不改动 `DOM` 内容结构的同时又美化了页面，是 `SEO` 中常见的一种处理手法。

- 块级元素可以包含行内元素和块级元素，而行内元素却不能包含块级元素。 对于行内元素而言，设置宽度和高度是无效的(不过能设置行高),但能为块级元素设置宽和高。

- 常见的优先级排序为： 通用选择器 < 标签选择器 < 类选择器 < 伪类选择器 < ID选择器。

---

### 4. JavaScript 新手详解

- `console.warn()` 输出警告信息， `console.error()` 输出错误信息， `console.info()` 输出提示信息， `console.debug()` 输出调试信息。

---

### 5. 移动端 HTML5 开发详解

- 移动端浏览器虚拟出了一种名为 `viewport` 的显示窗口，在不同的设备中这一显示窗口的大小也不同（如 WindowsPhone 的 `viewport` 宽度为 1024 像素，IOS 设备为980像素），都无一例外的超过了手机屏幕的实际宽度，为了尽可能的不出现滚动条，手机浏览器会自动将网页缩放以适应屏幕宽度，这也就是为什么我们在手机上访问网页时，页面文字和图片元素都显示的很小，而用 `JavaScript` 调取页面宽度，宽度值又为 980像素 的原因。

 所以，一般为了让手机用户有良好的浏览体验，我们会在代码中添加以下语句
 
         <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
         
 一是设置 `viewport` 的宽度为 `device-width`，即显示窗口等于设备宽度，也就是将原本 980 像素的 `viewport` 宽度更改为屏幕实际的像素宽度。二是设置窗口的 `initial-scale` 为 1， 即窗口默认不缩放。三是设置 `user-scalable` 为 `no`，让用户不可缩放页面。四是设置 `maximum-scale` 为 1，即设置窗口的最大缩放程度为 1。
 
 ---
 
### 11. HTML5 交互操作
 
 - 可以通过 `::selection` 伪元素来自主修改反选样式，不过只能修改少量的 `CSS` 属性， 如 `color, background, cursor, outline` 等。
 - `offsetTop` 只能获取元素到父元素的高度差，如果想获取一个元素到浏览器顶端的距离，可以用如下代码
 
     		function getTop(e) {
    			var offset = e.offsetTop;
    			if(e.offsetParent != null) {
    				offset += getTop(e.offsetParent);
    			}
    			return offset;
    		}

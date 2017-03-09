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
 
 可以参照 [《深入理解 css 的行高 line-height 属性》](深入了解css的行高Line Height属性) 以及 [《css行高line-height的一些深入理解及应用》](http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)。
 
- 不同的浏览器对 `Web`字体 的支持并不相同， IE浏览器支持 `eot` 字体， `Chrome， Safari， Firefox` 等浏览器支持 `ttf` 和 `woff` 字体。其中 `woff` 字体是最佳的格式，一方面它经过了有效的压缩来减少档案的大小，另一方面它不涉及加密，也不涉及数位著作权管理的限制。

- 将文字首行缩进到人们看不到的地方，再运用背景样式显示图片内容，这样的方式在不改动 `DOM` 内容结构的同时又美化了页面，是 `SEO` 中常见的一种处理手法。

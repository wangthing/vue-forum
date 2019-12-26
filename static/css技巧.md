# 你所不知道的 CSS 负值技巧与细节

写本文的起因是，一天在群里有同学说误打误撞下，**使用负的 outline-offset 实现了加号**。嗯？好奇的我马上也动手尝试了下，到底是如何使用负的 outline-offset 实现加号呢？

## 使用负值 outline-offset 实现加号

假设我们有这样一个简单的结构：

```
<div></div>
复制代码
```

```
div {
    width: 200px; height: 200px;
    outline: 20px solid #000;
    outline-offset: 10px;
}
复制代码
```

![offset](https://user-gold-cdn.xitu.io/2019/8/8/16c6f0793bdac33b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

修改 `outline-offset` 到一个合适的负值 ，那么在恰当的时候，outline 边框就会向内缩进为一个加号。

经过一番尝试，修改上述 div 的 `outline-offset`为 -118px。

```
div {
    width: 200px; height: 200px;
    outline: 20px solid #000;
    outline-offset: -118px;
}
复制代码
```

加个动画效果，大概是这样：

![offset](https://user-gold-cdn.xitu.io/2019/8/8/16c6f0793be1e3cb?imageslim)

[CodePen Demo -- 使用outline实现加号](https://link.juejin.im/?target=https%3A%2F%2Fcodepen.io%2FChokcoco%2Fpen%2FPrrLaP)

很有意思，我尝试了很多不同的情况，最后总结了一个简单的规律，要使用负的 outline-offset 生成一个加号有一些简单的限制：

- 容器得是个正方形
- outline 边框本身的宽度不能太小
- outline-offset 负值 x 的取值范围为: -(容器宽度的一半 + outline宽度的一半) < x < -(容器宽度的一半 + outline宽度)

------

在这个例子后，我又想，CSS 属性可以取负值的地方有很多。大家最为熟知的就是**负margin**，使用负的 marign，可以用来实现类似多列等高布局、垂直居中等等。那还有没有其他一些有意思的负值使用技巧呢？

下文就再介绍一些 CSS 负值有意思的使用场景。

## 单侧投影

先说单侧投影，关于 `box-shadow`，大部分时候，我们使用它都是用来生成一个两侧的投影，或者一个四侧的投影。如下：

![image](https://user-gold-cdn.xitu.io/2019/8/8/16c6f08b86bdb1af?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

OK，那如果要生成一个单侧的投影呢？

我们来看看 box-shadow 的用法定义：

```
{
    box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
}
复制代码
```

以 `box-shadow: 1px 2px 3px 4px #333` 为例，4 个数值的含义分别是，x 方向偏移值、y 方向偏移值 、模糊半径、扩张半径。

这里有一个小技巧，**扩张半径可以为负值**。

继续，如果阴影的模糊半径，与**负的**扩张半径一致，那么我们将看不到任何阴影，因为生成的阴影将被包含在原来的元素之下，除非给它设定一个方向的偏移量。所以这个时候，我们给定一个方向的偏移值，即可实现单侧投影：

![image](https://user-gold-cdn.xitu.io/2019/8/8/16c6f0794abfc06f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

[CodePen Demo -- css单侧投影](https://link.juejin.im/?target=https%3A%2F%2Fcodepen.io%2FChokcoco%2Fpen%2FpergRb)

## 使用 scale(-1) 实现翻转

通常，我们要实现一个元素的 180° 翻转，我们会使用 `transform: rotate(180deg)`，这里有个小技巧，使用 `transform: scale(-1)` 可以达到同样的效果。看个 Demo：

```
<p class="scale">CSS Nagative Scale(-1)</p>
复制代码
```

```
.scale {
    transform: scale(1);
    animation: scale 10s infinite linear;
}

@keyframes scale{
    50% {
        transform: scale(-1);
    }  
    100% {
        transform: scale(-1);
    }
}
复制代码
```

看看效果：

![scale-1](https://user-gold-cdn.xitu.io/2019/8/8/16c6f0794aa756dd?imageslim)

（**GIF 中第一行是使用了 transform: rotate(180deg) 的效果**）

[CodePen Demo -- 使用 scale(-1) 实现元素的翻转](https://link.juejin.im/?target=https%3A%2F%2Fcodepen.io%2FChokcoco%2Fpen%2FVoQXVq)

## 使用负 letter-spacing 倒序排列文字

与上面 scale(-1) 有异曲同工之妙的是负的 `letter-spacing`。

`letter-spacing` 属性明确了文字的间距行为，通常而言，除了关键字 `normal`，我们还可以指定一个大小，表示文字的间距。像这样：

```
<p class="letter_spacing">倒序排列文字</p>
复制代码
```

```
.letter_spacing {
    font-size: 36px;
    letter-spacing: 0px;
    animation: move 10s infinite;
}

@keyframes move {
    40% {
        letter-spacing: 36px;
    }
    80% {
        letter-spacing: -72px;
    }
    100% {
        letter-spacing: -72px;
    }
}
复制代码
```

我们设置文字的 `letter-spacing` 从 0 -> 36px -> -72px，观察不同的变化：

![letter-spacing](https://user-gold-cdn.xitu.io/2019/8/8/16c6f08b86a1bcf1?imageslim)

[CodePen Demo -- 负letter-spacing倒序排列文字](https://link.juejin.im/?target=https%3A%2F%2Fcodepen.io%2FChokcoco%2Fpen%2FQeQXpW)

然而，受到中英文混排或者不同字体的影响，以及倒序后的排列方式，不建议使用这种方式来倒序排列文字。

## transition-delay 及 animation-delay 的负值使用，立刻开始动画

我们知道，CSS 动画及过渡提供了一个 delay 属性，可以延迟动画的进行。

考虑下面这个动画：

![transition-delay2](https://user-gold-cdn.xitu.io/2019/8/8/16c6f0799f472ff5?imageslim)

简单的代码大概是这样：

```
<div class="g-container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
复制代码
```

```
.item {
    transform: rotate(0) translate(-80px, 0) ;
}

.item:nth-child(1) {
    animation: rotate 3s infinite linear;
}

.item:nth-child(2) {
    animation: rotate 3s infinite 1s linear;
}

.item:nth-child(3) {
    animation: rotate 3s infinite 2s linear;
}


@keyframes rotate {
    100% {
        transform: rotate(360deg) translate(-80px, 0) ;
    }
}
复制代码
```

如果，我们想去掉这个延迟，希望在一进入页面的时候，3 个球就是同时运动的。这个时候，只需要把正向的 animation-delay 改成负向的即可。

```
.item:nth-child(1) {
    animation: rotate 3s infinite linear;
}

.item:nth-child(2) {
    animation: rotate 3s infinite -1s linear;
}

.item:nth-child(3) {
    animation: rotate 3s infinite -2s linear;
}
复制代码
```

这里，有个小技巧，**被设置了 animation-dealy 为负值的动画会立刻执行，开始的位置是其动画阶段中的一个阶段**。所以，动画在一开始的时刻就是下面这样：

![transition-delay](https://user-gold-cdn.xitu.io/2019/8/8/16c6f07a265d63a9?imageslim)

以上述动画为例，一个被定义执行 3s 的动画，如果 `animation-delay` 为 -1s，起点相当于正常执行时，第2s（3-1）时的位置。

[CodePen Demo -- 使用负值 animation-delay 提前执行动画](https://link.juejin.im/?target=https%3A%2F%2Fcodepen.io%2FChokcoco%2Fpen%2Fymvjez)

## 负值 margin

负值 margin 在 CSS 中算是运用的比较多的，元素的外边距可以设置为负值。

在 flexbox 布局规范还没流行之前，实现多行等高布局还是需要下一番功夫的。其中一种方法便是使用正 padding 负 margin 相消的方法。

有如下一个布局：

左右两栏的内容都是不确定的，也就是高度未知。但是希望无论左侧内容较多还是右侧内容较多，两栏的高度始终保持一致。

OK，其中一种 Hack 办法便是使用一个很大的正 padding 和相同的负 margin 相消的方法填充左右两栏：

```
.g-left {
  ...
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}

.g-right {
  ...
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}
复制代码
```

可以做到无论左右两栏高度如何变化，高度较低的那一栏都会随着另外一栏变化。

具体的代码可以看看这里：[CodePen Demo -- 正padding负margin实现多列等高布局](https://link.juejin.im/?target=https%3A%2F%2Fcodepen.io%2FChokcoco%2Fpen%2FZgrmVy)

## 总结一下

另外，还有一些大家熟知的没有单独列出来的，譬如：

- 使用负 marign 实现元素的水平垂直居中
- 使用负 marign隐藏列表 li 首尾多余的边框
- 使用负 text-indent 实现文字的隐藏
- 使用负的 z-index 参与层叠上下文排序

还有一些很深奥的，譬如张鑫旭大大在今年的 CSS 大会上分享的，利用负的 opacity 在 CSS 中实现了伪条件判断，配合 CSS 自定义属性，使用纯 CSS 实现 360° 的饼图效果：

- [第五届CSS大会主题分享之CSS创意与视觉表现](https://link.juejin.im/?target=https%3A%2F%2Fwww.zhangxinxu.com%2Fwordpress%2F2019%2F06%2Fcssconf-css-idea%2F)

## 最后

额，虽然 CSS 负值的一些使用场景的确有有用之处，但是与此同时有可能带来的是代码可读性的下降。有的时候看到这些代码不得不好好捋一捋才能缓过神来，再感叹一句，原来如此。

如果有其他更好的更易理解的实现方式，具体使用实现的时候应该好好权衡一下。

好了，本文到此结束，希望对你有帮助 :)

更多精彩 CSS 技术文章汇总在我的 [Github -- iCSS](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fchokcoco%2FiCSS) ，持续更新，欢迎点个 star 订阅收藏。

如果还有什么疑问或者建议，可以多多交流，原创文章，文笔有限，才疏学浅，文中若有不正之处，万望告知。
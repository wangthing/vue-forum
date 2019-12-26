# 关于css margin，你需要知道的一切

> 原文：[www.smashingmagazine.com/2019/07/mar…](https://link.juejin.im/?target=https%3A%2F%2Fwww.smashingmagazine.com%2F2019%2F07%2Fmargins-in-css%2F)
>
> 译者：前端小智

**为了保证的可读性，本文采用意译而非直译。**

当我们学习CSS时，我们大多数人学到的第一件事是CSS中盒子的各个部分的细节，这部分通过叫做 CSS盒、模型。“盒模型”中的元素之一是`margin`，即盒子周围的透明区域，它会将其他元素从盒子内容中推开。

CSS1中描述了 `margin-top`、`margin-right`、`margin-bottom`和`margin-left`属性，以及一次设置所有四个属性的简写 `margin`。

`margin`看起来是一个相当简单的事情，但是，在本文中，咱们将看一些在使用`margin`一些让人迷惑有有趣的事情。 特别是，`margin`之间如何相互作用，以及 `margin` 重叠效果。

**想阅读更多优质文章请猛戳GitHub博客,一年百来篇优质文章等着你！**

## CSS 盒模型

CSS 盒模型指的是一个盒子的各个部分——`content`、`padding`、`border`和`margin`,它们各自之前是如何布局及相互作用的， 如下所示：

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455ce334d717b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

盒子的的四个`margin`属性和`maring`缩写都在CSS1中定义。

CSS2.1规范有一个演示盒模型的插图，还定义了用来描述各种盒子的术语，其中包括 `content box`、填`padding box`、`border box`和 `margin box`。

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455cf85ffd913?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

现在有一个 [Level 3 Box Model specification](https://link.juejin.im/?target=https%3A%2F%2Fwww.w3.org%2FTR%2Fcss-box-3%2F) 的草案。这个规范引用了CSS2作为盒模型和`margin`的定义，因此我们将在本文的大部分内容中使用CSS2定义。

## margin 重叠

CSS1 规范定义了`margin`，也定义了垂直 `margin` 重叠。如果考虑到在早期，CSS被用作文档格式语言，那么 `margin` 重叠是有意义的。 margin 重叠意味着，当一个有底部`margin`的标题后面跟着一个有顶部 `margin` 的段落时，它们之间就不会出现较大的空白。

当两个 `margin` 发生重叠时，它们将组合在一起，两个元素之间的空间取较大的一个。 较小的 `margin` 在较大的里面。

在以下情况下，margin 会重叠：

- 相邻的兄弟姐妹
- 完全空盒子
- 父元素和第一个或最后一个子元素

依次来看看这些场景。

## 相邻的兄弟姐妹

对 `margin` 重叠的最初描述是演示相邻兄弟姐妹之间的 `margin` 是如何重叠的。除了下面提到的情况之外，如果有两个元素在正常流中依次显示，那么第一个元素的底部 `margin` 将与下面元素的顶部 `margin` 一起重叠。

在下面示例中，有三个`div`元素。第一个 `div` 的顶部和底部的`margin`都是`50px`。第二个 `div`的顶部和底部 `margin` 都是`20px`。第三个 `div` 的顶部和底部 `margin` 都是`3em`。前两个元素之间的 `margin` 是`50px`，因为较小的顶部 `margin` 与较大的底部 `margin` 相结合。第二个元素与第三个元素之间的 margin 是 `3em`，因为`3em`大于第二个元素底部`margin` 20px。

**html**

```
<div class="wrapper">

<div class="box example1">
  margin-top: 50px; margin-bottom: 50px;
</div>

<div class="box example2">
  margin-top: 20px; margin-bottom: 20px;
</div>

<div class="box example3">
  margin-top: 3em; margin-bottom: 3em;
</div>
  
</div>
复制代码
```

**css**

```
.wrapper {
  border: 5px dotted black;
}

.example1 {
  margin: 50px 0 50px 0;
}

.example2 {
  margin: 20px 0 20px 0;
}

.example3 {
  margin: 3em 0 3em 0;
}

body {
  font: 1.4em/1.3 "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  margin: 2em 3em;
}

.box {
  background-color: rgb(55,55,110);
  color: white;
  padding: 20px;
  border-radius: .5em;
}
复制代码
```

运行效果:

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455d358e785a7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 完全空盒子

如果一个盒子是空的，那么它的顶部和底部 `margin` 可能会相互重叠。在下面的示例中，`class`为`empty`的元素的顶部和底部 `margin` 各为`50px`，但是，第一项和第三项之间的 `margin`不是`100px`，而是`50px`。这是由于两个 `margin` 重叠造成的。如果向空盒子中放入内容就会阻止 `margin` 合并。

**html**

```
div class="wrapper">

<div class="box">
  A box
</div>

<div class="box empty"></div>

<div class="box">
  Another box
</div>
  
</div>
复制代码
```

**css**

```
.wrapper {
  border: 5px dotted black;
}

body {
  font: 1.4em/1.3 "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  margin: 2em 3em;
}

.box {
  background-color: rgb(55,55,110);
  color: white;
  border-radius: .5em;
}

.empty {
  margin: 50px 0 50px 0;
}
复制代码
```

**运行效果：**

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455d5112f8d36?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 父元素和第一个或最后一个子元素

margin 重叠让人猝不及防，因为它有时候不是很直观。在下面的示例中，有一个类名为 `wrapper`的`div`，给这个div一个红色的`outline`，这样就可以看到它在哪里了。

这个`div`里面的三个子元素的 `margin` 都是`50px`。但是你会发现实际的效果是第一项和最后一项与父元素的的`margin`齐平，好像子元素和父元素之间没有`50px`的`margin`一样。

**html**

```
<div class="wrapper">

<div class="box">
  Item 1
</div>

<div class="box">
  Item 2
</div>

<div class="box">
  Item 3
</div>
  
</div>
复制代码
```

**css**

```
.wrapper {
  outline: 1px solid red;
}

.box {
  margin: 50px;
}

body {
  font: 1.4em/1.3 "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  margin: 2em 3em;
}

.box {
  background-color: rgb(55,55,110);
  color: white;
  padding: 20px;
  border-radius: .5em;
}
复制代码
```

**运行效果：**

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455d6ea6b7c93?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

这是因为子节点上的`margin`会随着父节点上的任何一边的`margin`相互重叠，从而最终位于父节点的外部。如果使用DevTools检查第一个子元素，就可以看到这一点，显示的黄色区域就是是 `margin`。

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455d87d0cd57a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 仅块元素 margin 重叠

在CSS2中，只指定垂直方向的 `margin` 重叠，即元素的顶部和底部 margin。因此，上面的左右边距不会重叠。

> 值得注意的，margin 只在块的方向上重叠，比如段落之间。

## 阻止 margin 重叠

如果一个元素是绝对的定位，或者是浮动的，那么它的`margin`永远不会重叠。然而，假设你遇到了上面示例中的几种情况，那么如何才能阻止 margin 重叠呢？

例如，一个完全空的盒子，如果它有`border`或`padding`，它的上下 `margin`就不会重叠。在下面的例子中，给这个空盒子添加了1px的`padding`。现在这个空盒子的的上方和下方都有一个`50px`的 `margin`。

**html**

```
<div class="wrapper">

<div class="box">
  A box
</div>

<div class="box empty"></div>

<div class="box">
  Another box
</div>
  
</div>
复制代码
```

**css**

```
.wrapper {
  border: 5px dotted black;
}

body {
  font: 1.4em/1.3 "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  margin: 2em 3em;
}

.box {
  background-color: rgb(55,55,110);
  color: white;
  border-radius: .5em;
}

.empty {
  margin: 50px 0 50px 0;
  padding: 1px;
}
复制代码
```

**运行效果：**

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455db91e86e7c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

这背后是有逻辑，如果盒子是完全空的，没有`border`或`padding`，它基本上是不可见的。 它可能是CMS中标记为空的段落元素。 如果你的CMS添加了多余的段落元素，你可能不希望它们在其他段落之间造成较大的空白，这时 margin 重叠就有一定的意义。

对于父元素和第一个或最后一个子元素 margin 重叠，如果我们向父级添加`border`，则子级上的`margin`会保留在内部。

```
...
.wrapper {
  border: 5px dotted black;
}
...
```

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455dd070e74d1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

同样，这种行为也有一定的逻辑。如果出于语义目的而对元素进行包装，但这些元素不显示在屏幕上，那么你可能不希望它们在显示中引入大的 `margin`。当web主要是文本时，这很有意义。当我们使用元素来布局设计时，它的重叠行为就没有多大的意义了。

## 创建格式化上下文（BFC）

**BFC（Block Formatting Context）格式化上下文**，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

BFC 可以阻止边距的重叠。 如果我们再看父元素和第一个或最后一个子元素的示例，可以在 wrapper 元素加上 `display: flow-root`就会创建一个新的BFC，从而阻止 `margin` 合并

```
...
.wrapper {
  outline: 1px solid red;
  display: flow-root;
}
...
复制代码
```

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455de3c0e96b8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

`display: flow-root` 是CSS3新出来的一个属性，用来创建一个无副作用的 BFC。将`overflow`属性的值设为`auto`也会产生同样的效果，因为这也创建了一个新的BFC，尽管它也可能创建一些在某些场景中不需要的滚动条。

## flex 和 grid 容器

`flex` 和 `grid` 容器为其子元素建立`flex`和`grid`格式化上下文，因此它们也能阻止 `margin` 的重叠。

还是以上面的例子为例，将 wrapper 改用 flex 布局：

```
...
.wrapper {
  outline: 1px solid red;
  display: flex;
  flex-direction: column;
}
...
复制代码
```

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455dfbb86b429?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 网站 margin 策略

由于`margin` 会重叠，最好能找到一种一致的方法来处理网站的 `margin`。最简单的方法是只在元素的顶部或底部定义 `margin`。这样，就很少会遇到 margin 重叠的问题，因为有`margin`的边总是与没有`margin`的边相邻。

这个解决方案并不能解决你可能遇到的问题，因为子元素的`margin`会与父元素相互重叠。这个特定的问题往往不那么常见，但知道它为什么会发生可以帮助你想出一个解决方案。

对此，一个理想的解决方案是给元素设置 `display: flow-root`，但有的浏览器并不支持，可以使用`overflow`创建`BFC`、或将父元素设置成`flex`容器，当然还可以设置`padding`来解决。

## 百分比 margin

当你在CSS中使用百分比的时候，它必须是某个元素的百分比。使用百分比设置的 margin(或 padding)始终是父元素内联大小(水平写入模式下的宽度)的百分比。这意味着在使用百分比时，元素周围的`padding`大小都是相同的。

在下面的示例中，有一个200px 宽的 d当，里面是一个类名为 `box` 的`div`，它的 `margin`值为`10%`，也就是 `20px` （200*10%）。

**html**

```
 <div class="wrapper">
  <div class="box">
    I have a margin of 10%.
  </div>
</div>
复制代码
```

**css**

```
 * {
  box-sizing: border-box;
}

.wrapper {
  border: 5px dotted black;
  width: 200px;
}

.box {
  background-color: rgb(55,55,110);
  color: white;
  padding: 20px;
  border-radius: .5em;
  margin: 10%;
}

body {
  font: 1.4em/1.3 "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  margin: 2em 3em;
}
复制代码
```

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455e258be9f7c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

我们在本文中一直在讨论垂直 margin ，然而，现代CSS倾向于以相对于流的方式而不是物理方式来考虑事情。因此，当我们讨论垂直边距时，我们实际上是在讨论块维度的边距。如果我们在水平写作模式下，这些 `margin` 将是顶部和底部，但在垂直写作模式下，这些 `margin` 将是右侧和左侧。

一旦使用逻辑的、流相关的方向，就更容易讨论块的开始和结束，而不是块的顶部和底部。为了简化这一过程，CSS引入了逻辑属性和值规范。这将流的相关属性映射到物理属性上。

- margin-top = margin-block-start
- margin-right = margin-inline-end
- margin-bottom = margin-block-end
- margin-left = margin-inline-start

还有两个新的快捷键，可以同时设置两个块或者两个内嵌块。

- margin-block
- margin-inline

在下面示例中，使用了这些流相关关键字，然后更改了盒子的编写模式，你可以看到 `margin` 是如何遵循文本方向的:

**html**

```
<div class="wrapper horizontal-tb">
  <div class="box">
    A box with a horizontal-tb writing mode.
  </div>
</div>

<div class="wrapper vertical-rl">
  <div class="box">
    A box with a vertical-rl writing mode.
  </div>
</div>
复制代码
```

**css**

```
* {
  box-sizing: border-box;
}

.wrapper {
  border: 5px dotted black;
  inline-size: 200px;
}

.horizontal-tb {
  writing-mode: horizontal-tb;
  margin-bottom: 1em;
}

.vertical-rl {
  writing-mode: vertical-rl;
}

.box {
  background-color: rgb(55,55,110);
  color: white;
  padding: 20px;
  border-radius: .5em;
  margin-block-start: 30px;
  margin-block-end: 10px;
  margin-inline-start: 2em;
  margin-inline-end: 5%;
}

body {
  font: 1.4em/1.3 "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  margin: 2em 3em;
}
复制代码
```

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455e48cda1a05?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

需要了解更多，可以阅读有关[MDN](https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2FCSS_Logical_Properties)上的逻辑属性和值的更多信息。

## 交流

干货系列文章汇总如下，觉得不错点个Star，欢迎 加群 互相学习。

> [github.com/qq449245884…](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fqq449245884%2Fxiaozhi)

我是小智，公众号「大迁世界」作者，**对前端技术保持学习爱好者。我会经常分享自己所学所看的干货**，在进阶的路上，共勉！

关注公众号，后台回复**福利**，即可看到福利，你懂的。

![img](https://user-gold-cdn.xitu.io/2019/7/31/16c455e607d6c8df?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
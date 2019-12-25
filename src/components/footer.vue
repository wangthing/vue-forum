<template>
    <div id="footer">
        <footer>
            <div class="container">
                <ul class="list">
                    <li class="item">
                        <ul>
                            <li> <h3>网站相关</h3> </li>
                            <li>关于我们</li>
                            <li>服务条款</li>
                            <li>帮助中心</li>
                            <li>编辑器语法</li>
                        </ul>
                    </li>
                    <li class="item">
                        <ul>
                            <li> <h3>网站相关</h3> </li>
                            <li>关于我们</li>
                            <li>服务条款</li>
                            <li>帮助中心</li>
                            <li>编辑器语法</li>
                        </ul>
                    </li>
                    <li class="item">
                        <ul>
                            <li> <h3>网站相关</h3> </li>
                            <li>关于我们</li>
                            <li>服务条款</li>
                            <li>帮助中心</li>
                            <li>编辑器语法</li>
                        </ul>
                    </li>
                    <li class="item">
                        <ul>
                            <li> <h3>网站相关</h3> </li>
                            <li>关于我们</li>
                            <li>服务条款</li>
                            <li>帮助中心</li>
                            <li>编辑器语法</li>
                        </ul>
                    </li>
                    <li class="item">
                        <ul>
                            <li> <h3>内容许可</h3> </li>
                            <p>除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 
                                国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p>
                            
                            <li>本站由 和平新技术研究院 提供更新服务</li>
                        </ul>
                    </li>
                    
                </ul>
                <p>Copyright © 2019 快乐风男问答社区 当前版本 0.0.1</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'footer',
    data () {
        return{

        }
    }

}
</script>

<style scoped>
    .container{
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 25px 0;
        border-top: 1px solid rgb(225, 225, 225)
       
    }
    .list{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        text-align: left;
        margin-bottom: 12px;

    }
    .item{
        flex: 1;
        font-size: 12px;
    }
    .item li:first-child{
        margin-bottom: 18px;
        font-size: 14px;
    }

    .container>p{
        margin: 12px 0;
        font-size: 18px;
        text-align: center;
    }
</style>
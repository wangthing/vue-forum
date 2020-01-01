<template>
    <div>
        <div class="myactive">
            <div class="myactive_box" v-for="item in myactiveList" :key="item.id">  
                <h3> {{"你"+item.didSonmething+""+item.attentionLateTime}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            myactiveList:[
                {
                    username:'本杰明',
                    attentionLateTime:'3小时前',
                    didSonmething:"关注了哈哈哈"
  
                }
            ]
        }
    },
    mounted () {
        
    },
    
}
</script>
<style>

</style>
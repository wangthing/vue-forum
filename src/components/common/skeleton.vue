<template>
    <div class="main">
        <div data-v-b8878796="" data-v-48fc0444="" class="activity-skeleton shadow" style="display: block;">
            <div data-v-b8878796="" class="skeleton-row"></div>
            <div data-v-b8878796="" class="skeleton-row"></div>
            <div data-v-b8878796="" class="skeleton-row"></div>
            <div data-v-b8878796="" class="skeleton-row"></div>
            </div>
    </div>
</template>

<script>
export default {
    name:'skeleton',
    data () {
        return{

        }
    }
}
</script>

<style scoped>
.main{
    width: 100%;
}
    .activity-skeleton[data-v-b8878796] {
    padding: 20px;
    background-color: #fff;
    border-radius: 0 0 .2rem .2rem;
    overflow: hidden;
}

.shadow {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.activity-skeleton .skeleton-row[data-v-b8878796]:first-of-type {
    width: 30%;
}
.activity-skeleton .skeleton-row[data-v-b8878796] {
    margin-bottom: 16px;
    background: linear-gradient(90deg,#fff,#edeff1,#fff);
    background-size: 480px 480px;
    animation: skeleton-stripes-data-v-b8878796 .6s linear infinite;
}
.skeleton-row[data-v-b8878796] {
    margin-bottom: .8rem;
    height: 1.2rem;
    background-color: #f3f3f3;
}
@-moz-keyframes skeleton-stripes-data-v-b8878796{0%{background-position:0 0}to{background-position:480px 0}}@-webkit-keyframes skeleton-stripes-data-v-b8878796{0%{background-position:0 0}to{background-position:480px 0}}@-o-keyframes skeleton-stripes-data-v-b8878796{0%{background-position:0 0}to{background-position:480px 0}}@keyframes skeleton-stripes-data-v-b8878796{0%{background-position:0 0}to{background-position:480px 0}}.iconfont[data-v-52b6b270]{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-xlcollection[data-v-52b6b270]:before{content:"\e600"}.icon-xlchatbox[data-v-52b6b270]:before{content:"\e601"}
</style>
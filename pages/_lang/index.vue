<template>
    <el-container>
        <el-header>
            <div class="container">
                <div>
                    <h1 class="title">
                        {{ $t('home.title') }}
                    </h1>
                    <h2 class="subtitle">
                        {{ $t('home.introduction') }}
                    </h2>
                    <div class="links">
                        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
                            {{ $t('home.doc') }}
                        </a>
                        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
                            {{ $t('home.github') }}
                        </a>
                    </div>
                </div>
            </div>
        </el-header>
        <el-main>
            <el-divider>项目</el-divider>
            <h2 class="project_title">兵器库</h2>
            <el-row class="allcard">
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                    <el-card class="indexcontainer card">
                        <div style="padding: 14px;">
                            <span>鸿雁书</span>
                            <div class="bottom clearfix">
                                <div class="desc">测试</div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
        <el-footer>

        </el-footer>
    </el-container>

</template>

<script>
    export default {}
</script>

<style>
    .el-header {
        height: auto !important;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .project_title{
        color: black;
        text-align: center !important;
        font-size: 64px;
        font-weight: normal;
    }

    .el-main {
        background: white;
        margin: 20px;
        border-radius: 20px;
    }

    .allcard {
        margin: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .indexcontainer {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .card {
        margin: 10px;
        /* width: 100%; */
        background-size: cover !important;
        background: black;
        font-size: 30px;
    }

    .card:hover {
        cursor: pointer;
    }

    .title {
        display: block;
        font-weight: 300;
        font-size: 100px;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
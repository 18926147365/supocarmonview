<template>
  <div id="app">
  		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1">首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1" >新建代码</el-menu-item>
				<el-menu-item index="2-2">管理代码</el-menu-item>
				<el-menu-item index="2-3">执行代码</el-menu-item>
			</el-submenu>
		</el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
		name: 'index',
		data() {
			return {
				activeIndex: '1'
			}
		},
		methods: {
			
			handleSelect(key, keyPath) {
			}
		}
	}
</script>

<style>

</style>

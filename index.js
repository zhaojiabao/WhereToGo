import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index' //供求服务首页
import Pullet from '@/components/Pullet' //青年鸡页面  
import ChooseFarm from '@/components/ChooseFarm' //青年鸡页面    
import AddFarm from '@/components/AddFarm' //添加鸡场页面     
import EditFarm from '@/components/EditFarm' //修改鸡场页面     
import SupplyRelease from '@/components/SupplyRelease' //供货发布页面      
import ReleaseSuccess from '@/components/ReleaseSuccess' //发布成功页面        
import SupplyDetail from '@/components/SupplyDetail' //供应详情页  
import SupplyFarm from '@/components/SupplyFarm' //供应详情页点击鸡场模块跳转鸡场页   
import DemandRelease from '@/components/DemandRelease' //求购发布页面       
import DemandDetail from '@/components/DemandDetail' //求购详情页 
import MySupplyDemandInfo from '@/components/MySupplyDemandInfo' //我的供求信息  
import Egg from '@/components/Egg' //跳转鸡蛋首页 
import EggDemandRelease from '@/components/EggDemandRelease' //跳转鸡蛋求购发布页面   
import EggSupplyDetail from '@/components/EggSupplyDetail' //跳转鸡蛋供货详情页  
import EggDemandDetail from '@/components/EggDemandDetail' //跳转鸡蛋求购详情页  
import EggSupplyRelease from '@/components/EggSupplyRelease' //跳转鸡蛋供货发布页面


Vue.use(Router)

const vueRouter = new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: Index
	}, {
		path: '/pullet',
		name: 'Pullet',
		component: Pullet
	}, {
		path: '/choosefarm',
		name: 'ChooseFarm',
		component: ChooseFarm
	}, {
		path: '/addfarm',
		name: 'AddFarm',
		component: AddFarm
	}, {
		path: '/editfarm/:edit_chicken_id',
		name: 'EditFarm',
		component: EditFarm
	}, {
		path: '/release/:pullet_supply_chicken_id',
		name: 'SupplyRelease',
		component: SupplyRelease
	}, {
		path: '/releasesuccess',
		name: 'ReleaseSuccess',
		component: ReleaseSuccess
	}, {
		path: '/supplydetail/:supply_detail_id',
		name: 'SupplyDetail',
		component: SupplyDetail
	}, {
		path: '/supplyfarm/:supply_farm_id',
		name: 'SupplyFarm',
		component: SupplyFarm
	}, {
		path: '/demandrelease',
		name: 'DemandRelease',
		component: DemandRelease
	}, {
		path: '/demanddetail/:demand_detail_id',
		name: 'DemandDetail',
		component: DemandDetail
	}, {
		path: '/mysupplydemandinfo',
		name: 'MySupplyDemandInfo',
		component: MySupplyDemandInfo
	}, {
		path: '/egg',
		name: 'Egg',
		component: Egg
	}, {
		path: '/eggdemandrelease',
		name: 'EggDemandRelease',
		component: EggDemandRelease
	}, {
		path: '/eggsupplydetail/:egg_supply_detail_id',
		name: 'EggSupplyDetail',
		component: EggSupplyDetail
	}, {
		path: '/eggdemanddetail/:egg_demand_detail_id',
		name: 'EggDemandDetail',
		component: EggDemandDetail
	}, {
		path: '/eggsupplyrelease/:egg_supply_chicken_id',
		name: 'EggSupplyRelease',
		component: EggSupplyRelease
	}]
})

export default vueRouter

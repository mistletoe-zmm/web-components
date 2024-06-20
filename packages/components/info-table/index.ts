import { App } from "vue"
import { Vue3UIOption, installComponent } from "@webcomponents/utils"
import InfoTable from "./info-table"
// 具名导出
export { InfoTable }

// 导出插件
export default {
	install(app: App, options?: Vue3UIOption) {
		installComponent(app, InfoTable, options)
	}
}

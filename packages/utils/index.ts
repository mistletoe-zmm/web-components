import type { App } from "vue"

export interface Vue3UIOption {
	componentPrefix?: string
}
// 注册插件
export const installComponent = (app: App, component: any, options?: Vue3UIOption) => {
	app.component(component.name, component)
}

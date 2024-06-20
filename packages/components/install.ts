import { App } from "vue"
import { Vue3UIOption, installComponent } from "@webcomponents/utils"
import { components } from "./components"

const Vue3UI = {
	install(app: App, options?: Vue3UIOption) {
		components.forEach(component => {
			installComponent(app, component, options)
		})
	}
}

export default Vue3UI

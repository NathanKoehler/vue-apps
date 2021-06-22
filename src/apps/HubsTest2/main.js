import WebAppProto from "../WebApp";
import App from './App.vue'

class WebApp extends WebAppProto {
    constructor () {
        super(App, 500, 500)
    }
}

let app = new WebApp()
app.mount()

app.$el.style.border = "solid 0.1em"
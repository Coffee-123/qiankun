import "./public-path.js";
import { createApp } from "vue";
import App from "./App.vue";

let instance: any = null;
function render(props = {}) {
  //@ts-ignore
  const { container } = props;

  instance = createApp(App);
  instance.mount(
    container ? container.querySelector("#app") : document.querySelector("#app")
  );
}
// 独立运行时
//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
//@ts-ignore
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  //   instance.$destroy();
  //   instance.$el.innerHTML = "";
  //   instance = null;
  //   //@ts-ignore
  //   router = null;
}
// createApp(App).mount("#app");

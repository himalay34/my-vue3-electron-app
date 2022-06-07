import { ipcRenderer, contextBridge } from "electron";
import { domReady } from "./utils";
import { useLoading } from "./loading";

const { appendLoading, removeLoading } = useLoading();

contextBridge.exposeInMainWorld("removeLoading", removeLoading);
contextBridge.exposeInMainWorld("l", console.log);
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);

domReady().then(appendLoading);

console.log("\n/*************************************/\n");

for (const type of ["chrome", "node", "electron"]) {
  console.log(`👋 ${type}-version`, process.versions[type]);
}
console.log("\n/*************************************/\n");

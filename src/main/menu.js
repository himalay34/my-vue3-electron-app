import { Menu } from "electron";

const buildMenu = (app, win) => {
  const menutemplate = [
    {
      label: "Prescription",
      submenu: [
        {
          label: "New Prescription",
          accelerator: "CmdOrCtrl+N",
          click() {
            console.log("new Prescription");
            win.webContents.send("open:page", "newPrescription");
          },
        },
        {
          label: "Old Patient",
          accelerator: "CmdOrCtrl+N",
          click() {
            console.log("old Prescription");
            win.webContents.send("open:page", "oldPrescription");
          },
        },
      ],
    },
    {
      label: "Search",
      click() {
        console.log("Search");
        win.webContents.send("open:page", "searchPateint");
      },
    },
    {
      label: "Settings",
      submenu: [
        {
          label: "Prescription",
          click() {
            console.log("Prescription settings");
            win.webContents.send("open:page", "tutorial");
          },
        },
        {
          label: "Page",
          click() {
            console.log("Page settings");
            win.webContents.send("open:page", "tutorial");
          },
        },
        {
          label: "Print",
          click() {
            console.log("Print settings");
            win.webContents.send("open:page", "tutorial");
          },
        },
        {
          label: "Templates",
          click() {
            console.log("Templates settings");
            win.webContents.send("open:page", "tutorial");
          },
        },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Tutorial",
          click() {
            app.showEmojiPanel();
            console.log("Tutorial");
            win.webContents.send("open:page", "tutorial");
          },
        },
        {
          label: "Reload",
          click() {
            win.webContents.reload();
          },
        },
        {
          label: "Open Developer Tools",
          click() {
            win.webContents.openDevTools();
          },
        },
        {
          label: "Close Developer Tools",
          click() {
            win.webContents.closeDevTools();
          },
        },
        {
          label: "Always On Top",
          click() {
            const bol = !win.isAlwaysOnTop();
            win.setAlwaysOnTop(bol);
          },
        },
        {
          label: "Remove loading",
          click() {
            win.webContents.send("removeLoading", "voila");
          },
        },
      ],
    },
  ];
  var menu = Menu.buildFromTemplate(menutemplate);
  Menu.setApplicationMenu(menu);
};

export default {
  buildMenu,
};

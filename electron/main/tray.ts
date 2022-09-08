import { app, Menu, Tray } from 'electron'
import { join } from 'path'

const setTray=(mainWindow)=>{
    let iconPath = join(__dirname, "../../../public/node.png");
    let appTray = new Tray(iconPath);

    appTray.setToolTip("XXXX");

    //系统托盘右键菜单
    var trayMenuTemplate = [
    {
        label: "显示主窗口",        
        click: function() {
            mainWindow.show();         
        } 
    },
    {
        label: "检查更新",
        click: function() {
        } 
    },
    {  
        label: "web代理",
        click: function() {} 
    },
    {
        label: "查看日志",
        click: function() {
        } 
    },
    {
        label: "增强加密",
        click: function() {
            }       
    },
    {
        label: "退出客户端",
        click: function() {
            app.quit();
        }
    },
    {
        label: "查看版本信息",
        click: function() {
        } 
    }
    ];
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
    appTray.setContextMenu(contextMenu);

    appTray.on("click", function() {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
      });
}

export {
    setTray
}
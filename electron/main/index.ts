import { app, BrowserWindow, shell, ipcMain } from 'electron'
import { release } from 'os'
import { join } from 'path'

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

export const ROOT_PATH = {
  // /dist
  dist: join(__dirname, '../..'),
  // /dist or /public
  public: join(__dirname, app.isPackaged ? '../..' : '../../../public'),
}

let win: BrowserWindow | null = null
// Here, you can also use other preload
const preload = join(__dirname, '../preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL as string
const indexHtml = join(ROOT_PATH.dist, 'index.html')

async function createWindow() {
  win = new BrowserWindow({
    title: '',
    icon: '',
    // frame: false,
    // titleBarStyle: 'hidden',
    // titleBarOverlay: {
    //   height: 29,
    //   color: '#fff',
    //   symbolColor:'#000'
    // },
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  if (app.isPackaged) {
    win.loadFile(indexHtml)
  } else {
    win.loadURL(url)
  }
  var template = [
    {
        label: '金丹',
        submenu: [
            {
                label: '筑基',
                click: ()=>{
                    var win = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: {nodeIntegration: true}
                    })
                    win.loadFile('demo2.html')
                    win.on('closed',()=>{
                        win = null
                    })
                }
            },
            {
                label: '练气',
            },
        ]
    },
    {
        label: '渡劫',
        submenu: [
            {
                label: '化神'
            },
            {
                label: '元婴'
            },
        ]
    }
]

//构建菜单
var m = Menu.buildFromTemplate(template)
//应用菜单
Menu.setApplicationMenu(m);
win.setMenuBarVisibility(true);
win.autoHideMenuBar(false)
  setTimeout(() => {
    console.log(111)
  
  }, 1000);
 
  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// new window example arg: new windows url
ipcMain.handle('open-win', (event, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
    },
  })

  if (app.isPackaged) {
    childWindow.loadFile(indexHtml, { hash: arg })
  } else {
    childWindow.loadURL(`${url}/#${arg}`)
    // childWindow.webContents.openDevTools({ mode: "undocked", activate: true })
  }
})

ipcMain.on('min', e=> win.minimize());
ipcMain.on('max', e=> {
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
});
ipcMain.on('close', e=> win.close());

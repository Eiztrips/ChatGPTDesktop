const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let mainWindow;

function createMainWindow(url) {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    resizable: true,
    maximizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL(url);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const startWindow = new BrowserWindow({
    width: width,
    height: height,
    frame: true,
    maximizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  startWindow.loadFile('input.html');

  ipcMain.on('open-main-window', (event, url) => {
    startWindow.close();
    createMainWindow(url);
  });

  ipcMain.handle('get-input-url', () => {
    return ["https://chat.openai.com", "https://github.com", "https://music.yandex.ru"];
  });

  ipcMain.handle('save-url', (event, url) => {
    console.log("Saving URL:", url);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

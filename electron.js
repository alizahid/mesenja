const path = require('path')
const fs = require('fs-extra')

const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

class Electron {
  window = null
  preferences = {
    bounds: {
      height: 600,
      width: 800,
      x: 100,
      y: 100
    }
  }

  constructor() {
    const exists = fs.pathExistsSync(
      `${app.getPath('userData')}/preferences.json`
    )

    if (!exists) {
      this.setupPreferences()
    }

    this.getPreferences()

    app.on('ready', () => {
      this.createWindow()
    })

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
      if (this.window === null) {
        this.createWindow()
      }
    })
  }

  createWindow() {
    const {
      bounds: { height, width, x, y }
    } = this.preferences

    const window = new BrowserWindow({
      height,
      width,
      x,
      y,
      webPreferences: {
        nodeIntegration: true,
        textAreasAreResizable: false
      }
    })

    if (isDev) {
      window.loadURL('http://localhost:3000')
    } else {
      window.loadFile(`file://${path.join(__dirname, '../build/index.html')}`)
    }

    window.on('closed', () => {
      this.window = null
    })

    window.on('resize', () => {
      this.updatePreferences({
        bounds: window.getBounds()
      })
    })

    window.on('moved', () => {
      this.updatePreferences({
        bounds: window.getBounds()
      })
    })

    this.window = window
  }

  setupPreferences() {
    fs.writeJSONSync(`${app.getPath('userData')}/preferences.json`, {})
  }

  getPreferences() {
    this.preferences = fs.readJSONSync(
      `${app.getPath('userData')}/preferences.json`
    )
  }

  updatePreferences(data) {
    fs.writeJSONSync(`${app.getPath('userData')}/preferences.json`, {
      ...this.preferences,
      ...data
    })

    this.getPreferences()
  }
}

module.exports = new Electron()

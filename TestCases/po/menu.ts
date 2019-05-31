import { by, element } from 'protractor'
import { Util } from '../helper/module'

export class HelpMenu {
   getHelpInfo() {
      // equals 'About VMware Horizon Client'
      let helpBtn = Util.wait(element(by.className('dialog-title')))
      return helpBtn.getText()
   }

   getHelpInvisible() {
      let helpBtn = Util.waitInvisible(element(by.className('dialog-title')))
      return helpBtn
   }

   clickHelp() {
      Util.clickById('aboutDialogHelpUrl')
   }

   closeHelp() {
      let closeBtn = Util.wait(element(by.id('aboutDialogCloseBtn')))
      closeBtn.click()
   }
}

export class SettingMenu {
   getSettingInfo() {
      // equals 'Settings'
      let settingBtn = Util.wait(element(by.className('dialog-title')))
      return settingBtn.getText()
   }

   getSettingInvisible() {
      let settingBtn = Util.waitInvisible(element(by.className('dialog-title')))
      return settingBtn
   }

   getResetButton() {
      let resetBtn = Util.wait(element(by.className('modal-button-reset')))
      return resetBtn
   }

   showSettings() {
      let settingBtn = Util.wait(element(by.id('settingsBtn')))
      settingBtn.click()
   }

   closeSettings() {
      let closeSetBtn = Util.wait(element(by.id('closeSettingsBtn')))
      closeSetBtn.click()
   }
}

export class LogoutMenu {
   confirmLogout() {
      let confirmBtn = Util.wait(element(by.id('okDialogBtn')))
      confirmBtn.click()
   }

   cancelLogout() {
      let cancelBtn = Util.wait(element(by.id('cancelDialogBtn')))
      cancelBtn.click()
   }
}

import { element, by, ElementFinder } from 'protractor'
import { Util } from '../helper/module'
interface UserInfo {
   subject?: string
   username: string
   password: string
}
export class PreLogonPage {
   VASCOuser: UserInfo = {
      username: 'otpuser',
      password: 'vmwaremail',
   }

   loginUser: UserInfo = {
      username: 'viewzhaom5',
      password: 'ca$hc0w',
   }

   correctPin: string = '74066281'
   wrongPin: string = '12345678'
   disclaimerText: string =
      'The alpaca (Vicugna pacos) is a species of South American camelid. ' +
      'It is similar to, and often confused with, the llama. However, alpacas are often noticeably ' +
      'smaller than llamas. The two animals are closely related and can successfully cross-breed. ' +
      "Alpacas and llamas are also closely related to the vicuña, which is believed to be the alpaca's wild ancestor, " +
      'and to the guanaco. There are two breeds of alpaca: the Suri alpaca and the Huacaya alpaca.'

   getAcceptDisclaimerBtn(): ElementFinder {
      return Util.wait(element(by.id('acceptDisclaimerBtn')))
   }

   getCancelDisclaimerBtn(): ElementFinder {
      return Util.wait(element(by.id('cancelDisclaimerBtn')))
   }

   getDisclaimerText() {
      let e = Util.wait(element(by.className('ui-disclaimer-text')))
      return e.getText()
   }

   login(userinfo: UserInfo | null) {
      userinfo = userinfo || this.VASCOuser
      // wait for the elements being visible
      let usernameElem = Util.wait(element(by.id('securUsername')))
      let passwordElem = Util.wait(element(by.id('passcode')))
      let loginFormElem = Util.wait(element(by.id('securLoginButton')))

      usernameElem.sendKeys(userinfo.username)
      passwordElem.sendKeys(userinfo.password)

      loginFormElem.click()
   }

   sendPin(pinword: string | null) {
      pinword = pinword || this.correctPin
      let pinElem = Util.wait(element(by.id('passcode')))
      pinElem.sendKeys(pinword)
      let continueElem = Util.wait(element(by.id('loginButton')))
      continueElem.click()
   }
}

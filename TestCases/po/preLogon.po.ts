import { element, by, ElementFinder } from 'protractor'
import { Util } from '../util'

export class PreLogonPage {

   getAcceptDisclaimerBtn() : ElementFinder {
      return Util.wait(element(by.id('acceptDisclaimerBtn')))
   }

   getCancelDisclaimerBtn() : ElementFinder {
      return Util.wait(element(by.id('cancelDisclaimerBtn')))
   }

   getDisclaimerText() {
      let e = Util.wait(element(by.className('ui-disclaimer-text')))
      return e.getText()
   }
}
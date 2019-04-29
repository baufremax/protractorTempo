
function createCookie(category: string, caseNum: string) {
   category = category || '0000'
   caseNum = caseNum || '0001'
   let cookie = {
      name: 'TestCase',
      value: category + '-' + caseNum
   }
   return cookie
}

export class CookieSandbox { 

   getDomainListCookie(caseNum?: string) {
      caseNum = caseNum || '0001'
      return createCookie('1001', caseNum)
   }

   getLoginFailCookie(caseNum?: string) {
      caseNum = caseNum || '0001'
      return createCookie('1002', caseNum)
   }

   getFirstLogonUserCookie(caseNum?: string) {
      caseNum = caseNum || '1003-0005'
   }
}
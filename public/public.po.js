"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class PublicPage {
    constructor() {
        this.url = protractor_1.browser.baseUrl + '/';
    }
    navigateTo() {
        protractor_1.browser.waitForAngularEnabled(false);
        return protractor_1.browser.get(this.url);
    }
    getPageIdText() {
        return protractor_1.browser.getTitle();
    }
    getCurrentUrl() {
        return protractor_1.browser.getCurrentUrl();
    }
    installClient() {
        return protractor_1.element(protractor_1.by.id('nativeClient')).click();
    }
    accessClient() {
        return protractor_1.element(protractor_1.by.id('webClient')).click();
    }
}
exports.PublicPage = PublicPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVibGljLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBRWxELE1BQWEsVUFBVTtJQUF2QjtRQUVJLFFBQUcsR0FBVyxvQkFBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7SUFzQnZDLENBQUM7SUFwQkcsVUFBVTtRQUNOLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsT0FBTyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDbEMsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2pELENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM5QyxDQUFDO0NBQ0o7QUF4QkQsZ0NBd0JDIn0=
function findElementByLabel(labelText, opt_parentElement) {
    const using = opt_parentElement || document;
    const xpath = `//input[@id=string(//label[. = '${labelText}']/@for)]`;
    return document.evaluate(xpath, using, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
};

by.addLocator('label', findElementByLabel);
import { Page } from "@playwright/test";

export class HelperBase {

    constructor(page) {
        this.page = page
    }

    async waitForNumberOfSeconds(timeInSeconds) {
        await this.page.waitForTimeout(timeInSeconds)
    }
}
// ----------------------------------------------------------------------------
// © 2021 - Franco Folini
// ----------------------------------------------------------------------------
import { table } from 'console'
import {Card} from '../card'
import {sectionActions} from '../main'
import {getSiteMapCards, getRobotsTxtFileBody, getRobotsTxtCard, getSiteMapUrls} from "./robots-functions"

export const injector = () => undefined

export const eventManager = () => undefined

export const reporter = async (tabUrl: string, _: any): Promise<string> => {
    if (tabUrl === '') {
        return ''
    }

    var robotsUrl = new URL(tabUrl).origin + '/robots.txt'
    var sitemapUrl = new URL(tabUrl).origin + '/sitemap.xml'

    try {
        const robotsTxtBody: string = await getRobotsTxtFileBody(robotsUrl)
        const sitemapUrls: string[] = getSiteMapUrls(robotsTxtBody, sitemapUrl)
        return await getRobotsTxtCard(robotsUrl, robotsTxtBody) + await getSiteMapCards(sitemapUrls)
    } catch(err) {
        return new Card().error((err as Error).message)
    }
}

export const actions: sectionActions = {
    injector: injector,
    reporter: reporter,
    eventManager: eventManager,
}

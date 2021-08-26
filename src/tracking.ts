// ----------------------------------------------------------------------------
// © 2021 - Franco Folini
// ----------------------------------------------------------------------------
import {Card} from "./Card"

interface iTrackCat {
  patterns: string[]
  url: string
  name: string
  category: string
  iconClass: string
  description: string
  matches: string[]
}

interface iScript {
  script: string
  done: boolean
}

export const injectableScript = (): iTrackCat[] => {
  // The array of Categories must be defined inside this function,
  // otherwise it will be invisible to injected cose
  const trackCats = [
    {
      patterns: ["tagmanager.com/", "googletagservices.com/"],
      name: "GTM - Google Tag Manager",
      category: "Tracking",
      iconClass: "icon-tag-manager",
      description:
        "Google Tag Manager is a tag management system (TMS) that allows you to quickly and easily update measurement codes and related code fragments collectively known as tags on your website or mobile app.",
      url: "https://tagmanager.google.com/",
    },
    {
      patterns: ["ads-twitter", ".twitter.com/", "analytics.twitter"],
      name: "Twitter",
      category: "Ads and Analytics",
      iconClass: "icon-twitter",
      description:
        "Twitter Ads and Analytics shows you how your audience is responding to your content, what's working, and what's not. Use this data to optimize your future Twitter campaigns and get better results. ",
      url: "https://business.twitter.com/en/advertising/analytics.html",
    },
    {
      patterns: [
        ".doubleclick.net/",
        ".googleadservices.com/",
        "adservice.google",
        "/adsense/"
      ],
      name: "Google Ads",
      category: "Search, Display, and Remarketing Ads",
      iconClass: "icon-google-ads",
      description:
        "According to Google, Google Ad Services is the umbrella term for all the concepts, networks, and features which comprise a Google Ads account. To put it simply, anything which you can achieve with your Google Ads account is part of Google Ad Services.",
      url: "https://ads.google.com/",
    },
    {
      patterns: ["connect.facebook.net/"],
      name: "Facebook Pixel",
      category: "Ads Tracking",
      iconClass: "icon-facebook-pixel",
      description:
        "The Facebook Pixel is an analytics tool that allows you to measure the effectiveness of your advertising by understanding the actions people take on your website. You can use the pixel to make sure your ads are shown to the right people.",
      url: "https://www.facebook.com/business/help/742478679120153",
    },
    {
      patterns: ["//snap.licdn.com/", "linkedin.com/js/analytics"],
      name: "LinkedIn",
      category: "Ads Tracking",
      iconClass: "icon-linkedin",
      description:
        "LinkedIn ads refer to display ads displayed on, and targeted to users of, the LinkedIn social media platform. LinkedIn ads allow advertisers to target people based on a number of professional factors, including: demographics. employment history.",
      url: "https://business.linkedin.com/marketing-solutions",
    },
    {
      patterns: ["//bat.bing.com/p/action", "//bat.bing.com/bat.js"],
      name: "Bing",
      category: " Ads Tracking",
      iconClass: "icon-bing-ads",
      description:
        "Microsoft Advertising is a service that provides pay per click advertising on the Bing, Yahoo!, and DuckDuckGo search engines. As of June 2015, Bing Ads has 33% market share in the United States.",
      url: "https://ads.microsoft.com/",
    },
    {
      patterns: ["//s.pinimg.com/"],
      name: "Pinterest",
      category: "Ads Tracking",
      iconClass: "icon-pinterest",
      description:
        "Pinterest is an American image sharing and social media service designed to enable saving and discovery of information on the internet using images and, on a smaller scale, animated and videos, in the form of pinboards.",
      url: "https://ads.pinterest.com/",
    },
    {
      patterns: [".google-analytics.com/"],
      name: "Google Analytics",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-google-analytics-v3",
      description:
        "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand. Google launched the service in November 2005 after acquiring Urchin.",
      url: "https://analytics.google.com/",
    },
    {
      patterns: [".pdst.fm/"],
      name: "Podsights Pixel",
      category: "Podcast Ads Tracking",
      iconClass: "icon-podsights",
      description:
        "Podcast advertising tracking. The average podcast has three slots for ads — a pre-roll, mid-roll and post-roll. A pre-roll ad greets listeners during the first 15 to 30 seconds of an episode. Mid-roll ads last 60 to 90 seconds and play halfway through an episode. A 20- to 30-second post-roll ad plays just before the closing credits.",
      url: "https://podsights.com/",
    },
    {
      patterns: ["siteimproveanalytics.com/"],
      name: "Site Improve",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-site-improve",
      description:
        "SiteImprove Analytics gives you powerful insights into visitor behavior and website performance with intuitive dashboard and easy-to-use reporting, so you can make data-driven decisions to consistently deliver business results across teams.",
      url: "https://siteimprove.com/",
    },
    {
      patterns: [".sophus3.com/"],
      name: "Sophus3",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-sophus3",
      description:
        "Sophus3 is the cross-platform measurement company that analyses consumer behavior and engages with digital consumers for the world's largest automotive brands.",
      url: "https://www.sophus3.com/",
    },
    {
      patterns: [".getdrip.com/"],
      name: "Drip",
      category: "Marketing Automation",
      iconClass: "icon-drip",
      description:
        "Drip is a marketing automation platform built for Ecommerce - utilizing email, SMS and tight 3rd-party integrations to help businesses drive revenue.",
      url: "https://www.drip.com/",
    },
    {
      patterns: [".crazyegg.com/"],
      name: "Crazy Egg",
      category: "Heatmaps",
      iconClass: "icon-crazy-egg",
      description:
        "Crazy Egg lets you visualize your website's visitors through a heatmap. A heatmap is an easy way to understand what users want, care about and do on your site by visually representing their clicks - which are the strongest indicators of visitor motivation and desire.",
      url: "https://crazyegg.com/",
    },
    {
      patterns: [".lfeeder.com/"],
      name: "LeadFeeder",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-leadfeeder",
      description:
        "Leadfeeder shows you the companies visiting your website, how they found you and what they are interested in.",
      url: "https://www.leadfeeder.com/",
    },
    {
      patterns: [".outbrain.com/"],
      name: "OutBrain",
      category: "Ads Tracking",
      iconClass: "icon-outbrain",
      description:
        "Outbrain is a web advertising platform that displays boxes of links to pages within websites. It displays links to the sites' pages in addition to sponsored content, generating revenue from the latter. Outbrain has been praised for providing a vital source of revenue to publishers.",
      url: "https://www.outbrain.com/",
    },
    {
      patterns: [".qualtrics.com/"],
      name: "Qualtric",
      category: "User Experience Management",
      iconClass: "icon-qualtric",
      description:
        "Qualtrics empowers companies to capture and act on customer, product, brand & employee experience insights in one place.",
      url: "https://www.qualtrics.com/",
    },
    {
      patterns: [".avmws.com/"],
      name: "AvantLink",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-avantlink",
      description:
        "AvantLink is an online affiliate referral platform that allows its clients to connect and expand their business partnerships.",
      url: "https://avantlink.com/",
    },
    {
      patterns: [".channeladvisor.com/"],
      name: "Channel Advisor",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-channel-advisor",
      description:
        "ChannelAdvisor is a multichannel commerce platform used to connect and optimize the world's commerce. ChannelAdvisor helps brands and retailers worldwide improve their online performance by expanding sales channels, connecting with consumers across the entire buying cycle, optimizing their operations for peak performance, and providing actionable analytics to improve competitiveness.",
      url: "https://www.channeladvisor.com/",
    },
    {
      patterns: ["amazon-adsystem.com/"],
      name: "Amazon Ads",
      category: "Ads Tracking",
      iconClass: "icon-amazon-ads",
      description:
        "Amazon Advertising (formerly AMS or Amazon Marketing Services) is a service that works in a similar way to pay-per-click ads on Google: sellers only pay when shoppers click on ads (regardless of whether or not the item sells).",
      url: "https://advertising.amazon.com/",
    },
    {
      patterns: ["criteo.net/", ".criteo.com/"],
      name: "Criteo",
      category: "Ads Tracking",
      iconClass: "icon-criteo",
      description:
        "Criteo is an advertising company that provides online display advertisements. The company was founded and is headquartered in Paris, France.",
      url: "https://www.criteo.com/",
    },
    {
      patterns: [".hotjar.com/"],
      name: "Hotjar",
      category: "Website Testing and Tuning",
      iconClass: "icon-hotjar",
      description:
        "Hotjar is a powerful tool that reveals the online behavior and voice of your users. By combining both Analysis and Feedback tools, Hotjar gives you the 'big picture' of how to improve your site's user experience and performance/conversion rates.",
      url: "https://www.hotjar.com/",
    },
    {
      patterns: [
        "hsadspixel.net/",
        "hscollectedforms.net/",
        "hs-banner.com/",
        "hs-analytics.net/",
        ".hubspot.com/",
        ".hubspot.net/"
      ],
      name: "HubSpot Analytics",
      category: "Social Media &amp; Websites Tracking",
      iconClass: "icon-hubspot",
      description:
        "HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service. Hubspot was founded in 2006.",
      url: "https://www.hubspot.com/",
    },
    {
      patterns: ["segment.com/analytics", ".segment.com/"],
      name: "Segment",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-segment-analytics",
      description:
        "Segment is a Customer Data Platform (CDP), which means that we provide a service that simplifies collecting and using data from the users of your digital properties (websites, apps, etc). With Segment, you can collect, transform, send, and archive your first-party customer data. ",
      url: "https://segment.com/",
    },
    {
      patterns: ["quantcount.com/", "quantserve.com/"],
      name: "QuantCast",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-quantcast",
      description:
        "Quantcast is an American technology company, founded in 2006, that specializes in AI-driven real-time advertising, audience insights and measurement. It has offices in the United States, Canada, Australia, Singapore, United Kingdom, Ireland, France, Germany, Italy, and Sweden.",
      url: "https://www.quantcast.com/",
    },
    {
      patterns: ["neodatagroup.com/"],
      name: "NeoData Group",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-neodata",
      description:
        "NeoData Group masters innovative digital technologies to create solutions to support Brands, Publishers, Broadcasters and Media Agencies engaging their Audience in a Mutual Profitable Relationship.",
      url: "https://www.neodatagroup.com/en/",
    },
    {
      patterns: ["driftt.com/"],
      name: "Drift",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-drift",
      description:
        "Drift is the Conversational Marketing platform that combines chat, email, video, and automation to remove the friction from business buying. With Drift, you can start conversations with future customers now, on their terms -- not days later.",
      url: "https://www.drift.com/",
    },
    {
      patterns: ["krxd.net/"],
      name: "Krux (SalesForce)",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-krux-pixel",
      description:
        "The krxd.net domain is used in the URLs for Krux`s pixel tracking. Krux is a neutral, pure-play Data Management Platform with no conflicts of interest. Krux was acquired in 2016 by SalesForce.",
      url: "https://www.kruxanalytics.com/",
    },
    {
      patterns: [".pardot.com/"],
      name: "Pardot (SalesForce)",
      category: "Marketing Automation",
      iconClass: "icon-pardot",
      description:
        "Pardot is a marketing automation solution from SalesForce that helps companies create meaningful connections, generate more pipeline, and empower sales to close more deals.",
      url: "https://www.pardot.com/",
    },
    {
      patterns: [".scorecardresearch.com/"],
      name: "ScorecardResearch",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-scorecard",
      description:
        "ScorecardResearch, a service of Full Circle Studies, Inc., is part of the Comscore, Inc. market research community, a leading global market research effort that studies and reports on Internet trends and behavior. ScorecardResearch conducts research by collecting Internet web browsing data and then uses that data to help show how people use the Internet, what they like about it, and what they don`t.",
      url: "https://www.scorecardresearch.com/",
    },
    {
      patterns: ["ntv.io/"],
      name: "Nativo",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-nativo",
      description:
        "Nativo is an advertising technology platform for brand advertisers and publishers to scale, automate, and measure native ads. For brands, Nativo is the ultimate content advertising platform that combines automation and insights with high-quality reach to scale and optimize engagement with brand content.",
      url: "https://www.nativo.com/",
    },
    {
      patterns: [".adform.net/"],
      name: "ADForm",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-adform",
      description:
        "Adform is a global digital media advertising technology company. Its operations are headquartered in Europe, and its clients vary in size and industry. The company was the first pan-European DSP.",
      url: "https://site.adform.com/",
    },
    {
      patterns: [".taboola.com/", ".perfectmarket.com/"],
      name: "Taboola / Perfect Market",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-taboola",
      description:
        "Taboola is a public advertising company headquartered in New York City. It is mostly known for their chumbox online thumbnail grid ads. The company was founded in 2007.",
      url: "https://www.taboola.com/",
    },
    {
      patterns: [".imrworldwide.com/"],
      name: "Nielsen",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-nielsen",
      description:
        "Nielsen Holdings Inc. is an American, information, data and market measurement firm. Nielsen operates in over 100 countries and employs approximately 44,000 people worldwide.",
      url: "http://www.nielsen.com/",
    },
    {
      patterns: [".wt-safetag.com/"],
      name: "Webtrekk",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-webtrekk",
      description:
        "Webtrekk is a German company specialized in the development and sale of software products for the real-time web analytics with raw data.",
      url: "https://www.webtrekk.com/",
    },
    {
      patterns: [".iubenda.com/"],
      name: "Iubenda",
      category: "Cookies and Privacy Management",
      iconClass: "icon-iubenda",
      description:
        "Iubenda is an online tool to generate a privacy policy for websites, mobile apps and facebook apps.",
      url: "https://www.iubenda.com/",
    },
    {
      patterns: ["cdn.cookielaw.org/"],
      name: "Cookielaw",
      category: "Cookies and Privacy Management",
      iconClass: "icon-cookielaw",
      description:
        "Cookielaw is an online tool to manage cookies and privacy in accordance with local laws and regulations.",
      url: "https://www.cookielaw.org/",
    },
    {
      patterns: [".cxense.com/"],
      name: "Cxense (Piano)",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-cxense",
      description:
        "Cxense ASA was a technology company, formed in Oslo, Norway in 2010. In 2019 it was acquired by Piano Media.",
      url: "https://www.cxense.com/",
    },
    {
      patterns: [".wts2.one/"],
      name: "Web-Stat",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-web-stat",
      description:
        "WTS2 observes your visitors in real time as they interact with your site and allows you to optimize your landing pages and website navigation.",
      url: "https://www.wts2.one/",
    },
    {
      patterns: ["//replayapp.io/"],
      name: "Better-Replay",
      category: "Shopify App",
      iconClass: "icon-replay-app",
      description:
        "Watch full screen recording with playback. See when your users get stuck or confused. Fix areas of your site that lead to drops in conversion.",
      url: "https://www.better-replay.com/",
    },
    {
      patterns: ["cartkitcdn.com"],
      name: "CartKit",
      category: "Shopify and Wix App",
      iconClass: "icon-cartkit",
      description:
        "Empowering digital businesses so that they can focus on what they do best: creating and selling their unique products.",
      url: "https://cartkit.com/",
    },
    {
      patterns: ["herokuapp.com/"],
      name: "Heroku",
      category: "Apps Management",
      iconClass: "icon-heroku",
      description:
        "Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps.",
      url: "https://www.heroku.com/",
    },
    {
      patterns: ["turner.com/analytics"],
      name: "Warner Media",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-warnermedia-analytics",
      description: "Internal Warner Media tracking system",
      url: "",
    },
    {
      patterns: ["boomtrain.com/"],
      name: "Zeta Global",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-zeta-global",
      description: "Zeta Global tracking system",
      url: "",
    },
    {
      patterns: ["optimizely.com/"],
      name: "Optimizely",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-zeta-global",
      description:
        "Optimizely provides digital experience platform software as a service. Optimizely provides A/B testing and multivariate testing tools, website personalization, and feature toggle capabilities, as well as web content management and digital commerce.",
      url: "https://www.optimizely.com/",
    },
    {
      patterns: [".adnxs.com/", ".xandr.com/", ".appnexus.com/"],
      name: "Adnxs (AppNexus / Xandr)",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-xandr",
      description:
        "Adnxs.com is run by AppNexus (now called Xandr), a company that provides technology, data and analytics to help companies buy and sell online display advertising. The technology it uses can plug into other advertising serving platforms, such as Google's Doubleclick, and 'data aggregators', such as Quantcast, which provide behavioral targeting. In essence, this makes AppNexus an an 'advertising exchange for advertising exchanges'.",
      url: "https://www.xandr.com/",
    },
    {
      patterns: [".adsafeprotected.com/", ".integralads.com/"],
      name: "AdSafeProtected (Integral Ad Science)",
      category: "Ads Tracking",
      iconClass: "icon-ias",
      description:
        "Adsafeprotected.com is a legitimate domain owned by the Integral Ad Science company. This domain is used by various companies that deliver advertisements on legitimate websites, such as YouTube, Yahoo, Google, and so on. Some users encounter certain error messages relating to this domain, however, these are not indicators of serious problems.",
      url: "https://integralads.com/",
    },
    {
      patterns: [".bounceexchange.com", ".wunderkind.co/"],
      name: "BounceExchange (Wunderkind)",
      category: "Ads Tracking",
      iconClass: "icon-wunderkind",
      description:
        "Bounce Exchange (Wunderkind) is a software for behavioral marketing technologies, created to de-anonymise site visitors, analyse their digital behavior and create relevant digital experiences regardless of channel or device.",
      url: "https://www.wunderkind.co/",
    },
    {
      patterns: [".heapanalytics.com/"],
      name: "Heap Analytics",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-heap",
      description:
        "Heap provides a unique approach to user analytics by capturing all user interactions and analyze these interactions without the need to ship code or wait for data.",
      url: "https://heap.io/",
    },
    {
      patterns: [".marketo.net/", ".marketo.com/"],
      name: "Marketo",
      category: "Marketing Automation",
      iconClass: "icon-marketo",
      description:
        "Marketo develops and sells marketing automation software for account-based marketing and other marketing services and products including SEO and content creation.",
      url: "https://marketo.com/",
    },
    {
      patterns: [".visualwebsiteoptimizer.com/", ".vwo.com/"],
      name: "VWO - Visual Website Optimizer",
      category: "A/B Testing",
      iconClass: "icon-vwo",
      description:
        "Visual Website Optimizer is a market leading testing and optimization tool that allows marketers, product managers and analysts to create A/B tests and geo-behavioral targeting campaigns without having any sort of technical or HTML knowledge.",
      url: "https://vwo.com/",
    },
    {
      patterns: [".cookiebot.com/"],
      name: "Cookiebot",
      category: "Cookies and Privacy Management",
      iconClass: "icon-cookiebot",
      description:
        "Cookiebot is the world's leading consent management platform built around a powerful scanning technology that automatically detects and controls all cookies and trackers on your website.",
      url: "https://www.cookiebot.com/",
    },
    {
      patterns: [".swiftypecdn.com/", ".swiftype.com/"],
      name: "Swiftype",
      category: "Local Search Engine",
      iconClass: "icon-swiftype",
      description:
        "Swiftype Site Search is a powerful, customizable, cloud-based site search platform. Create and manage a tailored search experience for your public facing website with best-in-class relevance, intuitive customization, and rich analytics.",
      url: "https://swiftype.com/",
    },
    {
      patterns: [".adroll.com/"],
      name: "AdRoll",
      category: "Ads Tracking",
      iconClass: "icon-adroll",
      description:
        "AdRoll is an ecommerce and advertising marketing platform that gives growing D2C brands the power to connect with customers wherever they are.",
      url: "https://adroll.com/",
    },
    {
      patterns: [".quora.com/", ".quoracdn.net/"],
      name: "Quora",
      category: "Ads Tracking",
      iconClass: "icon-quora",
      description:
        "Quora is a social question-and-answer website where users can collaborate by editing questions and commenting on answers that have been submitted by other users.",
      url: "https://quora.com/",
    },
    {
      patterns: [".trustpilot.com/"],
      name: "Trustpilot",
      category: "Product Reviews",
      iconClass: "icon-trustpilot",
      description:
        "Trustpilot.com is a Danish consumer review website founded in Denmark in 2007 which hosts reviews of businesses worldwide. Nearly 1 million new reviews are posted each month. The site offers freemium services to businesses.",
      url: "https://trustpilot.com/",
    },
    {
      patterns: [".liveperson.net/", ".lpsnmedia.net/"],
      name: "LivePerson",
      category: "Chat Bot",
      iconClass: "icon-liveperson",
      description:
        "LivePerson is a Conversational AI system. Our Conversational Cloud platform empowers consumers to stop wasting time on hold or crawling through websites and message their favorite brands instead.",
      url: "https://www.liveperson.com/",
    },
    {
      patterns: [".redditstatic.com/", ".reddit.com/"],
      name: "Reddit",
      category: "Ads Tracking",
      iconClass: "icon-reddit",
      description:
        "Reddit is an American social news aggregation, web content rating, advertising, and discussion website. Registered members submit content to the site such as links, text posts, images, and videos, which are then voted up or down by other members.",
      url: "https://www.reddit.com/",
    },
    {
      patterns: [".buysellads.com/"],
      name: "BuySellAds",
      category: "Ads Tracking",
      iconClass: "icon-buy-sell-ads",
      description:
        "BuySellAds is an online marketplace that connects website publishers and advertisers. No Fancy algorithm, no complex methods, it is very simple. The advertiser searches for a niche that they are targeting, bunch of site pops up (you might be in that niche) - Advertisers look at your site's stats, and buy the ad.",
      url: "https://www.buysellads.com/",
    },
    {
      patterns: [".cloudflareinsights.com/", ".cloudflare.com/"],
      name: "CloudFlare",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-cloudflare",
      description:
        "The Cloudflare (Site) Analytics app helps you gain insight about each specific site in your Cloudflare account. These metrics comprise request and response data for web traffic, security, performance, DNS, and Workers.",
      url: "https://www.cloudflare.com/",
    },
    {
      patterns: [".googleoptimize.com/"],
      name: "Google Optimize",
      category: "A/B Testing",
      iconClass: "icon-google-optimize",
      description:
        "Google Optimize is a free website optimization tool that helped online marketers and webmasters increase visitor conversion rates and overall visitor satisfaction by continually testing different combinations of website content.",
      url: "https://optimize.google.com/",
    },
    {
      patterns: [".gstatic.com/firebasejs/"],
      name: "Google Firebase",
      category: "Tracking &amp; Analytics",
      iconClass: "icon-firebase",
      description:
        "Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.",
      url: "https://firebase.google.com/",
    },
    {
      patterns: [".wp.com/", "/wp-includes/", "/wp-content/"],
      name: "Wordpress",
      category: "Regular JavaScript Code",
      iconClass: "icon-wordpress",
      description:
        "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes.",
      url: "https://wordpress.com/",
    },
    {
      patterns: [".riskified.com/"],
      name: "Riskified",
      category: "Fraud Management",
      iconClass: "icon-riskified",
      description:
        "Riskified provides software as a service fraud and chargeback prevention technology. Riskified 's technology uses behavioral analysis, elastic linking, proxy detection, and machine learning to detect and prevent fraud.",
      url: "https://www.riskified.com/",
    },
    {
      patterns: [".onetrust.com/"],
      name: "OneTrust",
      category: "Privacy Management",
      iconClass: "icon-onetrust",
      description:
        "OneTrust is a privacy management system for organizations small or large. Used by some of the many businesses, its comprehensive modules mean that it can be customized for any regulation, compliance standard or legislation.",
      url: "https://www.onetrust.com/",
    },
    {
      patterns: [".googleapis.com/", "/apis.google.com/"],
      name: "Google APIs",
      category: "Regular JavaScript Code",
      iconClass: "icon-google",
      description:
        "Google APIs are application programming interfaces (APIs) developed by Google which allow communication with Google Services and their integration to other services.",
      url: "https://developers.google.com/",
    },
    {
      patterns: [".amplitude.com/"],
      name: "Amplitude",
      category: "Product Analytics",
      iconClass: "icon-amplitude",
      description:
        "Amplitude is a product analytics service that makes it easier for companies to understand user behavior, ship the right features and improve business outcomes.",
      url: "https://amplitude.com/",
    },
    {
      patterns: [".nr-data.net/", ".newrelic.com/"],
      name: "New Relic",
      category: "Real User Monitoring",
      iconClass: "icon-new-relic",
      description:
        "New Relic Browser is the world's most deployed Real User Monitoring (RUM) solution because it's easy to use, and instantly connects end-user experience with time spent in backend services. From easy-to-understand overviews to user-centric perceived performance metrics and events, Browser helps you benchmark and improve web performance and troubleshoot across your full stack.",
      url: "https://newrelic.com/",
    },
    {
      patterns: [".tvpixel.com/", ".squarespace.com/"],
      name: "SquareSpace",
      category: "Tracking",
      iconClass: "icon-squarespace",
      description:
        "Squarespace, Inc. is an American website building and hosting company which is based in New York City, United States. It provides software as a service for website building and hosting, and allows users to use pre-built website templates and drag-and-drop elements to create and modify webpages.",
      url: "https://www.squarespace.com/",
    },  
    {
      patterns: [".stripe.com/"],
      name: "Stripe",
      category: "Payment System",
      iconClass: "icon-stripe",
      description:
        "Stripe is an Irish-American financial services and software as a service company dual-headquartered in San Francisco, United States and Dublin, Ireland. The company primarily offers payment processing software and application programming interfaces for e-commerce websites and mobile applications.",
      url: "https://stripe.com/",
    },  
    {
      patterns: [".appsflyer.com/"],
      name: "AppsFlyer",
      category: "Marketing Analytics",
      iconClass: "icon-apps-flyer",
      description:
        "AppsFlyer is a SaaS mobile marketing analytics and attribution platform, headquartered in San Francisco, California. ",
      url: "https://www.appsflyer.com/",
    },  
    {
      patterns: [".appcues.com/"],
      name: "Appcues",
      category: "User onboarding and retention",
      iconClass: "icon-appcues",
      description:
        "Appcues is an in-app user engagement platform meant to empower your non-technical colleagues. It allows them to create targeted modals, guided tours and other types of user experiences without having to burden engineering with the implementation.",
      url: "https://www.appcues.com/",
    },  
    {
      patterns: [".brandmetrics.com/"],
      name: "Brand Metrics",
      category: "User onboarding and retention",
      iconClass: "icon-brand-metrics",
      description:
        "Brand Metrics is a software solution for publishers that allows for measurement of even small campaigns, formats, creatives and audience segments, in an easy to implement, privacy-first and future-proof way.",
      url: "https://www.brandmetrics.com/",
    },  
    {
      patterns: [".parrable.com/"],
      name: "Parrable",
      category: "Cookies and Privacy Management",
      iconClass: "icon-parrable",
      description:
        "Parrable is a consumer privacy and consent progressive ID platform. Parrable is not a data broker and does not share information with third parties. Parrable encrypts every ID so that no bad actors can leverage the identity, fixing the uncontrollable tracking issue of cookies.",
      url: "https://parrable.com/",
    },  
    {
      patterns: [".agkn.com/"],
      name: "AGKN",
      category: "Tracking",
      iconClass: "icon-neustar",
      description:
        "Neustar, Inc., is an American technology company that provides real-time information and analytics for the Internet, risk, digital performance, and defense, telecommunications, entertainment, and marketing industries, and also provides clearinghouse and directory services to the global communications and Internet industries.",
      url: "https://www.home.neustar/",
    },  
    {
      patterns: [".adsrvr.org/"],
      name: "TheTradeDesk",
      category: "Ads Tracking",
      iconClass: "icon-thetradedesk",
      description:
        "The Trade Desk Inc is a global technology company that markets a software platform used by digital ad buyers to purchase data-driven digital advertising campaigns across various ad formats and devices.",
      url: "https://www.thetradedesk.com/",
    },  
  ].map(track => ({
    ...track,
    matches: [],
  })) as iTrackCat[]

  const unresolvedCat: iTrackCat = {
    patterns: [],
    name: "Unresolved Javascript Code",
    category: "JavaScript",
    iconClass: "icon-unclassified",
    description:
      "Page Auditor for Technical SEO is not yet able to classify the following JavaScript code.",
    url: "",
    matches: [],
  }

  const scripts = [...document.scripts]
    .filter(s => s.type !== "application/ld+json")
    .map(s => (s.src === "" ? s.text : s.src))
    .filter(Boolean)
    .map(s => ({script: s, done: false})) as iScript[]

  const trackers: iTrackCat[] = []
  trackCats.forEach(cat => {
    scripts.forEach(scr => {
      cat.patterns
        .map(pattern => scr.script.match(new RegExp(pattern, "ig")))
        .filter(match => match !== null && match.length > 0)
        .forEach(m => {
          const script =
            scr.script.length > 80
              ? `${scr.script.substr(0, 80)}...`
              : scr.script
          cat.matches.push(script.replace(/\s/g, " "))
          scr.done = true
        })
    })
    if (cat.matches.length > 0) {
      trackers.push(cat)
    }
  })

  scripts
    .filter(scr => !scr.done && scr.script.match(/^https\:\/\//))
    .forEach(scr => {
      unresolvedCat.matches.push(scr.script)
    })

  if (unresolvedCat.matches.length > 0) {
    trackers.push(unresolvedCat)
  }

  return trackers
}

export const report = async (trackersUntyped: any): Promise<string> => {
  const trackers: iTrackCat[] = trackersUntyped as iTrackCat[]

  var report: string = ""

  if (trackers === null) {
    throw new Error("No trackers found.")
  }

  trackers
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .forEach((t, i) => {
      const link =
        t.url.length > 0
          ? `<a target='_new' class='link-in-card' href='${t.url}'>website</a>`
          : ``
      const matches = t.matches.map(match =>
        match
          .replace(/\&/g, `&amp;`)
          .replace(/(\?|\&)/gi, "\n$1")
          .split("\n")
          .map(m => {
            if (!m.includes("=")) {
              return m
            }
            try {
              const labelValue = m.split("=")
              return `${labelValue[0]}=${decodeURI(labelValue[1])}`
            } catch (_) {
              return m
            }
          })
          .join("<br/><span></span>")
      )

      const card = new Card()
      card.open(t.category, `${t.name + link}`, t.iconClass)
      card.add(`
        <div class='card-description'>${t.description}</div>
        <div class='card-options'>
          <a class='link-in-card left-option n-scripts'>
            ${matches.length.toFixed()} script${
        matches.length === 1 ? "" : "s"
      } found. </a>
          <ul class='hide'>
            <li>${matches.join("</li><li>")}</li>
          </ul>
        </div>`)
      card.close()
      report += card.render()
    })
  return report
}

export const eventManager = () => {
  const btns = [
    ...document.querySelectorAll(".link-in-card.n-scripts"),
  ] as HTMLAnchorElement[]
  btns.forEach(btn => btn.addEventListener("click", () => toggle(btn)))
}

export const toggle = (btn: HTMLAnchorElement) => {
  const ul: HTMLUListElement = btn.parentElement
    ?.children[1] as HTMLUListElement
  if (ul.classList.contains("hide")) {
    ul.classList.remove("hide")
    ul.classList.add("show")
  } else {
    ul.classList.remove("show")
    ul.classList.add("hide")
  }
}

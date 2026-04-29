export const languages = ["en", "zh"] as const;
export type Language = (typeof languages)[number];

export const labels = {
  en: {
    htmlLang: "en",
    title: "SleepLemon | Practical Sleep Notes",
    description: "SleepLemon shares practical sleep routines, bedroom ideas, and thoughtful buying notes.",
    guides: "Articles",
    disclosure: "Disclosure",
    heroEyebrow: "Sleep routines, habits, and calm bedrooms",
    heroTitle: "Build a sleep life that feels easier to keep.",
    heroIntro:
      "SleepLemon is an editorial sleep site about routines, bedroom environments, recovery habits, and occasional product notes when a tool genuinely helps.",
    affiliateTitle: "Editorial note",
    editorialNote:
      "We start with the sleep problem first. Shopping links appear only when a product is relevant to the article.",
    affiliateText: "As an Amazon Associate I earn from qualifying purchases.",
    footerDisclosure: "Some articles may contain affiliate links. See disclosure.",
    readGuide: "Read article",
    latest: "Latest",
    buyingGuides: "Sleep articles",
    allGuides: "All articles",
    disclosureTitle: "Affiliate Disclosure",
    disclosureBody:
      "SleepLemon is primarily an editorial sleep content site. Some articles include shopping links when a product, book, or tool is relevant to the topic. SleepLemon participates in affiliate programs, including the Amazon Associates Program. When you click an affiliate link and make a purchase, SleepLemon may receive a commission at no extra cost to you.",
    disclosureEthic:
      "Product links should support the article, not replace it. We aim to explain the sleep problem, the tradeoffs, and when buying something is unnecessary.",
    otherLang: "中文",
    otherLangCode: "zh",
  },
  zh: {
    htmlLang: "zh-CN",
    title: "SleepLemon | 实用睡眠笔记",
    description: "SleepLemon 分享睡眠习惯、卧室环境、恢复节律和谨慎的购买建议。",
    guides: "文章",
    disclosure: "联盟披露",
    heroEyebrow: "睡眠习惯、节律和卧室环境",
    heroTitle: "把睡眠变成更容易坚持的生活方式。",
    heroIntro: "SleepLemon 是一个讲睡眠内容的站点：先聊作息、环境、恢复和真实问题，只有在产品确实有帮助时才顺带提供购买入口。",
    affiliateTitle: "编辑说明",
    editorialNote: "我们先讨论睡眠问题本身。购物链接只会出现在和文章主题相关、确实方便读者继续了解的地方。",
    affiliateText: "作为 Amazon Associate，我会从符合条件的购买中获得佣金。",
    footerDisclosure: "部分文章可能包含联盟链接。查看披露。",
    readGuide: "阅读全文",
    latest: "最新",
    buyingGuides: "睡眠文章",
    allGuides: "全部文章",
    disclosureTitle: "联盟披露",
    disclosureBody:
      "SleepLemon 首先是一个睡眠内容站。部分文章会在产品、书籍或工具确实和主题相关时加入购物链接。SleepLemon 会参与联盟推广计划，包括 Amazon Associates Program。当你点击联盟链接并完成购买时，SleepLemon 可能获得佣金，你不需要额外支付费用。",
    disclosureEthic: "产品链接应该服务文章，而不是替代文章。我们会优先解释睡眠问题、选择取舍，以及什么时候其实不需要买东西。",
    otherLang: "English",
    otherLangCode: "en",
  },
} satisfies Record<Language, Record<string, string>>;

export function isLanguage(value: string | undefined): value is Language {
  return value === "en" || value === "zh";
}

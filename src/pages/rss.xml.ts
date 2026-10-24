import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { isPublished } from "../lib/articles";

export async function GET(context: APIContext) {
    const articles = (
        await getCollection("articles", (entry) =>
            isPublished(entry, import.meta.env.PROD),
        )
    ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    return rss({
        title: "Articles — Isaac Kwok",
        description:
            "Articles by Isaac Kwok — essays and notes on software, design, and craft.",
        site: context.site ?? "https://isaackwok.com",
        trailingSlash: false,
        items: articles.map((entry) => ({
            title: entry.data.title,
            description: entry.data.description,
            pubDate: entry.data.date,
            categories: entry.data.tags,
            link: `/articles/${entry.id}`,
        })),
    });
}

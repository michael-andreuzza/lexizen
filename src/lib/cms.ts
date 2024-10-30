import { createZenblogClient } from "zenblog";

const blogId = import.meta.env.ZENBLOG_BLOG_ID;

if (!blogId) {
    throw new Error("ZENBLOG_BLOG_ID is not set");
}

export const cms = createZenblogClient({
    blogId,
})
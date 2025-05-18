import type { PageLoad } from './$types';

interface BlogMeta {
    title: string;
    date: string;
    image: string;
}

export const load: PageLoad = async () => {
    const modules = await import.meta.glob('/src/articles/blog/*.svx');

    const blog = await Promise.all(
        Object.entries(modules).map(async ([path, importer]) => {
            const module = (await importer()) as { metadata: BlogMeta };
            const slug = path.split('/').pop()?.replace('.svx', '');

            if (slug) {
                return {
                    ...module.metadata,
                    path: `/blog/${slug}`
                };
            }

            throw new Error();
        })
    );

    const sortedBlog = blog.sort((blog1, blog2) => {
        return +new Date(blog2.date) - +new Date(blog1.date);
    });

    return { blog: sortedBlog };
};
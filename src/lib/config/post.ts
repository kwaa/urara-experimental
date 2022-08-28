import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
    bridgy: {
        post: ['fed']
    },
    comment: {
        use: ['Webmention'],
        webmention: {
            username: 'kwaa.dev',
            sortBy: 'created',
            sortDir: 'down',
            form: true
        },
    }
}

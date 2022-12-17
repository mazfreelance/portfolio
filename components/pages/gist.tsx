import {
    Box,
    SimpleGrid,
    useMediaQuery
} from "@chakra-ui/react"
import { PageSliderFade } from "components/animations/page-transition"
import {
    GistCard,
    GitCard,
    SkeletonGitCard
} from "components/layouts/shared/card"
import {
    GITHUB_API_URL,
    GITHUB_USERNAME
} from "../../configs/api"
import useFetch from "use-http"
import { useEffect, useState } from "react"

const openSource = [
    'Lumen-Boilerplate',
    'laravel-9-boilerplate',
    'nuxt-sweetalert2',
    'vue-winwheel',
    'yii2-audit',
    'yii2-laravel-crypt',
    'laravel-command-generator',
    'instagram-php-graph-sdk',
    'portfolio',
    // 'covid19-public',
    // 'Dynamic-List-Laravel',
    // 'Laravel-Collective-HTML',
    'laravel-tips',
    'Malaysia-Cities-JSON'
]

const Gist = () => {
    const { get, loading, error, data } = useFetch(GITHUB_API_URL)
    const [repositories, setRepositories] = useState([])
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
    const [isLargerThan982] = useMediaQuery('(min-width: 982px)')

    useEffect(() => {
        getUserRepo()
    }, [])

    async function getUserRepo() {
        await get(`/users/${GITHUB_USERNAME}/gists?per_page=30`).then((res) => {
            setRepositories(res)
        }).catch((error) => {
            console.log("🚀 ~ file: github-repository.tsx ~ line 69 ~ awaitget ~ error", error)
        })
    }

    return (
        <PageSliderFade>
            {loading ? (
                <SimpleGrid columns={[1, 1, 2, 3]}>
                    <SkeletonGitCard cards={[1, 2, 3, 4, 5, 6, 7]} />
                </SimpleGrid>
            ) : (
                <Box mt={4}>
                    <SimpleGrid columns={[1, 1, 2, 3]}>
                        {repositories?.map((repo, index) => (
                            <GistCard
                                key={ index }
                                title={ repo.description }
                                comments_count={ repo.comments }
                                url={ repo.html_url }
                            />
                        ))}
                    </SimpleGrid>
                </Box>
            )}
        </PageSliderFade>
    )
}

export default Gist

/*

{
"url": "https://api.github.com/gists/0f00c41a1a9f11358bf87a5878a0a945",
"forks_url": "https://api.github.com/gists/0f00c41a1a9f11358bf87a5878a0a945/forks",
"commits_url": "https://api.github.com/gists/0f00c41a1a9f11358bf87a5878a0a945/commits",
"id": "0f00c41a1a9f11358bf87a5878a0a945",
"node_id": "MDQ6R2lzdDBmMDBjNDFhMWE5ZjExMzU4YmY4N2E1ODc4YTBhOTQ1",
"git_pull_url": "https://gist.github.com/0f00c41a1a9f11358bf87a5878a0a945.git",
"git_push_url": "https://gist.github.com/0f00c41a1a9f11358bf87a5878a0a945.git",
"html_url": "https://gist.github.com/0f00c41a1a9f11358bf87a5878a0a945",
"files": {
"Dynamic List Laravel": {
"filename": "Dynamic List Laravel",
"type": "text/plain",
"language": null,
"raw_url": "https://gist.githubusercontent.com/mazfreelance/0f00c41a1a9f11358bf87a5878a0a945/raw/44cf140d359803b0abe7f62d8fd00eea31485ea4/Dynamic%20List%20Laravel",
"size": 562
}
},
"public": true,
"created_at": "2018-09-06T03:15:15Z",
"updated_at": "2018-09-06T03:15:15Z",
"description": "Dynamic List Laravel",
"comments": 0,
"user": null,
"comments_url": "https://api.github.com/gists/0f00c41a1a9f11358bf87a5878a0a945/comments",
"owner": {
"login": "mazfreelance",
"id": 29052573,
"node_id": "MDQ6VXNlcjI5MDUyNTcz",
"avatar_url": "https://avatars.githubusercontent.com/u/29052573?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/mazfreelance",
"html_url": "https://github.com/mazfreelance",
"followers_url": "https://api.github.com/users/mazfreelance/followers",
"following_url": "https://api.github.com/users/mazfreelance/following{/other_user}",
"gists_url": "https://api.github.com/users/mazfreelance/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mazfreelance/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mazfreelance/subscriptions",
"organizations_url": "https://api.github.com/users/mazfreelance/orgs",
"repos_url": "https://api.github.com/users/mazfreelance/repos",
"events_url": "https://api.github.com/users/mazfreelance/events{/privacy}",
"received_events_url": "https://api.github.com/users/mazfreelance/received_events",
"type": "User",
"site_admin": false
},
"truncated": false
}
*/
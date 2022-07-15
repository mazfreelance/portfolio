import {
    Box,
    SimpleGrid,
    useMediaQuery
} from "@chakra-ui/react"
import { PageSliderFade } from "components/animations/page-transition"
import {
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

const GitHubRepository = () => {
    const { get, loading, error, data } = useFetch(GITHUB_API_URL)
    const [repositories, setRepositories] = useState([])
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
    const [isLargerThan982] = useMediaQuery('(min-width: 982px)')

    useEffect(() => {
        getUserRepo()
    }, [])

    async function getUserRepo() {
        await get(`/users/${GITHUB_USERNAME}/repos`).then((res) => {
            setRepositories(

                res.filter(function (item, index) {
                    return openSource.includes(item.name)
                })
            )
        }).catch((error) => {
            console.log("🚀 ~ file: github-repository.tsx ~ line 69 ~ awaitget ~ error", error)
        })
    }

    return (
        <PageSliderFade>
            {loading ? (
                <SimpleGrid columns={[1, 2, 3]}>
                    <SkeletonGitCard cards={[1, 2, 3, 4, 5, 6, 7]} />
                </SimpleGrid>
            ) : (
                <Box mt={4}>
                    <SimpleGrid columns={[1, 2, 3]}>
                        {repositories?.map((repo, index) => (
                            <GitCard
                                key={index}
                                title={repo.name}
                                description={repo.description}
                                language={repo.language}
                                url={repo.svn_url}
                                // created_at={repo.created_at}
                                stargazers_count={repo.stargazers_count}
                                forks_count={repo.forks_count}
                            />
                        ))}
                    </SimpleGrid>
                </Box>
            )}
        </PageSliderFade>
    )
}

export default GitHubRepository
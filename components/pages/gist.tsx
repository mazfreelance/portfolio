import {
    Box,
    SimpleGrid,
    useMediaQuery
} from "@chakra-ui/react"
import { PageSliderFade } from "components/animations/page-transition"
import {
    GistCard,
    SkeletonGitCard
} from "components/layouts/shared/card"
import {
    GITHUB_API_URL,
    GITHUB_USERNAME
} from "../../configs/api"
import useFetch from "use-http"
import { useEffect, useState } from "react"

const Gist = () => {
    const { get, loading, error, data } = useFetch(GITHUB_API_URL)
    const [repositories, setRepositories] = useState([])
    const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
    const [isLargerThan982] = useMediaQuery('(min-width: 982px)')

    useEffect(() => {
        getUserRepo()
    }, [])

    async function getUserRepo() {
        await get(`/users/${GITHUB_USERNAME}/gists?per_page=50`).then((res) => {
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
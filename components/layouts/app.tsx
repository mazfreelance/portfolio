import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import AppBackground from "./appBackground";
import Footer from "./shared/footer";
import TopNav from "./shared/topnavbar";


function AppLayout(props) {
    return (
        <Fragment>
            <TopNav />
            <AppBackground />
            <Box textAlign={ 'center' }
                fontSize="xl"
                w={ ['90%', '85%', '80%'] }
                maxW={ 800 }
                mx="auto">
                <Box pt={ '7rem' } pb={ 10 }>
                    { props.children }
                </Box>
            </Box>
            <Footer />
        </Fragment>
    )
}

export default AppLayout;
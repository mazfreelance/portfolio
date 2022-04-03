import { Box } from "@chakra-ui/react";

const AppBackground = () => {
    return (
        <Box
            position="absolute"
            height="50rem"
            width="100%"
            overflow="hidden"
            display={ ['none', 'none', 'block'] }
            zIndex={ -1 }>
            <Box
                position="absolute"
                height="full"
                mx="auto"
                maxW={ '940px' }>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                    <g mask="url(&quot;#SvgjsMask1192&quot;)" fill="none">
                        <path d="M0 0L941.35 0L0 595.84z" filter="url(#SvgjsFilter1193)" fill="rgba(255, 255, 255, 1)"></path>
                        <path d="M0 560L700.43 560L0 -430.75z" filter="url(#SvgjsFilter1193)" fill="rgba(255, 255, 255, 1)"></path>
                        <path d="M1440 0L649.65 0L1440 860.31z" filter="url(#SvgjsFilter1193)" fill="rgba(255, 255, 255, 1)"></path>
                        <path d="M1440 560L567.22 560L1440 -310.48z" filter="url(#SvgjsFilter1193)" fill="rgba(255, 255, 255, 1)"></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1192">
                            <rect width="1440" height="560" fill="#ffffff"></rect>
                        </mask>
                        <filter height="130%" id="SvgjsFilter1193">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="TopLeftG"></feGaussianBlur>
                            <feOffset dx="-5" dy="-5" in="TopLeftG" result="TopLeftO"></feOffset>
                            <feComponentTransfer in="TopLeftO" result="TopLeftC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="TopRightG"></feGaussianBlur>
                            <feOffset dx="5" dy="-5" in="TopRightG" result="TopRightO"></feOffset>
                            <feComponentTransfer in="TopRightO" result="TopRightC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="BottomLeftG"></feGaussianBlur>
                            <feOffset dx="-5" dy="5" in="BottomLeftG" result="BottomLeftO"></feOffset>
                            <feComponentTransfer in="BottomLeftO" result="BottomLeftC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="BottomRightG"></feGaussianBlur>
                            <feOffset dx="5" dy="5" in="BottomRightG" result="BottomRightO"></feOffset>
                            <feComponentTransfer in="BottomRightO" result="BottomRightC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode in="TopLeftC"></feMergeNode>
                                <feMergeNode in="TopRightC"></feMergeNode>
                                <feMergeNode in="BottomLeftC"></feMergeNode>
                                <feMergeNode in="BottomRightC"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </Box>
        </Box>
    )
}

export default AppBackground
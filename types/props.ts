import {
    FlexProps,
    TagProps as ChakraTagProps
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Skill } from "./skill";

export interface Props {
    children: ReactNode
}

export type NavLinkProps = {
    index?: number;
    name: string;
    path: string;
    linkColor?: string;
    onClose: () => void;
}

export type DropdownLinkProps = {
    index?: number;
    name: string;
    path: string;
    bg: string;
    color?: string;
    routePath: string;
    onClose: () => void;
}

export type MetaProps = {
    author?: string;
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}

export type PageProps = {
    children: ReactNode
    title?: string
    description?: string
    keywords?: string
    image?: string
}

export interface CareerEducationProps {
    title: string;
    role: string;
    skills: string[];
    period: string;
    logo: string;
    alt?: string;
    startingYear?: string;
}

export interface SkillProps {
    skills: Skill[]
}
export interface CTagProps extends ChakraTagProps {
    name: string
    interactive?: boolean
}
export interface FProps extends FlexProps {
    interactive?: boolean,
    tags?: string[],
    tagProps?: Partial<FProps>
}

export interface ProjectProps {
    name: string;
    description: string;
    publish: string;
    image?: string;
    filter?: string[];
    link: string;
}
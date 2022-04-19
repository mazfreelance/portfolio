// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import {
  FlexProps,
  TagProps as ChakraTagProps
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode
}

export type User = {
  id: number
  name: string
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

interface Skill {
  name: string;
  description: string;
  link: string;
  type: string;
  image: string;
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
  skills: string[];
  link: string;
}

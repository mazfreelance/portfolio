// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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

export interface CareerProps {
  title: string;
  alt: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
}

export interface EducationProps {
  title:        string;
  alt:          string;
  role:         string;
  skills:       string[];
  period:       string;
  startingYear: string;
  logo:         string;
}

export interface SkillProps {
  name:        string;
  description: string;
  link:        string;
  type:        string;
  image:       string;
}

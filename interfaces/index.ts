// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

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

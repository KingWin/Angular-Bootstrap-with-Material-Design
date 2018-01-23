export interface PackageDescription {
  name: string;
  hasTestingModule: boolean;
  bundle: boolean;
}

export interface Config {
  packages: PackageDescription[];
  scope: string;
}

export const packages: PackageDescription[] = [
  {
    name: 'buttons',
    hasTestingModule: false,
    bundle: true
  },
  {
    name: 'carousel',
    hasTestingModule: false,
    bundle: true
  },
  {
    name: 'utils',
    hasTestingModule: false,
    bundle: true
  },
  {
    name: 'charts',
    hasTestingModule: false,
    bundle: true
  }
];

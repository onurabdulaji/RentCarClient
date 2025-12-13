export interface NavigationModel {
  title: string;
  url?: string;
  icon?: string;
  haveSubNavs?: boolean;
  subNavs?: NavigationModel[];
}

export const navigation: NavigationModel[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: 'bi-speedometer2',
  },
];

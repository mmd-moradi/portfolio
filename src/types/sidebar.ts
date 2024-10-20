
export type HeadingType = {
  name: string;
  role: string;
  avatarSrc: string;
  latestVisit: string;
};

export type NavLinkType = {
  href: string;
  label: string;
  icon: string; 
};

export type SocialLinkType = {
  href: string;
  label: string;
  icon: string;
};


export type ResumeButtonType = {
  label: string;
  icon: string; 
};


export type SidebarType = {
  heading: HeadingType;
  navlinks: NavLinkType[];
  socials: SocialLinkType[];
  resumeButton: ResumeButtonType;
};









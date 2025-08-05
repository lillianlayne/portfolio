export interface Project {
  project: string;
  tools: string[];
  year: string;
  roles: string[];
  descriptions: string[];
  shortDescription: string;
  images: {
    featureImage: string;
    heroImage: string;
    secondaryImages: string[];
  };
  cardSettings: {
    ratio: string;
    col: number;
    span: number;
    textColor: string;
  };
}

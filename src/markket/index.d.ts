export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface MediaFormats {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
}

export interface Media {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: MediaFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  documentId: string;
  publishedAt: string;
}

export interface Store {
  id: number;
  title: string;
  Description: string;
  slug: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  STRIPE_CUSTOMER_ID: string;
  Cover: Media;
  Logo: {
    url: string;
    formats: {
      small: {
        url: string;
      }
    }
  };
  Favicon: {

    url: string;
  },
  URLS: {
    id: number;
    Label: string;
    URL: string;
  }[],
  SEO: {
    metaDescription: string;
    metaKeywords: string;
    metaTitle: string;
    metaAuthor: string;
    socialImage?: {
      url: string;
    };
  };
}


export interface AlbumTrack {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  description: string;
  content: ContentBlock[];
  media: Media[];
  urls?: {
    id: number;
    Label: string;
    URL: string;
  }[];
  SEO?: SEO;
}

export interface Album {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  cover: Media;
  tracks: AlbumTrack[];
  store?: Store;
  displayType: 'grid' | 'list' | 'carousel';
  SEO?: SEO;
}

export interface AlbumResponse {
  data: Album[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      pageCount: number;
    };
  };
}


interface BlockText {
  text: string;
  type?: 'text';
  bold?: boolean;
}

interface BlockLink {
  type: 'link';
  url: string;
  children: BlockText[];
}

type BlockChild = BlockText | BlockLink;

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'list-item' | 'image' | 'link' | 'quote' | 'code';
  level?: number;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
    width: number;
    height: number;
    name: string;
  },
  children: Array<{
    type: string;
    code?: boolean;
    text?: string;
    bold?: boolean;
    url?: string;
    children?: Array<{ text: string; type: string; }>;
  }>;
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface ImageData {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  documentId: string;
  publishedAt: string;
}

interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaUrl: string | null;
  metaAuthor: string | null;
  excludeFromSearch: boolean;
  metaDate: string | null;
  socialImage?: ImageData;
}

export interface Page {
  id: number;
  Title: string;
  Content: ContentBlock[];
  Active: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  menuOrder: number | null;
  documentId: string;
  store?: Store;
  SEO?: SEO;
  albums?: Album[];
}


export interface PageResponse {
  data: Page[];
}

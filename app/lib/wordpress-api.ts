const WORDPRESS_API_BASE = "https://public-api.wordpress.com/wp/v2/sites/252212907";

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, any>;
  categories: number[];
  tags: number[];
  jetpack_featured_media_url?: string;
  [key: string]: any;
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  [key: string]: any;
}

/**
 * Fetch all posts from WordPress API
 */
export async function fetchPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=100&_embed`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    
    const posts = await response.json();
    return posts.filter((post: WordPressPost) => post.status === "publish");
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

/**
 * Fetch a single post by ID from WordPress API
 */
export async function fetchPostById(id: number | string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts/${id}?_embed`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    
    const post = await response.json();
    
    if (post.status !== "publish") {
      return null;
    }
    
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

/**
 * Fetch all categories from WordPress API
 */
export async function fetchCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/categories?per_page=100`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
    
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

/**
 * Get category name by ID
 */
export function getCategoryName(
  categoryId: number,
  categories: WordPressCategory[]
): string {
  const category = categories.find((cat) => cat.id === categoryId);
  return category?.name || "Khác";
}

/**
 * Format date to Vietnamese format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

/**
 * Format date to short format (DD/MM/YYYY)
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()}`;
}

/**
 * Strip HTML tags from string
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

/**
 * Decode HTML entities (e.g., &nbsp; to space, &amp; to &, etc.)
 * Works in both server-side and client-side environments
 */
export function decodeHtmlEntities(text: string): string {
  // Common HTML entities mapping
  const entities: Record<string, string> = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&copy;": "©",
    "&reg;": "®",
    "&trade;": "™",
    "&hellip;": "…",
    "&mdash;": "—",
    "&ndash;": "–",
  };

  let decoded = text;
  
  // Replace named entities
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, "g"), char);
  }
  
  // Replace numeric entities (&#123; and &#x1F;)
  decoded = decoded.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)));
  decoded = decoded.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  
  return decoded;
}

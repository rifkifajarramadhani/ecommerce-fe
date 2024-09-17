import { Asset } from './Asset';
import { PageItem } from './PageItem';
import { Product } from './Product'

export interface LadingPage {
    id: number;
    title: string|null;
    description: string|null;
    is_published: boolean;
    top_banner_video: PageItem;
    top_banners: PageItem[];
    bottom_banners: PageItem[];
    product_slider_one?: PageItem;
    product_slider_two?: PageItem;
}

export interface Category {
    id: number;
    parent_id?: number | null;
    lft?: number | null;
    rght?: number | null;
    level?: number | null;
    title: string;
    slug: string;
    description?: string | null;
    has_landing_page: boolean;
    show_on_menu: boolean;
    sort?: number | null;
    created?: Date | null;
    modified?: Date | null;
    deleted?: Date | null;
    parent_category?: Category | null;
    child_categories?: Category[] | null;
    children: Category[];
    products?: Product[] | null;
    landing_page?: LadingPage | null;
    display_title: string;
    hierarchy: Category[] | null;
    path: string | null;
}
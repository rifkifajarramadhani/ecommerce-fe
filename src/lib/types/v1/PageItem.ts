import { Asset } from "./Asset";
import { Product } from "./Product";

export interface PageItem {
  id?: number;
  page_id?: number;
  page_component_id?: number | null;
  page_item_type?: string;
  title?: string | null;
  subtitle?: string | null;
  url?: string | null;
  content?: string | null;
  is_true?: boolean;
  sequence?: number | null;
  mobile_image?: Asset | null;
  medium_image?: Asset | null;
  desktop_image?: Asset | null;
  mobile_video?: Asset | null;
  medium_video?: Asset | null;
  desktop_video?: Asset | null;
  publication_document?: Asset | null;
  products?: Product[];
}

export type Asset = {
  id: number;
  brand_id: number | null;
  category_id: number | null;
  category_banner_id: number | null;
  page_item_id: number | null;
  asset_type: string;
  path: string;
  url: string;
  original_filename: string;
  is_primary: Boolean;
  created: string | null;
  modified: string | null;
  deleted: string | null;
};

export type Nav = {
  id: number;
  parent_id: number | null;
  lft: number;
  rght: number;
  level: number;
  title: string;
  slug: string;
  description: string;
  has_landing_page: boolean;
  sort: number | null;
  show_on_menu: boolean;
  created: string;
  modified: string | null;
  deleted: string | null;
  children: Nav[];
  display_title: string;
  path: string;
};

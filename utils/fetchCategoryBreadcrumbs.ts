import { get } from "lodash";
import axios from "axios.config";
import { I_CATEGORIES } from "interfaces";
import { PRODUCTS_CATEGORIES_API } from "apis";

async function fetchCategoryById(id: string): Promise<I_CATEGORIES | null> {
  try {
    const { data } = await axios.get(`${PRODUCTS_CATEGORIES_API}${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching category by ID ${id}:`, error);
    return null;
  }
}

export async function fetchCategoryBreadcrumbs(
  parentId: string
): Promise<I_CATEGORIES[]> {
  if (!parentId) return [];

  const parentCategories: I_CATEGORIES[] = [];

  async function fetchParentCategory(nodeId: string) {
    const category: I_CATEGORIES | null = await fetchCategoryById(nodeId);

    if (category) {
      parentCategories.push(category);
      const parent = get(category, "parent", null);

      if (parent) {
        const parentSplit = parent.split("/");
        const parentId = parentSplit[parentSplit.length - 2];
        await fetchParentCategory(parentId);
      }
    }
  }

  await fetchParentCategory(parentId);

  return parentCategories.reverse();
}

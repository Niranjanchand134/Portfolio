import { useEffect } from "react";
import { D } from "../data";

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${D.name}` : `${D.name} | ${D.role}`;
  }, [page]);
}

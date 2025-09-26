"use client";

import { clientLocalStorage } from "@/lib/utils";
import { LOCAL_STORAGE_KEYS } from "./constants";

export const getPaymentHistory = () => {
  const paidPageIds = clientLocalStorage()?.getItem(
    LOCAL_STORAGE_KEYS.PAID_PAGE_IDS
  );
  return paidPageIds;
};

export const addToPaymentHistory = (pageId: string) => {
  const previousPageIds = getPaymentHistory();

  if (previousPageIds?.includes(pageId)) {
    return;
  }

  const paidPageIds = clientLocalStorage()?.getItem(
    LOCAL_STORAGE_KEYS.PAID_PAGE_IDS
  );
  if (paidPageIds) {
    clientLocalStorage()?.setItem(
      LOCAL_STORAGE_KEYS.PAID_PAGE_IDS,
      paidPageIds + "," + pageId
    );
  } else {
    clientLocalStorage()?.setItem(LOCAL_STORAGE_KEYS.PAID_PAGE_IDS, pageId);
  }
};

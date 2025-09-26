import { LOCAL_STORAGE_KEYS } from "@/app/constants";

export const getPaymentHistory = () => {
  const paidPageIds = localStorage.getItem(LOCAL_STORAGE_KEYS.PAID_PAGE_IDS);
  return paidPageIds;
};

export const addToPaymentHistory = (pageId: string) => {
  const previousPageIds = getPaymentHistory();

  if (previousPageIds?.includes(pageId)) {
    return;
  }

  const paidPageIds = localStorage.getItem(LOCAL_STORAGE_KEYS.PAID_PAGE_IDS);
  if (paidPageIds) {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.PAID_PAGE_IDS,
      paidPageIds + "," + pageId
    );
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PAID_PAGE_IDS, pageId);
  }
};

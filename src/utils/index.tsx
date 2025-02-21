import { TenderDetails } from "@/types";

export const groupTendersByStatus = (tenders: TenderDetails[]) => {
  return tenders.reduce<Record<TenderDetails["tenderStatus"], TenderDetails[]>>(
    (acc, tender) => {
      if (!acc[tender.tenderStatus]) {
        acc[tender.tenderStatus] = [];
      }
      acc[tender.tenderStatus].push(tender);
      return acc;
    },
    {} as Record<TenderDetails["tenderStatus"], TenderDetails[]>
  );
};

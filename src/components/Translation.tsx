"use client";

import { useI18n } from "@/context/I18nContext";
import type { ReactNode } from "react";

type TranslationProps = {
  i18nKey: string;
};

export function Translation({ i18nKey }: TranslationProps) {
  const { t } = useI18n();
  const value = t(i18nKey);

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return <>{value}</>;
  }

  return <>{String(value)}</>;
}

type TranslatedListProps<Item> = {
  i18nKey: string;
  render: (item: Item, index: number) => ReactNode;
};

export function TranslatedList<Item>({ i18nKey, render }: TranslatedListProps<Item>) {
  const { t } = useI18n();
  const value = t(i18nKey);

  if (Array.isArray(value)) {
    return <>{(value as Item[]).map((item, index) => render(item, index))}</>;
  }

  return null;
}

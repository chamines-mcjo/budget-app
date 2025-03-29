export type MoneyFormatOptions = {
  locale: Intl.LocalesArgument;
  displayCurrency?: "symbol" | "narrowSymbol" | "code" | "name";
} & Pick<Intl.NumberFormatOptions, "currency">;

export function moneyFormat(
  value: string | number,
  { locale, currency, displayCurrency }: MoneyFormatOptions = {
    locale: "es-US",
    currency: "USD",
  },
) {
  return new Intl.NumberFormat(locale, {
    style: displayCurrency ? "currency" : "decimal",
    currency,
    currencyDisplay: displayCurrency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(typeof value === "string" ? parseFloat(value) : value);
}

export type RemoveMoneyFormatOptions = {
  locale: Intl.LocalesArgument;
};

export function sanitizeAndFormatMoney(
  value: string,
  options?: MoneyFormatOptions,
): string {
  const numericValue = value.replace(/\D/g, "");

  // Convert to number by treating it as cents
  const amount = numericValue ? Number(numericValue) / 100 : 0;

  return moneyFormat(amount, options);
}

export function sanitizeFormattedMoneyValue(value: string) {
  const numericValue = value.replace(/[^\d.]/g, "");

  return numericValue;
}

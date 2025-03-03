export type MoneyFormatOptions = {
  locale: Intl.LocalesArgument;
  displayCurrency?: "symbol" | "narrowSymbol" | "code" | "name";
} & Pick<Intl.NumberFormatOptions, "currency">;

export function moneyFormat(
  value: string,
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
  }).format(Number(value));
}

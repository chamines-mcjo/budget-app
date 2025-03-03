import { moneyFormat } from "../numbers";

describe("moneyFormat", () => {
  it("formats number as USD currency with symbol", () => {
    const result = moneyFormat("1234.56", {
      locale: "en-US",
      currency: "USD",
      displayCurrency: "symbol",
    });
    expect(result).toBe("$1,234.56");
  });

  it("formats number as USD currency with code", () => {
    const result = moneyFormat("1234.56", {
      locale: "en-US",
      currency: "USD",
      displayCurrency: "code",
    });
    expect(result).toBe("USD 1,234.56");
  });

  it("formats number as USD currency with name", () => {
    const result = moneyFormat("1234.56", {
      locale: "en-US",
      currency: "USD",
      displayCurrency: "name",
    });
    expect(result).toBe("1,234.56 US dollars");
  });

  it("formats number as USD currency with narrow symbol", () => {
    const result = moneyFormat("1234.56", {
      locale: "en-US",
      currency: "USD",
      displayCurrency: "narrowSymbol",
    });
    expect(result).toBe("$1,234.56");
  });

  it("formats number as decimal when displayCurrency is undefined", () => {
    const result = moneyFormat("1234.56", {
      locale: "en-US",
      currency: "USD",
    });
    expect(result).toBe("1,234.56");
  });

  it("formats number as EUR currency with symbol", () => {
    const result = moneyFormat("1234.56", {
      locale: "de-DE",
      currency: "EUR",
      displayCurrency: "symbol",
    });
    expect(result).toBe("1.234,56 €");
  });

  it("formats number as JPY currency with symbol", () => {
    const result = moneyFormat("1234.56", {
      locale: "ja-JP",
      currency: "JPY",
      displayCurrency: "symbol",
    });
    expect(result).toBe("￥1,234.56");
  });

  it("formats number as decimal with different locale", () => {
    const result = moneyFormat("1234.56", {
      locale: "fr-FR",
      currency: "USD",
      displayCurrency: undefined,
    });
    expect(result).toBe("1 234,56");
  });

  it("formats 0 as decimal with default options", () => {
    const result = moneyFormat("0");
    expect(result).toBe("0.00");
  });
});

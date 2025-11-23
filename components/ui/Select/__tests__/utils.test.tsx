import {
  getLabelFromOption,
  defaultRenderValue,
  defaultKeyExtractor,
} from "../utils";
import { render } from "@testing-library/react-native";

describe("getLabelFromOption", () => {
  it("returns the string when option is a string", () => {
    expect(getLabelFromOption("test")).toBe("test");
  });

  it("returns the label property when option has label", () => {
    expect(getLabelFromOption({ label: "Test Label" })).toBe("Test Label");
  });

  it("returns the name property when option has name", () => {
    expect(getLabelFromOption({ name: "Test Name" })).toBe("Test Name");
  });

  it("returns label over name when both exist", () => {
    expect(getLabelFromOption({ label: "Label", name: "Name" })).toBe("Label");
  });

  it("returns stringified value for other types", () => {
    expect(getLabelFromOption(123)).toBe("123");
    expect(getLabelFromOption(true)).toBe("true");
  });

  it("returns stringified value for objects without label or name", () => {
    expect(getLabelFromOption({ value: "test" })).toBe("[object Object]");
  });
});

describe("defaultRenderValue", () => {
  it("renders empty string when value is undefined", () => {
    const { getByText } = render(defaultRenderValue({ value: undefined }));
    expect(getByText("")).toBeTruthy();
  });

  it("renders the label from string value", () => {
    const { getByText } = render(defaultRenderValue({ value: "Test" }));
    expect(getByText("Test")).toBeTruthy();
  });

  it("renders the label from object with label property", () => {
    const { getByText } = render(
      defaultRenderValue({ value: { label: "Test Label" } }),
    );
    expect(getByText("Test Label")).toBeTruthy();
  });
});

describe("defaultKeyExtractor", () => {
  it("returns id when item has id property", () => {
    expect(defaultKeyExtractor({ id: "test-id" }, 0)).toBe("test-id");
  });

  it("returns key when item has key property", () => {
    expect(defaultKeyExtractor({ key: "test-key" }, 0)).toBe("test-key");
  });

  it("returns stringified value when item has value property", () => {
    expect(defaultKeyExtractor({ value: 123 }, 0)).toBe("123");
  });

  it("returns id over key when both exist", () => {
    expect(defaultKeyExtractor({ id: "id-1", key: "key-1" }, 0)).toBe("id-1");
  });

  it("returns index as string when item has no extractable key", () => {
    expect(defaultKeyExtractor({}, 5)).toBe("5");
    expect(defaultKeyExtractor("string", 3)).toBe("3");
  });
});

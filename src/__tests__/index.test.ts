import { describe, expect, test } from "@jest/globals";
import loremIntl from "../index";

describe("loremIntl", () => {
  describe("method: latin", () => {
    test("returns lorem ipsum text", () => {
      const loremIpsum = loremIntl.latin();
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis. Donec molestie massa ante, nec tristique lectus venenatis suscipit. Suspendisse at nulla bibendum, venenatis mi sit amet, dictum dui. Vivamus ante neque, sollicitudin gravida risus eu, pellentesque volutpat tortor."
      );
    });
  });
});

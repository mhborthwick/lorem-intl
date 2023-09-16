import { describe, expect, test } from "@jest/globals";
import loremIntl from "../index";

describe("loremIntl", () => {
  describe("method: latin", () => {
    test("returns short lorem ipsum text", () => {
      const loremIpsum = loremIntl.latin("short");
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      );
    });

    test("returns medium-sized lorem ipsum text", () => {
      const loremIpsum = loremIntl.latin("medium");
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis."
      );
    });

    test("returns long lorem ipsum text", () => {
      const loremIpsum = loremIntl.latin("long");
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis. Donec molestie massa ante, nec tristique lectus venenatis suscipit. Suspendisse at nulla bibendum, venenatis mi sit amet, dictum dui. Vivamus ante neque, sollicitudin gravida risus eu, pellentesque volutpat tortor."
      );
    });

    test("returns medium lorem ipsum text if you do not specify size", () => {
      const loremIpsum = loremIntl.latin();
      expect(loremIpsum).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis."
      );
    });
  });
});

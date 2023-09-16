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

  describe("method: create", () => {
    describe("latin", () => {
      test("returns new instance with default text set to latin and default size set to short", () => {
        const instance = loremIntl.create({
          defaultLanguage: "latin",
          defaultSize: "short",
        });
        expect(instance.text()).toBe(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        );
      });

      test("returns new instance with default text set to latin and default size set to medium", () => {
        const instance = loremIntl.create({
          defaultLanguage: "latin",
          defaultSize: "medium",
        });
        expect(instance.text()).toBe(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis."
        );
      });

      test("returns new instance with default text set to latin and default size set to long", () => {
        const instance = loremIntl.create({
          defaultLanguage: "latin",
          defaultSize: "long",
        });
        expect(instance.text()).toBe(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis. Donec molestie massa ante, nec tristique lectus venenatis suscipit. Suspendisse at nulla bibendum, venenatis mi sit amet, dictum dui. Vivamus ante neque, sollicitudin gravida risus eu, pellentesque volutpat tortor."
        );
      });
    });
  });

  describe("method: text", () => {
    test("returns medium-sized lorem ipsum by default", () => {
      const instance = loremIntl.text();
      expect(instance).toBe(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vestibulum mi, vitae faucibus libero vehicula eu. Fusce in aliquet risus. Suspendisse et venenatis ante, ac interdum magna. Nunc vitae ipsum lacinia, dictum nisl id, posuere turpis."
      );
    });
  });
});

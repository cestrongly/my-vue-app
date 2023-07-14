/*
 * @Author: cest cestrmail@163.com
 * @Date: 2023-07-14 17:02:09
 * @LastEditors: cest cestrmail@163.com
 * @LastEditTime: 2023-07-14 17:02:44
 * @FilePath: /my-vue-app/src/utils/RouterScroller/types.ts
 * @Description: 介绍文件的作用、文件的入参、出参。
 */
import type {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";

export type Awaitable<T> = T | Promise<T>;

/**
 * Scroll position similar to
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions | `ScrollToOptions`}.
 * Note that not all browsers support `behavior`.
 */
export interface ScrollPositionCoordinates {
  behavior?: ScrollOptions["behavior"];
  left?: number;
  top?: number;
}

export type NavigationType = "push" | "history";

export type ScrollPositionCoordinatesGroup = Record<
  string,
  ScrollPositionCoordinates
>;

export interface RouterScrollHandlerContext {
  to: RouteLocationNormalized;
  from: RouteLocationNormalizedLoaded;
  element: Element | Window;
  selector: string;
  type: NavigationType;
  savedPosition: ScrollPositionCoordinates | undefined;
}

export interface RouterScrollHandler {
  (context: RouterScrollHandlerContext): Awaitable<
    ScrollPositionCoordinates | boolean | void
  >;
}

export interface RouterScrollBehaviorOptions {
  selectors: Record<string, boolean | RouterScrollHandler>;
  /**
   * Default scroll behavior applied, when not specified in the handler
   */
  behavior?: ScrollOptions["behavior"];
}

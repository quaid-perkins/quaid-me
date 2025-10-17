// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

const app: HTMLElement | null = document.getElementById("app");
if (app) {
  mount(() => <StartClient />, app);
}

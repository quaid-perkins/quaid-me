import { GithubIcon } from "lucide-solid";
import type { Component } from "solid-js";
import { Button } from "@/components/ui/button";

const Footer: Component = () => {
  return (
    <footer class="mt-auto flex w-full justify-between p-4 text-xs text-zinc-700 sm:text-sm dark:text-zinc-300">
      {"Quaid Perkins © All Rights Reserved"}
      <div class="flex gap-2">
        <Button
          as="a"
          href="https://github.com/quaid-perkins/quaid-me"
          target="_blank"
          variant="clear"
          class="size-4"
        >
          <GithubIcon />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;

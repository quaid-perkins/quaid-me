import { usePrefersDark } from "@solid-primitives/media";
import { A } from "@solidjs/router";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-solid";
import {
  type Accessor,
  type Component,
  createEffect,
  type JSX,
  Match,
  type Setter,
  Switch,
} from "solid-js";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import createLocalStorage from "@/hooks/createLocalStorage";
import useSizeBreakpoints from "@/hooks/useScreenBreakpoints";

const _navLinks = [] as const;

const NavBar: Component = () => {
  const sizes = useSizeBreakpoints();
  const [theme, setTheme] = createLocalStorage("theme", "system");
  const prefersDark = usePrefersDark();

  createEffect(() => {
    document.documentElement.dataset.theme = theme();
  });

  const themeButton = () => (
    <ThemeButton theme={theme} setTheme={setTheme} prefersDark={prefersDark} />
  );

  return (
    <header>
      <nav class="flex justify-between p-4">
        <Button as={A} href="/" variant="link" class="px-2 text-base">
          {"<Quaid />"}
        </Button>
        <Switch fallback={<MobileLinksDrawer themeButton={themeButton()} />}>
          <Match when={sizes.sm}>
            <DesktopLinks themeButton={themeButton()} />
          </Match>
        </Switch>
      </nav>
    </header>
  );
};

export default NavBar;

type ThemeButtonProps = {
  theme: Accessor<string>;
  setTheme: Setter<string>;
  prefersDark: Accessor<boolean>;
};

const ThemeButton: Component<ThemeButtonProps> = (props) => {
  return (
    <Switch>
      <Match
        when={
          props.theme() === "light" ||
          (props.theme() === "system" && !props.prefersDark())
        }
      >
        <Button size="icon" on:click={() => props.setTheme("dark")}>
          <MoonIcon />
        </Button>
      </Match>
      <Match
        when={
          props.theme() === "dark" ||
          (props.theme() === "system" && props.prefersDark())
        }
      >
        <Button size="icon" on:click={() => props.setTheme("light")}>
          <SunIcon />
        </Button>
      </Match>
    </Switch>
  );
};

type LinksContainerProps = {
  themeButton: JSX.Element;
};

const DesktopLinks: Component<LinksContainerProps> = (props) => {
  return (
    <div class="flex gap-4">
      <div class="flex gap-2">{/* for loop over 'navLinks' */}</div>
      {props.themeButton}
    </div>
  );
};

const MobileLinksDrawer: Component<LinksContainerProps> = (props) => {
  return (
    <Drawer side="right">
      <DrawerTrigger<typeof Button>
        as={(props) => (
          <Button size="icon" {...props}>
            <MenuIcon />
          </Button>
        )}
      />
      <DrawerPortal>
        <DrawerContent>
          <DrawerHeader class="flex flex-row justify-between">
            {props.themeButton}
            <DrawerClose<typeof Button>
              as={(props) => (
                <Button {...props} size="icon">
                  <XIcon />
                </Button>
              )}
            />
          </DrawerHeader>
          <div class="flex flex-col p-4">{/* for loop over 'navLinks' */}</div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

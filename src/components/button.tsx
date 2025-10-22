import { Root as ButtonPrimitive } from "@kobalte/core/button";
import type { VariantProps } from "cva";
import type { ComponentProps, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import { cva } from "@/libs/cva";

export const buttonVariants = cva({
  base: "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-purple-800/75 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-900 aria-invalid:ring-red-600/20 dark:aria-invalid:ring-red-900/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "bg-zinc-100 text-zinc-950 shadow-xs hover:bg-zinc-100/70 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
      primary: "bg-purple-800 text-zinc-50 shadow-xs hover:bg-purple-800/80",
      destructive:
        "bg-red-600 text-zinc-50 shadow-xs hover:bg-red-600/80 focus-visible:ring-red-600/50 dark:bg-red-900 dark:focus-visible:ring-red-900/75 dark:hover:bg-red-900/90",
      outline:
        "border border-zinc-300 bg-zinc-100 text-zinc-950 shadow-xs hover:bg-zinc-100/70 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
      ghost:
        "text-zinc-950 hover:bg-zinc-100/90 hover:shadow-xs dark:text-zinc-50 dark:hover:bg-zinc-800/90",
      link: "text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonProps<T extends ValidComponent = "button"> = ComponentProps<
  typeof ButtonPrimitive<T>
> &
  VariantProps<typeof buttonVariants>;

export const Button = <T extends ValidComponent = "button">(
  props: ButtonProps<T>,
) => {
  const [, rest] = splitProps(props as ButtonProps, [
    "class",
    "variant",
    "size",
  ]);

  return (
    <ButtonPrimitive
      data-slot="button"
      class={buttonVariants({
        variant: props.variant,
        size: props.size,
        class: props.class,
      })}
      {...rest}
    />
  );
};

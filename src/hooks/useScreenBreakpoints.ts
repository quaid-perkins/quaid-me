import { createBreakpoints, type Matches } from "@solid-primitives/media";

/*
	screen size breakpoints (mobile first design)
	marked as true when the screen size is equal to or greater than the given pixel size
	values match tailwindcss - https://tailwindcss.com/docs/responsive-design
*/
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

// universal screen size breakpoints hook for device dependent components
const useSizeBreakpoints = (): Matches<typeof breakpoints> =>
  createBreakpoints(breakpoints);

export default useSizeBreakpoints;

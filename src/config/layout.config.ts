// Taskbar height in pixels. Keep in sync with the `h-[…px]` class on
// Taskbar.tsx and the `bottom-[…px]` class on StartMenu.tsx. Tailwind's
// arbitrary values must be static strings, so those can't read this constant
// directly, only the plain JS math in Window.tsx does.
export const TASKBAR_HEIGHT_PX = 30

/**
 * Inline replacements for the Material Symbols glyphs used in the design, so
 * the page carries no icon-font dependency.
 */

const PATHS = {
  person:
    'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-8 1.7-8 4v2h16v-2c0-2.3-4.7-4-8-4Z',
  expand_more: 'M12 15.4 5.6 9l1.4-1.4 5 5 5-5L18.4 9 12 15.4Z',
  chevron_right: 'M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6Z',
  share:
    'M18 22a3 3 0 0 1-2.2-5.05l-7.05-4.1a3 3 0 1 1 0-3.7l7.05-4.1A3 3 0 1 1 17 7.2L9.95 11.3a3 3 0 0 1 0 1.4L17 16.8c.3-.5 .9-.8 1-.8a3 3 0 0 1 0 6Z',
  public:
    'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm-1-2.07V18a2 2 0 0 1-2-2v-1l-4.79-4.79A8 8 0 0 0 11 19.93ZM17.9 17.4A2 2 0 0 0 16 16h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.42a8 8 0 0 1 2.9 12.82Z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 7 8-5H4l8 5Zm0 2L4 8v10h16V8l-8 5Z',
}

export default function Icon({ name, size = 20, className }) {
  const path = PATHS[name]
  if (!path) return null

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  )
}

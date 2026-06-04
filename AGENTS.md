<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may
all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation
notices.

<!-- END:nextjs-agent-rules -->

## Project skills

This repository ships skills under `.claude/skills/`. Any agent (Claude Code,
GitHub Copilot, Cursor, Codex, etc.) working on this codebase MUST read the
relevant skill before editing.

| Skill          | Path                                                                         | When to read                                                                                          |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `senior-ui-ux` | [.claude/skills/senior-ui-ux/SKILL.md](.claude/skills/senior-ui-ux/SKILL.md) | Before any visual, interaction, layout, motion, or UX decision; design critique; trend application.   |
| `snap-pro-ui`  | [.claude/skills/snap-pro-ui/SKILL.md](.claude/skills/snap-pro-ui/SKILL.md)   | Before editing any component, adding a section, applying animations, or producing image/video assets. |

Skill files are the authoritative source for design tokens, animation utilities,
component conventions, asset specs, accessibility rules, and implementation
discipline. They override defaults from training data.

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

## Approval-gated commits

Agents **never commit on their own**. After completing a task, wait for the user
to reply with the literal word `approved` (case-insensitive). On that trigger:

1. `git add -A`
2. Write a **short Conventional Commit** that summarises what just shipped
   (`feat(scope): …`, `fix(nav): …`, etc. — imperative, ≤ 72 chars).
3. `git push origin <current-branch>`.
4. Reply with the commit SHA + one-sentence recap.

Phrases like "looks good", "ship it", or "go ahead" are **not** triggers — only
`approved` counts. Never push a red lint/build. No emoji or "Co-Authored-By"
footers. Full rules: §10 of
[.claude/skills/snap-pro-ui/SKILL.md](.claude/skills/snap-pro-ui/SKILL.md).

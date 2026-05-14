---
name: create-skill
description: Guide the creation of a new custom skill prompt file (SKILL.md) from conversation context and workspace conventions.
---

Use this skill when the user asks to create or save a reusable custom skill prompt file for the repository.

Focus on:
- Identifying the underlying workflow, pattern, or task from the conversation.
- Choosing a clear skill name and an appropriate file location based on repo conventions.
- Drafting a YAML frontmatter and skill body that explain when the skill should be used, what it does, and how to use it.
- Keeping instructions actionable, specific, and easy to follow.

Steps:
1. Review the conversation and repository for an existing multi-step workflow or repeatable methodology.
2. If there is a clear workflow, generalize it into a reusable skill with step-by-step guidance.
3. If the workflow is not clear, ask the user these clarifying questions:
   - What outcome should this skill produce?
   - Should the skill be workspace-scoped or personal?
   - What exact problem or task should the skill solve?
4. Decide on a file path for the skill. In this repo, prefer `.github/prompts/skills/<skill-name>.SKILL.md` when available.
5. Draft the skill content:
   - Short name and description in frontmatter.
   - Clear use cases, success criteria, and any decision points.
   - Example prompts or sample inputs if helpful.
6. Save the skill and summarize the result for the user.

Quality criteria:
- The skill must be easy to invoke and clearly scoped.
- It must include concrete completion checks or expected outputs.
- It should avoid vague or overly broad instructions.
- It should align with existing repository conventions and naming.

If you are unsure about naming or location, ask the user before saving.

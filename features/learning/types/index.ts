/**
 * Domain types for the Learning Center.
 *
 * Designed for thousands of records. Every type is a pure data contract —
 * no UI concerns leak in. The service layer maps backend rows (Firebase /
 * Supabase / REST / GraphQL) to these types so consumers stay stable when
 * the backend swaps.
 */

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type ContentKind =
  | "tutorial"
  | "guide"
  | "workflow"
  | "playbook"
  | "course";

export type ResourceKind =
  | "pdf"
  | "template"
  | "checklist"
  | "playbook"
  | "preset";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatarUrl?: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  durationSec: number;
  videoUrl?: string;
  captionsUrl?: string;
  /** Chapter markers in seconds, for scrubber + table of contents. */
  chapters?: { title: string; startSec: number }[];
  resourceIds?: string[];
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  /** Short marketing copy for cards. */
  blurb: string;
  /** Long-form description for detail pages. */
  description?: string;
  kind: ContentKind;
  difficulty: Difficulty;
  durationMin: number;
  categoryId: TutorialCategoryId;
  /** Tools the user will learn or use during this tutorial. */
  toolIds: string[];
  thumbnailUrl: string;
  /** Optional video preview URL for hover state. */
  previewVideoUrl?: string;
  instructor: Instructor;
  updatedAt: string; // ISO date
  learningObjectives: string[];
  lessons: VideoLesson[];
  resourceIds: string[];
  relatedTutorialIds: string[];
  /** Marketing-only flag; does not gate access. */
  isFeatured?: boolean;
  /** Soft-launch flag — render with a "Coming soon" pill. */
  isComingSoon?: boolean;
}

export type TutorialCategoryId =
  | "getting-started"
  | "background-tools"
  | "product-photography"
  | "ai-enhancement"
  | "real-estate"
  | "fashion-apparel"
  | "furniture-decor"
  | "automotive"
  | "marketing"
  | "team-collaboration"
  | "billing-credits";

export interface TutorialCategory {
  id: TutorialCategoryId;
  name: string;
  description: string;
  /** Stable mono eyebrow label (e.g. "01 · Foundations"). */
  eyebrow: string;
  /** Lucide-style icon glyph identifier or SVG path id. */
  iconKey: string;
  /** Aggregated counts; computed by the service. */
  tutorialCount: number;
  totalDurationMin: number;
  /** Order in which categories should be presented. */
  order: number;
}

export interface LearningPath {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  audience: string;
  outcomes: string[];
  difficulty: Difficulty;
  estimatedHours: number;
  tutorialIds: string[];
  /** Visual accent token — must resolve to an existing CSS variable. */
  accentToken: "blue" | "silver" | "cyan" | "amber" | "violet";
  isFeatured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  blurb: string;
  pathId: string;
  /** Tutorials required for the assessment. */
  requiredTutorialIds: string[];
  /** Number of questions in the assessment. */
  assessmentQuestions: number;
  passingScore: number;
  /** Future-ready: the cert program may be inactive at launch. */
  isAvailable: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  kind: ResourceKind;
  fileUrl?: string;
  fileSizeKb?: number;
  thumbnailUrl?: string;
  tags: string[];
  /** Tutorials that reference this resource. */
  tutorialIds: string[];
  isPremium?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  /** Optional category for grouping. */
  topic?: string;
}

export interface LearningStats {
  totalTutorials: number;
  totalToolsCovered: number;
  totalLearningPaths: number;
  totalBeginnerGuides: number;
  totalAdvancedGuides: number;
  totalLearningHours: number;
}

export interface LearningProgress {
  /** Tutorials with at least one watched second. */
  startedTutorialIds: string[];
  /** Tutorials marked complete (≥ 95% watched). */
  completedTutorialIds: string[];
  /** Saved-for-later tutorials. */
  savedTutorialIds: string[];
  /** Map of tutorialId → 0..1 completion ratio. */
  ratioByTutorial: Record<string, number>;
  /** Most recently watched tutorial id, used for "Continue learning". */
  lastTutorialId?: string;
  /** Total minutes watched across all tutorials. */
  totalMinutesWatched: number;
  /** Daily streak in days. */
  streakDays: number;
  /** Earned badge ids. */
  badgeIds: string[];
}

export interface UserLearningProfile {
  userId: string;
  displayName?: string;
  level: "explorer" | "practitioner" | "specialist" | "expert";
  progress: LearningProgress;
  preferredDifficulty?: Difficulty;
  /** Categories the user has shown interest in (telemetry-driven). */
  interestCategoryIds: TutorialCategoryId[];
}

export interface SearchHit {
  kind: "tutorial" | "category" | "path" | "resource" | "faq";
  id: string;
  title: string;
  blurb: string;
  href: string;
}

export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

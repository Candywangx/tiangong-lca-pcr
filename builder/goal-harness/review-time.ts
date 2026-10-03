import { GoalHarnessError } from './errors.ts';

/** Finite per-call budget within the caller-owned review execution window. */
export function reviewTimeRemaining(deadline = Infinity, {
  now = Date.now, phase = 'harvest', subjectId,
}: {now?: () => number; phase?: string; subjectId?: string | undefined} = {}): number {
  const remaining = Math.min(30_000, Math.ceil(deadline - now()));
  if (!(remaining > 0)) throw new GoalHarnessError('GOAL_REVIEW_WINDOW_EXHAUSTED', 'The current review execution window is exhausted.', {
    phase, origin: 'harness_deadline', failure_kind: 'execution_window', retryable: false, subject_id: subjectId,
  });
  return remaining;
}

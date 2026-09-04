export class GoalHarnessError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "GoalHarnessError";
    this.code = code;
    this.details = details;
  }
}

export function asGoalHarnessError(error, fallbackCode = "GOAL_INTERNAL_ERROR") {
  if (error instanceof GoalHarnessError) {
    return error;
  }
  return new GoalHarnessError(fallbackCode, error?.message ?? String(error), {
    cause: error?.name ?? typeof error,
  });
}

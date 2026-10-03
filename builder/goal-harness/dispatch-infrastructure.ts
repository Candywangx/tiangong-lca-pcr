import type { GoalTools, UnknownRecord } from "./domain.ts";
import { GoalHarnessError } from "./errors.ts";
import { authenticatedHybridSearchDryRunCheck } from "./tooling.ts";

export function assertAuthorDispatchInfrastructure(config: { tools?: GoalTools }, checker: (options: Parameters<typeof authenticatedHybridSearchDryRunCheck>[0]) => { ok: boolean; detail: UnknownRecord } = authenticatedHybridSearchDryRunCheck) {
  const check = checker({
    tiangongCliRoot: config.tools?.tiangong_cli_root,
    flowHybridSearchRoot: config.tools?.flow_hybrid_search_root,
    credentialsEnvFile: config.tools?.credentials_env_file ?? null,
  });
  if (!check.ok) {
    throw new GoalHarnessError("GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED", "Authenticated hybrid search and public state_code=100 read must pass before author dispatch.", check.detail);
  }
  return check;
}

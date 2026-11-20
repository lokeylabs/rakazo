/** Opt-in: the deployment runs one workspace model; users cannot pick or change models. */
export function modelLockEnabled(source: NodeJS.ProcessEnv = process.env): boolean {
  return /^(1|true|yes)$/i.test(source.RAKAZO_MODEL_LOCK?.trim() ?? "");
}
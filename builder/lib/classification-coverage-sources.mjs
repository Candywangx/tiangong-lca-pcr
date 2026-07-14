export const CPC_3_COVERAGE_PATH = "classifications/indexes/cpc-3.0-coverage.json";
export const CPC_3_LEAVES_PATH = "classifications/systems/cpc/3.0/normalized/leaves.json";
export const CPC_3_MAPPING_PATH = "classifications/mappings/cpc-3.0-to-pcr.yaml";

export const COVERAGE_SOURCE_DESCRIPTORS = Object.freeze([
  Object.freeze({
    classificationSystem: "cpc",
    classificationVersion: "3.0",
    normalizedLeavesPath: CPC_3_LEAVES_PATH,
    mappingPath: CPC_3_MAPPING_PATH,
    coveragePath: CPC_3_COVERAGE_PATH,
  }),
]);

export function findCoverageSourceDescriptor(classificationSystem, classificationVersion) {
  const normalizedSystem = String(classificationSystem).trim().toLowerCase();
  const normalizedVersion = String(classificationVersion).trim();
  return COVERAGE_SOURCE_DESCRIPTORS.find(
    (descriptor) => descriptor.classificationSystem === normalizedSystem
      && descriptor.classificationVersion === normalizedVersion,
  ) ?? null;
}

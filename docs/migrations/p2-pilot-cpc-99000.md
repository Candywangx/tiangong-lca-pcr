---
title: Phase 3 Physical Migration Pilot for CPC 99000
docType: migration-record
scope: repo
status: completed
authoritative: true
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when auditing the first physical empty-scaffold removal
  - when planning or reviewing later legacy scaffold migration batches
  - when restoring the CPC 99000 compatibility directory
whenToUpdate:
  - if the CPC 99000 alias or coverage coordinate changes
  - if this pilot is rolled back
checkPaths:
  - docs/migrations/p2-pilot-cpc-99000.md
  - docs/migrations/p2-classification-coverage-migration.md
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - classifications/systems/cpc/3.0/normalized/leaf-slugs.json
  - library/indexes/pcr-index.yaml
  - packages/pcr-core/src/pcr-id-aliases.mjs
  - packages/tiangong-pcr-cli/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 41e00bafd03530af7871e4620e59862dd779473e
---

# Phase 3 物理迁移试点：CPC 99000

## 结果

已删除 CPC 3.0 `99000` 对应的一个 legacy empty-scaffold PCR 目录，同时保留完整 classification coverage
和旧 ID 的确定性 redirect。这是 Phase 3 的第一个单叶、完整子域试点；CPC `98000` 尚未迁移，批量迁移
也尚未开始。

删除的目录：

`library/pcrs/community-social-and-personal-services/services-provided-by-extraterritorial-organizations-and-bodies/services-provided-by-extraterritorial-organizations-and-bodies`

旧 ID：

`pcr.community-social-and-personal-services.services-provided-by-extraterritorial-organizations-and-bodies.services-provided-by-extraterritorial-organizations-and-bodies`

## 删除前审核

- manifest 是 `status: scaffold` 与 `content_maturity: empty_scaffold`；
- 目录只有契约规定的四个文件，没有 review、release、revision 或额外手工 artifact；
- Git 历史只有初始 semantic-slug scaffold 和 locale filename alignment，没有后续方法学增量；
- 仓库搜索未发现 alias registry、normalized leaf identity inventory 以外的旧 ID 或旧路径引用；
- 当前模板已演进，因此本试点没有用“与今天的模板逐字节相等”代替审核，而是记录并验证实际历史
  scaffold 的四文件 hash 和完整目录 tree digest；
- 删除前 `resolve --pcr <old-id>` 已返回 coverage locator，证明 alias-first 不依赖物理目录缺失；
- 删除前 `resolve --classification cpc:3.0:99000` 已返回正常的 known-unmapped 结果，且
  `mapping: null`、`pcr: null`。

### 删除对象的审计指纹

| Artifact | SHA-256 |
| --- | --- |
| `manifest.yaml` | `cdad791eca72b4a7da3623241c8502b7ac1d74edbb2d4835cbb53dcd2f03bbbc` |
| `pcr.en-US.md` | `8d77f685ce1ea01f2715ee3dbbed7788efcd6a5b5209b6dadf787011926b6b75` |
| `pcr.zh-CN.md` | `955e0f90675a34ead454c10400582246184f05784b58de01baa9939c87d702bb` |
| `structured.yaml` | `a2bd4dd97e65d6b6d85b056cd55a3f721cee743752b46f50b429d5ef76430ef9` |
| Four-file directory tree | `3aee043e61588992d79fc646079caaf3992708d1e97c5ad9cefe42af4f5be071` |

目录 tree digest 使用 builder directory transaction 的稳定相对路径、mode 和 exact-byte hashing 规则。

## 迁移动作

只删除上述四文件目录和删除后为空的 subdomain 目录。以下 authoring/read-model truth 没有因物理删除而
改写：

- normalized CPC leaf 与 leaf-derived identity inventory；
- accepted-only mapping v2；
- 2,874 条 legacy alias registry；
- CPC 3.0 coverage 的 2,877 个 entries；
- 三个 material PCR 及其 Markdown、structured projection 和 fingerprints。

Legacy importer 的 `--legacy-scaffolds` 在 mapping v2/current 下会于 mutation 前 fail closed，因此不能把
该目录重新生成回来。

## 删除后验收

| Invariant | 结果 |
| --- | ---: |
| PCR 四文件目录 | 2,876 |
| Material PCR | 3 |
| 仍存 legacy empty-scaffold 目录 | 2,873 |
| Legacy aliases | 2,874 |
| Accepted CPC 3.0 mappings | 3 |
| CPC coverage total / mapped / unmapped / unknown | 2,877 / 3 / 2,874 / 0 |

行为验收：

- `resolve --classification cpc:3.0:99000` 仍成功返回 `resolution_status: unmapped`、`mapping: null`、
  `pcr: null`；
- `resolve --pcr <old-id>` 在目录删除后仍成功返回 `resolution_status: legacy_id_redirect`，target 为
  `cpc:3.0:99000`，且只给出显式下一命令；
- `show`、guidance 和 validation 对旧 ID 返回稳定 `PCR_LEGACY_ID_REDIRECT`，而不是普通 not-found；
- `npm run aliases:check`、`npm run catalog:build` 与 `npm run catalog:check` 通过；
- alias、mapping、coverage、material index 和 catalog 在删除前后 exact bytes 不变。

### 保持不变的 read-model 指纹

| Artifact | SHA-256 |
| --- | --- |
| `classifications/mappings/cpc-3.0-to-pcr.yaml` | `92c936144d37a81f77b3733bf4416bd7d653cba580535b6c19e78284afcb983b` |
| `classifications/indexes/cpc-3.0-coverage.json` | `1a503227a72fa4e42c9a903741f6441535f36cf278cf05f94f8b445324be4476` |
| `library/indexes/pcr-index.yaml` | `3f4975d23344c284a15e9d6681911c2db6ebe77d35ba1b7253feaacd2b1b012d` |
| `classifications/aliases/pcr-id-aliases.yaml` | `2340b395cbe89678a542937fc0463f92438c7c12dd2e9ccd8c57d3d32b4f9f49` |
| `library/catalog.yaml` | `0011b81c1bb30c85c3dddd3be7c2ffd12cbf0ced603b0af325bdc9f9c6a6ecb5` |

### 保持不变的 material PCR tree digest

| CPC | Directory tree digest |
| --- | --- |
| `01111` | `9432aefe6bf9caf764ebd925f524d8351db7a3b259518cbdf4c2a0a2d264f972` |
| `04412` | `dc56343bfc74ffdd89cf3709fc3ddb9f620aa3b767b5daafb5d7af8cf57f4e89` |
| `04911` | `b6fa995791707c19d4eb43063cd112b1e0500d1ce77f245854429d50929b8de5` |

## 回滚

如果需要只回滚物理试点，从包含该目录的最后一个版本按上述路径恢复四个文件，并重新核对本记录中的
四文件 SHA-256 与 tree digest。Alias、accepted mapping 和 coverage 不需要回退；恢复后的目录仍是 legacy
compatibility source，alias-first 行为保持不变。

如果需要回滚整个 Phase 2/3 交付，应整体 revert 对应提交，不能只恢复旧 mapping 的 2,874 条 scaffold
edge，因为那会重新制造未经接受的 positive mapping。

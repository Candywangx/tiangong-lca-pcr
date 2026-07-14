---
title: P2 Classification Coverage Migration Plan
docType: plan
scope: repo
status: active
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when implementing P2 classification coverage separation
  - when migrating or deleting legacy empty scaffold PCR directories
whenToUpdate:
  - after each P2 migration phase or pilot
  - when inventory counts or compatibility rules change
checkPaths:
  - docs/migrations/p2-classification-coverage-migration.md
  - docs/adr/0001-separate-classification-coverage-from-pcr-catalog.md
  - classifications/**
  - library/indexes/**
  - library/pcrs/**
  - builder/**
  - packages/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: c248880a854c1687567f3e4ea6c24e0dd78115ab
---

# P2 Classification Coverage 迁移计划

## 固化基线

2026-07-14 的可复现 inventory：

| 项目 | 数量 |
| --- | ---: |
| PCR manifest / 四文件目录 | 2,877 |
| `candidate / authored_methodology` | 3 |
| `scaffold / empty_scaffold` | 2,874 |
| CPC 3.0 hierarchy nodes | 4,586 |
| CPC 3.0 normalized leaves | 2,877 |
| CPC 3.0 mappings / unique targets | 2,877 / 2,877 |
| mapping 到 material / empty scaffold | 3 / 2,874 |
| dangling mapping | 0 |
| legacy scaffold tracked files | 11,496 |

三个 material coordinate 是 CPC 3.0 `01111`、`04412` 和 `04911`。迁移不得改变其 PCR id、Markdown、structured projection 或 fingerprint。

## Phase 1：Additive read models 与 material-first

状态：已完成。

- 实现确定性的 material PCR index；
- 生成完整 CPC 3.0 coverage index，目标计数为 `mapped: 3`、`unmapped: 2874`、`unknown: 0`；
- catalog、CLI 和 viewer 显式区分 material、legacy 与 all scope；
- 默认 list/tree/viewer 只加载 material；
- coverage summary/list 保留全部 2,877 个 leaf 的可查询性；
- resolve 对现有 material mapping 保持兼容，对 legacy scaffold 明确标记 compatibility 与 unmapped coverage；
- 不删除目录，不修改旧 PCR id，不收缩现有 mapping。

Phase 1 已交付：

- `library/indexes/pcr-index.yaml` 是确定性 material index，当前为 3 条；
- `classifications/indexes/cpc-3.0-coverage.json` 完整覆盖 2,877 个 leaf，计数为
  `mapped: 3`、`unmapped: 2874`、`unknown: 0`；
- `npm run catalog:check` 已进入统一 lint，拒绝 stale artifact、dangling/conflicting mapping、错层 manifest
  和 coverage/material 交叉引用漂移；
- public CLI 的 `tree`/`list` 默认 material，`coverage summary|list` 独立且分页，exact resolve 显式区分
  `mapped`、`legacy_scaffold_compatibility` 和 known-unmapped；
- viewer data contract 升级为 v3，默认只包含 3 条 material methodology，并按 system/version 输出轻量
  `classification_coverage_summaries`，不再内联 coverage entries、2,874 条 empty scaffold 的 Markdown
  或 guidance error；
- coverage source descriptor 固定 generator/contract 版本及 normalized leaves、mapping 两份输入的
  exact-byte SHA-256；catalog check 与 runtime read 都会拒绝 stale 或被替换的输入；
- core API 默认 scope 仍为 `all` 以保留库级兼容，CLI/viewer 在边界处显式选择 `material`。

Phase 1 验收：

- material index 与实际 material manifest 集合一致；
- coverage entries 为 2,877，code 唯一，summary 精确；
- 默认 material catalog 为 3，显式 all scope 仍为 2,877；
- viewer 默认不含 `empty_scaffold` 或 scaffold `guidance_error`；
- 旧 classification resolve 与旧 scaffold id 仍有确定性结果；
- `npm run validate` 通过。

## Phase 2：停止再生成并准备 alias

状态：进行中。仅步骤 1 importer cutover 已完成；步骤 2-5 以及后续物理迁移均待实现。

1. 已完成：canonical `import-cpc` 每次必须显式传入 `--source`。默认 classification-only，只生成 raw
   source、source metadata 和 normalized classification artifacts；mapping 缺失时创建 zero-edge mapping，
   已存在时先验证并逐字节保留，创建 0 个 PCR。非 3.0 版本必须先注册 coverage descriptor。Importer
   以 system/version coordinate lock、no-follow read、baseline CAS 和逐文件/完整目录 staged install 协调变更，
   mapping 最后提交；partial failure 不会产生 dangling new edge，先安装的 classification projection 可在下次
   重跑时确定性再生成。

   受保护的 `scaffold-cpc` alias 必须显式使用 `--legacy-scaffolds`，仅用于迁移复现或测试，不能用于新
   import。该模式只为 unmapped leaf append legacy edge 和 identity；目标不存在时可创建完整四文件 legacy
   scaffold，目标存在时必须四文件齐全且与确定性 legacy template 逐字节一致，否则 fail closed。它不能
   修复 partial directory、覆盖 accepted edge 或改写 PCR 内容。
2. 待实现：为 positive edge 建立显式 acceptance contract 和审核 workflow。
3. 待实现：positive mapping 只保留指向 material PCR 的 accepted edge；其余 leaf 状态由 coverage
   assessment 表达。
4. 待实现：为 2,874 个旧 id 生成 alias inventory，target kind 为 `classification_coverage`，并校验
   collision、chain 和 cycle。
5. 待实现：resolve 优先读取 accepted positive mapping；无 mapping 的已知 leaf 返回 `unmapped`，旧 id
   返回 coverage redirect。

迁移全程只有显式 create workflow 可以创建 canonical PCR；classification leaf 本身不是创建请求。

本阶段完成前禁止删除任何 legacy scaffold。

## Phase 3：小规模物理 pilot

状态：待实现。

首选 pilot 是零 material、单 leaf 的完整分类子域：

- CPC `98000` Domestic services；
- CPC `99000` Services provided by extraterritorial organizations and bodies。

每个 pilot 必须先证明目录仍与标准 scaffold 模板等价，没有手工内容、review metadata 或外部 repo 引用。删除后必须验证：

- classification code 返回 `unmapped` coverage；
- 旧 PCR id 返回 coverage redirect，而不是普通 not-found；
- material catalog、mapping 和三个 material fingerprint 不变；
- 全仓校验通过。

每个 pilot 独立提交，以便完整回滚四文件目录、mapping inventory 和 alias 状态。

## Phase 4：按子域批量迁移

状态：待实现。

- 只迁移模板等价的 `scaffold / empty_scaffold`；
- 每批选择完整 subdomain，避免留下难以解释的半迁移分类树；
- 每批记录 count、path inventory 和 checksum；
- 任何 material、手工增量、identity 冲突或未知状态都自动退出批处理；
- 每批后重新生成 coverage/index 并运行完整验证。

## Phase 5：完成切换

状态：待实现。

- empty scaffold PCR 目录归零；
- classification import 因新增 leaf 创建的 PCR record 数为零；
- canonical catalog 数量只反映真实方法学实体；
- classification coverage 仍达到 normalized leaves 的 100%；
- legacy alias 保留到完成外部 consumer 审计，不设置未经证据支持的自动到期日；
- viewer coverage 数据按需加载，不再内联分类树和空 Markdown。

## 回滚条件

出现以下任一情况立即停止当前批次并回滚：

- material PCR 数量、内容或 fingerprint 变化；
- coverage entry 不再与 normalized leaf 一一对应；
- `unknown` 非零；
- mapping target 不存在或指向 empty scaffold；
- legacy id 返回普通 not-found；
- alias 冲突、成链或成环；
- JSON output scope/completeness 与实际数据不符；
- `npm run validate` 失败。

旧 PCR id 永不分配给无关的新 PCR。Candidate suggestion 永不自动提升为 mapping；必须经过 identity、范围和方法学审核。

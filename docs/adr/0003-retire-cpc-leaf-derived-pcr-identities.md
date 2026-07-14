---
title: Retire CPC Leaf-Derived PCR Identities
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when generating or validating the legacy PCR id alias registry
  - when resolving an old CPC leaf-derived PCR id
  - when removing a legacy empty-scaffold PCR directory
whenToUpdate:
  - when an alias target changes
  - when another classification-derived PCR identity family is retired
  - when the compatibility redirect contract changes
checkPaths:
  - docs/adr/0003-retire-cpc-leaf-derived-pcr-identities.md
  - classifications/aliases/**
  - classifications/systems/cpc/3.0/normalized/leaf-slugs.json
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - packages/pcr-core/src/pcr-id-aliases.mjs
  - packages/tiangong-pcr-cli/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 41e00bafd03530af7871e4620e59862dd779473e
---

# ADR 0003：退役由 CPC leaf 派生的 PCR identity

## 决策

将未被接受为 canonical material PCR 的 CPC 3.0 leaf-derived PCR id 登记为 legacy alias，而不再把它们
视为 canonical PCR identity。初始 inventory 包含 2,874 条 alias；每条记录同时保存旧 id、旧目录、终点
locator、退役原因和本决策引用。

当前 2,874 条 alias 的终点均为对应的 `classification_coverage` coordinate。它们只回答“这个旧名字原来
来自哪个分类 leaf”，不会自动把该 leaf 解析成 PCR，也不会把第一个候选方法学当成 canonical target。

三个已经明确接受的 material PCR（CPC `01111`、`04412`、`04911`）继续保留原 canonical id，不进入
alias registry。未来如果一个旧 id 被明确替换为另一个 material PCR，可以使用 `canonical_pcr` 终点，但
必须有独立审核决定，且 target 必须是 material、不能是另一个 alias source。

## 稳定约束

- alias source id 必须与 `source_pcr_path` 的三段语义路径完全一致；
- source id 全局唯一，不能与 material PCR identity 冲突；
- `classification_coverage` 终点必须对应 normalized leaves 中恰好一个 leaf；
- `canonical_pcr` 终点必须对应恰好一个 material PCR；
- alias 必须是终点路由，禁止 self redirect、chain 和 cycle；
- `decision_ref` 必须指向仓库内可读取的审核记录；
- registry 在旧空目录尚未删除时就优先生效，使消费者能先迁移到 redirect contract；
- 删除旧目录后，同一旧 id 仍返回相同 redirect，而不是退化为普通 not-found。

## 消费行为

`resolve --pcr <old-id>` 返回 locator 和可复制的下一条命令。Coverage locator 的下一步是按精确
classification coordinate 查询；它不会隐式跟随到 PCR。`show`、`guidance` 和 validation 等需要真实 PCR
内容的命令遇到旧 id 时，返回稳定的 `PCR_LEGACY_ID_REDIRECT` 错误及相同 locator，促使调用方显式选择
下一步。

## 生成与审计

Checked-in registry 由 normalized `leaf-slugs.json` 与 accepted-only mapping v2 确定性生成。生成器必须
支持 check 模式，使源数据改变但 registry 未同步时 lint 失败。Mapping 中与 leaf-derived id 相同的 accepted
canonical PCR 被排除；无 accepted edge 的 leaf 生成 coverage alias；若 accepted edge 明确指向另一个
canonical id，则生成经过语义校验的 canonical redirect。

## 结果

分类覆盖仍完整保留 2,877 个 leaf，但 canonical PCR catalog 不再依赖 2,874 个空目录维持旧名字。物理迁移
可以逐批执行并独立回滚，同时公共接口始终保留确定、可解释的旧 id 去向。

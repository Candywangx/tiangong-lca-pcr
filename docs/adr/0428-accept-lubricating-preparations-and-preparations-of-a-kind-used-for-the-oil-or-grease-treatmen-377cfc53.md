---
title: "Accept Physically blended aqueous ethylene-glycol antifreeze from inhibitor superconcentrate"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: zh-CN
lastReviewedAt: "2026-10-18"
lastReviewedCommit: "6a784016e7890ed80c685c13ef65b1f55d08fb54"
lastReviewedNote: "User-authorized local semantic identity and narrower mapping review; candidate state and unresolved data obligations retained. No scientific or publication approval."
---

# 接受有界规范身份及 CPC 3.0 35430 narrower 关联

决定人：`codex-user-authorized-local-integration-review`（Codex本地集成控制者，用户授权的本地准备，不冒用人类审核人）；UTC决定时间：`2026-10-18T15:11:27Z`。

接受规范候选 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.lubricating-preparations-and-preparations-of-a-kind-used-for-the-oil-or-grease-treatmen-377cfc53` 与 CPC 3.0 `35430`（Lubricating preparations and preparations of a kind used for the oil or grease treatment of materials, except of petroleum; prepared additives for mineral oils; prepared liquids for hydraulic transmission, except of petroleum; anti-freezing preparations and prepared de-icing fluids）的 `narrower` 关联。该条是已审有界方法的独立语义决定；不是由分类leaf、旧空目录或机械检查自动生成身份/接受边。

## 方法对象与分类依据

Aqueous Si-OAT ethylene-glycol antifreeze from purchased inhibitor superconcentrate plus separately purchased glycol and deionized-water physical blending/dilution; actual net external delivery.

独立规范方法需要：Full supplied superconcentrate/nonadditive constituents, physical dilution and net-delivery stocks require a separate methodology; no equivalent coating or base-oil method exists.

分类层级：3 / 35 / 354 / 3543 / 35430。35430 explicitly includes anti-freezing preparations, independently of its preceding lubricating clauses. Restricted Si-OAT/glycol formulation/supply route is narrower; no petroleum lubricant, hydraulic or deicer-wide coverage. 因产品、材料、工艺或供货状态均有明确限定，不接受 `exact`，不声称整个leaf被方法覆盖。原生数据库中的分类字段不是本接受边的权威，既有错误/不完整分类元数据仍保持披露。

已在固定Candywangx main `30d3e8d5acba1055e7cd30c42e66f1ac82b52c8e` 的1347条material索引及相关相邻范围核查重复；该code无已接受边，对应旧目录为空脚手架。Pinned fork material catalog and nearby physical scopes reviewed; no equivalent canonical terminal method found.

## 规范身份与别名处理

明确接受现有语义身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.lubricating-preparations-and-preparations-of-a-kind-used-for-the-oil-or-grease-treatmen-377cfc53` 为上述有界 material 候选；旧目录在基线为 `scaffold/empty_scaffold`，没有被替换的已发布规范或同语义 material 方法。根据 create-pcr steps2–4 原位完成。只有该接受决定写入 current v2 映射后，正常生成器才按 `accepted.pcr_id === leaf.pcr_id` 排除旧locator；不是先删除alias来通过检查。

## 原生约束与未关闭义务

终端原生Product UUID `f4d2de8d-01df-42a2-aa65-7f7215606250`；本地已保存完整原件SHA-256 `6d1bbd5521048f641d4269a5effa6d9d4447e95519bbecceac247672853f0127`。Antifreeze native Product/Mass/kg at plant, dissolution/dilution/additive route, broad EG/PG/glycerol base list. PCR only EG Si-OAT; native typical30–70% and performance descriptions are not defaults, certified grade or provider quantity.

所有具体辅助行UUID债务、实测供应品/浓度/物态/计量、完整配方与原始期间/库存负荷兼容性继续由原PCR约束。没有补造UUID、牌号、现场配方或数量，不把身份可匹配等同于provider/background数据可用。保留 `candidate/authored_methodology` 和中文 `aligned`；这不是科学、翻译、数据集、PCR或产品发布批准，也不自动证明链路handoff相容。

## 可追踪审查版本

采用已复核候选来源commit `ad4820049fc817883881423457e0652d5b368ac9`；原始选定commit `ad4820049fc817883881423457e0652d5b368ac9` 及其快照/收据/原件仍保留。当前集成四文件字节与下列SHA完全相同：

| 规范文件 | SHA-256 |
| --- | --- |
| `manifest.yaml` | `06b2d07c624ccb9d0175a061341470202ea9c3ff98d645941eab8f0a5758b509` |
| `pcr.en-US.md` | `04bfe24ec26418d4f2edcea66809b04175feda3ed5872fa81f945a92b7ff3da5` |
| `pcr.zh-CN.md` | `6970f651801610b605127fd589ab689efa185f60aec4ed1bac0fd32c5ca8282e` |
| `structured.yaml` | `7bce66de910a140fc71361e4128879986f15048a62ecc4db89ca6ac1cf3b1eea` |

分类源为已保留的联合国CPC 3.0结构原件和其规范化层级，不替换原始文件：

- `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` — SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`
- `classifications/systems/cpc/3.0/raw/source-metadata.yaml` — SHA-256 `124c9828dc090046f7de4b9b759bf85fd6aa5c66505716856c032e5d60db015e`
- `classifications/systems/cpc/3.0/normalized/leaves.json` — SHA-256 `e0955e645b95eacd943914b3e670bee2fa20f8cfb68e053779954d0fc4168060`
- `classifications/systems/cpc/3.0/normalized/hierarchy.json` — SHA-256 `8ee5825408200f8a0b7cf636fc5ef16eba21be2d77edc524e915f207cd8e800d`
- `classifications/systems/cpc/3.0/normalized/leaf-slugs.json` — SHA-256 `03db4d0e062d8dc0b5d0646cb50956cf39e3d0e41503042312773cea62643d58`

独立语义/分类复核记录SHA-256 `e623367ac8686bc1c64ff7c9e75093c5bfc2bbd01d4ff636fdc42e5456fa8430`；原有完整方法和修后审查沿用并已绑定采用版本。本ADR本身保存决定、产品边界、分类理由、别名动作与证据哈希，作为映射的持久 `decision_ref`；不依赖私有路径或CLI trace作为决策内容。

后续须以串行baseline compare-and-swap写入接受边，正常生成/检查alias、事务生成catalog/material/coverage，并在新的精确候选来源执行目标检查、实际reader及完整仓库/产品验收。PR #23的工程修复可复用已审代码，旧source的收据不能作为本候选来源的资格。

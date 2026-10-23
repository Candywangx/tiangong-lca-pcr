---
title: "Accept Complete EP multi-ply vulcanized rubber conveyor belts"
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

# 接受有界规范身份及 CPC 3.0 36240 narrower 关联

决定人：`codex-user-authorized-local-integration-review`（Codex本地集成控制者，用户授权的本地准备，不冒用人类审核人）；UTC决定时间：`2026-10-18T15:11:27Z`。

接受规范候选 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.ep-multi-ply-vulcanized-conveyor-belts` 与 CPC 3.0 `36240`（Conveyor or transmission belts or belting, of vulcanized rubber）的 `narrower` 关联。该条是已审有界方法的独立语义决定；不是由分类leaf、旧空目录或机械检查自动生成身份/接受边。

## 方法对象与分类依据

Complete flat open-roll sulfur-vulcanized EP polyester-warp/polyamide-weft multiple-ply conveyor belts with independently specified rubber skim and SBR covers; actual accepted net factory delivery.

独立规范方法需要：Carcass assembly/skim/cover lamination and sulfur cure create a distinct finished belting object versus uncured compound sheets, tyre methods and whole conveyors.

分类层级：3 / 36 / 362 / 3624 / 36240。Complete vulcanized conveyor belting lies expressly in36240. EP multiple-ply/open-roll configuration excludes transmission, NN/EE/steelcord, uncured, endless/profiled variants; narrower than the leaf. 因产品、材料、工艺或供货状态均有明确限定，不接受 `exact`，不声称整个leaf被方法覆盖。原生数据库中的分类字段不是本接受边的权威，既有错误/不完整分类元数据仍保持披露。

已在固定Candywangx main `30d3e8d5acba1055e7cd30c42e66f1ac82b52c8e` 的1347条material索引及相关相邻范围核查重复；该code无已接受边，对应旧目录为空脚手架。Pinned fork material catalog and nearby physical scopes reviewed; no equivalent canonical terminal method found.

## 规范身份与别名处理

沿用具体语义身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.ep-multi-ply-vulcanized-conveyor-belts`。旧leaf身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.conveyor-or-transmission-belts-or-belting-of-vulcanized-rubber` 继续是 terminal `classification_coverage` locator。该narrower边不表示整个旧广义身份替换，不生成canonical redirect、不手删旧alias。

## 原生约束与未关闭义务

终端原生Product UUID `1e587e97-03a2-4c50-8226-f8446a1dd1d9`；本地已保存完整原件SHA-256 `4cadd88c3db27959df27f4459f4e29e5be162e91e119c016cb7e8ccd310f208e`。Native finished manufactured vulcanized belting Product/Mass/kg, plant production mix; no reinforcement/grade/geography fixed. Chinese “流体” wording debt is inconsistent with complete names/type and not a liquid condition; no whole equipment flow substitution.

所有具体辅助行UUID债务、实测供应品/浓度/物态/计量、完整配方与原始期间/库存负荷兼容性继续由原PCR约束。没有补造UUID、牌号、现场配方或数量，不把身份可匹配等同于provider/background数据可用。保留 `candidate/authored_methodology` 和中文 `aligned`；这不是科学、翻译、数据集、PCR或产品发布批准，也不自动证明链路handoff相容。

## 可追踪审查版本

采用已复核候选来源commit `05cd4693b672c01e604e17ffd44316ca2081c81f`；原始选定commit `05cd4693b672c01e604e17ffd44316ca2081c81f` 及其快照/收据/原件仍保留。当前集成四文件字节与下列SHA完全相同：

| 规范文件 | SHA-256 |
| --- | --- |
| `manifest.yaml` | `033424f393e5e632417c618e732eccd4e2d98ac35acf0e544c5458d580919196` |
| `pcr.en-US.md` | `39b98909e386adeeb5e530479b69568f05d898e59d130392e89b680dd40899f8` |
| `pcr.zh-CN.md` | `28afa8262a2587015e247ac58816a1a766562808ba7c359d03f6388e7d497d4b` |
| `structured.yaml` | `2179436c5ed99207b8af5bba3c448fe6316a68bd622ca043fecf16ed1838b894` |

分类源为已保留的联合国CPC 3.0结构原件和其规范化层级，不替换原始文件：

- `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` — SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`
- `classifications/systems/cpc/3.0/raw/source-metadata.yaml` — SHA-256 `124c9828dc090046f7de4b9b759bf85fd6aa5c66505716856c032e5d60db015e`
- `classifications/systems/cpc/3.0/normalized/leaves.json` — SHA-256 `e0955e645b95eacd943914b3e670bee2fa20f8cfb68e053779954d0fc4168060`
- `classifications/systems/cpc/3.0/normalized/hierarchy.json` — SHA-256 `8ee5825408200f8a0b7cf636fc5ef16eba21be2d77edc524e915f207cd8e800d`
- `classifications/systems/cpc/3.0/normalized/leaf-slugs.json` — SHA-256 `03db4d0e062d8dc0b5d0646cb50956cf39e3d0e41503042312773cea62643d58`

独立语义/分类复核记录SHA-256 `e623367ac8686bc1c64ff7c9e75093c5bfc2bbd01d4ff636fdc42e5456fa8430`；原有完整方法和修后审查沿用并已绑定采用版本。本ADR本身保存决定、产品边界、分类理由、别名动作与证据哈希，作为映射的持久 `decision_ref`；不依赖私有路径或CLI trace作为决策内容。

后续须以串行baseline compare-and-swap写入接受边，正常生成/检查alias、事务生成catalog/material/coverage，并在新的精确候选来源执行目标检查、实际reader及完整仓库/产品验收。PR #23的工程修复可复用已审代码，旧source的收据不能作为本候选来源的资格。

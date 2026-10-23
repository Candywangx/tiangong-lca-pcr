---
title: "Accept Technical solid salicylic acid from solvent-free sodium-phenoxide carboxylation"
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

# 接受有界规范身份及 CPC 3.0 35210 narrower 关联

决定人：`codex-user-authorized-local-integration-review`（Codex本地集成控制者，用户授权的本地准备，不冒用人类审核人）；UTC决定时间：`2026-10-18T15:11:27Z`。

接受规范候选 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.salicylic-acid-and-its-salts-and-esters` 与 CPC 3.0 `35210`（Salicylic acid and its salts and esters）的 `narrower` 关联。该条是已审有界方法的独立语义决定；不是由分类leaf、旧空目录或机械检查自动生成身份/接受边。

## 方法对象与分类依据

工业固体游离水杨酸CAS69-72-7；苯酚/NaOH成盐脱水、无外加有机溶剂CO2羧化、H2SO4沉淀、分离洗涤干燥及实际净交付。排除盐/酯/异构体、湿滤饼、药品制剂、溶剂悬浮和HCl路线。

独立规范方法需要：生产商技术粉末身份与原始无溶剂工艺专利支持独立产品/路线；未宣称该供方采用此工艺；药典重复标签不建立pharma用途或药效。最终free-acid member closure已被独立完整native复核。 可独立接受现语义slug下原位promotion，durable ADR必须明确其唯一free-solid-acid方法含义而非接受所有salts/esters。没有证据要求新建第二个同语义PCR；任何改名应为独立identity维护选择。

分类层级：3 / 35 / 352 / 3521 / 35210。3/35/352/3521/35210明示salicylic acid and salts/esters；游离酸是明名成员，narrower适合。祖级Pharmaceutical products是分类上下文，不能推出本技术品药用等级/批准。 因产品、材料、工艺或供货状态均有明确限定，不接受 `exact`，不声称整个leaf被方法覆盖。原生数据库中的分类字段不是本接受边的权威，既有错误/不完整分类元数据仍保持披露。

已在固定Candywangx main `30d3e8d5acba1055e7cd30c42e66f1ac82b52c8e` 的1347条material索引及相关相邻范围核查重复；该code无已接受边，对应旧目录为空脚手架。main苯酚PCR是上游分离苯酚CAS108-95-2/异丙苯氧化，非水杨酸CAS69-72-7/苯酚钠羧化；不存在可替代该终端的main salicylic方法。

## 规范身份与别名处理

明确接受现有语义身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.salicylic-acid-and-its-salts-and-esters` 为上述有界 material 候选；旧目录在基线为 `scaffold/empty_scaffold`，没有被替换的已发布规范或同语义 material 方法。根据 create-pcr steps2–4 原位完成。只有该接受决定写入 current v2 映射后，正常生成器才按 `accepted.pcr_id === leaf.pcr_id` 排除旧locator；不是先删除alias来通过检查。

## 原生约束与未关闭义务

终端原生Product UUID `3ae4ae3f-644a-4d9e-914c-594419243d1f`；本地已保存完整原件SHA-256 `11655ba13dc4f1059543b6c7ef0671af7c3f4858a8ef0abae6dd02e9a817cec6`。3ae4ae3f@01.01.000 state100完整原件是broad manufactured finished Product/at-plant/Mass；没有salt-only/ester-only或物理混合物要求，也无native CAS/grade/phase/provider/geography/route。仅作为单一受限定free-acid成员locator，保留官方EN/ZH名和18项aux债务；不得恢复旧family blanket hold。

所有具体辅助行UUID债务、实测供应品/浓度/物态/计量、完整配方与原始期间/库存负荷兼容性继续由原PCR约束。没有补造UUID、牌号、现场配方或数量，不把身份可匹配等同于provider/background数据可用。保留 `candidate/authored_methodology` 和中文 `aligned`；这不是科学、翻译、数据集、PCR或产品发布批准，也不自动证明链路handoff相容。

## 可追踪审查版本

采用已复核候选来源commit `32138394b60dd586a66455af8dc94670193729bc`；原始选定commit `3aedfef02952e781a7ae967d32b16d6d2eed570e` 及其快照/收据/原件仍保留。当前集成四文件字节与下列SHA完全相同：

| 规范文件 | SHA-256 |
| --- | --- |
| `manifest.yaml` | `5756d8ea8824ead825a6f20fcd9718db590860ef6fffff336e008c71e84377db` |
| `pcr.en-US.md` | `d52d035b9855c2ecbeaf3df87934e2b5fbf8304e7e4f096bc0a5d369742a7965` |
| `pcr.zh-CN.md` | `5c131d265d3f6834860287938549f00bb92890a85b1defd56fc31d7b02f1ff46` |
| `structured.yaml` | `abf2b51fbfa973cdad9338aa446fafcb0f71f818026c24a9d30dd8ee43ba096e` |

分类源为已保留的联合国CPC 3.0结构原件和其规范化层级，不替换原始文件：

- `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` — SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`
- `classifications/systems/cpc/3.0/raw/source-metadata.yaml` — SHA-256 `124c9828dc090046f7de4b9b759bf85fd6aa5c66505716856c032e5d60db015e`
- `classifications/systems/cpc/3.0/normalized/leaves.json` — SHA-256 `e0955e645b95eacd943914b3e670bee2fa20f8cfb68e053779954d0fc4168060`
- `classifications/systems/cpc/3.0/normalized/hierarchy.json` — SHA-256 `8ee5825408200f8a0b7cf636fc5ef16eba21be2d77edc524e915f207cd8e800d`
- `classifications/systems/cpc/3.0/normalized/leaf-slugs.json` — SHA-256 `03db4d0e062d8dc0b5d0646cb50956cf39e3d0e41503042312773cea62643d58`

独立语义/分类复核记录SHA-256 `9fe891fa4cf8d9c0b89233e0d2aa174eb505234feee0d90dbf845e5b72dce15d`；原有完整方法和修后审查沿用并已绑定采用版本。本ADR本身保存决定、产品边界、分类理由、别名动作与证据哈希，作为映射的持久 `decision_ref`；不依赖私有路径或CLI trace作为决策内容。

后续须以串行baseline compare-and-swap写入接受边，正常生成/检查alias、事务生成catalog/material/coverage，并在新的精确候选来源执行目标检查、实际reader及完整仓库/产品验收。PR #23的工程修复可复用已审代码，旧source的收据不能作为本候选来源的资格。

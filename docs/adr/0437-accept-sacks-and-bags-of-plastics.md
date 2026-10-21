---
title: "Accept Unprinted monolayer LDPE open-mouth bottom-sealed bags from blown film"
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

# 接受有界规范身份及 CPC 3.0 36410 narrower 关联

决定人：`codex-user-authorized-local-integration-review`（Codex本地集成控制者，用户授权的本地准备，不冒用人类审核人）；UTC决定时间：`2026-10-18T15:11:27Z`。

接受规范候选 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.sacks-and-bags-of-plastics` 与 CPC 3.0 `36410`（Sacks and bags, of plastics）的 `narrower` 关联。该条是已审有界方法的独立语义决定；不是由分类leaf、旧空目录或机械检查自动生成身份/接受边。

## 方法对象与分类依据

透明未印刷未涂层未复合的单层原生LDPE平口空袋；完整粒料塑化/环形吹膜/冷却/实际收放卷/底封切袋/首次检验放行。

独立规范方法需要：完整LDPE薄膜级Lupolen TDS、HMEL一般PE操作和YongFong袋封切/出厂检查共同建立明确方法；已明示不同来源，不借HMEL LLDPE/HDPE牌号当LDPE配方。 可独立接受原位promotion；依据是本完整LDPE空袋语义及独立方法，不是因为36410保留了空目录。ADR须明确narrower及其他袋材/结构未覆盖。

分类层级：3 / 36 / 364 / 3641 / 36410。空塑料袋属364/3641/36410；与36330未转化薄膜、27150纺织包装袋、32152纸袋、36490其他包装/封口件不同。本特定LDPE结构/工艺比leaf窄。 因产品、材料、工艺或供货状态均有明确限定，不接受 `exact`，不声称整个leaf被方法覆盖。原生数据库中的分类字段不是本接受边的权威，既有错误/不完整分类元数据仍保持披露。

已在固定Candywangx main `30d3e8d5acba1055e7cd30c42e66f1ac82b52c8e` 的1347条material索引及相关相邻范围核查重复；该code无已接受边，对应旧目录为空脚手架。main没有36组material；PP绳是外购纱线干捻，纸袋/标签与本粒料吹膜制袋的材质、门和操作不同。

## 规范身份与别名处理

明确接受现有语义身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.sacks-and-bags-of-plastics` 为上述有界 material 候选；旧目录在基线为 `scaffold/empty_scaffold`，没有被替换的已发布规范或同语义 material 方法。根据 create-pcr steps2–4 原位完成。只有该接受决定写入 current v2 映射后，正常生成器才按 `accepted.pcr_id === leaf.pcr_id` 排除旧locator；不是先删除alias来通过检查。

## 原生约束与未关闭义务

终端原生Product UUID `10647902-9822-4b06-bc95-f1f30f10c261`；本地已保存完整原件SHA-256 `38ef03cad4ee532c807c17066c3f2e617f7b2973d322d65fd1a1b4698d46936f`。Polyethylene bag Product、CAS9002-88-4、Mass、at-plant；未给LDPE等级/密度类别/构造/工艺/地理。原生36490错分类保留，不能扩展到箱/盖。

所有具体辅助行UUID债务、实测供应品/浓度/物态/计量、完整配方与原始期间/库存负荷兼容性继续由原PCR约束。没有补造UUID、牌号、现场配方或数量，不把身份可匹配等同于provider/background数据可用。保留 `candidate/authored_methodology` 和中文 `aligned`；这不是科学、翻译、数据集、PCR或产品发布批准，也不自动证明链路handoff相容。

## 可追踪审查版本

采用已复核候选来源commit `411eec390742efda97a020480a4f28ff733099e7`；原始选定commit `411eec390742efda97a020480a4f28ff733099e7` 及其快照/收据/原件仍保留。当前集成四文件字节与下列SHA完全相同：

| 规范文件 | SHA-256 |
| --- | --- |
| `manifest.yaml` | `e909dbe1c89fbf9096e3bce0c369ec9bd692bf1f3ca37c9a8eb2cbfb41d9e39e` |
| `pcr.en-US.md` | `4a60d9b8f469ee4a5bc6ba5f4e8923132a9a6d71a8d39e571ee850d7db680d14` |
| `pcr.zh-CN.md` | `07ef03c4ca349ed5ce4affb0bacaba69a459a550f320cd74b1603352eb977b5e` |
| `structured.yaml` | `fa8164bf5cdbf6024555f3845acfdac3e9d515a0b64bc827a78f3edadaabfa5d` |

分类源为已保留的联合国CPC 3.0结构原件和其规范化层级，不替换原始文件：

- `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` — SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`
- `classifications/systems/cpc/3.0/raw/source-metadata.yaml` — SHA-256 `124c9828dc090046f7de4b9b759bf85fd6aa5c66505716856c032e5d60db015e`
- `classifications/systems/cpc/3.0/normalized/leaves.json` — SHA-256 `e0955e645b95eacd943914b3e670bee2fa20f8cfb68e053779954d0fc4168060`
- `classifications/systems/cpc/3.0/normalized/hierarchy.json` — SHA-256 `8ee5825408200f8a0b7cf636fc5ef16eba21be2d77edc524e915f207cd8e800d`
- `classifications/systems/cpc/3.0/normalized/leaf-slugs.json` — SHA-256 `03db4d0e062d8dc0b5d0646cb50956cf39e3d0e41503042312773cea62643d58`

独立语义/分类复核记录SHA-256 `9fe891fa4cf8d9c0b89233e0d2aa174eb505234feee0d90dbf845e5b72dce15d`；原有完整方法和修后审查沿用并已绑定采用版本。本ADR本身保存决定、产品边界、分类理由、别名动作与证据哈希，作为映射的持久 `decision_ref`；不依赖私有路径或CLI trace作为决策内容。

后续须以串行baseline compare-and-swap写入接受边，正常生成/检查alias、事务生成catalog/material/coverage，并在新的精确候选来源执行目标检查、实际reader及完整仓库/产品验收。PR #23的工程修复可复用已审代码，旧source的收据不能作为本候选来源的资格。

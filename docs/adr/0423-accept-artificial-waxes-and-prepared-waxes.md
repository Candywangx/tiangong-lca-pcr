---
title: "Accept Prepared paraffin–soy wax by physical blending"
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

# 接受有界规范身份及 CPC 3.0 35332 narrower 关联

决定人：`codex-user-authorized-local-integration-review`（Codex本地集成控制者，用户授权的本地准备，不冒用人类审核人）；UTC决定时间：`2026-10-18T15:11:27Z`。

接受规范候选 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-waxes-and-prepared-waxes` 与 CPC 3.0 `35332`（Artificial waxes and prepared waxes）的 `narrower` 关联。该条是已审有界方法的独立语义决定；不是由分类leaf、旧空目录或机械检查自动生成身份/接受边。

## 方法对象与分类依据

固体无载体石蜡—大豆蜡物理配制混合蜡（IGI6006A作为受限实例），熔化/混合/冷却成型检验、包装储存及净合格交付。

独立规范方法需要：跨来源配制混合蜡是改变终端组成/状态的独立产品；main的未配制炼厂石蜡明确排除formulated blends，不能复用该原料方法为成品方法。

分类层级：3 / 35 / 353 / 3533 / 35332。仅该固态非反应混合物；排除未配制石油蜡/纯矿蜡混合物、独立植物蜡/油、合成反应、乳液/溶液、蜡烛和成品抛光膏。 因产品、材料、工艺或供货状态均有明确限定，不接受 `exact`，不声称整个leaf被方法覆盖。原生数据库中的分类字段不是本接受边的权威，既有错误/不完整分类元数据仍保持披露。

已在固定Candywangx main `30d3e8d5acba1055e7cd30c42e66f1ac82b52c8e` 的1347条material索引及相关相邻范围核查重复；该code无已接受边，对应旧目录为空脚手架。no same semantic terminal method found in pinned main material catalog; adjacent material boundaries inspected

## 规范身份与别名处理

明确接受现有语义身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-waxes-and-prepared-waxes` 为上述有界 material 候选；旧目录在基线为 `scaffold/empty_scaffold`，没有被替换的已发布规范或同语义 material 方法。根据 create-pcr steps2–4 原位完成。只有该接受决定写入 current v2 映射后，正常生成器才按 `accepted.pcr_id === leaf.pcr_id` 排除旧locator；不是先删除alias来通过检查。

## 原生约束与未关闭义务

终端原生Product UUID `554ecf09-e83f-4f0d-b777-342cf04a7643`；本地已保存完整原件SHA-256 `75083f91833ac85df4220b983ebb280b17271ec52a4f49cebc10ad2cddfad28e`。完整原生 Product 身份仅可标识明确限定的物理成员；Mass属性不证明配方/密度、provider、实际量或性能。保留实际terminal card全部限制与原官方basename；不以metadata分类债务改写原记录。 IGI商品/混配及WCO34 Note5(c)支持prepared类别；IGI6006A食品接触限制和series SDS范围保留，不推定配方/供应者。

所有具体辅助行UUID债务、实测供应品/浓度/物态/计量、完整配方与原始期间/库存负荷兼容性继续由原PCR约束。没有补造UUID、牌号、现场配方或数量，不把身份可匹配等同于provider/background数据可用。保留 `candidate/authored_methodology` 和中文 `aligned`；这不是科学、翻译、数据集、PCR或产品发布批准，也不自动证明链路handoff相容。

## 可追踪审查版本

采用已复核候选来源commit `8328941fcb940b0e64333e568028ae0277fc1947`；原始选定commit `61cbe614a278655276d9f9c8b2a9e0282e46d48f` 及其快照/收据/原件仍保留。当前集成四文件字节与下列SHA完全相同：

| 规范文件 | SHA-256 |
| --- | --- |
| `manifest.yaml` | `c0232135a8b0a8aa4c2ae6b8b81139d9319f557fded1b925f7662cb4c2f9b823` |
| `pcr.en-US.md` | `b9f8b9e38d277f33c163521d9d25505c485af1135cb7d3d2afac82f4a57e9481` |
| `pcr.zh-CN.md` | `0c6e49281cd3f63dbc2412e5947a14eb4c0b59534160a76893a2b207445f96db` |
| `structured.yaml` | `9bc837f8babd5db176f0b6988c8d2c0314a3f2087c2c308acfed599454f1eaf1` |

分类源为已保留的联合国CPC 3.0结构原件和其规范化层级，不替换原始文件：

- `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` — SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`
- `classifications/systems/cpc/3.0/raw/source-metadata.yaml` — SHA-256 `124c9828dc090046f7de4b9b759bf85fd6aa5c66505716856c032e5d60db015e`
- `classifications/systems/cpc/3.0/normalized/leaves.json` — SHA-256 `e0955e645b95eacd943914b3e670bee2fa20f8cfb68e053779954d0fc4168060`
- `classifications/systems/cpc/3.0/normalized/hierarchy.json` — SHA-256 `8ee5825408200f8a0b7cf636fc5ef16eba21be2d77edc524e915f207cd8e800d`
- `classifications/systems/cpc/3.0/normalized/leaf-slugs.json` — SHA-256 `03db4d0e062d8dc0b5d0646cb50956cf39e3d0e41503042312773cea62643d58`

独立语义/分类复核记录SHA-256 `4cd7ac59e7f1d4ed5850bd1817b34a55015f6d24d082825b71a6f60b15a111e1`；原有完整方法和修后审查沿用并已绑定采用版本。本ADR本身保存决定、产品边界、分类理由、别名动作与证据哈希，作为映射的持久 `decision_ref`；不依赖私有路径或CLI trace作为决策内容。

后续须以串行baseline compare-and-swap写入接受边，正常生成/检查alias、事务生成catalog/material/coverage，并在新的精确候选来源执行目标检查、实际reader及完整仓库/产品验收。PR #23的工程修复可复用已审代码，旧source的收据不能作为本候选来源的资格。

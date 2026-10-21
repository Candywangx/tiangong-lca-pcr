---
title: "Accept Aqueous mineral scouring cream manufacture and delivery"
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

# 接受有界规范身份及 CPC 3.0 35334 narrower 关联

决定人：`codex-user-authorized-local-integration-review`（Codex本地集成控制者，用户授权的本地准备，不冒用人类审核人）；UTC决定时间：`2026-10-18T15:11:27Z`。

接受规范候选 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.scouring-pastes-and-powders-and-other-scouring-preparations` 与 CPC 3.0 `35334`（Scouring pastes and powders and other scouring preparations）的 `narrower` 关联。该条是已审有界方法的独立语义决定；不是由分类leaf、旧空目录或机械检查自动生成身份/接受边。

## 方法对象与分类依据

非漂白水性碳酸钙/膨润土/石英研磨清洁膏，以完整采购coco-glucoside制剂和披露的酒精/防腐/甘油/黄原胶湿分散、闭口瓶灌装至净合格交付。

独立规范方法需要：颗粒矿物湿分散和研磨清洁终态区别于洗衣表活配制、蜡膏及金属擦洗工具；实物/路线而非共有cleaning标签建立独立身份。

分类层级：3 / 35 / 353 / 3533 / 35334。仅此非漂白水性矿物膏；排除干粉、酸/漂白反应、PCC/表面反应磨料生产、蜡抛光及表活/皂合成。 因产品、材料、工艺或供货状态均有明确限定，不接受 `exact`，不声称整个leaf被方法覆盖。原生数据库中的分类字段不是本接受边的权威，既有错误/不完整分类元数据仍保持披露。

已在固定Candywangx main `30d3e8d5acba1055e7cd30c42e66f1ac82b52c8e` 的1347条material索引及相关相邻范围核查重复；该code无已接受边，对应旧目录为空脚手架。no same semantic terminal method found in pinned main material catalog; adjacent material boundaries inspected

## 规范身份与别名处理

明确接受现有语义身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.scouring-pastes-and-powders-and-other-scouring-preparations` 为上述有界 material 候选；旧目录在基线为 `scaffold/empty_scaffold`，没有被替换的已发布规范或同语义 material 方法。根据 create-pcr steps2–4 原位完成。只有该接受决定写入 current v2 映射后，正常生成器才按 `accepted.pcr_id === leaf.pcr_id` 排除旧locator；不是先删除alias来通过检查。

## 原生约束与未关闭义务

终端原生Product UUID `1ee04905-0d1a-453e-9d3a-9ce612d79be0`；本地已保存完整原件SHA-256 `81014e9edbe07a9f4038e0fd95baae37ddf7031ad67c2bc95185f5fe6d23ee01`。完整原生 Product 身份仅可标识明确限定的物理成员；Mass属性不证明配方/密度、provider、实际量或性能。保留实际terminal card全部限制与原官方basename；不以metadata分类债务改写原记录。 Ecover厂家成分表证实商品状态；Omya专利仅独立湿分散例/反例，不套其配方。500ml不是质量或密度。

所有具体辅助行UUID债务、实测供应品/浓度/物态/计量、完整配方与原始期间/库存负荷兼容性继续由原PCR约束。没有补造UUID、牌号、现场配方或数量，不把身份可匹配等同于provider/background数据可用。保留 `candidate/authored_methodology` 和中文 `aligned`；这不是科学、翻译、数据集、PCR或产品发布批准，也不自动证明链路handoff相容。

## 可追踪审查版本

采用已复核候选来源commit `2b04a391bccb78cc606203cfb9fa4997f35965cb`；原始选定commit `2b04a391bccb78cc606203cfb9fa4997f35965cb` 及其快照/收据/原件仍保留。当前集成四文件字节与下列SHA完全相同：

| 规范文件 | SHA-256 |
| --- | --- |
| `manifest.yaml` | `98cf96650eabc570f0991b7e4c5ba0f8476d34f915c2aaed03c9c65f124087ef` |
| `pcr.en-US.md` | `7c9221e4c62c2a30c0833699b3cc2d87cf2c844e985a0ffaf1c7d09bd49b3ef0` |
| `pcr.zh-CN.md` | `87e0a2377279da168b7d3b3fb039b4cf053eed0231048c94c3b891950ac18abf` |
| `structured.yaml` | `4f5f06c59ed23a14bf2b86537a5964ad30e8f055c69616c448463df1442020ff` |

分类源为已保留的联合国CPC 3.0结构原件和其规范化层级，不替换原始文件：

- `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` — SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`
- `classifications/systems/cpc/3.0/raw/source-metadata.yaml` — SHA-256 `124c9828dc090046f7de4b9b759bf85fd6aa5c66505716856c032e5d60db015e`
- `classifications/systems/cpc/3.0/normalized/leaves.json` — SHA-256 `e0955e645b95eacd943914b3e670bee2fa20f8cfb68e053779954d0fc4168060`
- `classifications/systems/cpc/3.0/normalized/hierarchy.json` — SHA-256 `8ee5825408200f8a0b7cf636fc5ef16eba21be2d77edc524e915f207cd8e800d`
- `classifications/systems/cpc/3.0/normalized/leaf-slugs.json` — SHA-256 `03db4d0e062d8dc0b5d0646cb50956cf39e3d0e41503042312773cea62643d58`

独立语义/分类复核记录SHA-256 `4cd7ac59e7f1d4ed5850bd1817b34a55015f6d24d082825b71a6f60b15a111e1`；原有完整方法和修后审查沿用并已绑定采用版本。本ADR本身保存决定、产品边界、分类理由、别名动作与证据哈希，作为映射的持久 `decision_ref`；不依赖私有路径或CLI trace作为决策内容。

后续须以串行baseline compare-and-swap写入接受边，正常生成/检查alias、事务生成catalog/material/coverage，并在新的精确候选来源执行目标检查、实际reader及完整仓库/产品验收。PR #23的工程修复可复用已审代码，旧source的收据不能作为本候选来源的资格。

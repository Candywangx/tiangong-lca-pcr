---
title: "Accept Unfaced CO2/ethanol-extruded polystyrene foam boards at net delivery"
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

# 接受有界规范身份及 CPC 3.0 36390 narrower 关联

决定人：`codex-user-authorized-local-integration-review`（Codex本地集成控制者，用户授权的本地准备，不冒用人类审核人）；UTC决定时间：`2026-10-18T15:11:27Z`。

接受规范候选 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-plates-sheets-film-foil-and-strip-of-plastics` 与 CPC 3.0 `36390`（Other plates, sheets, film, foil and strip, of plastics）的 `narrower` 关联。该条是已审有界方法的独立语义决定；不是由分类leaf、旧空目录或机械检查自动生成身份/接受边。

## 方法对象与分类依据

无饰面、无增强/背胶/新增阻燃剂及化学发泡浓缩料的硬质闭孔GPPS平板；CO2/乙醇物理挤出发泡，含调理、残余胞孔气体及净交付。

独立规范方法需要：Finnfoam历史XPS工艺与完整原料/物理发泡流程构成独立产品/方法依据；气体状态、净交付冲回与多期向量使其区别于膜片和EPS。CPC只是索引，不规定该配方。 可独立接受原位promotion。现有宽语义词组仍是语义slug而非分类code；durable ADR须把canonical含义固定为本XPS子集，不让其泛化为其他片膜。没有证据要求第二个相同PCR或强制新slug。

分类层级：3 / 36 / 363 / 3639 / 36390。3633/36330明确non-cellular；本cellular平板不符合，3639/36390 residual plates/sheets是合理narrower语境。只认平板半成品，不能将组装建筑构件或整个leaf覆盖纳入。 因产品、材料、工艺或供货状态均有明确限定，不接受 `exact`，不声称整个leaf被方法覆盖。原生数据库中的分类字段不是本接受边的权威，既有错误/不完整分类元数据仍保持披露。

已在固定Candywangx main `30d3e8d5acba1055e7cd30c42e66f1ac82b52c8e` 的1347条material索引及相关相邻范围核查重复；该code无已接受边，对应旧目录为空脚手架。main没有36组material；纸/木复合建筑板材不具本GPPS胞孔气体状态及制造/净交付门。

## 规范身份与别名处理

明确接受现有语义身份 `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-plates-sheets-film-foil-and-strip-of-plastics` 为上述有界 material 候选；旧目录在基线为 `scaffold/empty_scaffold`，没有被替换的已发布规范或同语义 material 方法。根据 create-pcr steps2–4 原位完成。只有该接受决定写入 current v2 映射后，正常生成器才按 `accepted.pcr_id === leaf.pcr_id` 排除旧locator；不是先删除alias来通过检查。

## 原生约束与未关闭义务

终端原生Product UUID `3a86ddd1-28f8-45ba-9255-74a405e09f03`；本地已保存完整原件SHA-256 `4936dc61a2e8090a44f591cd129203f3c200cb1d97cb0f4213201aa82c0ef852`。原生Foamed Plastic全文同时涵盖刚柔及开闭孔泡沫，支持实际XPS这一成员；原生36330分类与全部cellular名称/说明矛盾，作为独立taxonomy debt保留，不用它证明CPC。无CAS/grade/route/geography/provider/density。

所有具体辅助行UUID债务、实测供应品/浓度/物态/计量、完整配方与原始期间/库存负荷兼容性继续由原PCR约束。没有补造UUID、牌号、现场配方或数量，不把身份可匹配等同于provider/background数据可用。保留 `candidate/authored_methodology` 和中文 `aligned`；这不是科学、翻译、数据集、PCR或产品发布批准，也不自动证明链路handoff相容。

## 可追踪审查版本

采用已复核候选来源commit `ab9d2b631ec1d729ba20b7c46c15d0029526d566`；原始选定commit `ab9d2b631ec1d729ba20b7c46c15d0029526d566` 及其快照/收据/原件仍保留。当前集成四文件字节与下列SHA完全相同：

| 规范文件 | SHA-256 |
| --- | --- |
| `manifest.yaml` | `29cf8ab2c1bbb6886040f320fd255d52c901a2cb013db6dd0a56f6470595c116` |
| `pcr.en-US.md` | `7ea6c76f88e970842f5b359a1d27d2483955e122c8d05c32a11edaf1e1ee3d97` |
| `pcr.zh-CN.md` | `d9b501e9fb262d5fbdd15278ef177f17a0c2c3268239c5914a84d22e59b35013` |
| `structured.yaml` | `cea77618d8b1280a02eeb22b00e5e52114edf154f9137b8477ea4f7a2441fc9f` |

分类源为已保留的联合国CPC 3.0结构原件和其规范化层级，不替换原始文件：

- `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` — SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`
- `classifications/systems/cpc/3.0/raw/source-metadata.yaml` — SHA-256 `124c9828dc090046f7de4b9b759bf85fd6aa5c66505716856c032e5d60db015e`
- `classifications/systems/cpc/3.0/normalized/leaves.json` — SHA-256 `e0955e645b95eacd943914b3e670bee2fa20f8cfb68e053779954d0fc4168060`
- `classifications/systems/cpc/3.0/normalized/hierarchy.json` — SHA-256 `8ee5825408200f8a0b7cf636fc5ef16eba21be2d77edc524e915f207cd8e800d`
- `classifications/systems/cpc/3.0/normalized/leaf-slugs.json` — SHA-256 `03db4d0e062d8dc0b5d0646cb50956cf39e3d0e41503042312773cea62643d58`

独立语义/分类复核记录SHA-256 `9fe891fa4cf8d9c0b89233e0d2aa174eb505234feee0d90dbf845e5b72dce15d`；原有完整方法和修后审查沿用并已绑定采用版本。本ADR本身保存决定、产品边界、分类理由、别名动作与证据哈希，作为映射的持久 `decision_ref`；不依赖私有路径或CLI trace作为决策内容。

后续须以串行baseline compare-and-swap写入接受边，正常生成/检查alias、事务生成catalog/material/coverage，并在新的精确候选来源执行目标检查、实际reader及完整仓库/产品验收。PR #23的工程修复可复用已审代码，旧source的收据不能作为本候选来源的资格。

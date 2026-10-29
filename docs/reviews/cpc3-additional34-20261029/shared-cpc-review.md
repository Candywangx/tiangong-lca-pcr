---
title: CPC共享映射与一对一审查
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
lastReviewedAt: 2026-10-29
lastReviewedCommit: null
lastReviewedNote: "Exact selected-source review and retained-scaffold intake; methodology and product qualification remain distinct."
---

# CPC共享映射与一对一审查

本地main和fork main原有3组14码共享目标：

| 原共享组 | CPC | 当前处理 |
| --- | --- | --- |
| 胶合板 | 31411、31412、31413 | 3个独立PCR，保留31413原身份 |
| 非每日期刊 | 32410、32420、32490 | 3个独立PCR，保留32410原身份 |
| 图书、乐谱及商业目录 | 32210、32220、32230、32291、32292、32299、32520、32620 | 8个独立PCR，保留32210原身份 |

PR #30在本轮34项追加前已通过11条改指，令14码对应14个materialPCR；不是只换CPC编码的复制稿，方法用途、构造、工艺或完整性验收边界分别有约束。本轮新增34个单码接受边，当前1389条正式接受映射仍为0组共享目标；不需要再造重复PCR。最新上游29778df的1306条接受映射也无共享目标。

复核发现31413允许热带芯层的后续候选并没有接受映射扩展决定。本轮已保守恢复原ADR0250的所有层不得热带范围，保留CPC本身按外层分类的事实、当前Volume/1m³以及已修正热量和批群账本；原映射和历史ADR字节不变。[范围证据](shared-cpc/31413-scope-evidence.json)与[修复回读](shared-cpc/31413-scope-alignment-readback.json)可核对。

唯一仍含两个CPC声明的material manifest为non-energetic-weapon-environmental-manufacturing，其44720/44730均为proxy，且该PCR没有accepted正向边。这些声明不构成正式共用映射；不能只为一对一而复制成两个规范PCR。是否另建产品方法需独立边界、方法需求及证据审查。

[原/新14码完整身份表](shared-cpc/inventory.json)、[当前集成审查](shared-cpc/final-integration-review.json)及[34新增码+14原共享码的48次运行时解析](shared-cpc/final-runtime-resolution.json)均已保留。该审查不授予科学、翻译、发布或部署批准。

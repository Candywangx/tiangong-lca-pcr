---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-nmp-gbl-methylamine-synthesis
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# γ-丁内酯和单甲胺制未配制 N-甲基-2-吡咯烷酮

## 1. 范围与适用性

本方法适用于以外购γ-丁内酯（GBL）和无水单甲胺（MMA）经连续非催化液相合成及蒸馏新制的未配制散装液态 N-甲基-2-吡咯烷酮（NMP，CAS872-50-4）。其建模需求在于关联开环／环化、反应生成水、过量甲胺回收、NMP／重组分分离、有条件的碱辅助提纯及与库存关联的厂门验收；一个聚合前景单元内保留各阶段测量。专利支持历史流程构型，不是强制操作配方。[来源：`basf-nmp-process-2007`；`epa-nmp-scope-2017`。]

排除有意配制的 NMP 水溶液、电解液或溶剂配方、回收废 NMP、药物制剂、其他内酰胺及混合甲胺／催化路线。GBL／MMA 的供应商制造由实际上游数据集承载；不得将一体化顺酐或丁二醇生产链默认为本接收到厂门单元的一部分。专用低水／低金属品级须提供实际新增精处理、损失及验收数据，商业品级规格不是通用品质默认值。NMP 的五元内酰胺身份支持提出剩余杂环子集，但须按下文评估竞争的当前酰胺边界；不代表全部 CPC34160 化合物或全部药用环系。[来源：`epa-nmp-scope-2017`；`basf-nmp-product`；`unsd-cpc-2025`；`wco-hs29-2022`。]

分类为待独立审查的较窄关系提案。CPC3.0 35220 明确包括环酰胺，因此构成实质反证，不能仅因 NMP 属于杂环而排除该反证。NMP 具体属于五元内酰胺：HS2022 品目2933 包括内酰胺，子目2933.79 包括其他内酰胺。第29章注3规定货品同时可归入两个或多个品目时，采用编号在后的品目，因此支持将该具体内酰胺按2933 而非一般羧酰胺品目2924 评估。HS2017 2933.79 与 CPC2.1 34160 的历史对照仅为既往分类旁证。本提案不声称存在当前 CPC3.0／HS 对照、权威产品归类裁定或已接受映射；实际分子／整股产品证据以及 CPC35220／35230 的竞争边界仍须由主控审查。[来源：`unsd-cpc-2025`；`wco-hs29-2022`。]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.bulk-nmp-gbl-methylamine-synthesis |
| classification_refs | CPC 3.0 34160; narrower product and route boundary |
| covered_products | 外购 GBL 和无水 MMA 新制未配制散装液态 NMP |
| excluded_products | 有意混合物；回收废溶剂；药物制剂；其他分子；催化或混合甲胺路线 |
| representative_product | 具有实际含量、水、残留 GBL／MMA、杂质及色度规格的验收液态 NMP |
| production_route | 连续非催化 GBL／MMA 合成；甲胺／水回收；NMP 蒸馏；实际有条件的碱提纯；散装储存／装卸 |
| market_state | 厂门口未配制散装液体；披露实际供货状态及品级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应供下游工业使用的未配制 NMP |
| How much | 1 kg |
| How well | 满足实际声明的销售／验收规格；不假定含量、水、金属或色度限值 |
| How long or cycle | 一个声明的代表性完整生产期间 |
| reference_flow_link | accepted_nmp |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | N-甲基-2-吡咯烷酮 `5c41bfdd-a740-4672-aa66-88df7ea25f81` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS 和整股产品身份;品级／SKU;含量／水／GBL／MMA／杂质;未配制液态;排除包装的净质量;工厂／地理／期间;GBL 和 MMA 上游路线及交付状态;原料相态;合成／回收／精制构型;碱使用及组成;公用工程及供应商参考基准;治理和接收方;共产品;事件锁定首次验收 Q／Q0 及同基准 D_new／FG_new／L_new 核对;分配和不确定性 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品为 1 千克验收净整股液体，包括实测微量水和杂质，不含包装。含量折纯 NMP 组分质量另列，绝不改变分母。 |
| quantity_basis | all inventory rows | 声明交换属性 | 声明交换单位 | 保留各原始分子单位；体积仅按相符的实测密度／组成／状态换算，气体采用实际温压及参考约定，蒸汽采用共同焓基准。区分分数与百分比。UUID 身份不验证供应商数量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收厂门外购液态 GBL 和无水 MMA，连接完整相符供应商背景 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 剩余杂环内酰胺的一个子集；分类不是流程证据 |
| recursive_input_rule | 外购 NMP 作为独立同类输入保留上游负荷和用途；内部循环配对并在本聚合边界抵消 |
| upstream_dataset_requirement | 实际供应商 GBL／MMA 生产、品级、供货状态、组成及地理；碱液和公用工程须有整股相符数量基准 |
| disclosure | 接收至合成／回收／精制及散装验收厂门，包括储存、启停、清洗、治理、废物去向及原料／在制品／成品结转；上游另行连接 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | nmp_unit | 保留接收／预热、液相合成、降压、MMA／水回收、NMP 精制及验收储存／装卸的分阶段计量。聚合前记录各循环和配对转移；中间 NMP 不另作第二参考输出。 | `basf-nmp-process-2007`; `epa-nmp-scope-2017` |
| boundary_controls | nmp_unit | 以实际治理后为最终排放点，保留逸散／启停损失。外部处理接收一股物理废物流；内部处理须列实际原子试剂、燃料、残余物及最终物种。散装厂门排除有意配方和运输包装；实际包装交付须另列包装交换并声明扩展。 | `jrc-cww-2016`; `epa-nmp-scope-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| nmp_unit | GBL／MMA 合成、回收及散装厂门供应 | required | 所声明连续非催化液相路线 | foreground | 1 kg |

保留实际阶段流程图以及独立的反应、甲胺／水、精制和公用工程计量。回收甲胺外供用途具有条件；同一物理份额的内部循环、外部处理及销售去向互斥。下列卡片为起始原子交换；声称研究完全覆盖之前，必须补充每种实际额外添加剂、清洗剂、载热介质、制冷剂泄漏、共产品及最终污染物。不采用任何来源中的收率、配方、纯度限值或去除率为默认值。

### 过程：一体化 NMP 生产 (`nmp_unit`)

#### 输入

##### 产品流

###### γ-丁内酯原料 (`gbl_feed`)

称量外购新鲜 GBL（CAS96-48-0），分析水、GBL 及实际有机杂质；记录供应商交付状态和库存。内部回收 GBL 为配对内部转移，不是又一笔采购。

- 选定流: 外购液态γ-丁内酯
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### 无水单甲胺原料 (`mma_feed`)

仅用于实际无水单甲胺（CAS74-89-5）；记录接收压力及相态，所声明路线采用液相进料。保留整股试剂质量、含量、杂质及新鲜／回收区分。外购水溶液或混合甲胺配方须另设整股交换并审查范围。

- 选定流: 甲胺 `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### 有条件的提纯碱液 (`caustic_solution`)

仅在实际采用氢氧化钠辅助提纯时纳入。称量外购整股溶液并分析浓度，在组分账中分别保留 NaOH 和水；不得以纯 NaOH 千克代替溶液千克，不规定专利用量。其他试剂须另设行。

- 选定流: 氢氧化钠水溶液提纯试剂
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### 有条件的氮气供应 (`nitrogen`)

仅在实际使用时纳入保压、氮封或干燥的新鲜氮气；计量质量，或按实测组成、温度、绝对压力、湿度、压缩性及供应商参考条件换算实际气体体积。

- 选定流: 保压及氮封用氮气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 外购电力 (`electricity`)

分项计量接收泵、反应辅助设备、回收／精制塔、真空、冷却、储存和治理用电；保留供应电压及电源组合，按 3.6 MJ/kWh 将实测千瓦时换为 MJ，不作质量换算。

- 选定流: 外购交流电
- 流属性/单位: 能量 / MJ
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 外购间接加热蒸汽 (`indirect_steam`)

纳入进料加热及再沸器实际输入蒸汽；测量质量、压力、温度和干度。回流凝结水单列，并核对供应商焓基准；内部回收反应热属于内部能量连接。

- 选定流: 外购间接加热蒸汽
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 工艺补水 (`process_water`)

测量实际用于清洗、水相提纯或废气治理的新鲜补水；不得因反应生成水而虚构进料水量。回用工艺水属于内部转移。

- 选定流: 工艺补充水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 冷却补水 (`cooling_water`)

边界内存在蒸发冷却系统时适用。补水独立于循环量计量，保留蒸发、飘水、排污和库存变化。外购冷却服务须采用与其边界相符的供应商数据。

- 选定流: 循环冷却系统补充水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

#### 输出

##### 产品流

###### 验收未配制液态 NMP (`accepted_nmp`)

唯一实测首次验收事件厂门处净整股液态产品 1 千克，不含运输包装；包括实测水和杂质，折纯质量另列。在该事件锁定 Q，后续物理损失或去向不减少已验收生产，退货／复检不新增验收。参考行是核算坐标，独立物理账中实际外部发货、损失和库存仅记录一次。

- 选定流: N-甲基-2-吡咯烷酮 `5c41bfdd-a740-4672-aa66-88df7ea25f81`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_reference`
- 来源: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

###### 加热凝结水回送 (`condensate_return`)

仅记录实际回送蒸汽供应方的清洁间接加热凝结水；测量质量和热力状态，将物理水量及回送焓与受污染反应水分开，不假定供应商抵扣。

- 选定流: 回送间接蒸汽凝结水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utility`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 有条件的回收甲胺溶液外供 (`recovered_mma_export`)

仅当实际满足规格、验收且对外具有用途的单甲胺水溶液才作为共产品；测量整股溶液、水及全部溶质。内部甲胺循环不跨本聚合厂门；废弃时记入甲胺水废液行。不得以纯甲胺 UUID 代表该溶液。

- 选定流: 回收单甲胺水溶液
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_outputs`
- 来源: `basf-nmp-process-2007`; `epa-nmp-scope-2017`

##### 废物流

###### 甲胺回收水相排放废液 (`amine_water_waste`)

称量甲胺／水回收环节实际送外部处理的排放废液；分析水、MMA、NMP、GBL 及实际其他成分，保留接收方和处理信息。这不是可销售溶液，也不是淡水基本流排放。

- 选定流: 含单甲胺的回收水相废液
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### NMP 精制塔底残液 (`refining_bottoms`)

测量实际最终整股重组分塔底残液；存在时包括残留 NMP、GBL、低聚物、水及提纯盐。内部重组分返工为配对转移；表征各化学组分，不把每个组分虚构为单独废物运单。

- 选定流: NMP 蒸馏重组分塔底残液
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 清洗废液 (`cleaning_effluent`)

采集各实际清洗作业外排量及 NMP／MMA／GBL、清洗剂和水分析与接收方；在完成数据集前，将每种实际添加的清洗剂另列输入。

- 选定流: NMP 装置清洗废水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 冷却系统排污 (`cooling_blowdown`)

实际循环冷却排污送处理时适用；测量整股水流、溶解盐和冷却药剂，不得代替工艺排放废液，亦不得漏记单独的新鲜冷却药剂。

- 选定流: 循环冷却系统排污水
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 送外部处理的捕集工艺废气 (`captured_vent`)

仅指跨至外部治理供应方的实际捕集整股废气；记录载气、组分、来源和接收方。以下最终大气残余排放与其不重叠；若治理处于边界内，则此为内部连接，必须补充其全部试剂、能耗、残余物和最终排放。

- 选定流: 捕集的 NMP 和甲胺工艺废气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

##### 基本流

###### 排至室外空气的 NMP (`nmp_air`)

筛查实际最终放空、真空、储存、装卸及逸散损失；在实际捕集／治理后测量 NMP（CAS872-50-4）。低挥发性不证明为零；产品 UUID 不能标识基本流排放。

- 选定流: 排至室外空气的 N-甲基-2-吡咯烷酮
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 排至室外空气的甲胺 (`mma_air`)

测量互不重叠的最终出口及逸散中实际残余单甲胺（CAS74-89-5）；与溶液转移及捕集气体分开。总胺、氨和甲胺并非可互换的物种质量。

- 选定流: 排至室外空气的单甲胺
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 排至室外空气的 GBL (`gbl_air`)

实际残余气体或气溶胶中存在 GBL（CAS96-48-0）时适用；保留相态、浓度基准及互不重叠的来源覆盖。未测挥发损失属于未解决项，不是默认排放因子。

- 选定流: 排至室外空气的γ-丁内酯
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 排至室外空气的氮气 (`nitrogen_air`)

保压或氮封实际最终释放氮气时适用；核对供气、捕集治理转移、溶解／库存氮，区分分子氮、胺氮及实际化学生成的含氮物种。

- 选定流: 排至室外空气的氮气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

###### 排至室外空气的水蒸气 (`water_vapour`)

测量最终冷却或工艺出口实际蒸发水量；水账中区分反应生成水与输入公用工程水，排除内部凝结回流及夹带有机物质量。存在飘水液滴时须另设与相态相符的行。

- 选定流: 排至室外空气的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 归属于本期新首次验收批群的累计物理交换量 / Q；cp_reference。结转继承交换向量，将旧批群的后续服务分开。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release`
- 来源: `jrc-cww-2016`; `basf-nmp-process-2007`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | nmp_unit | 先保留未分配整股物理流。按实际计量对专用合成、甲胺外供调理、精制、储存及处理服务进行细分或虚拟细分。生成水、内部甲胺循环、回送凝结水及废弃残液均不预设可销售共产品份额。 | `jrc-ilcd-general-2010` |
| allocation_causality | nmp_unit | 对真正不可分的有用外供共产品，按实测工况响应检验逐交换的决定性物理因果关系。总质量、含氮量及热值均不是通用分配键。仅按有依据的化学／物理去向归属物化反应物负荷；不得仅按销售名称分配全部甲胺输入。 | `jrc-ilcd-general-2010` |
| allocation_residual | nmp_unit | 在归因型研究中，对因果／细分处理后仍剩余的联合环境负荷，披露同期间分离厂门价值，并对实际有用功能采用 a_i=m_i*p_i/sum(m_j*p_j)。统一币种及物理品级／状态并检验价格敏感性；未知或非正值须审查。完整输出质量／物种账独立于负荷份额保留；不同时叠加替代产品抵扣，废物处理归于其致因服务。 | `jrc-ilcd-general-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | nmp_unit | accepted_nmp | measurement | 批号; 唯一首次验收事件编号／时间; 按验收基准实测整股验收千克; 含量／水／杂质; 不可变批群; D_new 净发货／退货关联; FG_new 期末验收库存; L_new 其他验收后净去向／损失; 期初成品; 退货; 返工／复检; 原始 Q0; 基准换算／不确定性 | 采用经校准净秤或罐计量及温度相符的实测密度、验证色谱／水分析和不可变事件／批号记录。权威 Q 锁定为同一验收基准上唯一首次验收事件实测质量之和。以同基准且互斥的净 D_new + FG_new + L_new 核对 Q，不据此重新定义 Q：净发货扣除关联退货，L_new 保留全部其他验收后净损失／耗用／降级／废弃或期末转入返工／在制品的量。内部总循环量和重新验收均不产生 Q。仅当其余验收后净去向全部为零时，D_new+FG_new 单独成立。期初成品和旧退货保留原始 Q0；Q 为零／未知时仅保留原始记录。 | kg | 每批及连续计量；每期间核对 | 一个覆盖启停、不合格品回收和清洗的代表性完整期间 | 声明工厂及 nmp_unit 全部阶段／治理 | 每 1 kg 参考流 | 校准、含量分析验证、样品监管、库存关联、检出限及不确定性 |
| cp_material | nmp_unit | gbl_feed; mma_feed; caustic_solution | measurement | 供应商；CAS；整股千克；组成分数；原料温压；原料／在制品库存；新鲜采购；回收转移；继承向量 | 核对经校准接收／领用及各实际转移，并作代表性整股组成采样；测量原料／在制品期初期末物理量及其继承逐交换量和负荷向量；内部配对必须一致。 | kg | 每批及连续计量；每期间核对 | 一个覆盖启停、不合格品回收和清洗的代表性完整期间 | 声明工厂及 nmp_unit 全部阶段／治理 | 每 1 kg 参考流 | 校准、含量分析验证、样品监管、库存关联、检出限及不确定性 |
| cp_utility | nmp_unit | nitrogen; electricity; indirect_steam; process_water; cooling_water; condensate_return | measurement | 阶段；计量表；原始单位；千瓦时；蒸汽／回水千克；温压／干度／焓；气体约定；水千克；库存；服务批群 | 分项计量阶段和辅助／治理负荷；核对输入蒸汽及回水、气体状态换算与完整冷却／工艺水账。单独标识旧批群后续服务，采用原始验收 Q0 而非本期 Q。 | kg; MJ | 每批及连续计量；每期间核对 | 一个覆盖启停、不合格品回收和清洗的代表性完整期间 | 声明工厂及 nmp_unit 全部阶段／治理 | 每 1 kg 参考流 | 校准、含量分析验证、样品监管、库存关联、检出限及不确定性 |
| cp_outputs | nmp_unit | recovered_mma_export | measurement | 整股千克；MMA／水／NMP／GBL 分数；厂门；接收方；实际有用规格；批群库存；价格币种；向量 | 称量并分析整股外供溶液，证明实际有用去向，区分外供、循环及处置。未分配物理输出独立于共功能负荷分配。 | kg | 每批及连续计量；每期间核对 | 一个覆盖启停、不合格品回收和清洗的代表性完整期间 | 声明工厂及 nmp_unit 全部阶段／治理 | 每 1 kg 参考流 | 校准、含量分析验证、样品监管、库存关联、检出限及不确定性 |
| cp_waste | nmp_unit | amine_water_waste; refining_bottoms; cleaning_effluent; cooling_blowdown | measurement | 来源阶段；整股千克；水和各成分；作业批次；库存；接收／处理；发票或运单；继承向量 | 称量实际转移，代表性组成采样，保留接收处理证据；解析水／有机物／盐质量及氮，不把外部转移变成直接空气／水排放。 | kg | 每批及连续计量；每期间核对 | 一个覆盖启停、不合格品回收和清洗的代表性完整期间 | 声明工厂及 nmp_unit 全部阶段／治理 | 每 1 kg 参考流 | 校准、含量分析验证、样品监管、库存关联、检出限及不确定性 |
| cp_release | nmp_unit | captured_vent; nmp_air; mma_air; gbl_air; nitrogen_air; water_vapour | measurement | 来源／出口；CAS；相态；实测浓度／流量／时间；干湿基温压；捕集；治理／停运；逸散损失；检出限 | 筛查实际进料／反应杂质物种，以验证的代表性采样测量互不重叠的最终出口及无组织损失；按运行状态积分相符浓度和流量，捕集送外部整股气体另记。未知物种仍为缺口；实际存在厂内出水口时，须原子化补充出水及每种污染物。 | kg | 每批及连续计量；每期间核对 | 一个覆盖启停、不合格品回收和清洗的代表性完整期间 | 声明工厂及 nmp_unit 全部阶段／治理 | 每 1 kg 参考流 | 校准、含量分析验证、样品监管、库存关联、检出限及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_cohort | all inventory rows | 对实测事件锁定且 Q>0 的首次验收批群，将归属该批群的实际场址交换除以 Q，保留分子单位及声明范围内全部验收后损失和服务。前期本前景原料／在制品逐交换向量有据结转一次，本期增量场址作业添加一次。将已嵌入输入供应商数据的历史上游负荷与本前景向量分开：供应商仅采用已连接的聚合输入数据集或互不重叠的展开上游阶段，不得两者重复。分配后的环境向量和未分配物理账分别保留，不按负荷份额缩减共产品质量。accepted_nmp = 1 千克为归一化参考坐标，不是额外物理外部输出。采购日期、发货时间和剩余可用库存均不重定义 Q。 | cp_reference; cp_material; cp_utility; cp_outputs; cp_waste; cp_release | 每 1 kg 参考流的数量 | `jrc-ilcd-general-2010` |
| acceptance_event_bridge | nmp_unit | Q = 按声明整股产品验收基准实测并锁定的唯一首次验收事件质量之和。一般核对为 Q = D_new + FG_new + L_new，各项为同基准、相互排斥的带符号净交接／库存／去向记录，该新首次验收批群期初库存为零；组成／水分等基准变化须采用实测数据换算。D_new 为扣除关联退货后的净验收发货，FG_new 为期末验收成品，L_new 为全部其他验收后净去向，包括实际损失／耗用／降级／废物及期末返工／在制品转移。验收100千克、净发货60千克、期末成品30千克、损失10千克时，Q 保持100千克而非90千克。内部总循环量、退货／复检事件及验收本身均不是额外外部物理输出。未解释残差仍为未解决项，不得把损失设零或重算 Q 强制闭合。 | cp_reference; cp_material; cp_outputs; cp_waste; cp_release | 锁定 Q 及完整验收／库存／去向核对 | `jrc-ilcd-general-2010` |
| stocks_and_services | nmp_unit | 按库存类别和不可变批群，将实际期初原料／在制品／成品加接收及物理生产，与实际外部输出、耗用、损失、废物和期末库存核对；内部转移仅在聚合账中抵消一次。锁定原始验收 Q／Q0，将未分配整股物理／组分／物种量与归属负荷向量分开。每笔原料／在制品转移结转其自身前期前景交换向量一次；已包含在关联供应商中的上游背景不再另作历史场址向量添加。验收后退货、储存、返工或复检为该原始验收批群的增量服务，除以原始 Q0，实际损失仍予保留。Q0 未知时仅保留原始修正记录。不得将旧成品／退货／重新验收加入新 Q，不得将其服务分给本期 Q，也不得把验收和发货同时计作独立外部物理输出。 | cp_reference; cp_material; cp_utility; cp_outputs; cp_waste | 批群库存及服务账 | `jrc-ilcd-general-2010` |
| reaction_balance | nmp_unit | 对总质量及守恒元素 C／H／N／O／Na，检查输入 + 期初库存 = 外部输出 + 期末库存；配对内部连接抵消并披露不确定性。对每个反应物种 X 采用期初 X + 输入 X + 实际 G_X = 输出 X + 期末 X + 实际 C_X。GBL + MMA 生成 NMP + 水的净分子式为 C4H6O2 + CH5N = C5H9NO + H2O；按含量分析及去向确定实际反应程度，不规定收率。NaOH 辅助 GBL 转化、副反应、盐及低聚物须有实际物种测量／化学计量。不得把水、GBL 或 MMA 当作惰性物质强制守恒；未解释残差保留为发现，不虚构排放。 | cp_material; cp_reference; cp_outputs; cp_waste; cp_release | 未分配质量／元素／物种账 | `basf-nmp-process-2007`; `epa-nmp-scope-2017`; `jrc-cww-2016` |
| utility_and_release | nmp_unit | 蒸汽净热量为输入千克乘供汽焓减回送千克乘回水焓，采用同一基准；kJ/1000 换为 MJ。物理水另列，按实际供应商总／净基准处理，避免第二次热抵扣。排放按物种浓度乘相符实测流量和运行时间积分，区分干湿气体、气溶胶及检出限删失结果。批群归属总量除以其验收量，不规定默认密度或去除因子。 | cp_utility; cp_release; cp_reference | 热／水及最终物种交换 | `jrc-cww-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 核对实际整股产品／试剂／废物／基本流身份、相态、组成、属性／单位及供应商参考。NMP 和 DMSO 可有共同溶剂用途，但身份不同；纯 MMA 不能代表外供水溶液。普通 UUID／供应商未解决项明确保留为缺口。 | 原生直读、供应商分析及交付／接收记录 |
| quality_methods | nmp_unit | 保留实际阶段完整性、原料杂质转化、生成水、循环及处理去向、校准和代表性异常工况覆盖。专利示例和商业专用等级不是通用活动参数、效率或纯度目标。 | `basf-nmp-process-2007`; `epa-nmp-scope-2017`; `basf-nmp-product`; `jrc-cww-2016` |
| quality_cohorts | cp_reference | 证明事件锁定的唯一首次验收 Q、互斥且同基准的 D_new／FG_new／L_new 桥及全部验收后物理损失；本前景原料／在制品／成品向量仅结转一次，不重复嵌入供应商的历史上游。将旧服务原始 Q0、未检出、未知原分母、分析不确定性、缺失物种及分配敏感性作为研究缺口保留。 | 批群核对、测量及缺失数据登记 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_nmp | 要求恰有一个最终未配制液态 NMP 产品输出、已验证质量链及全部限定信息。拒绝将 DMSO、其他内酰胺、回收废溶剂混合物、配方、基本流或仅折纯组分质量作为参考。 | `basf-nmp-process-2007`; `epa-nmp-scope-2017` |
| validate_quantity | all inventory rows | 要求有限实际量、实测不可变 Q>0、同一验收基准及双语等效1kg参考。核对每个首次验收事件、净发货／退货／成品／其他损失桥、原料／在制品／成品物理及本前景向量、与供应商背景的不重叠、旧服务 Q0 和相符换算。验收后损失不能降低 Q，总循环量／退货／复检不能抬高 Q。Q 为零或未知时仅保留原始记录；归一化不替代物理账输出。 | `jrc-ilcd-general-2010` |
| validate_chemistry | nmp_unit | 检查未分配质量／元素账，另查反应物种 G／C 及水生成／消耗；核对循环配对、各物理去向、整股溶液外供与纯组分区分、实际提纯盐及治理后排放；不得虚构残差流或通用收率。 | `basf-nmp-process-2007`; `epa-nmp-scope-2017`; `jrc-cww-2016` |
| validate_allocation | nmp_unit | 检查真实有用功能、先细分后决定性物理因果关系及披露的剩余价值份额；保留完整物理质量及原始批群向量。捕集废气、废水、凝结水及内部循环均不自动获得共产品份额或替代产品抵扣。 | `jrc-ilcd-general-2010` |
| validate_completeness | nmp_unit | 研究完成须有实际来源／接收方特定清单、供应商基准、原始证据及全部新增厂内治理／包装／清洗／排放物种。结构或计量检查成功不建立方法学批准、翻译审查或工厂数据集合格性。 | `jrc-cww-2016`; `jrc-ilcd-general-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明的新鲜 GBL／无水 MMA 制未配制散装 NMP 路线，具有相符供应商／处理连接及实际品级／厂门 |
| excluded_use | 通用 CPC34160 或 NMP 生产组合；回收溶剂；有意配方；混合甲胺；催化路线；自动研究合格性或比较声明 |
| required_metadata | 全部参考限定信息；阶段边界；实际原料／提纯组成；上游交付状态；最终出口／接收方；库存／批群／Q／Q0 向量；分配及供应商固定信息 |
| required_quality_disclosure | 身份／供应商缺口、原生分类债务、实际期间／覆盖、测量不确定性、删失排放、物种／库存闭合及分配敏感性；独立的文档审查／科学／研究状态 |
| update_trigger | 原料路线／状态／组成、合成／提纯／治理、品级／厂门、共产品用途、库存／服务归属或供应商约定变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| basf-nmp-process-2007 | literature | BASF, US7227029B2, Method for the continuous production of N-methyl-2-pyrrolidone, 2007-06-05; https://patents.google.com/patent/US7227029B2/en | 说明书中液相 GBL／MMA 反应、甲胺／水回收、有条件 NaOH 后处理、NMP 侧线及循环段。仅支持历史定性构型，不采用示例操作参数、含量／色谱面积百分比、收率或添加量。 |
| epa-nmp-scope-2017 | official_guidance | US EPA, Scope of the Risk Evaluation for N-Methylpyrrolidone, EPA-740-R1-7005, June2017, AppendixB pp58–59; https://www.epa.gov/sites/default/files/2017-06/documents/nmp_scope_6-22-17_0.pdf | 定性佐证 GBL／MMA 开环、环化／脱水和蒸馏；提供水相／一体化路线及回收的反证。历史初步汇编，不是收率／排放默认值，也不是当前监管／健康判定。 |
| basf-nmp-product | literature | BASF, N-Methylpyrrolidone Life Science commercial product page, snapshot2026-11-08; https://products.basf.com/global/en/ci/n-methylpyrrolidone-life-scien | 实际 CAS872-50-4 商业产品、散装供货和专用品级区分；不将厂家纯度／低胺／水值提升为通用品级或路线默认值。 |
| jrc-cww-2016 | official_guidance | European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector, 2016, JRC103096, BAT2–4 pp543–544/PDF573–574; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | 化工通用流清单、反应／副产品流程图及来源特定水／气监测。不是 NMP 特定因子或法律排放限值，实际原子交换与测量仍由前景要求确定。 |
| jrc-ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3 pp255–264/PDF275–284; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型细分、逐交换决定性物理因果关系及剩余离厂价值分配。Q／Q0、首次验收、库存／向量及后续服务规则为本 PCR 明确的前景协议综合，不是引用的 ILCD 工厂公式。 |
| unsd-cpc-2025 | official_guidance | UNSD, CPC Version3.0 Structure and Explanatory Notes, 30June2025, subclasses34160,35220 and35230; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 当前类别及竞争的35220环酰胺／35230环系边界，保留实际反证；不构成自动当前HS对照、产品裁定或正向映射接受。 |
| wco-hs29-2022 | official_guidance | WCO, HS2022 Chapter29, Notes1/2/3/7, headings2924 and2933, other lactams2933.79; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0629_2022e.pdf?la=en | 具体内酰胺2933.79及第29章注3在竞争品目同时适用时相对一般羧酰胺2924的后列品目优先；单独化合物及指定环系／制品边界背景。不构成自动当前CPC对照或权威海关产品裁定。 |

---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bombs-grenades-torpedoes-mines-missiles-and-similar-munitions-of-war-and-parts-thereof-2a511aac
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 弹药、弹体及其零件：环境清单核算

## 1. 范围与适用性

本候选规则提供交付弹药、弹体及其零件的非操作性环境核算，定义工厂报告边界、供应接口、实测环境总量和数据质量检查。不提供制造操作、含能配方、组装装填顺序、起爆机制、性能设计或运行参数。千克是生产归一化单位，不代表军事功能或性能等价。

联合国CPC原文覆盖完整交付件及零件，包括弹丸和塞垫，并未提供共同生产配方。完整件、惰性零件与购入完整件须声明不同环境接口。工厂边界清单不含后续储存、部署、使用、靶场残留和退役处置；EPA资料指出后期污染路径，因此排除不意味着为零。不规定材料、能源、寿命、收率或排放的默认数值。[un-cpc3-2025; epa-munitions-environment]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bombs-grenades-torpedoes-mines-missiles-and-similar-munitions-of-war-and-parts-thereof-2a511aac |
| classification_refs | CPC 3.0 44740 |
| covered_products | 交付的炸弹、手榴弹、鱼雷、水雷、导弹及类似弹药；弹药筒、其他弹药、弹丸及其零件，包括弹丸和塞垫。每个数据集必须声明一种类别及交付状态。 |
| excluded_products | 枪械及其他武器（44730）；刃具武器（44750）；属于44760的武器零件；作业服务、设计指导、靶场修复及使用后处理数据集。 |
| representative_product | 供应方识别的验收交付件；空黄铜弹壳仅举例说明惰性零件接口，不赋予代表质量。 |
| production_route | 环境报告分区：供应方完成的交付件或零件；厂内制造总量；最终验收与包装；外包服务。声明实际自制采购覆盖而不描述操作顺序。 |
| market_state | 验收的新交付件或零件，声明完整、惰性或未装填状态；不同类别之间不声称等价。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂边界生产并交付声明类别的交付件，不作操作功能比较。 |
| How much | 一种声明类别和交付状态的验收净质量1千克。 |
| How well | 通过供应方验收和追溯记录确认交付状态，不规定弹道、含能或设计标准。 |
| How long or cycle | 一个工厂生产报告期，不假定服役寿命或部署周期。 |
| reference_flow_link | accepted_article |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收交付弹药件 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 交付件类别；完整件或零件；惰性、未装填或交付状态；供应方与场址；报告期；验收标识；净质量范围；自制采购边界；上游供应方覆盖；保密及未披露数据范围；运输和包装处理；排放成分及环境介质定义 |

限定信息必须载于数据集元数据及支持记录。类别产品UUID未解决时，不得用民用石油射孔产品或一个采购零件代替整个类别。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | D为报告期同一声明类别和状态的验收产品净质量；采用经校准称重或可追溯称重记录，排除运输包装。报废品、在制品及其他类别不计验收产出；用cp_accepted_article采集。 |
| normalization | 所有清单行 | 各行对应属性 | kg, kWh, MJ, t*km | 最终交换为每1千克参考流。先完成库存核对、内部转移抵销及有依据的分配，再用同期可归属交换总量除以D；保留分子单位。 |
| chemical_basis | 排放及残留物 | 已识别成分质量 | kg | 每个平衡项必须匹配实验室成分、相态、介质及湿干基准。污泥或颗粒物总质量不等于其中铅铜质量。每个产品、投入、废料、污泥、库存和排放项均须有其自身匹配的成分分析、分析定义及水分基准；不得以共同分析值代替所有项。明确报告未检出及检出限。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际供应方交付边界和场址报告范围；声明期初期末库存及供应环境数据集范围。 |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | CPC 3.0 44740 |
| recursive_input_rule | 采购的同类别零件或交付件为独立供应接口，上游负荷只计一次；不得递归重复其构成材料或供应方制造。内部转移抵销。 |
| upstream_dataset_requirement | 匹配实际交付状态、质量属性、供应方地区年份及交付边界。包含所有相关供应生产及可归属运输，包括经独立核验的保密材料接口；缺失证据保持明确覆盖缺口。 |
| disclosure | 披露自制采购分区、供应覆盖、外包服务边界、排除生命周期阶段及未公开清单。仅有环境总量不能证明未披露材料清单完整。 |

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_once | all processes | 将每项实际场址活动映射至一个环境报告分区。供应方已完成操作在上游；厂内制造和最终验收负荷、搬运、公用工程及污染控制计量一次。这些分区是核算边界，不是生产顺序。 | un-cpc3-2025 |
| boundary_lifecycle | all processes | 工厂生产与出厂后储存运输、部署、使用、处置及修复分开。可归属的厂内质量检测环境排放纳入生产总量，不规定检测方法或条件。 | epa-munitions-environment |
| boundary_coverage | all exchanges | 要求独立审查每项实际材料、采购零件、服务、废物及排放物种的环境接口登记；数据集中各自另列原子交换。公开候选卡片为有条件示例，不是完整覆盖或省略保密负荷的许可。支持证据不能审查时报告不完整，不报零。 | epa-tri-reporting |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| supplier_interfaces | 采购接口核算 | required | 所有实际外部交付，包括外包环境供应边界；不披露供应配方。 | 前景环境核算 | 每 1 kg 参考流 |
| site_environment | 场址环境清单总量 | required | 所有可归属厂内制造、公用工程、搬运和污染控制总量，按环境报告分区核验。 | 前景环境核算 | 每 1 kg 参考流 |
| delivered_gate | 验收产出与包装核算 | required | 一种声明交付类别和状态；包装分开记录并关联验收记录。 | 前景环境核算 | 每 1 kg 参考流 |

### 过程：采购接口核算（`supplier_interfaces`）

#### 输入

##### 产品流

###### 空黄铜弹壳（`empty_brass_case`）

仅在从报告边界外采购时适用。记录合金牌号、空壳交付状态和供应方覆盖，不记录几何结构或生产操作；交付弹壳的供应负荷只计一次。

- 选定流：空黄铜弹壳
- 流属性/单位：质量 / kg
- 数量规则：cp_empty_brass_case的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_empty_brass_case`
- 来源：`epa-tri-reporting`

###### 未装填钢制弹药壳体（`unfilled_steel_casing`）

仅适用于实际采购的未装填壳体。核验钢材牌号、表面状态和供应方交付边界；供应方钢材和公用工程不得再次计入前景总量。

- 选定流：未装填钢制弹药壳体
- 流属性/单位：质量 / kg
- 数量规则：cp_unfilled_steel_casing的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_unfilled_steel_casing`
- 来源：`epa-tri-reporting`

###### 聚乙烯弹药塞垫（`polyethylene_wad`）

有条件记录实际采购的零件，声明聚合物牌号和供应方边界。它是独立交付零件，不是假定所有弹药类别均有的投入。

- 选定流：聚乙烯弹药塞垫
- 流属性/单位：质量 / kg
- 数量规则：cp_polyethylene_wad的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_polyethylene_wad`
- 来源：`epa-tri-reporting`

###### 公路货车货运服务（`transport_service`）

有条件记录供应数据集尚未包含的入厂承运服务：使用实际托运质量和距离；运输质量包含包装，但产品分母排除包装。

- 选定流：公路货车货运服务
- 流属性/单位：运输功 / t*km
- 数量规则：cp_transport_service的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport_service`
- 来源：`epa-tri-reporting`

### 过程：场址环境清单总量（`site_environment`）

#### 输入

##### 产品流

###### 工厂电表处购入交流电（`grid_electricity`）

仅计量购入供电，声明地区、电网年份、电压和供应方。厂内发电是另行计量的服务并记录其燃料和排放，不得再作为购电投入。

- 选定流：工厂电表处购入交流电
- 流属性/单位：电能 / kWh
- 数量规则：cp_grid_electricity的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grid_electricity`
- 来源：`epa-tri-reporting`

###### 工厂交付表处购入饱和蒸汽（`purchased_steam`）

有条件记录购入蒸汽；保留计量交付有效热和供应方实际冷凝水返回边界。若无经核验的供应方MJ记录，则以实测蒸汽质量乘以实际供给状态相对于声明共同参考的比焓差计算交付能量：kg × MJ/kg = MJ；按同一参考扣除实测冷凝水返回能量。保留供应状态、焓值证据及不确定性，不规定操作设置。供应方锅炉燃料及烟囱排放留在上游，不规定运行参数。

- 选定流：工厂交付表处购入饱和蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：cp_purchased_steam的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_purchased_steam`
- 来源：`epa-tri-reporting`

###### 工厂交付表处购入天然气（`natural_gas`）

有条件记录实际固定公用工程燃料，保留计量数量和有依据的热值换算。供应负荷与实测厂内燃烧排放分开。

- 选定流：工厂交付表处购入天然气
- 流属性/单位：能量 / MJ
- 数量规则：cp_natural_gas的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_natural_gas`
- 来源：`epa-tri-reporting`

###### 厂内搬运设备用柴油（`diesel`）

有条件记录实际搬运设备燃料。记录接收、领用和库存变化，不假定设备工作循环或油耗。

- 选定流：厂内搬运设备用柴油
- 流属性/单位：质量 / kg
- 数量规则：cp_diesel的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_diesel`
- 来源：`epa-tri-reporting`

###### 工厂水表处购入工业用水（`purchased_water`）

仅计购入水；保留供水来源，水表记录体积时保留密度换算。冷却循环为内部流转，不重复作为外部用水。直接取水需要另列按来源区分的基本流。

- 选定流：工厂水表处购入工业用水
- 流属性/单位：质量 / kg
- 数量规则：cp_purchased_water的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_purchased_water`
- 来源：`epa-tri-reporting`

#### 输出

##### 废物流

###### 送往回收商的未污染黄铜废料（`brass_scrap`）

有条件记录惰性废料的供应和接收方及实测质量。核验污染状态，危险残留物不得用该流替代。处理或回收供应负荷只计一次。

- 选定流：送往回收商的未污染黄铜废料
- 流属性/单位：质量 / kg
- 数量规则：cp_brass_scrap的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brass_scrap`
- 来源：`epa-tri-reporting`

###### 脱水含金属废水处理污泥（`metal_sludge`）

有条件记录实际污泥；保留湿干基准、实验室成分身份、含水率和接收方验收。污泥总质量不等于其中任何金属质量。

- 选定流：脱水含金属废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：cp_metal_sludge的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_sludge`
- 来源：`epa-tri-reporting`

###### 转交许可处理方的含金属水性废液（`offsite_effluent`）

有条件记录外送废液；将实际每股液流分别记录并核验接收接口。同一转移金属不得再作为直接河流排放。

- 选定流：转交许可处理方的含金属水性废液
- 流属性/单位：质量 / kg
- 数量规则：cp_offsite_effluent的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_effluent`
- 来源：`epa-tri-reporting`

##### 基本流

###### 向空气排放的化石二氧化碳（`fossil_co2`）

有条件记录实际厂内公用工程燃烧排放，以独立有依据的燃料碳与氧化碳证据或物种监测总量确定；不得将供应电力因子当作厂内烟囱排放。

- 选定流：向空气排放的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：cp_fossil_co2的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fossil_co2`
- 来源：`epa-tri-reporting`

###### 向空气排放的一氧化碳（`carbon_monoxide`）

有条件记录监测的公用工程排放。需物种监测或有依据的物种因子，碳闭合不能单独确定一氧化碳。

- 选定流：向空气排放的一氧化碳
- 流属性/单位：质量 / kg
- 数量规则：cp_carbon_monoxide的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carbon_monoxide`
- 来源：`epa-tri-reporting`

###### 向空气排放的二氧化氮（`nitrogen_dioxide`）

有条件记录实际二氧化氮排放。以NO2计的氮氧化物报告不自动等于分子NO2；保留分析定义，若报告混合物则另建对应流。

- 选定流：向空气排放的二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：cp_nitrogen_dioxide的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_nitrogen_dioxide`
- 来源：`epa-tri-reporting`

###### 向空气排放的铅（`lead_air`）

仅在证据识别实际向空气排铅时适用。记录有组织或无组织排放区别及实测元素铅基准；不得用颗粒物总量或产品总质量推算。

- 选定流：向空气排放的铅
- 流属性/单位：质量 / kg
- 数量规则：cp_lead_air的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lead_air`
- 来源：`epa-tri-reporting`

###### 向淡水排放的铜（`copper_water`）

仅适用于接收水体和成分定义明确的实测最终淡水排放。用实验室浓度与对应排水量计算，排除外送或留在污泥中的量。

- 选定流：向淡水排放的铜
- 流属性/单位：质量 / kg
- 数量规则：cp_copper_water的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_copper_water`
- 来源：`epa-tri-reporting`

### 过程：验收产出与包装核算（`delivered_gate`）

#### 输入

##### 产品流

###### 瓦楞纸板运输箱（`corrugated_box`）

有条件记录实际验收产品包装，质量与交付件分开计量。纳入包装供应负荷及可归属的报废包装。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：cp_corrugated_box的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_corrugated_box`
- 来源：`epa-tri-reporting`

###### 运输用钢带（`steel_strapping`）

有条件记录实际钢制包装固定带，与纸箱和产品本体分开计量。不规定包装构造。

- 选定流：运输用钢带
- 流属性/单位：质量 / kg
- 数量规则：cp_steel_strapping的报告期可归属数量 / D；先核对库存并分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steel_strapping`
- 来源：`epa-tri-reporting`

#### 输出

##### 产品流

###### 验收交付弹药件（`accepted_article`）

参考输出；具体数据集只代表一种声明的交付件类别和状态，不得为混合篮子。记录排除运输包装后的验收净质量。

- 选定流：验收交付弹药件
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accepted_article`
- 来源：`un-cpc3-2025`

## 7. 分配与共产品处理

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | all processes | 分配前研究细分和系统扩展。对于声明的归属型工厂边界产品清单，优先专属记录；剩余共用总量按实测相关物理驱动分配。采用其他关系时说明物理因果关系为何不适用，记录价格期和敏感性。 | eu-ef-2021 |
| allocation_residues | all waste rows | 可回收废料、危险废物和共产品必须区分。不得自动抵扣原生材料；声明回收处理约定及供应方边界。转移和内部循环本身不能产生环境收益。 | eu-ef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_empty_brass_case | supplier_interfaces | 空黄铜弹壳 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_unfilled_steel_casing | supplier_interfaces | 未装填钢制弹药壳体 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_polyethylene_wad | supplier_interfaces | 聚乙烯弹药塞垫 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_transport_service | supplier_interfaces | 公路货车货运服务 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | t*km | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_grid_electricity | site_environment | 工厂电表处购入交流电 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kWh | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_purchased_steam | site_environment | 工厂交付表处购入饱和蒸汽 | primary_record | 供应方；供给返回状态；报告期；核验交付MJ或实测蒸汽冷凝水质量；比焓证据；共同参考；实际返回边界；分配及不确定性 | 核对核验实测MJ或实测质量 × 实际状态对应比焓差，采用共同参考并另行计入实际冷凝水返回；核验供应边界及计量来源不确定性。不规定操作设置。 | MJ | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_natural_gas | site_environment | 工厂交付表处购入天然气 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | MJ | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_diesel | site_environment | 厂内搬运设备用柴油 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_purchased_water | site_environment | 工厂水表处购入工业用水 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_brass_scrap | site_environment | 送往回收商的未污染黄铜废料 | primary_record | 物流身份；接收方；转移票据；湿干基准；化学分析；质量；报告期；库存变化；处理边界 | 核对校准废物称重或计量转移、接收记录及实验室物流表征；不规定安全搬运或处理操作。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_metal_sludge | site_environment | 脱水含金属废水处理污泥 | primary_record | 物流身份；接收方；转移票据；湿干基准；化学分析；质量；报告期；库存变化；处理边界 | 核对校准废物称重或计量转移、接收记录及实验室物流表征；不规定安全搬运或处理操作。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_offsite_effluent | site_environment | 转交许可处理方的含金属水性废液 | primary_record | 物流身份；接收方；转移票据；湿干基准；化学分析；质量；报告期；库存变化；处理边界 | 核对校准废物称重或计量转移、接收记录及实验室物流表征；不规定安全搬运或处理操作。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_fossil_co2 | site_environment | 向空气排放的化石二氧化碳 | primary_record | 物种；介质；有组织、无组织或排放口身份；采样日期；实验室结果；检出限；对应气水流量；报告期总量；方法不确定性 | 采用有资质的物种分析及对应排放流量与时间覆盖；保留监测总量或透明核验因子。废物转移与直接排放分开。每个项保留其自身对应成分分析；选择性年度TRI报告仅为佐证，不证明清单完整或未报告为零。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_carbon_monoxide | site_environment | 向空气排放的一氧化碳 | primary_record | 物种；介质；有组织、无组织或排放口身份；采样日期；实验室结果；检出限；对应气水流量；报告期总量；方法不确定性 | 采用有资质的物种分析及对应排放流量与时间覆盖；保留监测总量或透明核验因子。废物转移与直接排放分开。每个项保留其自身对应成分分析；选择性年度TRI报告仅为佐证，不证明清单完整或未报告为零。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_nitrogen_dioxide | site_environment | 向空气排放的二氧化氮 | primary_record | 物种；介质；有组织、无组织或排放口身份；采样日期；实验室结果；检出限；对应气水流量；报告期总量；方法不确定性 | 采用有资质的物种分析及对应排放流量与时间覆盖；保留监测总量或透明核验因子。废物转移与直接排放分开。每个项保留其自身对应成分分析；选择性年度TRI报告仅为佐证，不证明清单完整或未报告为零。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_lead_air | site_environment | 向空气排放的铅 | primary_record | 物种；介质；有组织、无组织或排放口身份；采样日期；实验室结果；检出限；对应气水流量；报告期总量；方法不确定性 | 采用有资质的物种分析及对应排放流量与时间覆盖；保留监测总量或透明核验因子。废物转移与直接排放分开。每个项保留其自身对应成分分析；选择性年度TRI报告仅为佐证，不证明清单完整或未报告为零。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_copper_water | site_environment | 向淡水排放的铜 | primary_record | 物种；介质；有组织、无组织或排放口身份；采样日期；实验室结果；检出限；对应气水流量；报告期总量；方法不确定性 | 采用有资质的物种分析及对应排放流量与时间覆盖；保留监测总量或透明核验因子。废物转移与直接排放分开。每个项保留其自身对应成分分析；选择性年度TRI报告仅为佐证，不证明清单完整或未报告为零。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_corrugated_box | delivered_gate | 瓦楞纸板运输箱 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_steel_strapping | delivered_gate | 运输用钢带 | primary_record | 单项交换身份；供应方；牌号及交付状态；数量；原始单位；换算证据；报告期；期初期末库存；分配驱动；供应覆盖 | 核对该单项交换的实际计量、交付和库存记录；核验供应方边界、地区年份和分配。运输采用实际托运质量和距离。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |
| cp_accepted_article | delivered_gate | 验收交付弹药件 | primary_record | 类别；交付状态；验收批次；报告期；校准验收净质量；包装皮重；废品；期初期末库存 | 使用经校准称重或可追溯称重记录核验声明类别状态的验收件，排除运输包装；核对验收和库存记录。 | kg | 逐条记录；报告期核对 | 同一声明报告期 | 声明工厂及关联供应边界 | 每 1 kg 参考流 | 校准；追溯；原始记录；覆盖；不确定性 |

原始报告期总量保留于支持记录。每个适用行先核对库存消耗及分配的共用服务，再除以D；cp_accepted_article为所有行确立同一分母。缺少有条件流须有依据地标记not_applicable；零需测量证据，未知仍为数据缺口。

EPA TRI记录可佐证部分化学品的年度排放、转移及废物报告。它是选择性报告资料，不是完整工厂LCI：报告适用资格、化学品清单、阈值、时间覆盖及汇总方式与本清单不同。未报告交换在场址证据确定数量或有依据的缺项前为未知，不自动为零。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 对每个适用原子交换，用核对后的报告期可归属总量除以同期验收产品净质量D。分配和换算另行记录；参考输出为1千克。 | period exchange total; D; cp_accepted_article | normalized exchange |  |
| generic_mass_closure | site_environment | 以一致湿干和成分定义核对外部质量投入及期初库存与验收产出、报废、废物、已识别排放和期末库存。适用时计入反应相关外部质量；成对内部转移抵销。按测量不确定性解释残差，不虚构统一容差。 | reconciled external mass records; stocks; assays | documented mass closure |  |
| species_release | lead_air; copper_water | 将指定物种实测浓度乘以对应采样排放量，保留单位与覆盖；汇总同物种同介质观测并按D归一化。无匹配分析时不得由混合物总质量换算成分质量。 | laboratory concentration; corresponding flow; period; D | species mass per reference flow | epa-tri-reporting |
| water_closure | purchased_water; metal_sludge; offsite_effluent | 将同期外部供水、投入含水、期初水库存及实际反应相关水量，与期末水库存、实测排水、实际蒸发、产品保留水分和湿废物含水核对。按实际外部边界核验成对水及冷凝水返回，抵销内部循环转移。体积换算采用有依据、匹配状态的密度并保留单位；将计量、成分分析、密度及库存不确定性传递至残差评价。不得自动将残差损失视为蒸发，也不得虚构容差。 | 水表；投入产品废物含水分析；水库存；实际反应水证据；排水蒸发证据；返回量；密度及不确定性 | 有记录的水量闭合 |  |
| contained_species_closure | empty_brass_case; unfilled_steel_casing; brass_scrap; metal_sludge; lead_air; copper_water; accepted_article | 对每种已识别守恒金属，在每个产品、投入、废料、污泥、库存和排放项上以该项自身匹配的成分分析及湿干基准核对所含质量。包括期初期末库存、成对内部转移及实际其他投入产出项；物种转化与元素守恒分开追踪。不得将一个共同合金或污泥分析值乘以所有项，也不得将载体总质量等同成分质量。 | 各项独立匹配分析；载体质量；期初期末库存；成分物种定义；环境接口登记 | 有记录的所含金属及物种核对 |  |
| utility_reconciliation | grid_electricity; purchased_steam; natural_gas; diesel; fossil_co2; carbon_monoxide; nitrogen_dioxide | 每种实际能量载体分开核对：外部输入加实测厂内产能及期初储能，与分配后的实测厂内需求、输出、实测期末储能及有证据的损失核对。记录换算和计量不确定性，不从残差推测未识别载体或损失。内部发电供热服务与其燃料不得同时作为独立外部采购供应投入。供能燃料上游供应负荷及厂内排放只计一次；购入热电供应负荷留在上游。 | 输入产能输出需求计量；储能记录；载体对应换算；损失证据；供应覆盖；分配及不确定性 | 各载体公用工程残差及不重复评价 |  |
| steam_energy_interface | purchased_steam | 优先采用核验的实测交付MJ。否则用实测蒸汽质量kg乘以实际供给状态相对于声明共同能量参考的比焓差MJ/kg；按同一参考扣除实测冷凝水返回质量乘以其自身比焓差。kg × MJ/kg = MJ。记录实际供给返回状态、供应边界、量热热力学来源、质量计量及不确定性。不规定蒸汽操作设置，不重复供应方燃料及烟囱排放。 | 实测蒸汽冷凝水质量；状态对应焓值证据；共同参考；供应边界及不确定性 | 用于归一化的购入蒸汽净交付MJ |  |

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | all rows | 选择UUID前核验交付状态类型、单位属性、供应方及地区；未解决身份仍为候选缺口。 | 身份直读与供应记录 |
| coverage | all processes | 记录实际自制采购边界及每项材料服务废物物种；独立审查保密环境支持证据。必要接口不可获得则数据集不完整。 | 环境接口登记及审查覆盖声明 |
| period | all protocols | 使用一致报告期、产出类别状态和分配驱动；核对计量库存验收发票。量化不确定性、缺失时段及检出限。 | 校准、实验室质控及审计记录 |
| ranges | all rows | 本规则未获得独立且边界匹配的经验范围。采集前景数据，不用配方估算或统一质量能源排放因子替代缺口。 | 场址记录及明确不确定性 |

## 9. 校验规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | accepted_article | 要求一种类别及交付状态、正的验收净分母D、包装分离和完整限定；披露类别UUID缺口。 | un-cpc3-2025 |
| validation_boundary | all processes | 检查自制采购覆盖、供应负荷一次及内部转移不重复；后续使用修复及外部废物处理与直接环境排放分开。 | epa-munitions-environment; epa-tri-reporting |
| validation_species | all emissions and wastes | 核验物种、介质、分析基准、报告期覆盖及未检出处理。CO和NO2需独立物种证据；转移废物和留存污泥不是直接排放。 | epa-tri-reporting |
| validation_completeness | all exchanges | 必要供应或场址接口不可审查、数量未知或UUID不匹配时，数据集覆盖不完整。通过有限归一化检查不证明所有生产负荷已覆盖或已满足发布条件。 |  |
| validation_closures | all exchanges | 要求包含含水、库存、反应水、蒸发、排水、湿废物及成对返回的水量闭合；每个项独立匹配分析的所含物种核对；各载体公用工程输入产能输出储能核对；以及核验的蒸汽能量冷凝水接口。以有记录的测量不确定性评价残差；不得采用统一容差、共同成分分析、假定损失或未报告为零规则。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 保留边界的声明类别工厂环境清单及下游process/lifecyclemodel投影。 |
| excluded_use | 制造操作；跨类别性能比较；操作性设计；未披露完整LCA主张；无独立证据的使用靶场修复估算。 |
| required_metadata | 参考限定；报告期场址；报告边界；供应数据集覆盖；环境接口；分配；单位换算；保密；省略生命周期阶段。 |
| required_quality_disclosure | 未解决流身份；无经验默认值；采样检出限；保密接口审查覆盖；定量及边界缺口；代表性及不确定性。 |
| update_trigger | 类别交付状态、自制采购边界、供应地区年份、环境控制、清单证据或已接受身份发生变化。 |

## 11. 数据源

| 来源id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.239; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类边界；不提供生产配方或经验因子。 |
| epa-munitions-environment | official_guidance | US EPA, Military Munitions/Unexploded Ordnance, Overview; https://www.epa.gov/fedfac/military-munitionsunexploded-ordnance | 反证：工厂清单不等于完整生命周期污染覆盖。 |
| epa-tri-reporting | official_guidance | US EPA, TRI EZ Search, available report categories; https://www.epa.gov/enviro/tri-ez-search | 物种介质、直接排放、转移、废物及报告年份区别；无生产因子。 |
| eu-ef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, section4.5 p.87; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 通用细分、扩展及物理关系分配层级。 |

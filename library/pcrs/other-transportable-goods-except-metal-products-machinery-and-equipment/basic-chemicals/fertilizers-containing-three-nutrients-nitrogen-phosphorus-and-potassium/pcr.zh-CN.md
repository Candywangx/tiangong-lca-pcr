---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-three-nutrients-nitrogen-phosphorus-and-potassium
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 尿素、磷酸一铵和氯化钾干混制备的氮磷钾肥

## 1. 范围与适用性

本方法覆盖外购粒状尿素、粒状磷酸一铵和K2O当量质量分数≥60.0%的粒状肥料级氯化钾的干法物理混合。路线包括接收、分隔贮存、混前筛分、计量投料、混合、干式集尘、最终验收和散装装载或装袋。混配和包装归为一个前景单元，各阶段单独计量。不发生化学反应、造粒、压实、加水、涂层或热干燥。边界依据`eu-jrc-lvic-aaf-2007`第7.2.1节的路线区分，以及`efba-solid-blending-2016`第2–5节的干混定义与物理质量控制。

排除混酸反应及Odda复合肥、NP/PK/NK产品、有机混合肥、溶液或悬浮液、硝酸铵混合肥、微量元素添加及涂层产品。实际场址若使用其他原料、液体清洗、燃烧设备、额外包装或存在其他实测排放，须补充逐项身份行及证据后才能应用本方法。任何来源案例都不提供默认配方、分析、收率、能耗、损失或排放量。`zaria-blending-2026`仅佐证工业干混路线确实存在。仅在第3节产品、路线及来源情境限制下使用较广参考身份；实际SKU及供方/背景兼容性仍须有记录地核实。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-three-nutrients-nitrogen-phosphorus-and-potassium |
| classification_refs | CPC 3.0 34641；建议narrower范围；无已接受映射 |
| covered_products | 仅使用三种规定矿质/化学原料的三元粒状干混肥 |
| excluded_products | 反应、压实、涂层、有机、液态、二元或硝酸铵产品 |
| representative_product | 一个实际验收SKU，声明N–P2O5–K2O分析，不预设等级 |
| production_route | 外购颗粒干法物理混配；单独连接上游制造数据集 |
| market_state | 出厂固体混合物，散装或袋装；净产品质量含水分但不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供含氮、磷、钾的矿质/化学肥料混合物 |
| How much | 1 kg 验收合格净成品 |
| How well | 实际SKU养分分析、水分、粒径分布、混合均匀性及约定验收规范 |
| How long or cycle | 一个声明的生产与贮存期至出厂交付；不含田间使用 |
| reference_flow_link | npk_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 多元复合肥，配方未说明 `b4e892e2-0421-4512-88e7-a5f8ae556d7a` |
| 参考流属性 | 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| 参考单位组 | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际SKU和配方；三种养分含量均为正；尿素/磷酸一铵/氯化钾等级及供方；干法物理路线；N及P2O5/K2O分析基准和磷溶解性；交付净质量及水分；粒径和离析测试；工厂、生产期及供电；包装类型；较广参考身份的来源情境限制及经核实实际供方边界 |

数据集须携带必需限定信息。1 kg基准表示产品供应，不表示养分当量功能比较或田间响应主张。 所选较广产品流未规定CAS、固定等级、配方或制造路线，也未规定每粒的养分结构；本PCR将其限定为实际尿素/磷酸一铵/氯化钾三元干混物。原生名称保留DB1307/T 149—2022下河北张家口胡麻田间投入/种肥情境，来源未明确配方和供方并截断上游生产。须披露这些来源用途/接口限制；它们不证明目标SKU、厂门供方或上游零负荷。不得将原田间用量、地域供方主张或截断移入本生产清单；另行核实实际供给接口并补齐上游负荷。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_product | npk_product | 质量 | kg | 称量验收产品并排除外袋及内衬。计入实际保留水分；记录毛重、皮重及校准净重。采用cp_net。 |
| nutrient_basis | feed_urea; feed_map; feed_kcl; npk_product | 质量 | kg | 清单采用商品质量，不采用kg N、P2O5或K2O。单独记录实测养分分数与水分；氧化物当量是报告约定，不是额外试剂输入。不得以理论纯度替代。 |
| energy_basis | electricity | Net calorific value | MJ | 保留核实的参考属性与单位。以精确3.6 MJ/kWh将计量kWh换算为MJ；匹配交付电能与供方边界，不作燃料热值换算。 |
| pm_intervals | pm25; pm2510; pm10plus | 质量 | kg | 采用互不重叠粒径区间及相同实际测量基准。总颗粒物仅作核对，不作为第四项相加交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购成品粒状尿素、磷酸一铵和氯化钾接收后用于干混 |
| starting_condition_role | upstream_product_interface |
| product_classification_scope | CPC 3.0 34641中规定的干混子集 |
| recursive_input_rule | 不将本混配单元递归应用于三种化学身份不同的原料；内部返工仅进入内部平衡 |
| upstream_dataset_requirement | 各原料、电网及包装分别匹配实际上游制造与入厂交付；披露缺失provider并避免重复运输 |
| disclosure | 报告场址、时期、路线、配方及等级生产期、全部接口、贮存/包装、排放、废物接收方及未决参考 |

从摇篮到大门供应模型将上游制造与运输连接至实测门到门混配单元。田间施用、土壤排放及下游包装处置不在本生产数据集内。声明入厂运输距离、载荷、方式及已有provider运输范围；存在缺失链接时不得声称摇篮到大门完整。纳入室内干清理及粉尘回收；液体洗涤/清洗及厂内燃烧不在选定路线内，须明确扩充方法。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blend | 接收、筛分、干混、除尘、贮存及交付包装 | required | 声明干法路线；包装行按实际交付有条件纳入 | foreground | npk_product |

实物阶段：接收原料→分隔贮存及筛分→计量混配→验收→贮存及交付。单独采集各阶段电力及原料交接，仅导出一个最终成品输出。回收粉尘与返工料为内部转移，两端实测量相等；不是额外外购原料、参考产品或外部抵扣。

### 过程：氮磷钾肥干混（`blend`）

#### 输入

##### 产品流

###### 尿素 (`feed_urea`)

外购粒状合成尿素；要求实际等级、粒径分布、水分、氮分析和供方路线。不得替换为以氮计的养分质量或尿素硝酸铵溶液。

- 选定流：尿素 (`3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_feed采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_feed
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 磷酸一铵 (`feed_map`)

外购粒状磷酸一铵（NH4H2PO4）；必须采集实际氮、P2O5当量分析和溶解性。拒绝仅粉状身份及磷酸二铵替代。纯盐理论组成不得替代肥料级分析。

- 选定流：磷酸一铵 (`90d4a1dc-fa9b-4f22-9c97-8acb0a457d0d`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_feed采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_feed
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% (`feed_kcl`)

外购粒状肥料级氯化钾须符合选定身份：K2O当量质量分数至少60.0%，等级背景为GB/T 37918-2019。核实实际等级和分析；该身份阈值不是配方或通用分析值。另一体积基准氯化钾记录的实际体积定义及供方换算未确立时不得采用。 此UUID的locationOfSupply为CN，限定中国工厂端产品供给。记录实际相符的CN来源接口、供方及入厂交付；非CN产品供给须先另核实匹配流，再行关联。

- 选定流：肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% (`c8585965-5595-48da-9260-2970ed1905cb`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_feed采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_feed
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 交流电 (`electricity`)

计量向用户供应的低压（<1 kV）电网交流电，覆盖输送、筛分、称量、混合、抽风、干清理和包装。数据库参考属性为净热值, 低位热值；报告交付电能，不虚构燃料热值。核对供方电压、地域、时期和变压边界。 此UUID的locationOfSupply为CN；仅用于有记录且相符的CN用户侧<1 kV电网平均供给接口。非CN供电须先另核实匹配电力流及供方，再行关联。

- 选定流：交流电 (`50657322-939c-4829-a87b-47c093bfa6a7`)
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：采用cp_energy采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_energy
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 聚丙烯编织袋 (`bag_pp`)

一个外购聚丙烯编织外袋，袋装交付时纳入。取得空袋质量、等级、再生料比例、封口和实际供方。不规定袋容量或数量；种子专用25 kg袋候选不能确立本通用袋身份。

- 选定流：聚丙烯编织袋
- 流属性/单位：质量 / kg
- 数量规则：采用cp_pack采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 聚乙烯薄膜 (`liner_pe`)

一项聚乙烯薄膜内衬，仅实际使用时纳入。核实聚合物CAS 9002-88-4、厚度、等级、添加剂、再生料比例及供方质量基准。源分类误指箱包；仅有条件保留实物薄膜身份，并要求源数据澄清。已使用复合袋背景时不得再次计入薄膜。

- 选定流：聚乙烯薄膜 (`e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_pack采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

#### 输出

##### 产品流

###### 多元复合肥，配方未说明 (`npk_product`)

一项出厂验收合格实物混合物；代表性整体样品含三种养分，不要求每粒均含三种养分。产品质量含实际保留水分，排除全部包装。仅按第3节干混限定及明确来源用途/接口限制使用所选较广产品流；不替换为Odda、水产或残余n.e.c.身份。

- 选定流：多元复合肥，配方未说明 `b4e892e2-0421-4512-88e7-a5f8ae556d7a`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：cp_net
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

##### 废物流

###### 粉尘 (`discard_fines`)

一项本混配生产期单独收集并弃置的肥料粉尘混合物，离厂处理时纳入。核实尿素/磷酸一铵/氯化钾组成、养分和水分分析、污染物及接收方准入。该广义工业粉尘身份不提供肥料专用处理数据集。内部返料既不是本废物输出也不是空气排放。

- 选定流：粉尘 (`2a6c9b60-a075-45ec-b611-c3b4dd255935`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_waste采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 氮磷钾肥包装弃置聚丙烯编织袋 (`waste_pp`)

一项不合格或损坏聚丙烯袋废物流。记录肥料残留污染、实际内衬分离及接收处理。随成品交付的合格袋不是此处废物；单列聚乙烯内衬废物，不用多聚合物集合行。

- 选定流：氮磷钾肥包装弃置聚丙烯编织袋
- 流属性/单位：质量 / kg
- 数量规则：采用cp_waste采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 氮磷钾肥包装弃置聚乙烯薄膜内衬 (`waste_pe`)

一项分离后的弃置聚乙烯内衬废物流。记录肥料残留质量和接收条件后称量；区分可售清洁边角料与污染处理废物，避免重复计入保留包装。

- 选定流：氮磷钾肥包装弃置聚乙烯薄膜内衬
- 流属性/单位：质量 / kg
- 数量规则：采用cp_waste采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

##### 基本流

###### 颗粒物 (PM2.5) (`pm25`)

治理设施之后以及归属本过程的无组织逸散中，实际排入室外空气、子介质未特指的≤2.5 µm颗粒物。采集分粒径测量；无默认排放量或粒径比例。捕集粉尘不是该交换。

- 选定流：颗粒物 (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_air采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 颗粒物 (PM2.5 - PM10) (`pm2510`)

实际排入室外空气的>2.5且≤10 µm残余颗粒物。该区间与pm25及pm10plus不重叠。累积PM10须在相同采样、水分和气体体积基准下先扣除实测PM2.5；无兼容数据时保留未决分段，不虚构比例。

- 选定流：颗粒物 (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_air采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

###### 颗粒物（> PM10） (`pm10plus`)

实际排入室外空气、子介质未特指的>10 µm残余颗粒物。仅兼容同步测量且非负核对时，才可用总颗粒物减去累积PM10。室内收集粉尘及留在厂内的沉降不是室外排放。

- 选定流：颗粒物（> PM10） (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- 流属性/单位：质量 / kg
- 数量规则：采用cp_air采集实际归属数量；报告每 1 kg 参考流。无默认数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`efba-solid-blending-2016`; `eu-jrc-lvic-aaf-2007`

## 7. 分配与共产品处理

通常声明的混合肥只有一个商品输出，无默认共产品分配。未分配实物质量/水/氮/磷/钾账须与分配后的环境负荷账分开。先依据实测记录分开等级生产期及专用设备。共享电力采用分表或实测设备工况与生产期归属；披露未决归属并检查敏感性。不按养分百分比拆分原料实物质量，不用分配份额机械缩减产品实物，也不抵扣内部返工。若存在真实单独销售的肥料粉尘共产品，应记录身份、数量、质量、接收方及功能，修订废物行，并在使用前独立审查分配。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各协议保留原始生产期总量。归一化前核对原始归属数量及同一期验收净成品质量；所有汇总结果为每 1 kg 参考流。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_net | blend | npk_product | foreground_record | SKU；等级；毛重；皮重；验收净kg；水分；N/P2O5/K2O分析；溶解性；拒收批；期初期末库存 | 校准产品称量及代表性批次采样；比较贮存与交付质量 | kg | 各批及阶段；空气测试连接至所代表运行时期 | 一个完整声明生产期，含启动、停机、清理及贮存 | 所选场址及实际等级生产期 | 每 1 kg 参考流 | 校准、采样、证书、原始合计及核对 |
| cp_feed | blend | feed_urea; feed_map; feed_kcl | foreground_record | 供方；批号；等级；配方；投料kg；库存；分析；水分；筛分；相容性证据 | 校准投料秤及库存核对；保留实际供方证书与物理测试 | kg | 各批及阶段；空气测试连接至所代表运行时期 | 一个完整声明生产期，含启动、停机、清理及贮存 | 所选场址及实际等级生产期 | 每 1 kg 参考流 | 校准、采样、证书、原始合计及核对 |
| cp_energy | blend | electricity | foreground_record | 阶段；电表；kWh；时间；电压；供方；地域；生产期；共享负荷 | 读取校准阶段电表，覆盖风机及包装；核对账单与工况归属 | MJ | 各批及阶段；空气测试连接至所代表运行时期 | 一个完整声明生产期，含启动、停机、清理及贮存 | 所选场址及实际等级生产期 | 每 1 kg 参考流 | 校准、采样、证书、原始合计及核对 |
| cp_pack | blend | bag_pp; liner_pe | foreground_record | 供方；聚合物；等级；实际空组件kg；交付包装数；复合边界；损坏kg | 分别称量聚丙烯与聚乙烯，核对领用、留存及损坏量 | kg | 各批及阶段；空气测试连接至所代表运行时期 | 一个完整声明生产期，含启动、停机、清理及贮存 | 所选场址及实际等级生产期 | 每 1 kg 参考流 | 校准、采样、证书、原始合计及核对 |
| cp_waste | blend | discard_fines; waste_pp; waste_pe | foreground_record | 来源；组成；污染；kg；水分；内部回收；接收方；处理；转移单 | 称量各项分离外排流及内部返料；保留接收方准入与转移记录 | kg | 各批及阶段；空气测试连接至所代表运行时期 | 一个完整声明生产期，含启动、停机、清理及贮存 | 所选场址及实际等级生产期 | 每 1 kg 参考流 | 校准、采样、证书、原始合计及核对 |
| cp_air | blend | pm25; pm2510; pm10plus | foreground_record | 源点；有组织/无组织；粒径组分；浓度；干湿及实际/标准气体基准；气量；运行时间；治理；检出限 | 记录治理后实际残余排放的测量、采样覆盖与无组织方法；无排放因子默认值 | kg | 各批及阶段；空气测试连接至所代表运行时期 | 一个完整声明生产期，含启动、停机、清理及贮存 | 所选场址及实际等级生产期 | 每 1 kg 参考流 | 校准、采样、证书、原始合计及核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | 各非参考交换保留以声明分子单位计的可归属期间原始总量X；换算及负荷计算后，仅在此按x = X / Q归一一次。采用同场址、同路线及同SKU状态的完整匹配生产期池，含失败和零产出批次、启停、拒收、清理、贮存及返工，并保留其实际投入、能源、废物和排放负荷。核对原料、在制品及成品的期初/期末存量及结转生产负荷、接收、领用与退货。Q为经存量和退货核对后可归属该池的唯一正值交付状态验收净产品kg；退回并再次验收的同一净批次只确认一次，内部返工不是新增产出。Q <= 0或无法匹配生产池及结转负荷时，保留原始记录，归一结果不可用。参考产品恰为1 kg；未分配实物账与负荷归属账分开保留。 | cp_net; cp_feed; cp_energy; cp_pack; cp_waste; cp_air | 归一化交换及保留原始总量 | efba-solid-blending-2016 |
| electricity_conversion | electricity | E_MJ = 计量生产期E_kWh × 3.6；按实测生产期归属并保留所得期间原始MJ总量。仅campaign_normalization除以Q。 | cp_energy; cp_net | E_MJ；期间原始总量 | efba-solid-blending-2016 |
| physical_balance | all inventory rows | 在未分配生产期账中核对接收原料加期初肥料库存，与验收产品、期末库存、实际弃置肥料及实测分粒径粉尘排放；单列拒收产品及有符号水分交换。保留包装为单独材料账。测量损失组成；不推定恒定收率，不将残差强行填入污染行。 | cp_feed; cp_net; cp_pack; cp_waste; cp_air | 质量、水及实测N/P/K组分平衡与残差 | efba-solid-blending-2016 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 独立于UUID查询核实实际等级、状态、配方、供方及参考属性。缺失provider或路线不匹配不能作为零负荷。 | cp_feed; cp_net; cp_pack |
| quality_blend | npk_product | 保留贯穿贮存/交付的代表性养分分析、水分、粒径相容性及离析测试；筛分或损失改变组成时，实测投料配方本身不足以证明成品组成。 | efba-solid-blending-2016 |
| quality_coverage | all inventory rows | 覆盖完整生产期及全部运行阶段；区分条件不适用、实测零、低于检出限、缺少测量及身份未决。使用前为实际未覆盖流补充原子行。 | cp_net; cp_air; cp_waste |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | npk_product | 要求实际成品干混SKU、三原料路线、第3节全部限定及与供方兼容的Mass/kg基准。较广参考UUID不证明原案例配方、匹配厂门供方或继承上游截断的许可；实际兼容性未决时不得作为完整现场数据集。计量检查通过不等于科学批准。 | eu-jrc-lvic-aaf-2007 |
| validate_denominator | all inventory rows | 一个输出等于1 kg净参考产品；双语行、采集及计算分母一致。生产期数量均为实际测量，无默认值。 | efba-solid-blending-2016 |
| validate_scope | all inventory rows | 核对干法物理路线及三种声明养分。增加原料、水、反应、压实、燃烧或湿处理时，须审查方法并增加原子行。 | eu-jrc-lvic-aaf-2007; efba-solid-blending-2016 |
| validate_emissions | pm25; pm2510; pm10plus; discard_fines | 核对室外空气介质、互不重叠粒径段、采样范围、实际气体体积基准及捕集粉尘不重复计入。未测粒径组分保留未决，不填零。 | efba-solid-blending-2016 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅供所选干混氮磷钾肥未来核实供应模型使用 |
| excluded_use | 未经核实现场数据集；反应氮磷钾肥、以氮计养分数据集、作物响应或田间排放 |
| required_metadata | 全部参考限定、时期、场址、上游链接、生产期记录、凭据及废物/空气边界 |
| required_quality_disclosure | 参考身份来源情境限制、包装/废物身份、供方链接、采样覆盖、分类瑕疵及不确定性 |
| update_trigger | 参考身份或来源情境约束变化、新路线/原料、分析或供方变化、废物/治理或测量方法变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅34641分类边界；不规定规范身份或工艺路线 |
| `eu-jrc-lvic-aaf-2007` | official_guidance | European Commission, LVIC-AAF BREF, August 2007, §§7.1 and 7.2.1, printed 283/285, PDF 311/313. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | 区分物理混合、反应及压实；养分报告基准；无来源数值默认值 |
| `efba-solid-blending-2016` | handbook | European Fertilizer Blenders Association, Handbook of Solid Fertiliser Blending, Code of Good Practice for Quality, third edition 2016, March 2017 file; §§2–5,7–9. https://fertiliser-society.org/wp-content/uploads/2019/11/Blender-Handbook-2017-efba.pdf | 干混定义、原料质量与相容性、称量、筛分、离析、采样及理化测试；历史法规引用不作现行法律指导；不将表值复制为配方或清单默认值 |
| `zaria-blending-2026` | literature | Zaria Fertilizers and Packaging Ltd, About Us, snapshot 2026-10-14. https://zariablenders.com/about-us/ | 仅生产者佐证工业氮磷钾肥干混；不移植场址数量、配方或排放 |

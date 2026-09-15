---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bismuth-antimony-manganese-chromium-and-articles-thereof-including-waste-and-scrap-of-b-b58e25dd
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铋、锑、锰、铬及其制品，包括铋或锰的废料和碎屑

## 1. 范围与适用性

本 PCR 适用于铋、锑、锰或铬金属，以及材料属性仍属于上述金属之一的制品的前景数据包。当铋或锰废料和碎屑为声明的参考产品时，也属于本 PCR 范围。必须声明产品金属种类、物理形态、纯度或牌号、生产路线、原生与再生原料占比、地理范围、报告期和出厂状态。

本类别不包括锰铁、铬铁、作为化学品销售的金属化合物、未生产涵盖金属产品而直接销售的矿石或精矿、锑或铬的废料和碎屑、金属陶瓷，以及按功能另行分类的下游产品。除非研究明确扩展边界，采矿和矿区选矿、原料接收前或成品发运后的外部运输、使用和生命末期均不在前景边界内。CPC 正式结构和解释性说明界定分类边界；有色金属 BREF 界定原生/再生生产及从原料到成品发运的过程框架（`un-cpc-3-0-2025`、`eu-jrc-nfm-bref-2017`）。

由于正式类别合并了差异显著的金属、路线和产品形态，下述参考模型采用由富铋铅精炼中间物回收的未锻轧铋。锑、锰、铬、加工制品或可销售铋/锰废料和碎屑的数据包应保留本 PCR 的计量、边界、分配和质量规则，但必须以一个具体产品流替换代表性产出，并增加路线特定的原子交换；不得以铋清单数值作为代理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bismuth-antimony-manganese-chromium-and-articles-thereof-including-waste-and-scrap-of-b-b58e25dd |
| classification_refs | CPC 3.0：41603（精确分类语境） |
| covered_products | 铋、锑、锰或铬金属；主要由其中一种金属构成的制品；铋废料和碎屑；锰废料和碎屑 |
| excluded_products | 锰铁；铬铁；作为商品销售的金属矿石和精矿；作为化学品销售的化合物；锑或铬的废料和碎屑；金属陶瓷；按功能分类的下游产品 |
| representative_product | 从富铋铅精炼中间物回收并在生产厂门交付的未锻轧铋金属 |
| production_route | 代表性路线：接收铋浮渣、回收与精炼、铸造和发运；涵盖的替代产品必须声明其自身的火法、湿法、电解、重熔或成形路线 |
| market_state | 工厂门净可销售质量；声明金属种类、形态、纯度或牌号、必要时的水分或污染物基准，以及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明规格的铋、锑、锰或铬金属产品、制品，或符合范围的铋/锰废料和碎屑产品 |
| How much | 1 kg 净可销售产品 |
| How well | 在工厂门满足所声明的化学组成、纯度或牌号、形态、适用时的尺寸和验收规格 |
| How long or cycle | 一个生产批次或按参考质量归一化的报告期产量；不计入使用期限功能 |
| reference_flow_link | 参考产品为扣除内部回用料、不合格品和未作为参考产品发运物料后的净合格产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未锻轧铋金属（代表性产品；UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 选定金属；产品形态；化学组成；纯度或牌号；原生与再生原料占比；生产与精炼路线；地理范围；报告期；工厂门边界；净质量基准；废料的水分或污染物基准；包装纳入情况 |

构建前景数据包时，`必需限定信息` 中每一项均须在数据集元数据、过程说明、参考流备注、产品描述或等效字段中声明。缺少限定信息时，参考流不完整。不得以混合废料、金属化合物、铁合金或其他代理替代 UUID 尚未解决的代表性产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的工厂门状态报告净合格产品质量；内部回用料和未作为参考产品发运的物料不计入。 |
| `scrap_mass_basis` | 作为参考产品或投入的铋/锰废料和碎屑 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明是否包括水分、涂层、附着物和非金属污染物，并在投入、产出和分配计算中保持同一基准。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明气体计量体积的温度、绝对压力和干湿基准；归一化前将所有记录转换至同一声明参考条件。 |
| `electricity_energy` | 外购和现场发电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电能，并采用一个有记录的换算关系转换为 MJ；声明电压等级、供应组合、损耗及是否纳入现场发电。 |
| `solution_mass` | 工艺用水、硫酸和氢氧化钠 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录交付溶液质量和浓度；纯物质当量只能作为附加计算字段，不得替代交付质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在前景设施门接收的富铋铅精炼浮渣，或另一种明确命名的原生/再生含金属原料 |
| starting_condition_role | 进入首个前景制备、回收或精炼作业的外购或转入原料 |
| product_classification_scope | 铋、锑、锰或铬金属及其制品，以及铋或锰废料和碎屑；相关铁合金和锑/铬废料不属于本身份 |
| recursive_input_rule | 跨越前景边界的涵盖金属或合格铋/锰废料，以具体产品投入记录一次并链接上游数据集；同一前景系统内循环的物料属于内部转移，不得再次计为外购投入或共产品 |
| upstream_dataset_requirement | 每项外购含金属原料、试剂、燃料、电力、氧气和工艺用水均须链接地理与技术适宜的上游数据集，或明确披露尚未解决的数据缺口 |
| disclosure | 声明选定金属与产品形态、原料来源、原生/再生占比、路线阶段、整合的上下游作业、污染控制边界、内部循环、外部处理、运输边界和遗漏过程 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_gate_boundary` | 前景金属生产 | 从接收原料到净合格产品，纳入直接控制的原料制备、回收或提取、精炼、铸造、路线内成形、内部循环、污染控制和发运准备；披露每个整合或遗漏阶段。 | `eu-jrc-nfm-bref-2017` |
| `sb_upstream_inputs` | 外购投入 | 采矿、矿区选矿和外购物料的生产不在前景边界内，但每项外购投入均须用适宜的上游数据集表示。 | `eu-jrc-nfm-bref-2017` |
| `sb_direct_emissions` | 前景释放 | 记录物料处理、热法或电解回收、精炼、铸造、产品处理和治理设施产生的实测直接释放；不得用上游电力排放替代直接烟囱或无组织释放。 | `us-epa-ap42-ferroalloy` |
| `sb_alternative_routes` | 非代表性涵盖产品 | 锑、锰、铬、加工制品或合格废料路线仅在数据包增加其具体原料、试剂、能源、残余物和直接排放交换后才符合要求；代表性铋流卡不得作为其他路线的默认值。 | `un-cpc-3-0-2025`, `us-epa-ap42-ferroalloy` |
| `sb_recursive_inputs` | 同类别投入和内部回用料 | 同类别物料跨越设施边界时，以具体投入及其上游数据集记录一次；内部回用料保留为内部转移，避免同类别递归或重复计量。 | `eu-commission-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `bismuth_recovery_refining` | 代表性铋回收、精炼和铸造 | `required` | 代表性未锻轧铋数据集必需 | 前景生产与污染控制 | 每 1 kg 工厂门净合格未锻轧铋金属 |
| `alternative_metal_route` | 锑、锰或铬替代生产路线 | `conditional` | 当上述金属之一为参考产品时，替代代表性过程纳入 | 产品特定前景生产 | 每 1 kg 工厂门净合格声明金属产品 |
| `article_forming` | 涵盖金属制品的成形或加工 | `conditional` | 当参考产品为锻轧或加工制品且作业位于工厂门内时纳入 | 路线内成形 | 每 1 kg 工厂门净合格制品 |
| `scrap_product_preparation` | 可销售铋/锰废料和碎屑的制备 | `conditional` | 当合格废料而非回收金属为参考产品时纳入 | 分选、清洁与制备 | 每 1 kg 按声明污染物基准计量的净可销售废料 |

### 过程：代表性铋回收、精炼和铸造（`bismuth_recovery_refining`）

#### 输入

##### 产品流

###### 富铋铅精炼浮渣（`input_bismuth_crust`）

记录进入整合过程的富铋浮渣或等效铋回收中间物的称量质量。须报告其来源、铋含量、水分和共存金属。

- 选定流：铅精炼产生的铋浮渣
- 流属性/单位：Mass / kg
- 数量规则：分配至报告期铋生产的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：

###### 浸出用硫酸（`input_sulfuric_acid`）

仅当声明的湿法路线在前景边界内采用浸出步骤时记录硫酸。浓度和交付溶液状态属于前景限定信息。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：纳入过程中消耗的实测交付硫酸溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：

###### 溶液处理用氢氧化钠（`input_sodium_hydroxide`）

仅当声明路线在前景边界内以氢氧化钠调节 pH、除杂或处理废水时记录。须单独记录浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：纳入过程中消耗的实测交付氢氧化钠溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：

###### 氧化精炼用工业氧气（`input_industrial_oxygen`）

仅当外供工业氧气计量进入所纳入的氧化精炼或治理作业时记录。须声明纯度、压力和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：转换到声明参考条件的氧气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_volume_records`
- 来源：

###### 过程用电力（`input_electricity`）

记录跨越前景边界、用于制备、回收、精炼、铸造和污染控制的电能。披露现场发电，避免重复计算外购物料中隐含的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入过程消耗的实测外购电力与符合范围的现场发电量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：

###### 热作业用气态天然气（`input_natural_gas`）

仅当气态天然气在所纳入的炉窑、保温、铸造、干燥或治理作业中燃烧时记录。须声明供应组成和计量参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：转换到声明参考条件的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_volume_records`
- 来源：

###### 过程用工艺用水（`input_process_water`）

记录跨越前景边界、用于浸出、洗涤、冷却补水或污染控制的工艺用水。闭路循环水属于内部转移，不得重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：扣除内部循环水后的实测新鲜工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_mass_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净合格未锻轧铋金属（`output_bismuth_metal`）

只记录满足声明组成和牌号的可销售未锻轧铋。内部回用料、不合格金属和共生产金属应作为独立的质量平衡产出处理。

- 选定流：未锻轧铋金属
- 流属性/单位：Mass / kg
- 数量规则：作为成品发运或转出的实测净合格铋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：

##### 废物流

###### 铋精炼渣（`output_bismuth_refining_slag`）

将离开铋回收或精炼过程的称量渣作为一个废物流记录。报告铋含量、其他受监管金属、处理路线及内部回用比例。

- 选定流：铋精炼渣
- 流属性/单位：Mass / kg
- 数量规则：离开前景系统进行回收、处理或处置的实测渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：

###### 收集的铋精炼粉尘（`output_bismuth_refining_dust`）

将物料处理、炉窑、铸造或烟气净化产生的收集含铋粉尘与直接颗粒物排放分开记录。报告组成和去向。

- 选定流：收集的铋精炼粉尘
- 流属性/单位：Mass / kg
- 数量规则：离开前景系统进行回收、处理或处置的实测收集粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass_records`
- 来源：

###### 铋精炼废水（`output_bismuth_refining_wastewater`）

记录最后一道纳入的内部处理步骤后跨越前景边界转移的废水。支持性记录中须保留废水体积、悬浮物和溶解金属分析结果。

- 选定流：铋精炼废水
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：

##### 基本流

###### 直接化石源二氧化碳（`output_fossil_carbon_dioxide`）

记录所纳入天然气燃烧或其他化石碳氧化产生的直接化石源二氧化碳。排除上游发电排放和生物源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测直接化石源二氧化碳释放量，或根据前景燃料与碳记录编制的有记录计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格未锻轧铋金属
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 分别计量的回收、精炼、成形和处理作业 | 在进行任何分配前，先细分前景系统，并将直接计量的投入、产出和排放归属于引起这些交换的过程。 | `eu-commission-pef-2021` |
| `allocation_physical_relation` | 无法避免的多产出作业 | 若细分或系统扩展不可行，采用经证明的因果物理关系，例如过程特定的可回收金属平衡；记录该关系、数据和敏感性。不得自动采用总质量或市场价值。 | `eu-commission-pef-2021` |
| `allocation_other_relation` | 不存在可辩护物理关系的多产出作业 | 若必须采用其他关系，应披露并论证该关系，保持分配负荷总量守恒，并报告主要替代方案的敏感性结果。 | `eu-commission-pef-2021` |
| `allocation_internal_returns` | 前景边界内回用的内部废料、粉尘、渣或金属 | 将内部回用料作为内部转移处理：不得就同一循环产生避免产品抵扣、新的外购投入或共产品产出。 | `eu-commission-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `bismuth_recovery_refining` | 含铋原料、过程化学品和净产品 | 经校准秤、储罐接收、库存记录和实验室证书 | 期初库存；接收；转移；期末库存；溶液浓度；水分；铋含量；净产品质量；牌号 | 将交易记录和校准计量协调至同一生产期 | kg | 每次接收或每批，按月汇总 | 完整声明报告期 | 所有纳入的过程区域和储存 | 期初库存 + 接收 - 期末库存 - 有记录转移，再按净合格产出归一化 | 校准证书、发票、库存协调和实验室证书 |
| `cp_gas_volume_records` | `bismuth_recovery_refining` | 天然气和工业氧气 | 交接计量或分表记录 | 仪表起止数；温度；绝对压力；干湿基准；气体身份；分配键 | 读取仪表并转换至声明参考条件 | m3 | 连续或逐批，按月汇总 | 完整声明报告期 | 所有纳入的炉窑、精炼容器和治理单元 | 汇总分配至纳入作业的校正体积，再按净合格产出归一化 | 仪表校准、气体规格和参考条件计算 |
| `cp_electricity_records` | `bismuth_recovery_refining` | 电力 | 结算电表和过程分表记录 | 仪表起止数；电压等级；外购电；现场发电；外送电；损耗；分配键 | 协调设施总表和过程分表 | MJ | 连续，按月汇总 | 完整声明报告期 | 所有纳入的制备、回收、精炼、铸造和控制作业 | 外购电 + 纳入的现场发电 - 外送电 - 排除用途，再按净合格产出归一化 | 仪表校准、公用事业账单和协调结果 |
| `cp_water_mass_records` | `bismuth_recovery_refining` | 新鲜工艺用水投入 | 水表和储罐记录 | 仪表起止数；水源；密度基准；循环水；排放 | 将新鲜补水与内部循环分表计量，并用有记录密度将体积转换为质量 | kg | 连续或每日，按月汇总 | 完整声明报告期 | 所有纳入的过程和控制作业 | 仅计算新鲜投入，再按净合格产出归一化 | 仪表校准、密度记录和水量平衡 |
| `cp_residue_mass_records` | `bismuth_recovery_refining` | 渣和收集粉尘 | 经校准磅单和实验室记录 | 毛重/皮重；水分；铋含量；其他金属；去向；内部回用 | 称量每次装运或每批物料，并协调内部回用料 | kg | 每批或每次装运 | 完整声明报告期 | 所有纳入的回收、精炼、铸造和治理作业 | 仅计算离开边界的质量，再按净合格产出归一化 | 衡器校准、废物联单和分析结果 |
| `cp_wastewater_records` | `bismuth_recovery_refining` | 铋精炼废水 | 排放仪表、储罐和分析记录 | 体积或质量；密度；处理阶段；悬浮物；溶解金属；去向 | 计量最后边界转移并保留代表性分析 | kg | 连续或逐次排放，按月汇总 | 完整声明报告期 | 最后一道纳入的废水处理边界 | 计算离开边界的质量，再按净合格产出归一化 | 仪表校准、采样计划、实验室结果和转移记录 |
| `cp_direct_emission_records` | `bismuth_recovery_refining` | 直接化石源二氧化碳 | 烟气监测或前景燃料与碳记录 | 实测 CO2；燃料体积；燃料碳含量；氧化基准；排除的上游排放 | 优先直接测量；否则采用有记录碳平衡计算并与燃料用量协调 | kg | 活动期或连续监测，汇总至报告期 | 声明报告期内的代表性运行 | 所有纳入的直接燃烧和氧化源 | 仅汇总直接化石源 CO2，再按净合格产出归一化 | 监测报告、碳含量实验室分析、计算和不确定性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化数量 = 报告期交换量 / 报告期净合格参考产品质量 | 经协调的交换量；净合格产出质量 | 每 1 kg 参考产品的交换量 | `eu-commission-pef-2021` |
| `calc_mass_reconciliation` | 含金属投入与产出 | 在同一水分和组成基准上协调含金属原料、产品、内部回用料、共产品、残余物和实测损失；调查并披露物料不平衡，不得强制闭合。 | 实测质量；水分；金属化验；库存变化；转移 | 有记录的总质量与铋质量协调 | `eu-jrc-nfm-bref-2017` |
| `calc_solution_reporting` | 硫酸和氢氧化钠溶液 | 纯物质质量 = 交付溶液质量 × 实测质量分数；同时保留交付溶液质量和纯物质结果。 | 交付溶液质量；浓度证书或分析 | 每参考流的交付溶液 kg 和纯物质 kg | |
| `calc_gas_conditions` | 天然气和工业氧气 | 采用有记录方程和压缩因子假设，将计量气体体积转换为声明的参考温度、绝对压力和水分基准。 | 计量体积；温度；压力；水分；压缩因子 | 每参考流在声明参考条件下的 m3 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留所报告产品的产品或废料规格、化学分析、形态说明、牌号、净质量基准和验收记录。 | 分析证书、产品规格、称量记录和发运记录 |
| `dq_route_identity` | 前景系统 | 说明金属种类、原料来源、路线阶段、技术、原生/再生占比、整合作业和排除作业；替代产品不得继承代表性铋清单。 | 过程流程图、运行说明和边界登记表 |
| `dq_temporal_representativeness` | 所有前景记录 | 覆盖声明的生产期和正常运行状态；识别停机、启动、维护、活动期和异常运行数据，并论证排除项。 | 带日期的仪表、批次、实验室和生产记录 |
| `dq_completeness` | 清单 | 协调所有重要外购物料、能源、水、净产品、共产品、残余物、废水和实测直接排放；每项交换均以一个具体流表示。 | 质量与能量协调、来源登记表和未解决数据日志 |
| `dq_measurement` | 仪表、衡器和分析 | 使用经校准仪器和有记录采样方法；报告换算、检出限、缺失数据处理和对结果有实质影响的不确定性。 | 校准证书、采样计划、实验室质量保证和计算表 |
| `dq_upstream_links` | 外购投入和外部处理 | 使用地理、技术和状态适宜的数据集，或披露每项未解决的上游链接及其预期重要性。 | 数据集映射登记表和供应商记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | 参考流 | 若数据包遗漏选定金属、产品形态、组成、牌号、路线、原生/再生占比、地理范围、报告期、工厂门或净质量基准，则拒绝。 | `un-cpc-3-0-2025` |
| `validation_reference_mass` | 归一化 | 确认每项报告交换均按 1 kg 净合格参考产品归一化，且分母不包括内部回用料和不合格品。 | |
| `validation_atomic_inventory` | 清单行 | 拒绝集合标签、合并公用工程、未指明燃料、未指明化学品、成组废物或成组排放；每项交换均须为一个具体产品流、废物流或基本流，并有自己的适用条件。 | |
| `validation_uuid_semantics` | Tiangong 身份 | 仅当 UUID 的公开状态、中英文名称、流类型、分类、属性、单位组、产品状态和过程角色均与选定交换相符时才可接受；尚无精确身份的 UUID 留空并披露。 | |
| `validation_route_completeness` | 替代产品和路线 | 若未以具体路线特定原料、试剂、能源、残余物、废水和直接排放交换替换代表性铋清单，则拒绝将其用于锑、锰、铬、制品或废料。 | `us-epa-ap42-ferroalloy`, `eu-jrc-nfm-bref-2017` |
| `validation_boundary_allocation` | 边界与多产出作业 | 确认已记录纳入与排除作业、上游链接、内部循环、外部处理和分配层级，且所分配负荷保持守恒。 | `eu-commission-pef-2021` |
| `validation_ranges` | 定量质量保证 | 本已编制 PCR 不规定外部典型范围；依据经协调的前景记录校验数值，不得根据一项研究、一个情景或不兼容产品状态虚构范围。 | |
| `validation_bilingual` | 双语数据包指南 | 确认带 UUID 的中文名称采用 Tiangong 直读中文 baseName，且行 id、UUID、受控值和规则 id 与英文版本一致。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个明确声明的涵盖金属产品、制品或合格废料产品的前景生产数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在提供全部必需限定信息、原子交换、上游链接、分配选择和数据质量证据后，对声明产品和路线进行工厂门建模 |
| excluded_use | 四种金属之间的类别平均比较；以一种金属或路线代理另一种；锰铁或铬铁；锑或铬废料；未限定金属化合物；未明确增加到边界内的下游加工、使用或生命末期 |
| required_metadata | PCR id 与版本；产品金属与形态；组成和牌号；原料来源与原生/再生占比；过程路线和技术；地理范围；报告期；工厂门状态；参考条件；上游数据集映射；分配方法；内部循环；处理去向；未解决身份与范围证据需求 |
| required_quality_disclosure | 记录覆盖率、仪器校准、采样与实验室质量保证、质量/能量协调、数据缺口、估算方法、不确定性、代表性局限和分配敏感性 |
| update_trigger | 产品金属或形态、原料来源或原生/再生占比、路线技术、整合作业、能源或水供应、污染控制、分配关系、处理去向、地理范围、产品规格，或前景绩效发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 正式指南（`official_guidance`） | 联合国统计司，CPC 第 3.0 版结构和解释性说明，2025 年 6 月 30 日更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 正式类别身份，以及与锰铁、铬铁和锑/铬废料的区分 |
| `eu-jrc-nfm-bref-2017` | 正式指南（`official_guidance`） | Cusano 等，Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries，EUR 28648 EN，JRC107041，2017，doi:10.2760/8224，https://publications.jrc.ec.europa.eu/repository/bitstream/JRC107041/kjna28648enn.pdf | 原生/再生金属生产边界、从制备到发运的阶段、铋回收语境、污染控制和质量协调 |
| `us-epa-ap42-ferroalloy` | 正式指南（`official_guidance`） | 美国环境保护署，AP-42 Background Report, Section 12.4, Ferroalloy Production，https://www.epa.gov/sites/production/files/2020-11/documents/b12s04.pdf | 锰/铬电解路线阶段和直接排放清单要求 |
| `eu-commission-pef-2021` | 正式指南（`official_guidance`） | 欧盟委员会 2021 年 12 月 15 日第 2021/2279 号建议，环境足迹方法，附件 I，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 功能单位归一化、分配层级、数据采集、质量与报告规则 |

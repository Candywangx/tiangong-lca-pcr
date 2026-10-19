---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.excreta-of-animals-useful-for-manure-fertilizer-and-fuel-preparation
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 农业用牛农家肥收集与固态贮存

## 1. 范围与适用性

本PCR涵盖供后续农业使用的散装固态牛农家肥制备：刮集已混有明确秸秆垫料的牛排泄物、不主动堆肥的固态贮存、必要的塑料异物去除，以及制备交付门称量装载。这是物理组成明确的混合物，不是单一养分。贮存中的自然生物变化仍须计入清单。`epa-manure-practices`区分贮存与堆肥、分离、干燥及消化；`ipcc-manure-2019`区分粪污管理与下游土壤和燃料途径。

排除液态粪浆冲洗与分离、禽类及其他非牛粪便、石灰或化学添加处理、主动堆肥、厌氧消化、卫生处理、强制干燥、制粒压块、燃料产品与燃烧、后续运输及田间施用。现有养殖清单提供输入接口，本PCR不重复其粪污管理排放。路线变化须重新判断适用性，不以UUID替换解决。不规定通用养分等级、排放因子、停留时间或商品合格阈值。`epa-manure-sampling`支持代表性采样；其田间施用采样在本方法中明确前移至交付门，不构成卫生或法定验收依据。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.excreta-of-animals-useful-for-manure-fertilizer-and-fuel-preparation |
| classification_refs | CPC 3.0 34654; narrower |
| covered_products | 含已声明原有秸秆垫料及所保留尿液、作为农业农家肥散装供应的固态牛排泄物 |
| excluded_products | 其他物种粪便；液态粪浆；分离固体；堆肥；消化残渣；化学处理粪肥；干燥颗粒；粪便燃料 |
| representative_product | 具有声明含水率和养分组成的散装固态牛农家肥 |
| production_route | 刮集→固态贮存→必要时去除塑料→称量散装装载；一个合并前景单元 |
| market_state | 交付湿固体，不含包装，制备交付门；声明农业用途 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供应作为后续农业用有机物料的牛农家肥 |
| How much | 1 kg 验收交付湿粪肥净质量 |
| How well | 声明牛源、垫料、含水率、总固体、挥发性固体、总碳、总氮与总氨氮、磷、钾、污染、用途及适用验收记录；不声称与矿质肥料养分等效 |
| How long or cycle | 一个声明的收集贮存交付期间，包含停留时间及期初期末库存 |
| reference_flow_link | finished_manure |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 农家肥 `26c889af-72da-455b-aae9-df5d1472280c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 牛源与上游门；秸秆垫料与尿液保留；固态证据；湿质量与含水率；总固体和挥发性固体；碳氮总氨氮磷钾分析及基准；贮存时间与覆盖；收集路线；污染与验收；散装门及接收方；地理及期间；上游分配与负荷接口 |

具体数据集元数据或关联记录必须声明必需限定条件。流身份不等于供应方清单，也不证明作物养分有效性。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用1 kg验收交付湿粪肥净质量；校准毛重减皮重，排除运输设备及包装。不得以干物质或养分质量代替湿产品质量。 |
| wet_dry | raw_manure, finished_manure, leachate, rejected_manure | Mass | kg | 整份湿流计一次；干物质=湿质量×总固体质量分数；水=湿质量−干物质。挥发性固体须注明干基，不等于元素碳或COD。原粪中已有秸秆及尿液组分为子账，不是额外采购。 |
| raw_conversions | all inventory rows | Mass or Net calorific value | kg or MJ | 归一化前换算原始单位：已积分液体体积乘匹配密度得到kg，物种浓度乘已积分气液体积得到物种kg。原记录为流率时才按时间积分；匹配气体温度、压力、湿干和浓度基准，累计体积不再乘时间。 |
| nutrient_basis | raw_manure, finished_manure, leachate | Mass | kg | TAN为总氨氮（NH3-N加NH4-N），须明确湿基或干基分析基准；TAN不等于排放的NH3分子。磷钾按元素报告，实验室氧化物基结果须有明确记录的化学计量换算；不从总养分量推定作物有效性。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 在所建模收集贮存前、已有秸秆垫料及所保留尿液的牛排泄物转移门；声明上游养殖及此前管理负荷 |
| starting_condition_role | 前景收集接口，不自动截断废物上游负荷 |
| product_classification_scope | CPC 3.0 34654 agricultural-use solid cattle subset; narrower |
| recursive_input_rule | 同类别粪肥产品输入仅凭已识别上游数据集及明确接口终止递归，不默认无负荷或重复此前贮存 |
| upstream_dataset_requirement | 注明上游养殖或残余物转移清单、饲料垫料责任、粪便分配、此前管理范围、地理时间和参考基准，核对实物转移与负荷 |
| disclosure | 披露阶段及门、停留与覆盖、全部出入库存、原始数量、继承负荷、排除的田间施用与燃料用途及缺失数量链接 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manure_unit | 包含收集贮存装载清洗、现场机械用能及直接排放。实物合并阶段仍保留阶段计量，内部交接不重复参考产出。 | `epa-manure-practices`; `ipcc-manure-2019` |
| boundary_paths | manure_unit | 下游施用与燃料利用位于本供货门之外，不默认抵扣替代肥料、避免潟湖甲烷或替代能源。收集渗滤液处理与接收方只链接一次；实际失控损失须在验收前补充物种和接收介质明确的原子行。 | `epa-manure-practices`; `ipcc-manure-2019` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manure_unit | 牛粪收集、固态贮存及散装供应 | required | 声明的固态牛粪农业路线 | foreground_production | 1 kg finished_manure |

### 过程：牛农家肥制备 (`manure_unit`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

有电动刮粪、输送、称量或装载时记录。此身份限定中国、低于1千伏、到用户的消费组合及电网平均供电，不是通用电网流；其他供电须另核身份及供应方。原生参考属性为净热值，电表千瓦时乘3.6转换为电能兆焦，不表示燃料热值。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Net calorific value / MJ
- 数量规则: 按cp_utilities采集，经原始换算及完整生产池核对后得到每参考流实测应计数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utilities`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 柴油 (`diesel`)

有柴油收集装载机械时记录，包含怠速、启动、失败搬运及退货处理。原生牌号、配方、炼制路线、地理及供应方未特指；须记录实际牌号、化石和生物比例、实测温度下密度及供应方。直接尾气只计一次，不得再叠加含同次燃烧的上游数据集。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_utilities采集，经原始换算及完整生产池核对后得到每参考流实测应计数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utilities`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 自来水 (`water`)

有设备或场地清洗时记录处理后的自来水，不适用于冲洗式液态粪污路线。原生身份为工厂端生产混合和水的生产供应，未指定地理。参考属性为质量；累计体积按实测或供方支持的密度换算，不再乘时间。清洗排水并入所收集渗滤液。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_utilities采集，经原始换算及完整生产池核对后得到每参考流实测应计数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_utilities`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

##### 废物流

###### 牛粪污 (`raw_manure`)

本收集贮存单元前的牛排泄物，含已有秸秆垫料和所保留尿液。整份湿物料只记一次；若上游实际交换为商品，不能使用该废物输入链接。原生身份为特定技术、农场端，未限定地理或固体比例。按声明的接口保留上游负荷，不自动假设零负荷。

- 选定流: 牛粪污 `87d40009-0114-4927-a82c-6ba41de4f994`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_mass采集，经原始换算及完整生产池核对后得到每参考流实测应计数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

##### 基本流

###### 氧气 (`oxygen`)

由实测生物转化及现场燃烧消耗的空气净氧，介质为空气中的可再生元素资源。排除未反应载气；按气体计量或明确化学计量模型独立支持耗氧，不用不明质量差额补平。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_balance采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_balance`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 水（雨水） (`rain`)

仅记录实际进入粪便贮存平衡的雨水，介质为水中的可再生物质资源。屋面分流清洁雨水不列本交换；记录暴露面积、雨量和收集效率，不假定全场降雨均进入粪便。

- 选定流: 水（雨水） `2a240c57-b782-4745-943b-0602d7a953c4`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_balance采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_balance`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

#### 输出

##### 产品流

###### 农家肥 (`finished_manure`)

在制备交付门验收的散装固态牛农家肥，供后续农业使用。原生身份为工厂交货、田间施用用途，组成和地理未指定，不包含田间撒施负荷。本PCR将该广义混合物限定为含已声明原有秸秆垫料的牛排泄物，不主动堆肥或加添加剂。UUID不提供养分浓度或含水率。

- 选定流: 农家肥 `26c889af-72da-455b-aae9-df5d1472280c`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_mass`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

##### 废物流

###### 收集牛粪渗滤液 (`leachate`)

收集后送往有记录废水处理设施的牛粪渗滤液，包含截留场地排水及清洗水。按一份实际湿废物混合物记录，溶解物与水为分析子账，不重复列废物质量。内部回流保留记录，不列厂界输出。未确认精确渗滤液身份。

- 选定流: 收集牛粪渗滤液
- 流属性/单位: Mass / kg
- 数量规则: 按cp_mass采集，经原始换算及完整生产池核对后得到每参考流实测应计数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 沾牛粪塑料筛渣 (`screenings`)

发生除杂时记录沾有牛粪的塑料异物筛渣，注明组成、含水率及接收方；不以一般粪便、堆肥或无关工业污泥代替。其他异物材料须在数据集验收前另立原子行。

- 选定流: 沾牛粪塑料筛渣
- 流属性/单位: Mass / kg
- 数量规则: 按cp_mass采集，经原始换算及完整生产池核对后得到每参考流实测应计数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 待处置不合格固态牛粪 (`rejected_manure`)

送处置而未作为合格农家肥出售的固态牛粪，独立记录污染、龄期、质量及处理接收方。退回同一生产池的物料为内部返工转移，不是再次合格产出。

- 选定流: 待处置不合格固态牛粪
- 流属性/单位: Mass / kg
- 数量规则: 按cp_mass采集，经原始换算及完整生产池核对后得到每参考流实测应计数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

##### 基本流

###### 水蒸气 (`vapor`)

排入室外未特指空气的净水蒸气。蒸发与有独立证据的生化或燃烧水生成消耗分开记录；不含主动干燥。不得用一个差额同时求未知反应水和未知水蒸气。 按cp_balance用匹配进出湿度及累计空气或气体量，或经验证的独立蒸发冷凝方法确定净H2O转移；保留环境水输入，不默认其为零。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_balance采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_balance`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 甲烷 (生物源) (`methane_bio`)

牛粪收集和固态贮存排入室外未特指空气的生物源甲烷，包含局部厌氧区及贮存停留期，不是肠道甲烷。采用实测或明确系统、气候和物种的方法，本PCR不移植默认因子。

- 选定流: 甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 二氧化碳（生物源） (`co2_bio`)

实际有机物转化及经核实柴油生物组分所产生的生物源二氧化碳，排入室外未特指空气。即便所选影响方法另行处理生物源二氧化碳，也保留LCI；不得以未测碳闭合差额推定。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### 氨 (`ammonia`)

排入室外未特指空气的氨，以NH3分子质量计。仅在明确分析基准为NH3-N时按17/14换算。进入声明输入门前的排放属于上游养殖，避免重复。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 一氧化二氮 (`n2o`)

粪污管理或有证据发动机运行排入室外未特指空气的一氧化二氮，以N2O分子计。明确为N2O-N的数据仅按44/28换算一次。若表征方法已覆盖相同NH3/NOx前体途径，不再叠加国家清单间接N2O估算。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### 二氮 (`nitrogen`)

牛粪反硝化净生成并排入室外未特指空气的二氮，排除仅穿过系统的空气N2。若其他氮损失也未知，氮平衡不能独立确定N2数量。

- 选定流: 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`

###### 一氧化氮 (`no`)

仅当按NO物种计量时记录粪便或发动机排入室外未特指空气的一氧化氮。同一排放采用物种明细或不重叠NOx汇总，不能两者重复。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### 氮氧化物 (`nox`)

有汇总计量时记录排入室外未特指空气的氮氧化物，不含N2O。原生Mass/kg不证明以NO2当量计；使用前须明确监测、清单和影响方法的数量定义及换算，否则数量链接待定。不与NO行重复；按物种核算时补充单独核实的NO2行。

- 选定流: 氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### 二氧化碳（化石源） (`co2_fossil`)

柴油运行产生并排入室外未特指空气的化石源二氧化碳，按实际化石燃料碳、氧化产物及燃料计量求得，不采用通用柴油因子。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-nonroad-2021`

###### 一氧化碳（化石源） (`co`)

实际化石柴油运行产生并排入室外未特指空气的化石源一氧化碳，须有发动机和工况特定证据。生物组分CO须另核基础流身份，不能用此化石源流代替。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-nonroad-2021`

###### 二氧化硫 (`so2`)

实际柴油硫氧化为SO2并排入室外未特指空气的二氧化硫；另核颗粒中及其他物种的硫，不假定硫含量或完全转化。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-nonroad-2021`

###### 甲烷 (化石源) (`methane_fossil`)

有未燃化石甲烷证据时记录柴油尾气排入室外未特指空气的化石源甲烷，与牛粪生物源甲烷分列，不用延迟排放校正流。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-nonroad-2021`

###### 非甲烷挥发性有机化合物 (`nmvoc`)

有非甲烷挥发性有机物排放时记录，介质为室外未特指空气。按有证据的非甲烷汇总质量计，HC或按碳计TOC不自动等于该量；须物种分析或独立论证的汇总换算，且不与组分行重复。 遵守原生流限制：尽可能逐物种列清单，绝不能用本汇总量隐藏高影响物质；另核其基本流身份，本行仅保留不重叠余项。

- 选定流: 非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-nonroad-2021`

###### 颗粒物 (PM2.5) (`pm25`)

实际较干物料搬运及有柴油尾气时排入室外未特指空气的粒径≤2.5微米颗粒。收集尘与外排尘分开，不给默认粉尘因子；记录搬运含水率、控制及尾气过滤。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### 颗粒物 (PM2.5 - PM10) (`pmcoarse`)

排入室外未特指空气的粒径>2.5且≤10微米颗粒。仅在计量边界、方法相同且结果非负时由累计PM10减PM2.5求得，不再加累计PM10。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

###### 颗粒物（> PM10） (`pmover10`)

实际搬运有释放时记录排入室外未特指空气的粒径>10微米颗粒。与总悬浮颗粒及互斥细粒级核对，沉降或收集尘不自动算作出厂界排放。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_emissions采集的原始字段，经原始换算及完整生产池核对后计算每参考流应计数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `epa-manure-practices`; `ipcc-manure-2019`; `epa-nonroad-2021`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single | manure_unit | 限定单元仅有一种预期商品产出，将其应计制备负荷归于合格粪肥；不合格粪肥与渗滤液为废物处理责任，不默认联产品。先考察计量拆分或系统扩展，在选择分配前记录更优先方法不能代表实际功能的理由；若有另一商品或处理服务，明确功能和有依据的物理因果关系，不可行时论证期间价格匹配的经济分配及敏感性，不给通用养分或能源份额。 输入门须记录实际残余物、共产品或废物状态、农场门价格或经济价值证据、适用上游分配方法及继承负荷。无上游负荷的结果必须有该方法及证据支持，绝不取消manure_unit内的接收、收集或贮存负荷。所引牛场示例仅提供条件背景，不作为通用奶业分配默认值。 | `ec-pef-allocation-2021` |
| allocation_ledgers | all inventory rows | 保留完整未分配质量、水、碳氮磷钾实物账及独立分配负荷账，不以负荷份额乘联产品实物量。记录粪便输入负荷接口及上游保留排除范围，避免漏项或重复。 | `ipcc-manure-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | manure_unit | 输入产出质量及产品组成 | weighing_and_assay | 批次；牛源；垫料尿液；毛皮净湿重；总固体挥发性固体碳氮总氨氮磷钾分析及基准；验收状态；交付退货编号；期初期末在制库存及负荷；接收方 | 进出料校准地磅或秤及废物分称；跨位置深度和出料前中后段混合采样，保留实际水分及样品保存记录；实验室测总固体、挥发性固体、碳氮、总氨氮、磷钾，附方法与不确定度；PM1558采样前移供货门，不用仅表层样或年度书本组成。 | kg; kg/kg; % | 每载荷；每均质批及物料贮存变化 | 同路线状态产品的完整匹配期间生产池，含开停机失败及零产出批次、退货返工、期初期末在制品库存及结转负荷 | 同一牛粪收集贮存设施和声明门 | 每 1 kg 参考流 | 校准、磅单、批次采样方案、实验室报告及可追溯库存负荷账 |
| cp_utilities | manure_unit | 电力柴油及清洗自来水 | meter_and_fuel_records | 起止表码；电压地理供方；千瓦时；柴油采购罐存转移kg或升及温度密度化石比例碳硫低位热值；发动机功率工况小时；清洗水体积密度；共享负荷动因 | 采用分表差值及核对后的油罐记录，体积换算须测密度；共享机械按实测工作分摊，含怠速失败；记录设备排放控制，避免上游与直接燃烧重叠。 | MJ; kWh; kg; litre; m3; h | 每班及每期间；期初期末库存读数 | 同路线状态产品的完整匹配期间生产池，含开停机失败及零产出批次、退货返工、期初期末在制品库存及结转负荷 | 仅服务manure_unit的计量设备 | 每 1 kg 参考流 | 表计校准、发票、燃料分析、工况日志及供方数据集基准 |
| cp_emissions | manure_unit | 实际排放物种及粒级 | measurement_or_documented_model | 贮存龄期温度覆盖总固体挥发性固体氮总氨氮；排放区间；物种浓度；背景；累计排气或流率；温压湿干；发动机年份等级负荷后处理燃料碳硫；颗粒截点；检出限 | 采用校准捕集、箱法或扩散法测代表性贮存搬运通量，明确场界背景和时间覆盖；发动机采用匹配实际工况测试或明确论证模型。IPCC方法须核实物种系统气候挥发性固体氮的适用性及因子，模型须披露而不冒充实测。不得由差额凑气体物种或给通用正量。 | kg species; kg N; mg/m3; m3; m3/h; h | 代表性运行贮存区间及季节，含异常工况 | 同路线状态产品的完整匹配期间生产池，含开停机失败及零产出批次、退货返工、期初期末在制品库存及结转负荷 | 穿过manure_unit边界的室外排放，粪便与发动机来源分开 | 每 1 kg 参考流 | 采样设计、校准、模型版本因子适用性、物种基准及不确定度 |
| cp_balance | manure_unit | 实物质量水及元素 | balance_with_independent_measurements | 全部流湿干质量及碳氢氧氮磷钾；耗氧；降雨暴露面积；水蒸气；有机物分解；独立计量反应水；期初期末库存; 进出口或上风下风湿度；温压湿干基准匹配的累计干空气或气体量、或流率时长；冷凝沉降；独立蒸发测定方法及覆盖 | 以明确不确定度核对实测物料、耗氧、天气及独立支持的生化燃烧化学计量，区分游离水蒸发、水生成消耗、干有机物转化及溶解固体；COD或挥发性固体不是物种质量闭合依据，未解释差额保留为发现。 净水汽采用匹配进出空气或气体累计量及湿度得到的H2O进出差，或覆盖相同开放或封闭边界、经验证的独立蒸发冷凝测定。实物水账保留大气H2O总进出，水汽交换只列净转移；不假设环境入流水为零，不用同一差额同时求未知水汽和反应水。实际入雨水单列，不等于环境湿度。 | kg; kg element; kg water; mm; m2; kg dry air; kg water/kg dry air; m3; m3/h; h; degC; Pa | 每生产池期间，库存与排放覆盖匹配 | 同路线状态产品的完整匹配期间生产池，含开停机失败及零产出批次、退货返工、期初期末在制品库存及结转负荷 | 负荷分配前manure_unit实物边界 | 每 1 kg 参考流 | 独立分析、气水证据、差额及不确定度报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| pool_account | all inventory rows | 核对原始期间投入负荷加期初在制库存结转负荷，减期末结转负荷及单独识别的其他外转责任；退货返工保留实物及历史负荷，内部循环抵销而非新产出。Q为扣除退货取消交付后的唯一合格交付湿质量，同池失败零产出载荷保留；仅Q>0时各应计交换总量除Q一次。 | cp_mass; cp_utilities; cp_emissions; cp_balance | 每1 kg合格湿产出清单 |  |
| species_conversion | ammonia, n2o, no, nox | 仅针对对应物种，将明确按N计的量分别按17/14换成NH3、44/28换成N2O、30/14换成NO；NOx汇总换算须有与清单及影响方法相容的独立数量定义，排除N2O。不得将总氮损失全部变成NH3。 | cp_emissions | 生产池核算前的期间分子物种质量 | `ipcc-manure-2019` |
| element_balance | manure_unit | 在同一原始期间元素基准下，期初元素库存+实测元素投入=期末库存+合格粪肥+废物不合格转移+实测物种外排。碳氮磷钾分账；总质量水账纳入空气氧及净生物转化，并独立支持反应水项，不创造平衡输出或省略生物源CO2。 | cp_mass; cp_balance; cp_emissions | 未分配实物平衡及披露差额 | `ipcc-manure-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_complete | all inventory rows | 要求完整匹配生产池及正合格分母、原生身份状态介质和精确属性单位相容。实际有维护物料废物、其他异物或失控径流渗漏且属应计项时补充具体行，未知不等于零。 | cp_mass; cp_utilities; cp_emissions; cp_balance |
| quality_sampling | finished_manure | 交付采样代表贮存损失后的供货组成，不假设固定饲料垫料配方或养分；披露采样调整、实验室方法、检出限、不确定度、实际卫生法定验收及接收方，本PCR不认证肥料安全。 | `epa-manure-sampling`; cp_mass |
| quality_background | all inventory rows | 按实际地理时间路线组成及湿干能源参考基准链接供方数据集。核实流UUID不等于核实供方数量或上游过程完整性，披露缺口而不替换不相容供应方。 | cp_utilities; cp_mass |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_manure | 恰有一个合格产品参考行，1 kg净湿质量，双语及协议分母一致。总合格交付为零禁止归一化；最终参考身份未决或计量关系不支持时阻断数据集使用。 |  |
| validation_balance | manure_unit | 在分配前核对完整期间质量水碳氮磷钾平衡、匹配库存负荷、唯一验收、无重复内部流、无虚构反应水或气体差额；按声明计量不确定度量化并调查未解释差异。 | `ipcc-manure-2019` |
| validation_emissions | all inventory rows | 核对实际物种CAS、生物或化石来源、室外空气或资源介质和属性单位链；要求分子元素及NOx/NMVOC基准相容。颗粒级必须互斥，不重复来源接收或收集尘。方法因子不等于实测值，身份缺失不证明无排放。 | `ipcc-manure-2019`; `epa-nonroad-2021` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 经适用性和供方审查后作为农业粪肥物料的供应阶段输入 |
| allowed_use | 声明的散装固态牛粪农业路线及其实测湿质量基准 |
| excluded_use | 通用全部排泄物或养分等效肥料；燃料堆肥消化残渣田间施用数据集；安全或方法审批声明 |
| required_metadata | 参考限定条件；门；地理时间覆盖；原始生产池库存负荷账；分析；实际身份供方；分配方法 |
| required_quality_disclosure | 采样代表性、不确定度、辅助身份缺口、供方相容及排除阶段；不声称通用排放区间 |
| update_trigger | 牛源垫料路线水分贮存变化、新污染或接收方、供应地理变化、新计量或方法证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025, row 34654; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅支持分类范围，不证明所有排泄物路线是同一过程或已有接受映射。 |
| epa-manure-practices | official_guidance | US EPA AgSTAR, Practices to Reduce Methane Emissions from Livestock Manure Management, Solid Storage and comparison with Composting/Manure Drying/Solid Separation; snapshot 2026-10-16; https://www.epa.gov/agstar/practices-reduce-methane-emissions-livestock-manure-management | 路线区分、收集贮存及径流排放筛查，仅定性使用，不移植国家示例减排百分比、默认停留期或性能。 |
| epa-manure-sampling | extension_guidance | US EPA NPDES Permit Writers Manual for CAFOs Appendix O, PM1558 revised November 2003, PDF pp117–120 / printed O-115–O-118; https://www.epa.gov/sites/default/files/2015-08/documents/cafo_permitmanual_appendixo.pdf | 固态粪便代表性及混合采样，将施用贮存采样调整至更早供货门；不作为当前法规、通用配方、卫生证明或所有场址固定样本数。 |
| ipcc-manure-2019 | method_factor | IPCC 2019 Refinement Volume 4 Chapter 10, §§10.4,10.5,10.5.4 and equations10.23,10.25; printed/PDF pp50,64,74–77,94–95; https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 甲烷挥发性固体及氮物种途径、分子换算和管理土壤燃料边界。国家清单方法须有场址动物系统气候证据，不导入默认因子配方；LCI保留实测生物CO2，防止间接N2O重复表征。 |
| epa-nonroad-2021 | official_guidance | US EPA EPA-420-R-21-021 September2021, Exhaust and Crankcase Emission Factors for Nonroad Compression-Ignition Engines in MOVES3.0.2, Introduction and §§3,9,11; publisher HTML/TXT https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1013KWQ.TXT | 柴油设备污染物覆盖及活动技术依赖；发布方文本渲染，不是本地取得PDF。不采用美国车队因子、颗粒分级比例、硫含量、发动机等级或HC转NMVOC作为通用值；仍须实际发动机燃料工况物种证据。 |
| ec-pef-allocation-2021 | official_guidance | European Commission, C(2021)9332 final, Annex I, Product Environmental Footprint method, 16 December 2021, §§4.5 and4.5.1.2, PDF pp63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 一般多功能过程分配顺序，以及牛场粪便状态、价值和上游负荷的条件背景。须确定实际上游方法、价格状态及门的覆盖；不移植奶业IDF默认值、循环足迹公式或自动残余物零负荷规则；本单元收集贮存责任仍须纳入。 |

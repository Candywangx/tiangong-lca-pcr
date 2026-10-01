---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.patent-fuel-and-similar-solid-fuels-manufactured-from-hard-coal
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 硬煤制成的型煤及类似固体燃料

## 1. 范围与适用性

本规则适用于以硬煤粉为主要煤质原料、经配料和成型制成的型煤及类似固体燃料前景数据包。型煤指添加黏结剂后成型的硬煤燃料，不表示法律意义上的专利。类别识别采用 UNSD 定义；褐煤和泥炭压块、木炭、焦炭及半焦另属不同边界。硬煤煤阶、黏结剂、含水状态、成型和固化路线共同决定建模差异，不能直接套用褐煤或木炭的能耗。`unsd-cpc-3-structure-2025`；`unsd-energy-questionnaire-2024`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.patent-fuel-and-similar-solid-fuels-manufactured-from-hard-coal |
| classification_refs | CPC 3.0:11020 |
| covered_products | 硬煤制成的型煤及类似固体燃料；包括烟煤及无烟煤配方 |
| excluded_products | 未经成型的原煤；褐煤或泥炭压块；木炭；焦炭及半焦；标准煤当量 |
| representative_product | 出厂验收的硬煤型煤 |
| production_route | 原料接收和粒度调整；黏结剂配制及混合；压制成型；必要时干燥或固化；筛分回料；储存和出厂包装 |
| market_state | 固体成型燃料，实际含水状态，散装或声明的包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供出厂合格的可燃硬煤成型燃料 |
| How much | 1 千克参考流 |
| How well | 声明煤阶、配方、含水率、灰分、硫及实际含水基低位热值；按销售规格验收 |
| How long or cycle | 一次生产活动的出厂交付；不包含产品燃烧提供的热服务 |
| reference_flow_link | finished_fuel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硬煤型煤 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 煤阶；硬煤来源；各黏结剂及添加剂质量；固化路线；含水率；低位热值及基准；灰分和硫；产品粒度及强度规格；包装；场址与年份 |

所有限定信息应记录于数据包。参考产品净质量含产品水分及黏结剂，不含包装；不得用标准煤当量代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | 按实际含水状态称量燃料净质量；所有清单行采用每 1 kg 参考流的相同分母。使用 cp_output。 |
| moisture_basis | 煤原料及成品 | Mass | kg | 分别记录湿基含水率；干质量等于湿质量乘以一减含水质量分数；保留原始湿质量。 |
| carrier_units | electricity_input; dryer_gas; steam_input | Energy; Volume; Mass | MJ; m3; kg | 电量按 1 kWh = 3.6 MJ 换算。天然气体积声明计量温压；蒸汽按质量记录，不直接当作供热能量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已声明煤阶、含水和粒度的硬煤原料及独立黏结剂 |
| starting_condition_role | 前景建模入口，非零上游负荷的理由 |
| product_classification_scope | 硬煤制成的型煤及类似固体燃料；CPC 3.0:11020 |
| recursive_input_rule | 外购同类别回用型煤按独立供应输入记录，关联其上游数据；内部粉煤和破碎型煤回用只计净流入，不重复生成产出或信用。 |
| upstream_dataset_requirement | 硬煤开采、洗选及运到场址，黏结剂、包装和公用工程供应须关联相适用的上游数据；缺失须披露。 |
| disclosure | 煤料来源；接收状态；回用流；工艺和污染控制；上游连接；出厂边界及例外 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | manufacture | 从原料接收到成品出厂，纳入实际粒度调整、混合、成型、调质、内部搬运、损失及污染控制。干燥和黏结剂依煤料性质而定，不预设统一路线。 | epa-coal-conversion-1979 |
| boundary_upstream | foreground data package | 上游供应通过独立数据连接；不得把接收原料当成无负荷。记录运输连接。出厂后配送、燃烧和包装废弃属于另行声明的下游情景。 |  |
| boundary_inventory | manufacture | 按本数据包采集边界记录全部实际外部交换。实际使用的其他黏结剂、燃料或包装，须追加具体原子流及采集记录；禁止合并类别行或默认零值。资本设备建造不在本运行数据包内，须披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| manufacture | 硬煤燃料制造 | required | 所有适用产品 | foreground_production | 1 kg reference flow |

接收、混合、成型、调质、筛分和包装作为一个有共同出厂分母的集成前景过程；若有分项计量，保留设备记录。EPA 报告仅支持工艺识别，不提供当前行业消耗范围。各卡的纳入条件决定适用性，非适用须有证据。

### 过程：硬煤燃料制造（`manufacture`）

#### 输入

##### 产品流

###### 烟煤原料（`bituminous_feed`）

使用烟煤时纳入；声明供应商煤阶及粉煤粒度。

- 选定流：硬煤 `a2bec48b-8347-4582-8cca-fa9d09ce0ac1`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 纳入条件：使用烟煤时纳入；声明供应商煤阶及粉煤粒度。

- 来源：`epa-coal-conversion-1979`

###### 无烟煤原料（`anthracite_feed`）

使用无烟煤时纳入，包括与烟煤混配；不得重复计入同一原料质量。

- 选定流：硬煤，无烟煤 `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 纳入条件：使用无烟煤时纳入，包括与烟煤混配；不得重复计入同一原料质量。

- 来源：`epa-coal-conversion-1979`

###### 煤焦油沥青黏结剂（`pitch_binder`）

添加煤焦油沥青作为黏结剂时纳入；不包括石油沥青。

- 选定流：煤焦油沥青
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 纳入条件：添加煤焦油沥青作为黏结剂时纳入；不包括石油沥青。

- 来源：`epa-coal-conversion-1979`

###### 淀粉黏结剂固体（`starch_binder`）

使用单独淀粉作为黏结剂时纳入；配制用水单独记录。

- 选定流：淀粉 `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 纳入条件：使用单独淀粉作为黏结剂时纳入；配制用水单独记录。

- 来源：`epa-coal-conversion-1979`

###### 外购自来水（`mixing_water`）

混合、清洗或抑尘用自来水跨越场址边界时纳入；内部循环水不重复计入。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 纳入条件：混合、清洗或抑尘用自来水跨越场址边界时纳入；内部循环水不重复计入。

###### 制造用电（`electricity_input`）

纳入粒度调整、混合、压制、调质、搬运及污染控制的计量用电。

- 选定流：交流电 `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- 流属性/单位：能量 / MJ
- 数量规则：采用 cp_energy 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 纳入条件：纳入粒度调整、混合、压制、调质、搬运及污染控制的计量用电。

###### 外购蒸汽（`steam_input`）

外购工业蒸汽用于黏结剂加热或干燥时纳入；声明蒸汽状态及凝结水回收。

- 选定流：工业蒸汽 `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_energy 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 纳入条件：外购工业蒸汽用于黏结剂加热或干燥时纳入；声明蒸汽状态及凝结水回收。

###### 场内加热用天然气（`dryer_gas`）

场内燃烧天然气时纳入；与进入成品的煤原料分开。

- 选定流：管输品质天然气 `7766e51e-0b64-4fbb-89cb-489c33293137`
- 流属性/单位：体积 / m3
- 数量规则：采用 cp_energy 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 纳入条件：场内燃烧天然气时纳入；与进入成品的煤原料分开。

###### 聚乙烯薄膜包装（`pe_film`）

采用聚乙烯薄膜出厂包装时纳入；参考产品质量不含包装。

- 选定流：聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 纳入条件：采用聚乙烯薄膜出厂包装时纳入；参考产品质量不含包装。

#### 输出

##### 产品流

###### 可销售硬煤制成燃料（`finished_fuel`）

始终纳入出厂验收合格的燃料净产出；采用产品实际含水状态。

- 选定流：硬煤型煤
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 纳入条件：始终纳入出厂验收合格的燃料净产出；采用产品实际含水状态。

##### 废物流

###### 送处置的收集煤尘（`coal_dust_disposal`）

收集煤尘作为废物离开场址时纳入；内部回用粉煤不作为外排废物。

- 选定流：送处置的收集煤尘
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 纳入条件：收集煤尘作为废物离开场址时纳入；内部回用粉煤不作为外排废物。

###### 送处理的型煤制造废水（`process_wastewater`）

工艺废水作为独立物流送处理时纳入；记录水质及处理去向。

- 选定流：型煤制造工艺废水
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 纳入条件：工艺废水作为独立物流送处理时纳入；记录水质及处理去向。

##### 基本流

###### 排入空气的化石源二氧化碳（`fossil_co2`）

制造边界内燃烧化石燃料时纳入；不包括可销售产品后续燃烧。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 纳入条件：制造边界内燃烧化石燃料时纳入；不包括可销售产品后续燃烧。

###### 排入空气的化石源一氧化碳（`fossil_co`）

场内化石燃料燃烧向室外空气排放一氧化碳时纳入。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 纳入条件：场内化石燃料燃烧向室外空气排放一氧化碳时纳入。

###### 排入空气的二氧化氮（`nitrogen_dioxide`）

向室外空气排放二氧化氮时纳入；以二氧化氮计的氮氧化物总量不等于实测二氧化氮组分量。

- 选定流：排入空气的二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 纳入条件：向室外空气排放二氧化氮时纳入；以二氧化氮计的氮氧化物总量不等于实测二氧化氮组分量。

###### 排入空气的二氧化硫（`sulfur_dioxide`）

场内加热或调质向室外空气排放二氧化硫时纳入。

- 选定流：排入空气的二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 纳入条件：场内加热或调质向室外空气排放二氧化硫时纳入。

###### 排入空气的总颗粒物（`particulate_air`）

存在有组织或无组织粉尘排放时纳入；总颗粒物不得冒充粒径限定的 PM10。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的实测交换量；保留生产活动总量及成品净产出称量记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 纳入条件：存在有组织或无组织粉尘排放时纳入；总颗粒物不得冒充粒径限定的 PM10。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | manufacture | 尽量用独立批次、设备计量和工时把不同配方负荷分开。共用电力按实测工时及功率分摊；无法证明关联时披露替代及敏感性。 |  |
| allocation_grade | saleable_outputs | 同一活动产生不同等级同类燃料且无法分项计量时，按实际净销售质量分配共同负荷；披露各等级热值差异及按能量分配的敏感性。 |  |
| allocation_recycle | internal_fines | 回用粉煤不获避免负荷信用，处理及再压制消耗仍计入。废物处置需关联处理数据；有外售副产品时声明废物或产品属性，避免重复信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | manufacture | finished_fuel | weighing | 批次；净成品质量；皮重；含水率；灰分；硫；低位热值；验收状态 |校准秤计量合格成品，扣除包装；同批代表性取样检测并记录试验方法| kg | 每批及每班 | 声明的完整生产活动，包括停机和启动 | 同一工厂同一配方 | 每 1 kg 参考流 | 校准证书；称量单；检验及验收记录 |
| cp_material | manufacture | material_inputs | weighing | 独立物流；供应商；接收及库存；配料量；含水率；配方；包装质量 |用称量、配料记录及期初期末库存核对每种物料；体积转质量须有实测密度；按同期间 cp_output 净成品质量将活动量归一到每千克。| kg | 每批及活动边界 | 与 cp_output 同期间 | 制造边界 | 每 1 kg 参考流 | 称量及供应单；库存；配料账；计量校准 |
| cp_energy | manufacture | electricity_input; steam_input; dryer_gas | metering | 分项仪表起止值；蒸汽压力温度；天然气温压；同期间产出；共用负荷依据 |分项计量电、蒸汽及天然气；电量换算为 MJ；校核采购单和共用负荷分摊；按同期间 cp_output 净成品质量将活动量归一到每千克。| MJ; kg; m3 | 每班及每活动 | 与 cp_output 同期间 | 制造及污染控制设备 | 每 1 kg 参考流 | 计量校准；发票；设备工时及分摊证据 |
| cp_waste | manufacture | coal_dust_disposal; process_wastewater | waste_transfer | 独立废物质量；含水和成分；目的地；回用量；运输记录 |分别称量煤尘及废水，核对转移单和回用账；废水体积转质量需实测密度；按同期间 cp_output 净成品质量将活动量归一到每千克。| kg | 每次转移 | 与 cp_output 同期间 | 场址外排 | 每 1 kg 参考流 | 转移单；水质；去向；回用账 |
| cp_air | manufacture | fossil_co2; fossil_co; nitrogen_dioxide; sulfur_dioxide; particulate_air | emission_measurement | 物种；排放位置；浓度；气量；工时；方法；燃料碳；化石比例；颗粒物粒径；捕集量 |优先采用监测；浓度乘以同温压基气量并积算。二氧化碳可采用实测燃料碳平衡，记录氧化及非二氧化碳碳流；无方法或代表性样本时不得填零；按同期间 cp_output 净成品质量将活动量归一到每千克。| kg | 代表性工况及完整运行时长 | 与 cp_output 同期间 | 有组织及无组织场内排放 | 每 1 kg 参考流 | 监测报告；仪器校准；碳平衡；工况代表性；检出限 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_intensity | 所有清单行 | 各物流活动总量除以同期间合格成品净质量；成品行固定为 1 千克。 | cp_output; cp_material; cp_energy; cp_waste; cp_air | 每 1 kg 参考流的交换量 |  |
| moisture_conversion | bituminous_feed; anthracite_feed; finished_fuel | 干质量等于湿质量乘以一减湿基含水质量分数；仅用于质量平衡诊断，不更换出厂分母。 | cp_output; cp_material | 诊断干质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_formulation | manufacture | 声明煤阶、全部实际黏结剂和添加剂、配比、工艺及控制设备，不以参考示例配方代替实际配方。 | 配料账及供应商说明 |
| dq_representative | all inventory rows | 采集同期间全部工况、损失和回用，说明缺失及替代；缺失值与零值区分。 | 原始记录和完整性清单 |
| dq_energy | finished_fuel | 区分湿基和干基热值及高位低位热值；每千克出厂质量声明实测低位热值，不以材料热值作为制造能源输入。 | 同批测试及方法说明 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_fuel | 确认硬煤制造燃料及全部限定信息；参考量与产出行均为 1 千克，包装质量不在分母内。 | unsd-energy-questionnaire-2024 |
| validate_balance | manufacture | 核对煤、黏结剂、水、净成品、回用和外排质量；记录水分蒸发、库存差及平衡偏差，按计量不确定度解释而非预设允差。 |  |
| validate_atomic | all inventory rows | 每行对应一个物流或排放物种，核对单位、条件、去向及证据；不得把 NOx-as-NO2 总量当作二氧化氮，或把总颗粒物和粒径分组同时相加。 |  |
| validate_normalization | all inventory rows | 核对同期间、同配方和每 1 kg 参考流分母；能耗不包含成品后续燃烧，外购蒸汽与其上游燃烧不在本场址重复排放。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 配方和出厂状态明确的硬煤燃料供应过程及后续生命周期连接 |
| excluded_use | 直接宣称热服务等价；跨煤阶或黏结剂的无条件比较；褐煤、木炭和焦炭替代 |
| required_metadata | 场址；年份；煤阶；配方；含水和热值基准；边界；采集期间；分配；上游和处理链接 |
| required_quality_disclosure | 缺失物流和身份；估计；监测代表性；不确定度；平衡偏差；不适用依据 |
| update_trigger | 煤料、配方、设备、热源、污染控制或销售含水规格变更 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-structure-2025 | official_guidance | UNSD, Central Product Classification Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; rows 432-444; 查阅 2026-09-30 | 分类身份及邻近类别区分 |
| unsd-energy-questionnaire-2024 | official_guidance | UNSD, Guidelines for the 2022 Annual Questionnaire on Energy Statistics, May 2024, page 8. https://unstats.un.org/unsd/energy/energy-questionnaire-guidelines.pdf ; 查阅 2026-09-30 | 型煤定义及褐煤、泥炭和焦炭排除；专业中文标题语义依据 |
| epa-coal-conversion-1979 | official_guidance | US EPA, Coal Conversion Control Technology, Volume II: Gaseous Emissions; Solid Wastes, EPA-600/7-79-228b, October 1979, printed page 813. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101FVE8.TXT ; 查阅 2026-09-30 | 成型、黏结剂、粉煤回用及条件干燥的工艺识别；历史工艺资料不作当前范围 |

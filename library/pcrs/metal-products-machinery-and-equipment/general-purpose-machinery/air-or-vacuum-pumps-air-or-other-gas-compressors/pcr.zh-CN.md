---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-or-vacuum-pumps-air-or-other-gas-compressors
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 空气泵或真空泵；空气或其他气体压缩机

## 1. 范围与适用性

本 PCR 适用于成品空气泵、真空泵、空气压缩机和其他气体压缩机制造的从摇篮到工厂大门前景数据包。范围包括产品特定材料与部件准备、适用时的厂内机加工与零件清洗、适用时的热连接或表面作业、装配、工厂性能试验、工厂加注润滑剂，以及直至制造商大门的包装。

范围不包括液体泵、液体提升机、作为独立产品销售的风机和鼓风机、液压或气压动力机械、阀门、单独销售的零件、作为公用工程供应的压缩空气或真空服务、安装、制造商大门后的配送、使用、维护和报废。若研究边界延伸至制造商大门之外，应单独建模这些阶段，不得将其流量混入本前景制造数据包。

本类别技术差异显著，因此数据包必须将产品识别为空气泵、真空泵、空气压缩机或其他气体压缩机，并声明工作原理和性能条件。本类别的专业中文名称确定为“空气泵或真空泵；空气或其他气体压缩机”。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-or-vacuum-pumps-air-or-other-gas-compressors |
| classification_refs | CPC 3.0：43230 “Air or vacuum pumps; air or other gas compressors”（`un-cpc-3-0-2025`） |
| covered_products | 成品空气泵；真空泵；容积式或动力式空气压缩机；制冷剂、工艺气体及其他气体压缩机 |
| excluded_products | 液体泵和液体提升机；单独销售的风机与鼓风机；液压或气压动力机械；阀门；仅零件产品；压缩空气或真空公用工程服务 |
| representative_product | 全封闭制冷压缩机，仅作为较宽产品类别中的已声明 UUID 代表产品 |
| production_route | 产品特定材料/部件接收与准备；有条件的厂内机加工和清洗；有条件的热连接或表面作业；装配、工厂试验和包装 |
| market_state | 制造商大门处全新、完工并通过质量放行的设备；产品净质量与包装质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造满足已声明性能规范的成品空气泵、真空泵、空气压缩机或其他气体压缩机 |
| How much | 不含运输包装的 1 kg 质量放行成品设备净质量 |
| How well | 声明产品类型、工作原理、工作气体、润滑状态、额定流量或抽气速率、进口与出口压力或基础压力、输入功率以及适用的工厂试验方法 |
| How long or cycle | 一次完整制造及工厂放行事件；不包括使用寿命期服务 |
| reference_flow_link | `rf_finished_pump_or_compressor` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 制造商大门处 1 kg 成品设备净质量 |
| 参考产品流 | 全封闭制冷压缩机 `a2a3427c-5d93-494b-a1fd-bcab42fea432` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 覆盖产品类型；型号/系列；工作原理；工作气体或用途；喷油或无油状态；驱动与控制配置；额定流量、容量或抽气速率；进口与出口压力或基础压力；试验气体与试验条件；额定输入功率；所含附件；净干质量；工厂加注流体质量；包装状态；制造地域；生产期间 |

构建前景数据包时，所有`必需限定信息`必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。适用时，压缩机性能声明应标识与 ISO 1217 相容的试验条件；适用时，真空泵声明应标识 ISO 21360-1 的性能量和方法。超出这两项标准范围的限定信息应声明制造商试验方法。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量不含运输包装的质量放行产品净质量。报告计入该质量的工厂加注润滑剂或其他流体，并单独报告包装。 |
| `material_mass_basis` | 材料、化学品、包装、废物和直接排放行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录实际湿基或供货状态质量；当牌号、浓度、含水率或涂层状态影响解释时予以声明。 |
| `electricity_energy_basis` | 电力输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表 kWh 原始值并按 1 kWh = 3.6 MJ 转换；披露电压、电网/供应商、地域及损耗边界。 |
| `gas_volume_basis` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明仪表参考温度、压力、气体组成或纯度，以及体积是标况、标准还是实际体积；不得混用体积基准。 |
| `performance_test_basis` | 产品放行试验 | 已声明产品性能 | 产品特定 | 容积式压缩机记录流量和功率及运行/试验条件；真空泵记录适用的体积流量、基础压力、压缩比或临界前级压力方法及试验气体。（`us-doe-10-cfr-431-app-a-2024`；`din-iso-21360-1-2025`） |

## 5. 系统边界

前景边界始于外购材料和部件抵达制造场址，止于经试验、质量放行的产品及其运输包装准备离开制造商大门。必须使用产品特定物料清单和企业特定制造活动数据。应表示已知产品输入、废物和直接基本流输出，不得以类别平均值替代实测前景记录。（`eu-pef-method-2021`）

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和部件已抵达制造场址，并声明供应商状态、牌号和所含上游数据集边界 |
| starting_condition_role | 从摇篮到工厂大门前景制造起点条件 |
| product_classification_scope | CPC 3.0 代码 43230 范围内成品设备；单独零件和外供压缩空气或真空服务不在范围内 |
| recursive_input_rule | 若外购同类别泵或压缩机作为投入，则将其一次性记录为具体上游产品数据集，不在本前景制造清单内递归拆解；披露其作用并避免重复计算其物料清单 |
| upstream_dataset_requirement | 每项外购产品投入均需地理和技术代表性上游数据集或有记录的代理决策；仅有 UUID 不提供上游负荷数据 |
| disclosure | 声明制造场址、生产期间、自制/外购边界、厂内过程、共用公用工程、产品特定物料清单、产品净质量、包装、工厂试验条件以及任何排除或未计量作业 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | foreground_manufacturing | 纳入从接收至制造商大门放行的产品特定材料和部件投入、厂内能源和水、工艺助剂、工厂试验、包装、废物及直接排放。 | `eu-pef-method-2021` |
| `system_boundary_rule_2` | conditional_processes | 仅在声明的前景边界内实施时纳入机加工、清洗、热连接、涂覆或其他表面作业；否则用上游数据集表示外购部件，且不得重复计算其生产。 | `jrc-fabricated-metal-products-2020` |
| `system_boundary_rule_3` | completeness | 已知时，将每种额外产品特定物料清单材料、工艺化学品、包装组件、废物流和直接基本流分别新增为原子交换；所列清单是最低类别模式，不得据此聚合或遗漏流。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_component_preparation` | 材料和部件准备 | `required` | 始终适用；记录产品特定物料清单和自制/外购边界 | 产品特定外购材料和部件基准 | 每 kg 成品设备净质量的投入 kg |
| `machining_parts_cleaning` | 厂内机加工和零件清洗 | `conditional` | 场址内进行金属去除、压缩机油清洗或碱性水洗时纳入 | 前景成形与清洗 | 每 kg 成品设备净质量的实测投入和废物 |
| `thermal_joining_surface_operations` | 热连接和表面作业 | `conditional` | 场址内进行天然气加热、氧气辅助连接/切割或其他热表面作业时纳入 | 前景热加工 | 每 kg 成品设备净质量的实测气体投入和直接排放 |
| `assembly_testing_packaging` | 装配、工厂试验和包装 | `required` | 始终适用；纳入实际工厂放行试验和发运包装配置 | 最终制造与参考产品放行 | 1 kg 成品设备净质量及单独计量的包装 |

### 过程：材料和部件准备（`material_component_preparation`）

#### 输入

##### 产品流

###### 铸铁材料（`in_cast_iron`）

当设备包含铸铁壳体或其他铸件时，记录进入产品特定物料清单的铸铁。因同名 Tiangong 候选项分类不相容，其 UUID 保持未解决。

- 选定流：铸铁
- 流属性/单位：Mass / kg
- 数量规则：计量归属于已声明产品输出的供货状态铸铁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_procurement`
- 来源：`eu-pef-method-2021`

###### 碳素钢材料（`in_carbon_steel`）

记录进入轴、框架、容器、紧固件或其他已声明产品部件的碳素钢。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：Mass / kg
- 数量规则：计量归属于已声明产品输出的供货状态碳素钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_procurement`
- 来源：`eu-pef-method-2021`

###### 铝合金材料（`in_aluminium_alloy`）

记录进入壳体、转子、换热部件或其他已声明产品部件的铝合金。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：计量归属于已声明产品输出的供货状态铝合金质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_procurement`
- 来源：`eu-pef-method-2021`

###### 绝缘绕组线（`in_magnet_wire`）

记录纳入厂内制造电机或电磁组件的绝缘绕组线；若整台电机外购并已由上游数据集表示，则不纳入本行。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：Mass / kg
- 数量规则：计量纳入已声明产品输出的绕组线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_procurement`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：厂内机加工和零件清洗（`machining_parts_cleaning`）

#### 输入

##### 产品流

###### 机加工和清洗用电（`in_machining_electricity`）

当本过程在范围内时，记录机加工、冷却液循环、零件清洗及相关过程内设备的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量归属于范围内机加工和零件清洗的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_cleaning_records`
- 来源：`eu-pef-method-2021`；`jrc-fabricated-metal-products-2020`

###### 水洗零件用水（`in_process_water`）

记录供应给厂内水洗零件过程的工艺用水，不得与冷却水或生活用水记录合并。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量供应给零件清洗的工艺用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_cleaning_records`
- 来源：`eu-pef-method-2021`

###### 压缩机清洗油（`in_compressor_washing_oil`）

采用油基路线去除机加工残留物或清洗压缩机内部零件时，记录压缩机清洗油。

- 选定流：压缩机清洗油 `a7a72288-977a-4d7e-a200-ed85f83ad84e`
- 流属性/单位：Mass / kg
- 数量规则：计量新鲜压缩机清洗油投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_cleaning_records`
- 来源：`jrc-fabricated-metal-products-2020`

###### 氢氧化钠清洗剂（`in_sodium_hydroxide`）

碱性水洗槽含有氢氧化钠时，按纯物质当量记录，并披露溶液浓度和槽液管理边界。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：计量氢氧化钠产品质量，溶液产品同时记录浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_cleaning_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`out_post_industrial_steel_scrap`）

将离开前景过程的分选钢屑、车屑、边角料和不合格钢件作为一项工业后钢废料流记录。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：计量送往已声明废物管理路线的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_cleaning_records`
- 来源：`eu-pef-method-2021`；`jrc-fabricated-metal-products-2020`

###### 废润滑油（`out_waste_lubricating_oil`）

将废压缩机清洗油与水性废水分开记录，并声明回收或处置去向。

- 选定流：废润滑油 `9c1267ee-ba26-4c53-9643-89ae0c5764c4`
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景边界的废油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_cleaning_records`
- 来源：`eu-pef-method-2021`；`jrc-fabricated-metal-products-2020`

###### 清洗废水（`out_cleaning_wastewater`）

在零件清洗水性废物流离开前景过程进入场内或场外处理时记录，并保留组成和处理路线证据。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景过程的清洗废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_cleaning_records`
- 来源：`eu-pef-method-2021`；`jrc-fabricated-metal-products-2020`

##### 基本流

### 过程：热连接和表面作业（`thermal_joining_surface_operations`）

#### 输入

##### 产品流

###### 厂内热作业用天然气（`in_natural_gas`）

记录供应给范围内炉窑、燃烧器或热表面作业的气态天然气；若作业已包含在外购部件数据集中则不记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已声明参考条件计量天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_operations_records`
- 来源：`eu-pef-method-2021`；`jrc-fabricated-metal-products-2020`

###### 连接或切割用工业氧气（`in_industrial_oxygen`）

厂内采用氧气辅助连接或切割路线时记录工业氧气，并披露纯度和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按已声明参考条件计量工业氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_operations_records`
- 来源：`eu-pef-method-2021`；`jrc-fabricated-metal-products-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 厂内天然气燃烧产生的化石源二氧化碳（`out_fossil_carbon_dioxide`）

记录范围内天然气燃烧源直接排放的化石源二氧化碳。上游燃料供应排放保留在天然气上游数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测，或与计量天然气及有记录燃料组成核对的场址特定计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-pef-method-2021`

### 过程：装配、工厂试验和包装（`assembly_testing_packaging`）

#### 输入

##### 产品流

###### 装配和工厂试验用电（`in_assembly_electricity`）

记录装配、泄漏试验、磨合、性能试验、控制器编程和包装设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量归属于装配、工厂试验和包装的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_test_energy`
- 来源：`eu-pef-method-2021`；`us-doe-compressed-air-sourcebook-2003`

###### 瓦楞纸板包装（`in_corrugated_cardboard`）

记录作为发运纸箱、套筒、隔板或防护板安装的瓦楞纸板质量。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：计量每种发运产品配置安装的瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

###### 欧标木托盘（`in_wooden_pallet_euro`）

仅当发运产品使用欧标木托盘时记录分摊托盘质量；声明重复使用次数和分配方法，同时保留物理托盘投入。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：实测托盘质量除以有记录的产品数量；可重复使用托盘还应除以有记录的使用次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

###### 聚乙烯包装薄膜（`in_polyethylene_film`）

记录用于缠绕或防潮的聚乙烯薄膜。因没有候选项同时通过语义和分类审查，其 UUID 保持未解决。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：计量每种发运产品配置安装的聚乙烯薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 质量放行代表产品（`out_reference_product`）

记录通过已声明工厂放行试验的成品设备净质量。Tiangong 身份是精确的质量基准代表产品“全封闭制冷压缩机”；其他覆盖设备类型保留其已声明类型限定信息。

- 选定流：全封闭制冷压缩机 `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 质量放行成品设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`；`us-doe-10-cfr-431-app-a-2024`；`din-iso-21360-1-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | product_specific_manufacturing | 优先使用产品特定计量、批次记录或物理细分。已有过程或产品系列记录时，不得分配完整工厂总量。 | `eu-pef-method-2021` |
| `allocation_rule_2` | shared_processes | 无法细分时，采用最能反映作业因果关系的驱动因素分配共用电力、水、耗材和废物，例如机器时间、试验时间、加工质量或实测产量；记录驱动因素，并将分配总量与场址记录核对。 | `eu-pef-method-2021` |
| `allocation_rule_3` | scrap_and_recovered_material | 报告废料和废物物理输出，不在前景制造过程中计入避免生产抵扣。任何回收替代或报废抵扣均属于单独声明的系统模型。 | `eu-pef-method-2021` |
| `allocation_rule_4` | pallet_reuse | 按有记录的使用次数和每次产品数量分配可重复使用托盘实测质量；披露损失、维修和返还边界。无证据时按一次性托盘建模，不得假定重复使用次数。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_procurement` | `material_component_preparation` | 产品特定物料清单投入 | 放行物料清单、采购收货、库存领料 | 材料名称；牌号；供应商状态；领料总量；退料；纳入质量；产品型号；批次输出 | 将放行物料清单及称量领退料与生产批次核对 | kg | 每批次或生产订单 | 代表性生产期，通常至少 12 个月；新型号则采用全部可用生产期 | 范围内每个制造场址 | 汇总净纳入及可归属领料质量，再按净合格输出归一化 | 已批准物料清单版本；秤校准；采购与库存核对 |
| `cp_machining_cleaning_records` | `machining_parts_cleaning` | 机加工能源、清洗投入及过程废物 | 分表、批次日志、化学品领料、水表、废物转移记录 | 电力；水；清洗油；氢氧化钠产品与浓度；批次号；机器小时；钢废料；废油；废水；处理路线 | 读取仪表，并按批次或因果运行时间核对耗材领用和废物联单 | kg；MJ | 每批、班次或仪表区间 | 与产品输出相同期间 | 每个实施该作业的场址 | 扣除有记录的非生产用量，按因果机器时间或产量分配，并按净合格输出归一化 | 仪表校准；槽液日志；废物联单；物料平衡审查 |
| `cp_thermal_operations_records` | `thermal_joining_surface_operations` | 热作业气体投入 | 气表、气瓶领用、生产日志 | 天然气体积；氧气体积；参考条件；纯度；运行小时；批次输出 | 将气表或气瓶更换与生产订单核对 | m3 | 每批次或仪表区间 | 与产品输出相同期间 | 每个实施该作业的场址 | 转换至统一声明体积基准，按因果作业时间或产量分配，并按净合格输出归一化 | 仪表证书；供应商证书；生产日志 |
| `cp_direct_air_emissions` | `thermal_joining_surface_operations` | 直接化石源二氧化碳 | 烟气实测或场址排放记录 | CO2 质量或浓度与流量；天然气体积；燃料组成；运行小时；批次输出 | 有条件时采用直接测量；否则保留场址采用的独立、有来源计算记录 | kg | 每个监测期间 | 与热作业投入相同期间 | 范围内每个直接排放源 | 与燃料记录核对并按净合格输出归一化 | 监测报告；仪器校准；燃料证书；计算表 |
| `cp_assembly_test_energy` | `assembly_testing_packaging` | 装配与放行试验电力 | 分表、试验台日志、生产计数 | 电力；产品型号；试验持续时间；试验气体；进口/出口/基础压力；额定流量或抽气速率；合格输出 | 将试验台和装配能耗关联至放行序列号或生产批次 | MJ | 每批次或试验序列 | 与产品输出相同期间 | 每个装配与试验场址 | 仅在不合格试验能耗及其产品处理另有记录时才排除；按净合格输出归一化 | 校准仪表；试验报告；序列号追溯 |
| `cp_packaging_records` | `assembly_testing_packaging` | 已安装发运包装 | 包装规范、领用记录、称量记录、托盘台账 | 纸板质量；托盘标准与质量；薄膜聚合物与质量；每托产品数；有记录托盘使用次数；损失 | 称量已批准包装配置，并将包装领用与发运件数核对 | kg | 每种包装设计及每次变更 | 研究期内现行包装配置 | 范围内每种发运配置 | 按记录的产品数和使用次数分配共用及可重复使用包装，再按产品净质量归一化 | 已批准包装规范；秤校准；托盘追踪记录 |
| `cp_finished_output` | `assembly_testing_packaging` | 质量放行产品输出 | 校准秤及放行记录 | 产品型号；序列号或批次；净干质量；加注流体质量；附件；包装质量；合格/不合格结果；试验方法 | 对不含运输包装的质量放行产品称重，并关联工厂试验结果 | kg | 每件或统计控制批次 | 与全部前景投入相同期间 | 每个最终装配场址 | 仅汇总净合格输出，并保留不合格产品处理记录 | 秤校准；放行证书；工厂试验报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 全部清单行 | 可归属行数量 ÷ 质量放行输出净质量 | 行数量；`cp_finished_output` 净合格输出 | 每 1 kg 成品设备净质量的数量 | `eu-pef-method-2021` |
| `calc_electricity_mj` | 电力行 | 电表 kWh × 3.6 | 电表 kWh | 电力 MJ | `eu-pef-method-2021` |
| `calc_solution_active_mass` | 氢氧化钠清洗剂 | 供货溶液质量 × 实测或供应商认证质量分数 | 溶液质量；NaOH 质量分数 | kg 氢氧化钠当量，支持记录中保留溶液质量 | `eu-pef-method-2021` |
| `calc_reusable_pallet_share` | 欧标木托盘 | 实测托盘质量 ÷ 有记录全寿命使用次数 ÷ 每次有记录产品数 | 托盘质量；使用次数；每次产品数 | 归属于参考产品的托盘 kg | `eu-pef-method-2021` |
| `calc_shared_process_allocation` | 共用制造记录 | 实测总量 × 有记录产品因果份额；各产品份额总和必须等于总量 | 实测总量；各产品机器/试验时间或产量 | 产品可归属数量 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品类型、型号、工作原理、工作气体、润滑状态、额定性能、压力、功率、附件、试验方法和净质量。 | 放行规范；铭牌；物料清单；工厂试验报告 |
| `dq_bom_completeness` | 材料和包装投入 | 将放行产品特定物料清单和包装规范与实际领退料核对；未列材料应新增为原子行，不得聚合。 | 生产或工程部门签署的物料清单核对 |
| `dq_foreground_completeness` | 全部过程 | 核算声明场址边界内全部已知能源、水、材料、废物和直接排放，并解释排除项。 | 关联过程图和场址记录的完整性检查表 |
| `dq_temporal_geographic` | 全部前景记录 | 采用一致生产期间并标识每个场址；解释停产、爬坡、外包变化或非代表性生产活动。 | 生产日历；场址清单；差异审查 |
| `dq_measurement_traceability` | 实测流 | 保留仪表/秤身份、校准状态、读数期间、原始单位、转换、分配驱动因素和核对结果。 | 校准证书；原始导出；签署计算表 |
| `dq_waste_and_emissions` | 废物及基本流输出 | 保留组成、适用时的危险性分类、处理去向，以及直接排放为实测还是计算。 | 废物联单；实验室结果；监测报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | identity_and_reference_flow | 若数据包缺失任一必需产品限定信息、混合产品净质量与包装质量，或缺乏与已声明产品类型相符且可追溯的工厂试验，则拒绝数据包。 | `us-doe-10-cfr-431-app-a-2024`；`din-iso-21360-1-2025`；`us-doe-compressed-air-sourcebook-2003` |
| `validation_rule_2` | inventory_balance | 确认产品特定物料清单投入、单独计量包装、成品输出、废料、废物和留在产品内的工厂加注流体可在有记录质量基准上核对；调查未解释差异，不得强行闭合。 | `eu-pef-method-2021` |
| `validation_rule_3` | conditional_routes | 标为不适用的有条件过程必须有证据表明该过程已外包、不存在或包含在外购部件中；否则采集其原子交换。 | `jrc-fabricated-metal-products-2020` |
| `validation_rule_4` | energy_and_gases | 分配后将电力与仪表总量核对；MJ 转换前保留 kWh；汇总气体体积前确认参考条件和纯度。 | `eu-pef-method-2021` |
| `validation_rule_5` | uuid_and_localization | 确认中英文每个含 UUID 行具有相同 UUID，且采用公开 state-100 的英文和中文 baseName；在验证分类相容的精确候选项前，`in_cast_iron` 和 `in_polyethylene_film` 保持 UUID 为空。 |  |
| `validation_rule_6` | evidence_and_ranges | 未取得至少两个相互独立、经原文验证且边界相容的来源时，不得推导外部经验范围。在此之前必须采用前景记录并保留清单中的范围证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定、从摇篮到工厂大门的前景制造数据集 |
| downstream_use | 当产品身份、地域、技术、时间和自制/外购边界相容时，可作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 制造足迹建模；相容规范内供应商比较；部件或系统 LCA；单独建模下游阶段后的生命周期模型投影 |
| excluded_use | 直接比较不同泵/压缩机技术或性能工况；代表压缩空气或真空公用工程服务；在没有工况曲线时建模使用阶段能耗；仅零件产品；液体泵 |
| required_metadata | PCR id/版本；产品类型/型号；工作气体；工作原理；润滑状态；额定性能和压力；试验方法/条件；输入功率；净质量；加注流体；附件；物料清单版本；包装；场址；地域；生产期间；自制/外购边界；分配驱动因素；上游数据集选择 |
| required_quality_disclosure | 前景覆盖；仪表与秤校准；物料清单核对；共用过程分配；有条件过程适用性；废物与排放计量；未解决 UUID；缺少外部经验范围 |
| update_trigger | 产品设计或物料清单修订；供应商/材料变化；制造场址或自制/外购变化；试验方法或性能额定值变化；包装变化；工艺/能源结构变化；新的精确 Tiangong 身份；新的独立相容范围证据；或重大数据质量发现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Ver. 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 43230 正式身份与范围锚点 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279，英文合并 PDF，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230（检索于 2026-09-05） | 产品特定物料清单、企业特定制造记录、输入输出完整性、分配、数据质量与报告 |
| `jrc-fabricated-metal-products-2020` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Environmental Management Practice in the Fabricated Metal Products sector，2020，https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf（检索于 2026-09-05） | 机加工、金属加工液、清洗、表面作业、装配、公用工程及金属制品过程分解 |
| `us-doe-compressed-air-sourcebook-2003` | 官方指南（`official_guidance`） | 美国能源部，Improving Compressed Air System Performance: A Sourcebook for Industry，2003，https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf（检索于 2026-09-05） | 压缩机技术、润滑状态、空气质量、容量、压力及性能限定信息 |
| `us-doe-10-cfr-431-app-a-2024` | 标准（`standard`） | 美国能源部，《美国联邦法规》第 10 编第 431 部分 T 分部附录 A《特定空气压缩机统一试验方法》，2024 年年度版，https://www.govinfo.gov/content/pkg/CFR-2024-title10-vol3/pdf/CFR-2024-title10-vol3-part431-subpartT-appA.pdf（检索于 2026-09-05） | 压缩机体积流量、进口和排气压力、温度、冷凝物及整机压缩机输入功率的官方测量要求；以引用方式纳入适用的 ISO 1217:2009 条款 |
| `din-iso-21360-1-2025` | 标准（`standard`） | DIN ISO 21360-1:2025-04，《真空技术——真空泵性能测量的标准方法——第 1 部分：一般说明》（ISO 21360-1:2020），https://www.dinmedia.de/de/norm/din-iso-21360-1/389352087（检索于 2026-09-05） | 官方标准机构说明的真空泵体积流量、基础压力、压缩比及临界前级压力测量方法 |

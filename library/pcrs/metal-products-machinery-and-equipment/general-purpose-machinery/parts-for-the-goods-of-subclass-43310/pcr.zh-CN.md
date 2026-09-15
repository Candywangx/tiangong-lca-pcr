---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43310
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 滚动轴承零件

## 1. 范围与适用性

本 PCR 适用于单独供应、达到市场交付状态且可明确识别为滚珠或滚子轴承专用的零件，包括内外圈或滚道、滚珠、滚针、滚柱、保持架、防尘盖、密封件及同等专用滚动轴承零件。钢制和非钢制变体均可适用，但必须声明材料、零件类型、制造路线、技术规格和市场状态。

完整轴承、轴承单元、轴承座、滑动轴承、轴、齿轮、离合器、通用紧固件、通用坯料、作为产品销售的润滑剂、服务以及属于子类 43320 产品的零件不在本 PCR 范围内。集成于完整轴承中的零件，仅在其前景制造交换及交付质量可与完整轴承分离时纳入。

默认数据生产边界为门到门：从采购的坯料、半成品、辅助材料和能源进入受控制造场址开始，直至一个成品零件完成检验、防护和包装并在工厂门口交付。采购投入应链接上游数据集。安装、使用、维护和报废不属于该前景边界，除非研究明确扩展边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43310 |
| classification_refs | CPC 3.0：43331，第 43310 子类产品的零件；产品族：滚珠或滚子轴承零件 |
| covered_products | 单独供应的滚动体、套圈或滚道、保持架、防尘盖、密封件及其他滚珠或滚子轴承专用零件 |
| excluded_products | 完整轴承和轴承单元；轴承座和滑动轴承；子类 43320 的产品或零件；通用坯料和非专用五金件 |
| representative_product | 一个符合所声明图样或产品规格的指定成品滚动轴承零件 |
| production_route | 采购坯料或半成品；路线特定的成形或机加工；条件性热处理；精密精加工和检验；条件性清洗和防护；包装 |
| market_state | 已完工、检验合格、按需防护并包装，准备在工厂门口交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一个指定的、达到市场交付状态的滚珠或滚子轴承专用零件 |
| How much | 一个成品零件 |
| How well | 符合所声明图样、材料牌号、尺寸、公差、表面状态、硬度或热处理状态及检验准则 |
| How long or cycle | 一次工厂门口交付；仅在下游功能研究包含最终应用时声明使用寿命 |
| reference_flow_link | `packaging_and_release` 的输出行 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) 成品滚动轴承零件 |
| 参考产品流 | 成品滚动轴承零件 |
| 参考流属性 | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 零件类型；轴承应用或接口；材料和牌号；零件净质量；尺寸和公差；硬度或热处理状态；表面光洁度或涂层；防护状态；包装；制造场址和地理范围；报告期；纳入的路线步骤 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品 | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计入已检验合格且处于声明市场状态的零件；废品、待返工品和包装件均不是参考产品件。 |
| `part_and_material_mass` | 零件、材料、废物和包装质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 成品净质量与包装质量分别报告，保留称重精度，并按合格件数归一化批次总量。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原始记录保留 kWh，并按 1 kWh = 3.6 MJ 换算；披露电网地理范围、电压、合同电力组合及损耗边界。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量参考温度和压力、气体组成或计费热值，以及体积校正。 |
| `aqueous_solution_mass` | 氢氧化钠溶液和水混溶流体 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录溶液质量和浓度；仅在声明浓度基准时计算干物质质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的合金钢棒材或杆材、合金钢丝、钢板、其他已声明坯料或供应商提供的轴承零件半成品连同辅助材料、包装和能源进入场址。 |
| starting_condition_role | 前景制造入口；接收前的生产负荷保留在链接的上游数据集中。 |
| product_classification_scope | 单独供应的滚珠或滚子轴承专用零件；零件类型和材料决定适用路线步骤。 |
| recursive_input_rule | 采购的同一 PCR 类别成品投入以供应商数据集记录一次，不在接收过程中递归重建。 |
| upstream_dataset_requirement | 主要坯料、主要半成品、电力、燃料、辅助材料和包装优先链接供应商特定数据；否则使用具有代表性的当期归因型数据并披露代理数据。 |
| disclosure | 声明坯料形态和牌号、投入地理范围、场址、受控路线、排除项、分配、电力组合、气体参考条件、废物状态和包装边界。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_core_operations` | 前景制造 | 纳入声明路线所适用的全部受控成形、机加工、热处理、精加工、清洗、检验、防护、包装、直接排放和制造废物处理。 | `international-epd-pcr-2023-03-v1` |
| `boundary_route_conditionals` | 路线适用性 | 仅在声明路线采用某条件性过程时纳入；说明每个不适用步骤缺失的原因。 | `international-epd-pcr-2023-03-v1` |
| `boundary_upstream_links` | 采购投入 | 通过链接的上游数据集表示开采、初级生产、供应商加工、外购能源、包装生产和入厂运输。 | `international-epd-pcr-2023-03-v1` |
| `boundary_cutoff` | 清单完整性 | 避免截断；如仍有排除项，应记录敏感性，并证明在研究边界内产品质量、生命周期能源使用和各项报告影响结果至少覆盖 95%。 | `international-epd-pcr-2023-03-v1` |
| `boundary_default_exclusions` | 组织和资本活动 | 默认排除员工通勤、商务旅行、研发以及频率低于每三年一次的设备维护，除非研究明确纳入。 | `international-epd-pcr-2023-03-v1` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `primary_forming_and_machining` | 初次成形和机加工 | required | 采用实际路线：套圈下料、锻造或车削；滚动体切断或冷镦；保持架冲压或机加工；或同等成形。 | 前景生产 | 每个合格成品，按批次追溯 |
| `heat_treatment` | 热处理 | conditional | 场址控制退火、淬硬、渗碳、渗氮、回火、去应力或其他热处理时纳入。 | 前景调质 | 每个合格热处理零件 |
| `precision_finishing_and_inspection` | 精密精加工和检验 | required | 纳入适用的磨削、珩磨、研磨、抛光、去毛刺、尺寸检验和验收。 | 前景精加工 | 每个合格成品 |
| `cleaning_and_surface_protection` | 清洗和表面防护 | conditional | 场址控制水洗或碱洗、防腐、涂油、涂层或同等表面处理时纳入。 | 前景调质 | 每个合格处理零件 |
| `packaging_and_release` | 包装和工厂门口放行 | required | 纳入声明市场状态采用的实际销售或运输包装及放行操作。 | 前景放行 | 一个合格包装零件 |

### 过程：初次成形和机加工（`primary_forming_and_machining`）

#### 输入

##### 产品流

###### 用于套圈或滚柱的合金钢棒材或杆材（`forming_alloy_steel_bar`）

仅在声明的套圈或滚柱路线中记录该坯料。

- 选定流：除热加工或冷加工外经进一步加工的合金钢棒材和杆材 `f72c06a2-f974-4d85-9308-b31cbb1d1b9a`
- 流属性/单位：Mass / kg
- 数量规则：批次领用交付质量减去未改变退回的坯料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 用于冷成形滚动体的合金钢丝（`forming_alloy_steel_wire`）

仅在滚珠、滚针或滚柱由钢丝切断或冷镦时记录该坯料。

- 选定流：低合金钢丝 `461d98b3-a825-41bb-9b16-056331873326`
- 流属性/单位：Mass / kg
- 数量规则：批次领用交付质量减去未改变退回的钢丝质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 用于冲压保持架的钢板（`forming_steel_plate`）

仅在声明的保持架或防尘盖由钢板冲压或切割时记录。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：批次领用交付质量减去未改变退回的钢板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 成形和机加工电力（`forming_electricity`）

记录成形、机加工、控制及直接相关抽排设备的计量或合理分表电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：所追溯批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 成形流体补水（`forming_process_water`）

仅在水加入本过程的切削、成形、清洗或冷却回路时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配至所追溯批次的计量补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类收集的钢制边角料和切屑（`forming_steel_scrap`）

记录送往回收或处理的钢制边角料、切屑和报废坯料，并披露污染和废物终止状态。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开所追溯批次的称重废钢
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 废水混溶性金属加工液（`forming_spent_metalworking_fluid`）

废乳化液应与金属废料和清洗废水分别记录。

- 选定流：废水混溶性金属加工液
- 流属性/单位：Mass / kg
- 数量规则：离开批次的称重废液，或按体积和密度计算的废液
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 基本流

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理炉用气态天然气（`heat_natural_gas`）

仅在直接燃气炉或服务于本过程的现场热源中记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：所追溯批次消耗的校正计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个合格热处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 热处理电力（`heat_electricity`）

记录电炉、控制、气氛设备、淬火循环和抽排的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：所追溯批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个合格热处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 矿物淬火油补充量（`heat_quenching_oil`）

仅在报告期向淬火系统补充新油时记录。

- 选定流：矿物淬火油
- 流属性/单位：Mass / kg
- 数量规则：采购领用量减去未改变退回量，并分配至所追溯批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个合格热处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废矿物淬火油（`heat_spent_quenching_oil`）

记录离开场址控制、送往回收或处理的受污染淬火油。

- 选定流：废矿物淬火油
- 流属性/单位：Mass / kg
- 数量规则：离开所追溯系统的称重废油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格热处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 基本流

###### 炉内燃烧直接排放的化石二氧化碳（`heat_fossil_co2`）

仅记录现场计量天然气燃烧产生的直接化石二氧化碳，不计上游能源排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测质量，或按计量天然气和有文件依据的场址燃料碳因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格热处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`international-epd-pcr-2023-03-v1`

### 过程：精密精加工和检验（`precision_finishing_and_inspection`）

#### 输入

##### 产品流

###### 精加工和检验电力（`finishing_electricity`）

记录适用的磨削、珩磨、研磨、抛光、去毛刺、抽排和检验设备电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：所追溯精加工批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 磨削液补水（`finishing_process_water`）

仅在水作为水性精加工回路补水时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配至所追溯精加工批次的计量补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 水混溶性磨削液浓缩物（`finishing_grinding_fluid`）

采购的浓缩物与稀释用水分开记录。

- 选定流：水混溶性磨削液浓缩物
- 流属性/单位：Mass / kg
- 数量规则：浓缩物领用量减去未改变退回量，并分配至所追溯批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢磨削污泥（`finishing_grinding_sludge`）

含钢细粉和磨削液的污泥作为一项已表征废物流记录，并保留水、油和金属组分。

- 选定流：钢磨削污泥
- 流属性/单位：Mass / kg
- 数量规则：清运时称量湿质量，并保留干固体比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 基本流

### 过程：清洗和表面防护（`cleaning_and_surface_protection`）

#### 输入

##### 产品流

###### 水洗工艺用水（`surface_process_water`）

记录跨越过程边界的槽液补水和终洗水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：所追溯批次的计量补水和冲洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格清洗零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 碱洗用氢氧化钠（`surface_sodium_hydroxide`）

仅在声明的碱洗路线中记录，并保留交付浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：按领用溶液质量和声明浓度计算的干氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个合格清洗零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 矿物防锈油（`surface_rust_preventive_oil`）

仅在防锈油施加于市场交付状态零件时记录新油。

- 选定流：矿物防锈油
- 流属性/单位：Mass / kg
- 数量规则：采购领用量减去回收的未改变油量，并分配至合格零件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个合格防护零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 轴承零件清洗水性废水（`surface_industrial_wastewater`）

记录送往场内或场外处理的清洗废水，并保留槽液身份和分析组成。

- 选定流：轴承零件清洗水性废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或按体积和实测密度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格清洗零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 基本流

### 过程：包装和工厂门口放行（`packaging_and_release`）

#### 输入

##### 产品流

###### 瓦楞纸板包装（`packaging_corrugated_board`）

纸箱、隔板或衬垫与聚合物薄膜分别记录。

- 选定流：瓦楞纸板包装
- 流属性/单位：Mass / kg
- 数量规则：按合格包装件分配的包装物料清单质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个合格包装零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 低密度聚乙烯包装薄膜（`packaging_polyethylene_film`）

低密度聚乙烯袋或包裹膜与纸板分开记录。

- 选定流：低密度聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：按合格包装件分配的包装物料清单质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个合格包装零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`international-epd-pcr-2023-03-v1`

###### 包装和放行电力（`packaging_electricity`）

记录包装、标签和最终放行搬运的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：合格包装零件的计量或合理分表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个合格包装零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品滚动轴承零件（`reference_product`）

仅在检验合格并完成声明的防护和包装后记录。

- 选定流：成品滚动轴承零件
- 流属性/单位：Number of items / Item(s)
- 数量规则：恰好一个合格成品零件
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一个声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`international-epd-pcr-2023-03-v1`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用操作 | 通过分表计量、批次追溯、设备时间、物料领用和废物分别称重避免分配。 | `international-epd-pcr-2023-03-v1` |
| `allocation_physical` | 无法拆分的共用操作 | 按物理驱动因素分配：材料损失和批量处理按加工质量，能源按设备或炉时，共用流体按槽载荷；仅对可证明等同的零件按件数。 | `international-epd-pcr-2023-03-v1` |
| `allocation_economic_fallback` | 无物理关系的共产品 | 仅在无法建立物理关系时采用经济分配；披露价格基准和期间并开展敏感性分析。 | `international-epd-pcr-2023-03-v1` |
| `allocation_waste_boundary` | 废物和回收材料 | 在有文件证明的废物终止点前，将收集、调质和处理负荷归于废物产生者；之后的收益默认在边界外。 | `international-epd-pcr-2023-03-v1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `primary_forming_and_machining` | 材料、电力、水、废钢和废液 | 领用、计量、称重、批次流转 | 坯料身份和牌号；领退质量；电力；水；合格件数；废钢；废液 | 按同一批次核对仓储、仪表、生产和废物记录 | kg; MJ; Item(s) | 每批，按月汇总 | 代表性年度或声明的生产期 | 全部受控成形产线 | 汇总已分配交换并除以合格件数 | 校准记录；证书；流转单；废物记录 |
| `cp_heat_treatment_records` | `heat_treatment` | 天然气、电力、油、废油、直接 CO2 | 仪表、炉日志、领用、废物和排放记录 | 处理件数；配方；气体条件；电力；油；CO2 或因子 | 将炉次和仪表关联到批次 | m3; MJ; kg; Item(s) | 每炉，按月汇总 | 代表性年度或生产期 | 全部受控热处理设备 | 按处理质量或炉占用分配并除以合格件数 | 仪表；炉日志；燃料规格；排放证据 |
| `cp_finishing_records` | `precision_finishing_and_inspection` | 电力、水、磨削液、污泥、合格件数 | 仪表、领用、污泥转移、检验 | 产线；批次；电力；水；浓缩物；污泥及干固体比例；件数 | 将产线记录与检验批次核对 | MJ; kg; Item(s) | 每批，按月汇总 | 代表性年度或生产期 | 全部受控精加工产线 | 已分配交换除以合格件数 | 仪表；领用；污泥分析；检验放行 |
| `cp_surface_records` | `cleaning_and_surface_protection` | 水、氢氧化钠、防锈油、废水 | 仪表、槽液日志、领用、排放、流转 | 槽液；水；溶液质量和浓度；油；废水和分析；件数 | 将槽液添加和排放与处理零件核对 | kg; Item(s) | 每次添加或排放，按月汇总 | 代表性年度或生产期 | 全部受控清洗产线 | 计算干化学品，按处理质量或面积分配并除以合格件数 | 仪表；供应商证书；槽液和废水分析 |
| `cp_packaging_records` | `packaging_and_release` | 包装、电力、参考产品 | 物料清单、仪表、放行记录 | 包装身份和质量；再生含量；电力；包装件数；净质量；放行 | 将包装规格和能源关联到放行批次 | kg; MJ; Item(s) | 每放行批，按月汇总 | 代表性年度或生产期 | 全部受控包装操作 | 包装和能源除以合格放行件数 | 规格；声明；称重；放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | 全部交换 | 归一化交换 = 已分配批次交换 / 合格成品件数；废品不计入分母并披露返工处理 | 已分配交换；合格件数 | 每 Item(s) 交换 | `international-epd-pcr-2023-03-v1` |
| `calc_electricity_conversion` | 电力 | MJ = 计量 kWh × 3.6；保留原始单位和读数 | kWh | MJ |  |
| `calc_solution_dry_mass` | 氢氧化钠和浓缩物 | 干物质或浓缩物质量 = 溶液质量 × 声明质量分数；密度不等于浓度 | 溶液质量；质量分数 | kg 干物质 |  |
| `calc_direct_fossil_co2` | `heat_fossil_co2` | 优先用烟气实测质量；否则用校正气量乘以有文件依据的场址燃料碳因子和氧化基准，并排除上游排放 | 气量；碳因子；氧化基准 | kg 直接化石 CO2 | `international-epd-pcr-2023-03-v1` |
| `calc_wastewater_mass` | `surface_industrial_wastewater` | 废水质量 = 计量体积 × 实测代表性密度 | 体积；密度 | kg 废水 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品和坯料 | 保留零件规格、材料证书、坯料形态、净质量、路线、热处理状态、表面状态和检验放行。 | 图样；证书；流转单；检验记录 |
| `dq_specific_core_data` | 受控操作 | 能源、辅助材料、主要零件制造、精加工和制造废物使用场址特定数据。 | 仪表；采购、生产和废物记录 |
| `dq_temporal_alignment` | 前景记录 | 使用一个声明的代表性期间，通常为一年；识别生产期、停产、外包和异常。 | 期间台账；产量；仪表覆盖 |
| `dq_meter_and_mass_balance` | 材料、水、能源、产品、废物 | 记录校准、缺失数据和核对；发布前调查不平衡。 | 校准；核对；纠正措施 |
| `dq_electricity_disclosure` | 电力 | 声明电网、电压、供应商或剩余/消费组合、合同工具和损耗；防止可再生属性重复计算。 | 账单；供应商声明；数据集元数据 |
| `dq_generic_data` | 上游数据集 | 使用时间、技术和地理上有代表性的当期归因型数据；披露代理并检查完整性限值。 | 数据集元数据；代表性和代理评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品身份 | 零件类型、轴承用途、材料、净质量、尺寸或公差、路线、市场状态、场址、地理范围或期间缺失时校验失败。 | `un-cpc-3-0-structure-2025`; `international-epd-pcr-2023-03-v1` |
| `validation_reference_flow` | 参考流 | 必须恰好有一个合格 `reference_product`，且所有交换按相同分母和包装边界归一化。 | `international-epd-pcr-2023-03-v1` |
| `validation_route_completeness` | 过程图 | 每个条件性过程及坯料、燃料、流体、化学品、排放和包装行必须有适用性决定；无解释的零值不通过。 | `international-epd-pcr-2023-03-v1` |
| `validation_mass_and_waste` | 材料和废物平衡 | 对同一批次核对坯料、合格件质量、废钢、污泥、废液、废水和声明损失。 | `international-epd-pcr-2023-03-v1` |
| `validation_energy_and_emissions` | 能源和排放 | 验证仪表覆盖、kWh 到 MJ 换算、气体条件、电力组合，以及直接化石 CO2 与上游排放的分离。 | `international-epd-pcr-2023-03-v1` |
| `validation_allocation_and_cutoff` | 分配和完整性 | 要求分配驱动因素、采用经济分配时的敏感性，以及声称截断时 95% 质量、能源和影响覆盖证据。 | `international-epd-pcr-2023-03-v1` |
| `validation_source_traceability` | 证据 | 非默认规则、因子和代理必须有稳定来源或保留记录；UUID 身份证据不是数量证据。 | `international-epd-pcr-2023-03-v1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明滚动轴承零件的产品特定前景制造数据集 |
| downstream_use | 可作为匹配完整轴承、机械、维修零件或生命周期模型的 secondary_dataset 或 background_dataset |
| allowed_use | 与零件身份、材料、规格、路线、地理、技术、期间、防护和包装相匹配的归因型建模 |
| excluded_use | 作为完整轴承、轴承座、齿轮或全部零件的通用代理；跨显著不同零件或牌号替代；未建模的使用阶段摩擦或寿命声明 |
| required_metadata | PCR id 和状态；零件规格和类型；轴承应用；材料和净质量；尺寸；热处理和表面状态；路线和外包；场址和地理；期间；分配；电力组合；来源；未解决 UUID 和范围需求 |
| required_quality_disclosure | 初级数据覆盖；校准；平衡；合格/废品/返工件数；代理；截断；分配；废物处理和废物终止；包装 |
| update_trigger | 图样、材料、路线、供应商、场址、能源组合、包装或分配发生实质变化，或任何报告影响指标变化达到 10% 时重新计算 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-05 | CPC 43331 身份和层级 |
| `international-epd-pcr-2023-03-v1` | 标准（`standard`） | International EPD System，PCR 2023:03 Bearings, bearing units and parts thereof，1.0.0 版，https://www.environdec.com/pcr-library/pcr_c8639225-b509-4a82-6b78-08d9caad768c，检索日期 2026-09-05 | 边界、声明单位、过程分解、操作、排放和废物、截断、分配、质量、包装和更新规则 |
| `prc-mof-2026-tariff` | 官方指南（`official_guidance`） | 中华人民共和国财政部，《2026 年关税调整表》，https://m.mof.gov.cn/czxw/202604/P020260428407579725260.pdf，检索日期 2026-09-05 | HS 84829100 滚动体和 HS 84829900 其他滚动轴承零件的中文专业术语核验 |

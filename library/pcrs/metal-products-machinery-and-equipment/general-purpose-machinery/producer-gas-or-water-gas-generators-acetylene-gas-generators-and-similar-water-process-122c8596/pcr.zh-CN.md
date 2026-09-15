---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.producer-gas-or-water-gas-generators-acetylene-gas-generators-and-similar-water-process-122c8596
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 发生炉煤气或水煤气发生器；乙炔发生器及类似水解气体发生器；蒸馏或精馏设备；热交换装置；空气或其他气体液化设备

## 1. 范围与适用性

本 PCR 适用于以下完整工业设备在制造场址大门处的前景数据包：发生炉煤气或水煤气发生器、乙炔或类似水解制气发生器、蒸馏或精馏设备、热交换装置，以及空气或其他气体液化设备。联合国 CPC 3.0 正式结构将这些产品归入子类 43911；国际 EPD 体系的机械 PCR 也独立确认 CPC 439 组通用机械属于需要产品类别规则的方法学类别（`un-cpc-3-0-structure-2025`；`epd-international-pcr-2010-08-v4-0-2`）。

共同语义边界为已经完成制造和工厂检验，并在制造场址大门处交付的一台工艺设备。数据包必须声明一个具体设备子组和型号；本 PCR 不表示发生器、塔器、换热器或深冷装置之间具有相同功能。使用阶段能耗、工艺原料、安装、维护、备件、配送和寿命终止均不属于本参考数据集；下游研究如需纳入，应作为单独披露的模块处理。单独销售的零件、设备所生产的气体、工业气体生产、施工工程、空气调节器、制冷设备和热泵不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.producer-gas-or-water-gas-generators-acetylene-gas-generators-and-similar-water-process-122c8596 |
| classification_refs | CPC 3.0：43911（准确的分类语境；映射接受由独立治理流程决定） |
| covered_products | 完整的发生炉煤气或水煤气发生器；乙炔或类似水解制气发生器；蒸馏或精馏设备；热交换装置；空气或其他气体液化设备 |
| excluded_products | 设备生产或处理的气体；单独销售的零件；现场安装和施工；空气调节器；制冷或冷冻设备；热泵；其他利用温度变化处理材料的机械 |
| representative_product | 单一所覆盖子组内、已经完成制造和工厂检验的一个声明设备型号 |
| production_route | 接收供应商零部件和金属；进行适用的厂内加工、连接和表面处理；完成装配、检验和放行；随货供应时增加出厂包装 |
| market_state | 制造场址大门处的完整设备；除不可避免的试验残留外，设备保持干燥且不含客户工艺流体；应声明所含辅机和出厂包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明的制气、蒸馏或精馏、换热，或空气/气体液化设备功能 |
| How much | 由一台完整设备提供的额定能力；清单交换统一归一化到制造场址大门处 1 kg 该设备 |
| How well | 声明设备子组、型号、额定产能或热负荷、设计压力、运行温度范围、结构材料、效率或性能准则，以及试验/验收标准 |
| How long or cycle | 从制造到工厂验收和大门交付的一个完整生产周期；使用寿命不属于本大门到大门参考流 |
| reference_flow_link | 一千克所声明的完整设备实现质量归一化参考流；功能比较还必须保证声明负荷与性能限定信息等同 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 发生炉煤气或水煤气发生器，乙炔发生器及类似水法气体发生器，蒸馏或精馏装置，热交换器，空气或煤气液化机械 `0981e6ca-1eb5-49dd-b1af-cf251bdaef10` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 所覆盖设备子组；制造商与型号；额定产能、热负荷或气体处理量；设计压力；运行温度范围；工作流体或设计介质；结构材料和物料清单完整性；所含辅机与控制系统；生产场址与参考年；工厂试验方法与验收状态；大门状态；包装纳入情况；分配基准 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 完整参考设备 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对出厂设备配置称重，或根据已核对的物料清单计算质量。已安装辅机应计入设备质量；随货包装质量应单独识别。所有清单交换均归一化到 1 kg 完整设备。 |
| `material_mass` | 金属、密封、化学品、包装和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测或采购记录质量。记录以件数、面积或体积表示时，应保留件数、尺寸、密度依据和换算过程。 |
| `electrical_energy` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 归一化前保留电表电量。按 1 kWh = 3.6 MJ 换算；不得将外购电力与场内燃料合并。 |
| `gaseous_fuel_volume` | 天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或计量表参考条件记录气态天然气体积。声明温度、压力以及体积为标况、标准或实际体积；缺少这些条件时不得换算。 |
| `water_mass` | 工艺用水与试验用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录外供水质量。只有在密度和测量条件有据可查时才能由体积换算；回用水应与边界净投入分开报告。 |

## 5. 系统边界

前景边界从外购材料、零部件、包装和公用工程进入制造场址时开始，到经过检验的完整设备跨越工厂大门时结束。供应商生产由上游数据集表示；场内加工、连接、表面处理、装配、试验、转移前废物处理以及直接基本流排放属于前景活动。该边界遵循欧盟产品环境足迹方法中的供应链和前景流识别原则（`eu-pef-recommendation-2021-2279`）。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付制造场址的外购金属、零部件、化学品、包装和公用工程，并记录供应商身份、材料规格、数量和交付地域 |
| starting_condition_role | 外购投入的上游生产由相连接的次级或供应商特定数据集表示，不在前景制造过程中重复构建 |
| product_classification_scope | CPC 3.0 子类 43911 设备语义边界内的一个已声明完整产品；必须明确具体设备子组 |
| recursive_input_rule | 作为较大成套装置组成部分而外购的完整 CPC 43911 机器只作为一个上游产品投入记录；仅当供应商特定前景清单替代该上游数据集时才进一步分解 |
| upstream_dataset_requirement | 每项外购投入应连接地域和技术具有代表性的上游数据集；相关时披露材料牌号、产品形态、再生含量和交付边界 |
| disclosure | 声明设备子组和型号、功能和额定能力、压力/温度范围、工作介质、物料清单、所含辅机、生产场址和年份、实际运行过程、试验残留、包装状态、排除项、截断项和分配方法 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | 纳入外购投入、场内制造和试验、场内废物输出及直接基本流，直至完整设备在工厂大门处放行。安装、使用、维护和寿命终止不属于本参考数据集。 | `eu-pef-recommendation-2021-2279`, `alfa-laval-epd-s-p-12165-2024` |
| `boundary_process_applicability` | process_map | 只有生产记录表明某条件过程用于声明型号时才纳入；披露外包工序，并以供应商特定或具有代表性的上游数据集表示。 | `eu-pef-recommendation-2021-2279` |
| `boundary_complete_flows` | foreground_inventory | 分别识别每项前景共产品、副产品、废物流和直接基本流。排除流必须有筛选记录，不得隐藏在合并的公用工程或废物行中。 | `eu-pef-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `materials_and_components` | 材料与零部件接收 | `required` | 始终纳入声明设备配置已核对的物料清单 | 前景采购与产品组成 | 每 1 kg 完整参考设备 |
| `fabrication_and_joining` | 厂内加工与连接 | `conditional` | 报告场址进行板材切割、成形、机加工、焊接、钎焊或热处理时纳入 | 前景制造 | 每 1 kg 完整参考设备 |
| `surface_preparation` | 厂内表面预处理与清洗 | `conditional` | 场内进行碱洗、漂洗、酸洗、钝化或其他湿法预处理时纳入 | 前景表面处理 | 每 1 kg 完整参考设备 |
| `assembly_and_testing` | 装配与工厂试验 | `required` | 始终纳入声明型号的最终装配和工厂验收活动 | 前景装配与放行 | 每 1 kg 完整参考设备 |
| `outbound_packaging` | 出厂包装 | `conditional` | 纳入随大门处产品供应的每项包装 | 前景包装 | 每 1 kg 完整参考设备 |

### 过程：材料与零部件接收（`materials_and_components`）

#### 输入

##### 产品流

###### 纳入设备的钢板（`steel_plate`）

声明物料清单含有构成设备的外购合金钢板时记录该投入。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：根据接收记录和物料清单核对的、纳入设备的外购钢板净质量及其可归属板材损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bill_of_materials`
- 来源：`alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### 纳入设备的不锈钢板（`stainless_steel_plate`）

纳入已声明牌号的不锈钢板时单独记录；经审计的候选项在名称、分类和产品形态方面不一致，因此 Tiangong 身份仍未解决。

- 选定流：不锈钢板
- 流属性/单位：Mass / kg
- 数量规则：按声明牌号计算的外购不锈钢板净纳入质量及其可归属板材损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bill_of_materials`
- 来源：`alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### 外购密封件（`sealing_elements`）

在声明设备中安装垫片或其他外购密封件时记录；必须声明弹性体化学组成和规格。

- 选定流：密封件 `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- 流属性/单位：Mass / kg
- 数量规则：已安装外购密封件质量，并在前景记录中按声明的弹性体或材料规格分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bill_of_materials`
- 来源：`alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：厂内加工与连接（`fabrication_and_joining`）

#### 输入

##### 产品流

###### 加工用电力（`fabrication_electricity`）

计量或分配场内切割、成形、机加工、焊接、钎焊及其抽排系统用于声明设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：加工过程实测电量，或依据机器运行时间和额定/实测负载对共享电表数据进行有据可查的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### 场内热加工用天然气（`fabrication_natural_gas`）

只有场内加工、预热、消除应力或类似热加工实际消耗气态天然气时才纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件计量或与发票核对，并归属于纳入加工工序的天然气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_fuel`
- 来源：`eu-pef-recommendation-2021-2279`

###### 机加工或制造用工艺用水（`fabrication_process_water`）

水作为水基金属加工液、切割、冷却或本过程制造清洗的外供投入时纳入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：外供工艺用水总质量减去单独记录的内部回用量，并分配到纳入的制造工序
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`us-epa-mpm-development-document-2003`, `eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 加工产生的废钢（`steel_scrap`）

离开前景过程、送往回收或处置的黑色金属板材边角料、切屑和钢制报废件记录为废钢。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：Mass / kg
- 数量规则：对声明设备可归属的废钢称重，并与材料投入和纳入产品的质量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_waste`
- 来源：`alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

##### 基本流

###### 场内天然气燃烧产生的化石源二氧化碳（`fabrication_carbon_dioxide_fossil`）

仅对前景边界内燃烧天然气产生的直接化石源二氧化碳进行记录；上游电力和供应商排放不属于本基本流行。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接实测排放，或依据所纳入天然气记录和有据可查的含碳量/排放因子方法进行计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-recommendation-2021-2279`

### 过程：厂内表面预处理与清洗（`surface_preparation`）

#### 输入

##### 产品流

###### 碱性表面清洗用氢氧化钠（`surface_cleaning_sodium_hydroxide`）

只有场内碱性清洗浴或溶液消耗氢氧化钠时才记录；声明溶液浓度和补加基准。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：由外购溶液质量和浓度计算投加或补加的氢氧化钠活性物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_chemicals`
- 来源：`us-epa-mpm-development-document-2003`

###### 表面清洗与漂洗用工艺用水（`surface_cleaning_process_water`）

进行湿法表面预处理时，记录跨越场址边界、用于清洗浴补水或漂洗的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或根据罐体平衡得到的清洗和漂洗步骤外供水总量；回收和循环水应另行披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`us-epa-mpm-development-document-2003`

###### 表面预处理用电力（`surface_cleaning_electricity`）

泵、搅拌、通风、加热控制和废水输送设备用电应与加工用电分开记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：表面预处理过程实测电量，或共享电表数据的有据可查分配值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-mpm-development-document-2003`, `eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 表面预处理废水（`surface_finishing_wastewater`）

记录离开清洗、漂洗、酸洗或钝化操作的具体水性废物流及其过程来源和组成；经审计的候选冷凝水并不准确，因此不分配 Tiangong UUID。

- 选定流：金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：测量声明设备可归属的排放或外运废水质量，并保留溶解态和悬浮态污染物证据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_wastewater`
- 来源：`us-epa-mpm-development-document-2003`

##### 基本流

### 过程：装配与工厂试验（`assembly_and_testing`）

#### 输入

##### 产品流

###### 装配与试验用电力（`assembly_electricity`）

记录声明设备的装配工具、搬运设备、控制系统配置、泄漏试验和工厂验收用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测电量，或根据设备试验时长和实测/额定负载进行有据可查的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### 水压试验用水（`hydrostatic_test_water`）

仅当声明设备进行水压试验时纳入工艺用水；记录中应区分循环使用的试验水和排放水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：声明设备可归属的试验回路外供补水总量，不包括内部循环体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_factory_testing`
- 来源：`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整的工厂大门处工艺设备（`reference_product`）

完成制造并验收合格的设备为参考产品输出。即使 Tiangong 身份表示整个 CPC 43911 产品类别，也必须声明具体子组和功能性能限定信息。

- 选定流：发生炉煤气或水煤气发生器，乙炔发生器及类似水法气体发生器，蒸馏或精馏装置，热交换器，空气或煤气液化机械 `0981e6ca-1eb5-49dd-b1af-cf251bdaef10`
- 流属性/单位：Mass / kg
- 数量规则：根据所声明出厂配置核对的 1 kg 完整参考设备
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

### 过程：出厂包装（`outbound_packaging`）

#### 输入

##### 产品流

###### 欧标木托盘（`euro_wooden_pallet`）

只有该规格托盘随声明设备供应时才记录欧标木托盘；其他托盘规格必须使用各自的原子流。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：分配给声明设备的随货欧标托盘质量；只有所有权和循环次数有证据时才按重复使用进行调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_outbound_packaging`
- 来源：`alfa-laval-epd-s-p-12165-2024`

###### 塑料保护薄膜（`plastic_film`）

塑料薄膜作为保护或运输包装随货供应时记录；声明聚合物、厚度和再生含量。

- 选定流：塑料薄膜 `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- 流属性/单位：Mass / kg
- 数量规则：根据包装领料或称重记录得到的、随声明设备供应的塑料薄膜净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 完整参考设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outbound_packaging`
- 来源：`alfa-laval-epd-s-p-12165-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_manufacturing_processes | 首先按计量过程、生产订单、机器时间、试验运行和废物记录进行细分，使投入产出可直接归属于声明设备。只有在有意纳入并记录附加功能时才使用系统扩展。 | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_relation` | residual_shared_inputs_outputs | 无法细分时，使用具有因果关系的物理参数，例如机器时间乘实测负载、加工板材面积、焊缝长度、试验时长或设备质量。声明分配键，并将分配总量与场址记录核对。 | `eu-pef-recommendation-2021-2279`, `alfa-laval-epd-s-p-12165-2024` |
| `allocation_economic_last_resort` | residual_multifunctionality | 仅在细分、系统扩展和合理物理关系均不可行时采用经济分配；披露价格、参考期、敏感性和受影响流。 | `eu-pef-recommendation-2021-2279` |
| `allocation_scrap_no_avoided_burden` | steel_scrap | 将离开前景边界的废钢作为废物输出报告。本工厂大门清单内不得扣除所避免的原生钢负担；下游回收建模属于另行披露的选择。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bill_of_materials` | `materials_and_components` | 纳入的外购材料或零部件 | ERP 物料清单、接收记录和完工放行记录 | 物料编号；材料规格；产品形态；供应商；接收质量；安装质量；生产订单；报废数量 | 将声明配置的完工物料清单与采购和接收记录核对 | kg | 每个生产订单 | 数据集参考期内所有代表性设备 | 制造场址和声明设备型号 | 按原子材料或零部件流汇总安装质量和可归属损耗，再按验收设备质量归一化 | 已批准物料清单；材质证明；接收记录；质量核对 |
| `cp_process_energy` | `fabrication_and_joining`; `surface_preparation`; `assembly_and_testing` | 按过程划分的电力 | 分表、机器日志和生产订单 | 电表起值；电表止值；机器编号；运行时间；负载；过程编号；生产订单 | 优先采用过程分表；否则依据有据可查的运行时间和实测/额定负载分配共享电表数据 | MJ | 每批次或每月电表周期 | 可行时采用有代表性的连续 12 个月 | 报告场址内所有纳入生产区域 | 扣除非生产和排除产品负载，分配到生产订单，再除以验收设备质量 | 校准电表记录；分配工作表；能源发票核对 |
| `cp_process_fuel` | `fabrication_and_joining` | 纳入热加工的天然气 | 燃气表、发票和炉窑日志 | 体积；参考温度；参考压力；计量周期；设备编号；运行时间；生产订单 | 将计量总量与发票核对，只分配纳入工序消耗的燃气 | m3 | 每个计量周期 | 可行时采用有代表性的连续 12 个月 | 纳入的场内热加工设备 | 汇总可归属参考条件体积，再除以验收设备质量 | 仪表校准；发票核对；参考条件声明 |
| `cp_process_water` | `fabrication_and_joining`; `surface_preparation` | 外供工艺用水 | 水表、罐体平衡和批次日志 | 进水；补水；回水；排污；过程编号；批次编号；生产订单 | 计量外供总量并记录内部循环，不把内部循环重复作为边界投入 | kg | 每批次或每月计量周期 | 可行时采用有代表性的连续 12 个月 | 纳入的用水过程 | 将边界外供净投入分配到生产订单，再按验收设备质量归一化 | 仪表校准；罐体平衡；回用日志 |
| `cp_process_waste` | `fabrication_and_joining` | 废钢 | 废料称重票和生产订单 | 皮重；毛重；材料牌号；污染状态；去向；生产订单 | 对分类收集的黑色金属废料称重；混合收集时依据生产记录分配 | kg | 每次清运或生产批次 | 与材料投入记录相同的时期 | 纳入的加工区域 | 汇总可归属废料，并将材料投入与纳入产品及其他已识别输出核对 | 秤校准；清运票；质量平衡工作表 |
| `cp_direct_emissions` | `fabrication_and_joining` | 直接化石源二氧化碳 | 连续测量或燃料计算记录 | 实测排放；燃料体积；参考条件；燃料含碳量或因子；氧化基准；计算版本 | 有代表性时采用直接测量；否则用同一燃料记录和有据可查的因子方法计算 | kg | 每个燃料计量周期 | 与燃料消耗相同的时期 | 仅限前景燃烧源 | 汇总直接化石源二氧化碳，再除以验收设备质量 | 仪器 QA 或可追溯因子来源；计算工作表；燃料核对 |
| `cp_surface_chemicals` | `surface_preparation` | 氢氧化钠活性物质 | 采购、配槽和浓度记录 | 溶液质量；浓度；槽编号；补加量；带出量；生产订单 | 根据称量的溶液和经核验浓度确定活性物质质量 | kg | 每次配槽和补加 | 与表面预处理生产相同的时期 | 纳入的湿法预处理线 | 汇总可归属生产订单的活性物质投加量，再按验收设备质量归一化 | 供应商证书；浓度检测；槽液日志；计算记录 |
| `cp_surface_wastewater` | `surface_preparation` | 金属表面处理废水 | 排放计量、罐车转运和实验室记录 | 废水质量或体积；密度；pH；溶解金属；悬浮物；处理状态；去向；生产订单 | 在排放或外运处计量每股具体废物流，并保留有代表性的化学组成 | kg | 每次排放或转运 | 与表面预处理投入相同的时期 | 纳入的清洗、漂洗、酸洗和钝化操作 | 内部回用后按具体废水流汇总，并依据槽液批次或生产记录分配 | 仪表或秤校准；实验室报告；转移联单；水平衡 |
| `cp_factory_testing` | `assembly_and_testing` | 水压试验用水 | 试验单和补水记录 | 设备序列号；内部容积；补水；回收水；排水；试验日期；结果 | 仅记录跨越边界的补水，不记录试验回路内部循环量 | kg | 每台受试设备 | 全部代表性受试设备 | 工厂试验区域 | 汇总合格设备及其可归属失败试验的补水，再除以合格设备质量 | 签字试验单；水平衡；仪表校准 |
| `cp_outbound_packaging` | `outbound_packaging` | 随货托盘或薄膜 | 装箱单、领料记录和称重记录 | 包装物品；材料；规格；领用数量；质量；重复使用状态；生产订单 | 对每项原子包装称重，或根据经核验的单件质量和数量计算 | kg | 每次发运 | 数据集代表的全部发运 | 工厂大门包装过程 | 汇总随声明配置供应的包装，并按验收设备质量归一化 | 装箱单；称重记录；供应商规格；重复使用证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 同一生产订单的可归属时期数量 / 合格完整设备质量 | 可归属流数量；合格设备质量 | 每 1 kg 完整参考设备的流数量 | `eu-pef-recommendation-2021-2279` |
| `calc_electricity_conversion` | 电力行 | 电力 MJ = 电表电力 kWh × 3.6 | 电表 kWh | 电力 MJ |  |
| `calc_active_sodium_hydroxide` | `surface_cleaning_sodium_hydroxide` | NaOH 活性物质质量 = 溶液质量 × 实测或供应商认证质量分数 | 溶液质量；NaOH 质量分数 | kg 氢氧化钠 | `us-epa-mpm-development-document-2003` |
| `calc_material_reconciliation` | 物料清单与废钢 | 可归属外购质量 = 纳入合格产品的质量 + 可归属分类废料 + 其他单独识别损耗，并根据期初期末在制品变化调整 | 接收质量；安装质量；废料质量；其他损耗；在制品变化 | 已核对的原子材料流 | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 设备子组、型号、功能、额定能力、压力/温度范围、工作介质、物料清单和所含辅机必须明确无歧义。 | 放行图纸和物料清单；数据表；工厂验收记录 |
| `dq_temporal` | 前景活动数据 | 采用一致且有代表性的时期；有生产活动时通常采用连续 12 个月，并披露较短批次、异常停机或外推。 | 计量周期；生产台账；代表性说明 |
| `dq_mass_balance` | 材料与废物行 | 将主要外购材料质量与合格产品、在制品和单独识别的废物或损耗核对；解释残差。 | 签字质量平衡工作表；称重和 ERP 记录 |
| `dq_meter_allocation` | 共享能源与用水 | 共享计量分配应采用具有因果关系的驱动因素，并与计量总量核对，不得重复计算。 | 计量导出；分配键；核对与敏感性检查 |
| `dq_geography_technology` | 上游数据集 | 相关时匹配材料牌号、产品形态、能源结构、供应商地域、再生含量和技术；披露代理数据和数据缺口。 | 数据集元数据；供应商文件；代理数据登记表 |
| `dq_completeness` | 前景清单 | 分别记录每项原子公用工程、材料、包装物、废物流和直接基本流。记录排除项和筛选。 | 与采购、计量、废物和排放记录相连的完整性清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | reference_flow | 具体设备子组或任何必需限定信息缺失，或者参考产品未归一化到工厂大门处 1 kg 合格设备时，拒绝该数据包。 | `un-cpc-3-0-structure-2025`, `eu-pef-recommendation-2021-2279` |
| `validate_process_applicability` | process_inventory | 对声明型号，所有条件过程均应标为适用或不适用。适用过程必须包含其原子投入和输出；外包过程必须有披露的上游数据集。 | `eu-pef-recommendation-2021-2279` |
| `validate_inventory_reconciliation` | foreground_inventory | 检查采集行和计算行是否连接采集协议、单位和生产时期；核对共享计量、物料清单质量、废钢、水平衡和合格输出质量。 | `eu-pef-recommendation-2021-2279`, `us-epa-mpm-development-document-2003` |
| `validate_direct_emission_scope` | elementary_flows | `fabrication_carbon_dioxide_fossil` 中的化石源二氧化碳仅表示与所报告燃料行相关的场内直接燃烧；上游排放和电力排放留在上游数据集中。 | `eu-pef-recommendation-2021-2279` |
| `validate_no_unsupported_ranges` | amount_ranges | 除非至少两项独立来源的边界、功能基准和产品状态兼容，否则不得采用外部经验范围。缺少这类证据时，使用前景采集规则并披露未解决的证据需求。 |  |
| `validate_comparability` | comparative_use | 不得仅依据 1 kg 参考量比较不同设备子组或型号。比较还必须保证功能、额定能力、性能、压力、温度、工作介质、使用假设和边界等同。 | `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于一个已声明 CPC 43911 设备配置工厂大门制造的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 作为外供设备投入连接到过程或生命周期模型；相关时由下游模型另行模拟安装、运行、维护、更换和寿命终止 |
| allowed_use | 在声明型号、技术、地域、参考年和工厂大门边界具有代表性时，用于归因型产品系统建模、供应链筛选和设备制造改进 |
| excluded_use | 直接比较不同设备子组或性能；表示工业气体生产；使用阶段能源建模；安装或施工；备件；未限定的全球平均声明 |
| required_metadata | PCR id 和版本状态；设备子组和型号；功能和额定能力；压力和温度范围；工作介质；出厂质量；物料清单范围；所含辅机；场址和参考年；过程适用性；上游数据集选择；包装状态；分配和排除项 |
| required_quality_disclosure | 前景覆盖时期；仪表和秤 QA；质量、水和能源核对；分配键；供应商数据占比；代理数据集；未解决 UUID 和范围证据需求；数据缺口和截断项 |
| update_trigger | 型号设计或物料清单、生产路线、场址、能源供应、表面处理化学品、试验方法、包装配置、分配键、上游数据集代表性发生变化，或前景数据超过声明复审周期 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43911 正式分类身份和英文范围 |
| `epd-international-pcr-2010-08-v4-0-2` | `standard` | EPD International，PCR 2010:08《其他专用和通用机械及其零件》，4.0.2 版，https://www.environdec.com/pcr-library/pcr2010-08 | 独立确认 CPC 439 组通用机械属于机械 PCR 范围 |
| `alfa-laval-epd-s-p-12165-2024` | `dataset` | Alfa Laval Technologies AB，环境产品声明 S-P-12165，垫片板式换热器 T10-BFM/AQ4T-BFM，2024-04-10，https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/b8d9fc22-5379-4973-8795-08dc0c7232d4/Documents | 已核验原文的 CPC 43911 换热器实例；声明单位；钢、橡胶和塑料组成；包装；材料、能源、耗材和废物的企业特定数据需求；物理分配实例 |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，附件一《产品环境足迹方法》，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | 功能单位与参考流、供应链边界、前景流识别、企业特定物料清单和制造数据、分配层级及数据质量原则 |
| `us-epa-mpm-development-document-2003` | `official_guidance` | 美国环境保护署，《金属产品和机械点源类别最终排放限值指南及标准制定文件》，2003，https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf | 已核验原文的机加工、金属加工液、清洗、涂装、用水、废水及过程监测语境，用于条件性前景工序 |
| `cn-mof-tariff-2026` | `official_guidance` | 中华人民共和国财政部，2026 年关税商品名称，https://m.mof.gov.cn/czxw/202603/P020260326610286964491.pdf | 已核验蒸馏或精馏设备、热交换装置以及空气或其他气体液化设备的专业中文术语 |

---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-sound-or-visual-signalling-apparatus-except-for-cycles-or-motor-vehicles-d4a27639
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他电气音响或视觉信号装置（自行车或机动车用装置以及运输设施用机电交通管制设备除外）

## 1. 范围与适用性

本 PCR 适用于以发出音响或视觉信号为主要功能并归入 CPC 3.0 子类 46929 的完整电气装置之工厂大门生产。所涵盖产品包括工业或通用蜂鸣器、警报器、电铃、信标灯、信号显示器和视觉指示面板，但不包括归入防盗或火灾警报器的产品，以及自行车、机动车用产品和运输设施用机电交通管制设备。

本 PCR 通过关联上游数据集涵盖外购组件的生产，并涵盖前景边界内的组件接收、装配、可选清洗、功能测试、交付所需的最终处理以及工厂大门包装。除非研究扩展边界并单独报告，否则不包括使用阶段用电、安装、维护、工厂大门后的配送和寿命终止阶段。数据编制者必须把实际物料清单中的每个组件、辅助材料、包装件、废物和直接排放分别记录为原子交换；下列通用行是最低建模模式，不能取代产品特定物料清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-sound-or-visual-signalling-apparatus-except-for-cycles-or-motor-vehicles-d4a27639 |
| classification_refs | CPC 3.0: 46929 |
| covered_products | CPC 46929 中完整的电气音响信号或视觉信号装置，包括单一信号模式和声光组合装置 |
| excluded_products | CPC 46921 中的防盗或火灾警报器及类似设备；自行车或机动车用信号设备；运输设施用机电交通管制设备；单独供应的组件；音频重放设备 |
| representative_product | 已通过声明功能测试、可供市场交付的电气音响或视觉信号装置 |
| production_route | 外购组件接收、装置装配、可选焊接或清洗、功能测试、最终处理和包装；实际进行厂内组件制造时应将其加入边界 |
| market_state | 完整、合格、在适用时已包装并准备离开制造场址 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够发出所声明音响或视觉信号的完整电气装置 |
| How much | 工厂大门处 1 kg 合格装置，不含单独报告的运输包装质量 |
| How well | 满足所声明的信号功能、额定电气特性、功能测试以及适用的产品合规要求 |
| How long or cycle | 一个生产批次；使用寿命是必需限定信息，但不嵌入这一基于质量的生产参考量 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他电声或视觉信号装置，自行车或机动车辆除外，运输设施的机电交通管制设备除外 `a17e1609-603f-43f6-beec-b5a86d7d295a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 装置型号和信号模式；声输出或光输出规格；额定电压和供电方式；外壳材料以及适用时的防护等级；功能测试准则；使用寿命假设；生产地域和参考年份；包装纳入情况；法规或合规制度 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品以及基于质量的组件、包装和废物流行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 统一采用干基或接收态质量并声明基准；1 kg 产品分母不含运输包装，包装应作为单独投入行报告。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表基准，并按 1 kWh = 3.6 MJ 转换；披露电压等级、电网地域、合同电力结构以及是否包含变压器或厂内配电损耗。 |
| `water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量计量；若计量体积，则使用适用于相应温度的实测或有文件依据的密度换算，并说明换算基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 音响或视觉信号装置制造场址接收的外购组件、辅助材料和包装 |
| starting_condition_role | 前景接收门槛；上游生产和入厂供应负荷仍由关联的供应商或次级数据集表示 |
| product_classification_scope | 仅限完整 CPC 46929 装置；单独供应的组件和被排除的信号装置类别保留各自身份 |
| recursive_input_rule | 若未完工或外协加工的 CPC 46929 装置进入前景，应将其记录为具有上游数据集的一项产品投入，并从接收场址前景中排除已由该数据集表示的作业，以避免递归和重复计算。 |
| upstream_dataset_requirement | 每项外购组件、材料、辅助材料、能源载体、用水和包装都必须关联地域与技术适配的上游数据集，或记录数据缺口。 |
| disclosure | 声明组件外购或厂内制造范围、焊接和清洗路线、产品变体、不合格品、包装边界、处理去向、地域、参考年份以及所有排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 产品系统 | 纳入接收、装配、可选焊接与清洗、功能测试、归属于该批次的返工、最终处理和包装，直至产品在工厂大门放行；每项投入均应关联上游数据集。 | `us-epa-electronics-sector-1995` |
| `boundary_variant_inventory` | 物料清单和工艺路线 | 分别记录每个实际组件、辅助材料、包装件、废物和直接排放；仅在实际存在时采用条件性通用行，并披露未采用的工艺步骤。 | `us-epa-electronics-sector-1995` |
| `boundary_exclusions` | 类别身份 | 从本 PCR 中排除 CPC 46921 防盗或火灾警报器、自行车或机动车用信号设备以及运输设施用机电交通管制设备。 | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `apparatus_manufacture` | 信号装置装配、测试和工厂大门准备 | `required` | 始终 | 前景制造 | 工厂大门处 1 kg 合格装置 |

### 过程：信号装置装配、测试和工厂大门准备（`apparatus_manufacture`）

本过程涵盖外购零部件接收、机械和电气装配、路线特定清洗、功能测试、归属于生产批次的返工，以及工厂放行前的包装。若场址内进行印制线路板装配、外壳制造、涂覆或其他组件制造，应增加相应作业及其全部原子交换，不得将其隐含在下列行中。

#### 输入

##### 产品流

###### 装配印制线路板组件（`assembled_pwb`）

当装配线路板跨越场址边界时，记录所购入板组件的质量。状态码 100 的候选项未能验证装配完成的交付状态，因此 UUID 保持未解决。

- 选定流：装配印制线路板组件
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用的合格装配线路板质量之和，包括返工消耗的替换板
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_records`
- 来源：`us-epa-electronics-sector-1995`

###### 音响信号元件（`buzzer_siren_element`）

仅当装置采用蜂鸣器或警报器元件时记录此组件；其他发声技术必须作为各自独立的原子产品行加入。

- 选定流：蜂鸣器或警报器元件 `b511a29d-984d-4699-81c9-d04d779e2ac2`
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用的合格蜂鸣器或警报器元件质量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_records`

###### 视觉信号 LED 模组（`led_module`）

仅当视觉信号装置包含 LED 模组时记录此组件；非 LED 光源必须作为各自独立的原子产品行加入。

- 选定流：LED模组 `f0e13a6e-6380-4372-98a0-899623339d91`
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用的合格 LED 模组质量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_records`

###### 塑料外壳（`plastic_housing`）

仅在购入完整塑料外壳时记录此组件。金属外壳或厂内注塑路线必须使用单独的材料特定行表示。

- 选定流：塑料外壳 `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用的合格塑料外壳质量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_records`

###### 外购电力（`electricity`）

记录供应给装配、清洗、测试、返工和工厂大门准备设备的电力；共用电表应按下述计算规则分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或分配的外购电力，经换算后以 MJ 表示
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`

###### 水基清洗工艺用水（`process_water`）

仅当工艺用水供应给前景边界内的水基清洗或漂洗时记录。冷却水和生活用水需要各自独立的身份，不得并入本行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应给适用生产批次的计量或批次记录工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：水基清洗路线下每 1 kg 工厂大门处合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`us-epa-electronics-sector-1995`

###### 瓦楞纸箱（`corrugated_box`）

记录随工厂大门产品供应的成型瓦楞纸箱质量。其他包装组件必须作为独立原子行加入。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：生产批次合格产品所领用瓦楞纸箱的质量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格装置，纸箱质量不计入分母
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_and_packaging_records`

##### 废物流

不预设废物投入。若将任何进入系统的废物用作材料，或接收废物进行处理，应根据其实际身份和边界角色作为独立原子行记录。

##### 基本流

不预设基本流投入。只有在直接取水、土地占用或其他基本投入跨越前景边界，且针对所研究路线进行了测量或计算时，才予以添加。

#### 输出

##### 产品流

###### 合格参考装置（`reference_product`）

仅记录通过声明的放行测试并满足参考产品限定信息的产品。

- 选定流：其他电声或视觉信号装置，自行车或机动车辆除外，运输设施的机电交通管制设备除外 `a17e1609-603f-43f6-beec-b5a86d7d295a`
- 流属性/单位：Mass / kg
- 数量规则：工厂大门放行的合格装置净测量质量，不含单独报告的运输包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂大门处 1 kg 合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_reject_records`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 废弃装配印制线路板（`waste_populated_pwb`）

把报废或拒收的装配印制线路板与裸板废料、焊渣、金属废料、塑料废料和完整不合格装置分别记录。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：扣除成功返工的线路板后，移交至所声明厂内或厂外处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_reject_records`
- 来源：`us-epa-electronics-sector-1995`

##### 基本流

不预设直接排放。当场址内存在焊接、溶剂清洗、涂覆、燃料燃烧或其他作业时，应把每种实测或计算的排放物分别作为独立基本流行加入，并披露估算方法。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用作业 | 在分配之前，优先利用计量、批次、工单、机器时间或质量数据进行细分，把实际活动归属于所研究型号和生产批次。 | |
| `allocation_shared_resources` | 公用工程和共用消耗品 | 若无法细分，应使用最接近因果关系且有文件依据的驱动因素分配共用资源，例如以机器时间分配装配用电、以清洗线路板面积分配清洗投入；披露驱动因素及敏感性。 | |
| `allocation_recycling` | 生产废料和回收 | 分别报告废物质量和去向。除非所选 LCA 方法明确要求，否则不得在前景清单中抵扣所避免的初级生产或减去废料收入；任何下游回收约定应在实测工厂清单之外说明。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_and_packaging_records` | `apparatus_manufacture` | 外购组件或包装投入 | 收货记录、物料清单、领料记录、规格书 | 物品身份；供应商；材料或组件状态；接收质量；领用数量；单位质量；批次；退回不合格品；包装纳入情况 | 将获批物料清单和库存领用记录与供应商收货记录核对；记录以件数表示时测量代表性单位质量。 | kg 和件数 | 每个生产批次，按参考期汇总 | 具有代表性的连续 12 个月或披露的生产期 | 生产所声明型号的所有制造线 | 净领用质量 = 领用量 + 替换件 - 未使用退回量；除以合格未包装产品质量。 | 签署的收货记录；经校准的衡器记录；物料清单版本；核对结果 |
| `cp_energy_records` | `apparatus_manufacture` | 外购电力 | 公用事业电表、分表、设备日志 | 电表起止读数；分表覆盖；机器时间；生产批次；停机时间；合格产出质量；损耗边界 | 优先使用生产线或设备分表；否则使用有文件依据的机器时间分配厂级电表用量，并排除非生产负荷。 | kWh | 电表时段和每个生产批次，按月汇总 | 具有代表性的连续 12 个月或披露的生产期 | 边界内装配、清洗、测试、返工和包装设备 | 分配的 kWh 乘以 3.6 转换为 MJ；除以合格未包装产品质量。 | 电表校准；发票核对；分配工作表；停机日志 |
| `cp_water_records` | `apparatus_manufacture` | 水基清洗工艺用水 | 水表、批次记录 | 电表起止读数或批次体积；水身份；密度基准；清洗路线；批次；合格产出质量 | 读取专用水表或汇总仅用于生产清洗的批次添加量；排除冷却水和生活用水。 | kg 或具有密度依据的实测体积 | 每个清洗批次，按月汇总 | 具有代表性的连续 12 个月或披露的生产期 | 边界内所有水基清洗设备 | 必要时按有文件依据的密度将体积换算为质量；除以合格未包装产品质量。 | 水表校准；批次记录签核；密度来源；水平衡核对 |
| `cp_output_and_reject_records` | `apparatus_manufacture` | 合格产品和拒收装配线路板输出 | 放行日志、衡器记录、不合格品记录和废物联单 | 型号；批次；合格件数；净单位质量；包装质量；不合格件数；返工结果；废物身份；废物质量；去向 | 将放行件数和实测净质量与生产及不合格品记录核对；在移交时称量分拣后的装配线路板废物。 | kg 和件数 | 每个生产批次和每次废物移交 | 具有代表性的连续 12 个月或披露的生产期 | 边界内所有生产线和废物收集点 | 合格产品质量不含单独报告的包装；废物质量不含成功返回生产的物品；两者均按 1 kg 合格产品归一化。 | 经校准的衡器；签署的放行记录；不合格品处置记录；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 所有基于质量的行 | 归一化 kg/kg = 可归属交换质量 / 合格未包装装置质量 | 可归属交换质量；合格未包装装置质量 | 每 kg 参考产品的交换质量（kg） | |
| `calc_count_to_mass` | 按件记录的组件和纸箱 | 投入质量 = 净领用件数 × 代表性实测或供应商声明的单位质量 | 件数；单位质量；未使用退回量 | 投入质量（kg） | |
| `calc_electricity` | 外购电力 | MJ/kg = 可归属计量电力（kWh）× 3.6 / 合格未包装装置质量 | 计量电力；需要时的分配驱动因素；合格未包装装置质量 | 每 kg 参考产品的电力（MJ） | |
| `calc_water_mass` | 体积计量的工艺用水 | kg/kg = 实测体积 × 有文件依据的密度 / 合格未包装装置质量 | 体积；密度；合格未包装装置质量 | 每 kg 参考产品的工艺用水（kg） | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品、组件、包装和废物 | 将每行与实际型号、交付状态、材料或组件身份以及处理角色匹配；不得以伞式流代替，也不得以未装配线路板代替装配组件。 | 规格书、物料清单、供应商记录、废物联单和 UUID 审核 |
| `dq_completeness` | 前景清单 | 对同一时间和场址范围内的组件领用、公用工程、合格产出、不合格品以及全部路线特定辅助材料、废物和直接排放进行核对；说明每项被排除的作业。 | 质量和能量核对；完整性清单；排除日志 |
| `dq_temporal` | 前景记录 | 在可获得时采用具有代表性的连续 12 个月；否则披露生产期、季节性、利用率、停机时间以及代表性限制。 | 带日期的电表、发票、批次记录和生产日历 |
| `dq_hazardous_materials` | 均质材料和技术文件 | 当声明的市场制度适用时，保留适用均质材料层级上受管制物质的供应商声明或分析证据，并识别采用的豁免；这是合规披露，不是经验清单范围。 | 供应商材料声明、测试报告、技术文件和 `eu-rohs-2011-65` |
| `dq_geography_technology` | 上游数据集 | 匹配供应商地域、组件状态、电力电压与结构、供水方式和废物处理技术；记录代理数据及其预期影响。 | 供应商位置、数据集元数据、公用事业合同和处理联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 在接受数据集前确认 CPC 46929 身份、所声明的音响或视觉信号功能、完整产品状态、排除项以及全部必需限定信息。 | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference` | 归一化 | 确认每项数量使用相同的工厂大门合格未包装产品质量，并确认单独报告的包装未计入 1 kg 分母。 | |
| `validate_routes` | 清单完整性 | 对每条实际路线，验证所有物料清单投入、辅助材料、公用工程、不合格品、废物和直接排放均以原子交换形式出现；说明每个标记为不适用的条件行。 | `us-epa-electronics-sector-1995` |
| `validate_reconciliation` | 前景记录 | 对同一期间的组件接收或领用、合格产出、返工和废物进行核对；数据发布前调查材料差异和电表分配缺口。 | |
| `validate_uuid_property_unit` | 含 UUID 的行 | 确认状态码 100 的 UUID 身份、流类型、产品或废物状态、属性、单位组和正式中文基本名称；拒绝代理项或状态不匹配的候选项。 | |
| `validate_regulated_substances` | 声明的合规制度 | 仅将物质阈值作为合规限值，保留适用证据和豁免，不得将其重新解释为生产清单范围。 | `eu-rohs-2011-65` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对所声明 CPC 46929 装置型号和制造路线的工厂大门前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 装置身份、路线、地域、时间、包装边界和性能限定信息与已发布元数据兼容的产品或组件系统模型 |
| excluded_use | CPC 46921 警报设备、车辆信号设备、运输设施用机电交通管制设备、仅为组件的产品，或未经调整便表示不同技术的用途 |
| required_metadata | 规范 PCR id；CPC 参考；型号和信号模式；性能和测试准则；额定电气特性；使用寿命假设；物料清单版本；外购与厂内制造范围；场址和地域；参考期；包装边界；分配；废物去向；合规制度；未解决数据缺口 |
| required_quality_disclosure | 初级数据覆盖率；电表和质量核对；条件路线决策；代理数据；UUID 缺口；上游数据集地域和技术；适用时的受管制物质证据；不确定性和排除项 |
| update_trigger | 型号或物料清单、信号或供电技术、制造或清洗路线、供应商或地域、电力结构、包装、废物处理、合规制度、分配方法发生变化，或实测投入、产出或不合格品发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，*CPC 第 3.0 版结构*，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 46929 官方产品分类身份 |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | 联合国统计司，*CPC 第 3.0 版解释性说明*，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-09-05） | CPC 46929 与独立 CPC 46921 警报器子类的并列关系及类别排除项 |
| `us-epa-electronics-sector-1995` | `official_guidance` | 美国环境保护署，*Profile of the Electronics and Computer Industry*，EPA/310-R-95-002，1995 年 9 月，https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/elecmpsn-2.pdf（检索日期：2026-09-05） | 电子装配、焊接、清洗、测试、包装和废物的过程分解 |
| `eu-rohs-2011-65` | `official_guidance` | 欧洲议会和欧盟理事会 2011 年 6 月 8 日第 2011/65/EU 号指令，《欧盟官方公报》L 174，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32011L0065（检索日期：2026-09-05） | 均质材料定义、受管制物质合规证据和技术文件披露 |

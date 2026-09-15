---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-robots
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 工业机器人

## 1. 范围与适用性

本 PCR 用于编制工业机器人前景出厂数据集。所覆盖产品是用于工业自动化、自动控制、可重复编程、
多用途且可对至少三个轴编程的操作机。覆盖关节型、笛卡尔/直角坐标/龙门型、圆柱坐标型、球坐标型、
并联/Delta 型和 SCARA 型机器人。符合相同产品定义的协作型工业机器人也在范围内。

仅当专用控制器、控制棒或示教器、电缆及随附附件属于制造商销售单元和质量记录时，才纳入申报产品。
客户末端执行器、工件、移动平台、防护装置、夹具、输送机、应用专用工艺设备和集成机器人应用默认排除；
若其与所售机器人在物理上不可分割，则须在产品身份和净质量中明确纳入。服务机器人、医疗机器人、
不符合机器人定义的遥操作装置、不带合格操作机的自主移动平台、专用非多用途搬运设备、单独销售的备件及
完整自动化单元不属于本类别。

核心数据集从机器人工厂接收已加工材料和成品组件开始，到成品机器人及其申报包装离开工厂为止。
供应商生产通过上游背景数据连接。分销、安装、使用、维护和生命末期属于下游阶段，不纳入本前景记录。
该出厂数据集可接入更广泛的生命周期研究，但其本身不是完整的产品碳足迹结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-robots` |
| classification_refs | CPC 3.0：43561，Industrial robots（语义精确参考；分类映射另行治理） |
| covered_products | 用于工业自动化、自动控制、可重复编程、多用途且至少有三个可编程轴的工业操作机，不论固定安装或固定于移动平台；符合该定义的协作型工业机器人 |
| excluded_products | 服务机器人和医疗机器人；不符合机器人定义的机器人装置；不带合格操作机的移动平台；客户末端执行器；集成应用单元；专用非多用途搬运设备；单独销售的零部件 |
| representative_product | 制造商工厂门口的一台工业机器人成品销售单元 |
| production_route | 接收已加工材料和成品组件；适用时进行厂内零件制造；装配；工厂测试所需的软件装载；功能和安全测试；适用时进行表面处理或清洗；包装 |
| market_state | 分销及客户集成前、按申报销售配置完成工厂测试的新工业机器人 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为申报工业自动化任务提供可重复编程的操作或定位能力 |
| How much | 工厂门口交付的一台工业机器人成品销售单元 |
| How well | 满足申报的机器人类型、负载、工作半径、轴数、定位精度或重复定位精度、运动速度、控制器配置及适用功能安全规范 |
| How long or cycle | 一台交付机器人；为下游可比性申报设计或参考使用寿命，但本出厂数据集不纳入使用和维护 |
| reference_flow_link | 功能单位的一台机器人对应同一成品销售单元的实测净质量；包装质量单独报告，不计入参考产品质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台工业机器人成品销售单元的实测净质量（kg） |
| 参考产品流 | 工业机器人 `f3a1c3db-6e8f-4406-b490-2d174edfc7a8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号和销售配置；机械结构类型；预期工业自动化应用；可编程轴数；额定负载；工作半径；定位精度或重复定位精度；额定或测试速度；固定或移动安装；控制器和示教器纳入情况；末端执行器排除或纳入情况；随附附件；机器人净质量；包装质量；工厂地理位置；生产技术和报告期；设计或参考使用寿命 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或
等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_robot_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量准确成品销售配置的净质量，或从受控产品规范取得。排除包装和客户提供的末端执行器。一台功能单位机器人对应此实测 kg 数量。 |
| `material_mass` | 以质量计量的材料、组件、包装、废料和废水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测质量。由件数换算质量时，保留件数、实测或供应商单件质量及计算过程。不得以运输毛重代替机器人净质量。 |
| `electrical_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表计量基准，并按 1 kWh = 3.6 MJ 换算。记录电压等级、电网地理范围、损耗边界及共用设施是否分配。 |
| `gas_volume` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已披露参考温度和压力报告体积。供应商记录为能量或质量时，保留原值、换算、组成和参考条件。 |
| `one_robot_consistency` | 功能单位和参考流 | 质量和单件身份 | 一台机器人和 kg | 件数必须正好为一台，参考质量必须对应同一型号、控制器范围、附件和出厂状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告工厂门口验收的已加工材料和机器人成品组件，并记录供应商、地理位置、产品状态、数量和上游数据集连接 |
| starting_condition_role | 工业机器人前景制造的外购材料或组件投入 |
| product_classification_scope | 符合第 1 节语义定义的多用途工业机器人；分类参考不得单独扩大产品边界 |
| recursive_input_rule | 若外购投入本身是完整工业机器人，则作为同类上游产品记录并连接其自身数据集，不在本前景过程重复构建其制造清单；机器人零部件和控制器仍作为各自具体组件流 |
| upstream_dataset_requirement | 每项外购材料、组件、燃料、电力、水和废物处理服务均应连接地理和技术相适的上游数据集，并披露代理数据 |
| disclosure | 申报厂内制造和表面处理、外购或自制组件、控制器与附件范围、包装范围、排除的应用设备、工厂地理位置、技术、报告期及全部取舍 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景产品系统 | 纳入从接收投入到出厂放行的全部厂内制造、装配、工厂测试所需软件装载、功能和安全测试、适用时的清洗或表面处理、厂内搬运、包装、直接排放、废水和固体废物。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `boundary_upstream_links` | 外购投入 | 用上游数据集表示所接收材料、组件、附件、包装、能源和处理服务的生产与运输；不得再将这些负荷重复计作前景直接排放。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `boundary_product_scope` | 机器人与应用系统 | 操作机是类别定义对象。专用控制器或示教装置仅在属于申报销售单元时纳入；客户末端执行器、工件、移动平台、防护装置、单元设备和集成默认排除，除非其不可分割且已明确申报。 | `ifr-world-robotics-2025-sources-methods`; `schneider-lexium-cobot-pep-2023` |
| `boundary_downstream` | 分销、安装、使用、维护和生命末期 | 核心前景记录排除下游阶段并披露该部分边界。需要生命周期结果时，将本数据集连接至单独建模的下游情景。 | `t-cesa-1450-2025-robot-carbon-footprint`; `schneider-lexium-cobot-pep-2023` |
| `boundary_software` | 软件和固件 | 纳入可归属的软件装载和工厂测试电力及材料交换。软件开发活动默认排除；若研究有意扩大边界，应单独报告。 | `t-cesa-1450-2025-robot-carbon-footprint` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `robot_manufacturing` | 工业机器人工厂制造 | required | 工业机器人出厂数据集必须纳入；单项制造、设施、化学品、燃料和废物行仅在报告工厂存在相应路线时适用 | 前景零件制造、装配、测试、表面处理或清洗及包装 | 一台工业机器人成品销售单元的实测净质量（kg） |

### 过程：工业机器人工厂制造（`robot_manufacturing`）

#### 输入

##### 产品流

###### 机器人结构用铝合金（`aluminium_alloy`）

记录进入厂内制造或总装的具体铝合金，并申报牌号和产品形态。不得重复计算已计外购成品组件中的铝。

- 选定流：铝合金
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：铝合金以材料而非仅嵌入外购组件的形式跨越报告工厂边界时纳入。
- 数量规则：净领用质量减去有凭证的退库量，并按参考机器人归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials_components`
- 来源：`schneider-lexium-cobot-pep-2023`

###### 机器人结构及紧固件用不锈钢（`stainless_steel`）

记录进入工厂的不锈钢牌号和产品形态；排除已嵌入单独计量外购组件中的不锈钢。

- 选定流：不锈钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：不锈钢以材料形式跨越报告工厂边界时纳入。
- 数量规则：净领用质量减去有凭证的退库量，并按参考机器人归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials_components`
- 来源：`schneider-lexium-cobot-pep-2023`

###### 导体和绕组用铜（`copper`）

记录进入厂内导体、绕组或母排制造的铜。不得重复计算外购电机、电缆、驱动器或印制电路板中的铜。

- 选定流：铜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：铜以金属形式跨越报告工厂边界时纳入。
- 数量规则：净领用质量减去有凭证的退库量，并按参考机器人归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials_components`
- 来源：`schneider-lexium-cobot-pep-2023`

###### 罩壳用聚碳酸酯（`polycarbonate`）

按实际采购状态记录聚碳酸酯树脂或外购聚碳酸酯零件；不得在同一数据集中混合采购状态而不区分上游身份。

- 选定流：聚碳酸酯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：申报产品含聚碳酸酯且其以所述采购形态跨越工厂边界时纳入。
- 数量规则：BOM 和领用记录质量，按参考机器人归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials_components`
- 来源：`schneider-lexium-cobot-pep-2023`

###### 机器人控制用实装印制电路板（`printed_circuit_board`）

记录进入工厂并用于机器人或所含控制器的实装印制电路板。申报电路板类型及其是否已计入单独控制器。

- 选定流：实装印制电路板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：实装印制电路板单独外购并纳入申报销售单元时纳入。
- 数量规则：BOM 件数乘以实测或供应商单板质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials_components`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`; `schneider-lexium-cobot-pep-2023`

###### 机器人轴用电动伺服电机（`electric_servo_motor`）

记录机器人轴的具体外购电动伺服电机及额定功率或转矩和质量。除非电机在前景边界内制造，否则不得另计其内含铜和钢。

- 选定流：电动伺服电机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：电动伺服电机作为外购组件跨越报告工厂边界时纳入。
- 数量规则：BOM 件数乘以实测或供应商单台质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials_components`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 机器人关节用减速器（`gear_reducer`）

按外购状态记录具体关节减速器，并申报减速器类型和组件质量。

- 选定流：减速器
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：减速器作为外购组件跨越报告工厂边界时纳入。
- 数量规则：BOM 件数乘以实测或供应商单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials_components`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 申报机器人销售单元用电缆（`electrical_cable`）

记录随机器人供应的动力、信号和通信电缆质量，排除外部单元布线。

- 选定流：电缆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：仅纳入申报销售单元随附的电缆。
- 数量规则：BOM 或配料记录质量，按参考机器人归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials_components`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 制造和测试用外购电力（`electricity`）

记录可归属于零件制造、装配、软件装载、功能和安全测试、清洗及包装的电力。上游电网排放由所连接电力数据集表示，不计作直接排放。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 纳入条件：始终纳入实测或有分配依据的外购电力。
- 数量规则：报告期分表电量或有依据的共用电表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuels`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 厂内湿法作业用工艺用水（`process_water`）

记录机加工、清洗、表面处理、测试或冷却中跨越前景边界的工艺用水，并申报水源、水质、交付边界和密度换算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：报告工厂存在消耗工艺用水的湿法作业时纳入。
- 数量规则：供应至所含过程的计量值或罐体平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 厂内热力作业用气态天然气（`natural_gas`）

记录可归属烘炉、独立工艺加热或其他所含热力作业消耗的天然气；申报制造路线不存在时不得纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 纳入条件：仅在所含厂内作业消耗天然气时纳入。
- 数量规则：按披露参考条件取得的供应商电表或专用分表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuels`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 可归属厂内设备用柴油（`diesel_fuel`）

仅当厂内搬运或备用设备的消耗可单独归属于机器人制造时，记录其柴油领用；排除员工出行和不可归属的一般场址使用。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：柴油设备服务于所含前景作业且用量可归属时纳入。
- 数量规则：燃料领用、油罐平衡或设备计量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuels`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 金属预处理用氢氧化钠（`sodium_hydroxide`）

厂内金属清洗或预处理使用时，按供应状态记录氢氧化钠。申报溶液浓度，并同时保留溶液质量和所含化学物质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：前景边界内存在氢氧化钠预处理槽时纳入。
- 数量规则：采购及槽液补加记录，经库存变化和浓度调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemicals`
- 来源：

###### 厂内切割或焊接用工业氧气（`industrial_oxygen`）

记录所含切割或焊接作业使用的供应氧气，并申报纯度、压力、供应方式和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 纳入条件：前景边界内存在耗氧切割或焊接时纳入。
- 数量规则：按披露参考条件进行钢瓶库存平衡或读取散装气表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：

###### 瓦楞纸板运输包装（`corrugated_cardboard`）

记录一台机器人实际随附的瓦楞纸板。本行不得合并纸板、木材、泡沫或其他包装材料。

- 选定流：瓦楞纸板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：瓦楞纸板属于申报出厂包装时纳入。
- 数量规则：准确销售配置的包装实测质量或包装规范质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`schneider-lexium-cobot-pep-2023`

###### 聚乙烯包装薄膜（`polyethylene_film`）

仅记录随申报机器人包装供应的聚乙烯薄膜。其他塑料包装应在前景数据包中另设具体流行。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：聚乙烯薄膜属于申报出厂包装时纳入。
- 数量规则：准确销售配置的薄膜实测质量或包装规范质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`schneider-lexium-cobot-pep-2023`

##### 废物流

默认制造路线不规定废物输入。经核实具有产品状态的再生材料应作为具体产品输入记录，不得作为未指明废物输入。

##### 基本流

不规定基本流输入。资源开采属于所连接的上游材料和能源数据集。

#### 输出

##### 产品流

###### 工业机器人成品参考产品（`industrial_robot`）

记录准确工厂测试销售配置的实测净质量。包装不计入该质量，而在其材料行中报告。

- 选定流：工业机器人 `f3a1c3db-6e8f-4406-b490-2d174edfc7a8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：始终且仅纳入一台参考机器人成品。
- 数量规则：一台机器人成品的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台工业机器人成品销售单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`un-cpc-3-0-structure-2025`; `ifr-world-robotics-2025-sources-methods`; `t-cesa-1450-2025-robot-carbon-footprint`

##### 废物流

###### 厂内制造产生的分选废钢（`steel_scrap`）

厂内钢材制造时，记录转移至内部或外部处理的废钢。不得与废铝、废铜、电子废物或生活垃圾混合。

- 选定流：废钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：厂内钢材制造产生单独管理的废钢流时纳入。
- 数量规则：报告期过磅单或容器质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 厂内制造产生的分选废铝（`aluminium_scrap`）

厂内铝材制造时，记录转移处理的废铝。合金污染或混合金属废物采用不同处理路线时应分开。

- 选定流：废铝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：厂内铝材制造产生单独管理的废铝流时纳入。
- 数量规则：报告期过磅单或容器质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

###### 所含湿法作业产生的工业废水（`industrial_wastewater`）

记录转移至厂内或外部处理的废水，并申报产生工序和处理去向。不得与雨水或生活污水合并。

- 选定流：工业废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：所含湿法作业产生工业废水时纳入。
- 数量规则：排放计量、罐车转移或有凭证的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

##### 基本流

###### 厂内燃料燃烧直接排放的化石源二氧化碳（`fossil_carbon_dioxide`）

记录天然气或柴油行在工厂直接释放的化石源 CO2。排除燃料供应上游排放和外购电力内含的全部排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 纳入条件：所含作业在现场燃烧化石燃料时纳入。
- 数量规则：直接测量，或使用 `calc_fossil_co2` 根据燃料采集量、组成和披露的碳平衡因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台工业机器人成品实测净质量（kg）
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuels`
- 来源：`t-cesa-1450-2025-robot-carbon-footprint`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多产品机器人制造和共用作业 | 尽可能通过过程细分、型号特定 BOM 和路线记录以及设施分表避免分配。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_physical` | 无法避免的共用材料、能源或生产线负荷 | 采用反映因果关系并有凭证的物理关系。适用时可按产品数量、产品净质量、机器工时或实测工艺时间，并披露分子、分母和期间。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_common_utilities` | 未分表的共用设施 | 仅分配服务于所含机器人制造的份额。优先使用实测运行时间或设备需求；缺失时采用报告期机器人成品数量或质量，并论证代表性。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_waste_treatment` | 共用废水和固体废物处理 | 优先按过程或废物流直接计量。处理无法分开时，按产生过程的成品产出分配并披露方法。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_economic_fallback` | 无合理物理关系的情况 | 经济分配仅为最后手段。记录价格基准、币种、参考期、共产品、敏感性及物理分配失败原因。无明确下游方法时，不在出厂清单中计入回收或避免负荷收益。 | `t-cesa-1450-2025-robot-carbon-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_product` | `robot_manufacturing` | 参考产品身份和质量 | 产品规范、终检记录、校准秤记录 | 型号；序列号或批次；配置；控制器和附件范围；末端执行器范围；轴数；负载；工作半径；精度或重复定位精度；速度；净质量；包装质量；放行数量 | 将放行单元连接至受控规范，并对不含包装的代表性完整销售单元称量 | 台；kg | 每次型号或实质配置变更，并记录报告期放行量 | 与投入相同报告期 | 报告工厂和申报产品线 | 将放行台数及产品净质量与生产记录核对；按准确参考机器人归一化 | 校准证书；批准规范；终检和放行记录 |
| `cp_bom_materials_components` | `robot_manufacturing` | 材料和外购组件投入 | 批准 BOM、ERP 领退料记录、供应商规范 | 物料 id；材料或组件名称；牌号或型号；采购状态；供应商；数量；单位；单件质量；库存变化；退料量；所含产品型号 | 将批准 BOM 与实际领用、退回和库存记录核对，防止内含材料与外购组件重复计算 | kg；件 | 按批或按月，汇总至报告期 | 条件允许时至少一个代表性生产年度 | 报告工厂和所含产品线 | 净投入 = 期初库存 + 接收量 - 期末库存 - 有凭证退回或转用量；按第 7 节分配共用型号投入 | BOM 版本；ERP 导出；供应商质量规范；库存核对 |
| `cp_energy_fuels` | `robot_manufacturing` | 外购电力、天然气、柴油及直接燃烧 CO2 | 设施账单、分表、燃料领用、油罐平衡、气质记录 | 仪表 id；期初期末读数；购入量；单位；电压；气体温压；燃料组成；设备；运行时间；校准；分配因子 | 优先使用专用仪表；否则将账单和设备运行记录按明确因子分配并核对 | MJ；m3；kg | 连续或按月 | 与产品产出相同报告期 | 仅所含工厂作业 | 汇总净消耗，按第 4 节换算单位，按第 7 节分配共用量，并按 `calc_fossil_co2` 计算直接 CO2 | 账单；仪表校准；燃料证书；油罐核对；设备日志 |
| `cp_water_chemicals` | `robot_manufacturing` | 工艺用水、氢氧化钠和工业氧气 | 水表、罐体或钢瓶平衡、采购和槽液记录 | 物料身份；浓度或纯度；数量；单位；期初期末库存；补加；废槽液；气体温压；服务过程 | 分别计量或核对每种具体物料的库存和采购记录 | kg；m3 | 按批或按月 | 与产品产出相同报告期 | 所含湿法、热力、切割或焊接作业 | 净消耗 = 接收量 + 期初库存 - 期末库存 - 有凭证退回；统一报告化学溶液和所含物 | 仪表校准；分析证书；采购记录；槽液或钢瓶日志 |
| `cp_packaging` | `robot_manufacturing` | 瓦楞纸板和聚乙烯薄膜 | 包装规范、配料记录、称量记录 | 产品型号；包装组件；材料身份；件数；单件质量；再用比例；可回收周转状态 | 对准确销售配置的各包装组件称量，并与包装领用记录核对 | kg；件 | 每次包装设计变更，并在报告期核验 | 当前包装规范和报告期 | 报告工厂施加的包装 | 各材料分别汇总；排除不随产品离厂的周转包装并披露其处理 | 批准包装图；秤校准；领用记录 |
| `cp_waste_outputs` | `robot_manufacturing` | 废钢、废铝和工业废水 | 过磅单、容器日志、排放表、处理联单 | 废物身份；产生作业；数量；单位；库存变化；去向；处理路线；运输方；日期 | 分别称量或计量各分选废物流，并将内部累积量与转移量核对 | kg | 每次转移，按月汇总 | 与产品产出相同报告期 | 所含作业产生的废物 | 产生量 = 转移量 + 期末库存 - 期初库存；材料和处理路线保持分开 | 秤或表校准；废物联单；处理收据；水平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单行 | 报告期交换量除以合格机器人成品总实测净质量；保留型号特定单台质量，以便重建每台交换量。 | 报告期交换量；各型号放行台数；各型号净质量；分配因子 | 每 kg 参考流及每台申报机器人的交换量 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_component_mass` | 按件计数组件 | 组件质量 = 验收件数 × 实测或供应商受控单件质量；扣除未装入参考产品的退回件或拒收件，并另记其去向。 | 件数；单件质量；退回和拒收 | kg 组件投入 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_electricity_mj` | 外购电力 | 电力 MJ = 电表 kWh × 3.6。保留原 kWh，不将电网发电排放加入前景基本流。 | 电表 kWh；电压和电网限定信息 | MJ 外购电力 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_solution_mass` | 氢氧化钠溶液 | 所含 NaOH 质量 = 净溶液质量 × 实测质量分数。保留溶液质量、浓度和所含 NaOH 质量。 | 净溶液质量；浓度 | kg 氢氧化钠 |  |
| `calc_fossil_co2` | 厂内化石燃料燃烧 | 根据采集燃料量、含碳量或披露的燃料特定因子、氧化处理和单位换算计算化石 CO2。本行不计算燃料上游或外购电力排放。 | 天然气或柴油量；组成或因子；氧化基准 | kg 直接化石源 CO2 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_mass_reconciliation` | 产品、材料、组件、包装和固体废物记录 | 将净质量投入与产品、包装、在制品库存、废物及有凭证的质量变化作业核对；调查未解释差异，不得强制配平。 | 投入质量；产品质量；包装质量；废物质量；库存变化 | 披露的质量平衡核验 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 产品型号、销售配置、控制器和附件范围、末端执行器范围、技术限定信息、净质量、工厂和报告期必须识别一个可重现机器人配置。 | 批准规范、BOM 版本、终检、校准质量记录 |
| `dq_primary_data` | 前景材料、能源、水、燃料、废物和直接排放 | 对所含工厂作业使用场址记录。优先采用至少一个近期代表性生产年度；较短生产周期须披露覆盖范围及季节性或爬坡局限。 | ERP 导出、账单、仪表、领用日志、联单、生产记录 |
| `dq_completeness` | 全部所含作业 | 检查装配、测试、包装、厂内制造、表面处理、厂内搬运、能源、直接排放、废水和固体废物是否缺失，并披露和评价每项排除。 | 过程走查、流程图、采购台账核对、质量和能量检查 |
| `dq_upstream_match` | 所连接背景数据集 | 匹配地理、技术、材料牌号或组件状态、电力电压和电网、燃料规格、供水和废物处理；披露代理数据和替代地理范围。 | 数据集元数据和有凭证映射表 |
| `dq_consistency` | 双语和机器投影 | 两种语言使用相同 row id、process id、UUID、受控值和 rule id，并从规范英文重新生成结构化投影。 | 双语审查和确定性结构化同步 |
| `dq_uncertainty` | 缺失范围和已分配数据 | 不得虚构外部范围。标记缺失范围证据，实质性分配须量化敏感性；证据可得时，在发布审查前解决 UUID 或范围。 | 审查元数据、敏感性记录、来源审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 数据集身份 | 数据集若不属于用于工业自动化、自动控制、可重复编程、多用途且至少有三个可编程轴的操作机，或规范 PCR id 与产品流身份不一致，则校验失败。 | `ifr-world-robotics-2025-sources-methods`; `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_reference_flow` | 功能单位和参考流 | 必须对同一配置申报正好一台机器人及其 kg 净质量。包装必须分开；控制器、示教装置、附件、末端执行器和移动平台范围必须明确。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_boundary` | 出厂范围 | 必须申报起始条件、所含工厂作业、上游数据连接、下游排除、工厂地理位置、报告期和取舍。禁止将上游电力或燃料排放重复计作前景直接排放。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_inventory_atomicity` | 清单交换 | 每行仅描述一种具体材料、组件、能源、燃料、化学品、废物或基本流排放。条件行必须说明适用性；仅在有路线证据时将不存在的交换标为 `not_applicable`。 |  |
| `validation_mass_energy` | 定量清单 | 将产品台数和质量与生产记录、电力与仪表或账单、燃料与库存或仪表、材料投入与产品、包装、库存变化及分选废物核对；调查未解释差异。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_allocation` | 共用作业 | 可行时须过程细分或分表。剩余分配均须披露因子、分子、分母、期间、共产品及物理或经济依据。 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_evidence` | UUID、来源和范围 | 含 UUID 的流必须保留经核实的身份、属性和单位支持。UUID 空缺行继续标记未解决。外部经验范围至少需要两个相互独立、经原文核实且边界兼容的来源；否则保留前景采集和未解决范围需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址特定前景记录经独立审查后作为 `secondary_dataset`；仅当用户机器人配置、地理、技术和出厂边界兼容时，方可作为 `background_dataset` |
| downstream_use | 将工业机器人出厂数据集连接至安装、运行、维护、再制造和生命末期情景，或资本设备模型 |
| allowed_use | 在功能限定信息、参考质量、所含控制器和附件、地理、技术、分配和数据期间兼容时，用于型号特定出厂比较和供应链清单 |
| excluded_use | 完整机器人应用或自动化单元数据集；使用阶段能耗模型；独立完整生命周期产品碳足迹；未进行功能调整而比较负载、工作半径、精度、速度、寿命或所含设备不同的机器人 |
| required_metadata | 规范 PCR id；产品流 UUID；型号和销售配置；技术限定信息；机器人净质量；包装质量；所含及排除设备；工厂地理；技术；报告期；过程覆盖；分配；来源和背景数据映射；未解决事项 |
| required_quality_disclosure | 初级数据比例和期间；仪表和秤质量；BOM 版本；产品组合；分配份额；取舍；数据缺口；代理数据集；质量和能量核对；不确定性及敏感性；独立审查状态 |
| update_trigger | 产品或控制器重新设计；材料或包装变化；工厂或供应商路线变化；重大工艺或电网变化；新分配基准；报告数据超过项目代表性阈值；解决重要 UUID 或范围证据需求 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC Ver. 3.0 Structure，子类 43561，Industrial robots。官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05；缓存原文 SHA-256：`sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 仅用于产品分类身份 |
| `ifr-world-robotics-2025-sources-methods` | `official_guidance` | 国际机器人联合会，《World Robotics 2025 — Industrial Robots, Introduction: Sources and Methods》第 1.7–1.9 节。https://ifr.org/img/worldrobotics/Sources___Methods_WR_2025_Industrial_Robots.pdf（检索于 2026-09-05） | 工业机器人定义、机械结构覆盖、末端执行器和移动平台边界及类别排除 |
| `t-cesa-1450-2025-robot-carbon-footprint` | `standard` | T/CESA 1450—2025《温室气体 产品碳足迹量化方法与要求 机器人》。工业和信息化部托管原文：https://wap.miit.gov.cn/cms_files/filemanager/1226211233/attach/20261/151e4eb4b80245a7abf91fab5413ceda.pdf（检索于 2026-09-05） | 中文术语、单台机器人功能基准、生产边界、组件/能源/废物采集、分配和质量规则。本 PCR 使用生产阶段指导，不声称部分边界构成完整 T/CESA 产品碳足迹。 |
| `schneider-lexium-cobot-pep-2023` | `dataset` | 施耐德电气，《Product Environmental Profile — Lexium Cobot Standard Robot》，ENVPEP2209025_V1，05/2023。https://download.se.com/files?p_Doc_Ref=ENVPEP2209025EN&p_File_Name=ENVPEP2209025_V1.pdf&p_enDocType=Environmental%2BDisclosure（检索于 2026-09-05） | 经核实的代表性材料和组件组成、机器人臂/末端执行器边界、包装材料示例及制造与下游阶段区分；不从这一单一产品推导 PCR 经验范围。 |

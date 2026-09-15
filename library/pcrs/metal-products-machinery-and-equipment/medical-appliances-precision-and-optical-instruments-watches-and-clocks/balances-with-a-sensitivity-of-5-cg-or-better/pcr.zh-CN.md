---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.balances-with-a-sensitivity-of-5-cg-or-better
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 感量为5厘克或更精密的天平

## 1. 范围与适用性

本 PCR 适用于申明感量为 5 cg（50 mg）或更精密的完整机械式或电子式天平，包括配备或不配备砝码的精密天平和分析天平。核算对象为标准销售配置及包装下，一台完成测试的天平从摇篮到工厂大门的生产。

本 PCR 不包括感量未达到该阈值的称重机械、单独供应的砝码、零件或附件、自动工业称重系统以及称重服务。使用阶段电力、维护、校准服务、工厂大门之后的配送和寿命终止阶段默认不纳入；如扩展边界，应单独报告。制造商特定的材料示例仅用于保证清单完整性，不将类别限定为某一品牌或传感技术。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.balances-with-a-sensitivity-of-5-cg-or-better |
| classification_refs | CPC 3.0: 48231, exact |
| covered_products | 申明感量为 5 cg（50 mg）或更精密的完整天平，包括配备或不配备砝码的精密天平和分析天平 |
| excluded_products | 感量较低的称重机械；自动工业称重系统；单独供应的砝码、零件和附件；校准或称重服务 |
| representative_product | 带称重传感器、装配印制电路板、显示器、金属和聚合物外壳、秤盘、可选防风罩、防护罩、电源及标准防护包装的电子实验室天平 |
| production_route | 聚合建模材料与部件供应、适用时的外壳和秤盘制造、电子和机械装配、调整、性能测试、清洁及最终包装的从摇篮到工厂大门路线 |
| market_state | 工厂大门处标准销售配置下完成测试的天平；产品质量不含外部运输托盘和二次配送包装，除非其属于销售单元 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台完整高感量天平提供的质量称量功能 |
| How much | 申明标准销售配置下的一台完整天平 |
| How well | 申明感量为 5 cg（50 mg）或更精密；同时申明最大秤量、分度值或标尺间隔、重复性、适用时的准确度等级以及随附附件 |
| How long or cycle | 工厂大门处生产完成且检验合格的一台产品；不隐含使用寿命性能 |
| reference_flow_link | `balance_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) |
| 参考产品流 | 感量为5厘克或更精密的天平（Tiangong UUID 未解决） |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 感量及其测试依据；最大秤量；分度值或标尺间隔；重复性；适用时的准确度等级和法制计量状态；传感原理；内校或外校；产品质量；随附电源、砝码、防风罩和附件；包装配置；制造地域；参考年份 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品与合格输出 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 将清单归一化为一台检验合格的完整天平。不合格品单独记录，不计入分母。 |
| `component_mass_basis` | 材料、部件、包装及废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按采购产品状态一致采用干基或交付状态质量；披露会实质影响质量平衡的涂层、水分、内衬和未纳入附件。 |
| `electricity_energy_basis` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始单位，按 1 kWh = 3.6 MJ 换算，并披露电压等级、电网地域及是否包括场内损耗。 |
| `sensitivity_threshold` | 产品识别 | 质量增量 | cg 和 mg | 核实申明感量不劣于 5 cg；使用 5 cg = 50 mg = 0.05 g 的精确恒等式，除非解释其关系，不得用分度值、检定分度值或鉴别阈替代感量。 |

## 5. 系统边界

从摇篮到工厂大门的模型包括所列材料、部件、电力和销售包装的上游生产，以及前景制造、装配、调整、性能测试和包装。采购投入采用产品状态、技术和地域相容的上游数据集；不得与场址直接交换重复计算。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 产品特定物料清单和部件接收状态，以及制造期间的场址公用工程与废物记录 |
| starting_condition_role | 聚合从摇篮到工厂大门制造模型的主要前景证据 |
| product_classification_scope | 本 PCR 范围内的完整天平；单独销售的零件、附件、砝码及其他称重机械不属于本类别 |
| recursive_input_rule | 用作测试或参考仪器的同类天平属于资本设备，不是被消耗的天平投入。纳入另一产品转售的天平须披露，并采用单独上游数据集，不得在同一前景过程中递归套用本 PCR。 |
| upstream_dataset_requirement | 每项采购材料或部件均须采用成分、产品状态、地域和技术具有代表性的上游数据集；部件数据集不得与物料清单中已拆分的材料生产重复。 |
| disclosure | 披露前景场址、供应商制造与场内制造的划分、传感技术、产品及包装质量、感量依据、随附附件、分配选择、电力地域、数据年份、截断项及扩展生命周期模块。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | cradle_to_gate_model | 纳入每项所列材料、部件、电力和包装投入的上游生产，以及直至工厂大门合格产品输出的前景制造、装配、调整、测试和包装。 | `un-cpc-3-0-structure-2025`; `mettler-toledo-me-reference-manual` |
| `boundary_rule_2` | route_specific_operations | 仅在报告场址实际实施时纳入场内制造作业；否则采用相容的供应商部件数据集，并防止其组成材料路线重复计算。 |  |
| `boundary_rule_3` | extended_modules | 使用、维护、校准服务、配送和寿命终止阶段如纳入，应单独报告；其不属于本从摇篮到工厂大门参考结果。 |  |
| `boundary_rule_4` | metrological_identity | 保留输出符合 5 cg 或更精密类别的证据，并区分感量、鉴别力、重复性和预热特性。 | `oiml-r76-1-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `balance_manufacture` | 天平材料供应、制造、装配、调整、测试和包装 | `required` | 始终纳入；仅在有供应商或过程证据时，路线条件行才可标记为不适用 | 聚合前景制造及从摇篮到工厂大门编制 | 工厂大门处一台检验合格的完整天平 |

### 过程：天平材料供应、制造、装配、调整、测试和包装（`balance_manufacture`）

#### 输入

##### 产品流

###### 秤盘和防风罩部件用不锈钢材料（`stainless_steel_input`）

记录秤盘及适用防风罩部件中所含不锈钢板质量；若上游部件数据集尚未包括可归属制造损耗，则将其计入。

- 选定流：不锈钢板（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：供应商物料清单质量加计量的可归属制造投入，按合格天平归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：`mettler-toledo-me-reference-manual`

###### 外壳用铝合金材料（`aluminium_alloy_input`）

记录进入外壳路线的未锻轧铝合金；完整外壳数据集已含铝合金负荷时不得重复加入。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：归属于一台合格天平的经核实铝合金质量，路线损耗仅计一次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：`mettler-toledo-me-reference-manual`

###### 模塑外壳和防风罩部件用 ABS 粒料（`abs_granulate_input`）

记录归属于模塑外壳或防风罩部件的 ABS 粒料；采购成品部件时不得再次加入供应商模塑损耗。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物（ABS），粒料 `8f1317c1-aa51-4524-8692-74079c923e2c`
- 流属性/单位：Mass / kg
- 数量规则：产品所含 ABS 质量加前景模塑损耗，不重复计算供应商损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：`mettler-toledo-me-reference-manual`

###### 防风罩用平板玻璃（`plate_glass_input`）

记录随附防风罩使用的平板玻璃；仅对不配玻璃防风罩的型号标记为不适用。

- 选定流：平板玻璃 `491a7940-d102-4981-a2b8-81bf183987df`
- 流属性/单位：Mass / kg
- 数量规则：供应商物料清单质量加适用时的前景切割损耗，按合格天平归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台配玻璃防风罩的合格完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：`mettler-toledo-me-reference-manual`

###### PET 防护罩（`pet_cover_input`）

标准产品配置包括 PET 防护罩时，记录其质量。

- 选定流：聚对苯二甲酸乙二醇酯 `1ce0d026-923b-4339-a8ca-31e228475c75`
- 流属性/单位：Mass / kg
- 数量规则：每台合格天平随附 PET 防护罩的核实质量；未随附时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：`mettler-toledo-me-reference-manual`

###### 称重传感器总成（`load_cell_input`）

记录天平中装配的一套物理完整称重传感器总成，并申明传感原理和供应商部件标识。

- 选定流：天平用称重传感器（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：归属于一台合格天平的供应商部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

###### 装配控制印制电路板（`pcb_assembly_input`）

记录控制测量、显示和接口功能的装配印制电路板；标准销售配置未包括的外围附件不纳入。

- 选定流：电子元器件及印制电路板组件 `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- 流属性/单位：Mass / kg
- 数量规则：归属于一台合格天平的供应商部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

###### 制造和验收测试用外购电力（`electricity_input`）

记录前景场址用于制造、装配、调整、预热和验收测试的计量外购电力；共享建筑负荷按已申明规则分配。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：代表性制造期内可归属于报告产品的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：

###### 瓦楞运输纸箱（`corrugated_box_input`）

记录标准销售包装中所含瓦楞纸箱；销售单元之外的可重复使用配送容器不纳入。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：每台合格天平对应的实测或供应商申明纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

###### 发泡聚丙烯防护包装内衬（`epp_packaging_insert`）

将销售单元内发泡聚丙烯防护内衬记录为一项聚合材料交换；不得以未指定成分的泡沫塑料代替。

- 选定流：发泡聚丙烯泡沫（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：每台合格天平对应的实测或供应商申明 EPP 内衬质量；采用另一项已具体列示的防护系统时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 检验合格的完整天平（`balance_output`）

仅记录通过申明验收测试并符合本类别感量阈值的完整天平。

- 选定流：感量为5厘克或更精密的天平（Tiangong UUID 未解决）
- 流属性/单位：Number of items / Item(s)
- 数量规则：清点合格天平，并归一化为一台合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_output`
- 来源：`un-cpc-3-0-structure-2025`; `oiml-r76-1-2006`

##### 废物流

###### 工业后钢材制造废料（`steel_scrap_output`）

记录离开前景过程并送往回收或处理的分类收集钢材边角料和不合格钢制部件。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：每台合格天平对应的称量钢废料；场内未加工钢材时标记为不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：

###### 铝材制造废料（`aluminium_scrap_output`）

记录离开前景过程的分类收集铝浇道、边角料和不合格铝部件。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：每台合格天平对应的称量铝废料；场内未加工铝材时标记为不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：

###### ABS 模塑废料（`abs_scrap_output`）

记录离开前景过程的分类收集 ABS 浇口、浇道和不合格 ABS 部件；不得与其他塑料或金属合并。

- 选定流：ABS 生产废料（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：每台合格天平对应的称量 ABS 废料；场内未模塑 ABS 时标记为不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：

###### 不合格装配印制电路板（`pcb_waste_output`）

记录不合格且离开前景过程送往回收或处理的装配印制电路板；返修后回到生产的电路板不属于废物输出。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：每台合格天平对应的不合格装配板称量质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台检验合格的完整天平
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

本 PCR 不规定笼统基本流排放行。仅在经计量或计算的物种特定交换跨越前景环境边界时记录直接基本流，并新增具有经核验 Tiangong 身份的原子行。

## 7. 分配与联产品处理

| 规则 ID | 适用对象 | 规则 | 来源 ID |
| --- | --- | --- | --- |
| `allocation_rule_1` | foreground_subdivision | 在实施分配前，优先按天平型号、加工单元和验收测试工位进行过程细分和直接计量。 |  |
| `allocation_rule_2` | shared_site_electricity_and_waste | 无法直接计量时，采用机器工时、受试产品工时或实测质量吞吐量等有文件记录的因果驱动因素分配共用电力和废物；仅当各产品型号资源强度相近时，方可采用合格产品数量。 |  |
| `allocation_rule_3` | scrap_and_recycling | 明确报告废料质量和接收去向。除非所选研究方法要求且分配方法得到一致声明，不得扣除避免的原生材料生产或计入回收收益。 |  |
| `allocation_rule_4` | rejected_and_reworked_units | 不合格产品不计入参考流分母；其对应的材料、电力和废物仍计入前景总量。返工产品仅计入验收前新增的返工负荷。 |  |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_packaging` | `balance_manufacture` | 材料、组件和包装输入 | 经批准的物料清单；供应商声明；收货和称量记录 | model_id; supplier_part_id; material_or_component_identity; composition; quantity_per_unit; measured_mass; included_accessories; packaging_configuration; supplier_geography; product_state | 将已发布物料清单与实测产品及包装质量核对；核验供应商成分并防止组件和材料重复计算 | kg 和 Item(s) | 每次工程版本发布和供应商变更 | 报告期内按产量加权的配置 | 范围内全部前景产品型号和供应场址 | 按原子流汇总经核验输入质量并除以合格天平数量；保留路线特定的不适用证据 | 已签署物料清单版本；称量设备校准记录；供应商规格；质量核对记录 |
| `cp_electricity_records` | `balance_manufacture` | 外购制造电力 | 经校准电表、分表和电力发票记录 | meter_id; opening_reading; closing_reading; unit; voltage_level; grid_supplier; production_period; machine_or_test_time; accepted_units; rejected_units | 读取经校准的电表或发票，将分表计量及分配后的用电映射至加工、装配、调校、预热和测试 | kWh 或 MJ | 每月或每生产批次 | 至少十二个有代表性的月份，或完整的较短生产期 | 每个前景制造场址 | 将 kWh 换算为 MJ，按所声明的因果驱动因素分配，并除以合格产品数量，同时保留不合格产品负荷 | 电表校准或发票核对；分配驱动因素记录；与场址总量的完整性核查 |
| `cp_accepted_output` | `balance_manufacture` | 合格天平输出 | 产品规格、调校、验收测试和放行记录 | model_id; serial_or_lot_id; sensitivity_declaration; sensitivity_test_basis; capacity; readability_or_scale_interval; repeatability; accuracy_class_if_applicable; sensing_principle; acceptance_status; product_mass; included_accessories | 仅统计完成有文件记录的调校和验收测试后放行的产品 | Item(s) 和 kg | 每台产品或采用统计控制的批次 | 完整报告期 | 每个前景装配和放行场址 | 按型号汇总合格产品；报告产品系列时按产量加权型号特定输入 | 可追溯验收记录；经校准测试砝码；仪器测试记录；放行授权 |
| `cp_waste_records` | `balance_manufacture` | 分类制造废物 | 地磅票、废物转移单、回收商收据和质量平衡记录 | waste_id; material_identity; gross_mass; tare_mass; destination; treatment_route; hazardous_status; production_period; accepted_units | 使用经校准地磅票、回收商收据或质量平衡记录；钢、铝、ABS 和装配印制电路板废物应分开记录 | kg | 每次运输并每月核对 | 与生产和电力记录相同期间 | 每个前景制造场址 | 净废物质量等于毛重减皮重；按直接过程记录或所声明的因果驱动因素分配，并除以合格产品数量 | 称量设备校准；废物转移单；回收商收据；材料分类审核 |

### 计算规则

| 规则 ID | 适用对象 | 公式或规则 | 输入 | 输出 | 来源 ID |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | all inventory rows | 归一化数量 = 报告期内可归属数量 / 合格完整天平数量 | 可归属的输入、电力或废物数量；合格天平数量 | 每台合格天平的数量 |  |
| `calc_rule_2` | electricity_input | electricity_MJ = metered_kWh × 3.6；随后仅应用有文件记录的前景分配比例 | 实测 kWh；分配驱动因素；合格天平数量 | 每台合格天平的 MJ |  |
| `calc_rule_3` | material_and_component_inputs | 将净内含材料和供应商归属的工艺损耗各计算一次；若采用完整组件数据集，应移除会造成重复计算的单独组成材料负荷 | 物料清单；组件成分；供应商数据集边界；路线损耗 | 每台合格天平的不重复输入质量 | `mettler-toledo-me-reference-manual` |
| `calc_rule_4` | waste_outputs | 净废物质量 = 运输毛重 - 皮重；归一化废物 = 可归属净废物 / 合格天平数量 | 毛重；皮重；分类身份；分配驱动因素；合格天平数量 | 每台合格天平的 kg 废物 |  |

### 数据质量要求

| 要求 ID | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dqr_identity` | reference product | 证明满足 5 cg 或更精密的感量阈值，并声明秤量、可读性或分度值、重复性、传感原理及适用的准确度等级，不得将这些术语混用。 | 产品规格；验收或型式试验记录；`un-cpc-3-0-structure-2025`；`oiml-r76-1-2006` |
| `dqr_mass_completeness` | bill of materials and packaging | 将已清单化的材料、组件和包装质量与实测产品及包装质量核对；说明排除项、涂层、紧固件、电缆、电源、砝码和附件。 | 经批准物料清单；供应商成分；经校准质量核查；核对声明 |
| `dqr_temporal` | foreground activity data | 采用有代表性的报告期，并对齐生产、电力和废物记录；披露停产、产品切换和不完整期间。 | 期间覆盖表；生产台账；公用工程和废物记录核对 |
| `dqr_geography_technology` | upstream datasets | 尽可能匹配供应商地理范围、再生含量、合金或聚合物牌号、组件技术和电网；披露代理数据及材料替代敏感性检验。 | 供应商声明；数据集元数据；代理理由 |
| `dqr_uuid_completeness` | Tiangong identities | 发布前解决当前所有空白的参考产品或清单流 UUID，或保留明确的未解决审核事项；不得以代理身份替代。 | 已完成的混合检索回执和状态 100 直接读取 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | 确认参考数量恰为一台合格天平，并核验有文件记录的感量为 5 cg（50 mg）或更精密。 | `un-cpc-3-0-structure-2025`; `oiml-r76-1-2006` |
| `validation_rule_2` | inventory_reconciliation | 确认全部 15 个规定原子行均已提供，或具有有文件记录的不适用证据，并确认每个采集值或计算值行均关联其采集协议。 |  |
| `validation_rule_3` | bilingual_uuid_identity | 确认中英文 UUID 承载流名称严格匹配状态 100 的 Tiangong baseName，并确认两种语言中的 UUID、属性和单位组一致。 |  |
| `validation_rule_4` | mass_and_route_consistency | 核对材料、组件、包装和废物质量；确认供应商组件及其分解后的组成材料未被重复计算。 | `mettler-toledo-me-reference-manual` |
| `validation_rule_5` | allocation_and_period | 确认电力和废物分配采用所声明的因果驱动因素，不合格产品仍排除在分母外，并且生产、公用工程和废物期间对齐。 |  |

## 10. 发布数据集概要

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造一台合格高精密天平的产品特定从摇篮到大门前景数据集 |
| downstream_use | 当产品配置、地理、技术和数据质量与使用该数据的研究相匹配时，可用作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 边界一致的从摇篮到大门产品足迹；在功能和计量规格一致条件下的采购比较；仪器系统生命周期评价；披露配置的情景建模 |
| excluded_use | 未经调整而直接比较感量、秤量、准确度等级、附件或生命周期边界不同的天平；使用阶段或寿命声明；将其代理为精密度较低的工业衡器 |
| required_metadata | PCR id 和版本；型号或按产量加权的产品系列；感量及其试验依据；秤量；可读性或分度值；重复性；适用的准确度等级；传感原理；产品和包装质量；所含附件；供应商与场内制造路线；制造和电力地理范围；报告期；分配方法；未解决 UUID 和代理数据 |
| required_quality_disclosure | 物料清单和质量核对覆盖率；时间覆盖；电表和称量设备质量证据；供应商数据占比；上游数据集代表性；分配比例；不适用行；截断；不确定性及未解决的范围证据 |
| update_trigger | 产品重新设计；传感技术变化；超过研究显著性阈值的材料或包装变化；供应商或制造场址变化；电网变化；验收规格变化；报告期早于项目要求；解决重要 UUID 或证据缺口 |

## 11. 数据来源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC Ver. 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-07） | CPC 48231 的确切身份及 5 cg 或更精密的类别阈值 |
| `oiml-r76-1-2006` | `standard` | 国际法制计量组织，OIML R 76-1:2006，Non-automatic weighing instruments - Part 1: Metrological and technical requirements - Tests，https://www.oiml.org/en/files/pdf_r/r076-1-e06.pdf（检索日期：2026-09-07） | 感量、鉴别阈、重复性和预热时间的定义；适用非自动天平的计量限定术语规范 |
| `mettler-toledo-me-reference-manual` | `handbook` | Mettler-Toledo GmbH，Precision and Analytical Balances: ME Reference Manual，文件 30045655，2020，https://www.mt.com/dam/P5/labtec/02_Analytical_Balances/08_ME/03_Documentation/03_Operating_Instructions/RM_ME_en.pdf（检索日期：2026-09-07） | ABS、压铸铝、不锈钢、玻璃、PET 和电力供应的代表性产品结构证据；不作为定量范围来源 |

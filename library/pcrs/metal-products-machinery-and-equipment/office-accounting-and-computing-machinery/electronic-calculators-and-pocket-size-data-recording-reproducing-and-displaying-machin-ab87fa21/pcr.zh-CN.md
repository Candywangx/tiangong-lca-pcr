---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.electronic-calculators-and-pocket-size-data-recording-reproducing-and-displaying-machin-ab87fa21
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电子计算器及具有计算功能的袖珍式数据记录、重现和显示机器

## 1. 范围与适用性

本 PCR 适用于电子计算器以及以数据记录、重现或显示并兼具计算功能为主要功能的袖珍式机器的工厂大门生产。范围包括外购电子与机械组件的装配、所声明电源配置的安装、功能测试，以及未包装合格产品的放行。

本 PCR 不包括收银机、会计机、销售点终端、自动柜员机、通用自动数据处理机、独立存储单元、仅作为零部件销售的产品、携带箱，以及包装、分销、使用、维修和报废阶段。外购组件和电力的上游生产通过相连的上游数据集纳入生命周期模型，但不属于前景工厂作业。分类身份由 `un-cpc-3-0-structure-2025` 支持；电子产品价值链分解由 `unep-eco-i-electronics-2022` 支持。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.electronic-calculators-and-pocket-size-data-recording-reproducing-and-displaying-machin-ab87fa21 |
| classification_refs | CPC 3.0: 45130 (exact) |
| covered_products | 电子台式、手持式和袖珍式计算器；具有计算功能的袖珍式数据记录、重现和显示机器 |
| excluded_products | 会计机、收银机、邮资盖印机、售票机、销售点终端、自动柜员机、通用计算机、独立存储单元、单独销售的零部件、护套和携带箱 |
| representative_product | 配有已装联印制电路板组件、LCD 模组、键盘、外壳以及所声明电池和/或光伏电源配置的非打印型电子计算器 |
| production_route | 在计算器制造场址使用外购组件进行装配和功能测试 |
| market_state | 工厂大门处合格、未包装的成品计算器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产合格电子计算器或本 PCR 覆盖的袖珍式计算机器 |
| How much | 1 kg 净合格未包装成品 |
| How well | 所声明型号配置完整，并通过有记录的显示、键盘和计算功能测试 |
| How long or cycle | 一个报告期的生产输出；不表示使用阶段的产品寿命 |
| reference_flow_link | `finished_calculator_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 电子计算器和具有计算功能的袖珍数据记录、复制和显示机器 `1ac055b2-f5e3-46e4-9d11-31402df2ed75` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 计算器型号或型号系列；计算功能类别；显示类型；电源配置；适用时的电池化学体系和形态；适用时的光伏电池技术；产品净质量；未包装工厂大门状态；制造场址和地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和以质量计的组件行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用不含包装的净质量。校准秤具并保留去皮、抽样和汇总记录。 |
| `electricity_energy` | 装配电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原始记录保留电表单位，并在数据系统中采用经验证的单位换算转换为 MJ；不得将购入电力与现场燃料或热量合并。 |
| `item_count_normalization` | 光伏电池投入 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按适用型号统计已安装电池片数量，包括离开过程的已装配不合格品中的电池片，并按净合格输出质量归一化。 |
| `production_normalization` | 所有前景行 | 各行对应的属性 | 各行对应的单位 | 使用同一场址和同一期间的净合格未包装产品质量，对报告期投入和输出归一化；报告数据缺口和清单核对差异。 |

## 5. 系统边界

下述工厂大门边界和排除项是本 PCR 声明的建模选择。IEC 63366 仅用于其公开范围说明；本 PCR 不声称符合未经全文核验的标准要求。电子产品手册支持一般价值链分解，不提供计算器特定的组件数量或技术依据。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购已装联电路板组件、显示模组、键盘、外壳和适用电源组件已送达计算器装配场址 |
| starting_condition_role | 前景工厂入口条件；组件上游生产由相连的上游产品数据集表示 |
| product_classification_scope | 电子计算器及具有计算功能的袖珍式数据记录、重现和显示机器；不包括交易机器和通用计算机 |
| recursive_input_rule | 若购入完整计算器或同类子组件，将其作为披露的上游投入记录一次，不得在同一前景系统中再次递归展开 |
| upstream_dataset_requirement | 每个外购组件和电力流均须采用地理和技术上具有代表性的上游数据集，或披露所用代理 |
| disclosure | 声明型号系列、电源配置、组件供应边界、场址地理范围、报告期、测试作业、排除的包装以及所有代理数据集 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 从摇篮到工厂大门模型 | 纳入外购组件和电力的相连上游数据集，以及前景组件安装、总装、功能测试、合格输出和不合格品。 | `unep-eco-i-electronics-2022` |
| `boundary_rule_2` | 排除阶段 | 本工厂大门前景数据集排除包装、分销、使用、维修和报废阶段，并在数据集元数据中说明这些排除项。 |  |
| `boundary_rule_3` | 条件电源路线 | 仅对安装扣式电池的型号纳入扣式电池安装，仅对安装光伏电池的型号纳入光伏电池安装；双电源产品同时纳入两者。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `calculator_final_assembly` | 计算器组件装配与总装 | required | 前景计算器生产始终纳入 | 前景装配和功能测试 | 每 1 kg 净合格未包装成品 |
| `button_cell_installation` | 扣式电池安装 | conditional | 仅当所声明计算器型号安装一次扣式电池时纳入 | 条件电源组件安装 | 每 1 kg 净合格未包装成品 |
| `photovoltaic_cell_installation` | 光伏电池安装 | conditional | 仅当所声明计算器型号安装光伏电池时纳入 | 条件电源组件安装 | 每 1 kg 净合格未包装成品 |

### 过程：计算器组件装配与总装（`calculator_final_assembly`）

#### 输入

##### 产品流

###### 已装联印制电路板组件（`pcba_input`）

记录用于合格和不合格计算器生产的外购已装联电路板组件质量。

- 选定流：电子元器件及印制电路板组件 `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装配线净领用质量的计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`unep-eco-i-electronics-2022`

###### 组装液晶显示模组（`lcd_module_input`）

记录用于合格和不合格产品生产的计算器 LCD 模组质量。

- 选定流：组装LCD模组 `daedcb7b-760e-4acf-9a1c-3adb472c4eba`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装配领用的计量质量或物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`unep-eco-i-electronics-2022`

###### 模压硅橡胶计算器键盘（`silicone_keypad_input`）

仅记录跨越装配边界的成品键盘组件，不得与其他橡胶零件合并。

- 选定流：模压硅橡胶计算器键盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装配领用的计量质量或物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`unep-eco-i-electronics-2022`

###### 注塑成型 ABS 计算器外壳（`abs_enclosure_input`）

记录送入装配的成品 ABS 外壳组件，不记录上游成型供应商使用的 ABS 树脂。

- 选定流：注塑成型 ABS 计算器外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装配领用的计量质量或物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`unep-eco-i-electronics-2022`

###### 装配和测试用购入电力（`assembly_electricity_input`）

记录计量或分配至组件安装、总装和功能测试的购入电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：电表计量电力，或从装配区域电表按有文件记录的方式分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格未包装成品计算器（`finished_calculator_product`）

记录功能测试后放行的净合格产品质量，不含包装。

- 选定流：电子计算器和具有计算功能的袖珍数据记录、复制和显示机器 `1ac055b2-f5e3-46e4-9d11-31402df2ed75`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 不合格成品电子计算器（`rejected_calculator_waste`）

当已装配的不合格计算器作为废物离开前景过程时记录；报告期内返回返工的产品不计为废物。

- 选定流：废弃成品电子计算器
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往废物处理的已装配不合格品计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_waste_mass`
- 来源：

##### 基本流

### 过程：扣式电池安装（`button_cell_installation`）

#### 输入

##### 产品流

###### 一次扣式电池（`button_cell_battery_input`）

仅对安装新一次扣式电池的计算器型号记录本行；否则不纳入该条件过程。

- 选定流：一次扣式电池
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：包括电池外壳在内的已安装电池计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：适用型号每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`unep-eco-i-electronics-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：光伏电池安装（`photovoltaic_cell_installation`）

#### 输入

##### 产品流

###### 单晶硅光伏电池（`photovoltaic_cell_input`）

仅对安装单晶硅光伏电池的计算器型号记录本行；否则不纳入该条件过程。

- 选定流：单晶硅光伏电池 `c447c8a4-7c92-4dc9-adb6-12e3d7af67b8`
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：合格和不合格产品中安装电池片的计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：适用型号每 1 kg 净合格未包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power_component_count`
- 来源：`unep-eco-i-electronics-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共用装配设备和场址公用设施 | 优先使用分表计量和过程细分。无法直接计量时，采用机器运行时间等有文件记录的因果驱动因素分配电力；不得按收入分配。 |  |
| `allocation_rule_2` | 多个计算器型号 | 仅汇总产品边界和电源路线逻辑相同的型号。否则先计算型号特定清单，再进行生产量加权组合。 |  |
| `allocation_rule_3` | 不合格品和回收材料 | 按计量质量将不合格计算器报告为废物。除非另行声明扩展边界和替代法，否则不得在本工厂大门数据集中计入避免原生材料生产的抵扣。 |  |

计算器装配通常不产生共产品。若场址报告可销售共产品，应细分其生产作业，或记录物理因果分配方法及未分配结果。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom_mass` | `calculator_final_assembly`; `button_cell_installation` | 各外购组件消耗质量 | 批准的物料清单、收货记录、领料记录和组件质量测量 | model_id; supplier_part_id; component_flow; unit_mass; issued_quantity; returned_quantity; rejected_quantity; scale_id | 核对批准的 BOM 与物料领用和退料；通过校准称量验证单位质量 | kg | 每生产批次，按月汇总 | 完整报告期 | 所声明场址内生产覆盖型号的全部生产线 | 按原子组件汇总净领用质量并除以净合格输出质量 | BOM 版本、采购/领料记录、秤具校准和核对签字 |
| `cp_assembly_electricity` | `calculator_final_assembly` | 装配和功能测试电力 | 电表读数和设备运行记录 | meter_id; opening_reading; closing_reading; meter_unit; covered_equipment; operating_time; allocation_driver; excluded_loads | 读取专用电表，或按有文件记录的运行时间分配装配区电表 | 电表单位，经验证换算后为 MJ | 至少每月 | 完整报告期 | 所声明的装配和测试设备 | 扣除排除负荷，采用有记录的因果分配，再除以净合格输出质量 | 电表标识、读数日志、换算记录和分配工作表 |
| `cp_finished_product_mass` | `calculator_final_assembly` | 合格未包装成品 | 放行数量和经验证净单位质量 | model_id; released_quantity; sampled_unit_mass; packaging_tare; scale_id; release_status | 按型号抽样称量未包装产品，并与放行数量核对 | kg | 每型号和报告期 | 完整报告期 | 所声明生产场址 | 汇总放行数量乘以经验证净单位质量 | 放行记录、抽样方案、秤具校准和去皮记录 |
| `cp_reject_waste_mass` | `calculator_final_assembly` | 不合格成品计算器废物 | 不合格品和废物处置记录 | model_id; reject_quantity; measured_mass; rework_return; disposition; waste_ticket | 称量离开过程的已装配不合格品，排除报告期内返工产品 | kg | 每次废物运输或生产批次 | 完整报告期 | 所声明生产场址 | 汇总处置的不合格品质量并除以净合格输出质量 | 不合格品日志、称量记录和废物转移凭证 |
| `cp_power_component_count` | `photovoltaic_cell_installation` | 安装的光伏电池数量 | 批准的 BOM 和合格/不合格产品数量 | model_id; power_configuration; cells_per_unit; released_quantity; rejected_quantity; BOM_revision | 适用型号的经验证单机电池片数量乘以装配产品数量 | Item(s) | 每生产批次，按月汇总 | 完整报告期 | 所有适用覆盖型号 | 汇总安装电池片数量并除以净合格输出质量 | BOM 批准、电源路线声明和生产数量核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_mass` | 以质量计的组件投入 | 单位参考流净组件质量 =（领用质量 - 同状态退库质量）/ 净合格未包装产品质量 | 组件领用与退料记录；净合格输出质量 | kg 组件/kg 参考产品 |  |
| `calc_electricity` | 装配电力 | 单位参考流电力 = 分配的装配和测试电力 / 净合格未包装产品质量 | 电表读数；排除负荷；分配驱动因素；经验证单位换算；输出质量 | MJ/kg 参考产品 |  |
| `calc_product_mass` | 参考产品输出 | 净合格质量 = 各型号放行数量乘以经验证未包装单位质量之和 | 放行数量；抽样单位质量；包装皮重 | kg 合格产品 |  |
| `calc_pv_count` | 光伏电池投入 | 单位参考流电池片数量 = 适用型号安装电池片总数 / 净合格未包装产品质量 | 单机电池片数量；装配产品数量；输出质量 | Item(s)/kg 参考产品 |  |
| `calc_reject_mass` | 不合格计算器废物 | 单位参考流不合格废物 = 已处置装配不合格品质量 / 净合格未包装产品质量 | 不合格品称量和处置记录；输出质量 | kg 废物/kg 参考产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和组件身份 | 每个原子行保留型号、供应商零件、组件状态、电源配置以及 TianGong UUID 或已记录的未解决状态。 | BOM、供应商规格、UUID 审计和型号系列声明 |
| `dq_temporal` | 前景活动数据 | 覆盖一个完整且有代表性的报告期，并披露停产、启动、工程批次和异常不合格品。 | 有日期的生产、电表和废物记录 |
| `dq_mass` | 质量行 | 使用经校准的称量或有文件记录的单位质量抽样，并核对组件领用质量、合格输出和不合格品处置。 | 校准证书、抽样记录和核对工作表 |
| `dq_electricity` | 电力 | 识别电表边界、排除负荷、换算和分配驱动因素；采用与地理范围和电压匹配的上游电力数据集。 | 电表图、读数、分配工作表和数据集元数据 |
| `dq_completeness` | 所有清单行 | PCR 的九行均须报告为存在、在所声明条件路线下为零/不适用，或明确标记为未解决；不得合并原子组件或废物。 | 完成的清单检查表和路线声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 确认属于 CPC 45130，并排除会计机、交易终端、通用计算机、独立存储单元和单独销售的零部件。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | 参考流 | 确认数据集输出恰为 1 kg 净合格未包装成品，并且所有必需限定信息齐全。 |  |
| `validation_rule_3` | 过程与路线完整性 | 确认纳入总装，并确认扣式电池和光伏电池行与所声明电源配置一致；双电源型号同时纳入两个条件过程。 |  |
| `validation_rule_4` | 清单身份 | 确认每个选定流均为一个原子交换，带 UUID 的中文名称与 state-100 直读一致，四个 UUID 空缺行在完成精确身份审计前保持明确未解决。 |  |
| `validation_rule_5` | 归一化与核对 | 确认分子记录与净合格输出覆盖同一场址和期间；解释组件质量、产品质量和不合格品核对差异，且不得将电力作为质量处理。 |  |
| `validation_rule_6` | 外部范围 | 确认在至少两个相互独立、边界、单位和产品状态兼容的原始来源支持综合判断前，不声明外部经验范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | 用作覆盖计算器产品的产品 LCA、组件供应链模型和 lifecyclemodel 投影的工厂大门投入 |
| allowed_use | 用于所声明型号系列、电源配置、场址地理范围、技术和报告期；经代表性审查后可作为已披露代理使用 |
| excluded_use | 不得单独表示包装、分销、使用、维修、报废、会计机、POS 终端、ATM、通用计算机或单独销售的组件 |
| required_metadata | canonical PCR id；产品型号或系列；CPC 参考；计算功能类别；显示类型；电源配置；电池和光伏限定信息；净质量；未包装工厂大门状态；场址；地理范围；技术；报告期；上游数据集；分配方法；未解决 UUID |
| required_quality_disclosure | 电表和秤具覆盖；BOM 版本；抽样和校准；生产与不合格品核对；条件路线适用性；代理数据集；排除项；时间、地理和技术代表性 |
| update_trigger | 型号系列、PCB 或显示架构、外壳材料、电源配置、供应商组合、装配技术、场址、电力供应、分配方法或报告期发生足以实质改变清单的变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-08） | 产品分类身份和排除项 |
| `iec-63366-2025` | 标准（`standard`） | IEC 63366:2025，Product category rules for life cycle assessment of electrical and electronic products and systems，https://webstore.iec.ch/en/publication/67691（检索日期：2026-09-08） | 仅限公开范围说明：EEPS 生命周期评价及产品特定规则的一般背景；未核验标准全文要求 |
| `unep-eco-i-electronics-2022` | 手册（`handbook`） | SAICM 秘书处（2022），《Eco—i Manual: Electronics Supplement》，联合国环境规划署委托并与世界资源论坛合作编制，第 21 页图 PR.1-6，https://saicmknowledge.org/sites/default/files/resources/UNEP_Eco%E2%80%94i_Manual_Electronics_Supplement_.pdf（检索日期：2026-09-08） | 电子产品价值链以及组件/装配过程分解 |

---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.clocks
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钟

## 1. 范围与适用性

本 PCR 适用于以指示时刻为主要功能的完整非佩戴式钟。所涵盖产品包括指针式或数字式闹钟、挂钟、台钟、座钟、仪表板钟及其他完整的钟，不论是否为电动；前景数据集须声明机芯、显示方式、精度规格、供电接口、随产品提供电池的状态及制造路线。

本 PCR 不包括佩戴式表；主要功能并非通常时刻指示的考勤记录、时间间隔测量、定时开关或类似设备；单独出售的钟表机芯；单独出售的其他钟零件；以及主要产品身份为收音机、电话、计算机、家用电器、车辆或其他非钟产品的多功能产品。默认工厂门边界不包括销售包装、配送、消费者使用、维护、更换电池及寿命终结阶段。

代表性路线为采用外购钟表机芯、完整钟壳、指针式钟面和随钟提供的一枚纽扣电池，组装并校准指针式石英台钟。其他在涵盖范围内的钟技术只有在逐项声明具体组件交换和必需限定信息，且不用集合标签替代原子流时，才可使用本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.clocks |
| classification_refs | CPC 3.0：48420，钟（`exact`） |
| covered_products | 主要用于指示时刻的完整非佩戴式钟，包括闹钟、挂钟、台钟、座钟、仪表板钟、指针式钟、数字式钟、电动钟及非电动钟 |
| excluded_products | 表；考勤记录、时间间隔测量及定时开关设备；单独出售的钟表机芯；单独出售的钟零件；主要产品身份并非钟的产品 |
| representative_product | 随产品提供一枚纽扣电池的指针式石英台钟 |
| production_route | 接收外购钟表机芯、完整钟壳、指针式钟面及随产品提供的电池；组装；校准；功能测试；在销售包装前将合格钟放行至工厂门 |
| market_state | 制造工厂门处完整、已测试、未作销售包装的钟；已声明机芯、显示方式、精度规格、供电接口及随产品提供电池的状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供通常时刻指示功能的完整非佩戴式钟 |
| How much | 声明工厂门状态下 1 kg 合格钟 |
| How well | 符合生产商声明的走时精度、显示可读性、功能测试验收准则及供电接口规格 |
| How long or cycle | 在声明运行方式下的设计使用寿命；使用寿命是必需限定信息，不包含在 1 kg 制造参考量中 |
| reference_flow_link | `final_clock_assembly` 放行的合格完整钟质量，归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 钟 `24759480-c6f3-43e9-90be-61582a11d717` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钟类型和预期安装方式；机芯和时间基准；指针式或数字式显示；声明精度及测试方法；供电接口；随产品提供电池的化学体系、规格、数量及提供状态；不含销售包装的完整钟净质量；工厂门状态；制造地理范围和技术；数据期；声明设计使用寿命及运行方式 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_clock_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在校准和测试之后、销售包装之前计量合格完整钟的净质量；参考产品质量不包括托盘、可重复使用运输物品及销售包装。 |
| `component_mass_normalization` | 钟表机芯、钟壳、指针式钟面及随产品提供的电池 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | 各接收组件须按质量分别记录，并用同一批次的合格完整钟质量除以该批次组件验收用量。 |
| `electricity_energy_conversion` | 组装用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 原始记录保留电表 kWh，归一化前按 1 kWh = 3.6 MJ 换算为 MJ；不得把电网的上游排放作为前景基本流加入。 |
| `defect_mass_consistency` | 缺陷完整钟废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | 在拆解或返工前称量不合格完整钟；本行不得与组件废料、包装废物或混合制造废物合并。 |

## 5. 系统边界

默认边界始于外购钟组件及随产品提供的电池进入报告设施之时，止于合格、已测试的钟在销售包装前放行至工厂门之时。边界包括组件接收和厂内搬运、组装、校准、功能测试、这些作业消耗的电力及缺陷完整钟的管理。外购组件和电力的上游生产由所链接的上游数据集表示，不在前景交换中重复。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钟表机芯、完整钟壳、指针式钟面以及随钟提供的任何电池到达报告设施接收点 |
| starting_condition_role | 声明钟组装路线的可审计门到门起始条件 |
| product_classification_scope | CPC 3.0 子类 48420 范围内的完整钟；表、考勤记录设备、单独出售的机芯及单独出售的零件不属于规范产品边界 |
| recursive_input_rule | 作为投入购入的完整钟须由单独识别的上游钟数据集表示，不得在当前组装过程中默默拆分或再次计数 |
| upstream_dataset_requirement | 每项外购组件、电池和电力投入均须链接在地理和技术方面有代表性的上游数据集；须披露任何代理及其对完整性的影响 |
| disclosure | 声明起始条件、组件自制或外购边界、钟机芯、显示方式、随产品提供电池的状态、纳入作业、排除作业、参考产品质量约定、地理范围、技术及数据期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_clock_identity` | 产品范围 | 仅当参考产品为 CPC 3.0 子类 48420 中以通常时刻指示为主要身份的完整钟时，才应用本 PCR。 | `un-cpc-3-0-structure-2025` |
| `boundary_factory_gate` | 前景作业 | 纳入接收、厂内搬运、组装、校准、功能测试、这些作业消耗的电力以及缺陷完整钟处理，直至产品在销售包装前放行至工厂门。 |  |
| `boundary_upstream_links` | 外购投入 | 外购机芯、钟壳、钟面、随产品提供的电池及电力的生产由所链接的上游数据集表示，不得在前景清单中重复其上游交换。 |  |
| `boundary_default_exclusions` | 排除的生命周期阶段 | 默认排除销售包装、配送、消费者使用、维护、更换电池及寿命终结；如研究明确扩展边界，须分别报告这些阶段。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_clock_assembly` | 钟最终组装、校准和测试 | required | 适用于使用本工厂门 PCR 的每个数据集 | 将外购组件转化为合格完整钟的前景制造过程 | 销售包装前 1 kg 合格完整钟 |

### 过程：钟最终组装、校准和测试（`final_clock_assembly`）

#### 输入

##### 产品流

###### 外购计时机芯（`clock_movement`）

完整外购机芯跨越接收边界，为代表性钟提供时间基准和驱动功能。仅记录交付组装的机芯，不得再次记录其内部齿轮或电子零件。

- 选定流：钟表机心 `3dcf3381-920e-4477-a31c-aa2594aa8c59`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向组装批次发料的已计量合格机芯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 销售包装前合格完整钟输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_receipts`
- 来源：

###### 完整钟壳（`clock_case`）

用于容纳并支承代表性钟的完整钟壳作为单项产品投入跨越接收边界。须声明材料、表面处理、尺寸、供应商及配合关系；其准确 Tiangong 流 UUID 尚未解决。

- 选定流：钟壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向组装批次发料的已计量合格钟壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 销售包装前合格完整钟输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_receipts`
- 来源：

###### 指针式钟面（`analog_clock_dial`）

成品指针式刻度盘或钟面跨越接收边界，为代表性产品提供可见时间刻度。须与钟壳和机芯分别记录；其准确 Tiangong 流 UUID 尚未解决。

- 选定流：指针式钟面
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向组装批次发料的已计量合格钟面质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 销售包装前合格完整钟输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_receipts`
- 来源：

###### 随钟提供的电池（`included_button_cell_battery`）

仅当一枚新纽扣电池在声明工厂门状态下实际随代表性钟提供时才记录。无电池产品须证明该交换不存在，不得用使用阶段的更换电池替代；其准确 Tiangong 流 UUID 尚未解决。

- 选定流：纽扣电池
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：安装在合格批次中或随合格批次提供的新纽扣电池实测质量；仅当数据集声明不提供电池时方可不存在
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 销售包装前合格完整钟输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_receipts`
- 来源：

###### 组装和测试用电（`assembly_electricity`）

电力通过组装线、校准台、测试设备以及可直接归属的辅助负荷跨越前景边界。须声明电网组合、电压、地理范围、损耗及电表分摊。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：可归属于组装批次的计量电力，由 kWh 换算为 MJ 并按合格输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 销售包装前合格完整钟输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格完整钟（`clock_output`）

合格完整钟在校准和功能测试后离开组装过程。其净质量形成参考输出，不含销售包装。

- 选定流：钟 `24759480-c6f3-43e9-90be-61582a11d717`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测合格批次输出归一化后恰为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：销售包装前 1 kg 合格完整钟参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_clock_output`
- 来源：

##### 废物流

###### 缺陷完整钟（`defective_complete_clock`）

组装或功能测试后不合格且未在同一批次返工的完整钟，以单独废物流跨越过程边界。不得与组件废料或混合制造废物合并；其准确 Tiangong 废物流 UUID 尚未解决。

- 选定流：缺陷完整钟
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开本过程接受处理的不合格完整钟实测质量，不包括在同一批次中完全返工成为合格输出的产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 销售包装前合格完整钟输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defective_clock_waste`
- 来源：

##### 基本流

代表性组装路线不规定直接基本交换。场址特定新增作业如存在实测直接排放，须以化学物种明确的独立基本流行表示，不得使用笼统排放类别。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用组装、校准和测试作业 | 在可行情况下，按产品线分别计量或以其他方式细分电力、组件发料、合格输出及缺陷钟废物，从而避免分配。 |  |
| `allocation_physical_mass` | 不可分开的、生产多个钟型号的共用作业 | 无法细分时，按实测合格产品质量在各钟型号间分配共用负荷；须披露受影响作业、型号、分配分母及改用件数分配的敏感性。 |  |
| `allocation_no_defect_credit` | 缺陷完整钟 | 将不合格判定前发生的负荷分配给生产批次，报告缺陷钟废物输出且不计避免产品信用；任何回收或处理均在所链接的下游废物数据集中建模。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_receipts` | `final_clock_assembly` | 外购组件投入 | 收货和发料记录以及经核验的质量测量 | supplier; SKU; component description; movement mechanism; case material and finish; dial type; battery chemistry and format; accepted count; rejected count; tare mass; net mass; batch_id | 核对收货和产线发料记录；使用校准天平验证代表性单件或批量质量；按 row_id 保留组件身份 | kg | 每个收货批次和组装批次 | 与钟输出相同的报告期，通常至少连续 12 个月 | 报告设施用于声明钟产品的所有组件批次 | 按原子组件行汇总向批次发料的合格净质量，再除以合格钟输出质量 | 采购/发料核对、供应商规格、天平校准记录及抽样称量记录 |
| `cp_assembly_electricity` | `final_clock_assembly` | 组装电力投入 | 分表或有文件记录的电表分摊 | meter_id; opening_kWh; closing_kWh; timestamps; production-line operating hours; shared-load allocation basis; batch_id | 有条件时读取专用分表；否则依据实测运行小时或设备负荷小时分摊有文件记录的总表差值 | kWh and MJ | 至少每月一次；有生产活动数据时按每次生产活动 | 与钟输出相同的报告期，通常至少连续 12 个月 | 报告设施的组装、校准、测试及可直接归属的辅助设备 | 扣除经核实的非生产负荷，将 kWh 换算为 MJ，汇总报告期并除以合格钟输出质量 | 电表标识、校准或公用事业账单核对、读数日志及分摊工作表 |
| `cp_clock_output` | `final_clock_assembly` | 合格钟产品输出 | 生产放行和质量记录 | model; mechanism; display; accuracy specification; power interface; supplied battery state; accepted_count; net_unit_mass; total_conforming_mass; release_date; batch_id | 将质量放行数量与测试后、销售包装前经校准测得的净质量进行核对 | kg | 每个放行批次 | 与所有投入和废物记录相同的期间，通常至少连续 12 个月 | 声明产线和产品系统的全部合格钟输出 | 汇总合格钟净质量，将其用作分母，并将所有交换缩放到恰好 1 kg | 质量放行记录、测试验收记录、天平校准及批次核对 |
| `cp_defective_clock_waste` | `final_clock_assembly` | 缺陷完整钟废物输出 | 不合格、返工、称量和转移记录 | rejected_count; defect_code; gross_mass; tare_mass; net_mass; rework_status; destination; dispatch_reference; batch_id | 在拆解或转移前称量不合格完整钟，并核对返工后成为合格输出的数量 | kg | 每个批次及每次废物转移 | 与钟输出相同的报告期，通常至少连续 12 个月 | 声明过程产生的所有完整钟不合格品 | 汇总作为废物转移的净质量，排除成功返工的钟，再除以合格钟输出质量 | 不合格记录、返工核对、校准称量记录及废物转移凭证 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 所有基于质量的投入和废物行 | 归一化数量（kg/kg）= 批次原子流净质量（kg）/ 合格完整钟净质量（kg） | 批次行质量；合格钟输出质量；匹配的 batch_id 和期间 | 每 kg 合格完整钟对应的 kg 交换量 |  |
| `calc_electricity_mj` | `assembly_electricity` | 归一化电力（MJ/kg）= 可归属电力（kWh）× 3.6 / 合格完整钟净质量（kg） | 经核验电表差值；排除负荷；分摊因子；合格输出质量 | 每 kg 合格完整钟对应的 MJ 电力 |  |
| `calc_clock_output_reference` | `clock_output` | 确认分母为正后，用实测合格完整钟质量除以自身；归一化参考输出恰为 1 kg | 实测合格完整钟质量 | 1 kg 参考产品 |  |
| `calc_clock_mass_balance` | 钟最终组装质量平衡 | 比较原子组件投入与合格钟输出、缺陷完整钟废物、有文件记录的在制品库存变化及单独记录的原子组件废料；调查未解释质量，不得强制闭合 | 原子组件质量；输出质量；缺陷钟废物；在制品库存变化；单独识别的废料 | 已披露的质量平衡差异及核对状态 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留型号、机芯、显示方式、精度规格、供电接口、随产品提供电池的状态、净质量约定及工厂门状态，足以证明输出为完整钟而不是表、机芯、零件或考勤记录设备。 | 产品规格、物料清单、产品照片或图样及质量放行记录 |
| `dq_flow_identity` | 每个清单行 | 每行保留一个具体交换身份、经确认的 Tiangong UUID、属性和单位、供应商或电表语境以及任何未解决 UUID 状态；不得汇总不同组件、废物或排放。 | 行级核对和 UUID 审查记录 |
| `dq_temporal_alignment` | 所有前景数据 | 投入、输出、电力和废物记录使用同一代表性期间；披露停工、产品投产、异常活动以及任何少于连续 12 个月的期间。 | 注明日期的源记录和报告期核对 |
| `dq_measurement` | 质量和电力记录 | 使用经校准或核验的天平和电表，保留皮重修正和换算工作表，并记录共用电表分摊假设。 | 校准证书或检查记录、原始读数、账单及计算工作簿 |
| `dq_completeness` | 前景清单 | 核对外购组件发料、合格输出、缺陷钟废物、返工、在制品库存变化及电力覆盖；量化任何排除或估算份额。 | 质量平衡说明、电力核对及完整性检查表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_clock_identity` | 产品身份 | 确认参考产品是 CPC 3.0 子类 48420 中的完整非佩戴式钟，而不是表、考勤记录设备、单独出售的机芯、单独出售的零件或具有其他主要身份的多功能产品。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_flow` | 参考流 | 要求合格完整钟质量为正，并按声明净质量约定将 `clock_output` 归一化为恰好 1 kg。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 第 3 节任何必需限定信息缺失，或随产品提供电池的状态与 `included_button_cell_battery` 不一致时，判定参考流定义不完整。 |  |
| `validate_atomic_inventory` | 过程清单 | 每项材料、电池、电力、废物及任何新增直接排放交换均须使用自己的行、属性、单位、数量规则、协议及身份状态。 |  |
| `validate_period_reconciliation` | 前景记录 | 确认组件、电力、合格输出、不合格品、返工及在制品库存记录覆盖相同的声明期间和设施范围。 |  |
| `validate_mass_balance` | 组装质量平衡 | 报告 `calc_clock_mass_balance` 的质量平衡差异；调查并披露组件废料、库存变化、水分及测量不确定性，不得隐藏未解释差异。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景钟制造数据包及产品类别特定过程数据集 |
| downstream_use | `secondary_dataset`；在完成方法学审查、地理和技术代表性审查，并解决或明确接受开放的身份及范围证据需求后，可作为 `background_dataset` |
| allowed_use | 对与声明机芯、显示方式、精度、供电接口、随产品提供电池的状态、工厂门状态、地理范围、技术及数据期相匹配的完整钟进行比较或归因建模 |
| excluded_use | 表、单独出售的机芯或零件、考勤记录设备、有包装钟声明、配送、使用阶段能源或电池、维护及寿命终结，除非明确增加相应建模 |
| required_metadata | PCR id 和版本；产品型号和钟类型；机芯和时间基准；显示方式；精度规格和测试方法；供电接口；电池化学体系、规格、数量及随产品提供状态；净质量约定；设施地理范围和技术；自制或外购边界；数据期；分配；上游数据集身份；未解决 UUID；排除项 |
| required_quality_disclosure | 一手数据份额；电表和天平覆盖；校准状态；时间覆盖；共用负荷分摊；组件和输出核对；不合格品和返工处理；质量平衡差异；代理数据集；未解决 UUID 和范围证据需求 |
| update_trigger | 机芯、显示方式、钟壳或钟面设计、随产品提供的电池、组装技术、设施、电力供应、自制或外购边界、分配、净质量约定或数据期发生变化；解决身份或范围证据需求；或归一化投入、电力、输出或废物发生实质变化 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》3.0 版，2025 年 6 月 30 日结构文件，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-07） | CPC 48420 的正式身份，以及与表、考勤记录设备、机芯和其他零件的区分 |
| `un-cpc-1-1-chinese-2002` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》1.1 版中文本，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-07） | 核实专业中文类别术语“钟”，以及与“表”“钟表机心”和其他零件的区分 |

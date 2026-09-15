---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.time-of-day-recording-apparatus-apparatus-for-measuring-recording-or-otherwise-indicati-f5f469e3
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 时间记录器以及测量、记录或指示时间间隔的装置，装有钟、表机芯或同步电动机的定时开关

## 1. 范围与适用性

本 PCR 适用于成品装置的工厂门前景数据包。这些装置以记录时刻、测量、记录或以其他方式指示时间间隔，或按时间自动切换电路为主要功能，并以钟表机芯或同步电动机作为计时机构。涵盖的典型产品包括考勤或时间记录装置、时间间隔指示装置以及符合上述机构边界的定时开关。

本 PCR 涵盖外购计时、控制、外壳及包装组件的接收，最终装配，功能测试，以及在报告设施内实施的销售包装。外购组件的生产属于上游，须连接供应商特定或有代表性的独立数据集。本 PCR 不包括以普通时间显示为主要功能的钟和表、作为产品单独销售的钟表机芯、秒表、计时元件并不界定产品的过程控制仪器，以及不使用钟表机芯或同步电动机的通用电子定时器。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.time-of-day-recording-apparatus-apparatus-for-measuring-recording-or-otherwise-indicati-f5f469e3 |
| classification_refs | CPC 3.0：48430（精确分类语境） |
| covered_products | 成品时刻记录装置；成品时间间隔测量、记录或指示装置；使用钟表机芯或同步电动机的成品定时开关 |
| excluded_products | 普通钟表；作为产品销售的机芯；秒表；非计时过程控制仪器；超出所述机构边界的定时器；单独销售的备件 |
| representative_product | 使用已声明计时机构、适用时的控制组件、外壳以及随产品供应时的销售包装组装而成、可投放市场的时间记录装置或定时开关 |
| production_route | 外购组件接收与核验、最终机械/电气装配、功能测试以及有条件的销售包装 |
| market_state | 工厂门交付的合格成品装置，并声明型号、功能、计时机构、精度或开关额定值、外壳配置及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台在所涵盖机构边界内记录时刻、测量/记录/指示时间间隔或执行自动定时开关功能的成品装置 |
| How much | 1 kg 合格成品装置 |
| How well | 已声明型号通过制造商适用的功能和安全放行测试，并符合已声明的精度、时间间隔、记录或开关规格 |
| How long or cycle | 仅表示工厂门产品输出；不表示工作寿命或开关/记录循环次数，下游使用阶段研究须另行界定 |
| reference_flow_link | `finished_apparatus_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 日历记录器，装有钟表机心或同步马达用以测量、记录或以其他方式指示时间间隔的仪器 `0b4b9302-c3cd-4165-aca2-febe111a9207` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 装置功能和型号；钟表机芯或同步电动机机构；机械/机电/电子控制配置；已声明精度、时间间隔、记录或开关额定值；适用时的额定电压和频率；适用时的外壳材料及防护等级声明；所含附件；包装或未包装输出状态；制造场址和地理范围；报告期；件数及平均产品质量 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品以及所有按质量归一化的组件和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用已声明工厂门状态下合格装置的净质量。参考产品质量不含单独报告的销售包装，并披露所含附件。 |
| `item_to_mass_conversion` | 仅有件数的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用型号和报告期特定的抽样或经核验单件质量将件数换算为质量；保留样本量、秤分辨率和加权方法。 |
| `electricity_energy_conversion` | 装配、测试和包装电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量的 kWh，并按 1 kWh = 3.6 MJ 换算为 MJ；没有单独记录和披露时，不得将外购电力与现场发电混合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告设施门口接收的外购钟表机芯或同步电动机、适用时的控制板组件、成品外壳组件以及包装组件 |
| starting_condition_role | 这些项目是最终装配的产品输入；其生产属于上游，不得无说明地嵌入前景装配工序 |
| product_classification_scope | 仅限成品 CPC 48430 装置；组件流保留各自产品身份，不重新分类为参考产品 |
| recursive_input_rule | 若外购输入本身属于成品 CPC 48430 装置，应将其作为单独计量的同类别输入记录，连接上游数据集并说明集成作用；不得把它改称为机芯、电动机或外壳 |
| upstream_dataset_requirement | 每个外购产品输入须连接与其材料状态、技术、地理范围和交付边界一致的供应商特定或有代表性的上游生产数据集 |
| disclosure | 声明产品型号组合、计时机构、控制配置、纳入/排除工序、包装状态、组件来源、分配、数据缺口、代理数据以及任何同类别输入 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景最终装配与测试 | 纳入组件接收、装配、功能测试、为获得合格输出而实施的返工以及有条件销售包装在报告设施边界上跨越的全部材料、能源、产品和废物交换。 | `eu-pef-2021-2279` |
| `boundary_upstream_components` | 外购组件和包装 | 每个外购产品流均须连接上游数据集；不得在前景装配过程中重复计入其上游制造负荷。 | `eu-pef-2021-2279` |
| `boundary_capital_goods` | 生产设备和基础设施 | 本门到门单元过程中默认排除资本品，除非研究目标明确纳入；披露任何纳入项，并防止与背景数据集重复计算。 |  |
| `boundary_use_end_of_life` | 下游生命周期阶段 | 本工厂门数据集排除配送、安装、使用阶段电力、维护、更换和生命末期；下游研究可将其作为单独阶段建模。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_test_packaging` | 最终装配、功能测试及有条件的销售包装 | `required` | 始终纳入最终装配和放行测试；仅当包装随参考产品跨越工厂门边界时，才纳入对应包装交换 | 前景生产和放行 | 已声明包装或未包装工厂门状态下的 1 kg 合格成品装置 |

### 过程：最终装配、功能测试及有条件的销售包装（`final_assembly_test_packaging`）

#### 输入

##### 产品流

###### 外购钟表机芯（`clock_movement_input`）

当已声明装置采用该计时路线时，记录装入合格产品的完整外购机芯。若机芯零件已包含在机芯上游数据集中，不得再次单独计入。

- 选定流：钟表机心 `3dcf3381-920e-4477-a31c-aa2594aa8c59`
- 流属性/单位：Mass / kg
- 数量规则：完整机芯领用质量减去未使用退料质量，再按合格输出质量归一化；仅对已声明的纯同步电动机路线使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clock_movement_input`
- 来源：

###### 外购同步电动机（`synchronous_motor_input`）

当同步电动机提供已声明计时机构时，记录一个同步电动机产品输入。Tiangong UUID 尚未解决，不得用完整装置或通用钟表零件流替代。

- 选定流：时间开关或时间记录装置用同步电动机
- 流属性/单位：Mass / kg
- 数量规则：同步电动机领用质量减去未使用退料质量，再按合格输出质量归一化；仅对已声明的纯钟表机芯路线使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_synchronous_motor_input`
- 来源：

###### 已装配电子控制板组件（`populated_control_board_input`）

装有电子控制板时，记录一个已装配控制板组件。不得用裸印制线路板、显示模组或合并的未指定电子元器件流替代。

- 选定流：已装配电子控制板组件
- 流属性/单位：Mass / kg
- 数量规则：装入产品的已装配控制板组件质量按合格输出质量归一化；经核验无此组件的路线使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_populated_control_board_input`
- 来源：

###### 预制钢制外壳（`fabricated_steel_enclosure_input`）

当已声明路线使用钢制外壳时，记录装入装置的外购预制钢制外壳。本行表示成品外壳组件，而非钢材原料或完整控制柜。

- 选定流：时间记录装置用预制钢制外壳
- 流属性/单位：Mass / kg
- 数量规则：装入产品的预制钢制外壳质量按合格输出质量归一化；已声明型号不使用钢制外壳时使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabricated_steel_enclosure_input`
- 来源：

###### 模制 ABS 外壳（`moulded_abs_enclosure_input`）

当已声明路线使用 ABS 外壳时，记录装入装置的外购模制 ABS 外壳。不得用产品状态和上游边界均不同的 ABS 粒料替代。

- 选定流：时间记录装置用模制 ABS 外壳
- 流属性/单位：Mass / kg
- 数量规则：装入产品的模制 ABS 外壳质量按合格输出质量归一化；已声明型号不使用 ABS 外壳时使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_moulded_abs_enclosure_input`
- 来源：

###### 外购电力（`electricity_input`）

记录边界内装配工具、连接设备、功能测试台、返工和包装设备使用的外购电力。共享计量电力仅按第 7 节规则分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：报告期内可归属于本过程的计量或计算外购电力，换算为 MJ 后按合格输出质量归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_input`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸箱（`corrugated_box_input`）

记录随参考产品离开工厂的瓦楞纸箱。仅当已声明输出没有瓦楞纸箱时使用 `not_applicable`。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格产品发运消耗的纸箱质量，扣除未使用退料和单独记录的包装废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corrugated_box_input`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品装置（`finished_apparatus_output`）

记录经放行的合格装置净质量。销售包装不计入产品质量；若其随产品跨越工厂门，则作为单独输入记录。

- 选定流：日历记录器，装有钟表机心或同步马达用以测量、记录或以其他方式指示时间间隔的仪器 `0b4b9302-c3cd-4165-aca2-febe111a9207`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 参考产品，根据报告期内经核验的合格输出质量确定
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 不合格成品装置（`rejected_finished_apparatus_output`）

记录未通过放行、未作为合格产品重新进入系统而离开前景系统接受处理的已装配装置。不得使用通用废品或混合废料 UUID。

- 选定流：不合格时间记录成品装置
- 流属性/单位：Mass / kg
- 数量规则：送往已声明处理路线的不合格已装配装置核验质量，按合格输出质量归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rejected_finished_apparatus_output`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享装配、测试、返工和包装工序 | 首先按型号、生产线、批次、测试程序或包装配置进行分表计量或过程细分，以避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 无法避免的共享资源使用 | 无法细分时，采用反映因果使用的已记录物理驱动因素分配，例如设备运行时间、测试时长或处理质量；不得默认按收入分配。 | `eu-pef-2021-2279` |
| `allocation_rework_and_rejects` | 返工和不合格装置 | 返工作为生产合格输出的一部分时，其负荷分配给合格输出；不合格装置处理负荷分配给报告批次；除非测量到输出系统的次级产品，否则不给予内部回收抵扣。 |  |
| `allocation_disclosure` | 所有已分配交换 | 报告共享总量、分配驱动因素、分子、分母、所得比例、受影响行，以及分配对结果有实质影响时的敏感性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_clock_movement_input` | `final_assembly_test_packaging` | `clock_movement_input` | 收货、领料、退料及供应商记录 | 型号；供应商；机芯技术；领用数量；未使用退料数量；核验单件质量 | 核对领料与未使用退料；仅有件数时核验代表性单件质量 | kg 和件 | 每批次，按月汇总 | 与输出相同报告期 | 报告设施及已声明产品线 | 按型号汇总净领用质量并除以合格输出质量 | 采购凭证；批次可追溯记录；秤校准；单件质量抽样记录 |
| `cp_synchronous_motor_input` | `final_assembly_test_packaging` | `synchronous_motor_input` | 收货、领料、退料及供应商记录 | 电动机型号；额定电压；频率；转速；供应商；领用数量；退料数量；核验单件质量 | 核对电动机净领用量并核验型号特定单件质量 | kg 和件 | 每批次，按月汇总 | 与输出相同报告期 | 报告设施及同步电动机路线 | 汇总净领用质量并除以合格输出质量 | 采购凭证；批次可追溯记录；秤校准 |
| `cp_populated_control_board_input` | `final_assembly_test_packaging` | `populated_control_board_input` | 物料清单、收货和领料记录 | 组件零件号；版本；供应商；装入数量；核验单件质量 | 将已装组件与放行型号核对；需要时称量代表性样品 | kg 和件 | 每批次或版本 | 与输出相同报告期 | 报告设施及电子控制路线 | 汇总装入组件质量并除以合格输出质量 | 批准的物料清单；供应商声明；秤校准；版本历史 |
| `cp_fabricated_steel_enclosure_input` | `final_assembly_test_packaging` | `fabricated_steel_enclosure_input` | 物料清单、收货和领料记录 | 外壳零件号；已声明时的钢牌号；涂层；供应商；装入数量；核验单件质量 | 核对装入的预制外壳并核验单件质量 | kg 和件 | 每批次或型号 | 与输出相同报告期 | 报告设施及钢制外壳路线 | 汇总装入外壳质量并除以合格输出质量 | 批准的物料清单；供应商声明；秤校准 |
| `cp_moulded_abs_enclosure_input` | `final_assembly_test_packaging` | `moulded_abs_enclosure_input` | 物料清单、收货和领料记录 | 外壳零件号；聚合物声明；供应商；装入数量；核验单件质量 | 核对装入的模制外壳并核验单件质量；保留供应商成分声明 | kg 和件 | 每批次或型号 | 与输出相同报告期 | 报告设施及 ABS 外壳路线 | 汇总装入外壳质量并除以合格输出质量 | 批准的物料清单；供应商声明；秤校准；`iec-62474-2018` |
| `cp_electricity_input` | `final_assembly_test_packaging` | `electricity_input` | 电表、分表或设备运行时间记录 | 表底；表止；倍率；额定功率；运行时间；型号/批次归属；现场发电输入/输出 | 优先使用经校准分表；否则用经验证功率和运行时间计算，并与设施总表核对 | kWh 和 MJ | 每班次或批次，按月汇总 | 与年度总量核对的代表性生产期 | 报告设施及纳入生产线 | 按第 7 节分配共享用电，换算为 MJ 后除以合格输出质量 | 电表标识和校准；账单；运行日志；核对记录 |
| `cp_corrugated_box_input` | `final_assembly_test_packaging` | `corrugated_box_input` | 包装物料清单和领料记录 | 纸箱规格；供应商；已知时的再生含量；消耗数；废品数；核验单件质量 | 核对纸箱领用量与发运合格输出并核验单件质量 | kg 和件 | 每批次或发运 | 与输出相同报告期 | 报告设施及包装产品路线 | 汇总纸箱消耗量，扣除未使用退料后除以合格产品质量 | 包装规格；采购凭证；秤校准 |
| `cp_finished_apparatus_output` | `final_assembly_test_packaging` | `finished_apparatus_output` | 放行、生产及质量记录 | 产品型号；放行件数；抽样或实测单件质量；所含附件；包装排除；放行测试状态 | 将放行件数与经测试合格件核对，并用经校准测量确定产品净质量 | kg 和件 | 每批次，按月汇总 | 完整报告期 | 报告设施及全部涵盖生产线 | 按型号汇总合格装置净质量，作为归一化分母 | 放行记录；测试状态；秤校准；质量抽样计划 |
| `cp_rejected_finished_apparatus_output` | `final_assembly_test_packaging` | `rejected_finished_apparatus_output` | 质量处置、质量及处理记录 | 型号；不合格件数；单件质量；故障处置；回收/返工状态；处理路线 | 将返工后的最终废品与废物转移或处理记录核对 | kg 和件 | 每批次，按月汇总 | 与输出相同报告期 | 报告设施及全部涵盖生产线 | 汇总作为不合格装置离开系统的质量，并除以合格输出质量 | 不合格报告；秤校准；废物转移或处理记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass_rows` | 所有质量输入和废物行 | 归一化数量 = 报告期内该行净质量 / 合格装置净输出质量 | 该行净质量；合格输出质量 | kg/kg 参考产品 |  |
| `calc_count_to_mass` | 仅有件数的组件和产品记录 | 质量 = 各已声明型号的件数乘以经核验平均净单件质量后求和 | 各型号件数；各型号核验平均单件质量 | kg |  |
| `calc_electricity_mj` | `electricity_input` | 外购电力 MJ = 已分配外购电力 kWh × 3.6 | 计量或计算 kWh；分配比例 | MJ/kg 参考产品 |  |
| `calc_component_mass_balance_screen` | 组件、产品和废品记录 | 考虑退料和排除项后，将装入组件质量与合格产品质量加不合格产品质量比较；调查差异而不得强行闭合 | 组件质量；输出质量；不合格质量；退料组件；排除项 | 已记录差异及纠正措施 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和外购组件 | 保留型号/零件号、版本、供应商、计时机构以及批次关联，以充分区分完整机芯、电动机、已装配控制板、外壳和成品装置。 | 批准的物料清单；收货和放行记录；供应商声明；UUID 审核记录 |
| `dq_measurement` | 质量和电力记录 | 使用经校准或核验的仪表，保留原始单位和换算因子，并记录由件数换算质量时的抽样方法。 | 校准证书；仪表标识；秤记录；抽样记录 |
| `dq_temporal_coverage` | 所有前景交换 | 覆盖完整报告期，或采用与年度生产核对的有记录代表期；说明停产、型号变化以及异常测试或返工活动。 | 生产日历；核对工作表；异常日志 |
| `dq_completeness` | 过程清单 | 核对物料清单、能源记录、输出质量、废品和输出系统的废物；披露所有排除项或代理流及其预期影响。 | 完整性检查表；质量平衡筛查；数据缺口登记册；`eu-pef-2021-2279` |
| `dq_technology_geography` | 上游数据集 | 尽可能匹配组件技术、产品状态、供应商地理范围、电力市场和交付边界，并记录代理数据。 | 供应商元数据；数据集元数据；代理理由；`eu-pef-2021-2279` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认输出为所涵盖成品装置，使用钟表机芯或同步电动机，并采用准确的参考产品 UUID、质量属性、单位组 UUID 和 kg 单位。 | `un-cpc-3-0-structure-2025` |
| `validate_route_conditions` | 条件组件行 | 仅要求与已声明配置相适用的行；`not_applicable` 须由物料清单证明，且不得在同一标签下隐藏替代组件。 |  |
| `validate_atomic_flows` | 所有清单行 | 拒绝合并或伞形交换；每个选定流必须标识一个物理产品、废物或能源交换，并具有相容的流类型、属性和单位。 |  |
| `validate_normalization` | 所有归一化数量 | 根据保留的原始记录重新计算输出分母、件数到质量换算、kWh 到 MJ 换算以及每个每千克数量。 |  |
| `validate_allocation` | 共享工序 | 确认已首先尝试细分，并披露任何物理分配驱动因素、总量、比例、受影响行及敏感性。 | `eu-pef-2021-2279` |
| `validate_completeness_and_gaps` | 整个数据集 | 确认外购组件均有上游数据集，各交换与生产及质量记录相核对，并持续披露未解决 UUID/范围需求和代理数据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所涵盖装置最终装配、功能测试及有条件销售包装的前景单元过程数据集 |
| downstream_use | `secondary_dataset`；经独立审查并将外购产品输入连接至相容上游数据集后可作为 `background_dataset` |
| allowed_use | 已声明装置型号或生产加权型号组合的工厂门建模；另行添加配送、安装、使用、维护和生命末期阶段的下游生命周期模型 |
| excluded_use | 单独表示机芯、电动机、印制板或外壳生产；完整从摇篮到坟墓绩效；或未声明的装置配置 |
| required_metadata | PCR id 和版本；产品型号与功能；计时机构；控制和外壳配置；工厂和地理范围；报告期；包装状态；产品净质量；件数；附件；上游数据集链接；分配方法；UUID 状态；来源和代理清单 |
| required_quality_disclosure | 测量和抽样方法；时间覆盖；仪表和秤状态；型号组合加权；质量平衡差异；分配比例；供应商数据质量；代表性；未解决 UUID 和范围证据需求 |
| update_trigger | 计时机构、控制架构、外壳路线、包装设计、设施或电力供应、供应商技术/地理范围、分配驱动因素、型号组合发生变化，或前景数量发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-07） | CPC 48430 官方分类身份和产品边界措辞 |
| `china-new-zealand-fta-annex-5` | `official_guidance` | 中华人民共和国商务部，中国—新西兰自由贸易协定附件五《产品特定原产地规则》中文文本，https://fta.mofcom.gov.cn/upload/agreementFiles/newzealand/doc/fujian/fujian_5_cn.pdf（检索日期：2026-09-07） | 对应装置类别的专业中文术语，已按 HS 9106 和 HS 9107 条目核验 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，《关于使用环境足迹方法的委员会建议（EU）2021/2279》附件 I，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期：2026-09-07） | LCI 完整性、边界和建模选择披露、初级数据采集、分配、数据质量与验证 |
| `iec-62474-2018` | `standard` | IEC 62474:2018《电工行业产品及其材料声明》，https://webstore.iec.ch/en/publication/29857（检索日期：2026-09-07） | 电工组件供应商材料声明证据；不作为过程化学品、包装或使用阶段排放的证据 |

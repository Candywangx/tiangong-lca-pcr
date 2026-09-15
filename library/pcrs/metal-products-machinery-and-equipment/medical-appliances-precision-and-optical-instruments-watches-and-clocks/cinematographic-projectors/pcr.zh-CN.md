---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cinematographic-projectors
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 电影放映机

## 1. 范围与适用性

本 PCR 适用于输送并投射电影胶片的完整电影放映机的前景生产数据，涵盖工厂装配、校准、功能放映测试和销售包装。数字或数据投影机、幻灯及静态图像投影机、银幕、独立零部件、放映服务、使用、维护和寿命终止阶段不在范围内。

前景边界为门到门，自外购组件和能源进入工厂起，至经测试并包装的放映机离开工厂止。摇篮到大门研究必须把每项外购投入连接到适当的上游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cinematographic-projectors |
| classification_refs | CPC 3.0：48323，精确分类语境 |
| covered_products | 用于输送和投射电影胶片的完整放映机，包括集成声音系统的有声电影放映机 |
| excluded_products | 数字及数据投影机；幻灯及静态图像投影机；银幕；独立零部件；影院运营和放映服务 |
| representative_product | 制造商工厂大门处完整且经测试的电影放映机 |
| production_route | 外购光学、机电、电气及外壳组件的装配；校准；功能测试；销售包装 |
| market_state | 可供配送的全新、完整、经测试且已包装的设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 能够输送并投射所声明电影胶片格式的完整电影放映机 |
| How much | 完整放映机净质量 1 kg，不含销售包装 |
| How well | 满足制造商声明的胶片规格、图像、胶片通道、灯源、声音系统、电气安全及功能验收准则 |
| How long or cycle | 工厂大门处的一件成品；使用寿命和使用循环不属于本门到门参考 |
| reference_flow_link | `projector_assembly_test_packaging` 的定量参考输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 电影放映机 `48b51d36-b781-4d3a-9c2d-305985200940` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 胶片规格和画幅格式；放映机技术；光源类型；额定电气输入；集成声音系统状态；产品净质量；销售包装纳入情况；制造地域；参考年份 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终测试后、销售包装前测量放映机成品净质量；所有交换均归一化到 1 kg 输出。 |
| `component_mass` | 外购组件 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据批次特定称量或有文件依据的供应商质量，将件数换算为质量；不得采用无依据的标称换算值。 |
| `electricity_energy` | 装配和测试用电 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量能源数据，归一化前按 1 kWh = 3.6 MJ 换算，并声明电表范围和分配。 |

## 5. 系统边界

前景边界包括：

1. 纳入受控组件暂存、装配、光学和机械校准、适用的灯源及声音系统安装、功能放映测试、检验、归属于报告期的返工和销售包装。
2. 将每种外购组件和能源载体记录为独立产品投入并连接上游数据集；不得把上游生产并入装配用电或未细分的材料投入。
3. 除非单独建模并披露，排除外购组件生产、外部运输、资本设备、建筑、员工通勤、影院运营、使用阶段用电、维护和寿命终止阶段。
4. 按照美国国会图书馆电影胶片保管指南保持播放设备清洁并得到良好维护；使用档案胶片测试时，应选用合适的低热放映机灯泡；该指南不提供清单数量。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 到达报告工厂的外购组件、适用光源、包装组件和电力 |
| starting_condition_role | 前景门到门装配起点 |
| product_classification_scope | 完整电影放映机；不包括数字/数据投影机或独立零部件 |
| recursive_input_rule | 将收到用于翻新或集成的完整电影放映机记录为单独的同类产品投入，并声明供应商身份和质量；不得在同一数据包内对该投入递归应用本 PCR。 |
| upstream_dataset_requirement | 每项外购投入均须连接与产品状态、地域和技术相符的数据集，或披露未解决的背景数据缺口。 |
| disclosure | 声明自制或外购状态、外包操作、胶片格式、放映机技术、光源、测试配置、包装边界、地域、参考年份和边界扩展。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `projector_assembly_test_packaging` | 放映机装配、校准、测试和包装 | `required` | 完整工厂大门放映机数据集始终要求 | 前景生产 | 完整且经测试的放映机净质量 1 kg |

### 过程：放映机装配、校准、测试和包装（`projector_assembly_test_packaging`）

#### 输入

##### 产品流

###### 物镜（`objective_lens`）

外购物镜作为形成投影图像的光学组件跨越边界。记录进入合格放映机的实际消耗质量，包括有记录的装配报废。

- 选定流：照相机、放映机或照相放大机或缩影器用物镜 `cfef9f14-3271-428b-bebe-47ded2db11d4`
- 流属性/单位：质量 / kg
- 数量规则：以合格和报废批次数量乘以批次特定实测或供应商声明的单件质量，计算消耗质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整且经测试的放映机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_mass`
- 来源：

###### 电动机（`electric_motor`）

放映机驱动电动机作为一个机电组件跨越边界。必须声明电动机类型、额定输出、电流类型和驱动用途，避免把通用身份误作技术规格。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：质量 / kg
- 数量规则：以合格和报废批次数量乘以批次特定实测或供应商声明的单件质量，计算消耗质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整且经测试的放映机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_mass`
- 来源：

###### 氙弧灯（`xenon_arc_lamp`）

仅当所声明放映机随附氙弧光源时记录此外购灯。其他技术必须记录为其自身具体、原子的光源交换。

- 选定流：氙弧灯
- 流属性/单位：质量 / kg
- 数量规则：根据采购、领用、退回和报废记录计算安装及装配报废质量；只有在记录了替代光源架构时才允许为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 完整且经测试的放映机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_mass`
- 来源：

###### 装配和测试用电（`assembly_electricity`）

电力通过装配设备、校准工位、适用的灯源运行、胶片输送、声音检查和功能测试跨越所声明的电表边界。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：采用分表数据，或使用有文件依据的因果驱动因素分配完整且已核对的区域电表；换算为 MJ 并归一化到合格输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整且经测试的放映机净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_electricity`
- 来源：

##### 废物流

不规定默认废物流。每项前景废物必须按具体物理废物流拆分为原子交换，并记录处理去向。

##### 基本流

不规定默认直接基本流。每项直接排放均须按物种和环境隔室单独记录。

#### 输出

##### 产品流

###### 完整电影放映机（`cinematographic_projector`）

参考输出是通过所声明工厂验收和电影放映测试的完整放映机。销售包装前测量净质量。

- 选定流：电影放映机 `48b51d36-b781-4d3a-9c2d-305985200940`
- 流属性/单位：质量 / kg
- 数量规则：依据合格净输出实测质量归一化后固定为 1 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：完整且经测试的放映机净质量 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reference_output`
- 来源：

##### 废物流

不规定默认废物输出。

##### 基本流

不规定默认直接基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `subdivide_before_allocation` | 共用装配、测试和包装操作 | 技术上可行时，在分配前按产品系列细分计量操作和记录。 |  |
| `physical_allocation` | 剩余共用投入和废物 | 无法细分时，按机器时间、测试时间、组件吞吐量或净输出质量等有记录的因果物理驱动因素分配；存在物理关系时不得采用收入。 |  |
| `scrap_credit_disclosure` | 可回收生产废料 | 单独报告废料总量和处理路线；任何避免负担或替代抵扣均置于前景清单之外并作为情景披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_mass` | `projector_assembly_test_packaging` | objective_lens; electric_motor; xenon_arc_lamp | 采购、领用、退回、报废及质量记录 | part_id; supplier; lot; quantities; measured_or_supplier_unit_mass; specification | 按批次核对物料控制记录，并通过称量或供应商文件验证代表性单件质量。 | kg | 每批；按月汇总 | 至少 12 个代表月份或完整的较短生产期 | 生产所声明放映机的全部生产线 | 按组件汇总净消耗质量，再除以合格净输出质量。 | 台账、核对表、称量记录或供应商规格 |
| `cp_assembly_electricity` | `projector_assembly_test_packaging` | assembly_electricity | 分表或已核对区域电表记录 | meter_id; readings; unit; production_time; test_time; allocation_driver; output_mass | 优先采用过程分表；否则核对区域电表并按所声明因果驱动因素分配。 | kWh and MJ | 每月和每个生产期 | 与组件和输出记录相同期间 | 所有纳入操作 | 扣除排除负荷，分配共用电量，换算 MJ，再除以输出质量。 | 电表台账、校准、核对和分配工作表 |
| `cp_reference_output` | `projector_assembly_test_packaging` | cinematographic_projector | 成品、秤量和验收测试记录 | model; lot; film_gauge; light_source; sound_system; net_mass; test_result; reject_status | 包装前称量合格放映机，并将质量关联到通过的验收测试。 | kg | 每型号和批次 | 与投入相同期间 | 所有纳入生产线 | 汇总合格净质量；验收前排除有关产品。 | 经校准秤量记录和签署的验收测试记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass_inputs` | objective_lens; electric_motor; xenon_arc_lamp | 归一化组件质量 = 组件净消耗质量 / 合格放映机净质量 | 物料和输出记录 | kg 组件/kg 参考产品 |  |
| `normalize_electricity` | assembly_electricity | 归一化电力 = 分配电量 kWh × 3.6 / 合格放映机净质量 | 电表、分配和输出记录 | MJ 电力/kg 参考产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal_alignment` | 所有行 | 投入、能源、报废、返工和输出覆盖同一报告期。 | 期间核对 |
| `dq_component_traceability` | 组件投入 | 保留供应商、批次、规格和单件质量证据；声明自制或外购状态。 | 采购和物料控制记录 |
| `dq_meter_completeness` | assembly_electricity | 证明电表完整性、排除负荷、校准及分配驱动因素。 | 电表图和核对 |
| `dq_functional_acceptance` | cinematographic_projector | 保留制造商针对所声明胶片通道、光学系统、灯源、收片、聚焦、图像稳定性及适用声音系统的验收证据。 | 经签署的验收测试记录 |
| `dq_range_gap` | 重要清单行 | 外部 QA 范围缺失属于证据缺口，不得据此虚构默认值；优先采集前景记录并报告不确定性。 | 清单中的范围证据缺口登记 |

## 9. 校验规则

前景数据包只有满足以下条件才符合要求：

1. 输出解析到 `48b51d36-b781-4d3a-9c2d-305985200940`，采用质量和 kg，归一化后等于 1 kg，且不含销售包装；
2. 范围证据证明产品是电影胶片放映机，而不是数字、数据、幻灯或静态图像投影机；
3. 每行均为原子交换，带 UUID 的流保留已审核属性和单位，`xenon_arc_lamp` 在验证精确公开 state-100 身份前保持 UUID 为空；
4. 组件、电力、报废、返工和输出记录核对至同一期间和工厂边界；
5. 氙弧灯数量为零时，有替代光源架构证据，且该具体光源已单独记录；
6. 共用操作已细分，或带有所声明分配驱动因素和工作表；
7. 必需限定信息、上游连接或缺口、外包操作及边界扩展均已披露；
8. 验收证据涵盖适用的胶片通道、光学、灯箱、收片、聚焦、划伤和声音检查。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 放映机装配、校准、测试和包装的前景生产数据包 |
| downstream_use | 经边界和限定信息对齐后构建单元过程，并汇总到摇篮到大门生命周期模型 |
| allowed_use | 格式、技术、地域、年份和包装边界相符的完整电影放映机门到门及连接后的摇篮到大门研究 |
| excluded_use | 数字/数据投影机、独立组件、影院运营、使用阶段用电、维护或未单独建模的寿命终止阶段 |
| required_metadata | PCR id；型号；胶片规格；画幅格式；技术；光源；额定输入；声音系统状态；净质量；包装边界；地域；期间 |
| required_quality_disclosure | 覆盖情况、电表范围、组件质量方法、分配、返工、报废、上游数据集及缺口、未解决 UUID、缺失范围和测试证据 |
| update_trigger | 架构、胶片格式、光源、电动机或镜头、生产线、电表边界、供应商组合、包装、分配、地域或年份发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，第 48323 行，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | 正式分类身份 |
| `un-cpc-2-1-update-2012` | `official_guidance` | 联合国统计司，CPC Version 2.1 更新背景文件，https://unstats.un.org/unsd/statcom/43rd-session/documents/BG-CPC-E.pdf（检索日期 2026-09-07） | 与其他图像投影机的范围区分 |
| `loc-motion-picture-film-care` | `official_guidance` | 美国国会图书馆，Care, Handling, and Storage of Motion Picture Film，https://www.loc.gov/preservation/care/film（检索日期 2026-09-07） | 播放设备清洁、维护及低热灯泡保管指南；不提供清单数量或范围 |

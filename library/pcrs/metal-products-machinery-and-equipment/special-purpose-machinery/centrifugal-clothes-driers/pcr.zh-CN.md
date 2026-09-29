---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 离心干衣机

## 1. 范围与适用性

本规则适用于制造完整的独立式离心干衣机。机器通过带孔滚筒旋转，从洗净衣物中机械甩出液态水，成品在制造商工厂门口验收。可用于家用或专业用途；具体配置、容量、驱动方式和目标市场必须在数据包中声明。仅有内置甩干功能的洗衣机、加热滚筒烘干机、纺织品压榨机、食品离心机及单独备件不属于本产品边界。独立机械脱水与热力干燥的区别依据 `lot24-task1-2011`，完整机器的分类依据 `un-cpc-3-2025`。`orbegozo-sc4600` 记录了带不锈钢滚筒的家用完整机器实例，但其规格不能作为类别通用制造范围。

这是从原料取得至工厂门口的前景生产规则：采购投入的上游生产连接适当背景数据集，记录厂内制造、装配、验收测试、实际发生的包装和生产废物。出厂后的配送、用户使用、维护和报废不属于本数据集画像；完整生命周期研究可以另行纳入并说明。阶段划分依据 `ec-pef-2021`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers |
| classification_refs | CPC 3.0 44911，离心干衣机（`un-cpc-3-2025`） |
| covered_products | 用旋转带孔滚筒对纺织品脱水的完整独立式离心干衣机或甩干机 |
| excluded_products | 洗衣机内置甩干段、热力滚筒烘干机、水压榨机、食品离心机、未组装零件和替换子总成 |
| representative_product | 一台已验收且配置已声明的完整电机驱动离心干衣机；该描述不预设质量或容量 |
| production_route | 外购部件与板材；实际发生时在厂内制造滚筒；最终装配、功能验收及有条件包装 |
| market_state | 制造商工厂门口的完整成品机器，净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台通过离心旋转从洗净衣物中机械甩出水的完整机器（`lot24-task1-2011`） |
| How much | 同一已声明配置的一台验收完整机器 |
| How well | 带孔旋转滚筒、驱动和安全控制符合生产商的书面验收规格；记录额定容量及测试结果 |
| How long or cycle | 一次验收机器的工厂门口交付；不包含使用寿命声明 |
| reference_flow_link | `finished_drier` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 离心干衣机 `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商；型号与配置；序列号或批次；家用或专业目标市场；额定纺织品负载；滚筒材料；驱动方式；验收测试；实测机器净质量 M；工厂门口；包装状态 |

构建前景数据包时，必须在元数据、过程说明、参考流备注或等效字段中声明全部必需限定信息。缺少限定信息的数据包，其参考流定义不完整。M 针对实际验收配置测量；本 PCR 不规定具体机器质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `inventory_basis` | 所有清单行 | 各行适用的质量或能量 | kg 或 MJ | 按同一配置每台验收成品机器采集交换量。被拒收机器仅通过其可归属投入和废物体现，不计入验收产出。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 生产系统 | 通过背景数据连接采购材料与部件的供应；纳入厂内制造、装配、验收测试用能、实际发生的出厂包装，以及出厂前废物。用户使用及出厂后配送不纳入此前景数据集。 | `ec-pef-2021` |
| `boundary_no_integrated_washer` | 产品识别 | 产品是一台独立离心脱水机；洗衣机内置甩干段和热力滚筒烘干机属于不同产品边界。 | `lot24-task1-2011` |
| `boundary_direct_emissions` | 厂内排放 | 已声明工艺若产生直接排放，应将各具体基本流分别计量与报告，不得藏入废物或公用工程汇总行。 | `ec-pef-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购板材及部件进入报告工厂；声明材料规格、供应商交付状态及滚筒是否在厂内制造。 |
| starting_condition_role | 外购投入进入工厂是前景制造阶段起点。 |
| product_classification_scope | 完整成品机器产出属于 CPC 3.0 44911；外购电机、材料和纸箱保留各自身份。 |
| recursive_input_rule | 若外购完整离心干衣机经返工后作为投入，须单独声明该上游机器投入，不得递归地把同一产出重复计数。 |
| upstream_dataset_requirement | 为各项外购投入及交付电力连接地域和技术具代表性的上游数据集；披露未解决的精确流身份。 |
| disclosure | 声明工厂、期间、型号与配置、部件来源、滚筒制造路线、电网供应、包装状态、废料去向、排除项及共用过程分配。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `drum_fabrication` | 带孔滚筒制造 | conditional | 报告工厂裁切和成形不锈钢板材时纳入；否则把外购滚筒作为需另行核实的具体部件投入。 | 前景制造及边角料核算 | 每台验收成品机器 |
| `final_assembly` | 最终装配、验收与包装 | required | 每台验收完整机器均纳入；仅在出厂前实际装入瓦楞纸箱时记录该纸箱。 | 前景完工 | 每台验收成品机器 |

### 过程：带孔滚筒制造（`drum_fabrication`）

#### 输入

##### 产品流

###### 滚筒用不锈钢板材（`drum_stainless_sheet`）

厂内采用板材制造滚筒时，记录发放至该工序的不锈钢板材实测质量。材料牌号及外购状态须与物料清单一并保存；尚未确认准确的公开流 UUID。纳入条件：厂内板材制滚筒路线。`orbegozo-sc4600` 证明不锈钢滚筒是一种实际配置，不证明通用材料占比。

- 选定流：不锈钢板材
- 流属性/单位：质量 / kg
- 数量规则：记录归属到每台验收成品机器的板材发放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`orbegozo-sc4600`

#### 输出

##### 废物流

###### 不锈钢板材边角料（`drum_steel_offcuts`）

称量离开滚筒制造工序的分类边角料，并记录合金牌号与处理去向。纳入条件：厂内板材制滚筒路线。没有单独记录的处理模型时，不给予隐含的避免负担抵扣。

- 选定流：不锈钢板材边角料
- 流属性/单位：质量 / kg
- 数量规则：记录归属到每台验收成品机器的边角料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`ec-pef-2021`

### 过程：最终装配、验收与包装（`final_assembly`）

#### 输入

##### 产品流

###### 外购电动机（`assembly_motor`）

按受控配置物料清单、收货或称重记录，记录已安装电机的质量。不同驱动配置须在数据包中另行声明。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录归属到每台验收成品机器的已安装电机质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`orbegozo-sc4600`

###### 交流电（`assembly_ac_electricity`）

计量工厂装配及验收测试所归属电量。另记供电电压、地域及上游电网数据集；多个同名公开交流电流尚需审核，不能直接填入 UUID。

- 选定流：交流电
- 流属性/单位：能量 / MJ
- 数量规则：记录归属到每台验收成品机器的计量电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`ec-pef-2021`

###### 瓦楞运输纸箱（`assembly_corrugated_box`）

记录出厂前装在验收机器上的瓦楞纸箱实测质量。纳入条件：实际使用该纸箱；否则该行不适用。纸箱不计入机器净质量 M。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录归属到每台验收成品机器的纸箱质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`ec-pef-2021`

#### 输出

##### 产品流

###### 验收完整离心干衣机（`finished_drier`）

称量已验收且配置已声明的完整机器，不含运输包装及散装备件。记录序列号或批次及签署的验收结果。M 是实际净质量，不是类别默认数值。

- 选定流：离心干衣机 `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用工厂活动 | 优先用产品与工序专属物料清单、电表及废物记录，把离心干衣机路线与其他产品分开，之后才考虑分配共用负担。 | `ec-pef-2021` |
| `allocation_physical` | 无法拆分的共用活动 | 无法拆分时采用有因果关系的实测物理驱动量，例如分配共用电力的实测设备工时；保存分子、分母、期间及敏感性，不采用固定类别系数。 | `ec-pef-2021` |
| `allocation_scrap` | 板材边角料 | 按实际质量及去向报告输出废物；在接收系统中建模回收或处置，另行披露抵扣方法，不得默默从板材投入中扣除废物。 | `ec-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_assembly` | 验收完整干衣机 | 校准称重与验收记录 | 制造商；型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器；核对同一配置和验收记录。 | kg | 每台验收机器 | 报告期间 | 报告工厂 | 每台验收净质量 | 秤校准、皮重及签署的验收记录 |
| `cp_components` | `drum_fabrication`; `final_assembly` | 不锈钢板材、电机及有条件使用的瓦楞纸箱 | 受控物料清单与发料记录 | 型号；配置；序列号或批次；材料牌号；部件身份；发料与安装质量；退料；纸箱使用标记 | 将采购、发料、安装或使用及退料记录按验收配置核对。 | kg | 每生产批次 | 报告期间 | 报告工厂 | 可归属净投入质量 / 同一配置的验收成品机器数量 | 物料清单版本、收货、发料及退料记录 |
| `cp_electricity` | `final_assembly` | 装配与测试电力 | 校准电表日志 | 电表号；起止读数；电压；期间；运行工时；验收台数 | 分表计量装配及测试用电；共用时记录实测物理分配依据。 | MJ | 每生产期间 | 报告期间 | 报告工厂 | 可归属计量能量 / 同一配置的验收成品机器数量 | 电表校准与分配工作底稿 |
| `cp_scrap` | `drum_fabrication` | 不锈钢板材边角料 | 称重废料交接 | 材料牌号；废料质量；批次；去向；验收台数 | 分类称量边角料，并核对材料平衡和转移记录。 | kg | 每生产批次 | 报告期间 | 报告工厂 | 可归属边角料质量 / 同一配置的验收成品机器数量 | 秤校准、平衡表及转移单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `per_item_average` | 采集的投入及废物行 | 将某一配置及期间的可归属交换总量除以该配置已验收完整机器台数；保留实测分子和台数。 | 可归属交换总量；验收机器台数；配置；期间 | 每台验收成品机器的交换量 | `ec-pef-2021` |
| `mass_reconciliation` | `drum_stainless_sheet`; `drum_steel_offcuts`; `finished_drier` | 比较实测板材发料、滚筒已安装材料和分类边角料；在接受材料平衡前解释退料、返工及外购部件。 | 板材发料；滚筒已安装材料；边角料；退料；M | 已说明的材料平衡 | `ec-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 所有行 | 使用与验收参考机器相同的型号和配置；变更版本的物料清单分别保存。 | 受控物料清单及验收记录 |
| `dq_period` | 所有行 | 电表、发料、废料及产出记录覆盖同一报告期间，并披露缺失期间。 | 注明日期的日志与核对表 |
| `dq_identity` | UUID 未解决的行 | 保留具体流行及数量，不填入替代 Tiangong UUID；数据库发布前核实材料牌号、电网条件或废料路线。 | 直读身份审核及前景规格 |
| `dq_sources` | 上游连接 | 记录所连接数据集的供应商状态、地域、技术及时间代表性。 | 供应商记录与数据集元数据（`ec-pef-2021`） |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 确认 `finished_drier` 为一台验收完整机器，M 是同一配置经校准称量的 kg 净质量，并有签署的验收记录。 | `un-cpc-3-2025` |
| `validate_rows` | 清单 | 确认每项交换均为单一物理流、使用声明的采集协议，且按每台验收成品机器表达。 | `ec-pef-2021` |
| `validate_boundary` | 研究边界 | 检查出厂后使用和配送未纳入本工厂门口数据集，并且有条件的滚筒制造和纸箱行符合实际工艺。 | `ec-pef-2021`; `lot24-task1-2011` |
| `validate_balance` | 材料及能量记录 | 核对投入、边角料、产出、电表和验收台数；披露尚未解决的 UUID 与缺乏来源支持的定量范围。 | `ec-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明配置的离心干衣机的工厂门口前景生产数据集 |
| downstream_use | 经审核且适合复用时作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 连接采购投入的上游数据，并在下游 process 或 lifecyclemodel 模型中把验收机器作为产品产出 |
| excluded_use | 从本工厂记录宣称热力干燥性能、固定机器质量、用户使用影响或类别通用影响基准 |
| required_metadata | PCR id；CPC 参考；制造商；型号与配置；序列号或批次；容量；滚筒材料；驱动；工厂及期间；M；测试；包装；分配；上游连接 |
| required_quality_disclosure | 测量不确定性、记录覆盖、供应商与电网代表性、直接流身份缺口、废料路线及尚缺范围证据 |
| update_trigger | 机器配置、部件来源、生产路线、工厂供能、分配方法或验收规格出现实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，《CPC Ver. 3.0 Structure》，2025 年 6 月 30 日，[官方 CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv)，2026-09-27 查阅 | 仅产品分类身份 |
| `lot24-task1-2011` | literature | Öko-Institut 等，*Preparatory Studies for Eco-design Requirements of Energy-using Products, Lot 24: Professional Washing Machines, Dryers and Dishwashers, Final Report, Part: Washing Machines and Dryers, Task 1: Definition*，2011 年 5 月，[完整报告](https://ekosuunnittelu.info/wp-content/uploads/2015/09/EuP_Lot24_Wash_T1_Report_ENER_clean.pdf)，2026-09-28 查阅 | 独立离心脱水机功能及与热力干燥的边界区别 |
| `ec-pef-2021` | official_guidance | 欧盟委员会，*Annex I. Product Environmental Footprint Method*，2021 年，[完整附件](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf)，2026-09-28 查阅 | 工厂门口阶段、废物纳入、数据采集及分配顺序 |
| `orbegozo-sc4600` | handbook | Sonifer S.A.，*Spin Dryer - Instruction Manual*，SC 4600，05.22，[完整手册](https://codilamar.com/tienda/pdf/otros-manuales/SC4600.pdf)，2026-09-28 查阅 | 带孔不锈钢滚筒的完整离心干衣机实例；不推导制造范围 |

---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-incorporating-reception-apparatus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 包含接收装置的传输设备

## 1. 范围与适用性

本 PCR 覆盖作为一台已配置设备投放市场、且自身包含接收功能的完整传输设备之工厂门生产。只有当声明的产品身份与 CPC 3.0 代码 47211 一致时才适用；产品族示例包括专业广播发射接收设备、双向无线链路或无线基础设施传输设备，以及仅在该上市设备确实归入本类别时适用的基站或无线单元配置。

数据集必须按设备族、传输制式与频段、额定吞吐或端口配置、功率状态画像、机箱/板卡/射频模块配置、交付的软件功能以及工厂门交付边界分层。不得用手机、路由器、某一基站型号、纯接收设备、不含接收功能的发射设备、摄像机或仅为部件的模块代表整个类别。RAN 测量指南等产品族特定证据只适用于相应产品族。

默认前景边界包括接收的零部件与子组件、厂内装配与配置、功能及射频/网络测试、包装以及工厂门处的成品设备。上游部件生产、运输、使用、安装、场址支持设备和报废阶段属于关联的背景或下游模块，除非数据集明确纳入。声称从摇篮到坟墓覆盖的数据集应按照 `etsi-es-203199-2025` 一致补充这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-incorporating-reception-apparatus |
| classification_refs | CPC 3.0：47211，包含接收装置的传输设备（精确分类语境；映射接受由独立流程治理） |
| covered_products | 包含接收功能的完整已配置传输设备，包括符合条件的广播发射接收设备、双向无线链路以及符合条件的无线基础设施发射接收设备 |
| excluded_products | 手机和其他用户设备；归为其他网络设备的路由器或交换机；纯接收设备；不含接收功能的传输设备；电视、数字或视频摄像机；单独供应的天线、射频模块、板卡、电源单元或其他部件；除非明确纳入的场址建筑、塔架和支持系统 |
| representative_product | 工厂门处已完成、已配置并通过功能测试的发射接收设备；以声明的设备族和性能层级代表，而非以单一型号代表 |
| production_route | 外购或厂内制造的电子、射频、电源和机械子组件；装配与软件配置；校准和功能/射频/网络测试；包装和工厂门放行 |
| market_state | 工厂内生产混合的成品设备；包装和随附附件与 1 kg 设备质量分开声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明交付配置完成的包含接收装置的传输设备 |
| How much | 1 kg 设备净质量；除非交付边界另有明确声明，否则不含运输包装 |
| How well | 满足声明的发射/接收功能、制式、频段、容量或端口配置、软件功能集、测试状态和交付边界 |
| How long or cycle | 一个生产批次和一次工厂门放行；任何运行寿命及功率状态占空比均为单独声明的下游情景 |
| reference_flow_link | 功能单位关联至唯一经核验的 Tiangong 产品流，并按其 Mass 参考属性归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 包含接收装置的传输设备 `facdf572-bd31-4e3e-a4d2-eb16f9595202` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | equipment_family; classification_justification; transmission_standard_or_air_interface; frequency_band_and_channel_bandwidth; duplex_and_radio_configuration_if_applicable; rated_throughput_capacity_or_port_configuration; chassis_and_slot_configuration; board_and_rf_module_configuration; power_supply_and_cooling_configuration; measured_power_states_and_load_profile; firmware_software_feature_set_and_version; included_accessories; packaging_inclusion; factory_gate_delivery_boundary; production_geography; production_period; operating_lifetime_if_use_is_modelled |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息时参考流不完整。除非证明功能等价，否则不得跨设备族、技术、频段、容量或端口配置、软件赋能性能进行比较。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量不含运输包装的合格成品设备；随附附件及任何包装质量另行报告。 |
| `configuration_stratification` | 生产汇总 | 质量及声明的性能配置 | 每个声明层级的 kg | 不得把手机、路由器、纯接收设备、不含接收功能的发射设备或不同设备族混入本参考流平均；当设备族、制式/频段、容量/端口、机箱/板卡/射频配置、软件功能或交付边界存在实质差异时分开记录。 |
| `power_state_measurement` | 功率画像 | 有功功率和能量 | W 和 kWh | 记录测量边界、输入电压、启用的模块/端口/载波、流量或负载状态、吞吐或适用时的射频输出、状态持续时间、软件版本及环境/测试条件；采用产品族特定方法，且不得把 RAN 画像外推至非 RAN 设备。 |
| `normalization` | 所有前景清单 | 清单行特定属性 | 每 kg 的清单行单位 | 用同一配置层级和同期的合格参考产品净质量除批次总量；保留原始总量与换算因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收并检验合格的电子板卡、射频/收发与功率放大模块、电源/冷却组件、机箱/机械零件、电缆/连接器、软件/固件发布包、包装材料和公用工程 |
| starting_condition_role | 前景生产从接收声明的零部件和材料开始；除非明确纳入前景，否则其上游生产与进厂运输需要关联数据集 |
| product_classification_scope | 包含接收装置的完整传输设备；必须披露设备族资格和 CPC 47211 分类依据 |
| recursive_input_rule | 作为已测试模块、退货设备或再制造投入进入的完整同类设备，作为上游产品投入记录，除非建立独立边界的翻新过程，否则不递归拆解 |
| upstream_dataset_requirement | PCBA、射频/功率模块、机箱、电源、冷却、电缆和包装优先采用供应商特定数据集；否则采用技术、地域和时间具有代表性的背景数据集，并披露缺口 |
| disclosure | 声明设备族、配置层级、净质量边界、厂内与外购过程、场址支持分配、包装/附件纳入、软件交付、排除的生命周期阶段、截断和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_lifecycle_scope` | 数据集边界 | 默认前景纳入接收部件记录、厂内装配/配置、测试、包装和工厂门输出；识别关联的上游数据集，并单独声明任何安装、运行、维护、翻新或报废模块。 | etsi-es-203199-2025 |
| `sb_hardware_software` | 设备构成块 | 纳入适用的电子、机械、冷却、电缆、PCBA、收发、功率放大、电源及交付的软件/固件构成块；记录排除项，不得以某一设备型号替代整个类别。 | etsi-es-203199-2025 |
| `sb_delivery_boundary` | 参考产品与附件 | 区分设备净体、附件、运输包装、天线/馈线、电池、外部供电设备和场址支持物；仅当声明的工厂门交付边界包含时才纳入。 | etsi-es-203199-2025 |
| `sb_cutoff` | 所有单元过程和流 | 在可行范围内避免截断；综合应用质量、能量与环境显著性标准，记录每一项排除，并在敏感性分析中测试实质性替代方案。 | etsi-es-203199-2025 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | 部件、模块与机箱供应 | required | 始终纳入；区分外购与厂内部件 | 建立配置特定 BOM 和合格部件套件 | 每 kg 参考产品的合格部件套件 kg |
| `assembly_configuration` | 设备装配与软件配置 | required | 始终纳入 | 装配机箱、板卡、射频/功率模块、冷却和电缆；加载声明的固件/软件 | 每 kg 参考产品的已装配设备 kg |
| `test_calibration` | 功能、射频/网络测试与校准 | required | 始终纳入；采用产品族特定规程 | 验证发射和接收功能并采集测试及功率状态记录 | 每 kg 参考产品的合格已测试设备 kg |
| `packaging_release` | 包装与工厂门放行 | required | 始终纳入；声明包装是否计入 | 包装、标识并放行成品设备 | 工厂门处 1 kg 成品设备净质量 |
| `use_profile_module` | 运行功率画像模块 | conditional | 仅在数据集纳入使用阶段或提供下游使用模块时 | 按声明的占空比和运行寿命计算配置及负载特定用电 | 每 kg 参考产品每个声明情景的 kWh |

### 过程：部件、模块与机箱供应（`component_supply`）

#### 输入

##### 产品流

###### 电子板卡和射频子组件（`electronic_rf_inputs`）

记录 BOM 中 PCBA、半导体、存储器、收发模块、功率放大器、滤波器、连接器及产品族特定无线或传输模块的合格质量。

- 选定流：配置特定的电子板卡和射频子组件；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：来自 BOM、收货和领料记录的合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一配置层级每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：etsi-es-203199-2025
- 数量范围：暂定电子/射频质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：2.0
  - 单位：kg/kg 参考产品
  - 基准：每 kg 设备净成品的合格电子和射频投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 机箱、电源、冷却和电缆部件（`mechanical_power_inputs`）

记录外壳或机架机箱、搁板、紧固件、电源、风扇或冷却部件、电缆和连接器；除非随设备交付，否则天线/馈线、电池和场址支持应保持独立。

- 选定流：配置特定的机械、电源、冷却和电缆部件；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：来自 BOM、收货和领料记录的合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一配置层级每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：etsi-es-203199-2025
- 数量范围：暂定机械和电源部件质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：2.0
  - 单位：kg/kg 参考产品
  - 基准：每 kg 设备净成品的合格机械、电源、冷却和电缆投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的配置特定部件套件（`accepted_component_kit`）

将合格部件转入装配，并保留 BOM 版本和配置标识。

- 选定流：合格部件套件；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：发往装配的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`

##### 废物流

###### 被拒收的来料部件（`incoming_rejects`）

按材料或处理路线记录被拒收部件，不得以供应商退货抵减合格投入。

- 选定流：被拒收的电子或机械部件；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按处理或退货路线记录的称量或来料拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 数量范围：暂定来料拒收筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 kg 设备净成品的被拒收来料部件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：设备装配与软件配置（`assembly_configuration`）

#### 输入

##### 产品流

###### 合格部件套件投入（`component_kit_input`）

记录从来料或上游厂内部件生产转入的部件套件。

- 选定流：合格的配置特定部件套件；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：发往装配工单的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`

###### 装配与配置用电（`assembly_electricity`）

计量装配、固件/软件加载和可直接归属的产线支持用电；共享产线用电按第 7 节分配。

- 选定流：适合场址和时期的电力供应；数据集实施时选择 Tiangong UUID
- 流属性/单位：Energy / kWh
- 数量规则：计量或分表用电除以合格输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_energy`
- 来源：etsi-es-203199-2025
- 数量范围：暂定装配用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：100
  - 单位：kWh/kg 参考产品
  - 基准：每 kg 设备净成品的装配与配置用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已装配和配置的设备（`assembled_configured_equipment`）

设备转入测试时保留序列号、硬件配置、固件/软件版本和返工状态。

- 选定流：已装配的包含接收功能的传输设备；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：转入测试的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_yield`

##### 废物流

###### 装配废料和不可恢复的不合格品（`assembly_scrap`）

按处理路线分别记录金属、塑料、PCB/电子废料、电缆边角料和不可恢复设备。

- 选定流：配置特定的制造废物；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：实测外运废物，按期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 数量范围：暂定装配废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 kg 设备净成品的装配废料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：功能、射频/网络测试与校准（`test_calibration`）

#### 输入

##### 产品流

###### 测试用电（`test_electricity`）

在可行时分别计量被测设备、射频负载、环境舱和可直接归属的测试台；保留测试配置与负载状态。

- 选定流：适合场址和时期的电力供应；数据集实施时选择 Tiangong UUID
- 流属性/单位：Energy / kWh
- 数量规则：计量测试能耗除以合格测试输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_and_power_profile`
- 来源：itu-l1310-2024; etsi-en-303472-2018
- 数量范围：暂定测试用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：100
  - 单位：kWh/kg 参考产品
  - 基准：每 kg 设备净成品的功能和射频/网络测试用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格已测试设备（`accepted_tested_equipment`）

仅在发射和接收功能、声明的端口/容量、适用时的射频参数、功率状态及软件功能集通过产品族特定放行规程后记录为合格设备。

- 选定流：已测试的包含接收功能的传输设备；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：来自序列化放行记录的合格测试质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_and_power_profile`
- 来源：itu-l1310-2024; etsi-en-303472-2018

##### 废物流

##### 基本流

### 过程：包装与工厂门放行（`packaging_release`）

#### 输入

##### 产品流

###### 包装材料（`packaging_materials`）

分别记录纸板、木材、聚合物泡沫/薄膜、托盘、文档和可重复使用运输工装；其质量不得加入 1 kg 设备净质量参考。

- 选定流：配置特定的包装材料；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：包装领料记录或经核实的包装 BOM
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_release`
- 数量范围：暂定包装质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：1.0
  - 单位：kg/kg 参考产品
  - 基准：每 kg 设备净成品供应的一次性包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门成品设备（`reference_product_output`）

参考输出为合格、已配置和已测试的设备。其 1 kg 质量不含单独清单化的运输包装，也不含场址基础设施，除非交付声明明确包含。

- 选定流：包含接收装置的传输设备 `facdf572-bd31-4e3e-a4d2-eb16f9595202`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格成品设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装边角料与放行不合格品（`packaging_release_waste`）

按处理或返工路线分别记录包装边角料、损坏包装和最终放行不合格品。

- 选定流：包装和放行废物；数据集实施时选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：实测废物和不合格品质量减去有记录的返工回流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 数量范围：暂定包装/放行废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 参考产品
  - 基准：每 kg 设备净成品的包装和放行废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：运行功率画像模块（`use_profile_module`）

#### 输入

##### 产品流

###### 按声明功率状态计的运行用电（`operational_electricity`）

当纳入使用模块时，根据实测功率和声明的时间/负载画像计算用电。RAN 特定的容量、覆盖和场址参数仅适用于符合条件的 RAN 设备；其他产品族采用其适用的同类别测试方法。

- 选定流：声明地域和时期的电力供应；数据集实施时选择 Tiangong UUID
- 流属性/单位：Energy / kWh
- 数量规则：在声明运行寿命内，对实测状态功率乘以状态持续时间求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：声明运行情景内每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_and_power_profile`
- 来源：itu-l1310-2024; etsi-en-303472-2018; etsi-es-203199-2025

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | 共享装配、测试和包装线 | 通过分表计量、工单跟踪或按配置层级拆分过程来避免分配。 | etsi-es-203199-2025 |
| `alloc_physical` | 无法避免的共享公用工程和设施负荷 | 使用反映因果关系的物理驱动量，例如 PCB 作业的板面积、一般部件的合格质量、机器或测试台时间、占用机架/产线时间或实测能耗。 | etsi-es-203199-2025 |
| `alloc_economic_fallback` | 缺乏可靠物理关系的共享负荷 | 只有在过程拆分和物理因果关系均不可行时才采用经济分配；披露价值并进行敏感性分析。 | etsi-es-203199-2025 |
| `alloc_scrap_rework` | 废料、供应商退货、返工和回收 | 保持返工回路与退货部件可见；除非明确声明回收分配方法和被替代产品，否则不得给予回收材料抵扣。 | etsi-es-203199-2025 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_mass` | `component_supply` | BOM 投入、合格套件和产品净质量 | BOM 版本、采购/领料记录与经校准称量 | model/configuration_id; serial_or_batch; component_family; part_number; board_area_if_available; rf_module_type; quantity; measured_mass_kg; supplier; acceptance_status; included_accessory_flag | 按生产工单核对工程 BOM、收货、库房领料和称量记录 | kg 和 item | 每个生产工单和 BOM 版本 | 与参考输出同期 | 每个制造场址和配置层级 | 汇总合格投入质量；除以合格参考产品净质量；报告 BOM 质量覆盖率 | BOM 审批、校准记录、收货核对和未解释质量审查 |
| `cp_manufacturing_energy` | `assembly_configuration` | 装配/配置用电 | 分表、设备电表或经分配的设施电表 | meter_id; timestamp; opening_kWh; closing_kWh; process_area; configuration_id; accepted_output_kg; allocation_driver | 优先分表计量；否则核对设施电表与有记录的物理分配驱动量 | kWh | 连续或每个生产工单 | 代表性生产期，通常至少覆盖一个完整批次 | 每个场址和产线 | 净 kWh 除以同层级合格输出 kg | 电表校准、停机日志、分配核对和能量覆盖率 |
| `cp_test_and_power_profile` | `test_calibration` | 测试能耗、放行结果和功率状态 | 测试系统日志和经校准功率测量 | equipment_family; standard; band; bandwidth; ports_or_carriers; throughput_or_rf_output; enabled_modules; software_version; input_voltage; ambient_conditions; state_id; load_level; power_W; duration_h; test_energy_kWh; pass_fail | 应用适用的同产品族方法；保留原始读数和配置；RAN 特定字段仅用于符合条件的 RAN 设备 | W、kWh、bit/s 或声明的射频/容量单位 | 每个放行配置和软件版本；稳定配置至少测一次功率画像，并在相关变更后重测 | 完整测试周期和声明的占空比证据 | 每个测试边界和配置 | 测试 kWh/合格 kg；使用能耗 = sum(power_W × duration_h)/1000，再按参考质量归一化 | 仪器校准、不可变测试日志、状态覆盖、负载发生器/计数器记录和放行审批 |
| `cp_packaging_and_release` | `packaging_release` | 包装投入和合格输出 | 包装 BOM、库房领料、发运和最终称量 | configuration_id; packaging_material; quantity; mass_kg; reusable_flag; accessory_mass_kg; net_equipment_mass_kg; gross_shipment_mass_kg; release_status | 核对包装 BOM 与发运质量；分别保留净体、附件和包装质量 | kg 和 item | 每个包装规范和生产工单 | 与参考输出同期 | 每个包装场址 | 分别汇总一次性包装质量和合格设备净质量；包装按设备净质量归一化 | 批准的包装规范、秤具校准和发运核对 |
| `cp_production_yield` | `assembly_configuration` | 装配/测试成品率与返工 | 制造执行和质量记录 | configuration_id; started_units; accepted_units; reworked_units; scrapped_units; masses_kg; rework_route; disposition | 核对序列化工单和质量处置记录 | kg 和 item | 每个生产工单 | 与清单相同批次 | 每条产线和场址 | 报告投产总量、合格输出、返工回路和废料，不相互抵减 | 序列追溯和质量平衡核对 |
| `cp_waste_records` | 所有生产过程 | 不合格品、废料和包装废物 | 称量票、废物联单、供应商退货和库存记录 | waste_type; material_family; mass_kg; treatment_route; supplier_return; opening_stock; closing_stock; date | 核对产生、库存、退回和外运废物 | kg | 每次外运并按月核对 | 与生产清单同期 | 每个场址 | 产生废物 = 外运 + 期末库存 - 期初库存 + 供应商退货，并按路线分开 | 秤具校准、废物联单和核对差异 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 所有质量行 | 归一化数量 = 配置层级清单行质量 / 合格参考产品净质量 | 清单行总 kg；合格设备净 kg | kg/kg 参考产品 | etsi-es-203199-2025 |
| `calc_energy_normalization` | 装配与测试用电 | 归一化用电 = 可归属净表计 kWh / 合格参考产品净质量 | 起止 kWh；排除项；分配驱动量；合格 kg | kWh/kg 参考产品 | etsi-es-203199-2025 |
| `calc_power_profile_energy` | 可选使用模块 | 情景用电 = 各状态(power_W × duration_h)之和 / 1000；同时报告吞吐、端口、射频输出或覆盖/负载语境 | 状态功率；持续时间；配置；服务/负载数量；运行寿命 | 每 kg 参考产品每个声明情景的 kWh | itu-l1310-2024; etsi-en-303472-2018 |
| `calc_configuration_mix` | 多型号生产混合 | 仅在声明的等价层级内汇总；按合格净质量加权并报告每个成员及份额。限定信息不等价时发布独立数据集。 | 层级输出和限定信息 | 已披露的生产混合 | itu-l1310-2024; etsi-es-203199-2025 |
| `calc_mass_balance` | 每个生产批次 | 将合格输出 + 废物 + 期末在制品与合格材料投入 + 期初在制品比较；调查并披露未解释差额，不得强制闭合。 | BOM 投入、输出、废物、在制品 | 质量平衡差额和完整性标志 | etsi-es-203199-2025 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考流 | 核验精确 CPC 47211 产品身份，并保留所选 Tiangong 产品流、Mass 属性、Units of mass 和 kg 参考；排除 CPC 47212、CPC 47223、用户设备、纯接收设备和仅部件候选。 | un-cpc-v3-2025 和 Tiangong UUID 读回 |
| `dq_stratification` | 所有记录 | 报告设备族、技术/频段、容量/端口、机箱/板卡/射频配置、功率画像、软件版本和交付边界；不得在未披露平均中隐藏实质异质性。 | 配置/BOM/测试记录和 itu-l1310-2024 |
| `dq_temporal_technology` | 一手和二手数据 | 使用代表生产期、地域和技术的数据；披露数据年龄、供应商覆盖、软件版本、代理和截断。 | etsi-es-203199-2025 |
| `dq_power_profile` | 功率和使用数据 | 采用经校准测量，并记录边界、负载状态、占空比和性能；RAN 特定方法仅适用于符合条件的 RAN 配置。 | 校准和测试证据；itu-l1310-2024；etsi-en-303472-2018 |
| `dq_estimates` | 所有推理范围 | `reasoned_estimate` 范围仅作为宽泛、可替换的 QA 筛选；未经审查证据不得成为固定默认值或发布关键允许范围。 | 范围标签、审查记录和替换证据 |
| `dq_completeness` | 前景清单 | 核对 BOM 质量、能源计量、输出、返工和废物；量化一手数据覆盖率，并记录每个被排除的过程或流。 | 质量/能量核对和 etsi-es-203199-2025 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 参考产品 UUID、Mass 属性 UUID、Units of mass UUID、kg 单位或 CPC 47211 身份与核验记录不符时失败。 | un-cpc-v3-2025 |
| `val_required_qualifiers` | 数据集元数据 | 缺少设备族、制式/频段、容量或端口、机箱/板卡/射频配置、功率画像、软件功能/版本或交付边界时失败。 | itu-l1310-2024; etsi-es-203199-2025 |
| `val_scope_exclusions` | 产品范围 | 当手机、路由器/交换机、纯接收设备、不含接收功能的发射设备、摄像机、仅部件模块或某一狭窄型号在没有明确合格层级和分类依据时被表示为完整类别，则失败。 | un-cpc-v3-2025; etsi-es-203199-2025 |
| `val_inventory_reconciliation` | 前景清单 | 如果投入、合格输出、返工、废物、能耗周期或归一化分母无法在同一场址、时期和配置层级核对，则失败。 | etsi-es-203199-2025 |
| `val_power_comparability` | 测试和使用结果 | 除非技术、配置、性能功能、测量边界、负载画像和软件状态等价，或差异已归一化并披露，否则跨产品比较失败。 | itu-l1310-2024; etsi-en-303472-2018 |
| `val_reasoned_estimates` | 暂定范围 | 任何推理估算被用作数据集数值时发出警告并标记需审查；若发布关键使用前未替换或未经明确审查接受，则失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门前景生产数据包；审查后可作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于 `process` 和 `lifecyclemodel` 投影的生产清单；提供功率状态情景数据时可带配置特定使用模块 |
| allowed_use | 建模声明的设备族/配置层级和已披露生产混合；仅比较功能等价配置 |
| excluded_use | 通用于手机、路由器、纯接收设备、不含接收功能的发射设备、摄像机或所有基站；未披露的跨产品族平均；缺少实测功率/负载/寿命语境的使用阶段声明 |
| required_metadata | 全部必需限定信息；场址与时期；净体/附件/包装质量边界；BOM 覆盖率；厂内/外购路线；计量与分配方法；来源及代理覆盖；软件和测试版本 |
| required_quality_disclosure | 一手数据覆盖率、质量与能量核对、截断、代理、推理估算、不确定性、供应商覆盖、不合格/返工设备、分配和产品族特定证据限制 |
| update_trigger | 设备族、制式/频段、端口/容量、机箱/板卡/射频或电源配置、影响性能或能耗的固件/软件功能、供应商/BOM、生产场址、交付边界、测试方法、运行画像或来源证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | 数据集（`dataset`） | 联合国统计司，《Central Product Classification Version 3.0 Structure》，2025-06-30，代码 47211。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-09） | 官方分类身份及相邻 CPC 产品类别排除 |
| `etsi-es-203199-2025` | 标准（`standard`） | ETSI ES 203 199 V1.4.1 (2025-01)，*Methodology for environmental Life Cycle Assessment (LCA) of Information and Communication Technology (ICT) goods, networks and services*。https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf（检索于 2026-08-09） | ICT 生命周期边界、功能性能、硬件/软件与部件/模块分解、生产过程、截断、分配、数据采集和质量 |
| `itu-l1310-2024` | 官方指南（`official_guidance`） | ITU-T Recommendation L.1310 (09/2024)，*Energy efficiency metrics and measurement methods for telecommunication equipment*。https://www.itu.int/epublications/publication/itu-t-l-1310-2024-09-energy-efficiency-metrics-and-measurement-methods-for-telecommunication-equipment（检索于 2026-08-09） | 同类别可比性、模块化配置、吞吐/端口和负载比例功率状态测量 |
| `etsi-en-303472-2018` | 标准（`standard`） | ETSI EN 303 472 V1.1.1 (2018-10)，*Energy Efficiency measurement methodology and metrics for RAN equipment*。https://www.etsi.org/deliver/etsi_en/303400_303499/303472/01.01.01_60/en_303472v010101p.pdf（检索于 2026-08-09） | 仅适用于 RAN/基站产品族的设备/场址配置、流量、容量/覆盖和能耗测量；不作为其他产品族证据 |

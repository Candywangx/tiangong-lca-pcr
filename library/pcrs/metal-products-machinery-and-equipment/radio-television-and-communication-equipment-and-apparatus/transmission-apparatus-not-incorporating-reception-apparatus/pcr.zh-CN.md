---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-not-incorporating-reception-apparatus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 不含接收装置的传输设备

## 1. 范围与适用性

本 PCR 适用于工厂生产的独立传输设备，其预期功能是在不集成接收装置的情况下生成并发射射频信号。范围包括用于广播、电视广播、固定无线或微波链路以及其他专用发射基础设施的可配置纯发射设备，交付设备必须仅具发射功能。本规则覆盖整个产品类别而非某个命名型号：每个前景数据包应代表已声明的产品系列生产组合，或明确标注的具体配置，不得宣称单一型号代表整个类别。

默认边界始于采购的零部件、模块、材料和服务到达制造商厂门，止于制造商厂门处已经完工、配置、测试并可发运的发射设备。制造商实施或控制的印刷电路板装配、射频功率放大器集成、电源转换、冷却硬件、机箱或机柜集成、固件加载、测试和包装均应纳入。厂外运输、安装、天线、塔桅、建筑、外部馈线和运行用电不在默认生产边界内；研究纳入这些阶段时应另行建模。

集成接收机、收发功能、监测接收机、广播或电视接收功能、摄像机、录像设备、路由器、基站接收链或通用网络通信功能的设备均不适用。除非另建零部件数据集，备件模块和现场替换件不是参考产品。必须声明预期用途、传输制式与频段、额定射频输出功率、输入功率和占空比/负载曲线、射频功放技术、电源拓扑、冷却方式、机箱和板卡配置、随附附件及交付状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-not-incorporating-reception-apparatus |
| classification_refs | CPC 3.0：47212，不含接收装置的传输设备（exact） |
| covered_products | 独立纯发射广播或电视发射机；纯发射固定无线和微波链路设备；以机柜、机架、机箱或模块化系统交付的专用纯发射射频基础设施 |
| excluded_products | 集成接收或收发功能的设备；广播或电视接收机；摄像与录像设备；带接收链的蜂窝基站或网络设备；天线、馈线系统、塔桅、建筑、场址土建和独立替换部件 |
| representative_product | 已声明的完工、配置并测试合格的纯发射设备生产组合，不是命名的单一型号 |
| production_route | 采购电子、射频、电源、冷却和机械零部件 -> 板卡和子组件准备 -> 射频功率与冷却集成 -> 机箱/系统集成 -> 配置与测试 -> 包装和发运准备 |
| market_state | 制造商厂门处完工、测试合格并可发运的设备；净设备质量为参考数量，包装单独列入清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产有意不集成接收装置的完工传输设备 |
| How much | 1 kg 完工设备净质量，不含运输包装 |
| How well | 已按声明的用途、传输制式、频段、额定射频输出和交付验收准则完成配置与测试 |
| How long or cycle | 一个声明的生产期间或批次；本生产参考流不包含运行寿命 |
| reference_flow_link | Transmission apparatus not incorporating reception apparatus `5a185479-beab-4b9a-825b-371e816dbc58` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 不包含接收装置的传输装置 `5a185479-beab-4b9a-825b-371e816dbc58` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 预期用途；纯发射确认及被排除的接收功能；传输制式或波形；指定频段；额定射频输出功率；声明负载点的输入功率；占空比或业务/负载曲线；射频功放技术和模块数量；电源拓扑和冗余；风冷、液冷或其他冷却配置；机箱、机架、机柜和板卡配置；随附激励器、控制器、滤波器、合路器、电缆、附件和备件；净设备质量；包装质量；产品系列或配置覆盖；生产地域和期间；固件与测试状态；交付边界和发运状态 |

构建前景数据包时，`必需限定信息` 中的项目应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息会使参考流不完整，并阻止发射设备数据集之间的比较。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按验收合格完工设备的实测净质量归一化；运输包装不得计入参考产品质量，包装应作为独立投入记录。 |
| `shipment_mass_reconciliation` | 可发运产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将发运毛重与净设备、随附附件和备件以及包装进行核对，并披露差额。 |
| `manufacturing_energy` | 装配、集成和测试用电 | Energy | kWh | 尽可能按过程计量电力，保留电力结构和计量期间；不得把运行射频功率转换成制造能耗。 |
| `rf_performance_qualifiers` | 额定射频输出、输入功率和占空比/负载曲线 | Power and time or dimensionless duty fraction | W or kW; h; % or fraction | 保留声明的测量条件、波形或制式、频段、负载点、辅助冷却边界和占空比/负载曲线；这些是性能限定信息，不是质量流换算。 |
| `component_mass_balance` | 物料清单和过程输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 统一湿态/干态及净重/毛重约定，并将已安装部件、过程损失、废品和合格输出核对到参考流基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的电子元件、PCBA、射频器件、电源、冷却硬件、金属结构、电缆、包装、公用工程和服务已到达制造商收货厂门 |
| starting_condition_role | 前景从制造商控制的装配与集成开始；采购投入的上游负荷保留在已接受的供应商数据集中 |
| product_classification_scope | 符合 CPC 3.0 子类 47212 语义边界的纯发射设备；分类本身不能推翻无接收功能的产品检验 |
| recursive_input_rule | 同类别采购的纯发射设备或完整发射机模块作为上游产品投入记录并链接独立供应商数据集；除非有原始部件数据，否则不递归拆分 |
| upstream_dataset_requirement | 对 PCBA、射频半导体/模块、电源、冷却系统、金属机箱或机柜、电缆、包装和能源采用技术、地域与期间有代表性的供应商数据集；披露代理和黑箱模块 |
| disclosure | 声明纳入的制造场址和过程、产品系列或配置覆盖、截断、分配、上游代理、制式/频段/功率/占空比限定信息、硬件配置、包装、随附附件或备件及准确交付边界 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_production` | 制造商控制的生产 | 纳入适用的部件生产数据、PCBA/模块装配、射频功率与冷却集成、机箱/系统装配、配置、测试、与产品直接相关的仓储及包装。 | `etsi-es-203199-2025` |
| `boundary_black_box_inputs` | 采购的完整模块 | 保留黑箱射频模块、电源单元、冷却单元及其他完整模块的供应商从摇篮到厂门负荷；披露质量、数量、技术、供应商地域和代理选择。 | `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025` |
| `boundary_use_and_site` | 使用与安装 | 默认生产数据集不含运行用电、交付后冷却能耗、安装、天线与馈线系统、塔桅、建筑和场址土建；下游建模时使用声明的输入功率和占空比/负载曲线，并单独保留这些负荷。 | `etsi-es-203199-2025`; `itu-t-l1410-2024` |
| `boundary_no_receiver` | 产品身份 | 拒绝任何包含集成接收或收发功能设备的产品系列组合；应记录附带的监测或控制接口，并证明其不构成信号接收功能。 | `unsd-cpc-v3-2025` |
| `boundary_cutoff_disclosure` | 截断决定 | 在可行范围内避免截断；累计评估质量、能源和环境显著性，记录每个被排除过程或流；即使质量占比较小，也应保留可能显著的射频半导体、PCBA、电力电子、冷却硬件和金属。 | `etsi-es-203199-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pcba_assembly` | 印刷电路板与控制/激励器装配 | required | 始终纳入；完全外包时采用供应商 PCBA 数据集 | 前景电子装配或链接供应商的黑箱准备 | 每 1 kg 验收合格参考产品 |
| `rf_power_cooling_integration` | 射频功率、电源与冷却集成 | required | 对声明的硬件配置始终纳入 | 前景射频链与热管理集成 | 每 1 kg 验收合格参考产品 |
| `chassis_system_assembly` | 机箱、机架、机柜与系统装配 | required | 始终纳入 | 前景机械与电气系统集成 | 每 1 kg 验收合格参考产品 |
| `configuration_test` | 固件配置、校准和验收测试 | required | 始终纳入 | 前景配置和质量验收 | 每 1 kg 验收合格参考产品 |
| `packaging_dispatch` | 包装和发运准备 | required | 对声明的可发运状态始终纳入 | 前景包装和最终质量核对 | 每 1 kg 验收合格参考产品 |
| `outbound_delivery` | 制造商厂门外运输 | excluded_by_default | 仅在单独披露的交付场址扩展中纳入 | 下游运输扩展 | 吨公里或声明的发运服务 |

### 过程：印刷电路板与控制/激励器装配（`pcba_assembly`）

#### 输入

##### 产品流

###### 电子元件、裸板和采购 PCBA（`electronic_parts_pcba`）

记录进入装配边界的裸板和已贴装板、集成电路、射频小信号部件、控制器、显示器、连接器及采购 PCBA 的质量。构建前景数据集时选择具体 Tiangong 产品流。

- 选定流：产品特定的电子元件、裸印刷电路板和 PCBA
- 流属性/单位：Mass / kg
- 数量规则：收货质量减去退回或未使用材料，并与已安装板卡质量和板卡过程废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定电子部件筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：0.80
  - 单位：kg/kg reference product
  - 基准：等待经评审产品系列 BOM 证据的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### PCBA 装配用电（`pcba_electricity`）

记录焊接、回流、清洗、检查、返工和可直接归属装配支持的计量电力。

- 选定流：场址和期间特定的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：过程计量电力或有记录的产线电力分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定 PCBA 能耗筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：50
  - 单位：kWh/kg reference product
  - 基准：等待生产线计量证据的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格控制、激励器和信号处理板（`accepted_pcba_modules`）

记录转入系统集成的合格装配板，并与投入部件和废弃材料核对。

- 选定流：产品特定的合格 PCBA 模块
- 流属性/单位：Mass / kg
- 数量规则：转入下游集成的实测合格板卡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`etsi-es-203199-2025`

##### 废物流

###### 不合格板卡、焊料残余和电子装配废物（`pcba_process_waste`）

按实测质量和处理路线分别记录废物流，不得把回收材料与投入质量相抵。

- 选定流：按材料和处理路线选择的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：离开 PCBA 装配过程的实测不合格及废弃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_waste`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定 PCBA 废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg reference product
  - 基准：等待批次良率和废物票据证据的宽泛筛选界限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接计量的装配排放（`pcba_direct_emissions`）

按物质特定 Tiangong 基本流记录适用的场址实测排放；不得创建通用排放总量。

- 选定流：数据集构建时选择的物质特定 Tiangong 基本流
- 流属性/单位：物质特定属性 / 兼容单位
- 数量规则：可归属于本过程的实测或许可报告直接排放；只有记录不适用时方可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`etsi-es-203199-2025`

### 过程：射频功率、电源与冷却集成（`rf_power_cooling_integration`）

#### 输入

##### 产品流

###### 射频功率放大器器件和模块（`rf_power_modules`）

记录声明射频链中的射频晶体管或电子管、功放板/模块、驱动器、合路器、滤波器、耦合器和热扩散件。

- 选定流：产品特定的射频功率器件和功放模块
- 流属性/单位：Mass / kg
- 数量规则：声明射频功放链的已安装 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- 数量范围：可替换的暂定射频链质量筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.02
  - 上限：0.60
  - 单位：kg/kg reference product
  - 基准：等待产品系列 BOM 证据的宽泛类别估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电源和配电硬件（`power_supply_hardware`）

记录整流器、变换器、变压器、配电单元、冗余模块、母排和随附控制硬件。

- 选定流：产品特定的电源和配电硬件
- 流属性/单位：Mass / kg
- 数量规则：已安装 BOM 质量，包括冗余单元和交付状态包含的外部电源柜
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- 数量范围：可替换的暂定电源硬件筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：0.40
  - 单位：kg/kg reference product
  - 基准：等待产品系列 BOM 证据的宽泛类别估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却和热管理硬件（`cooling_hardware`）

按声明的风冷或液冷配置记录风扇、泵、冷板、换热器、散热器、交付时充注的冷却液、风道和控制器。

- 选定流：产品特定的冷却和热管理硬件
- 流属性/单位：Mass / kg
- 数量规则：已安装质量加上可发运产品包含的初始冷却液充注量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- 数量范围：可替换的暂定冷却硬件筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：0.50
  - 单位：kg/kg reference product
  - 基准：等待声明冷却 BOM 证据的宽泛类别估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 射频集成用电（`rf_integration_electricity`）

记录模块装配、电源系统集成、冷却液充注及最终验收前直接检查的电力。

- 选定流：场址和期间特定的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：过程计量电力或有记录的集成产线电力分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定射频集成能耗估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：30
  - 单位：kWh/kg reference product
  - 基准：等待计量集成证据的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 集成射频功率和热管理子系统（`integrated_rf_subsystem`）

记录转入机箱/系统装配的合格射频、电源转换和冷却子系统。

- 选定流：产品特定的集成射频功率和热管理子系统
- 流属性/单位：Mass / kg
- 数量规则：与已安装投入硬件和废品核对的实测合格子系统质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_mass`
- 来源：`rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`

##### 废物流

###### 不合格射频、电源和冷却部件（`rf_integration_waste`）

按材料和处理路线分别记录不合格模块、金属边角料、冷却液损失及其他废物。

- 选定流：按材料和处理路线选择的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：离开集成过程的实测废物和不合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_waste`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定集成废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg reference product
  - 基准：等待良率和废物票据证据的宽泛筛选界限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：机箱、机架、机柜与系统装配（`chassis_system_assembly`）

#### 输入

##### 产品流

###### 机箱、机柜、机架和结构金属件（`enclosure_metalwork`）

记录交付状态中包含的板金件、框架、机架、机柜、紧固件、屏蔽件和机械支撑。

- 选定流：产品特定的外壳和结构金属件
- 流属性/单位：Mass / kg
- 数量规则：扣除边角料和退回材料的已安装 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定外壳质量筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：0.85
  - 单位：kg/kg reference product
  - 基准：等待产品系列 BOM 证据的宽泛类别估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电子板卡和射频/电源/冷却子系统（`system_subassemblies`）

记录从上游前景过程转入的合格板卡和子系统，或作为完整黑箱模块采购的部件。

- 选定流：产品特定的电子和射频/电源/冷却子组件
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量；避免内部转移与采购黑箱投入重复计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_mass`
- 来源：`etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`

###### 电缆、连接器、滤波器、合路器和随附附件（`cables_and_accessories`）

记录合格产品包含的内部电缆、连接器、射频滤波器和合路器、控制接口及发运附件。

- 选定流：产品特定的电缆、连接器、射频网络硬件和随附附件
- 流属性/单位：Mass / kg
- 数量规则：已安装和随附附件 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`

###### 系统装配用电（`system_assembly_electricity`）

记录机械装配、布线、固件加载和可直接归属物料搬运的电力。

- 选定流：场址和期间特定的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：过程计量电力或有记录的装配产线电力分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定系统装配能耗估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：30
  - 单位：kWh/kg reference product
  - 基准：等待计量装配证据的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收测试前的集成发射设备（`integrated_transmitter`）

记录转入配置和验收测试的已装配纯发射系统。

- 选定流：不包含接收装置的传输装置 `5a185479-beab-4b9a-825b-371e816dbc58`
- 流属性/单位：Mass / kg
- 数量规则：转入测试的已装配设备实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_mass`
- 来源：`unsd-cpc-v3-2025`

##### 废物流

###### 装配废品和金属边角料（`system_assembly_waste`）

按材料和去向分别记录不合格部件、电缆和金属边角料及其他废物。

- 选定流：按材料和处理路线选择的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：离开系统装配的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_waste`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定装配废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg reference product
  - 基准：等待批次良率和废物票据证据的宽泛筛选界限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：固件配置、校准和验收测试（`configuration_test`）

#### 输入

##### 产品流

###### 进入测试的集成发射设备（`transmitter_to_test`）

记录进入测试序列的每台已装配设备净质量和配置身份。

- 选定流：不包含接收装置的传输装置 `5a185479-beab-4b9a-825b-371e816dbc58`
- 流属性/单位：Mass / kg
- 数量规则：与序列号、配置或生产批次记录关联的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_and_test`
- 来源：`unsd-cpc-v3-2025`

###### 包含声明冷却辅助设备的测试用电（`acceptance_test_electricity`）

记录老化、校准、额定负载和低负载测试及声明测试边界内冷却辅助设备的计量电力。有电表数据时不得用额定输入功率乘以假设时长。

- 选定流：场址和期间特定的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：测试单元计量电力减去有记录的无关基线能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_and_test`
- 来源：`etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`
- 数量范围：可替换的暂定验收测试能耗估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：100
  - 单位：kWh/kg reference product
  - 基准：覆盖低功率和高功率测试制度、等待测试计量证据的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的纯发射设备（`accepted_tested_transmitter`）

仅记录通过声明配置和验收准则的设备，包括纯发射身份、制式/频段、额定射频输出、输入功率、占空比/负载曲线和冷却边界。

- 选定流：不包含接收装置的传输装置 `5a185479-beab-4b9a-825b-371e816dbc58`
- 流属性/单位：Mass / kg
- 数量规则：验收合格设备的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_and_test`
- 来源：`unsd-cpc-v3-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025`

##### 废物流

###### 测试失败设备和替换部件（`test_failures_and_rework_waste`）

记录失败设备、测试期间替换的部件及其返工、再用或废物去向；不得把返工后合格设备同时计作废物和产品。

- 选定流：按实际处置选择的产品或废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：根据测试和返工记录按最终处置计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_waste`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定测试失败筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg reference product
  - 基准：等待测试良率和处置记录的宽泛筛选界限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：包装和发运准备（`packaging_dispatch`）

#### 输入

##### 产品流

###### 进入包装的验收合格设备（`tested_product_to_packaging`）

记录进入包装的合格产品净质量及随附附件/备件配置。

- 选定流：不包含接收装置的传输装置 `5a185479-beab-4b9a-825b-371e816dbc58`
- 流属性/单位：Mass / kg
- 数量规则：包装前的实测净设备和随附附件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_and_packaging`
- 来源：`unsd-cpc-v3-2025`

###### 包装材料（`packaging_materials`）

在数据允许时分别记录木材、钢材、纸板、纸张、塑料、缓冲材料、托盘和可重复使用运输框架。

- 选定流：数据集构建时选择的材料特定包装产品流
- 流属性/单位：Mass / kg
- 数量规则：领用包装减去退回的可复用包装，按材料计量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_and_packaging`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定包装质量估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：0.60
  - 单位：kg/kg reference product
  - 基准：等待发运记录和可复用包装证据的宽泛类别估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可发运参考产品（`reference_product_output`）

记录制造商厂门处完工、测试合格并可发运的纯发射设备净质量。包装仍为独立清单投入，不计入 1 kg 参考数量。

- 选定流：不包含接收装置的传输装置 `5a185479-beab-4b9a-825b-371e816dbc58`
- 流属性/单位：Mass / kg
- 数量规则：由实测合格净设备质量归一化得到的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：制造商厂门处 1 kg 可发运净设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-v3-2025`

##### 废物流

###### 包装边角料和破损包装（`packaging_waste`）

按材料和处理路线记录发运前产生的包装废物。

- 选定流：按材料和处理路线选择的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：离开发运准备过程的实测包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_waste`
- 来源：`etsi-es-203199-2025`
- 数量范围：可替换的暂定包装废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg reference product
  - 基准：等待包装领用和废物记录的宽泛筛选界限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_first` | 产品系列、配置和共享产线 | 优先采用产品特定 BOM、序列号或批次记录、过程细分和直接计量，在不分配的情况下归属负荷。 | `etsi-es-203199-2025` |
| `allocation_shared_operations` | 共享装配、测试、设施和支持负荷 | 无法细分时，采用反映负荷成因并有记录的物理驱动因素，例如计量设备小时、测试单元能耗、机器时间、加工板面积或合格产品质量；披露驱动因素并一致应用。 | `etsi-es-203199-2025` |
| `allocation_family_mix` | 生产组合数据集 | 按声明期间的合格净生产质量加权配置；另行披露配置数量和额定功率区间，避免高质量或高功率配置被平均值掩盖。 | `etsi-es-203199-2025` |
| `allocation_recycling` | 生产废料和可复用包装 | 报告废物毛量和去向；仅按声明的背景数据集约定应用回收负荷或信用，不得从前景投入中直接扣减回收质量或收入。 | `etsi-es-203199-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_mass` | `pcba_assembly`; `rf_power_cooling_integration`; `chassis_system_assembly` | 已安装部件、模块、板卡、金属结构、冷却液、附件和合格子组件 | 已批准 BOM、物料领退记录、秤重和生产转移记录 | configuration_id; part_id; part_description; supplier; quantity; unit_mass; issued_mass; returned_mass; installed_mass; lot; site; date | 导出受控 BOM 和物料交易；用校准秤核查代表性物料；核对转移和黑箱模块 | kg and piece | 每次配置修订和生产批次；按报告期汇总 | 完整声明报告期 | 每个纳入的制造与集成场址 | 按配置汇总已安装质量并按合格生产质量加权；内部转移与外部投入分开 | BOM 修订批准、校准记录、供应商声明、收货记录和质量平衡核对 |
| `cp_process_energy` | `pcba_assembly`; `rf_power_cooling_integration`; `chassis_system_assembly` | 直接和共享制造用电 | 分表、设备日志、公用工程区间和生产记录 | meter_id; start_time; end_time; kWh; baseline_kWh; process; line; configuration_id; accepted_mass; allocation_driver | 优先直接分表；否则扣除有记录的空闲基线，并用声明物理驱动因素分配共享能耗 | kWh | 连续或逐批；按月及报告期汇总 | 完整声明报告期，包含季节性生产变化 | 每条纳入的生产线和场址 | 汇总可归属 kWh 并除以合格净参考产品质量；保留场址电力供应 | 电表校准、区间完整性、基线研究、生产总量和分配工作表 |
| `cp_yield_and_waste` | 所有必需过程 | 废品、返工、边角料、残余、冷却液损失和废物去向 | 良率日志、不合格记录、称重票、废物联单和回收商收据 | process_id; material; quantity; mass; rework_status; final_disposition; waste_flow; treatment_route; date | 将不合格物料链接至最终处置；按材料称重，避免返工合格设备重复计算 | kg and piece | 每批或每次废物发运；按报告期汇总 | 完整声明报告期 | 每个纳入的生产和测试场址 | 按材料和去向汇总最终废物并除以合格净产品质量 | 不合格关闭记录、称重票、联单、回收收据和合格输出核对 |
| `cp_configuration_and_test` | `configuration_test` | 身份、射频性能限定信息、测试时长、电力和验收 | 配置控制、序列号/批次记录、测试脚本、校准射频/功率仪表和测试单元电表 | serial_or_lot; intended_use; no_receiver_confirmation; standard_waveform; frequency_band; rated_rf_output; input_power_by_load; duty_profile; pa_technology; psu_topology; cooling_boundary; start_time; end_time; test_kWh; pass_fail | 执行批准测试计划；在声明负载点记录射频输出和交流输入；计量纳入的冷却辅助设备；结果链接配置 | W or kW, kWh, h, %, and categorical fields | 每个合格配置和生产批次 | 完整声明报告期 | 每个纳入的测试单元和场址 | 按合格设备汇总测试电力；保留功率/负载点分布和失败情况 | 校准证书、批准测试程序、原始测试文件、配置批准和合格/不合格记录 |
| `cp_dispatch_and_packaging` | `packaging_dispatch` | 净设备、附件、备件、包装和交付状态 | 装箱单、秤重、包装领用和发运放行 | shipment_id; configuration_id; net_equipment_mass; accessories_mass; spares_mass; packaging_material; packaging_mass; reusable_flag; gross_mass; delivery_boundary; incoterm_or_equivalent; destination_if_included | 称量净产品和发运毛重；核对材料特定包装和随附附件/备件 | kg | 每次发运；按报告期汇总 | 完整声明报告期 | 每个纳入的发运场址 | 净设备质量定义参考产品；包装和随附附件保持单独报告 | 校准秤记录、签署装箱单、包装领用记录和发运放行 |
| `cp_direct_emissions` | 所有必需过程 | 跨越环境边界的直接排放 | 适用的烟道或作业控制、许可报告、材料损失和场址环境记录 | substance; Tiangong_flow_id; medium; measured_amount; unit; method; process; period; allocation_driver | 使用物质特定实测或正式报告数据；记录不适用而非假定为零 | 物质兼容的质量或体积单位 | 每次测量活动或报告区间 | 声明报告期内完整适用监测期间 | 每个存在潜在适用直接排放的纳入场址 | 只在记录过程/场址总量和驱动因素后分配；按合格产品质量归一化 | 实验室报告、监测校准、许可申报和材料平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期可归属数量 / 同期合格参考产品净质量 | 可归属流量；合格产品净质量 | 每 1 kg 参考产品数量 | `etsi-es-203199-2025` |
| `calc_component_balance` | 每个配置和报告期组合 | 外部材料投入 = 已安装合格产品质量 + 最终过程废物 + 库存变化 + 退回材料，并考虑有记录的测量不确定性；内部转移相互抵消 | BOM 和物料交易；合格质量；废物；退回；期初期末库存 | 质量平衡检查和未解释差额 | `etsi-es-203199-2025` |
| `calc_shared_energy` | 共享制造或测试能源 | 可归属 kWh = 净共享 kWh × 声明产品驱动量 / 总驱动量；直接计量优先 | 共享电表区间；基线；机器/测试小时、板面积或合格质量 | 按产品系列或配置分配的过程 kWh | `etsi-es-203199-2025` |
| `calc_test_energy` | 验收测试 | 测试 kWh = 测试单元计量 kWh - 有记录的无关基线；纳入的冷却辅助设备保留在测试边界内 | 测试单元电表、时间戳、基线、合格/不合格和返工记录 | 每合格净产品质量的测试用电 | `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025` |
| `calc_operating_profile_metadata` | 下游使用情景元数据 | 保留声明负载点实测输入功率，仅在下游使用模型中与声明时间比例组合；情景期间各比例之和应为一 | 各负载点输入功率；占空比/负载比例；运行小时；冷却边界 | 单独报告的下游运行能耗情景，不计入制造清单 | `etsi-es-203199-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_semantic_identity` | 产品系列和每个配置 | 证明纯发射功能且不集成接收装置；记录附带控制或监测接口以及被排除的接收链产品。 | 已批准产品架构、功能规格、BOM 和配置控制记录 |
| `dq_configuration_coverage` | 报告期生产组合 | 覆盖代表声明合格生产质量的配置；报告被排除配置及其质量占比，不得把单一型号用作类别代理。 | 生产台账、配置清单、合格质量和覆盖率计算 |
| `dq_hardware_detail` | BOM 和黑箱模块 | 识别射频功放技术/模块、电源和冗余、冷却配置和冷却液、机箱/机架/机柜、PCBA 以及随附附件或备件。 | 受控 BOM、供应商规格、图纸和装箱单 |
| `dq_energy` | 装配、集成和测试能源 | 优先采用原始计量数据，记录电表边界和电力供应，并将负载点和占空比数据与制造能耗分开保留。 | 电表数据、校准、基线研究、测试脚本和分配工作表 |
| `dq_mass_balance` | 材料投入、产品和废物 | 核对已安装质量、合格输出、过程废物、退回和库存变化；调查材料未解释差额。 | BOM 核对、秤重记录、废物票据和计算输出 |
| `dq_temporal_geography` | 所有前景和上游数据 | 数据应代表声明的生产期间和场址；识别供应商代理、技术年代及电力和材料数据集地域。 | 数据质量评估和来源元数据 |
| `dq_cutoff_and_completeness` | 所有单元过程和流 | 累计评估质量、能源和环境显著性并记录排除；不得仅因质量较小而遗漏半导体、PCBA、电力电子、冷却硬件或金属。 | 完整性清单、截断登记和敏感性或代理评估 |
| `dq_delivery_state` | 参考产品和包装 | 声明厂门发运状态、固件/测试状态、随附模块/附件/备件、净重和毛重、包装以及是否另行纳入下游运输。 | 装箱单、发运放行、秤重记录和数据集边界声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_no_receiver` | 产品身份 | 数据集应使用准确参考产品流、代表纯发射设备，且不得包含集成接收或收发功能的配置。 | `unsd-cpc-v3-2025` |
| `validate_reference_mass` | 定量参考 | 归一化后参考输出应等于 1 kg 合格净设备；运输包装不得计入参考产品质量。 | `etsi-es-203199-2025` |
| `validate_required_qualifiers` | 数据集元数据 | 预期用途、制式/波形、频段、额定射频输出、输入功率/负载点、占空比/负载曲线、功放技术、电源拓扑、冷却、机箱/板卡配置、覆盖、测试状态和交付边界应全部存在。 | `etsi-es-203199-2025`; `rohde-schwarz-thu9-efficiency`; `broadcast-electronics-am-series-2025` |
| `validate_process_coverage` | 过程清单 | 五个必需过程均应由前景记录或已披露供应商黑箱数据集表示；内部转移不得重复计算。 | `etsi-es-203199-2025` |
| `validate_mass_balance` | 材料、产品和废物 | 已安装部件、合格净产品、废品、退回、库存变化、包装和废物去向应在有记录测量不确定性内核对。 | `etsi-es-203199-2025` |
| `validate_energy_boundary` | 制造和测试用电 | 能源记录应识别过程、电表边界、期间、场址电力供应、分配驱动因素和纳入的冷却辅助设备；下游运行能耗保持分开。 | `etsi-es-203199-2025` |
| `validate_family_representativeness` | 产品组合 | 生产组合数据集应按合格质量和额定功率区间披露配置覆盖；单一配置应明确标注，不得作为类别平均。 | `etsi-es-203199-2025` |
| `validate_delivery_state` | 最终产品 | 净设备、随附附件/备件、包装、固件/测试状态、发运状态和任何交付扩展应与包装和发运记录一致。 | `etsi-es-203199-2025` |
| `validate_cutoffs_sources` | 完整性和证据 | 披露每个截断、代理、分配、暂定范围和公开来源；暂定推理估算不得替代可用前景记录，并应标记为待替换。 | `etsi-es-203199-2025`; `itu-t-l1410-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完工纯发射设备的前景生产数据集 |
| downstream_use | 可作为 ICT 网络、广播、无线链路、基础设施或资本品研究中设备生产的 `secondary_dataset` 或 `background_dataset` 发布 |
| allowed_use | 语义身份、配置覆盖、性能限定信息、边界、地域、期间和交付状态与研究匹配时的制造商厂门设备生产 |
| excluded_use | 集成接收的设备；没有独立实测使用情景的运行用电；未明确添加的天线、馈线、塔桅、建筑、安装、维护或寿命终结负荷；基于未披露单一型号的类别级比较 |
| required_metadata | canonical PCR id；产品流 UUID；CPC 引用；制造商和场址；生产期间；产品系列/配置组合；纯发射证据；预期用途；制式/波形；频段；额定射频输出和输入功率负载点；占空比/负载曲线；射频功放、电源、冷却、机箱和板卡配置；随附附件/备件；净重和毛重；包装；测试/固件状态；交付边界；分配和截断 |
| required_quality_disclosure | 前景覆盖；电表和秤质量；BOM 与质量平衡结果；供应商黑箱和代理占比；配置代表性；废物去向；数据年代和地域；不确定性；未解决 UUID 或流选择；暂定推理估算范围已替换或保留情况 |
| update_trigger | 产品系列组成、传输制式或频段覆盖、功放或电源技术、冷却架构、机箱/板卡设计、测试制度、生产场址或能源供应、交付状态、分配、来源证据或 Tiangong 参考身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | official_guidance | 联合国统计司，Central Product Classification Version 3.0 Explanatory Notes，更新于 2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-09） | 官方类别身份以及纯发射设备与集成接收设备的区分 |
| `etsi-es-203199-2025` | standard | ETSI ES 203 199 V1.4.1 (2025-01)，Environmental Engineering; Methodology for environmental Life Cycle Assessment of ICT goods, networks and services，https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf（检索于 2026-08-09） | ICT 功能单位和系统边界原则；部件、PCB/PCBA、机械件、黑箱模块、装配、包装、运输、原始数据、截断、分配、能源、数据质量和报告规则 |
| `itu-t-l1410-2024` | standard | ITU-T Recommendation L.1410 (11/2024)，Methodology for environmental life cycle assessments of information and communication technology goods, networks and services，https://www.itu.int/rec/T-REC-L.1410-202411-I（检索于 2026-08-09） | ICT 生命周期框架、单元过程和产品/网络背景，以及生产与下游生命周期阶段的分离 |
| `rohde-schwarz-thu9-efficiency` | handbook | Rohde & Schwarz，R&S THU9: Efficiency is the key factor when choosing a high-power broadcast transmitter，https://cdn.rohde-schwarz.com/pws/dl_downloads/dl_common_library/dl_brochures_and_datasheets/pdf_1/THU9_Efficiency_bro_en_3606-8520-62_v0100.pdf（检索于 2026-08-09） | 射频功率器件、功放板、合路器/滤波器、自适应电源、散热器、液冷和配置相关效率的类别架构证据；不泛化型号特定数值范围 |
| `broadcast-electronics-am-series-2025` | handbook | Broadcast Electronics，AM Transmitter Series brochure，https://www.bdcast.com/wp-content/uploads/2025/11/AM-Brochure-11-06-25-Ver-1.pdf（检索于 2026-08-09） | 模块化射频功放、稳压和冗余电源、风冷、控制、多功率级、维护模块和占空比/负载声明的独立类别架构证据；不泛化型号特定数值范围 |

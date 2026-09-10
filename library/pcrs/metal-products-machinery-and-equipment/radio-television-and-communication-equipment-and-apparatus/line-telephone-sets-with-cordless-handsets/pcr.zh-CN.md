---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.line-telephone-sets-with-cordless-handsets
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 带无绳手柄的有线电话机套装

## 1. 范围与适用性

本 PCR 适用于作为一套产品投放市场的完整固定线路无绳电话配置：连接固定线路电信网络的基座、一个或多个通过无线电与基座连接的无绳手柄、手柄安装或随附的可充电电池，以及正常运行所需且随产品提供的全部电源、充电座、电缆和附件。适用场景包括家庭、办公和公共通信；网络接口可为模拟、VoIP 或混合固定线路，但产品必须仍属于无绳有线电话机套装。

声明配置必须识别基座与手柄数量、无线制式和目标市场实际工作频段、网络接口、供电与充电安排、电池化学体系、容量、标准化物理尺寸和用户可更换性，以及显示器、键盘、印刷电路板、外壳、声学部件、电缆、附件和包装。包装纳入生命周期边界，但不计入参考产品质量。

本 PCR 不包括蜂窝或卫星移动电话、仅有线手柄的电话机、没有固定线路基座的纯 Wi-Fi 手柄、独立基站、独立充电座、单独销售的附加手柄、网络路由器和交换设备以及仅为部件的产品。仅因无绳基座能够转接蜂窝通话，不得将含蜂窝连接的产品纳入本类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.line-telephone-sets-with-cordless-handsets |
| classification_refs | CPC 3.0：47221，Line telephone sets with cordless handsets，精确语义参考 |
| covered_products | 用于固定线路语音通信的完整基座—无绳手柄套装，包括多手柄配置和随附充电设备 |
| excluded_products | 蜂窝或卫星电话；仅有线电话；纯 Wi-Fi 手柄；独立基站、充电器或手柄；路由器、交换机及仅部件产品 |
| representative_product | 一个可销售的固定线路无绳电话机套装，含一个声明基座、声明数量的手柄、可更换充电电池、随附供电和充电设备及零售包装 |
| production_route | 电子和机械部件供应；PCB 装配；外壳、显示器、键盘和声学子组件生产；电池和电源生产；总装、编程、测试和包装 |
| market_state | 已完成测试和包装、可配送的成套产品；配置、目标市场和网络接口均已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整无绳电话机套装提供的固定线路语音通信，手柄通过无线电与随附且连接固定线路的基座通信 |
| How much | 与声明配置 1 kg 完整参考产品质量相关的服务 |
| How well | 保持声明的基座和手柄数量、无线制式与频段、网络接口、充电安排、电池规格与可更换性、显示/键盘功能及随附附件 |
| How long or cycle | 一个声明的参考使用寿命和使用情景；制造、配送、使用和生命末期结果均归一化到 1 kg 参考产品质量 |
| reference_flow_link | 1 kg 带无绳手柄的有线电话机套装 `ec74af79-0aac-4d55-bf93-f30369e74bfb` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Line telephone sets with cordless handsets `ec74af79-0aac-4d55-bf93-f30369e74bfb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 基座数量；手柄数量；模拟、VoIP 或混合固定线路接口；无线制式与工作频段；目标市场；外部电源和充电座配置；充电电池化学体系、容量、标准化物理尺寸、数量和可更换性；显示器和键盘配置；PCB 数量；外壳材料；随附电缆和附件；未包装产品质量；包装材料与质量；待机、通话和充电功率；参考使用寿命和使用情景 |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任何必需限定信息，均使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 全部清单结果归一化至 1 kg 完整未包装产品。包括基座、声明手柄、已安装或随附电池、必需电源、充电座、电缆和随附操作附件；包装质量单独记录。 |
| `configuration_mass_reconciliation` | 物料清单和成品 | Mass | kg | 测量验收后的成套配置，并将部件和子组件质量与未包装套装质量核对。保留归一化前的原始测量质量，并解释全部残差。 |
| `standby_power_measurement` | 基座和每个充电座 | Power | W | 分别记录出厂默认设置下基座在已充满手柄置于和离开基座时的平均功率，以及每个独立充电座在已充满手柄置于座上和适用时离开座时的平均功率；记录电压、频率、试验方法、稳定时间和平均区间。 |
| `call_power_measurement` | 基座、手柄充电路径和随附供电设备 | Power | W | 对声明的连接和无线配置单独记录平均通话功率，不与待机或充电混合；记录手柄位置、通话功能、显示状态、音频模式和电池状态。 |
| `use_energy_conversion` | 使用阶段电力 | Energy | kWh | 各声明模式的实测功率 W 乘以持续时间 h 后除以 1,000 并求和；基座待机、独立充电座待机、通话和充电项保持可辨识。 |
| `packaging_mass_separation` | 初级、次级和运输包装 | Mass | kg | 按材料分别记录各包装质量，不得计入 1 kg 参考产品质量。 |

## 5. 系统边界

必需边界为声明完整套装的从摇篮到坟墓边界，包括原材料和部件生产、PCB 装配、外壳和键盘制造、显示与声学子组件、充电电池、外部电源和充电设备、总装与测试、包装、配送、声明寿命内的待机/通话/充电用电、替换电池和其他声明备件，以及收集、拆解、再循环、回收和最终处置。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别材料及其供应商部件的生产起点，并具有最终制造场址的装配、测试和包装记录 |
| starting_condition_role | 采用主要前景装配数据和可追溯上游部件数据集的电子产品从摇篮到坟墓系统 |
| product_classification_scope | 与 CPC 3.0 代码 47221 语义等价的完整固定线路无绳电话机套装；分类仅作背景，不构成规范 PCR 身份 |
| recursive_input_rule | 若完整同类别无绳电话套装作为输入越过边界，将其一次记录为可追溯上游产品数据集，不在该数据集内递归展开同一 PCR |
| upstream_dataset_requirement | PCB、显示器、键盘、外壳、声学部件、电池、电源、充电器、电缆和包装应采用供应商特定或技术代表性从摇篮到大门数据集，并披露身份、地域、技术和时间 |
| disclosure | 披露配置、纳入和排除附件、生产场址、供应商数据替代、运输、无线与网络接口、功率模式及持续时间、使用寿命、维修和电池更换、包装及生命末期情景 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_lifecycle` | declared_product_system | 纳入制造、配送、实质性安装、使用和生命末期阶段；系统边界外的可选收益与负荷单独报告。 | `pep-pcr-ed4-electrical-electronic`; `itu-t-l1410-2024` |
| `boundary_configuration_integrity` | reference_configuration | 建模一个内部一致的基座—手柄配置；不得与蜂窝电话、仅有线电话或独立基站混合。 | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3` |
| `boundary_component_completeness` | manufacturing | 纳入声明的 PCB、显示器、键盘、外壳、声学部件、电池、电源、充电、电缆、附件和包装清单；说明缺失供应商数据集，并在完整性检查中保留其质量。 | `pep-pcr-ed4-electrical-electronic`; `eu-2023-1670-cordless-phones`; `eu-weee-2012-19-annex-vii` |
| `boundary_use_modes` | use_stage | 纳入声明配置和使用情景下实测的基座与充电座待机、通话及电池充电用电；不得用认证限值代替前景实测功率。 | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic` |
| `boundary_end_of_life` | end_of_life | 在下游再循环、回收或处置前，纳入电池、相关电路板、显示器、外部电缆和其他受监管部件的单独处理。 | `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_and_packaging` | 部件供应、总装、测试和包装 | required | Always | 具有可追溯上游部件生产的前景制造 | 1 kg 验收未包装套装 |
| `distribution` | 已包装套装配送 | required | Always; actual route or a disclosed scenario | 产品配送 | 归一化至 1 kg 产品的 tonne-km 和包装损失 |
| `use_and_charging` | 待机、通话、充电和替换部件 | required | Always over the declared service life | 使用阶段用电和维护 | 每 1 kg 产品的 kWh 和替换部件质量 |
| `end_of_life` | 收集、拆解与处理 | required | Always using the declared geographic scenario | 生命末期处理 | 1 kg 废弃产品加替换废物 |

### 过程：部件供应、总装、测试和包装（`final_assembly_and_packaging`）

#### 输入

##### 产品流

###### 基座和手柄印刷电路板组件（`pcb_assemblies`）

记录基座和手柄中每块装配 PCB 的身份、数量、质量、供应商过程和生产地域。

- 选定流：声明基座和手柄的供应商特定装配印刷电路板组件
- 流属性/单位：Mass / kg
- 数量规则：按 PCB 组件类型记录供应商和进料检验实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_bom`
- 来源：`pep-pcr-ed4-electrical-electronic`; `eu-weee-2012-19-annex-vii`

###### 显示器、键盘和声学子组件（`user_interface_subassemblies`）

按基座和手柄位置记录显示器、键盘或机械按钮、麦克风、扬声器及相关柔性电路。

- 选定流：供应商特定显示器、键盘、麦克风和扬声器子组件
- 流属性/单位：Mass / kg
- 数量规则：各纳入子组件的实测 BOM 和供应商质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_bom`
- 来源：`eu-2023-1670-cordless-phones`; `pep-pcr-ed4-electrical-electronic`; `eu-weee-2012-19-annex-vii`

###### 塑料及其他外壳（`housings`）

按聚合物、填料、阻燃剂声明、颜色和制造路线记录基座、手柄和充电座外壳；金属外壳部件单列。

- 选定流：供应商特定模塑外壳部件及其他壳体材料
- 流属性/单位：Mass / kg
- 数量规则：按材料和部件族记录实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_bom`
- 来源：`pep-pcr-ed4-electrical-electronic`; `eu-weee-2012-19-annex-vii`

###### 无绳手柄充电电池（`rechargeable_batteries`）

记录电池数量、化学体系、标称电压、容量、标准化物理尺寸、质量、供应商以及用户按声明工具能否更换。

- 选定流：声明无绳手柄的供应商特定充电电池
- 流属性/单位：Mass / kg
- 数量规则：按化学体系和电池类型记录随附电池实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_bom`
- 来源：`eu-2023-1670-cordless-phones`; `eu-2023-1542-batteries`; `pep-pcr-ed4-electrical-electronic`

###### 电源、充电座、电缆和随附附件（`power_and_accessories`）

记录声明配置中的每个外部电源、集成或独立充电座、电话线、网络电缆和随附操作附件。

- 选定流：随套装提供的供应商特定电源、充电、电缆和附件部件
- 流属性/单位：Mass / kg
- 数量规则：按部件及配置数量记录实测 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_bom`
- 来源：`eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`

###### 装配与测试用电（`assembly_electricity`）

记录前景场址总装、编程、功能测试、测试充电和包装操作的计量电力。

- 选定流：供应至最终制造场址的电力
- 流属性/单位：Energy / kWh
- 数量规则：正常生产分配后的计量电力除以验收未包装产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_energy_and_waste`
- 来源：`pep-pcr-ed4-electrical-electronic`

###### 产品包装（`product_packaging`）

按材料和质量记录初级、次级和运输包装、衬垫、标签及说明书，不计入参考产品质量。

- 选定流：配置特定包装材料
- 流属性/单位：Mass / kg
- 数量规则：按材料记录参考配置包装实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_bom`
- 来源：`pep-pcr-ed4-electrical-electronic`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收的带无绳手柄有线电话机套装（`reference_product_output`）

验收未包装套装为定量参考输出；包装作为单独输入和下游废物报告。

- 选定流：带无线听筒的直线电话机 `ec74af79-0aac-4d55-bf93-f30369e74bfb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 废物流

###### 装配不合格品与生产废物（`assembly_rejects`）

按材料和处理去向分别记录不合格电子组件、外壳、电池、电缆及包装边角料。

- 选定流：场址特定且分类收集的制造废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物流实测质量，扣除有记录的返工回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy_and_waste`
- 来源：`pep-pcr-ed4-electrical-electronic`

##### 基本流

### 过程：已包装套装配送（`distribution`）

#### 输入

##### 产品流

###### 配送运输服务（`distribution_transport`）

记录已包装套装从最终物流平台到使用地点的每段实际运输。

- 选定流：运输方式特定的货运服务
- 流属性/单位：Transport service / tonne-km
- 数量规则：各运输段的包装货物质量（吨）乘以路线距离（km）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_distribution_records`
- 来源：`pep-pcr-ed4-electrical-electronic`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 配送或安装时废弃的包装（`distribution_packaging_waste`）

记录产品使用前废弃包装的去向和处理。

- 选定流：按材料分类的包装废物
- 流属性/单位：Mass / kg
- 数量规则：包装投入质量减去有记录的可复用或退回包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 验收未包装套装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_distribution_records`
- 来源：`pep-pcr-ed4-electrical-electronic`

##### 基本流

### 过程：待机、通话、充电和替换部件（`use_and_charging`）

#### 输入

##### 产品流

###### 基座网络待机用电（`base_station_standby_electricity`）

由实测基座待机功率及参考寿命内各待机配置的声明时数计算用电。

- 选定流：基座待机期间供应的市场特定电力
- 流属性/单位：Energy / kWh
- 数量规则：基座在手柄置于和离开基座状态的实测待机功率分别乘以对应时数后求和，再除以 1,000
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 产品的声明参考使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_power_mode_records`
- 来源：`eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`
- 数量范围：欧盟市场出货基座的联网待机符合性筛查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：1
  - 单位：W
  - 基准：欧盟受监管产品基座在已充满手柄置于或离开基座时的平均联网待机功率
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-2023-1670-cordless-phones`

###### 独立充电座待机用电（`charging_cradle_standby_electricity`）

对每个不具基站功能的独立充电座，由实测待机功率及手柄置于和离开座的声明时数计算用电。

- 选定流：独立充电座待机期间供应的市场特定电力
- 流属性/单位：Energy / kWh
- 数量规则：每个充电座在已充满手柄置于和离开座状态的实测待机功率乘以对应时数后求和，再除以 1,000
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 产品的声明参考使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_power_mode_records`
- 来源：`eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`
- 数量范围：欧盟独立充电座在已充满手柄置于座上时的待机符合性筛查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：0.6
  - 单位：W
  - 基准：欧盟受监管独立充电座在已充满手柄置于座上时的平均待机功率
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-2023-1670-cordless-phones`

###### 通话与电池充电用电（`call_and_charging_electricity`）

分别记录通话和充电功率，并根据声明的通话和充电时长计算用电；不得从待机限值推断。

- 选定流：通话和电池充电期间供应的市场特定电力
- 流属性/单位：Energy / kWh
- 数量规则：实测通话和充电功率分别乘以对应时数后求和，再除以 1,000
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 产品的声明参考使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_power_mode_records`
- 来源：`eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic`

###### 替换充电电池（`replacement_batteries`）

记录声明寿命内更换的充电电池数量、化学体系、容量、标准化物理尺寸、质量、时点和原因。

- 选定流：手柄的供应商特定替换充电电池
- 流属性/单位：Mass / kg
- 数量规则：替换电池实测质量乘以有记录的更换次数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 产品的声明参考使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_repair_and_replacement_records`
- 来源：`eu-2023-1670-cordless-phones`; `eu-2023-1542-batteries`; `pep-pcr-ed4-electrical-electronic`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废充电电池和替换部件（`use_stage_replaced_waste`）

记录使用阶段移除的电池和其他部件及其实际或声明处理路线。

- 选定流：使用阶段分离的废电池和替换部件
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理路线记录实测替换部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 产品的声明参考使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_repair_and_replacement_records`
- 来源：`eu-2023-1542-batteries`; `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### 基本流

### 过程：收集、拆解与处理（`end_of_life`）

#### 输入

##### 产品流

###### 生命末期收集运输（`eol_collection_transport`）

记录废弃套装和使用阶段替换废物从收集点到处理设施的运输。

- 选定流：生命末期收集的运输方式和路线特定货运服务
- 流属性/单位：Transport service / tonne-km
- 数量规则：收集质量（吨）乘以各运输段距离（km）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 废弃产品
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`pep-pcr-ed4-electrical-electronic`

##### 废物流

###### 废弃无绳电话机套装（`discarded_telephone_set`）

将基座、手柄、电池、电源、充电座、电缆和仍随产品存在的附件作为进入生命末期处理的完整废物输入。

- 选定流：声明市场中收集的废弃无绳有线电话机套装
- 流属性/单位：Mass / kg
- 数量规则：1 kg 参考产品加上使用阶段产生且未另行处理的替换部件废物
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 废弃参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：情景假设（`scenario_assumption`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### 基本流

#### 输出

##### 产品流

###### 回收材料馏分（`recovered_material_fractions`）

按材料、质量、质量等级、去向和边界点记录有可核查证据的可复用部件及金属、塑料和玻璃回收馏分。

- 选定流：处理方特定的可复用部件和回收材料输出
- 流属性/单位：Mass / kg
- 数量规则：按回收输出实测质量；系统边界外的替代收益单独报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 废弃产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### 废物流

###### 电池、电路板、显示器、电缆与受监管残余物（`regulated_eol_fractions`）

分别记录移除的电池、相关 PCB、显示器、外部电缆、含溴阻燃剂塑料及其他受监管或最终处置馏分。

- 选定流：处理方特定的分离危险、受监管和残余废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物流和最终处理路线记录实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 废弃产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic`

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground_manufacturing | 可行时通过分别计量声明产品配置的装配、测试、包装和废物过程来避免分配。 | `pep-pcr-ed4-electrical-electronic` |
| `allocation_physical` | shared_processes | 无法避免分配时，采用能代表共享过程的物理关系，如验收产品质量、板面积、机器时间或生产件数，并记录选择理由。 | `pep-pcr-ed4-electrical-electronic` |
| `allocation_economic_fallback` | shared_processes | 仅在不存在可辩护的物理关系时使用经济分配，并披露价格、期间、币种和结果敏感性。 | `pep-pcr-ed4-electrical-electronic` |
| `allocation_recycling` | end_of_life | 处理负荷留在声明生命末期边界内；回收材料在系统边界外的收益或负荷单独报告，不得重复计算避免生产。 | `pep-pcr-ed4-electrical-electronic` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_configuration_bom` | `final_assembly_and_packaging` | 配置、部件和包装 | 受控 BOM、供应商声明和实测质量记录 | 型号与修订；基座/手柄数量；部件材料身份；PCB 数量和质量；显示/键盘/声学部件；外壳材料；电池化学体系、容量、尺寸、数量和可更换性；供电充电设备；电缆附件数量；产品质量；包装材料和质量 | 冻结一个可销售配置，以拆解或进料检验核验，分别称量产品和包装并核对 BOM | kg、count、V、Ah 或 Wh | 每次型号修订和代表性生产批次 | 声明代表性生产期 | 每个最终装配场址及所代表材料供应商 | 各质量除以验收未包装产品 kg，聚合前保留场址和供应商分层 | 签字 BOM 修订、秤校准、供应商规格、拆解或检验记录和质量核对 |
| `cp_assembly_energy_and_waste` | `final_assembly_and_packaging` | 装配电力与废物 | 电表、账单、生产与废物记录 | 电表起止；产量和质量；验收输出；不合格品；返工；废物流和去向 | 可行时分表计量，否则按获准分配规则使用有记录的场址数据 | kWh、kg | 每个生产报告期 | 代表正常生产的声明期间 | 每个最终装配和测试场址 | 扣除单独计量的非产品负荷，分配共享负荷并除以验收产品质量 | 仪表和秤校准、账单核对、生产日志、废物转移记录 |
| `cp_distribution_records` | `distribution` | 路线与包装去向 | 发运与物流记录 | 包装质量；起点；终点；方式；距离；装载率；退回或复用包装；包装处理 | 使用实际发运记录，识别每段运输和包装交接 | kg、km、tonne-km | 代表性发运及路线变化时 | 声明销售和配送期 | 覆盖目标市场路线 | 各段分别计算，归一化至未包装产品 kg 后求和 | 货运单据、路线来源、质量记录和包装回收证据 |
| `cp_power_mode_records` | `use_and_charging` | 待机、通话与充电用电 | 实验室功率试验和使用情景记录 | 基座/充电座数量；固件与出厂设置；固定线路接口；无线制式与频段；供电电压和频率；手柄位置；电池、显示和音频状态；待机/通话/充电功率；稳定和平均区间；模式时数；寿命；电力地域 | 用校准仪器测量可销售配置，分别保留手柄置于/离开时的基座待机、各独立充电座、通话和充电结果 | W、h、kWh | 每次硬件、固件、电源或配置修订 | 试验日期及声明寿命情景 | 各目标市场电气和无线配置 | 分别计算各模式用电，寿命内求和并除以未包装产品质量 | 试验报告、仪器校准、配置照片、固件记录和使用情景来源 |
| `cp_repair_and_replacement_records` | `use_and_charging` | 电池与替换部件 | 服务、保修、供应商及情景记录 | 部件类型；电池化学体系、尺寸、容量和质量；替换原因、次数与时点；替换部件去向 | 可用时采用观察到的服务记录，否则声明经审查的替换情景且不得冒充观察率 | kg、count | 每个型号和寿命情景更新 | 声明寿命 | 目标市场和维修渠道 | 部件质量乘以有记录的替换次数，电池与其他部件分开 | 服务日志、保修摘要、备件规格和情景批准 |
| `cp_end_of_life_scenario` | `end_of_life` | 收集、拆解与处理 | 处理方质量平衡和路线记录 | 收集率；运输；复用；电池、PCB、显示器、电缆和塑料分离；回收馏分；残余处理；地域 | 优先采用处理方特定数据，否则使用有记录的地域代表性处理情景并披露替代 | kg、km、tonne-km | 每次情景或处理方更新 | 声明情景参考期 | 市场特定收集和处理系统 | 核对进料废弃质量与复用、回收输出、受监管馏分、排放和最终残余 | 处理方报告、称量记录、许可、监管链文件和质量平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_normalization` | 部件和包装行 | 归一化量等于实测行数量除以验收未包装产品质量；包装保持单独行 | 部件质量、包装质量、验收产品质量 | kg/kg 参考产品 | `pep-pcr-ed4-electrical-electronic` |
| `calc_assembly_energy` | 装配用电 | 归一化电力等于分配后的装配、测试和包装电力除以验收未包装产品质量 | 计量 kWh、分配因子、验收产品质量 | kWh/kg 参考产品 | `pep-pcr-ed4-electrical-electronic` |
| `calc_distribution_service` | 配送运输 | 运输服务等于各段包装货物吨数乘以路线 km 之和，再除以未包装产品质量 kg | 包装质量、路线距离和方式、未包装产品质量 | tonne-km/kg 参考产品 | `pep-pcr-ed4-electrical-electronic` |
| `calc_use_electricity` | 待机、通话与充电用电 | 寿命 kWh 等于各模式和设备实测功率 W 乘模式小时后除以 1,000 并求和；求和前报告各项 | 各模式实测功率、设备数、模式时数、寿命、未包装产品质量 | 声明寿命内 kWh/kg 参考产品 | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic` |
| `calc_eol_mass_balance` | 生命末期处理 | 进入的废弃质量等于复用加回收产品加单独处理的受监管馏分加最终残余；仅按有记录的工艺添加或排放调整 | 处理方或情景质量记录 | 每 kg 废弃产品的核对质量 | `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 冻结一个型号修订和可销售配置，核验精确产品流 UUID 和所有必需限定信息。 | 产品标签、BOM 修订、配置记录和天工身份参考 |
| `dq_completeness` | 制造清单 | 计入每块 PCB、显示器、键盘、外壳、声学部件、电池、电源、充电器、电缆、附件和包装；不得因缺供应商数据而删除其质量。 | BOM—秤质量核对、供应商数据集登记和缺失数据日志 |
| `dq_measurement` | 质量、能量和功率记录 | 使用校准仪器，保留原始读数和单位，并记录换算、抽样和分配。 | 校准证书、原始读数和计算工作簿 |
| `dq_temporal` | 全部前景数据 | 声明采集日期并证明期间代表正常生产和运行，识别异常期和替代。 | 有日期的生产、试验、发运和处理记录 |
| `dq_geography_technology` | 上游和情景数据 | 使部件技术、生产地域、电力市场、无线变体、配送和生命末期系统与声明产品及市场匹配。 | 供应商元数据、试验配置、路线记录和数据集元数据 |
| `dq_use_scenario` | 使用阶段 | 实测功率与假设模式时数及寿命分开，披露每个使用情景项的来源和不确定性。 | 功率试验报告、情景批准和敏感性记录 |
| `dq_eol` | 生命末期 | 证明质量平衡并单独处理电池、相关 PCB、显示器、电缆和受监管材料；不得采用无依据再循环信用。 | 处理方质量平衡、监管链和处理文件 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_configuration` | dataset_identity | 若数据集将蜂窝电话、仅有线电话、独立基站、独立充电座或单独销售的手柄与完整无绳有线电话机套装混合，则判为不合格。 | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3` |
| `validate_reference_flow` | reference_flow | 要求产品流 `ec74af79-0aac-4d55-bf93-f30369e74bfb`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，且归一化后恰为 1 kg。 |  |
| `validate_radio_and_network` | required_qualifiers | 要求基座和手柄数量、固定线路接口、无线制式、实际工作频段和目标市场；只写通用 DECT 而不写实际市场频段不可接受。 | `etsi-en-300-175-1`; `eu-2023-1670-cordless-phones` |
| `validate_component_and_packaging_inventory` | manufacturing_inventory | 要求 PCB 组件、显示器、键盘/按钮、外壳、声学部件、电池、电源、充电设备、电缆和包装均有显式行或可追溯上游数据集，并将包装质量与产品质量分开。 | `pep-pcr-ed4-electrical-electronic`; `eu-2023-1670-cordless-phones`; `eu-weee-2012-19-annex-vii` |
| `validate_power_modes` | use_stage | 要求实测基座待机、存在时的独立充电座待机、通话和充电功率，并声明模式时数及寿命；若以待机限值或宣传册值代替实测寿命用电且未披露，则判为不合格。 | `eu-2023-1670-cordless-phones`; `energy-star-telephony-v3`; `pep-pcr-ed4-electrical-electronic` |
| `validate_eu_standby_limits` | eu_market_claim | 对声明符合 Regulation (EU) 2023/1670 的产品，要求基座联网待机不高于 1 W、独立充电座在已充满手柄置于座上时不高于 0.6 W，并保留规定试验设置。 | `eu-2023-1670-cordless-phones` |
| `validate_battery_replaceability` | battery_inventory | 要求充电电池化学体系、容量、标准化物理尺寸、数量、质量和更换方法；对适用欧盟市场声明，核查用户更换和备件要求，不得假定合规。 | `eu-2023-1670-cordless-phones`; `eu-2023-1542-batteries` |
| `validate_eol_separation` | end_of_life | 要求生命末期质量平衡，并为电池、相关 PCB、显示器、外部电缆及存在的含溴阻燃剂塑料或其他受监管馏分提供单独处理记录。 | `eu-weee-2012-19-annex-vii`; `pep-pcr-ed4-electrical-electronic` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整带无绳手柄有线电话机套装的配置特定前景产品系统数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 用于家庭、办公或公共固定线路无绳电话配置的 LCA；基座、手柄数量、无线和网络接口、供电充电安排、电池、部件、包装、寿命及地域必须与数据集匹配 |
| excluded_use | 蜂窝或卫星电话、仅有线电话、纯 Wi-Fi 手柄、独立基站或充电座、单售附加手柄、路由器、交换机、仅部件产品，或未经调整而具有显著不同手柄数量、频段、充电或电池设计的配置 |
| required_metadata | PCR id 和版本背景；产品流 UUID；型号和修订；基座/手柄数量；网络接口；无线制式和工作频段；目标市场；电源和充电座；电池化学体系、容量、尺寸及可更换性；显示器、键盘、PCB 和外壳配置；产品和包装质量；生产场址；使用情景；寿命；替换；运输和生命末期情景 |
| required_quality_disclosure | 一手/二手数据占比；供应商数据缺口；质量核对；仪表和秤校准；分配；时间、地域和技术代表性；功率试验方法；情景来源；不确定性和敏感性；生命末期质量平衡 |
| update_trigger | 硬件修订、基座或手柄数量、PCB、显示器、键盘、外壳、电池、电源、充电安排、无线制式或频段、影响功率的固件、包装、生产场址、供应商数据集、使用情景、寿命、法规或生命末期路线变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-2023-1670-cordless-phones` | official_guidance | European Commission，Commission Regulation (EU) 2023/1670 consolidated，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02023R1670-20250620，访问于 2026-08-09 | 无绳电话、基座和充电座范围；与蜂窝设备区分；待机限值及试验设置；显示器、按钮、声学部件、电池、充电器和充电座；标准尺寸可更换充电电池 |
| `eu-2023-1542-batteries` | official_guidance | European Parliament and Council，Regulation (EU) 2023/1542 concerning batteries and waste batteries，Article 11，https://eur-lex.europa.eu/eli/reg/2023/1542/oj，访问于 2026-08-09 | 适用时便携式电池可拆卸、可更换、说明和备件披露 |
| `energy-star-telephony-v3` | official_guidance | U.S. EPA ENERGY STAR，Final Version 3.0 Telephony Program Requirements and Final Test Method，December 2013，https://www.energystar.gov/sites/default/files/specs/Telephony%20V3%20ENERGY%20STAR%20Program%20Requirements.pdf，访问于 2026-08-09 | 基座—手柄配置、附加手柄区分、有线和蜂窝排除、待机和通话模式、代表性配置及功率试验记录 |
| `etsi-en-300-175-1` | standard | ETSI EN 300 175-1 V2.5.1，Digital Enhanced Cordless Telecommunications Common Interface，Part 1，August 2013，https://www.etsi.org/deliver/etsi_en/300100_300199/30017501/02.05.01_60/en_30017501v020501p.pdf，访问于 2026-08-09 | DECT 无线接口身份以及必须声明实际区域工作频段而不能假定统一频段 |
| `pep-pcr-ed4-electrical-electronic` | standard | PEP Ecopassport Program，PCR edition 4 for Electrical, Electronic and HVAC-R Products，6 September 2021，https://pep-ecopassport.org/site/wp-content/uploads/2026/06/PCR-4-ed4-EN-2021-09-06-PCR-edition-4.pdf，访问于 2026-08-09 | 从摇篮到坟墓阶段、部件与包装覆盖、使用用电、配送、生命末期、一手数据、截断控制、分配、归一化和报告 |
| `eu-weee-2012-19-annex-vii` | official_guidance | European Parliament and Council，Directive 2012/19/EU consolidated，Annex VII，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:02012L0019-20240408，访问于 2026-08-09 | 电池、相关 PCB、显示器、外部电缆、含溴阻燃剂塑料及其他受监管馏分的生命末期单独处理 |
| `itu-t-l1410-2024` | standard | ITU-T Recommendation L.1410，Methodology for environmental life cycle assessments of ICT goods, networks and services，November 2024，https://www.itu.int/rec/T-REC-L.1410-202411-I，访问于 2026-08-09 | ICT 特定 LCA 框架、生命周期清单、数据质量、不确定性和报告 |

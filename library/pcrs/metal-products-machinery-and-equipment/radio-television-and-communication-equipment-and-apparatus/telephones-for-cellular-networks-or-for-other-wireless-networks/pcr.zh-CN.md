---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.telephones-for-cellular-networks-or-for-other-wireless-networks
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 蜂窝网络或其他无线网络电话

## 1. 范围与适用性

本 PCR 适用于新制通用成品电话的前景制造数据包；该产品以通过蜂窝网络、卫星网络或其他无线网络进行双向语音通信的成品终端为产品身份。范围包括以成品、已配置并通过功能测试状态交付的智能手机、非智能移动电话、卫星电话及其他完整无线网络电话终端。本 PCR 与具体技术无关，必须代表所声明的生产混合，而不是某一具名机型。

默认报告端点为制造场址发运门。参考产品是净成品电话；随设备交付并构成设备组成部分的已安装电池及其他整体部件计入。销售包装、单独捆绑的附件、外置充电器和电缆应单独编制清单和披露，不计入参考产品质量。

本 PCR 不包括带无绳手柄的有线电话机；有线电话和对讲设备；基站、路由器、交换机、网关、调制解调器及其他网络设备；单独销售的部件、外壳、显示模组、印刷电路板组件、电池或其他子组件；不属于完整电话的平板电脑、相机、可穿戴设备和外围设备；具名机型代理；维修或再制造路线；网络运行；使用阶段；以及生命终期处理。研究若延伸至制造门之外，必须另行增加受治理的使用和生命终期情景，不得把本制造数据包表述为完整的从摇篮到坟墓结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.telephones-for-cellular-networks-or-for-other-wireless-networks |
| classification_refs | CPC 3.0:47222 (exact) |
| covered_products | 新制完整智能手机、非智能移动电话、卫星电话，以及为蜂窝网络或其他无线网络设计的其他完整成品电话终端 |
| excluded_products | 无绳固定电话；有线电话和对讲设备；网络基础设施和数据通信设备；单独销售的手持机部件与子组件；不具备所覆盖电话功能的平板电脑、可穿戴设备、相机和外围设备；维修或再制造设备 |
| representative_product | 新制完整成品无线网络电话的质量加权制造混合；任何具名设备、部件、材料家族或网络设备都不能代表本类别 |
| production_route | 外购材料、部件和子组件接收与齐套；受控情况下的 PCBA 和模组组装；最终机械与电气组装；固件或操作系统加载与配置；功能与射频测试；包装、仓储和发运 |
| market_state | 新制、成品、已制造产品；生产混合，工厂端；以设备净质量计量，包装和单独捆绑附件在参考质量之外披露 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造场址发运门交付能够通过蜂窝、卫星或其他无线网络进行双向语音通信的完整成品电话 |
| How much | 1 kg 净成品电话产品 |
| How well | 新制、完整组装、已配置并通过功能测试；包括已安装电池和整体部件；销售包装和单独捆绑附件不计入净产品质量并单独报告 |
| How long or cycle | 一个已声明生产批次或报告期，按其合格成品电话总净质量归一化；声明每 kg 设备数量和产品混合加权方法 |
| reference_flow_link | `finished_wireless_telephone_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 蜂窝网络或其他无线网络电话 `1fdb2343-534a-4818-814d-5dc99b291ac1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备家族和机型混合定义；支持的蜂窝、卫星或其他无线网络技术；制造场址与地理；报告期或批次；新制路线；成品和测试端点；已安装电池的计入；设备净质量方法；每 kg 设备数量；计入的整体部件；销售包装计入或排除状态；单独捆绑附件及外置充电器或电缆；自有和外包生产步骤 |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息将使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品电话输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准秤具在最终功能测试后测量合格产品净质量。计入已安装电池和整体部件；排除销售包装和单独捆绑附件。 |
| `count_to_mass` | 以台数记录的生产数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用每一机型或同质产品家族经核验的净质量将台数转换为质量，再对所声明生产混合进行质量加权。保留台数、抽样质量、机型份额和计算过程。 |
| `input_and_waste_mass` | 外购部件、耗材、不合格品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用可追溯的物项特定因子将发票、领料记录、件数和容器数量转换为 kg；不得从某一具名电话机型推断通用部件质量。 |

## 5. 系统边界

前景采集边界从外购材料、部件和子组件到达制造场址开始，到合格成品电话按声明完成包装并放行发运结束。供应商生产和入厂运输作为可见的上游产品投入保留。为所声明生产服务的制造场址电力、燃料、水、耗材、直接排放、不合格品、返工、包装和共享辅助负荷均应纳入。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、部件和子组件已到达制造场址，并已识别供应商、批次、数量、质量和接收状态 |
| starting_condition_role | 制造商控制的接收、组装、配置、测试、包装、仓储和发运的前景采集边界；上游生产通过供应商或代表性数据集链接 |
| product_classification_scope | CPC 3.0:47222 范围内的完整成品电话；不包括部件、无绳固定电话、有线设备或网络设备 |
| recursive_input_rule | 作为投入接收的完整 CPC 47222 电话保持为单独定量的产品投入，并带有上游数据集和用途声明；不得拆解为虚构的原材料数量，也不得静默并入参考输出 |
| upstream_dataset_requirement | 对适用的电芯和电池包、PCBA、集成电路、显示模组、机电部件、外壳、电缆与连接器、相机与音频模组、其他 BOM 物项、包装材料和入厂运输，使用供应商特定或技术代表性上游数据集；披露替代和供应商覆盖缺口 |
| disclosure | 声明产品混合、设备台数、净质量、已安装电池和整体部件处理、包装与附件处理、自有和外包步骤、场址、地理、期间、良率、返工、分配、cut-off、上游数据集选择及任何边界扩展 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `include_applicable_parts_and_assembly` | 产品组成和生产阶段 | 根据实际 BOM 确定适用部件类型及其数量。纳入或链接适用部件生产，并纳入 PCBA 或模组组装、最终组装、仓储和包装；外包步骤必须以相应上游数据集表示，不能省略。 | `etsi-es-203-199-v1-4-1-2025` |
| `foreground_control_boundary` | 制造商控制的过程 | 对报告制造商运营控制下的作业采集一次活动数据，并将外购投入链接至供应商特定或技术代表性上游数据集。 | `etsi-es-203-199-v1-4-1-2025` |
| `cutoff_significance` | 范围内所有过程和流 | 尽量避免 cut-off。只有在质量、能源和环境显著性均已评估、累计排除已检查，并记录排除项及敏感性后，才可排除过程或流。 | `etsi-es-203-199-v1-4-1-2025` |
| `software_and_configuration_boundary` | 软件相关生产活动 | 纳入场内固件或操作系统加载、配置和测试。仅当所声明研究范围明确包含时，才纳入软件开发辅助负荷，并单独报告其分配。 | `etsi-es-203-199-v1-4-1-2025` |
| `manufacturing_only_profile` | 发布的前景数据包 | 本制造画像不包括网络运行、产品使用、维修、再制造和生命终期。任何扩展都应作为单独记录的模块，且不得改变 CPC 47222 成品身份。 | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `parts_and_subassemblies_supply` | 部件、子组件、接收与齐套 | `required` | 始终纳入；通过上游数据集建模供应商生产，并采集场内接收和齐套记录 | BOM 完整性、外购投入身份、入厂验收和上游链接边界 | 每 kg 合格成品电话输出 |
| `pcba_module_assembly` | PCBA 与模组组装 | `required` | 受控时作为前景建模；否则将外购 PCBA 或模组作为带供应商特定上游数据集的投入保留 | 电子组件和模组生产阶段 | 每 kg 合格组装模组输出及每 kg 合格成品电话输出 |
| `final_assembly_configuration_test` | 最终组装、配置与功能测试 | `required` | 始终纳入 | 机械与电气组装、软件加载、配置、射频与功能测试、返工和放行 | 每 kg 合格测试电话输出 |
| `packaging_warehousing_dispatch` | 包装、仓储与发运放行 | `required` | 始终纳入；产品无销售包装发运时声明包装为零 | 销售包装和捆绑附件清单、仓储能耗及最终参考产品放行 | 每 kg 净合格成品电话输出 |

### 过程：部件、子组件、接收与齐套（`parts_and_subassemblies_supply`）

#### 输入

##### 产品流

###### 电芯、电池包和电池系统部件（`battery_system_input`）

记录属于所声明产品混合的每一种外购电芯、电池包、电池管理组件、壳体、连接件和热界面材料。它们是清单投入，绝不能作为成品电话参考代理。

- 选定流：供应商和产品特定的电池产品流；构建前景数据包时逐一解析 Tiangong UUID
- 流属性/单位：质量 / kg；适用时保留台数和额定能量作为辅助字段
- 数量规则：根据 BOM、采购、收货和批次记录取得接收数量和质量，并按库存变化和不合格品调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_purchased_parts`
- 来源：`etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### 电子组件与元器件（`electronics_and_pcba_inputs`）

按实际 BOM 行和供应商数据集记录外购 PCBA、印刷电路板、集成电路、存储器、射频模组、天线、连接器、电缆及其他电子部件。

- 选定流：供应商和产品特定的电子组件与元器件流；构建前景数据包时逐一解析 Tiangong UUID
- 流属性/单位：质量 / kg；可得时保留件数、PCB 面积和 IC 裸片面积
- 数量规则：根据采购和收货记录取得接收 BOM 数量和质量，包括外包 PCBA 或模组生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_purchased_parts`
- 来源：`etsi-es-203-199-v1-4-1-2025`

###### 显示、相机、音频与用户界面模组（`display_camera_audio_inputs`）

记录所声明产品混合中实际存在的显示组件、相机组件、麦克风、扬声器、按键、端口和相关模组；不存在的类别应声明不存在，不得赋予默认数量。

- 选定流：供应商和产品特定的模组流；构建前景数据包时逐一解析 Tiangong UUID
- 流属性/单位：质量 / kg；可得时保留件数和显示面积
- 数量规则：根据采购和收货记录取得接收 BOM 数量和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_purchased_parts`
- 来源：`etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### 外壳、机械件及其余 BOM 物项（`mechanical_and_other_bom_inputs`）

记录尚未捕获的外壳、框架、后盖、紧固件、密封件、热部件、标签及其他所有整体 BOM 物项。不得用通用智能手机组成填补缺失的场址记录。

- 选定流：供应商和产品特定的机械件及其余 BOM 流；构建前景数据包时逐一解析 Tiangong UUID
- 流属性/单位：质量 / kg；可得时保留件数和材料声明
- 数量规则：根据采购和收货记录取得接收 BOM 数量和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_purchased_parts`
- 来源：`etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

##### 废物流

###### 入厂不合格部件与接收废物（`incoming_rejects`）

按材料和已记录去向记录不合格部件、运输损坏物项及接收或齐套废物。退回供应商的物项保持为产品退货；除非其所有权和处理跨越报告边界，不计为场内废物。

- 选定流：针对每一种实际不合格品或废物流解析废物特定 Tiangong 流
- 流属性/单位：质量 / kg
- 数量规则：按批次和去向测量被拒收或废弃的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_records`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 基本流

不规定通用基本流数量。接收或齐套产生直接排放时，应把每一种实测排放作为单独基本流加入。

#### 输出

##### 产品流

###### 已接收并齐套的部件与子组件（`accepted_component_kits`）

该内部中间输出把已接收 BOM 物项转入受控组装，不改变其上游身份。

- 选定流：产品特定内部中间流；不分配成品规范 UUID
- 流属性/单位：质量 / kg
- 数量规则：接收投入质量按已记录库存变化和入厂不合格品调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_purchased_parts`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 废物流

除逐一记录的入厂不合格品外，不规定其他废物输出。

##### 基本流

不规定默认基本流输出。

### 过程：PCBA 与模组组装（`pcba_module_assembly`）

#### 输入

##### 产品流

###### 进入受控模组组装的部件与子组件（`module_assembly_parts`）

记录在报告设施内实际组装的电路板、电子部件、电池元件、电缆、连接器和模组。外购完整模组保持为单独链接的上游投入。

- 选定流：产品特定的外购或内部部件流；按所选流解析 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：领料数量和质量与 BOM、工单、退料及库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装模组输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_records`
- 来源：`etsi-es-203-199-v1-4-1-2025`

###### PCBA 与模组组装用电（`module_assembly_electricity`）

记录受控印刷、贴装、回流焊、固化、检验、清洗和模组组装的计量电力。共享电力按第 7 节分配。

- 选定流：场址和市场特定的电力产品流；构建前景数据包时解析 Tiangong UUID
- 流属性/单位：能量 / kWh
- 数量规则：所声明工单和期间的计量或已分配用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装模组输出，再换算为每 kg 合格成品电话输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_utilities`
- 来源：`etsi-es-203-199-v1-4-1-2025`

###### 组装耗材与过程公用工程（`module_assembly_consumables`）

仅在实际使用时记录焊料、锡膏、助焊剂、胶黏剂、清洗剂、保护气体、水、压缩空气及其他耗材，并将每一种作为单独产品流选择。

- 选定流：逐一在 Tiangong 解析的实际耗材或公用工程流
- 流属性/单位：流特定属性和单位；保留质量、体积或能量，不作无依据转换
- 数量规则：按合格模组输出分配的计量、领料、采购或批次配方记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格组装模组输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_records`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 废物流

###### PCBA 与模组组装废料（`module_assembly_scrap`）

把故障板、元器件损耗、焊料残余、废化学品、废水和其他废物作为独立废物流记录，并注明实测数量和去向。

- 选定流：针对每一种实际废物流解析废物特定 Tiangong 流
- 流属性/单位：流特定属性和单位，通常为质量 / kg
- 数量规则：实测废物输出与工单、转移联单、退料和回收记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格组装模组输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_records`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 基本流

把每一种监测到的直接空气或水排放作为单独选择的基本流加入；不得采用类别通用默认排放因子。

#### 输出

##### 产品流

###### 合格组装 PCBA 与模组（`assembled_modules_output`）

记录转入最终组装的合格模组质量；返工单元只有通过验收后才计入。

- 选定流：产品特定内部 PCBA 或模组流；不分配成品电话 UUID
- 流属性/单位：质量 / kg
- 数量规则：按产品家族合格台数和核验单位质量测量或计算合格输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格组装模组输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_yield_rework`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 废物流

除已逐一报告的组装废物流外，不规定其他通用废物输出。

##### 基本流

不规定默认基本流输出。

### 过程：最终组装、配置与功能测试（`final_assembly_configuration_test`）

#### 输入

##### 产品流

###### 已接收部件与组装模组（`final_assembly_parts`）

记录进入最终组装的所有已接收内部和外购部件，包括电池、外壳、显示组件、电子组件、相机、音频件、天线、连接器及机型特定整体物项。

- 选定流：产品特定内部和外购流；按所选流解析 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：领料数量和质量与工单、BOM、退料及库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格测试电话输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_records`
- 来源：`etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### 组装、配置与测试用电（`final_assembly_electricity`）

记录机械与电气组装、固件或操作系统加载、测试充电、功能与射频测试、适用时的老化测试、维修工位及产线输送用电。

- 选定流：场址和市场特定的电力产品流；构建前景数据包时解析 Tiangong UUID
- 流属性/单位：能量 / kWh
- 数量规则：所声明产线、工单和报告期的计量或物理分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格测试电话输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_utilities`
- 来源：`etsi-es-203-199-v1-4-1-2025`

###### 最终组装耗材与公用工程（`final_assembly_consumables`）

把胶黏剂、紧固件、标签、清洗剂、作为整体生产物项使用的保护膜、压缩空气、水及其他实际耗材作为单独选择流记录。

- 选定流：逐一在 Tiangong 解析的实际耗材或公用工程流
- 流属性/单位：流特定属性和单位
- 数量规则：按合格测试输出分配的计量、领料、采购或批次配方记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格测试电话输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_records`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 废物流

###### 终检不合格品、返工损失与组装废物（`final_assembly_rejects`）

单独记录送返工的故障设备、报废设备、拆除部件、耗材废物及其他损失，确保返工只计一次且最终废料有明确去向。

- 选定流：针对每一种实际物流解析内部返工产品流或废物特定 Tiangong 流
- 流属性/单位：质量 / kg，适用时同时保留设备台数
- 数量规则：测试、维修、不合格、报废和废物联单记录与生产工单核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格测试电话输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_yield_rework`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 基本流

把每一种监测到的直接排放作为单独选择的基本流加入；不假定通用设备级排放。

#### 输出

##### 产品流

###### 合格测试无线电话（`tested_telephone_output`）

记录通过所声明功能和射频测试并放行至包装的完整设备净质量和台数。

- 选定流：蜂窝网络或其他无线网络电话 `1fdb2343-534a-4818-814d-5dc99b291ac1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按机型的合格设备台数乘以核验设备净质量，或使用经校准秤具直接测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格测试电话输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_yield_rework`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 废物流

除已单独报告的不合格品和废物流外，不规定其他通用废物输出。

##### 基本流

不规定默认基本流输出。

### 过程：包装、仓储与发运放行（`packaging_warehousing_dispatch`）

#### 输入

##### 产品流

###### 进入包装的合格测试电话（`tested_telephone_input`）

转移测试合格设备，不改变成品身份或净质量基准。

- 选定流：蜂窝网络或其他无线网络电话 `1fdb2343-534a-4818-814d-5dc99b291ac1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由最终测试放行并进入包装的合格设备净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净成品电话输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_accessories`
- 来源：`etsi-es-203-199-v1-4-1-2025`

###### 销售包装与单独捆绑附件（`packaging_accessory_inputs`）

按实际销售配置单独记录包装材料、外置充电器、电缆、说明书和其他捆绑附件。它们承担可归属生产负荷，但不计入净参考产品质量。

- 选定流：产品特定包装材料和附件流；逐一解析 Tiangong UUID
- 流属性/单位：质量 / kg；需要时保留件数和流特定属性
- 数量规则：按销售配置取得包装 BOM、采购、领料和包装单元记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_accessories`
- 来源：`etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated`

###### 包装与仓储用电（`packaging_warehouse_electricity`）

记录可归属于所声明产品和期间的包装线、成品存储和发运放行用电。

- 选定流：场址和市场特定的电力产品流；构建前景数据包时解析 Tiangong UUID
- 流属性/单位：能量 / kWh
- 数量规则：包装和仓库的计量或物理分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_utilities`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 废物流

###### 包装损失与仓库废物（`packaging_waste`）

按实际材料和去向记录损坏包装、边角料、不合格包装单元、托盘、薄膜、纸箱及其他包装阶段废物。

- 选定流：针对每一种实际包装废物流解析废物特定 Tiangong 流
- 流属性/单位：质量 / kg
- 数量规则：根据包装记录和废物联单测量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_records`
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 基本流

把每一种监测到的直接排放作为单独选择的基本流加入；不规定默认值。

#### 输出

##### 产品流

###### 成品无线电话参考输出（`finished_wireless_telephone_output`）

这是唯一参考产品：完整、已配置、已测试并放行发运的电话。包装和单独捆绑附件保持为独立清单投入，不增加参考质量。

- 选定流：蜂窝网络或其他无线网络电话 `1fdb2343-534a-4818-814d-5dc99b291ac1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定归一化为 1 kg 净合格成品电话输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 净合格成品电话输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`etsi-es-203-199-v1-4-1-2025`

##### 废物流

除已单独报告的包装和不合格产品废物流外，不规定其他通用废物输出。

##### 基本流

不规定默认基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `subdivide_before_allocation` | 可分开的生产线、工单和过程步骤 | 分配前优先使用直接计量和过程细分。当差异显著的产品共享场址时，保留机型家族或同质产品工单。 | `etsi-es-203-199-v1-4-1-2025` |
| `physical_allocation_priority` | 共享生产与设施数据 | 使用最相关物理驱动因子分配共享负荷：可得时使用实测产线时间或设备能耗，电路板生产使用 PCB 面积，集成电路使用合格裸片面积，其他部件或输出使用质量。来自同一共同过程的全部环境负荷采用一种一致方法。 | `etsi-es-203-199-v1-4-1-2025` |
| `economic_allocation_fallback` | 缺少可辩护物理数据的共享过程 | 只有在相关物理数据不足时才使用经济分配；披露受影响过程、产品、价格基准、期间、计算和敏感性。 | `etsi-es-203-199-v1-4-1-2025` |
| `rework_and_scrap_accounting` | 返工、不合格品与回收材料 | 返工负荷归属于产生返工的生产，返工单元仅在最终验收后计数。可回收废料作为带去向的废物输出报告；除非另行声明的下游方法要求，否则本前景数据包内不采用避免负荷抵扣。 | `etsi-es-203-199-v1-4-1-2025` |
| `packaging_and_accessory_separation` | 销售包装和捆绑附件 | 把可归属的包装和附件负荷分配给所声明生产混合，但其质量和物流应与 1 kg 净电话参考产品分开报告。 | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_purchased_parts` | `parts_and_subassemblies_supply` | 外购 BOM 物项与已接收部件齐套 | BOM、采购订单、供应商声明、收货、检验、库存台账 | 产品家族；机型；部件 id；部件类别；供应商；批次；数量；单位；核验单位质量；接收数量；不合格数量；库存变化；上游数据集 id | 工程 BOM 与采购、收货、质量和库存记录核对；解析每个所选上游流身份 | kg 和 piece；相关时保留电池能量或显示/PCB 面积 | 每批次和生产订单；按报告期汇总 | 完整的已声明代表性生产期 | 数据集代表的每个制造场址和外包供应商步骤 | 按产品家族汇总接收投入和库存变化；按净合格输出质量归一化 | 批准的 BOM 版本、供应商记录、收货记录、秤具校准、核对日志 |
| `cp_process_energy_utilities` | `pcba_module_assembly`; `final_assembly_configuration_test`; `packaging_warehousing_dispatch` | 电力、燃料、热、压缩空气及计量公用工程 | 分表、设备电表、公用事业发票、运行时间与额定负载记录 | 仪表 id；起止读数；单位；时间戳；产线；设备；工单；产品家族；分配驱动因子；停机时间 | 优先使用专用分表；否则按已记录物理驱动因子分配共享总量 | kWh、MJ、m3 或原生计量单位 | 连续、班次、批次或账单周期 | 与生产输出相同期间，并覆盖正常运行变化 | 所有受控产线及为其服务的共享公用工程 | 扣除已记录非生产负荷，按物理方法分配共享用量，再按合格输出归一化 | 仪表校准、发票核对、运行记录、分配工作表 |
| `cp_material_waste_records` | all process ids | 耗材、不合格品、废料与废物 | 物料领退、批次配方、库存台账、称重单、废物联单 | 流身份；供应商；批次；领用量；退回量；不合格量；废物量；单位；去向；危险属性；工单 | 核对采购、领用、退回、回收、库存变化和联单数量 | 流特定单位，通常 kg | 每批次、物料批和废物发运 | 与生产输出相同期间 | 所有受控过程和废物去向 | 净消耗量等于领用减退回和回收入库；废物按流和去向汇总 | 经校准秤具、库存核对、废物联单、处理回执 |
| `cp_output_yield_rework` | `pcba_module_assembly`; `final_assembly_configuration_test` | 合格输出、良率、测试失败、返工与最终报废 | 生产订单、测试系统、维修日志、质量放行、称重记录 | 产品家族；机型；工单；投入台数；合格台数；失败台数；返工台数；报废台数；核验净单位质量；输出质量 | 自动测试与生产记录同质量放行和经校准质量测量核对 | kg 和 piece | 每工单和班次 | 完整的已声明代表性生产期 | 所有受代表的最终和模组组装线 | 返工单元按最终处置只计一次；按同质产品家族计算净合格质量 | 测试系统审计轨迹、质量放行、秤具校准、良率核对 |
| `cp_packaging_accessories` | `packaging_warehousing_dispatch` | 销售包装、捆绑附件与发运放行净产品 | 包装 BOM、附件 BOM、包装作业指导、领料、包装单元与发运记录 | 销售配置；包装物项；附件物项；数量；单位质量；参考质量计入/排除；设备台数；设备净质量；包装后质量 | 包装和附件领用同包装与发运单元核对；称量代表性配置 | kg 和 piece | 每销售配置和生产订单 | 与参考输出相同期间 | 范围内所有包装场址和销售配置 | 分别汇总包装和附件质量；各自按设备净 kg 归一化 | 批准的包装规范、秤具校准、领料与发运核对 |
| `cp_direct_releases` | all process ids | 用水和直接基本流排放 | 水表、排放监测、实验室结果、许可报告 | 流身份；环境介质；数量；单位；时间戳；排放点；过程；处理；检出限；分配驱动因子 | 使用经校准仪表或验证监测方法；每一种实际基本流建立一条清单行 | 流特定单位 | 监测或许可规定频率 | 与生产输出相同期间 | 为所纳入生产服务的每个受控排放点和水源 | 按流和环境介质汇总，按物理方法分配，并按合格输出归一化 | 校准、实验室 QA/QC、许可报告、质量平衡交叉核查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 每一清单数量 | 归一化数量 = 可归属报告期数量 / 合格成品电话净 kg | 可归属流数量；来自 `cp_output_yield_rework` 的净合格输出质量 | 每 1 kg 净成品电话的流数量 | `etsi-es-203-199-v1-4-1-2025` |
| `calculate_net_output_mass` | 以台数记录的输出 | 净输出质量 = 各同质产品家族的合格设备台数 × 核验净单位质量之和；不计包装或单独捆绑附件 | 合格台数；核验净单位质量；机型或家族份额 | 净合格成品电话 kg 与每 kg 设备台数 | `eu-regulation-2023-1670-consolidated` |
| `reconcile_component_mass` | BOM 部件、中间输出、不合格品与库存 | 核对接收投入质量与合格输出、已记录库存变化、退料、返工库存和废物；调查差异，不得强制配平 | BOM 与收货质量；领退料；输出质量；库存变化；不合格品与废物质量 | 质量平衡核对与未解释差异 | `etsi-es-203-199-v1-4-1-2025` |
| `allocate_shared_facility_data` | 共享能源、公用工程和设施负荷 | 优先细分；否则按相关物理驱动因子分配。只有物理数据不足时才采用经济分配，并进行敏感性检查。 | 共享总量；产品系统驱动因子值；输出身份；仅用于后备方法的价格数据 | 按产品系统归属的共享数量 | `etsi-es-203-199-v1-4-1-2025` |
| `separate_packaging_and_accessories` | 包装销售配置 | 分别报告设备净质量、包装质量和捆绑附件质量；按设备净 kg 归一化包装和附件数量，但不将其加入参考质量 | 包装 BOM；附件 BOM；设备净质量；包装台数 | 分开的 kg 包装/kg 设备和 kg 附件/kg 设备 | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与产品混合 | 证明完整电话 CPC 47222 身份及 exact Tiangong 参考流；保留机型家族组成，不得用具名机型作为通用代理。 | 产品规格、批准产品清单、机型混合和销售配置记录、参考流 UUID 检查 |
| `dq_bom_completeness` | 适用部件与上游链接 | 覆盖所有实际 BOM 行和适用部件类别；记录质量或相关物理参数，并记录缺失供应商数据集及替代。 | 批准的 BOM、供应商声明、收货核对、上游数据集登记表 |
| `dq_primary_data` | 受控前景过程 | 对受控组装、配置、测试、包装、公用工程、良率、返工和废物使用实测或记录的一次活动数据。 | 仪表、生产和测试系统、发票、领料记录、废物联单、校准记录 |
| `dq_temporal_representativeness` | 所有前景记录 | 使用一个一致声明期间，覆盖正常生产、产品混合变化、停机、返工和包装活动；说明排除项或较短生产活动的理由。 | 报告期登记表、生产日历、停机和换线记录 |
| `dq_technology_and_geography` | 前景和上游数据集 | 尽可能匹配制造技术、供应商路线、工厂地理、电力市场、产品代际和报告期；披露代理数据集。 | 数据集元数据、供应商和场址记录、代表性评估 |
| `dq_cutoff_and_completeness` | 系统边界 | 排除任何流之前评估质量、能源和环境显著性，评估累计排除，并保留 cut-off 和敏感性记录。 | BOM 与能源覆盖检查、排放筛选、cut-off 登记、敏感性结果 |
| `dq_allocation_consistency` | 共享过程与设施 | 对共同过程产生的全部环境负荷采用一种有记录的分配方法，并把分配后总量与分配前源总量核对。 | 分配工作表、驱动因子记录、总量核对、敏感性检查 |
| `dq_uncertainty_and_traceability` | 发布数据集 | 描述完整性、不确定性、采集方法、供应商独立性、地理、技术、数据年龄、方法一致性和所有未解决数据缺口。 | 数据质量评估和来源至清单审计轨迹 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_exact_reference_identity` | 参考流 | 参考产品流必须为 `1fdb2343-534a-4818-814d-5dc99b291ac1`，即带 Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66` 的完整 CPC 47222 Product flow；拒绝部件、具名机型、固定电话、有线设备或网络设备代理。 | `unsd-cpc-3-0`; `eu-regulation-2023-1670-consolidated` |
| `validate_reference_normalization` | 参考数量 | 数据集必须精确归一化到最终测试后 1 kg 净合格成品电话输出，并披露每 kg 设备台数和产品混合加权。 | `etsi-es-203-199-v1-4-1-2025` |
| `validate_required_qualifiers` | 数据集身份 | 第 3 节每一必需限定信息都必须存在，并在产品说明、过程记录和流备注之间保持一致。 | `iec-63366-2025`; `etsi-es-203-199-v1-4-1-2025` |
| `validate_bom_and_part_coverage` | 外购投入 | 实际 BOM 以及适用的电池、电子组件、显示组件、机电件、外壳、电缆、相机、音频和其余部件类别必须定量，或明确声明不存在；列出上游数据集和替代。 | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |
| `validate_process_coverage` | 生产阶段 | 部件生产链接、PCBA 或模组组装、最终组装、配置与测试、包装、仓储和发运均应表示；外包只改变数据来源，不能改变纳入状态。 | `etsi-es-203-199-v1-4-1-2025` |
| `validate_foreground_records` | 受控生产数量 | 必需的能源、材料、公用工程、良率、返工、不合格品、包装、废物和直接排放数量必须来自已声明前景记录或链接采集协议的计算；不得以具名机型通用数量替代。 | `etsi-es-203-199-v1-4-1-2025` |
| `validate_mass_and_yield_reconciliation` | 每一生产期间 | 外购和领用质量、内部转移、净合格输出、库存变化、退料、返工和废物应完成核对；未解释差异应报告并调查。 | `etsi-es-203-199-v1-4-1-2025` |
| `validate_allocation_and_cutoff` | 共享负荷与排除 | 分配必须遵守第 7 节，分配后总量应核对一致；每一 cut-off 均应通过质量、能源、环境、累计和敏感性检查。 | `etsi-es-203-199-v1-4-1-2025` |
| `validate_packaging_accessory_separation` | 参考质量与清单 | 销售包装和单独捆绑附件应单独编制清单和披露，不得计入 1 kg 净电话参考质量。 | `etsi-es-203-199-v1-4-1-2025`; `eu-regulation-2023-1670-consolidated` |
| `validate_inventory_flow_identity` | 具体前景数据包 | 发布前，每一个具体产品流、废物流和基本流都必须具有语义 exact 的 Tiangong 身份以及流适配属性与单位；本候选 PCR 中未解析的角色说明不构成虚构 UUID 的许可。 | `iec-63366-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整新制无线网络电话的前景制造数据包；经评审后可发布为 `secondary_dataset` 和/或 `background_dataset` |
| downstream_use | 完整电话制造的供应链和从摇篮到工厂门建模；作为另行规定的完整生命周期开启 `process` 或 `lifecyclemodel` 的上游生产模块 |
| allowed_use | 用于所声明产品混合、场址、期间、制造路线、净质量基准、包装配置、分配方法和数据质量水平；适配其他情形前须明确评估代表性 |
| excluded_use | 直接代理具名设备机型、电话部件、无绳固定或有线电话、网络设备、平板电脑或可穿戴设备；用作使用阶段或网络运行数据集；表述为完整从摇篮到坟墓结果；在功能、边界、数据质量、分配和 cut-off 假设不等效时进行公开比较声明 |
| required_metadata | canonical PCR id；CPC 坐标；exact 参考流、属性和单位组 UUID；产品家族和质量加权混合；网络技术；场址与地理；期间；设备台数和净质量；电池与整体部件处理；包装、附件和充电器处理；自有与外包步骤；BOM 与上游数据集；良率与返工；分配与 cut-off 方法 |
| required_quality_disclosure | 前景计量覆盖；BOM 与供应商数据覆盖；时间、地理和技术代表性；仪表与秤具质量；分配和质量平衡核对；上游替代；cut-off；不确定性；直接排放筛选；未解决数据与数值范围缺口 |
| update_trigger | 产品范围、部件架构、电池或显示技术、机型混合、制造或外包路线、场址或电力供应、包装或附件、分配驱动因子、供应商数据集、参考流身份、治理标准或数据质量证据发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0，官方结构与分类资源，https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml（检索于 2026-08-09） | CPC 47222 分类坐标和独立于分类树的范围控制 |
| `iec-63366-2025` | `standard` | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691（检索于 2026-08-09） | EEPS PCR 横向框架、补充产品特定规则、功能单位和报告语境 |
| `etsi-es-203-199-v1-4-1-2025` | `standard` | ETSI ES 203 199 V1.4.1 (2025-01), Methodology for environmental Life Cycle Assessment (LCA) of Information and Communication Technology (ICT) goods, networks and services, https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf（检索于 2026-08-09） | ICT 产品组成、适用必需部件、PCBA 与最终组装、仓储和包装、系统边界、cut-off、前景数据、物理分配、数据质量与校验 |
| `eu-regulation-2023-1670-consolidated` | `standard` | 欧盟委员会关于智能手机、其他移动电话、无绳电话和平板电脑生态设计要求的法规 (EU) 2023/1670 合并文本，https://eur-lex.europa.eu/eli/reg/2023/1670/2025-06-20/eng（检索于 2026-08-09） | 区分移动电话和智能手机与无绳固定电话，并采用电池、显示组件、相机、音频件、端口和附件的官方术语；不用于把 CPC 47222 缩窄为欧盟受管产品 |

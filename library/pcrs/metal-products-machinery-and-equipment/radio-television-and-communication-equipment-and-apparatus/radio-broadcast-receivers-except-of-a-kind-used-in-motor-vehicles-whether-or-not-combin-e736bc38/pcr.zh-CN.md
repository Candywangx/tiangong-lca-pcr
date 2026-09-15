---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-except-of-a-kind-used-in-motor-vehicles-whether-or-not-combin-e736bc38
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无线电广播接收机（机动车辆用除外），不论是否与录音、放音设备或时钟组合

## 1. 范围与适用性

本 PCR 适用于家庭、应急、台式或便携使用的新制成品无线电广播接收机。产品可以将广播接收功能与扬声器、显示器、时钟或录放音设备组合。声明的产品配置必须列明所有接收频段或频率范围、模拟调制方式或数字广播制式、便携或台式形态、电源方式、电池、扬声器、显示器、时钟以及实际具备的录音或放音功能。

本 PCR 不适用于设计为安装或使用于机动车辆的接收机、电视接收器、无线电发射机、电信接收设备、未构成完整接收机的零部件，或不具备广播接收功能的纯音频播放器。多功能产品只有在无线电广播接收是可销售且可测试的功能，并且不具备电视接收功能时才属于本范围。

核心前景边界为每 1 kg 制成品接收机从摇篮到工厂大门的生产。摇篮到坟墓研究还必须纳入有条件的使用阶段和生命末期过程，并声明使用寿命、播放和待机时序、区域电力、电池更换及处置情景。本 PCR 不提供类别通用数值默认值；必须采用实测前景记录和有明确文件依据的产品情景。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-except-of-a-kind-used-in-motor-vehicles-whether-or-not-combin-e736bc38 |
| classification_refs | CPC 3.0: 47311，exact |
| covered_products | 家庭、应急、台式和便携式无线电广播接收机，不论是否与扬声器、显示器、时钟或录放音设备组合 |
| excluded_products | 车载无线电接收机；电视接收器；无线电发射机；电信接收设备；接收机零部件；不具备广播接收功能的纯音频播放器 |
| representative_product | 已声明实际调谐器、天线、外壳、PCB 组件、电源系统、扬声器以及可选显示器、时钟、录音或放音功能的新制成品无线电接收机 |
| production_route | 电子组件装配、接收机总装、功能与功耗模式测试、包装；使用和生命末期为有条件扩展 |
| market_state | 工厂大门处的新制成品接收机，以所声明场址和期间的产量加权产出表示 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有所声明产品配置的新制成品非车载无线电广播接收机 |
| How much | 1 kg 制成品接收机净质量，不含运输和销售包装 |
| How well | 满足所声明频段、调制方式或数字广播制式、形态、电源结构、接收与音频功能及适用的产品验收准则 |
| How long or cycle | 一个所声明的生产批次或报告期产品组合；下游使用研究还需声明产品使用寿命和运行时序 |
| reference_flow_link | `final_assembly` 的参考产出，其产品净质量与组件 BOM 和实测生产产出相核对 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 无线电广播接收器（汽车上使用的除外），无论是否与录音或复制设备或时钟结合在一起 `d85eef63-dec7-4d95-a2b5-546e6cb92224` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 接收频段和频率范围；模拟调制方式和数字广播制式；便携、台式或应急形态；适用时的内置电池、外接电源、交流市电、手摇或太阳能电源结构；电池化学体系、额定容量、可拆卸性和更换安排；内置扬声器和外接音频输出；显示器和时钟；录放音功能及介质；调谐器和天线配置；产品净质量；制造地理位置和参考年；包括信号、音量或音频输出、显示器、时钟和电源的播放测试状态；待机、关机、联网待机和自动关机状态；适用时声明的使用寿命和使用情景 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 制成品接收机参考流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有工厂大门清单按 1 kg 实测制成品净质量归一化；不含包装质量，包装另行报告。 |
| `component_mass` | PCB 或 PCBA、外壳、扬声器、显示器、时钟或录音模块、电池、电源、线缆、紧固件及其他组件 | Mass | kg/kg 制成品接收机 | 按材料或组件记录实测或供应商声明质量，并与净产出质量和生产废料核对。 |
| `factory_energy` | 制造、装配、测试和包装能源 | Energy | kWh/kg 制成品接收机 | 计量声明报告期内的电力和其他能源，分配后按合格制成品质量归一化。 |
| `power_modes` | 播放或活动、待机、关机和联网待机模式 | Power | W | 在接收机电源接口测量每个适用且定义明确的运行模式；活动音频运行采用 IEC 62087-6，待机和其他非活动模式采用 IEC 62301，并记录测试配置。 |
| `use_energy` | 所声明使用阶段情景 | Energy | kWh/kg 制成品接收机/所声明使用寿命 | 根据实测模式功率和各模式声明小时数计算；避免重复计算外接充电或电池能源。 |
| `packaging_mass` | 归属于产品的初级、次级和三级包装 | Mass | kg/kg 制成品接收机 | 包装材料质量与接收机净质量分开记录，并按发运制成品质量归一化。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core_production` | 从摇篮到工厂大门数据集 | 纳入通过可得供应商数据集表示的采购材料和组件上游生产、声明研究范围内的进厂运输、电子组件装配、总装、功能与功耗模式测试、包装、工厂能源与公用工程、直接排放、废料、返工以及归属于接收机的废物处理。 | `eu-recommendation-2021-2279`; `iec-82474-1-2025` |
| `boundary_product_configuration` | 所有数据集 | 表示实际 PCB 或 PCBA、外壳、调谐器和天线、扬声器、显示器、时钟或录音模块、电池、外接电源、线缆、紧固件、附件和随产品提供的包装；缺少的可选部件标记为不适用。 | `iec-82474-1-2025` |
| `boundary_use_extension` | 摇篮到坟墓数据集 | 仅对产品实际具备的模式和电源纳入播放或活动、待机、关机、联网待机、充电及替换电池能源，并采用声明的使用寿命和区域情景。 | `iec-62087-6-2015`; `iec-62301-2026`; `eu-regulation-2023-826`; `eu-recommendation-2021-2279` |
| `boundary_end_of_life_extension` | 摇篮到坟墓数据集 | 采用声明的区域情景纳入收集、再使用准备、适用时的电池拆卸、拆解、回收、能量回收和处置；接收机、电池和包装路径必须可区分。 | `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |
| `boundary_exclusions` | 产品身份与模型 | 排除车载接收机、电视接收器、无线电发射机、电信接收设备、仅零部件产品和无广播接收功能的纯音频播放器；披露任何被排除的资本设备、员工差旅或其他截断项。 | `eu-recommendation-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购组件和材料以供应商身份、来源、质量及可得上游数据集进入前景接收大门；自行制造的零件保留在前景边界内 |
| starting_condition_role | 防止报告组织实施的组件制造被隐藏为采购投入，并确定上游数据集连接位置 |
| product_classification_scope | 满足 CPC 3.0 代码 47311 及第 2 节覆盖产品定义的制成品 |
| recursive_input_rule | 同类别制成品作为投入时，以单独识别的采购或再使用产品记录其来源、状态、质量和上游数据集，不在同一前景过程图内递归展开 |
| upstream_dataset_requirement | 优先使用供应商特定数据集；否则使用地理和技术上有代表性的数据集，并披露提供方、地理位置、参考年和替代关系 |
| disclosure | 声明组织与物理边界、报告期、设施、外包步骤、组件来源、运输纳入情况、截断项、使用与生命末期扩展以及全部数据集替代 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `electronics_assembly` | 电子组件装配 | required | 电路板装配外包时纳入供应商 PCBA 投入，否则纳入场内 PCB 贴装和焊接 | 核心生产 | 交付总装的合格电子组件 |
| `final_assembly` | 接收机总装 | required | 始终纳入 | 核心生产 | 1 kg 合格制成品接收机净质量 |
| `functional_test` | 功能与功耗模式测试 | required | 始终纳入，并声明实际具备的功耗模式 | 质量与计量 | 经测试的制成品接收机及实测模式功率记录 |
| `packaging` | 产品包装 | required | 始终纳入；仅在有证据证明不提供包装时才报告无包装 | 支持生产 | 发运的包装接收机 |
| `use_phase_operation` | 接收机使用阶段运行 | conditional | 摇篮到坟墓研究必须纳入 | 生命周期扩展 | 产品寿命内声明的无线电接收服务 |
| `end_of_life` | 接收机生命末期处理 | conditional | 摇篮到坟墓研究必须纳入 | 生命周期扩展 | 1 kg 废弃接收机以及单独建模的包装和替换电池 |

### 过程：电子组件装配（`electronics_assembly`）

#### 输入

##### 产品流

###### 印刷电路板、元器件和电子子组件（`electronics_components_input`）

记录跨越场址边界的实际采购裸板、已贴装板、调谐器、天线、半导体、无源元件、连接器、线缆、焊料及其他电子材料。

- 选定流：为每项采购组件或材料选择供应商和技术特定产品流
- 流属性/单位：Mass / kg
- 数量规则：按合格电子组件分配的实测收货量或供应商 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每件交付总装的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`iec-82474-1-2025`

###### 电子装配能源和耗材（`electronics_energy_input`）

记录场内贴装、焊接、清洗、检查和返工的计量电力与材料耗材。外包装配时记录供应商数据集，不重复其能源。

- 选定流：选择场址和市场特定的电力、燃料及耗材产品流
- 流属性/单位：Energy / kWh；适用时 Mass / kg
- 数量规则：按合格电子组件分配的报告期计量或发票核对用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每件交付总装的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_energy`
- 来源：`eu-recommendation-2021-2279`

##### 废物流

###### 电子废料和不合格组件（`electronics_scrap_output`）

记录不合格电路板、元器件废料、焊料残余物、清洗残余物及其处置去向，不得从采购投入中净扣除。

- 选定流：按材料和危险类别选择处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：归属于电子装配的称重或废物转移记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每件交付总装的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_emissions`
- 来源：`eu-recommendation-2021-2279`

##### 基本流

###### 电子装配直接排放（`electronics_direct_emissions`）

记录焊接、清洗及其他场内电子操作跨越环境边界的实测或许可排放。

- 选定流：选择物质和环境介质特定的基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放、质量平衡或有文件依据的排放因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每件交付总装的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_scrap_and_emissions`
- 来源：`eu-recommendation-2021-2279`

#### 输出

##### 产品流

###### 已贴装接收机电子组件（`electronics_assembly_output`）

记录转入产品总装的合格电子组件。

- 选定流：选择产品特定的中间电子组件流
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：报告期合格产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`iec-82474-1-2025`

##### 废物流

##### 基本流

### 过程：接收机总装（`final_assembly`）

#### 输入

##### 产品流

###### 接收机组件和子组件（`receiver_components_input`）

按实际产品配置记录电子组件、外壳零件、扬声器、显示器、时钟或录音模块、电池、外接电源、线缆、紧固件和附件。缺少的可选元件应标记为不适用，不得假定为零。

- 选定流：为每项组件和子组件选择供应商和产品特定流
- 流属性/单位：Mass / kg
- 数量规则：投入合格生产的实测或供应商声明 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成品接收机净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`iec-82474-1-2025`

###### 总装能源和耗材（`final_assembly_energy_input`）

记录机械装配和精整所用计量电力、压缩空气、燃料、胶黏剂、清洁剂及其他耗材。

- 选定流：选择场址和市场特定的公用工程及耗材产品流
- 流属性/单位：Energy / kWh；适用时 Mass / kg
- 数量规则：按合格接收机产出分配的报告期计量或发票核对用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成品接收机净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_energy`
- 来源：`eu-recommendation-2021-2279`

##### 废物流

###### 装配废料和不合格接收机（`assembly_scrap_output`）

按去向记录外壳、线缆、紧固件、胶黏剂、电池及混合产品废料和不合格接收机。

- 选定流：按材料和危险类别选择处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：归属于总装的称重或废物转移记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成品接收机净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_emissions`
- 来源：`eu-recommendation-2021-2279`

##### 基本流

###### 总装直接排放（`assembly_direct_emissions`）

记录胶黏剂、清洁、精整和燃料使用中跨越环境边界的场内排放。

- 选定流：选择物质和环境介质特定的基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放、质量平衡或有文件依据的排放因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成品接收机净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_scrap_and_emissions`
- 来源：`eu-recommendation-2021-2279`

#### 输出

##### 产品流

###### 制成品无线电广播接收机（`finished_receiver_output`）

记录包装前合格接收机净质量。流身份采用为 CPC 47311 验证的天工 Product flow。

- 选定流：无线电广播接收器（汽车上使用的除外），无论是否与录音或复制设备或时钟结合在一起 `d85eef63-dec7-4d95-a2b5-546e6cb92224`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格制成品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格制成品接收机净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_output_mass`
- 来源：

##### 废物流

##### 基本流

### 过程：功能与功耗模式测试（`functional_test`）

#### 输入

##### 产品流

###### 被测接收机和测试能源（`test_input`）

记录进入测试的接收机以及接收、音频、显示器、时钟、录音、待机、关机和充电测试所用电力或电池能源，并声明信号源、频段、调制、音频输出或音量、显示状态、电源、稳定时间和测试时长。

- 选定流：制成品接收机流及场址特定电力或电池能源流
- 流属性/单位：Mass / kg；Energy / kWh
- 数量规则：归属于合格生产的被测接收机质量和计量测试能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成品接收机净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power_mode_test`
- 来源：`iec-62087-6-2015`; `iec-62301-2026`

##### 废物流

###### 测试不合格品和更换零件（`test_failure_output`）

记录测试中不合格的接收机或零件，并区分返回生产的返工与送处置的废物。

- 选定流：选择产品或处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：称重不合格质量减去有文件记录的返工返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成品接收机净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_emissions`
- 来源：`eu-recommendation-2021-2279`

##### 基本流

#### 输出

##### 产品流

###### 经测试接收机和功耗模式记录（`tested_receiver_output`）

记录合格接收机质量及所声明配置实际具备模式的实测播放或活动、待机、关机和联网待机功率。

- 选定流：制成品接收机流及产品特定测试记录
- 流属性/单位：Mass / kg；Power / W
- 数量规则：合格被测质量和相同声明状态下有效稳定测量的算术平均值，保留单次读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所声明接收机配置和测试状态
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power_mode_test`
- 来源：`iec-62087-6-2015`; `iec-62301-2026`; `eu-regulation-2023-826`

##### 废物流

##### 基本流

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 包装材料（`packaging_materials_input`）

按材料记录初级、次级和分配的三级包装，包括印刷说明书、防护衬垫、袋、纸箱、托盘及随附附件包装。

- 选定流：选择材料和供应商特定包装产品流
- 流属性/单位：Mass / kg
- 数量规则：按发运接收机产出分配的实测包装 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运制成品接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`eu-recommendation-2021-2279`

###### 包装能源和耗材（`packing_energy_input`）

记录尚未计入包装产品流的包装线计量能源和耗材。

- 选定流：选择场址和市场特定能源及耗材产品流
- 流属性/单位：Energy / kWh；适用时 Mass / kg
- 数量规则：按发运接收机分配的报告期用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运制成品接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_energy`
- 来源：`eu-recommendation-2021-2279`

##### 废物流

###### 包装线废物（`packaging_waste_output`）

按处理去向记录边角料、破损包装和不合格印刷材料。

- 选定流：选择处理特定包装废物流
- 流属性/单位：Mass / kg
- 数量规则：按发运接收机分配的称重包装线废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运制成品接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_and_emissions`
- 来源：`eu-recommendation-2021-2279`

##### 基本流

#### 输出

##### 产品流

###### 包装接收机（`packaged_receiver_output`）

将发运接收机数量、产品净质量和包装质量作为不同数量记录。

- 选定流：产品特定的包装接收机发运记录
- 流属性/单位：Mass / kg
- 数量规则：接收机净质量与单独识别的包装质量之和，但不改变 1 kg 净产品参考量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：报告期发运产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：`eu-recommendation-2021-2279`

##### 废物流

##### 基本流

### 过程：接收机使用阶段运行（`use_phase_operation`）

#### 输入

##### 产品流

###### 运行电力和替换电池（`use_energy_input`）

摇篮到坟墓研究应记录声明使用寿命内的电力、一次电池、可充电电池损耗和替换电池，仅应用产品实际具备的电源和模式。

- 选定流：选择区域电力和化学体系特定电池产品流
- 流属性/单位：Energy / kWh；适用时 Mass / kg
- 数量规则：根据实测模式功率、声明小时数和充电效率计算，并加入有文件依据的电池更换
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 接收机在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`iec-62087-6-2015`; `iec-62301-2026`; `eu-regulation-2023-826`; `eu-recommendation-2021-2279`

##### 废物流

###### 废弃替换电池（`spent_battery_output`）

按化学体系和区域收集或处理路径记录使用中移除的废电池。

- 选定流：选择化学体系和处理特定的废电池流
- 流属性/单位：Mass / kg
- 数量规则：声明电池质量乘以有文件依据的更换次数，不含在接收机生命末期计入的原装电池
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 接收机在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279`

##### 基本流

#### 输出

##### 产品流

###### 声明的无线电接收服务（`radio_service_output`）

记录假定寿命内提供的声明服务，并保留播放、待机、关机及其他适用模式的小时数。

- 选定流：产品特定的无线电接收服务记录
- 流属性/单位：Time / h
- 数量规则：声明使用寿命内互斥模式小时数之和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 接收机在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`eu-recommendation-2021-2279`

##### 废物流

##### 基本流

### 过程：接收机生命末期处理（`end_of_life`）

#### 输入

##### 产品流

###### 废弃接收机、电池和包装（`end_of_life_input`）

摇篮到坟墓研究应分别记录进入区域收集处理的废弃接收机、内置电池、尚未计入的替换电池和包装组分。

- 选定流：选择产品、材料、电池化学体系和区域特定生命末期投入流
- 流属性/单位：Mass / kg
- 数量规则：情景份额乘以废弃质量，各物流份额之和等于相应声明废弃质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 接收机在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 回收材料和可再使用组分（`recovered_material_output`）

只有在选定处理数据集提供有文件依据的产出时才记录回收材料或可再使用组件，并应用声明的分配或替代规则。

- 选定流：选择处理特定回收产品流
- 流属性/单位：Mass / kg
- 数量规则：来自有文件依据区域情景的处理产出量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 废弃接收机或单独声明的物流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-directive-2012-19-weee`; `eu-recommendation-2021-2279`

##### 废物流

###### 残余处理废物（`residual_waste_output`）

按处理路径记录电子、塑料、玻璃、金属、电池及处置残余物。

- 选定流：选择材料和处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：来自有文件依据区域情景的处理产出量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 废弃接收机或单独声明的物流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享生产、公用工程、测试、返工和废物处理 | 优先按产品族、生产线、批次或测试工位直接计量和细分，以避免分配。 | `eu-recommendation-2021-2279` |
| `allocation_physical` | 无法避免的共享投入和产出 | 采用有文件依据的因果物理驱动因素分配，如机器时间、测试时长、直接能源、合格件数或质量，并说明其为何反映资源使用。 | `eu-recommendation-2021-2279` |
| `allocation_economic_fallback` | 无合理物理驱动因素的共享操作 | 仅将经济分配作为已披露的后备方法，说明价格和参考期，并对实质影响结果报告敏感性。 | `eu-recommendation-2021-2279` |
| `allocation_rework_scrap` | 返工、不合格品和可回收生产废料 | 将返工和不合格负荷归于产生它们的生产；单独报告废料质量和处理，不得从投入数量中扣除收入或回收质量。 | `eu-recommendation-2021-2279` |
| `allocation_end_of_life` | 再使用、再循环、回收和处置 | 声明所选生命末期分配或替代方法，在各材料物流间一致应用负荷和抵扣，并防止产品系统与回收材料使用者之间重复计算。 | `eu-recommendation-2021-2279`; `eu-directive-2012-19-weee` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_configuration` | `final_assembly` | 产品身份和必需限定信息 | 产品主数据和技术记录 | 型号或系列；CPC 代码；频段和频率范围；调制和数字制式；形态；电源；电池；扬声器；显示器；时钟；录放音；调谐器；天线；净质量 | 从批准的产品规格和配置 BOM 受控提取 | text；kg | 每次型号或配置变更 | 当前生产声明 | 每个代表型号和场址 | 保留配置特定字段，仅对明确组合的型号按产量加权 | 批准规格；配置 BOM；责任人签字 |
| `cp_component_bom_mass` | `electronics_assembly`; `final_assembly` | 组件和材料组成 | BOM 和供应商声明 | 零件号；组件角色；材料；供应商；质量；数量；声称的再生含量；电池化学体系和容量 | 核对工程 BOM、样品实测质量、采购记录和供应商声明 | kg | 每次 BOM 修订并按报告期核对 | 与生产相同期间或有文件依据的现行 BOM | 每个代表场址和产品配置 | 经验证单位质量乘以合格产量；PCB、外壳、包装、电池、电源、扬声器、显示器和可选模块保持区分 | 批准 BOM；秤量记录；供应商材料声明 |
| `cp_factory_energy` | `electronics_assembly`; `final_assembly`; `packaging` | 能源和公用工程 | 计量表、发票和生产日志 | 表计标识；起止读数；燃料或公用工程类型；日期；生产线时数；合格产出；分配驱动因素 | 优先分表计量，并与场址发票和生产记录核对 | kWh；MJ；适用时 kg | 每月或每个生产批次 | 有代表性的连续期间，通常至少一个生产批次 | 每个代表设施和外包步骤 | 汇总有效读数，扣除有文件依据的非产品负荷，再按第 7 节分配 | 校准记录；发票；表计日志；生产核对 |
| `cp_scrap_and_emissions` | `electronics_assembly`; `final_assembly`; `functional_test`; `packaging` | 废料、废物、返工和直接排放 | 称重单、废物转移记录、返工日志、监测记录 | 材料或物质；危险类别；质量；环境介质；去向；返工返回；日期 | 可行时称重；无法直接测量时使用有文件依据的质量平衡或许可因子 | kg | 每次转移或报告间隔 | 与生产相同期间 | 每个代表设施 | 按材料、危险类别、环境介质和去向汇总，返工保持单列 | 称重单；转移联单；监测和计算工作表 |
| `cp_output_mass` | `electronics_assembly`; `final_assembly` | 合格产出 | 生产和质量记录 | 合格件数；抽样单位质量；不合格件数；净产出质量；型号组合 | 采用校准秤量并与生产件数核对 | kg | 每批或统计上合理的抽样方案 | 与生产相同期间 | 每条代表生产线和产品配置 | 合格件数乘以经验证单位质量，或直接批量称重；产量加权前保留型号特定值 | 秤校准；抽样方案；生产放行记录 |
| `cp_power_mode_test` | `functional_test` | 播放、待机、关机、联网待机和自动关机 | 实验室或生产测试记录 | 型号；电源；频段；调制；信号；音频输出或音量；扬声器；显示器；时钟；录音状态；电池或充电状态；稳定时间；模式；W；时长；环境条件 | 活动音频模式按 IEC 62087-6、非活动模式按 IEC 62301 在声明电源接口测量 | W | 每个代表型号及影响功耗的固件或硬件变更 | 当前销售配置 | 每个代表配置和适用电压 | 按模式保留读数；仅对相同声明状态下有效重复测量求平均 | 测试方法；校准功率计记录；原始时间序列；配置照片或日志 |
| `cp_packaging_bom` | `packaging` | 包装材料 | 包装规格和发运记录 | 材料；层级或角色；单位质量；每台数量；声称的重复使用次数；发运件数 | 称量包装组件并与采购和发运记录核对 | kg | 每次包装修订并按报告期核对 | 与发运相同期间 | 每个代表产品配置 | 汇总每台发运接收机的材料质量，分别报告初级、次级和分配的三级包装 | 包装规格；秤量记录；采购与发运核对 |
| `cp_use_scenario` | `use_phase_operation` | 寿命能源和电池更换 | 情景与实测功率记录 | 使用寿命；各互斥模式小时数；各模式实测 W；电网区域；充电效率；电池化学体系；容量；更换次数 | 将产品特定功率测试与有文件依据的地理相关使用情景结合 | h；W；kWh；kg | 每项研究及重大设计或市场变化 | 声明的情景参考年和使用寿命 | 声明的市场地理位置 | 按第 8 节公式计算；仅对有文件依据的用户分群进行情景加权 | 情景来源；功率测试记录；计算工作簿；敏感性案例 |
| `cp_end_of_life_scenario` | `end_of_life` | 处理路径和产出 | 区域情景和处理数据集 | 收集份额；再使用；再循环；回收；处置；电池拆卸；材料产出；残余废物；地理；年份 | 将接收机、电池和包装质量映射到有文件依据的区域处理路径 | kg；fraction | 每项研究及法规或处理变化 | 声明的情景参考年 | 声明的市场地理位置 | 每项物流路径份额之和为一；保留处理产出和残余物 | 官方统计或处理记录；选定数据集元数据；质量平衡工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_bom_normalization` | PCB 或 PCBA、外壳、扬声器、显示器、时钟或录音模块、电池、电源、附件和包装 | 经验证单位质量乘以合格件数后求和，再除以合格接收机净质量；包装单独报告。 | 单位质量；数量；合格件数；净产出质量 | kg 组件或包装/kg 制成品接收机 | `iec-82474-1-2025`; `eu-recommendation-2021-2279` |
| `calc_factory_energy` | 工厂电力、燃料和公用工程 | 从核对后的报告期用量中扣除有文件依据的无关负荷，应用第 7 节分配驱动因素，再除以合格接收机净质量。 | 表计或发票用量；排除负荷；分配驱动因素；产出质量 | kWh、MJ 或 kg/kg 制成品接收机 | `eu-recommendation-2021-2279` |
| `calc_mass_balance` | 电子装配、总装和包装 | 将材料与组件投入同合格产出、单独报告的废料、废物、在制品库存变化及实测排放比较；调查差异，不得强行闭合。 | 投入质量；产出质量；废料；废物；库存变化；排放 | 已披露的过程质量平衡差异和核对状态 | `eu-recommendation-2021-2279` |
| `calc_mode_energy` | 使用阶段电力 | 对互斥模式，寿命电力等于各模式 W 乘以声明寿命小时数之和再除以 1000；再除以接收机净质量得到 PCR 参考基准。充电损耗处理须一致，不得把一次电池内含能同时算作电网电力。 | 各模式实测 W；各模式小时数；使用寿命；适用时充电效率；产品净质量 | kWh/kg 接收机/声明使用寿命 | `iec-62087-6-2015`; `iec-62301-2026`; `eu-recommendation-2021-2279` |
| `calc_battery_replacements` | 使用阶段电池 | 以电池质量和上游数据集乘以初装和寿命内有文件依据的电池数量；原装电池在生产投入和末期废物中各计一次，每次替换电池作为投入和废电池各计一次。 | 化学体系；电池质量；原装电池；更换次数；使用寿命 | kg 电池投入和废物/kg 接收机/声明寿命 | `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |
| `calc_production_mix` | 一个数据集表示的多个型号 | 先计算各型号特定清单，再按报告期合格接收机净生产质量加权；频段、电源结构或集成功能实质不同的配置不得无披露地平均。 | 型号清单；各型号合格质量；配置限定信息 | 产量加权清单/kg 接收机 | `eu-recommendation-2021-2279` |
| `calc_end_of_life` | 接收机、电池和包装处理 | 将各项单独声明废弃质量乘以和为一的路径份额，再应用选定处理数据集和第 7 节生命末期分配方法。 | 质量；收集和处理份额；处理数据集 | 每 kg 接收机的处理投入、回收产出、残余废物、负荷及已披露抵扣 | `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technological` | 产品和过程代表性 | 匹配声明的频段、调制或数字制式、形态、PCB 与调谐器设计、外壳、电源结构、电池、扬声器、显示器、时钟、录放音功能和制造路线。 | 产品规格；BOM 修订；过程图；供应商数据集元数据 |
| `dq_geographical` | 电力、材料、供应商、使用和生命末期 | 表示实际制造和市场地理位置，或披露每项地理代理及其可能影响。 | 场址位置；供应商来源；电力市场；情景和数据集地理 |
| `dq_temporal` | 前景记录和背景数据集 | 使用代表当前制造的生产期并记录来源年份；评估设计、固件、供应链、电力、使用和处理变化。 | 报告日期；BOM 和固件修订；数据集年份；更新审查 |
| `dq_precision` | 质量、能源、功率、废料和产出测量 | 保留原始读数、校准状态、抽样与重复次数、汇总方程和未解释变异；不得用未披露的零替代缺失测量。 | 原始记录；校准证书；抽样方案；计算工作簿 |
| `dq_completeness` | 整个前景数据包 | 覆盖 PCB 或 PCBA、外壳、包装以及实际存在的电池、外接电源、扬声器、显示器、时钟、录放音元件，并覆盖待机和播放功耗；缺少元件须以证据声明不适用。 | 完整性清单；签字配置记录；清单与 BOM 核对 |
| `dq_consistency` | 双语和机器投影 | 两种语言中的稳定标识、天工 UUID、单位、过程与行 ID、规则、协议和来源 ID 保持一致；规范源变更后重新生成结构化投影。 | Builder lint；结构化投影指纹；双语标识检查 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 若无线电广播接收不是可销售和可测试的功能、CPC 47311 不适用，或产品属于车载接收机、电视接收器、发射机、电信接收设备、仅零部件产品或纯音频播放器，则失败。 |  |
| `validate_reference_flow` | 参考流 | 除非参考量为 1 kg 制成品接收机净质量，并使用 Product flow `d85eef63-dec7-4d95-a2b5-546e6cb92224`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，否则失败。 |  |
| `validate_configuration` | 必需限定信息 | 缺少频段或频率范围、调制或数字制式、形态、电源结构、扬声器、显示器、时钟、录放音功能、净质量、制造地理和参考年时失败；电池、外接电源和可选模块必须声明为存在、不存在或不适用。 | `iec-82474-1-2025` |
| `validate_inventory_completeness` | 生产清单 | 缺少 PCB 或 PCBA、外壳、包装、工厂能源、合格产出、废料或废物以及直接排放筛查时失败；要求按实际配置列出电池、电源、扬声器、显示器、时钟和录放音模块。 | `iec-82474-1-2025`; `eu-recommendation-2021-2279` |
| `validate_power_modes` | 功率测试 | 播放或活动功率以及每个实际具备的待机、关机或联网待机模式没有实测 W 值和声明测试状态时失败；不得把不存在的模式作为实测零。 | `iec-62087-6-2015`; `iec-62301-2026` |
| `validate_eu_power_claim` | 欧盟法规符合性声明 | 数据集声称符合 EU Regulation 2023/826 时，必须针对投放市场日期所适用的法规版本核验产品范围、日期、模式定义、限值、信息要求和修订；否则报告本检查不适用。 | `eu-regulation-2023-826` |
| `validate_mass_balance` | 生产过程 | 如果投入、产出、废料、废物、库存变化和排放记录不能在场址定义并披露的测量不确定度内核对，则失败；本 PCR 不得虚构数值容差。 | `eu-recommendation-2021-2279` |
| `validate_use_extension` | 摇篮到坟墓数据集 | 未声明使用寿命、各互斥模式小时数、产品特定实测功率、区域电力、电池更换假设和敏感性案例时失败；仅工厂大门数据集跳过为不适用。 | `iec-62087-6-2015`; `iec-62301-2026`; `eu-recommendation-2021-2279` |
| `validate_end_of_life_extension` | 摇篮到坟墓数据集 | 接收机、电池和包装路径未分开、各物流路径份额未核对、未识别区域处理数据集或未披露分配或替代时失败；仅工厂大门数据集跳过为不适用。 | `eu-directive-2012-19-weee`; `eu-regulation-2023-1542-batteries`; `eu-recommendation-2021-2279` |
| `validate_data_quality` | 所有数据集 | 缺少技术、地理、时间、精度、完整性或一致性证据，或未披露代理、截断、分配选择或缺失前景测量时失败。 | `eu-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 47311 新制成品无线电广播接收机生产前景数据包，并可扩展使用和生命末期阶段 |
| downstream_use | 为产品碳足迹、LCA、设计比较、采购和披露构建及审查天工 `process`、`lifecyclemodel` 和数据集投影 |
| allowed_use | 满足范围、参考流、前景采集、质量和校验规则的声明接收机配置及生产组合 |
| excluded_use | 车载接收机；电视接收器；发射机；电信接收设备；接收机零部件；纯音频播放器；没有披露理由的配置、地理或时间外推 |
| required_metadata | 规范 PCR id 和版本；CPC 3.0 代码 47311；产品型号或生产组合；全部必需限定信息；设施和地理位置；参考年和报告期；组织与物理边界；分配；截断；背景数据集；测试方法；纳入时的使用和生命末期情景 |
| required_quality_disclosure | BOM、质量、能源、功率、废料、排放、产出、包装、使用和处理记录的来源与质量；校准和抽样；数据缺口；代理；不确定性；分配敏感性；结构化投影指纹和校验结果 |
| update_trigger | 调谐器或广播制式、PCB 或电子架构、外壳或材料组成、电源结构或电池、集成功能、影响功耗的固件、生产路线、设施、供应商、包装、使用模式、法规或生命末期处理发生可能实质改变清单或范围的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-62087-6-2015` | standard | IEC 62087-6:2015，Audio, video, and related equipment — Determination of power consumption — Part 6: Audio equipment，https://webstore.iec.ch/en/publication/22586，访问日期 2026-08-09 | 活动或播放音频功率测量及测试状态披露 |
| `iec-62301-2026` | standard | IEC 62301:2026，Household electrical appliances — Measurement of standby power，https://webstore.iec.ch/en/publication/90194，访问日期 2026-08-09 | 交流、直流、外接电源或电池接口的待机、关机和其他非活动模式测量 |
| `eu-regulation-2023-826` | official_guidance | Commission Regulation (EU) 2023/826 on ecodesign requirements for off mode, standby mode, and networked standby energy consumption，https://eur-lex.europa.eu/eli/reg/2023/826/oj/eng，访问日期 2026-08-09 | 无线电设备范围、模式声明、信息要求及有条件的欧盟符合性校验 |
| `iec-82474-1-2025` | standard | IEC 82474-1:2025，Material declaration — Part 1: General requirements，https://webstore.iec.ch/en/publication/67763，访问日期 2026-08-09 | 组件与材料声明、供应商证据和 BOM 完整性 |
| `eu-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng，访问日期 2026-08-09 | 功能单位、生命周期边界、包装、电力、分配、计算和数据质量 |
| `eu-directive-2012-19-weee` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment，https://eur-lex.europa.eu/eli/dir/2012/19/oj/eng，访问日期 2026-08-09 | 无线电设备有条件的收集、回收、再循环和处置建模 |
| `eu-regulation-2023-1542-batteries` | official_guidance | Regulation (EU) 2023/1542 concerning batteries and waste batteries，https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng，访问日期 2026-08-09 | 适用市场和日期下有条件的电池身份、更换、拆卸、收集和生命末期披露 |

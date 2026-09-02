---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.electro-diagnostic-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 用于内科、外科、牙科或兽医科学的电诊断设备

## 1. 范围与适用性

本 PCR 适用于以采集、处理、显示、存储或传输生理或诊断信息为预期用途，且用于内科、外科、牙科或兽医实践的完整电诊断设备。范围包括多参数及专用患者监护设备、诊断心电图机、诊断超声系统，以及具备完整设备级功能的其他非治疗性电诊断系统。

所有前景数据包必须在汇总数据前声明下列配置维度。除非保留部件、使用及清洗差异，否则不得合并不同分型行的结果。

| 配置维度 | 必需声明 |
| --- | --- |
| diagnostic_modality | `patient_monitoring`、`electrocardiography`、`diagnostic_ultrasound` 或 `other_electrodiagnostic`；选择 `other_electrodiagnostic` 时，声明被测生理现象和预期诊断输出 |
| installation | `portable`、`mobile_cart` 或 `fixed`；声明纳入的安装质量以及任何独立推车、底座、壁挂件或房间侧单元 |
| product_configuration | `host_only`、`host_with_declared_reusable_probes_and_accessories` 或 `integrated_system`；逐项列明纳入的主机、探头、换能器、患者电缆、袖带、传感器模块、底座和附件 |
| display_computing_power | 声明显示、本地计算、数据存储、打印机、外置电源、充电器以及中央或远程计算是集成、独立纳入还是排除 |
| battery_boundary | 声明 `no_battery`、`installed_battery_only` 或 `installed_and_replacement_batteries`；适用时报告化学体系、额定容量、安装质量和更换计划 |
| consumables_boundary | 声明电极、导电胶、记录介质、探头套、采样管、擦拭物、清洗剂及其他一次性物品是从产品中排除、纳入交付包装，还是按使用情景建模 |
| use_and_reprocessing | 声明年检查次数或监护小时、活动/空闲/关机小时、使用寿命、利用率、供电模式、患者接触类别、清洗/消毒方法、循环频率和可重复使用附件寿命 |

参考产品是类别配置，不是单一商业型号。制造商特定型号只有在声明其配置和质量后方可应用本 PCR。

排除治疗性电气或超声设备、除颤器和电外科治疗设备、紫外或红外治疗设备、脱离完整设备级诊断功能单独销售的传感器或探头、非专用于所声明系统的通用计算机或显示器、体外诊断分析仪，以及主要基于 X 射线或 α、β、γ 辐射的设备。诊断超声纳入，治疗超声排除。磁共振、闪烁成像、核医学或其他具有实质不同大型基础设施的系统，应使用专用 PCR 或经记录的人工方法学审查，不得自动套用本通用规则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.electro-diagnostic-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences |
| classification_refs | CPC 3.0: 48121 — 用于内科、外科、牙科或兽医科学的电诊断设备 |
| covered_products | 完整患者监护仪、诊断心电设备、含已声明换能器的诊断超声系统，以及用于人或动物的其他完整非治疗性电诊断设备 |
| excluded_products | 治疗设备；独立传感器、探头、附件、电池或耗材；电离辐射设备；通用信息技术设备；体外诊断分析仪；以单一专有型号代表整个类别 |
| representative_product | 制造商门口按质量归一化的成品电诊断设备，并按诊断模态、便携性、主机/附件边界、显示/计算/电源架构、电池边界及耗材边界配置 |
| production_route | 电子、电机、显示、电源及模态特定子组件的供应商生产；外壳及机械制造；总装；软件加载；校准和质量测试；包装 |
| market_state | 制造商门口已完成、已校准并包装的设备；使用、消毒、更换及报废阶段为独立声明情景 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造商门口符合已声明配置的成品电诊断设备 |
| How much | 1 kg 合格设备净质量，不含三级运输包装，也不含配置中未明确列出的任何附件或耗材 |
| How well | 完整、已校准、已通过质量放行并能执行所声明诊断或监护功能；分别识别随附主机、探头、附件、显示/计算、电源硬件、电池和包装耗材 |
| How long or cycle | 一次交付产品的质量参考；除非声明使用情景，否则不隐含服务期限或检查次数 |
| reference_flow_link | `final_assembly_calibration_and_packaging` 的参考产品输出；使用服务结果还应按所声明使用寿命报告检查次数或监护小时 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 用于内科、外科、牙科或兽医科学的电子诊断仪器 `81ec0b79-a1f0-4fb0-bc88-e6ac81427ebe` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 诊断模态；被测生理现象或成像模式；人用或兽医用；便携/移动推车/固定安装；仅主机/主机含附件/集成系统边界；纳入的探头、换能器、电缆、袖带、传感器模块、底座、显示器、计算机、存储和打印机；电源架构；电池化学体系、容量和更换边界；耗材边界；设备净质量；生产地区和年份；纳入使用时的使用强度和使用寿命；患者接触类别及清洗/消毒情景 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品设备及每项纳入的可重复使用附件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将制造清单归一化到 1 kg 设备净质量。分别记录交付毛质量、包装质量和设备净质量；不得由产品目录系列或标称运输质量推算净质量。 |
| `configuration_mass_reconciliation` | 主机、探头/附件、显示/计算、电源硬件、安装电池及随附耗材 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 已声明配置质量之和必须与设备净质量核对。即使同批交付，耗材和包装仍须分列。 |
| `manufacturing_activity_units` | 电力、燃料、水、压缩空气和工艺化学品 | 活动特定属性 | 原始计量单位 | 保留仪表或发票原始单位，并在归一化到每 1 kg 合格设备前记录每次换算。未披露时不得以设备额定功率替代实测制造用电。 |
| `use_intensity_basis` | 活动、空闲、待机、充电和关机模式 | 能量或功率与时间 | kWh、W、h、检查或监护小时 | 报告各模式实测功率、模式小时、检查次数或监护小时、年利用率、使用寿命及地区。产品质量结果不得静默纳入未指定的使用情景。 |
| `battery_accounting` | 安装电池及更换电池 | 质量与额定能量 | kg 和 Wh | 电池化学体系、额定容量、安装质量、更换次数、实测充电损失及报废路线均须与设备主机分列。 |
| `cleaning_and_consumables_accounting` | 消毒剂、水、擦拭物、探头套、导电胶、电极、记录介质、采样管及类似物品 | 质量、体积或件数 | kg、L 或 item | 记录每循环数量、循环次数、可重复使用物品寿命、产品浓度和废物路线。使用耗材不得计入主机质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已核验的所声明设备配置物料清单及供应商清单，并识别部件或材料进入前景装配时所采用的供应数据集 |
| starting_condition_role | 前景装配从已披露的电子、电机、显示、计算、存储、电源、外壳、探头/附件、电池和包装输入开始；上游生产由可追溯背景数据集表示 |
| product_classification_scope | 符合 CPC 3.0 48121 和本 PCR 范围限制的完整电诊断设备；附件仅在声明为供应配置组成部分时纳入 |
| recursive_input_rule | 同类别外购完整电诊断设备作为技术圈投入记录，采用供应商符合 PCR 的上游数据，不得在同一前景数据包中再次递归拆分 |
| upstream_dataset_requirement | 对材料、印制电路组件、显示器、半导体、电池、电源、电缆、探头、包装、能源、运输及废物处理采用具有地区和时间代表性的数据集；披露代理和数据缺口 |
| disclosure | 声明模态、安装方式、配置边界、部件质量、供应商覆盖、制造场址、合格及不合格输出、包装、使用范围、使用寿命、使用强度、清洗/消毒、耗材、电池更换及报废假设 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_configuration_separation` | 所有数据集 | 在汇总前，将设备主机、可重复使用探头/附件、显示/计算/存储、电源硬件、安装电池、交付耗材、使用耗材和包装保留为可分别识别的清单块。 | `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `eu-mdr-2017-745` |
| `boundary_lifecycle_stages` | 从摇篮到大门及全生命周期数据集 | 从摇篮到大门结果纳入与产品规格相关的部件生产、制造、装配、测试和包装。只有明确声称并参数化时，才加入配送、安装、使用、维护、清洗/消毒、耗材、电池更换、数据基础设施和报废。 | `iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026` |
| `boundary_diagnostic_only` | 类别适用性 | 纳入诊断超声和电诊断监护或记录系统；排除主要功能为治疗的治疗超声及其他设备。电离辐射设备和实质不同的大型基础设施成像系统转交专用 PCR 或人工审查。 | `iec-60601-2-37-2024` |
| `boundary_reprocessing` | 可重复使用患者接触部件 | 按制造商说明和患者接触类别建模清洗、消毒或灭菌。控制台表面、可重复使用电缆/袖带、外部探头、腔内探头、手术探头和一次性保护套应作为不同情景。 | `cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745` |
| `boundary_end_of_life` | 报废情景 | 分列非感染性电气电子设备、电池、感染性物品和普通包装。不得把通用 WEEE 路线用于预计在报废前具有感染性的设备。 | `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `electronics_display_and_power_subassembly` | 电子、显示、计算、存储和电源子组件 | required | 始终纳入；只有配置证据证明不存在时才将相应模块记零 | 前景及供应商关联的子组件生产 | 每 kg 交付总装的合格子组件 |
| `enclosure_and_mechanical_subassembly` | 外壳、机架、推车、底座及机械子组件 | required | 始终纳入随设备交付的机械配置 | 前景及供应商关联的机械生产 | 每 kg 交付总装的合格机械子组件 |
| `modality_probe_and_accessory_subassembly` | 模态特定采集模块、探头、换能器、电缆、袖带和附件 | required | 仅纳入已声明供应配置内的物品；识别仅主机情形的排除项 | 前景及供应商关联的诊断功能生产 | 每 kg 合格模态子组件及纳入的可重复使用附件 |
| `final_assembly_calibration_and_packaging` | 总装、软件加载、校准、质量测试及包装 | required | 始终纳入 | 参考产品制造 | 制造商门口每 1 kg 合格设备净质量 |
| `use_maintenance_and_reprocessing` | 使用、维护、清洗/消毒、耗材及电池更换 | conditional | 声称全生命周期或使用服务结果时纳入 | 使用阶段情景 | 每个已声明使用寿命及每次检查或监护小时，并附每 kg 设备结果 |
| `end_of_life_management` | 拆除、分选、电池移除、去污、回收、处理及处置 | conditional | 声称报废或全生命周期结果时纳入 | 报废情景 | 每 kg 设备，并分别按每 kg 电池、耗材、包装和感染性组分报告 |

### 过程：电子、显示、计算、存储和电源子组件（`electronics_display_and_power_subassembly`）

#### 输入

##### 产品流

###### 电子元件及印制电路组件（`electronic_components_pcba`）

记录进入已声明主机或采集架构的裸板及贴装印制电路板、半导体、连接器、存储器、通信模块和其他电子元件。

- 选定流：由前景解析的电子元件及印制电路组件
- 流属性/单位：Mass / kg
- 数量规则：按元件族的供应商质量记录或经核验物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格电子、显示、计算、存储和电源子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_supplier_mass`
- 来源：`kokare-cardiac-monitoring-lca-2021`

###### 显示、计算、存储及通信硬件（`display_computing_storage`）

只有纳入产品配置时，才记录集成显示器、处理器、本地存储、打印机、网络模块和专用远程计算硬件。

- 选定流：由前景解析的显示、计算、存储及通信硬件
- 流属性/单位：Mass / kg
- 数量规则：每个纳入模块的实测或供应商声明质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格电子、显示、计算、存储和电源子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_supplier_mass`
- 来源：`who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`

###### 电源及安装电池部件（`power_and_installed_battery`）

分别按质量和电池化学体系记录内外置电源、充电器、电源线及安装电池。

- 选定流：由前景解析的电源、充电器、电缆和电池投入
- 流属性/单位：Mass / kg
- 数量规则：按电源模块及电池化学体系实测安装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格电子、显示、计算、存储和电源子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_supplier_mass`
- 来源：`who-oxygen-therapy-monitoring-2020`; `eu-batteries-regulation-2023-1542`

###### 子组件电力及公用工程（`electronics_subassembly_utilities`）

记录电路板装配、焊接、清洗、检验和子组件测试直接使用的计量电力、压缩空气、工艺热、水和化学品。

- 选定流：由前景解析的制造公用工程
- 流属性/单位：能量、体积或质量 / 原始计量单位
- 数量规则：按第 7 节分配规则将实测活动分配至合格子组件输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格电子、显示、计算、存储和电源子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_activity`
- 来源：`kokare-cardiac-monitoring-lca-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格电子及电源子组件（`accepted_electronics_subassembly`）

记录转入总装的合格电子、显示、计算、存储和电源子组件质量。

- 选定流：前景特定的合格电子及电源子组件
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个电子子组件生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_scrap_and_rework`
- 来源：`kokare-cardiac-monitoring-lca-2021`

##### 废物流

###### 电子废料、不合格品及废工艺材料（`electronics_scrap_and_rejects`）

按处理路线记录印制电路板废料、元件不合格品、焊接残余、废清洗材料及返工损失；不得与合格输出相抵。

- 选定流：按处理路线由前景解析的电子制造废物
- 流属性/单位：Mass / kg
- 数量规则：称量或库存核对的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格电子、显示、计算、存储和电源子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_scrap_and_rework`
- 来源：`kokare-cardiac-monitoring-lca-2021`

##### 基本流

### 过程：外壳、机架、推车、底座及机械子组件（`enclosure_and_mechanical_subassembly`）

#### 输入

##### 产品流

###### 外壳及机械材料（`enclosure_mechanical_materials`）

记录已声明设备配置内的聚合物、金属、玻璃、弹性体、紧固件、电缆、脚轮、推车、底座、壁挂件和保护件。

- 选定流：由前景解析的外壳及机械材料
- 流属性/单位：Mass / kg
- 数量规则：按材料族核验的物料清单或供应商质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格外壳及机械子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_supplier_mass`
- 来源：`kokare-cardiac-monitoring-lca-2021`

###### 机械制造公用工程（`mechanical_fabrication_utilities`）

记录成型、机加工、涂覆和机械装配所用电力、燃料、水、涂料、胶黏剂、加工液及其他直接活动。

- 选定流：由前景解析的机械制造公用工程
- 流属性/单位：能量、体积或质量 / 原始计量单位
- 数量规则：分配至合格机械输出的实测活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格外壳及机械子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_activity`
- 来源：`kokare-cardiac-monitoring-lca-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格外壳及机械子组件（`accepted_mechanical_subassembly`）

记录转入总装的合格外壳、机架、推车、底座、安装件及其他机械配置。

- 选定流：前景特定的合格外壳及机械子组件
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个机械子组件生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_scrap_and_rework`
- 来源：`kokare-cardiac-monitoring-lca-2021`

##### 废物流

###### 机械废料及不合格件（`mechanical_scrap_and_rejects`）

按材料和处理路线记录聚合物、金属、玻璃、电缆、涂层及混合不合格品。

- 选定流：按处理路线由前景解析的机械制造废物
- 流属性/单位：Mass / kg
- 数量规则：称量或库存核对的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格外壳及机械子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_scrap_and_rework`
- 来源：`kokare-cardiac-monitoring-lca-2021`

##### 基本流

### 过程：模态特定采集模块、探头、换能器、电缆、袖带和附件（`modality_probe_and_accessory_subassembly`）

#### 输入

##### 产品流

###### 模态特定模块及可重复使用患者接口（`modality_modules_and_interfaces`）

记录供应配置内的采集及信号调理模块和全部可重复使用患者接口。区分监护传感器模块、心电导联系统、超声换能器及其他电诊断电极或接口。

- 选定流：由前景解析的模态模块、探头、换能器、患者电缆、袖带及可重复使用附件
- 流属性/单位：Mass / kg
- 数量规则：按可单独更换模块或附件的实测或供应商声明质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格模态子组件及纳入的可重复使用附件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accessory_configuration`
- 来源：`who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `eu-mdr-2017-745`

###### 模态子组件公用工程（`modality_subassembly_utilities`）

记录采集模块及探头/附件生产所用电力、水、压缩空气、胶黏剂、封装材料、耦合材料及测试耗材。

- 选定流：由前景解析的模态子组件制造公用工程
- 流属性/单位：能量、体积或质量 / 原始计量单位
- 数量规则：分配至合格模态子组件和附件的实测活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格模态子组件及纳入的可重复使用附件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_activity`
- 来源：`iec-60601-2-37-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格模态子组件及已声明附件（`accepted_modality_subassembly`）

按模态和可更换物品身份记录合格采集模块及纳入的可重复使用探头/附件。

- 选定流：前景特定的合格模态子组件及可重复使用附件
- 流属性/单位：Mass / kg
- 数量规则：按模块和附件实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个模态子组件生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_scrap_and_rework`
- 来源：`who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`

##### 废物流

###### 探头、附件及模块不合格品（`modality_rejects`）

按处理路线记录不合格电子件、电缆、探头、换能器、袖带、传感器、封装材料和测试物品。

- 选定流：按处理路线由前景解析的模态子组件废物
- 流属性/单位：Mass / kg
- 数量规则：称量或库存核对的不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格模态子组件及纳入的可重复使用附件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_scrap_and_rework`
- 来源：`who-radiotherapy-equipment-ultrasound-2021`

##### 基本流

### 过程：总装、软件加载、校准、质量测试及包装（`final_assembly_calibration_and_packaging`）

#### 输入

##### 产品流

###### 合格子组件及供应附件（`final_assembly_subassemblies`）

记录进入总装的合格电子/电源、机械、模态、探头/附件及独立供应专用显示/计算模块，不重复计算其上游负荷。

- 选定流：前景特定的合格子组件及供应附件
- 流属性/单位：Mass / kg
- 数量规则：与配置物料清单核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_mass_balance`
- 来源：`who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`

###### 总装、校准及测试公用工程（`final_assembly_utilities`）

记录装配、软件加载、校准、老化、功能测试、质量控制和返工的计量电力及直接材料。

- 选定流：由前景解析的总装及测试公用工程
- 流属性/单位：能量、体积或质量 / 原始计量单位
- 数量规则：分配至合格成品设备的实测批次或生产线活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_activity`
- 来源：`iec-60601-1-9-2007`

###### 初级及次级包装（`product_packaging`）

按材料和质量记录随设备供应的包装。纳入三级配送包装时应单独报告。

- 选定流：由前景解析的包装材料
- 流属性/单位：Mass / kg
- 数量规则：按材料和包装层级实测包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iec-60601-1-9-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品电诊断设备（`finished_electrodiagnostic_apparatus`）

仅记录与已声明模态和配置相符并通过质量放行的产品。主机、可重复使用附件、安装电池、随附交付耗材和包装质量在汇总值下保持可追溯。

- 选定流：用于内科、外科、牙科或兽医科学的电子诊断仪器 `81ec0b79-a1f0-4fb0-bc88-e6ac81427ebe`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 总装不合格品及包装废物（`final_assembly_waste`）

按材料和处理路线记录不合格装配件、更换的测试零件、校准耗材及包装废物。

- 选定流：按处理路线由前景解析的总装及包装废物
- 流属性/单位：Mass / kg
- 数量规则：称量或库存核对的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_mass_balance`
- 来源：`iec-60601-1-9-2007`

##### 基本流

### 过程：使用、维护、清洗/消毒、耗材及电池更换（`use_maintenance_and_reprocessing`）

#### 输入

##### 产品流

###### 按运行模式的用电（`use_electricity`）

记录所声明年使用和寿命期内活动、空闲、待机、充电及关机模式的实测用电。声明检查次数、监护小时、占用率、电源管理设置和电力地区。

- 选定流：地区特定电力供应
- 流属性/单位：Energy / kWh
- 数量规则：各模式实测功率乘以模式小时之和，加上适用时单独实测的充电损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个已声明使用寿命及每次检查或监护小时，并附每 kg 设备结果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_use_intensity_and_power`
- 来源：`iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026`

###### 更换零件和电池（`maintenance_and_replacement_parts`）

记录寿命期内更换的探头、电缆、袖带、模块、电源、显示器、电池及其他零件，不重复计算原安装物品。

- 选定流：由前景解析的更换零件和电池
- 流属性/单位：质量和件数 / kg 和 item
- 数量规则：服务记录乘以实测更换件质量；电池按化学体系分列
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个已声明使用寿命及每次检查或监护小时，并附每 kg 设备结果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance_and_battery_records`
- 来源：`who-oxygen-therapy-monitoring-2020`; `eu-batteries-regulation-2023-1542`

###### 诊断耗材（`diagnostic_consumables`）

记录实际消耗的模态特定一次性电极、导电胶、记录介质、探头套、采样管、擦拭物及类似物品。可重复使用附件不在本行记录。

- 选定流：按材料或产品类型由前景解析的诊断耗材
- 流属性/单位：质量、体积或件数 / kg、L 或 item
- 数量规则：采购、领用或操作记录与所声明检查次数或监护小时核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：使用寿命内每次检查或监护小时，并附每 kg 设备结果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables_and_reprocessing`
- 来源：`who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `jacr-ultrasound-lca-2026`

###### 清洗及消毒投入（`cleaning_and_disinfection_inputs`）

按患者接触类别和制造商说明，记录清洗剂、消毒剂、水、擦拭物、探头套、能源及任何灭菌服务。区分控制台表面、外部探头、腔内探头和手术探头。

- 选定流：由前景解析的清洗、消毒及灭菌投入
- 流属性/单位：质量、体积、能量或件数 / kg、L、kWh 或 item
- 数量规则：每循环实测或采购核对数量乘以有记录的循环次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：使用寿命内每次检查或监护小时，并附每 kg 设备结果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_consumables_and_reprocessing`
- 来源：`cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已提供诊断或监护服务（`diagnostic_service_output`）

以补充服务分母报告检查次数和/或监护小时。不得以服务次数替代质量参考流。

- 选定流：前景特定的诊断检查或监护服务
- 流属性/单位：件数或时长 / examination 或 h
- 数量规则：所声明期间内完成的检查或经核验监护小时
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个已声明使用寿命，并附每 kg 设备结果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_use_intensity_and_power`
- 来源：`jacr-ultrasound-lca-2026`

##### 废物流

###### 废耗材、更换件及再处理废物（`use_stage_waste`）

按处理路线记录感染性及非感染性组分、废导电胶和擦拭物、探头套、电极、采样管、记录介质、更换件和废电池。

- 选定流：按感染状态、材料和处理路线由前景解析的使用阶段废物
- 流属性/单位：质量和件数 / kg 和 item
- 数量规则：称量废物、采购到废物核对及服务记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：使用寿命内每次检查或监护小时，并附每 kg 设备结果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables_and_reprocessing`
- 来源：`cdc-disinfection-healthcare-equipment-2008`; `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542`

##### 基本流

### 过程：拆除、分选、电池移除、去污、回收、处理及处置（`end_of_life_management`）

#### 输入

##### 产品流

##### 废物流

###### 退役设备及单独收集电池（`retired_apparatus_input`）

将退役主机、可重复使用附件、电池、剩余耗材和包装作为独立废物投入记录。声明进入普通电气电子处理前的感染状态及任何必需去污。

- 选定流：由前景解析的退役设备及电池废物
- 流属性/单位：Mass / kg
- 数量规则：按主机、附件、电池化学体系、包装和感染状态实测退役质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 进入报废管理的设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_records`
- 来源：`eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542`; `cdc-disinfection-healthcare-equipment-2008`

##### 基本流

#### 输出

##### 产品流

###### 回收材料及可重复使用零件（`recovered_materials_and_parts`）

记录离开分选或处理的实测回收金属、聚合物、玻璃、电路板组分、可重复使用零件和电池；回收抵扣一致采用第 7 节规则。

- 选定流：由前景解析的回收材料或可重复使用零件
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向称量的回收输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 进入报废管理的设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_records`
- 来源：`eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542`

##### 废物流

###### 处理及处置残余（`end_of_life_residuals`）

记录危险、感染性、混合、焚烧及填埋残余，不得扣减回收输出。

- 选定流：按路线由前景解析的处理残余
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量的残余输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 进入报废管理的设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_records`
- 来源：`eu-weee-directive-2012-19`; `cdc-disinfection-healthcare-equipment-2008`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用制造线和设施 | 技术可行时，优先细分并直接计量模态、子组件、装配、校准、测试和包装活动。 | `iec-60601-1-9-2007` |
| `allocation_shared_manufacturing` | 剩余共用公用工程和管理负荷 | 无法直接计量时，采用机器时间、生产线时间、测试时长或批次占用等有记录因果驱动分配电力和公用工程。只有不存在更具因果性的驱动时才使用质量，并披露敏感性。 | `iec-60601-1-9-2007` |
| `allocation_rework_and_rejects` | 返工、废料及不合格设备 | 将返工和不合格负荷归于导致其产生的生产批次；不得摊入无关产品系列。 | `kokare-cardiac-monitoring-lca-2021` |
| `allocation_shared_use_infrastructure` | 中央站、远程显示器、服务器、存储、打印机及共用充电器 | 按实测设备小时、监护小时、检查次数、存储数据量或其他有记录因果服务驱动分配共用使用阶段设备；报告排除的共用基础设施。 | `jacr-ultrasound-lca-2026` |
| `allocation_recycling` | 回收材料及可重复使用零件 | 报告处理毛负荷及回收输出。仅按所适用研究方法采用截断、替代或其他回收方法；声明方法，且同一结果不得混用多种方法。 | `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_supplier_mass` | `electronics_display_and_power_subassembly`; `enclosure_and_mechanical_subassembly` | 部件及材料投入 | 物料清单、供应商规格、收货记录、实测质量 | 零件 id；供应商；材料或部件族；数量；单位质量；纳入配置模块；适用时电池化学体系和容量 | 对确切配置核对工程 BOM、采购记录和实测样本质量 | kg、item、Wh | 每次设计修订及生产期 | 当前设计及报告年度 | 范围内所有制造场址和材料供应商 | 数量乘核验单位质量后求和；归一化前保留供应商特定数据集 | 受控版本 BOM、秤校准、供应商声明、抽样记录 |
| `cp_manufacturing_activity` | `all_manufacturing_processes` | 电力、燃料、水、压缩空气、化学品、测试及校准活动 | 仪表、发票、设备日志、批次流转单 | 活动类型；仪表起止；原始单位；批次；合格输出；机器时间；测试时间；分配驱动 | 优先分表计量；否则将发票与生产线日志和有记录分配驱动核对 | 原始计量单位、h | 每批次或至少每月 | 可得时为有代表性的连续 12 个月 | 每个前景及重要供应商制造场址 | 按直接计量、机器时间、生产线时间、测试时长或披露的备选驱动分配 | 仪表标识、校准、发票核对、生产日志 |
| `cp_output_scrap_and_rework` | `all_subassembly_processes` | 合格输出、不合格品、废料及返工 | 生产及废物记录 | 合格质量；不合格质量；返工质量；材料；废物代码；去向 | 称量输出并与批次投入及库存变化核对 | kg | 每批次 | 与制造活动相同期间 | 每个制造场址 | 按产品、材料和去向求和；返工分列 | 校准秤、废物转移记录、质量平衡签字 |
| `cp_accessory_configuration` | `modality_probe_and_accessory_subassembly` | 主机、探头、换能器、电缆、袖带、传感器模块、底座及附件边界 | 配置 BOM 和产品文件 | 模态；安装；主机 id；附件 id；纳入/排除；单位质量；重复使用/一次性；患者接触类别 | 依据 BOM、装箱单及使用说明核验供应配置 | kg、item | 每次配置修订 | 当前配置 | 数据集代表的全部配置 | 可重复使用纳入物与主机分列汇总；不得对未声明配置取平均 | 已签署配置记录、装箱单、使用说明 |
| `cp_final_assembly_mass_balance` | `final_assembly_calibration_and_packaging` | 转移子组件、成品、不合格品及校准材料 | 批次流转单、质量放行记录、称量记录 | 投入质量；合格净质量；不合格质量；返工；序列号或批号；校准状态 | 将每个放行批次与配置 BOM 和称量输出核对 | kg | 每批次 | 报告期 | 每个总装场址 | 将合格批次净清单除以合格净输出质量 | 校准秤、质量放行签字、核对报告 |
| `cp_packaging_records` | `final_assembly_calibration_and_packaging` | 初级、次级及三级包装 | 包装 BOM、供应商记录、样本称量 | 材料；包装层级；单位质量；数量；有记录时再生含量 | 称量代表性包装组并与采购数量核对 | kg | 每次包装修订 | 当前包装设计 | 每种包装配置 | 按每 kg 设备净质量汇总各材料和包装层级 | 秤校准、包装规格、样本记录 |
| `cp_use_intensity_and_power` | `use_maintenance_and_reprocessing` | 检查或监护服务及按模式用电 | 插座电表、机载日志、设施仪表、排程记录 | 活动/空闲/待机/充电/关机功率；模式小时；检查；监护小时；年利用率；使用寿命；地区 | 计量代表性运行，并将模式小时与排程或监护日志核对 | W、h、kWh、examination | 代表性测量期并进行年度核对 | 已声明使用年度及使用寿命 | 每种代表性使用场景 | 模式功率乘模式时间后求和，并分列服务分母 | 仪表校准、日志完整性、抽样计划、情景批准 |
| `cp_maintenance_and_battery_records` | `use_maintenance_and_reprocessing` | 更换零件、电池及维护 | 服务工单、零件领用、电池测试及采购记录 | 零件 id；质量；数量；日期；原因；电池化学体系；容量；充电数据；处置路线 | 将服务记录与安装设备群及使用寿命核对 | kg、item、Wh | 每次维护事件 | 完整使用寿命或合理预测 | 每种代表性使用场景 | 原装和更换件分列汇总；按服务及质量分母归一化 | 工单、零件收据、电池测试、可追溯预测方法 |
| `cp_consumables_and_reprocessing` | `use_maintenance_and_reprocessing` | 耗材、清洗、消毒、灭菌及废物 | 采购/领用记录、操作日志、再处理日志、废物记录 | 物品或化学品；浓度；数量；循环；患者接触类别；探头/附件 id；水；能源；废物路线 | 将领用数量和有记录循环与检查次数或监护小时核对；遵循制造商说明 | kg、L、kWh、item、cycle | 每次操作或代表性测量期并进行年度核对 | 已声明使用年度及使用寿命 | 每种代表性临床或兽医场景 | 按模态、接触类别和循环汇总；每循环记录仅乘经核验循环次数 | 使用说明、感染控制方案、批号记录、废物联单 |
| `cp_end_of_life_records` | `end_of_life_management` | 退役设备、去污、电池、回收及残余 | 资产退役、去污证明、处理及称量记录 | 主机/附件/电池质量；感染状态；去污；处理路线；回收输出；残余 | 追踪代表性退役设备至授权处理 | kg、item | 每个退役批次 | 已声明退役期间 | 代表的全部报废路线 | 对投入、回收和残余输出做质量平衡；保留路线特定结果 | 资产台账、去污证明、磅单、处理证明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_manufacturing_per_kg` | 制造清单行 | 归一化数量 = 批次数量除以合格设备或子组件净质量；返工输出在合格前不得计入分母 | 批次活动；合格输出质量 | 每 kg 合格输出的数量 | `kokare-cardiac-monitoring-lca-2021` |
| `calc_configuration_mass_balance` | 成品设备配置 | 设备净质量 = 主机 + 纳入的可重复使用探头/附件 + 集成/独立纳入的显示/计算/存储 + 电源硬件 + 安装电池；交付耗材及包装分列核对 | 配置质量 | 经核对设备净质量 | `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021` |
| `calc_use_electricity` | 使用用电 | 寿命期用电 = 各模式实测功率乘模式小时之和，W 换算为 kWh 时除以 1000，再加上单独实测充电损失 | 模式功率；模式时间；使用寿命；充电损失 | 每使用寿命、每次检查或监护小时及每 kg 设备的 kWh | `iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026` |
| `calc_consumables_and_disinfection` | 耗材及再处理 | 寿命期数量 = 实测或采购核对的每循环数量乘经核验循环次数；不得把一种模态的循环用于另一模态 | 每循环数量；检查或监护事件；接触类别；重复使用次数 | 每服务分母及每 kg 设备的 kg、L、kWh 或件数 | `cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745` |
| `calc_replacement_parts` | 维护及电池 | 寿命期更换清单为实际更换事件之和；预测必须采用有记录的存活或服务假设并标注为预测 | 服务记录；零件质量；电池化学体系；使用寿命 | 每使用寿命及每 kg 设备的更换质量和件数 | `eu-batteries-regulation-2023-1542` |
| `calc_end_of_life_mass_balance` | 报废处理 | 在有记录的库存变化和含水率修正范围内，退役投入质量 = 回收产品输出 + 残余废物输出 + 实测直接排放 | 退役质量；回收质量；残余质量；直接排放 | 路线特定质量平衡 | `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_configuration` | 所有数据集 | 识别模态、安装、主机/附件边界、显示/计算/电源架构、电池边界、耗材边界、产品质量及预期人用或兽医用；无销量加权配置证据时不得代表产品系列平均 | 配置 BOM、使用说明、装箱单、产品标签、加权方法 |
| `dq_mass_completeness` | 制造及报废 | 核对材料和部件投入、合格输出、不合格品、库存变化、包装、电池、回收输出及残余；披露未核对质量 | 已签署质量平衡及校准秤记录 |
| `dq_temporal_and_geographic` | 所有前景及背景数据 | 采用代表所声明生产和使用地区及年份的数据；识别供应商、电网、处理或使用代理 | 数据集元数据、供应商覆盖表、代理日志 |
| `dq_use_profile` | 使用阶段结果 | 报告实测功率模式、小时、检查次数或监护小时、利用率、使用寿命、维护、数据基础设施及电力地区；对重大不确定驱动提供敏感性 | 仪表日志、排程记录、服务记录、情景分析 |
| `dq_reprocessing` | 清洗及消毒 | 匹配患者接触类别和制造商说明；区分控制台、外部探头、腔内探头、手术探头、可重复使用附件和一次性保护套情景 | 使用说明、感染控制批准、再处理日志 |
| `dq_quantitative_evidence` | 所有清单数量 | 使用前景记录或由采集记录显式计算。本 PCR 不提供任何可替代缺失前景数据的类别级默认数量 | 采集协议链接、原始记录留存、计算审计 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 核验产品流 UUID、Mass 属性 UUID、Units of mass UUID、kg 参考单位和 1 kg 数量；拒绝把独立探头、传感器、附件、治疗单元、电离辐射设备或单一型号作为类别参考。 | |
| `validate_configuration_declaration` | 产品身份 | 要求第 1 节全部配置维度和第 3 节全部限定信息；主机/附件、显示/计算/电源、电池、耗材或安装边界含糊时校验失败。 | `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `eu-mdr-2017-745` |
| `validate_modality_separation` | 汇总及比较 | 不得在未保留模态特定配置、制造、使用、耗材和消毒记录时汇总监护、心电、超声或其他电诊断设备。 | `iec-60601-2-37-2024`; `who-oxygen-therapy-monitoring-2020` |
| `validate_mass_balance` | 制造及报废 | 核对设备净质量与主机、附件、显示/计算、电源、电池、耗材、包装、不合格品和处理输出；报告任何未核对质量。 | `kokare-cardiac-monitoring-lca-2021` |
| `validate_use_intensity` | 使用阶段声明 | 要求年检查次数或监护小时、模式功率和时间、使用寿命、利用率、维护、充电、数据基础设施和电力地区；笼统“使用中”情景为不确定。 | `iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026` |
| `validate_disinfection` | 再处理声明 | 要求患者接触类别、制造商方法、药剂及浓度、数量、循环次数、可重复使用物品寿命和废物路线；探头套不得静默消除必需消毒。 | `cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745` |
| `validate_battery_and_consumables` | 产品及使用边界 | 分列原安装电池、更换电池、充电损失、诊断耗材、清洗材料和交付初始物品；拒绝产品质量与使用清单之间重复计算。 | `who-oxygen-therapy-monitoring-2020`; `eu-batteries-regulation-2023-1542` |
| `validate_source_and_protocol_links` | 所有约束性行和规则 | 每项外部来源或来源规则声明均引用已列来源；每项采集或计算的前景行均链接到已定义采集协议。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明电诊断设备配置的前景产品类别数据集；经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| downstream_use | 在显式模态及情景限定下，用于产品制造、采购比较、设备群建模以及下游 `process` 或 `lifecyclemodel` 投影 |
| allowed_use | 对功能和配置可比设备进行从摇篮到大门比较；在使用寿命、使用强度、再处理、耗材、电池、数据基础设施及报废情景完整时进行全生命周期或使用服务建模 |
| excluded_use | 临床安全或疗效声明；跨未声明模态或配置比较；治疗设备；独立传感器/探头；电离辐射系统；无加权证据时从单一型号外推整个类别 |
| required_metadata | PCR id 及版本；CPC 引用；模态；预期诊断输出；人用/兽医用；安装方式；主机/附件/显示/计算/电源/电池/耗材边界；净质量和毛质量；制造地区/年份；供应商覆盖；纳入使用时的使用情景和服务分母；清洗/消毒；报废路线；分配方法；来源及协议 id |
| required_quality_disclosure | BOM 和供应商覆盖；质量平衡结果；前景测量覆盖；代理清单；时间及地区代表性；使用强度、使用寿命、更换、再处理及报废的不确定性和敏感性；未解决数据缺口 |
| update_trigger | 模态范围、产品架构、参考 UUID、制造路线、配置质量、软件或计算边界、电池化学体系、供应附件、使用情景、再处理说明、耗材、法规、证据或报废路线发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `who-oxygen-therapy-monitoring-2020` | official_guidance | 世界卫生组织，*COVID-19 technical specifications for procurement of oxygen therapy and monitoring devices*，WHO/2020-nCoV/MedDev/TS/O2T.V1，https://cdn.who.int/media/docs/default-source/medical-devices/tech-specs-o2-therapy-monitoring-final-draft.pdf?sfvrsn=d684989_2（检索日期 2026-08-09） | 患者监护及心电功能模块、显示、电源、可充电电池、附件、可重复使用探头、耗材、维护及配置披露 |
| `who-radiotherapy-equipment-ultrasound-2021` | official_guidance | 世界卫生组织与国际原子能机构，*Technical specifications of radiotherapy equipment for cancer treatment*，ISBN 978-92-4-001998-0，第 4.4 节及附录 10，https://iris.who.int/bitstream/handle/10665/339912/9789240019980-eng.pdf（检索日期 2026-08-09） | 诊断超声控制台、换能器、显示、计算、存储、连接、导电胶及质量保证配置 |
| `iec-60601-1-9-2007` | standard | IEC 60601-1-9:2007+AMD1:2013+AMD2:2020 CSV，*Medical electrical equipment — Requirements for environmentally conscious design*，https://webstore.iec.ch/en/publication/2601（检索日期 2026-08-09） | 从规格和制造到使用及报废的生命周期阶段覆盖 |
| `iec-60601-2-37-2024` | standard | IEC 60601-2-37:2024，*Particular requirements for the basic safety and essential performance of ultrasonic medical diagnostic and monitoring equipment*，https://webstore.iec.ch/en/publication/78093（检索日期 2026-08-09） | 诊断超声范围及明确排除治疗超声 |
| `eu-mdr-2017-745` | official_guidance | 欧盟医疗器械法规 (EU) 2017/745，ELI http://data.europa.eu/eli/reg/2017/745/oj（检索日期 2026-08-09） | 预期用途、附件及通用器械组区分、附件单独分类、可重复使用器械清洗/消毒说明及配置边界 |
| `cdc-disinfection-healthcare-equipment-2008` | official_guidance | 美国疾病控制与预防中心，*Guideline for Disinfection and Sterilization in Healthcare Facilities (2008): Recommendations*，https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/summary-recommendations.html（检索日期 2026-08-09） | 基于风险的清洗、消毒和灭菌；外部、腔内及手术探头情景区分；探头套限制 |
| `eu-weee-directive-2012-19` | official_guidance | 欧盟废弃电气电子设备指令 2012/19/EU，ELI http://data.europa.eu/eli/dir/2012/19/oj（检索日期 2026-08-09） | 电气电子报废边界及预计具有感染性的设备分开处理 |
| `eu-batteries-regulation-2023-1542` | official_guidance | 欧盟电池与废电池法规 (EU) 2023/1542，ELI http://data.europa.eu/eli/reg/2023/1542/oj（检索日期 2026-08-09） | 安装及更换电池身份、质量、备件/更换边界、单独收集及报废核算 |
| `kokare-cardiac-monitoring-lca-2021` | literature | Kokare, S. 等，“A comparative life cycle assessment of stretchable and rigid electronics: a case study of cardiac monitoring devices,” *International Journal of Environmental Science and Technology* 19, 3087–3102，https://doi.org/10.1007/s13762-021-03388-x | 心脏监护设备材料和制造分解：外壳、印制电路板、半导体、导线、装配、电池、废料及报废分列 |
| `jacr-ultrasound-lca-2026` | literature | Thiel, C. 等，“Harmonizing Diagnostic Ultrasound Practice with Environmental Sustainability: A Life Cycle Assessment of Diagnostic Ultrasound in a Single Adult University Hospital,” *Journal of the American College of Radiology* 23(4), 522–531，https://doi.org/10.1016/j.jacr.2025.09.031 | 超声设备、电力、生产/处置、检查用品、数据存储和阅片设备的使用阶段边界 |

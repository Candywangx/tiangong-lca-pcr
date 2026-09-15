---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.diodes-transistors-and-similar-semi-conductor-devices-photosensitive-semi-conductor-dev-f90ad4b6
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 二极管、晶体管及类似半导体器件；光敏半导体器件；发光二极管；已装配压电晶体

## 1. 范围与适用性

本 PCR 适用于以下成品的前景数据包：分立半导体器件、光敏半导体器件、光伏电池及电池组件、发光二极管，以及已装配压电晶体。合规数据包只代表一种明确的器件族、材料体系、生产路线和交付状态；不得用单一二极管、晶体管、光伏、LED 或压电路线代表这一高度异质的完整类别。

覆盖的交付状态包括：作为产品销售的已完成器件结构晶圆、分离后的裸片或电池片、封装分立器件、仍在分类范围内的已声明光伏电池组件或模块、LED 封装或阵列，以及已装配压电晶体单元。排除未形成有源器件结构的原始半导体晶圆、未装配压电材料、集成电路、完整灯具、含这些器件的电子设备及下游系统。未构成已声明成品器件的零件、生产设备和服务也不得作为参考产品。

本 PCR 是以质量为参考的制造出厂规则。适用时，件数、有源面积、基板面积、额定电气或光学性能、封装或装配类型以及测试等级仍是必需的补充量。仅以质量不能比较使用阶段功能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.diodes-transistors-and-similar-semi-conductor-devices-photosensitive-semi-conductor-dev-f90ad4b6 |
| classification_refs | CPC 3.0：47150，经审查的 exact 语义范围 |
| covered_products | 分立二极管、整流器、晶体管、晶闸管及类似器件；光敏半导体探测器和光伏电池；分类范围内已声明的光伏电池组件或模块；LED 裸片、封装及阵列；已装配压电晶体单元 |
| excluded_products | 原始或未形成器件结构的半导体晶圆；未装配压电材料；电子集成电路；完整灯、灯具、功率变换器、传感器或含这些器件的设备；通用电子元器件；制造设备；不属于范围内成品器件的零件 |
| representative_product | 不存在可代表整叶的单一器件；每个数据集声明一种器件族和一种交付状态，或声明保留器件族分解的产量加权混合 |
| production_route | 从已声明的进厂基板、器件晶圆、裸片、电池片或晶体坯料，经适用的有源结构制造、分离、封装或装配、最终测试、分档和放行的路线特定序列 |
| market_state | 在已声明的器件晶圆、裸片或电池片、封装器件、光伏组件或模块、LED 封装或阵列、已装配晶体交付门处的合格制造成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 处于已声明交付状态的合格范围内器件成品 |
| How much | 1 kg 净产品质量；运输包装除外，但与上市器件不可分离的包装计入 |
| How well | 按已声明的电气、光学、光伏或频率控制测试与分档准则放行；不合格品不计入参考输出 |
| How long or cycle | 一个有代表性的报告期或完整生产批次，声明日期、场址和异常时段 |
| reference_flow_link | 通用 Tiangong 产品流只能与全部必需限定信息一起使用，不授权无限定信息的类别平均数据集 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 二极管、晶体管及类似半导体器件，光敏半导体器件，发光二极管，模制压电晶体 `2db29aee-6424-47c2-9951-6d33d99c611d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | device_family; semiconductor_or_piezoelectric_material_system; delivery_state; processed_wafer_bare_die_cell_package_module_or_mount_definition; wafer_or_substrate_type_and_size_when_applicable; active_area_or_cell_area_when_applicable; die_count_or_device_count_per_reference_mass; package_mount_or_module_construction; electrical_optical_photovoltaic_or_frequency_grade; production_route; site_geography; reporting_period; conforming_output_mass; production_mix_rule |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一到已声明交付门处 1 kg 净合格参考产品。 |
| `count_to_mass` | 以件数记录的生产或测试数据 | 质量和件数 | kg 和 item | 使用批次实测质量除以合格件数，或同一产品和期间的有文件依据的产品特定平均单件质量进行换算；不得使用器件族通用质量。 |
| `area_to_mass` | 晶圆、电池、探测器、LED 或模块面积记录 | 质量和面积 | kg 和 m2 | 保留基板或有源面积，并使用同一路线、器件状态和期间的批次实测质量及匹配加工面积换算到质量参考。 |
| `performance_metadata` | 电气、光学、光伏和压电等级 | 质量和已声明性能量 | kg 加原始测试单位 | 将适用的额定电压、电流、功率、光通量或辐射输出、响应度、有源面积、频率等作为元数据保留；仅按质量归一的结果不得用于功能比较。 |
| `net_product_mass` | 封装或已装配产品 | 质量 | kg | 净产品质量包括整体封装、引线、装配件、封装料、光学件及整体模块材料；排除可拆运输包装和返还供应商的载具。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在首个受前景控制的转化处接收路线特定半导体基板或器件晶圆、外购裸片或电池片、压电晶体坯料或已制备谐振片 |
| starting_condition_role | 已声明起始条件用于识别哪些上游材料和器件成形阶段必须连接上游数据集而不得静默遗漏 |
| product_classification_scope | CPC 3.0 代码 47150 内的一种已声明器件族和交付状态；产量加权混合数据集保留器件族和路线份额 |
| recursive_input_rule | 范围内外购晶圆、裸片、电池片、LED 或已装配器件，以同类别技术圈输入记录并连接具有相同限定信息的上游数据集；不得重建其负荷或按零负荷处理 |
| upstream_dataset_requirement | 前景控制范围外的基板、晶圆、裸片、电池片、晶体、封装材料、工艺化学品、气体、电力和公用工程必须使用供应商特定或有代表性的上游数据集 |
| disclosure | 声明器件族、材料体系、晶圆或基板状态、封装或装配状态、纳入的场址与阶段、外包阶段、良率基准、分配驱动因子、减排覆盖、截断和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_family_route` | 所有数据集 | 按已声明的器件族和交付状态建立边界。不得套用其他器件族的过程图，也不得以一条路线声称代表整类。 | `iec-63366-2025`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`; `iec-60122-1-2017` |
| `boundary_semiconductor_fabrication` | 半导体、光敏、光伏和 LED 路线 | 纳入前景控制的有源结构形成，以及适用的晶圆制备、沉积或外延、掺杂、掩膜、刻蚀、清洗、金属化、钝化和检验。若这些阶段位于上游，连接合格上游数据集。 | `us-epa-semiconductor-neshap`; `us-epa-subpart-i`; `us-doe-led-lca-2012` |
| `boundary_back_end` | 分离、封装、装配或模块产品 | 纳入截至放行前适用的切割或分离、芯片贴装、互连、电极形成、封装、光学件、边框或模块组装、密封、标识、测试、分档及良率损失。 | `us-epa-semiconductor-neshap`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`; `epson-crystal-device-process` |
| `boundary_emissions_and_treatment` | 全部纳入制造阶段 | 纳入工艺气体和溶剂释放、适用时的含氟温室气体和 N2O 排放、减排装置运行与停机、废水、危险及非危险废物、回收准备和外部处理流，不得与投入净额抵消。 | `us-epa-subpart-i`; `us-epa-electronics-effluent-guidelines` |
| `boundary_capital_and_downstream` | 数据集边界 | 除非研究目标明确扩展系统，否则排除制造设备、建筑、声明门之后的运输、使用和寿命终止；单独披露纳入的资本或下游阶段。 | `iso-14044-2006`; `iec-63366-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wafer_or_device_fabrication` | 有源结构、晶圆、裸片或电池片制造 | conditional | 对前景控制的半导体、光敏、光伏或 LED 结构制造纳入；否则要求合格的上游器件晶圆、裸片或电池片数据集 | 前景器件形成 | kg 合格器件晶圆、裸片或电池片，同时保留基板面积和件数 |
| `device_or_module_assembly` | 分离、封装、LED 阵列或光伏组装 | conditional | 声明门前发生分离、封装、光学件装配、模块或面板组装时纳入 | 前景后端组装 | kg 最终放行前合格组装产品 |
| `piezoelectric_crystal_manufacture_and_mounting` | 压电晶体制备与装配 | conditional | 已装配压电晶体产品纳入；外购合成晶体或已制备谐振片要求合格上游数据集 | 前景晶体制备和装配 | kg 最终放行前合格已装配晶体 |
| `final_test_binning_release` | 最终测试、分档与产品放行 | required | 所有数据集必需；测试内容按器件族和等级确定 | 前景质量放行与参考输出 | 1 kg 净合格参考产品 |

### 过程：有源结构、晶圆、裸片或电池片制造（`wafer_or_device_fabrication`）

#### 输入

##### 产品流

###### 半导体基板、器件晶圆或外购前体（`fabrication_substrate_input`）

按材料体系、尺寸、进厂状态和上游数据集分别记录每种基板、晶圆、外延晶圆、半导体前体和外购有源器件中间体。

- 选定流：路线特定基板、晶圆或器件中间体；具体路线声明前 UUID 未解析
- 流属性/单位：质量 / kg；保留基板面积和件数
- 数量规则：将前景采购和领用记录与设备或批次跟踪核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：`us-epa-semiconductor-neshap`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`

###### 工艺化学品和气体（`fabrication_chemicals_and_gases`）

将各掺杂剂、沉积或外延前体、刻蚀剂、清洗化学品、光刻胶、溶剂、工艺气、载气和腔室清洗气分别实例化记录，不得合并成通用化学品质量。

- 选定流：路线特定化学品或气体；材料身份声明前 UUID 未解析
- 流属性/单位：质量 / kg，或以记录条件换算的实测气体量
- 数量规则：核对报告期采购、使用点输送、钢瓶或储罐平衡及配方记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_material_and_gas_records`
- 来源：`us-epa-subpart-i`; `us-epa-semiconductor-neshap`

### 过程：分离、封装、LED 阵列或光伏组装（`device_or_module_assembly`）

#### 输入

##### 产品流

###### 器件晶圆、裸片、电池片或同类部件（`assembly_device_input`）

记录来料状态，并关联具有相同器件族、材料体系、路线和交付状态限定符的上游数据集。

- 选定流：合格的路线特定器件投入；发布具体产品前解析 UUID
- 流属性/单位：质量 / kg；保留面积和件数
- 数量规则：前景收料和领用记录，包括退回或拒收投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：`us-doe-led-lca-2012`; `jrc-pv-footprint-2025`

###### 封装、安装、光学和模块材料（`assembly_material_inputs`）

适用时，将引线框架、基板、电极、键合材料、焊料、封装料、外壳、热界面、光学元件、荧光粉、玻璃、边框、背板、接线盒或互连材料逐项记录为 BOM 流。

- 选定流：材料特定产品流；声明构造前 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：产品特定 BOM 乘以放行产量，并与收料、领用、退料和废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_and_bom_records`
- 来源：`us-doe-led-lca-2012`; `jrc-pv-footprint-2025`

###### 组装电力和公用工程（`assembly_energy_and_utilities`）

记录分离、贴装、互连、封装、光学、层压、装框、密封和在线测试的电力、热能、洁净室及组装公用工程。

- 选定流：场址特定电力和公用工程服务；声明场址供应前 UUID 未解析
- 流属性/单位：能量 / kWh 或 MJ；保留公用工程原生数量
- 数量规则：实测过程消耗，或根据受监测设备记录进行有文件支持的因果分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格组装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`semi-s23-1021`

##### 废物流

不规定常规废物投入。

##### 基本流

除所选上游产品流表示的资源外，不规定基本流投入。

#### 输出

##### 产品流

###### 组装器件、LED 阵列或光伏组件（`assembled_device_output`）

记录最终放行前的合格输出，包括器件族、构造、封装或模块状态、器件件数、净质量和适用的有效面积。

- 选定流：路线特定组装产品；声明具体产品前 UUID 未解析
- 流属性/单位：质量 / kg；保留面积和件数
- 数量规则：实测输出质量和生产处置记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：最终放行前的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_mass_and_disposition`
- 来源：`iec-60747-1-2010`; `us-doe-led-lca-2012`; `iec-62941-2019`

##### 废物流

###### 组装不合格品和材料损失（`assembly_rejects_and_scrap`）

按材料和去向分别记录不合格裸片、电池片、封装件、模块、边框、玻璃、封装料、金属及其他损失。

- 选定流：废物特定流；声明组成和处理前 UUID 未解析
- 流属性/单位：质量 / kg 和件数
- 数量规则：批次处置、返工、废料和废物联单记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格组装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_mass_and_disposition`
- 来源：`jrc-pv-footprint-2025`; `us-doe-led-lca-2012`

##### 基本流

###### 组装直接排放（`assembly_direct_releases`）

按物质记录控制后的溶剂、焊接、固化、清洗及其他实测或许可的直接大气或水体排放。

- 选定流：物质特定基本流；声明物质身份前 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依据前景记录进行监测、物料平衡或许可计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格组装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`us-epa-semiconductor-neshap`; `us-epa-electronics-effluent-guidelines`

### 过程：压电晶体制备与安装（`piezoelectric_crystal_manufacture_and_mounting`）

#### 输入

##### 产品流

###### 压电晶体或已制备谐振器投入（`piezoelectric_crystal_input`）

声明天然或合成来源、材料组成、切型或取向、晶片或谐振器状态、尺寸和上游生产边界。

- 选定流：产品特定压电晶体投入；声明材料和状态前 UUID 未解析
- 流属性/单位：质量 / kg 和件数
- 数量规则：收料、领用记录和实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格安装晶体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_bom_records`
- 来源：`epson-crystal-device-process`; `iec-60122-1-2017`

###### 电极、封装和安装材料（`piezoelectric_mount_materials`）

分别记录各类电极金属、胶黏剂、焊料、引线、基板、外壳、密封介质和清洗材料。

- 选定流：材料特定产品流；声明安装构造前 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：产品特定 BOM 与采购、领用和损失核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格安装晶体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_and_bom_records`
- 来源：`epson-crystal-device-process`; `iec-60122-1-2017`

###### 晶体制备和安装能源（`piezoelectric_energy_and_utilities`）

适用时记录切割、成形、抛光、清洗、电极形成、频率调整、安装、密封和在线测试的电力与公用工程。

- 选定流：场址特定电力和公用工程服务；声明场址供应前 UUID 未解析
- 流属性/单位：能量 / kWh 或 MJ；保留公用工程原生数量
- 数量规则：实测设备消耗或有文件支持的因果分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格安装晶体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`semi-s23-1021`; `epson-crystal-device-process`

##### 废物流

不规定常规废物投入。

##### 基本流

除所选上游产品流表示的资源外，不规定基本流投入。

#### 输出

##### 产品流

###### 最终放行前的安装压电晶体（`mounted_piezoelectric_output`）

记录合格单元的材料、切型、封装或安装形式、标称频率或其他受控特性、件数和净质量。

- 选定流：产品特定安装压电晶体；声明具体产品前 UUID 未解析
- 流属性/单位：质量 / kg 和件数
- 数量规则：实测合格输出质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：最终放行前的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_mass_and_disposition`
- 来源：`iec-60122-1-2017`

##### 废物流

###### 晶体损失、不合格品和废材料（`piezoelectric_waste`）

分别记录切割和抛光损失、不合格谐振器、电极或封装废料、废浆料、清洗废物及处理去向。

- 选定流：废物特定流；声明组成和处理前 UUID 未解析
- 流属性/单位：质量 / kg；适用时记录件数
- 数量规则：批次处置、质量平衡和废物联单记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格安装晶体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_wastewater_records`
- 来源：`epson-crystal-device-process`

##### 基本流

###### 晶体过程直接排放（`piezoelectric_direct_releases`）

当蚀刻、清洗、电极形成、连接和密封的物质特定排放跨越环境边界时予以记录。

- 选定流：物质特定基本流；声明物质身份前 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：控制后的监测或前景物料平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格安装晶体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`us-epa-electronics-effluent-guidelines`

### 过程：最终测试、分档与产品放行（`final_test_binning_release`）

#### 输入

##### 产品流

###### 待最终放行产品（`pre_release_product_input`）

记录适用的已制造、已组装或已安装产品投入，保持其路线和状态不变。

- 选定流：合格的放行前产品状态；可用时为具体数据集解析 UUID
- 流属性/单位：质量 / kg 和件数
- 数量规则：进入最终测试的实测质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_mass_and_disposition`
- 来源：`iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019`

###### 测试电力和耗材（`final_test_inputs`）

记录测试系统电力、温度调节、适用时的老炼、已消耗载具及其他不可复用耗材。

- 选定流：场址特定能源和材料流；声明测试路线前 UUID 未解析
- 流属性/单位：能量 / kWh 或 MJ，材料质量 / kg
- 数量规则：实测测试单元消耗和耗材记录，按受测件时或其他因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_and_grade_records`
- 来源：`iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019`

##### 废物流

不规定常规废物投入。

##### 基本流

除所选上游产品流表示的资源外，不规定基本流投入。

#### 输出

##### 产品流

###### 已放行参考产品（`reference_product_output`）

输出严格采用合格的天工参考流，并带有数据集特定的器件族、路线、状态、构造、等级、件数或面积、场址和期间限定符。

- 选定流：二极管、晶体管及类似半导体器件，光敏半导体器件，发光二极管，模制压电晶体 `2db29aee-6424-47c2-9951-6d33d99c611d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 净合格已放行产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 最终测试不合格品和降级产品（`final_test_rejects`）

分别记录不合格、降级、返工和报废件。只有当降级产品具有有文件支持的市场功能并作为独立产品流离开时，才作为副产品。

- 选定流：处置特定的废物或产品流；声明处置方式前 UUID 未解析
- 流属性/单位：质量 / kg 和件数
- 数量规则：测试档位和处置记录与放行前投入、已放行输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_and_grade_records`
- 来源：`iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019`

##### 基本流

不规定通用基本流输出。如测试或老炼产生直接排放，则予以记录。

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多产品设施和共用生产线 | 优先进行过程细分、直接计量并采用产品路线记录，在可行范围内避免分配。 | `iso-14044-2006`; `semi-s23-1021` |
| `allocation_causal_driver` | 共用设备、洁净室和公用工程 | 不可避免的共用消耗采用有文件支持的因果驱动分配，如配方设备时间、各步骤晶圆或基板面积、腔体循环、处理件时、实测负荷、排风需求或冷却负荷。除非证明反映物理关系，否则不得采用产量质量或收入。 | `iso-14044-2006`; `semi-s23-1021`; `us-epa-subpart-i` |
| `allocation_yield_and_rework` | 不合格、返工和降级档位 | 一般良率损失和返工负荷归于合格输出。仅当降级档具有有文件支持的市场功能和独立流时才视为副产品；披露选定的物理或经济分配，并进行敏感性分析。 | `iso-14044-2006` |
| `allocation_recycling` | 回收材料和返还载具 | 分别报告材料回收、再生含量和任何替代收益。一致采用一种已披露的回收分配约定，防止供给和接收系统间重复计算。 | `iso-14044-2006`; `iec-63366-2025` |

## 8. 前景数据采集、计算与质量规则

不授权类别范围的数值默认值。器件族、材料体系、晶圆尺寸、封装状态、良率和生产技术差异过大，无法形成可信的单一范围。因此所有重要数量必须来自前景记录，或经审查且对应特定器件族和路线的外部数据集；未来若引入 `reasoned_estimate`，必须标为临时、可替换，且仅用于 QA 筛查。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_mass` | `final_test_binning_release` | 参考产品身份和质量 | 产品主数据、批次放行和称量记录 | family; material_system; delivery_state; construction; grade; lot_id; item_count; net_mass; area; site; dates | 将受控主数据导出与经校准称量及放行记录关联 | kg; item; m2 as applicable | 每个放行批次 | 有代表性的报告期或完整生产活动 | 每个纳入的放行场址 | 按合格产品汇总净合格质量，并保留器件族和路线份额 | 校准记录、产品规范、测试放行和可追溯批次核对 |
| `cp_material_and_bom_records` | `wafer_or_device_fabrication`; `device_or_module_assembly`; `piezoelectric_crystal_manufacture_and_mounting` | 材料投入 | BOM、采购、仓库领用和退料记录 | material_id; composition; supplier; upstream_state; quantity; unit; lot; issue; return; inventory_change; recycled_content | 将产品特定 BOM 与收料、领用、退料和库存变化核对 | kg; item; m2 | 每批次并按月核对 | 与输出相同期间 | 每个纳入过程和外包供应阶段 | 材料使用量等于期初库存加收料减期末库存和有文件支持的退料 | 已批准 BOM 版本、供应商证书和库存核对 |
| `cp_process_material_and_gas_records` | `wafer_or_device_fabrication` | 工艺化学品和气体 | 储罐、钢瓶、使用点和配方记录 | substance; purity; mass_or_volume; conditions; tool; recipe; lot; return; residual; abatement_link | 将采购和库存变化与使用点或配方消耗核对 | kg; m3 with temperature and pressure | 连续，或每容器和每配方 | 与输出相同期间 | 每个晶圆厂和工艺类型 | 按直接测量或有文件支持的配方驱动分配物质特定用量 | 仪表校准、容器平衡、配方审计和不确定性说明 |
| `cp_energy_utility_records` | 所有适用 process id | 电力、水和公用工程 | 仪表、设备状态和设施公用工程日志 | meter_id; utility; quantity; unit; timestamp; tool_state; process; allocation_driver; calibration | 优先分表计量；否则按因果工程驱动分配受监测的设施总量 | kWh; MJ; m3; kg; utility-native unit | 连续或批次解析 | 与输出相同期间，包括空闲和维护 | 每个纳入场址和共用公用系统 | 汇总实测用量，仅将有文件支持的共用部分分配给合格输出 | 仪表校准、覆盖报告、设施账单核对和分配敏感性 |
| `cp_yield_mass_and_disposition` | 所有适用 process id | 产品良率、返工和废物 | 制造执行、测试档位、称量和废物记录 | input_lot; output_lot; input_mass; output_mass; item_count; area; pass; rework; downgrade; scrap; destination | 核对批次谱系和全部处置 | kg; item; m2 | 每批次 | 与输出相同期间 | 每个纳入过程 | 保留阶段良率并将正常损失归于合格输出；不得隐藏返工回路 | 闭合批次平衡、处置批准和称量校准 |
| `cp_direct_emission_records` | 所有适用 process id | 直接大气和水体排放 | 烟囱测试、连续监测、气体使用、减排和许可记录 | substance; input_use; by_product; utilization; abatement_efficiency; downtime; measured_release; method; uncertainty | 优先直接监测，或采用基于已采集活动数据的适用监管方法 | kg per substance | 连续、测试活动或监管报告间隔 | 与输出相同期间 | 每个排放晶圆厂、排口和处理系统 | 汇总物质特定的控制后排放并按合格输出归一化 | 方法报告、校准、减排设施运行时间和许可或监管核对 |
| `cp_waste_and_wastewater_records` | 所有适用 process id | 废物和废水 | 流量计、样品、废物联单和处理日志 | stream; volume; pollutant_concentration; waste_mass; composition; hazard_class; treatment; destination; recovery | 分流测量并核对转移残渣和排放 | m3; kg | 连续、批次或装运 | 与输出相同期间 | 每个纳入场址和处理路线 | 按组成和去向汇总后再归一化 | 实验室 QA、联单、流量计校准和处理接收记录 |
| `cp_test_and_grade_records` | `final_test_binning_release` | 功能测试、分档和放行 | 测试系统和质量记录 | device_id_or_lot; test_method; grade; performance_value; unit; pass; fail; downgrade; test_time; burn_in; energy | 从受控测试系统导出可追溯结果，并关联产品处置 | Native performance unit; item; kg; kWh | 每个受测批次或器件 | 与输出相同期间 | 每个纳入的放行场址 | 仅在相同器件族、状态、构造和等级内汇总；重要时保留分布 | 测试校准、适用产品标准、放行授权和异常日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 每项清单数量 | 归一化数量 = 期间数量除以期间净合格参考产品质量（kg）。 | 期间数量；来自 `cp_product_identity_and_mass` 的净合格质量 | 每 1 kg 参考产品的数量 | `iso-14044-2006` |
| `calc_count_area_conversion` | 基于件数或面积的记录 | 使用匹配批次的质量除以件数或处理面积；保留原始件数或面积，禁止跨器件族换算因子。 | 批次质量、件数、处理面积、路线和状态 | 产品特定的件数—质量或面积—质量因子 | `us-epa-subpart-i`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025` |
| `calc_stage_yield` | 每个制造阶段 | 阶段良率 = 合格输出量除以统一质量、件数或面积基准的总投入量；分别报告返工和降级。 | 投入、合格输出、返工、降级和废料记录 | 阶段良率和经核对的处置 | `jrc-pv-footprint-2025`; `iec-62941-2019` |
| `calc_shared_utility` | 共用能源和公用工程 | 分配量 = 实测共用量乘以有文件支持的因果驱动份额；报告未分配和排除部分。 | 实测总量、驱动值、仪表覆盖 | 分配的公用工程数量和分配敏感性 | `semi-s23-1021`; `us-epa-subpart-i` |
| `calc_direct_emissions` | 工艺气体和控制后排放 | 对已采集的气体用量、利用率、副产物形成、减排效率和停机时间采用直接测量或适用方法；未经论证不得把采购气体等同于排放气体。 | 来自 `cp_direct_emission_records` 的气体和监测记录 | 物质特定直接排放 | `us-epa-subpart-i` |
| `calc_mass_reconciliation` | 每个过程和报告期 | 投入质量加期初库存 = 产品质量加废物质量加实测排放加期末库存；排除非质量服务流并报告残差。 | 材料、产品、废物、排放和库存记录 | 质量平衡残差和已解释异常 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 所有必需限定符与产品主数据、测试等级和交付状态一致；仅有通用流名称并不充分。 | 产品规范、主数据快照和放行记录 |
| `dq_family_route` | 过程覆盖 | 证据表明纳入及外包阶段与所声明的器件族、材料体系、技术、晶圆或晶体状态、封装或安装形式及报告期一致。 | 路线图、供应商声明、工艺配方和批次谱系 |
| `dq_temporal` | 前景活动数据 | 采用涵盖正常生产、空闲、维护、减排停机、返工和良率变化的代表性报告期；论证并标识试产或短期活动数据。 | 生产日历、仪表覆盖和异常日志 |
| `dq_completeness` | 清单 | 不得仅因质量截断而排除危险物质、含氟气体、水、废物、高质量、高能耗或显著影响良率的流；披露所有截断和缺失物质。 | 完整性清单、物料平衡和监管记录 |
| `dq_source_match` | 上游数据集 | 说明上游数据集的技术、地理、时间、材料纯度和交付状态，并评估不匹配。 | 数据集元数据和代表性评估 |
| `dq_allocation` | 共用系统和副产品 | 分配驱动、计量覆盖、排除负荷和敏感性可由留存记录复现。 | 仪表图、工程模型、驱动数据和敏感性结果 |
| `dq_uncertainty` | 计算和建模值 | 报告测量不确定性、估算方法和未解决数据缺口；临时估算不得表述为观测值。 | 校准证书、方法报告和不确定性登记表 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品 UUID、质量 UUID、质量单位 UUID 和 kg 单位必须与第 3 节完全一致。 |  |
| `validate_required_qualifiers` | 数据集身份 | 缺少器件族、材料体系、交付状态、构造、等级、路线、场址、期间、质量以及适用的件数或面积限定符时失败。 | `iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019` |
| `validate_no_single_family_proxy` | 代表性声明 | 当证据仅覆盖一种二极管、晶体管、光伏、LED、光敏或压电器件族时，不得声明代表 CPC 47150 全叶。混合数据集必须披露按产量加权的器件族和路线份额，并保留分解清单。 | `iec-63366-2025`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025` |
| `validate_route_and_state` | 过程图 | 纳入阶段、采购中间品和上游数据集必须与声明的来料状态及上市交付状态核对；不得重复计算或静默遗漏晶圆、裸片、封装、模块或安装阶段。 | `us-epa-semiconductor-neshap`; `us-doe-led-lca-2012`; `epson-crystal-device-process` |
| `validate_process_coverage` | 制造边界 | 至少存在一条器件族特定生产路线及 `final_test_binning_release`；每个条件阶段必须明确纳入、由带上游数据集的外包方执行，或说明不适用理由。 | `iec-63366-2025` |
| `validate_yield_and_mass_balance` | 每个过程 | 投入、输出、返工、降级、废料、废物、排放和库存变化必须核对；无法解释的残差以及质量、件数或面积良率基准不一致均为发现项。 | `iso-14044-2006`; `iec-62941-2019` |
| `validate_energy_utility_allocation` | 共用能源和公用工程 | 披露仪表覆盖和因果分配驱动，并能复现归一化数量；仅按收入或无依据按质量分配均为发现项。 | `semi-s23-1021`; `us-epa-subpart-i` |
| `validate_direct_emissions` | 晶圆厂和有排放的组装阶段 | 使用含氟气体、N2O、溶剂、酸性气体或其他受控物质时，必须提供物质特定排放、减排方法和停机时间，否则明确标为结论不充分。 | `us-epa-subpart-i`; `us-epa-semiconductor-neshap` |
| `validate_wastewater_and_waste` | 湿法和材料去除过程 | 按流、组成和处理去向区分废水和废物；适用流缺少证据即为发现项。 | `us-epa-electronics-effluent-guidelines` |
| `validate_foreground_evidence` | 重要数量 | 重要数量必须为前景记录或基于采集的计算。若引入推理估算，须标为临时、可替换，且不得用于符合性限值或全叶默认值。 | `iso-14044-2006`; `iec-63366-2025` |
| `validate_recursive_inputs` | 同类中间品 | 采购的范围内晶圆、裸片、电池片或器件必须有合格上游数据集，不得赋予零负荷或递归扩展。 | `iec-63366-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 47150 中一种合格器件族、路线和交付状态的前景制造数据包 |
| downstream_use | `secondary_dataset`；经方法学审查和发布后可作为 `background_dataset` |
| allowed_use | 当参考流限定符、纳入阶段、上游数据集和数据质量与研究相匹配时，用于产品和路线特定的供应链建模 |
| excluded_use | 未限定的全叶平均；光伏、LED、功率电子、光敏、分立半导体与压电器件族间替代；仅用 kg 进行功能比较；使用阶段性能声明；作为集成电路、灯具或完整设备的代理 |
| required_metadata | 所有参考流限定符；场址和期间；技术和路线；晶圆、裸片、电池片、封装、模块或安装状态；BOM 版本；良率基准；件数和面积换算；纳入及外包阶段；上游数据集引用；分配和回收方法；减排和处理覆盖 |
| required_quality_disclosure | 前景测量覆盖；校准；时间、地理和技术代表性；仪表和质量平衡核对；混合数据的器件族和路线份额；截断；不确定性；推理估算；缺失 UUID 或物质；数据缺口 |
| update_trigger | 器件族、材料体系、晶圆或基板尺寸、有源结构、封装或模块构造、主要工艺路线、场址电力、良率、减排、分配驱动、产品等级或报告期发生对清单有实质影响的变化 |

## 11. 数据来源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-47150` | official_guidance | United Nations Statistics Division, CPC classification detail for code 47150, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/1073/47150（访问于 2026-08-09） | 分类范围身份 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html（2022 年确认现行；访问于 2026-08-09） | LCI、分配、一致性、完整性和解释规则 |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691（访问于 2026-08-09） | EEPS 横向 PCR 和产品特定补充规范需求 |
| `iec-60747-1-2010` | standard | IEC 60747-1:2006+A1:2010, Semiconductor devices — Part 1: General, https://webstore.iec.ch/en/publication/3244（访问于 2026-08-09） | 分立半导体身份、额定值、特性、测量和放行证据 |
| `iec-60122-1-2017` | standard | IEC 60122-1:2002+A1:2017, Quartz crystal units of assessed quality — Part 1: Generic specification, https://webstore.iec.ch/en/publication/62199（访问于 2026-08-09） | 安装石英晶体身份、鉴定和测试证据 |
| `iec-62941-2019` | standard | IEC 62941:2019, Terrestrial photovoltaic modules — Quality system for PV module manufacturing, https://webstore.iec.ch/en/publication/61932（访问于 2026-08-09） | 光伏构造、材料和过程控制、测试与制造一致性 |
| `us-epa-semiconductor-neshap` | official_guidance | U.S. EPA, Semiconductor Manufacturing National Emission Standards for Hazardous Air Pollutants, https://www.epa.gov/stationary-sources-air-pollution/semiconductor-manufacturing-national-emission-standards-hazardous（访问于 2026-08-09） | 从晶体生长到晶圆制造、测试和组装的半导体边界及相关直接排放 |
| `us-epa-subpart-i` | official_guidance | U.S. EPA, Subpart I Information Sheet — Electronics Manufacturing, https://www.epa.gov/ghgreporting/subpart-i-information-sheet（访问于 2026-08-09） | 含氟温室气体、N2O、传热流体、减排、晶圆直径、基板面积和晶圆厂监测规则 |
| `us-epa-electronics-effluent-guidelines` | official_guidance | U.S. EPA, Electrical and Electronic Components Effluent Guidelines Documents, https://www.epa.gov/eg/electrical-and-electronic-components-effluent-guidelines-documents（访问于 2026-08-09） | 废水流、污染物和处理记录 |
| `semi-s23-1021` | standard | SEMI S23-1021, Guide for Energy, Utilities, and Materials Use Efficiency of Semiconductor Manufacturing Equipment; official revision notice, https://www.semi.org/en/standards-watch-2021Dec/revisions-to-semi-s23-published（访问于 2026-08-09） | 设备和设施能源、冷却水、公用工程与材料测量及分配驱动 |
| `us-doe-led-lca-2012` | official_guidance | U.S. Department of Energy, Life-Cycle Assessment of Energy and Environmental Impacts of LED Lighting Products, Part 2: LED Manufacturing and Performance, https://www.energy.gov/documents/2012ledlca-pt2pdf-0（2012；访问于 2026-08-09） | LED 基板、外延、裸片制造、封装、测试和分档分解；异质性和数据缺口处理 |
| `jrc-pv-footprint-2025` | official_guidance | European Commission Joint Research Centre, Harmonised rules for the calculation of the carbon footprint of photovoltaic modules in the context of the EU Ecodesign Directive, JRC141275, DOI 10.2760/4062978, https://publications.jrc.ec.europa.eu/repository/handle/JRC141275（2025；访问于 2026-08-09） | 光伏技术和交付状态区分、企业特定 BOM、能源、良率和数据质量要求 |
| `epson-crystal-device-process` | extension_guidance | Seiko Epson Corporation, Crystal devices: roles, manufacturing process and applications, https://www.epsondevice.com/crystal/ja/techinfo/column/general/crystal-device.html（访问于 2026-08-09） | 合成石英和晶体器件制造路线分解 |

###### 电力和制造公用工程（`fabrication_energy_and_utilities`）

使用设备或公用系统计量数据及明确因果分配驱动因子记录电力、工艺冷却、冷冻水、洁净干燥空气、氮气、真空和排风需求。

- 选定流：场址特定电力和公用工程服务；场址供应声明前 UUID 未解析
- 流属性/单位：能量 / kWh 或 MJ；保留公用工程原始量
- 数量规则：计量消耗，或根据监测设备与厂务记录计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`semi-s23-1021`

###### 超纯水和工艺水（`fabrication_water_input`）

按供水质量记录进水；净化由前景控制时另行核算净化损失。

- 选定流：场址特定供水；水质声明前 UUID 未解析
- 流属性/单位：体积 / m3，可得时同时记录质量 / kg
- 数量规则：使用与输出相同路线和期间的晶圆厂、工艺区或设备计量量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`semi-s23-1021`; `us-doe-led-lca-2012`

##### 废物流

不规定常规废物投入。进入本过程的返还或再生范围内材料按产品投入记录，并披露再生含量和上游处理。

##### 基本流

除所选上游产品流表示的资源外，不规定基本流投入。

#### 输出

##### 产品流

###### 已制造器件晶圆、裸片或光伏电池片（`fabricated_device_output`）

按离开制造阶段的真实状态记录合格输出，并保留晶圆或基板面积、裸片或电池片件数、材料体系、技术、良率和测试等级。

- 选定流：路线和状态特定的已制造器件输出；具体产品声明前 UUID 未解析
- 流属性/单位：质量 / kg；保留面积和件数
- 数量规则：实测合格输出质量和经核对的批次处置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：任何下游封装或模块组装前的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_mass_and_disposition`
- 来源：`iec-60747-1-2010`; `jrc-pv-footprint-2025`

##### 废物流

###### 制造废料和废工艺材料（`fabrication_solid_and_liquid_waste`）

按组成和去向分别记录报废晶圆、边料与切割损失、废浆料、光刻胶、溶剂、酸碱、过滤器和其他废物。

- 选定流：废物特定流；组成和处理声明前 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称重容器、转移联单和库存变化与批次处置核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_wastewater_records`
- 来源：`us-epa-electronics-effluent-guidelines`

###### 制造废水（`fabrication_wastewater`）

处理前按实质差异的水流分别记录废水、处理路线、实测排放和转移残渣；不得将全部废水仅表示为水。

- 选定流：路线特定废水或处理流；组成和去向声明前 UUID 未解析
- 流属性/单位：体积 / m3 和污染物质量 / kg
- 数量规则：报告期流量计、采样、处理日志和排放记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_wastewater_records`
- 来源：`us-epa-electronics-effluent-guidelines`

##### 基本流

###### 工艺直接大气排放（`fabrication_direct_air_emissions`）

按物质记录减排后的相关含氟温室气体、N2O、酸性气体、挥发性有机物和其他实测或许可排放。气体投入消耗本身不是排放因子。

- 选定流：物质特定基本流；排放物质声明前 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：烟囱测量，或采用已采集气体使用量、利用率、副产物生成、减排效率和停机时间的适用监管计算方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`us-epa-subpart-i`; `us-epa-semiconductor-neshap`

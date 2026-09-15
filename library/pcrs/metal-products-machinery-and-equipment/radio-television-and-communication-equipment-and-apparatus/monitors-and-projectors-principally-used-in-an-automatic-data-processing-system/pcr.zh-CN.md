---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-principally-used-in-an-automatic-data-processing-system
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 主要用于自动数据处理系统的显示器和投影机

## 1. 范围与适用性

本 PCR 适用于主要预期功能为呈现自动数据处理（ADP）系统视觉输出的成品计算机显示器和数据投影机。它覆盖办公、工业控制与工程、数据中心、网络运营、数字基础设施及类似专业或机构场景使用的产品。只有当产品文件、接口和正常市场用途能证明 ADP 显示为主要用途时，产品才属于本范围。

计算机显示器和投影机在本 PCR 下属于不同技术族。显示器通过集成的直视面板呈现图像；投影机使用成像器件、投影光学系统以及灯、LED、激光或混合光源，在独立表面形成图像。合规数据集应声明产品族；除非经评审的产品族研究提供透明的型号权重和分技术清单，否则不得将显示器和投影机技术平均为一个前景产品。

本 PCR 覆盖最终装配、集成、功能与功耗测试、校准、包装以及工厂门成品输出。当相应阶段纳入生命周期模型时，还提供垂直整合的显示面板、光机、光源、电子组件、外壳、支架或安装件生产，以及配送、使用、维护、更换部件和生命末期阶段的条件规则。

电视接收机、主要用于广播或脱离 ADP 系统的娱乐显示产品、主要用于公共或商业标牌的数字标牌、电影放映机、摄影投影机、投影幕、虚拟现实头显、笔记本电脑或一体机集成显示器、仅作为部件销售的显示面板或光机，以及主要用于非 ADP 用途的显示器或投影机不在范围内。仅凭是否带调谐器不足以判断范围；必须证明主要预期用途。

每个前景数据包应声明产品族、型号或代表型号集合、显示面板对角尺寸或声明的投影图像尺寸、原生分辨率、显示器额定亮度或投影机额定光输出、面板技术或投影成像与光源技术、电子组件、电源、外壳和支架或安装配置、热管理部件、实测质量、功耗测试配置与结果、预期使用寿命、包装材料清单、生产地理、参考年份及纳入的生命周期阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-principally-used-in-an-automatic-data-processing-system |
| classification_refs | CPC 3.0: 47315，精确分类语境 |
| covered_products | 主要用于显示 ADP 系统输出的直视式计算机显示器和数据投影机，包括办公、工业、数据中心、网络运营和数字基础设施应用 |
| excluded_products | 电视接收机；非 ADP 主要用途的显示器和投影机；主要用于公共或商业标牌的数字标牌；电影和摄影投影机；投影幕；笔记本电脑和一体机集成显示器；头戴式显示器；单独销售的显示面板、光机、光源及其他部件 |
| representative_product | 在制造场址完成 ADP 系统连接配置、测试并准备包装的成品显示器或数据投影机 |
| production_route | 外购或内部生产的显示面板或投影光机和光源、电子和电源组件、外壳及支架或安装件；最终集成；固件加载与校准；功能和功耗测试；包装 |
| market_state | 工厂门处完成制造、测试并符合规格的 ADP 显示设备；包装与产品质量分开记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供主要预期用途为 ADP 系统视觉输出的成品显示器或数据投影机 |
| How much | 工厂门处 1 kg 成品显示设备，不含包装质量 |
| How well | 符合声明型号关于产品族、尺寸、原生分辨率、亮度或光输出、面板或投影技术、接口、功率状态以及所含支架或安装件的规格 |
| How long or cycle | 声明的预期使用寿命（年和运行小时），并单独说明投影机光源寿命和更换假设 |
| reference_flow_link | 最终装配和验收测试之后、包装之前测量产品质量；包装、手册、分离式线缆和单独供应的附件作为独立清单投入，除非其已物理集成于设备 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 主要用于自动数据处理系统的显示器和投影仪 `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族：显示器或投影机；主要 ADP 用途证据；型号或加权型号集合；设备质量；面板对角尺寸或投影图像尺寸；原生分辨率；显示器亮度或投影机光输出；面板技术或成像与光源技术；电子组件和电源配置；外壳及支架或安装件材料；测试电压和频率；适用时的开机、睡眠、关机和联网模式功率；预期使用寿命（年和运行小时）；投影机光源寿命和更换次数；包装材料和质量；生产地理和参考年份；纳入的生命周期阶段 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。同一记录不得以电视接收机、非 ADP 显示设备或仅部件流替代经核验的 CPC 47315 产品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_device_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终装配和测试后、包装前测量合格成品设备质量。将所有制造清单归一化至 1 kg 合格设备输出；参考数量不得包含包装质量。 |
| `component_mass_basis` | 显示子系统、电子组件、电源、外壳、支架或安装件、热管理部件、线缆和集成附件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料或子组件记录实测或供应商声明的组件质量，并与成品设备质量、制造废料和库存变化进行核对。 |
| `monitor_geometry_performance` | 显示器产品 | 屏幕尺寸、面积、原生分辨率和亮度 | inch 或 cm；dm2 或 m2；pixels；cd/m2 | 同时报告可视对角尺寸和面积、水平和垂直原生像素、面板技术以及实测或声明亮度；保留测试配置，不得由一个参数推算另一个参数。 |
| `projector_geometry_performance` | 投影机产品 | 投影图像尺寸、原生分辨率和光输出 | inch 或 m；pixels；lumen | 报告成像技术、光源技术、原生像素矩阵、声明的图像尺寸范围以及按所引测试方法实测或声明的光输出；不得用显示器亮度单位表达投影机光输出。 |
| `power_state_measurement` | 成品功耗测试和使用建模 | 功率和能量 | W；kWh | 记录测试方法、输入电压、频率、图像或信号条件、亮度设置、自动亮度设置、网络和外设状态、稳定过程，以及适用时开机、睡眠、关机和联网模式实测功率。仅从保留的功率和时间记录换算能量。 |
| `service_life_measurement` | 使用和维护情景 | 时间和运行时长 | year；h | 声明产品使用寿命、各功率状态年度运行小时、负载曲线、失效或更换假设，以及投影机光源额定和实际寿命。无证据时不得对两个技术族采用同一寿命。 |
| `packaging_mass_separation` | 包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料和重复使用次数记录一次、二次和三次包装；包装质量应排除在参考产品质量之外，并单独归一化至 1 kg 合格设备输出。 |

## 5. 系统边界

默认前景边界始于组件、材料和包装进入制造场址，止于合格设备及其单独列示的包装到达工厂门。面板、光机、光源、印刷电路组件、半导体、电源、结构材料和包装的上游生产应由有文件支持的上游数据集表示。只有这些制造过程发生在声明的前景系统内时才直接纳入。

配送、使用、维护和生命末期为条件性下游阶段。纳入使用阶段的生命周期模型应保留产品族特定的功耗测试、运行曲线、使用寿命、地理特定电力以及投影机光源更换。未经投影机专用方法，不得将显示器性能规则和证据用于投影机功耗或光学性能。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明制造边界接收的显示面板或投影成像与光源子系统、电子和电源组件、外壳、支架或安装件、热管理部件、线缆、装配耗材和包装 |
| starting_condition_role | 最终装配和测试前景过程的上游产品和材料投入 |
| product_classification_scope | 主要用于 ADP 系统的成品显示器和数据投影机；仅部件和非 ADP 显示产品不属于规范产品范围 |
| recursive_input_rule | 已作为成品范围内显示器或投影机的投入应记录为上游产品流，不得在接收的前景过程中再次拆解；部件面板、光学件、光源、电路板和外壳不是范围内成品，应保留各自上游数据集。 |
| upstream_dataset_requirement | 对显示面板或光机和光源、电子组件、半导体、电源、金属、塑料、玻璃、线缆、包装、能源、运输和废物处理使用技术、材料、供应商、地理和时间代表性数据集；披露所有代理。 |
| disclosure | 声明显示器或投影机产品族；组件采购或内部生产；纳入的装配、测试、校准、包装、配送、使用、维护和生命末期阶段；资本设备处理；截断和代理；以及准确的终止边界。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_technology_split` | 所有数据集 | 在产品识别、材料清单、制造路线、性能计量、功耗测试、使用寿命和下游情景中保持显示器与投影机技术分离。加权产品族平均值应在汇总前保留型号权重和分技术清单。 | epd-ies-pcr-2024-06; epa-desktop-display-lca-2001; cheung-projector-lca-2018 |
| `boundary_manufacturing_stages` | 从摇篮到工厂门和门到门数据集 | 纳入或链接显示或投影子系统、电子组件和印刷电路组件、电源、外壳、支架或安装件、热管理、线缆、最终装配、固件或校准、验收和功耗测试、包装、制造废物、废水及直接排放的上游数据集。 | epd-ies-pcr-2024-06; epa-desktop-display-lca-2001 |
| `boundary_monitor_test_scope` | 显示器测试和使用建模 | 应用声明的显示器测试方法，并保留屏幕面积、原生分辨率、亮度、图像配置、自动亮度、网络功能、输入电压与频率以及实测功率状态。欧盟电子显示器规则可支持显示器方法，但明确不适用于投影机。 | energy-star-displays-v8-2021; eu-electronic-displays-2019-2021 |
| `boundary_projector_test_scope` | 投影机测试和使用建模 | 应用投影机专用性能和光学安全方法；保留成像器件、投影光学系统、光源技术、原生分辨率、光输出、功率状态、热管理和光源更换信息。 | iec-61947-1-2002; iec-62471-5-2015; cheung-projector-lca-2018 |
| `boundary_downstream_stages` | 生命周期模型 | 纳入配送、使用、维护、再使用或生命末期时，应使用声明的路线、运行曲线、使用寿命、维修和更换记录、电力地理及处理情景。任何纳入阶段缺少数据集或披露的代理时，不得声称从摇篮到坟墓覆盖。 | ec-pef-2021; epd-ies-pcr-2024-06; cheung-projector-lca-2018 |
| `boundary_missing_data` | 所有已知流 | 不得仅因数值或 UUID 不可用而省略已知的材料、能源、水、运输、废物、废水或直接排放流。应采集、标记为未解决，或使用有文件支持的代理并披露其对完整性的影响。 | ec-pef-2021; epd-ies-pcr-2024-06 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_assembly` | 组件集成和最终装配 | required | 始终纳入 | 前景设备装配 | 功能测试前的合格装配设备 |
| `functional_test` | 固件加载、校准、功能与功耗测试 | required | 始终纳入 | 前景验收和性能测试 | 测试合格设备 |
| `packaging_dispatch` | 包装和工厂门发运准备 | required | 始终纳入 | 前景包装和发运 | 1 kg 合格设备输出及单独测量的包装 |
| `use_maintenance` | 使用、维护和更换部件 | conditional | 声明边界延伸至工厂门之后时纳入 | 下游显示服务 | 1 kg 设备在声明寿命内提供的服务 |
| `end_of_life` | 设备和包装生命末期 | conditional | 从摇篮到坟墓数据集或生命周期模型纳入 | 下游收集和处理 | 1 kg 设备及其包装产生的废物 |

### 过程：组件集成和最终装配（`final_assembly`）

#### 输入

##### 产品流

###### 显示器面板和背光子系统（`monitor_panel_subsystem`）

对于显示器，记录完整直视面板子系统，包括面板、背光或自发光显示、驱动电子组件，以及按模块供应时的玻璃、偏光片和薄膜。投影机不得使用此行。

- 选定流：选择技术和供应商特定的 Tiangong 显示面板或模组产品流
- 流属性/单位：Mass / kg
- 数量规则：合格显示器输出所消耗的实测或供应商声明面板子系统质量，并调整库存变化和被拒组件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格显示器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_receipts`
- 来源：`epa-desktop-display-lca-2001`

###### 投影机光机、成像器件和光源（`projector_optical_light_subsystem`）

对于投影机，记录光机、成像器件、投影光学系统、光源及驱动和相关冷却部件。保留灯、LED、激光或混合光源身份以及光源是否可更换。显示器不得使用此行。

- 选定流：选择技术和供应商特定的 Tiangong 光机、成像器件、光学件和光源产品流
- 流属性/单位：Mass / kg
- 数量规则：合格投影机输出所消耗的实测或供应商声明子系统质量，并调整库存变化和被拒组件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格投影机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_receipts`
- 来源：`iec-61947-1-2002`; `iec-62471-5-2015`; `cheung-projector-lca-2018`

###### 印刷电路组件和电子元件（`electronics_assemblies`）

按组件和供应商记录主板、控制、接口、时序、传感、无线和光源驱动板以及集成电子元件。

- 选定流：选择电路板、元件和供应商特定的 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：采购和库存核对或实测材料清单数量分配至合格输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_receipts`
- 来源：`epa-desktop-display-lca-2001`; `cheung-projector-lca-2018`

###### 电源、线缆和集成连接器（`power_cable_assemblies`）

记录内置或外置电源、变压器、线缆、线束、连接器和随售产品包含的分离式线缆。分离式附件不计入成品设备参考质量。

- 选定流：选择部件和供应商特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；采购按件时为 Number of items / Item(s)
- 数量规则：实测材料清单和采购或库存核对分配至合格输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_receipts`
- 来源：`epd-ies-pcr-2024-06`

###### 外壳、支架或安装件及热管理部件（`structural_thermal_parts`）

按材料和再生含量声明记录塑料、钢、铝、玻璃、紧固件、支架或安装件、散热器、风扇、过滤器及其他结构或热管理部件。

- 选定流：选择材料和部件特定的 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：实测部件质量和材料清单分配至合格输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_receipts`
- 来源：`epa-desktop-display-lca-2001`; `eu-electronic-displays-2019-2021`

###### 装配耗材和公用工程（`assembly_consumables_utilities`）

记录最终集成所消耗的胶黏剂、焊料、清洗剂、保护膜、压缩空气、水、电力、燃料及其他材料或公用工程。

- 选定流：选择物质、载能体、电压和地理特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；Volume / m3；Energy / kWh 或 MJ
- 数量规则：计量或采购与库存核对的用量，按有文件支持的生产线规则分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_utilities`
- 来源：`epd-ies-pcr-2024-06`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收测试前的装配设备（`assembled_device`）

记录验收测试前已装配的显示器或投影机质量，并保留技术族和型号。

- 选定流：内部中间装配设备流；可用时选择特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：转入测试的装配设备实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产 1 kg 最终输出所需的合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_scrap_mass_balance`

##### 废物流

###### 装配废料和被拒组件（`assembly_scrap`）

按材料和处理路线分别记录损坏面板或光学件、被拒电路板、结构边角料、耗材残余物及其他装配废物。

- 选定流：选择材料和处理特定的 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物加核对的组件拒收量，减去有文件支持的供应商退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_scrap_mass_balance`
- 来源：`epd-ies-pcr-2024-06`

##### 基本流

###### 装配直接排放（`assembly_direct_emissions`）

当焊接、清洗、涂覆、胶黏剂固化、燃料燃烧和其他场内装配作业的释放跨越环境边界时，按物质和环境介质记录。

- 选定流：选择物质和环境介质特定的 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或从采集的活动数据和有文件支持的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manufacturing_emissions`

### 过程：固件加载、校准、功能与功耗测试（`functional_test`）

#### 输入

##### 产品流

###### 进入测试的装配设备（`test_device_input`）

记录装配设备的内部转移，不重复计算装配负担。

- 选定流：内部中间装配设备流
- 流属性/单位：Mass / kg
- 数量规则：转入测试的实测质量，并与合格输出和测试拒收进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_scrap_mass_balance`

###### 校准和功耗测试用电（`test_electricity`）

记录固件加载、预热、校准、适用时老化、功能测试及开机、睡眠、关机和联网模式功耗测量所用的计量电力。

- 选定流：选择电压、供应商和地理特定的 Tiangong 电力流
- 流属性/单位：Energy / kWh
- 数量规则：测试台计量电力除以合格设备质量；失败和重测设备的电力保留在分子中
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_power_performance_test`
- 来源：`energy-star-displays-v8-2021`; `eu-electronic-displays-2019-2021`; `iec-61947-1-2002`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收测试合格设备（`accepted_tested_device`）

记录通过声明的视觉、接口、安全、校准和功耗测试的合格设备。

- 选定流：主要用于自动数据处理系统的显示器和投影仪 `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入包装的合格设备实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power_performance_test`

##### 废物流

###### 测试拒收和更换部件（`test_rejects`）

按返工、供应商退回、再使用、回收或废物处理去向记录被拒设备和更换的电路板、面板、光学件、光源、线缆及其他部件。

- 选定流：选择材料和处理特定的 Tiangong 废物或产品流
- 流属性/单位：Mass / kg；Number of items / Item(s)
- 数量规则：将测试系统拒收和返工记录与实体废料及退回部件核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_power_performance_test`

##### 基本流

### 过程：包装和工厂门发运准备（`packaging_dispatch`）

#### 输入

##### 产品流

###### 进入包装的合格设备（`packaging_device_input`）

记录从测试转入的合格设备质量，不将包装加入参考产品质量。

- 选定流：主要用于自动数据处理系统的显示器和投影仪 `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入包装的合格设备实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 一次、二次和三次包装（`packaging_materials`）

按材料和再生含量记录瓦楞纸板、模塑纤维、塑料、泡沫、薄膜、袋、托盘、标签、油墨、手册、干燥剂和可重复使用包装。分离式线缆和附件与包装材料分开记录。

- 选定流：选择材料、再生含量和供应商特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；可重复使用资产为 Number of items / Item(s)
- 数量规则：实测包装材料清单除以已包装合格设备质量；可重复使用物品再除以核实的重复使用次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`epd-ies-pcr-2024-06`

###### 包装和发运能源（`packaging_energy`）

记录包装设备、内部搬运和发运暂存使用的电力和燃料。

- 选定流：选择载能体、电压和地理特定的 Tiangong 能源流
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：计量或分配的包装线能源除以发运合格设备质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门 ADP 显示成品（`finished_adp_display`）

准确记录 1 kg 合格显示器或投影机，不含包装质量，并附带全部必需限定信息。

- 选定流：主要用于自动数据处理系统的显示器和投影仪 `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考输出 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门 1 kg 成品设备，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装过程废物（`packaging_waste`）

按材料和处理路线记录包装边角料、损坏包装、标签、薄膜、泡沫、托盘及其他废物。

- 选定流：选择材料和处理特定的 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测包装废物除以发运合格设备质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

##### 基本流

### 过程：使用、维护和更换部件（`use_maintenance`）

#### 输入

##### 产品流

###### 声明使用寿命内的电力（`use_electricity`）

根据声明的负载曲线和地理特定电力，分别计算开机、睡眠、关机、联网待机及其他实测状态的用电。保留显示器和投影机各自的测试方法和配置。

- 选定流：选择电压、供应商、市场和地理特定的 Tiangong 电力流
- 流属性/单位：Energy / kWh
- 数量规则：各状态实测功率乘声明寿命小时数之和，再除以每 kW 的 1,000 W
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：1 kg 设备在声明寿命内提供的服务
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_lifetime_profile`
- 来源：`energy-star-displays-v8-2021`; `eu-electronic-displays-2019-2021`; `cheung-projector-lca-2018`

###### 维护和更换部件（`maintenance_parts`）

记录更换的电路板、电源、风扇、过滤器、线缆、投影机灯或光源模组及其他部件，并记录维修良率和运输。不得对显示器假设投影机光源更换。

- 选定流：选择技术、部件和供应商特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；Number of items / Item(s)
- 数量规则：观察到的维护记录或声明情景次数乘实测更换部件数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：1 kg 设备在声明寿命内提供的服务
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_lifetime_profile`
- 来源：`cheung-projector-lca-2018`; `iec-62471-5-2015`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明显示服务（`display_service`）

记录显示器或投影机在其声明运行曲线和寿命内提供的服务。

- 选定流：建模的显示服务；未分配通用 Tiangong 产品流 UUID
- 流属性/单位：Operating time / h，同时保留产品质量参考
- 数量规则：按技术族和性能配置声明运行小时
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：1 kg 设备在声明寿命内提供的服务
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_lifetime_profile`

##### 废物流

###### 使用期间失效或更换部件（`maintenance_waste`）

按材料和处理路线记录更换部件和失效光源。

- 选定流：选择材料和处理特定的 Tiangong 废物流
- 流属性/单位：Mass / kg；Number of items / Item(s)
- 数量规则：将维护和更换记录与安装的更换部件核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：1 kg 设备在声明寿命内提供的服务
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_lifetime_profile`

##### 基本流

### 过程：设备和包装生命末期（`end_of_life`）

#### 输入

##### 产品流

##### 废物流

###### 生命末期设备和包装（`eol_device_packaging`）

将设备、更换部件和包装记录为独立废物流，并采用地理和技术特定的收集、再使用准备、回收、回收利用和处置份额。

- 选定流：选择材料、产品和处理特定的 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：设备和包装质量乘有文件支持的收集和处理份额；再使用和翻新应与回收分开
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：声明寿命结束时 1 kg 设备及其单独列示的包装和更换部件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`ec-pef-2021`; `epd-ies-pcr-2024-06`; `cheung-projector-lca-2018`

##### 基本流

#### 输出

##### 产品流

###### 再使用产品和回收材料（`recovered_outputs`）

记录经核实的再使用设备、可再使用部件和回收材料输出，不在前景数量中嵌入避免负担抵扣。

- 选定流：选择再使用和材料特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；Number of items / Item(s)
- 数量规则：实测处理输出或对收集废物投入应用情景特定回收产率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 进入生命末期的设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`ec-pef-2021`; `epd-ies-pcr-2024-06`

##### 废物流

###### 处理残余物（`eol_residues`）

按材料和路线记录送往进一步回收、回收利用、焚烧、危险处理或填埋的残余物。

- 选定流：选择材料和处理特定的 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：来自实测输出或有文件支持情景的处理质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 进入生命末期的设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`ec-pef-2021`; `epd-ies-pcr-2024-06`

##### 基本流

###### 处理直接排放（`eol_direct_emissions`）

当所选处理数据集边界纳入生命末期处理的直接排放时，按物质和环境介质记录。

- 选定流：选择物质和环境介质特定的 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或从采集的处理活动和有文件支持的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 进入生命末期的设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共享制造过程 | 只要能获得产品特定记录，就通过分表计量、批次追踪或细分面板或光机生产、电子装配、最终装配、测试和包装来避免分配。 | ec-pef-2021; epa-desktop-display-lca-2001 |
| `allocation_shared_line` | 共享生产线和公用工程 | 无法细分时，使用反映因果关系并有文件支持的物理驱动因子分配公用工程和共同废物，例如机器时间、测试设备时间、吞吐质量或占用生产时间。除非无法建立物理因果关系且理由充分，不得使用收入。 | ec-pef-2021; epd-ies-pcr-2024-06 |
| `allocation_model_family` | 多个显示器或投影机型号 | 使用型号特定的材料清单和测试。产品族平均值应使用披露的生产权重，并在任何汇总前保留显示器与投影机的技术分层。 | energy-star-displays-v8-2021; epd-ies-pcr-2024-06 |
| `allocation_rework_scrap` | 返工、拒收、供应商退回和回收材料 | 内部返工和重复测试负担保留在合格输出中；从场址废物扣除有文件支持的供应商退回；单独报告回收材料输出，任何回收抵扣仅在声明的下游方法中应用。 | ec-pef-2021; epd-ies-pcr-2024-06 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_receipts` | `final_assembly` | 显示或投影子系统、电子组件、电源、外壳、支架或安装件、热管理部件、线缆和附件 | 材料清单、供应商规格、收货、库存和拒收记录 | model_id; family; component_id; supplier; material; technology; quantity; unit_mass; opening_stock; purchases; closing_stock; rejects; returned_quantity; recycled_content | 将批准的 BOM 与实测组件质量和库存核对关联 | kg; Item(s) | 每次型号修订和生产期 | 与数据集相同的代表性生产期 | 每个纳入制造场址和型号 | 期初库存加收货减期末库存和有文件支持的退回，计算消耗量；除以合格设备质量 | 批准的 BOM、校准秤记录、供应商声明、库存核对及型号修订控制 |
| `cp_manufacturing_utilities` | `final_assembly` | 装配耗材和公用工程 | 仪表、发票、批次领用和库存记录 | carrier_or_material; meter_id; opening_reading; closing_reading; purchase; opening_stock; closing_stock; batch; line_time; accepted_mass | 优先分表计量；否则采用有文件支持的生产线分配 | kg; m3; kWh; MJ | 每批或每月 | 至少一个有代表性的连续生产期，并披露季节性 | 每个纳入制造场址 | 按因果生产线驱动因子分配净计量或核对用量，再除以合格设备质量 | 仪表校准、发票、库存记录、分配工作表和完整性核对 |
| `cp_output_scrap_mass_balance` | `final_assembly` | 装配输出、拒收、供应商退回、废料和库存变化 | 秤重、生产、质量、返工、退回和废物转移记录 | input_mass; assembled_mass; accepted_mass; reject_mass; rework_mass; returned_mass; waste_mass; stock_change; treatment_route | 按技术族和型号进行批次或期间质量平衡 | kg | 每批，按月核对 | 与组件和公用工程记录相同的生产期 | 每个纳入场址和生产线 | 核对投入组件与装配及合格输出、退回、废物和库存变化，避免重复计算返工 | 校准秤、生产计数、质量日志、供应商退回记录、废物票据和签署的核对表 |
| `cp_manufacturing_emissions` | `final_assembly` | 直接排放 | 烟气、废水、溶剂、燃料和减排记录 | substance; compartment; measured_concentration; flow_rate; duration; fuel_quantity; factor; capture_efficiency | 优先直接测量；否则从采集活动数据和所引因子计算 | kg; m3; MJ | 每次测量活动和报告期 | 代表性生产期 | 每个纳入的排放场址 | 计算物质特定释放，并采用与相关作业相同的因果驱动因子分配 | 实验室报告、监测仪校准、燃料记录、因子引用和减排运行日志 |
| `cp_power_performance_test` | `functional_test` | 设备验收、性能、功率状态、测试电力、返工和拒收 | 测试台结果和仪表记录 | model_id; family; serial_or_batch; screen_or_image_size; native_resolution; luminance_or_light_output; panel_or_imaging_technology; light_source; voltage; frequency; signal; picture_mode; brightness; ABC_state; network_state; stabilization; on_W; sleep_W; off_W; networked_W; test_duration; station_kWh; pass_fail; rework | 使用校准仪器应用声明的显示器或投影机测试方法，并保留原始测量 | inch 或 m; pixels; cd/m2 或 lumen; V; Hz; W; h; kWh | 每个代表型号和测试批次 | 与数据集相同的型号修订和生产期 | 每个纳入测试场址 | 保留未舍入读数；由仪表差值和合格质量计算测试能耗；仅在相同产品族和配置内汇总功率结果 | 测试方法及版本、校准证书、配置记录、原始仪表文件、合格/不合格日志和代表型号理由 |
| `cp_packaging_records` | `packaging_dispatch` | 包装材料、分离式附件、包装能源和废物 | 包装 BOM、秤重、采购、重复使用、仪表和废物记录 | material; component; recycled_content; unit_mass; quantity; reuse_count; detached_accessory; energy; dispatched_device_mass; waste_mass; treatment_route | 称量代表性包装并核对采购、发运、重复使用和废物 | kg; Item(s); kWh; MJ | 每种包装配置并按月核对 | 与发运输出相同的生产期 | 每个纳入包装场址 | 一次性包装除以发运设备质量；可重复使用资产除以核实的重复使用次数；分离式附件单列 | 批准的包装规格、校准秤、供应商声明、重复使用日志、仪表或发票和废物票据 |
| `cp_use_lifetime_profile` | `use_maintenance` | 功率状态小时、使用寿命、维护和投影机光源更换 | 计量或核实的测试、机群日志、保修、维修和情景记录 | family; model; geography; service_years; annual_hours_by_state; power_W_by_state; utilization; network_state; lifetime_hours; failure; part_id; replacement_count; light_source_rated_life; realized_life; repair_transport | 可用时使用代表性现场记录；否则使用基于实测产品功率和有文件支持寿命假设的声明情景 | year; h; W; kWh; kg; Item(s) | 每个型号和情景评审 | 声明的使用寿命 | 声明的市场和使用场景 | 各状态功率乘小时数并求和；加入维护和更换；情景替代方案分开 | 功耗测试记录、机群或用户日志、保修和维修数据、产品文件及情景批准 |
| `cp_end_of_life_scenario` | `end_of_life` | 收集、再使用、翻新、回收、回收利用、处置和排放 | 处理运营方、官方统计、质量平衡和情景记录 | geography; device_family; collected_mass; reused_mass; refurbished_mass; recovered_material; residue; treatment_route; direct_emission; reference_year | 优先运营方特定实测数据；否则使用有文件支持的地理和技术特定情景 | kg; Item(s) | 每次情景更新 | 情景声明的参考年份 | 声明的生命末期地理 | 对设备、包装和更换部件质量应用互斥路线份额，并闭合处理质量平衡 | 运营方记录、官方统计、许可、处理证书、情景来源和质量平衡检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有制造行 | 归一化数量 = 期间流量 / 同期合格成品设备质量 | 期间流量；不含包装的合格成品设备质量 | 每 1 kg 合格设备的流量 |  |
| `calc_component_consumption` | BOM 和组件投入 | 消耗量 = 期初库存 + 收货 - 期末库存 - 有文件支持的供应商退回；与 BOM 领用和拒收核对 | 库存和收货记录；退回；BOM；拒收记录 | 消耗的组件质量或数量 | epa-desktop-display-lca-2001 |
| `calc_mass_balance` | 最终装配和测试 | 组件和耗材投入质量 + 期初在制品 = 合格输出 + 退回组件 + 废物 + 期末在制品 + 有文件支持的质量损失 | 实测投入、输出、退回、废物和库存变化 | 闭合的质量平衡及无法解释的差额 | epd-ies-pcr-2024-06 |
| `calc_test_energy` | 功能和功耗测试 | 每 kg 测试能耗 = 包含重测的测试台实测 kWh / 合格设备质量 | 测试台仪表读数；合格质量；重测日志 | 每 kg 合格设备的 kWh | energy-star-displays-v8-2021; iec-61947-1-2002 |
| `calc_use_energy` | 使用阶段 | 寿命期 kWh = 各功率状态实测 W 乘声明状态小时之和除以 1,000；每个地理和情景单独计算 | 各状态实测 W；各状态小时；使用寿命；地理 | 各状态及总寿命期电力 | energy-star-displays-v8-2021; eu-electronic-displays-2019-2021; cheung-projector-lca-2018 |
| `calc_packaging_normalization` | 包装 | 每参考 kg 包装 kg = 包装材料质量 / 合格设备质量；可重复使用包装质量再除以核实的重复使用次数 | 包装 BOM 和称重；设备质量；重复使用次数 | 每参考 kg 的材料特定包装 kg | epd-ies-pcr-2024-06 |
| `calc_projector_replacements` | 投影机使用 | 更换数量 = 声明的情景次数或观察到的维护次数；保留光源额定和实际寿命；存在观察记录时不得仅由额定寿命推导更换次数 | 使用小时；光源额定和实际寿命；维护记录 | 每参考 kg 和使用寿命的更换部件 | cheung-projector-lca-2018; iec-62471-5-2015 |
| `calc_family_average` | 产品族数据集 | 加权数量 = 型号特定数量乘核实生产份额后求和；仅在显示器和投影机分层保持可单独评审后汇总 | 型号结果；产量；技术族 | 披露的加权产品族结果 | epd-ies-pcr-2024-06 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和所有型号平均值 | 证明主要 ADP 用途，并保留显示器或投影机产品族、型号范围、尺寸、分辨率、亮度指标、显示或投影技术、接口、电源、支架或安装件及产品质量。 | 产品规格、型号清单、预期用途文件、照片或技术图纸及参考流记录 |
| `dq_technology_separation` | BOM、测试、寿命和下游数据 | 不得将显示器面板、亮度或寿命值转用于投影机，也不得将投影机光机、光输出、光源或更换值转用于显示器。 | 分技术 BOM、过程图、测试记录和情景记录 |
| `dq_temporal_geographic` | 前景活动数据和上游数据集 | 声明参考年份、生产期、场址、供应商、市场、电力地理和数据年龄；证明任何较旧或非本地代理的合理性。 | 数据集元数据、发票、仪表期间、供应商数据集元数据和代理理由 |
| `dq_measurement_traceability` | 质量、功率、能源、亮度、光输出和废物测量 | 保留仪器身份、校准状态、原始未舍入结果、测试配置、汇总和单位换算。 | 校准证书、原始文件、方法版本、计算工作簿和评审签署 |
| `dq_completeness` | 所有已知投入和输出 | 核对 BOM、合格输出、退回、库存变化、包装、公用工程、废物、废水和直接排放。列出未解决的已知流，不得静默截断。 | 质量和能量核对、缺失数据登记、代理清单和完整性评审 |
| `dq_lifetime_scenario` | 使用、维护和更换 | 声明寿命和运行小时来自观察、保修、规格还是情景；当使用或更换假设显著影响结果时提供敏感性分析。 | 机群或保修数据、产品规格、情景批准和敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品流 `0f14f2f1-768f-44cd-b5d7-b81ecbe1a9b8`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及不含包装的准确 1 kg 成品设备输出。 |  |
| `validate_adp_scope` | 产品识别 | 要求文件证明 ADP 视觉输出为主要预期用途。拒绝电视接收机、非 ADP 主要用途的显示器或投影机、仅部件产品以及较狭义的 CPC 47314 产品流。 | epd-ies-pcr-2024-06 |
| `validate_technology_fields` | 必需限定信息 | 要求显示器或投影机产品族，以及匹配的尺寸、分辨率、亮度或光输出、面板或成像技术、光源、电子组件、外壳、支架或安装件、功率、寿命和包装字段。拒绝把投影机 lumen 用作显示器 cd/m2 等跨技术族单位。 | energy-star-displays-v8-2021; iec-61947-1-2002 |
| `validate_bom_mass_balance` | 制造清单 | 要求组件和材料 BOM、实测合格设备质量、包装与产品质量分离，以及退回、在制品、废料和无法解释差额的核对记录。 | epa-desktop-display-lca-2001; epd-ies-pcr-2024-06 |
| `validate_power_test` | 功耗测试和使用模型 | 要求声明测试方法、电压、频率、信号、图像或亮度设置、ABC 和网络状态、稳定过程、原始读数，以及每个适用状态的实测功率。不得将显示器法规值作为投影机测试结果。 | energy-star-displays-v8-2021; eu-electronic-displays-2019-2021; iec-61947-1-2002 |
| `validate_lifetime_replacement` | 生命周期模型 | 要求使用年限、各功率状态运行小时、维修和更换情景，以及适用时投影机光源寿命和更换次数。标记任何无支持的显示器与投影机共享寿命。 | cheung-projector-lca-2018; ec-pef-2021 |
| `validate_sources_proxies` | 所有规则和行 | 要求每个外部 source id 都能在数据源中解析，并披露每个代理、缺失 UUID、省略、分配和情景假设及其对完整性的影响。 | ec-pef-2021; epd-ies-pcr-2024-06 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后可发布为 `secondary_dataset` 或 `background_dataset` 的前景生产数据集 |
| downstream_use | 构建主要用于 ADP 系统的显示器或数据投影机 process 和 lifecyclemodel 数据集，包括办公、工业、数据中心、网络运营和数字基础设施应用 |
| allowed_use | 产品和技术特定的制造清单；透明的加权型号族数据集；在提供所有必需限定信息和阶段数据时的下游配送、使用、维护和生命末期情景 |
| excluded_use | 电视接收机；非 ADP 主要用途的显示器或投影机；功能性能和边界不一致的显示器与投影机结果比较；将仅部件清单表述为成品设备；未披露替代 CPC 47314 或其他代理流 |
| required_metadata | Canonical PCR id；CPC 语境；参考流 UUID 和质量基准；产品族；主要 ADP 用途证据；型号范围和权重；尺寸；原生分辨率；亮度或光输出；面板、成像和光源技术；电子组件和电源；外壳和支架或安装件；设备质量；测试方法和功率状态；使用寿命和运行小时；投影机光源更换；包装 BOM；地理；参考年份；系统边界；分配；数据源和代理 |
| required_quality_disclosure | 场址和供应商覆盖；前景期间；测量和校准；BOM 和质量平衡闭合；测试配置；型号族加权；数据年龄；缺失 UUID 和流；代理使用；功耗和寿命情景；包装分离；分配；不确定性和敏感性；评审状态 |
| update_trigger | 产品族或主要用途变化；面板、成像、光源、电子组件、电源、外壳、支架或包装重新设计；材料或供应商变化；新制造场址；测试方法或电源管理变化；使用寿命或维修证据变化；电力、良率、废物、分配或生命末期路线显著变化；替换暂定代理或未解决 UUID |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-ies-pcr-2024-06` | standard | International EPD System，PCR 2024:06，Electronic and electric equipment, and electronic components (non-construction)，version 1.0.1，有效期至 2029-10-28，https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f（检索于 2026-08-09） | 电子行业范围、生命周期阶段、声明单位和数据生产结构、分配、包装、使用和生命末期披露 |
| `ec-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods，ELI http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-09） | 生命周期边界、数据质量、分配、情景、代理、核证和披露规则 |
| `epa-desktop-display-lca-2001` | official_guidance | U.S. EPA，Desktop Computer Displays: A Life-Cycle Assessment, Volume 1，EPA/744-R-01-004a，December 2001，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=200016BC.TXT（检索于 2026-08-09） | 显示器组件和制造过程分解、面板/模组、印刷电路板、电源、外壳和支架、数据采集、使用电力、分配和数据质量结构 |
| `energy-star-displays-v8-2021` | official_guidance | U.S. EPA ENERGY STAR Program Requirements for Displays，Version 8.0，Rev. November 2021，https://www.energystar.gov/sites/default/files/Displays%20Version%208.0%20Program%20Requirements%20Rev.%20Nov-2021.pdf（检索于 2026-08-09） | 显示器定义、代表型号测试、功率状态、电源管理、亮度、原生分辨率、配置、电压与频率及报告要求 |
| `eu-electronic-displays-2019-2021` | official_guidance | Commission Regulation (EU) 2019/2021 of 1 October 2019 laying down ecodesign requirements for electronic displays，ELI http://data.europa.eu/eli/reg/2019/2021/oj（检索于 2026-08-09） | 仅显示器的屏幕面积、分辨率、亮度、开机/睡眠/关机/联网功率、测试条件、材料效率、维修和拆解；投影机需要不同方法的明确证据 |
| `iec-61947-1-2002` | standard | IEC 61947-1:2002，Electronic projection - Measurement and documentation of key performance criteria - Part 1: Fixed resolution projectors，https://webstore.iec.ch/en/publication/6147（检索于 2026-08-09） | 投影机专用成像技术以及性能参数的测量和文件化 |
| `iec-62471-5-2015` | standard | IEC 62471-5:2015，Photobiological safety of lamps and lamp systems - Part 5: Image projectors，https://webstore.iec.ch/en/publication/22639（检索于 2026-08-09） | 投影机光源身份、光辐射测试条件、安全相关制造和更换披露 |
| `cheung-projector-lca-2018` | literature | Cheung, C. W.; Berger, M.; Finkbeiner, M. Comparative life cycle assessment of re-use and replacement for video projectors. International Journal of Life Cycle Assessment 23, 82-94 (2018). DOI: 10.1007/s11367-017-1301-3 | 投影机组件重要性、印刷电路板和集成电路、使用阶段电力、寿命延长、更换和再使用情景 |

---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.radar-apparatus-radio-navigational-aid-apparatus-and-radio-remote-control-apparatus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 雷达设备、无线电导航辅助设备和无线电遥控设备

## 1. 范围与适用性

本 PCR 为雷达设备、无线电导航辅助设备和无线电遥控设备成品的前景数据生产提供指南。产品以制造完成状态交付且主要承担雷达探测、无线电导航辅助或无线电遥控功能时，无论其为固定式、移动式、车载式、船载式、航空式、工业式或其他形式，均属于本 PCR 的覆盖范围。

本类别包括完整设备及配置系统；凡电子、射频、天线、供电、控制、机械、冷却、线缆、软件或固件以及包装要素属于所声明产品配置所必需者，均应纳入。产品专用选项和客户提供物只有在构成所声明参考产品时才纳入。

本 PCR 不包括单独销售的通用计算机、通信终端、裸电子元件、线缆、通用电源、承载设备的车辆或平台、安装土建工程以及独立供应的备件。前景制造数据集也不包括使用、维护和报废阶段负荷；下游模型若纳入这些阶段，应另行声明运行工况、使用寿命、维护计划、安装条件和报废情景。

本类别的性能、配置、质量、负荷模式和制造路线差异很大，因此本 PCR 不规定类别通用的材料、能源、成品率或排放默认值。生产者应采集配置特定和场址特定的前景记录。具体数据包应先声明设备子类型和制造地域，再为采购投入、能源载体、废物和基本流选择精确的天工标识。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.radar-apparatus-radio-navigational-aid-apparatus-and-radio-remote-control-apparatus` |
| classification_refs | CPC 3.0：48220，雷达设备、无线电导航辅助设备和无线电遥控设备，精确范围参考 |
| covered_products | 雷达设备成品；无线电导航辅助设备；无线电遥控设备；主要交付功能为雷达探测、无线电导航辅助或无线电遥控的配置系统 |
| excluded_products | 单独销售的通用电子元件、计算机、线缆、电源、车辆或承载平台、安装土建工程、独立备件以及 CPC 48220 以外的设备 |
| representative_product | 所声明子类型、型号、配置和交付状态下的一件制造完成并验收合格的设备 |
| production_route | 供应商零部件和材料供应；入厂物流；条件性电子和射频装配；最终机械/系统集成；测试和校准；包装和发运 |
| market_state | 位于制造商最终物流平台、已验收并可交付的制造成品；产品净质量与包装分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 处于所声明验收配置的雷达设备、无线电导航辅助设备或无线电遥控设备成品 |
| How much | 1 kg 合格设备净质量，不含交付包装 |
| How well | 已通过适用于所选设备且已声明的产品特定功能、安全、射频、导航、遥控、环境及客户验收要求 |
| How long or cycle | 一个完整制造核算期或生产批次；本质量声明型制造参考不包含使用寿命 |
| reference_flow_link | `packaging_and_dispatch` 的输出 `finished_apparatus` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 雷达设备，无线电导航设备及无线电遥控设备 `1423adf5-00aa-48ab-a228-5935b58a21ed` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备子类型；型号与配置；预期应用；制造商与生产地域；生产期；装配路线及所有权边界；产品净质量；PCB 与电子配置；适用时的射频、天线、波导、收发机或接收机配置；电源、冷却和电池配置；会影响硬件或测试的软件/固件配置；验收测试协议；包装排除方式及单独报告的包装质量；用于下游模型时的参考使用寿命和运行工况 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化到 1 kg 验收合格设备净质量。参考数量不包括交付包装，包装应另列清单。 |
| `configuration_mass_reconciliation` | 产品配置与物料清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将合格产品净质量与配置物料清单、子组件、并入产品的消耗品以及明确记录的质量缺口进行核对；不得根据不同雷达或电子产品推断未披露的组件构成。 |
| `energy_measurement` | 电力、燃料、压缩空气、热能和测试能源 | 为精确能源载体选择的能量属性 | kWh、MJ 或载体特定单位 | 保留实测载体和单位，记录换算因子；在换算到统一报告能量基准之前，不得合并电力、燃料、压缩空气和热能记录。 |
| `transport_measurement` | 零部件和材料入厂运输 | 为精确运输方式选择的运输服务属性 | tkm 或运输方式特定服务单位 | 按运输方式用装运质量和路线距离计算运输服务，并保留装载、返程和分配假设。 |
| `accepted_output_basis` | 生产成品率、不合格品和返工 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以合格净产出质量为归一化分母。分别记录不合格设备、报废零部件、回收组件和返工循环，不得借此虚增合格产出。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_complete_manufacturing_inventory` | 参考产品制造 | 纳入并量化将合格设备交付到制造商最终物流平台所需的所有可评估材料、零部件、包装、制造与装配过程、能源、水、入厂运输、直接排放、生产损失、不合格品、返工和废物处理。区分直接采集的前景作业与引用的上游数据集。 | `pep-ecopassport-pcr-ed4-2021`; `international-epd-pcr-2024-06` |
| `boundary_product_specific_routes` | 设备子类型和配置 | 仅建模适用于所声明配置的电子、射频、天线、波导、收发机、接收机、供电、冷却、机械、线缆、软件相关测试和包装活动。识别并论证每项遗漏或近似。 | `iec-63366-2025`; `chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023` |
| `boundary_upstream_datasets` | 采购零部件和材料 | 将采购材料、零件、印制电路板或组件、集成电路、射频模块、电池、线缆、外壳、天线及其他供应商产品连接到代表其所声明技术和地域的上游数据集。不得把收货或装配场址视为这些上游负荷的起点。 | `pep-ecopassport-pcr-ed4-2021` |
| `boundary_downstream_separation` | 安装、使用、维护和报废 | 前景制造数据集不含下游阶段；若研究明确纳入这些阶段，应将其作为单独报告模块，并具有产品特定的使用寿命、负荷模式、运行能耗、维护、安装和报废情景。 | `iec-63366-2025`; `pep-ecopassport-pcr-ed4-2021` |
| `boundary_no_hidden_significant_flows` | 排除项与截断决定 | 不得利用质量或能源阈值隐藏质量虽小但可能重要的电子元件、贵金属或关键材料、电池、受监管物质、直接排放或危险废物。量化并论证已知排除项，披露尚未解决的组成信息。 | `pep-ecopassport-pcr-ed4-2021`; `chalmers-surface-radar-2023` |
| `boundary_same_category_input` | 作为投入的完整或部分完成设备 | 将供应的完整或部分完成 CPC 48220 设备作为可见上游产品投入并关联其自身数据集。除非报告组织直接控制并计量其生产，否则不得在本前景过程中递归重写其内部生产。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所声明设备配置使用的全部采购材料、零部件、子组件、包装、能源载体和入厂运输服务在供应商门或收货门处均具有已记录的数量和标识 |
| starting_condition_role | 具有明确上游数据集链接的前景制造投入门 |
| product_classification_scope | 对应 CPC 3.0 代码 48220 的雷达设备、无线电导航辅助设备和无线电遥控设备 |
| recursive_input_rule | 同类别供应的完整或部分完成设备保留为外部产品投入；披露其质量份额、供应状态和上游数据集，除非其生产受到直接控制和计量，否则不得递归展开 |
| upstream_dataset_requirement | 上游数据集应代表前景系统内未直接计量的材料开采、零部件和子组件生产、供应商能源与技术及入厂物流；披露地域、技术、数据年龄和替代情况 |
| disclosure | 声明设备子类型、型号、配置、场址、生产期、所有权边界、供应商数据覆盖、装配和测试路线、产出质量、包装边界、排除作业、未解决组成、分配方法以及制造数据集排除的下游阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `supplier_inputs_and_inbound_logistics` | 供应商投入与入厂物流 | `required` | 始终纳入采购投入数量、上游数据集链接以及到首个受控制造场址的入厂运输 | 上游投入定义与收货门准备 | 每 1 kg 合格设备净质量 |
| `electronic_and_rf_assembly` | 电子与射频装配 | `conditional` | PCB、电子、天线、波导、收发机、接收机、射频、供电、冷却或相关子组件在报告边界内制造或装配时纳入；否则作为采购投入表示 | 前景子组件生产 | 每 kg 转入最终装配的合格子组件，再归一化到每 1 kg 设备 |
| `final_assembly_testing_and_calibration` | 最终装配、测试与校准 | `required` | 始终纳入配置特定的机械/系统集成以及放行前所需验收活动 | 前景设备成品生产与质量验收 | 每 1 kg 合格未包装设备 |
| `packaging_and_dispatch` | 包装与发运 | `required` | 始终纳入交付包装以及到制造商最终物流平台的发运准备 | 前景包装与参考产品输出 | 每 1 kg 合格设备净质量 |

### 过程：供应商投入与入厂物流（`supplier_inputs_and_inbound_logistics`）

#### 输入

##### 产品流

###### 采购零部件、材料和子组件（`purchased_components_materials`）

记录穿过供应商门或收货门的全部采购材料、电子元件、PCB 或 PCBA、集成电路、射频模块、天线、波导、收发机或接收机元件、线缆、连接器、外壳、紧固件、供电单元、电池、冷却组件以及其他配置投入。

- 选定流：为所声明配置选择精确的天工产品流；不得使用通用或近似电子产品流
- 流属性/单位：质量 / kg；必要时辅以件数追溯
- 数量规则：采购或收货实测数量，经库存变化修正并归属于合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_supplier_inputs`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023`

###### 入厂运输服务（`inbound_transport_service`）

按运输方式记录采购材料、零部件、子组件和交付包装从供应商发运点至首个受控制造或收货场址的运输。

- 选定流：为每个所声明运输方式和地域选择精确的天工运输服务产品流
- 流属性/单位：运输服务 / tkm 或运输方式特定服务单位
- 数量规则：装运质量乘以已记录路线距离，并按所声明装载和返程假设修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_inbound_logistics`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收货并放行的制造投入（`received_inputs`）

记录经来料检验后放行到所声明制造路线的合格投入实测数量，并保留配置和供应商追溯关系。

- 选定流：连接精确采购投入标识的内部中间流
- 流属性/单位：质量 / kg
- 数量规则：按配置投入角色计量的合格收货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_supplier_inputs`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

###### 来料包装废物和收货拒收物（`incoming_packaging_waste`）

记录收货时拆除的供应商包装以及投产放行前拒收的零部件或材料，并按废物类型和处理路线区分。

- 选定流：在材料和处理路线声明后选择精确的天工废物流
- 流属性/单位：质量 / kg
- 数量规则：送往各记录处理路线的收货废物和拒收投入实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_treatment`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 基本流

### 过程：电子与射频装配（`electronic_and_rf_assembly`）

#### 输入

##### 产品流

###### 电子与射频零部件（`electronic_rf_parts`）

记录进入受控子装配作业的裸板、电子元件、集成电路、焊料、射频元件、天线、波导、收发机、接收机、电力电子器件、线缆、连接器和配置零件。

- 选定流：为所声明子组件物料清单选择精确的天工产品流
- 流属性/单位：质量 / kg；必要时辅以件数
- 数量规则：投产实发数量，经退料和库存变化修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入最终装配的合格子组件，再归一化到每 1 kg 设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_subassembly_materials`
- 来源：`chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023`

###### 电子与射频装配能源（`electronic_rf_assembly_energy`）

记录 PCB、电子、射频、天线、波导、收发机、接收机、焊接、涂覆、清洗、固化及子装配工位使用的计量或分配电力、压缩空气、热能和燃料。

- 选定流：为场址和期间选择精确的天工能源载体产品流
- 流属性/单位：能量 / kWh、MJ 或载体特定单位
- 数量规则：工位能源实测值或有依据的共享计量能源分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入最终装配的合格子组件，再归一化到每 1 kg 设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

###### 装配消耗品和工艺化学品（`electronic_rf_assembly_consumables`）

记录未在物料清单中表示的焊料和焊膏、助焊剂、清洗剂、涂层、胶黏剂、气体、水、过滤材料、防护材料和其他消耗性工艺用品。

- 选定流：在确认工艺化学品和材料标识后选择精确的天工产品流
- 流属性/单位：质量或体积 / kg、L 或物质特定单位
- 数量规则：通过领用、采购或储罐平衡取得并归属于所声明子组件产出的实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入最终装配的合格子组件，再归一化到每 1 kg 设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_consumables`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格电子与射频子组件（`accepted_electronic_rf_subassemblies`）

按配置和实测质量记录转入最终装配的合格 PCBA 及其他电子或射频子组件。

- 选定流：连接所声明子组件配置的内部中间产品流
- 流属性/单位：质量 / kg
- 数量规则：转入最终装配的合格子组件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格子组件，再归一化到每 1 kg 设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_subassembly_output_and_yield`
- 来源：`chalmers-active-safety-radar-2023`

##### 废物流

###### 子组件不合格品和工艺废物（`electronic_rf_assembly_waste`）

按材料、危险特性和处理路线记录不合格电路板和元件、焊渣、边角料、废化学品、废水、过滤材料、擦拭物、包装及其他废物。

- 选定流：在废物标识和处理路线声明后选择精确的天工废物流
- 流属性/单位：质量或体积 / kg、L 或处理特定单位
- 数量规则：送往各记录处理路线的废物实测量，不包括返回受控返工的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格子组件，再归一化到每 1 kg 设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_treatment`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

##### 基本流

###### 子装配直接排放（`electronic_rf_direct_emissions`）

记录焊接、清洗、涂覆、固化、机加工或其他受控子装配作业向空气、水或土壤的实测或按许可报告的排放；不得重复计入已由上游能源或处理数据集表示的排放。

- 选定流：为每种实测物质和环境介质选择精确的天工基本流
- 流属性/单位：物质质量 / kg 或排放报告单位
- 数量规则：归属于所声明子组件产出的实测或按许可计算的直接排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格子组件，再归一化到每 1 kg 设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`pep-ecopassport-pcr-ed4-2021`

### 过程：最终装配、测试与校准（`final_assembly_testing_and_calibration`）

#### 输入

##### 产品流

###### 子组件与机械系统零部件（`final_assembly_inputs`）

记录进入最终集成的合格电子、射频、天线、波导、收发机、接收机、供电、冷却、线缆、控制、外壳、安装、机械及客户特定配置投入。

- 选定流：为所声明配置选择精确的天工产品流或可追溯内部中间流
- 流属性/单位：质量 / kg；必要时辅以件数
- 数量规则：装配实发数量，经退料和库存变化修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_inputs`
- 来源：`chalmers-active-safety-radar-2023`; `chalmers-surface-radar-2023`

###### 最终装配、测试和校准能源（`final_assembly_test_energy`）

记录机械集成、布线、控制硬件运行的固件装载、对准、校准、老炼、功能测试、环境测试和客户验收测试所使用的计量或分配电力、压缩空气、热能和燃料。

- 选定流：为场址和期间选择精确的天工能源载体产品流
- 流属性/单位：能量 / kWh、MJ 或载体特定单位
- 数量规则：设备和工位能源实测值或有依据的共享计量能源分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

###### 最终装配和测试消耗品（`final_assembly_test_consumables`）

记录未列入物料清单的紧固件、胶黏剂、密封剂、清洗剂、校准气体或靶标、冷却介质、临时防护材料以及集成和验收期间使用的其他消耗品。

- 选定流：在确认材料和工艺标识后选择精确的天工产品流
- 流属性/单位：质量、体积或服务单位 / kg、L、件或协议特定单位
- 数量规则：通过领用、采购或库存平衡取得并归属于合格产出的实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_consumables`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格未包装设备（`conforming_unpacked_apparatus`）

按子类型、配置、件数以及交付包装前实测净质量记录通过所声明验收协议的设备。

- 选定流：雷达设备，无线电导航设备及无线电遥控设备 `1423adf5-00aa-48ab-a228-5935b58a21ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入包装的合格设备净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_acceptance_and_mass`
- 来源：`international-epd-pcr-2024-06`

##### 废物流

###### 不合格设备、更换零件和最终装配废物（`final_assembly_rejects_waste`）

按去向记录报废设备和零件、更换组件、线缆和机械边角料、废测试消耗品及其他最终装配废物。受控返工循环与送出场外的废物分开记录。

- 选定流：在废物标识和处理路线声明后选择精确的天工废物流
- 流属性/单位：质量或体积 / kg、L 或处理特定单位
- 数量规则：送往各处理路线的废物实测量，扣除返回受控返工或库存的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_treatment`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 基本流

###### 最终装配与测试直接排放（`final_assembly_test_direct_emissions`）

记录最终集成、校准、老炼、环境测试或验收测试的实测或按许可报告的直接排放；不得重复计入上游电力、燃料或废物处理排放。

- 选定流：为每种实测物质和环境介质选择精确的天工基本流
- 流属性/单位：物质质量 / kg 或排放报告单位
- 数量规则：归属于合格产出的实测或按许可计算的直接排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`pep-ecopassport-pcr-ed4-2021`

### 过程：包装与发运（`packaging_and_dispatch`）

#### 输入

##### 产品流

###### 交付包装和防护材料（`delivery_packaging_materials`）

记录用于交付合格设备的纸箱、木箱、托盘、薄膜、泡沫、干燥剂、防护盖、文件、可重复使用运输包装及其他包装。

- 选定流：为每种包装材料和可重复使用包装服务选择精确的天工产品流
- 流属性/单位：质量 / kg；适用时辅以件数或复用循环次数
- 数量规则：发给已发运合格产品的包装实测量，扣除已返还的可重复使用包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023`

###### 包装与发运能源（`packaging_dispatch_energy`）

记录包装、保存、贴标以及到最终物流平台的发运准备所使用的计量或分配能源。

- 选定流：为场址和期间选择精确的天工能源载体产品流
- 流属性/单位：能量 / kWh、MJ 或载体特定单位
- 数量规则：包装线能源实测值或有依据的共享计量能源分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终物流平台处的设备成品（`finished_apparatus`）

这是本 PCR 的参考输出。包装随产品交付，但不计入 1 kg 设备净质量参考数量。

- 选定流：雷达设备，无线电导航设备及无线电遥控设备 `1423adf5-00aa-48ab-a228-5935b58a21ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将核算期内已发运合格设备净质量实测值归一化后为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格设备净质量，不含交付包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_output_acceptance_and_mass`
- 来源：`international-epd-pcr-2024-06`; `iec-63366-2025`

##### 废物流

###### 包装线废物（`packaging_dispatch_waste`）

记录送往各处理路线的包装边角料、损坏包装、临时防护材料和其他发运废物。

- 选定流：在材料和处理路线声明后选择精确的天工废物流
- 流属性/单位：质量 / kg
- 数量规则：转移到各处理路线的包装废物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_treatment`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享制造、装配、测试和包装作业 | 首先通过所声明配置的独立计量、批次记录、工位时间、设备循环、材料领用和废物记录避免分配。 | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_physical_driver` | 无法细分的共享作业 | 使用最能表示资源因果关系的物理驱动量，例如实测工位能源、加工时间、设备循环、处理质量、占用测试时间或合格件数。若产品质量不能代表作业，不得默认按质量分配。 | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_economic_fallback` | 缺少可辩护物理驱动量的共享作业 | 只有在无法细分且不存在因果物理驱动量时才能使用经济分配；披露数值、期间、产品范围、敏感性及理由。 | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_rework_and_rejects` | 返工、不合格品、回收组件和生产废料 | 将返工能源和替换投入归属于合格产出；回收材料或组件保持为可见流；除非下游建模方法明确规定并单独报告回收分配，否则记录废物处理且不计入抵扣。 | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_documentation` | 每项已分配投入或输出 | 记录分配总体、分子、分母、核算期间、数据源、所得因子和受影响清单行，使分配可复现。 | `pep-ecopassport-pcr-ed4-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_supplier_inputs` | `supplier_inputs_and_inbound_logistics` | 采购零部件和材料；收货投入 | 批准物料清单、采购收货、领料、供应商声明、库存记录 | 零件 id；描述；供应商；国家；天工流 id；数量；单位；实测质量；配置；批次；收货日期；期初期末库存 | 将批准配置 BOM 与收货、库存移动和生产领用进行核对；保留供应商证据以支持组成和上游数据集选择 | kg 和件 | 每批次，并进行核算期核对 | 完整生产核算期，通常为代表性年度或完整生产批次 | 范围内每个制造场址和供应路线 | 可归属收货或领用数量除以合格设备净质量 | 已批准 BOM 版本、收货单、称量记录、库存核对、供应商声明和未解决组成清单 |
| `cp_inbound_logistics` | `supplier_inputs_and_inbound_logistics` | 入厂运输服务 | 发运、承运商、路线和货运记录 | 起点；终点；运输方式；距离；装运质量；装载率；返程；分配基准；发运日期 | 按路线和运输方式分别用已记录装运质量和距离计算服务量 | tkm 或运输方式特定服务单位 | 每票发运或代表性路线抽样 | 与生产投入相同期间 | 范围内每条材料供应路线和收货场址 | 按运输方式汇总可归属运输服务并除以合格设备净质量 | 提单、承运商记录、路线证据和已记录假设 |
| `cp_subassembly_materials` | `electronic_and_rf_assembly` | 电子和射频零部件 | 领料、拣选单、机器投料、退料和库存记录 | 零件 id；子组件 id；批次；领用数量；退回数量；实测质量；配置；场址；日期 | 将材料领用与合格子组件配置、退料、不合格品和库存变化核对 | kg 和件 | 每批次 | 每条纳入路线的完整生产期 | 每个受控电子或射频装配场址 | 净领用量除以合格子组件质量，再除以合格设备质量 | 受控配方或 BOM、领退料记录和质量核对 |
| `cp_process_energy` | `electronic_and_rf_assembly`; `final_assembly_testing_and_calibration`; `packaging_and_dispatch` | 工艺能源 | 计量表、设备日志、燃料发票、压缩空气或热能记录 | 载体；计量表 id；起止读数；设备或工位；运行时间；批次；场址；期间；分配驱动量 | 有直接计量时采用直接计量；否则用已记录因果驱动量分配经核对的场址或产线计量值 | kWh、MJ 或载体特定单位 | 连续、每批次或按计量条件每月 | 完整生产期；适用时覆盖季节和生产批次 | 每个纳入制造、测试和包装场址 | 可归属载体量除以合格过程产出并归一化到合格设备净质量 | 校准计量表、发票、设备日志、场址总量核对和分配工作表 |
| `cp_process_consumables` | `electronic_and_rf_assembly`; `final_assembly_testing_and_calibration` | 消耗品和工艺化学品 | 采购、领用、储罐、配方或库存记录 | 材料标识；适用时 CAS 或规格；数量；单位；期初期末库存；退回量；废物量；过程；批次 | 通过领用或库存平衡核对净消耗量，并映射到精确工艺化学品 | kg、L、件或协议特定单位 | 每批次或每月 | 完整生产期 | 每个纳入装配和测试场址 | 可归属净消耗量除以合格过程产出并归一化到合格设备净质量 | 采购和领用记录、配方、储罐测量、SDS 或规格及库存核对 |
| `cp_subassembly_output_and_yield` | `electronic_and_rf_assembly` | 合格子组件产出和成品率 | 生产计数、测试结果、转移和称量记录 | 子组件 id；配置；投入件数和质量；合格件数和质量；不合格件数和质量；返工件数；转移日期 | 对每条子装配路线核对合格转移质量、不合格品、返工和库存变化 | kg 和件 | 每批次 | 完整生产期 | 每个纳入子装配场址和产线 | 使用配置链接将合格转移质量分配到设备合格总质量 | 校准秤、生产和测试记录、返工日志及质量平衡 |
| `cp_final_assembly_inputs` | `final_assembly_testing_and_calibration` | 最终装配投入 | 装配 BOM、拣选单、序列谱系、领用、退料和库存记录 | 设备序列号或批次；配置；零件或子组件 id；数量；实测质量；领退料；场址；日期 | 将序列号或批次谱系及净材料领用与合格产出核对 | kg 和件 | 每台设备或每批次 | 完整生产期 | 每个最终装配场址 | 可归属净投入除以合格设备净质量 | 已批准配置 BOM、序列谱系、领退料记录和质量核对 |
| `cp_output_acceptance_and_mass` | `final_assembly_testing_and_calibration`; `packaging_and_dispatch` | 合格参考输出 | 校准称量、生产放行、验收测试、序列和发运记录 | 设备子类型；型号；配置；序列号或批次；净质量；包装质量；验收结果；测试协议；放行日期；发运日期 | 汇总通过所声明验收协议的产品净质量；包装质量单独保留 | kg 和件 | 每台放行设备或每批次 | 完整生产期 | 每个最终装配和最终物流场址 | 全部可归属投入和输出除以合格设备净质量；最终参考输出等于 1 kg | 校准秤证书、验收和校准报告、放行授权、发运记录及不合格品日志 |
| `cp_waste_rework_and_treatment` | 所有纳入过程 | 收货废物、工艺废物、不合格品、返工和处理 | 废物联单、内部报废、返工、回收和处理记录 | 废物标识；危险类别；来源过程；质量或体积；返工状态；回收量；去向；处理方式；日期 | 核对产生废物、受控返工、内部回收、场外转移和库存变化，避免重复计算 | kg、L、件或处理特定单位 | 每次转移，并按月或批次核对 | 完整生产期 | 每个纳入场址和处理路线 | 可归属量除以合格过程产出并归一化到合格设备净质量 | 校准地磅或秤记录、废物联单、返工谱系、处理证明和质量平衡 |
| `cp_direct_emissions` | `electronic_and_rf_assembly`; `final_assembly_testing_and_calibration` | 向空气、水和土壤的直接排放 | 烟道或排口测量、连续监测、实验室分析、许可计算 | 物质；介质；浓度；流量；持续时间；计算因子；过程；场址；日期；检出限 | 使用实测排放或已记录许可计算；不得扣除或重复上游及处理排放 | kg 或排放报告单位 | 监测或许可规定频率 | 完整生产期，包括代表性运行状态 | 范围内每项排放作业 | 可归属直接排放除以合格过程产出并归一化到合格设备净质量 | 校准、实验室报告、许可方法、检出限处理及与背景数据集的重复检查 |
| `cp_packaging_and_dispatch` | `packaging_and_dispatch` | 交付包装与发运 | 包装 BOM、领用、退回、复用循环、称量和发运记录 | 包装材料；件；质量；可复用标识；使用次数；返还率；设备配置；发运日期 | 核对发给已发运合格产品的包装、可复用包装循环、退回和包装废物 | kg 和件或复用循环 | 每票发运或每批次 | 完整生产期 | 每个包装和最终物流场址 | 可归属包装数量除以合格设备净质量 | 包装规格、校准称量、领退记录和发运核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass_normalization` | 全部清单行 | 归一化数量 = 核算期内可归属数量 / 同期合格设备净质量 | 可归属清单行数量；合格设备净质量 | 每 1 kg 合格设备净质量的数量 | `international-epd-pcr-2024-06`; `pep-ecopassport-pcr-ed4-2021` |
| `calc_net_material_input` | 采购和领用材料 | 可归属净投入 = 收货或领用 + 期初库存 - 期末库存 - 已记录退供应商或退库量 | 采购或领用记录；库存；退回量 | 材料或零部件净投入 | `pep-ecopassport-pcr-ed4-2021` |
| `calc_transport_service` | 入厂运输 | 按运输方式的运输服务 = 可归属装运质量（t）× 路线距离（km），并声明装载和返程处理 | 装运质量；距离；运输方式；分配假设 | tkm 或运输方式特定运输服务 | `pep-ecopassport-pcr-ed4-2021` |
| `calc_shared_operation_allocation` | 共享能源、材料、水、排放和废物 | 可归属数量 = 共享实测数量 × 所声明因果驱动量份额；分配前优先采用细分或直接计量 | 共享计量或记录；物理驱动量；生产总体 | 已分配前景数量和分配因子 | `pep-ecopassport-pcr-ed4-2021` |
| `calc_yield_rework_reconciliation` | 子装配和最终装配 | 核对投入、合格产出、受控返工、不合格品、废物、退料和库存变化，并披露残余不平衡 | 材料领用；产出；返工；不合格品；废物；退料；库存 | 成品率、废物、返工和质量平衡残差 | `chalmers-active-safety-radar-2023`; `pep-ecopassport-pcr-ed4-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和全部配置依赖记录 | 在全部过程记录中保持设备子类型、型号、配置、BOM 版本、验收协议和精确参考流 UUID 一致。 | 配置基线、已批准 BOM、序列或批次谱系、验收报告和 UUID 读回 |
| `dq_temporal_representativeness` | 前景记录 | 使用代表所声明技术的完整且当前生产核算期；识别生产批次空缺、停机期、原型以及非常规测试负荷。 | 生产日历、计量覆盖、核算期核对和偏差日志 |
| `dq_geographical_technological_representativeness` | 前景场址和上游数据集 | 代表每个纳入场址、供应路线、装配技术、测试路线和能源地域；记录数据替代及其对代表性的影响。 | 场址和供应商清单、路线图、技术记录、数据集元数据和替代评估 |
| `dq_completeness_and_mass_balance` | BOM、材料、产出、废物和库存变化 | 核对合格产品净质量和已知配置投入。不得仅因质量小而排除电子元件、贵金属或关键材料、电池、受监管物质、危险废物和直接排放。 | BOM 与称量核对、材料声明、废物联单、排放记录、未解决组成清单和质量平衡残差 |
| `dq_primary_secondary_separation` | 自有作业和采购投入 | 对受控制造、装配、测试、校准、包装和废物作业使用直接前景记录。供应商特定数据和次级数据集应单独识别，并附时间、地域、技术和质量元数据。 | 计量表和运行记录、供应商声明、数据集元数据和数据质量评估 |
| `dq_allocation_reproducibility` | 共享作业 | 每项分配均应可由保留的总量、驱动量、总体、期间和公式复现；选择可能显著影响结果时应披露敏感性。 | 分配工作表、计量总量、驱动量记录和敏感性结果 |
| `dq_confidential_configuration_gaps` | 保密或客户特定组件 | 保密性不构成静默遗漏质量或负荷的理由。仅按披露所必需的层级汇总受限组件，保留可审计证据，并报告未解决组成或数据集替代。 | 受控证据登记、汇总质量记录、审查访问说明和未解决数据声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认所选参考产品流为 `1423adf5-00aa-48ab-a228-5935b58a21ed`，类型为 Product flow，CPC 分类为 48220，参考属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，参考单位组和单位分别为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `validate_required_qualifiers` | 前景数据包 | 缺少设备子类型、型号/配置、制造地域和期间、净质量、装配路线、验收协议，或缺少适用的电子、射频、供电、冷却、电池、包装、使用寿命和运行工况限定信息时，判定不符合。 | `iec-63366-2025`; `international-epd-pcr-2024-06` |
| `validate_reference_mass` | 归一化清单 | 确认参考输出等于 1 kg 合格设备净质量，包装单独报告，且全部可归属投入和输出记录使用同一合格产出分母。 | `international-epd-pcr-2024-06`; `pep-ecopassport-pcr-ed4-2021` |
| `validate_process_coverage` | 系统边界与过程图 | 确认供应商投入与入厂物流、适用的电子与射频装配、最终装配/测试/校准、包装、生产损失、不合格品、返工、废物处理和直接排放已纳入，或明确论证为不适用。 | `pep-ecopassport-pcr-ed4-2021`; `chalmers-active-safety-radar-2023` |
| `validate_exact_flow_selection` | 非参考清单标识 | 将没有精确已审查天工标识的场址特定零部件、能源、运输、废物和基本流行视为未解决；不得静默替换为语义近似的 hybrid-search 候选。 |  |
| `validate_allocation_and_reconciliation` | 共享负荷、质量平衡、成品率和返工 | 确认优先尝试直接计量或细分，每项剩余分配均可复现，且投入-产出-返工-废物-库存核对具有已披露残差。 | `pep-ecopassport-pcr-ed4-2021` |
| `validate_data_quality_disclosure` | 发布就绪性 | 确认已记录时间、地域、技术、完整性、精度、一致性、供应商数据覆盖、排除项、未解决组成和下游阶段排除；不确定或实质不完整的检查默认失败。 | `pep-ecopassport-pcr-ed4-2021`; `chalmers-surface-radar-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | 用于所声明雷达设备、无线电导航辅助设备或无线电遥控设备配置的前景制造数据包及其 process 或 lifecyclemodel 投影 |
| allowed_use | 归一化到 1 kg 合格设备净质量的产品和场址特定制造 LCI；上游供应链链接；贡献分析；另行加入已声明安装、使用、维护、使用寿命和报废情景的下游模型 |
| excluded_use | 不同设备子类型或性能等级之间的直接比较；没有已声明负荷模式、能耗曲线、使用寿命、维护、安装和报废情景的使用阶段或全生命周期声明；用未披露通用电子产品替代配置特定投入；声称 CPC 映射已获接受 |
| required_metadata | PCR id 和版本状态；设备子类型；型号和配置；预期应用；制造商和地域；生产期；BOM 和供应商数据覆盖；装配、测试和校准路线；产品净质量；PCB/电子与射频配置；供电、冷却和电池配置；验收协议；精确流标识；分配；包装；排除项；未解决数据；纳入或排除的下游阶段 |
| required_quality_disclosure | 前景计量覆盖；时间、地域和技术代表性；完整性和质量平衡；供应商和次级数据集质量；分配和敏感性；废物和排放覆盖；受限数据汇总；未解决 UUID 或组成缺口；已执行和跳过的校验 |
| update_trigger | 设备子类型或配置、BOM、PCB 或射频架构、制造或供应商场址、装配/测试技术、验收协议、能源或运输地域、包装、分配驱动量、数据源、生产期发生变化，或任何会显著影响归一化清单或其代表性的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-63366-2025` | `standard` | IEC 63366:2025，Product category rules for life cycle assessment of electrical and electronic products and systems，https://webstore.iec.ch/en/publication/67691，检索于 2026-08-10 | EEPS 横向 PCR 语境、产品特定限定信息和情景，以及通用 PCR 与产品特定规则的区分 |
| `international-epd-pcr-2024-06` | `standard` | International EPD System PCR 2024:06，Electronic and electric equipment, and electronic components (non-construction)，版本 1.0.1，https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f，检索于 2026-08-10 | 覆盖 UN CPC 43-48 部门的行业范围，以及非建筑电子电气设备的声明单位基准 |
| `pep-ecopassport-pcr-ed4-2021` | `standard` | PEP ecopassport PCR edition 4，Product Category Rules for Electrical, Electronic and HVAC-R Products，2021-09-06，https://register.pep-ecopassport.org/documents/public/PCR-4-EN，检索于 2026-08-10 | 制造阶段边界、完整材料/零部件/过程清单、运输与废物处理、分配、原始与次级数据以及数据质量规则 |
| `chalmers-active-safety-radar-2023` | `literature` | Almroth, A. 与 Rehnberg, I.（2023），Life Cycle Assessment of an Active Safety Radar System，Chalmers University of Technology 报告 E2023:044，https://odr.chalmers.se/bitstreams/a3062731-f2b2-4e85-b0c2-0ba4201ce2d5/download，检索于 2026-08-10 | 雷达特定 PCB 和大宗组件结构、供应商制造、PCB 装配、最终装配、工艺能源、包装废物、使用阶段分离及生命周期拆分 |
| `chalmers-surface-radar-2023` | `literature` | Schmidt, F. 与 Johansson, M.（2023），Environmental Life Cycle Assessment of a Surface Radar System，Chalmers University of Technology 报告 E2023:080，https://odr.chalmers.se/bitstreams/e4fa6931-e6aa-46b9-a52c-edea16efd800/download，检索于 2026-08-10 | 大型雷达系统配置广度、物料清单和供应商数据采集、时间与完整性限制以及受限或不完整组件披露 |

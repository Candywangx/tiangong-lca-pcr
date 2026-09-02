---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.solid-state-non-volatile-storage-devices
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 固态非易失性存储设备

## 1. 范围与适用性

本 PCR 用于制造厂门口交付的固态非易失性存储设备成品前景数据包。所覆盖产品无需供电即可保持数据，并具有从外部来源记录数据所需的物理集成，包含 CPC 3.0 代码 47550 范围内的通用客户端、企业级、嵌入式、卡式及同等成品形态。

本类别包括固态硬盘、闪存卡或闪存电子存储卡及功能同等的固态非易失性存储成品。具体数据包必须声明实际架构，不得以单一容量、接口、形态、存储单元技术或应用等级代表整个类别。

本 PCR 不包括裸 NAND 裸片或晶圆、未封装或单独交易的存储器/控制器集成电路、半导体制造中间品、磁性或光学记录介质、机械硬盘、可移动介质驱动器与读卡器、智能卡、完整数据中心存储系统、主机计算机、软件或已记录内容。上述产品需采用各自产品身份及上下游数据集。纳入的闪存卡是记录设备/介质本身；排除的可移动介质存储单元则是接受可移动介质的读卡器或驱动器。类别解释遵循联合国 CPC 解释性说明。[`unsd-cpc-3-0-2025`]

默认数据生产边界在汇总数据集层面为从摇篮到制造厂门口。前景采集始于报告场址接收并验收的外购部件和材料，止于场址门口已包装的合格产品。即使 NAND、控制器、其他集成电路、PCB、基板、连接器、外壳、连接材料和包装不在组装方直接控制范围内，其上游生产也必须通过供应商特定或代表性背景数据保留在产品系统中。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.solid-state-non-volatile-storage-devices |
| classification_refs | CPC 3.0：47550，固态非易失性存储设备（精确范围参考） |
| covered_products | 从外部来源记录数据的固态非易失性存储设备或介质成品；通用 SSD、闪存卡、闪存电子存储卡及同等成品形态 |
| excluded_products | 裸 NAND 或控制器裸片/晶圆/芯片；半导体中间品；HDD；磁性或光学介质；可移动介质读卡器/驱动器；智能卡；完整存储阵列或主机；软件或已记录内容；被用作通用类别参考的容量、型号、材料、路线或应用特定流 |
| representative_product | 制造厂门口合格成品的质量加权声明生产组合，并披露容量、接口/协议、形态、介质技术、固件状态、应用等级、外壳和包装状态 |
| production_route | 外购部件接收与核对；电子/介质互连及设备组装；固件/配置写入；功能测试与良率控制；最终包装；场址公用工程和废物管理分配 |
| market_state | 制造厂门口已制造、质量放行、未记录或完成工厂初始化的产品；不是裸部件或主机系统 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付能够从外部来源记录数据的固态非易失性存储设备成品 |
| How much | 制造厂门口 1 kg 合格成品净质量；除非数据集明确纳入运输包装并单列其质量，否则不含运输包装 |
| How well | 满足 CPC 47550 和产品身份；声明用户容量、接口/协议与速度等级、形态、非易失介质类型/技术、固件版本或配置状态、客户端/企业级/嵌入式/卡式应用等级、外壳状态和包装状态 |
| How long or cycle | 制造厂门口一个声明的生产批次或报告期；质量参考不代表使用寿命和使用阶段工作负载，相关内容须另行建模 |
| reference_flow_link | 1 kg Solid-state non-volatile storage devices `4c208ec5-5d80-4547-ab8e-347ef5fb1caf` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 固态非易失性存储设备 `4c208ec5-5d80-4547-ab8e-347ef5fb1caf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 用户容量及容量换算约定；接口/协议及额定速度；形态与尺寸；非易失介质类型及已知的存储单元技术；控制器与固件/配置状态；客户端、企业级、嵌入式、卡式或其他应用等级；外壳与连接器状态；工厂记录内容或初始化状态；生产地域与报告期；产品及纳入包装的质量；生产组合或单一产品基准 |

构建前景数据包时，`必需限定信息` 必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺项即参考流定义不完整。SNIA 设备级报告将用户容量、接口/速度、形态、介质类型、固件版本和客户端/企业级用途列为重要描述项；本 PCR 保留这些描述项，但不规定某一性能水平。[`snia-sss-pts-2-0-2`]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或核对合格成品净质量。1 kg 参考量不含运输包装，纳入的初级或零售包装须单独报告；只有声明产品流明确包含包装时方可另作处理。 |
| `capacity_is_qualifier` | 用户容量 | 声明的数字存储容量 | GB 或 TB，并声明十进制/二进制约定 | 容量是必需产品限定信息和计算驱动项，不替代质量参考流。没有产品特定 BOM、良率和能耗证据时，不得将某容量结果换算到另一容量。[`snia-sss-pts-2-0-2`] |
| `energy_measurement` | 电力与燃料投入 | 能量 | kWh、MJ 或带有换算记录的源仪表单位 | 保留源仪表单位及换算因子，区分过程直接计量与共享设施分配能耗，防止重复。 |
| `water_and_gas_measurement` | 水和工艺气体投入 | 声明条件下的质量或体积 | kg、m3、Nm3 或源仪表单位 | 气体体积须声明温压约定，质量与体积换算须声明密度和换算基准。 |
| `lot_to_reference_normalization` | 所有前景数量 | 各流适用数量 | 每 1 kg 参考产品的行特定单位 | 仅在核对同一报告期合格产品净质量、废品、返工和库存变化后进行归一化。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_finished_device_gate` | 前景制造 | 纳入部件接收核对、组装/互连、编程或配置、功能测试与良率处置、成品包装，以及交付厂门口合格成品所需的场址公用工程、减排、废水和废物管理分摊。 | `eu-pef-method-2021`; `samsung-semiconductor-lca-method` |
| `boundary_upstream_component_coverage` | 外购部件和材料 | NAND 封装、控制器及支持 IC、基板/PCB、连接器、外壳、连接材料、耗材、公用工程和包装均须保留供应商特定或代表性上游数据。不得因半导体部件质量小而截断。 | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `boundary_foreground_control` | 垂直一体化生产 | 当晶圆制造、IC 封装、PCB/基板、连接器或外壳制造由报告组织直接控制时，应作为附加前景过程采集或附接可分解场址数据；否则使用经审查的上游数据并披露边界。 | `eu-pef-method-2021`; `samsung-semiconductor-lca-method` |
| `boundary_use_and_end_of_life` | 下游阶段 | 分销、使用阶段电力、维护、延寿、数据擦除、再使用和生命末期默认不属于本制造厂门口前景包；如纳入须作为独立下游模块。仅有质量基准的数据不得支持存储服务比较声明。 | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `boundary_no_unreported_cutoff` | 完整性 | 报告所有已知材料、能源、水、工艺气体、废物及直接排放。不可得数量应保留为数据缺口，不得默认为零。 | `eu-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告场址接收点已验收的外购部件、材料和耗材，并声明期初库存和上游数据链接 |
| starting_condition_role | 生成从摇篮到制造厂门口汇总数据包的前景组装厂门口输入条件 |
| product_classification_scope | CPC 3.0 代码 47550 的固态非易失性存储设备成品；纳入的闪存卡是记录设备/介质本身，不是外部读卡器或驱动器 |
| recursive_input_rule | 若投入本身属于同一成品类别，则作为产品投入记录一次并链接独立上游数据，不在当前前景过程中递归展开同一 PCR |
| upstream_dataset_requirement | 每项外购半导体、电子、结构、连接、公用工程和包装投入都需供应商特定或代表性上游数据，并披露地域、技术和时间代表性 |
| disclosure | 声明组织边界、场址与过程、外包工序、产品组合、部件技术、容量组合、良率/返工、电力地域与时期、分配驱动、包装处理及未解决数量或上游数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `device_assembly_and_programming` | 设备组装与编程 | required | 成品始终纳入；按卡式、模块、板卡、封装驱动器或同等架构调整互连步骤 | 前景生产 | 转入测试的设备净组装质量及所有相关投入、废料和直接排放记录 |
| `functional_test_and_yield_control` | 功能测试与良率控制 | required | 始终纳入；测试协议和老化/调理强度反映声明的产品/应用等级 | 前景调理与质量放行 | 合格未包装设备质量及核对后的废品/返工设备质量 |
| `finished_product_packaging` | 成品包装 | required | 始终纳入；零包装或可复用包装须有明确证据 | 前景最终化 | 1 kg 成品净质量及单列包装质量对应的已包装产出 |
| `site_support_and_waste_management` | 场址支持与废物管理 | required | 只纳入未在其他过程中直接计量的共享负荷 | 前景支持 | 每 1 kg 成品净质量的因果分配份额 |

### 过程：设备组装与编程（`device_assembly_and_programming`）

#### 输入

##### 产品流

###### 外购非易失性存储部件（`purchased_nvm_components`）

记录装入设备的 NAND 封装、其他非易失存储器封装、堆叠封装或存储模块成品；裸晶圆或裸片制造默认属于上游系统。

- 选定流：外购非易失性存储部件；发布前按真实部件身份解析
- 流属性/单位：Mass / kg
- 数量规则：供应商收货与 BOM 质量，并与批次领用量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_and_material_records`
- 来源：`boyd-horvath-dornfeld-nand-lca-2011`; `samsung-semiconductor-lca-method`

###### 控制器与支持电子部件（`controller_and_support_electronics`）

记录控制器、功率管理、无源器件、安全/桥接器件及其他装入产品的电子部件。

- 选定流：控制器与支持电子部件；发布前按真实部件身份解析
- 流属性/单位：Mass / kg
- 数量规则：BOM 数量乘核实单件质量，并与领用和退回记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_and_material_records`
- 来源：`samsung-semiconductor-lca-method`

###### 互连与结构部件（`interconnect_and_structural_components`）

记录 PCB/基板、连接器、外壳、散热件、标签及其他永久结构部件。

- 选定流：互连与结构部件；每一材料/部件类别使用一个经审查流
- 流属性/单位：Mass / kg
- 数量规则：BOM 与收货质量，按期初/期末库存和生产退料修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_and_material_records`
- 来源：`eu-pef-method-2021`

###### 连接与组装材料（`joining_and_assembly_materials`）

记录焊料、胶黏剂、底部填充、封装料、涂层、清洗剂和其他组装耗材。

- 选定流：连接与组装材料；每种物质或配制品一个经审查流
- 流属性/单位：Mass / kg
- 数量规则：采购/领用或产线点胶记录减有据退料，按合格产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_and_material_records`
- 来源：`eu-pef-method-2021`

###### 组装线电力（`assembly_line_electricity`）

记录贴装、连接、固化、清洗、编程及相关产线设备直接计量或因果归属电力。

- 选定流：匹配场址、时期和电压等级的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：报告期分表电量或设备功率-时间记录，不含场址支持中的共享电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_records`
- 来源：`eu-pef-method-2021`; `samsung-semiconductor-lca-method`

##### 废物流

#### 输出

##### 产品流

###### 转入测试的已组装并编程设备（`assembled_programmed_device`）

记录转入功能测试的质量，并计入跨报告期在制品变化。

- 选定流：最终测试前的已组装固态存储设备
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量加期末在制品减期初在制品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_yield_rework_and_waste_records`
- 来源：`eu-pef-method-2021`

##### 废物流

###### 组装废料与损失（`assembly_scrap_and_losses`）

按处置路线分别记录拒收部件、板/基板废料、焊渣、废组装材料和其他外送废物。

- 选定流：组装废物；每种废物类别和处置路线一个经审查废物流
- 流属性/单位：Mass / kg
- 数量规则：地磅、危废联单、废料销售或生产废品记录；仅扣除边界内有据内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_yield_rework_and_waste_records`
- 来源：`eu-pef-method-2021`

##### 基本流

###### 组装直接排放（`assembly_direct_emissions`）

清洗、连接、固化或涂覆的每种实测/许可直接排放应单列，不重复上游电力或材料数据中的排放。

- 选定流：场址特定空气、水或土壤基本排放；逐物质解析
- 流属性/单位：Mass / kg
- 数量规则：可归属组装的烟道/废水测量、物料衡算或法规排放记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_emission_and_discharge_records`
- 来源：`eu-pef-method-2021`

### 过程：功能测试与良率控制（`functional_test_and_yield_control`）

#### 输入

##### 产品流

###### 进入测试的已组装设备（`assembled_devices_entering_test`）

记录进入测试的质量和件数，包括期初期末在制品。

- 选定流：最终测试前的已组装固态存储设备
- 流属性/单位：Mass / kg
- 数量规则：生产执行记录与转移质量、件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_yield_rework_and_waste_records`
- 来源：`snia-sss-pts-2-0-2`

###### 测试与调理电力（`test_and_conditioning_electricity`）

记录功能测试、读写调理、适用时老化、温控及测试支持设备电力；测试状态、工作负载和时长须匹配产品等级。

- 选定流：匹配场址、时期和电压等级的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：测试单元分表或与被测件和测试配方关联的测试机功率-时间记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_recipe_energy_and_result_records`
- 来源：`snia-sss-pts-2-0-2`

###### 测试耗材与更换件（`test_consumables_and_replacements`）

记录报告期消耗或更换的插座、夹具、导热材料、清洗材料等。

- 选定流：测试耗材；每一材料或部件类别一个经审查流
- 流属性/单位：Mass / kg，或件数按实测单件质量换算
- 数量规则：领用与更换记录按被测件、测试机时或其他因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_recipe_energy_and_result_records`
- 来源：`eu-pef-method-2021`

#### 输出

##### 产品流

###### 合格未包装设备（`conforming_unpacked_devices`）

仅记录质量放行成品；混合生产保留容量、接口、形态、介质、固件和应用等级分布。

- 选定流：固态非易失性存储设备 `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`
- 流属性/单位：Mass / kg
- 数量规则：质量放行件数乘实测产品质量，并与发运/包装转移记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product_mass_and_qualifiers`
- 来源：`unsd-cpc-3-0-2025`; `snia-sss-pts-2-0-2`

##### 废物流

###### 失效设备与测试废物（`failed_devices_and_test_waste`）

按最终处置记录失效设备、更换件和废测试耗材；边界内返工回流不是外部废物，但须保留在良率核对中。

- 选定流：失效电子设备与测试废物；每种最终处置一个经审查废物流
- 流属性/单位：Mass / kg
- 数量规则：失效分析和处置记录与被测、返工、放行、报废件数核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_yield_rework_and_waste_records`
- 来源：`eu-pef-method-2021`

##### 基本流

###### 测试直接排放（`test_direct_emissions`）

仅在测试或调理实际产生直接排放时逐物质、逐环境隔间记录。

- 选定流：场址特定空气、水或土壤基本排放；逐物质解析
- 流属性/单位：Mass / kg
- 数量规则：可归属测试过程的实测或计算排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_emission_and_discharge_records`
- 来源：`eu-pef-method-2021`

### 过程：成品包装（`finished_product_packaging`）

#### 输入

##### 产品流

###### 进入包装的合格设备（`devices_entering_packaging`）

记录转入包装的合格设备净质量。

- 选定流：固态非易失性存储设备 `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`
- 流属性/单位：Mass / kg
- 数量规则：包装转移记录与质量放行和发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_mass_and_qualifiers`
- 来源：`unsd-cpc-3-0-2025`

###### 初级、次级与运输包装（`packaging_material_inputs`）

袋、托盘、卷盘、卡纸、纸箱、缓冲、标签、干燥剂和托盘按材料和包装层级分别记录；可复用包装须在独立上游模型中包含周转次数、损耗和回程物流。

- 选定流：包装材料；每种材料和包装层级一个经审查流
- 流属性/单位：Mass / kg
- 数量规则：包装 BOM 与采购/领用记录同包装件数和包装废物核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_energy_and_waste_records`
- 来源：`eu-pef-method-2021`

###### 包装线电力（`packaging_line_electricity`）

记录包装设备直接计量或因果分配电力，不含场址支持中的共享电力。

- 选定流：匹配场址、时期和电压等级的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：报告期包装线仪表或设备功率-时间记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_energy_and_waste_records`
- 来源：`eu-pef-method-2021`

#### 输出

##### 产品流

###### 已包装成品参考产品（`packaged_finished_reference_product`）

参考产出是 1 kg 成品净质量；包装质量作为单独投入和元数据报告，以便一致纳入或排除。

- 选定流：固态非易失性存储设备 `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考量 1 kg 合格设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 包装废物（`packaging_waste`）

按材料和处置路线记录离场的损坏、裁切或未用包装。

- 选定流：包装废物；每种材料和处置路线一个经审查废物流
- 流属性/单位：Mass / kg
- 数量规则：报告期废物称量或包装物料平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_energy_and_waste_records`
- 来源：`eu-pef-method-2021`

##### 基本流

###### 包装直接排放（`packaging_direct_emissions`）

仅在实际存在时按物质和环境隔间单列包装线直接排放。

- 选定流：场址特定空气、水或土壤基本排放；逐物质解析
- 流属性/单位：Mass / kg
- 数量规则：可归属包装的实测或计算排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_emission_and_discharge_records`
- 来源：`eu-pef-method-2021`

### 过程：场址支持与废物管理（`site_support_and_waste_management`）

#### 输入

##### 产品流

###### 场址共享能源与燃料（`shared_site_energy_and_fuels`）

记录 HVAC、干燥空气、压缩空气、真空、照明、办公等未直接计量到生产过程的共享电力和燃料。

- 选定流：场址和时期特定电力、燃料供应；每种供应一个经审查流
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：场址仪表总量减直接归属过程用量，再按有据因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_shared_site_utility_records`
- 来源：`eu-pef-method-2021`; `samsung-semiconductor-lca-method`

###### 共享水和工艺气体（`shared_water_and_process_gases`）

记录未由产线直接记录的共享水、氮气等气体；半导体制造气体应进入供应商或垂直一体化制造数据集，不得作为无据组装估算。

- 选定流：水与工艺气体供应；每种供应一个经审查流
- 流属性/单位：Mass 或体积 / kg、m3 或 Nm3，并声明条件
- 数量规则：场址仪表和采购记录减直接归属用量，再按有据因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_shared_site_utility_records`
- 来源：`boyd-horvath-dornfeld-nand-lca-2011`; `samsung-semiconductor-lca-method`

#### 输出

##### 产品流

##### 废物流

###### 共享废水与固体废物（`shared_wastewater_and_solid_waste`）

记录未归属具体生产过程的共享废水和场址废物，按已知组成和最终处置路线分列。

- 选定流：废水或固体废物；每一类别和处置路线一个经审查废物流
- 流属性/单位：Mass 或体积 / kg 或 m3
- 数量规则：排放仪表、废物联单和处理发票减直接归属过程废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_shared_site_utility_records`
- 来源：`eu-pef-method-2021`

##### 基本流

###### 场址共享直接排放（`shared_direct_site_emissions`）

扣除已归属生产过程的排放后，按物质和环境隔间记录剩余场址直接排放。

- 选定流：场址特定空气、水或土壤基本排放；逐物质解析
- 流属性/单位：Mass / kg
- 数量规则：场址监测/法规排放总量减直接归属排放，再按相关支持活动因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_emission_and_discharge_records`
- 来源：`eu-pef-method-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品产线与共享过程 | 首先通过分表、独立工单、过程细分或对实测系统作有据物理扩展来避免分配。 | `eu-pef-method-2021` |
| `allocation_physical_driver` | 共享公用工程、耗材与废物 | 无法细分时，采用实测设备能耗、机器时、测试时、面积-时间、物料吞吐或产品净质量等因果物理驱动，并解释代表性；不得默认按收入。 | `eu-pef-method-2021` |
| `allocation_product_mix` | 多容量、形态或技术 | 可得时保留产品特定 BOM、质量、测试配方、良率和能耗；生产组合须由披露的产品记录按质量或产量加权，不得仅按容量缩放。 | `eu-pef-method-2021`; `snia-sss-pts-2-0-2` |
| `allocation_rework_and_internal_recycling` | 返工与内部回用 | 返工件和内部回用材料留在前景边界内；仅计算净外部投入、合格产出和外送废物，同时保留毛良率和返工记录。 | `eu-pef-method-2021` |
| `allocation_recovered_material` | 销售或回收废料 | 记录外送废物/材料数量和处理路线，不在前景制造数据集中加入未经审查的避免负担信用；回收或生命末期信用只能在跨系统一致的声明下游方法中应用。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_and_material_records` | `device_assembly_and_programming` | `purchased_nvm_components`; `controller_and_support_electronics`; `interconnect_and_structural_components`; `joining_and_assembly_materials` | BOM、采购收货、领退料及库存记录 | 产品/SKU；供应商；部件/材料；数量；单件质量；批次；领用；退回；期初/期末库存；废料链接 | 导出受控 BOM 和 ERP/MES；用称量或供应商声明核实代表性单件质量 | kg、件 | 每批次，月度核对 | 与产出一致的代表性报告期 | 所有纳入场址和运营控制下外包组装 | 领用加期初库存减退回和期末库存，与装入量及损失核对后按成品净质量归一化 | 批准 BOM、供应商规格、校准、ERP/MES 导出和核对签字 |
| `cp_process_energy_records` | `device_assembly_and_programming` | `assembly_line_electricity` | 分表、设备运行与功率记录 | 仪表；起止读数；时段；设备；配方；运行时长；产量；电压等级 | 优先校准分表，否则用实测状态功率乘日志时长 | kWh | 连续或每批，月度核对 | 至少 12 个代表性月或有据生产期 | 每条纳入组装线/场址 | 过程能耗求和后除以同期间成品净质量，并排除共享支持能耗 | 仪表校准、原始时序、设备日志和防重复核对 |
| `cp_mass_yield_rework_and_waste_records` | `device_assembly_and_programming`; `functional_test_and_yield_control` | `assembled_programmed_device`; `assembly_scrap_and_losses`; `assembled_devices_entering_test`; `failed_devices_and_test_waste` | MES 转移、良率、返工、废品和处置记录 | 投入件数/质量；良品；返工；在制品变化；拒收码；废物质量；处置路线 | 核对工单，称量代表性产品和废物并链接外部单据 | kg、件 | 每批，月度结算 | 与材料和能源相同报告期 | 所有纳入生产与测试 | 良品+外送废物+期末在制品-期初在制品须在声明容差内与投入核对 | 秤校准、MES 审计、失效分析、联单和质量平衡签字 |
| `cp_test_recipe_energy_and_result_records` | `functional_test_and_yield_control` | `test_and_conditioning_electricity`; `test_consumables_and_replacements` | 测试配方、测试机日志、功率、耗材与结果 | 设备等级；容量；接口；固件；介质；配方；负载；时长；能耗；合否/返工；耗材 | 将测试机和功率数据关联到序列号/批次、配方，保留标准偏差 | kWh、kg、件、h | 每测试批或完整自动日志 | 与产出一致 | 每个纳入测试单元/场址 | 按实际被测总体汇总并保留产品/应用等级，再按合格质量归一化 | 测试系统校准、不可变配方版本、适用的 SNIA 描述和可追溯结果 |
| `cp_finished_product_mass_and_qualifiers` | `functional_test_and_yield_control`; `finished_product_packaging` | `conforming_unpacked_devices`; `devices_entering_packaging`; `packaged_finished_reference_product` | 质量放行、产品主数据、实测质量和发运转移 | SKU；容量约定；接口/协议；速度；形态；介质；固件；应用等级；外壳；单件质量；放行件数；包装状态 | 导出放行总体和主数据；每产品族称量有据代表样本 | kg、件 | 每放行批，设计变更后复核质量 | 与清单相同报告期 | 数据集所有产品/场址 | 按限定产品族计算净质量；组合聚合保留权重与限定信息 | 校准秤、抽样、规格、质量放行和发运核对 |
| `cp_packaging_material_energy_and_waste_records` | `finished_product_packaging` | `packaging_material_inputs`; `packaging_line_electricity`; `packaging_waste` | 包装 BOM、领用、仪表和废物记录 | 层级；材料；单件质量；领退量；包装件数；仪表；废物；复用次数/损耗 | 将包装 BOM 和采购同包装产出与废物核对，实质时计量包装能耗 | kg、件、kWh | 每批，月度核对 | 与包装产出一致 | 每个纳入包装地 | 按材料和层级单列；可复用包装按有据周转和损失分配 | 包装规格、供应商声明、秤/表校准、复用日志和质量平衡 |
| `cp_shared_site_utility_records` | `site_support_and_waste_management` | `shared_site_energy_and_fuels`; `shared_water_and_process_gases`; `shared_wastewater_and_solid_waste` | 场址仪表、发票、罐存/采购和废物记录 | 公用工程；仪表；时段；数量；直接归属扣除；场址产出；分配驱动；废物类别/路线 | 收集场址总量，扣除直接过程量，以有据因果驱动分配余额 | kWh、MJ、kg、m3、Nm3 | 月度 | 至少 12 个代表性月或有据生产期 | 每个纳入场址 | 共享余额只分配一次；直接与共享量须同场址总量核对 | 发票/仪表一致性、校准、分配表、联单和管理批准 |
| `cp_site_emission_and_discharge_records` | `device_assembly_and_programming`; `functional_test_and_yield_control`; `finished_product_packaging`; `site_support_and_waste_management` | `assembly_direct_emissions`; `test_direct_emissions`; `packaging_direct_emissions`; `shared_direct_site_emissions` | 烟道、废水、许可、实验室和物料衡算 | 物质；隔间；源；浓度；流量；时长；减排；不确定度；直接归属 | 优先实测，否则采用有据物料衡算或法规方法并标明估算基础 | 每种物质 kg | 按监测计划并同报告期核对 | 与产出一致 | 所有纳入排放点和路径 | 直接过程和共享余额只汇总一次，按成品净质量归一化 | 认可实验室、校准监测、许可报告、减排日志和计算审计 |
| `cp_supplier_upstream_coverage` | `device_assembly_and_programming` | 所有外购部件、材料、公用工程和包装投入 | 供应商 PCF/LCI、经验证 EPD、过程或背景数据元数据 | 数据集 id/版本；供应商/技术；地域；年份；边界；分配；质量；匹配关系 | 将每项投入匹配经审查上游数据，无供应商数据时记录代理层级 | 数据集引用 | 数据集构建及每次来源更新 | 优先匹配前景报告期 | 所有场址外购投入 | 覆盖表须将每项非零投入对应一个上游数据且不重复 | 供应商验证、数据元数据、代表性评估和审查批准 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_finished_mass` | 参考归一化 | 成品净质量 = 各限定产品族放行件数 × 经核实净单件质量之和；排除单列包装 | 放行件数、产品族、样本质量、包装状态 | kg 成品净质量 | `eu-pef-method-2021`; `snia-sss-pts-2-0-2` |
| `calc_inventory_normalization` | 每项前景流 | 归一化量 = 报告期流量 / 报告期成品净质量 | 采集流量；`calc_net_finished_mass` 输出 | 每 1 kg 参考产品的行单位 | `eu-pef-method-2021` |
| `calc_material_reconciliation` | 部件与材料 | 期初库存+收货-期末库存-有据退回 = 装入量+废料/损失+有据库存差 | 库存、收货、退回、BOM、废物 | 各物料核对投入和差异 | `eu-pef-method-2021` |
| `calc_yield_rework_reconciliation` | 组装与测试 | 投入+期初在制品 = 合格产出+外送废物+期末在制品+有据转移；返工循环留在系统内并单列 | 投入、产出、在制品、返工、废品、废物 | 毛/最终良率、返工率、未解释差额 | `eu-pef-method-2021` |
| `calc_shared_burden_allocation` | 场址支持 | 分配负荷 = 共享余额 × 有据因果驱动份额；共享余额 = 场址总量-全部直接归属 | 场址总量、直接归属、物理驱动 | 分配的公用工程、废物或排放 | `eu-pef-method-2021` |
| `calc_upstream_coverage` | 外购投入 | 覆盖率 = 已链接经审查上游数据的外购数量/外购总量；未覆盖行单列，不得作零 | 核对外购表、上游覆盖表 | 覆盖率和未覆盖清单 | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与产出 | 核实产出是 CPC 47550 固态非易失存储设备/介质成品，而非裸半导体、磁/光介质、读卡器/驱动器、阵列、主机或冒充通用类别的容量特定代理。 | 产品主数据、BOM、照片/规格、CPC 范围审查和精确天工流身份 |
| `dq_product_qualifiers` | 产品组合 | 每个产品族保留容量约定、接口/协议、速度、形态、介质、固件/配置、应用等级、外壳、包装及组合权重。 | 受控主数据和与 SNIA 描述项对齐的放行总体 |
| `dq_temporal_representativeness` | 前景记录 | 使用至少连续 12 个代表性月，较短生产期须说明；识别停机、爬坡、设计切换和异常良率。 | 有日期仪表、MES、ERP、测试、废物和发运记录及代表性说明 |
| `dq_geographic_and_technology_match` | 上游数据 | 优先供应商/场址和技术特定数据；记录半导体/电子部件的地域、节点或存储技术、封装路线、电力、年份和代理限制。 | 供应商数据元数据和代表性评估 |
| `dq_completeness` | 全部清单 | 核对 BOM、能源、水、气体、产品、废品、废物和排放；不可得重要数量保留为缺口并阻止发布级完整性。 | 签字核对表、未覆盖投入清单和缺口登记 |
| `dq_measurement_quality` | 前景测量 | 保留仪表/秤标识、校准、抽样、换算因子、不确定度和责任人。 | 校准证书、原始导出、抽样计划和计算表 |
| `dq_no_double_counting` | 直接与共享负荷 | 直接过程记录加共享余额分配须同场址总量核对，同一流不得同时出现。 | 场址核对和分配工作表 |
| `dq_source_limitations` | 外部证据 | 不得将旧半导体工艺节点、单一 SSD 型号或其他容量/形态的数值迁移到通用 PCR；除非有当前代表性定量证据，只用于边界、过程和限定信息设计。 | 每项外部引用的来源用途审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID 必须为 `4c208ec5-5d80-4547-ab8e-347ef5fb1caf`，解析为 state-code 100 Product flow，并保持 CPC 47550、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 | `unsd-cpc-3-0-2025` |
| `validate_finished_product_scope` | 产品身份 | 若参考产品为裸 NAND/控制器裸片、晶圆、芯片、半导体中间品、磁/光介质、可移动介质读卡器/驱动器、智能卡、完整存储系统、主机、软件/内容，或用单一容量/型号替代通用类别，则拒绝。 | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | 产品元数据 | 缺少容量、接口、形态、介质、固件/配置、应用等级、外壳/连接器、初始化、地域/时期、质量、包装或组合限定信息时，完整性失败。 | `snia-sss-pts-2-0-2` |
| `validate_reference_mass` | 定量参考 | 归一化后合格设备净产出必须为 1 kg；纳入包装质量须单列且不得暗中改变设备参考质量。 | `eu-pef-method-2021` |
| `validate_mass_yield_reconciliation` | 组装与测试 | 标记部件/材料投入、在制品变化、合格产出、返工和外送废物之间的未解释差异；数据集须声明并说明核对容差。 | `eu-pef-method-2021` |
| `validate_energy_and_utility_reconciliation` | 直接与共享公用工程 | 各公用工程和时期的直接计量加共享余额分配须在声明容差内等于场址总量且不重复。 | `eu-pef-method-2021` |
| `validate_upstream_coverage` | 外购投入 | 每项非零部件/材料/公用工程/包装投入须链接经审查上游数据或列为未解决缺口；低质量半导体缺失不得记零。 | `eu-pef-method-2021`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `validate_allocation_disclosure` | 共享及多产品过程 | 要求披露因果驱动、分子分母、直接归属扣除、组合权重和理由；仅按收入分配须证明物理因果不可得并获审查接受。 | `eu-pef-method-2021` |
| `validate_no_capacity_scaling` | 跨产品使用 | 拒绝仅按 GB/TB 比例在容量、形态、技术或应用等级间换算；须有产品特定 BOM、良率、测试和能耗证据。 | `snia-sss-pts-2-0-2`; `boyd-horvath-dornfeld-nand-lca-2011` |
| `validate_downstream_claims` | 比较用途 | 仅有质量基准制造厂门口数据不足以比较存储服务；须另建覆盖容量约定、工作负载、性能、耐久/寿命、使用电力和生命末期的功能等效模型。 | `eu-pef-method-2021`; `snia-sss-pts-2-0-2` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 固态非易失性存储设备成品前景制造数据包；经审查后可作为可分解或汇总 `secondary_dataset` 或 `background_dataset` 发布 |
| downstream_use | SSD、闪存卡及同等 CPC 47550 产品供应链建模；部件贡献分析；自行添加使用和生命末期假设的下游设备、计算机、嵌入式设备或存储服务模型 |
| allowed_use | 用于声明的容量/形态/技术/应用组合及制造地域/时期；跨产品聚合须披露权重并保留限定信息 |
| excluded_use | 裸 NAND/芯片生产；磁/光介质或读卡器；阵列/主机；仅按容量缩放；无功能等效、负载、耐久/寿命、使用电力和生命末期模块的服务级或比较声明 |
| required_metadata | PCR id/版本；参考 UUID/属性/单位组/单位；CPC 范围；产品限定信息；产品/包装质量；场址/时期；技术/容量组合；前景组织边界；上游数据表；良率/返工；直接/共享公用工程；分配驱动；来源版本；未解决缺口 |
| required_quality_disclosure | 时间、地域和技术代表性；仪表/秤校准；BOM 和质量平衡；测试配方覆盖；上游半导体数据质量；分配敏感性；代理限制；排除阶段；完整性和不确定度 |
| update_trigger | 产品架构、存储技术、容量/形态组合、测试配方、固件/配置、场址、电力、BOM、良率、包装、供应商数据、分配方法、CPC 范围、天工 UUID 或外部方法来源发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `standard` | 联合国统计司：《Central Product Classification Version 3.0: Explanatory Notes》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问于 2026-08-09）。 | CPC 47550 身份；纳入固态非易失记录设备/卡；与磁/光介质、固定/可移动介质存储单元、读卡器及其他类别的区分 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会：《Commission Recommendation (EU) 2021/2279, Annex I: Product Environmental Footprint Method》，2021-12-16。https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf（访问于 2026-08-09）。 | 功能单位、参考流、生命周期边界、前景/背景、数据采集与质量、截断/完整性、多功能、分配与报告规则 |
| `snia-sss-pts-2-0-2` | `standard` | Storage Networking Industry Association：《Solid State Storage Performance Test Specification》，Version 2.0.2，2020-10-01。https://www.snia.org/sites/default/files/2025-02/SNIA-SSS-PTS-2.0.2.pdf（访问于 2026-08-09）。 | 设备级范围；容量、接口/速度、形态、介质、固件和客户端/企业级描述；测试状态与负载披露 |
| `boyd-horvath-dornfeld-nand-lca-2011` | `literature` | Boyd, S. B.; Horvath, A.; Dornfeld, D.：《Life-Cycle Assessment of NAND Flash Memory》，IEEE Transactions on Semiconductor Manufacturing 24(1), 117-124 (2011)，DOI: 10.1109/TSM.2010.2087395。开放接收稿：https://escholarship.org/uc/item/2wr9b3t1（访问于 2026-08-09）。 | NAND 制造过程和清单重要性；电力、水、化学品、工艺排放、基础设施与减排覆盖；防止无据跨技术/容量外推 |
| `samsung-semiconductor-lca-method` | `literature` | Samsung Semiconductor：《Life Cycle Assessment: From raw materials to disposal, efforts to reduce carbon》，含第三方验证 PCF 系统说明。https://semiconductor.samsung.com/sustainability/environment/green-technology/life-cycle-assessment/（访问于 2026-08-09）。 | 当前行业从摇篮到厂门口原料、制造、封装和测试边界；活动数据采集；电力、工艺气体、水和过程级报告 |

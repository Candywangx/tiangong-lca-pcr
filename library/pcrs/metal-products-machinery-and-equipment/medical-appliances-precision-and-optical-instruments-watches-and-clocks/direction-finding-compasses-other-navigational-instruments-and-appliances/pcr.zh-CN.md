---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.direction-finding-compasses-other-navigational-instruments-and-appliances
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 测向罗盘；其他导航仪器和器械

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 48211 所涵盖的成品测向罗盘及其他导航仪器和器械的制造前景数据包。当成品执行测向、航向、操舵或其他导航功能并在制造工厂门口交付时，本 PCR 涵盖机械式、充液磁性式、陀螺式、机电式和电子式仪器。

生产者应声明仪器技术、导航功能、预期平台或应用、适用的性能或试验规范、交付配置、所含附件、相关时的软件或固件状态、制造地域和报告期。只有在披露产品组合及分配依据时，才允许采用混合生产数据集。

测距仪、经纬仪、视距仪、水准仪、测绘或地球物理仪器、雷达和无线电导航设备以及单独销售的零部件或附件不在本 PCR 范围内，除非其为所声明 CPC 48211 成品仪器的组成部分。使用阶段运行、在船舶或其他平台上的安装、维护和寿命终止处理不属于默认前景制造边界；研究目标需要时，可在生命周期模型中作为独立下游阶段连接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.direction-finding-compasses-other-navigational-instruments-and-appliances |
| classification_refs | CPC 3.0: 48211, exact |
| covered_products | 成品测向罗盘及其他导航仪器和器械，包括适用的磁性式、陀螺式、机电式和电子式配置 |
| excluded_products | 测距仪、经纬仪、视距仪、水准仪；测绘、水文测量、海洋学、水文学、气象或地球物理仪器；雷达、无线电导航辅助或无线电遥控设备；单独供应的零部件和附件；服务 |
| representative_product | 工厂内生产的一种已声明成品导航仪器生产组合，识别其技术、功能、性能/试验依据、配置、附件以及软件或固件状态 |
| production_route | 产品特定材料与组件接收和准备；适用时的厂内组件制造；仪器装配；适用时的软件或固件加载；校准和功能试验；精整、标识与包装 |
| market_state | 成品，已制造，工厂门口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付一台执行所声明导航功能的成品测向罗盘或其他导航仪器 |
| How much | 制造工厂门口 1 kg 合格包装产品输出 |
| How well | 满足所识别仪器类型的已声明制造商规范以及任何适用的构造、性能、校准和试验要求 |
| How long or cycle | 一个报告期的生产输出；建模下游生命周期阶段时，应另行声明使用寿命和使用情景 |
| reference_flow_link | 满足所声明仪器功能和配置的合格包装产品输出质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 定向罗盘，其他导航仪器和器械 `186ab31c-d8f5-48e2-86d2-e415b035e0a3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器技术；导航功能；预期平台或应用；适用的性能或试验规范；交付配置和所含附件；相关时的软件或固件状态；包装或未包装质量口径；制造地域；报告期；生产组合 |

构建前景数据包时，`必需限定信息` 中的每项信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息会使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将前景清单归一化到 1 kg 合格包装输出。声明是否排除可重复使用运输包装以及是否包括一次性销售包装。 |
| `production_output_mass` | 合格和不合格仪器输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准秤确定质量，或将生产计数与产品特定实测单件质量核对；不得使用未经核对的标称目录质量。 |
| `component_mass_basis` | 材料、组件、耗材、不合格品、废料和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留产品特定质量记录，并使用已声明的 Units of mass 换算将其他质量单位转换为 kg。 |
| `energy_preservation` | 电力、燃料、压缩空气和热力服务 | 所选流已声明的能量属性 | kWh、MJ 或所选流参考单位 | 在原始记录中保留计量单位和换算因子；仅在将活动分配到相关过程和报告期后归一化。 |
| `test_result_traceability` | 校准和功能试验 | 试验特定属性 | 已声明试验单位 | 保留实测试验值、接受限值、校准状态、试验方法或规范以及通过/返工/报废处置；不得将性能结果转换为质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_manufacturing` | 前景制造数据集 | 包括从材料和组件接收与准备，到装配、配置、校准、功能试验、返工、精整、标识和包装的全部生产者控制活动。记录跨越前景边界的产品、共产品、废物和直接排放。 | eu-pef-2021-2279 |
| `boundary_upstream_links` | 采购材料、组件、能源、耗材、包装和服务 | 将每项材料上游投入连接到具有合适地域、技术和时间匹配性的上游数据集。不得在本前景清单内部递归重建相同 CPC 48211 制造阶段。 | eu-pef-2021-2279 |
| `boundary_exclusions` | 排除或无可用数据的过程和流 | 应避免截断。任何排除均应识别、论证并披露其预期材料、能源和环境显著性；没有可用背景数据集时，应作为数据缺口报告，而不得静默遗漏。 | eu-pef-2021-2279 |
| `boundary_downstream_extension` | 配送、安装、使用、维护和寿命终止 | 这些阶段不属于默认前景制造数据集。生命周期研究将其纳入时，应声明情景假设并连接独立下游数据集；对于电气或电子配置，应保留适当处理建模所需的组件、材料和危险物质信息。 | eu-pef-2021-2279; eu-weee-2012-19 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 产品特定的采购材料、组件、子组件、能源载体、耗材和包装以已声明的身份、数量和上游数据集引用进入前景制造工厂门口 |
| starting_condition_role | 成品仪器生产者控制制造的起始条件 |
| product_classification_scope | 仅限 CPC 3.0 子类 48211；不得隐式包括相邻的测绘、地球物理、雷达/无线电导航和单独供应零部件类别 |
| recursive_input_rule | 如果采购投入本身是 CPC 48211 成品仪器，应将其记录为带有自身上游数据集的已披露采购产品投入，不得在本前景包中重新展开其内部制造清单 |
| upstream_dataset_requirement | 对采购材料、组件、能源、耗材、包装和处理服务使用可追溯上游数据集；记录提供者、地域、技术、时间参考及任何代理局限 |
| disclosure | 声明仪器技术和配置、受控过程覆盖、外包操作、质量口径、报告期、场址覆盖、分配、返工处理、排除项、数据缺口以及纳入或排除的下游阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `materials_components_preparation` | 材料和组件接收与准备 | required | 始终纳入 | 前景接收、来料检验、配料、清洁和准备 | 转入装配的已准备材料和组件 kg |
| `in_house_component_fabrication` | 厂内组件制造 | conditional | 报告场址进行机加工、成形、涂覆、印刷、焊接或其他组件制造时纳入 | 前景组件生产 | 转入仪器装配的合格组件 kg |
| `instrument_assembly` | 仪器制造与装配 | required | 始终纳入 | 适用的前景机械、液体、电气和电子装配 | 装配仪器输出 kg |
| `firmware_configuration` | 软件或固件加载与配置 | conditional | 可编程、数字式或电子配置仪器纳入 | 前景配置 | 已配置仪器输出 kg |
| `calibration_testing` | 校准和功能试验 | required | 始终纳入；试验内容取决于已声明仪器类型和规范 | 前景校准、环境或功能试验及处置 | 合格已试验仪器输出 kg |
| `finishing_packaging` | 精整、标识、文件和包装 | required | 始终纳入 | 前景最终准备与工厂门口输出 | 合格包装参考产品 kg |

### 过程：材料和组件接收与准备（`materials_components_preparation`）

#### 输入

##### 产品流

###### 产品特定材料、组件和子组件（`purchased_materials_components`）

记录进入所声明产品配置的全部采购机械、磁性、含液、光学显示、电气、电子、外壳、紧固件、电缆、密封件和其他项目。物料清单应保持产品特定。

- 选定流：数据生产者选择的产品特定采购材料、组件或子组件流
- 流属性/单位：质量 / kg
- 数量规则：分配到产品配置的实测接收量或经库存核对的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`eu-pef-2021-2279`

###### 来料准备耗材（`incoming_preparation_consumables`）

当清洁剂、防护材料、临时夹具和其他用于准备投入的耗材跨越前景边界时予以记录。

- 选定流：场址选择的准备耗材流
- 流属性/单位：质量或体积 / 所选流参考单位
- 数量规则：产品批次领用、计量或库存核对的使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`

##### 废物流

不规定类别通用的废物投入。返还或再加工材料仅在跨越过程边界且披露其既有负担处理时记录为投入。

##### 基本流

不规定类别通用的基本流投入；跨越环境边界时记录实测资源取用。

#### 输出

##### 产品流

###### 已准备和配套的材料与组件（`prepared_materials_components`）

记录来料检验和准备后转入装配的质量。

- 选定流：内部已准备材料与组件转移
- 流属性/单位：质量 / kg
- 数量规则：由合格接收量、库存变化和准备损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的已准备材料和组件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`

##### 废物流

###### 来料不合格品和准备损失（`incoming_rejects_losses`）

按材料或废物去向记录不合格组件、损坏材料、移除的防护物和准备残余物。

- 选定流：按材料和处理路线选择的场址废物流
- 流属性/单位：质量 / kg
- 数量规则：称量或库存核对的不合格和废弃数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rejects`

##### 基本流

###### 准备过程直接排放（`preparation_direct_emissions`）

仅在清洁或准备产生的实测或许可计算排放跨越环境边界时记录。

- 选定流：数据生产者选择的物质和环境介质特定基本流
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由采集的活动数据和有记录的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：厂内组件制造（`in_house_component_fabrication`）

#### 输入

##### 产品流

###### 制造材料和已准备组件（`fabrication_material_inputs`）

仅记录生产者控制的机加工、成形、涂覆、印刷、连接或电子装配所消耗的材料和组件。

- 选定流：数据生产者选择的产品特定材料或组件流
- 流属性/单位：质量 / kg
- 数量规则：按制造路线计量、领用或库存核对的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格制造组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`

###### 制造能源（`fabrication_energy`）

记录纳入的制造设备和已分配辅助系统所用电力、燃料、压缩空气和热力服务。

- 选定流：数据生产者选择的地域和技术特定能源载体
- 流属性/单位：能量 / kWh、MJ 或所选流参考单位
- 数量规则：报告期计量消耗量或有记录的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格制造组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-pef-2021-2279`

##### 废物流

不规定类别通用的废物投入。

##### 基本流

不规定类别通用的基本流投入；存在时记录直接资源取用。

#### 输出

##### 产品流

###### 合格制造组件（`accepted_fabricated_components`）

记录转入仪器装配的合格组件。

- 选定流：内部制造组件转移
- 流属性/单位：质量 / kg
- 数量规则：实测合格组件质量，或核对后的合格数量乘以实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格制造组件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_production_output`

##### 废物流

###### 制造废料和处理输出（`fabrication_scrap`）

在具有重要性时，区分可回收金属或聚合物废料、电子废料、危险残余物和其他处理路线。

- 选定流：按材料和处理路线选择的场址废物流
- 流属性/单位：质量 / kg
- 数量规则：称量或库存核对的各路线废物转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格制造组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rejects`

##### 基本流

###### 制造过程直接排放（`fabrication_direct_emissions`）

记录生产者控制的制造、涂覆、焊接、清洁或燃烧产生的物质和环境介质特定排放。

- 选定流：数据生产者选择的物质和环境介质特定基本流
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由采集的活动数据和有记录的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格制造组件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：仪器制造与装配（`instrument_assembly`）

#### 输入

##### 产品流

###### 已准备组件和子组件（`assembly_components`）

记录进入所声明装配路线的合格采购和厂内制造组件。

- 选定流：数据生产者选择的产品特定组件或内部转移流
- 流属性/单位：质量 / kg
- 数量规则：领用质量，或核对后的组件数量乘以实测单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`

###### 装配耗材和填充介质（`assembly_consumables`）

记录所选技术实际消耗的胶粘剂、焊料、助焊剂、润滑剂、密封材料、罗盘液体或其他填充介质、工艺气体和清洁剂。

- 选定流：数据生产者选择的产品和技术特定耗材流
- 流属性/单位：质量或体积 / 所选流参考单位
- 数量规则：按生产批次领用、计量或库存核对的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`

###### 装配能源（`assembly_energy`）

记录装配线和已分配辅助设备所用电力、燃料、压缩空气和热力服务。

- 选定流：数据生产者选择的地域和技术特定能源载体
- 流属性/单位：能量 / kWh、MJ 或所选流参考单位
- 数量规则：报告期计量消耗量或有记录的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-pef-2021-2279`

##### 废物流

不规定类别通用的废物投入。

##### 基本流

不规定类别通用的基本流投入；存在时记录直接资源取用。

#### 输出

##### 产品流

###### 等待配置或试验的已装配仪器（`assembled_instrument`）

记录转入配置或校准与试验的已装配仪器。

- 选定流：内部已装配仪器转移
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量，或核对后的合格数量乘以实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_production_output`

##### 废物流

###### 装配不合格品、废料和危险废物（`assembly_waste`）

按材料和处理路线记录不合格零件、泄漏物、残余物、污染擦拭物、电子废料和其他废物。

- 选定流：按材料和处理路线选择的场址废物流
- 流属性/单位：质量 / kg
- 数量规则：称量或库存核对的各路线废物转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rejects`

##### 基本流

###### 装配过程直接排放（`assembly_direct_emissions`）

记录焊接、涂覆、密封、填充、清洁或现场燃烧产生的物质和环境介质特定排放。

- 选定流：数据生产者选择的物质和环境介质特定基本流
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由采集的活动数据和有记录的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：软件或固件加载与配置（`firmware_configuration`）

#### 输入

##### 产品流

###### 可编程已装配仪器（`programmable_instruments`）

仅记录试验前需要加载软件、固件、地图、参数或配置的仪器。

- 选定流：内部已装配仪器转移
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量，或核对后的单元数量乘以实测单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已配置仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`

###### 配置能源（`configuration_energy`）

记录编程站和可直接归属辅助设备所用电力。

- 选定流：数据生产者选择的地域特定电力流
- 流属性/单位：能量 / kWh
- 数量规则：计量消耗量或有记录的设备时间分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已配置仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`

##### 废物流

不规定类别通用的废物投入。

##### 基本流

不规定类别通用的基本流投入。

#### 输出

##### 产品流

###### 已配置仪器（`configured_instrument`）

记录已配置仪器，并保留软件或固件标识和配置状态。

- 选定流：内部已配置仪器转移
- 流属性/单位：质量 / kg
- 数量规则：核对后的已配置单元数量乘以产品特定实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已配置仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_configuration_records`

##### 废物流

###### 配置不合格品和返工（`configuration_rejects`）

记录送往重新配置、返工或处置的单元，不得重复计算其原始材料负担。

- 选定流：内部返工转移或场址选择的废物流
- 流属性/单位：质量 / kg
- 数量规则：处置数量乘以实测单件质量，并区分返工和处置路线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已配置仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_configuration_records`

##### 基本流

不规定类别通用的直接基本流输出。

### 过程：校准和功能试验（`calibration_testing`）

#### 输入

##### 产品流

###### 待试验的已装配或已配置仪器（`instruments_for_test`）

记录进入校准和试验的仪器，并按技术和已声明试验路线区分。

- 选定流：内部已装配或已配置仪器转移
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量，或核对后的单元数量乘以实测单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已试验仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_calibration`

###### 试验能源和耗材（`test_energy_consumables`）

记录所声明路线使用的电力、燃料、试验箱服务、校准介质、试验气体和可更换试验耗材。

- 选定流：场址选择的能源载体或耗材流
- 流属性/单位：能量、质量或体积 / 所选流参考单位
- 数量规则：计量、领用或按设备时间分配的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格已试验仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_calibration`
- 来源：`iso-25862-2019`; `iso-8728-2024`; `iec-60945-2002`

##### 废物流

不规定类别通用的废物投入。

##### 基本流

不规定类别通用的基本流投入；存在时记录试验箱或其他设备直接取用的资源。

#### 输出

##### 产品流

###### 合格已校准和试验仪器（`tested_conforming_instrument`）

仅记录通过已声明制造商要求和适用外部要求的仪器。

- 选定流：内部合格已试验仪器转移
- 流属性/单位：质量 / kg
- 数量规则：通过数量乘以产品特定实测单件质量，并与转移质量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已试验仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_calibration`
- 来源：`iso-25862-2019`; `iso-8728-2024`; `iec-60945-2002`

##### 废物流

###### 试验失败、返工和已消耗试验物品（`test_failures_waste`）

按处置路线区分返工循环、可修复失败仪器、废弃单元和已消耗试验物品。

- 选定流：内部返工转移或场址选择的废物流
- 流属性/单位：质量 / kg
- 数量规则：称量数量，或处置数量乘以实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已试验仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_calibration`

##### 基本流

###### 试验过程直接排放（`test_direct_emissions`）

当环境试验箱、试验气体、燃料或其他试验操作的释放跨越环境边界时予以记录。

- 选定流：数据生产者选择的物质和环境介质特定基本流
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由采集的活动数据和有记录的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已试验仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：精整、标识、文件和包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 待精整的合格已试验仪器（`conforming_instruments_for_finishing`）

记录进入最终清洁、标识、文件和包装的合格仪器。

- 选定流：内部合格已试验仪器转移
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量，或核对后的单元数量乘以实测单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`

###### 销售包装和文件材料（`sales_packaging_materials`）

按照已声明质量口径记录产品特定的一次和二次销售包装、手册、标签、防护衬垫和所含附件。

- 选定流：数据生产者选择的材料特定包装或文件流
- 流属性/单位：质量 / kg
- 数量规则：与包装生产输出核对的 BOM 数量或领用数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_output`
- 来源：`eu-pef-2021-2279`

###### 精整和包装能源（`finishing_packaging_energy`）

记录清洁、标识、印刷和包装设备所用能源。

- 选定流：数据生产者选择的地域特定能源载体
- 流属性/单位：能量 / kWh、MJ 或所选流参考单位
- 数量规则：计量消耗量或有记录的设备时间分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`

##### 废物流

不规定类别通用的废物投入。

##### 基本流

不规定类别通用的基本流投入；存在时记录直接资源取用。

#### 输出

##### 产品流

###### 成品测向罗盘或其他导航仪器（`reference_product`）

这是已声明全部必需限定信息的合格包装工厂门口参考产品。

- 选定流：定向罗盘，其他导航仪器和器械 `186ab31c-d8f5-48e2-86d2-e415b035e0a3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测合格包装输出质量归一化后恰好为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_output`

##### 废物流

###### 精整和包装废物（`finishing_packaging_waste`）

按处理路线记录清洁残余物、标签和印刷废物、边角料、损坏包装及不合格最终单元。

- 选定流：按材料和处理路线选择的场址废物流
- 流属性/单位：质量 / kg
- 数量规则：称量或库存核对的各路线废物转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rejects`

##### 基本流

###### 精整过程直接排放（`finishing_direct_emissions`）

当清洁、标识、印刷或包装操作产生的释放跨越环境边界时予以记录。

- 选定流：数据生产者选择的物质和环境介质特定基本流
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由采集的活动数据和有记录的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享生产、公用工程、建筑、试验设备和废物系统 | 首先通过分表计量、独立批次记录、设备时间记录或可独立计量过程的细分来避免分配。 | eu-pef-2021-2279 |
| `allocation_physical` | 无法细分的共享过程 | 当机时、试验箱时间、能耗计量、占用面积-时间或质量吞吐量能够代表资源使用时，采用因果物理驱动因子。记录驱动因子、期间、分母和共享该过程的产品。 | eu-pef-2021-2279 |
| `allocation_economic_fallback` | 不存在可辩护物理关系的共享过程 | 仅可将经济分配作为有记录的后备方案。记录价格、币种、价格期间、产品数量以及对分配选择的敏感性。 | eu-pef-2021-2279 |
| `allocation_rework` | 返工和重复试验循环 | 将原始材料负担保留在仪器批次上，仅增加各返工或重复试验循环的增量能源、耗材、排放和废物。不得将同一仪器质量作为新的采购投入重复计算。 |  |
| `allocation_scrap` | 离开前景系统的废料和废物 | 记录废料和废物毛量及处理路线。除非下游研究采用并记录独立且一致的再循环方法，否则不得在前景制造清单内扣减避免负担或再生成分抵扣。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | materials_components_preparation | 采购和内部制造的材料、组件与子组件 | BOM、采购接收、领用记录、库存台账 | part_id; material_or_component_name; supplier; quantity; unit; measured_unit_mass; batch; product_configuration; opening_stock; closing_stock; returns | 将产品特定 BOM 与接收、领用、退回和库存变化核对 | kg 和原始记录单位 | 每批；每月核对 | 与输出相同的代表性报告期 | 每个纳入制造场址和受控外包操作 | 按项目和配置汇总净消耗；转换为 kg；优先使用直接记录分配产品 | 批准的 BOM 修订；秤校准；库存核对；供应商追溯；差异说明 |
| `cp_consumables` | instrument_assembly | 准备、制造、装配、清洁、填充和精整耗材 | 领用日志、计量表、采购与库存记录 | consumable_id; function; batch; issued_quantity; returned_quantity; opening_stock; closing_stock; unit; density_if_volume_to_mass; process_id | 将计量或库存核对消耗量连接到过程和批次 | 所选流参考单位 | 每批或每月 | 与输出相同的代表性报告期 | 每个纳入制造场址 | 净消耗等于领用加期初库存减退回和期末库存；仅分配有记录的共享余量 | 计量校准；库存核对；SDS 或产品身份；分配记录 |
| `cp_process_energy` | instrument_assembly | 电力、燃料、压缩空气和热力服务 | 计量表、发票、设备日志 | energy_carrier; meter_id; start_reading; end_reading; unit; process_id; equipment_time; reporting_period; allocation_driver | 优先分表计量；否则核对场址能源并使用因果驱动因子分配 | kWh、MJ 或所选流参考单位 | 连续或每月 | 至少一个代表性生产年度，或有理由的较短完整生产活动 | 每个纳入制造场址 | 净计量消耗减排除负荷；以有记录因果驱动因子分配到过程和产品；归一化到参考输出 | 计量校准；发票核对；排除负荷清单；分配工作表 |
| `cp_production_output` | finishing_packaging | 内部转移、合格输出、不合格输出和生产组合 | 生产与转移日志；秤记录 | product_id; configuration; quantity; gross_mass; packaging_mass; net_mass; pass_status; batch; process_id; timestamp | 校准称量，或核对数量乘以产品特定实测单件质量 | kg | 每批 | 与投入相同的代表性报告期 | 每个纳入制造场址 | 使用已声明包装口径汇总合格输出；分别保留不合格和返工处置 | 秤校准；数量-质量核对；批次放行记录；包装口径 |
| `cp_waste_rejects` | instrument_assembly | 不合格品、废料、残余物、包装废物和处理转移 | 废物磅单、不合格日志、运输接收单 | waste_id; material; hazardous_status; source_process; mass; unit; disposition; treatment_provider; batch; date | 按废物流称量并与不合格和出运记录核对 | kg | 每次出运和每批；每月核对 | 与输出相同的代表性报告期 | 每个纳入制造场址 | 按来源过程、材料、危险状态和处理路线汇总；内部返工转移在最终废弃前不计入最终废物 | 秤单；适用时持证处理接收单；危险分类；质量平衡核对 |
| `cp_direct_emissions` | instrument_assembly | 向空气、水和土壤的直接排放 | 连续监测、烟囱或废水试验、许可计算 | substance; compartment; concentration; flow_rate; operating_time; activity_amount; factor; factor_source; control_efficiency; process_id | 优先直接测量；否则由采集活动量和有记录因子计算 | 物质 kg 和原始测量单位 | 按监测方法要求；每月汇总 | 与输出相同的代表性报告期 | 每个纳入排放源 | 将浓度和流量或活动量乘因子转换为质量；仅扣除实测控制去除量；分配到过程 | 仪器校准；实验室报告；许可方法；因子引用；不确定性记录 |
| `cp_configuration_records` | firmware_configuration | 软件或固件加载、配置和处置 | 配置站日志 | product_id; hardware_revision; software_or_firmware_id; configuration_id; start_time; end_time; pass_status; rework_count; energy_assignment | 导出受控配置记录并与生产批次核对 | 单元数量、kg，以及分配时的 kWh | 每个已配置单元或批次 | 与输出相同的代表性报告期 | 每个纳入配置站 | 按最终状态统计唯一单元；重复操作记录为返工；将分配能源归一化到已配置输出 | 配置校验和或修订；工位日志；批次核对；处置记录 |
| `cp_test_calibration` | calibration_testing | 校准、功能或环境试验、通过/返工/报废处置、能源和耗材 | 试验系统导出、校准证书、试验箱日志 | product_id; technology; test_method; specification_revision; measured_value; unit; acceptance_limit; equipment_id; calibration_status; start_time; end_time; pass_status; rework_count; energy; consumables | 导出试验结果并与放行和不合格生产单元核对 | 试验特定单位、单元数量、kg、kWh 和耗材参考单位 | 每个被试单元或具有统计依据的批次 | 与输出相同的代表性报告期 | 每个纳入试验路线和受控外包试验 | 保留原始试验值；每个单元仅计入一次最终处置；增加重复试验活动但不重复仪器质量 | 设备校准；方法修订；接受记录；可追溯处置；适用时 ISO/IEC 或制造商规范 |
| `cp_packaging_output` | finishing_packaging | 销售包装、文件、所含附件和最终包装输出 | 包装 BOM、领用记录、最终秤记录 | package_id; material; item_count; unit_mass; included_accessory; document_mass; product_id; gross_packaged_mass; reusable_transport_packaging_mass | 将产品特定包装 BOM 与领用和最终称量核对 | kg | 每种包装配置和批次 | 与输出相同的代表性报告期 | 每个纳入精整和包装场址 | 汇总一次性包装和已声明所含项目；仅在单独跟踪并披露时排除可重复使用运输包装 | 包装 BOM 修订；秤校准；领用核对；质量口径批准 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景清单量 | 归一化量 = 报告期数量 / 合格包装输出质量 | 采集或计算的报告期数量；来自 `cp_production_output` 和 `cp_packaging_output` 的合格包装输出质量 | 每 1 kg 参考产品的数量 | eu-pef-2021-2279 |
| `calc_count_to_mass` | 以数量报告的组件、仪器、不合格品或包装记录 | 质量 = 项目数量 × 产品特定实测平均单件质量；保留抽样计划和变异性 | 项目数量；经校准实测单件质量；配置身份 | 按配置和处置的 kg |  |
| `calc_stock_reconciliation` | 无直接计量的材料和耗材 | 消耗量 = 期初库存 + 接收量 - 期末库存 - 有记录退回量 - 范围外有记录转移量 | 库存台账；接收；退回；转移；报告期 | 前景净消耗量 | eu-pef-2021-2279 |
| `calc_direct_emission` | 基于因子的直接排放 | 排放质量 = 采集活动量 × 有记录排放因子 ×（1 - 实测控制效率）；保留原始单位和换算 | 活动记录；因子；控制效率；单位换算 | 按环境介质的物质 kg | eu-pef-2021-2279 |
| `calc_mass_balance` | 各过程和报告期前景包 | 比较质量投入与产品、废物、实测直接排放、库存变化和有记录蒸发输出；调查并披露残差而不得强制闭合 | 材料和产品投入；输出；废物；直接排放；库存变化 | 质量平衡残差和核对说明 |  |
| `calc_shared_resource_allocation` | 共享能源、公用工程、建筑和试验设备 | 分配量 = 共享数量 × 产品已声明因果驱动因子 / 共享资源所有产品相同驱动因子总和 | 共享总量；产品驱动因子；总驱动因子；期间；产品清单 | 已分配前景活动 | eu-pef-2021-2279 |
| `calc_rework_increment` | 返工和重复试验 | 仅将增量返工能源、耗材、排放和废物加到原批次；仪器质量保持为一条连续内部转移 | 返工日志；重复试验日志；增量资源记录；最终处置 | 不重复产品质量的返工调整过程清单 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和产品组合 | 匹配 Tiangong UUID 和 CPC 48211 范围；声明全部必需限定信息并排除相邻产品类别。 | 数据集元数据；产品规范；分类审查；参考流备注 |
| `dq_completeness` | 前景过程清单 | 覆盖纳入过程的所有已知材料、能源、水、产品、共产品、废物和直接排放流；明确列出排除项和数据缺口。 | 过程图；核对台账；计量表清单；废物登记；排放登记；排除日志 |
| `dq_temporal` | 投入、输出和分配驱动因子 | 使用同一代表性报告期，通常至少连续 12 个月，或有理由的完整生产活动；披露异常停机或启动条件。 | 带时间戳记录；生产日历；期间理由 |
| `dq_technology` | 仪器路线和试验路线 | 数据应代表已声明磁性式、陀螺式、机电式或电子式技术及交付配置；混合路线需要披露份额。 | BOM 修订；路线表；设备清单；配置和试验记录 |
| `dq_geography` | 制造和上游连接 | 识别每个纳入场址和受控外包操作；上游数据集应披露地域和代理局限。 | 场址清单；供应商记录；数据集元数据；代理登记 |
| `dq_precision` | 测量和计算量 | 保留仪器校准、抽样、数量转质量变异、因子不确定性和核对残差，使每个重要数量可审查。 | 校准证书；抽样计划；原始测量；不确定性和核对记录 |
| `dq_allocation` | 共享资源和多输出过程 | 记录所采用层级、驱动因子、分母、产品总体、期间，以及分配具有重要性时的敏感性。 | 分表记录；分配工作表；价格或物理驱动证据；敏感性结果 |
| `dq_traceability` | 产品特定 BOM、配置、试验、废物和输出 | 保持从采购投入，经配置和试验处置，到最终输出和废物处理的批次或报告期链条。 | BOM 和批次记录；配置校验和；试验导出；废物单据；放行记录 |
| `dq_review` | 数据集发布 | 独立审查者应能由保留证据复算归一化、质量平衡、分配、参考流身份和全部已声明局限。 | 审查清单；计算工作簿；来源登记；版本化前景包 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 确认产品流 UUID `186ab31c-d8f5-48e2-86d2-e415b035e0a3`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg；身份不同或缺失的数据包应被拒绝。 |  |
| `validation_scope_qualifiers` | 产品身份 | 确认 CPC 48211 范围和每项必需限定信息，包括技术、导航功能、应用、性能/试验依据、配置、软件或固件状态、质量口径、地域、期间和产品组合。 | unsd-cpc-3-0; iso-25862-2019; iso-8728-2024; iec-60945-2002 |
| `validation_process_coverage` | 过程图和清单 | 确认全部必需过程存在、每个适用条件过程已纳入、受控外包操作已披露，且所有详细过程 ID 与过程图匹配。 | eu-pef-2021-2279 |
| `validation_bom_output_reconciliation` | 材料、组件、包装和输出 | 确认产品特定 BOM 和包装记录与合格输出、不合格品、废物、库存变化及已披露质量平衡残差核对。 | eu-pef-2021-2279 |
| `validation_energy_emissions` | 能源和直接排放 | 确认能源记录覆盖纳入设备和辅助负荷，每项直接排放均已测量或由采集活动量及有记录因子计算；未解决的来源或单位使相关检查失败。 | eu-pef-2021-2279 |
| `validation_test_traceability` | 校准和试验 | 确认适用规范或制造商试验依据、设备校准状态、实测结果、接受限值及最终处置可追溯到已声明仪器路线。 | iso-25862-2019; iso-8728-2024; iec-60945-2002 |
| `validation_allocation` | 共享和多功能过程 | 确认首先考虑了细分，任何剩余分配均具有可复算因果物理驱动因子，或具有敏感性记录的后备方案。 | eu-pef-2021-2279 |
| `validation_no_silent_cutoff` | 排除项和数据缺口 | 确认排除、不可用背景数据和截断均已明确并论证；任何静默遗漏都会使校验不确定。 | eu-pef-2021-2279 |
| `validation_electronic_eol_disclosure` | 建模下游寿命终止的电气或电子配置 | 确认保留处理建模所需的组件、材料和危险物质信息，并且下游情景与前景制造相互独立。 | eu-weee-2012-19 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 48211 成品仪器的产品特定或已披露生产组合前景制造数据集 |
| downstream_use | `secondary_dataset`; 审查和发布后可作为 `background_dataset` |
| allowed_use | 需要可追溯制造阶段数据集，且产品技术、配置、地域、期间和质量口径与已声明范围匹配的产品碳足迹或 LCA 研究 |
| excluded_use | 未作功能调整而直接比较具有实质差异的导航技术或性能等级；没有相连下游数据集支持的使用阶段、安装、维护或寿命终止声明；相邻 CPC 类别 |
| required_metadata | PCR id 和版本；产品流 UUID；CPC 代码；仪器技术和导航功能；平台或应用；性能/试验依据；配置和所含附件；软件或固件状态；包装口径；场址和地域；报告期；产品组合；过程覆盖；分配；上游数据集引用 |
| required_quality_disclosure | 初级数据份额；时间、地域和技术代表性；BOM 和输出核对；质量平衡残差；计量和分配方法；试验和校准追溯；排除项；数据缺口；代理数据集；不确定性；审查状态 |
| update_trigger | 产品技术、BOM、配置、影响制造的软件或固件、性能/试验路线、场址、供应商组合、能源组合、分配、包装口径、废物处理、适用标准或报告期发生对清单或限定信息有实质影响的变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, CPC resources and structure, https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-10） | CPC 48211 产品类别身份及相邻类别排除 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, Official Journal L 471, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索日期 2026-08-10） | 功能单位结构、供应链边界、前景产品/废物、产品特定 BOM 和制造数据、分配层级、截断披露及数据质量要求 |
| `iso-25862-2019` | `standard` | ISO 25862:2019, Ships and marine technology - Marine magnetic compasses, binnacles and azimuth reading devices, official abstract and status, https://www.iso.org/standard/68015.html（检索日期 2026-08-10） | 磁罗盘产品身份、技术限定、构造/性能范围及校准/试验追溯 |
| `iso-8728-2024` | `standard` | ISO 8728:2024, Ships and marine technology - Marine gyro-compasses, official abstract and status, https://www.iso.org/standard/82079.html（检索日期 2026-08-10） | 陀螺罗盘产品身份、构造/性能范围和型式试验追溯 |
| `iec-60945-2002` | `standard` | IEC 60945:2002, Maritime navigation and radiocommunication equipment and systems - General requirements - Methods of testing and required test results, official publication page, https://webstore.iec.ch/en/publication/3959（检索日期 2026-08-10） | 船载电子导航设备性能/试验限定及试验记录要求 |
| `eu-weee-2012-19` | `official_guidance` | Directive 2012/19/EU on waste electrical and electronic equipment, consolidated text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012L0019-20240408（检索日期 2026-08-10） | 下游处理建模所需电气/电子组件、材料和危险物质的条件性披露 |

---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.ultra-violet-or-infra-red-ray-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于医疗、外科、牙科或兽医领域的紫外线或红外线装置

## 1. 范围与适用性

本 PCR 适用于通过紫外线或红外线光辐射实现其声明医疗、外科、牙科或兽医用途的完整装置。范围包括以完整可销售产品状态供应的非激光紫外线或红外线治疗、诊断、监测或操作辅助装置，并包括实现声明功能所需的已安装光源、控制装置、外壳、光学部件、电源连接和随附附件。

产品定义取决于预期用途和辐射功能，而不只取决于产品中是否有灯或加热器。通用照明、空间加热、日光浴、工业固化、材料试验、没有指定医疗/外科/牙科/兽医用途的通用杀菌灯具、激光设备、电离辐射设备、诊断功能并非由紫外线或红外线实现的电诊断设备，以及单独销售的耗材或替换灯均不在本边界内。采用紫外线、红外线或二者的产品变型以有条件的原子流行表示，不按每个生命周期阶段进行笛卡尔式展开。

基础前景数据包涵盖从部件接收到装置装配、最终测试、包装并交付工厂门。配送、使用与维护以及报废为条件模块；研究一旦声称涵盖这些阶段或声称从摇篮到坟墓结果，就必须纳入相应模块。适用的法规或合规义务取决于法域和预期用途；本 PCR 不构成医疗器械安全或法规合规认证。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.ultra-violet-or-infra-red-ray-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences |
| classification_refs | CPC 3.0：48122，精确分类语境；在单独接受映射之前，该分类仍为未映射状态 |
| covered_products | 专门用于医疗、外科、牙科或兽医治疗、诊断、监测或操作辅助的完整紫外线或红外线装置；IEC 60601-2-57 范围内的非激光光源设备为代表性技术子集 |
| excluded_products | 通用灯和灯具；日光浴和家用加热设备；工业固化和试验设备；没有指定用途的通用杀菌灯具；激光设备；X 射线、α、β 或 γ 射线设备；本辐射功能边界以外的电诊断设备；单独销售的替换光源和耗材 |
| representative_product | 配有光源模块、控制电子部件、外壳、光学部件、电源线、说明书和销售包装的可重复使用电动紫外线光疗或红外线治疗装置 |
| production_route | 接收规定部件和材料；机械及电气装配；必要时配置软件或控制；进行光学/辐射度学和电气最终测试；适用时清洁；包装与放行 |
| market_state | 完整、经工厂测试、必要时经校准、贴标并包装的装置，可供专业人员或声明的普通用户使用；仅在明确声明时具有无菌状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由一个确定装置配置发出的紫外线或红外线提供声明的医疗、外科、牙科或兽医功能 |
| How much | 一台完整装置按声明利用率情景运行 |
| How well | 达到声明的波长范围、辐射输出或辐照度、治疗或诊断性能、暴露控制配置及适用安全分类 |
| How long or cycle | 声明的参考使用寿命，以年及运行小时或治疗循环表示，并包含声明的维护与光源更换制度 |
| reference_flow_link | 一台可销售装置，其生命周期交换按该装置及声明参考使用寿命归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) |
| 参考产品流 | 可销售紫外线或红外线医疗装置（Tiangong UUID 未解决） |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 紫外线、红外线或组合光源；医疗/外科/牙科/兽医预期用途；波长范围；光源技术；额定辐射输出或辐照度；暴露控制模式；市电或电池供电；装置型号及配置；已安装光源数量；净质量和包装质量；生产地域及年份；声明使用寿命；利用率情景；清洁/消毒状态；无菌状态（如有）；随附附件；包装配置；纳入报废阶段时的报废地域 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 只计数符合声明配置并已放行的完整装置。另行报告每台装置的净质量和包装质量（kg）；不得以灯数量代替装置数量。 |
| `component_mass_basis` | 部件及包装产品投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录来料检验后跨越前景边界的质量；除非供应商运输包装在产品系统内消耗，否则不计可返还运输包装。 |
| `energy_conversion` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量的 kWh 原始记录，并按精确恒等式 1 kWh = 3.6 MJ 换算。不得把电力与热或燃料合并。 |
| `transport_mass_distance` | 货运服务投入 | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | 各运输方式分别按运输质量乘路线距离计算；披露车辆或船舶类别、装载率约定以及是否计入空返。 |
| `optical_performance_disclosure` | 参考装置及使用情景 | 声明的波长和辐射性能指标 | 制造商声明单位 | 保留制造商的波长范围以及适用的辐射输出、辐照度、辐射暴露量或治疗控制指标。不得将不同的光学性能指标换算成一个通用能量值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 装置装配场址已验收的部件和材料，且已声明供应商身份、产品状态、质量、来源及上游数据集链接 |
| starting_condition_role | 装置制造的前景入口；上游部件和材料生产由所链接的次级或背景数据集表示 |
| product_classification_scope | 第 1、2 节所述紫外线/红外线医疗装置语义边界；CPC 48122 是分类语境，不是规范身份的唯一依据 |
| recursive_input_rule | 采购后用于集成的同类别装置或分总成只作为一项带上游数据集的进入产品流记录；不得在接收过程中再次递归拆解 |
| upstream_dataset_requirement | 每项采购部件、材料、包装、电力供应、水供应和运输服务均须链接地理和技术上具有代表性的上游数据集，或明确记录未解决的数据缺口 |
| disclosure | 声明装配和包装场址、纳入的生命周期模块、截断、共用设施处理、产品配置、软件/控制内容、灭菌或清洁步骤、供应商数据覆盖、电力地域、配送路线、使用情景、维护及报废情景 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_base_gate` | manufacturing foreground | 纳入已验收部件和材料、装配、配置、最终电气和光学/辐射度学测试、过程公用工程、实际发生的清洁、包装、实际产生的废品以及放行至工厂门。 | `eu-pef-2021-2279`; `eu-mdr-2017-745` |
| `boundary_lifecycle_modules` | lifecycle claims | 从摇篮到坟墓或下游声明必须增加配送、具有重要性时的安装、使用电力、规定的清洁或消毒、维护与光源更换以及报废收集和处理。工厂门数据集必须说明这些模块被排除。 | `eu-pef-2021-2279`; `eu-mdr-2017-745` |
| `boundary_configuration` | product variants | 对一个声明的装置配置建模。仅在实际存在时纳入紫外线和红外线光源行；不得在未披露权重的情况下平均不兼容的光源技术、预期用途、使用寿命或无菌/可重复使用状态。 | `iec-60601-2-57-2023`; `eu-mdr-2017-745` |
| `boundary_upstream_links` | purchased inputs | 以具体产品流和代表性上游数据集表示采购投入。不得用笼统材料或公用工程流替代缺失的部件身份。 | `eu-pef-2021-2279` |
| `boundary_end_of_life` | discarded equipment | 纳入报废时，应将废弃装置、废紫外线灯和废红外线灯作为不同废物流，并采用法域特定的收集、污染、拆解、回收、再循环或处置情景。 | `eu-weee-2012-19`; `eu-mdr-2017-745` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `apparatus_assembly` | 装置装配、配置和最终测试 | `required` | 制造完整装置时始终纳入 | 前景制造 | 每台已验收装配装置 |
| `packaging_release` | 包装与市场放行 | `required` | 可销售装置始终纳入 | 前景包装 | 每台已放行包装装置 |
| `distribution` | 配送至首位用户 | `conditional` | 声明配送或任何下游生命周期阶段时纳入 | 下游运输 | 每台参考装置按运输方式计的 kg*km |
| `use_maintenance` | 使用、清洁、维护和光源更换 | `conditional` | 声明使用阶段或从摇篮到坟墓绩效时纳入 | 使用阶段前景情景 | 每个参考使用寿命及利用率情景 |
| `end_of_life` | 收集及报废转运 | `conditional` | 声明报废阶段或从摇篮到坟墓绩效时纳入 | 报废情景 | 每台废弃参考装置 |

### 过程：装置装配、配置和最终测试（`apparatus_assembly`）

#### 输入

##### 产品流

###### 紫外线光源模块（`uv_emitter_module`）

声明装置安装紫外线发射模块时记录一个该类模块；仅红外线配置方可不适用本行。

- 选定流：紫外线光源模块（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：已验收装置中所安装紫外线发射模块的实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`iec-60601-2-57-2023`

###### 红外线光源模块（`infrared_emitter_module`）

声明装置安装红外线发射模块时记录一个该类模块；仅紫外线配置方可不适用本行。

- 选定流：红外线光源模块（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：已验收装置中所安装红外线发射模块的实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`iec-60601-2-57-2023`

###### 印制线路板（`printed_wire_board`）

仅当未装配元器件的印制线路板跨越装配边界时记录本行；采购的已装配控制组件需要日后确认其自身精确流身份。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：安装于已验收装置中的印制线路板实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 铝合金外壳（`aluminium_alloy_housing`）

成品铝合金外壳作为一个采购装置部件跨越边界时记录。

- 选定流：铝合金装置外壳（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：安装于已验收装置中的外壳实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 不锈钢外壳（`stainless_steel_housing`）

成品不锈钢外壳作为一个采购装置部件跨越边界时记录。

- 选定流：不锈钢装置外壳（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：安装于已验收装置中的外壳实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 光学玻璃毛坯（`optical_glass_pressing_blank`）

仅当光学玻璃毛坯在装配场址加工时记录本投入；采购的成品光学件需要其自身产品身份。

- 选定流：光学玻璃毛坯 `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：已验收装置所消耗光学玻璃毛坯的实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 电源线（`power_cable`）

随附市电电源线或内部电源线组件存在时，将其作为一个产品投入记录。

- 选定流：医疗装置电源线（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：安装于或随已验收装置供应的电源线实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：

###### 装配及最终测试电力（`assembly_electricity`）

记录机械和电气装配、控制配置、老化以及最终电气和光学/辐射度学测试所用计量电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：可归属于已验收装置的计量或设施分表电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_utilities`
- 来源：

###### 装配工艺用水（`assembly_process_water`）

部件或装置清洁用工艺水跨越装配过程边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：可归属于已验收装置的计量或批次记录工艺水质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台已验收装配装置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收装配装置（`assembled_apparatus`）

记录通过声明的电气、光学/辐射度学、软件/控制和放行测试且尚未进行销售包装的完整装置。

- 选定流：已装配紫外线或红外线医疗装置（Tiangong UUID 未解决）
- 流属性/单位：Number of items / item
- 数量规则：已验收装配装置数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个装置装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_units`
- 来源：`un-cpc-3-0-structure-2025`; `iec-60601-2-57-2023`

##### 废物流

##### 基本流

### 过程：包装与市场放行（`packaging_release`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录参考装置消耗的瓦楞纸板销售箱和运输箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：已放行包装装置所消耗纸箱的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已放行包装装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：

###### 聚乙烯包装薄膜（`polyethylene_packaging_film`）

记录用作袋、包裹或保护膜的非泡沫聚乙烯薄膜；将薄膜牌号和厚度保留为前景限定信息。

- 选定流：聚乙烯 `1ff32f1d-77ac-4a6f-b91c-67b08b13e55a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：已放行包装装置所消耗聚乙烯薄膜的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台已放行包装装置
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：

###### 包装电力（`packaging_electricity`）

包装设备和最终放行作业用电单独计量或按物理驱动因素分配时记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：可归属于已放行装置的计量包装电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台已放行包装装置
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售包装装置（`packaged_apparatus`）

记录包含所有随附附件、说明书和销售包装的已放行参考产品。

- 选定流：可销售紫外线或红外线医疗装置（Tiangong UUID 未解决）
- 流属性/单位：Number of items / item
- 数量规则：已放行包装装置数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_units`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

### 过程：配送至首位用户（`distribution`）

#### 输入

##### 产品流

###### 公路货运（`road_freight`）

按实际运输质量和路线距离记录包装装置的各段公路运输。

- 选定流：公路货运服务 `482c5e1a-bd9d-53d0-afeb-f2d3b56e8179`
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km；单位组 质量*距离（Unit of kg*km）`3620148f-c5db-48ce-9065-a10092089aca`
- 数量规则：每段公路路线的运输质量乘路线距离
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台交付参考装置
- 基准类型：运输服务（`transport_service`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distribution_routes`
- 来源：`eu-pef-2021-2279`

###### 集装箱船海运（`sea_freight_container_ship`）

仅当声明配送路线实际采用集装箱船海运时记录。

- 选定流：海运货物运输，集装箱船 `eb46993a-20d8-400e-81eb-66732ff4900b`
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km；单位组 质量*距离（Unit of kg*km）`3620148f-c5db-48ce-9065-a10092089aca`
- 数量规则：每段集装箱船海运的运输质量乘海运路线距离
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台交付参考装置
- 基准类型：运输服务（`transport_service`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_distribution_routes`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：使用、清洁、维护和光源更换（`use_maintenance`）

#### 输入

##### 产品流

###### 使用阶段电力（`use_electricity`）

按声明利用率情景记录装置用电，包括待机以及规定的预热或冷却模式。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：参考使用寿命内按运行模式计量的电力总和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每台参考装置的使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_use_logs`
- 来源：`eu-mdr-2017-745`; `eu-pef-2021-2279`

###### 清洁工艺用水（`cleaning_process_water`）

仅当经验证的说明书规定在声明使用情景中进行水基清洁或消毒时记录工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每次清洁实测用水量乘参考使用寿命内记录的清洁次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每台参考装置的使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_use_logs`
- 来源：`eu-mdr-2017-745`

###### 替换紫外线发射器（`replacement_uv_emitter`）

维修记录显示参考使用寿命内更换了紫外线发射器时，记录一个替换发射器产品流。

- 选定流：替换紫外线发射器模块（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：参考使用寿命内安装的替换紫外线发射器模块实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台参考装置的使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance_logs`
- 来源：`eu-mdr-2017-745`; `iec-60601-2-57-2023`

###### 替换红外线发射器（`replacement_ir_emitter`）

维修记录显示参考使用寿命内更换了红外线发射器时，记录一个替换发射器产品流。

- 选定流：替换红外线发射器模块（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：参考使用寿命内安装的替换红外线发射器模块实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台参考装置的使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance_logs`
- 来源：`eu-mdr-2017-745`; `iec-60601-2-57-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废紫外线灯（`spent_uv_lamp`）

将废紫外线灯与装置和红外线灯分开记录；适用时在废物说明中保留汞或其他有害物质状态。

- 选定流：废紫外线灯（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：参考使用寿命内拆除的紫外线灯实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台参考装置的使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance_logs`
- 来源：`eu-weee-2012-19`; `eu-mdr-2017-745`

###### 废红外线灯（`spent_ir_lamp`）

将废红外线灯与装置和紫外线灯分开记录。

- 选定流：废红外线灯（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：参考使用寿命内拆除的红外线灯实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台参考装置的使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance_logs`
- 来源：`eu-weee-2012-19`; `eu-mdr-2017-745`

##### 基本流

### 过程：收集及报废转运（`end_of_life`）

#### 输入

##### 产品流

##### 废物流

###### 废弃紫外线或红外线医疗装置（`discarded_apparatus`）

记录进入声明收集或处理路线的完整废弃装置。不得使用未指定废物流，并披露污染是否改变法律允许的处理路线。

- 选定流：废弃紫外线或红外线医疗装置（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进入声明报废路线的废弃装置实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每台废弃参考装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_records`
- 来源：`eu-weee-2012-19`; `eu-mdr-2017-745`

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multi-product and shared processes | 只要有单独计量或生产记录，应优先细分装配、测试、包装和公用工程记录至声明的装置系列，以避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | residual shared burdens | 无法细分时，采用有记录的因果物理驱动因素分配共用电力、用水、清洁和包装作业，例如机器时间、测试时间、计量能耗、处理质量或验收产品数量。只有在没有可行因果物理关系时，方可在说明理由后采用经济分配。 | `eu-pef-2021-2279` |
| `allocation_rejects` | rejected apparatus and components | 按实测过程参与情况将负担归属至拒收点；除非所选物理驱动因素存在因果要求，否则不得将拒收后的返工或处理分配给合格输出。 | `eu-pef-2021-2279` |
| `allocation_recycling` | end-of-life recovery | 声明再生材料含量及报废归属约定，对进入材料和回收材料一致应用，并防止装置系统与下游材料系统之间重复计入收益。 | `eu-pef-2021-2279`; `eu-weee-2012-19` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_assembly_bom` | `apparatus_assembly` | installed component input | 批准 BOM、收货与生产领料记录 | 型号；修订版；部件身份；供应商；批次；验收质量；领用质量；退料质量；合格装置数量 | 将批准 BOM 与仓库领料及合格生产记录核对 | kg 和 item | 每批或每生产期 | 连续 12 个月代表期，或生产不足 12 个月时的全部生产 | 范围内每个装配场址 | 净验收部件质量除以合格装配装置数量；不同配置分开 | 批准 BOM 修订版、供应商规格、校准秤记录及核对签字 |
| `cp_assembly_utilities` | `apparatus_assembly`; `packaging_release` | electricity and process water | 公用工程表计、分表及生产日志 | 表计起止；kWh；水质量或体积；换算密度假设；运行小时；装置数量；分配驱动因素 | 优先读取专用表；否则按因果物理驱动因素分配经核对的设施总表 | kWh、MJ、kg 和 h | 每月及每个代表生产期 | 连续 12 个月代表期，或生产不足 12 个月时的全部生产 | 每个装配和包装场址 | 扣除有记录的非生产负荷，按声明驱动因素分配后除以合格输出 | 表计校准、账单核对、停机日志和分配工作表 |
| `cp_output_units` | `apparatus_assembly`; `packaging_release` | accepted output | 放行与测试记录 | 序列号或批号；型号；配置；合格数量；拒收数量；净质量；包装质量；测试状态 | 只计通过声明放行测试的产品，并测量代表性净质量和毛质量 | item 和 kg | 每批 | 整个报告期 | 每个放行场址 | 按配置汇总合格产品；不得用废品抵减合格输出 | 签字放行记录、测试结果和秤校准 |
| `cp_packaging_bom` | `packaging_release` | packaging input | 包装规格及领用记录 | 包装部件身份；材料；牌号；单位质量；领用数量；退回或废弃数量；放行装置数量 | 将包装 BOM 与领用量及放行产品核对 | kg 和 item | 每种包装配置及修订版 | 报告期 | 每个包装场址 | 净包装质量除以放行装置数量；可重复使用运输包装分开 | 批准包装规格、供应商声明及领用核对 |
| `cp_distribution_routes` | `distribution` | freight service | 货运及路线记录 | 起点；终点；方式；车辆或船舶类别；运输毛质量；距离；装载率约定；空返；交付数量 | 将承运文件与地理空间或承运方距离记录匹配 | kg、km 和 kg*km | 每票货或代表性路线分层 | 报告期 | 所有纳入配送路线 | 各方式和各段分别计算后除以交付参考装置数 | 提单、承运发票、路线记录及质量核对 |
| `cp_use_logs` | `use_maintenance` | use electricity and cleaning water | 表计、治疗日志及经验证说明 | 型号；运行模式；功率；时长；治疗次数；待机时间；清洁次数；每次用水；使用寿命基准 | 计量代表性装置，或结合记录利用率采用经验证的模式特定功率数据 | kWh、MJ、h、cycle 和 kg water | 每个试验期并年度更新利用率 | 声明的参考使用寿命情景 | 声明的用户地域和场所 | 按声明利用率情景汇总模式能耗和事件用水；不同用户设置分开 | 校准表计、协议、使用说明及情景批准 |
| `cp_maintenance_logs` | `use_maintenance` | replacement emitter and spent lamp | 维修与零件记录 | 序列号；日期；发射器类型；零件号；安装质量；拆除质量；故障模式；运行小时；处理路线 | 核对维修工单、零件领用及拆除部件记录 | item、kg 和 h | 每次维护事件 | 声明的参考使用寿命 | 纳入的在用产品群或代表性维修样本 | 按光源技术汇总每台参考装置的安装与拆除质量 | 维修工单、零件规格、秤记录和废物转移联单 |
| `cp_end_of_life_records` | `end_of_life` | discarded apparatus | 收集和处理记录 | 型号；净质量；污染状态；收集路线；处理设施；下游数据集；地域 | 将资产报废与收集及处理文件匹配 | item 和 kg | 每次处置事件或代表性情景更新 | 声明的报废情景年份 | 声明的报废地域 | 收集、再使用、处理、回收、再循环和处置路线分开；归一化至一台废弃装置 | 资产报废记录、废物转移联单、设施证据及情景批准 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_per_item` | 装配及包装材料行 | （领用质量 - 未使用退回质量）/合格输出数量 | 部件或包装领用质量；退回质量；合格装置数量 | kg/台装置 |  |
| `calc_electricity_mj` | 装配、包装和使用电力 | 计量 kWh × 3.6 MJ/kWh | 各过程和模式的计量 kWh | 每台装置或使用寿命的 MJ |  |
| `calc_transport_service` | 公路及海运 | 运输毛质量（kg）×路线距离（km）/交付装置数量 | 运输质量；分段距离；交付数量 | 每台交付装置的 kg*km | `eu-pef-2021-2279` |
| `calc_lifetime_use` | 使用电力和清洁用水 | 声明参考使用寿命内各模式或事件数量×事件次数之和 | 各运行模式功率和小时；待机功率和小时；清洁用水和次数 | 每个参考使用寿命的 MJ 电力及 kg 工艺用水 | `eu-mdr-2017-745`; `eu-pef-2021-2279` |
| `calc_replacement_balance` | 替换发射器和废灯行 | 按紫外线和红外线技术分别汇总安装替换件质量及拆除废灯质量 | 维修记录；安装零件质量；拆除零件质量 | 每个参考使用寿命的 kg 替换产品及 kg 废灯 | `eu-mdr-2017-745` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考装置 | 保留型号、配置修订版、预期用途、辐射类型、波长范围、光源技术、已安装光源数量和市场状态；没有权重时不得合并不兼容变型。 | 产品规格、技术文档、放行记录及 `un-cpc-3-0-structure-2025`; `iec-60601-2-57-2023`; `eu-mdr-2017-745` |
| `dq_completeness` | 制造前景 | 核对 BOM、合格输出、部件领用、包装、电力、用水、废品及其他场址特定产品流、废物流或基本流。解释每项排除。 | BOM 核对、公用工程核对、放行报告及 `eu-pef-2021-2279` |
| `dq_temporal` | 前景记录 | 使用连续 12 个月代表期；产品生产不足 12 个月时采用全部生产，并披露异常生产期、停产和替代。 | 报告期说明及生产日历 |
| `dq_measurement` | 计量和计算行 | 保留表计与秤校准、原始单位、换算、分配驱动因素和计算工作簿，使每个归一化值可复现。 | 校准证书、原始记录和计算复核 |
| `dq_use_scenario` | 使用与维护 | 将运行模式、利用率、清洁、维护、更换、使用寿命和电力地域统一到一个内部一致的预期用途情景。 | 使用说明、实测试验协议、维修计划及情景批准 |
| `dq_end_of_life` | 废物情景 | 声明法域、收集路线、污染状态、灯中有害物质状态、下游处理数据集和分配约定。 | 废物记录及 `eu-weee-2012-19`; `eu-mdr-2017-745` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | 缺少预期用途、紫外线/红外线配置、波长范围、光源技术、型号、使用寿命基准或市场状态时校验失败。 | `un-cpc-3-0-structure-2025`; `iec-60601-2-57-2023`; `eu-mdr-2017-745` |
| `validate_reference_count` | normalization | 参考数量必须恰为一台已放行装置，并分别提供净质量和包装质量元数据；灯数量不得代替装置数量。 |  |
| `validate_atomic_rows` | inventory | 拒绝合并公用工程、合并紫外线/红外线发射器、未指定包装、未指定废物或不能解析为一个具体交换的任何行。 |  |
| `validate_variant_conditions` | inventory applicability | 仅紫外线配置中要求紫外线行，仅红外线配置中要求红外线行；对可证明不存在的条件流，要求明确记录零值或不适用。 | `iec-60601-2-57-2023` |
| `validate_energy` | electricity | 要求 kWh 原始记录、精确的 3.6 MJ/kWh 换算、电力地域以及制造、包装和使用阶段的分开数值。 |  |
| `validate_transport` | distribution | 每个纳入运输段均须提供质量、距离、方式、车辆或船舶类别和路线；不得合并公路与海运服务。 | `eu-pef-2021-2279` |
| `validate_lifecycle_claim` | system boundary | 从摇篮到坟墓声明必须完整纳入配送、使用/维护、更换和报废模块；只有对声明配置逐项证明不适用时方可排除。 | `eu-pef-2021-2279`; `eu-mdr-2017-745`; `eu-weee-2012-19` |
| `validate_uuid_gaps` | unresolved flow identity | 每个未解决 UUID 均须保持明确，且不得以已拒绝的宽泛、不匹配或未指定候选替代。 |  |
| `validate_no_external_ranges` | quantitative evidence | 在至少两个相互独立、经原文核验且边界兼容的来源或经评审前景数据集证明范围之前，所有数量均作为前景采集或计算要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明紫外线或红外线医疗、外科、牙科或兽医装置配置的产品特定前景数据包 |
| downstream_use | 经评审产品研究的 `secondary_dataset`；只有在记录代表性、评审和汇总方法后方可作为 `background_dataset` |
| allowed_use | 在相同工厂门边界上进行配置特定制造比较；所有声明条件模块采用一致利用率和地域时进行生命周期建模；在披露未解决身份的情况下进行热点和改进评估 |
| excluded_use | 安全或法规认证；没有功能等效性时比较不同预期用途或光学性能；把工厂门数据包作为从摇篮到坟墓数据；采用已拒绝 UUID 候选；没有权重时对紫外线和红外线技术作通用声明 |
| required_metadata | PCR id 和版本；产品型号及修订版；预期用途；辐射类型；波长及辐射性能指标；光源技术；生产场址及期间；净质量及包装质量；随附附件；包装；纳入的生命周期模块；电力地域；配送路线；利用率；清洁；维护；更换；使用寿命；报废地域；上游数据集版本；分配和截断决定 |
| required_quality_disclosure | 前景覆盖；BOM 与输出核对；表计和秤校准；供应商数据覆盖；时间、地域及技术代表性；分配驱动因素；假设；未解决 UUID；未解决范围证据；情景敏感性；评审人和评审日期 |
| update_trigger | 预期用途、辐射类型、光源技术、光学性能、产品配置或 BOM、装配或包装场址、影响能耗的固件/控制行为、清洁或灭菌说明、使用寿命、更换制度、配送路线、电力结构、报废路线或前景数据发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，代码 48122，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-06） | 正式分类标题、层级及指定产品身份语境 |
| `iec-60601-2-57-2023` | `standard` | IEC 60601-2-57:2023，医用电气设备——第 2-57 部分：用于治疗、诊断、监测、美容和审美用途的非激光光源设备基本安全和基本性能专用要求，https://webstore.iec.ch/en/publication/73147（检索于 2026-09-06） | 非激光光辐射范围、预期用途区分、波长和性能限定以及紫外线/红外线配置规则 |
| `iec-62471-6-2022` | `standard` | IEC 62471-6:2022，灯和灯系统的光生物安全——第 6 部分：紫外线灯产品，https://webstore.iec.ch/en/publication/59543（检索于 2026-09-06） | 紫外线灯产品身份、光源技术范围、风险组和用户信息语境；未据此推导清单范围 |
| `eu-mdr-2017-745` | `official_guidance` | 欧盟医疗器械法规 Regulation (EU) 2017/745，附件 I、II，https://op.europa.eu/o/opportal-service/download-handler?identifier=83bdc18f-315d-11e7-9412-01aa75ed71a1&format=xhtml&language=en&productionSystem=cellar&part=（检索于 2026-09-07） | 预期用途和配置记录；安装、校准、维护、清洁/消毒、耗材更换、辐射及安全处置披露 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，附件 I 产品环境足迹方法，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-09-06） | 功能单位结构、生命周期阶段、前景数据、运输计算、分配层级、完整性、数据质量、报告及校验 |
| `eu-weee-2012-19` | `official_guidance` | 欧盟废弃电气电子设备指令 2012/19/EU，合并文本 2024-04-08，https://eur-lex.europa.eu/eli/dir/2012/19/2024-04-08/eng（检索于 2026-09-06） | 电气设备的条件报废边界、分类收集、污染例外、处理及回收/再循环记录 |

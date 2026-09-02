---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-surveying-hydrographic-oceanographic-hydrological-meteorological-or-geophysical-i-1f12518d
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他测量、水文测量、海洋学、水文学、气象学或地球物理仪器和设备

## 1. 范围与适用性

本 PCR 适用于经审查语义范围与 CPC 3.0 子类 48219 一致的成品测量、水文测量、海洋学、水文学、气象学或地球物理仪器和设备制造。其涵盖未在其他类别中作更具体分类、用于测量、观测、记录或支持获取空间、水体、海洋、天气或地球物理状态的机械、电气和电子仪器。

前景生产边界涵盖开展时的内部零部件加工、最终仪器装配、校准或功能测试，以及直至工厂门口的包装。采购的材料、零部件、分总成、能源载体、运输服务和废物处理服务以产品流或废物流跨越前景边界，并需要上游数据集。

本 PCR 不包括测向罗盘和其他导航仪器、测距仪、经纬仪、速测仪和水准仪、雷达和无线电导航设备、用于测量液体或气体变量的通用仪器、实验室分析仪器，以及属于其他类别的测量、天气预报或地球物理咨询服务。使用、维护和寿命终止不属于前景制造过程，但当其对声明用途具有实质性影响时，下游生命周期模型应予补充。电气和电子仪器应披露适用的收集与处理情景。

本类别技术差异较大。本 PCR 不规定类别通用的物料清单、成品率、用电量、用水量、废品率、使用寿命或寿命终止比例。上述数值均应针对声明产品和生产路线采集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-surveying-hydrographic-oceanographic-hydrological-meteorological-or-geophysical-i-1f12518d |
| classification_refs | CPC 3.0: 48219 — Other surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instruments and appliances |
| covered_products | 属于 CPC 48219 且未在其他类别中作更具体分类的测量、水文测量、海洋学、水文学、气象学或地球物理观测或测量成品仪器和设备 |
| excluded_products | 测向罗盘和其他导航仪器；测距仪、经纬仪、速测仪和水准仪；雷达或无线电导航设备；通用液体或气体变量测量仪器；实验室分析仪器；测量、天气预报和地球物理服务 |
| representative_product | 已通过制造商声明的适用功能测试或校准要求、可在工厂门口销售的已识别成品仪器或设备 |
| production_route | 产品特定物料清单和采购零部件；条件性内部零部件加工；仪器装配；校准或功能测试；包装 |
| market_state | Finished product, manufactured；production mix at plant；仪器净质量与包装分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明产品范围内的成品测量、水文测量、海洋学、水文学、气象学或地球物理仪器或设备 |
| How much | 1 kg 成品仪器净质量，不含运输和销售包装 |
| How well | 符合声明的型号、测量功能、性能规格和适用的出厂测试或校准验收准则 |
| How long or cycle | 直至工厂门口的一个完整制造周期；使用寿命另行声明，用于下游使用阶段建模 |
| reference_flow_link | `packaging_and_factory_gate` 的合格工厂门口产品净质量输出，归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他测量、水文、海洋、水文、气象或地球物理仪器和设备 `d2d1aeaf-da4d-4eab-835e-642ae764cdee` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器族和预期测量功能；制造商和型号或产品代码；机械、电气或电子配置；适用时的测量范围与准确度或性能等级；每件净质量；生产地域和参考期；物料清单版本；如有电池则声明类型和质量；相关时声明电源和额定功率；校准或功能测试状态；包装不计入参考质量 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景数量归一化为 1 kg 合格成品仪器净质量。销售和运输包装不计入参考质量，应作为单独投入记录。 |
| `item_to_mass_conversion` | 以件数记录的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用产品型号特定、经测量或受控的每件净质量将件数换算为质量，并保留件数、抽样质量、样本量和换算记录。 |
| `energy_preservation` | 电力和燃料 | 为精确流选择的 Energy property | kWh 或 MJ | 保留计量单位和换算因子。仅使用有记录的因子换算，不得将电力和燃料能量视为可互换的流。 |
| `packaging_separation` | 包装投入 | Mass | kg | 按材料和每参考流质量报告包装；包装质量不计入 1 kg 参考产品。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 为声明产品和物料清单版本接收的已识别采购材料、零件和分总成，以及进入零部件加工的内部起始库存 |
| starting_condition_role | 由采购、仓库和物料清单记录支持的前景制造进入条件 |
| product_classification_scope | 经审查语义范围属于 CPC 3.0 子类 48219 的成品仪器和设备；分类仅提供语境，不构成规范 PCR 身份 |
| recursive_input_rule | 如果投入本身属于同一语义类别的成品或中间产品，将其作为具有上游数据集的独立产品投入记录一次；不得在前景过程中递归复制本 PCR |
| upstream_dataset_requirement | 每项采购材料、零部件、能源载体、运输服务和处理服务均应关联地域、技术和时间上具有代表性的上游数据集，或披露为未解决数据缺口 |
| disclosure | 声明纳入的场址和过程、内部与采购零部件边界、物料清单版本、产品净质量、包装边界、校准或测试状态、分配决策、排除过程，以及是否向下游提供使用和寿命终止情景 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 前景制造 | 纳入生产者控制下将接收投入转化为合格工厂门口仪器的全部过程：条件性内部零部件加工、装配、校准或功能测试、包装、现场公用工程及存在时的现场处理。 | `eu-pef-2021-annex-i` |
| `sb_upstream_completeness` | 采购投入和服务 | 使用产品特定物料清单和采购记录识别全部采购材料、零件、分总成、电池、能源载体、包装、入厂运输和处理服务，并为每项纳入投入关联上游数据集。 | `eu-pef-2021-annex-i` |
| `sb_downstream_separation` | 使用和寿命终止 | 使用、维护和寿命终止不计入前景生产数据集，但应披露下游建模所需的产品属性。对于电气或电子仪器，下游情景应反映适用的单独收集、再使用准备、回收、资源化和处理要求，不得直接假设进入市政垃圾。 | `eu-pef-2021-annex-i`; `eu-weee-2012-19-consolidated` |
| `sb_cutoff_disclosure` | 排除项 | 不得仅因缺少通用数据集而省略材料、能源、废物或直接排放流。应从前景记录量化、选择有记录的代理，或披露未解决缺口及其预计重要性。 | `eu-pef-2021-annex-i` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `inhouse_component_processing` | 内部零部件加工和精整 | conditional | 报告场址制造、机加工、清洗、涂覆或以其他方式加工金属、聚合物、陶瓷、玻璃、光学、传感器或电子零部件时纳入 | 前景零部件生产 | 转移至装配的合格零部件 kg |
| `instrument_assembly` | 仪器装配与集成 | required | 始终纳入 | 前景产品装配 | 转移至测试的已装配仪器 kg |
| `calibration_and_testing` | 校准与功能测试 | required | 始终执行并记录制造商适用的验收测试；产品规格要求时纳入计量校准 | 前景质量保证 | 转移至包装的合格仪器 kg |
| `packaging_and_factory_gate` | 包装与工厂门口放行 | required | 始终纳入 | 前景最终化 | 1 kg 合格成品仪器净质量 |

### 过程：内部零部件加工和精整（`inhouse_component_processing`）

#### 输入

##### 产品流

###### 内部加工的材料和采购毛坯（`component_materials`）

当金属、聚合物、陶瓷、玻璃、光学、传感器或电子材料或毛坯在现场被转化时，按材料和牌号分别记录。

- 选定流：为声明物料清单选择材料和牌号特定 Product flow
- 流属性/单位：Mass / kg
- 数量规则：按材料和牌号计量的领用质量减去有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_materials`
- 来源：`eu-pef-2021-annex-i`

###### 零部件加工的电力和其他能源载体（`component_energy`）

分别记录机加工、成形、模塑、清洗、涂覆及相关内部操作的电力、各类燃料或外供热能流。

- 选定流：构建数据集时选择地域和技术特定的能源 Product flow
- 流属性/单位：电力使用 Energy / kWh；燃料使用 MJ 或原始计量单位
- 数量规则：纳入设备和期间的分表用量，或依据有记录驱动因素分配的场址总表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-pef-2021-annex-i`

###### 零部件加工的水和过程耗材（`component_consumables`）

现场使用时，分别记录水、清洗剂、润滑剂、冷却液、涂层材料、工艺气体和其他耗材。

- 选定流：构建数据集时选择物质和牌号特定 Product flow
- 流属性/单位：Mass / kg，或使用有记录密度将计量体积换算；水可保留其支持的体积单位
- 数量规则：计量消耗量，或领用量减去有记录退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_consumables`
- 来源：`eu-pef-2021-annex-i`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格内部加工零部件（`accepted_components`）

记录转移至仪器装配的合格零部件；有助于质量平衡时按零部件族分解。

- 选定流：产品特定中间 Product flow
- 流属性/单位：Mass / kg
- 数量规则：计量的合格零部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_yield`
- 来源：

##### 废物流

###### 零部件加工废料、废品和废过程材料（`component_waste`）

按材料、危险属性和去向分别记录每种废物流，包括金属或塑料废料、废槽液、废油、受污染擦拭物和送往处理的废水。

- 选定流：为声明废物和处理路线选择的废物特定流
- 流属性/单位：Mass / kg；废水可使用其支持的体积单位
- 数量规则：计量的废物转运量、容器质量差或处理记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

##### 基本流

###### 内部零部件加工的直接释放（`component_direct_releases`）

对每项通过测量、计算或许可证报告的直接空气、水体或土壤释放建立污染物特定行。不得将处理服务输出列于此处。

- 选定流：构建数据集时选择污染物和环境区室特定 Elementary flow
- 流属性/单位：流特定属性和支持单位
- 数量规则：纳入操作的实测或许可证方法计算直接释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-pef-2021-annex-i`

### 过程：仪器装配与集成（`instrument_assembly`）

#### 输入

##### 产品流

###### 采购和内部零部件及分总成（`assembly_components`）

记录每条物料清单项目，或按材料和零部件族作可审核汇总，包括存在时的外壳、结构件、紧固件、传感器、光学件、印制电路组件、显示器、电缆、连接器、电池和电源。

- 选定流：为每条物料清单项目或有记录汇总选择零部件特定 Product flow
- 流属性/单位：Mass / kg
- 数量规则：产品特定物料清单数量与生产领退料记录相核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_materials`
- 来源：`eu-pef-2021-annex-i`

###### 装配电力和耗材（`assembly_energy_consumables`）

分别记录装配电力，以及产品特定的胶黏剂、焊料、电线、紧固件、清洗剂、气体和其他耗材。

- 选定流：构建数据集时选择精确能源或耗材 Product flow
- 流属性/单位：Energy / kWh 或 MJ；材料 / kg
- 数量规则：分表能源及耗材计量量或领用量减去退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-pef-2021-annex-i`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至测试的已装配仪器（`assembled_instrument`）

记录转移至校准和功能测试的已装配仪器净质量。

- 选定流：产品特定中间 Product flow
- 流属性/单位：Mass / kg
- 数量规则：计量的已装配仪器转移净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_yield`
- 来源：

##### 废物流

###### 装配废料和不合格零件（`assembly_waste`）

按材料和去向分别记录不合格零件、焊渣、剪切电线、边角料、空材料容器和其他装配废物。

- 选定流：为声明废物和处理路线选择的废物特定流
- 流属性/单位：Mass / kg
- 数量规则：计量的废物和废品质量，扣除有记录的返工回流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

##### 基本流

###### 装配直接释放（`assembly_direct_releases`）

对于焊接、固化、清洗或其他现场装配操作中跨越环境边界的直接释放，建立污染物特定行。

- 选定流：构建数据集时选择污染物和环境区室特定 Elementary flow
- 流属性/单位：流特定属性和支持单位
- 数量规则：纳入操作的实测量或有记录方法计算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`eu-pef-2021-annex-i`

### 过程：校准与功能测试（`calibration_and_testing`）

#### 输入

##### 产品流

###### 进入测试的已装配仪器（`test_input_instrument`）

记录进入校准或功能测试的已装配仪器质量和件数。

- 选定流：产品特定中间 Product flow
- 流属性/单位：Mass / kg 及补充件数
- 数量规则：计量的转移质量和生产件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至包装的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_and_testing`
- 来源：

###### 测试能源、校准服务和耗材（`test_resources`）

记录可归属于声明产品的电力、标准物质、测试气体或液体、可更换测试夹具以及外购校准服务。

- 选定流：与每项已记录测试资源匹配的精确 Product flow 或服务流
- 流属性/单位：能源 / kWh；材料 / kg 或支持单位；服务 / 支持的定量参考
- 数量规则：可归属于已测试合格品和不合格品的计量量、领用量或发票支持数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至包装的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_and_testing`
- 来源：`eu-pef-2021-annex-i`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行至包装的合格仪器（`conforming_instrument`）

记录符合声明功能测试或校准验收准则的仪器。

- 选定流：产品特定中间 Product flow
- 流属性/单位：Mass / kg 及补充件数
- 数量规则：合格单元的计量净质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至包装的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_and_testing`
- 来源：

##### 废物流

###### 测试不合格品和消耗的测试材料（`test_rejects`）

按最终去向记录不可修复的不合格单元、更换零部件以及消耗的校准或测试材料；返回返工的单元属于内部转移，不得计作废物。

- 选定流：为声明不合格材料和处理路线选择的废物特定流
- 流属性/单位：Mass / kg 或支持单位
- 数量规则：扣除返工回流后的计量不合格品质量和消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至包装的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_and_testing`
- 来源：

##### 基本流

### 过程：包装与工厂门口放行（`packaging_and_factory_gate`）

#### 输入

##### 产品流

###### 进入放行的合格仪器（`packaging_input_instrument`）

记录进入包装和工厂门口放行的合格仪器净质量。

- 选定流：产品特定中间 Product flow
- 流属性/单位：Mass / kg
- 数量规则：从测试环节转移的计量净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口放行的成品仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_yield`
- 来源：

###### 销售和运输包装材料（`packaging_materials`）

按材料和部件分别记录包装，包括纸箱、缓冲材料、薄膜、托盘、说明书和随产品提供的保护箱。

- 选定流：构建数据集时选择材料特定包装 Product flow
- 流属性/单位：Mass / kg
- 数量规则：每件放行产品领用的计量或规格控制包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口放行的成品仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021-annex-i`

###### 包装电力和耗材（`packaging_energy_consumables`）

记录可归属的包装线电力、标签、油墨、胶黏剂和其他耗材。

- 选定流：构建数据集时选择精确能源或耗材 Product flow
- 流属性/单位：Energy / kWh；材料 / kg
- 数量规则：可归属于放行产品的计量或生产记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口放行的成品仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口成品仪器（`reference_product`）

本行是定量参考输出。产品应满足声明型号和验收准则，且其净质量不含包装。

- 选定流：其他测量、水文、海洋、水文、气象或地球物理仪器和设备 `d2d1aeaf-da4d-4eab-835e-642ae764cdee`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 合格成品仪器净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 包装损耗和不合格包装（`packaging_waste`）

按材料和去向分别记录边角料、破损包装、离型材料和不合格标签。

- 选定流：为声明包装废物和处理路线选择的废物特定流
- 流属性/单位：Mass / kg
- 数量规则：计量的包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口放行的成品仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享制造、公用工程和处理 | 通过分表、工时记录或其他过程细分方式避免分配，使产品特定活动数据可直接归属于声明仪器。 | `eu-pef-2021-annex-i` |
| `allocation_physical` | 剩余共享负荷 | 无法细分或扩展系统时，使用反映负荷因果关系且有记录的物理关系分配，例如机器时间、能源需求、加工质量或处理负荷。当产品质量不能反映因果关系时，不得默认按质量分配。 | `eu-pef-2021-annex-i` |
| `allocation_economic_last_resort` | 缺少合理物理关系的剩余多功能性 | 仅在最后手段下使用经济分配，采用有记录的代表性价格期间；披露受影响过程、共产品、价格来源和敏感性。 | `eu-pef-2021-annex-i` |
| `rework_and_scrap` | 返工、不合格品和可回收废料 | 将内部返工作为内部循环。仅当废物离开前景系统时报告。仅在下游建模框架中应用回收或避免负荷抵扣并披露方法；不得默认从前景投入中扣除废料质量或收入。 | `eu-pef-2021-annex-i` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_materials` | `inhouse_component_processing`; `instrument_assembly` | 材料、零件、分总成和合格零部件 | 受控物料清单、采购和仓库领退料记录 | 型号；BOM 版本；项目和材料身份；牌号；供应商；数量；单位；实测质量；领用质量；退料质量；合格质量 | 将受控 BOM 与采购和生产领退料记录核对；换算件数时测量代表性单件质量 | kg 和原始采购单位 | 每次 BOM 变更和每个生产批次；年度汇总 | 声明的生产参考期 | 全部纳入制造场址和声明产品变型 | 按精确材料或零部件汇总净领用量；按成品净质量归一化 | 批准的 BOM 版本；供应商规格；经校准秤记录；核对报告 |
| `cp_energy_and_utilities` | 全部纳入过程 | 电力、燃料和外供公用工程 | 分表、设备日志、发票和场址总表 | 仪表 ID；能源载体；期初和期末读数；换算因子；设备或产线；运行时间；分配驱动因素；生产输出 | 优先分表计量；否则核对场址总量并使用有记录的因果驱动因素分配 | kWh、MJ 和原始计量单位 | 连续或每批；每月核对 | 声明的生产参考期 | 全部纳入设备和场址 | 按能源载体和过程汇总；扣除有记录的非生产使用；先按过程输出再按参考输出归一化 | 仪表校准；发票核对；分配工作表 |
| `cp_process_consumables` | `inhouse_component_processing`; `instrument_assembly` | 水、化学品、气体、润滑剂、胶黏剂和其他耗材 | 领退料日志、储罐或气瓶读数、采购和库存记录 | 物质身份；牌号；浓度；期初库存；采购；期末库存；退料；计量体积或质量；密度来源 | 分物质计量消耗，或计算库存平衡 | kg、L、m3 或支持的原始单位 | 每批或每月，并年度核对 | 声明的生产参考期 | 全部使用耗材的纳入操作 | 期初库存加采购减期末库存减退料；按合格过程输出归一化 | 库存核对；批记录；仪表校准；密度证据 |
| `cp_output_and_yield` | 全部纳入过程 | 中间转移、合格输出、返工和成品率 | 生产、转移、称量和验收记录 | 型号；批次；投入质量；输出质量；件数；每件净质量；返工转移；验收状态 | 称量输出，或使用受控型号特定的件数质量换算 | kg 和补充件数 | 每批 | 声明的生产参考期 | 全部纳入产线和场址 | 汇总合格净输出；内部返工单列；全部负荷归一化至 1 kg 最终合格输出 | 经校准秤；批次流转单；验收放行记录 |
| `cp_waste_and_emissions` | `inhouse_component_processing`; `instrument_assembly` | 废物、废水和直接释放 | 废物转移联单、处理记录、排放监测和许可证计算 | 废物或污染物身份；危险属性；环境区室；质量或体积；浓度；去向；处理路线；测量方法；计算因子 | 称量废物；相关时将废水体积与浓度配对；直接释放使用经验证监测或许可证方法 | kg、m3 或流支持单位 | 每次转运或监测间隔；年度核对 | 声明的生产参考期 | 全部纳入操作和现场处理 | 按废物身份、去向、污染物和环境区室分别汇总；按过程和最终输出归一化 | 地磅读数；实验室报告；许可证报告；计算表；处理证明 |
| `cp_calibration_and_testing` | `calibration_and_testing` | 测试投入、测试资源、验收输出、返工和废品 | 测试和校准日志、设备仪表、材料领用记录和服务发票 | 型号；序列号或批次；测试方法；验收准则；结果；校准状态；投入和输出质量；测试能源；耗材；服务量；返工或废品去向 | 将测试记录关联生产批次，并采集可归属的资源和结果 | kg、item、kWh 和资源支持单位 | 按规格对每批或每件 | 声明的生产参考期 | 全部纳入测试和校准工位 | 汇总合格、返工和不合格单元所用资源；以合格净输出质量为分母，同时保留废品总量 | 批准的测试方法；仪器校准证书；测试日志；不合格记录 |
| `cp_packaging` | `packaging_and_factory_gate` | 包装材料、包装能源和包装废物 | 包装规格、领用记录、产线仪表和废物记录 | 包装部件；材料；单件质量；领用数量；退回数量；废物质量；产品型号；批次；能源 | 测量部件质量，或使用经抽样验证的受控规格；核对领用和废物 | kg、item 和 kWh | 每次包装规格变更和每个生产批次 | 声明的生产参考期 | 全部纳入包装线 | 按材料汇总包装；归一化至 1 kg 放行产品净质量；包装不计入参考质量 | 批准的包装规格；秤校准；领用/废物核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景清单行 | 归一化数量 = 期间或批次数量除以同一期间或批次放行的合格成品仪器净质量 | 采集流数量；合格净输出质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-annex-i` |
| `calc_bom_mass` | 按件数记录的零部件 | 零部件质量 = 合格件数乘以受控的型号特定平均单件净质量；保留抽样证据，不得跨实质不同变型重复使用换算因子 | 合格件数；抽样单件质量；型号和 BOM 版本 | 每参考流的零部件 kg | `eu-pef-2021-annex-i` |
| `calc_stock_balance` | 无直接计量的耗材 | 消耗量 = 期初库存加收货减期末库存减有记录的退料和转出 | 库存和交易记录 | 每过程和期间的消耗量 | `eu-pef-2021-annex-i` |
| `calc_wastewater_release` | 实测废水污染物 | 污染物释放量 = 排放体积乘以代表性实测浓度，并记录单位换算和采样覆盖 | 排放体积；浓度；单位换算；采样期间 | 污染物特定基本流数量 | `eu-pef-2021-annex-i` |
| `calc_shared_resource` | 共享仪表或服务 | 仅对直接归属后的剩余共享量分配，使用 `allocation_physical` 下选择且有记录的因果物理驱动因素 | 共享总量；直接归属量；各产品物理驱动因素 | 分配至产品的特定数量 | `eu-pef-2021-annex-i` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 数据集应识别制造商、型号或产品代码、仪器功能、适用时的性能或准确度等级、配置、净质量、BOM 版本、生产地域和参考期。 | 产品规格；受控 BOM；放行记录；参考流元数据 |
| `dq_temporal` | 全部前景记录 | 使用连续且有代表性的生产期间，通常为 12 个月。仅当较短生产活动覆盖完整声明路线并披露变异性时，才可使用较短期间。 | 记录覆盖表；生产日历；缺口理由 |
| `dq_completeness` | 物料清单和清单 | 核对材料投入、合格产品、内部转移、返工、废物和库存变动。记录全部能源载体、过程耗材、包装和已知直接释放，并披露未解决缺口。 | 质量平衡和库存核对；仪表和废物汇总 |
| `dq_representativeness` | 前景和上游数据 | 技术、地域和时间期间应匹配声明产品路线。记录代理数据以及其为何是最接近的可用代表。 | 场址和技术说明；数据集选择日志；代理理由 |
| `dq_measurement` | 测量和计算数据 | 保留仪表或秤身份、校准或核查状态、采样频率、计算公式、单位换算和从原始记录到归一化数值的数据沿袭。 | 校准证书；采样计划；计算工作簿；审核轨迹 |
| `dq_test_traceability` | 校准和功能测试 | 将验收、返工和拒收记录关联至适用型号、生产批次或序列控制群体以及声明测试方法。 | 测试日志；适用时的校准证书；不合格和放行记录 |
| `dq_downstream_attributes` | 下游生命周期建模 | 相关时声明额定功率和工作周期、预期使用寿命依据、电池身份、维护或耗材要求、产品尺寸、寿命终止建模所需材料组成，以及寿命终止情景司法辖区。 | 产品技术文件；使用说明；BOM；服务计划；法规适用性评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考产品 | 核验所选参考产品流 UUID、Mass 流属性 UUID、Units of mass 单位组 UUID 和 kg 单位与第 3 节一致，且输出量恰好为 1 kg 仪器净质量。 |  |
| `val_required_qualifiers` | 数据集元数据 | 缺少仪器功能、型号或产品代码、配置、净质量、生产地域或期间、BOM 版本、测试或校准状态、或包装排除声明时，校验失败。 | `unsd-cpc-3-0-48219` |
| `val_process_coverage` | 过程图和清单 | 必须纳入装配、校准或功能测试，以及包装。当报告场址开展制造、机加工、模塑、涂覆、清洗或电子零部件加工时，必须纳入内部零部件加工。 | `eu-pef-2021-annex-i` |
| `val_bom_reconciliation` | 材料和零部件 | 要求采集的零部件和材料清单与声明版本的受控 BOM 及生产领退料记录核对；披露并说明每项汇总或缺口。 | `eu-pef-2021-annex-i` |
| `val_mass_and_waste_balance` | 各前景过程 | 检查记录的投入、合格转移、库存变动、返工和废物在声明测量不确定度内算术一致；不得对蒸发或直接释放强制虚假的零差额。 | `eu-pef-2021-annex-i` |
| `val_allocation` | 共享过程 | 要求提供分配层级和支持驱动因素记录。使用经济分配而未说明为何过程细分和物理分配不可行时，校验失败。 | `eu-pef-2021-annex-i` |
| `val_packaging_separation` | 参考和包装 | 核验包装已列入清单但不计入 1 kg 参考产品净质量。 | `eu-pef-2021-annex-i` |
| `val_electronic_end_of_life` | 电气或电子仪器 | 要求下游生命周期模型元数据识别适用的收集和处理司法辖区，并避免无记录的市政垃圾假设。 | `eu-weee-2012-19-consolidated` |
| `val_data_quality` | 前景数据包 | 要求提供时间覆盖、场址和技术代表性、测量控制、计算、数据缺口及上游数据集选择证据。 | `eu-pef-2021-annex-i` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门口成品仪器的产品特定前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当参考流、限定信息、范围、地域、技术和期间匹配时，用于声明型号或经证明具有代表性的生产组合的 LCA process 和 lifecyclemodel 构建 |
| excluded_use | 缺少功能等价使用阶段模型时直接比较仪器功能、性能等级或使用寿命；替代导航、雷达、通用液体/气体测量、实验室分析设备或专业服务；仅以质量证明功能等价 |
| required_metadata | canonical PCR id；参考流 UUID；制造商和型号或产品代码；仪器功能；适用时的性能或准确度规格；配置；每件净质量；BOM 版本；生产场址、地域和期间；纳入和排除过程；包装规格；校准或测试方法和状态；分配方法；上游数据集引用；数据缺口和代理日志 |
| required_quality_disclosure | 前景时间覆盖；实测与计算占比；仪表和秤控制；BOM 和质量平衡核对；场址和技术代表性；分配驱动因素；代理和未解决数据缺口；可用时的不确定度或变异性；使用和寿命终止属性是否完整 |
| update_trigger | 产品型号或功能、BOM 或分材料质量、制造路线或场址、传感器/电子/电池配置、能源供应、校准或测试方法、包装、分配驱动因素、影响寿命终止的法规、上游数据集，或任何实质影响清单的投入发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-48219` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, structure record 48219, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-10） | 产品类别范围和分类身份 |
| `eu-pef-2021-annex-i` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, Annex I — Product Environmental Footprint Method, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf（检索于 2026-08-10） | 功能单位结构、供应链边界、物料清单、公司特定制造数据、分配层级、数据质量、校验和生命周期阶段披露 |
| `eu-weee-2012-19-consolidated` | `official_guidance` | Directive 2012/19/EU on waste electrical and electronic equipment, consolidated text current to 8 April 2024, CELEX 02012L0019-20240408, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012L0019-20240408（检索于 2026-08-10） | 电气和电子监测与控制仪器的条件范围，以及下游收集、再使用、回收、资源化和处理要求 |

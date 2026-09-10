---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-fffa1be2
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配有电气开关等装置、用于电气控制或配电且电压超过 1,000 V 的配电盘、控制台、机柜及其他底座

## 1. 范围与适用性

本 PCR 适用于额定电压超过 1,000 V、用于电气控制或配电的成品工厂组装式配电盘、控制台、机柜及其他已装备底座。产品包括空气绝缘、气体绝缘、真空开断及混合式金属封闭成套设备，其中开关、保护、控制、测量或辅助装置作为交付组件的一部分安装。声明产品必须以实际配置和额定参数识别，不能只使用“开关设备”这一笼统名称。

工厂门核心边界包括进入制造场址的材料和外购部件、场内完成时的柜体与母排制造、设备集成、绝缘或开断介质管理、出厂试验、检验和初级包装。全生命周期研究仅可在明确声明情景时增加安装、运行损耗与辅助用电、维护、更换和寿命终结模块，不得将这些情景与工厂门结果无标识地合并。

本 PCR 不包括额定电压不超过 1,000 V 的成套设备、空柜体或未装备底座、单个断路器、开关、隔离器、熔断器、继电器或其他单件装置、散件、电缆和连接器，也不包括由变压器和建筑功能主导的完整预装式变电站。上述排除项用于防止 CPC 46214 与相邻的低压成套设备、单个高压装置和零件混同。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-fffa1be2` |
| classification_refs | CPC 3.0 `46214`，精确匹配 |
| covered_products | 额定电压超过 1,000 V、用于控制或配电的已装备配电盘、控制台、机柜及其他底座，包括 AIS、GIS 和混合式成套设备 |
| excluded_products | 电压不超过 1,000 V 的成套设备；空柜体；单个开关、保护或连接装置；散件；电缆；完整预装式变电站 |
| representative_product | 具有已声明开关、保护、控制和配电配置的成品工厂试验中压或高压开关设备或控制设备成套组件 |
| production_route | 外购材料与装置供应；适用时的柜体和母排制造；机械与电气集成；适用时的介质充装或密封边界验证；出厂试验；包装 |
| market_state | 制造完成的成品，工厂门交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供完成配置并通过工厂试验、承担已声明电气控制、开关、保护和配电功能的开关设备或控制设备成套组件 |
| How much | 工厂门 1 kg 成品成套组件净质量 |
| How well | 声明额定电压超过 1,000 V，并明确额定电流、电流类型与频率、绝缘水平与介质、短路耐受、开关或开断能力、保护配置和成套设备类型 |
| How long or cycle | 工厂门结果不作时间缩放；生命周期结果必须声明制造商规定的参考使用寿命以及维护与更换情景 |
| reference_flow_link | 质量参考流表示完成配置的成套组件，不表示空柜体或单个装置 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 配以电开关等装置，用于控电或配电、电压超过1000伏的配电盘、控制台、箱及其他底座 `84db785c-a90a-48df-a23e-ebcbca35cc4c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| 参考单位 | kg |
| 必需限定信息 | 额定电压；额定电流；适用时的交流或直流及额定频率；额定绝缘水平；短时耐受电流与持续时间；适用时的峰值耐受或关合能力；开断能力与保护配置；AIS、GIS 或混合式成套设备类型；绝缘和开断介质名称与装机充注量；气密或真空边界以及监测或试验方法；母排材料；柜体材料与涂层；已安装开关、保护、控制、测量和辅助装置；产品净质量；初级包装和安装附件质量；户内或户外使用；适用标准与出厂试验状态；生产场址、地域与基准年；制造商声明的使用寿命；维护与更换情景；报告生命周期模块时的运行损耗和辅助功率情景 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用完成配置并通过工厂试验的成套设备净质量；参考数量不含初级包装和单独交付的安装附件，并应分别报告这些质量。 |
| `assembly_scaling` | 全部工厂门清单 | Mass | kg/kg 参考产品 | 将可归属于声明配置的生产期清单除以其成品净质量；保留未缩放的批次总量以供审计。 |
| `material_mass_balance` | 金属、聚合物、陶瓷、流体和电子组件 | Mass | kg | 按材料族核对采购投入、产品含量、回收返还、边角料、废物和库存变化，不得假设未经测量的废料率。 |
| `medium_mass_balance` | 绝缘或开断气体与流体 | Mass | kg | 对声明生产期记录初始充注、回收量、返还量、实测或计算释放量及期末库存；真空路线不记录气体充注，但保留真空边界试验证据。 |
| `electricity_conversion` | 电力记录 | Energy | kWh 和 MJ | 保留计量的 kWh；需要能量换算时使用 1 kWh = 3.6 MJ。 |
| `use_energy` | 生命周期研究中的运行损耗和辅助用电 | Energy | kWh/声明使用寿命 | 各运行模式按实测或声明功率乘以年运行小时和使用年数计算，并分别纳入负载相关损耗及待机或控制功率。 |
| `service_life_scaling` | 维护、更换和寿命终结模块 | Time | year | 使用制造商声明的参考使用寿命，披露每次更换的次数和时间；不得套用未披露的类别默认寿命。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 工厂门核心 | 纳入外购材料和装置、声明研究所含的进厂运输、场内制造、组装、介质处理、出厂试验、检验、生产废物处理以及直至成品在工厂门交付的初级包装。 | `pep-psr-0005-2023` |
| `boundary_equipped_assembly` | 产品身份 | 建模交付的已装备成套组件及其已安装开关、保护、控制、测量和辅助装置；空柜体或单个装置不属于本 PCR。 | `unsd-cpc-3-2025`; `iec-62271-1-2021`; `iec-62271-200-2021` |
| `boundary_conditional_lifecycle` | 生命周期扩展 | 仅将安装、使用、维护、更换和寿命终结作为单独识别的模块纳入，并声明地域、电力、负载、运行小时、使用寿命、回收和处理情景。 | `pep-psr-0005-2023`; `epd-cpcr-switchgear-2024` |
| `boundary_medium_integrity` | 依赖气体、流体或真空的设备 | 气体或流体系统纳入充装、回收、工厂损失和完整性试验；真空灭弧装置纳入已安装部件和边界验证，而使用期泄漏或故障取决于情景。 | `iec-62271-1-2021`; `iec-62271-200-2021` |
| `boundary_same_category` | 递归的 CPC 46214 投入 | 将采购的同类已装备成套组件作为一个上游产品投入记录；除非内部制造有实测且只计一次，不得在同一前景系统内展开。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 位于制造场址门口的外购材料、部件、子组件、能源载体和包装，并声明供应商、地域及运输处理方式 |
| starting_condition_role | 将供应商或背景生产与场址特定的柜体制造、母排制造、集成、介质管理、试验和包装分开 |
| product_classification_scope | CPC 3.0 `46214` 下额定电压超过 1,000 V 的成品已装备控制或配电成套组件 |
| recursive_input_rule | 本身符合 CPC 46214 的外购产品以一个上游数据集表示；不得在接收组件的过程中重复其内部阶段 |
| upstream_dataset_requirement | 优先选择与材料牌号、装置类型、绝缘介质、地域和基准年匹配的供应商特定数据集；否则采用已披露的代表性数据集并记录不匹配 |
| disclosure | 声明所有排除项、截断项、资本品处理、运输假设、供应商数据替代、生命周期模块和情景边界 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `enclosure_busbar_fabrication` | 柜体与母排制造 | conditional | 报告组织内进行金属成形、机加工、连接、电镀、涂装或母排准备时纳入 | 将原材料或半成品转化为可组装结构，并记录废料与表面处理负荷 | 每 kg 参考产品的实测成品部件和制造记录 |
| `final_assembly_testing_packaging` | 最终组装、介质管理、出厂试验与包装 | required | 成品已装备组件始终纳入；介质充装或真空边界检查按已安装技术适用 | 集成全部装置并交付完成试验和包装的参考产品 | HV board/cabinet final assembly and factory testing `f2685e52-4286-4243-8b9c-a5d649d833aa`，归一化至 1 kg 输出 |
| `use_maintenance` | 使用与维护 | conditional | 仅报告生命周期模块时纳入 | 记录声明使用寿命内的电气损耗、辅助用能、泄漏、维护材料和更换 | 声明的运行、维护和更换情景 |
| `end_of_life` | 退役与寿命终结 | conditional | 仅报告生命周期模块时纳入 | 记录停电、介质回收、拆解、回收利用与残余处理 | 声明的地域特定寿命终结情景 |

### 过程：柜体与母排制造（`enclosure_busbar_fabrication`）

#### 输入

##### 产品流

###### 柜体、母排与支撑材料（`fabrication_materials`）

记录进入场内制造的每个材料族和牌号，包括钢或铝柜体材料、铜或铝母排材料、涂层、紧固件及绝缘支撑。

- 选定流：不设默认值；选择与各材料族、牌号、再生含量声明和地域匹配的供应商或市场流
- 流属性/单位：Mass / kg
- 数量规则：按材料族拆分的生产领料量加经核实的库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`pep-psr-0005-2023`

###### 制造电力与燃料（`fabrication_energy`）

记录可归属于声明产品的切割、成形、机加工、连接、表面处理和通风的计量电力与燃料。

- 选定流：不设默认值；选择与能源载体、电压等级和地域匹配的场址能源流
- 流属性/单位：电力 Energy / kWh，燃料使用 MJ 或载体质量
- 数量规则：直接分表计量；无分表时采用有文件依据的设备工时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`pep-psr-0005-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制造柜体与母排（`fabricated_structures`）

记录转入最终组装的实测质量，并拆分为柜体、母排和支撑件。

- 选定流：不设默认值；使用具有材料组成记录的内部中间流
- 流属性/单位：Mass / kg
- 数量规则：实测合格转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：

##### 废物流

###### 制造废料与处理残余物（`fabrication_waste`）

按处理去向记录金属废料、涂装残余物、废槽液、磨料和不合格部件，并区分场内返料与离场废物。

- 选定流：不设默认值；选择与材料和处理路线匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：与材料平衡核对的实测废物交接或内部返料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_records`
- 来源：`pep-psr-0005-2023`

##### 基本流

### 过程：最终组装、介质管理、出厂试验与包装（`final_assembly_testing_packaging`）

#### 输入

##### 产品流

###### 组装材料与已安装装置（`assembly_components`）

记录合格柜体和母排以及各类已安装开关、保护、控制、测量和辅助装置。分别识别导体、绝缘件、电子器件、电池（如有）、紧固件和其他重要材料族。

- 选定流：不设默认值；使用与部件功能、额定参数、介质和地域匹配的供应商特定或代表性产品流
- 流属性/单位：Mass / kg，并保留件数作为辅助属性
- 数量规则：配置特定 BOM 数量，与领料和产品净质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`pep-psr-0005-2023`; `iec-62271-200-2021`

###### 绝缘或开断介质（`insulation_medium`）

气体或流体充装设备记录介质名称、组成、原生或回收状态和实测装机充注量。真空灭弧装置不在此记录气体投入，而将外购灭弧器和真空边界证据保留在组装记录中。

- 选定流：不设默认值；选择与声明介质和供应状态精确匹配的物质或产品流
- 流属性/单位：Mass / kg
- 数量规则：实测充装量减回收返还量，并与装机充注、释放和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_medium_integrity`
- 来源：`iec-62271-1-2021`; `iec-62271-200-2021`

###### 组装、试验和包装能源及材料（`assembly_testing_packaging_inputs`）

记录集成、气体处理、真空或压力试验、介电与功能试验的电力及其他能源，并按材料记录初级包装。

- 选定流：不设默认值；选择精确的场址能源与包装材料流
- 流属性/单位：Energy / kWh 和 Mass / kg
- 数量规则：计量或有文件依据的设备工时能源，以及配置特定的实测包装领用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing_packaging`
- 来源：`pep-psr-0005-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品已装备开关设备或控制设备成套组件（`reference_product`）

记录工厂门完成配置、验收合格并通过出厂试验的成套组件净质量。输出必须匹配 CPC 46214 及全部必需限定信息。

- 选定流：配以电开关等装置，用于控电或配电、电压超过1000伏的配电盘、控制台、箱及其他底座 `84db785c-a90a-48df-a23e-ebcbca35cc4c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：工厂验收后 1 kg 成品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_testing_packaging`
- 来源：

##### 废物流

###### 组装不合格品、边角料与包装废物（`assembly_waste`）

按材料和去向记录不合格部件、导体边角料、线束废物、试验不合格品、包装边角料和其他废物。

- 选定流：不设默认值；选择与材料和有记录处理方式匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：分配至声明配置的实测废物交接与返还记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing_packaging`
- 来源：`pep-psr-0005-2023`

##### 基本流

###### 工厂绝缘或开断介质释放（`factory_medium_release`）

按精确物质记录实测或由质量平衡计算的释放量。不得将真空损失表示为物质排放。

- 选定流：不设默认值；选择与声明释放物质精确匹配的基本流
- 流属性/单位：Mass / kg
- 数量规则：实测回收系统损失，或有文件依据的充装、回收和库存质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_medium_integrity`
- 来源：`iec-62271-1-2021`

### 过程：使用与维护（`use_maintenance`）

#### 输入

##### 产品流

###### 运行电力（`use_electricity`）

纳入生命周期模块时，按声明负载和年运行小时记录各运行模式的电气损耗与辅助用电。

- 选定流：不设默认值；选择与使用地域和电压等级匹配的电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：各模式实测或声明功率乘以模式小时和使用年数后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_maintenance`
- 来源：`pep-psr-0005-2023`

###### 维护材料与更换装置（`maintenance_replacements`）

按声明维护计划记录计划性和纠正性维护材料、更换装置、补充介质及其运输。

- 选定流：不设默认值；选择与维护事件匹配的精确材料和装置流
- 流属性/单位：Mass / kg，件数作为辅助属性
- 数量规则：事件数量乘以声明的事件或更换次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_maintenance`
- 来源：`pep-psr-0005-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 更换装置与维护废物（`maintenance_waste`）

按实际或情景处理路线记录拆除装置、废维护材料和回收介质。

- 选定流：不设默认值；选择与材料和处理匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：事件特定拆除量乘以声明事件次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_maintenance`
- 来源：`pep-psr-0005-2023`

##### 基本流

###### 使用期介质释放（`use_medium_release`）

对含气体或流体的设备，按精确物质记录来自实测维护记录或明确说明情景的释放量。欧盟研究应单独证明适用的含氟气体合规性。

- 选定流：不设默认值；选择与声明释放物质精确匹配的基本流
- 流属性/单位：Mass / kg
- 数量规则：实测维护损失，或声明充注量乘以有记录的事件损失，并在使用寿命内求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_maintenance`
- 来源：`eu-2024-573-fgas`

### 过程：退役与寿命终结（`end_of_life`）

#### 输入

##### 产品流

##### 废物流

###### 退役已装备成套设备（`retired_assembly`）

记录声明情景下进入停电、介质回收和拆解的退役产品质量。

- 选定流：不设默认值；选择明确表示退役已装备成套设备的废物流
- 流属性/单位：Mass / kg
- 数量规则：进入寿命终结处理的参考产品质量加声明的更换残余物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life`
- 来源：`pep-psr-0005-2023`

##### 基本流

#### 输出

##### 产品流

###### 回收金属、部件与介质（`recovered_products`）

仅将符合声明系统边界和回收产品质量标准的输出记录为产品，并保持负荷和收益与分配规则一致。

- 选定流：不设默认值；选择与材料质量和去向匹配的回收产品流
- 流属性/单位：Mass / kg
- 数量规则：回收输出质量的情景或设施记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life`
- 来源：`pep-psr-0005-2023`

##### 废物流

###### 残余处理组分（`end_of_life_residuals`）

按处理路线记录未回收金属、聚合物、陶瓷、电子器件、流体及其他残余物。

- 选定流：不设默认值；选择与材料和处理匹配的废物流
- 流属性/单位：Mass / kg
- 数量规则：与退役投入、回收产品和释放量核对的情景或设施记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life`
- 来源：`pep-psr-0005-2023`

##### 基本流

###### 寿命终结介质释放（`end_of_life_medium_release`）

记录退役或处理期间未回收并释放的精确物质；有核实的完全回收记录时不得推断排放。

- 选定流：不设默认值；选择与声明释放物质精确匹配的基本流
- 流属性/单位：Mass / kg
- 数量规则：初始剩余充注减回收和转移量，并与实测释放和期末库存核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品在声明使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life`
- 来源：`eu-2024-573-fgas`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | 全部前景过程 | 优先采用直接计量、物理隔离和配置特定 BOM，使投入、能源、废物和释放无需分配即可归属。 | `pep-psr-0005-2023` |
| `causal_allocation` | 共用设备或批次作业 | 无法直接分离时，使用能反映资源消耗且有文件依据的因果驱动量，例如机器工时、试验时间、处理面积或计量能源。 | `pep-psr-0005-2023` |
| `mass_allocation_fallback` | 无合理因果驱动量的共用生产 | 仅在不得已时按净产出质量分配，识别受影响流和产品，披露分配比例，并在可能影响结论时进行敏感性检验。 | `pep-psr-0005-2023` |
| `recycling_separation` | 废料与寿命终结回收 | 声明采用的回收系统边界和分配方法；不得以再生含量收益、废料信用和寿命终结信用重复计算同一回收。 | `pep-psr-0005-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_records` | `enclosure_busbar_fabrication` | 材料、能源、合格部件和废物记录 | ERP 领料、称重单、仪表、库存和废物转移记录 | 材料编号与牌号；数量；单位；批次；产品配置；仪表读数；废料去向；期初期末库存 | 核对生产订单、仪表、称重记录和废物交接 | kg, kWh, MJ | 每批或每月仪表周期 | 有代表性的连续 12 个月或完整生产活动 | 每个制造场址 | 优先配置特定直接记录，否则采用有文件依据的因果分配 | 校准仪表证据、生产订单、库存核对和废物接收单 |
| `cp_assembly_bom` | `final_assembly_testing_packaging` | 已安装部件和产品净组成 | 批准 BOM、领料和完工配置 | 部件编号；供应商；数量；质量；材料；额定参数；介质；序列号或批次；批准替代 | 核对批准 BOM、完工记录、采购接收和净质量称重 | kg 和 item | 每种产品配置 | 基准年生产 | 每个组装场址 | 归一化前保留各材料与装置族 | 受控 BOM 修订、供应商声明和完工签字 |
| `cp_medium_integrity` | `final_assembly_testing_packaging` | 介质充注、回收、释放和密封边界验证 | 钢瓶或容器称重、回收日志、泄漏试验、压力或密度记录、真空试验 | 物质；组成；供应量；充装量；回收量；返还量；库存变化；实测释放；试验方法；结果；仪器编号 | 对每批关闭物质质量平衡，并将完整性证据关联至序列号或配置 | kg 和试验结果 | 每次充装或完整性试验事件 | 基准年生产 | 每个处理和试验位置 | 按精确物质及配置汇总实测事件 | 校准秤、回收日志、泄漏或真空试验报告及操作员签字 |
| `cp_testing_packaging` | `final_assembly_testing_packaging` | 试验能源、包装、不合格品和合格参考产品 | 试验报告、仪表、包装领用、称重和不合格记录 | 额定参数；试验标准；结果；能源；包装材料；包装质量；产品净质量；不合格品去向 | 将出厂验收、净质量称重、能源和包装记录关联至配置 | kg 和 kWh | 每台成套设备或生产批次 | 基准年生产 | 每个组装和试验场址 | 合格输出及可归属记录除以合格净质量 | 出厂试验报告、校准秤、仪表和包装领用记录 |
| `cp_use_maintenance` | `use_maintenance` | 损耗、辅助用电、维护、更换和介质事件 | 型式试验或测量报告、负载曲线、维护计划和服务日志 | 运行模式；功率；负载；小时；年数；事件；材料；更换；充注；回收；释放 | 将实测或声明性能与明确使用和维护情景组合 | kWh, kg, item, year | 每种运行模式和服务事件 | 声明参考使用寿命 | 声明使用地域和安装产品群 | 分别计算每种模式与事件后在寿命期求和 | 适用试验报告、制造商数据、维护计划和服务证据 |
| `cp_end_of_life` | `end_of_life` | 退役投入、回收输出、残余物和释放 | 拆解研究、设施记录、回收日志和情景来源 | 投入质量；材料比例；回收产品；处理路线；介质回收量；介质释放量；地域 | 按材料和精确物质核对情景或设施质量流 | kg | 每个情景或设施活动 | 情景基准年 | 声明处理地域 | 按材料族守恒质量并披露未分类余量 | 设施记录、持证处理方证据、回收证明或有文件依据的情景来源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 工厂门流 | 归一化量 = 可归属生产期数量除以合格参考产品净质量 | 可归属数量；合格净质量 | 每 1 kg 参考产品的数量 |  |
| `reconcile_material_balance` | 每个材料族 | 投入 + 期初库存 = 产品含量 + 场内返料 + 废物 + 期末库存；报告并调查未解决差额，不得强制闭合 | 材料领用；产品含量；返料；废物；库存 | 材料族平衡及未解决差额 | `pep-psr-0005-2023` |
| `calculate_medium_release` | 气体或流体处理 | 释放 = 供应 + 期初库存 - 装机充注 - 回收返还 - 转移量 - 期末库存；如直接校准释放测量更可靠则使用直接测量 | 精确物质质量记录 | 按物质的释放量 | `iec-62271-1-2021` |
| `calculate_use_energy` | 各使用模式 | 生命周期能源 = kW 功率乘以年运行小时乘以使用年数；汇总各模式并说明负载假设 | 实测或声明功率；年小时；年数 | 声明使用寿命内的 kWh | `pep-psr-0005-2023` |
| `calculate_replacements` | 更换装置与维护材料 | 生命周期数量 = 单次事件数量乘以声明事件次数；单独纳入被更换物的处理 | 事件数量；次数；处理 | 生命周期投入和废物数量 | `pep-psr-0005-2023` |
| `reconcile_end_of_life` | 寿命终结情景 | 退役投入质量 = 回收产品 + 残余处理 + 精确物质释放 + 已披露库存或未分类余量 | 拆解与回收记录 | 情景质量平衡 | `pep-psr-0005-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_ratings` | 参考产品 | 配置和额定参数必须证明产品是电压超过 1,000 V 的已装备控制或配电成套组件，并区别于空柜体或单个装置。 | 铭牌、批准图纸、单线图、BOM 和出厂试验报告 |
| `dq_bom_completeness` | 产品组成 | 报告母排和柜体材料以及已安装装置、电子器件、绝缘件、介质、电池（如有）和初级包装；解释遗漏的材料族。 | 受控完工 BOM、供应商声明和净质量核对 |
| `dq_traceability` | 一手数据 | 每个场址特定数值必须关联日期记录、场址、产品配置、单位、汇总方法和数据责任人。 | 记录索引与审计轨迹 |
| `dq_medium_boundary` | 气体、流体和真空技术 | 气体或流体记录必须闭合精确物质平衡并关联泄漏试验；真空设备必须关联外购灭弧器身份和真空边界验证。 | 充装和回收日志、校准称重、泄漏或真空试验报告 |
| `dq_temporal_geographic` | 全部数据集 | 声明数据期、生产场址、供应商地域、使用地域和处理地域，并记录代理不匹配。 | 数据集元数据和来源登记 |
| `dq_scenario_transparency` | 生命周期模块 | 披露使用寿命、负载、小时、电网、损耗、辅助用电、维护、更换、介质损失、回收和寿命终结假设。 | 情景表、计算工作簿及支持性试验或维护计划 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 产品身份 | 确认产品是额定电压超过 1,000 V 的已装备电气控制或配电成套组件；拒绝低压成套设备、空柜体、单个装置和零件。 | `unsd-cpc-3-2025` |
| `validate_reference` | 参考流 | 确认所选产品流 UUID、Mass 属性 UUID、Units of mass UUID、1 kg 参考数量和成品净质量基准。 |  |
| `validate_ratings` | 必需限定信息 | 要求额定电压、额定电流、电流类型与频率、绝缘水平、短路耐受及持续时间、适用时的关合或开断能力、保护配置和出厂试验状态。 | `iec-62271-1-2021`; `iec-62271-200-2021` |
| `validate_materials` | 组成 | 要求母排和柜体材料与涂层、已安装介质和充注量、已安装装置族、净质量，以及单独报告的包装和安装附件。 | `pep-psr-0005-2023` |
| `validate_medium` | 气体、流体或真空边界 | 气体或流体设备要求精确介质名称与充注量、充装—回收—释放平衡及完整性试验方法；真空设备要求外购灭弧器身份与真空边界试验证据。 | `iec-62271-1-2021`; `iec-62271-200-2021` |
| `validate_mass_balance` | 前景与寿命终结清单 | 核对材料和精确物质的投入、产品、返还、库存、废物、回收与释放；报告所有未解决差额，不得插入假设平衡流。 | `pep-psr-0005-2023` |
| `validate_processes` | 过程完整性 | 纳入最终组装、适用的介质管理、出厂试验和包装；满足纳入条件时纳入场内制造及各生命周期过程。 | `pep-psr-0005-2023` |
| `validate_use` | 生命周期模块 | 报告使用或维护时，要求声明使用寿命、运行模式、负载、小时、损耗、辅助功率、更换、维护和介质损失情景；否则将这些模块标记为排除。 | `pep-psr-0005-2023` |
| `validate_eu_fgas` | 欧盟含氟气体设备 | 欧盟情景含受监管的含氟气体时，记录适用的密闭、检漏或监测依据、回收和维护限制，以及投运禁令或豁免状态；不得将法规当作普适产品性能阈值。 | `eu-2024-573-fgas` |
| `validate_allocation` | 共用作业与回收 | 确认已尽可能避免分配，记录任何因果驱动量或质量备用分配，且回收收益未重复计算。 | `pep-psr-0005-2023` |
| `validate_quality` | 数据集发布 | 确认来源可追溯性、时间与地域代表性、配置特定完整性，以及所有代理、排除项和情景假设的披露。 | `pep-psr-0005-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品已装备中压或高压开关设备或控制设备成套组件的配置特定前景单元过程 |
| downstream_use | 产品碳足迹、EPD、技术功能与情景等价条件下的产品比较、过程数据集或生命周期模型 |
| allowed_use | 产品额定参数、成套技术、材料组成、生产地域、基准年和情景与声明数据集匹配的工厂门或明确分模块生命周期研究 |
| excluded_use | 低压成套设备；空柜体；单个断路器或其他单件装置；电压或绝缘技术不匹配；未披露的通用替代；仅基于 LCA 结果的法律合规声明 |
| required_metadata | PCR id；CPC 3.0 代码；参考流 UUID；全部必需限定信息；过程纳入情况；场址和年份；数据来源；分配；排除项；生命周期情景模块 |
| required_quality_disclosure | 一手数据覆盖；BOM 与质量平衡完整性；供应商和背景代理；能源计量方法；介质或真空边界证据；不确定性与情景敏感性 |
| update_trigger | 额定配置、母排或柜体材料、已安装装置、绝缘或开断介质、制造场址或路线、使用寿命或使用情景、影响声明情景的法规或重要背景数据修订发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0 explanatory notes》，class 462 与 subclass 46214，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-08） | 精确类别身份，以及与高压单个装置、低压已装备成套设备和零件的区分 |
| `iec-62271-1-2021` | standard | IEC 62271-1:2017+A1:2021，High-voltage switchgear and controlgear - Part 1: Common specifications for alternating current switchgear and controlgear。https://webstore.iec.ch/en/publication/71439（检索日期 2026-08-08） | 电压范围、通用额定参数、使用条件、气体和真空技术声明及完整性证据 |
| `iec-62271-200-2021` | standard | IEC 62271-200:2021，High-voltage switchgear and controlgear - Part 200: AC metal-enclosed switchgear and controlgear for rated voltages above 1 kV and up to and including 52 kV。https://webstore.iec.ch/en/publication/63466（检索日期 2026-08-08） | 金属封闭成套设备范围、隔室、联锁、电阻、短路和内部电弧试验背景 |
| `pep-psr-0005-2023` | official_guidance | PEP ecopassport，PSR-0005-ed3.1-EN-2023 08 12，Product Specific Rules for Electrical Switchgear and Controlgear Solutions。https://register.pep-ecopassport.org/documents/public/PSR-0005-EN（检索日期 2026-08-08） | 产品组成、参考产品、边界、一手数据可追溯性、分配、运行能源、维护、更换与寿命终结建模 |
| `epd-cpcr-switchgear-2024` | official_guidance | International EPD System，2024:06-c-PCR-001 Electrical switchgear and controlgear solutions，采用 PSR-0005，有效期至 2028-06-06。https://www.environdec.com/pcr-library/pcr_029113de-2d79-4a79-9ba1-08dd782e0347（检索日期 2026-08-08） | 独立 PCR 库状态及开关设备产品特定规则的适用性 |
| `eu-2024-573-fgas` | standard | 《Regulation (EU) 2024/573 of the European Parliament and of the Council of 7 February 2024 on fluorinated greenhouse gases》。https://eur-lex.europa.eu/eli/reg/2024/573/2024-02-20/eng（检索日期 2026-08-08） | 欧盟含氟气体开关设备的密闭、检漏、监测、回收、维护和投运披露 |

---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-8d49dcd5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配有电气开关等装置、电压不超过 1,000 V 的配电盘、控制台、柜及其他底座

## 1. 范围与适用性

本 PCR 适用于额定电压不超过 1,000 V、用于电力开关、保护、控制或分配的完整低压配电盘、控制台、柜及其他已装备底座的前景数据包。交付产品为完整已装备组件时，工业、商业、基础设施、光伏、储能并网及住宅用途的固定式或移动式、有外壳或无外壳组件均可纳入。

数据包必须描述实际配置。不得以空柜体、单个开关器件、单个部件或单一住宅配电箱代表整个高度异质的类别。即使引用技术标准的直流范围更宽，CPC 的电压上限仍为 1,000 V。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-8d49dcd5 |
| classification_refs | CPC 3.0: 46213 (exact) |
| covered_products | 配有开关、保护、测量或控制装置、声明额定电压不超过 1,000 V 的完整配电盘、控制台、开关板、配电板、控制柜及其他底座；包括声明配置的光伏和储能并网设备。 |
| excluded_products | 安装装置前的空外壳；单独交付的开关、保护或连接装置；单独交付的部件；额定电压高于 1,000 V 的组件；不属于交付已装备组件一部分的电池、变流器、逆变器、变压器或外部冷却设备。 |
| representative_product | 不设全类别默认配置。代表性必须按声明的电气额定值、配置、材料、保护/控制功能、外壳及运行条件，针对具体型号和应用建立。 |
| production_route | 采购或厂内制造外壳和母排；采购开关/保护/控制器件及辅件；机械装配；母排和内部接线；适用时编程；检验和出厂试验；包装和发运。 |
| market_state | 声明发运厂界处的完整出厂测试组件，包括已安装装置、内部导体、必需附件，以及单独量化的交付包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明的开关、保护、控制和/或配电功能的完整、经出厂测试的低压已装备组件。 |
| How much | 与一台声明交付组件对应的质量，以 1 kg 参考量报告。 |
| How well | 声明的额定电压和电流、短路能力、保护/控制配置、IP 等级、冷却方式和应用。 |
| How long or cycle | 一个声明的参考使用寿命和运行情景；不假定全类别寿命或负载曲线。 |
| reference_flow_link | 功能单位通过完整组件的净质量 kg 与参考流关联；数据包必须声明每台交付组件的 kg 数，并将 1 kg 参考结果缩放至声明单元。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号和应用；交流或直流；额定电压；组件额定电流及相关回路电流；声明的短路耐受、接通或分断额定值；户内或户外使用；外壳结构和材料质量；母排材料和质量；已安装开关、保护、控制、计量和通信配置；IP 等级；冷却方式和辅助功率；组件净质量；交付附件和包装边界；参考使用寿命；建模使用阶段时的运行/负载曲线；生产地域、技术和期间；适用的验证或出厂试验依据 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明、测试文件或等效字段中声明。缺失限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告完整已装备组件的净质量，以及一台交付组件与 1 kg 参考量之间的换算。 |
| `material_mass` | 外壳、母排、已安装器件、内部接线、辅件和附件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按一致的干态净产品口径记录部件和材料质量；包装单独记录。 |
| `factory_energy` | 制造、装配和测试能源 | Energy | kWh | 使用计量或与账单核对的能源，并声明对指定型号和生产期间的分配。 |
| `use_energy` | 使用阶段纳入时的负载损耗、辅助控制和主动冷却 | Energy | kWh | 根据测量或技术计算的损耗及声明的负载/时间情景计算；不得采用类别默认值。 |
| `service_life` | 参考使用寿命和更换 | Time | year | 声明产品特定的寿命、依据、维护和部件更换情景，不得把来源产品的寿命当作类别默认值。 |

## 5. 系统边界

前景制造边界从采购材料、加工件和装置在装配场址接收时开始，到完整测试组件及其交付包装到达声明发运厂界时结束。采购投入的上游生产通过单独数据集连接。除非研究明确纳入，运输、安装、运行、维护和生命末期均为单独情景模块。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_assembly` | 产品身份 | 纳入构成声明交付组件的外壳或已装备底座、母排、已安装开关/保护/控制装置、内部接线、辅件、必需附件、出厂测试和单独量化的交付包装。 | `iec-61439-1-2020`; `iec-61439-2-2020`; `pep-psr-0005-ed3-1` |
| `boundary_factory_gate` | 前景制造 | 纳入场址控制的制造、表面处理、装配、接线、编程、检验、测试、返工、废物处理和截至发运厂界的包装；披露哪些制造步骤为外购。 | `pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023` |
| `boundary_upstream_inputs` | 采购投入 | 将采购外壳件、母排、器件、电子件、电缆、辅件、涂层和包装连接至地域与技术匹配的上游数据集；不得用无限定的全类别代理替代。 | `pep-psr-0005-ed3-1` |
| `boundary_downstream_scenarios` | 生命周期扩展 | 运输、安装、运行、维护、更换和生命末期不计入出厂前景结果，除非明确纳入；纳入时应使用产品特定情景分模块报告。 | `pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023` |
| `boundary_category_exclusions` | 类别适用性 | 排除空外壳、单个装置和超过 CPC 电压上限的组件；住宅配电箱只能代表其声明子类型，不能代表整个类别。 | `un-cpc-v3-46213`; `iec-62208-2023`; `iec-61439-3-2024` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明装配场址验收的采购材料、部件、装置和子组件，并具备供应商、地域、技术和质量记录。 |
| starting_condition_role | 已披露的前景产品投入，并连接至上游数据集。 |
| product_classification_scope | CPC 3.0 代码 46213 范围内、额定电压不超过 1,000 V 的完整已装备组件。 |
| recursive_input_rule | 已归入 CPC 46213 的采购投入仍作为同类别产品投入显式记录其质量、配置、供应商和上游数据集；不得递归展开，也不得与参考输出静默合并。 |
| upstream_dataset_requirement | 使用与材料或装置身份、生产地域、技术和期间匹配的投入数据集；披露代理和数据缺口。 |
| disclosure | 声明发运厂界、纳入的附件和包装、采购与厂内制造划分、排除的生命周期模块及任何同类别子组件投入。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing` | 外壳和母排制造及表面处理 | conditional | 报告场址控制钣金、母排加工或表面处理时纳入。 | foreground unit process | kg 合格加工件 |
| `assembly_testing` | 机械/电气装配和出厂测试 | required | 完整已装备组件始终纳入。 | foreground unit process | kg 完整测试组件 |
| `packaging_dispatch` | 交付包装和发运准备 | required | 始终纳入；只有具备无交付包装的证据时方可报零。 | foreground unit process | kg 发运厂界参考产品 |
| `use_operation` | 运行、冷却和维护情景 | excluded_by_default | 仅在明确声明从摇篮到坟墓或使用阶段结果时纳入。 | scenario process | 一台声明组件在声明使用寿命内 |

### 过程：外壳和母排制造及表面处理（`fabrication_finishing`）

#### 输入

##### 产品流

###### 制造材料和处理剂（`fabrication_materials`）

记录场址控制制造实际消耗的板材或结构金属、铜或铝导体材料、涂层、化学品及其他投入。

- 选定流：路线特定的制造材料和处理投入
- 流属性/单位：Mass / kg
- 数量规则：按材料和牌号，从采购、仓储和批次记录取得的验收投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格加工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`pep-psr-0005-ed3-1`

###### 制造能源（`fabrication_energy`）

记录切割、冲压、折弯、连接、母排加工和表面处理的计量电力及燃料。

- 选定流：场址特定电力和燃料投入
- 流属性/单位：Energy / kWh 或燃料特定单位
- 数量规则：分配至声明生产批次的计量用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格加工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy`
- 来源：`pep-psr-0005-ed3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格外壳和母排加工件（`fabricated_parts`）

记录转入装配的合格件；应可单独识别钢或铝外壳以及铜或铝母排的质量。

- 选定流：加工外壳、底座和母排子组件
- 流属性/单位：Mass / kg
- 数量规则：转入装配的验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`iec-61439-1-2020`

##### 废物流

###### 制造废料和处理废物（`fabrication_waste`）

按材料和实际去向记录金属废料、废处理材料及其他过程废物。

- 选定流：路线特定制造废物
- 流属性/单位：Mass / kg
- 数量规则：按类型和处理去向称量的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格加工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_waste`
- 来源：`pep-psr-0005-ed3-1`

##### 基本流

###### 制造和表面处理直接排放（`direct_fabrication_releases`）

场址控制的表面处理产生直接排放时，逐项记录测量或质量平衡推导的空气和水排放；不得把处理废物表示为基本流。

- 选定流：物质特定的直接空气或水排放
- 流属性/单位：Mass / kg
- 数量规则：声明制造批次的实测排放或有文件支持的材料平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格加工件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_releases`
- 来源：`pep-psr-0005-ed3-1`

### 过程：机械/电气装配和出厂测试（`assembly_testing`）

#### 输入

##### 产品流

###### 已安装物料清单（`installed_bom`）

按部件和材料记录外壳/底座、母排、开关与保护器件、控制与计量电子件、通信装置、内部线缆与连接器、绝缘件、辅件、主动冷却设备、紧固件和必需附件的质量与数量。

- 选定流：配置特定的已安装部件和材料
- 流属性/单位：Mass / kg
- 数量规则：根据竣工 BOM、零件质量和实测组件质量核对的净安装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 完整测试组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023`

###### 装配和测试能源（`assembly_test_energy`）

记录装配、接线、编程、检验、测试和返工的电力及其他能源。

- 选定流：场址特定装配和测试能源
- 流属性/单位：Energy / kWh
- 数量规则：分配至声明型号和生产期间的计量或账单核对能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 完整测试组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`pep-psr-0005-ed3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整测试组件（`tested_assembly`）

记录已通过声明出厂检验和验证依据的配置组件。

- 选定流：完整出厂测试低压已装备组件
- 流属性/单位：Mass / kg
- 数量规则：不含交付包装的实测组件净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台完成组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_test`
- 来源：`iec-61439-1-2020`; `iec-61439-2-2020`

##### 废物流

###### 装配不合格品和生产废物（`assembly_waste`）

记录不合格部件、线缆与母排边角料、损坏电子件、耗材和来料包装废物，不从投入清单中冲减回收收益。

- 选定流：配置特定装配和测试废物
- 流属性/单位：Mass / kg
- 数量规则：按类型、原因和处理去向称量的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 完整测试组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste`
- 来源：`pep-psr-0005-ed3-1`

##### 基本流

### 过程：交付包装和发运准备（`packaging_dispatch`）

#### 输入

##### 产品流

###### 测试组件投入（`tested_assembly_input`）

转移净测试组件，不改变其质量或配置。

- 选定流：完整出厂测试低压已装备组件
- 流属性/单位：Mass / kg
- 数量规则：等于 `assembly_testing` 的合格输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台交付组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass_reconciliation`
- 来源：

###### 交付包装和附件（`delivery_packaging`）

按材料和质量记录木材、纸板、纸张、塑料、托盘、防腐材料、固定件和单独交付的必需附件。

- 选定流：交付包装和单独交付的必需附件
- 流属性/单位：Mass / kg
- 数量规则：按包装材料和附件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台交付组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pep-psr-0005-ed3-1`; `abb-enviline-ess750-epd-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运厂界参考产品（`reference_product`）

在声明厂界输出完整组件。包装质量保持关联，但不计入 1 kg 净产品参考量。

- 选定流：配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 完整组件净质量；声明每台交付组件的产品 kg 和包装 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：发运厂界 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass_reconciliation`
- 来源：

##### 废物流

##### 基本流

### 过程：运行、冷却和维护情景（`use_operation`）

#### 输入

##### 产品流

###### 运行电力和更换件（`use_energy_replacements`）

需要使用阶段结果时，针对实际负载和寿命情景记录导体与已安装装置损耗、辅助/控制功率、主动冷却、声明维护和更换。

- 选定流：情景特定电力、维护材料和更换部件
- 流属性/单位：Energy / kWh 和 Mass / kg
- 数量规则：根据声明的损耗测量或技术计算、辅助/冷却功率、运行曲线、使用寿命和更换记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每台声明组件在声明参考使用寿命内
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario`
- 来源：`pep-psr-0005-ed3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 所有前景过程 | 在分配共有负荷前，按产线、批次或型号细分制造、装配、测试和包装过程。 | `pep-psr-0005-ed3-1` |
| `allocation_physical_driver` | 共有能源、耗材和废物 | 使用直接计量、机器时间、测试台数、加工材料质量或其他有文件支持的因果物理驱动；只有产品质量反映因果关系时才按质量分配。 | `pep-psr-0005-ed3-1` |
| `allocation_economic_exception` | 剩余共有负荷 | 经济分配不是默认方法；仅当过程细分和因果物理分配不可行时使用，并披露数值、期间、敏感性和理由。 | `pep-psr-0005-ed3-1` |
| `allocation_recycling_separation` | 废料、回收和能源回收 | 单独记录废物去向及回收模型；不得从原生或再生投入量中扣减预期回收收益，也不得重复计算再生材料收益。 | `pep-psr-0005-ed3-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `fabrication_finishing` | 制造材料和合格部件 | 制造 BOM 和采购/仓储记录 | 型号；零件号；供应商；材料/牌号；数量；单件质量；投入质量；合格件质量；外壳质量；母排质量；再生含量声明 | 将受控制造 BOM、图纸、称重和供应商声明与合格批次核对。 | kg, item | 每个型号/修订和代表性制造批次 | 声明生产期间 | 每个报告场址和外协制造商 | 按材料和牌号汇总投入及合格质量；外壳和母排材料保持分列。 | 批准的制造 BOM；称重记录；供应商声明 |
| `cp_assembly_bom` | `assembly_testing` | 已安装 BOM | 竣工 BOM 和部件记录 | 型号；零件号；供应商；功能；材料；数量；单件质量；安装质量；外壳质量；母排质量；器件/电子件质量 | 将受控 BOM、图纸、零件质量和称重记录与竣工单元核对。 | kg, item | 每个型号/修订和代表性生产批次 | 声明生产期间 | 每个报告装配场址 | 按材料和功能组汇总安装质量；外壳、母排、器件、电子件、线缆、冷却和附件保持分列。 | 批准的 BOM 修订；称重记录；供应商声明 |
| `cp_fabrication_energy` | `fabrication_finishing` | 制造能源 | 电表、分表、设备日志或账单 | 计量边界；起止读数；能源载体；制造活动；运行时间；型号；批次；合格输出质量；分配驱动 | 优先过程分表；与场址账单和制造记录核对。 | kWh 或载体特定单位 | 每批次或不低于可用计量/账单期间 | 代表性声明制造期间 | 每个报告制造场址 | 扣除无关负荷，并按第 7 节规则将剩余用量分配至合格加工件输出。 | 仪表校准/状态；账单核对；生产日志 |
| `cp_assembly_energy` | `assembly_testing` | 装配和测试能源 | 电表、分表、设备日志或账单 | 计量边界；起止读数；能源载体；装配/测试活动；运行时间；型号；批次；测试输出质量；分配驱动 | 优先过程分表；与场址账单和装配/测试记录核对。 | kWh 或载体特定单位 | 每批次或不低于可用计量/账单期间 | 代表性声明装配期间 | 每个报告装配场址 | 扣除无关负荷，并按第 7 节规则将剩余用量分配至完整测试输出。 | 仪表校准/状态；账单核对；生产日志 |
| `cp_fabrication_waste` | `fabrication_finishing` | 制造废物 | 称量单和废物转移记录 | 制造活动；材料；危废类别；毛/皮/净重；去向；处理；日期；批次 | 将制造废物日志与运输或处理记录核对。 | kg | 每次发运和制造期间 | 与制造清单相同期间 | 每个报告制造场址 | 按材料和实际处理去向汇总；不得与投入相抵。 | 称量单；转移联单；处理证据 |
| `cp_assembly_waste` | `assembly_testing` | 装配和测试废物 | 称量单和废物转移记录 | 装配/测试活动；材料；危废类别；毛/皮/净重；去向；处理；日期；批次 | 将装配/测试废物日志与运输或处理记录核对。 | kg | 每次发运和装配期间 | 与装配清单相同期间 | 每个报告装配场址 | 按材料和实际处理去向汇总；不得与投入相抵。 | 称量单；转移联单；处理证据 |
| `cp_direct_releases` | `fabrication_finishing` | 直接空气和水排放 | 废气/废水测量或材料平衡记录 | 物质；环境介质；测量边界；浓度；体积或质量；批次；方法；日期 | 优先使用场址测量；否则使用有文件支持的投入-产出材料平衡，且不得把废物转移换算成排放。 | kg | 每个监测期间或制造批次 | 与制造清单相同期间 | 每个报告表面处理场址 | 各物质和环境介质分列汇总，并按合格加工件输出归一化。 | 实验室或仪表记录；计算及平衡闭合 |
| `cp_configuration_test` | `assembly_testing` | 额定值、配置和测试组件 | 批准设计、铭牌和测试记录 | 型号；序列号/批次；AC/DC；额定电压/电流；回路额定值；短路额定值；IP；外壳/母排材料；保护/控制清单；冷却；辅助功率；尺寸；净质量；测试依据/结果 | 从受控工程和出厂测试记录提取，并与发运配置核对。 | 声明工程单位和 kg | 每个型号/修订和测试批次 | 当前声明型号和生产期间 | 每个报告场址 | 不得平均不相同配置，除非报告产品组合和权重。 | 批准图纸；铭牌；设计验证；例行/出厂测试记录 |
| `cp_packaging` | `packaging_dispatch` | 交付包装和附件 | 包装规范和称重记录 | 包装材料；数量；质量；可重复使用状态；附件身份/质量；目的地 | 称重或根据受控包装规范计算，并用发运记录验证。 | kg per assembly | 每个包装设计/修订和代表性发运 | 声明发运期间 | 每个发运场址 | 按包装材料汇总；包装和单独交付附件与产品净质量分列。 | 装箱单；称重记录；包装规范 |
| `cp_mass_reconciliation` | `packaging_dispatch` | 质量平衡和参考输出 | BOM、称重和转移记录 | 安装材料质量；测试净质量；附件质量；包装质量；返工/不合格质量；交付质量 | 将竣工 BOM 和过程转移与经校准称重记录核对。 | kg | 每个型号/修订和代表性批次 | 与 BOM 和生产数据相同期间 | 每个报告场址 | 解释全部残差；不得把无法解释的残差强制归入未说明材料。 | 签署的核对表；校准证据；差异调查 |
| `cp_use_scenario` | `use_operation` | 使用损耗、辅件、冷却、寿命和更换 | 型式/例行试验、工程计算、运行曲线和维护记录 | 负载点；电流；电压；功率损耗；辅助/冷却功率；各负载小时；环境条件；使用寿命；维护；更换类型/次数；电网地域 | 使用适用标准测量、实验室报告、工程计算或制造商数据，并记录所选情景。 | W, kWh, h, year, item, kg | 每个声明使用情景和型号修订 | 声明使用寿命 | 声明应用和地域 | 按声明小时积分损耗及辅助/冷却需求；更换清单保持显式。 | 测试/计算报告；情景论证；维护计划 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_scaling` | 参考产品 | 每台结果 = 每 kg 结果 × 每台交付组件净质量 kg | 1 kg 参考结果；实测组件净质量 | 每台交付组件结果 |  |
| `calc_material_reconciliation` | 完整组件 | 组件净质量 = 已安装外壳/底座、母排、装置、电子件、接线、辅件、冷却、紧固件和必需附件质量之和；调查并披露全部残差 | 竣工 BOM；零件质量；实测净质量 | 经核对材料清单和残差披露 | `pep-psr-0005-ed3-1` |
| `calc_factory_energy_intensity` | 制造及装配/测试 | 每 kg 分配过程能源 = 分配至声明型号或批次的过程能源 ÷ 合格输出 kg | 能源记录；生产记录；分配驱动 | kWh per kg process output | `pep-psr-0005-ed3-1` |
| `calc_waste_intensity` | 生产废物 | 每 kg 废物 = 归于声明过程/型号的废物质量 ÷ 合格过程输出 kg | 废物记录；合格输出质量 | 按类型和去向的 kg waste per kg output |  |
| `calc_use_energy` | 可选使用阶段 | 使用能源 = 各声明负载状态的实测或计算组件损耗 × 小时之和 + 辅助/控制功率 × 小时 + 主动冷却功率 × 小时；另加显式更换清单 | 损耗数据；辅助/冷却需求；负载/时间曲线；寿命；更换 | 每台声明组件寿命内的 kWh 和更换清单 | `pep-psr-0005-ed3-1` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 产品身份 | 数据必须描述一个声明型号/配置或透明的生产组合；全部电气、外壳、母排、保护/控制、IP、冷却和交付限定信息必须与之匹配。 | 受控设计、BOM、铭牌和测试记录 |
| `dq_mass_completeness` | 材料清单 | 将已安装材料组与实测组件净质量核对，并披露每个未解决残差的数值和原因。 | 签署的质量核对和差异调查 |
| `dq_temporal_site` | 前景数据 | 使用声明的代表性生产期间并识别每个装配、制造和发运场址；披露异常停机、返工或产品组合影响。 | 有日期的仪表、账单、生产和发运记录 |
| `dq_upstream_match` | 采购投入 | 上游数据须匹配材料/装置身份、地域、技术和时间；披露每个代理及其为最接近选择的理由。 | 供应商证据、数据集元数据和代理登记 |
| `dq_use_scenario` | 可选使用阶段 | 将损耗、辅助/冷却需求、负载曲线、使用寿命、维护和更换与声明配置关联；不得用产品特定发布情景代替类别默认值。 | 测试/计算报告和情景论证 |
| `dq_source_traceability` | 全部计算值 | 保存来源记录标识、转换、分配驱动、单位和可由评审者复现的计算。 | 有谱系的计算工作簿或受控数据管道 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_voltage` | 产品身份 | 确认数据集为 CPC 46213 的完整已装备组件且声明额定电压不超过 1,000 V；拒绝空外壳、单个装置、部件或更高电压组件。 | `un-cpc-v3-46213`; `iec-62208-2023` |
| `validate_reference_identity` | 参考流 | 确认产品流 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 及 kg，且不嵌入数据集版本。 |  |
| `validate_qualifiers` | 参考流 | 确认每个必需限定信息均存在，并与受控设计、铭牌、BOM 和测试记录一致。 | `iec-61439-1-2020`; `iec-61439-2-2020` |
| `validate_mass_balance` | 材料清单 | 确认已安装材料组与实测产品净质量核对；标记并披露每个无法解释的残差，不得插入未说明默认值。 | `pep-psr-0005-ed3-1` |
| `validate_process_boundary` | 前景过程 | 确认纳入所有场址控制的制造、装配、测试、返工、废物处理和包装，并披露采购过程且连接上游。 | `pep-psr-0005-ed3-1` |
| `validate_energy_allocation` | 工厂能源 | 确认计量/账单核对、无关负荷扣除，以及声明型号和期间采用的有文件支持物理分配驱动。 | `pep-psr-0005-ed3-1` |
| `validate_waste_destinations` | 废物 | 确认记录生产废物质量、类型和实际去向，且未从投入冲减回收收益。 | `pep-psr-0005-ed3-1` |
| `validate_use_scenario` | 可选使用阶段 | 报告使用阶段时，确认损耗、辅助/控制和冷却能源、负载/时间曲线、使用寿命、维护、更换及电网地域均为配置特定并单独披露。 | `pep-psr-0005-ed3-1` |
| `validate_no_proxy_extrapolation` | 代表性 | 若无声明且加权的产品组合，拒绝声称空柜体、单个开关器件、单一住宅配电箱或单一光伏/储能型号代表整个类别。 | `iec-62208-2023`; `iec-61439-3-2024`; `abb-enviline-ess750-epd-2023` |
| `validate_source_lineage` | 全部报告值 | 确认每个前景值和计算均链接至采集记录、单位、期间、场址和转换；来源仅支撑规则，不作为未经评审的默认数量。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset |
| allowed_use | 完整 CPC 46213 组件的配置特定出厂数据集，以及明确分列的运输、安装、使用、维护和生命末期情景扩展。 |
| excluded_use | 空外壳；单个器件或部件；高于 1,000 V 的组件；无限定的类别平均声明；将单一住宅、光伏或储能组件外推至整个类别。 |
| required_metadata | PCR id；CPC 代码；参考流 UUID；型号和应用；AC/DC；额定电压/电流和短路额定值；配置；外壳和母排材料；保护/控制功能；IP；冷却和辅助功率；净质量；包装/交付边界；使用寿命；地域；技术；期间；场址；分配；情景模块。 |
| required_quality_disclosure | BOM 和质量核对；前景计量和分配；废物去向；上游数据集匹配和代理；出厂测试依据；产品组合权重；可选使用/寿命/更换假设；数据缺口和可复现谱系。 |
| update_trigger | 设计或 BOM 修订；额定值、外壳/母排材料、器件/控制配置、IP 或冷却变化；生产路线/场址/能源结构变化；包装/交付边界变化；使用寿命或使用情景变化；供应商或前景证据实质改善。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-46213` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0 Explanatory Notes》，类别 46213 及相邻类别，https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf（检索日期 2026-08-08） | 类别身份、电压上限和排除项 |
| `iec-61439-1-2020` | standard | IEC 61439-1:2020, Low-voltage switchgear and controlgear assemblies - Part 1: General rules, https://webstore.iec.ch/en/publication/32338（检索日期 2026-08-08） | 组件特性、结构和验证限定信息 |
| `iec-61439-2-2020` | standard | IEC 61439-2:2020, Low-voltage switchgear and controlgear assemblies - Part 2: Power switchgear and controlgear assemblies, https://webstore.iec.ch/en/publication/30043（检索日期 2026-08-08） | 组件范围、应用、IP 和主动冷却声明 |
| `iec-61439-3-2024` | standard | IEC 61439-3:2024, Distribution boards intended to be operated by ordinary persons, https://webstore.iec.ch/en/publication/68496（检索日期 2026-08-08） | 住宅配电箱子类型边界 |
| `iec-62208-2023` | standard | IEC 62208:2023, Empty enclosures for low-voltage switchgear and controlgear assemblies - General requirements, https://webstore.iec.ch/en/publication/67906（检索日期 2026-08-08） | 排除空外壳 |
| `pep-psr-0005-ed3-1` | official_guidance | PEP ecopassport, PSR-0005-ed3.1-EN-2023 06 06, Specific Rules for Electrical Switchgear and Control Gear Solutions, https://register.pep-ecopassport.org/documents/public/PSR-0005-EN（检索日期 2026-08-08） | 边界、清单完整性、分配、使用能源方法和数据质量 |
| `abb-enviline-ess750-epd-2023` | dataset | ABB, Enviline ESS 750 Energy Storage System, 经验证 EPD NEPD-4756-4011, https://www.epd-norge.no/getfile.php/1342230-1691345766/EPDer/Byggevarer/NEPD-4756-4011_Enviline----ESS-750-----Energy-Storage-System.pdf（检索日期 2026-08-08） | 材料/过程分解和产品特定情景差异的非默认证据 |

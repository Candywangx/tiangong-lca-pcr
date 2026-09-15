---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.auxiliary-plant-for-use-with-boilers-condensers-for-steam-or-other-vapour-power-units
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 锅炉用辅助设备；蒸汽或其他蒸气动力装置用冷凝器

## 1. 范围与适用性

本 PCR 适用于制造商工厂门口交付的完整锅炉辅助设备，以及蒸汽或其他蒸气动力装置用完整冷凝器。覆盖的设备包括节煤器、过热器、除灰器、气体回收器、汽轮机冷凝器、排汽冷凝器，以及审定产品边界内功能相当的完整换热或锅炉配套总成。必须声明产品特定的压力、温度、负荷、材料、冷却介质和符合性要求。

本 PCR 不包括蒸汽或其他蒸气发生锅炉、集中供暖锅炉、核反应堆、汽轮机、阀门、独立供应的泵或风机，以及单独供应的备件。客户现场安装、调试、运行、维护、改造和寿命终止阶段不在默认从摇篮到工厂大门边界内。正式 CPC 结构和 HS 品目明确了完整设备、锅炉和零件之间的区别（`un-cpc-3-0-2025`、`un-hs-2017-heading-8404`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.auxiliary-plant-for-use-with-boilers-condensers-for-steam-or-other-vapour-power-units |
| classification_refs | CPC 3.0：42330，exact |
| covered_products | 完整锅炉辅助设备；蒸汽或其他蒸气动力装置用完整冷凝器 |
| excluded_products | 锅炉；核反应堆；汽轮机；阀门；独立供应的泵和风机；单独供应的零件；现场安装服务 |
| representative_product | 通过工厂验收的节煤器、过热器、除灰或气体回收总成，或蒸汽动力装置用冷凝器 |
| production_route | 接收规定材料和外购部件；切割、成形和机加工；永久连接和装配；有条件的清洗、热处理和防护包装；检验、无损检测以及要求的压力或泄漏试验 |
| market_state | 以型号或项目名称、净质量、技术规范和验收状态标识的完整工厂门口设备；可拆卸运输包装单独报告 |

专业中文类别名称采用中国正式税则中锅炉辅助设备及水蒸汽或其他蒸汽动力装置用冷凝器的术语（`china-mofcom-hs-8404-nomenclature`）。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供完整锅炉辅助设备，或蒸汽或其他蒸气动力装置用完整冷凝器 |
| How much | 制造商工厂门口 1 kg 通过工厂验收的设备净质量 |
| How well | 满足所声明的采购方规范、设计规范或符合性制度、检验状态和工厂验收准则 |
| How long or cycle | 从摇篮到工厂大门的产品输出；设计使用寿命作为元数据声明，但不改变 1 kg 归一化 |
| reference_flow_link | 参考产品输出行 `reference_product_output` 的 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 锅炉的辅助设备，蒸汽或其他蒸汽动力机组用冷凝器 `44b3e5f4-4272-4369-8001-a48717bf1dfe` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类和设备名称；项目或型号；承压状态；设计规范和符合性制度；适用时的最高允许压力和温度；热负荷；主要材料牌号；适用时的管材及尺寸；适用时的冷却介质质量；制造场址和地理范围；工厂验收和试验制度；产品净质量；可拆卸包装排除；数据期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按完整且通过工厂验收的设备实测净质量归一化。参考产品质量不含可拆卸运输包装，包装投入单独报告。 |
| `electricity_energy_conversion` | `manufacturing_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 转换前保留电表原始记录；按 1 kWh = 3.6 MJ 转换，并声明电网地理范围、电压和损耗边界。 |
| `gas_volume_conditions` | `natural_gas` 和 `industrial_oxygen` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明每种气体体积的参考温度和压力。没有适用于所供天然气的有文件依据的低位热值时，不得把天然气体积转换为能量。 |
| `water_mass_basis` | `process_water` 和 `hydrostatic_test_wastewater` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测质量，或以有文件依据的密度把实测体积转换为质量，并保留原始体积、密度和条件。 |
| `material_mass_reconciliation` | 材料投入、参考产品和金属废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一生产订单和期间内核对接收材料、产品净质量、退料、实测废料和库存变化；解释未核对差额。 |

## 5. 系统边界

默认边界从外购材料、外购部件、能源载体、水和工艺耗材跨越制造场址边界时开始。边界包括材料准备、成形和机加工、永久连接、装配、有条件的清洗和热处理、检验、无损检测、工厂压力或泄漏试验以及防护包装；以完整设备通过验收并到达工厂门口为止。该过程顺序和承压设备质量控制由正式承压设备和无损检测指南支持（`uk-pressure-equipment-guidance-2025`、`uk-hse-ndt-pressure-equipment`、`uk-hse-pressure-testing-gs4`）。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址门口的外购板材、管材、焊接耗材、外购部件、气体、能源、水和包装材料，并声明规格、质量和供应商地理范围 |
| starting_condition_role | 具有完整上游数据集的上游产品投入；未报告的隐含生产不得作为前景活动 |
| product_classification_scope | CPC 42330 语义边界内的完整设备；锅炉、汽轮机和单独供应的零件不在本 PCR 内 |
| recursive_input_rule | 若把外购的完整 CPC 42330 设备装入更大的交付物，则将其作为产品投入记录一次并连接上游数据集，不在本前景过程内递归拆分 |
| upstream_dataset_requirement | 每项外购材料、部件、燃料、气体、电力供应、水供应和包装投入都需要地理和技术上有代表性的上游数据集，或明确记录数据缺口 |
| disclosure | 声明制造路线、外包步骤、截断、场址和期间、材料牌号、产品子类、试验路线、包装边界、分配驱动因素，以及有意增加的安装或使用阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入可归属于已验收产品的全部厂内准备、连接、装配、状态调整、检验、试验和包装；客户现场安装和使用除非单独建模并披露，否则予以排除。 | `uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment` |
| `boundary_pressure_controls` | 承压产品 | 纳入所声明设计规范或符合性制度要求的实际永久连接资质、无损检测、最终检验以及压力或泄漏试验活动。 | `uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4` |
| `boundary_recursive_equipment` | 同类别外购设备 | 在外购完整设备的边界停止递归前景追踪，并要求该投入有单独的上游数据集。 |  |
| `boundary_direct_emissions` | 场址能源和处理 | 本前景清单只报告场址直接排放；上游排放保留在相应外购投入数据集中。 |  |

## 6. 过程清单结构

采用一体化过程可避免虚构内部中间体，同时保留操作层级记录。该过程覆盖上述常见工厂路线；每个条件行仅在该项确切交换发生时纳入。蒸汽冷凝器类型、管材选择和冷却介质条件仍是产品特定限定信息（`doosan-steam-condensers-heat-exchangers`）。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `equipment_manufacturing_and_acceptance` | 设备制造、装配、试验和工厂验收 | `required` | 完整工厂门口设备始终要求；下列各路线特定交换仍按条件纳入 | 前景生产 | 1 kg 已验收参考产品净质量 |

### 过程：设备制造、装配、试验和工厂验收（`equipment_manufacturing_and_acceptance`）

#### 输入

##### 产品流

###### 承压设备用碳钢板（`carbon_steel_pressure_plate`）

当产品物料清单中存在碳钢或非合金钢板时，记录进入制造的该类板材。牌号、交货状态、尺寸、认证和供应商地理范围均为必需限定信息；因未找到经审核的精确候选项，Tiangong UUID 仍未解决。

- 选定流：承压设备用碳钢板
- 流属性/单位：Mass / kg
- 数量规则：根据接收、领料、退料和库存记录计量的消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`uk-hse-ndt-pressure-equipment`

###### 承压设备用不锈钢板（`stainless_steel_pressure_plate`）

仅当产品物料清单中存在不锈钢板时记录。合金牌号、交货状态、尺寸、认证和供应商地理范围均为必需限定信息；因未找到经审核的精确候选项，Tiangong UUID 仍未解决。

- 选定流：承压设备用不锈钢板
- 流属性/单位：Mass / kg
- 数量规则：根据接收、领料、退料和库存记录计量的消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`uk-hse-ndt-pressure-equipment`

###### 换热面用铜管材（`copper_tubing`）

仅对所声明管材为铜或铜合金的产品记录铜管材。牌号、尺寸、供应商和冷却介质相容性随前景记录保留。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：Mass / kg
- 数量规则：根据物料清单、领料和退料记录计量的管材消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`doosan-steam-condensers-heat-exchangers`

###### 外购电力（`manufacturing_electricity`）

记录可归属于切割、成形、机加工、连接、装配、通风、检验、试验和包装的计量电力。工厂公用负荷仅按有文件依据的分配规则纳入。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：由保留的 kWh 记录转换而得的计量或分配外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`

###### 工业氧气（`industrial_oxygen`）

仅当外购工业氧气为氧燃料切割或其他有文件依据的制造操作跨越前景边界时记录。不得把在上游供应服务数据集内产生的氧气另作投入。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在所声明参考条件下计量或按供应商发票记录的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：对使用外购氧气的产品，每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`

###### 药芯焊丝（`flux_cored_welding_wire`）

仅在使用药芯焊丝工艺时记录该耗材。保留耗材类别、合金、直径、保护方式、焊接工艺以及退回或废弃耗材数量。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：发放质量减去未开封退回量，并与焊接工艺和生产订单核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：药芯焊丝路线下每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`
- 来源：`uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment`

###### 气态天然气（`natural_gas`）

仅当气态天然气在场址内用于热处理、干燥或有文件依据的燃气制造操作时记录。供应地理范围、组成、低位热值和参考条件随记录保留。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：可归属于生产订单的计量体积或供应商发票体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：场址天然气燃烧路线下每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`

###### 工艺用水（`process_water`）

当用于清洗、冲洗或水压试验的供水跨越制造边界时记录。声明水源、水质、回用、试验容积、添加剂和计量基准。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入清洗和试验操作的实测补充水量，扣除有文件依据的回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：用水操作下每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4`

###### 碱洗用氢氧化钠（`sodium_hydroxide`）

仅在使用有文件依据的碱性清洗浴或溶液时记录氢氧化钠。报告氢氧化钠有效质量、供货浓度、补加量和浴液处置边界。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据称量溶液质量和供应商浓度计算的有效氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：碱洗路线下每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_and_packaging_records`

###### 窑干针叶材锯材（`softwood_packaging`）

仅当窑干针叶材锯材用于随产品交付的产品特定运输框架、滑橇或木箱时记录。声明处理、含水率、重复使用和回收安排。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：安装在交付运输包装中的称量质量或供应商文件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：供应木质包装时每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`

###### 低密度聚乙烯防护薄膜（`ldpe_packaging_film`）

仅当低密度聚乙烯薄膜用于包裹或保护交付设备时记录。保留厚度、再生料含量和供应商信息。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：施用于交付设备的称量质量或供应商文件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：供应 LDPE 薄膜时每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging_records`

##### 废物流

一体化制造过程无预期废物流投入。

##### 基本流

一体化制造过程无预期基本流投入。

#### 输出

##### 产品流

###### 已验收参考设备（`reference_product_output`）

输出为本 PCR 边界内通过验收的完整设备。即使包装负荷计入前景过程，可拆卸运输包装也不计入产品净质量。

- 选定流：锅炉的辅助设备，蒸汽或其他蒸汽动力机组用冷凝器 `44b3e5f4-4272-4369-8001-a48717bf1dfe`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 已验收设备净质量的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`

##### 废物流

###### 钢制品制造废料（`steel_scrap`）

记录作为废料离开过程的实测黑色金属板材、型材和机加工切屑。随记录保留牌号分选、污染、内部回用、外部接收方以及回收或处理路线。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：扣除退回库存或在同一产品中再用的材料后，转移出场址的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_waste_records`

###### 水压试验废水（`hydrostatic_test_wastewater`）

仅当清洗、冲洗或水压试验后的水被排放或转移处理时，将其记录为废水。声明来源、添加剂、污染、回用、去向和处理路线。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：扣除有文件依据的回用量和滞留水后，排放或转移的实测水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：用水试验或清洗路线下每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4`

##### 基本流

###### 场址内天然气燃烧产生的化石二氧化碳（`carbon_dioxide_fossil`）

只记录前景场址内天然气燃烧产生的直接化石二氧化碳。排除天然气供应和外购电力的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据采集的天然气体积以及有文件依据、适用于场址和期间的排放因子或碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：场址天然气燃烧路线下每 1 kg 已验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 产品订单和可区分操作 | 优先通过分表计量并把领料、机器记录、试验记录、废料和包装直接归属于生产订单来避免分配。 |  |
| `allocation_shared_operations` | 共用电力、天然气、水和公用操作 | 无法直接归属时，使用反映因果关系且有文件依据的物理驱动因素，例如实测机器能耗、机器小时、焊缝长度、试验容积或净加工质量；除非没有可辩护的物理驱动因素，不得使用收入。 |  |
| `allocation_scrap` | 废钢 | 在实测废料离开前景过程时将其作为废物输出。前景结果不得计入避免原生金属的抵扣；接收方回收或处理应按所选背景惯例另行建模。 |  |
| `allocation_packaging` | 产品特定木材和薄膜 | 产品特定包装直接归属于交付订单；共用包装按实测包装质量或包装产品净质量分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging_records` | `equipment_manufacturing_and_acceptance` | 金属投入、焊丝、清洗化学品、木材和 LDPE 薄膜 | 收货单、材料质量证明、物料清单、库房领退料记录和供应商发票 | production_order; material_code; grade_or_formula; supplied_mass; concentration; issued_mass; returned_mass; packaging_mass; supplier; geography | 将经认证的物料清单和库房交易与已验收生产订单核对 | kg 和质量分数 | 每次领退料；按已验收订单汇总 | 订单完整制造期间 | 边界内所有自有和外包操作 | 消耗质量 = 接收或发放质量减去经核实退料；适用时进行浓度换算；按已验收产品净质量归一化 | 材料证明、发票、经校准衡器记录、库房台账和批准的物料清单 |
| `cp_energy_and_gas_records` | `equipment_manufacturing_and_acceptance` | 电力、工业氧气和天然气 | 分表、公用工程表计、钢瓶或散装气体发票和生产日志 | timestamp; meter_start; meter_end; unit; production_order; machine_hours; gas_volume; reference_temperature; reference_pressure; grid_or_supplier | 优先直接分表计量；否则用批准的物理驱动因素分配同期表计总量 | kWh、MJ 和 m3 | 每班或每批；每月公用工程核对 | 有代表性的订单期间，至少覆盖一个完整生产周期 | 制造场址及所声明外包操作 | 扣除无关负荷，应用有文件依据的分配，按 3.6 MJ/kWh 转换电力并按已验收产品净质量归一化 | 表计校准、发票、班次日志和分配工作表 |
| `cp_water_records` | `equipment_manufacturing_and_acceptance` | 工艺用水和水压试验废水 | 水表、试验单、罐容积记录、排放联单和回用日志 | source; input_volume_or_mass; test_volume; reused_volume_or_mass; retained_water; discharged_volume_or_mass; density; additives; destination | 计量或称量每次注水、回用和排放；按试验批次核对水平衡 | kg 和 m3 | 每次清洗或试验批次 | 完整制造和验收试验期间 | 前景边界内所有用水操作 | 需要时用有文件依据的密度换算；投入 = 回用 + 排放 + 滞留水 + 已解释损失；按已验收产品净质量归一化 | 经校准表计、签字试验单、排放记录和衡算检查 |
| `cp_output_and_waste_records` | `equipment_manufacturing_and_acceptance` | 参考产品和废钢 | 最终称量、验收证书、废料衡器、退库单和废物转移记录 | production_order; accepted_product_mass; packaging_mass; scrap_mass; returned_to_stock_mass; receiver; treatment_route | 称量不含可拆卸包装的已验收设备，并称量每次废料转移 | kg | 每件已验收产品和每次废料转移 | 完整生产订单 | 制造场址及纳入的承包商 | 在同一订单内汇总已验收产品净质量和可归属废料；所有流归一化至 1 kg 产品 | 衡器校准证书、验收记录、废料磅单和接收方文件 |
| `cp_direct_combustion_records` | `equipment_manufacturing_and_acceptance` | 化石二氧化碳 | 天然气记录、供应商燃料属性、经批准因子或碳平衡工作表 | gas_volume; reference_conditions; net_calorific_value_if_used; carbon_content_or_co2_factor; factor_source; oxidation_assumption; production_order | 仅由采集的天然气用量以及适用于场址和期间且有引用的因子计算场址直接 CO2 | kg CO2 和 m3 天然气 | 每个发生场址天然气燃烧的报告期间 | 与天然气用量相同期间 | 仅前景场址内燃烧 | CO2 = 可归属天然气量 × 有文件依据的适用因子，再按已验收产品净质量归一化 | 天然气表计、供应商规格、因子引用和计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 所有清单行 | 归一化数量 = 可归属订单数量 / 已验收产品净质量 | 可归属流数量；不含可拆卸包装的已验收产品质量 | 每 1 kg 参考产品的数量 |  |
| `calc_electricity_mj` | `manufacturing_electricity` | electricity_MJ = retained_metered_kWh × 3.6 | 计量 kWh | MJ 电力 |  |
| `calc_active_sodium_hydroxide` | `sodium_hydroxide` | 有效 NaOH 质量 = 供货溶液质量 × 供应商认证 NaOH 质量分数 | 溶液质量；NaOH 质量分数 | kg 有效氢氧化钠 |  |
| `calc_water_mass` | `process_water`, `hydrostatic_test_wastewater` | 水质量 = 实测体积 × 所声明条件下有文件依据的密度 | 体积；密度；温度 | kg 水或废水 |  |
| `calc_direct_fossil_co2` | `carbon_dioxide_fossil` | 直接化石 CO2 = 可归属天然气量 × 有文件依据且适用于场址和期间的 CO2 因子，或等效碳平衡 | 天然气量；因子或碳含量；氧化假设 | kg 直接化石 CO2 |  |
| `calc_material_balance` | 金属投入、产品和废钢 | 在一个生产订单内核对消耗金属投入、产品中的金属净质量、实测废料、退库和已解释库存或过程损失 | 领料；退料；已验收产品 BOM；废料磅单；库存变化 | 材料衡算差额及解释 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明子类、名称、承压状态、技术规范、设计规范、材料牌号、试验状态和净质量，以便审查完整设备边界。 | 已验收图纸清单、数据表、铭牌或符合性记录和验收证书 |
| `dq_material_traceability` | 压力边界材料和永久连接 | 保留适用于所制造设备的材料证明、炉批或批次追溯、焊接工艺和耗材身份。 | 材料质量证明、焊缝图、工艺评定和库房记录 |
| `dq_measurement` | 所有实测流 | 使用经校准或核实的表计和衡器；保留原始单位和转换输入；把估算和分配与直接测量分开记录。 | 校准记录、发票、表计日志和计算工作簿 |
| `dq_temporal_scope` | 前景数据集 | 覆盖一个完整且有代表性的生产订单或有文件依据的一组订单；使所有分子流与已验收产品质量对应同一期间。 | 生产计划、订单结算和时间核对 |
| `dq_completeness` | 前景清单 | 核对物料清单、能源、水、废物和直接排放记录；识别被排除操作并量化或说明每项截断。 | 完整性检查表、衡算和签字排除记录 |
| `dq_outsourced_operations` | 外包制造、热处理、涂装或试验 | 纳入外包操作的投入和输出，或使用有代表性的上游服务数据集；不得因操作发生在场外而省略。 | 采购订单、承包商记录和边界声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考流 | 确认仅有一个 1 kg 参考产品输出使用经审核的 CPC 42330 UUID、Mass 属性和 kg 单位，并确认可拆卸包装不计入产品净质量。 | `un-cpc-3-0-2025` |
| `validate_identity_qualifiers` | 数据集元数据 | 缺少产品子类、名称、技术规范、材料牌号、制造地理范围、工厂验收状态或适用压力/设计限定信息时，完整性校验失败。 | `uk-pressure-equipment-guidance-2025`, `doosan-steam-condensers-heat-exchangers` |
| `validate_atomic_inventory` | 过程清单 | 确认每个清单行只表示一个原子交换；每个条件行有已记录的适用路线；带 UUID 的行匹配流类型、属性和单位；未解决的板材 UUID 仍明确标记。 |  |
| `validate_mass_balance` | 金属投入、产品和废料 | 审查订单层级材料核对；对于超过场址所记录测量不确定度的差额，必须提供解释。 |  |
| `validate_energy_water_balance` | 电力、气体和水 | 确认表计、分配驱动因素、参考条件、密度换算、水回用和归一化均对应同一生产期间和已验收输出。 |  |
| `validate_direct_emissions` | 化石二氧化碳 | 确认该行只含场址内天然气燃烧直接排放，且因子或碳平衡有引用并适用于前景场址和期间。 |  |
| `validate_pressure_controls` | 承压设备 | 确认已保留所声明符合性路线要求的连接资质、无损检测、最终检验以及压力或泄漏试验证据。 | `uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经方法审查和数据集核验后为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 完整 CPC 42330 锅炉辅助设备或蒸汽/其他蒸气动力装置用冷凝器的从摇篮到工厂大门过程数据集及生命周期模型投入 |
| allowed_use | 产品和路线相匹配，且承压状态、设计/符合性基础、材料体系、制造地理范围、工厂门口状态和包装边界可比的设备 |
| excluded_use | 锅炉、汽轮机、阀门、独立泵或风机、单独供应的零件、客户现场安装、运行性能、维护、改造和寿命终止；除非增加相应情景数据 |
| required_metadata | PCR id 和版本；产品子类；型号或项目；技术规范；压力/设计限定信息；材料牌号；产品净质量；制造场址和期间；路线和外包操作；分配；数据源；截断；包装和试验边界 |
| required_quality_disclosure | 初级数据占比；测量和分配方法；未解决 UUID；缺失的双源范围；材料、能源和水平衡；因子引用；代表性；不确定性和核验状态 |
| update_trigger | 产品设计、质量或牌号，制造路线、供应商、场址、能源结构、试验制度、包装、分配、适用符合性要求、前景期间或背景数据发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 正式 CPC 42330 身份，以及相邻完整设备/零件边界区别 |
| `un-hs-2017-heading-8404` | `official_guidance` | 联合国统计司，HS 2017 品目 8404 详情，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/en/2089/84（检索日期 2026-09-05） | 锅炉辅助设备示例及蒸汽或其他蒸气动力装置用冷凝器边界 |
| `china-mofcom-hs-8404-nomenclature` | `official_guidance` | 中华人民共和国商务部，税则号列 84041010 和 84042000，https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=9727（检索日期 2026-09-05） | 核验专业中文产品术语 |
| `uk-pressure-equipment-guidance-2025` | `official_guidance` | 英国 Office for Product Safety and Standards，Pressure Equipment (Safety) Regulations 2016: Great Britain，2025 年 3 月，https://www.gov.uk/government/publications/pressure-equipment-safety-regulations-2016/pressure-equipment-safety-regulations-2016-great-britain（检索日期 2026-09-05） | 承压设备范围、制造商文件、符合性、永久连接和无损检测控制 |
| `uk-hse-ndt-pressure-equipment` | `official_guidance` | 英国 Health and Safety Executive，Inspection/Non Destructive Testing，https://www.hse.gov.uk/comah/sragtech/techmeasndt.htm（检索日期 2026-09-05） | 成形和坡口制备、永久接头、无损检测、最终检验及压力试验过程分解 |
| `uk-hse-pressure-testing-gs4` | `official_guidance` | 英国 Health and Safety Executive，Safety requirements for pressure testing，GS4 第四版，2012，https://www.hse.gov.uk/pubns/gs4.htm（检索日期 2026-09-05） | 工厂压力试验边界和试验记录质量要求 |
| `doosan-steam-condensers-heat-exchangers` | `handbook` | Doosan Enerbility，Turbine and Generator Technologies — Condensers and heat exchangers，https://www.doosanenerbility.com/heavy_file/business/data/fire_power/Doosan_STG_Brochure.pdf（检索日期 2026-09-05） | 蒸汽冷凝器变型、管材/冷却水限定信息及承压设备设计规范披露 |

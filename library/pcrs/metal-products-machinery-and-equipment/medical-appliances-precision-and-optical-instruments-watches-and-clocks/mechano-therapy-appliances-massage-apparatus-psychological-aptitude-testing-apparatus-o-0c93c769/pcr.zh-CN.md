---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.mechano-therapy-appliances-massage-apparatus-psychological-aptitude-testing-apparatus-o-0c93c769
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 机械治疗、按摩、能力测试、治疗性呼吸及其他呼吸器具与防毒面具

## 1. 范围与适用性

本 PCR 适用于机械治疗器具、按摩器、心理能力测试器具、臭氧治疗、氧气治疗和气溶胶治疗器具、人工呼吸及其他治疗性呼吸器具、其他呼吸器具以及防毒面具等成品的制造。范围包括机械结构完整的器具及声明产品配置中随附的一体化附件。由于本类别包含电动、气动、机械式、可重复使用、一次性、无菌、非无菌、过滤空气和外部供气等物质构成明显不同的产品，前景数据包必须针对具体型号和路线。

本 PCR 不包括既无机械部件也无可更换过滤器的防护面具、单独销售的药用或工业气体、单独销售的气瓶、单独销售的替换过滤器或通用部件，以及超出所述产品边界的其他医疗、外科或诊断设备。随参考器具交付的部件或替换件仍作为该器具的投入或随附附件，不得作为第二个参考产品报告。

默认数据集边界为从摇篮到工厂大门：采购的材料和部件带上游数据集进入；实际前景制造、装配、处理、测试和包装一直记录到合格产品准备离开制造场址。分销、安装、使用、维护和生命终结不属于本前景数据集；下游研究在相关时必须另行明确加入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.mechano-therapy-appliances-massage-apparatus-psychological-aptitude-testing-apparatus-o-0c93c769 |
| classification_refs | CPC 3.0: 48160 — 机械治疗器具；按摩器；心理能力测试器具；臭氧治疗、氧气治疗、气溶胶治疗、人工呼吸或其他治疗性呼吸器具；其他呼吸器具及防毒面具（不包括既无机械部件也无可更换过滤器的防护面具） |
| covered_products | 机械治疗和按摩器具成品；心理能力测试器具；臭氧、氧气和气溶胶治疗器具成品；人工呼吸及其他治疗性呼吸器具；呼吸器具；具有机械部件和/或可更换过滤器的防毒面具 |
| excluded_products | 既无机械部件也无可更换过滤器的简单防护面具；单独销售的气体和气瓶；单独销售的替换过滤器及通用部件；无关的医疗、外科、兽医或诊断设备 |
| representative_product | 所声明的具体型号成品配置；鉴于功能、结构、质量、能源、处理状态和使用寿命差异显著，不预设类别平均器具 |
| production_route | 采购材料和部件和/或内部部件制备 → 装配与集成 → 条件适用的清洁、消毒或灭菌 → 最终测试、校准和包装 |
| market_state | 声明销售配置下的新制合格成品，工厂生产混合；产品净质量与包装质量分开 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂大门提供具有声明的机械治疗、按摩、能力测试、治疗性呼吸、呼吸防护或防毒面具功能的成品器具 |
| How much | 1 kg 合格成品器具净质量，包括声明配置内的一体化部件和附件，不包括运输和销售包装 |
| How well | 所声明型号满足记录的预期功能、性能规范和最终验收准则，并保持适用的无菌状态、呼吸防护或供气特征 |
| How long or cycle | 一个完整生产批次归一化为 1 kg 合格产出；声明的使用寿命、使用次数或治疗周期是必需限定信息，不用于换算质量参考 |
| reference_flow_link | 最终测试及任何必要清洁或灭菌之后、离开制造工厂之前的合格产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 机械治疗设备，按摩设备，心理倾向测验设备，臭氧疗、氧疗、气雾疗、人工呼吸或其他治疗呼吸器械，其他呼吸器械及防毒面具（不包括既无机械零件又无可更换过滤器的保护用面具)） `de3969a1-8fd2-433a-979d-176043362c2e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 器具族与预期功能；型号和配置；电动、气动或机械式工作原理；可重复使用或一次性状态；声明使用寿命或治疗周期基准；产品净质量；随附附件和耗材；无菌或非无菌状态；清洁或消毒状态；适用时的过滤、供气或供给气体模式；适用时的过滤等级或声明防护类型；适用时的气体接触材料；电池和电子配置；包装配置与包装质量；生产路线；制造场址和地理；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用合格成品器具的实测净质量。参考数量不含运输和销售包装；包装作为独立清单投入报告。 |
| `batch_normalisation` | 所有前景清单行 | 行特定属性 | 行特定 SI 单位 | 每个批次合计量除以同一批次或经协调生产期间的合格产品净质量，以表示每 1 kg 参考产品的数量。 |
| `item_to_mass_conversion` | 按件记录的部件、附件和包装 | Mass | kg | 只有具有型号及批次特定的实测单件质量时才能从件数换算质量，并保留件数、样本量和秤具证据。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽、压缩空气和供给气体 | 载能体特定的能量、质量或体积属性 | 载能体特定 SI 单位 | 每种能源或气体载体作为独立流保留；除非保留换算基准和原始数量，不得合并成单一能源总量。 |
| `gas_volume_conditions` | 按体积计量的工艺或测试气体 | Volume | m3 | 记录参考温度、压力和仪表基准；不得把未限定的标况或标准立方米与实际立方米视为可互换。 |
| `packaging_separation` | 初级、次级和运输包装 | Mass | kg | 按材料和包装层级记录。包装质量不得计入器具净质量参考。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 材料、采购部件、子组件、附件和包装在声明制造场址接收，并具有身份、数量及上游数据集链接 |
| starting_condition_role | 进入前景制造系统的从摇篮到工厂大门上游产品投入 |
| product_classification_scope | 第 2 节所述成品器具边界，不因具体型号属于医用电气设备、非电动治疗器具或呼吸防护 PPE 而改变 |
| recursive_input_rule | 已属于同一成品器具类别的投入必须作为具有自身上游数据集的可见产品投入保留，不得在本前景包内递归展开 |
| upstream_dataset_requirement | 每种采购材料、部件、子组件、附件、能源载体、处理介质和包装投入都需要技术、地理和时间上有代表性的上游数据集，或明确记录数据缺口 |
| disclosure | 声明实际制造场址、路线步骤、外包操作、无菌或非无菌状态、呼吸防护或供气模式、随附附件、包装边界、排除的下游阶段及任何未建模路线步骤 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 从摇篮到工厂大门前景包 | 纳入从接收投入到合格、经测试和包装的器具之间所有实际现场及直接控制过程；采购投入链接上游数据集，并论证每项排除。 | `eu-pef-2021`; `ghg-protocol-product-standard` |
| `sb_route_specificity` | 型号和生产路线 | 仅纳入实际发生的路线步骤，但不得因外包而遗漏物质过程；外包制备、处理或测试仍通过采购服务或上游数据集表示。 | `eu-mdr-2017`; `eu-pef-2021` |
| `sb_treatment_controls` | 清洁、消毒、灭菌及气体接触加工 | 声明产品路线采用相关处理时，纳入处理介质、能源、水、循环损失、残余物处理和验证相关不合格品。 | `eu-mdr-2017` |
| `sb_respiratory_configuration` | 防毒面具及其他呼吸器具 | 区分过滤受污染空气与外部供应可呼吸空气，并披露可更换过滤器、供气、供给气体和缺氧环境适用性；不得用一种配置作为另一种配置的未声明代理。 | `eu-ppe-2016-425-consolidated-2026` |
| `sb_downstream_separation` | 分销、安装、使用、维护和生命终结 | 本前景生产包排除下游阶段并明确披露；完整产品研究必须另行加入适用阶段和情景。 | `iec-60601-1-9-2007`; `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | 内部部件与零件制备 | conditional | 当前景场址对原材料或半成品零件进行成形、机械加工、模塑、涂覆、连接、清洁或其他转化时纳入 | 前景部件制造 | 转入装配的合格制备部件或零件 kg |
| `assembly_integration` | 器具装配与集成 | required | 对机械结构完整的成品器具始终纳入 | 前景生产与集成 | 转入处理或最终测试的已装配器具 kg |
| `cleaning_sterilisation` | 清洁、消毒或灭菌 | conditional | 声明路线包含清洁、消毒、微生物状态控制或灭菌时纳入 | 前景调理与经验证处理 | 从处理步骤放行的已处理器具 kg |
| `final_testing_packaging` | 最终测试、校准、验收与包装 | required | 始终纳入最终验收和声明包装操作；适用时纳入校准及测试介质 | 前景质量放行与工厂大门完工 | 合格成品器具净质量 kg |

### 过程：内部部件与零件制备（`component_preparation`）

#### 输入

##### 产品流

###### 原材料和半成品零件（`preparation_material_inputs`）

将前景场址转化的每种金属、聚合物、弹性体、纺织品、吸附剂、电子基材、涂层材料或其他材料作为独立产品投入记录。

- 选定流：精确的材料或零件特定 Tiangong 产品流；不得以成品器具参考流作为代理
- 流属性/单位：Mass / kg
- 数量规则：按材料和批次，实测领用量减去已记录退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 制备电力和能源载体（`preparation_energy`）

将内部零件制备用电、燃料、蒸汽、压缩空气或其他能源载体作为载体特定的独立投入记录。

- 选定流：精确的载能体特定 Tiangong 产品流
- 流属性/单位：载能体特定能量、质量或体积属性 / 对应 SI 单位
- 数量规则：实测生产线用量，或依据 `calc_shared_utility_allocation` 分配的共用仪表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_utility_records`
- 来源：

###### 工艺水和制备辅助材料（`preparation_water_auxiliaries`）

当水、润滑剂、冷却剂、脱模剂、涂料、胶黏剂、清洗剂及其他制备辅助材料跨越前景边界时，分别记录。

- 选定流：精确的水或辅助材料特定 Tiangong 产品流
- 流属性/单位：按实测使用 Mass / kg 或 Volume / m3
- 数量规则：归属于声明制备路线的实测取用、领用或采购量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_consumable_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的制备部件（`prepared_components`）

记录转入器具装配的内部制备合格部件质量；质量平衡或上游链接需要时按部件族分开。

- 选定流：为数据包解析的部件或零件特定产品流
- 流属性/单位：Mass / kg
- 数量规则：转入装配的实测或计算合格部件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_output_records`
- 来源：

##### 废物流

###### 制备废料和不合格品（`preparation_scrap`）

按废物身份和去向分别记录金属、聚合物、复合材料、纺织品、电子及混合废料或不合格零件。

- 选定流：精确的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：离开制备过程的实测废物或不合格品质量，扣除已记录返回过程的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_waste_records`
- 来源：

##### 基本流

###### 制备过程直接排放（`preparation_direct_emissions`）

仅记录声明制备操作向空气、水或土壤的实测或有计算支持的排放，例如颗粒物、溶剂或工艺水排放；不得创建通用默认排放。

- 选定流：每种排放物质和环境介质的精确基本流
- 流属性/单位：Mass / kg
- 数量规则：监测排放，或依据采集活动数据和有引文的物质特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：

### 过程：器具装配与集成（`assembly_integration`）

#### 输入

##### 产品流

###### 采购及制备的部件（`assembly_components`）

记录型号特定的材料清单，包括框架、外壳、执行器、泵、阀、软管、面罩、随器具提供的过滤器、电子件、传感器、控制器、显示器、电池、线束、紧固件和其他随附部件。

- 选定流：精确的部件特定 Tiangong 产品流；内部制备部件作为可见中间投入保留
- 流属性/单位：Mass / kg
- 数量规则：部件数量乘以经核验单件质量，并与领用和退回记录协调
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 装配辅助材料和耗材（`assembly_auxiliaries`）

将装配消耗的胶黏剂、焊料、连接耗材、润滑剂、清洁擦拭物、防护膜及其他材料作为独立产品流记录。

- 选定流：精确的辅助材料特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：实测领用或采购量减去已记录未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_consumable_records`
- 来源：

###### 装配电力和公用工程（`assembly_energy`）

记录装配和集成使用的载体特定电力、压缩空气、工艺气体、热或其他公用工程。

- 选定流：精确的载能体特定 Tiangong 产品流
- 流属性/单位：载能体特定能量、质量或体积属性 / 对应 SI 单位
- 数量规则：实测过程用量，或依据 `calc_shared_utility_allocation` 分配的共用仪表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_utility_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入下一路线步骤的已装配器具（`assembled_apparatus`）

记录转入处理或直接转入最终测试的已装配器具净质量和数量。

- 选定流：为数据包解析的型号特定中间器具产品流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，并与件数和型号特定净质量协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_output_records`
- 来源：

##### 废物流

###### 装配废物和不合格部件（`assembly_waste`）

按废物身份和去向分别记录不合格部件、边角料、连接残余、防护膜及混合装配废物。

- 选定流：精确的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，扣除已记录返工和退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste_records`
- 来源：

##### 基本流

###### 装配过程直接排放（`assembly_direct_emissions`）

仅记录焊接、粘接、熔接或其他装配操作的物质特定实测或有计算支持的排放。

- 选定流：每种排放物质和环境介质的精确基本流
- 流属性/单位：Mass / kg
- 数量规则：监测排放，或依据采集活动数据和有引文的物质特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：

### 过程：清洁、消毒或灭菌（`cleaning_sterilisation`）

#### 输入

##### 产品流

###### 进入处理的器具（`treatment_apparatus_input`）

记录进入每条声明清洁、消毒或灭菌路线的已装配器具质量和数量。

- 选定流：为数据包解析的型号特定中间器具产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次装载质量，并与件数协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已处理器具产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_batch_records`
- 来源：

###### 处理用水、介质和耗材（`treatment_media`）

分别记录水、洗涤剂、消毒剂、灭菌剂、工艺气体、包裹材料、指示物及其他路线特定处理投入。

- 选定流：精确的介质或耗材特定 Tiangong 产品流
- 流属性/单位：按实测使用 Mass / kg 或 Volume / m3
- 数量规则：实测循环消耗量，仅在该循环验收合格的装载物之间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已处理器具产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_consumable_records`
- 来源：

###### 处理电力、热和公用工程（`treatment_energy`）

将每个处理循环的电力、蒸汽、热、压缩空气或其他公用工程作为载体特定独立流记录。

- 选定流：精确的载能体特定 Tiangong 产品流
- 流属性/单位：载能体特定能量、质量或体积属性 / 对应 SI 单位
- 数量规则：实测循环用量，或经验证设备循环记录，并在验收合格处理产出之间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已处理器具产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_utility_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行至最终测试的已处理器具（`treated_apparatus`）

记录验收合格的已处理器具质量，以及达到的声明微生物、清洁或灭菌状态。

- 选定流：为数据包解析的型号特定已处理器具产品流
- 流属性/单位：Mass / kg
- 数量规则：处理及处理放行检查后的实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已处理器具产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_output_records`
- 来源：

##### 废物流

###### 处理废水、废介质和不合格装载（`treatment_waste`）

按废物身份和去向记录废水、废处理化学品或介质、用过的指示物以及不合格器具或包装。

- 选定流：精确的废物特定 Tiangong 流
- 流属性/单位：按实测使用 Mass / kg 或 Volume / m3
- 数量规则：处理循环的实测排放量或废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已处理器具产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_waste_records`
- 来源：

##### 基本流

###### 处理过程直接排放（`treatment_direct_emissions`）

仅记录处理物质向空气、水或土壤的监测排放或有计算支持的排放，并明确实际物质和环境介质。

- 选定流：每种排放物质和环境介质的精确基本流
- 流属性/单位：Mass / kg
- 数量规则：监测排放，或依据采集的处理消耗、捕集记录和有引文的物质特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已处理器具产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：

### 过程：最终测试、校准、验收与包装（`final_testing_packaging`）

#### 输入

##### 产品流

###### 进入最终验收的器具（`final_test_apparatus_input`）

记录进入型号特定最终测试和验收的已装配或已处理器具。

- 选定流：为数据包解析的型号特定中间器具产品流
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量，并与序列号、批号或批次数量协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_acceptance_records`
- 来源：

###### 测试介质、气体和耗材（`test_media`）

记录跨越最终测试边界的测试气体、测试中消耗的过滤器、校准介质、测试负载、标签及其他耗材。

- 选定流：精确的介质或耗材特定 Tiangong 产品流
- 流属性/单位：载体特定质量或体积属性 / 对应 SI 单位
- 数量规则：归属于声明生产期间合格和不合格单元的实测领用量或计量用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_test_consumable_records`
- 来源：

###### 最终测试电力和公用工程（`final_test_energy`）

将校准、泄漏测试、老化和最终验收使用的电力、压缩空气、真空服务、供给气体或其他公用工程作为独立流记录。

- 选定流：精确的载能体特定 Tiangong 产品流
- 流属性/单位：载能体特定能量、质量或体积属性 / 对应 SI 单位
- 数量规则：实测测试单元用量，或依据 `calc_shared_utility_allocation` 分配的共用仪表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_test_utility_records`
- 来源：

###### 包装材料（`packaging_materials`）

按材料和包装层级记录初级、次级及运输包装，包括说明书和随附防护衬垫。

- 选定流：精确的包装材料特定 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：包装数量乘以经核验单件质量，或直接实测包装材料领用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品器具（`finished_apparatus`）

这是定量参考产出。仅记录最终验收放行的合格器具净质量；包装质量保持独立。

- 选定流：机械治疗设备，按摩设备，心理倾向测验设备，臭氧疗、氧疗、气雾疗、人工呼吸或其他治疗呼吸器械，其他呼吸器械及防毒面具（不包括既无机械零件又无可更换过滤器的保护用面具)） `de3969a1-8fd2-433a-979d-176043362c2e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测合格批次净产出归一化后恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_output_records`
- 来源：

##### 废物流

###### 最终测试不合格品和包装废物（`final_rejects_packaging_waste`）

按废物身份和去向分别记录不合格单元、更换零件、废测试物和包装边角料或不合格品；返工单元除非作为废物离开过程，否则不属于废物。

- 选定流：精确的废物特定 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：最终测试和包装的实测废物或不合格品质量，扣除已记录返回过程的返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_waste_records`
- 来源：

##### 基本流

###### 最终测试直接排放（`final_test_direct_emissions`）

仅记录气体、气溶胶、泄漏、老化或其他最终测试操作的实测或有计算支持的排放，并明确物质和环境介质。

- 选定流：每种排放物质和环境介质的精确基本流
- 流属性/单位：Mass / kg
- 数量规则：监测排放，或依据采集的测试消耗、回收记录和有引文的物质特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品器具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 可分离产品、生产线、批次和路线步骤 | 只要能够隔离研究器具，就通过过程细分、独立计量、独立批记录或重新界定过程边界避免分配。 | `ghg-protocol-product-standard` |
| `allocation_physical_causal` | 不可避免的共用公用工程、处理装载和共同过程 | 采用反映因果关系的有记录物理关系分配，例如计量用量、机器时间、处理循环占用、测试时间或其他工程驱动；只有质量驱动共用负荷时才可按质量分配。 | `ghg-protocol-product-standard` |
| `allocation_economic_fallback` | 不具备可辩护物理关系的共同过程 | 仅在无法细分和物理分配时使用经济关系或其他有论证的关系，并披露因子、数据期间和敏感性。 | `ghg-protocol-product-standard` |
| `allocation_waste_recycling` | 废料、不合格品、废介质和回收材料 | 保持废物产出和处理负荷可见。前景包不得采用未声明的再生或替代产品抵扣；任何下游再生分配必须另行一致说明。 | `ghg-protocol-product-standard`; `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_material_records` | component_preparation; assembly_integration | 原材料、零件和部件 | 受控 BOM、领用与退回记录 | 型号；版本；零件 id；材料身份；供应商；数量；单件质量；领用质量；退回质量；批号；日期 | 协调受控 BOM、仓库领用退回及抽样或全量称量 | item; kg | 每次 BOM 变更及生产批次 | 完整声明生产期间 | 提供参考产出的所有场址 | 按精确流汇总净领用质量并按合格净产出质量归一 | BOM 审批、秤具校准、供应商规格、领用与退回追踪 |
| `cp_preparation_utility_records` | component_preparation | 制备能源 | 仪表与设备日志 | 仪表 id；载能体；起止读数；机器时间；批次；分配驱动 | 优先直接分表，否则协调共用仪表和因果驱动 | kWh; MJ; kg; m3 | 每批次或仪表期间 | 完整声明生产期间 | 所有内部制备线 | 按载能体汇总用量，仅依据第 7 节分配 | 仪表校准、公用工程账单和机器日志 |
| `cp_preparation_consumable_records` | component_preparation | 水和辅助材料 | 仪表、采购、领用与退回记录 | 流 id；材料名称；批次；期初库存；收货；领用；退回；期末库存 | 按精确材料进行计量或物料平衡协调 | kg; m3 | 每批次和库存期间 | 完整声明生产期间 | 所有内部制备线 | 按材料计算净消耗并协调库存变动 | 仪表校准、库存协调和批次追踪 |
| `cp_preparation_output_records` | component_preparation | 合格制备部件 | 生产转移记录 | 部件 id；合格件数；单件质量；合格质量；不合格品；目的地；批次 | 称量或由经核验单件质量和合格件数计算 | item; kg | 每转移批次 | 完整声明生产期间 | 所有内部制备线 | 按部件族汇总合格质量 | 转移记录、秤具检查和验收记录 |
| `cp_preparation_waste_records` | component_preparation | 制备废料和不合格品 | 废物日志与转移单 | 废物身份；来源批次；毛重；皮重；净质量；返回过程；去向 | 校准称量并与去向协调 | kg | 每次废物转移 | 完整声明生产期间 | 所有内部制备线 | 按身份和去向汇总净废物 | 秤具校准、废物单和承包商收据 |
| `cp_assembly_consumable_records` | assembly_integration | 装配辅助材料 | 领用、退回与库存记录 | 辅助材料 id；批号；期初库存；领用；退回；期末库存；批次 | 按精确辅助材料进行物料平衡 | kg | 每批次和库存期间 | 完整声明生产期间 | 所有装配场址 | 计算净用量并按合格产出归一 | 库存协调和批次追踪 |
| `cp_assembly_utility_records` | assembly_integration | 装配公用工程 | 仪表与生产日志 | 载能体；仪表 id；读数；批次；生产线时间；分配驱动 | 优先直接分表，否则使用经协调共用仪表 | kWh; MJ; kg; m3 | 每批次或仪表期间 | 完整声明生产期间 | 所有装配线 | 按载能体汇总用量，仅依据第 7 节分配 | 仪表校准、账单和生产线日志 |
| `cp_assembly_output_records` | assembly_integration | 已装配器具 | 序列号、批号与转移记录 | 型号；序列号或批号；件数；单件净质量；转移质量；日期；下一路线步骤 | 校准称量并与序列号或批号协调 | item; kg | 每转移批次 | 完整声明生产期间 | 所有装配场址 | 按型号和路线汇总合格转移质量 | 秤具校准、放行签字和序列号或批号追踪 |
| `cp_assembly_waste_records` | assembly_integration | 装配废物 | 废物与返工日志 | 废物身份；不合格部件；批次；质量；返工返回；去向 | 校准称量并协调返工 | kg | 每批次和废物转移 | 完整声明生产期间 | 所有装配场址 | 汇总净废物，不含已记录返回过程的返工 | 废物单、返工关闭和秤具校准 |
| `cp_treatment_batch_records` | cleaning_sterilisation | 进入处理的器具 | 处理装载记录 | 处理路线；设备 id；装载 id；型号；件数；装载质量；起止时间 | 受控装载记录并与器具转移协调 | item; kg | 每处理装载 | 完整声明生产期间 | 每个处理场址，包括外包场址 | 按路线汇总投入装载并协调合格和不合格产出 | 经验证装载记录和转移追踪 |
| `cp_treatment_consumable_records` | cleaning_sterilisation | 处理介质和耗材 | 循环消耗与领用记录 | 装载 id；介质 id；水；化学品或气体数量；包裹；指示物；回收量 | 计量、加药记录或经协调物料领用 | kg; m3; item | 每处理装载 | 完整声明生产期间 | 每条处理路线和场址 | 按装载汇总精确投入并除以合格处理产出 | 加药校准、批次证书和循环记录 |
| `cp_treatment_utility_records` | cleaning_sterilisation | 处理公用工程 | 设备循环与仪表记录 | 装载 id；电力；蒸汽；热；压缩空气；循环时长；合格装载 | 专用仪表或经验证设备循环记录 | kWh; MJ; kg; m3 | 每处理装载 | 完整声明生产期间 | 每条处理路线和场址 | 按循环汇总公用工程并仅在合格装载之间分配 | 仪表校准、设备验证和循环日志 |
| `cp_treatment_output_records` | cleaning_sterilisation | 已处理器具 | 处理放行记录 | 装载 id；型号；件数；合格质量；不合格质量；达到状态；放行决定 | 称量合格产出并与放行记录协调 | item; kg | 每处理装载 | 完整声明生产期间 | 每条处理路线和场址 | 按声明状态汇总合格处理质量 | 放行签字、验证结果和装载协调 |
| `cp_treatment_waste_records` | cleaning_sterilisation | 处理废物 | 排放、废物与不合格装载记录 | 装载 id；废水体积；废介质；废物身份；不合格质量；去向 | 仪表、校准称量和废物转移协调 | kg; m3 | 每装载或排放事件 | 完整声明生产期间 | 每条处理路线和场址 | 按废物身份和去向汇总 | 排放仪表、废物单和装载记录 |
| `cp_final_acceptance_records` | final_testing_packaging | 进入并通过最终验收的器具 | 序列号、批号、校准及最终测试记录 | 型号；序列号或批号；投入件数和质量；测试路线；结果；返工；不合格；放行 | 受控最终测试记录并与生产产出协调 | item; kg | 每测试单元或批次 | 完整声明生产期间 | 所有最终测试场址 | 按型号协调投入、合格、返工和不合格状态 | 测试系统校准、批准和可追溯测试结果 |
| `cp_final_test_consumable_records` | final_testing_packaging | 测试介质和耗材 | 测试单元仪表与物料领用记录 | 测试 id；气体或介质；起止读数；领用；回收；退回量 | 按测试路线直接计量或物料平衡 | kg; m3; item | 每测试或批次 | 完整声明生产期间 | 所有最终测试场址 | 按精确流汇总合格和不合格测试的净用量 | 仪表校准、气瓶或物料协调和测试日志 |
| `cp_final_test_utility_records` | final_testing_packaging | 最终测试公用工程 | 仪表和设备日志 | 仪表 id；载能体；读数；测试时长；单元或批次；分配驱动 | 优先直接分表，否则使用经协调共用仪表 | kWh; MJ; kg; m3 | 每测试批次或仪表期间 | 完整声明生产期间 | 所有最终测试场址 | 按载能体汇总，仅依据第 7 节分配 | 仪表校准、设备日志和公用工程协调 |
| `cp_packaging_records` | final_testing_packaging | 包装材料 | 包装规格、领用与称量记录 | 包装层级；材料 id；包装数量；单件质量；领用质量；未用退回 | 经核验单件质量乘数量，或直接领用称量 | item; kg | 每包装配置和批次 | 完整声明生产期间 | 所有包装场址 | 按材料和层级汇总净包装质量 | 已批准规格、秤具校准和领用记录 |
| `cp_finished_output_records` | final_testing_packaging | 合格成品器具 | 生产放行与称量记录 | 型号；配置；序列号或批号；合格件数；包装毛重；包装质量；器具净质量；放行日期 | 校准净重称量，或毛重减经核验包装质量计算 | item; kg | 每放行批次 | 完整声明生产期间 | 所有参考产出放行场址 | 汇总合格净质量；该值为归一化分母 | 秤具校准、放行批准、包装协调和序列号或批号追踪 |
| `cp_final_waste_records` | final_testing_packaging | 不合格品和包装废物 | 不合格、返工和废物转移记录 | 型号；零件或废物身份；质量；返工状态；处置；去向 | 校准称量并关闭返工记录 | kg | 每批次和废物转移 | 完整声明生产期间 | 所有最终测试和包装场址 | 汇总净废物，不含已关闭并返回生产的返工 | 不合格处置、废物单和秤具校准 |
| `cp_direct_emission_records` | component_preparation; assembly_integration; cleaning_sterilisation; final_testing_packaging | 直接排放 | 监测结果或计算工作表 | 过程；物质；环境介质；样本或仪表结果；活动数据；因子；因子来源；捕集或回收；期间 | 优先直接监测，否则依据采集活动和有引文的物质特定因子计算 | kg; m3; concentration unit | 每监测事件或计算期间 | 完整声明生产期间 | 每个具有直接排放的场址 | 计算物质特定排放质量并按对应合格产出归一 | 实验室报告、仪器校准、因子引文和计算复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 每个前景数量 | 归一化数量 = 经协调期间或批次数量 / 同一范围合格成品器具净质量 | 适用采集协议；`cp_finished_output_records` | 每 1 kg 成品器具的行特定数量 |  |
| `calc_component_mass` | 按件记录的部件和附件 | 部件质量 = 合格件数 × 经核验型号及批次特定单件质量；与净领用质量协调 | `cp_bom_material_records` | 每参考流 kg 部件 |  |
| `calc_packaging_mass` | 按件记录的包装 | 包装质量 = 包装数量 × 经核验单件质量，并按材料和包装层级分开 | `cp_packaging_records` | 每参考流 kg 包装材料 |  |
| `calc_shared_utility_allocation` | 共用仪表和共同设备 | 分配量 = 经协调共用量 × 有记录因果驱动份额；优先直接计量、机器时间、循环占用或测试时间，仅在质量驱动消耗时用质量 | 公用工程协议；生产或设备日志 | 每参考流的载能体特定分配量 | `ghg-protocol-product-standard` |
| `calc_direct_release` | 计算的直接排放 | 排放质量 = 采集活动 × 有引文物质特定因子 ×（1 − 实测捕集或回收比例）；保留因子来源和全部输入单位 | `cp_direct_emission_records` | 每参考流向声明环境介质排放的物质 kg |  |
| `calc_mass_reconciliation` | 每个过程及完整前景包 | 协调投入质量 = 产品产出 + 废物产出 + 实测基本流排放 + 已记录库存变动；调查并披露未解释差额，不得强制平衡 | 材料、产出、废物和直接排放协议 | 质量平衡检查及未解释差额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和所有批次 | 记录必须识别型号、配置、预期功能、路线、随附附件、无菌或非无菌状态、适用的呼吸配置、制造场址和生产期间。 | 受控产品规格、BOM 版本、路线记录和放行记录；`eu-mdr-2017`; `eu-ppe-2016-425-consolidated-2026` |
| `dq_temporal_coverage` | 前景记录 | 覆盖有代表性的连续生产期间或声明生产活动的全部批次；披露起止时间、停产、异常批次和季节或活动限制。 | 带日期的仪表、生产、库存和废物记录 |
| `dq_completeness` | 所有纳入过程和流 | 协调 BOM、公用工程、处理、测试、产出和废物记录；记录缺失流、排除场址和未解决质量平衡差额。 | 完整性清单、质量协调和排除日志 |
| `dq_measurement` | 质量、能源、气体、水和排放测量 | 使用量程和分辨率适合所测数量的已校准或核验仪器；保留仪表基准以及气体体积的温度或压力条件。 | 校准证书、仪表 id 和测量记录 |
| `dq_supplier_upstream` | 采购材料、部件和外包服务 | 可得时使用匹配实际材料或部件身份、供应商技术、地理和期间的上游数据集；披露代理使用及限制。 | 供应商规格、采购记录、数据集元数据及 `eu-pef-2021` 数据质量评估 |
| `dq_factor_traceability` | 计算排放或公用工程换算 | 每个非物理因子必须具有命名来源、适用技术和期间、原始单位及计算轨迹；不允许无支持默认因子。 | 因子来源和经复核计算工作表 |
| `dq_allocation` | 共用过程和公用工程 | 保留未分配总量、分配驱动、因子、期间、受影响产出，以及任何非物理基准的敏感性或论证。 | 仪表总量、生产驱动记录和分配工作表；`ghg-protocol-product-standard` |
| `dq_representativeness` | 完整数据集 | 对显著过程评估并披露技术、地理和时间代表性、完整性与精度。 | 数据质量评估和改进日志；`eu-pef-2021`; `ghg-protocol-product-standard` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别和参考流 | 声明产品必须属于第 2 节，不得为 CPC 48160 排除的简单防护面具，并必须使用精确流 `de3969a1-8fd2-433a-979d-176043362c2e`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及单位 kg。 |  |
| `validate_qualifiers` | 参考产品元数据 | 必须提供适用于型号和路线的全部必需限定信息；不适用必须明确填写，不得留空。 | `eu-mdr-2017`; `eu-ppe-2016-425-consolidated-2026` |
| `validate_reference_mass` | 定量参考 | 归一化后的合格成品器具产出必须恰为 1 kg，包装质量必须保持在净参考数量之外。 |  |
| `validate_process_coverage` | 前景系统边界 | 必须存在 `assembly_integration` 和 `final_testing_packaging`；每条实际部件制备或清洁、消毒、灭菌路线必须纳入，或以具有场址和数据集记录的上游采购服务表示。 | `eu-mdr-2017`; `eu-pef-2021` |
| `validate_inventory_production` | 所有非参考清单行 | 每个数量必须来自命名采集协议或由采集记录透明计算；拒绝类别级默认数量和无引文排放因子。 | `ghg-protocol-product-standard` |
| `validate_respiratory_route` | 呼吸器具和防毒面具 | 数据集必须区分过滤受污染空气与外部供应可呼吸空气或气体，并识别可更换过滤器及缺氧环境适用性。 | `eu-ppe-2016-425-consolidated-2026` |
| `validate_treatment_route` | 无菌、消毒或清洁器具 | 产品声明相应状态时，必须提供处理路线、经验证方法、装载基准、处理介质、合格产出以及处理废物或排放。 | `eu-mdr-2017` |
| `validate_allocation` | 共用过程负荷 | 分配必须遵循第 7 节并披露总量、驱动、因子和受影响产品；无支持的经济分配或未披露再生抵扣导致校验失败。 | `ghg-protocol-product-standard`; `eu-pef-2021` |
| `validate_data_quality` | 完整前景包 | 必须披露时间覆盖、完整性、测量证据、上游代表性、因子可追溯性及未解决缺口；未报告的数据缺口使校验结论不确定。 | `eu-pef-2021`; `ghg-protocol-product-standard` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 对匹配器具型号、配置、生产路线、处理状态、呼吸模式、地理、期间和工厂大门状态进行从摇篮到工厂大门建模 |
| excluded_use | 类别平均环境声明；不同治疗或防护功能之间的比较；CPC 48160 排除的简单防护面具；未单独建模情景的使用、维护或生命终结声明；替代不同无菌、过滤、供气、电气或可重复使用配置 |
| required_metadata | PCR id；参考流 UUID；型号与配置；预期功能；产品净质量；随附附件；可重复使用或一次性状态；使用寿命或周期基准；无菌和清洁状态；过滤、供气或供给气体模式；包装配置；路线和外包步骤；制造场址和地理；生产期间；分配方法；上游数据集身份 |
| required_quality_disclosure | 采集协议覆盖；仪表和秤具质量；BOM 与产出协调；质量平衡差额；数据缺口和代理；分配基准；技术、地理和时间代表性；完整性和精度；适用的处理及最终测试证据 |
| update_trigger | 型号或配置、预期功能、材料或 BOM、工作原理、过滤或供气模式、无菌状态或处理方法、制造或供应商路线、场址或地理、包装、分配基准、上游数据集、生产期间、使用寿命假设或重大数据质量发现发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pef-2021` | official_guidance | 欧盟委员会《委员会建议 (EU) 2021/2279》，附件 I 产品环境足迹方法，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索日期 2026-08-10） | 功能单位字段；供应链系统边界逻辑；企业特定数据；过程和数据质量要求；排除项及下游阶段披露 |
| `ghg-protocol-product-standard` | standard | 世界资源研究所与世界可持续发展工商理事会《Product Life Cycle Accounting and Reporting Standard》，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索日期 2026-08-10） | 过程图；前景初级数据；数据质量；分配层级和披露 |
| `eu-mdr-2017` | official_guidance | 欧盟《医疗器械法规 (EU) 2017/745》附件 I 和 II，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745（检索日期 2026-08-10） | 医疗器械变体的路线特定制造和验证记录；材料及过程影响；无菌状态加工和包装；最终测试、场址及安全处置披露 |
| `eu-ppe-2016-425-consolidated-2026` | official_guidance | 欧盟《个人防护装备法规 (EU) 2016/425》2026 年 5 月 29 日合并文本，附件 II 第 3.10.1 节，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02016R0425-20260529（检索日期 2026-08-10） | 呼吸防护配置；过滤空气与外部可呼吸空气供应的区分；防毒面具和呼吸器具必需限定信息 |
| `iec-60601-1-9-2007` | standard | IEC 60601-1-9:2007+AMD1:2013+AMD2:2020 CSV，医用电气设备环境意识设计，https://webstore.iec.ch/en/publication/2601（检索日期 2026-08-10） | 医用电气设备生命周期阶段披露及路线适用性；生产包与下游生命周期阶段分离 |

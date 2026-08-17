---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-meat-offal-salted-in-brine-dried-or-smoked-edible-flours-and-meal-032a0c3c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他盐渍、盐水腌制、干制或熏制肉及可食用内脏；肉或肉内脏的食用细粉和粗粉

## 1. 范围与适用性

本 PCR 仅适用于归入 CPC 21183 的成品食品。由于类别范围宽，每个前景数据包须锁定一个精确动物物种、一个精确骨骼肌肉身份或一个精确可食器官、一条有文件记录的有序保藏或食用粉路线，以及一个成品物理状态和储存状态。通用“其他肉”“其他内脏”“路线特定配料”或混合状态交换不得表示声明产品。

覆盖路线可由干盐渍、盐水浸渍、盐水注射、受控干燥、天然木烟熏制、纯化烟熏液施用或企业特定食用细粉/粗粉生产组成一条有文件记录的步骤序列。仅启用实际发生的操作。法规许可和技术示例只识别可能的过程区别，不证明实际配方、投入、因子、数量或范围。

前景边界始于保藏加工设施验收的肉或可食用内脏，止于经过全部声明路线步骤、包装、卫生作业和适用场内废水处理后，在工厂门口放行的 1 kg 净合格 CPC 21183 产品。动物养殖、屠宰或原料生产及入厂运输属于上游。配送、零售、烹调、食用和寿命终止属于下游。CPC 21183 之外产品、不可食组织粉、饲料粉、混合物种或混合组织参考批次，以及未经保藏的生肉或内脏不属于参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-meat-offal-salted-in-brine-dried-or-smoked-edible-flours-and-meal-032a0c3c |
| classification_refs | CPC 3.0：21183，精确 |
| covered_products | 一个已声明精确物种和肉/可食器官，经一条已声明盐渍、盐水腌制、干制、熏制或食用细粉/粗粉路线生产的食品 |
| excluded_products | CPC 21183 之外产品；不可食组织粉；饲料粉；混合物种或混合组织参考批次；未经保藏的生肉或内脏 |
| representative_product | 1 kg 净合格且锁定精确物种、精确肉或器官、有序路线、成品形态和储存状态的声明产品 |
| production_route | 原料接收与整理；声明腌制、干燥、烟熏或粉体步骤；包装放行；卫生作业；条件性场内废水处理 |
| market_state | 一个精确盐渍、盐水腌制、干制、熏制、食用细粉或食用粗粉状态，并声明即食属性及常温、冷藏或冷冻储存状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种已精确识别且用于人类食用的 CPC 21183 保藏肉、可食用内脏或食用细粉/粗粉 |
| How much | 1 kg 净合格产品，包装质量不计入 |
| How well | 产品符合声明食品安全和放行规格，并保持一个精确物种、组织、路线顺序、成品形态和储存状态 |
| How long or cycle | 一个批次从验收原料到工厂门口放行；声明每个保藏步骤和储存阶段的时长 |
| reference_flow_link | 47ac991c-00e2-4c29-8df0-7a7b867c3e97 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格 CPC 21183 产品，包装质量不计入 |
| 参考产品流 | Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal `47ac991c-00e2-4c29-8df0-7a7b867c3e97` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精确动物物种；精确骨骼肌肉或精确可食器官；食品用途；有序路线代码；每个实际腌制、干燥、烟熏、粉碎和筛分步骤；实际配方；烟熏介质；成品为盐渍、盐水腌制、干制、熏制、食用细粉或食用粗粉；即食或非即食；常温、冷藏或冷冻储存；时间、温度、湿度、压力和气流（适用时）；包装或散装配置；净产品质量；场址；批次；报告期；排除不可食组织和饲料用途的证据 |

以上每项限定信息均须出现在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中。缺失精确物种、组织、路线顺序或成品状态的数据包不合规。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将唯一参考产出设为恰好 1 kg 净合格 CPC 21183 产品，并排除包装质量。 |
| `product_identity_mass` | 每项原料、中间体、不合格品和成品 | Mass | kg | 在每个适用过程中，每行保持一个精确物种及骨骼肌肉或一个精确可食器官。 |
| `route_state_identity` | 腌制、干燥、烟熏、细粉和粗粉状态 | Mass | kg | 保留有序路线代码及一个成品物理状态和储存状态；不得在一个数量中汇总路线或状态。 |
| `ingredient_mass` | 每项盐、盐水配料、香辛料、添加剂、发酵剂和烟熏介质 | Mass | kg | 根据批次领用和退库记录分别记录每种精确配方物质；不得假定许可物质实际使用。 |
| `water_volume` | 每项工艺水或废水流 | Volume | m3 | 可行时在混合前分别测量每个已命名流，并核对取水、转移、处理和排放。 |
| `electricity_energy` | 每项过程特定电力投入 | Energy | kWh | 分别记录接收、腌制、干燥、烟熏、粉碎、包装、卫生作业和废水处理电力。 |
| `thermal_energy` | 外购蒸汽和外购热水 | Energy | MJ | 分别计量每种外购热载体，并防止与场内产热燃料重复计算。 |
| `fuel_quantity` | 天然气、柴油和液化石油气 | Volume or Mass | m3 or kg | 分别记录每种燃料并说明密度、能量和分配换算。 |
| `refrigerant_mass` | R-717、R-134a 和 R-744 | Mass | kg | 保持物质特定平衡并将补充量与释放量分开；保留 R-744 的化石或生物源来源。 |
| `packaging_mass` | 每个包装组件及其废料 | Mass | kg | 分别测量材料清单中的每个组件，并从 1 kg 参考数量中排除全部包装质量。 |
| `pollutant_mass` | 每项直接空气或水体释放 | Mass | kg | 根据匹配前景证据，每行报告一种已命名物质或监测参数及一个环境介质。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 保藏加工设施验收的一种精确物种和精确肉或可食器官，并记录批次身份、原料状态和净质量 |
| starting_condition_role | 前景进入条件；养殖、屠宰或原料生产及入厂运输保留为上游数据集 |
| product_classification_scope | CPC 21183 中锁定精确物种、组织、有序保藏或粉体路线及成品状态的食品；排除不可食和饲料用途 |
| recursive_input_rule | CPC 21183 产品重新进入前景操作时，以精确物种、组织和状态记录一次并关联上游数据集，不复制先前生产 |
| upstream_dataset_requirement | 研究范围包含相关负荷时，对原料生产、入厂运输、外购公用工程、配料、化学品、包装、制冷剂和场外处理使用透明上游数据集 |
| disclosure | 声明物种、组织、食品用途、有序路线、实际配方、烟熏介质、设备、工艺条件、成品和储存状态、包装、场址、期间、分配、残余物去向、制冷剂、废水路线和排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_classification` | 参考产品 | 将参考产品限定为 CPC 21183，并保留一个精确物种、一个精确肉或可食器官身份、一条有序保藏或粉体路线及一个成品状态。 | `unsd-cpc-3-21183` |
| `boundary_exact_source` | 原料 | 使用精确物种-组织行；未列物种或器官须在数据生产前新增原子行，且不得使用其他肉或其他内脏集合交换。 | `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `boundary_route_sequence` | 保藏和粉体路线 | 声明实际有序步骤，并仅纳入适用的干腌、盐水浸渍、注射腌制、受控干燥、天然烟、烟熏液、粉碎或筛分操作。 | `codex-cxs-192-1995`; `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `boundary_foreground_stages` | 前景系统 | 纳入原料接收与整理、每个声明保藏或粉体步骤、包装放行、卫生作业和适用场内废水处理。 | `ec-jrc-sa-bref-jrc135916`; `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `boundary_upstream_downstream` | 研究边界 | 将动物养殖、屠宰或原料生产及入厂运输作为上游；将配送、零售、烹调、食用和寿命终止作为下游，除非明确扩展。 | `eu-pef-2021-2279` |
| `boundary_actual_formulation` | 配料和添加剂 | 仅纳入获批产品特定配方中存在的物质；法规许可或技术示例不能证明实际使用或用量。 | `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `boundary_wastewater` | 场内废水处理 | 仅对实际在场内处理的逐项已命名前景流纳入场内处理；否则保留每项具体场外废水转移。 | `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `boundary_uuid_completeness` | 清单完整性 | 即使非参考天工 UUID 尚未解决，也保留每项物理或化学特定物料、公用工程、制冷剂、废物、废水或排放行。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_and_preparation` | 原料接收与整理 | `required` | 每个以接收肉或可食用内脏为起点的数据集均须纳入。 | 验收一个精确物种和组织，保持身份并完成修整、清洗和原料准备。 | 与所声明 1 kg 参考产出关联的验收精确原料质量。 |
| `cure_formulation_and_application` | 腌制配方配制与施用 | `conditional` | 声明路线采用干盐渍、盐水浸渍、盐水注射或有文件记录的组合时纳入；每个批次须声明恰好一种腌制方法。 | 施用实际原子配方并保持所选腌制方法身份。 | 离开所声明腌制方法的精确腌制原料质量。 |
| `controlled_drying` | 受控干燥 | `conditional` | 声明路线包含干燥时纳入；须声明自然空气、热风、真空、冷冻干燥或另一项有精确记录的技术。 | 采用唯一声明的干燥技术去除水分，同时保持物种和组织身份。 | 精确干制原料质量及实测水分损失。 |
| `smoke_treatment` | 烟熏处理 | `conditional` | 采用天然木烟或纯化食品级烟熏液时纳入；须声明一种烟气发生和施用方法。 | 施用一种已声明烟熏介质，并记录来源特定残余物和排放。 | 离开所声明烟熏路线的精确烟熏原料质量。 |
| `edible_flour_meal_production` | 食用细粉或粗粉生产 | `conditional` | 仅当参考产品为食用细粉或粗粉时纳入；企业流程图须声明实际采用的每项调理、干燥、粉碎、筛分和食品安全步骤。 | 从已声明物种和组织生产一种精确粉末或粗粉状态，不假定通用路线。 | 合格食用细粉或粗粉质量及路线特定粉碎残余物。 |
| `packaging_and_release` | 包装与放行 | `required` | 每个散装或包装参考批次均须纳入。 | 接收一个合格路线特定产品，施用实际包装材料清单并放行参考产出。 | 恰好 1 kg 净合格参考产品，不含包装质量。 |
| `cleaning_and_disinfection` | 清洗与消毒 | `required` | 纳入服务于前景过程的全部卫生作业；仅启用实际使用的单项化学品和公用工程。 | 记录每项卫生投入、废水流、残余物和直接公用工程排放。 | 按因果关系分配给所声明参考批次的卫生作业。 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅对场内处理的已命名前景废水流纳入；否则保留每项场外转移边界。 | 处理逐项跟踪的废水流，并分别报告每项残余物和释放。 | 与参考批次匹配的进出水体积及污染物负荷。 |

### 过程：原料接收与整理（`raw_material_receipt_and_preparation`）

#### 输入

##### 产品流

###### 接收的山羊骨骼肌肉（`receipt_raw_goat_meat`）

Goat skeletal muscle meat 作为唯一的接收的山羊骨骼肌肉进入原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 接收的马骨骼肌肉（`receipt_raw_horse_meat`）

Horse skeletal muscle meat 作为唯一的接收的马骨骼肌肉进入原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 接收的火鸡骨骼肌肉（`receipt_raw_turkey_meat`）

Turkey skeletal muscle meat 作为唯一的接收的火鸡骨骼肌肉进入原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 接收的山羊肝（`receipt_raw_goat_liver`）

Goat liver 作为唯一的接收的山羊肝进入原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理用水（`receipt_process_water`）

Potable water 作为唯一的整理用水进入原料接收与整理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 接收电力（`receipt_electricity`）

Electricity, medium voltage 作为唯一的接收电力进入原料接收与整理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-717 制冷剂补充（`receipt_r717_makeup`）

Ammonia, anhydrous 作为唯一的R-717 制冷剂补充进入原料接收与整理边界。仅当接收或原料冷藏中存在该精确制冷剂时启用。其数量与所有其他交换分开保存。

- 选定流：Ammonia, anhydrous
- 流属性/单位：Mass / kg
- 数量规则：根据匹配报告期的钢瓶称量、采购、回收和维护记录确定物质特定补充量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a 制冷剂补充（`receipt_r134a_makeup`）

1,1,1,2-Tetrafluoroethane 作为唯一的R-134a 制冷剂补充进入原料接收与整理边界。仅当接收或原料冷藏中存在该精确制冷剂时启用。其数量与所有其他交换分开保存。

- 选定流：1,1,1,2-Tetrafluoroethane
- 流属性/单位：Mass / kg
- 数量规则：根据匹配报告期的钢瓶称量、采购、回收和维护记录确定物质特定补充量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-744 制冷剂补充（`receipt_r744_makeup`）

Carbon dioxide, liquid 作为唯一的R-744 制冷剂补充进入原料接收与整理边界。仅当接收或原料冷藏中存在该精确制冷剂时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, liquid
- 流属性/单位：Mass / kg
- 数量规则：根据匹配报告期的钢瓶称量、采购、回收和维护记录确定物质特定补充量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

本过程没有该方向和类型的交换。

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

###### 整理后的山羊骨骼肌肉（`receipt_prepared_goat_meat`）

Prepared Goat skeletal muscle meat 作为唯一的整理后的山羊骨骼肌肉离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_outputs`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后的马骨骼肌肉（`receipt_prepared_horse_meat`）

Prepared Horse skeletal muscle meat 作为唯一的整理后的马骨骼肌肉离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_outputs`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后的火鸡骨骼肌肉（`receipt_prepared_turkey_meat`）

Prepared Turkey skeletal muscle meat 作为唯一的整理后的火鸡骨骼肌肉离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_outputs`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后的山羊肝（`receipt_prepared_goat_liver`）

Prepared Goat liver 作为唯一的整理后的山羊肝离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_outputs`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 不合格山羊骨骼肌肉（`receipt_rejected_goat_meat`）

Rejected Goat skeletal muscle meat 作为唯一的不合格山羊骨骼肌肉离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格马骨骼肌肉（`receipt_rejected_horse_meat`）

Rejected Horse skeletal muscle meat 作为唯一的不合格马骨骼肌肉离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格火鸡骨骼肌肉（`receipt_rejected_turkey_meat`）

Rejected Turkey skeletal muscle meat 作为唯一的不合格火鸡骨骼肌肉离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 不合格山羊肝（`receipt_rejected_goat_liver`）

Rejected Goat liver 作为唯一的不合格山羊肝离开原料接收与整理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected Goat liver
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 去除的脂肪组织（`receipt_adipose_tissue`）

Removed adipose tissue 作为唯一的去除的脂肪组织离开原料接收与整理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Removed adipose tissue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 去除的结缔组织（`receipt_connective_tissue`）

Removed connective tissue 作为唯一的去除的结缔组织离开原料接收与整理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Removed connective tissue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 去除的骨碎片（`receipt_bone_fragments`）

Removed bone fragments 作为唯一的去除的骨碎片离开原料接收与整理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Removed bone fragments
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`codex-cxc-58-2005`; `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 原料整理清洗废水（`receipt_preparation_washwater`）

Raw-material preparation washwater 作为唯一的原料整理清洗废水离开原料接收与整理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Raw-material preparation washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### R-717 氨释放（`receipt_ammonia_air`）

Ammonia, to air 作为唯一的R-717 氨释放离开原料接收与整理边界。当 R-717 平衡识别出释放时启用。其数量与所有其他交换分开保存。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a 释放（`receipt_r134a_air`）

1,1,1,2-Tetrafluoroethane, to air 作为唯一的R-134a 释放离开原料接收与整理边界。当 R-134a 平衡识别出释放时启用。其数量与所有其他交换分开保存。

- 选定流：1,1,1,2-Tetrafluoroethane, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 化石来源 R-744 释放（`receipt_r744_fossil_air`）

Carbon dioxide, fossil, to air 作为唯一的化石来源 R-744 释放离开原料接收与整理边界。仅对化石来源 R-744 释放启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 生物源 R-744 释放（`receipt_r744_biogenic_air`）

Carbon dioxide, biogenic, to air 作为唯一的生物源 R-744 释放离开原料接收与整理边界。仅对生物源 R-744 释放启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：腌制配方配制与施用（`cure_formulation_and_application`）

#### 输入

##### 产品流

###### 整理后投入山羊骨骼肌肉（`cure_prepared_goat_meat`）

Prepared Goat skeletal muscle meat 作为唯一的整理后投入山羊骨骼肌肉进入腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_materials`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 整理后投入马骨骼肌肉（`cure_prepared_horse_meat`）

Prepared Horse skeletal muscle meat 作为唯一的整理后投入马骨骼肌肉进入腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_materials`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 整理后投入火鸡骨骼肌肉（`cure_prepared_turkey_meat`）

Prepared Turkey skeletal muscle meat 作为唯一的整理后投入火鸡骨骼肌肉进入腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_materials`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 整理后投入山羊肝（`cure_prepared_goat_liver`）

Prepared Goat liver 作为唯一的整理后投入山羊肝进入腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_materials`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 盐水或腌制用水（`cure_water`）

Potable water 作为唯一的盐水或腌制用水进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 氯化钠（`cure_sodium_chloride`）

Sodium chloride 作为唯一的氯化钠进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 蔗糖（`cure_sucrose`）

Sucrose 作为唯一的蔗糖进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Sucrose
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 葡萄糖（`cure_dextrose`）

Dextrose 作为唯一的葡萄糖进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Dextrose
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 亚硝酸钠（`cure_sodium_nitrite`）

Sodium nitrite 作为唯一的亚硝酸钠进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium nitrite
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 亚硝酸钾（`cure_potassium_nitrite`）

Potassium nitrite 作为唯一的亚硝酸钾进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Potassium nitrite
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 硝酸钠（`cure_sodium_nitrate`）

Sodium nitrate 作为唯一的硝酸钠进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium nitrate
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 硝酸钾（`cure_potassium_nitrate`）

Potassium nitrate 作为唯一的硝酸钾进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Potassium nitrate
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 抗坏血酸钠（`cure_sodium_ascorbate`）

Sodium ascorbate 作为唯一的抗坏血酸钠进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium ascorbate
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 异抗坏血酸钠（`cure_sodium_erythorbate`）

Sodium erythorbate 作为唯一的异抗坏血酸钠进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium erythorbate
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 三聚磷酸钠（`cure_sodium_tripolyphosphate`）

Sodium tripolyphosphate 作为唯一的三聚磷酸钠进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium tripolyphosphate
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 乙酸（`cure_acetic_acid`）

Acetic acid 作为唯一的乙酸进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 乳酸（`cure_lactic_acid`）

Lactic acid 作为唯一的乳酸进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Lactic acid
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 黑胡椒粉（`cure_black_pepper`）

Ground black pepper 作为唯一的黑胡椒粉进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Ground black pepper
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 大蒜粉（`cure_garlic_powder`）

Garlic powder 作为唯一的大蒜粉进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Garlic powder
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 芫荽籽粉（`cure_coriander_seed`）

Ground coriander seed 作为唯一的芫荽籽粉进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Ground coriander seed
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 清酒乳杆菌发酵剂（`cure_lactobacillus_sakei`）

Lactobacillus sakei starter culture 作为唯一的清酒乳杆菌发酵剂进入腌制配方配制与施用边界。仅当该精确物质出现在声明批次的获批配方中时启用。其数量与所有其他交换分开保存。

- 选定流：Lactobacillus sakei starter culture
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_formulation`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 阶段电力（`cure_electricity`）

Electricity, medium voltage 作为唯一的阶段电力进入腌制配方配制与施用边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_utilities`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购蒸汽（`cure_purchased_steam`）

Steam, purchased 作为唯一的外购蒸汽进入腌制配方配制与施用边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_utilities`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购热水（`cure_purchased_hot_water`）

Hot water, purchased 作为唯一的外购热水进入腌制配方配制与施用边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_utilities`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 天然气（`cure_natural_gas`）

Natural gas 作为唯一的天然气进入腌制配方配制与施用边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_utilities`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 柴油（`cure_diesel`）

Diesel 作为唯一的柴油进入腌制配方配制与施用边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Diesel
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_utilities`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 液化石油气（`cure_lpg`）

Liquefied petroleum gas 作为唯一的液化石油气进入腌制配方配制与施用边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_utilities`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

本过程没有该方向和类型的交换。

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

###### 腌制后的山羊骨骼肌肉（`cure_cured_goat_meat`）

Cured Goat skeletal muscle meat 作为唯一的腌制后的山羊骨骼肌肉离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Cured Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 腌制后的马骨骼肌肉（`cure_cured_horse_meat`）

Cured Horse skeletal muscle meat 作为唯一的腌制后的马骨骼肌肉离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Cured Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 腌制后的火鸡骨骼肌肉（`cure_cured_turkey_meat`）

Cured Turkey skeletal muscle meat 作为唯一的腌制后的火鸡骨骼肌肉离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Cured Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 腌制后的山羊肝（`cure_cured_goat_liver`）

Cured Goat liver 作为唯一的腌制后的山羊肝离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Cured Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

##### 废物流

###### 不合格腌制山羊骨骼肌肉（`cure_rejected_goat_meat`）

Rejected cured Goat skeletal muscle meat 作为唯一的不合格腌制山羊骨骼肌肉离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected cured Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 不合格腌制马骨骼肌肉（`cure_rejected_horse_meat`）

Rejected cured Horse skeletal muscle meat 作为唯一的不合格腌制马骨骼肌肉离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected cured Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 不合格腌制火鸡骨骼肌肉（`cure_rejected_turkey_meat`）

Rejected cured Turkey skeletal muscle meat 作为唯一的不合格腌制火鸡骨骼肌肉离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected cured Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 不合格腌制山羊肝（`cure_rejected_goat_liver`）

Rejected cured Goat liver 作为唯一的不合格腌制山羊肝离开腌制配方配制与施用边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected cured Goat liver
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 废氯化钠（`cure_spent_dry_salt`）

Spent sodium chloride from dry curing 作为唯一的废氯化钠离开腌制配方配制与施用边界。仅对实际产生该精确流的声明腌制方法启用。其数量与所有其他交换分开保存。

- 选定流：Spent sodium chloride from dry curing
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 废腌制盐水（`cure_spent_brine`）

Spent curing brine 作为唯一的废腌制盐水离开腌制配方配制与施用边界。仅对实际产生该精确流的声明腌制方法启用。其数量与所有其他交换分开保存。

- 选定流：Spent curing brine
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 腌制盐水过滤固体（`cure_brine_filter_solids`）

Curing-brine filter solids 作为唯一的腌制盐水过滤固体离开腌制配方配制与施用边界。仅对实际产生该精确流的声明腌制方法启用。其数量与所有其他交换分开保存。

- 选定流：Curing-brine filter solids
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 注射器排空盐水（`cure_injector_purge_brine`）

Injector purge brine 作为唯一的注射器排空盐水离开腌制配方配制与施用边界。仅对实际产生该精确流的声明腌制方法启用。其数量与所有其他交换分开保存。

- 选定流：Injector purge brine
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 腌制漂洗废水（`cure_rinse_wastewater`）

Curing-rinse wastewater 作为唯一的腌制漂洗废水离开腌制配方配制与施用边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Curing-rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 腌制设备清洗废水（`cure_equipment_washwater`）

Curing-equipment washwater 作为唯一的腌制设备清洗废水离开腌制配方配制与施用边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Curing-equipment washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cure_residues`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳释放（`cure_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为唯一的化石二氧化碳释放离开腌制配方配制与施用边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cure_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氮氧化物释放（`cure_nox_air`）

Nitrogen oxides, to air 作为唯一的氮氧化物释放离开腌制配方配制与施用边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Nitrogen oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cure_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硫氧化物释放（`cure_sox_air`）

Sulfur oxides, to air 作为唯一的硫氧化物释放离开腌制配方配制与施用边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Sulfur oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cure_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 细颗粒物释放（`cure_pm25_air`）

Particulate matter, <=2.5 um, to air 作为唯一的细颗粒物释放离开腌制配方配制与施用边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, <=2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cure_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粗颗粒物释放（`cure_pm_coarse_air`）

Particulate matter, 2.5-10 um, to air 作为唯一的粗颗粒物释放离开腌制配方配制与施用边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, 2.5-10 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cure_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：受控干燥（`controlled_drying`）

#### 输入

##### 产品流

###### 干燥投入山羊骨骼肌肉（`dry_prepared_goat_meat`）

Prepared Goat skeletal muscle meat 作为唯一的干燥投入山羊骨骼肌肉进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥投入马骨骼肌肉（`dry_prepared_horse_meat`）

Prepared Horse skeletal muscle meat 作为唯一的干燥投入马骨骼肌肉进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥投入火鸡骨骼肌肉（`dry_prepared_turkey_meat`）

Prepared Turkey skeletal muscle meat 作为唯一的干燥投入火鸡骨骼肌肉进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥投入山羊肝（`dry_prepared_goat_liver`）

Prepared Goat liver 作为唯一的干燥投入山羊肝进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥投入山羊骨骼肌肉（`dry_cured_goat_meat`）

Cured Goat skeletal muscle meat 作为唯一的干燥投入山羊骨骼肌肉进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥投入马骨骼肌肉（`dry_cured_horse_meat`）

Cured Horse skeletal muscle meat 作为唯一的干燥投入马骨骼肌肉进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥投入火鸡骨骼肌肉（`dry_cured_turkey_meat`）

Cured Turkey skeletal muscle meat 作为唯一的干燥投入火鸡骨骼肌肉进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥投入山羊肝（`dry_cured_goat_liver`）

Cured Goat liver 作为唯一的干燥投入山羊肝进入受控干燥边界。仅当该精确中间体是声明干燥技术的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_materials`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 阶段电力（`dry_electricity`）

Electricity, medium voltage 作为唯一的阶段电力进入受控干燥边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utilities`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购蒸汽（`dry_purchased_steam`）

Steam, purchased 作为唯一的外购蒸汽进入受控干燥边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utilities`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购热水（`dry_purchased_hot_water`）

Hot water, purchased 作为唯一的外购热水进入受控干燥边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utilities`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 天然气（`dry_natural_gas`）

Natural gas 作为唯一的天然气进入受控干燥边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utilities`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 柴油（`dry_diesel`）

Diesel 作为唯一的柴油进入受控干燥边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Diesel
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utilities`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 液化石油气（`dry_lpg`）

Liquefied petroleum gas 作为唯一的液化石油气进入受控干燥边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utilities`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

本过程没有该方向和类型的交换。

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

###### 干制山羊骨骼肌肉（`dry_dried_goat_meat`）

Dried Goat skeletal muscle meat 作为唯一的干制山羊骨骼肌肉离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Dried Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干制马骨骼肌肉（`dry_dried_horse_meat`）

Dried Horse skeletal muscle meat 作为唯一的干制马骨骼肌肉离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Dried Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干制火鸡骨骼肌肉（`dry_dried_turkey_meat`）

Dried Turkey skeletal muscle meat 作为唯一的干制火鸡骨骼肌肉离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Dried Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干制山羊肝（`dry_dried_goat_liver`）

Dried Goat liver 作为唯一的干制山羊肝离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Dried Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_outputs`
- 来源：`codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

##### 废物流

###### 不合格干制山羊骨骼肌肉（`dry_rejected_goat_meat`）

Rejected dried Goat skeletal muscle meat 作为唯一的不合格干制山羊骨骼肌肉离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected dried Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_residues`
- 来源：`fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 不合格干制马骨骼肌肉（`dry_rejected_horse_meat`）

Rejected dried Horse skeletal muscle meat 作为唯一的不合格干制马骨骼肌肉离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected dried Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_residues`
- 来源：`fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 不合格干制火鸡骨骼肌肉（`dry_rejected_turkey_meat`）

Rejected dried Turkey skeletal muscle meat 作为唯一的不合格干制火鸡骨骼肌肉离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected dried Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_residues`
- 来源：`fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 不合格干制山羊肝（`dry_rejected_goat_liver`）

Rejected dried Goat liver 作为唯一的不合格干制山羊肝离开受控干燥边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected dried Goat liver
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_residues`
- 来源：`fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 干燥机清洗废水（`dry_cleaning_wastewater`）

Dryer cleaning wastewater 作为唯一的干燥机清洗废水离开受控干燥边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Dryer cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_residues`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### 产品蒸发水（`dry_water_air`）

Water, to air 作为唯一的产品蒸发水离开受控干燥边界。根据声明干燥步骤中匹配物种和组织的质量及水分平衡计算。其数量与所有其他交换分开保存。

- 选定流：Water, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_emissions`
- 来源：`fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 化石二氧化碳释放（`dry_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为唯一的化石二氧化碳释放离开受控干燥边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氮氧化物释放（`dry_nox_air`）

Nitrogen oxides, to air 作为唯一的氮氧化物释放离开受控干燥边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Nitrogen oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硫氧化物释放（`dry_sox_air`）

Sulfur oxides, to air 作为唯一的硫氧化物释放离开受控干燥边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Sulfur oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 细颗粒物释放（`dry_pm25_air`）

Particulate matter, <=2.5 um, to air 作为唯一的细颗粒物释放离开受控干燥边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, <=2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粗颗粒物释放（`dry_pm_coarse_air`）

Particulate matter, 2.5-10 um, to air 作为唯一的粗颗粒物释放离开受控干燥边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, 2.5-10 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：烟熏处理（`smoke_treatment`）

#### 输入

##### 产品流

###### 烟熏处理投入山羊骨骼肌肉（`smoke_prepared_goat_meat`）

Prepared Goat skeletal muscle meat 作为唯一的烟熏处理投入山羊骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入马骨骼肌肉（`smoke_prepared_horse_meat`）

Prepared Horse skeletal muscle meat 作为唯一的烟熏处理投入马骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入火鸡骨骼肌肉（`smoke_prepared_turkey_meat`）

Prepared Turkey skeletal muscle meat 作为唯一的烟熏处理投入火鸡骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入山羊肝（`smoke_prepared_goat_liver`）

Prepared Goat liver 作为唯一的烟熏处理投入山羊肝进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入山羊骨骼肌肉（`smoke_cured_goat_meat`）

Cured Goat skeletal muscle meat 作为唯一的烟熏处理投入山羊骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入马骨骼肌肉（`smoke_cured_horse_meat`）

Cured Horse skeletal muscle meat 作为唯一的烟熏处理投入马骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入火鸡骨骼肌肉（`smoke_cured_turkey_meat`）

Cured Turkey skeletal muscle meat 作为唯一的烟熏处理投入火鸡骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入山羊肝（`smoke_cured_goat_liver`）

Cured Goat liver 作为唯一的烟熏处理投入山羊肝进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入山羊骨骼肌肉（`smoke_dried_goat_meat`）

Dried Goat skeletal muscle meat 作为唯一的烟熏处理投入山羊骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入马骨骼肌肉（`smoke_dried_horse_meat`）

Dried Horse skeletal muscle meat 作为唯一的烟熏处理投入马骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入火鸡骨骼肌肉（`smoke_dried_turkey_meat`）

Dried Turkey skeletal muscle meat 作为唯一的烟熏处理投入火鸡骨骼肌肉进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 烟熏处理投入山羊肝（`smoke_dried_goat_liver`）

Dried Goat liver 作为唯一的烟熏处理投入山羊肝进入烟熏处理边界。仅当该精确中间体是声明烟熏处理的记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_materials`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 食品级硬木片（`smoke_hardwood_chips`）

Food-grade hardwood chips 作为唯一的食品级硬木片进入烟熏处理边界。为声明施用方法启用恰好一个实际烟熏介质行；不得将禁用燃料或废物作为烟熏介质。其数量与所有其他交换分开保存。

- 选定流：Food-grade hardwood chips
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_inputs`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 食品级硬木锯末（`smoke_hardwood_sawdust`）

Food-grade hardwood sawdust 作为唯一的食品级硬木锯末进入烟熏处理边界。为声明施用方法启用恰好一个实际烟熏介质行；不得将禁用燃料或废物作为烟熏介质。其数量与所有其他交换分开保存。

- 选定流：Food-grade hardwood sawdust
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_inputs`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 纯化烟熏液（`smoke_smoke_condensate`）

Purified food-grade smoke condensate 作为唯一的纯化烟熏液进入烟熏处理边界。为声明施用方法启用恰好一个实际烟熏介质行；不得将禁用燃料或废物作为烟熏介质。其数量与所有其他交换分开保存。

- 选定流：Purified food-grade smoke condensate
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_inputs`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 阶段电力（`smoke_electricity`）

Electricity, medium voltage 作为唯一的阶段电力进入烟熏处理边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_utilities`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购蒸汽（`smoke_purchased_steam`）

Steam, purchased 作为唯一的外购蒸汽进入烟熏处理边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_utilities`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购热水（`smoke_purchased_hot_water`）

Hot water, purchased 作为唯一的外购热水进入烟熏处理边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_utilities`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 天然气（`smoke_natural_gas`）

Natural gas 作为唯一的天然气进入烟熏处理边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_utilities`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 柴油（`smoke_diesel`）

Diesel 作为唯一的柴油进入烟熏处理边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Diesel
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_utilities`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 液化石油气（`smoke_lpg`）

Liquefied petroleum gas 作为唯一的液化石油气进入烟熏处理边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_utilities`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 湿式洗涤器用水（`smoke_scrubber_water`）

Potable water 作为唯一的湿式洗涤器用水进入烟熏处理边界。仅当湿式洗涤器处理声明烟气流时启用。其数量与所有其他交换分开保存。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_inputs`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 颗粒活性炭（`smoke_activated_carbon`）

Granular activated carbon 作为唯一的颗粒活性炭进入烟熏处理边界。仅当颗粒活性炭吸附处理声明烟气流时启用。其数量与所有其他交换分开保存。

- 选定流：Granular activated carbon
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_inputs`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

本过程没有该方向和类型的交换。

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

###### 熏制山羊骨骼肌肉（`smoke_smoked_goat_meat`）

Smoked Goat skeletal muscle meat 作为唯一的熏制山羊骨骼肌肉离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Smoked Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_outputs`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 熏制马骨骼肌肉（`smoke_smoked_horse_meat`）

Smoked Horse skeletal muscle meat 作为唯一的熏制马骨骼肌肉离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Smoked Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_outputs`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 熏制火鸡骨骼肌肉（`smoke_smoked_turkey_meat`）

Smoked Turkey skeletal muscle meat 作为唯一的熏制火鸡骨骼肌肉离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Smoked Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_outputs`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

###### 熏制山羊肝（`smoke_smoked_goat_liver`）

Smoked Goat liver 作为唯一的熏制山羊肝离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Smoked Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_outputs`
- 来源：`codex-cxc-68-2009`; `fao-meat-preservation-1990`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279`

##### 废物流

###### 不合格熏制山羊骨骼肌肉（`smoke_rejected_goat_meat`）

Rejected smoked Goat skeletal muscle meat 作为唯一的不合格熏制山羊骨骼肌肉离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected smoked Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `eu-pef-2021-2279`

###### 不合格熏制马骨骼肌肉（`smoke_rejected_horse_meat`）

Rejected smoked Horse skeletal muscle meat 作为唯一的不合格熏制马骨骼肌肉离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected smoked Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `eu-pef-2021-2279`

###### 不合格熏制火鸡骨骼肌肉（`smoke_rejected_turkey_meat`）

Rejected smoked Turkey skeletal muscle meat 作为唯一的不合格熏制火鸡骨骼肌肉离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected smoked Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `eu-pef-2021-2279`

###### 不合格熏制山羊肝（`smoke_rejected_goat_liver`）

Rejected smoked Goat liver 作为唯一的不合格熏制山羊肝离开烟熏处理边界。仅当精确物种和组织与声明批次一致时启用本行；否则须为未列身份新增精确原子行。其数量与所有其他交换分开保存。

- 选定流：Rejected smoked Goat liver
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `eu-pef-2021-2279`

###### 硬木灰（`smoke_hardwood_ash`）

Hardwood ash 作为唯一的硬木灰离开烟熏处理边界。仅当声明烟熏技术实际产生该精确流时启用。其数量与所有其他交换分开保存。

- 选定流：Hardwood ash
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 烟气发生器炭渣（`smoke_generator_char`）

Smoke-generator char 作为唯一的烟气发生器炭渣离开烟熏处理边界。仅当声明烟熏技术实际产生该精确流时启用。其数量与所有其他交换分开保存。

- 选定流：Smoke-generator char
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 烟焦油冷凝物（`smoke_tar_condensate`）

Smoke tar condensate 作为唯一的烟焦油冷凝物离开烟熏处理边界。仅当声明烟熏技术实际产生该精确流时启用。其数量与所有其他交换分开保存。

- 选定流：Smoke tar condensate
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 废活性炭（`smoke_spent_activated_carbon`）

Spent granular activated carbon 作为唯一的废活性炭离开烟熏处理边界。仅当声明烟熏技术实际产生该精确流时启用。其数量与所有其他交换分开保存。

- 选定流：Spent granular activated carbon
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 烟气洗涤废液（`smoke_scrubber_liquor`）

Smoke-scrubber liquor 作为唯一的烟气洗涤废液离开烟熏处理边界。仅当声明烟熏技术实际产生该精确流时启用。其数量与所有其他交换分开保存。

- 选定流：Smoke-scrubber liquor
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 烟熏间清洗废水（`smoke_cleaning_wastewater`）

Smokehouse cleaning wastewater 作为唯一的烟熏间清洗废水离开烟熏处理边界。仅当声明烟熏技术实际产生该精确流时启用。其数量与所有其他交换分开保存。

- 选定流：Smokehouse cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoke_residues`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳释放（`smoke_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为唯一的化石二氧化碳释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 一氧化碳释放（`smoke_co_air`）

Carbon monoxide, to air 作为唯一的一氧化碳释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氮氧化物释放（`smoke_nox_air`）

Nitrogen oxides, to air 作为唯一的氮氧化物释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Nitrogen oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硫氧化物释放（`smoke_sox_air`）

Sulfur oxides, to air 作为唯一的硫氧化物释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Sulfur oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 细颗粒物释放（`smoke_pm25_air`）

Particulate matter, <=2.5 um, to air 作为唯一的细颗粒物释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, <=2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粗颗粒物释放（`smoke_pm_coarse_air`）

Particulate matter, 2.5-10 um, to air 作为唯一的粗颗粒物释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, 2.5-10 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 甲醛释放（`smoke_formaldehyde_air`）

Formaldehyde, to air 作为唯一的甲醛释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Formaldehyde, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 乙醛释放（`smoke_acetaldehyde_air`）

Acetaldehyde, to air 作为唯一的乙醛释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Acetaldehyde, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 丙烯醛释放（`smoke_acrolein_air`）

Acrolein, to air 作为唯一的丙烯醛释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Acrolein, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 乙酸释放（`smoke_acetic_acid_air`）

Acetic acid, to air 作为唯一的乙酸释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Acetic acid, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 甲酸释放（`smoke_formic_acid_air`）

Formic acid, to air 作为唯一的甲酸释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Formic acid, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 丙酸释放（`smoke_propionic_acid_air`）

Propionic acid, to air 作为唯一的丙酸释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Propionic acid, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 丁酸释放（`smoke_butyric_acid_air`）

Butyric acid, to air 作为唯一的丁酸释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Butyric acid, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 苯并[a]芘释放（`smoke_benzo_a_pyrene_air`）

Benzo[a]pyrene, to air 作为唯一的苯并[a]芘释放离开烟熏处理边界。仅当直接监测或有文件记录的场址计算为声明烟熏技术识别出该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Benzo[a]pyrene, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_smoke_emissions`
- 来源：`codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：食用细粉或粗粉生产（`edible_flour_meal_production`）

#### 输入

##### 产品流

###### 粉体生产线投入山羊骨骼肌肉（`flour_prepared_goat_meat`）

Prepared Goat skeletal muscle meat 作为唯一的粉体生产线投入山羊骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入马骨骼肌肉（`flour_prepared_horse_meat`）

Prepared Horse skeletal muscle meat 作为唯一的粉体生产线投入马骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入火鸡骨骼肌肉（`flour_prepared_turkey_meat`）

Prepared Turkey skeletal muscle meat 作为唯一的粉体生产线投入火鸡骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入山羊肝（`flour_prepared_goat_liver`）

Prepared Goat liver 作为唯一的粉体生产线投入山羊肝进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Prepared Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入山羊骨骼肌肉（`flour_cured_goat_meat`）

Cured Goat skeletal muscle meat 作为唯一的粉体生产线投入山羊骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入马骨骼肌肉（`flour_cured_horse_meat`）

Cured Horse skeletal muscle meat 作为唯一的粉体生产线投入马骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入火鸡骨骼肌肉（`flour_cured_turkey_meat`）

Cured Turkey skeletal muscle meat 作为唯一的粉体生产线投入火鸡骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入山羊肝（`flour_cured_goat_liver`）

Cured Goat liver 作为唯一的粉体生产线投入山羊肝进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Cured Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入山羊骨骼肌肉（`flour_dried_goat_meat`）

Dried Goat skeletal muscle meat 作为唯一的粉体生产线投入山羊骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入马骨骼肌肉（`flour_dried_horse_meat`）

Dried Horse skeletal muscle meat 作为唯一的粉体生产线投入马骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入火鸡骨骼肌肉（`flour_dried_turkey_meat`）

Dried Turkey skeletal muscle meat 作为唯一的粉体生产线投入火鸡骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入山羊肝（`flour_dried_goat_liver`）

Dried Goat liver 作为唯一的粉体生产线投入山羊肝进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Dried Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入山羊骨骼肌肉（`flour_smoked_goat_meat`）

Smoked Goat skeletal muscle meat 作为唯一的粉体生产线投入山羊骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Smoked Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入马骨骼肌肉（`flour_smoked_horse_meat`）

Smoked Horse skeletal muscle meat 作为唯一的粉体生产线投入马骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Smoked Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入火鸡骨骼肌肉（`flour_smoked_turkey_meat`）

Smoked Turkey skeletal muscle meat 作为唯一的粉体生产线投入火鸡骨骼肌肉进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Smoked Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 粉体生产线投入山羊肝（`flour_smoked_goat_liver`）

Smoked Goat liver 作为唯一的粉体生产线投入山羊肝进入食用细粉或粗粉生产边界。仅当该精确中间体是企业特定食用粉路线的有文件记录进料时启用。其数量与所有其他交换分开保存。

- 选定流：Smoked Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_materials`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 阶段电力（`flour_electricity`）

Electricity, medium voltage 作为唯一的阶段电力进入食用细粉或粗粉生产边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购蒸汽（`flour_purchased_steam`）

Steam, purchased 作为唯一的外购蒸汽进入食用细粉或粗粉生产边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购热水（`flour_purchased_hot_water`）

Hot water, purchased 作为唯一的外购热水进入食用细粉或粗粉生产边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 天然气（`flour_natural_gas`）

Natural gas 作为唯一的天然气进入食用细粉或粗粉生产边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 柴油（`flour_diesel`）

Diesel 作为唯一的柴油进入食用细粉或粗粉生产边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Diesel
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 液化石油气（`flour_lpg`）

Liquefied petroleum gas 作为唯一的液化石油气进入食用细粉或粗粉生产边界。仅当该精确载体由本过程消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

本过程没有该方向和类型的交换。

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

###### 食用细粉：山羊骨骼肌肉（`flour_product_goat_meat`）

Edible flour of Goat skeletal muscle meat 作为唯一的食用细粉：山羊骨骼肌肉离开食用细粉或粗粉生产边界。仅当合格成品状态为食用细粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用细粉：马骨骼肌肉（`flour_product_horse_meat`）

Edible flour of Horse skeletal muscle meat 作为唯一的食用细粉：马骨骼肌肉离开食用细粉或粗粉生产边界。仅当合格成品状态为食用细粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用细粉：火鸡骨骼肌肉（`flour_product_turkey_meat`）

Edible flour of Turkey skeletal muscle meat 作为唯一的食用细粉：火鸡骨骼肌肉离开食用细粉或粗粉生产边界。仅当合格成品状态为食用细粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用细粉：山羊肝（`flour_product_goat_liver`）

Edible flour of Goat liver 作为唯一的食用细粉：山羊肝离开食用细粉或粗粉生产边界。仅当合格成品状态为食用细粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用粗粉：山羊骨骼肌肉（`meal_product_goat_meat`）

Edible meal of Goat skeletal muscle meat 作为唯一的食用粗粉：山羊骨骼肌肉离开食用细粉或粗粉生产边界。仅当合格成品状态为食用粗粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用粗粉：马骨骼肌肉（`meal_product_horse_meat`）

Edible meal of Horse skeletal muscle meat 作为唯一的食用粗粉：马骨骼肌肉离开食用细粉或粗粉生产边界。仅当合格成品状态为食用粗粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用粗粉：火鸡骨骼肌肉（`meal_product_turkey_meat`）

Edible meal of Turkey skeletal muscle meat 作为唯一的食用粗粉：火鸡骨骼肌肉离开食用细粉或粗粉生产边界。仅当合格成品状态为食用粗粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用粗粉：山羊肝（`meal_product_goat_liver`）

Edible meal of Goat liver 作为唯一的食用粗粉：山羊肝离开食用细粉或粗粉生产边界。仅当合格成品状态为食用粗粉且企业特定路线有完整记录时启用。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_outputs`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

##### 废物流

###### 粉碎筛上物：山羊骨骼肌肉（`flour_oversize_goat_meat`）

Goat skeletal muscle meat milling oversize 作为唯一的粉碎筛上物：山羊骨骼肌肉离开食用细粉或粗粉生产边界。仅当声明筛分步骤移除该精确物种和组织的筛上物时启用。其数量与所有其他交换分开保存。

- 选定流：Goat skeletal muscle meat milling oversize
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-pef-2021-2279`

###### 粉碎筛上物：马骨骼肌肉（`flour_oversize_horse_meat`）

Horse skeletal muscle meat milling oversize 作为唯一的粉碎筛上物：马骨骼肌肉离开食用细粉或粗粉生产边界。仅当声明筛分步骤移除该精确物种和组织的筛上物时启用。其数量与所有其他交换分开保存。

- 选定流：Horse skeletal muscle meat milling oversize
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-pef-2021-2279`

###### 粉碎筛上物：火鸡骨骼肌肉（`flour_oversize_turkey_meat`）

Turkey skeletal muscle meat milling oversize 作为唯一的粉碎筛上物：火鸡骨骼肌肉离开食用细粉或粗粉生产边界。仅当声明筛分步骤移除该精确物种和组织的筛上物时启用。其数量与所有其他交换分开保存。

- 选定流：Turkey skeletal muscle meat milling oversize
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-pef-2021-2279`

###### 粉碎筛上物：山羊肝（`flour_oversize_goat_liver`）

Goat liver milling oversize 作为唯一的粉碎筛上物：山羊肝离开食用细粉或粗粉生产边界。仅当声明筛分步骤移除该精确物种和组织的筛上物时启用。其数量与所有其他交换分开保存。

- 选定流：Goat liver milling oversize
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-pef-2021-2279`

###### 粉体过滤残余物：山羊骨骼肌肉（`flour_filter_residue_goat_meat`）

Goat skeletal muscle meat powder-filter residue 作为唯一的粉体过滤残余物：山羊骨骼肌肉离开食用细粉或粗粉生产边界。仅当声明粉尘控制装置收集该精确物种和组织残余物时启用。其数量与所有其他交换分开保存。

- 选定流：Goat skeletal muscle meat powder-filter residue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粉体过滤残余物：马骨骼肌肉（`flour_filter_residue_horse_meat`）

Horse skeletal muscle meat powder-filter residue 作为唯一的粉体过滤残余物：马骨骼肌肉离开食用细粉或粗粉生产边界。仅当声明粉尘控制装置收集该精确物种和组织残余物时启用。其数量与所有其他交换分开保存。

- 选定流：Horse skeletal muscle meat powder-filter residue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粉体过滤残余物：火鸡骨骼肌肉（`flour_filter_residue_turkey_meat`）

Turkey skeletal muscle meat powder-filter residue 作为唯一的粉体过滤残余物：火鸡骨骼肌肉离开食用细粉或粗粉生产边界。仅当声明粉尘控制装置收集该精确物种和组织残余物时启用。其数量与所有其他交换分开保存。

- 选定流：Turkey skeletal muscle meat powder-filter residue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粉体过滤残余物：山羊肝（`flour_filter_residue_goat_liver`）

Goat liver powder-filter residue 作为唯一的粉体过滤残余物：山羊肝离开食用细粉或粗粉生产边界。仅当声明粉尘控制装置收集该精确物种和组织残余物时启用。其数量与所有其他交换分开保存。

- 选定流：Goat liver powder-filter residue
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 金属探测器剔除物（`flour_metal_fragments`）

Metal fragments from edible powder line 作为唯一的金属探测器剔除物离开食用细粉或粗粉生产边界。仅当在线探测器剔除该精确物理污染物时启用。其数量与所有其他交换分开保存。

- 选定流：Metal fragments from edible powder line
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 食用粉生产线清洗废水（`flour_cleaning_wastewater`）

Flour-line cleaning wastewater 作为唯一的食用粉生产线清洗废水离开食用细粉或粗粉生产边界。仅当采用湿式清洁时启用；干式清洁残余物保持为独立固体废物。其数量与所有其他交换分开保存。

- 选定流：Flour-line cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flour_residues`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### 食用粉细粉尘释放（`flour_pm25_air`）

Particulate matter, <=2.5 um, to air 作为唯一的食用粉细粉尘释放离开食用细粉或粗粉生产边界。仅当直接监测或有文件记录的物料衡算识别出该精确粒径级别释放时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, <=2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_flour_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 食用粉粗粉尘释放（`flour_pm_coarse_air`）

Particulate matter, 2.5-10 um, to air 作为唯一的食用粉粗粉尘释放离开食用细粉或粗粉生产边界。仅当直接监测或有文件记录的物料衡算识别出该精确粒径级别释放时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, 2.5-10 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_flour_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：包装与放行（`packaging_and_release`）

#### 输入

##### 产品流

###### 合格包装投入山羊骨骼肌肉（`pack_cured_goat_meat`）

Cured Goat skeletal muscle meat 作为唯一的合格包装投入山羊骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Cured Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入马骨骼肌肉（`pack_cured_horse_meat`）

Cured Horse skeletal muscle meat 作为唯一的合格包装投入马骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Cured Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入火鸡骨骼肌肉（`pack_cured_turkey_meat`）

Cured Turkey skeletal muscle meat 作为唯一的合格包装投入火鸡骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Cured Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊肝（`pack_cured_goat_liver`）

Cured Goat liver 作为唯一的合格包装投入山羊肝进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Cured Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊骨骼肌肉（`pack_dried_goat_meat`）

Dried Goat skeletal muscle meat 作为唯一的合格包装投入山羊骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Dried Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入马骨骼肌肉（`pack_dried_horse_meat`）

Dried Horse skeletal muscle meat 作为唯一的合格包装投入马骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Dried Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入火鸡骨骼肌肉（`pack_dried_turkey_meat`）

Dried Turkey skeletal muscle meat 作为唯一的合格包装投入火鸡骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Dried Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊肝（`pack_dried_goat_liver`）

Dried Goat liver 作为唯一的合格包装投入山羊肝进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Dried Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊骨骼肌肉（`pack_smoked_goat_meat`）

Smoked Goat skeletal muscle meat 作为唯一的合格包装投入山羊骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Smoked Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入马骨骼肌肉（`pack_smoked_horse_meat`）

Smoked Horse skeletal muscle meat 作为唯一的合格包装投入马骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Smoked Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入火鸡骨骼肌肉（`pack_smoked_turkey_meat`）

Smoked Turkey skeletal muscle meat 作为唯一的合格包装投入火鸡骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Smoked Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊肝（`pack_smoked_goat_liver`）

Smoked Goat liver 作为唯一的合格包装投入山羊肝进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Smoked Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊骨骼肌肉（`pack_flour_goat_meat`）

Edible flour of Goat skeletal muscle meat 作为唯一的合格包装投入山羊骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入马骨骼肌肉（`pack_flour_horse_meat`）

Edible flour of Horse skeletal muscle meat 作为唯一的合格包装投入马骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入火鸡骨骼肌肉（`pack_flour_turkey_meat`）

Edible flour of Turkey skeletal muscle meat 作为唯一的合格包装投入火鸡骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊肝（`pack_flour_goat_liver`）

Edible flour of Goat liver 作为唯一的合格包装投入山羊肝进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible flour of Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊骨骼肌肉（`pack_meal_goat_meat`）

Edible meal of Goat skeletal muscle meat 作为唯一的合格包装投入山羊骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Goat skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入马骨骼肌肉（`pack_meal_horse_meat`）

Edible meal of Horse skeletal muscle meat 作为唯一的合格包装投入马骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Horse skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入火鸡骨骼肌肉（`pack_meal_turkey_meat`）

Edible meal of Turkey skeletal muscle meat 作为唯一的合格包装投入火鸡骨骼肌肉进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Turkey skeletal muscle meat
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 合格包装投入山羊肝（`pack_meal_goat_liver`）

Edible meal of Goat liver 作为唯一的合格包装投入山羊肝进入包装与放行边界。启用与声明参考批次匹配的恰好一个合格物种-组织-状态投入。其数量与所有其他交换分开保存。

- 选定流：Edible meal of Goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量毛重和皮重，保持批次身份，并与过程投入、产出、不合格品和水分变化核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 包装线电力（`pack_electricity`）

Electricity, medium voltage 作为唯一的包装线电力进入包装与放行边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_energy`
- 来源：`fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 包装氮气（`pack_nitrogen`）

Nitrogen, gaseous 作为唯一的包装氮气进入包装与放行边界。仅当声明包装气氛或冷却配置使用该精确气体时启用。其数量与所有其他交换分开保存。

- 选定流：Nitrogen, gaseous
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`eu-pef-2021-2279`

###### 包装二氧化碳（`pack_carbon_dioxide`）

Carbon dioxide, gaseous 作为唯一的包装二氧化碳进入包装与放行边界。仅当声明包装气氛或冷却配置使用该精确气体时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, gaseous
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`eu-pef-2021-2279`

###### R-717 制冷剂补充（`pack_r717_makeup`）

Ammonia, anhydrous 作为唯一的R-717 制冷剂补充进入包装与放行边界。仅当成品调理或储存中存在该精确制冷剂时启用。其数量与所有其他交换分开保存。

- 选定流：Ammonia, anhydrous
- 流属性/单位：Mass / kg
- 数量规则：根据匹配报告期的钢瓶称量、采购、回收和维护记录确定物质特定补充量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a 制冷剂补充（`pack_r134a_makeup`）

1,1,1,2-Tetrafluoroethane 作为唯一的R-134a 制冷剂补充进入包装与放行边界。仅当成品调理或储存中存在该精确制冷剂时启用。其数量与所有其他交换分开保存。

- 选定流：1,1,1,2-Tetrafluoroethane
- 流属性/单位：Mass / kg
- 数量规则：根据匹配报告期的钢瓶称量、采购、回收和维护记录确定物质特定补充量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-744 制冷剂补充（`pack_r744_makeup`）

Carbon dioxide, liquid 作为唯一的R-744 制冷剂补充进入包装与放行边界。仅当成品调理或储存中存在该精确制冷剂时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, liquid
- 流属性/单位：Mass / kg
- 数量规则：根据匹配报告期的钢瓶称量、采购、回收和维护记录确定物质特定补充量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_refrigerants`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 低密度聚乙烯薄膜（`pack_ldpe_film`）

Low-density polyethylene film 作为唯一的低密度聚乙烯薄膜进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 聚酰胺薄膜（`pack_polyamide_film`）

Polyamide film 作为唯一的聚酰胺薄膜进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Polyamide film
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 聚对苯二甲酸乙二醇酯薄膜（`pack_pet_film`）

Polyethylene terephthalate film 作为唯一的聚对苯二甲酸乙二醇酯薄膜进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Polyethylene terephthalate film
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 铝箔（`pack_aluminium_foil`）

Aluminium foil 作为唯一的铝箔进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 再生纤维素薄膜（`pack_cellulose_film`）

Regenerated cellulose film 作为唯一的再生纤维素薄膜进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Regenerated cellulose film
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 纸袋（`pack_paper_sack`）

Paper sack 作为唯一的纸袋进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Paper sack
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 黄麻袋（`pack_jute_sack`）

Jute sack 作为唯一的黄麻袋进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Jute sack
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 瓦楞纸箱（`pack_corrugated_box`）

Corrugated cardboard box 作为唯一的瓦楞纸箱进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Corrugated cardboard box
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 玻璃罐（`pack_glass_jar`）

Glass jar 作为唯一的玻璃罐进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Glass jar
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 聚丙烯桶（`pack_polypropylene_pail`）

Polypropylene pail 作为唯一的聚丙烯桶进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Polypropylene pail
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 纸标签（`pack_paper_label`）

Paper label 作为唯一的纸标签进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Paper label
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

###### 木托盘（`pack_wooden_pallet`）

Wooden pallet 作为唯一的木托盘进入包装与放行边界。仅当该精确组件出现在实际包装材料清单中时启用。其数量与所有其他交换分开保存。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`codex-cxc-58-2005`; `fao-meat-preservation-1990`; `eu-pef-2021-2279`

##### 废物流

本过程没有该方向和类型的交换。

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

###### 合格 CPC 21183 参考产品（`reference_cpc21183_product`）

Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal 作为唯一的合格 CPC 21183 参考产品离开包装与放行边界。这是唯一含 UUID 的清单行，须与锁定的物种、组织、路线顺序、成品状态和批次一致。其数量与所有其他交换分开保存。

- 选定流：Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal `47ac991c-00e2-4c29-8df0-7a7b867c3e97`
- 流属性/单位：Mass / kg
- 数量规则：将该唯一参考产出设为恰好 1 kg 净合格产品，包装质量不计入；保留所有必需限定信息。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_pack_products`
- 来源：`unsd-cpc-3-21183`

##### 废物流

###### 废低密度聚乙烯薄膜（`pack_waste_ldpe_film`）

Waste low-density polyethylene film 作为唯一的废低密度聚乙烯薄膜离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废聚酰胺薄膜（`pack_waste_polyamide_film`）

Waste polyamide film 作为唯一的废聚酰胺薄膜离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste polyamide film
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废聚对苯二甲酸乙二醇酯薄膜（`pack_waste_pet_film`）

Waste polyethylene terephthalate film 作为唯一的废聚对苯二甲酸乙二醇酯薄膜离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste polyethylene terephthalate film
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废铝箔（`pack_waste_aluminium_foil`）

Waste aluminium foil 作为唯一的废铝箔离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废再生纤维素薄膜（`pack_waste_cellulose_film`）

Waste regenerated cellulose film 作为唯一的废再生纤维素薄膜离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste regenerated cellulose film
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废纸袋（`pack_waste_paper_sack`）

Waste paper sack 作为唯一的废纸袋离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste paper sack
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废黄麻袋（`pack_waste_jute_sack`）

Waste jute sack 作为唯一的废黄麻袋离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste jute sack
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废瓦楞纸箱（`pack_waste_corrugated_box`）

Waste corrugated cardboard box 作为唯一的废瓦楞纸箱离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste corrugated cardboard box
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废玻璃罐（`pack_waste_glass_jar`）

Waste glass jar 作为唯一的废玻璃罐离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste glass jar
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废聚丙烯桶（`pack_waste_polypropylene_pail`）

Waste polypropylene pail 作为唯一的废聚丙烯桶离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste polypropylene pail
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废纸标签（`pack_waste_paper_label`）

Waste paper label 作为唯一的废纸标签离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste paper label
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 废木托盘（`pack_waste_wooden_pallet`）

Waste wooden pallet 作为唯一的废木托盘离开包装与放行边界。仅当该精确包装组件在前景边界内成为废物时启用。其数量与所有其他交换分开保存。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-pef-2021-2279`

###### 包装线冲洗废水（`pack_washwater`）

Packaging-line washwater 作为唯一的包装线冲洗废水离开包装与放行边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Packaging-line washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_waste`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### R-717 氨释放（`pack_ammonia_air`）

Ammonia, to air 作为唯一的R-717 氨释放离开包装与放行边界。当 R-717 平衡识别出释放时启用。其数量与所有其他交换分开保存。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a 释放（`pack_r134a_air`）

1,1,1,2-Tetrafluoroethane, to air 作为唯一的R-134a 释放离开包装与放行边界。当 R-134a 平衡识别出释放时启用。其数量与所有其他交换分开保存。

- 选定流：1,1,1,2-Tetrafluoroethane, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 化石来源 R-744 释放（`pack_r744_fossil_air`）

Carbon dioxide, fossil, to air 作为唯一的化石来源 R-744 释放离开包装与放行边界。仅对化石来源 R-744 释放启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 生物源 R-744 释放（`pack_r744_biogenic_air`）

Carbon dioxide, biogenic, to air 作为唯一的生物源 R-744 释放离开包装与放行边界。仅对生物源 R-744 释放启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 包装氮气释放（`pack_nitrogen_air`）

Nitrogen, to air 作为唯一的包装氮气释放离开包装与放行边界。仅当包装氮气在前景边界内释放时启用。其数量与所有其他交换分开保存。

- 选定流：Nitrogen, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 化石来源包装二氧化碳释放（`pack_gas_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为唯一的化石来源包装二氧化碳释放离开包装与放行边界。仅对化石来源包装二氧化碳启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 生物源包装二氧化碳释放（`pack_gas_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 作为唯一的生物源包装二氧化碳释放离开包装与放行边界。仅对生物源包装二氧化碳启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：清洗与消毒（`cleaning_and_disinfection`）

#### 输入

##### 产品流

###### 卫生用水（`sanitation_water`）

Potable water 作为唯一的卫生用水进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 卫生作业电力（`sanitation_electricity`）

Electricity, medium voltage 作为唯一的卫生作业电力进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购卫生蒸汽（`sanitation_steam`）

Steam, purchased 作为唯一的外购卫生蒸汽进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购卫生热水（`sanitation_hot_water`）

Hot water, purchased 作为唯一的外购卫生热水进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 卫生作业天然气（`sanitation_natural_gas`）

Natural gas 作为唯一的卫生作业天然气进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Natural gas
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 卫生作业柴油（`sanitation_diesel`）

Diesel 作为唯一的卫生作业柴油进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Diesel
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 卫生作业液化石油气（`sanitation_lpg`）

Liquefied petroleum gas 作为唯一的卫生作业液化石油气进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氢氧化钠清洗剂（`sanitation_sodium_hydroxide`）

Sodium hydroxide 作为唯一的氢氧化钠清洗剂进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硝酸清洗剂（`sanitation_nitric_acid`）

Nitric acid 作为唯一的硝酸清洗剂进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 磷酸清洗剂（`sanitation_phosphoric_acid`）

Phosphoric acid 作为唯一的磷酸清洗剂进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 过氧乙酸消毒剂（`sanitation_peracetic_acid`）

Peracetic acid 作为唯一的过氧乙酸消毒剂进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 次氯酸钠消毒剂（`sanitation_sodium_hypochlorite`）

Sodium hypochlorite 作为唯一的次氯酸钠消毒剂进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 苯扎氯铵消毒剂（`sanitation_benzalkonium_chloride`）

Benzalkonium chloride 作为唯一的苯扎氯铵消毒剂进入清洗与消毒边界。仅当该精确卫生投入在前景边界内消耗时启用。其数量与所有其他交换分开保存。

- 选定流：Benzalkonium chloride
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

本过程没有该方向和类型的交换。

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

本过程没有该方向和类型的交换。

##### 废物流

###### 氢氧化钠卫生废水（`sanitation_sodium_hydroxide_wastewater`）

Sodium-hydroxide sanitation wastewater 作为唯一的氢氧化钠卫生废水离开清洗与消毒边界。仅当该精确废水流被单独产生或跟踪时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium-hydroxide sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硝酸卫生废水（`sanitation_nitric_acid_wastewater`）

Nitric-acid sanitation wastewater 作为唯一的硝酸卫生废水离开清洗与消毒边界。仅当该精确废水流被单独产生或跟踪时启用。其数量与所有其他交换分开保存。

- 选定流：Nitric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 磷酸卫生废水（`sanitation_phosphoric_acid_wastewater`）

Phosphoric-acid sanitation wastewater 作为唯一的磷酸卫生废水离开清洗与消毒边界。仅当该精确废水流被单独产生或跟踪时启用。其数量与所有其他交换分开保存。

- 选定流：Phosphoric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 过氧乙酸卫生废水（`sanitation_peracetic_acid_wastewater`）

Peracetic-acid sanitation wastewater 作为唯一的过氧乙酸卫生废水离开清洗与消毒边界。仅当该精确废水流被单独产生或跟踪时启用。其数量与所有其他交换分开保存。

- 选定流：Peracetic-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 次氯酸钠卫生废水（`sanitation_hypochlorite_wastewater`）

Sodium-hypochlorite sanitation wastewater 作为唯一的次氯酸钠卫生废水离开清洗与消毒边界。仅当该精确废水流被单独产生或跟踪时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium-hypochlorite sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 苯扎氯铵卫生废水（`sanitation_benzalkonium_wastewater`）

Benzalkonium-chloride sanitation wastewater 作为唯一的苯扎氯铵卫生废水离开清洗与消毒边界。仅当该精确废水流被单独产生或跟踪时启用。其数量与所有其他交换分开保存。

- 选定流：Benzalkonium-chloride sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 末次漂洗卫生废水（`sanitation_final_rinse_wastewater`）

Final-rinse sanitation wastewater 作为唯一的末次漂洗卫生废水离开清洗与消毒边界。仅当该精确废水流被单独产生或跟踪时启用。其数量与所有其他交换分开保存。

- 选定流：Final-rinse sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 卫生地面清扫物（`sanitation_floor_sweepings`）

Sanitation floor sweepings 作为唯一的卫生地面清扫物离开清洗与消毒边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Sanitation floor sweepings
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_residues`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳释放（`sanitation_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为唯一的化石二氧化碳释放离开清洗与消毒边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氮氧化物释放（`sanitation_nox_air`）

Nitrogen oxides, to air 作为唯一的氮氧化物释放离开清洗与消毒边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Nitrogen oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硫氧化物释放（`sanitation_sox_air`）

Sulfur oxides, to air 作为唯一的硫氧化物释放离开清洗与消毒边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Sulfur oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 细颗粒物释放（`sanitation_pm25_air`）

Particulate matter, <=2.5 um, to air 作为唯一的细颗粒物释放离开清洗与消毒边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, <=2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粗颗粒物释放（`sanitation_pm_coarse_air`）

Particulate matter, 2.5-10 um, to air 作为唯一的粗颗粒物释放离开清洗与消毒边界。当与本过程关联的场内燃烧或直接加热可能释放该精确物质时启用。其数量与所有其他交换分开保存。

- 选定流：Particulate matter, 2.5-10 um, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电力（`wwt_electricity`）

Electricity, medium voltage 作为唯一的废水处理电力进入场内废水处理边界。仅当场内处理消耗该精确投入时启用。其数量与所有其他交换分开保存。

- 选定流：Electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 处理聚合物配制用水（`wwt_makeup_water`）

Potable water 作为唯一的处理聚合物配制用水进入场内废水处理边界。仅当场内处理消耗该精确投入时启用。其数量与所有其他交换分开保存。

- 选定流：Potable water
- 流属性/单位：Volume / m3
- 数量规则：从专用仪表读取该已命名载体，或使用有文件记录的因果驱动因子分配经核对的共用仪表；不得合并另一载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氯化铁混凝剂（`wwt_ferric_chloride`）

Ferric chloride 作为唯一的氯化铁混凝剂进入场内废水处理边界。仅当场内处理消耗该精确投入时启用。其数量与所有其他交换分开保存。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 阴离子聚丙烯酰胺絮凝剂（`wwt_polyacrylamide`）

Anionic polyacrylamide 作为唯一的阴离子聚丙烯酰胺絮凝剂进入场内废水处理边界。仅当场内处理消耗该精确投入时启用。其数量与所有其他交换分开保存。

- 选定流：Anionic polyacrylamide
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 废水处理氢氧化钠（`wwt_sodium_hydroxide`）

Sodium hydroxide 作为唯一的废水处理氢氧化钠进入场内废水处理边界。仅当场内处理消耗该精确投入时启用。其数量与所有其他交换分开保存。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 废水处理硫酸（`wwt_sulfuric_acid`）

Sulfuric acid 作为唯一的废水处理硫酸进入场内废水处理边界。仅当场内处理消耗该精确投入时启用。其数量与所有其他交换分开保存。

- 选定流：Sulfuric acid
- 流属性/单位：Mass / kg
- 数量规则：根据批次领用与退库记录称量这一种配方成分，并与获批产品特定配方核对；本 PCR 不提供默认剂量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumables`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

###### 原料整理清洗废水进水（`wwt_preparation_washwater`）

Raw-material preparation washwater 作为唯一的原料整理清洗废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Raw-material preparation washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 腌制漂洗废水进水（`wwt_curing_rinse_wastewater`）

Curing-rinse wastewater 作为唯一的腌制漂洗废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Curing-rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 腌制设备清洗废水进水（`wwt_curing_equipment_washwater`）

Curing-equipment washwater 作为唯一的腌制设备清洗废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Curing-equipment washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 干燥机清洗废水进水（`wwt_dryer_cleaning_wastewater`）

Dryer cleaning wastewater 作为唯一的干燥机清洗废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Dryer cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 烟气洗涤废液进水（`wwt_smoke_scrubber_liquor`）

Smoke-scrubber liquor 作为唯一的烟气洗涤废液进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Smoke-scrubber liquor
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 烟熏间清洗废水进水（`wwt_smokehouse_cleaning_wastewater`）

Smokehouse cleaning wastewater 作为唯一的烟熏间清洗废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Smokehouse cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 食用粉生产线清洗废水进水（`wwt_flour_cleaning_wastewater`）

Flour-line cleaning wastewater 作为唯一的食用粉生产线清洗废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Flour-line cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 包装线冲洗废水进水（`wwt_packaging_washwater`）

Packaging-line washwater 作为唯一的包装线冲洗废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Packaging-line washwater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氢氧化钠卫生废水进水（`wwt_sodium_hydroxide_wastewater`）

Sodium-hydroxide sanitation wastewater 作为唯一的氢氧化钠卫生废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Sodium-hydroxide sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硝酸卫生废水进水（`wwt_nitric_acid_wastewater`）

Nitric-acid sanitation wastewater 作为唯一的硝酸卫生废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Nitric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 磷酸卫生废水进水（`wwt_phosphoric_acid_wastewater`）

Phosphoric-acid sanitation wastewater 作为唯一的磷酸卫生废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Phosphoric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 过氧乙酸卫生废水进水（`wwt_peracetic_acid_wastewater`）

Peracetic-acid sanitation wastewater 作为唯一的过氧乙酸卫生废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Peracetic-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 次氯酸钠卫生废水进水（`wwt_hypochlorite_wastewater`）

Sodium-hypochlorite sanitation wastewater 作为唯一的次氯酸钠卫生废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Sodium-hypochlorite sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 苯扎氯铵卫生废水进水（`wwt_benzalkonium_wastewater`）

Benzalkonium-chloride sanitation wastewater 作为唯一的苯扎氯铵卫生废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Benzalkonium-chloride sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 末次漂洗卫生废水进水（`wwt_final_rinse_wastewater`）

Final-rinse sanitation wastewater 作为唯一的末次漂洗卫生废水进水进入场内废水处理边界。仅当该精确已命名流在场内处理时启用，并保留其上游行链接。其数量与所有其他交换分开保存。

- 选定流：Final-rinse sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

本过程没有该方向和类型的交换。

#### 输出

##### 产品流

###### 回收废水油脂（`wwt_recovered_grease`）

Recovered wastewater grease 作为唯一的回收废水油脂离开场内废水处理边界。仅当回收油脂有文件记录的合法产品去向时启用；否则使用废弃油脂废物流行。其数量与所有其他交换分开保存。

- 选定流：Recovered wastewater grease
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤测量净产出质量，保留精确物种、组织、路线、状态和批次链接，并防止在另一产出中重复报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

###### 废水筛渣（`wwt_screenings`）

Wastewater screenings 作为唯一的废水筛渣离开场内废水处理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Wastewater screenings
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 溶气气浮污泥（`wwt_daf_sludge`）

Dissolved-air-flotation sludge 作为唯一的溶气气浮污泥离开场内废水处理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Dissolved-air-flotation sludge
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 生化废水污泥（`wwt_biological_sludge`）

Biological wastewater sludge 作为唯一的生化废水污泥离开场内废水处理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 废弃废水油脂（`wwt_discarded_grease`）

Discarded wastewater grease 作为唯一的废弃废水油脂离开场内废水处理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Discarded wastewater grease
- 流属性/单位：Mass / kg
- 数量规则：通过校准容器称量或体积记录分别测量该已命名废物，并保留其处理去向及产品/废物判定。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 处理废水出水（`wwt_treated_effluent`）

Treated wastewater effluent 作为唯一的处理废水出水离开场内废水处理边界。仅在该交换对声明批次实际发生时记录。其数量与所有其他交换分开保存。

- 选定流：Treated wastewater effluent
- 流属性/单位：Volume / m3
- 数量规则：在混合前使用专用流量计、罐体记录或有文件记录的水力分配测量该已命名废水，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### 五日生化需氧量排放（`wwt_bod5_water`）

Biochemical oxygen demand, 5 days, to water 作为唯一的五日生化需氧量排放离开场内废水处理边界。仅当声明排放监测或要求该精确参数时启用；不得以另一参数替代。其数量与所有其他交换分开保存。

- 选定流：Biochemical oxygen demand, 5 days, to water
- 流属性/单位：Mass / kg
- 数量规则：将匹配出水体积乘以该单项污染物实测浓度计算水体释放，并保留单位换算和采样基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_water_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 化学需氧量排放（`wwt_cod_water`）

Chemical oxygen demand, to water 作为唯一的化学需氧量排放离开场内废水处理边界。仅当声明排放监测或要求该精确参数时启用；不得以另一参数替代。其数量与所有其他交换分开保存。

- 选定流：Chemical oxygen demand, to water
- 流属性/单位：Mass / kg
- 数量规则：将匹配出水体积乘以该单项污染物实测浓度计算水体释放，并保留单位换算和采样基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_water_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 总悬浮固体排放（`wwt_tss_water`）

Total suspended solids, to water 作为唯一的总悬浮固体排放离开场内废水处理边界。仅当声明排放监测或要求该精确参数时启用；不得以另一参数替代。其数量与所有其他交换分开保存。

- 选定流：Total suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：将匹配出水体积乘以该单项污染物实测浓度计算水体释放，并保留单位换算和采样基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_water_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 总氮排放（`wwt_total_n_water`）

Total nitrogen, to water 作为唯一的总氮排放离开场内废水处理边界。仅当声明排放监测或要求该精确参数时启用；不得以另一参数替代。其数量与所有其他交换分开保存。

- 选定流：Total nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：将匹配出水体积乘以该单项污染物实测浓度计算水体释放，并保留单位换算和采样基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_water_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 总磷排放（`wwt_total_p_water`）

Total phosphorus, to water 作为唯一的总磷排放离开场内废水处理边界。仅当声明排放监测或要求该精确参数时启用；不得以另一参数替代。其数量与所有其他交换分开保存。

- 选定流：Total phosphorus, to water
- 流属性/单位：Mass / kg
- 数量规则：将匹配出水体积乘以该单项污染物实测浓度计算水体释放，并保留单位换算和采样基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_water_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氯化物排放（`wwt_chloride_water`）

Chloride, to water 作为唯一的氯化物排放离开场内废水处理边界。仅当声明排放监测或要求该精确参数时启用；不得以另一参数替代。其数量与所有其他交换分开保存。

- 选定流：Chloride, to water
- 流属性/单位：Mass / kg
- 数量规则：将匹配出水体积乘以该单项污染物实测浓度计算水体释放，并保留单位换算和采样基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_water_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 生物源甲烷释放（`wwt_methane_air`）

Methane, biogenic, to air 作为唯一的生物源甲烷释放离开场内废水处理边界。仅当直接监测或有文件记录的场址计算识别出该精确处理释放时启用。其数量与所有其他交换分开保存。

- 选定流：Methane, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 生物源二氧化碳释放（`wwt_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 作为唯一的生物源二氧化碳释放离开场内废水处理边界。仅当直接监测或有文件记录的场址计算识别出该精确处理释放时启用。其数量与所有其他交换分开保存。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氧化亚氮释放（`wwt_nitrous_oxide_air`）

Dinitrogen monoxide, to air 作为唯一的氧化亚氮释放离开场内废水处理边界。仅当直接监测或有文件记录的场址计算识别出该精确处理释放时启用。其数量与所有其他交换分开保存。

- 选定流：Dinitrogen monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：直接测量这一种物质，或使用匹配的前景活动记录和有文件记录的场址特定因子计算；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格 CPC 21183 参考产品，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用过程 | 在采用任何分配前，优先使用实测过程细分和直接批次归属。 | `eu-pef-2021-2279` |
| `allocation_mass_balance` | 物种、组织、路线和状态产出 | 核对验收投入、配料、产品、不合格品、残余物、废水和实测水分变化，不得重复计算同一物理质量。 | `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `allocation_product_waste_status` | 回收物料 | 仅在有文件记录的合法用途和去向时将产出分类为产品；否则保留精确废物身份。 | `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `allocation_internal_recycle` | 回用盐水和内部循环 | 将内部回用作为内部转移，分别记录补充量和排空量，并避免将循环量作为新的外部投入报告。 | `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `allocation_fallback` | 不可避免的共用负荷 | 若无法细分或建立物理因果关系，须记录符合 PEF 的分配基准，并保留分子、分母和受影响行。 | `eu-pef-2021-2279` |
| `allocation_sensitivity` | 重要分配 | 当共用屠宰、保藏、公用工程或共产品分配对结果产生实质影响时，执行并披露敏感性检查。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_materials` | `raw_material_receipt_and_preparation` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_receipt_utilities` | `raw_material_receipt_and_preparation` | 一种已命名公用工程或燃料载体 | 分表、储罐、发票或运行记录 | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | 从专用记录读取一种载体，或对经核对的共用记录采用有文件记录的因果分配。 | m3, kWh, MJ, or kg as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；储罐核对；分配工作表 |
| `cp_receipt_refrigerants` | `raw_material_receipt_and_preparation` | 物质特定制冷剂补充与释放 | 制冷剂维护与库存记录 | row_id; refrigerant_identity; origin; opening_stock; purchased_mass; recovered_mass; closing_stock; make_up_mass; released_mass; unit; service_event_id; timestamp | 对一种制冷剂及来源核对钢瓶称量、采购、回收、期末库存和维护事件。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 钢瓶校准；维护记录；采购记录；物质平衡 |
| `cp_receipt_outputs` | `raw_material_receipt_and_preparation` | 精确中间体、成品或回收产品质量 | 校准秤和放行记录 | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | 测量毛重和皮重，计算净质量，保留所有身份限定信息，并与匹配过程平衡核对。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；放行记录；路线追溯；质量平衡批准 |
| `cp_receipt_residues` | `raw_material_receipt_and_preparation` | 一种已命名废物、废水或残余物流 | 容器秤、流量计、储罐和去向记录 | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | 在混合前测量已命名流，保留产品/废物分类，并核对转移和去向记录。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤或仪表校准；储罐记录；废物联单；去向接收凭证 |
| `cp_cure_materials` | `cure_formulation_and_application` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_cure_formulation` | `cure_formulation_and_application` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_cure_utilities` | `cure_formulation_and_application` | 一种已命名公用工程或燃料载体 | 分表、储罐、发票或运行记录 | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | 从专用记录读取一种载体，或对经核对的共用记录采用有文件记录的因果分配。 | m3, kWh, MJ, or kg as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；储罐核对；分配工作表 |
| `cp_cure_outputs` | `cure_formulation_and_application` | 精确中间体、成品或回收产品质量 | 校准秤和放行记录 | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | 测量毛重和皮重，计算净质量，保留所有身份限定信息，并与匹配过程平衡核对。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；放行记录；路线追溯；质量平衡批准 |
| `cp_cure_residues` | `cure_formulation_and_application` | 一种已命名废物、废水或残余物流 | 容器秤、流量计、储罐和去向记录 | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | 在混合前测量已命名流，保留产品/废物分类，并核对转移和去向记录。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤或仪表校准；储罐记录；废物联单；去向接收凭证 |
| `cp_cure_emissions` | `cure_formulation_and_application` | 一种已命名直接空气释放 | 直接测量或活动量-因子计算文件 | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | 使用直接监测，或根据匹配活动记录和有文件记录的场址特定因子计算一种物质；保留完整计算。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 校准或实验室证据；因子溯源；可复现计算 |
| `cp_drying_materials` | `controlled_drying` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_drying_utilities` | `controlled_drying` | 一种已命名公用工程或燃料载体 | 分表、储罐、发票或运行记录 | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | 从专用记录读取一种载体，或对经核对的共用记录采用有文件记录的因果分配。 | m3, kWh, MJ, or kg as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；储罐核对；分配工作表 |
| `cp_drying_outputs` | `controlled_drying` | 精确中间体、成品或回收产品质量 | 校准秤和放行记录 | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | 测量毛重和皮重，计算净质量，保留所有身份限定信息，并与匹配过程平衡核对。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；放行记录；路线追溯；质量平衡批准 |
| `cp_drying_residues` | `controlled_drying` | 一种已命名废物、废水或残余物流 | 容器秤、流量计、储罐和去向记录 | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | 在混合前测量已命名流，保留产品/废物分类，并核对转移和去向记录。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤或仪表校准；储罐记录；废物联单；去向接收凭证 |
| `cp_drying_emissions` | `controlled_drying` | 一种已命名直接空气释放 | 直接测量或活动量-因子计算文件 | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | 使用直接监测，或根据匹配活动记录和有文件记录的场址特定因子计算一种物质；保留完整计算。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 校准或实验室证据；因子溯源；可复现计算 |
| `cp_smoke_materials` | `smoke_treatment` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_smoke_inputs` | `smoke_treatment` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_smoke_utilities` | `smoke_treatment` | 一种已命名公用工程或燃料载体 | 分表、储罐、发票或运行记录 | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | 从专用记录读取一种载体，或对经核对的共用记录采用有文件记录的因果分配。 | m3, kWh, MJ, or kg as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；储罐核对；分配工作表 |
| `cp_smoke_outputs` | `smoke_treatment` | 精确中间体、成品或回收产品质量 | 校准秤和放行记录 | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | 测量毛重和皮重，计算净质量，保留所有身份限定信息，并与匹配过程平衡核对。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；放行记录；路线追溯；质量平衡批准 |
| `cp_smoke_residues` | `smoke_treatment` | 一种已命名废物、废水或残余物流 | 容器秤、流量计、储罐和去向记录 | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | 在混合前测量已命名流，保留产品/废物分类，并核对转移和去向记录。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤或仪表校准；储罐记录；废物联单；去向接收凭证 |
| `cp_smoke_emissions` | `smoke_treatment` | 一种已命名直接空气释放 | 直接测量或活动量-因子计算文件 | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | 使用直接监测，或根据匹配活动记录和有文件记录的场址特定因子计算一种物质；保留完整计算。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 校准或实验室证据；因子溯源；可复现计算 |
| `cp_flour_materials` | `edible_flour_meal_production` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_flour_utilities` | `edible_flour_meal_production` | 一种已命名公用工程或燃料载体 | 分表、储罐、发票或运行记录 | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | 从专用记录读取一种载体，或对经核对的共用记录采用有文件记录的因果分配。 | m3, kWh, MJ, or kg as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；储罐核对；分配工作表 |
| `cp_flour_outputs` | `edible_flour_meal_production` | 精确中间体、成品或回收产品质量 | 校准秤和放行记录 | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | 测量毛重和皮重，计算净质量，保留所有身份限定信息，并与匹配过程平衡核对。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；放行记录；路线追溯；质量平衡批准 |
| `cp_flour_residues` | `edible_flour_meal_production` | 一种已命名废物、废水或残余物流 | 容器秤、流量计、储罐和去向记录 | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | 在混合前测量已命名流，保留产品/废物分类，并核对转移和去向记录。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤或仪表校准；储罐记录；废物联单；去向接收凭证 |
| `cp_flour_emissions` | `edible_flour_meal_production` | 一种已命名直接空气释放 | 直接测量或活动量-因子计算文件 | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | 使用直接监测，或根据匹配活动记录和有文件记录的场址特定因子计算一种物质；保留完整计算。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 校准或实验室证据；因子溯源；可复现计算 |
| `cp_pack_products` | `packaging_and_release` | 精确中间体、成品或回收产品质量 | 校准秤和放行记录 | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | 测量毛重和皮重，计算净质量，保留所有身份限定信息，并与匹配过程平衡核对。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；放行记录；路线追溯；质量平衡批准 |
| `cp_pack_energy` | `packaging_and_release` | 一种已命名公用工程或燃料载体 | 分表、储罐、发票或运行记录 | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | 从专用记录读取一种载体，或对经核对的共用记录采用有文件记录的因果分配。 | m3, kWh, MJ, or kg as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；储罐核对；分配工作表 |
| `cp_pack_materials` | `packaging_and_release` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_pack_refrigerants` | `packaging_and_release` | 物质特定制冷剂补充与释放 | 制冷剂维护与库存记录 | row_id; refrigerant_identity; origin; opening_stock; purchased_mass; recovered_mass; closing_stock; make_up_mass; released_mass; unit; service_event_id; timestamp | 对一种制冷剂及来源核对钢瓶称量、采购、回收、期末库存和维护事件。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 钢瓶校准；维护记录；采购记录；物质平衡 |
| `cp_pack_waste` | `packaging_and_release` | 一种已命名废物、废水或残余物流 | 容器秤、流量计、储罐和去向记录 | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | 在混合前测量已命名流，保留产品/废物分类，并核对转移和去向记录。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤或仪表校准；储罐记录；废物联单；去向接收凭证 |
| `cp_pack_emissions` | `packaging_and_release` | 一种已命名直接空气释放 | 直接测量或活动量-因子计算文件 | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | 使用直接监测，或根据匹配活动记录和有文件记录的场址特定因子计算一种物质；保留完整计算。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 校准或实验室证据；因子溯源；可复现计算 |
| `cp_sanitation_inputs` | `cleaning_and_disinfection` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_sanitation_residues` | `cleaning_and_disinfection` | 一种已命名废物、废水或残余物流 | 容器秤、流量计、储罐和去向记录 | row_id; batch_id; stream_identity; gross_mass; tare_mass; net_mass; volume; unit; classification; destination; manifest_id; timestamp | 在混合前测量已命名流，保留产品/废物分类，并核对转移和去向记录。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤或仪表校准；储罐记录；废物联单；去向接收凭证 |
| `cp_sanitation_emissions` | `cleaning_and_disinfection` | 一种已命名直接空气释放 | 直接测量或活动量-因子计算文件 | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | 使用直接监测，或根据匹配活动记录和有文件记录的场址特定因子计算一种物质；保留完整计算。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 校准或实验室证据；因子溯源；可复现计算 |
| `cp_wwt_utilities` | `onsite_wastewater_treatment` | 一种已命名公用工程或燃料载体 | 分表、储罐、发票或运行记录 | row_id; meter_id; opening_reading; closing_reading; purchased_quantity; unit; allocation_driver; operating_hours; timestamp | 从专用记录读取一种载体，或对经核对的共用记录采用有文件记录的因果分配。 | m3, kWh, MJ, or kg as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 仪表校准；发票；储罐核对；分配工作表 |
| `cp_wwt_consumables` | `onsite_wastewater_treatment` | 一种已命名物料、配料、化学品或控制介质 | 批次领用、退库、称量和配方记录 | row_id; batch_id; material_identity; species; tissue; lot_id; issued_mass; returned_mass; net_mass; unit; recipe_id; timestamp | 对一个精确行测量毛重和皮重或核对领用与退库库存；根据获批批次记录验证身份。 | kg or m3 as declared | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；库存台账；获批配方；批次追溯 |
| `cp_wwt_influent` | `onsite_wastewater_treatment` | 一种已命名场内废水进水 | 流特定流量计或罐体转移记录 | row_id; source_row_id; stream_identity; volume; unit; treatment_train; transfer_time; meter_id; timestamp | 将一种废水投入关联至其上游行，在混合前测量，并核对处理线进水。 | m3 | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 流量计校准；来源行交叉表；水力平衡 |
| `cp_wwt_outputs` | `onsite_wastewater_treatment` | 精确中间体、成品或回收产品质量 | 校准秤和放行记录 | row_id; batch_id; species; tissue; route_code; finished_state; gross_mass; tare_mass; net_mass; unit; destination; release_status; timestamp | 测量毛重和皮重，计算净质量，保留所有身份限定信息，并与匹配过程平衡核对。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 秤校准；放行记录；路线追溯；质量平衡批准 |
| `cp_wwt_water_emissions` | `onsite_wastewater_treatment` | 单项处理出水污染物负荷 | 流量比例样品和实验室结果 | row_id; discharge_id; pollutant_identity; effluent_volume; concentration; volume_unit; concentration_unit; sampling_method; laboratory_id; timestamp | 将一个实测浓度与相应出水体积匹配，并保留采样和分析元数据。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 认可实验室报告；流量计校准；样品交接记录 |
| `cp_wwt_air_emissions` | `onsite_wastewater_treatment` | 一种已命名直接空气释放 | 直接测量或活动量-因子计算文件 | row_id; substance_identity; source_id; measured_mass; activity_value; factor_value; factor_source; unit; calculation_id; timestamp | 使用直接监测，或根据匹配活动记录和有文件记录的场址特定因子计算一种物质；保留完整计算。 | kg | 每批次或每次事件，并进行报告期核对 | 完整声明前景报告期 | 前景保藏加工设施 | 仅汇总分配给本过程和 row_id 的记录，防止重复分配，再按净合格参考产品质量归一化。 | 校准或实验室证据；因子溯源；可复现计算 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个非参考行 | 将匹配批次或报告期交换除以净合格参考产品质量；保留未舍入分子和分母。 | 行特定数量；净合格参考产品质量 | 每 1 kg 参考产品数量 | `eu-pef-2021-2279` |
| `calc_process_mass_balance` | 每个过程和批次 | 核对精确物种-组织投入与配方投入，以及产品、不合格品、残余物、废水携带质量和实测水分变化。 | 投入质量；产出质量；水分记录；废水固体 | 过程质量平衡残差 | `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_brine_balance` | 腌制配方 | 核对饮用水和每种精确配料，以及吸收量、留存盐水、回收盐水、排空、废盐水和设备废水。 | 配料领用；水表；盐水罐变化；排空；废盐水 | 配料特定盐水平衡 | `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `calc_moisture_loss` | 干燥和粉体调理 | 根据匹配进出产品质量和水分测量计算蒸发水，并校正加入或移除的固体。 | 投入质量和水分；产出质量和水分；加入固体；移除固体 | 释放至空气的水 | `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `calc_refrigerant_balance` | 每个制冷剂系统 | 根据物质特定期初库存、采购、补充、回收、转移和期末库存计算释放；保留 R-744 来源。 | 期初库存；采购；补充；回收；转移；期末库存 | 物质特定制冷剂释放 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_direct_air_release` | 每个计算空气排放行 | 将匹配过程活动量乘以一种物质的有文件记录场址特定因子，或使用直接监测；本 PCR 不提供因子。 | 匹配活动量；物质特定因子或直接测量 | 一种释放物质的质量 | `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_water_pollutant_load` | 每个废水污染物行 | 将同一流和期间的匹配出水体积乘以实测浓度，并明确单位换算。 | 出水体积；污染物浓度；单位换算 | 进入水体的污染物质量 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_packaging_scrap` | 每个包装组件 | 核对组件领用、包装单元、退库库存和同材料废料，不将包装计入参考产品质量。 | 组件领用；退库库存；包装单元数；废料质量 | 净组件投入和同材料废料 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | 参考产品 | 证明 CPC 21183、精确物种、精确肉或可食器官身份、有序路线、成品状态、食品可食性及包装质量排除。 | 产品规格；分类记录；批次放行；参考 UUID |
| `dq_route_traceability` | 保藏和粉体路线 | 适用时保留企业流程图、路线代码、操作顺序、设备身份、时间、温度、湿度、压力、气流、配方和成品储存状态。 | 获批流程图；批次表；设备日志；状态记录 |
| `dq_primary_foreground` | 前景操作 | 对每项物料、配料、公用工程、制冷剂、包装组件、产品、残余物、废水流和直接释放使用场址特定初级记录。 | 仪表；秤；发票；库存台账；维护日志；联单；实验室报告 |
| `dq_temporal_coverage` | 报告期 | 覆盖具有代表性的产品组合、所选路线、卫生作业、储存、公用工程和处理波动期间。 | 带日期记录；生产日历；完整性核对 |
| `dq_atomic_inventory` | 清单行 | 每行保留一个精确交换，并与 manifest 未解决 UUID 条目保持行级闭合。 | 有序 row-id 审计；UUID 登记；来源记录交叉表 |
| `dq_mass_brine_balance` | 质量和盐水平衡 | 核对精确产品质量、配方成分、水、盐水吸收、排空、残余物、水分损失和废水；用证据解释残差。 | 质量平衡工作表；盐水平衡工作表；审核批准 |
| `dq_smoke_evidence` | 烟熏处理 | 识别实际烟熏介质和方法，禁止未声明或不适宜烟熏燃料，并保留每项已报告烟熏物质的监测或计算证据。 | 烟熏介质规格；发生器日志；控制装置日志；排放记录 |
| `dq_refrigerant_balance` | 冷却系统 | 识别每种制冷剂，并对同一期间的补充、回收、转移、库存和释放进行核对；保留 R-744 来源。 | 钢瓶称量；维护日志；采购和回收记录；物质平衡 |
| `dq_flour_route` | 食用细粉或粗粉 | 对调理、干燥、粉碎、筛分、金属控制和装袋使用实际设施流程图及测量；不得推定通用路线。 | 设施流程图；设备清单；仪表映射；食品安全验证 |
| `dq_calculation_traceability` | 计算值 | 保留原始值、单位、因子、公式、换算、溯源及精确批次或期间链接。 | 可复现计算文件；来源记录 ID；计算审核 |
| `dq_independent_review` | 数据包 | 在生命周期提升前审核范围、身份、路线、清单完整性、分配、计算、数据质量、未解决 UUID 和排除项。 | 验证记录；审核人身份；问题处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | 参考流 | 要求 UUID 47ac991c-00e2-4c29-8df0-7a7b867c3e97、Product flow 类型、精确 CPC 21183 范围、Mass 属性 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66、kg 及恰好 1 kg 净产出。 | `unsd-cpc-3-21183` |
| `validate_scope_lock` | 产品身份 | 要求一个精确物种、一个精确肉或可食器官、一条有序路线、一个成品物理状态、一个储存状态和食品用途状态；拒绝混合身份。 | `unsd-cpc-3-21183`; `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_exact_source_rows` | 原料和中间体清单 | 要求在每个适用过程中使用精确物种-组织行；未列身份须新增原子行，不得使用其他肉或其他内脏选择器。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_route_sequence` | 过程选择 | 要求对腌制、干燥、烟熏、细粉或粗粉生产、包装、卫生作业和场内废水处理提供有文件记录的纳入决定及有序链接。 | `codex-cxs-192-1995`; `codex-cxc-68-2009`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `validate_atomic_exchange` | 清单 | 拒绝在一个选定流中合并载体、配料、烟熏介质、包装组件、产品、废物、废水污染物或排放。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_actual_formulation` | 腌制配方 | 要求每项纳入配料具有产品特定获批配方和前景领用记录；法规许可及技术示例不得填充默认投入。 | `codex-cxs-192-1995`; `fao-meat-preservation-1990`; `eu-pef-2021-2279` |
| `validate_smoke_medium` | 烟熏处理 | 要求一种实际声明烟熏介质和施用方法、独立控制装置记录及物质特定排放证据；拒绝禁用烟熏燃料或废物。 | `codex-cxc-68-2009`; `us-epa-ap42-meat-smokehouses`; `eu-pef-2021-2279` |
| `validate_flour_route` | 食用细粉或粗粉 | 要求对实际存在的每项操作提供企业特定调理、干燥、粉碎、筛分、金属控制和包装记录；拒绝假定通用工艺。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_reference_amount` | 数量模式 | 要求参考产出为唯一固定值，并禁止为非参考行虚构固定数量、默认因子或范围。 | `eu-pef-2021-2279` |
| `validate_unresolved_uuid` | 非参考身份 | 仅当 manifest.yaml 在同一 row_id 下包含相匹配的 selected_flow_candidates 和 rejected_candidates 时允许 UUID 留空。 | `eu-pef-2021-2279` |
| `validate_balances` | 前景平衡 | 要求物种-组织质量平衡、适用腌制或盐水平衡、干燥水分平衡、包装核对和制冷剂平衡。 | `fao-meat-preservation-1990`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_wastewater` | 废水 | 要求已命名废水投入、每项报告参数的匹配排放体积和浓度，以及无场内处理时有文件记录的场外转移。 | `ec-jrc-sa-bref-jrc135916`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_data_quality` | 前景数据包 | 要求初级记录可追溯、代表性时间覆盖、可复现计算、完整披露和独立审核证据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 锁定一个精确物种、组织、有序保藏或粉体路线及成品状态的 1 kg 净合格 CPC 21183 产品前景单元过程数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在精确身份和路线限定信息保持明确时，用于产品碳足迹、生命周期评价、供应商交换、设施改进和经审核聚合 |
| excluded_use | 直接表示其他 CPC 产品、不可食组织粉、饲料粉、混合物种/组织产品、未声明配方、未声明路线或假定通用食用粉工艺 |
| required_metadata | PCR id；CPC 代码；参考 UUID；精确物种；精确肉或器官；食品用途；有序路线；实际配方；烟熏介质；设备；工艺条件；成品和储存状态；包装；净质量；场址；地理；技术；批次；期间；分配；残余物去向；制冷剂；废水路线；未解决 UUID 登记 |
| required_quality_disclosure | 初级数据占比；仪表和秤覆盖；共用记录分配；质量、盐水、水分、水和制冷剂平衡；烟熏排放证据；粉体路线证据；数据缺口；计算溯源；验证发现 |
| update_trigger | 物种、组织、食品用途、配方、腌制方法、干燥技术、烟熏介质或方法、粉体设备、成品或储存状态、制冷剂、热供应、包装、卫生化学品、废水路线、分配、设施配置或代表期间发生变化 |

## 11. 数据源

| Source ID | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21183` | 数据集（`dataset`） | United Nations Statistics Division, Central Product Classification Version 3.0, code 21183, retained raw file CPC_Ver_3.0_Structure_30Jun2025.csv, SHA-256 5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c, retrieved 2026-06-23T08:55:39.235Z; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 21183 精确边界，以及盐渍、盐水腌制、干制、熏制、食用细粉和食用粗粉产品状态 |
| `ec-jrc-sa-bref-jrc135916` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199; https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 接收肉和内脏的处理、修整、卫生作业、公用工程、具体残余物、废水、排放及前景过程结构；不导入定量默认值 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text; https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定清单、企业特定前景数据、完整性、分配、透明度、计算可追溯性、数据质量和验证 |
| `codex-cxs-192-1995` | 标准（`standard`） | Codex Alimentarius, General Standard for Food Additives, CXS 192-1995, current official text; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B192-1995%2FCXS_192e.pdf | 区分干腌、盐水浸渍、盐水注射、热风干燥和真空干燥；许可添加剂不视为实际配方或默认用量 |
| `codex-cxc-58-2005` | 标准（`standard`） | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B58-2005%2FCXC_058e.pdf | 物种和组织身份控制、卫生整理、干制品防回潮、包装、金属碎片控制和不合格组织分流 |
| `codex-cxc-68-2009` | 标准（`standard`） | Codex Alimentarius, Code of Practice for the Reduction of Contamination of Food with Polycyclic Aromatic Hydrocarbons from Smoking and Direct Drying Processes, CXC 68-2009; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B68-2009%2FCXC_068e.pdf | 天然烟和烟熏液路线身份、烟熏介质限制、直接与间接烟熏控制、冷凝物与焦油管理及物质特定监测 |
| `fao-meat-preservation-1990` | 官方指南（`official_guidance`） | Food and Agriculture Organization of the United Nations, Manual on Simple Methods of Meat Preservation, Animal Production and Health Paper 79, 1990; https://www.fao.org/4/x6932e/x6932e00.htm | 将干盐渍与盐水配制作为独立操作、沥液、干燥气流、木烟、水分控制、包装组件和质量记录；不导入示例数量 |
| `eu-fdm-bat-2019-2031` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries; https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 分别记录水、电力、热、原料、残余物、废水、废气、清洗、制冷、氯化物和污染物；BAT 水平不作为产品默认值 |
| `us-epa-ap42-meat-smokehouses` | 官方指南（`official_guidance`） | United States Environmental Protection Agency, AP-42 Section 9.5.2 Meat Smokehouses; https://www.epa.gov/sites/default/files/2020-10/documents/c9s05-2.pdf | 硬木片、硬木锯末、液体烟、电加热、蒸汽加热、燃气加热、烟气控制和单项烟熏污染物筛选；不导入 AP-42 因子 |

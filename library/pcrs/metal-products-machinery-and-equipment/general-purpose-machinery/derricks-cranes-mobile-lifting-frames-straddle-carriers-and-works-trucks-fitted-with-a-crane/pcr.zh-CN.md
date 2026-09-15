---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.derricks-cranes-mobile-lifting-frames-straddle-carriers-and-works-trucks-fitted-with-a-crane
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 桅杆式起重机；起重机；移动式吊运架、跨运车及装有起重机的作业车辆

## 1. 范围与适用性

本 PCR 适用于完整桅杆式起重机、起重机、移动式吊运架、跨运车以及装有起重机的作业车辆的前景制造过程。边界从材料和外购组件进入制造场址开始，包括构件制造、适用时的涂装、总装、出厂验收试验，直至产品在制造商厂门交付。

本 PCR 不包括作为完整道路车辆的随车起重运输车、不带起重机的叉车、单独销售的起重设备零件、客户现场安装和土建工程、维修服务、使用、维护及报废。数据包必须声明产品族、结构构型、额定起重量、移动与驱动系统、制造场址和年份、涂层路线及厂门产品状态。产品差异通过有明确适用条件的原子交换表示，不得将不相容的产品变型直接平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.derricks-cranes-mobile-lifting-frames-straddle-carriers-and-works-trucks-fitted-with-a-crane |
| classification_refs | CPC 3.0: 43520（`un-cpc-3-0-2025`） |
| covered_products | 完整桅杆式起重机；固定式、移动式、桥式、门式、塔式及其他起重机；移动式吊运架；跨运车；装有起重机的非道路作业车辆 |
| excluded_products | 作为完整道路车辆的随车起重运输车；不带起重机的叉车和作业车辆；单独销售的起重机零件；起重设备制造服务；安装、维修和租赁服务 |
| representative_product | 通过出厂试验并验收的完整起重或搬运设备 |
| production_route | 接收金属产品及外购系统 -> 下料/成形/机加工 -> 结构连接 -> 适用时的表面预处理和涂装 -> 总装和出厂验收试验 |
| market_state | 制造商厂门的完整设备，声明随产品交付的属具和出厂加注液体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造提供所声明起重或搬运功能的完整设备 |
| How much | 制造商厂门处 1,000 kg 完整设备 |
| How well | 符合所声明的产品族、结构构型、额定起重量、工作级别、移动与驱动系统，并通过制造商验收要求 |
| How long or cycle | 一个厂门完整产品；不表示运行寿命或起重循环 |
| reference_flow_link | `p04_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 转臂起重机，起重机，移动式吊架，跨（运）车，及装有起重机的工程卡车 `dc26f89f-da63-4bc3-bf19-8585b187a85d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族和型号；结构构型；额定起重量和工作级别；固定、轨道、轮胎或履带移动方式；电力、液压或内燃机驱动；所含属具；出厂加注液体状态；涂层体系；制造场址和地理范围；生产年份；厂门 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、产品说明、参考流备注或等效字段中声明。缺失必需限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单结果按 1,000 kg 验收合格完整产品归一化；产品质量不包括临时吊具和可重复使用的工厂工装。 |
| `internal_mass_link` | 内部制造、焊接和涂装结构 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在转序点以一致方式计量内部中间产品；除明确记录的库存变化外，接收过程数量必须等于供给过程数量。 |
| `energy_conversion` | 电力和燃料 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始计量单位并记录换算因子；电能 MJ 与燃料能量或燃料质量记录必须分开报告。 |
| `engine_count` | 柴油发动机 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 记录发动机件数，并在前景证据中另行保留发动机质量、额定功率和型号，未经披露不得平均产品变型。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 所有前景过程 | 纳入制造商直接控制的下料、成形、机加工、连接、制造商实施的表面处理、总装、试验、场内公用工程、直接排放和产生的废物，直至厂门交付。 | `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025` |
| `sb_purchased_inputs` | 外购材料、组件、能源和处理服务 | 每项外购输入均作为原子产品或服务链接记录，并要求上游数据集匹配材料牌号、组件状态、能源地理范围和供应商技术。 | `uctug-et-al-heavy-machinery-2025` |
| `sb_outsourced_operations` | 外协制造、涂装或处理 | 外协工序必须可见：记录发出和收回的中间产品以及外协工序数据集；不得将外协负荷视为零。 | `jrc-fabricated-metal-products-2015` |
| `sb_excluded_life_cycle` | 安装、使用、维护和报废 | 本制造厂门数据包不含出厂后的安装、运行、维护和报废，并须披露此项排除；仅可在另行声明的生命周期模型中增加这些阶段。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 金属产品及外购组件到达制造场址 |
| starting_condition_role | 前景制造输入门 |
| product_classification_scope | 与 CPC 3.0 43520 相关语义边界内的完整起重设备 |
| recursive_input_rule | 作为输入采购的完整 CPC 43520 产品继续作为单独定量的产品输入并链接自身上游数据集，不得并入前景参考产品 |
| upstream_dataset_requirement | 为接收的金属产品、组件、电力、燃料、化学品和外部处理服务提供供应商及地理范围相匹配的数据集 |
| disclosure | 声明产品族、所含组件和属具、材料牌号、外购与自制组件划分、涂层路线、驱动系统、外协工序、出厂加注液体和门点状态 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| p01_metal_preparation | 金属下料、成形和机加工 | required |  | 前景制造 | 转序的钢制构件 kg |
| p02_structural_joining | 结构连接 | required |  | 前景制造 | 转序的焊接钢结构 kg |
| p03_surface_treatment | 表面预处理和涂装 | conditional | 当喷砂、化学预处理、涂装、镀锌或其他涂层处理由所声明前景或外协供应商实施时纳入。 | 前景精加工 | 转序的涂装钢结构 kg |
| p04_assembly_testing | 总装和出厂验收试验 | required |  | 前景总装和试验 | 1,000 kg 验收合格参考产品 |

### 过程：金属下料、成形和机加工（`p01_metal_preparation`）

该过程把接收的钢板转化为成形和机加工结构件。JRC 金属制品报告识别了成形和去除加工过程，重型机械研究报告了钢板下料、弯曲及后续装配（`jrc-fabricated-metal-products-2015`；`uctug-et-al-heavy-machinery-2025`）。

#### 输入

##### 产品流

###### 钢板（`p01_steel_plate`）

钢板作为主要承载材料输入跨越前景边界。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：按钢材牌号和钢板规格计量实际消耗的接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`uctug-et-al-heavy-machinery-2025`

###### 电力（`p01_electricity`）

电力驱动分配至本过程的下料、成形和机加工设备。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量下料、成形和机加工电力；必要时对共用电表进行分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`jrc-fabricated-metal-products-2015`；`uctug-et-al-heavy-machinery-2025`

###### 工艺用水（`p01_process_water`）

仅对所声明的湿式机加工或水基冷却路线，工艺用水才跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：仅当湿式机加工或水基冷却跨越过程边界时，计量工艺用水输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`jrc-fabricated-metal-products-2015`

#### 输出

##### 产品流

###### 钢制构件（`p01_fabricated_steel_components`）

验收合格的钢制构件作为转入结构连接的内部产品离开金属准备过程。

- 选定流：钢制构件
- 流属性/单位：Mass / kg
- 数量规则：按构件批次计量转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer_mass`
- 来源：

##### 废物流

###### 工业后钢废料（`p01_steel_scrap`）

分类收集的边角料、切屑和报废构件作为工业后钢废料离开金属准备过程。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：计量离开该过程且已分类的钢板边角料、机加工切屑及报废钢构件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`jrc-fabricated-metal-products-2015`；`uctug-et-al-heavy-machinery-2025`

### 过程：结构连接（`p02_structural_joining`）

#### 输入

##### 产品流

###### 钢制构件（`p02_fabricated_steel_components`）

钢制构件作为从金属准备过程接收的内部产品进入结构连接。

- 选定流：钢制构件
- 流属性/单位：Mass / kg
- 数量规则：计量并链接至 `p01_fabricated_steel_components` 的输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer_mass`
- 来源：

###### 药芯焊丝（`p02_flux_cored_wire`）

在相应焊接工艺适用时，药芯焊丝作为焊接耗材跨越过程边界。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：当所声明焊接工艺使用药芯焊丝时，计量领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`uctug-et-al-heavy-machinery-2025`

###### 工业氧气（`p02_industrial_oxygen`）

工业氧气仅在所声明的切割或连接操作消耗氧气时进入过程。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在切割或连接使用氧气时，按所声明参考状态计量氧气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gas`
- 来源：

###### 电力（`p02_electricity`）

电力驱动焊接设备和分配至结构连接的专用抽排风系统。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量焊接和连接电力，包括分配至本过程的抽排风用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`jrc-fabricated-metal-products-2015`；`uctug-et-al-heavy-machinery-2025`

#### 输出

##### 产品流

###### 焊接钢结构（`p02_welded_steel_structure`）

验收合格的焊接承载结构作为内部产品离开结构连接过程。

- 选定流：焊接钢结构
- 流属性/单位：Mass / kg
- 数量规则：计量验收合格焊接结构的转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer_mass`
- 来源：

##### 基本流

###### 焊接颗粒物排入空气（`p02_welding_particulate`）

焊接产生的颗粒物在计入捕集量后作为直接空气排放跨越过程边界。

- 选定流：焊接产生的颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：计量有组织排放并估算未捕集焊接颗粒物，披露捕集效率和估算方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission`
- 来源：`jrc-fabricated-metal-products-2015`

### 过程：表面预处理和涂装（`p03_surface_treatment`）

该条件过程记录实际实施的每项精加工操作。JRC 来源将精加工识别为独立制造过程组，并强调水、能源、耗材、排放以及危险或液态废物；重型机械研究识别了喷砂、底漆/涂层、干燥和废涂料（`jrc-fabricated-metal-products-2015`；`uctug-et-al-heavy-machinery-2025`）。

#### 输入

##### 产品流

###### 焊接钢结构（`p03_welded_steel_structure`）

焊接结构从结构连接进入条件性的表面处理过程。

- 选定流：焊接钢结构
- 流属性/单位：Mass / kg
- 数量规则：计量并链接至 `p02_welded_steel_structure` 的输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer_mass`
- 来源：

###### 底漆（`p03_primer`）

底漆作为施涂于所声明结构的一种具体涂料产品跨越边界。

- 选定流：底漆 `e7084225-82a6-42d7-90e1-580a59a708cd`
- 流属性/单位：Mass / kg
- 数量规则：计量实际消耗的混合后底漆并扣除退回的未用材料；声明化学体系和固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_material`
- 来源：`uctug-et-al-heavy-machinery-2025`

###### 工艺用水（`p03_process_water`）

适用时，工艺用水进入水基清洗、漂洗或涂料配制。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量进入水基清洗、漂洗或涂料配制的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`jrc-fabricated-metal-products-2015`

###### 氢氧化钠（`p03_sodium_hydroxide`）

在适用的碱性清洗路线中，氢氧化钠作为活性物质进入过程。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：加入过程的碱性清洗液中活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_material`
- 来源：`jrc-fabricated-metal-products-2015`

###### 电力（`p03_electricity`）

电力驱动适用的表面准备、通风、涂装和固化设备。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量喷砂、通风、涂装和固化电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`jrc-fabricated-metal-products-2015`

###### 气态天然气（`p03_natural_gas`）

气态天然气仅在为喷漆房补风或涂层固化而直接燃烧时进入过程。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按所声明参考状态计量用于喷漆房补风或涂层固化的天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gas`
- 来源：`jrc-fabricated-metal-products-2015`

#### 输出

##### 产品流

###### 涂装钢结构（`p03_coated_steel_structure`）

验收合格的涂装结构作为转入总装的内部产品离开表面处理。

- 选定流：涂装钢结构
- 流属性/单位：Mass / kg
- 数量规则：计量验收合格涂装结构的转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer_mass`
- 来源：

##### 废物流

###### 废涂料残渣（`p03_waste_paint`）

未固化涂料残渣和受涂料污染材料作为一个废涂料交换离开过程。

- 选定流：废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位：Mass / kg
- 数量规则：计量作为废物离开过程的未固化涂料残渣和受涂料污染材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`jrc-fabricated-metal-products-2015`；`uctug-et-al-heavy-machinery-2025`

##### 基本流

###### 二氧化碳（化石源）排入空气（`p03_fossil_co2`）

场内直接燃烧天然气产生的化石二氧化碳作为空气排放跨越边界。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据所记录的燃料组成和碳平衡计算场内天然气燃烧直接化石二氧化碳；排除上游燃料排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission`
- 来源：

### 过程：总装和出厂验收试验（`p04_assembly_testing`）

#### 输入

##### 产品流

###### 涂装钢结构（`p04_coated_steel_structure`）

仅在所声明表面处理路线适用时，涂装结构才进入总装。

- 选定流：涂装钢结构
- 流属性/单位：Mass / kg
- 数量规则：纳入前景表面处理时，计量并链接至 `p03_coated_steel_structure` 的输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer_mass`
- 来源：

###### 未涂装焊接钢结构（`p04_uncoated_welded_structure`）

仅当前景不实施表面处理时，焊接结构才直接进入总装。

- 选定流：焊接钢结构
- 流属性/单位：Mass / kg
- 数量规则：仅当前景不实施表面处理时，计量并直接链接至 `p02_welded_steel_structure` 的输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer_mass`
- 来源：

###### 电动机（`p04_electric_motor`）

对适用的电力驱动，一项已安装电动机产品跨越总装边界。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：计量已安装的外购交流起升或运行电动机质量；声明额定功率和电动机类别
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_component`
- 来源：`uctug-et-al-heavy-machinery-2025`

###### 液压动力单元（`p04_hydraulic_power_unit`）

在液压驱动适用时，一项液压动力单元产品跨越总装边界。

- 选定流：液压动力单元
- 流属性/单位：Mass / kg
- 数量规则：所声明产品采用液压驱动时，计量已安装的外购液压动力单元质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_component`
- 来源：

###### 柴油发动机（`p04_diesel_engine`）

对适用的内燃机驱动，一项非道路柴油发动机产品跨越总装边界。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：Number of items / Item(s)
- 数量规则：所声明产品采用内燃机驱动时，计数已安装的非道路柴油发动机
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_component`
- 来源：`uctug-et-al-heavy-machinery-2025`

###### 柴油（`p04_diesel_fuel`）

柴油仅在出厂验收试验中被消耗时才跨越过程边界。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：仅计量出厂验收试验期间领用并消耗的柴油；排除出厂后运行燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_test`
- 来源：

###### 电力（`p04_electricity`）

电力驱动总装、调试和电气验收试验。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量总装、控制系统调试和电气验收试验用能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`uctug-et-al-heavy-machinery-2025`

#### 输出

##### 产品流

###### 验收合格完整起重设备（`p04_reference_product`）

验收合格完整设备作为 PCR 参考产品离开总装过程。

- 选定流：转臂起重机，起重机，移动式吊架，跨（运）车，及装有起重机的工程卡车 `dc26f89f-da63-4bc3-bf19-8585b187a85d`
- 流属性/单位：Mass / kg
- 数量规则：验收试验后的固定归一化输出，包括所声明的属具和出厂加注液体
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`

##### 基本流

###### 二氧化碳（化石源）排入空气（`p04_fossil_co2`）

出厂试验燃烧柴油产生的化石二氧化碳作为直接空气排放跨越边界。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据所记录燃料碳含量计算出厂试验燃烧柴油的直接化石二氧化碳；排除上游燃料排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格完整产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | 生产多个设备型号或组件的过程 | 优先按生产订单、工作中心、批次、电表或运行时间细分，再分配共用负荷。 |  |
| `al_physical_fallback` | 剩余共用能源、水和耗材 | 无法细分时，按针对该资源记录的因果物理驱动因素分配，例如机器时间、处理表面积、焊缝长度、涂料质量或验收产品质量。 | `jrc-fabricated-metal-products-2015` |
| `al_scrap_no_avoided_burden` | 离开边界的废钢和其他回收材料 | 将回收材料作为废物输出记录其质量、品质和去向；不得在前景清单内扣减所避免的原生生产。 |  |
| `al_economic_last_resort` | 无合理物理关系且不可分的共产品 | 仅在最后手段下采用经济分配，并披露价格、币种、参考期、敏感性和受影响清单行。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | p01_metal_preparation; p02_structural_joining | 钢板和焊接耗材输入 | 采购、领用和退回记录 | 订单；材料编号；牌号；毛质量；退回质量；批次；产品订单 | 经校准衡器及可追溯材料台账 | kg | 每次接收和领用 | 有代表性的连续 12 个月或完整生产批次 | 所有前景工作中心 | 消耗质量 = 领用质量 - 退回可用质量；按验收产品质量归一化 | 校准记录；材质证明；批次订单核对 |
| `cp_process_energy` | p01_metal_preparation; p02_structural_joining; p03_surface_treatment; p04_assembly_testing | 过程电力 | 分表和设备日志 | 电表编号；起止读数；设备功率；运行时间；待机时间；产品订单 | 分表计量；无分表时采用额定功率乘记录运行时间并说明负载因子 | MJ | 每批或每月电表周期 | 有代表性的连续 12 个月或完整生产批次 | 所有纳入的前景工作中心 | 扣除有记录的非生产负荷，按因果驱动因素分配共用能耗，换算 MJ 后归一化 | 电表校准；设备日志；与场址账单核对 |
| `cp_process_water` | p01_metal_preparation; p03_surface_treatment | 工艺用水输入 | 水表和槽液记录 | 仪表编号；体积或质量；来源；槽号；补水；排水 | 分表或经校准槽体变化 | kg | 每批或每月 | 有代表性的连续 12 个月或完整生产批次 | 所有纳入的湿式过程 | 汇总跨越各过程边界的净水量；记录密度换算 | 仪表校准；槽液台账；水平衡 |
| `cp_internal_transfer_mass` | p01_metal_preparation; p02_structural_joining; p03_surface_treatment; p04_assembly_testing | 内部中间产品 | 转序和生产订单记录 | 订单；组件或结构编号；发出过程；接收过程；质量；时间 | 经校准衡器或经定期称重验证的工程质量 | kg | 每个转序批次 | 完整生产批次 | 所有连接的前景过程 | 归一化前核对发出与接收数量 | 衡器校准；工艺流转卡；核对报告 |
| `cp_waste_mass` | p01_metal_preparation; p03_surface_treatment | 废钢和废涂料 | 废物容器和转移记录 | 废物编号；容器皮重；毛质量；组成；危险类别；去向；日期 | 容器关闭或转移时经校准称重 | kg | 每次转移 | 有代表性的连续 12 个月或完整生产批次 | 所有纳入工作中心和废物贮存区 | 净质量 = 毛质量 - 皮重；按已标记来源或有记录质量平衡归属 | 校准；转移联单；废物分类 |
| `cp_process_gas` | p02_structural_joining; p03_surface_treatment | 氧气和天然气 | 仪表或气瓶记录 | 气体编号；体积；压力；温度；起止读数；退回气瓶 | 经校准仪表或气瓶质量/体积核对 | m3 | 每批或每月 | 有代表性的连续 12 个月或完整生产批次 | 所有纳入耗气过程 | 换算至所声明参考状态并归一化 | 仪表校准；供应商记录；参考状态计算 |
| `cp_coating_material` | p03_surface_treatment | 底漆和碱性清洗剂 | 配制和领用记录 | 产品编号；批次；供料质量；浓度；固体含量；混合质量；退回质量；处理订单 | 经校准衡器和配方台账 | kg | 每次配制和涂装批次 | 有代表性的连续 12 个月或完整生产批次 | 所有纳入涂装线 | 按领用减退回质量及浓度计算产品或活性物质消耗 | 衡器校准；SDS；配方；批次核对 |
| `cp_purchased_component` | p04_assembly_testing | 已安装电动机、液压单元和发动机 | 物料清单和安装记录 | 组件编号；供应商；型号；件数；质量；额定能力；产品订单 | 采购/物料清单核对并定期称重 | kg 或 Item(s) | 每个产品订单 | 完整生产批次 | 总装及纳入的供应商 | 按准确组件身份汇总已安装数量后归一化 | 供应商声明；物料清单；安装签收 |
| `cp_factory_test` | p04_assembly_testing | 验收试验柴油 | 领用和试验日志 | 产品订单；燃料批次；领用质量；退回质量；试验起止；结果 | 经校准燃料计量表或衡器 | kg | 每次试验 | 完整生产批次 | 出厂验收试验区域 | 消耗质量 = 领用 - 回收/退回；排除留在所声明产品状态中的燃料 | 校准；试验记录；燃料台账 |
| `cp_direct_emission` | p02_structural_joining; p03_surface_treatment; p04_assembly_testing | 直接空气排放 | 监测和计算记录 | 排口编号；运行期；实测浓度和流量或燃料数量/组成；捕集效率；方法 | 烟道监测或基于采集活动数据的透明质量平衡计算 | kg | 每个试验批次和报告期 | 有代表性的连续 12 个月或完整生产批次 | 所有直接前景排放点 | 汇总实测和计算直接排放；排除上游排放；归一化 | 认可报告或计算表；仪器校准；活动数据核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 所有非参考清单行 | 归一化数量 = 过程数量 / 验收产品质量 * 1,000 kg | 采集的过程数量；验收产品质量 | 每 1,000 kg 参考产品的清单行数量 |  |
| `calc_shared_energy` | 共用过程电力 | 分配能耗 = 电表周期能耗 * 产品订单的因果驱动量 / 电表周期驱动总量 | 电表读数；运行时间、机器时间或其他合理驱动量 | 分配至产品订单的 MJ | `uctug-et-al-heavy-machinery-2025` |
| `calc_active_naoh` | 氢氧化钠输入 | 活性 NaOH 质量 = 添加溶液质量 * 实测或供应商声明的 NaOH 质量分数 | 溶液质量；浓度 | kg 活性氢氧化钠 |  |
| `calc_fossil_co2` | 直接燃料燃烧 | 化石 CO2 = 燃料质量或参考状态体积 * 化石碳含量 * 氧化率 * 44/12；披露全部因子并排除上游排放 | 燃料记录；组成；氧化因子 | kg 排入空气的化石二氧化碳 |  |
| `calc_mass_reconciliation` | 制造和总装质量平衡 | 接收材料和组件 = 验收产品 + 内部库存变化 + 废物 + 已量化直接材料损失，允许有记录的测量不确定度 | 材料、组件、内部转序、废物和产品质量记录 | 核对差异和完整性发现 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和组件 | 保留产品型号、构型、额定能力、驱动类型、属具、物料清单版本及验收序列号/订单号。 | 产品规范；物料清单；验收证明 |
| `dq_temporal` | 前景记录 | 使用有代表性的连续 12 个月或完整生产批次；披露停产、样机和异常批次。 | 带日期台账、仪表序列和生产计划 |
| `dq_completeness` | 所有过程行 | 核对质量、能源仪表、外购组件、废物转移和直接排放；解释每项被省略的适用交换。 | 核对报告和省略登记 |
| `dq_geography_technology` | 上游链接 | 匹配供应商地理范围、材料牌号、再生含量、电网、燃料供应及组件技术；披露代理数据。 | 供应商声明和数据集元数据 |
| `dq_measurement` | 前景测量 | 使用经校准仪器并保留单位换算、仪表覆盖率、分配驱动量、检出限和不确定度。 | 校准证书和计算工作簿 |
| `dq_conditional_routes` | 涂装、液压和柴油路线 | 按产品和工艺路线证据将每个条件过程和交换标记为适用或不适用；不得把不存在的路线平均到产品记录中。 | 工艺路线单；产品规范；工艺流转卡 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_flow` | 参考产品 | 确认恰为 1,000 kg 验收合格厂门产品且具有全部必需限定信息；UUID、质量属性和 kg 单位必须与参考流定义一致。 |  |
| `vr_process_linkage` | 内部中间产品 | 确认每个内部供给行在扣除所声明库存变化后具有等量接收行，且仅有涂装或未涂装结构路线之一进入总装。 |  |
| `vr_atomic_inventory` | 所有清单行 | 确认每个选定流仅为一个物理、化学、废物、能源或基本流交换，并明确条件适用性。 |  |
| `vr_mass_balance` | 制造和总装 | 运行 `calc_mass_reconciliation`；调查超出测量不确定度的差异，禁止无法解释的负废物或材料数值。 |  |
| `vr_energy_boundary` | 电力和燃料 | 将过程能耗与场址账单核对，排除出厂后运行能耗，并将电力、天然气和柴油分别作为独立交换。 | `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025` |
| `vr_direct_emissions` | 化石 CO2 和焊接颗粒物 | 确认仅报告直接前景排放；保留监测或碳平衡证据并排除上游供应链排放。 |  |
| `vr_unresolved_evidence` | UUID 和范围审查缺口 | 发布前解决清单中的每项 UUID 缺口，并添加符合双来源要求的经验范围，或保留经审查的明确证据需求；不得虚构范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与所声明产品族、构型、能力、驱动、涂层路线、地理范围、年份及所含组件相匹配的完整起重设备制造厂门数据集 |
| excluded_use | 未建立功能等效时对不同起重机类型或能力作比较声明；作为道路车辆的随车起重运输车制造；未增加相应生命周期过程时的安装、运行、维护或报废建模 |
| required_metadata | 规范 PCR id；参考流 UUID；产品族/型号；额定能力和工作级别；移动和驱动方式；属具；出厂加注液体；物料清单版本；涂层路线；制造场址/地理范围/年份；外协工序；分配；数据覆盖 |
| required_quality_disclosure | 前景期间和覆盖；仪器校准；仪表分配；质量核对；条件路线决策；上游代理；未解决 UUID/范围证据；不确定度和数据质量评价 |
| update_trigger | 产品设计、能力等级、驱动系统、物料清单、钢材牌号、涂层路线、制造技术、供应商地理范围、能源结构、分配方法或前景数据期间发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《产品总分类第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-06-23；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 仅用于 CPC 43520 正式产品类别身份及层级 |
| `jrc-fabricated-metal-products-2015` | `official_guidance` | 欧盟委员会联合研究中心，《金属制品行业最佳环境管理实践背景文件》，2015-12，https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/inline-files/BEMP_FabMetProd_BackgroundReport.pdf（检索于 2026-09-05） | 成形、去除加工、连接、精加工和装配的过程分解；公用工程、水、耗材、排放和废物采集范围 |
| `uctug-et-al-heavy-machinery-2025` | `literature` | Üçtuğ, F.G. 等，《Cradle-to-gate life cycle assessment of heavy machinery manufacturing: a case study in Türkiye》，The International Journal of Life Cycle Assessment 30（2025），https://doi.org/10.1007/s11367-025-02462-7（检索于 2026-09-05） | 经原文核验的下料、弯曲、焊接、喷砂、涂装、干燥、外购组件装配、试验、废钢及废涂料制造序列；未采用其定量范围 |

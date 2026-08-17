---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-crude
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 粗大豆油

## 1. 范围与适用性

本 PCR 适用于油籽加工厂以大豆为原料生产粗大豆油的门到门过程。边界从接收大豆开始，包括接收与储存、清理、实际发生的干燥或调质、破碎、脱皮、蒸炒调质、轧片、机械压榨和/或溶剂浸出、适用时的油与豆粕脱溶、溶剂回收、粗油冷却、储存和装运。本 PCR 还包括这些作业对应的场内公用工程、回收溶剂内部循环、共产品、废物、废水和直接排放。

代表性路线为带溶剂回收的常规己烷浸出，因为官方工艺指南将其识别为广泛采用的路线。采用机械压榨或预榨—浸出组合路线时，必须声明路线，并采集路线特定的投入、产率、共产品和排放。参考产品是在浸出工厂门口供后续加工或装运的未精炼、已脱溶粗大豆油。

碱炼中和、脱色、脱臭以及精炼成品油生产等精炼作业不在本 PCR 范围内。已经历这些作业的大豆油、其他油籽油、化学改性油、废食用油、油/溶剂混合油、生物柴油和配方食品均排除。本 PCR 不构成食品安全合规认证。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-crude |
| classification_refs | CPC 3.0: 21611 — Soya bean oil, crude |
| covered_products | 由 *Glycine max* 种子经机械压榨、溶剂浸出或已声明的组合路线得到的粗大豆油；仅在明确声明脱胶状态且不声称为精炼油时，可包含沉降、过滤、冷却、储存或水化脱胶 |
| excluded_products | 精炼大豆油；其他植物来源的油；油/己烷混合油；氢化、酯交换、再酯化或其他化学改性油；废食用油；生物柴油；面向消费者的配方产品 |
| representative_product | 常规己烷浸出生产的已脱溶粗大豆油，浸出工厂门口 |
| production_route | 大豆接收与预处理、提取、适用时的溶剂与豆粕脱溶、溶剂回收、粗油冷却、储存和装运；机械或组合路线必须明确声明 |
| market_state | 工厂门口散装粗制/未精炼油，拟用于后续精炼或其他已声明的工业用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在浸出工厂门口交付、作为后续加工原料的粗大豆油 |
| How much | 1 kg 净质量，不含包装 |
| How well | 来源为大豆；粗制/未精炼；溶剂路线须已脱溶；已声明提取路线、脱胶状态和产品规格 |
| How long or cycle | 一个生产批次或核算期的产出；声明装运前的储存时长与条件 |
| reference_flow_link | `crude_soya_bean_oil_at_plant_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 提取路线；大豆产地与等级；接收水分与杂质基准；工厂地理位置；粗制/未精炼状态；脱溶状态；脱胶状态；适用时的溶剂种类与回收配置；储存时长；分配方法；时间覆盖 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考粗大豆油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在脱溶后、下游精炼前的工厂门口转移点计量油品净质量；排除包装，并将全部清单量归一化到 1 kg 参考产品。 |
| `soybean_mass_basis` | 接收大豆、预处理豆片、豆皮、豆粕和筛除物 | Mass | kg | 保留实测湿基质量与水分；使用干基或净基时，必须保留原始测量值并记录水分、杂质和换算公式。 |
| `solvent_inventory_basis` | 新鲜、回收、储存、外运和损失的提取溶剂 | Mass 或带实测密度的 Volume | 首选 kg；在记录密度和温度时可用 L | 将新鲜补充溶剂与内部回收溶剂分开。仅用批次或期间代表性的密度与温度将体积换算为质量；不得把全部循环溶剂作为外部投入。 |
| `energy_unit_consistency` | 电力、蒸汽、燃料和外购热 | Energy | kWh 或 MJ | 保留计量单位与能源载体。任何 kWh 与 MJ 之间或蒸汽与能量之间的换算都必须说明换算因子、蒸汽状态和来源；不得混合能源量与燃料质量。 |
| `codex_identity_measurements` | 可选粗油身份检测 | 相对密度、折光指数、皂化值、碘值、不皂化物 | Codex CXS 210-1999 表 A2 单位 | 使用这些检测时，保留检测方法、温度、样品身份和结果。Codex 范围仅作身份筛查，不替代过程质量记录，也不构成食品安全合规判定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 大豆在浸出工厂接收时已称重，并声明产地、等级、水分、杂质、破损粒基准以及任何场外预处理 |
| starting_condition_role | 前景工厂门口投入；上游种植和交付负荷通过独立供应商或背景数据集连接 |
| product_classification_scope | 仅粗大豆油；CPC 3.0 代码 21611 是分类背景，不得把产品范围扩展到精炼油或化学改性油 |
| recursive_input_rule | 作为返工料、调和料或转移中间品使用的任何粗大豆油，均作为上游产品投入记录其数量、来源和既有负荷；不得在同一前景数据包中递归重建其生产 |
| upstream_dataset_requirement | 大豆生产与交付、电力、燃料或外购热、水、溶剂制造、辅助材料、氮气和处理服务须连接地理、时间和技术适配的数据集 |
| disclosure | 声明提取路线、工厂地理位置、核算期、大豆水分基准、溶剂系统与回收控制、脱胶状态、储存边界、共产品处理、分配方法、排除作业和全部临时默认值 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 粗油前景生产 | 包括接收与储存、清理、预处理、提取、脱溶、溶剂回收、粗油整理与储存、场内共产品处理、公用工程、废物、废水和直接排放，直至粗油装运。 | `us-epa-ap42-9-11-1-1995` |
| `boundary_refining_exclusion` | 下游油品处理 | 排除碱炼中和、脱色、脱臭和精炼成品油生产。同场址存在这些作业时，必须计量或细分，并只将精炼前负荷归入本 PCR。 | `unsd-cpc-3-2025`; `us-epa-ap42-9-11-1-1995` |
| `boundary_solvent_route` | 溶剂浸出路线 | 包括溶剂补充、库存变化、回收、排气与泄漏、实测的油或豆粕残留溶剂、废水相关损失和控制设备。不得把内部回收溶剂作为新的外部投入。 | `us-epa-ap42-9-11-1-1995` |
| `boundary_upstream_linking` | 外购投入 | 上游生产位于前景门外，同时每项物料、能源、水和服务投入都须连接适当上游数据集；披露缺失或代理数据集。 | `iso-14044-2006` |
| `boundary_route_specificity` | 机械、溶剂或组合路线 | 声明一种路线并仅纳入实际作业。机械路线中的溶剂专属行不得填零，应以路线证据标记为不适用。 | `us-epa-ap42-9-11-1-1995` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `soybean_receiving_preparation` | 大豆接收与预处理 | required | 始终从工厂接收开始纳入；干燥、调质和脱皮仅在实际发生时纳入 | 将接收大豆加工为提取原料的前景预处理 | 转入提取过程的预处理大豆或豆片 kg，与 1 kg 最终粗油核对 |
| `oil_extraction_recovery` | 油脂提取、脱溶与回收 | required | 声明机械、溶剂或组合路线；溶剂与回收行仅适用于溶剂路线 | 分离粗油与共产品的前景过程 | 转入储存的中间粗油 kg，与 1 kg 最终粗油核对 |
| `crude_oil_storage_loadout` | 粗油整理、储存与装运 | required | 始终纳入；过滤、水化脱胶、惰化和加热仅在实际发生时纳入 | 工厂门口参考产品的前景准备 | 装运时 1 kg 净粗大豆油 |

### 过程：大豆接收与预处理（`soybean_receiving_preparation`）

#### 输入

##### 产品流

###### 接收大豆（`received_soya_beans`）

记录进入浸出工厂的全部大豆，包括接收批次及判定水分和杂质所用的实测基准。

- 选定流：Soya beans, other
- 流属性/单位：Mass / kg
- 数量规则：称量接收大豆，并将验收投入归一化到 1 kg 最终粗油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_soybean_receipts`
- 来源：`us-epa-ap42-9-11-1-1995`

- 数量范围：根据已报道的大豆含油量和提取后残油量推导的初步大豆投入 QA 筛查值；须由工厂物料平衡替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：4
  - 上限：8
  - 单位：kg
  - 基准：每 1 kg 最终粗大豆油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`us-epa-ap42-9-11-1-1995`

###### 预处理电力（`preparation_electricity`）

记录输送、吸风、清理、破碎、脱皮、轧片和预处理辅助设备的计量电力。

- 选定流：Electricity, facility supply mix
- 流属性/单位：Energy / kWh
- 数量规则：用分表计量或有文件依据的分表规则将电力分配给预处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 预处理热（`preparation_heat`）

仅在实际发生干燥、调质和蒸炒调质时记录其燃料、外购热或蒸汽。

- 选定流：Route-specific heat or fuel supply
- 流属性/单位：Energy / MJ
- 数量规则：按能源载体和作业计量；未发生热预处理时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理大豆豆片或压榨料（`prepared_soya_feed`）

将转入提取过程的质量记录为内部产品流，以保持过程细分后的质量平衡。

- 选定流：Prepared soya bean flakes or press feed, internal
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量；仅可按已记录水分进行换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_transfer_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 大豆豆皮（`soybean_hulls`）

豆皮出售或有益利用时作为共产品记录；否则按实际处理路线分类为废物。

- 选定流：Soya bean hulls, facility market state
- 流属性/单位：Mass / kg
- 数量规则：按去向称量豆皮产出并保留水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 废物流

###### 清理筛除物（`cleaning_rejects`）

按处理去向记录异物、生产拒收的破损物料和未回收筛下物。

- 选定流：Oilseed cleaning rejects
- 流属性/单位：Mass / kg
- 数量规则：依据接收和清理记录称量或核对筛除物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 基本流

###### 预处理颗粒物排放（`preparation_particulate_releases`）

记录接收、输送、吸风、清理、破碎、脱皮、干燥和轧片经控制后的实测或许可直接颗粒物排放。

- 选定流：Particulate matter to air, size fraction reported
- 流属性/单位：Mass / kg
- 数量规则：针对每个排放源和控制配置使用烟道测试、连续记录或已披露的批准排放计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_release_records`
- 来源：`us-epa-ap42-9-11-1-1995`

### 过程：油脂提取、脱溶与回收（`oil_extraction_recovery`）

#### 输入

##### 产品流

###### 预处理大豆原料（`prepared_soya_feed_input`）

记录进入提取过程的内部预处理原料，并与预处理过程输出核对。

- 选定流：Prepared soya bean flakes or press feed, internal
- 流属性/单位：Mass / kg
- 数量规则：计入已记录库存变化后，与对应内部转移输出相等
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_transfer_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 新鲜补充提取溶剂（`hexane_makeup`）

溶剂路线记录经期初期末库存调整的外购或外部供应补充溶剂；不得把全部循环溶剂记作投入。

- 选定流：Hexane or declared extraction solvent, make-up supply
- 流属性/单位：Mass / kg
- 数量规则：外部接收量加期初库存、减期末库存和有记录的外部转移；体积仅可用实测密度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 提取电力（`extraction_electricity`）

记录浸出器或榨机、泵、真空系统、冷凝器、豆粕处理和回收辅助设备的计量电力。

- 选定流：Electricity, facility supply mix
- 流属性/单位：Energy / kWh
- 数量规则：通过有文件依据的分表计量提取和回收线电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 提取蒸汽或热（`extraction_steam_heat`）

记录用于调质、油品汽提、豆粕脱溶与烘烤、干燥和溶剂回收的路线特定蒸汽、外购热或燃料。

- 选定流：Steam, heat, or fuel supply by carrier
- 流属性/单位：Energy / MJ
- 数量规则：按载体和蒸汽状态计量；区分场内燃料燃烧与外购热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 工艺与冷却水（`extraction_water`）

记录蒸汽发生、冷凝器、洗涤和其他提取线用途的跨边界补充水；循环水不得重复计数。

- 选定流：Process water or cooling-water make-up
- 流属性/单位：Mass / kg
- 数量规则：按用途计量补充水；只有跨同一边界的实测回流水才可扣除
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已脱溶中间粗大豆油（`intermediate_crude_oil`）

记录下游精炼前转入储存的粗油，并与最终装运、库存变化、样品、泄漏和不合格物料核对。

- 选定流：Crude soya bean oil, internal transfer
- 流属性/单位：Mass / kg
- 数量规则：油品脱溶后或压榨澄清后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_transfer_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 豆粕或豆饼（`soybean_meal_cake`）

按市场状态、水分、蛋白等级和去向分别记录已脱溶豆粕、白豆片、压榨饼或其他高蛋白共产品。

- 选定流：Soya bean meal, flakes, or press cake by declared grade
- 流属性/单位：Mass / kg
- 数量规则：称量各共产品流并保留水分和等级基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 内部回用溶剂（`recovered_solvent_internal`）

将回收溶剂作为内部循环记录以检查溶剂平衡；不得分配上游负荷，也不得计入外部补充投入。

- 选定流：Recovered extraction solvent, internal
- 流属性/单位：Mass / kg
- 数量规则：实测返回过程循环的回收溶剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_balance_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 废物流

###### 含溶剂废水和含油残渣（`solvent_wastewater_residues`）

按实测量和处理路线记录废水、分离器残渣、废洗涤材料、污泥和含油固体。

- 选定流：Facility-specific wastewater or extraction residue
- 流属性/单位：Mass / kg
- 数量规则：计量废水并称量残渣；实测时保留溶剂浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 基本流

###### 提取溶剂直接排入空气（`hexane_voc_release`）

溶剂路线应尽可能用场址期间平衡记录排气、泄漏、储存、停机和其他无组织来源的直接溶剂总损失。

- 选定流：Hexane or declared extraction solvent to air
- 流属性/单位：Mass / kg
- 数量规则：依据场址溶剂平衡计算，并分别报告进入产品或废水的实测残留，避免重复计数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 直接燃烧和过程排放（`extraction_direct_releases`）

分别记录场内锅炉、干燥器、豆粕冷却器、排气口和控制装置的直接基本流；外购能源的上游排放由供应数据集承担。

- 选定流：Each measured elementary flow to air or water
- 流属性/单位：Mass / kg
- 数量规则：使用监测值或与燃料、烟道、运行时间和控制效率绑定且已披露的批准计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_release_records`
- 来源：`us-epa-ap42-9-11-1-1995`

### 过程：粗油整理、储存与装运（`crude_oil_storage_loadout`）

#### 输入

##### 产品流

###### 中间粗大豆油（`intermediate_crude_oil_input`）

记录内部粗油转移量并与储存库存和最终装运量核对。

- 选定流：Crude soya bean oil, internal transfer
- 流属性/单位：Mass / kg
- 数量规则：计入有记录转移损失或取样后，与提取过程输出相等
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loadout_records`
- 来源：`us-epa-ap42-9-11-1-1995`

###### 储存与装运公用工程（`storage_utilities`）

仅在电力、热、助滤剂、氮气和水实际用于粗油储存、可选水化脱胶、过滤或装运并跨越边界时记录。

- 选定流：Utility or auxiliary material by actual carrier
- 流属性/单位：Carrier-appropriate property and unit
- 数量规则：分别计量或取得各物料的采购/领用记录；不得合并不同载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loadout_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口粗大豆油（`crude_soya_bean_oil_at_plant_gate`）

这是脱溶、冷却、已声明粗油整理、储存和装运准备后的定量参考输出。

- 选定流：Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测净装运质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_loadout_records`
- 来源：`unsd-cpc-3-2025`; `codex-cxs-210-1999-2026`; `us-epa-ap42-9-11-1-1995`

##### 废物流

###### 不合格油、过滤残渣和泄漏物（`storage_oil_waste`）

记录离开产品库存的不合格物料、过滤残渣、罐底料和泄漏物，并记录回收或处理去向。

- 选定流：Crude-oil storage waste by actual treatment route
- 流属性/单位：Mass / kg
- 数量规则：依据核对后的油罐和事件记录称量或计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loadout_records`
- 来源：`us-epa-ap42-9-11-1-1995`

##### 基本流

###### 储存与装运排放（`storage_loadout_releases`）

记录罐区和装运过程产生且未纳入提取线期间平衡的实测直接溶剂或其他排放。

- 选定流：Facility-specific elementary flow to air or water
- 流属性/单位：Mass / kg
- 数量规则：使用罐区记录、监测或已披露的批准计算，并证明不与 `hexane_voc_release` 重复
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终粗大豆油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_release_records`
- 来源：`us-epa-ap42-9-11-1-1995`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 粗油、豆粕或豆饼、豆皮及其他共产品 | 首先通过分表计量和过程细分避免分配；凡能分别测量接收、预处理、提取、豆粕处理和储存作业的投入与排放，均应细分。 | `iso-14044-2006` |
| `allocation_physical_then_other` | 剩余共享负荷 | 无法按研究目标进行细分或系统扩展时，采用能反映共享过程的有文件依据的物理关系进行分配。不存在可辩护物理关系时，可采用经济价值等其他关系并说明理由。 | `iso-14044-2006` |
| `allocation_measure_before_partition` | 全部产品和共产品流 | 在计算分配因子前测量油、豆粕或豆饼、豆皮、可销售回收产品、废物、水分和库存变化；分配不得掩盖遗漏质量流。 | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `allocation_internal_recovery` | 回收溶剂、水、热及内部转移 | 闭路内部回收仅作为内部流处理，不给予替代产品信用。前景边界只记录净外部投入和直接损失。 | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `allocation_sensitivity_disclosure` | 比较性或公开下游研究 | 报告分配基准与因子，并针对重大共产品测试至少一种合理替代方案；披露其对粗油结果的影响。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_soybean_receipts` | `soybean_receiving_preparation` | 接收大豆 | 地磅、接收检验和供应商批次记录 | lot_id; supplier; origin; receipt_time; gross_mass; tare_mass; net_mass; moisture; foreign_matter; damaged_seed_fraction; accepted_mass | 校准地磅与有代表性的批次取样 | kg; mass % | 每次交付 | 至少连续 12 个月或声明期间的全部生产季 | 代表工厂的全部供应批次 | 汇总验收净质量；拒收质量单列；计算水分和杂质加权值 | 秤校准、取样计划、实验室结果及库存核对 |
| `cp_utility_records` | `soybean_receiving_preparation`; `oil_extraction_recovery` | 电力、燃料、蒸汽、热和水 | 仪表、发票、锅炉日志和分表记录 | carrier; meter_id; opening_reading; closing_reading; unit; steam_pressure_temperature; fuel_LHV_HHV_basis; allocation_driver; operating_hours | 优先校准分表；否则依据全厂记录进行有文件依据的工程分配 | kWh; MJ; kg steam; kg water; carrier-specific | 连续或每个账单期 | 与产品和共产品记录相同期间 | 全部纳入设备和场内公用工程系统 | 按载体和过程汇总；仅用有文件依据的因子换算；期间核对后归一化 | 仪表校准、发票、锅炉效率记录和分配工作表 |
| `cp_process_transfer_records` | `soybean_receiving_preparation`; `oil_extraction_recovery` | 预处理原料与中间粗油 | 皮带秤、罐计量、批记录和转移日志 | timestamp; source_process; destination_process; mass_or_volume; density; temperature; moisture; opening_stock; closing_stock; samples | 内部转移点直接计量 | 首选 kg；使用 L 时记录密度和温度 | 每批或连续累计 | 与参考产出相同期间 | 纳入过程之间的全部内部转移 | 归一化前核对发送与接收记录及库存变化 | 校准、批次追溯和签字确认的转移核对 |
| `cp_solvent_balance_records` | `oil_extraction_recovery` | 新鲜、回收、储存、转移、残留和释放溶剂 | 采购记录、罐计量、流量计、回收计量、产品/残渣检测和事件日志 | solvent_identity; receipts; opening_stock; closing_stock; external_transfers; recovered_internal; residual_in_oil; residual_in_meal; residual_in_wastewater; measured_vent_release; spill_release | 含实测库存变化的期间物料平衡，并单列非空气去向 | 首选 kg；使用 L 时记录实测密度 | 每次交付及每日或每批库存；每月和每年进行期间平衡 | 完整声明生产期间 | 整个溶剂系统、储存、回收、排气、产品和废水 | 计算净补充量并核对各去向；防止储存损失与排气损失重复 | 罐校准、密度与温度记录、采购发票、回收仪表检查和事件报告 |
| `cp_coproduct_waste_records` | `soybean_receiving_preparation`; `oil_extraction_recovery` | 豆皮、豆粕或豆饼、筛除物、废水和残渣 | 秤、罐表、实验室检测、废物联单和销售记录 | stream_id; quantity; moisture; grade; protein_or_oil_content_if_relevant; destination; sale_or_waste_status; treatment | 计量每个不同物流和去向 | kg; kg water; 需要质量换算时 m3 仅可结合密度 | 每批、每次装运或处置 | 与参考产出相同期间 | 纳入过程产生的全部共产品和废物 | 按物流、等级和去向汇总；不得用共产品抵减投入 | 秤校准、销售发票、联单、实验室结果和质量平衡核对 |
| `cp_storage_loadout_records` | `crude_oil_storage_loadout` | 粗油储存、整理与参考装运 | 罐计量、称重或流量计票据、公用工程领用记录和质量检测 | tank_id; opening_stock; closing_stock; receipts; loadout_mass; density; temperature; filtration_or_degumming_status; storage_days; nitrogen; utilities; samples; off_spec; spills | 校准罐计量和交接计量，并进行批次检测 | 首选 kg；使用 L 时记录密度和温度 | 每次转移、每日库存及每个装运批次 | 完整声明生产期间 | 范围内全部粗油罐和装运线 | 核对提取转移、库存变化、装运、样品、不合格料和泄漏；归一化合格净装运量 | 校准与交接票据、罐区核对、批次谱系和实验室报告 |
| `cp_direct_release_records` | `soybean_receiving_preparation`; `oil_extraction_recovery`; `crude_oil_storage_loadout` | 直接基本流 | 烟道测试、连续监测、溶剂平衡、许可计算、废水检测和事件日志 | source_id; pollutant; method; concentration; flow_rate; operating_time; control_device; control_efficiency; discharge_quantity; incident_quantity | 排放源特定监测或已披露的批准计算 | kg pollutant; supporting concentration and flow fields | 方法或许可要求的频次；事件发生时记录 | 与活动数据相同期间 | 每个纳入的排气口、烟道、排口、储罐和无组织排放源 | 分别计算各基本流并将溶剂排放与溶剂平衡核对 | 方法引用、校准、检出限、控制运行日志和审核轨迹 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每条清单行 | 归一化数量 = 核对后的期间数量 / 核对后的合格粗大豆油装运净 kg | 期间流数量；参考产品净装运量 | 每 1 kg 参考产品的数量 | `iso-14044-2006` |
| `calc_soybean_dry_clean_basis` | 大豆投入和固体共产品 | 干净干基质量 = 湿基质量 ×（1 − 水分分数 − 单独测量的杂质分数）；保留湿基值并避免扣减重叠分数 | 湿基质量；水分；杂质；取样基准 | 带换算审计轨迹的干净干基质量 | `us-epa-ap42-9-11-1-1995` |
| `calc_solvent_makeup_balance` | 溶剂路线 | 净外部补充 = 外部接收 + 期初库存 − 期末库存 − 有记录的外部转移；将净补充量与空气损失、产品和废水残留、泄漏及未解释差额核对 | 溶剂接收、库存、转移、残留检测、排放和事件 | 每期间及每 kg 油的净补充量和去向平衡 | `us-epa-ap42-9-11-1-1995` |
| `calc_hexane_temporary_screen` | 缺少场址平衡的溶剂路线 | AP-42 的 3.3 L/Mg 原料大豆因子仅为 D 级临时筛查默认值。必须用有文件依据的密度和实测大豆处理量换算，标记结果为临时值，并在比较性或发布级使用前替换。 | 原料大豆处理量；3.3 L/Mg 筛查因子；代表性密度 | 明确标记的临时总损失筛查值 | `us-epa-ap42-9-11-1-1995` |
| `calc_process_mass_balance` | 各过程及完整前景系统 | 在一致水分和溶剂基准上核对实测投入 = 产品 + 共产品 + 废物 + 排放 + 库存变化 + 已记录测量差额 | 全部质量流、库存、水分和残留溶剂记录 | 平衡闭合度和未解释差额 | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `calc_allocation_factors` | 共享过程负荷 | 输出 i 的分配因子 = i 的声明分配数量或价值 / 所有共产品同一基准之和；因子须在舍入容差内合计为 1 | 实测共产品数量、选定物理关系或价值及声明期间 | 分配因子和敏感性方案 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_reference_identity` | 参考产品 | 核验产品流 UUID、Product flow 类型、Mass 参考属性、CPC 21611 分类、粗制/未精炼状态，以及与 CPC 21612 精炼油的分离。 | Tiangong flow 读回、批次规格和分类记录 |
| `dq_temporal_representativeness` | 全部前景活动 | 使用至少连续 12 个月或声明期间的全部生产季；说明停机、开机、异常批次和部分年度外推。 | 生产日历、仪表覆盖、采购记录和装运台账 |
| `dq_technology_route` | 提取与回收 | 声明机械、溶剂或组合路线、溶剂种类、回收与控制设备、豆粕脱溶路线、可选脱胶和实际纳入作业。 | 工艺流程图、设备清单、操作规程和排放源特定记录 |
| `dq_mass_completeness` | 前景清单 | 核对大豆、油、豆粕或豆饼、豆皮、筛除物、废物、溶剂、废水、库存变化和直接排放；披露未解释差额和遗漏物流。 | 签字质量平衡表和差异调查 |
| `dq_primary_over_default` | 重要投入与排放 | 优先采用校准测量和期间记录。任何 AP-42 或其他默认值必须标记为临时值并记录质量等级，在获得场址记录后替换。 | 仪表与校准证据、发票、检测和明确默认值登记表 |
| `dq_geographic_supplier_fit` | 上游数据集 | 工厂、大豆产地、电力市场、燃料、溶剂、水和处理服务须匹配代表性地理和期间，或披露代理。 | 供应商元数据、数据集地理与年份及代理理由 |
| `dq_allocation_transparency` | 共产品负荷 | 保留分配前清单、共产品测量、采用的层级步骤、因子、理由和敏感性结果。 | 分配工作簿和审核签字 |
| `dq_test_method_traceability` | 粗油身份筛查 | 对 Codex 相关属性筛查，保留检测方法、温度、单位、样品与批次身份、实验室、检出限和结果。 | 实验室证书和取样监管链 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考输出必须为 1 kg 净质量的 Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3`，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 | `unsd-cpc-3-2025` |
| `validate_scope_and_route` | 产品与过程边界 | 确认大豆来源、粗制/未精炼状态、已声明提取路线、脱溶与脱胶状态，并确认不存在或已经细分碱炼中和、脱色、脱臭及其他精炼油作业。 | `unsd-cpc-3-2025`; `us-epa-ap42-9-11-1-1995` |
| `validate_process_coverage` | 过程图 | 接收与预处理、路线特定提取与回收、粗油储存与装运、公用工程、共产品处理、废物、废水和直接排放必须有记录，或以证据明确标记为不适用。 | `us-epa-ap42-9-11-1-1995` |
| `validate_solvent_balance` | 溶剂路线 | 检查净补充、库存变化、内部回收、实测产品与废水残留溶剂、直接空气损失、泄漏和未解释差额；拒绝重复计入循环回收溶剂。 | `us-epa-ap42-9-11-1-1995` |
| `validate_mass_and_allocation` | 完整前景系统 | 要求有文件依据的质量平衡、实测共产品流、在声明舍入容差内合计为 1 的分配因子，并保留未分配清单。 | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `validate_codex_crude_oil_screen` | 可选身份检测结果 | 使用 Codex 表 A2 检测时，以普通粗大豆油的相对密度 0.919–0.925（20 °C）、折光指数 1.466–1.470（40 °C）、皂化值 189–195 mg KOH/g oil、碘值 124–139 和不皂化物不高于 15 g/kg 进行筛查。超出范围的结果必须调查和披露；该筛查不构成食品安全认证。 | `codex-cxs-210-1999-2026` |
| `validate_temporary_defaults` | 发布与比较性使用 | 识别全部临时因子或代理。使用 AP-42 D 级 3.3 L/Mg 大豆己烷损失默认值的结果，在被场址期间平衡替换或经审核明确接受为有限用途前，不满足发布级完整性。 | `us-epa-ap42-9-11-1-1995`; `iso-14044-2006` |
| `validate_bilingual_and_period_alignment` | 数据包 | 确认限定信息、期间总量、计算、分配基准和来源标识符内部一致，且不存在以不同油品产出期间归一化的过程数量。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 浸出工厂门口粗大豆油的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 油籽加工门到门研究；连接上游大豆和公用工程数据集后的摇篮到工厂门模型；以粗油为投入的下游精炼油模型；披露路线与分配的情景分析 |
| excluded_use | 表示精炼大豆油或面向消费者的食用油；食品安全认证；未披露地替代其他植物油；仍存在临时默认值、未解决身份、重大平衡缺口或未经审核分配选择时的公开比较性声明 |
| required_metadata | PCR id；参考 UUID 与单位支持；工厂地理位置；期间；大豆产地、等级、水分和杂质；提取路线；溶剂与回收系统；脱胶状态；储存时长；过程覆盖；共产品等级与去向；分配基准与因子；上游数据集身份 |
| required_quality_disclosure | 仪表和秤覆盖；校准；取样与实验室方法；质量与溶剂平衡闭合；库存变化；直接排放方法；缺失物流；代理数据集；临时默认值与质量等级；分配敏感性；使用时的 Codex 身份筛查结果 |
| update_trigger | 大豆供应、提取或回收技术、能源系统、溶剂、排放控制、脱胶或储存做法、共产品市场或分配关系、工厂地理位置、产品规格、来源标准、UUID 支持发生重大变化，或前景证据替换临时默认值 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-10） | CPC 21611 身份、粗油与精炼油类别区分及分类范围 |
| `codex-cxs-210-1999-2026` | `standard` | Codex Alimentarius Commission, CXS 210-1999, Standard for Named Vegetable Oils, current 2026 publication, https://openknowledge.fao.org/handle/20.500.14283/cd9108en（检索日期 2026-08-10） | 大豆油植物来源身份以及可选粗油组成与物理属性筛查范围 |
| `us-epa-ap42-9-11-1-1995` | `official_guidance` | United States Environmental Protection Agency, AP-42 Section 9.11.1 Vegetable Oil Processing and its background report, Supplement A, November 1995：正式章节 https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf；背景报告 https://www.epa.gov/sites/default/files/2020-10/documents/b9s11-1.pdf（检索日期 2026-08-10） | 大豆加工分解、粗油/精炼边界、溶剂回收、共产品、颗粒物与己烷排放、场址溶剂平衡、仅用于推导临时大豆投入 QA 护栏的原始含油率和残油观测，以及 D 级临时己烷损失筛查 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022, https://www.iso.org/standard/38498.html（检索日期 2026-08-10） | 系统边界一致性、分配层级、透明性、数据质量、敏感性和报告规则 |

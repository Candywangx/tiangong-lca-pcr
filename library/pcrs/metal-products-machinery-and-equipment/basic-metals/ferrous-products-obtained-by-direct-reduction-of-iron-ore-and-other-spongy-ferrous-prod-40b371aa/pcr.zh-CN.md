---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferrous-products-obtained-by-direct-reduction-of-iron-ore-and-other-spongy-ferrous-prod-40b371aa
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 直接从铁矿石还原所得的铁产品及其他海绵状铁产品，呈块状、球团状或类似形状；按重量计纯度不低于99.94%的铁，呈块状、球团状或类似形状

## 1. 范围与适用性

本 PCR 适用于生产厂门口状态的直接还原铁（DRI）、其他海绵铁产品、热压块铁（HBI），以及按质量计铁纯度不低于 99.94% 且以块状、球团状、压块状或物理性质相当的初级形状供应的铁。一个产品数据集应对应一种已声明的产品系列、形状、生产路线、纯度、金属化状态、含碳量和交付温度。

产品边界止于可从生产厂发运的未锻轧铁质中间产品。铁矿开采与选矿、外购球团矿或块矿生产、外购还原剂与电力生产以及进厂运输由所链接的上游数据集表示。下游炼钢、合金化、铸造、轧制、制造、使用和生命末期均不在本 PCR 范围内。颗粒与粉末、生铁、镜铁、钢铁废料、粗钢和钢材成品不在范围内。

DRI 是铁矿石在不熔化条件下被还原而得到的铁产品；气基、煤基和氢基路线必须分别记录。对于高纯铁，数据集必须声明其路线是电解法、直接还原后熔分与渣精炼法，还是其他有文件依据的提纯路线。下列清单为已核实的常见路线提供原子交换行；任何额外的路线特定交换均须作为一个具体流另行增加。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.ferrous-products-obtained-by-direct-reduction-of-iron-ore-and-other-spongy-ferrous-prod-40b371aa |
| classification_refs | CPC 3.0：41116（精确分类背景） |
| covered_products | DRI 球团；DRI 块；其他初级形状的海绵铁；HBI；按质量计铁纯度不低于 99.94% 的块状、球团状或类似初级形状铁 |
| excluded_products | 钢铁颗粒与粉末；生铁；镜铁；废钢铁；粗钢；铸造、轧制、锻造或制成的钢铁产品；以 DRI 或高纯铁进一步生产的钢 |
| representative_product | 生产厂门口状态的直接还原铁球团 |
| production_route | 已声明的气基、煤基、氢基、电解法或直接还原—熔分—精炼路线；混合路线分别报告或按产量质量加权 |
| market_state | 未锻轧干散装铁质中间产品，按声明为冷态或热态，并呈块状、球团状、压块状或类似初级形状 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足所声明 DRI、海绵铁、HBI 或高纯铁规格的未锻轧铁质中间产品 |
| How much | 1,000 kg 产品净干质量 |
| How well | 声明产品系列和形状；全铁；金属铁或金属化率；适用时的铁纯度；碳；脉石；水分；粒度分布；交付温度 |
| How long or cycle | 一个生产报告期，终点为产品在生产厂门口具备发运条件 |
| reference_flow_link | dr_dri_pellets |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净干质量 |
| 参考产品流 | 直接还原铁球团 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | product_family; physical_form; production_route; total_iron_mass_fraction; metallic_iron_or_metallization; iron_purity_mass_fraction_if_applicable; carbon_mass_fraction; gangue_mass_fraction; moisture_mass_fraction; size_distribution; cold_or_hot_delivery_state; delivery_temperature_if_hot; site; geography; reporting_period |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品及全部质量归一化交换 | Mass | kg | 以 1,000 kg 参考产品净干质量归一化。毛质量和实测水分分别记录，不得将游离水计入产品质量。 |
| `gas_mass_conversion` | 天然气、氢气、氧气以及计量的尾气输入或输出 | Mass | kg | 保留原始标况体积、参考温度、参考压力、组成和密度因子，再换算为归一化清单所需质量。 |
| `energy_preservation` | 电力和燃料 | Energy 或燃料质量 | kWh、MJ 或 kg | 电力保留电表原始 kWh，并换算为所采用的 MJ 参考单位；每种燃料保留原始计量单位，能量换算须披露低位或高位热值基准，不得先合并不同载能体。 |
| `product_quality_basis` | DRI、HBI、海绵铁和高纯铁 | Mass fraction | kg/kg 或质量百分数 | 按实验室报告基准记录各质量结果，并说明金属铁、全铁、金属化率、纯度、碳、脉石和水分采用湿基还是干基。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在生产厂接收点实测进入的铁矿球团、铁矿块矿、磁铁矿精矿、DRI 前驱料或纯化亚铁电解液，以及逐项计量的外购还原剂、载能体、水、氧气和精炼材料 |
| starting_condition_role | 门到门前景起点；上游负荷通过供应商特定或具有代表性的数据集链接 |
| product_classification_scope | 一种已声明初级形状的 DRI、海绵铁、HBI 或纯度不低于 99.94% 的铁产品 |
| recursive_input_rule | 外购 DRI 或其他属于本 PCR 的产品作为产品输入流并链接其自身上游数据集，不得在接收过程中递归重建 |
| upstream_dataset_requirement | 铁质原料、还原剂、电力、氧气、水和精炼材料优先使用供应商特定数据；否则采用地域和技术上有代表性的次级数据，并披露替代关系 |
| disclosure | 声明路线、纳入的单元过程、原料形状、还原剂、厂内制气、CCUS、内部煤气循环、压块、提纯路线、产品形状与质量、交付状态、场址、地域、报告期、上游数据集选择和排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景生产链 | 纳入从所声明起始物料接收，经还原或提纯、产品成形、污染控制、厂内运输和废水处理，直至产品具备发运条件的全部厂内单元操作。 | `worldsteel-lci-methodology-2017` |
| `boundary_upstream_links` | 外购物料 | 链接铁质原料、还原剂、电力、燃料、氧气、水和精炼材料的上游生产及进厂运输；不得在前景交换中重复计入其上游负荷。 | `worldsteel-lci-methodology-2017` |
| `boundary_route_separation` | 技术与产品路线 | 气基、煤基、氢基、电解法和熔分—精炼路线应分别记录；只有披露产量质量加权方法及计算时方可合并。 | `iea-iron-steel-roadmap-2020`; `worldsteel-lci-methodology-2017` |
| `boundary_downstream_exclusion` | 产品门口 | 排除下游炼钢、合金化、铸造、轧制、制造、使用和生命末期。 | `unsd-cpc-30-2025`; `doe-green-hydrogen-iron-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| direct_reduction | 直接还原与产品冷却 | conditional | 生产 DRI 或海绵铁，或厂内高纯铁路线以 DRI 为前驱料时纳入。 | 铁氧化物在不熔化条件下还原，并进行冷却及气水处理 | 1,000 kg 干基 DRI 或海绵铁输出 |
| hot_briquetting | 热压块与冷却 | conditional | 热态 DRI 被压制成 HBI 或等效压块状初级产品时纳入。 | 致密化和发运调质 | 1,000 kg 干基 HBI 输出 |
| purity_refining | 高纯铁生产与成形 | conditional | 参考产品为纯度不低于 99.94% 的铁时纳入；仅选择适用于所声明电解或冶金提纯路线的行。 | 提纯、分离/精炼并成形为块状或球团状 | 1,000 kg 干基高纯铁输出 |

### 过程：直接还原与产品冷却（`direct_reduction`）

#### 输入

##### 产品流

###### 直接还原级铁矿球团（`dr_iron_ore_pellets`）

记录进入竖炉、回转窑或其他直接还原反应器的外购或转入氧化球团；仅在使用球团原料时适用。

- 选定流：直接还原级铁矿球团
- 流属性/单位：Mass / kg
- 数量规则：跨越过程边界的实测干基球团进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_materials`
- 来源：`doe-green-hydrogen-iron-2018`

###### 直接还原级铁矿块矿（`dr_iron_ore_lump`）

记录进入还原反应器的粒级合格块矿；仅在使用块矿时适用，并与球团分开记录。

- 选定流：铁精矿，块矿 `7ed38ce9-37f3-4957-89d2-153b63e127dd`
- 流属性/单位：Mass / kg
- 数量规则：跨越过程边界的实测干基块矿进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_materials`
- 来源：`unsd-cpc-30-2025`

###### 天然气（`dr_natural_gas`）

记录用于制取还原气或作为直接过程燃料的外购天然气；仅在耗用天然气的路线中适用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于直接还原过程的天然气计量量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_energy`
- 来源：`doe-green-hydrogen-iron-2018`; `iea-iron-steel-roadmap-2020`

###### 氢气（`dr_hydrogen`）

记录进入还原循环的外供或单独计量的厂内氢气；仅用于含氢路线，内部循环氢不得重复计量。

- 选定流：氢气
- 流属性/单位：Mass / kg
- 数量规则：跨越直接还原边界的实测净补充氢量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_energy`
- 来源：`doe-green-hydrogen-iron-2018`; `iea-iron-steel-roadmap-2020`

###### 非炼焦煤（`dr_non_coking_coal`）

记录作为还原剂或过程燃料加入的非炼焦煤；仅用于煤基直接还原路线。

- 选定流：非炼焦煤
- 流属性/单位：Mass / kg
- 数量规则：归属于直接还原的实测干煤进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_energy`
- 来源：`iea-iron-steel-roadmap-2020`

###### 氧气（`dr_oxygen`）

记录进入重整、部分氧化、加热或其他直接还原操作的外购氧气；仅在其跨越场址边界时计入。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：输送至直接还原过程的实测氧气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_materials`
- 来源：`worldsteel-lci-methodology-2017`

###### 电力（`dr_electricity`）

记录本过程边界内原料输送、气体压缩、反应器辅机、冷却、筛分、除尘和处理所消耗的电力。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：直接还原与产品冷却的实测或分表分摊电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_energy`
- 来源：`worldsteel-lci-methodology-2017`

###### 工艺水（`dr_process_water`）

记录进入煤气洗涤、冷却、抑尘或其他直接还原操作的补充水；内部循环水不作为新输入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越直接还原边界的实测净补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_water`
- 来源：`doe-green-hydrogen-iron-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 直接还原铁球团（`dr_dri_pellets`）

记录保持球团形状的合格 DRI；本行为代表性参考产品，仅在球团为所声明产品时适用。

- 选定流：直接还原铁球团
- 流属性/单位：Mass / kg
- 数量规则：具备发运条件的合格球团产品实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干基参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_products`
- 来源：`unsd-cpc-30-2025`; `doe-green-hydrogen-iron-2018`

###### 直接还原铁块（`dr_dri_lumps`）

记录块状合格 DRI 或海绵铁；仅在块状为所声明产品时适用。

- 选定流：直接还原铁块
- 流属性/单位：Mass / kg
- 数量规则：具备发运条件的合格块状产品实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干基参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_products`
- 来源：`unsd-cpc-30-2025`; `doe-green-hydrogen-iron-2018`

##### 废物流

###### 直接还原废水（`dr_wastewater`）

记录由还原气洗涤、冷却或其他直接还原操作转往处理或排放的净废水。

- 选定流：直接还原废水
- 流属性/单位：Mass / kg
- 数量规则：下游处理前离开本过程的实测净废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_wastes`
- 来源：`worldsteel-lci-methodology-2017`

###### 送处置的直接还原铁粉料（`dr_dri_fines`）

记录送处置的不合格 DRI 粉料；返回生产的回收粉料保持为内部循环并另行披露。

- 选定流：送处置的直接还原铁粉料
- 流属性/单位：Mass / kg
- 数量规则：作为废物离开过程的 DRI 粉料实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dr_wastes`
- 来源：`worldsteel-lci-methodology-2017`

##### 基本流

###### 排放到空气的二氧化碳（`dr_carbon_dioxide`）

记录还原、重整、燃烧、放空和火炬产生并扣除捕集量后的直接化石源二氧化碳排放。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测的直接排放加经验证的平衡估算，扣除已核实捕集量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dr_air`
- 来源：`worldsteel-lci-methodology-2017`

###### 排放到空气的一氧化碳（`dr_carbon_monoxide`）

记录控制后由直接还原过程排放的一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测或物料平衡计算的空气排放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dr_air`
- 来源：`worldsteel-lci-methodology-2017`

###### 排放到空气的颗粒物（`dr_particulate_matter`）

记录矿料输送、还原、冷却、筛分和除尘后排放的总颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：监测的有组织排放加有文件依据的无组织估算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基直接还原产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dr_air`
- 来源：`worldsteel-lci-methodology-2017`

### 过程：热压块与冷却（`hot_briquetting`）

#### 输入

##### 产品流

###### 热态直接还原铁（`hb_hot_dri`）

记录转入压块机的热态 DRI；仅在生产 HBI 时适用，不得重复计入其上游 DRI 负荷。

- 选定流：热态直接还原铁
- 流属性/单位：Mass / kg
- 数量规则：进入压块过程的实测干基热态 DRI 进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基 HBI 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hb_materials`
- 来源：`midrex-forms-of-dri`

###### 电力（`hb_electricity`）

记录压块、输送、冷却、筛分和除尘设备消耗的电力。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：热压块与冷却的实测或分表分摊电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基 HBI 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hb_energy_water`
- 来源：`worldsteel-lci-methodology-2017`

###### 冷却水（`hb_cooling_water`）

记录 HBI 冷却的净补充水；循环水不得作为新输入。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：Mass / kg
- 数量规则：跨越过程边界的实测净补充冷却水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基 HBI 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hb_energy_water`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热压块铁（`hb_hbi`）

记录具备发运条件的合格 HBI；仅在压块为所声明产品形状时适用。

- 选定流：热压块铁
- 流属性/单位：Mass / kg
- 数量规则：具备发运条件的合格 HBI 实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干基参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hb_products_wastes`
- 来源：`midrex-forms-of-dri`; `unsd-cpc-30-2025`

##### 废物流

###### 送处置的压块工序 DRI 粉料（`hb_dri_fines`）

记录压块与筛分后送处置的 DRI 或 HBI 粉料。

- 选定流：送处置的压块工序直接还原铁粉料
- 流属性/单位：Mass / kg
- 数量规则：作为废物离开压块过程的粉料实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基 HBI 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hb_products_wastes`
- 来源：`worldsteel-lci-methodology-2017`

##### 基本流

###### 排放到空气的颗粒物（`hb_particulate_matter`）

记录热压块、输送、冷却和筛分后排放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：监测的有组织排放加有文件依据的无组织估算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干基 HBI 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hb_air`
- 来源：`worldsteel-lci-methodology-2017`

### 过程：高纯铁生产与成形（`purity_refining`）

#### 输入

##### 产品流

###### 直接还原铁前驱料（`pr_dri_precursor`）

记录进入熔分和渣精炼的 DRI；仅用于所声明直接还原—精炼路线。

- 选定流：直接还原铁前驱料
- 流属性/单位：Mass / kg
- 数量规则：进入熔分的实测干基 DRI 进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_materials`
- 来源：`li-high-purity-iron-2020`

###### 氯化亚铁溶液（`pr_iron_chloride_solution`）

记录进入电解铁生产的纯化氯化亚铁电解液；仅在使用该电解液时适用。

- 选定流：氯化亚铁溶液
- 流属性/单位：Mass / kg
- 数量规则：新鲜氯化亚铁溶液净补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_materials`
- 来源：`zhang-electrolytic-iron-2025`

###### 硫酸亚铁溶液（`pr_iron_sulfate_solution`）

记录进入电解铁生产的纯化硫酸亚铁电解液；仅在使用该电解液时适用。

- 选定流：硫酸亚铁溶液
- 流属性/单位：Mass / kg
- 数量规则：新鲜硫酸亚铁溶液净补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_materials`
- 来源：`zhang-electrolytic-iron-2025`

###### 高碱度氧化钙—氧化铝精炼渣（`pr_high_basicity_slag`）

记录进入脱氧/精炼的预制高碱度精炼渣；仅用于所声明渣精炼路线，并披露其组成。

- 选定流：高碱度氧化钙—氧化铝精炼渣
- 流属性/单位：Mass / kg
- 数量规则：实测干基精炼渣装入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_materials`
- 来源：`li-high-purity-iron-2020`

###### 电力（`pr_electricity`）

记录所声明路线内电解、熔化、精炼、真空处理、成形、冷却和污染控制的电力。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：高纯铁生产与成形的实测或分表分摊电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_energy_water`
- 来源：`li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`; `worldsteel-lci-methodology-2017`

###### 工艺水（`pr_process_water`）

记录所声明高纯铁路线中电解液制备、清洗、冷却或污染控制的净补充水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越高纯铁过程边界的实测净补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_energy_water`
- 来源：`li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 高纯铁块（`pr_high_purity_iron_lump`）

记录按质量计铁纯度不低于 99.94% 的合格块状铁；仅在块状为所声明产品时适用。

- 选定流：按质量计铁纯度不低于99.94%的高纯铁块
- 流属性/单位：Mass / kg
- 数量规则：具备发运条件的合格高纯铁块实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干基参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_products`
- 来源：`unsd-cpc-30-2025`; `china-mof-tariff-2019`; `li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`

###### 高纯铁球团（`pr_high_purity_iron_pellet`）

记录按质量计铁纯度不低于 99.94% 的合格球团状铁；仅在球团为所声明产品时适用。

- 选定流：按质量计铁纯度不低于99.94%的高纯铁球团
- 流属性/单位：Mass / kg
- 数量规则：具备发运条件的合格高纯铁球团实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干基参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_products`
- 来源：`unsd-cpc-30-2025`; `china-mof-tariff-2019`; `li-high-purity-iron-2020`; `zhang-electrolytic-iron-2025`

##### 废物流

###### 废亚铁电解液（`pr_spent_electrolyte`）

记录送回收或处理的废含铁电解液；仅用于电解路线。

- 选定流：废亚铁电解液
- 流属性/单位：Mass / kg
- 数量规则：离开高纯铁生产的废电解液实测净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_wastes`
- 来源：`zhang-electrolytic-iron-2025`

###### 废高碱度精炼渣（`pr_refining_slag`）

记录送回收或处置的废精炼渣；仅用于熔分—渣精炼路线。

- 选定流：废高碱度精炼渣
- 流属性/单位：Mass / kg
- 数量规则：离开过程的废精炼渣实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pr_wastes`
- 来源：`li-high-purity-iron-2020`

##### 基本流

###### 排放到空气的颗粒物（`pr_particulate_matter`）

记录物料输送、熔化、精炼和产品成形后排放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：监测的有组织排放加有文件依据的无组织估算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干基高纯铁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pr_air`
- 来源：`worldsteel-lci-methodology-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 路线单元操作和单独计量产品 | 只要投入产出可独立计量，优先细分还原、压块、提纯、制气、废水处理和回收操作以避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | 循环顶煤气、水、DRI 粉料、渣和电解液 | 内部循环按闭环处理：仅计算跨越前景边界的净补充输入和净排出，不为内部循环设置抵扣。 | `worldsteel-lci-methodology-2017` |
| `allocation_exported_coproduct` | 外售过程气、捕集二氧化碳、回收粉料、渣或其他可售共产品 | 只有替代产品、等效功能、市场和避免生产数据集均有文件依据时方可使用系统扩展，并单独报告替代抵扣；否则报告未分配清单和明确的敏感性情景。 | `worldsteel-lci-methodology-2017` |
| `allocation_multiple_products` | 同时产出的合格 DRI、HBI 或高纯铁 | 优先采用分批生产或实测过程细分。无法细分时，剩余共同负荷按产品干质量分配，并披露经济分配敏感性。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dr_materials` | direct_reduction | 铁质原料、氧气和还原材料 | 地磅、给料、库存及供应商记录 | timestamp; material_id; wet_mass; moisture; composition; standard_volume_if_gas; temperature; pressure | 按生产批次核对经校准计量与库存变化 | kg；原始计量为 Nm3 时保留 Nm3 | 每批及每月 | 有代表性的连续 12 个月；较短期间须说明理由 | 全部直接还原装置及共用供应系统 | 以直接仪表取得干质量或气体质量；共用仪表按有文件依据的运行驱动因素分摊 | 校准、供应商证书、库存核对、组成与水分检验 |
| `cp_dr_energy` | direct_reduction | 天然气、氢气、煤和电力 | 贸易计量表、分表、燃料领用及库存记录 | timestamp; carrier; quantity; unit; calorific_basis; gas_composition; meter_id; process_id | 核对采购、制取、外送和库存变化 | kWh; MJ; kg; Nm3 | 连续或每批；每月核对 | 有代表性的连续 12 个月 | 反应器、重整器、压缩机、冷却、筛分和控制 | 每报告期净输入载能体，排除内部煤气循环 | 仪表校准、发票、气体分析、库存核对 |
| `cp_dr_water` | direct_reduction | 工艺补充水 | 水表及水量平衡记录 | timestamp; source; make_up_volume; density; recycled_volume; discharge_volume | 计量净补充量并核对循环水量平衡 | kg; m3 | 连续；每月核对 | 有代表性的连续 12 个月 | 煤气洗涤、冷却、除尘和处理系统 | 每报告期净补充水质量 | 水表校准和水量平衡闭合 |
| `cp_dr_products` | direct_reduction | DRI 球团和块状输出 | 检定秤、发运及实验室记录 | batch_id; gross_mass; moisture; form; total_iron; metallic_iron; metallization; carbon; gangue; size; temperature | 汇总合格发运量并折算干质量 | kg | 每批 | 有代表性的连续 12 个月 | 全部产品卸料和发运点 | 归一化前分开产品形状与不合格物料 | 秤校准、质量证明、水分和粒度检验 |
| `cp_dr_wastes` | direct_reduction | 废水和处置 DRI 粉料 | 转移流量计、秤、联单及处理记录 | timestamp; waste_id; mass_or_volume; solids; moisture; destination; recovery_status | 核对外运、内部返回和处理接收量 | kg; m3 | 每批或连续；每月 | 有代表性的连续 12 个月 | 全部直接还原废物出口 | 按原子废物流计算净外运量 | 仪表或秤校准、废物联单、处理接收单 |
| `cp_dr_air` | direct_reduction | 二氧化碳、一氧化碳和颗粒物 | 连续监测、烟气测试、燃料/气体组成、火炬、捕集及产量记录 | source_id; pollutant; concentration; flow_rate; duration; fuel_carbon; vented_gas; captured_co2 | 积分监测结果；经批准的数据缺口用有文件依据的平衡补足 | kg; mg/Nm3; Nm3 | 连续并按规定烟气测试 | 包括正常检修的代表性 12 个月 | 全部烟囱、放空、火炬及可量化无组织源 | 按污染物汇总，扣除经核实捕集量，以干基产量归一化 | 监测校准、烟气测试、碳和气体平衡 |
| `cp_hb_materials` | hot_briquetting | 热态 DRI 进料 | 转移秤及温度记录 | timestamp; wet_mass; moisture; temperature; transfer_origin | 核对热态 DRI 转移、压块输出和粉料 | kg | 每批或连续 | 有代表性的连续 12 个月 | 全部 HBI 生产线 | 按生产线和批次计算干基进料量 | 秤校准、水分和温度记录 |
| `cp_hb_energy_water` | hot_briquetting | 电力和冷却补充水 | 分表和水表记录 | timestamp; electricity; make_up_water; recycled_water; meter_id | 计量生产线用量并核对共用公用工程 | kWh; kg; m3 | 连续；每月 | 有代表性的连续 12 个月 | 压块、输送、冷却、筛分和控制 | 按线计算净电力和补充水 | 仪表校准和公用工程平衡 |
| `cp_hb_products_wastes` | hot_briquetting | HBI 输出和处置粉料 | 检定秤、发运、实验室及废物记录 | batch_id; product_mass; moisture; density; size; fines_mass; destination | 区分合格 HBI、内部返回粉料和外排废物 | kg | 每批 | 有代表性的连续 12 个月 | 全部 HBI 生产线和发运点 | 按批次计算干基净输出和外排废物 | 秤校准、产品证书、废物联单 |
| `cp_hb_air` | hot_briquetting | 颗粒物 | 烟气测试、除尘器、运行小时和产量记录 | source_id; concentration; flow_rate; duration; collector_status | 积分实测排放并记录无组织估算 | kg; mg/Nm3 | 烟气测试周期；每月估算 | 有代表性的连续 12 个月 | 压块、冷却、筛分和转运点 | 汇总有组织和可量化无组织排放 | 烟气测试及除尘器维护记录 |
| `cp_pr_materials` | purity_refining | DRI 前驱料、电解液和精炼渣 | 批次秤、罐位、组成及库存记录 | batch_id; material_id; mass; concentration; composition; stock_change; route | 核对新投入、内部回收和库存变化 | kg | 每批及每月 | 有代表性的生产批次或 12 个月 | 全部提纯、熔化和精炼装置 | 按原子物料和路线计算净新投入 | 秤/罐校准、化验、批次单、库存核对 |
| `cp_pr_energy_water` | purity_refining | 电力和工艺补充水 | 分表和水表记录 | timestamp; unit_operation; electricity; make_up_water; recycled_water | 分单元计量并核对共用公用工程 | kWh; kg; m3 | 连续或每批；每月 | 有代表性的生产批次或 12 个月 | 电解、熔化、精炼、成形、冷却和控制 | 按所声明路线计算净电力和补充水 | 仪表校准和公用工程平衡 |
| `cp_pr_products` | purity_refining | 高纯铁输出 | 检定秤、化验、发运和形状记录 | batch_id; mass; moisture; iron_purity; impurity_panel; form; size; temperature | 按形状和纯度等级分别汇总合格产品 | kg | 每批 | 报告期内全部批次 | 全部最终成形和发运点 | 按产品形状计算干基净合格输出 | 秤校准、质量证明、杂质检出限 |
| `cp_pr_wastes` | purity_refining | 废电解液和废精炼渣 | 罐体转移、秤、废物联单和回收记录 | batch_id; waste_id; mass; concentration; moisture; destination; recovery_status | 内部回收后计量净外运量 | kg | 每批及每月 | 报告期内全部批次 | 全部提纯和精炼废物出口 | 按路线分别汇总每种原子废物 | 仪表/秤校准、化验、废物联单、处理接收单 |
| `cp_pr_air` | purity_refining | 颗粒物 | 烟气测试、除尘器、运行小时和产量记录 | source_id; concentration; flow_rate; duration; collector_status | 积分实测排放并记录无组织估算 | kg; mg/Nm3 | 烟气测试周期；每月估算 | 报告期内全部批次 | 熔化、精炼、成形和物料输送 | 汇总有组织和可量化无组织排放 | 烟气测试及除尘器维护记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass_normalization` | 质量输入和输出 | 归一化数量 = 净实测干质量 / 参考产品净干质量 × 1,000 kg | 毛质量；水分；库存变化；内部返回；参考产品干质量 | kg/1,000 kg 干基参考产品 | `worldsteel-lci-methodology-2017` |
| `calc_energy_normalization` | 电力和燃料 | 归一化数量 = 载能体净消耗量 / 参考产品净干质量 × 1,000 kg；保留载能体特定单位和换算基准 | 仪表读数；输入；输出；库存变化；热值基准；参考产品干质量 | kWh、MJ 或 kg/1,000 kg 干基参考产品 | `worldsteel-lci-methodology-2017` |
| `calc_gas_mass` | 天然气、氢气、氧气和计量气体 | 气体质量 = 校正标况体积 × 由实测组成和所声明参考条件得到的经核实密度 | 体积；温度；压力；组成；参考条件；密度 | kg 气体 | `doe-green-hydrogen-iron-2018` |
| `calc_route_weighting` | 多场址或多路线数据集 | 加权交换 = Σ（路线交换 × 合格干基路线产量）/Σ（合格干基产量）；支持数据保留分路线结果 | 路线特定归一化交换；干基产量；产品形状与质量 | 按产量质量加权的交换 | `worldsteel-lci-methodology-2017` |
| `calc_direct_air_release` | 直接空气排放 | 排放 = 积分监测排放 + 合理缺口估算 + 放空与火炬排放 - 经核实捕集量；此处不得扣减生物源或上游抵扣 | 浓度；气量；时间；组成；放空/火炬记录；捕集记录 | 每报告期及每 1,000 kg 产品的污染物 kg 数 | `worldsteel-lci-methodology-2017` |
| `calc_balance_checks` | 过程校验 | 对每个适用过程进行总质量、铁和碳平衡闭合；报告残差并解释重大偏差 | 全部实测输入、输出、库存变化、循环流、铁化验和碳化验 | 质量、铁和碳平衡残差 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 产品系列、形状、路线、纯度/金属化率、碳、脉石、水分、粒度及冷热交付状态应共同识别一个可售产品。 | 发运规格和质量证明 |
| `dq_technology` | 路线清单 | 单元操作、还原剂、制气、内部循环、CCUS、压块、提纯和处理必须与所声明路线一致；混合路线须可追溯。 | 工艺流程图、仪表图和路线台账 |
| `dq_temporal` | 前景记录 | 优先采用有代表性的连续 12 个月；较短期间须覆盖完整运行模式并说明理由。 | 注明日期的生产、公用工程、维护和实验室记录 |
| `dq_geography` | 上游链接 | 电力及其他物料数据集在重要情况下应代表实际供应商或生产地域和技术。 | 供应商身份、电力合同和数据集元数据 |
| `dq_completeness` | 全部过程 | 纳入全部能源输入及所有已知物料、废物、水和排放流；记录排除项及其质量、能量和环境相关性。 | 完整性清单、仪表核对和排除登记表 |
| `dq_measurement` | 实测值与计算值 | 保留校准状态、原始单位、换算、分配键、不确定性、检出限和数据缺口处理，使结果可复现。 | 校准证书、计算工作簿、QA 审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认归一化输出等于 1,000 kg 净干质量，且全部必需限定信息齐全并相互一致。 | `worldsteel-lci-methodology-2017` |
| `validation_route_rows` | 过程清单 | 确认每个纳入行属于所声明路线、每个适用原子交换均已列出，并删除不适用替代行而不是填零。 | `iea-iron-steel-roadmap-2020`; `li-high-purity-iron-2020` |
| `validation_balances` | 直接还原、压块和高纯铁精炼 | 每个纳入过程均进行总质量和铁平衡；含碳路线另进行碳平衡；调查并披露残差。 | `worldsteel-lci-methodology-2017` |
| `validation_no_double_counting` | 内部循环和上游数据 | 核实循环顶煤气、水、DRI 粉料、渣和电解液未同时作为内部循环与外购输入计量，且上游负荷只出现一次。 | `worldsteel-lci-methodology-2017` |
| `validation_emissions` | 排放与捕集 | 将监测排放与燃料、气体、碳、放空、火炬、污染控制和捕集记录核对，并报告低于检出限数据的处理方法。 | `worldsteel-lci-methodology-2017` |
| `validation_purity` | 高纯铁产品 | 使用有文件依据的分析方法和杂质项目确认按质量计铁纯度不低于 99.94%；DRI 金属化率不得替代铁纯度符合性。 | `unsd-cpc-30-2025`; `china-mof-tariff-2019`; `li-high-purity-iron-2020` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从经核实前景生产记录形成的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 作为炼钢、合金生产、铸造或其他所声明产品系统的上游铁质中间产品；用于带路线特定上游链接的 lifecyclemodel 投影 |
| allowed_use | 对所声明产品系列、形状、路线、质量、场址/地域、技术和报告期的生产厂门口产品建模 |
| excluded_use | 表示下游粗钢或钢材成品；无等效性依据地以 DRI 替代高纯铁或以一种路线替代另一种路线；未经研究特定功能单位和审查的公开比较声明 |
| required_metadata | PCR id 和版本；产品系列与形状；路线与单元操作；全铁；金属铁/金属化率或铁纯度；碳；脉石；水分；粒度；交付状态/温度；场址；地域；报告期；分配；截断；上游数据集；数据质量和不确定性 |
| required_quality_disclosure | 前景/次级数据划分；仪表与化验覆盖；缺失数据处理；质量/铁/碳平衡残差；路线加权；分配与替代选择；排除项；未解决 UUID 和范围证据状态 |
| update_trigger | 原料、还原剂、电力、提纯路线、CCUS、煤气循环、压块、产品形状或质量、分配、场址组合、上游数据集发生重大变化，或报告数据超过项目接受的代表性期限 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-30-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-02） | 产品正式识别、形状和 99.94% 纯度阈值 |
| `china-mof-tariff-2019` | official_guidance | 中华人民共和国财政部，《2019年关税实施方案》，税则号列 72031000 和 72039000，https://m.mof.gov.cn/czxw/201812/P020181226472875236412.pdf（检索日期 2026-09-02） | “直接从铁矿还原的铁产品”“海绵铁”和 99.94% 纯度阈值的专业中文术语核验 |
| `doe-green-hydrogen-iron-2018` | official_guidance | Ed Green, The Use of Hydrogen in the Iron and Steel Industry, U.S. Department of Energy H2@Scale Workshop, 2018-08-01, https://www.energy.gov/sites/default/files/2018/08/f54/fcto-h2-scale-kickoff-2018-19-green.pdf（检索日期 2026-09-02） | DRI 定义、非熔融还原、氢和一氧化碳还原化学以及天然气 DRI 路线 |
| `iea-iron-steel-roadmap-2020` | official_guidance | 国际能源署，《Iron and Steel Technology Roadmap》，2020，https://www.iea.org/reports/iron-and-steel-technology-roadmap（检索日期 2026-09-02） | 区分气基、煤基、掺电解氢和 100% 氢基 DRI 技术路线 |
| `worldsteel-lci-methodology-2017` | handbook | 世界钢铁协会，《Life Cycle Inventory Methodology Report for Steel Products》，2017，ISBN 978-2-930069-89-0，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索日期 2026-09-02） | 声明质量单位、门到门与上游边界、技术/地域/时间覆盖、数据采集、排放、完整性、平衡校验和共产品处理 |
| `midrex-forms-of-dri` | extension_guidance | Midrex Technologies, Inc.，《Forms of DRI》，https://www.midrex.com/direct-reduced-iron/forms-of-dri/（检索日期 2026-09-03） | CDRI、HDRI 和 HBI 市场形态、热态 DRI 转运、无黏结剂热压块及出厂状态 |
| `li-high-purity-iron-2020` | literature | Li, B.; Sun, G.; Li, S.; Guo, H.; Guo, J. The Preparation of High-Purity Iron (99.987%) Employing a Process of Direct Reduction-Melting Separation-Slag Refining. Materials 13(8), 1839 (2020). https://doi.org/10.3390/ma13081839 | 高纯铁路线选择，以及直接还原、熔分、渣精炼和电解过程分解 |
| `zhang-electrolytic-iron-2025` | literature | Zhang, D.; Liu, T.; Xie, G.; Wang, B.; Cao, X.; Bai, J.; Zhong, M.; Dong, H. The Effect of Electrolytic Temperature on the Purity of Electrolytic Pure Iron. Metals 15(9), 1055 (2025). https://doi.org/10.3390/met15091055 | 氯化亚铁和硫酸亚铁电解液路线依据、电驱动电沉积及高纯铁质量控制 |

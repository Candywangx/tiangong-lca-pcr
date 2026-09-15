---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.paper-trays-paper-rests-pen-trays-office-stamp-stands-and-similar-office-or-desk-equipm-7154f5d4
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 贱金属制文件盘、文件座、笔盘、公章架及类似办公或书桌用具（办公家具除外）

## 1. 范围与适用性

本 PCR 适用于承重主体主要由贱金属制成的非家具类办公或书桌用品，包括文件盘、文件座、笔盘、公章架以及功能相近的桌面收纳用品。成形板材、成形线材或网材及混合贱金属结构均在范围内，表面状态可为无涂层、粉末涂装、液体涂装、电镀或其他表面处理。

范围不包括办公家具、落地式档案或储物家具、纸或纸板制办公托盘、全塑料收纳用品、活页夹附件、回形针、订书钉、电子办公设备及上游金属生产。数据包应声明用品种类、尺寸、净质量、主要金属或合金、坯料形态、再生含量声明、成形与连接路线、表面处理、包装、地域、报告期及工厂门状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.paper-trays-paper-rests-pen-trays-office-stamp-stands-and-similar-office-or-desk-equipm-7154f5d4 |
| classification_refs | CPC 3.0: 42994 |
| covered_products | 贱金属制文件盘、文件座、笔盘、公章架及类似非家具类办公或书桌用品 |
| excluded_products | 办公家具；落地式柜具；纸、纸板、全塑料或电子用品；活页夹附件、回形针和订书钉 |
| representative_product | 已完成粉末涂装、可供销售的成形板材贱金属文件盘 |
| production_route | 交付贱金属坯料；切割与成形；按路线进行连接与机械精整；按路线进行清洗或预处理；按路线进行涂装与固化；装配、检验和包装 |
| market_state | 工厂门处已完工、干燥并检验合格的产品；包装与参考净质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于承放、支撑或整理纸张、笔、印章或类似办公物品的贱金属制办公或书桌用品 |
| How much | 1 kg 成品净质量 |
| How well | 符合所声明的用品种类、尺寸、主要金属或合金、表面状态、涂层或镀层规范、装配状态及验收准则 |
| How long or cycle | 一个完成至工厂门的制造批次；本质量参考流不含使用寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量，不含包装 |
| 参考产品流 | 贱金属制文件盘、文件座、笔盘、公章架及类似办公或书桌用具 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 用品种类及尺寸；主要金属或合金及坯料形态；净质量；再生含量及产销监管链依据；成形与连接路线；预处理；涂装、镀层或无涂层状态；表面效果及颜色；包装；地域；报告期；工厂门状态 |

所有必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在保留涂层和装配件全部装好后测量合格产品；不计销售和运输包装。 |
| `material_mass_basis` | 材料、涂料、化学品、包装和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越边界的实物质量并归一化至 1 kg 产品净质量；除非明确要求，不得以金属含量、干固体或溶剂质量代替。 |
| `electricity_energy_basis` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电能基准；按 1 kWh = 3.6 MJ 换算，并声明电压、供电地域和电表边界。 |
| `gas_volume_basis` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量体积以及参考温度、压力、组成或热值和交付边界。 |
| `water_mass_basis` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用计量质量，或按测量温度和溶解固体状态适用且有记录的密度由体积换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 金属坯料、组件、涂料、处理化学品、公用工程和包装已交付至报告工厂；上游生产由独立数据集表示 |
| starting_condition_role | 工厂门制造起点 |
| product_classification_scope | 第 1 节语义边界内的贱金属制非家具类办公或书桌用品 |
| recursive_input_rule | 已符合本 PCR 边界的外购用品作为产品投入并链接其上游数据集，不在本前景过程中递归展开 |
| upstream_dataset_requirement | 每项外购投入均采用地域、技术、时间和产品状态有代表性的上游数据集 |
| disclosure | 声明材料和坯料路线、外购与厂内工序、连接、预处理、表面处理、固化能源、废料去向、废水、废气控制、包装、地域、报告期和遗漏项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入接收、切割、冲压、弯曲或线材成形、连接、去毛刺或打磨、适用时的清洗与预处理、适用时的涂装或电镀、固化或干燥、装配、检验、包装、直接废物和直接排放。 | `us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020` |
| `boundary_route_disclosure` | 条件工序 | 报告实际采用的无涂层、粉末涂装、液体涂装、电镀、机械精整、水基清洗、溶剂清洗和磨料处理路线；不得以一种路线替代另一种路线。 | `us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020` |
| `boundary_upstream` | 外购投入 | 对金属、电力、燃料、化学品、涂料、组件和包装链接上游数据集，不在此前景清单中重建其供应链。 |  |
| `boundary_exclusions` | 其他生命周期阶段 | 除非研究目标明确纳入并单独报告，否则不包括资本设备、员工出行、分销、零售、使用、维护和生命终结。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing_packaging` | 制造、表面精整、装配和包装 | required | 所有数据集；下列每项条件交换仅在实际使用时适用 | 从交付坯料到包装后工厂门产品的前景制造 | 1 kg 合格成品净质量 |

### 过程：制造、表面精整、装配和包装（`fabrication_finishing_packaging`）

#### 输入

##### 产品流

###### 低碳钢板材（`low_carbon_steel_sheet`）

仅对低碳钢板材路线记录此项原子投入。

- 选定流：低碳钢板材
- 流属性/单位：Mass / kg
- 数量规则：批次净领用实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 低碳钢制合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：

###### 不锈钢板材（`stainless_steel_sheet`）

仅对不锈钢板材路线记录此项原子投入。

- 选定流：不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：批次净领用实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不锈钢制合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：

###### 铝板材（`aluminium_sheet`）

仅对铝板材路线记录此项原子投入。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：批次净领用实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 铝制合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：

###### 外购电力（`electricity`）

记录跨越制造计量边界的外购电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：由分表或有记录的设备工时分配的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 水基清洗或预处理工艺用水（`process_water`）

仅在水基清洗或预处理路线运行时记录此项用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越边界的计量补充水和漂洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 采用水基处理的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

仅在清洗配方确实含有氢氧化钠时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：配方确实含有时记录投加的活性物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 采用氢氧化钠清洗的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`

###### 粉末涂料配方（`powder_coating`）

仅对粉末涂装路线记录粉末涂料配方。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：涂装线领用量减去退库的未污染粉末
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粉末涂装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`

###### 溶剂型液体金属涂料配方（`solventborne_coating`）

仅对溶剂型路线记录完整液体涂料。

- 选定流：溶剂型液体金属涂料
- 流属性/单位：Mass / kg
- 数量规则：完整配方领用量减去密封退库量；不得以树脂质量替代
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 溶剂型涂装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020`

###### 现场直接加热用天然气（`natural_gas`）

仅在现场燃烧气态天然气进行干燥或固化时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：干燥或固化用计量气量，并声明参考条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 采用燃气加热的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`

###### 瓦楞纸箱（`corrugated_boxes`）

记录随成品出厂的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：包装规范单箱质量乘以装箱数，并与领用记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：

###### 低密度聚乙烯包装薄膜（`ldpe_film`）

仅在该薄膜随成品出厂时记录。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：包装规范单件质量乘以包装件数，并与领用记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 采用 PE-LD 薄膜包装的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：

##### 废物流

无废物投入跨越此前景边界。

##### 基本流

无基本流投入跨越此前景边界。

#### 输出

##### 产品流

###### 工厂门合格参考产品（`reference_product`）

记录加入包装质量之前的合格产品输出。

- 选定流：贱金属制文件盘、文件座、笔盘、公章架及类似办公或书桌用具
- 流属性/单位：Mass / kg
- 数量规则：按参考流定义为 1 kg 合格成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 钢铁成形废料（`ferrous_forming_scrap`）

记录切割和成形产生并分类收集的钢铁废料。

- 选定流：铁钢成形废料 `11d74955-1634-4ef7-94e9-b9e90783c510`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的边角料、冲孔料、线端和不合格成形件称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 钢铁制产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 铝成形废料（`aluminium_scrap`）

记录切割和成形产生并分类收集的铝废料。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的铝边角料、冲孔料和不合格成形件称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 铝制产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 未回收粉末涂装废弃物（`powder_coating_waste`）

仅记录无法在内部回收或循环的粉末材料。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass / kg
- 数量规则：内部循环后受污染或不可回收粉末的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粉末涂装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`

###### 液体涂装废涂料（`waste_paint`）

仅对液体涂装路线记录废弃含漆废物。

- 选定流：废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位：Mass / kg
- 数量规则：废弃液体涂料和含漆残渣称量质量，不含单独报告的溶剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 液体涂装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020`

###### 金属表面处理废水（`metal_finishing_wastewater`）

记录离开水基清洗或预处理工序接受处理或排放的废水。

- 选定流：金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：离开过程接受处理或排放的计量或槽容推算废水，扣除内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 采用水基处理的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`

##### 基本流

###### 现场天然气燃烧产生的化石二氧化碳（`fossil_co2`）

记录范围内现场燃气燃烧的直接化石 CO2，不含上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按计量天然气和有记录的燃料含碳量或供应商核实因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采用现场燃气燃烧的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_co2`
- 来源：

###### 溶剂型涂装挥发性有机物（`voc_emission`）

记录范围内溶剂型涂装及相关清洗产生的直接 VOC。

- 选定流：排入未特指空气的挥发性有机物
- 流属性/单位：Mass / kg
- 数量规则：采用测量或溶剂质量平衡，并扣除留存、回收、销毁和转移的溶剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 溶剂型涂装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_voc_balance`
- 来源：`us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020`

###### 机械精整或涂装产生的颗粒物（`particulate_matter`）

记录范围内产尘工序经治理后释放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：治理后的代表性测量值或有记录的捕集与未捕集质量计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采用产尘工序的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用生产线 | 优先采用分表、批次记录、分时设备数据和物理细分以避免分配。 |  |
| `allocation_shared_inputs` | 无法避免的共用总量 | 按设备工时、加工金属质量、涂装面积、炉占用或吞吐量等因果物理参数分配；披露任何非物理依据。 |  |
| `allocation_scrap` | 废金属和涂料废物 | 分别报告投入、产品、各项废物、内部循环和去向；除非更广建模方法要求，否则不在此前景过程中计入替代原生生产的抵扣。 |  |
| `allocation_consistency` | 归一化 | 在报告期内采用统一且有记录的层级，归一化前将分配总量与场址总量核对。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging` | `fabrication_finishing_packaging` | 各具体金属、化学品、涂料和包装投入 | 采购、领用、退料、BOM 和包装记录 | 身份；供应商；牌号或配方；批次；领用与退回质量；单件包装质量 | 经校准秤具及核对后的仓储记录 | kg | 每批；按月汇总 | 12 个代表性月份或完整较短生产期 | 所有范围内生产线及外包步骤 | 按原子流和路线汇总净领用量，因果分配后除以合格产品净质量 | 校准、供应商规范、存货核对、批次追溯 |
| `cp_utility_records` | `fabrication_finishing_packaging` | 电力、工艺用水和天然气 | 计量表、账单和设备工时记录 | 表号；读数；单位；天然气参考条件；工时；停机；共用负荷 | 读取经校准仪表并与账单核对 | MJ, kg, m3 | 每批或每班；按月汇总 | 与生产期一致 | 所有范围内用能用水点 | 扣除范围外负荷，因果分配并归一化 | 校准、账单、边界图、分配表 |
| `cp_waste_records` | `fabrication_finishing_packaging` | 各项具名废物 | 称重单、转移联单、槽表和回收商收据 | 身份；来源；毛重和皮重；体积与密度；日期；去向；处理；回收 | 每次转移称重或使用经校准仪表 | kg | 每次转移；按月汇总 | 与生产期一致 | 所有储存和排放点 | 按原子废物和路线汇总净外运量并归一化 | 校准、联单、收据、质量平衡 |
| `cp_fuel_co2` | `fabrication_finishing_packaging` | 直接化石 CO2 | 燃气表及供应商燃料质量记录 | 气量；温度；压力；含碳量或核实因子；氧化依据 | 按采集燃气量和供应商特定含碳数据计算 | kg CO2 | 每月 | 与燃气期一致 | 所有范围内燃烧点 | 汇总直接化石 CO2 并归一化 | 校准、供应商证书、计算表、完整性检查 |
| `cp_voc_balance` | `fabrication_finishing_packaging` | 直接 VOC | 涂料、稀释剂、回收、销毁和废物记录 | 配方质量；VOC 分数；稀释剂；留存、回收、销毁和废物溶剂 | 优先测量，否则闭合场址质量平衡 | kg VOC | 每配方和批次；按月汇总 | 与涂装期一致 | 所有施涂、闪蒸、烘炉和清洗点 | VOC 投入减去有记录的留存、回收、销毁和转移并归一化 | SDS 或证书、治理记录、废物分析、平衡闭合 |
| `cp_emission_records` | `fabrication_finishing_packaging` | 颗粒物 | 烟道测试、测量、捕集和运行记录 | 排放源；工序；流量；浓度；时长；捕集粉尘；治理效率 | 代表性测量或捕集/未捕集质量计算 | kg | 每次测试和运行期；按月汇总 | 代表报告期路线 | 所有产尘源和治理装置 | 汇总治理后排放并归一化 | 测试报告、校准、日志、治理检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 可变清单行 | 归一化量 = 路线归属量 / 合格成品净质量 | 原子流数量；产品净质量 | 每 1 kg 产品的数量 |  |
| `calc_material_balance` | 金属路线 | 金属投入 = 产品保留金属 + 外运废料 + 在制品变化 + 有记录损失；调查差额 | 领用金属；产品组成；废料；在制品 | 路线平衡闭合 |  |
| `calc_voc` | `voc_emission` | VOC 投入减去留存、回收、销毁和转移的 VOC | 配方、溶剂、治理和废物记录 | kg VOC/kg 产品 | `us-epa-ap42-metal-furniture-coating-1995` |
| `calc_fossil_co2` | `fossil_co2` | 按计量燃气、含碳量、分子换算和氧化依据计算；不含上游电力排放 | 燃气及含碳记录 | kg 化石 CO2/kg 产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和交换 | 保留用品、合金、坯料、涂料化学组成、废物状态、方向、类型、属性和单位；不得合并路线选项。 | 规范、BOM、UUID 审计和联单 |
| `dq_temporal` | 前景数据集 | 采用连续 12 个代表性月份或完整较短生产期；披露异常停机和产品组合变化。 | 有日期的生产、计量、仓储和废物记录 |
| `dq_completeness` | 前景边界 | 核对金属、产品、废料、公用工程、涂料、化学品、包装、废物和直接排放；解释遗漏和估算。 | 平衡、边界图、完整性清单 |
| `dq_route` | 条件交换 | 识别实际材料、连接、预处理、涂装、电镀、固化和治理路线；不适用行不得计入总量。 | 流程图、作业指导书、运行日志 |
| `dq_geography_technology` | 上游数据集 | 尽量匹配供应地域、技术、牌号、再生含量依据、电网、配方和交付状态；披露代理。 | 供应商元数据和选择记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考流 | 确认输出恰为 1 kg 合格产品净质量、包装未计入且必需限定信息齐全。 | `unsd-cpc-3-0-structure-2025` |
| `validate_atomic_inventory` | 清单 | 确认每行仅为一个交换，方向、类型、属性、单位、路线条件、UUID 状态和中文显示名均正确。 |  |
| `validate_balance` | 金属和废物 | 按金属类别核对领用坯料、产品保留金属、在制品变化、外运废料和有记录损失。 |  |
| `validate_energy_emissions` | 公用工程和排放 | 核对仪表；直接化石 CO2 仅含范围内燃烧；核对 VOC 和颗粒物且不叠加上游排放。 | `us-epa-ap42-metal-furniture-coating-1995` |
| `validate_sources_ranges` | 范围 | 无两个相互独立且边界兼容的原始来源时拒绝外推范围；改为要求前景采集并保留未解决需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一种已声明贱金属办公或书桌用品及路线的工厂门前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要所声明用品路线特定工厂门制造数据的产品足迹和生命周期模型 |
| excluded_use | 办公家具、纸制或全塑料用品、上游金属生产、使用或生命终结；除非另有证据 |
| required_metadata | PCR id 和版本；用品；尺寸；净质量；合金和坯料；再生含量依据；成形和连接；预处理；表面状态；固化能源；包装；地域；技术；报告期；分配；上游数据集；废物去向；治理 |
| required_quality_disclosure | 原始数据占比；覆盖；校准；平衡闭合；路线完整性；UUID 缺口；代理；分配；估算；遗漏；未解决范围证据 |
| update_trigger | 材料、供应商、再生含量、设计、成材率、工艺、表面处理、固化、燃料、治理、包装、废物路线、场址或电网发生变化，或数据超过项目时效要求 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | dataset | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | CPC 42994 正式英文身份和边界 |
| `hong-kong-censtatd-hs-2022` | official_guidance | 香港特别行政区政府统计处，《香港进出口货物分类表（协调制度）》2022 年版第二册，https://www.censtatd.gov.hk/en/data/stat_report/product/B2XX0012/att/B2XX0012012022XXXXB0100.pdf（检索于 2026-09-04） | 双语术语核验；不作为定量证据 |
| `us-epa-ap42-metal-furniture-coating-1995` | method_factor | 美国环境保护署，AP-42 第 4.2.2.12 节《金属家具表面涂装》，1995 年 1 月重排版，https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2m.pdf（检索于 2026-09-04） | 类似金属制品的清洗、涂装、固化、粉末和液体路线、VOC 方法及场址特定数据要求 |
| `eu-jrc-sts-bref-2020` | official_guidance | 欧盟委员会联合研究中心，《使用有机溶剂的表面处理（含木材及木制品化学防腐）BREF》，2020 年 12 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation（检索于 2026-09-04） | 涂装、喷漆、清洗和脱脂指南对其他金属制品的适用性 |

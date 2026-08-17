---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-waxes-other-than-triglycerides-whether-or-not-refined-or-coloured
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 植物蜡（甘油三酯除外），无论是否精制或着色

## 1. 范围与适用性

本候选 PCR 适用于 CPC 21931 中非甘油三酯的植物蜡前景数据包；当实际产品与证据符合相应身份时，可采用明确声明的巴西棕榈蜡、小烛树蜡或米糠蜡路线。任何聚合前，数据集必须锁定一种植物来源、一种提取或外购粗蜡起始条件、一种精制状态、一种着色状态和一种物理形态。

本 PCR 覆盖声明门控内的来源材料接收、报告场址实施的植物蜡回收、路线特定提取、澄清、过滤、条件性脱色或酸处理精制、成型、包装、清洗及条件性场内废水处理。排除甘油三酯油脂、动物蜡、矿物蜡或石油蜡、合成蜡、油鞣回收脂、脂肪物质或蜡处理残渣、接收门前的种植或野生采集、入厂运输、分销、使用与寿命终止。此处未命名的植物蜡身份必须通过具备路线证据的 PCR 审查更新后方可使用，不得以通用兜底交换记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-waxes-other-than-triglycerides-whether-or-not-refined-or-coloured` |
| classification_refs | CPC 3.0 `21931`，exact |
| covered_products | 甘油三酯除外的植物蜡，无论粗制、精制或着色；本次已编写路线集限于实际声明且身份匹配的巴西棕榈蜡、小烛树蜡或米糠蜡 |
| excluded_products | 甘油三酯油脂；动物蜡、矿物蜡、石油蜡与合成蜡；油鞣回收脂；CPC 21932 处理残渣；植物来源身份不可分别追溯的混合物 |
| representative_product | 一种已声明植物来源并明确精制状态、着色状态与物理形态的植物蜡 |
| production_route | 锁定一条路线：巴西棕榈叶机械回收并可条件性采用已声明溶剂提取；小烛树酸化水提取；以一种声明技术回收米糠蜡；或对一种外购粗植物蜡实施精制/成型 |
| market_state | 报告场址门口的合格散装或包装植物蜡净产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种已声明植物来源的 CPC 21931 合格植物蜡净产品 |
| How much | 1 kg 净产品质量，不含所有包装 |
| How well | 满足已声明客户或法规规范中的身份、精制状态、着色状态、纯度、水分、物理形态与放行状态 |
| How long or cycle | 报告场址门口完成的一个报告批次或生产活动；不指定服务寿命 |
| reference_flow_link | 天工 Product 流 `1933406f-ca56-4672-9678-ae3925128a03` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Vegetable waxes (other than triglycerides), whether or not refined or coloured `1933406f-ca56-4672-9678-ae3925128a03` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物来源；学名或供应商身份；提取或外购粗蜡起始条件；确切路线；精制状态；着色状态；物理形态；等级/规范；净质量与水分基准；生产场址；报告期间；参考质量不含包装 |

构建前景数据包时，每项必需限定信息均须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。限定信息缺失会使参考流不完整，并禁止与来源或加工方式不同的植物蜡聚合。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 精确报告 1 kg 合格植物蜡净产品；扣除初级、次级和三级包装质量。 |
| `mass_balance` | 每项植物蜡转化 | Mass | kg | 按同一批次和水分基准核对具名原料、中间蜡、合格蜡、植物残余物、过滤残渣、不合格蜡及废介质中残留蜡。 |
| `utility_measurement` | 每项过程公用工程 | Energy or volume | kWh、MJ 或 m3 | 通过独立仪表、发票或有记录的分配记录电网电力、外购饱和蒸汽、外购热水及每种燃料；不得录入合并热能量。 |
| `chemical_active_basis` | 酸、氧化剂、清洗剂、消毒剂与处理剂 | Mass | kg | 记录供应质量与浓度，并按要求计算有效物质质量；不得以一种化学品替代另一种。 |
| `solvent_balance` | 每种具名溶剂 | Mass | kg | 对每种化学身份分别核对新鲜溶剂、回收溶剂、产品带出、残渣带出与向空气排放。 |
| `refrigerant_balance` | 每种具名制冷剂 | Mass | kg | 根据设备特定库存和维护记录，分别确定 R717、R744 与 R404A 的补充量和排放量。 |
| `wastewater_load` | 每种具名出水参数 | Mass | kg | 采用同一监测期间匹配的浓度与处理水量计算负荷；不得录入集合污染物负荷。 |

## 5. 系统边界

前景从接收一种已声明来源材料或外购粗植物蜡开始。叶片、茎秆或油料生产位于上游时，应链接供应商特定上游数据集，不将这些活动纳入报告场址前景。前景在放行 1 kg 合格植物蜡净产品时结束，包装单独列清单。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格巴西棕榈叶、合格干燥小烛树茎、合格米糠原油、合格粗巴西棕榈蜡、合格粗小烛树蜡或合格粗米糠蜡中的一种 |
| starting_condition_role | 已声明前景门控与路线锁定 |
| product_classification_scope | 仅 CPC 21931；排除甘油三酯以及 CPC 21932 油鞣回收脂或处理残渣 |
| recursive_input_rule | CPC 21931 内的外购粗蜡仍作为明确产品投入并链接至独立上游数据集；不得在同一过程中递归展开，也不得与产出净额化。 |
| upstream_dataset_requirement | 植物生产、采集、来源材料加工及前景门外入厂运输的供应商或区域特定数据 |
| disclosure | 披露植物来源、起始条件、路线、各条件性操作、精制与着色状态、产品形态、分配决定、排除阶段、废水去向及每个未解决天工流 UUID。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `source_material_receiving` | 来源材料接收与路线锁定 | `required` | 每个数据集均须纳入；聚合前明确声明一种植物蜡来源、一条生产路线、一种产品形态以及一种精制/着色状态。 | `foreground_gate` | Accepted route-specific source material |
| `carnauba_mechanical_recovery` | 巴西棕榈叶干燥、蜡粉回收与粗蜡熔制 | `conditional` | 仅在声明巴西棕榈叶提取路线时纳入。 | `foreground_transformation` | Crude carnauba wax |
| `candelilla_hot_water_extraction` | 小烛树酸化水提取与压滤 | `conditional` | 仅在声明酸化水小烛树蜡路线时纳入。 | `foreground_transformation` | Crude candelilla wax |
| `rice_bran_wax_recovery` | 米糠蜡回收 | `conditional` | 仅在声明干法、湿法、溶剂冬化、高温正己烷或超临界二氧化碳米糠路线时纳入；数据集须锁定一种技术。 | `foreground_transformation` | Crude rice bran wax |
| `carnauba_solvent_extraction` | 巴西棕榈蜡粉溶剂提取 | `conditional` | 仅在合法合规且已声明的巴西棕榈蜡溶剂提取路线时纳入；只记录实际使用的具体溶剂卡，其余溶剂不出现。 | `foreground_transformation` | Solvent-extracted crude carnauba wax |
| `melting_clarification_filtration` | 植物蜡熔融、澄清与过滤 | `conditional` | 在声明的植物蜡于放行或进一步精制前进行熔融、澄清或过滤时纳入。 | `foreground_transformation` | Clarified botanical wax |
| `bleaching_acid_refinement` | 植物蜡脱色与酸处理精制 | `conditional` | 仅在锁定产品规格要求过氧化氢脱色、硫酸处理、活性白土处理或有记录的组合时纳入；每项实际处理仍为独立卡片。 | `foreground_transformation` | Refined botanical wax |
| `forming_cooling` | 植物蜡成型与冷却 | `conditional` | 在报告场址对散装蜡重新熔融、制片、制块或成型时纳入；锁定一种植物来源身份与一种实际产品形态。 | `foreground_transformation` | Formed botanical wax |
| `packaging_release` | 包装、质量放行与参考产品归一化 | `required` | 每个数据集均须纳入；只记录实际跨越边界的包装组件，并以不含包装的合格植物蜡净质量归一化。 | `foreground_reference_output` | 1 kg net conforming CPC 21931 vegetable wax |
| `cleaning_sanitation` | 设备清洗与消毒 | `conditional` | 在报告边界内实施清洗或消毒时纳入；分别记录每种实际清洗剂、消毒剂与公用工程。 | `foreground_support` | Cleaned production equipment |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅在一种或多种所列废水于场内处理时纳入；分别记录每种接收废水、处理化学品、残余物与排放污染物。 | `foreground_treatment` | Treated wastewater |

### 过程：来源材料接收与路线锁定（`source_material_receiving`）

#### 输入

##### 产品流

###### 接收巴西棕榈叶（`recv_carnauba_leaves`）

Carnauba palm leaves作为单独记录的原子交换进入本单元过程。仅用于巴西棕榈叶提取数据集，并记录含水或干燥状态。

- 选定流：Carnauba palm leaves
- 流属性/单位：Mass / kg
- 数量规则：weighed mass of carnauba palm leaves accepted at the receiving scale
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`usda-ams-carnauba-wax-2014`, `fao-nwfp-diversification-2009`

###### 接收干燥小烛树茎（`recv_candelilla_stalks`）

Dried candelilla stalks作为单独记录的原子交换进入本单元过程。仅用于酸化水提取或已声明溶剂提取的小烛树蜡路线。

- 选定流：Dried candelilla stalks
- 流属性/单位：Mass / kg
- 数量规则：weighed mass of dried candelilla stalks accepted at the receiving scale
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`fao-jecfa-candelilla-wax-2005`, `fao-nwfp-diversification-2009`

###### 接收米糠原油（`recv_crude_rice_bran_oil`）

Crude rice bran oil作为单独记录的原子交换进入本单元过程。仅在从油料中回收蜡时使用，并披露油料组成基准。

- 选定流：Crude rice bran oil
- 流属性/单位：Mass / kg
- 数量规则：weighed mass of crude rice bran oil accepted for the declared winterization route
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`usda-nifa-rice-bran-wax-0209429`, `us-fda-grn-720-rice-bran-wax`

###### 接收外购粗巴西棕榈蜡（`recv_crude_carnauba_wax`）

Crude carnauba wax作为单独记录的原子交换进入本单元过程。仅在提取位于前景之外且已链接供应商上游数据时使用。

- 选定流：Crude carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed mass of purchased crude carnauba wax accepted for refining
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`usda-ams-carnauba-wax-2014`

###### 接收外购粗小烛树蜡（`recv_crude_candelilla_wax`）

Crude candelilla wax作为单独记录的原子交换进入本单元过程。仅在茎秆提取位于前景之外且已链接供应商上游数据时使用。

- 选定流：Crude candelilla wax
- 流属性/单位：Mass / kg
- 数量规则：weighed mass of purchased crude candelilla wax accepted for refining
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 接收外购粗米糠蜡（`recv_crude_rice_bran_wax`）

Crude rice bran wax作为单独记录的原子交换进入本单元过程。仅在从米糠油回收位于前景之外且已链接供应商上游数据时使用。

- 选定流：Crude rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed mass of purchased crude rice bran wax accepted for refining
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`us-fda-grn-720-rice-bran-wax`

###### 接收阶段电网电力（`recv_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。将接收阶段电力与后续提取和精制电力分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity used by receiving, inspection and internal handling
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

###### 接收阶段柴油（`recv_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。仅在实际使用柴油设备时记录。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for diesel-powered receiving equipment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`jrc-fdm-bref-2019`

###### 接收阶段液化石油气（`recv_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。仅在实际使用液化石油气设备时记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for LPG-powered receiving equipment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 合格巴西棕榈叶（`accepted_carnauba_leaves`）

Accepted carnauba palm leaves作为单独记录的原子交换离开本单元过程。仅连接至巴西棕榈蜡路线。

- 选定流：Accepted carnauba palm leaves
- 流属性/单位：Mass / kg
- 数量规则：weighed accepted carnauba palm leaves transferred to mechanical recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`usda-ams-carnauba-wax-2014`

###### 合格干燥小烛树茎（`accepted_candelilla_stalks`）

Accepted dried candelilla stalks作为单独记录的原子交换离开本单元过程。仅连接至小烛树蜡路线。

- 选定流：Accepted dried candelilla stalks
- 流属性/单位：Mass / kg
- 数量规则：weighed accepted dried candelilla stalks transferred to hot-water extraction
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 合格米糠原油（`accepted_crude_rice_bran_oil`）

Accepted crude rice bran oil作为单独记录的原子交换离开本单元过程。仅连接至米糠蜡回收路线。

- 选定流：Accepted crude rice bran oil
- 流属性/单位：Mass / kg
- 数量规则：weighed accepted crude rice bran oil transferred to wax recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`usda-nifa-rice-bran-wax-0209429`

###### 合格粗巴西棕榈蜡（`accepted_crude_carnauba_wax`）

Accepted crude carnauba wax作为单独记录的原子交换离开本单元过程。作为独立植物来源身份记录。

- 选定流：Accepted crude carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed accepted crude carnauba wax transferred to refining
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`usda-ams-carnauba-wax-2014`

###### 合格粗小烛树蜡（`accepted_crude_candelilla_wax`）

Accepted crude candelilla wax作为单独记录的原子交换离开本单元过程。作为独立植物来源身份记录。

- 选定流：Accepted crude candelilla wax
- 流属性/单位：Mass / kg
- 数量规则：weighed accepted crude candelilla wax transferred to refining
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 合格粗米糠蜡（`accepted_crude_rice_bran_wax`）

Accepted crude rice bran wax作为单独记录的原子交换离开本单元过程。作为独立植物来源身份记录。

- 选定流：Accepted crude rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed accepted crude rice bran wax transferred to refining
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`us-fda-grn-720-rice-bran-wax`

##### 废物流

###### 不合格巴西棕榈叶（`rejected_carnauba_leaves`）

Rejected carnauba palm leaves作为单独记录的原子交换离开本单元过程。不得与小烛树或米糠残余物合并。

- 选定流：Rejected carnauba palm leaves
- 流属性/单位：Mass / kg
- 数量规则：weighed rejected carnauba palm leaves sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`eu-pef-2021-2279`

###### 不合格干燥小烛树茎（`rejected_candelilla_stalks`）

Rejected dried candelilla stalks作为单独记录的原子交换离开本单元过程。保留其植物来源身份。

- 选定流：Rejected dried candelilla stalks
- 流属性/单位：Mass / kg
- 数量规则：weighed rejected dried candelilla stalks sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`eu-pef-2021-2279`

###### 不合格米糠原油（`rejected_rice_bran_oil`）

Rejected crude rice bran oil作为单独记录的原子交换离开本单元过程。不得将该油料归为植物蜡产出。

- 选定流：Rejected crude rice bran oil
- 流属性/单位：Mass / kg
- 数量规则：weighed rejected crude rice bran oil sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_receiving`
- 来源：`un-cpc-3-0-2025`, `eu-pef-2021-2279`

##### 基本流

本方向不规定该类型流。

### 过程：巴西棕榈叶干燥、蜡粉回收与粗蜡熔制（`carnauba_mechanical_recovery`）

#### 输入

##### 产品流

###### 合格巴西棕榈叶投入（`carnauba_leaves_input`）

Accepted carnauba palm leaves作为单独记录的原子交换进入本单元过程。记录叶片状态与批次身份。

- 选定流：Accepted carnauba palm leaves
- 流属性/单位：Mass / kg
- 数量规则：weighed accepted leaf mass charged to drying and beating
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`usda-ams-carnauba-wax-2014`, `fao-nwfp-diversification-2009`

###### 巴西棕榈蜡熔制用水（`carnauba_process_water`）

Process water作为单独记录的原子交换进入本单元过程。不含在清洗过程中记录的清洗水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：metered water charged to carnauba wax melting or washing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡回收电网电力（`carnauba_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。将本阶段电表与精制阶段分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for drying fans, beating, scraping, pumping and straining
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`usda-ams-carnauba-wax-2014`, `jrc-fdm-bref-2019`

###### 巴西棕榈蜡外购饱和蒸汽（`carnauba_purchased_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在蒸汽从过程边界外购入时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to carnauba melting
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡外购热水（`carnauba_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。不得与蒸汽或燃料合并。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water to carnauba melting
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡回收天然气（`carnauba_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用天然气时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for direct or boiler heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`jrc-fdm-bref-2019`

###### 巴西棕榈蜡回收柴油（`carnauba_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开记录。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for diesel heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`jrc-fdm-bref-2019`

###### 巴西棕榈蜡回收液化石油气（`carnauba_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for LPG heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 粗巴西棕榈蜡（`crude_carnauba_wax_output`）

Crude carnauba wax作为单独记录的原子交换离开本单元过程。将该植物蜡独立转入精制或成型。

- 选定流：Crude carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed crude carnauba wax recovered after melting, straining and cooling
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`usda-ams-carnauba-wax-2014`, `fao-nwfp-diversification-2009`

###### 巴西棕榈蜡粉（`carnauba_wax_powder_output`）

Carnauba wax powder作为单独记录的原子交换离开本单元过程。仅在蜡粉未先熔制成粗蜡时使用。

- 选定流：Carnauba wax powder
- 流属性/单位：Mass / kg
- 数量规则：weighed wax powder recovered after leaf beating or scraping and routed to declared solvent extraction
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`usda-ams-carnauba-wax-2014`

##### 废物流

###### 废巴西棕榈叶（`carnauba_spent_leaves`）

Spent carnauba palm leaves作为单独记录的原子交换离开本单元过程。单独记录其处理去向。

- 选定流：Spent carnauba palm leaves
- 流属性/单位：Mass / kg
- 数量规则：weighed dry leaf residue leaving powder recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`fao-nwfp-diversification-2009`

###### 巴西棕榈蜡回收废水（`carnauba_process_wastewater`）

Carnauba wax recovery wastewater作为单独记录的原子交换离开本单元过程。不得与清洗废水合并。

- 选定流：Carnauba wax recovery wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered wastewater from melting, straining or washing discharged to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### 基本流

###### 巴西棕榈蜡燃烧化石二氧化碳（`carnauba_fossil_co2`）

Carbon dioxide, fossil, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算，不录入集合燃烧排放值。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 巴西棕榈蜡燃烧一氧化氮（`carnauba_no`）

Nitrogen monoxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算，不录入集合燃烧排放值。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 巴西棕榈蜡燃烧二氧化氮（`carnauba_no2`）

Nitrogen dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算，不录入集合燃烧排放值。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 巴西棕榈蜡燃烧二氧化硫（`carnauba_so2`）

Sulfur dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算，不录入集合燃烧排放值。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 巴西棕榈蜡燃烧细颗粒物（`carnauba_pm25`）

Particulate matter, PM2.5, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算，不录入集合燃烧排放值。

- 选定流：Particulate matter, PM2.5, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_mechanical_recovery`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：小烛树酸化水提取与压滤（`candelilla_hot_water_extraction`）

#### 输入

##### 产品流

###### 干燥小烛树茎投入（`candelilla_stalks_input`）

Accepted dried candelilla stalks作为单独记录的原子交换进入本单元过程。保留批次含水率与植物来源记录。

- 选定流：Accepted dried candelilla stalks
- 流属性/单位：Mass / kg
- 数量规则：weighed dried stalk mass charged to the extraction vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`, `fao-nwfp-diversification-2009`

###### 小烛树蜡提取用水（`candelilla_process_water`）

Process water作为单独记录的原子交换进入本单元过程。将提取用水与清洗水分开。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：metered water charged to acidified boiling and subsequent treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 小烛树蜡硫酸（`candelilla_sulfuric_acid`）

Sulfuric acid作为单独记录的原子交换进入本单元过程。记录供应浓度与有效酸基准。

- 选定流：Sulfuric acid
- 流属性/单位：Mass / kg
- 数量规则：weighed sulfuric acid charged to water acidification and declared further treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 小烛树蜡滤纸（`candelilla_filter_paper`）

Cellulose filter paper作为单独记录的原子交换进入本单元过程。不得与硅藻土或滤布合并。

- 选定流：Cellulose filter paper
- 流属性/单位：Mass / kg
- 数量规则：weighed filter paper installed in the candelilla filter press
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 小烛树蜡提取电网电力（`candelilla_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。将本阶段电表与精制阶段分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for agitation, pumping, skimming and filter pressing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`jrc-fdm-bref-2019`

###### 小烛树蜡外购饱和蒸汽（`candelilla_purchased_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在使用外购蒸汽时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to the extraction vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 小烛树蜡外购热水（`candelilla_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。不得与蒸汽或燃料合并。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 小烛树蜡提取天然气（`candelilla_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用天然气时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for extraction heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`jrc-fdm-bref-2019`

###### 小烛树蜡提取柴油（`candelilla_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开记录。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for diesel heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`jrc-fdm-bref-2019`

###### 小烛树蜡提取液化石油气（`candelilla_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for LPG heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 粗小烛树蜡块（`crude_candelilla_wax_output`）

Crude candelilla wax slab作为单独记录的原子交换离开本单元过程。独立转入精制或成型。

- 选定流：Crude candelilla wax slab
- 流属性/单位：Mass / kg
- 数量规则：weighed solidified wax skimmed from the extraction vessel and released from filter pressing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`

##### 废物流

###### 废小烛树茎（`candelilla_spent_stalks`）

Spent candelilla stalks作为单独记录的原子交换离开本单元过程。记录实际处理去向。

- 选定流：Spent candelilla stalks
- 流属性/单位：Mass / kg
- 数量规则：weighed extracted stalk residue leaving the vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-nwfp-diversification-2009`

###### 废小烛树滤纸（`candelilla_spent_filter_paper`）

Spent cellulose filter paper作为单独记录的原子交换离开本单元过程。与茎秆残余物分开。

- 选定流：Spent cellulose filter paper
- 流属性/单位：Mass / kg
- 数量规则：weighed used filter paper removed from the filter press
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 小烛树蜡酸性废水（`candelilla_acid_wastewater`）

Sulfuric-acid candelilla extraction wastewater作为单独记录的原子交换离开本单元过程。随体积记录 pH 与去向。

- 选定流：Sulfuric-acid candelilla extraction wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered acidified extraction water sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`fao-jecfa-candelilla-wax-2005`, `eu-fdm-bat-2019-2031`

##### 基本流

###### 小烛树蜡燃烧化石二氧化碳（`candelilla_fossil_co2`）

Carbon dioxide, fossil, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`eu-fdm-bat-2019-2031`

###### 小烛树蜡燃烧一氧化氮（`candelilla_no`）

Nitrogen monoxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`eu-fdm-bat-2019-2031`

###### 小烛树蜡燃烧二氧化氮（`candelilla_no2`）

Nitrogen dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`eu-fdm-bat-2019-2031`

###### 小烛树蜡燃烧二氧化硫（`candelilla_so2`）

Sulfur dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`eu-fdm-bat-2019-2031`

###### 小烛树蜡燃烧细颗粒物（`candelilla_pm25`）

Particulate matter, PM2.5, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Particulate matter, PM2.5, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_candelilla_hot_water_extraction`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：米糠蜡回收（`rice_bran_wax_recovery`）

#### 输入

##### 产品流

###### 米糠原油投入（`rice_bran_oil_input`）

Accepted crude rice bran oil作为单独记录的原子交换进入本单元过程。声明油料组成与批次身份。

- 选定流：Accepted crude rice bran oil
- 流属性/单位：Mass / kg
- 数量规则：weighed crude rice bran oil charged to the selected wax-recovery technology
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`

###### 米糠蜡回收工艺水（`rice_process_water`）

Process water作为单独记录的原子交换进入本单元过程。仅湿法工艺记录，且不含清洗水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：metered water charged to the selected wet-recovery operation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`

###### 米糠蜡回收电网电力（`rice_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。明确记录所选技术与电表分配。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for cooling, agitation, separation, pumping and recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`, `jrc-fdm-bref-2019`

###### 米糠蜡回收外购饱和蒸汽（`rice_purchased_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在外购蒸汽跨越边界时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to oil heating or solvent recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`jrc-fdm-bref-2019`

###### 米糠蜡回收外购热水（`rice_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。与蒸汽和燃料分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`jrc-fdm-bref-2019`

###### 米糠蜡回收天然气（`rice_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for process heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`jrc-fdm-bref-2019`

###### 米糠蜡回收柴油（`rice_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开记录。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for diesel heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`jrc-fdm-bref-2019`

###### 米糠蜡回收液化石油气（`rice_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for LPG heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`jrc-fdm-bref-2019`

###### 米糠蜡回收正己烷（`rice_n_hexane`）

n-Hexane作为单独记录的原子交换进入本单元过程。仅正己烷技术记录，并核对新鲜、回收与排放溶剂。

- 选定流：n-Hexane
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up n-hexane charged to the declared solvent route
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`

###### 米糠蜡回收二氧化碳（`rice_supercritical_co2`）

Carbon dioxide for supercritical extraction作为单独记录的原子交换进入本单元过程。仅超临界二氧化碳技术记录。

- 选定流：Carbon dioxide for supercritical extraction
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up carbon dioxide charged to the declared supercritical route
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`

###### 米糠蜡回收 R717 补充（`rice_r717_makeup`）

Ammonia refrigerant R717作为单独记录的原子交换进入本单元过程。仅记录已安装的制冷剂身份；不得合并不同制冷剂。

- 选定流：Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：weighed refrigerant make-up assigned to the recovery refrigeration system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡回收 R744 补充（`rice_r744_makeup`）

Carbon dioxide refrigerant R744作为单独记录的原子交换进入本单元过程。仅记录已安装的制冷剂身份；不得合并不同制冷剂。

- 选定流：Carbon dioxide refrigerant R744
- 流属性/单位：Mass / kg
- 数量规则：weighed refrigerant make-up assigned to the recovery refrigeration system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡回收 R404A 补充（`rice_r404a_makeup`）

Refrigerant R404A作为单独记录的原子交换进入本单元过程。仅记录已安装的制冷剂身份；不得合并不同制冷剂。

- 选定流：Refrigerant R404A
- 流属性/单位：Mass / kg
- 数量规则：weighed refrigerant make-up assigned to the recovery refrigeration system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 粗米糠蜡（`crude_rice_bran_wax_output`）

Crude rice bran wax作为单独记录的原子交换离开本单元过程。独立转入精制或成型。

- 选定流：Crude rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed wax fraction recovered by the declared technology
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`, `us-fda-grn-720-rice-bran-wax`

###### 脱蜡米糠油（`dewaxed_rice_bran_oil`）

Dewaxed rice bran oil作为单独记录的原子交换离开本单元过程。记录组成、去向及与蜡分开的分配基准。

- 选定流：Dewaxed rice bran oil
- 流属性/单位：Mass / kg
- 数量规则：weighed dewaxed oil co-product leaving wax recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-pef-2021-2279`

###### 回收米糠蜡正己烷（`recovered_rice_hexane`）

Recovered n-hexane作为单独记录的原子交换离开本单元过程。不得将该产出与补充溶剂静默净额化。

- 选定流：Recovered n-hexane
- 流属性/单位：Mass / kg
- 数量规则：measured n-hexane recovered for reuse or transfer
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`

##### 废物流

###### 米糠蜡过滤残渣（`rice_filter_residue`）

Rice-bran-wax filter residue作为单独记录的原子交换离开本单元过程。与废水污泥分开。

- 选定流：Rice-bran-wax filter residue
- 流属性/单位：Mass / kg
- 数量规则：weighed filter residue sent to its documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-pef-2021-2279`

###### 米糠蜡回收废水（`rice_recovery_wastewater`）

Rice-bran-wax recovery wastewater作为单独记录的原子交换离开本单元过程。仅在技术产生该水流时记录。

- 选定流：Rice-bran-wax recovery wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered process wastewater sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### 基本流

###### 米糠蜡正己烷排放（`rice_hexane_air`）

n-Hexane to air作为单独记录的原子交换离开本单元过程。将该确切溶剂排放与各制冷剂泄漏分开。

- 选定流：n-Hexane to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured solvent inventory balance and independently measured recovered solvent
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`usda-nifa-rice-bran-wax-0209429`

###### 米糠蜡 R717 排放（`rice_r717_air`）

Ammonia refrigerant R717 to air作为单独记录的原子交换离开本单元过程。不得汇总制冷剂排放。

- 选定流：Ammonia refrigerant R717 to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from refrigerant inventory, make-up and service records for the named refrigerant
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡 R744 排放（`rice_r744_air`）

Carbon dioxide refrigerant R744 to air作为单独记录的原子交换离开本单元过程。不得汇总制冷剂排放。

- 选定流：Carbon dioxide refrigerant R744 to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from refrigerant inventory, make-up and service records for the named refrigerant
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡 R404A 排放（`rice_r404a_air`）

Refrigerant R404A to air作为单独记录的原子交换离开本单元过程。不得汇总制冷剂排放。

- 选定流：Refrigerant R404A to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from refrigerant inventory, make-up and service records for the named refrigerant
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡燃烧化石二氧化碳（`rice_fossil_co2`）

Carbon dioxide, fossil, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡燃烧一氧化氮（`rice_no`）

Nitrogen monoxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡燃烧二氧化氮（`rice_no2`）

Nitrogen dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡燃烧二氧化硫（`rice_so2`）

Sulfur dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

###### 米糠蜡燃烧细颗粒物（`rice_pm25`）

Particulate matter, PM2.5, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Particulate matter, PM2.5, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rice_bran_wax_recovery`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：巴西棕榈蜡粉溶剂提取（`carnauba_solvent_extraction`）

#### 输入

##### 产品流

###### 巴西棕榈蜡粉投入（`carnauba_wax_powder_input`）

Carnauba wax powder作为单独记录的原子交换进入本单元过程。连接至确切蜡粉生产批次。

- 选定流：Carnauba wax powder
- 流属性/单位：Mass / kg
- 数量规则：weighed wax powder charged to the extraction vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡正庚烷（`carnauba_n_heptane`）

n-Heptane作为单独记录的原子交换进入本单元过程。仅在该确切溶剂合法允许且实际使用时记录，并独立核对。

- 选定流：n-Heptane
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up n-Heptane charged to the declared extraction batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡正己烷（`carnauba_n_hexane`）

n-Hexane作为单独记录的原子交换进入本单元过程。仅在该确切溶剂合法允许且实际使用时记录，并独立核对。

- 选定流：n-Hexane
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up n-Hexane charged to the declared extraction batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡脂肪族石脑油（`carnauba_aliphatic_naphtha`）

Aliphatic naphtha作为单独记录的原子交换进入本单元过程。仅在该确切溶剂合法允许且实际使用时记录，并独立核对。

- 选定流：Aliphatic naphtha
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up Aliphatic naphtha charged to the declared extraction batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡脂松节油（`carnauba_gum_turpentine`）

Gum turpentine作为单独记录的原子交换进入本单元过程。仅在该确切溶剂合法允许且实际使用时记录，并独立核对。

- 选定流：Gum turpentine
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up Gum turpentine charged to the declared extraction batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡苯（`carnauba_benzene`）

Benzene作为单独记录的原子交换进入本单元过程。仅在该确切溶剂合法允许且实际使用时记录，并独立核对。

- 选定流：Benzene
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up Benzene charged to the declared extraction batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡乙醚（`carnauba_diethyl_ether`）

Diethyl ether作为单独记录的原子交换进入本单元过程。仅在该确切溶剂合法允许且实际使用时记录，并独立核对。

- 选定流：Diethyl ether
- 流属性/单位：Mass / kg
- 数量规则：weighed make-up Diethyl ether charged to the declared extraction batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡溶剂提取电网电力（`carnauba_solvent_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。与机械回收及精制电力分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for extraction, pumping, separation and solvent recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`, `jrc-fdm-bref-2019`

###### 巴西棕榈蜡溶剂提取外购饱和蒸汽（`carnauba_solvent_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在使用外购蒸汽时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to extraction or solvent recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡溶剂提取外购热水（`carnauba_solvent_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。与蒸汽和燃料分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡溶剂提取天然气（`carnauba_solvent_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for extraction or solvent-recovery heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`jrc-fdm-bref-2019`

###### 巴西棕榈蜡溶剂提取柴油（`carnauba_solvent_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for diesel heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`jrc-fdm-bref-2019`

###### 巴西棕榈蜡溶剂提取液化石油气（`carnauba_solvent_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for LPG heat assigned to this stage
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 溶剂提取粗巴西棕榈蜡（`solvent_extracted_carnauba_wax`）

Solvent-extracted crude carnauba wax作为单独记录的原子交换离开本单元过程。独立转入声明的精制或成型路线。

- 选定流：Solvent-extracted crude carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed crude wax after solvent separation and recovery
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 回收巴西棕榈蜡正庚烷（`recovered_carnauba_n_heptane`）

Recovered n-heptane作为单独记录的原子交换离开本单元过程。不得将该产出与补充溶剂静默净额化。

- 选定流：Recovered n-heptane
- 流属性/单位：Mass / kg
- 数量规则：measured Recovered n-heptane recovered for reuse or transfer
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 回收巴西棕榈蜡正己烷（`recovered_carnauba_n_hexane`）

Recovered n-hexane作为单独记录的原子交换离开本单元过程。不得将该产出与补充溶剂静默净额化。

- 选定流：Recovered n-hexane
- 流属性/单位：Mass / kg
- 数量规则：measured Recovered n-hexane recovered for reuse or transfer
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 回收巴西棕榈蜡脂肪族石脑油（`recovered_carnauba_naphtha`）

Recovered aliphatic naphtha作为单独记录的原子交换离开本单元过程。不得将该产出与补充溶剂静默净额化。

- 选定流：Recovered aliphatic naphtha
- 流属性/单位：Mass / kg
- 数量规则：measured Recovered aliphatic naphtha recovered for reuse or transfer
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 回收巴西棕榈蜡脂松节油（`recovered_carnauba_turpentine`）

Recovered gum turpentine作为单独记录的原子交换离开本单元过程。不得将该产出与补充溶剂静默净额化。

- 选定流：Recovered gum turpentine
- 流属性/单位：Mass / kg
- 数量规则：measured Recovered gum turpentine recovered for reuse or transfer
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 回收巴西棕榈蜡苯（`recovered_carnauba_benzene`）

Recovered benzene作为单独记录的原子交换离开本单元过程。不得将该产出与补充溶剂静默净额化。

- 选定流：Recovered benzene
- 流属性/单位：Mass / kg
- 数量规则：measured Recovered benzene recovered for reuse or transfer
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 回收巴西棕榈蜡乙醚（`recovered_carnauba_ether`）

Recovered diethyl ether作为单独记录的原子交换离开本单元过程。不得将该产出与补充溶剂静默净额化。

- 选定流：Recovered diethyl ether
- 流属性/单位：Mass / kg
- 数量规则：measured Recovered diethyl ether recovered for reuse or transfer
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

##### 废物流

###### 巴西棕榈蜡溶剂提取残渣（`carnauba_solvent_residue`）

Carnauba solvent-extraction residue作为单独记录的原子交换离开本单元过程。按要求记录残留溶剂特征。

- 选定流：Carnauba solvent-extraction residue
- 流属性/单位：Mass / kg
- 数量规则：weighed insoluble residue sent to its documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

##### 基本流

###### 巴西棕榈蜡正庚烷排放（`carnauba_n_heptane_air`）

n-Heptane to air作为单独记录的原子交换离开本单元过程。将该确切溶剂排放分开。

- 选定流：n-Heptane to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from the measured n-Heptane inventory balance and independently measured recovery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡正己烷排放（`carnauba_n_hexane_air`）

n-Hexane to air作为单独记录的原子交换离开本单元过程。将该确切溶剂排放分开。

- 选定流：n-Hexane to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from the measured n-Hexane inventory balance and independently measured recovery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡脂肪族石脑油排放（`carnauba_naphtha_air`）

Aliphatic naphtha to air作为单独记录的原子交换离开本单元过程。将该确切溶剂排放分开。

- 选定流：Aliphatic naphtha to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from the measured Aliphatic naphtha inventory balance and independently measured recovery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡脂松节油排放（`carnauba_turpentine_air`）

Gum turpentine to air作为单独记录的原子交换离开本单元过程。将该确切溶剂排放分开。

- 选定流：Gum turpentine to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from the measured Gum turpentine inventory balance and independently measured recovery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡苯排放（`carnauba_benzene_air`）

Benzene to air作为单独记录的原子交换离开本单元过程。将该确切溶剂排放分开。

- 选定流：Benzene to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from the measured Benzene inventory balance and independently measured recovery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

###### 巴西棕榈蜡乙醚排放（`carnauba_ether_air`）

Diethyl ether to air作为单独记录的原子交换离开本单元过程。将该确切溶剂排放分开。

- 选定流：Diethyl ether to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from the measured Diethyl ether inventory balance and independently measured recovery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carnauba_solvent_extraction`
- 来源：`usda-ams-carnauba-wax-2014`

### 过程：植物蜡熔融、澄清与过滤（`melting_clarification_filtration`）

#### 输入

##### 产品流

###### 澄清用粗巴西棕榈蜡（`clarify_crude_carnauba`）

Crude carnauba wax作为单独记录的原子交换进入本单元过程。仅记录已声明植物来源与路线的中间体。

- 选定流：Crude carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed mass charged to the clarification vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 澄清用溶剂提取巴西棕榈蜡（`clarify_solvent_carnauba`）

Solvent-extracted crude carnauba wax作为单独记录的原子交换进入本单元过程。仅记录已声明植物来源与路线的中间体。

- 选定流：Solvent-extracted crude carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed mass charged to the clarification vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 澄清用粗小烛树蜡（`clarify_crude_candelilla`）

Crude candelilla wax slab作为单独记录的原子交换进入本单元过程。仅记录已声明植物来源与路线的中间体。

- 选定流：Crude candelilla wax slab
- 流属性/单位：Mass / kg
- 数量规则：weighed mass charged to the clarification vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 澄清用粗米糠蜡（`clarify_crude_rice_bran`）

Crude rice bran wax作为单独记录的原子交换进入本单元过程。仅记录已声明植物来源与路线的中间体。

- 选定流：Crude rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed mass charged to the clarification vessel
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-nifa-rice-bran-wax-0209429`

###### 澄清工艺水（`clarify_process_water`）

Process water作为单独记录的原子交换进入本单元过程。与清洗水分开。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：metered water charged to the wax clarification operation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 漂白土澄清助剂（`clarify_fullers_earth`）

Fuller's earth作为单独记录的原子交换进入本单元过程。与硅藻土及活性漂白土分开记录。

- 选定流：Fuller's earth
- 流属性/单位：Mass / kg
- 数量规则：weighed Fuller's earth charged to the declared clarification batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 硅藻土助滤剂（`clarify_diatomaceous_earth`）

Diatomaceous earth作为单独记录的原子交换进入本单元过程。独立记录该助滤剂。

- 选定流：Diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：weighed diatomaceous earth charged as filtration aid
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 棉质滤布（`clarify_cotton_cloth`）

Cotton filter cloth作为单独记录的原子交换进入本单元过程。与纤维素滤纸分开。

- 选定流：Cotton filter cloth
- 流属性/单位：Mass / kg
- 数量规则：weighed replacement cotton filter cloth assigned to the batch or campaign
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 纤维素滤纸（`clarify_filter_paper`）

Cellulose filter paper作为单独记录的原子交换进入本单元过程。与棉质滤布分开。

- 选定流：Cellulose filter paper
- 流属性/单位：Mass / kg
- 数量规则：weighed replacement cellulose filter paper assigned to the batch or campaign
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 澄清阶段电网电力（`clarify_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。将本阶段电表与提取和成型阶段分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for melting, agitation, pumping and filtration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`jrc-fdm-bref-2019`

###### 澄清阶段外购饱和蒸汽（`clarify_purchased_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在使用外购蒸汽时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to wax melting
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 澄清阶段外购热水（`clarify_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。与蒸汽和燃料分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 澄清阶段天然气（`clarify_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for clarification heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`jrc-fdm-bref-2019`

###### 澄清阶段柴油（`clarify_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for clarification heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`jrc-fdm-bref-2019`

###### 澄清阶段液化石油气（`clarify_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for clarification heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 澄清巴西棕榈蜡（`clarified_carnauba_output`）

Clarified carnauba wax作为单独记录的原子交换离开本单元过程。转移时保持植物来源身份。

- 选定流：Clarified carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed clarified wax released from filtration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 澄清小烛树蜡（`clarified_candelilla_output`）

Clarified candelilla wax作为单独记录的原子交换离开本单元过程。转移时保持植物来源身份。

- 选定流：Clarified candelilla wax
- 流属性/单位：Mass / kg
- 数量规则：weighed clarified wax released from filtration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 澄清米糠蜡（`clarified_rice_bran_output`）

Clarified rice bran wax作为单独记录的原子交换离开本单元过程。转移时保持植物来源身份。

- 选定流：Clarified rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed clarified wax released from filtration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`us-fda-grn-720-rice-bran-wax`

##### 废物流

###### 废漂白土（`spent_fullers_earth`）

Spent Fuller's earth作为单独记录的原子交换离开本单元过程。尽可能记录含蜡量与处理去向。

- 选定流：Spent Fuller's earth
- 流属性/单位：Mass / kg
- 数量规则：weighed spent Fuller's earth removed from filtration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 废硅藻土（`spent_diatomaceous_earth`）

Spent diatomaceous earth作为单独记录的原子交换离开本单元过程。与废漂白土分开。

- 选定流：Spent diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：weighed spent diatomaceous earth removed from filtration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 废棉质滤布（`spent_cotton_cloth`）

Spent cotton filter cloth作为单独记录的原子交换离开本单元过程。与废滤纸分开。

- 选定流：Spent cotton filter cloth
- 流属性/单位：Mass / kg
- 数量规则：weighed used cotton filter cloth sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`usda-ams-carnauba-wax-2014`

###### 废澄清滤纸（`spent_clarify_filter_paper`）

Spent cellulose filter paper作为单独记录的原子交换离开本单元过程。与助滤固体分开。

- 选定流：Spent cellulose filter paper
- 流属性/单位：Mass / kg
- 数量规则：weighed used cellulose filter paper sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 植物蜡澄清废水（`clarification_wastewater`）

Vegetable-wax clarification wastewater作为单独记录的原子交换离开本单元过程。与提取和清洗废水分开。

- 选定流：Vegetable-wax clarification wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered clarification wastewater sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melting_clarification_filtration`
- 来源：`jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### 基本流

本方向不规定该类型流。

### 过程：植物蜡脱色与酸处理精制（`bleaching_acid_refinement`）

#### 输入

##### 产品流

###### 精制用澄清巴西棕榈蜡（`refine_carnauba_input`）

Clarified carnauba wax作为单独记录的原子交换进入本单元过程。仅用于声明的植物产品。

- 选定流：Clarified carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed clarified wax charged to the declared treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`usda-ams-carnauba-wax-2014`

###### 精制用澄清小烛树蜡（`refine_candelilla_input`）

Clarified candelilla wax作为单独记录的原子交换进入本单元过程。仅用于声明的植物产品。

- 选定流：Clarified candelilla wax
- 流属性/单位：Mass / kg
- 数量规则：weighed clarified wax charged to the declared treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 精制用澄清米糠蜡（`refine_rice_bran_input`）

Clarified rice bran wax作为单独记录的原子交换进入本单元过程。仅用于声明的植物产品。

- 选定流：Clarified rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed clarified wax charged to the declared treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`us-fda-grn-720-rice-bran-wax`

###### 过氧化氢脱色剂（`refine_hydrogen_peroxide`）

Hydrogen peroxide作为单独记录的原子交换进入本单元过程。记录供应浓度与有效物质基准。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied hydrogen peroxide charged to the batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`usda-ams-carnauba-wax-2014`

###### 硫酸精制剂（`refine_sulfuric_acid`）

Sulfuric acid作为单独记录的原子交换进入本单元过程。记录供应浓度与有效酸基准。

- 选定流：Sulfuric acid
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied sulfuric acid charged to candelilla refinement
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 活性漂白土（`refine_activated_clay`）

Activated bleaching clay作为单独记录的原子交换进入本单元过程。不得与漂白土或硅藻土合并。

- 选定流：Activated bleaching clay
- 流属性/单位：Mass / kg
- 数量规则：weighed activated bleaching clay charged to the declared batch
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`usda-ams-carnauba-wax-2014`

###### 精制工艺水（`refine_process_water`）

Process water作为单独记录的原子交换进入本单元过程。与清洗水分开。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：metered process water charged to bleaching or acid refinement
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`usda-ams-carnauba-wax-2014`, `fao-jecfa-candelilla-wax-2005`

###### 精制阶段电网电力（`refine_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。将本阶段电表与澄清阶段分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for agitation, pumping and filtration
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`jrc-fdm-bref-2019`

###### 精制阶段外购饱和蒸汽（`refine_purchased_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在使用外购蒸汽时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to refinement
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`jrc-fdm-bref-2019`

###### 精制阶段外购热水（`refine_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。与蒸汽和燃料分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`jrc-fdm-bref-2019`

###### 精制阶段天然气（`refine_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for refining heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`jrc-fdm-bref-2019`

###### 精制阶段柴油（`refine_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for refining heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`jrc-fdm-bref-2019`

###### 精制阶段液化石油气（`refine_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for refining heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 精制巴西棕榈蜡（`refined_carnauba_output`）

Refined carnauba wax作为单独记录的原子交换离开本单元过程。保持植物来源身份与精制状态。

- 选定流：Refined carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed refined wax released against the locked product specification
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`usda-ams-carnauba-wax-2014`

###### 精制小烛树蜡（`refined_candelilla_output`）

Refined candelilla wax作为单独记录的原子交换离开本单元过程。保持植物来源身份与精制状态。

- 选定流：Refined candelilla wax
- 流属性/单位：Mass / kg
- 数量规则：weighed refined wax released against the locked product specification
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 精制米糠蜡（`refined_rice_bran_output`）

Refined rice bran wax作为单独记录的原子交换离开本单元过程。保持植物来源身份与精制状态。

- 选定流：Refined rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed refined wax released against the locked product specification
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`us-fda-grn-720-rice-bran-wax`

##### 废物流

###### 废活性漂白土（`spent_activated_clay`）

Spent activated bleaching clay作为单独记录的原子交换离开本单元过程。尽可能记录残留蜡或化学危害。

- 选定流：Spent activated bleaching clay
- 流属性/单位：Mass / kg
- 数量规则：weighed spent activated bleaching clay sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`usda-ams-carnauba-wax-2014`

###### 植物蜡精制酸性废水（`refining_acid_wastewater`）

Acidic vegetable-wax refining wastewater作为单独记录的原子交换离开本单元过程。与碱性清洗废水分开。

- 选定流：Acidic vegetable-wax refining wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered acidic wastewater sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`fao-jecfa-candelilla-wax-2005`, `eu-fdm-bat-2019-2031`

##### 基本流

###### 精制燃烧化石二氧化碳（`refine_fossil_co2`）

Carbon dioxide, fossil, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`eu-fdm-bat-2019-2031`

###### 精制燃烧一氧化氮（`refine_no`）

Nitrogen monoxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`eu-fdm-bat-2019-2031`

###### 精制燃烧二氧化氮（`refine_no2`）

Nitrogen dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`eu-fdm-bat-2019-2031`

###### 精制燃烧二氧化硫（`refine_so2`）

Sulfur dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`eu-fdm-bat-2019-2031`

###### 精制燃烧细颗粒物（`refine_pm25`）

Particulate matter, PM2.5, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Particulate matter, PM2.5, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bleaching_acid_refinement`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：植物蜡成型与冷却（`forming_cooling`）

#### 输入

##### 产品流

###### 成型用散装巴西棕榈蜡（`forming_carnauba_input`）

Bulk carnauba wax作为单独记录的原子交换进入本单元过程。在批次元数据中记录精制与着色状态。

- 选定流：Bulk carnauba wax
- 流属性/单位：Mass / kg
- 数量规则：weighed bulk wax charged to the declared forming line
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`usda-ams-carnauba-wax-2014`

###### 成型用散装小烛树蜡（`forming_candelilla_input`）

Bulk candelilla wax作为单独记录的原子交换进入本单元过程。在批次元数据中记录精制与着色状态。

- 选定流：Bulk candelilla wax
- 流属性/单位：Mass / kg
- 数量规则：weighed bulk wax charged to the declared forming line
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 成型用散装米糠蜡（`forming_rice_bran_input`）

Bulk rice bran wax作为单独记录的原子交换进入本单元过程。在批次元数据中记录精制与着色状态。

- 选定流：Bulk rice bran wax
- 流属性/单位：Mass / kg
- 数量规则：weighed bulk wax charged to the declared forming line
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`us-fda-grn-720-rice-bran-wax`

###### 成型阶段电网电力（`forming_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。将本阶段电表与精制阶段分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for remelting, pumps, flaker or slab equipment and cooling
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`usda-ams-carnauba-wax-2014`, `jrc-fdm-bref-2019`

###### 成型阶段外购饱和蒸汽（`forming_purchased_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在使用时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to remelting
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`usda-ams-carnauba-wax-2014`

###### 成型阶段外购热水（`forming_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。与蒸汽和燃料分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`jrc-fdm-bref-2019`

###### 成型阶段天然气（`forming_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for remelting heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`jrc-fdm-bref-2019`

###### 成型阶段柴油（`forming_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for remelting heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`jrc-fdm-bref-2019`

###### 成型阶段液化石油气（`forming_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for remelting heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`jrc-fdm-bref-2019`

###### 成型冷却水（`forming_cooling_water`）

Cooling water作为单独记录的原子交换进入本单元过程。与清洗水分开。

- 选定流：Cooling water
- 流属性/单位：Volume / m3
- 数量规则：metered make-up cooling water assigned to wax forming
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`jrc-fdm-bref-2019`

###### 成型 R717 补充（`forming_r717_makeup`）

Ammonia refrigerant R717作为单独记录的原子交换进入本单元过程。仅记录已安装的制冷剂身份。

- 选定流：Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：weighed refrigerant make-up assigned to the forming refrigeration system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型 R744 补充（`forming_r744_makeup`）

Carbon dioxide refrigerant R744作为单独记录的原子交换进入本单元过程。仅记录已安装的制冷剂身份。

- 选定流：Carbon dioxide refrigerant R744
- 流属性/单位：Mass / kg
- 数量规则：weighed refrigerant make-up assigned to the forming refrigeration system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型 R404A 补充（`forming_r404a_makeup`）

Refrigerant R404A作为单独记录的原子交换进入本单元过程。仅记录已安装的制冷剂身份。

- 选定流：Refrigerant R404A
- 流属性/单位：Mass / kg
- 数量规则：weighed refrigerant make-up assigned to the forming refrigeration system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 巴西棕榈蜡片（`formed_carnauba_flakes`）

Carnauba wax flakes作为单独记录的原子交换离开本单元过程。仅在生产该确切植物蜡形态时使用。

- 选定流：Carnauba wax flakes
- 流属性/单位：Mass / kg
- 数量规则：weighed conforming formed wax transferred to packaging
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`usda-ams-carnauba-wax-2014`

###### 小烛树蜡块（`formed_candelilla_slabs`）

Candelilla wax slabs作为单独记录的原子交换离开本单元过程。仅在生产该确切植物蜡形态时使用。

- 选定流：Candelilla wax slabs
- 流属性/单位：Mass / kg
- 数量规则：weighed conforming formed wax transferred to packaging
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 米糠蜡片（`formed_rice_bran_flakes`）

Rice bran wax flakes作为单独记录的原子交换离开本单元过程。仅在生产该确切植物蜡形态时使用。

- 选定流：Rice bran wax flakes
- 流属性/单位：Mass / kg
- 数量规则：weighed conforming formed wax transferred to packaging
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`us-fda-grn-720-rice-bran-wax`

##### 废物流

###### 巴西棕榈蜡成型边料（`carnauba_forming_scrap`）

Carnauba wax forming scrap作为单独记录的原子交换离开本单元过程。保留植物来源身份；不得合并不同蜡边料。

- 选定流：Carnauba wax forming scrap
- 流属性/单位：Mass / kg
- 数量规则：weighed off-spec or trim wax sent to the documented recovery or treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-pef-2021-2279`

###### 小烛树蜡成型边料（`candelilla_forming_scrap`）

Candelilla wax forming scrap作为单独记录的原子交换离开本单元过程。保留植物来源身份；不得合并不同蜡边料。

- 选定流：Candelilla wax forming scrap
- 流属性/单位：Mass / kg
- 数量规则：weighed off-spec or trim wax sent to the documented recovery or treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-pef-2021-2279`

###### 米糠蜡成型边料（`rice_bran_forming_scrap`）

Rice bran wax forming scrap作为单独记录的原子交换离开本单元过程。保留植物来源身份；不得合并不同蜡边料。

- 选定流：Rice bran wax forming scrap
- 流属性/单位：Mass / kg
- 数量规则：weighed off-spec or trim wax sent to the documented recovery or treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-pef-2021-2279`

###### 成型冷却排污水（`forming_cooling_blowdown`）

Wax-forming cooling-water blowdown作为单独记录的原子交换离开本单元过程。与工艺及清洗废水分开。

- 选定流：Wax-forming cooling-water blowdown
- 流属性/单位：Volume / m3
- 数量规则：metered cooling-water blowdown sent to treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_cooling`
- 来源：`jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

##### 基本流

###### 成型 R717 排放（`forming_r717_air`）

Ammonia refrigerant R717 to air作为单独记录的原子交换离开本单元过程。不得汇总制冷剂排放。

- 选定流：Ammonia refrigerant R717 to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from refrigerant inventory, make-up and service records for the named refrigerant
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型 R744 排放（`forming_r744_air`）

Carbon dioxide refrigerant R744 to air作为单独记录的原子交换离开本单元过程。不得汇总制冷剂排放。

- 选定流：Carbon dioxide refrigerant R744 to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from refrigerant inventory, make-up and service records for the named refrigerant
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型 R404A 排放（`forming_r404a_air`）

Refrigerant R404A to air作为单独记录的原子交换离开本单元过程。不得汇总制冷剂排放。

- 选定流：Refrigerant R404A to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from refrigerant inventory, make-up and service records for the named refrigerant
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型燃烧化石二氧化碳（`forming_fossil_co2`）

Carbon dioxide, fossil, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型燃烧一氧化氮（`forming_no`）

Nitrogen monoxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型燃烧二氧化氮（`forming_no2`）

Nitrogen dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型燃烧二氧化硫（`forming_so2`）

Sulfur dioxide to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

###### 成型燃烧细颗粒物（`forming_pm25`）

Particulate matter, PM2.5, to air作为单独记录的原子交换离开本单元过程。按单一物质独立计算。

- 选定流：Particulate matter, PM2.5, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from measured stage fuel use and site-specific monitored or permitted emission factors
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_forming_cooling`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：包装、质量放行与参考产品归一化（`packaging_release`）

#### 输入

##### 产品流

###### 转入包装的巴西棕榈蜡（`pack_carnauba_wax_input`）

Carnauba wax for packaging作为单独记录的原子交换进入本单元过程。仅用于锁定的植物产品身份。

- 选定流：Carnauba wax for packaging
- 流属性/单位：Mass / kg
- 数量规则：weighed net wax transferred to the packaging lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`usda-ams-carnauba-wax-2014`

###### 转入包装的小烛树蜡（`pack_candelilla_wax_input`）

Candelilla wax for packaging作为单独记录的原子交换进入本单元过程。仅用于锁定的植物产品身份。

- 选定流：Candelilla wax for packaging
- 流属性/单位：Mass / kg
- 数量规则：weighed net wax transferred to the packaging lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`fao-jecfa-candelilla-wax-2005`

###### 转入包装的米糠蜡（`pack_rice_bran_wax_input`）

Rice bran wax for packaging作为单独记录的原子交换进入本单元过程。仅用于锁定的植物产品身份。

- 选定流：Rice bran wax for packaging
- 流属性/单位：Mass / kg
- 数量规则：weighed net wax transferred to the packaging lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`us-fda-grn-720-rice-bran-wax`

###### 牛皮纸袋（`pack_kraft_sack`）

Kraft-paper sack作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：Kraft-paper sack
- 流属性/单位：Mass / kg
- 数量规则：weighed Kraft-paper sack consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯内衬袋（`pack_ldpe_liner`）

Low-density polyethylene liner作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：Low-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：weighed Low-density polyethylene liner consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 高密度聚乙烯桶（`pack_hdpe_pail`）

High-density polyethylene pail作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：High-density polyethylene pail
- 流属性/单位：Mass / kg
- 数量规则：weighed High-density polyethylene pail consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸箱（`pack_corrugated_box`）

Corrugated fiberboard box作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：Corrugated fiberboard box
- 流属性/单位：Mass / kg
- 数量规则：weighed Corrugated fiberboard box consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 碳钢桶（`pack_steel_drum`）

Carbon-steel drum作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：Carbon-steel drum
- 流属性/单位：Mass / kg
- 数量规则：weighed Carbon-steel drum consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 木托盘（`pack_wood_pallet`）

Wooden pallet作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：weighed Wooden pallet consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 线性低密度聚乙烯缠绕膜（`pack_lldpe_film`）

Linear low-density polyethylene stretch film作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：Linear low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：weighed Linear low-density polyethylene stretch film consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 纸标签（`pack_paper_label`）

Paper label作为单独记录的原子交换进入本单元过程。仅在使用该确切包装组件时记录。

- 选定流：Paper label
- 流属性/单位：Mass / kg
- 数量规则：weighed Paper label consumed for released lots
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 包装阶段电网电力（`pack_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。将包装电力与成型电力分开。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for weighing, filling, sealing, labelling and pallet wrapping
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### 包装搬运柴油（`pack_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。仅在实际使用柴油设备时记录。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for diesel-powered packaging handling equipment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`jrc-fdm-bref-2019`

###### 包装搬运液化石油气（`pack_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。仅在实际使用液化石油气设备时记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for LPG-powered packaging handling equipment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

###### 合格植物蜡净参考产品（`reference_vegetable_wax`）

Vegetable waxes (other than triglycerides), whether or not refined or coloured作为单独记录的原子交换离开本单元过程。这是唯一参考产品交换；须声明植物来源、路线、精制状态、着色状态与物理形态。

- 选定流：Vegetable waxes (other than triglycerides), whether or not refined or coloured `1933406f-ca56-4672-9678-ae3925128a03`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：calculated net conforming wax mass normalized to exactly 1 kg, excluding all packaging mass
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`un-cpc-3-0-2025`, `eu-pef-2021-2279`

##### 废物流

###### 废牛皮纸袋（`waste_kraft_sack`）

Kraft-paper sack waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：Kraft-paper sack waste
- 流属性/单位：Mass / kg
- 数量规则：weighed Kraft-paper sack waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 废低密度聚乙烯内衬袋（`waste_ldpe_liner`）

Low-density polyethylene liner waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：Low-density polyethylene liner waste
- 流属性/单位：Mass / kg
- 数量规则：weighed Low-density polyethylene liner waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 废高密度聚乙烯桶（`waste_hdpe_pail`）

High-density polyethylene pail waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：High-density polyethylene pail waste
- 流属性/单位：Mass / kg
- 数量规则：weighed High-density polyethylene pail waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 废瓦楞纸箱（`waste_corrugated_box`）

Corrugated fiberboard box waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：Corrugated fiberboard box waste
- 流属性/单位：Mass / kg
- 数量规则：weighed Corrugated fiberboard box waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 废碳钢桶（`waste_steel_drum`）

Carbon-steel drum waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：Carbon-steel drum waste
- 流属性/单位：Mass / kg
- 数量规则：weighed Carbon-steel drum waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 废木托盘（`waste_wood_pallet`）

Wooden pallet waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：Wooden pallet waste
- 流属性/单位：Mass / kg
- 数量规则：weighed Wooden pallet waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 废线性低密度聚乙烯缠绕膜（`waste_lldpe_film`）

Linear low-density polyethylene stretch-film waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：Linear low-density polyethylene stretch-film waste
- 流属性/单位：Mass / kg
- 数量规则：weighed Linear low-density polyethylene stretch-film waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 废纸标签（`waste_paper_label`）

Paper label waste作为单独记录的原子交换离开本单元过程。将该包装废物与其他所有组件分开。

- 选定流：Paper label waste
- 流属性/单位：Mass / kg
- 数量规则：weighed Paper label waste from packaging operations sent to its documented destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 包装阶段不合格植物蜡（`offspec_packaged_wax`）

Off-spec packaged vegetable wax作为单独记录的原子交换离开本单元过程。声明其植物来源身份及回收或处理去向。

- 选定流：Off-spec packaged vegetable wax
- 流属性/单位：Mass / kg
- 数量规则：weighed off-spec wax removed before reference-product release
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

##### 基本流

本方向不规定该类型流。

### 过程：设备清洗与消毒（`cleaning_sanitation`）

#### 输入

##### 产品流

###### 清洗水（`cleaning_water`）

Cleaning water作为单独记录的原子交换进入本单元过程。与提取、精制及冷却用水分开。

- 选定流：Cleaning water
- 流属性/单位：Volume / m3
- 数量规则：metered water used for equipment and line cleaning
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`, `jrc-fdm-bref-2019`

###### 清洗阶段电网电力（`cleaning_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。单独分配清洗电力。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered or allocated electricity for cleaning pumps and clean-in-place operation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 清洗阶段外购饱和蒸汽（`cleaning_purchased_steam`）

Purchased saturated steam作为单独记录的原子交换进入本单元过程。仅在使用外购蒸汽时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：metered purchased saturated steam delivered to cleaning
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 清洗阶段外购热水（`cleaning_hot_water`）

Purchased hot water作为单独记录的原子交换进入本单元过程。与蒸汽和燃料分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：metered thermal energy delivered as purchased hot water for cleaning
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 清洗阶段天然气（`cleaning_natural_gas`）

Natural gas作为单独记录的原子交换进入本单元过程。仅在实际使用时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：metered natural gas combusted for cleaning-water heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`jrc-fdm-bref-2019`

###### 清洗阶段柴油（`cleaning_diesel`）

Diesel fuel作为单独记录的原子交换进入本单元过程。与天然气和液化石油气分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for cleaning-water heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`jrc-fdm-bref-2019`

###### 清洗阶段液化石油气（`cleaning_lpg`）

Liquefied petroleum gas作为单独记录的原子交换进入本单元过程。与天然气和柴油分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：fuel issue or meter record for cleaning-water heat
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`jrc-fdm-bref-2019`

###### 氢氧化钠清洗剂（`cleaning_sodium_hydroxide`）

Sodium hydroxide作为单独记录的原子交换进入本单元过程。独立记录供应浓度与有效物质基准。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Sodium hydroxide used in cleaning or sanitation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 硝酸清洗剂（`cleaning_nitric_acid`）

Nitric acid作为单独记录的原子交换进入本单元过程。独立记录供应浓度与有效物质基准。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Nitric acid used in cleaning or sanitation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 磷酸清洗剂（`cleaning_phosphoric_acid`）

Phosphoric acid作为单独记录的原子交换进入本单元过程。独立记录供应浓度与有效物质基准。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Phosphoric acid used in cleaning or sanitation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 过氧乙酸消毒剂（`cleaning_peracetic_acid`）

Peracetic acid作为单独记录的原子交换进入本单元过程。独立记录供应浓度与有效物质基准。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Peracetic acid used in cleaning or sanitation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 次氯酸钠消毒剂（`cleaning_sodium_hypochlorite`）

Sodium hypochlorite作为单独记录的原子交换进入本单元过程。独立记录供应浓度与有效物质基准。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Sodium hypochlorite used in cleaning or sanitation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

本方向不规定该类型流。

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

本方向不规定该类型流。

##### 废物流

###### 氢氧化钠清洗废水（`alkaline_cleaning_wastewater`）

Sodium-hydroxide cleaning wastewater作为单独记录的原子交换离开本单元过程。保持该化学特性明确的废水流独立。

- 选定流：Sodium-hydroxide cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Sodium-hydroxide cleaning wastewater sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 硝酸清洗废水（`nitric_cleaning_wastewater`）

Nitric-acid cleaning wastewater作为单独记录的原子交换离开本单元过程。保持该化学特性明确的废水流独立。

- 选定流：Nitric-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Nitric-acid cleaning wastewater sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 磷酸清洗废水（`phosphoric_cleaning_wastewater`）

Phosphoric-acid cleaning wastewater作为单独记录的原子交换离开本单元过程。保持该化学特性明确的废水流独立。

- 选定流：Phosphoric-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Phosphoric-acid cleaning wastewater sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 过氧乙酸清洗废水（`peracetic_cleaning_wastewater`）

Peracetic-acid cleaning wastewater作为单独记录的原子交换离开本单元过程。保持该化学特性明确的废水流独立。

- 选定流：Peracetic-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Peracetic-acid cleaning wastewater sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

###### 次氯酸钠清洗废水（`hypochlorite_cleaning_wastewater`）

Sodium-hypochlorite cleaning wastewater作为单独记录的原子交换离开本单元过程。保持该化学特性明确的废水流独立。

- 选定流：Sodium-hypochlorite cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Sodium-hypochlorite cleaning wastewater sent to the documented treatment destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

本方向不规定该类型流。

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电网电力（`wwt_grid_electricity`）

Grid electricity作为单独记录的原子交换进入本单元过程。依据处理系统电表分配。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：metered electricity used by on-site wastewater treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`

###### 氯化铁处理剂（`wwt_ferric_chloride`）

Ferric chloride作为单独记录的原子交换进入本单元过程。记录供应浓度与有效物质基准。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Ferric chloride consumed by on-site wastewater treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 氢氧化钠处理剂（`wwt_sodium_hydroxide`）

Sodium hydroxide作为单独记录的原子交换进入本单元过程。记录供应浓度与有效物质基准。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Sodium hydroxide consumed by on-site wastewater treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 盐酸处理剂（`wwt_hydrochloric_acid`）

Hydrochloric acid作为单独记录的原子交换进入本单元过程。记录供应浓度与有效物质基准。

- 选定流：Hydrochloric acid
- 流属性/单位：Mass / kg
- 数量规则：weighed supplied Hydrochloric acid consumed by on-site wastewater treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 进入处理的巴西棕榈蜡回收废水（`wwt_carnauba_recovery_water`）

Carnauba wax recovery wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Carnauba wax recovery wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Carnauba wax recovery wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的小烛树蜡酸性废水（`wwt_candelilla_acid_water`）

Sulfuric-acid candelilla extraction wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Sulfuric-acid candelilla extraction wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Sulfuric-acid candelilla extraction wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的米糠蜡回收废水（`wwt_rice_recovery_water`）

Rice-bran-wax recovery wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Rice-bran-wax recovery wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Rice-bran-wax recovery wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的澄清废水（`wwt_clarification_water`）

Vegetable-wax clarification wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Vegetable-wax clarification wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Vegetable-wax clarification wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的精制酸性废水（`wwt_refining_acid_water`）

Acidic vegetable-wax refining wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Acidic vegetable-wax refining wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Acidic vegetable-wax refining wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的成型冷却排污水（`wwt_forming_blowdown`）

Wax-forming cooling-water blowdown作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Wax-forming cooling-water blowdown
- 流属性/单位：Volume / m3
- 数量规则：metered Wax-forming cooling-water blowdown accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的氢氧化钠清洗废水（`wwt_alkaline_cleaning_water`）

Sodium-hydroxide cleaning wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Sodium-hydroxide cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Sodium-hydroxide cleaning wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的硝酸清洗废水（`wwt_nitric_cleaning_water`）

Nitric-acid cleaning wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Nitric-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Nitric-acid cleaning wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的磷酸清洗废水（`wwt_phosphoric_cleaning_water`）

Phosphoric-acid cleaning wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Phosphoric-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Phosphoric-acid cleaning wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的过氧乙酸清洗废水（`wwt_peracetic_cleaning_water`）

Peracetic-acid cleaning wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Peracetic-acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Peracetic-acid cleaning wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 进入处理的次氯酸钠清洗废水（`wwt_hypochlorite_cleaning_water`）

Sodium-hypochlorite cleaning wastewater作为单独记录的原子交换进入本单元过程。在处理汇集前保留该来源水流身份。

- 选定流：Sodium-hypochlorite cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered Sodium-hypochlorite cleaning wastewater accepted by the on-site treatment system
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

本方向不规定该类型流。

#### 输出

##### 产品流

本方向不规定该类型流。

##### 废物流

###### 处理后废水（`treated_wastewater`）

Treated vegetable-wax-facility wastewater作为单独记录的原子交换离开本单元过程。记录接收去向与监测期间。

- 选定流：Treated vegetable-wax-facility wastewater
- 流属性/单位：Volume / m3
- 数量规则：metered treated effluent volume leaving on-site treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 废水处理污泥（`wwt_sludge`）

Vegetable-wax wastewater-treatment sludge作为单独记录的原子交换离开本单元过程。记录干物质基准与处理去向。

- 选定流：Vegetable-wax wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：weighed dewatered sludge leaving treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 废水处理栅渣（`wwt_screenings`）

Vegetable-wax wastewater-treatment screenings作为单独记录的原子交换离开本单元过程。与污泥分开。

- 选定流：Vegetable-wax wastewater-treatment screenings
- 流属性/单位：Mass / kg
- 数量规则：weighed screenings leaving treatment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 出水化学需氧量（`effluent_cod`）

Chemical oxygen demand to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 出水五日生化需氧量（`effluent_bod5`）

Biochemical oxygen demand, five-day, to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Biochemical oxygen demand, five-day, to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 出水总悬浮物（`effluent_tss`）

Total suspended solids to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Total suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 出水总氮（`effluent_total_n`）

Total nitrogen to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 出水总磷（`effluent_total_p`）

Total phosphorus to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 出水氯化物（`effluent_chloride`）

Chloride to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Chloride to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 出水总有机碳（`effluent_toc`）

Total organic carbon to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Total organic carbon to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 出水植物蜡（`effluent_vegetable_wax`）

Vegetable wax to water作为单独记录的原子交换离开本单元过程。独立计算该确切参数并报告分析方法。

- 选定流：Vegetable wax to water
- 流属性/单位：Mass / kg
- 数量规则：calculated from matched effluent concentration and treated-water volume for the reporting period
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-fdm-bat-2019-2031`

###### 废水处理甲烷（`wwt_methane_air`）

Methane to air作为单独记录的原子交换离开本单元过程。仅在处理过程产生甲烷时记录。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from site-specific biogas measurement or a documented treatment-specific calculation using collected wastewater data
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`

###### 废水处理生物源二氧化碳（`wwt_biogenic_co2_air`）

Carbon dioxide, biogenic, to air作为单独记录的原子交换离开本单元过程。仅在处理过程产生生物源二氧化碳时记录。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：calculated from site-specific biogas measurement or a documented treatment-specific calculation using collected wastewater data
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per declared production batch and normalized to 1 kg net conforming reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`

## 7. 分配与共产品处理

首先通过保留路线特定单元过程与独立植物来源身份来避免分配。将直接计量或批次记录的投入和产出归属于引起其发生的过程。前景过程之间转移的内部蜡中间体与回收溶剂不得重复计入。

当一个过程产生两个可对外使用的产品（例如粗蜡与脱蜡米糠油）时，首先利用批次、质量、组成、能量与设备记录检验物理细分。无法细分时，应采用与研究目标和 EU PEF 层级一致且有记录的产品特定分配方法，披露分配键、数据期间与敏感性；不得仅为避免分配而把共产品归为废物。回收溶剂、再利用蜡边料、植物残余物、废介质、污泥与包装废物的负荷与收益遵循其有记录的去向和所选系统模型；本 PCR 不规定避免负荷默认值。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_material_receiving` | `source_material_receiving` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, kWh, MJ | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_carnauba_mechanical_recovery` | `carnauba_mechanical_recovery` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, m3, kWh, MJ | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_candelilla_hot_water_extraction` | `candelilla_hot_water_extraction` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, m3, kWh, MJ | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_rice_bran_wax_recovery` | `rice_bran_wax_recovery` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, m3, kWh, MJ | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_carnauba_solvent_extraction` | `carnauba_solvent_extraction` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, kWh, MJ | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_melting_clarification_filtration` | `melting_clarification_filtration` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, m3, kWh, MJ | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_bleaching_acid_refinement` | `bleaching_acid_refinement` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, m3, kWh, MJ | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_forming_cooling` | `forming_cooling` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, kWh, MJ, m3 | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_packaging_release` | `packaging_release` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | kg, kWh, MJ, kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | m3, kWh, MJ, kg | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |
| `cp_onsite_wastewater_treatment` | `onsite_wastewater_treatment` | 过程中的每项原子交换 | `foreground_record` | batch_id, timestamp, exact flow identity, supplier or meter id, gross and tare, quantity, unit, concentration where relevant, destination, operator, evidence reference | 读取经校准仪表、秤、批次表、采购或维护记录与实验室结果；每个 row_id 保留一项记录。 | m3, kWh, kg | 每批次或仪表期间 | 代表性报告期间 | 报告场址与具名设备 | 汇总同一 row_id 记录、转换为所需单位，再按合格参考产品净质量归一化；不得跨路线平均 | 校准、发票、批次记录、实验室方法、核对与审核人签署 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | `reference_vegetable_wax` | 合格蜡净质量 = 放行包装总质量减去皮重与全部包装质量；清单按净质量归一化 | 放行总质量、皮重、每个包装组件质量、不合格质量 | kg 合格植物蜡净产品 | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | 每项植物蜡转化 | 计算同基准批次质量平衡，并在放行前调查无法解释的损失 | 具名原料和中间体质量、合格产出、残余物、废水中蜡、不合格蜡、残留蜡 | 经核对的批次质量平衡 | `eu-pef-2021-2279` |
| `calc_solvent_release` | 每项具名溶剂向空气排放行 | 溶剂排放 = 新鲜溶剂 + 返还库存 - 回收溶剂 - 产品、废水和残渣带出溶剂，并按经核实库存变化调整 | 一种化学品的新鲜、回收、库存变化与带出记录 | kg 该溶剂向空气排放 | `usda-ams-carnauba-wax-2014`, `usda-nifa-rice-bran-wax-0209429` |
| `calc_refrigerant_release` | 每项具名制冷剂向空气排放行 | 对确切制冷剂采用设备特定库存、补充、回收与维护记录；不得采用混合制冷剂行 | 期初/期末充注量、补充量、回收制冷剂、维护记录 | kg 具名制冷剂向空气排放 | `eu-fdm-bat-2019-2031` |
| `calc_effluent_load` | 每项具名污染物向水排放行 | 负荷 = 匹配的分析浓度 × 处理后出水量，并记录单位转换与采样代表性 | 浓度、流量、采样期间、分析方法 | kg 具名参数向水排放 | `eu-fdm-bat-2019-2031` |
| `calc_combustion_release` | 每项具名燃烧向空气排放行 | 将实测燃料用量乘以该确切污染物的场址特定监测或许可因子，并记录氧化与控制假设 | 具名燃料量、低位或高位热值基准、污染物特定因子、减排记录 | kg 具名物质向空气排放 | `eu-fdm-bat-2019-2031` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_lock` | 整个数据集 | 聚合前固定一种植物来源身份、一种起始条件、一条路线和一种产品规范；不同植物蜡身份或技术建立独立数据集。 | 路线声明、产品规范、过程图与批次谱系 |
| `dq_completeness` | 所有已知交换 | 覆盖纳入过程中所有已知产品流、废物流与基本流投入和产出；对确实不适用项明确说明。 | 质量、溶剂、水、能源与废物核对；EU PEF 清单审查 |
| `dq_primary_data` | 报告场址前景 | 使用企业特定实测或依据实测数据计算的记录；本 PCR 不提供默认量，因此不得以 PCR 默认值替代缺失的重要数量。 | 仪表、发票、批次表、实验室报告与计算 |
| `dq_time_technology_geography` | 每个过程 | 记录时间、技术与地理代表性，并识别停机、启动或非典型批次。 | 报告期间定义、设备清单、场址边界与生产日志 |
| `dq_identity_traceability` | 每个未解决流 UUID | 保留确切 Selected flow 与 row_id；仅在精确 hybrid 搜索及直接公开 state-100 核验后填写 UUID。 | manifest 未解决流登记表与核验证据 |
| `dq_verification` | 完成的数据包 | 独立审核路线身份、参考质量、原子流完整性、计算、分配、证据、数据质量与双语机器字段对齐。 | 已签署审核清单与已更正发现 |

## 9. 校验规则

合格前景数据包应满足：

1. 解析至 CPC 21931 及已核验参考 Product 流，同时排除甘油三酯、CPC 21932 残渣与非植物蜡。
2. 只声明一种植物来源、起始条件、路线、精制状态、着色状态、产品形态与放行规范。
3. 精确报告 1 kg 合格植物蜡净产品，并从参考质量中排除每个包装组件。
4. 纳入每个必需过程及所有适用条件性过程，每张清单卡只含一项原子交换。
5. 电力、外购饱和蒸汽、外购热水、天然气、柴油、液化石油气、每种制冷剂、每种溶剂、每种化学品、每个包装组件、每种废物与每种排放均须分开。
6. 只使用前景记录或依据采集记录计算的值；本 PCR 不提供默认量、默认范围、模型估算或推理估算。
7. 核对植物蜡质量、每种溶剂、每种制冷剂以及报告期间废水体积与负荷。
8. 保留共产品身份，并披露细分或分配的数据、方法与敏感性。
9. 每个非参考 UUID 在精确双重核验前保持为空，并在 manifest 审查元数据中维持 row_id 闭合。
10. 若中英文的 process_id、row_id、方向、流类型、Selected flow、UUID、属性/单位、数值模式、特异性、基准类型、证据类型、采集协议或来源 id 顺序不一致，则拒绝数据集。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种植物蜡生产或精制路线的产品特定前景数据包 |
| downstream_use | 投影至天工 flow、process 与 lifecyclemodel 记录，并用于经审查比较或足迹研究 |
| allowed_use | 仅用于已声明植物来源身份、路线、产品规范、场址与报告期间 |
| excluded_use | 通用植物蜡平均；巴西棕榈蜡、小烛树蜡与米糠蜡之间替代；甘油三酯、动物蜡、矿物蜡、石油蜡或合成蜡；CPC 21932 残渣；无证据支持的植物蜡身份 |
| required_metadata | CPC 代码、植物来源与学名、供应商/来源地理、起始条件、确切路线与技术、精制与着色状态、产品形态与规范、参考 UUID、场址、期间、产能与利用率、分配、废水去向、包装、排除项与未解决 UUID 登记表 |
| required_quality_disclosure | 初级数据占比、时间/地理/技术代表性、仪表与秤覆盖、实验室方法、质量/溶剂/制冷剂/水核对、分配敏感性、缺失数据与验证结果 |
| update_trigger | 新植物蜡身份或路线；产品规范变化；溶剂、制冷剂、脱色、提取、成型、包装或处理技术变化；重大供应商、分配或边界变化；新双重核验天工 UUID；重要证据或法规变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure, retained raw CSV, code 21931 (2025). | Exact product-category boundary: vegetable waxes excluding triglycerides; separation from degras and treatment residues classified at CPC 21932. |
| `usda-ams-carnauba-wax-2014` | `official_guidance` | USDA Agricultural Marketing Service. Technical Evaluation Report: Waxes—Carnauba Wax. 22 January 2014. https://www.ams.usda.gov/sites/default/files/media/waxes%20report%202014.pdf | Carnauba leaf preparation, wax-powder recovery, steam or water melting, solvent routes, clay treatment, hydrogen-peroxide bleaching, filtration aids, flaking and packaging process decomposition. |
| `fao-jecfa-candelilla-wax-2005` | `standard` | FAO/WHO JECFA. Combined Compendium of Food Additive Specifications: Candelilla wax. 2005. https://www.fao.org/4/a0044e/a0044e05.htm | Candelilla feedstock identity and the acidified-water boiling, skimming, solidification, acid treatment and filter-press route. |
| `fao-nwfp-diversification-2009` | `official_guidance` | FAO. Non-farm income from non-wood forest products. Diversification Booklet 12. 2009. https://www.fao.org/4/i0527e/i0527e.pdf | Carnauba leaf drying, threshing, melting, straining and cooling; candelilla collection and extraction by boiling or solvent route. |
| `usda-nifa-rice-bran-wax-0209429` | `official_guidance` | USDA NIFA CRIS project 0209429, Development of a process for producing a serum cholesterol-lowering agent derived from rice bran wax. https://portal.nifa.usda.gov/web/crisprojectpages/0209429-development-of-a-process-for-producing-a-serum-cholesterol-lowering-agent-derived-from-rice-bran-wax.html | Conditional rice-bran-wax recovery technologies: dry, wet or solvent winterization, high-temperature hexane extraction and supercritical-carbon-dioxide extraction. |
| `us-fda-grn-720-rice-bran-wax` | `official_guidance` | U.S. Food and Drug Administration. GRAS Notice No. 720: Rice bran wax. https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=720&set=grasnotices | Official rice bran wax product identity and food-use context; not used for inventory defaults. |
| `jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre. Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627. 2019. DOI: 10.2760/243911. https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | Facility utility, cleaning, wastewater, waste-gas and monitoring process structure without adopting cross-sector numerical values. |
| `eu-fdm-bat-2019-2031` | `standard` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Inventory completeness for water, energy, raw materials, wastewater, waste gas, cleaning chemicals, refrigeration and individually monitored wastewater and air-emission parameters. |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific bill of materials, company-specific foreground data, complete LCI, allocation, data quality, transparent reporting and verification. |

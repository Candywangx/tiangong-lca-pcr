---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-volume-of-80-vol-or-higher
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 酒精度按容量计不低于80%的未变性乙醇

## 1. 范围与适用性

本 PCR 适用于酒精度按容量计不低于 80%、以可销售散装或包装产品形态交付至生产场址门口的未变性乙醇前景生产。范围包括糖类、淀粉类或木质纤维素类底物经发酵生产乙醇，以及必需的蒸馏和精馏步骤。场址自行运行时，还包括路线特定的原料制备、发酵、产品回收、储存、发运准备、场内公用工程、残余物管理和废水处理。

生物质种植或收集、外购原料、酶、化学品、能源、水和包装的生产以及入厂运输应链接独立背景数据集。变性、下游配送、调入燃料或饮料、消费或燃烧、饮料陈酿和生命末期均不包括。合成乙醇、变性乙醇、酒精度低于 80% vol 的乙醇、酒精饮料和通用发酵醪液不属于本类别。数据包必须声明原料路线、实际体积分数酒精度、水分或等效组成、测量温度与方法、产品等级、散装或包装形态，以及精馏后是否进一步脱水。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-volume-of-80-vol-or-higher |
| classification_refs | CPC 3.0：24110，酒精度按容量计不低于80%的未变性乙醇，exact |
| covered_products | 发酵后经蒸馏和精馏生产、酒精度不低于 80% vol 的可销售未变性乙醇 |
| excluded_products | 变性乙醇；酒精度低于 80% vol 的乙醇；合成乙醇；烈酒及其他饮料；发酵醪液；下游乙醇混合物 |
| representative_product | 生产场址门口、已声明实际体积分数酒精度的精馏未变性乙醇 |
| production_route | 路线特定底物制备；发酵；蒸馏与精馏；储存与发运准备 |
| market_state | 散装罐车、可重复使用容器或包装的可销售产品，未变性且酒精度不低于 80% vol |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产场址门口的精馏未变性乙醇 |
| How much | 1,000 kg |
| How well | 可销售产品，实测酒精度不低于 80% vol，并声明产品等级、水分或等效组成和发运形态 |
| How long or cycle | 从不少于连续 12 个月的报告期归一化的一个完整生产周期；新建或发生重大改变的工厂可采用经证明具有代表性的较短期间 |
| reference_flow_link | 精馏乙醇 `276f1cf5-0aa1-4d57-ad95-9dada6e043a0` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 精馏乙醇 `276f1cf5-0aa1-4d57-ad95-9dada6e043a0` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际体积分数酒精度；未变性状态；测量温度和试验方法；水分或等效组成；发酵原料及路线；采用时的脱水技术；产品等级；散装或包装形式；生产场址；报告期 |

Tiangong 直读流将精馏乙醇识别为变性前的未变性乙醇，并归入 CPC 24110。其显示名称没有写出酒精度阈值，因此具体前景数据包只有在必需限定信息证明实际酒精度不低于 80% vol 时才符合本类别。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和按质量归一化的清单 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以校准的发运或生产质量基准确定合格乙醇净质量；在归一化至 1,000 kg 前保留毛重、皮重、库存变化和损失记录。 |
| `alcoholic_strength` | 参考产品身份 | 体积分数酒精度 | % vol | 报告实测值、测量温度、试验方法和样品基准；低于 80% vol 的产出不符合类别身份，且不得与合格产出平均。 |
| `water_and_composition` | 产品质量与质量平衡 | 质量分数或浓度 | 声明的原始单位 | 保留水分或等效组成结果以及变性剂检验，以核查未变性状态和质量平衡。 |
| `energy_conversion` | 电力、蒸汽、热和燃料 | 能量 | kWh、MJ 或原始计量单位 | 保留原始读数、热值基准和换算因子；不得把电力、蒸汽和各燃料聚合为一个清单交换。 |
| `period_normalization` | 所有前景交换 | 参考流属性 | 每 1,000 kg | 在归一化前，对同一期间的收货、生产、转移、库存、回收材料、废物和排放进行核对。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_plant_gate` | 前景数据集 | 包括报告场址运行的路线特定底物制备、发酵、蒸馏、精馏、产品储存、发运准备、场内公用工程、残余物处理和废水处理。 | `nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022` |
| `boundary_upstream_links` | 生命周期模型 | 为交付至场址的原料、酶、化学品、燃料、电力、水、包装和入厂运输链接独立上游数据集；除非场址实际生产，否则不得把其生产并入场址前景。 | `eu-environmental-footprint-2021` |
| `boundary_product_exclusions` | 产品身份 | 排除变性以及所有下游混配、配送、使用、燃烧和生命末期；排除陈酿及饮料特定后处理。 | `unsd-cpc-3-0-24110`; `us-epa-ap42-distilled-spirits-1997` |
| `boundary_complete_inventory` | 纳入过程 | 将每项材料、公用工程、废物、共产品和基本排放记录为原子交换；对重大缺失流进行估算或标记，不得隐藏在聚合平衡中。 | `eu-environmental-footprint-2021`; `nrel-ethanol-design-2011` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已交付至生产场址的可发酵底物或原料、公用工程、化学品、酶和包装 |
| starting_condition_role | 场址接收点的背景—前景接口 |
| product_classification_scope | 实际酒精度不低于 80% vol 的未变性乙醇 |
| recursive_input_rule | 外购合格乙醇进入再蒸馏、混配或发运时，应链接为上游乙醇数据集；仅报告场址的新增操作保留在前景。 |
| upstream_dataset_requirement | 对每项交付原料、公用工程、化学品、酶、包装和运输服务采用供应商特定或代表性数据集，并披露路线和地域。 |
| disclosure | 声明原料路线、酒精度方法和值、水分或组成基准、场址边界、外包操作、公用工程供应方式、共产品去向、废水处理、发运形态、报告期、估算和排除项。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | 原料制备 | `required` | 仅采用所声明路线实际使用的原子原料和处理流。 | 制备用于发酵的可发酵糖或醪液。 | 转移至发酵的已制备可发酵醪液 |
| `fermentation` | 发酵 | `required` | 所有涵盖的发酵路线。 | 将可发酵糖转化为含乙醇醪液。 | 转移至回收的发酵醪液 |
| `distillation_rectification` | 蒸馏与精馏 | `required` | 所有涵盖产品。 | 分离并浓缩乙醇至不低于 80% vol。 | 转移至储存的精馏乙醇 |
| `storage_dispatch` | 产品储存与发运准备 | `required` | 包装流仅用于所声明的发运形态。 | 储存、检验并准备未变性乙醇发运。 | 场址门口 1,000 kg 合格产品 |
| `onsite_utilities_wastewater` | 场内公用工程与废水处理 | `conditional` | 纳入场址运行的各锅炉、热电联产、制冷或废水处理活动；否则使用外购公用工程或场外处理数据集。 | 供应公用工程并管理场址废水和排放，避免重复计算外购服务。 | 公用工程输出或已处理废水 |

### 过程：原料制备（`feedstock_preparation`）

#### 输入

##### 产品流

###### 甘蔗汁（`sugarcane_juice`）

仅在甘蔗汁进入前景制备过程时采用本路线特定底物。

- 选定流：甘蔗汁
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录收货质量、可溶性固形物或糖含量、水分基准、供应商和库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`arcentales-bastidas-ethanol-lca-2022`

###### 甘蔗糖蜜（`cane_molasses`）

仅在含糖蜜路线中采用本原子底物。

- 选定流：甘蔗糖蜜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录收货质量、糖浓度、水分、等级、供应商和库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`arcentales-bastidas-ethanol-lca-2022`

###### 玉米籽粒（`maize_grain`）

在所声明的淀粉路线中将玉米作为单一原料记录。

- 选定流：玉米籽粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录收货质量、水分、淀粉含量、等级、供应商和库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-epa-ap42-distilled-spirits-1997`

###### 玉米秸秆（`corn_stover`）

仅在所声明木质纤维素路线中采用玉米秸秆，并保留干物质和组成记录。

- 选定流：玉米秸秆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录收货质量和干质量、水分、碳水化合物与木质素组成、供应商和库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`nrel-ethanol-design-2011`

###### 原料制备用水（`feed_preparation_water`）

记录磨碎、糖化、稀释、预处理、水解或清洗用水，不包括冷却水。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：按工艺区域计量或核对供给原料制备的水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

###### 硫酸（`sulfuric_acid`）

仅在用于酸预处理、水解或 pH 控制时记录硫酸。

- 选定流：硫酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录交付产品质量、浓度、用途以及批次或计量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`nrel-ethanol-design-2011`

###### 原料制备用氢氧化钠（`sodium_hydroxide_feed`）

仅在用于调理、pH 调整或分配至本过程的清洗时记录氢氧化钠。

- 选定流：氢氧化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录交付产品质量、浓度、用途和批次分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`nrel-ethanol-design-2011`

###### α-淀粉酶（`alpha_amylase`）

淀粉液化采用 α-淀粉酶时，将其作为独立酶投入记录。

- 选定流：α-淀粉酶制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录制剂质量、活性、浓度和批次投加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`us-epa-ap42-distilled-spirits-1997`

###### 糖化酶（`glucoamylase`）

淀粉糖化采用糖化酶时单独记录。

- 选定流：糖化酶制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录制剂质量、活性、浓度和批次投加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`us-epa-ap42-distilled-spirits-1997`

###### 原料制备用电力（`feed_preparation_electricity`）

记录输送、磨碎、泵送、搅拌和制备设备使用的电力。

- 选定流：工厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：使用分表读数，或有记录的设备负荷和运行时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

###### 原料制备用蒸汽（`feed_preparation_steam`）

记录供给预处理、蒸煮、水解或蒸发的外购或场内蒸汽，不得与燃料聚合。

- 选定流：饱和工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量蒸汽，或依据质量、压力、冷凝水回流和经核实焓值计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制备可发酵醪液（`prepared_fermentable_mash`）

已制备的含糖醪液或水解液作为一个中间流转移至发酵。

- 选定流：已制备可发酵醪液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录转移质量、干物质、可发酵糖浓度、温度和批次身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_batches`
- 来源：`nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

##### 废物流

###### 预处理固体残余物（`pretreatment_solid_residue`）

将原料制备中移除且不可销售的固体作为一个含水或干基废物流记录。

- 选定流：富木质素预处理固体残余物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录湿质量、干物质、组成、回收、库存变化和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`nrel-ethanol-design-2011`

###### 原料制备废水（`feed_preparation_wastewater`）

将原料制备排至场内或场外处理的废水与固体残余物分开记录。

- 选定流：原料制备废水
- 流属性/单位：体积 / m3
- 数量规则：计量或核对排放体积，并保留采样污染物浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`nrel-ethanol-design-2011`

##### 基本流

###### 谷物颗粒物排入空气（`grain_particulate_to_air`）

当干谷物接收、搬运、清理和磨碎属于前景时，记录其直接颗粒物排放。

- 选定流：颗粒物排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用场址测量或有记录的源特定计算；不得把 AP-42 蒸馏酒章节作为数量因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-distilled-spirits-1997`

### 过程：发酵（`fermentation`）

#### 输入

##### 产品流

###### 可发酵醪液投入（`fermentable_mash_input`）

将本中间流与已制备可发酵醪液的转移记录匹配。

- 选定流：已制备可发酵醪液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次核对成对转移记录、管线滞留和损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_batches`
- 来源：`nrel-ethanol-design-2011`

###### 发酵酵母（`fermentation_yeast`）

记录外购或新繁殖的发酵酵母，不得重复计算内部回用。

- 选定流：酿酒酵母发酵酵母
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录鲜基或干基、菌种来源、繁殖量、回用和批次投加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`us-epa-ap42-distilled-spirits-1997`; `arcentales-bastidas-ethanol-lca-2022`

###### 尿素（`urea`）

尿素用作发酵营养源时单独记录。

- 选定流：尿素
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录产品质量、氮含量、用途和批次投加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`arcentales-bastidas-ethanol-lca-2022`

###### 磷酸氢二铵（`diammonium_phosphate`）

磷酸氢二铵用作营养源时单独记录。

- 选定流：磷酸氢二铵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录产品质量、营养物浓度、用途和批次投加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`nrel-ethanol-design-2011`

###### 聚二甲基硅氧烷消泡剂（`polydimethylsiloxane_antifoam`）

仅在实际使用时记录该配制消泡剂，不得与其他工艺化学品合并。

- 选定流：聚二甲基硅氧烷消泡剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录制剂质量、浓度和批次投加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`nrel-ethanol-design-2011`

###### 发酵冷却水（`fermentation_cooling_water`）

记录分配至发酵的净补充冷却水，不包括内部循环流。

- 选定流：冷却水
- 流属性/单位：体积 / m3
- 数量规则：计量补水和排污水，并记录共享冷却系统的分配方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

###### 发酵用电力（`fermentation_electricity`）

记录分配至发酵的搅拌、泵送、冷却、清洗和控制用电。

- 选定流：工厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：使用分表读数，或有记录的设备负荷和运行时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发酵乙醇醪液（`fermented_ethanol_broth`）

以一个醪液流记录转移至蒸馏的物料，并附乙醇浓度和批次身份。

- 选定流：发酵乙醇醪液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录转移质量，或记录体积和密度，并记录乙醇浓度、残糖和温度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_records`
- 来源：`nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

##### 废物流

###### 废酵母浆（`spent_yeast_slurry`）

扣除内部回用后，记录离开发酵的剩余酵母。

- 选定流：废发酵酵母浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录湿质量、干物质、内部回用、库存变化和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`arcentales-bastidas-ethanol-lca-2022`

##### 基本流

###### 发酵二氧化碳（`fermentation_carbon_dioxide`）

记录扣除回收量后从发酵排出的生物源二氧化碳。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量回收和排放二氧化碳，或根据核对后的可发酵碳和产品记录计算并明确扣除回收量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

###### 发酵乙醇排入空气（`fermentation_ethanol_to_air`）

将发酵尾气携带的乙醇作为独立基本排放记录。

- 选定流：乙醇排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用场址测量或有记录的尾气质量平衡；不得采用饮料陈酿因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

### 过程：蒸馏与精馏（`distillation_rectification`）

#### 输入

##### 产品流

###### 发酵醪液投入（`fermented_broth_input`）

将本投入与发酵乙醇醪液的转移记录匹配。

- 选定流：发酵乙醇醪液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：核对成对转移记录、管线滞留和实测乙醇浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### 精馏蒸汽（`rectification_steam`）

记录供给醪塔、汽提塔、精馏塔或脱水单元的蒸汽，与燃料分开。

- 选定流：饱和工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量蒸汽，或依据质量、压力、冷凝水回流和经核实焓值计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

###### 精馏用电力（`rectification_electricity`）

记录泵、真空、控制、冷却和产品回收设备的用电。

- 选定流：工厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：使用分表读数，或有记录的设备负荷和运行时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

###### 精馏冷却水（`rectification_cooling_water`）

记录分配至冷凝器和产品回收的净补充冷却水。

- 选定流：冷却水
- 流属性/单位：体积 / m3
- 数量规则：计量补水和排污水，并记录共享冷却系统的分配方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精馏乙醇中间产物（`rectified_ethanol_intermediate`）

记录从精馏转移至储存的合格未变性乙醇。

- 选定流：精馏乙醇 `276f1cf5-0aa1-4d57-ad95-9dada6e043a0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录净转移质量、体积分数酒精度、测量温度、水分或组成结果和损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_records`
- 来源：`unsd-cpc-3-0-24110`; `nrel-ethanol-design-2011`

###### 杂醇油（`fusel_oil`）

仅在有场外去向记录时，将回收杂醇油作为独立共产品记录。

- 选定流：杂醇油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录回收质量、组成、库存变化和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`us-epa-ap42-distilled-spirits-1997`

##### 废物流

###### 全酒糟液（`whole_stillage`）

在内部回用或分离前，将蒸馏塔底物作为全酒糟液记录。

- 选定流：乙醇蒸馏全酒糟液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录湿质量、干物质、组成、内部回用、库存变化、处理和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`us-epa-ap42-distilled-spirits-1997`; `arcentales-bastidas-ethanol-lca-2022`

##### 基本流

###### 精馏乙醇排入空气（`rectification_ethanol_to_air`）

将冷凝器和塔器尾气中的乙醇损失与发酵、储存损失分开记录。

- 选定流：乙醇排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量尾气排放，或计算有记录的回收系统质量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

###### 精馏乙醛排入空气（`rectification_acetaldehyde_to_air`）

实测或场址排放清单要求时，记录直接乙醛排放。

- 选定流：乙醛排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用污染源测试、连续监测或有记录的场址特定计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-distilled-spirits-1997`

### 过程：产品储存与发运准备（`storage_dispatch`）

#### 输入

##### 产品流

###### 发运用精馏乙醇（`dispatch_ethanol_input`）

将本投入与产品回收过程转移出的精馏乙醇匹配。

- 选定流：精馏乙醇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：核对储罐接收、库存变化、质量待检、返工和发运损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`nrel-ethanol-design-2011`

###### 发运用电力（`dispatch_electricity`）

记录储存泵、通风、装载、灌装和发运设备用电。

- 选定流：工厂中压电力
- 流属性/单位：能量 / kWh
- 数量规则：使用分表读数，或有记录的设备负荷和运行时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`

###### 氮封气体（`nitrogen_blanketing_gas`）

储罐采用氮封时单独记录氮气。

- 选定流：氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录分配至乙醇储存和装载的计量量或采购量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`nrel-ethanol-design-2011`

###### 钢桶（`steel_drum`）

仅在所声明发运形态使用一次性钢桶时记录。

- 选定流：钢桶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录桶数、经核实单桶质量、重复使用状态和产品分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-environmental-footprint-2021`

###### 高密度聚乙烯桶（`hdpe_drum`）

采用一次性高密度聚乙烯桶时单独记录。

- 选定流：高密度聚乙烯桶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录桶数、经核实单桶质量、重复使用状态和产品分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-environmental-footprint-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考乙醇输出（`reference_ethanol_output`）

这是离开生产场址门口的声明参考产品。

- 选定流：精馏乙醇 `276f1cf5-0aa1-4d57-ad95-9dada6e043a0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在核对质量待检、库存变化和发运损失后设为 1,000 kg 合格净输出。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 酒精度不低于 80% vol 的合格未变性乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-24110`

##### 废物流

###### 不合格乙醇（`off_spec_ethanol`）

记录离开产品系统进入处理或处置的乙醇；内部返工仍为内部转移。

- 选定流：不合格乙醇废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录质量、酒精度、拒收原因、返工、回收和最终去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`nrel-ethanol-design-2011`

##### 基本流

###### 储存乙醇排入空气（`storage_ethanol_to_air`）

记录储存和发运中的工作、呼吸、装载及逸散乙醇损失。

- 选定流：乙醇排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用场址测量或有记录的储罐和装载质量平衡；不得采用饮料陈酿因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-distilled-spirits-1997`; `nrel-ethanol-design-2011`

### 过程：场内公用工程与废水处理（`onsite_utilities_wastewater`）

#### 输入

##### 产品流

###### 天然气（`natural_gas`）

仅记录分配至乙醇系统的场内燃烧天然气。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：记录计量体积、标准状态、高位或低位热值及公用工程输出分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_records`
- 来源：`nrel-ethanol-design-2011`

###### 蔗渣燃料（`bagasse_fuel`）

场内燃烧蔗渣生产蒸汽或热电联产时单独记录。

- 选定流：甘蔗蔗渣燃料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录湿质量和干质量、水分、热值、内部来源或采购及公用工程输出分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_records`
- 来源：`arcentales-bastidas-ethanol-lca-2022`

###### 重质燃料油（`heavy_fuel_oil`）

作为锅炉或热电联产燃料使用时单独记录重质燃料油。

- 选定流：重质燃料油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录交付质量、热值、硫含量、库存变化和公用工程输出分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_records`
- 来源：`arcentales-bastidas-ethanol-lca-2022`

###### 氨制冷剂（`ammonia_refrigerant`）

采用 R717 制冷系统时单独记录氨补充量。

- 选定流：氨制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据采购量和期初期末库存计算补充量，并核对检修回收量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`nrel-ethanol-design-2011`

###### 废水处理用氢氧化钠（`treatment_sodium_hydroxide`）

场内废水处理消耗氢氧化钠时单独记录。

- 选定流：氢氧化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录交付产品质量、浓度、库存变化和处理用途。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_receipts`
- 来源：`nrel-ethanol-design-2011`

###### 进入处理的废水（`wastewater_to_treatment`）

在保留源过程记录后，记录进入场内处理的合并废水。

- 选定流：乙醇工厂废水
- 流属性/单位：体积 / m3
- 数量规则：计量进水体积，并保留流量加权的化学需氧量、氮、磷、pH 和温度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`nrel-ethanol-design-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 场内蒸汽（`onsite_steam`）

将场内生产的蒸汽作为与锅炉或热电联产投入配对的单一公用工程输出。

- 选定流：饱和工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据实测蒸汽质量、压力、温度、给水和冷凝水回流计算；避免与外购蒸汽重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_meters`
- 来源：`nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022`

###### 已处理废水（`treated_wastewater`）

记录离开场址或转移至进一步处理的已处理出水。

- 选定流：已处理乙醇工厂废水
- 流属性/单位：体积 / m3
- 数量规则：计量出水体积，并保留排放去向、许可排口和配对污染物样品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`nrel-ethanol-design-2011`

##### 废物流

###### 废水污泥（`wastewater_sludge`）

将离开处理系统的脱水或含水污泥与出水分开记录。

- 选定流：乙醇工厂废水处理污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录湿质量、干物质、组成、库存变化和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_coproduct_records`
- 来源：`nrel-ethanol-design-2011`

##### 基本流

###### 化石二氧化碳排入空气（`fossil_carbon_dioxide_to_air`）

将场内燃烧产生的化石二氧化碳与生物源二氧化碳分开记录。

- 选定流：二氧化碳，化石源，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据各化石燃料记录和有记录的碳因子计算，适用时扣除捕集量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`nrel-ethanol-design-2011`

###### 生物源二氧化碳排入空气（`biogenic_carbon_dioxide_to_air`）

将蔗渣或其他生物质燃烧产生的生物源二氧化碳与发酵二氧化碳分开记录。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据生物质燃料碳记录和有记录的因子计算，适用时扣除捕集量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`arcentales-bastidas-ethanol-lca-2022`

###### 氮氧化物排入空气（`nitrogen_oxides_to_air`）

以声明的报告基准将场内燃烧产生的氮氧化物记录为一个污染物交换。

- 选定流：氮氧化物排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用污染源测试、连续监测或燃料和设备特定计算，并声明报告基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### 二氧化硫排入空气（`sulfur_dioxide_to_air`）

将含硫燃料产生的二氧化硫作为独立基本排放记录。

- 选定流：二氧化硫排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用污染源测试或燃料硫质量平衡，并记录留存量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### 颗粒物排入空气（`particulate_matter_to_air`）

将烟囱颗粒物与谷物处理颗粒物分开记录。

- 选定流：颗粒物排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用污染源测试、连续监测或设备特定计算，并声明粒径基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997`

###### 氨制冷剂排入空气（`ammonia_refrigerant_to_air`）

将未回收的 R717 制冷剂损失记录为氨排入空气。

- 选定流：氨排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据制冷剂库存、采购、回收和维护记录计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`nrel-ethanol-design-2011`

###### 化学需氧量排入水体（`cod_to_water`）

将已处理出水排放的化学需氧量记录为一个基本交换。

- 选定流：化学需氧量排入水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据配对的出水体积和代表性浓度测量计算流量加权负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`nrel-ethanol-design-2011`

###### 总氮排入水体（`total_nitrogen_to_water`）

将已处理出水中的总氮与化学需氧量和磷分开记录。

- 选定流：总氮排入水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据配对的出水体积和代表性浓度测量计算流量加权负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022`

###### 总磷排入水体（`total_phosphorus_to_water`）

将已处理出水中的总磷作为独立基本交换记录。

- 选定流：总磷排入水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据配对的出水体积和代表性浓度测量计算流量加权负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格乙醇
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`nrel-ethanol-design-2011`; `arcentales-bastidas-ethanol-lca-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出前景过程 | 首先细分独立计量过程和内部转移，使乙醇、蒸汽、电力、酒糟液、杂醇油、二氧化碳回收和其他输出仅承担具有因果联系的交换。 | `eu-environmental-footprint-2021` |
| `allocation_system_expansion` | 可销售共产品 | 细分不足且存在有记录的被替代产品时，采用系统扩展或替代法，并披露被替代功能、市场、质量和敏感性情景。 | `eu-environmental-footprint-2021`; `arcentales-bastidas-ethanol-lca-2022` |
| `allocation_physical_then_economic` | 剩余未解决多功能性 | 无法证明替代时采用相关物理因果关系；只有在无可辩护物理关系时才采用经济分配，并披露价格、期间、地域和敏感性。 | `eu-environmental-footprint-2021` |
| `allocation_waste_or_coproduct` | 酒糟液、杂醇油、回收二氧化碳、木质素残余物和剩余能源 | 分配前按实际去向和市场性分类每项输出；送往处置或处理的材料不得获得共产品抵扣。 | `eu-environmental-footprint-2021`; `arcentales-bastidas-ethanol-lca-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `feedstock_preparation`; `storage_dispatch` | 原料、氮气及其他接收材料 | 发票、地磅读数、储罐读数、库存日志、证书 | 材料身份；供应商；质量或体积；密度；水分或浓度；期初期末库存；批次；日期 | 核对收货加期初库存减期末库存和转移 | 原始单位及 kg | 每次收货和月结 | 同一报告期 | 所有纳入场址操作 | 按原子材料和路线聚合后再按参考流归一化 | 校准秤或液位计；供应商证书；库存核对 |
| `cp_chemical_receipts` | `feedstock_preparation`; `fermentation`; `onsite_utilities_wastewater` | 各酶、营养物、消泡剂、酸、碱或处理化学品 | 发票、批次单、仓库领料单、制剂证书 | 化学品身份；制剂质量；有效浓度或活性；用途；批次；库存 | 核对收货、领用、退料和库存；仅分配至消耗过程 | kg 制剂及声明的有效成分基准 | 每批和月结 | 同一报告期 | 所有纳入工艺区 | 每种化学品单独求和，库存核对后归一化 | 产品规格；批次记录；库存记录 |
| `cp_process_batches` | `feedstock_preparation` | 已制备醪液和内部转移 | 批次单、转移计量、实验室结果 | 转移质量或体积；密度；干物质；可发酵糖；温度；批次 id；损失 | 配对源和目的记录并核对管线滞留 | kg 或 m3 加组成 | 每批 | 同一报告期 | 所有纳入制备线 | 聚合匹配转移且不计算内部循环 | 校准转移表；实验室证书；核对记录 |
| `cp_fermentation_records` | `fermentation` | 发酵投入、醪液和酵母 | 批次日志、储罐读数、实验室分析 | 醪液投入；酵母投加；发酵时间；醪液质量或体积；密度；乙醇；残糖；回收二氧化碳 | 核对各发酵批次和产品转移 | kg 或 m3 加浓度 | 每批 | 同一报告期 | 范围内所有发酵罐 | 聚合合格批次，单独报告失败批次 | 校准储罐；实验室方法；批次批准 |
| `cp_distillation_records` | `distillation_rectification` | 醪液、精馏乙醇和回收性能 | 流量计、储罐读数、实验室分析、生产日志 | 醪液投入；乙醇浓度；产品质量；酒精度；水分或组成；温度；回流或回收记录；酒糟液 | 核对回收和转移中的乙醇及总质量 | kg 和 % vol | 每个生产周期或每日 | 同一报告期 | 范围内所有回收线 | 仅聚合达到类别阈值的输出 | 校准仪表；酒精度方法；质量平衡闭合 |
| `cp_utility_meters` | 所有过程 | 电力、蒸汽、水和公用工程输出 | 仪表、发票、设备运行时间、蒸汽日志 | 仪表 id；起止读数；工艺区；压力；温度；冷凝水；运行时间；换算因子 | 优先使用分表；否则根据核实负荷和运行时间计算 | 原始公用工程单位 | 连续或每班、月结 | 同一报告期 | 所有纳入仪表和共享系统 | 扣除内部循环，并用披露的动因分配共享服务 | 校准；发票核对；工程计算 |
| `cp_fuel_records` | `onsite_utilities_wastewater` | 每种场内燃料 | 流量计、地磅、发票、燃料证书 | 燃料身份；数量；水分；热值；碳和硫；库存变化；锅炉或汽轮机 | 按设备核对燃料收货和消耗 | 原始单位、kg 和 MJ | 每次收货及每日或月度结算 | 同一报告期 | 所有纳入燃烧单元 | 每种燃料单独聚合并分配至实测公用工程输出 | 校准仪表；供应商证书；库存核对 |
| `cp_refrigerant_records` | `onsite_utilities_wastewater` | 氨制冷剂 | 采购、库存、回收和维护日志 | 制冷剂身份；期初期末充注量；采购；回收；维护补充；事故损失 | 年度或生产周期质量平衡 | kg | 每次维护和年结 | 同一报告期 | 所有纳入 R717 系统 | 采购加期初库存减回收和期末库存 | 技师日志；钢瓶称重；事故记录 |
| `cp_storage_dispatch_records` | `storage_dispatch` | 产品储存、质量放行和发运 | 储罐读数、地磅、质量证书、发运记录 | 接收；库存；返工；不合格量；发运净质量；酒精度；温度；包装形态 | 核对储罐移动和净发运量 | kg 和 % vol | 每次储罐移动和发货 | 同一报告期 | 所有产品罐和装载点 | 仅归一化酒精度不低于 80% vol 的放行产品 | 校准秤或储罐；签署的质量放行；发运记录 |
| `cp_packaging_records` | `storage_dispatch` | 各一次性包装组件 | 采购、领用、计数和单件质量记录 | 包装材料；数量；单件质量；重复使用或一次性状态；产品分配；废弃数量 | 经核实数量乘单件质量并核对库存 | 件和 kg | 每次灌装及月结 | 同一报告期 | 范围内所有包装线 | 每个组件单独报告；除非被消耗，否则排除可重复使用资产 | 供应商规格；计数核对；抽样称重 |
| `cp_waste_coproduct_records` | 所有过程 | 每项废物或共产品 | 秤、储罐读数、联单、发票、去向记录 | 身份；湿质量；干物质；组成；库存；去向；收入；处理 | 核对产生、内部回用、销售、处理和库存 | kg 或 m3 | 每次移动及月结 | 同一报告期 | 所有纳入废物和共产品储区 | 按去向区分可销售输出、内部回用和废物 | 校准计量；签署联单；买方或处理记录 |
| `cp_wastewater_records` | 所有过程 | 废水、已处理出水和水污染物 | 流量计、混合样、实验室报告、排放记录 | 来源；进出水体积；COD；总氮；总磷；pH；温度；采样时间 | 将代表性浓度与同一时段流量配对 | m3 和 kg 污染物 | 连续流量；代表性混合采样 | 同一报告期 | 所有纳入排水和排口 | 计算流量加权负荷；不得对浓度值求和 | 校准流量计；认可或记录的实验室方法；许可记录 |
| `cp_direct_emissions` | 所有过程 | 每项直接空气排放 | 烟囱测试、连续监测、尾气流量和浓度、质量平衡输入 | 源 id；污染物；流量；浓度；运行时间；燃料；回收；方法 | 按源计算每种污染物并核对回收材料 | kg | 许可要求的监测或测试频率及年结 | 同一报告期 | 所有纳入尾气口、烟囱、储罐和装载点 | 源级计算后对每个基本流单独求和 | 校准；测试报告；许可方法；质量平衡证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化量 = 核对后的交换量 × 1,000 kg / 核对后的合格乙醇输出 kg | 期间交换；合格净输出 | 每 1,000 kg 参考流的数量 | `eu-environmental-footprint-2021` |
| `calc_volume_to_mass` | 按体积记录的液体转移 | 质量 = 实测体积 × 声明温度下的密度；保留实测体积、密度、温度和方法 | 体积；密度；温度 | kg 液体 | `eu-environmental-footprint-2021` |
| `calc_ethanol_quality_gate` | 参考产品 | 将实测酒精度低于 80% vol 的输出从合格输出中分离；不得跨阈值按产量加权平均 | 批次输出；% vol；试验方法 | 合格输出 kg 和不合格 kg | `unsd-cpc-3-0-24110` |
| `calc_internal_transfer_reconciliation` | 已制备醪液、发酵醪液、乙醇、蒸汽和回收材料 | 目的地投入 = 来源输出 - 实测转移损失 - 有记录的库存变化；内部转移不产生上游负荷 | 成对记录；管线滞留；损失 | 核对后的转移量 | `eu-environmental-footprint-2021` |
| `calc_wastewater_load` | COD、总氮和总磷 | 污染物负荷 = 各代表性时段体积 × 配对浓度之和，并记录单位换算 | 出水体积；配对浓度 | kg 排入水体的污染物 | `nrel-ethanol-design-2011` |
| `calc_refrigerant_loss` | 氨制冷 | 损失 = 采购 + 期初充注 - 回收 - 期末充注，并调整有记录的转移 | 采购；期初期末库存；回收；转移 | kg 氨排入空气 | `nrel-ethanol-design-2011` |
| `calc_mass_balance` | 各过程及全场 | 在兼容的湿基、干基、碳或乙醇基准上核对投入、产品、内部转移、回收共产品、废物、排放和库存变化；调查重大闭合差 | 采集流记录；组成；库存变化 | 平衡和未解释差值 | `eu-environmental-footprint-2021`; `nrel-ethanol-design-2011` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个聚合产品族保留酒精度结果、测量温度和方法、未变性状态证据、水分或组成结果、产品等级和发运形态。 | 质量证书；实验室结果；产品规格 |
| `dq_temporal` | 前景数据 | 采用不少于连续 12 个月的同一期间，除非较短期间可证明代表新建或改变后的操作；披露季节性和停机。 | 带日期原始记录；生产日历；理由 |
| `dq_technology_route` | 过程清单 | 识别原料和预处理路线、发酵微生物、回收配置、脱水步骤、公用工程供应、废水处理和共产品管理。 | 工艺流程图；设备清单；运行说明 |
| `dq_measurement` | 计量和采样数据 | 采用校准仪器和有记录的实验室方法；保留原始值和换算因子。 | 校准证书；方法；样品流转；计算表 |
| `dq_completeness` | 所有纳入过程 | 核对所有已识别的原子材料、能源、废物、共产品和基本流，并解释缺失值或估算值。 | 完整性矩阵；质量和能量平衡；差异复核 |
| `dq_supplier_background` | 上游链接 | 在重大情况下匹配供应商、原料路线、地域、技术和年份；披露代理和数据质量限制。 | 供应商数据；数据集元数据；代理理由 |
| `dq_allocation` | 多输出过程 | 保留可复现分配所需的细分、替代、物理关系或经济数据以及敏感性情景。 | 仪表图；市场证据；价格序列；分配计算 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 产品已变性、实测酒精度低于 80% vol，或缺少酒精度、温度和方法时，判定类别不符合。 | `unsd-cpc-3-0-24110` |
| `validate_reference_amount` | 参考流 | 在核对库存变化、不合格产品和发运损失后，要求合格净输出恰为 1,000 kg。 | `eu-environmental-footprint-2021` |
| `validate_process_coverage` | 前景数据集 | 要求原料制备、发酵、蒸馏与精馏、储存/发运清单；要求每项适用的场内公用工程和废水过程，或明确链接的外部服务。 | `nrel-ethanol-design-2011` |
| `validate_atomic_inventory` | 清单行 | 拒绝聚合选定流标签，并要求电力、蒸汽、每种燃料、每种制冷剂、每种原料、每种化学品、每个包装、每项废物和每种基本排放保持分开。 | `eu-environmental-footprint-2021` |
| `validate_transfer_balance` | 内部中间流 | 要求制备至发酵、发酵至回收、回收至储存以及场内蒸汽转移在显式损失和库存变化后闭合。 | `nrel-ethanol-design-2011` |
| `validate_mass_and_ethanol_balance` | 过程和场址总量 | 要求有记录的质量和乙醇平衡核查，并调查重大未解释差异。 | `eu-environmental-footprint-2021`; `nrel-ethanol-design-2011` |
| `validate_emissions_wastewater` | 直接排放与排水 | 要求各适用尾气口、烟囱、制冷剂损失、废水流、COD、氮和磷记录，或有记录的不适用判定。 | `nrel-ethanol-design-2011`; `us-epa-ap42-distilled-spirits-1997` |
| `validate_allocation` | 多输出过程 | 拒绝未报告或不可复现的分配，以及分配给送往处理或处置输出的抵扣。 | `eu-environmental-footprint-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 独立复核后作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于酒精度不低于 80% vol 的未变性乙醇过程数据集和生命周期模型的场址门口前景生产包 |
| allowed_use | 与所声明原料路线、技术、地域、酒精度、水分或组成、公用工程供应、共产品处理、发运形态和参考质量基准相匹配的研究 |
| excluded_use | 变性或合成乙醇；酒精度低于 80% vol 的乙醇；饮料产品；无限定的全球平均；未增加相应阶段的下游混配、配送或燃烧 |
| required_metadata | PCR id 和版本；产品流 UUID；酒精度、温度和试验方法；未变性状态；水分或组成；原料和路线；场址和地域；技术；报告期；发运形态；边界；上游链接；共产品和分配方法 |
| required_quality_disclosure | 原始数据占比；仪表和实验室覆盖；质量、乙醇、水和能量平衡结果；缺失流；代理；range 证据缺口；不确定性；分配敏感性；复核状态 |
| update_trigger | 原料、发酵或回收技术、酒精度规格、能源或水系统、共产品去向、废水处理、发运形态、场址边界或代表性数据期间发生变化 |

## 11. 数据源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-24110` | `official_guidance` | 联合国统计司，《产品总分类 3.0 版》，子类 24110。https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-23） | 正式类别身份、未变性状态和最低 80% vol 阈值 |
| `eu-environmental-footprint-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，环境足迹方法，附件 I。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-23） | 功能单位、边界完整性、企业特定数据、数据质量、多功能性、分配和校验 |
| `us-epa-ap42-distilled-spirits-1997` | `official_guidance` | 美国环境保护署，AP-42 第 9.12.3 节《蒸馏酒》，1997。https://www.epa.gov/sites/default/files/2020-10/documents/c9s12-3.pdf（检索于 2026-08-23） | 谷物制备、糖化、发酵、蒸馏与精馏、酒糟液和直接排放候选；不采用其饮料陈酿因子 |
| `nrel-ethanol-design-2011` | `official_guidance` | Humbird 等，《木质纤维素生物质生化转化为乙醇的过程设计与经济性》，NREL/TP-5100-47764，2011。https://www.nrel.gov/docs/fy11osti/47764.pdf（检索于 2026-08-23） | 木质纤维素路线过程分解、预处理、水解、发酵、产品回收、废水处理、木质素燃烧、公用工程和过程平衡 |
| `arcentales-bastidas-ethanol-lca-2022` | `literature` | Arcentales-Bastidas、Silva 和 Ramirez，《厄瓜多尔甘蔗乙醇环境画像》，Energies 15 (2022) 5421。https://doi.org/10.3390/en15155421 | 经原文核验的甘蔗路线分解、蔗汁和糖蜜发酵、酵母和尿素、蒸馏、酒糟液/废醪液、蔗渣热电联产及共产品系统扩展案例 |

---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.extracts-essences-and-concentrates-of-tea-or-mate-and-preparations-with-a-basis-thereof-d5c511dd
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 茶或马黛茶的浸膏、香精和浓缩物及以其或茶/马黛茶为基本成分的制品

## 1. 范围与适用性

This PCR governs foreground data packages for manufacture of an explicitly declared tea-derived or maté-derived extract, essence, concentrate, soluble powder, or preparation. A data package shall declare exactly one botanical route (`tea` from *Camellia sinensis* or `mate` from *Ilex paraguariensis*) and exactly one delivered product state (`liquid_extract`, `liquid_concentrate`, `powder`, `essence`, or `formulated_preparation`). Tea and maté routes, liquid and powder routes, and spray-dried and freeze-dried routes shall not be combined as defaults.

The foreground boundary begins with receipt of the declared tea or maté raw material and ends with packaged product at factory storage. It covers screening, water addition, extraction, solid-liquid separation, clarification or filtration, concentration, applicable aroma recovery, powder drying only for a declared powder route, formulation only for a declared preparation, applicable heat treatment, sanitation, packaging, storage, on-site thermal utilities, and refrigeration. Cultivation, primary tea manufacture, primary maté preparation, ingredient production, packaging-material production, purchased utilities, distribution, retail, consumer preparation, and end of life require linked upstream or downstream datasets and are not silently included in the foreground.

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.extracts-essences-and-concentrates-of-tea-or-mate-and-preparations-with-a-basis-thereof-d5c511dd |
| classification_refs | CPC 3.0: 23914 |
| covered_products | Tea or maté extracts, essences and concentrates; soluble tea or maté powders; and preparations whose declared basis is tea extract, maté extract, tea, or maté. |
| excluded_products | Unextracted tea leaves; unextracted maté leaves; ready-to-drink beverages classified elsewhere; coffee products; herbal infusions not based on tea or maté; and products lacking a declared botanical source and delivered state. |
| representative_product | 1 kg of one declared tea-derived or maté-derived product in its delivered liquid, concentrate, powder, essence, or formulated state at factory storage. |
| production_route | Botanical source and product state are mandatory route selectors. Water extraction is the default extraction family; enzymes, ethanol, clarification aids, aroma recovery, spray drying, freeze drying, formulation, heat treatment, on-site fuel use, and refrigeration apply only when declared and operated. |
| market_state | Packaged intermediate ingredient or packaged finished preparation at factory storage, with actual solids or moisture, formulation, packaging, and storage condition declared. |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | One declared tea-derived or maté-derived extract, essence, concentrate, soluble powder, or preparation that meets its declared composition and quality specification. |
| How much | 1 kg net product at the factory-storage gate, excluding packaging mass. |
| How well | Delivered product state, botanical source, dry-solids or moisture basis, formulation, aroma-recovery status, heat-treatment status, and packaging configuration are declared and conform to the product specification. |
| How long or cycle | One production batch or campaign ending at release to factory storage; storage duration and temperature are declared when they affect refrigeration or loss. |
| reference_flow_link | Exactly one final-product output row in `packaging_and_storage`, selected by the declared botanical source and product state. |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净声明产品 |
| 参考产品流 | 天工精确参考产品流尚未解决；不指定近似 UUID。 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | botanical_source; delivered_product_state; tea_or_mate_type; extract_or_preparation_identity; net_mass; dry_solids_or_moisture_basis; formulation_bom; extraction_solvent; concentration_method; aroma_recovery_status; drying_route; heat_treatment_status; packaging_configuration; storage_temperature; storage_duration; geography; reference_period |

未解决的参考产品 UUID 是发布阻断项。本类别不得用天工通用 `Tea` 流近似替代产品身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | final 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every exchange to 1 kg net declared product at factory storage; packaging mass is inventoried separately and is excluded from net product mass. |
| `solids_basis` | extracts, concentrates, powders, and preparations | Mass fraction | kg dry solids/kg product or % w/w | Record measured dry solids or moisture and the test method; conversions between wet and dry bases shall use the same batch result and retain the unrounded measurement. |
| `energy_carrier_separation` | electricity, steam, heat, and fuels | Energy or Mass, as metered or invoiced | kWh, MJ, or kg | Preserve each carrier as a separate atomic exchange. Do not merge electricity, steam, heat, natural gas, or another fuel before normalization. |
| `water_balance` | added water, condensate, wastewater, and product water | Mass or volume with density | kg or m3 | Record water by stream. If volume is converted to mass, retain measured temperature/density or the documented conversion assumption. |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | foreground manufacturing | Include raw-material receipt and screening, water addition, extraction, separation, clarification or filtration, concentration, applicable route steps, sanitation, packaging, storage, and directly controlled utilities. | `fao-who-jmpr-boscalid-2019`; `ec-jrc-fdm-bref-2019` |
| `boundary_route_exclusivity` | route selection | Declare one botanical source and one delivered product state; include aroma recovery, spray drying, freeze drying, formulation, heat treatment, fuel combustion, and refrigeration only when the declared route uses them. | `iso-6079-2021`; `dao-et-al-2021-tea-spray-drying` |
| `boundary_complete_exchanges` | process inventory | Record all materially relevant material and energy inputs, wastes, wastewater, and direct elementary flows without collection labels or combined utility rows. | `eu-pef-method-2021`; `ec-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | purchased inputs | Link each purchased raw material, ingredient, aid, filter medium, cleaning chemical, packaging component, refrigerant, and utility to an upstream dataset with matching identity and geography; do not assign zero burden when a provider is missing. | `eu-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Tea or maté raw material received at the extract-manufacturing site, with botanical identity, prior processing state, moisture, supplier, origin, and incoming packaging declared. |
| starting_condition_role | Foreground manufacturing input; cultivation and primary leaf processing are upstream. |
| product_classification_scope | CPC 3.0: 23914, interpreted by the declared product identity rather than by a generic beverage or leaf flow. |
| recursive_input_rule | A purchased tea or maté extract, concentrate, powder, essence, or preparation used as an ingredient remains a visible product input linked to its upstream dataset; do not recursively recreate its production inside this foreground package. |
| upstream_dataset_requirement | Each raw material, ingredient, processing aid, filter medium, cleaning chemical, packaging component, refrigerant, purchased electricity, steam, or heat requires a compatible upstream provider or an explicit unresolved-provider disclosure. |
| disclosure | Declare botanical source, input state, extraction solvent, concentration technology, applicable aroma and drying route, formulation, heat treatment, utilities, packaging, storage, exclusions, provider gaps, and any cut-off. |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt` | 原料接收与筛选 | required | 只选择一种植物来源路线；不得同时默认茶和马黛茶。 | 前景准备 | 每批次及每 1 kg 最终产品 |
| `aqueous_extraction` | 配水与浸提 | required | 记录实际溶剂体系；酶或乙醇仅在使用时纳入。 | 前景浸提 | 每浸提批次 |
| `solid_liquid_separation` | 固液分离 | required | 纳入实际使用的离心、压榨、筛分或等效分离操作。 | 前景分离 | 每浸提批次 |
| `clarification_filtration` | 澄清与过滤 | required | 仅记录实际使用的助剂和介质。 | 前景纯化 | 每澄清浸提液批次 |
| `concentration` | 浓缩 | required | 声明蒸发、膜处理或其他浓缩技术。 | 前景浓缩 | 每浓缩物批次 |
| `aroma_recovery` | 香气回收 | conditional | 仅在香气被回收、分离、回添或销售时纳入。 | 前景回收 | 每适用批次 |
| `spray_drying` | 喷雾干燥 | conditional | 仅适用于已声明的喷雾干燥粉体路线。 | 前景干燥 | 每喷雾干燥批次 |
| `freeze_drying` | 冷冻干燥 | conditional | 仅适用于已声明的冷冻干燥粉体路线。 | 前景干燥 | 每冷冻干燥批次 |
| `formulation_blending` | 配方与调和 | conditional | 仅适用于已声明制品，并分别列出每种配方成分。 | 前景配方 | 每配方批次 |
| `heat_treatment` | 产品热处理 | conditional | 仅在使用巴氏杀菌、灭菌或其他产品热处理时纳入。 | 前景调质 | 每处理批次 |
| `thermal_utility_generation` | 现场热力公用工程 | conditional | 现场燃烧燃料时纳入；外购蒸汽或热仍作为消耗过程的外购输入。 | 前景公用工程 | 每公用工程计量期 |
| `refrigeration` | 制冷 | conditional | 过程冷却或冷藏使用前景控制范围内的制冷系统时纳入。 | 前景公用工程 | 每种制冷剂及计量期 |
| `sanitation_wastewater` | 清洗与废水管理 | required | 纳入直接控制的清洗及废水或污泥处理。 | 前景辅助 | 每批次或清洗周期 |
| `packaging_and_storage` | 包装与工厂储存 | required | 记录每个实际包装组件和储存条件。 | 前景终加工 | 每 1 kg 最终产品 |

### 过程：原料接收与筛选（`raw_material_receipt`）

#### 输入

##### 产品流

###### 精制茶原料（`refined_tea_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：精制茶 `3851dbf3-8691-42a1-bb4d-84501a41bc96`
- 流属性/单位： 质量 / kg
- 数量规则：按批次实测接收量和拒收量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_material_batch_records`

###### 马黛茶叶原料（`mate_leaves_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：马黛茶叶 `5e596b14-8d27-4044-a23d-addc9d67163c`
- 流属性/单位： 质量 / kg
- 数量规则：按批次实测接收量和拒收量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_material_batch_records`

###### 筛选电力（`receipt_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量接收、输送、筛选和破碎用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 废物流

###### 茶筛选废料（`tea_screening_reject`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃茶叶原料
- 流属性/单位： 质量 / kg
- 数量规则：实测废料质量；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

###### 马黛茶筛选废料（`mate_screening_reject`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃马黛茶叶原料
- 流属性/单位： 质量 / kg
- 数量规则：实测废料质量；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

###### 来料包装废物（`incoming_packaging_waste`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废纸袋
- 流属性/单位： 质量 / kg
- 数量规则：实测废弃来料纸袋质量；其他实际来料包装材料须在数据包中另设原子废物流行
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

### 过程：配水与浸提（`aqueous_extraction`）

#### 输入

##### 产品流

###### 浸提用水（`extraction_water`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：过程水
- 流属性/单位： 质量 / kg
- 数量规则：计量加入浸提容器的水量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_extraction_records`
- 来源： `fao-who-jmpr-boscalid-2019`

###### 浸提电力（`extraction_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量浸提容器、搅拌、泵送和控制用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 外购浸提蒸汽（`extraction_purchased_steam`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：外购蒸汽
- 流属性/单位： 能量 / MJ
- 数量规则：计量输送至浸提工序的外购蒸汽；未使用外购蒸汽时省略
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 外购浸提热（`extraction_purchased_heat`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：外购热
- 流属性/单位： 能量 / MJ
- 数量规则：计量输送至浸提工序的外购非蒸汽热；无此输入时省略
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 果胶酶 加工助剂（`pectinase_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：果胶酶制剂
- 流属性/单位： 质量 / kg
- 数量规则：按配方或投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_extraction_records`
- 来源： `dao-et-al-2021-tea-spray-drying`

###### 纤维素酶 加工助剂（`cellulase_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：纤维素酶制剂
- 流属性/单位： 质量 / kg
- 数量规则：按配方或投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_extraction_records`
- 来源： `dao-et-al-2021-tea-spray-drying`

###### 乙醇 浸提溶剂（`ethanol_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：乙醇
- 流属性/单位： 质量 / kg
- 数量规则：实测新鲜乙醇和补充乙醇；仅适用于已声明的乙醇辅助路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_extraction_records`
- 来源： `dao-et-al-2021-tea-spray-drying`

#### 输出

##### 产品流

###### 茶浸提液（`tea_extraction_liquor`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：茶浸提液
- 流属性/单位： 质量 / kg
- 数量规则：实测容器排出量；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_extraction_records`

###### 马黛茶浸提液（`mate_extraction_liquor`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：马黛茶浸提液
- 流属性/单位： 质量 / kg
- 数量规则：实测容器排出量；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_extraction_records`

### 过程：固液分离（`solid_liquid_separation`）

#### 输入

##### 产品流

###### 分离电力（`separation_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量离心机、压榨机、筛分机、输送机和泵用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 滤布（`separation_filter_cloth`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：聚丙烯机织滤布
- 流属性/单位： 质量 / kg
- 数量规则：实测更换质量并按已处理批次分摊；仅在实际使用时纳入
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_separation_records`

#### 输出

##### 废物流

###### 茶渣（`spent_tea_residue`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：茶渣
- 流属性/单位： 质量 / kg
- 数量规则：实测残渣湿质量、干质量和水分结果；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`
- 来源： `fao-who-jmpr-boscalid-2019`

###### 马黛茶渣（`spent_mate_residue`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：马黛茶渣
- 流属性/单位： 质量 / kg
- 数量规则：实测残渣湿质量、干质量和水分结果；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

### 过程：澄清与过滤（`clarification_filtration`）

#### 输入

##### 产品流

###### 澄清电力（`clarification_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量澄清、过滤和泵送用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 硅藻土 助滤剂（`diatomaceous_earth_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：硅藻土
- 流属性/单位： 质量 / kg
- 数量规则：按投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_clarification_records`

###### 活性炭 澄清剂（`activated_carbon_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：活性炭
- 流属性/单位： 质量 / kg
- 数量规则：按投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_clarification_records`

###### 硅胶 澄清剂（`silica_gel_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：硅胶
- 流属性/单位： 质量 / kg
- 数量规则：按投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_clarification_records`
- 来源： `fao-who-jmpr-boscalid-2019`

###### PVPP（聚乙烯聚吡咯烷酮） 澄清剂（`pvpp_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：聚乙烯聚吡咯烷酮
- 流属性/单位： 质量 / kg
- 数量规则：按投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_clarification_records`

###### 微滤膜（`microfiltration_membrane`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：醋酸纤维素微滤膜
- 流属性/单位： 质量 / kg
- 数量规则：实测更换质量并按已处理批次分摊；仅在实际使用时纳入
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_clarification_records`

#### 输出

##### 废物流

###### 澄清 滤渣（`clarification_filter_residue`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：澄清滤饼
- 流属性/单位： 质量 / kg
- 数量规则：实测滤饼湿质量、干质量并记录处理去向
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

###### 废过滤膜（`spent_filtration_membrane`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废醋酸纤维素膜
- 流属性/单位： 质量 / kg
- 数量规则：实测废弃膜质量；仅适用于膜处理路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

### 过程：浓缩（`concentration`）

#### 输入

##### 产品流

###### 浓缩 电力（`concentration_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量蒸发器、真空系统、膜系统、泵和控制用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 外购 浓缩蒸汽（`concentration_purchased_steam`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：外购蒸汽
- 流属性/单位： 能量 / MJ
- 数量规则：计量输送至浓缩工序的外购蒸汽；无此输入时省略
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 外购 浓缩热（`concentration_purchased_heat`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：外购热
- 流属性/单位： 能量 / MJ
- 数量规则：计量输送至浓缩工序的外购非蒸汽热；无此输入时省略
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 产品流

###### 茶浓缩物 中间体（`tea_concentrate_intermediate`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：茶浓缩物
- 流属性/单位： 质量 / kg
- 数量规则：实测浓缩物质量和干物质；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_concentration_records`
- 来源： `fao-who-jmpr-boscalid-2019`

###### 马黛茶浓缩物 中间体（`mate_concentrate_intermediate`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：马黛茶浓缩物
- 流属性/单位： 质量 / kg
- 数量规则：实测浓缩物质量和干物质；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_concentration_records`

##### 废物流

###### 茶浓缩产品损失（`tea_concentration_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：损失 茶浓缩物
- 流属性/单位： 质量 / kg
- 数量规则：实测或按质量平衡计算设备滞留、洒漏或拒收的浓缩物；仅适用于茶路线
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_mass_balance_records`


###### 马黛茶浓缩产品损失（`mate_concentration_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：损失 马黛茶浓缩物
- 流属性/单位： 质量 / kg
- 数量规则：实测或按质量平衡计算设备滞留、洒漏或拒收的浓缩物；仅适用于马黛茶路线
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_mass_balance_records`

###### 浓缩 冷凝废水（`concentration_condensate_wastewater`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：浓缩 冷凝废水
- 流属性/单位： 质量 / kg
- 数量规则：计量或按质量平衡计算排入废水的冷凝液；不包括作为内部循环保留的回收水
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_mass_balance_records`

### 过程：香气回收（`aroma_recovery`）

#### 输入

##### 产品流

###### 香气回收 电力（`aroma_recovery_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量回收、冷凝、真空和泵送用电；仅在香气回收运行时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 产品流

###### 回收茶香气（`recovered_tea_aroma`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：回收茶香气馏分
- 流属性/单位： 质量 / kg
- 数量规则：实测回收质量和去向；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_aroma_records`

###### 回收马黛茶香气（`recovered_mate_aroma`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：回收马黛茶香气馏分
- 流属性/单位： 质量 / kg
- 数量规则：实测回收质量和去向；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_aroma_records`

### 过程：喷雾干燥（`spray_drying`）

#### 输入

##### 产品流

###### 喷雾干燥器 电力（`spray_dryer_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量雾化、送风、分离、输送和控制用电；仅适用于喷雾干燥粉体路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `dao-et-al-2021-tea-spray-drying`

###### 外购喷雾干燥热（`spray_dryer_purchased_heat`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：外购热
- 流属性/单位： 能量 / MJ
- 数量规则：计量输送至喷雾干燥器的外购热；现场产热时省略
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 产品流

###### 喷雾干燥 茶粉（`spray_dried_tea_powder`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：喷雾干燥 速溶茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测放行粉体质量和水分；仅适用于茶喷雾干燥路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_records`
- 来源： `dao-et-al-2021-tea-spray-drying`

###### 喷雾干燥 马黛茶粉（`spray_dried_mate_powder`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：喷雾干燥 速溶马黛茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测放行粉体质量和水分；仅适用于马黛茶喷雾干燥路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_records`

##### 废物流

###### 茶喷雾干燥产品损失（`tea_spray_dryer_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 喷雾干燥 茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测干燥室、旋风分离器、过滤器、洒漏和拒收粉体质量；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`


###### 马黛茶喷雾干燥产品损失（`mate_spray_dryer_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 喷雾干燥 马黛茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测干燥室、旋风分离器、过滤器、洒漏和拒收粉体质量；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

##### 基本流

###### 喷雾干燥器 颗粒物 排放（`spray_dryer_particulate_emission`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：排入空气的颗粒物
- 流属性/单位： 质量 / kg
- 数量规则：实测治理后喷雾干燥尾气的烟囱排放，或以浓度乘流量计算
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ec-jrc-fdm-bref-2019`

### 过程：冷冻干燥（`freeze_drying`）

#### 输入

##### 产品流

###### 冷冻干燥器 电力（`freeze_dryer_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量冷冻、真空、加热、冷凝和控制用电；仅适用于冷冻干燥粉体路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 产品流

###### 冷冻干燥 茶粉（`freeze_dried_tea_powder`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：冷冻干燥 速溶茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测放行粉体质量和水分；仅适用于茶冷冻干燥路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_records`

###### 冷冻干燥 马黛茶粉（`freeze_dried_mate_powder`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：冷冻干燥 速溶马黛茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测放行粉体质量和水分；仅适用于马黛茶冷冻干燥路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_records`

##### 废物流

###### 茶冷冻干燥产品损失（`tea_freeze_dryer_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 冷冻干燥 茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测滞留、洒漏和拒收粉体质量；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`


###### 马黛茶冷冻干燥产品损失（`mate_freeze_dryer_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 冷冻干燥 马黛茶粉
- 流属性/单位： 质量 / kg
- 数量规则：实测滞留、洒漏和拒收粉体质量；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

### 过程：配方与调和（`formulation_blending`）

#### 输入

##### 产品流

###### 麦芽糊精 载体（`maltodextrin_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：麦芽糊精
- 流属性/单位： 质量 / kg
- 数量规则：按批次配方记录计量；仅在已声明配方中纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_formulation_records`
- 来源： `fao-who-jmpr-boscalid-2019`

###### 乳清蛋白分离物 载体（`whey_protein_isolate_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：乳清蛋白分离物
- 流属性/单位： 质量 / kg
- 数量规则：按批次配方记录计量；仅在已声明配方中纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_formulation_records`
- 来源： `dao-et-al-2021-tea-spray-drying`

###### 蔗糖 配料（`sucrose_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：蔗糖
- 流属性/单位： 质量 / kg
- 数量规则：按批次配方记录计量；仅在已声明配方中纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_formulation_records`
- 来源： `fao-who-jmpr-boscalid-2019`

###### 葡萄糖浆固形物 配料（`glucose_syrup_solids_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：葡萄糖浆固形物
- 流属性/单位： 质量 / kg
- 数量规则：按批次配方记录计量；仅在已声明配方中纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_formulation_records`

###### 阿斯巴甜 甜味剂（`aspartame_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：阿斯巴甜
- 流属性/单位： 质量 / kg
- 数量规则：按批次配方记录计量；仅在已声明配方中纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_formulation_records`

###### 柠檬酸配料（`citric_acid_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：柠檬酸
- 流属性/单位： 质量 / kg
- 数量规则：按批次配方记录计量；仅在已声明配方中纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_formulation_records`
- 来源： `fao-who-jmpr-boscalid-2019`

###### 调和 电力（`blending_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量调和、输送和控制用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 废物流

###### 茶配方 产品损失（`tea_formulation_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 配方 茶制品
- 流属性/单位： 质量 / kg
- 数量规则：实测滞留、洒漏和拒收制品质量；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`


###### 马黛茶配方 产品损失（`mate_formulation_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 配方 马黛茶制品
- 流属性/单位： 质量 / kg
- 数量规则：实测滞留、洒漏和拒收制品质量；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

### 过程：产品热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理 电力（`heat_treatment_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量处理、泵送、保温和控制用电；仅在工序运行时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 外购热处理蒸汽（`heat_treatment_purchased_steam`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：外购蒸汽
- 流属性/单位： 能量 / MJ
- 数量规则：计量输送至产品热处理的外购蒸汽；无此输入时省略
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 废物流

###### 茶热处理产品损失（`tea_heat_treatment_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 热处理茶产品
- 流属性/单位： 质量 / kg
- 数量规则：实测滞留、洒漏、不合格和拒收质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`


###### 马黛茶热处理产品损失（`mate_heat_treatment_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 热处理马黛茶产品
- 流属性/单位： 质量 / kg
- 数量规则：实测滞留、洒漏、不合格和拒收质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

### 过程：现场热力公用工程（`thermal_utility_generation`）

#### 输入

##### 产品流

###### 天然气 燃料（`natural_gas_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：天然气
- 流属性/单位： 能量 / MJ
- 数量规则：计量燃料能量；仅在现场燃烧时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`

###### 轻质燃料油（`light_fuel_oil_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：轻质燃料油
- 流属性/单位： 质量 / kg
- 数量规则：按储罐或发票记录计量；仅在现场燃烧时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`

###### 液化石油气（`lpg_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：液化石油气
- 流属性/单位： 质量 / kg
- 数量规则：按储罐或发票记录计量；仅在现场燃烧时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`

###### 柴油（`diesel_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：柴油
- 流属性/单位： 质量 / kg
- 数量规则：按储罐或发票记录计量；仅在现场固定式热力装置中燃烧时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`

###### 木颗粒 燃料（`wood_pellet_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：木颗粒
- 流属性/单位： 质量 / kg
- 数量规则：按称量或发票记录计量；仅在现场燃烧时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_fuel_records`

#### 输出

##### 基本流

###### 化石二氧化碳 排放（`fossil_co2_emission`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位： 质量 / kg
- 数量规则：实测排放，或依据采集的化石燃料消耗量按燃料种类计算
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_emission_records`

###### 生物源二氧化碳 排放（`biogenic_co2_emission`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：排入空气的生物源二氧化碳
- 流属性/单位： 质量 / kg
- 数量规则：实测排放，或依据采集的生物质燃料消耗量按燃料种类计算；与化石二氧化碳分开报告
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_emission_records`

###### 氮氧化物 排放（`nox_emission`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：排入空气的氮氧化物
- 流属性/单位： 质量 / kg
- 数量规则：烟囱实测，或将批准的燃料与设备因子应用于已采集燃料用量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ec-jrc-fdm-bref-2019`

###### 二氧化硫 排放（`so2_emission`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：排入空气的二氧化硫
- 流属性/单位： 质量 / kg
- 数量规则：烟囱实测，或对适用的含硫燃料按硫含量计算
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_emission_records`

###### 燃烧颗粒物 排放（`combustion_particulate_emission`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：排入空气的颗粒物
- 流属性/单位： 质量 / kg
- 数量规则：烟囱实测，或将批准的燃料与设备因子应用于已采集燃料用量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ec-jrc-fdm-bref-2019`

### 过程：制冷（`refrigeration`）

#### 输入

##### 产品流

###### 制冷 电力（`refrigeration_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量过程冷却和冷藏用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

###### 氨制冷剂 补充（`ammonia_refrigerant_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：氨制冷剂
- 流属性/单位： 质量 / kg
- 数量规则：按维修日志记录补充质量；仅在系统使用氨时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_refrigerant_records`

###### R134a 制冷剂补充（`r134a_refrigerant_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位： 质量 / kg
- 数量规则：按维修日志记录补充质量；仅在系统使用 R134a 时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_refrigerant_records`

###### R404A制冷剂 补充（`r404a_refrigerant_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：R404A制冷剂
- 流属性/单位： 质量 / kg
- 数量规则：按维修日志记录补充质量；仅在系统使用 R404A 时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_refrigerant_records`

#### 输出

##### 基本流

###### 氨制冷剂 泄漏（`ammonia_refrigerant_leak`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：排入空气的氨
- 流属性/单位： 质量 / kg
- 数量规则：实测泄漏或按库存平衡计算损失；仅适用于氨系统
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_records`

###### R134a 制冷剂泄漏（`r134a_refrigerant_leak`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：1,1,1,2-四氟乙烷 排入空气
- 流属性/单位： 质量 / kg
- 数量规则：实测泄漏或按库存平衡计算损失；仅适用于 R134a 系统
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_records`

###### R404A制冷剂 泄漏（`r404a_refrigerant_leak`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：R404A制冷剂 排入空气
- 流属性/单位： 质量 / kg
- 数量规则：实测泄漏或按库存平衡计算损失；仅适用于 R404A 系统
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant_records`

### 过程：清洗与废水管理（`sanitation_wastewater`）

#### 输入

##### 产品流

###### 清洗用水（`cleaning_water`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：过程水
- 流属性/单位： 质量 / kg
- 数量规则：计量清洗水和漂洗水并按清洗周期归属
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_records`
- 来源： `ec-jrc-fdm-bref-2019`

###### 氢氧化钠 清洗剂（`sodium_hydroxide_cleaner`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：氢氧化钠
- 流属性/单位： 质量 / kg
- 数量规则：按化学品领用或投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_records`

###### 硝酸 清洗剂（`nitric_acid_cleaner`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：硝酸
- 流属性/单位： 质量 / kg
- 数量规则：按化学品领用或投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_records`

###### 过氧乙酸 消毒剂（`peracetic_acid_sanitizer`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：过氧乙酸
- 流属性/单位： 质量 / kg
- 数量规则：按化学品领用或投加记录计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_records`

#### 输出

##### 废物流

###### 过程废水（`process_wastewater`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：食品加工废水
- 流属性/单位： 质量 / kg
- 数量规则：按去向计量排放量，并保留已测的 COD、TSS、氮、磷、pH 和温度
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_records`
- 来源： `ec-jrc-fdm-bref-2019`

###### 废水处理污泥（`wastewater_sludge`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废水处理污泥
- 流属性/单位： 质量 / kg
- 数量规则：实测湿质量、干物质和处理去向
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_records`

### 过程：包装与工厂储存（`packaging_and_storage`）

#### 输入

##### 产品流

###### 玻璃瓶（`glass_bottle_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：玻璃瓶
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### PET瓶（`pet_bottle_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：聚对苯二甲酸乙二醇酯瓶
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### HDPE瓶盖（`hdpe_closure_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：高密度聚乙烯瓶盖
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### 铝罐（`aluminium_can_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：铝罐
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### 钢桶（`steel_drum_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：钢桶
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### 多层复合袋（`multilayer_pouch_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：PET-铝-PE复合袋
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在使用该确切复合材料时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### 纸板箱（`paperboard_carton_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：瓦楞纸箱
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### 聚乙烯内衬（`pe_liner_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：低密度聚乙烯内衬袋
- 流属性/单位： 质量 / kg
- 数量规则：按包装物料清单和领用量计量；仅在实际使用时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging_records`

###### 木托盘（`wooden_pallet_input`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：木托盘
- 流属性/单位： 质量 / kg
- 数量规则：实测托盘质量并按有记录的周转次数或一次性使用分摊；仅在声明包装配置包含托盘时纳入
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`

###### 包装与储存 电力（`packaging_storage_electricity`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：电力
- 流属性/单位： 能量 / kWh
- 数量规则：分表计量灌装、封口、输送、仓储搬运和非制冷储存用电
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy_records`

#### 输出

##### 产品流

###### 包装 液体茶浸膏（`reference_product_liquid_tea_extract`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 液体茶浸膏
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于茶液体浸膏路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`

###### 包装 茶浓缩物（`reference_product_tea_concentrate`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 茶浓缩物
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于茶液体浓缩物路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`

###### 包装 速溶茶粉（`reference_product_instant_tea_powder`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 速溶茶粉
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于茶粉体路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`; `iso-6079-2021`

###### 包装 茶基制品（`reference_product_tea_preparation`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 茶基制品
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于茶配方制品路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`

###### 包装 液体马黛茶浸膏（`reference_product_liquid_mate_extract`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 液体马黛茶浸膏
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于马黛茶液体浸膏路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`

###### 包装 马黛茶浓缩物（`reference_product_mate_concentrate`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 马黛茶浓缩物
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于马黛茶液体浓缩物路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`

###### 包装 速溶马黛茶粉（`reference_product_instant_mate_powder`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 速溶马黛茶粉
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于马黛茶粉体路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`

###### 包装 马黛茶基制品（`reference_product_mate_preparation`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：包装 马黛茶基制品
- 流属性/单位： 质量 / kg
- 数量规则：净放行产品恰为 1 kg；仅适用于马黛茶配方制品路线
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 参考产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `eu-pef-method-2021`

##### 废物流

###### 茶包装 产品损失（`tea_packaging_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 包装茶产品
- 流属性/单位： 质量 / kg
- 数量规则：实测灌装、封口、检验、储存和放行拒收质量；仅适用于茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`


###### 马黛茶包装 产品损失（`mate_packaging_product_loss`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废弃 包装马黛茶产品
- 流属性/单位： 质量 / kg
- 数量规则：实测灌装、封口、检验、储存和放行拒收质量；仅适用于马黛茶路线
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

###### 废玻璃包装（`waste_glass_packaging`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废玻璃包装
- 流属性/单位： 质量 / kg
- 数量规则：实测破损和废弃玻璃包装质量；仅在使用玻璃时纳入
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

###### 废塑料包装（`waste_plastic_packaging`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废PET包装
- 流属性/单位： 质量 / kg
- 数量规则：实测破损和废弃 PET 包装质量；其他废弃聚合物须另设原子行
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

###### 废金属包装（`waste_metal_packaging`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废铝包装
- 流属性/单位： 质量 / kg
- 数量规则：实测破损和废弃铝包装质量；适用时钢包装须另设原子行
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

###### 废纸板包装（`waste_paperboard_packaging`）

仅在本卡所示具体交换及声明路线实际适用时纳入；不得与其他植物来源、产品形态或物质合并。

- 选定流：废瓦楞纸板
- 流属性/单位： 质量 / kg
- 数量规则：实测破损和废弃纸箱质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 最终产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | botanical, product-state, drying, formulation, utility, and packaging routes | Subdivide meters, batches, and process records before allocation so tea and maté, liquid and powder, spray and freeze drying, and different formulations are not averaged by default. | `eu-pef-method-2021` |
| `allocation_internal_recovery` | recovered water, solvent, aroma, and rework | Treat material returned within the same product system as an internal loop; record make-up and losses and do not create an avoided-burden credit for internal recovery. | `eu-pef-method-2021` |
| `allocation_residue_status` | spent leaves, filter cake, sludge, and product losses | Treat outputs as waste unless a documented specification, transfer, purchaser, and destination demonstrate a co-product. Do not assign a credit solely because a possible use exists. | `eu-pef-method-2021` |
| `allocation_unavoidable_multifunctionality` | jointly produced saleable outputs after subdivision | If allocation remains unavoidable, document the physical relationship that drives the shared process and allocate on that basis; if no defensible physical relationship exists, use economic allocation and disclose prices, period, geography, and sensitivity. | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `raw_material_receipt` | tea or maté input and screening | weighbridge, lot, and laboratory records | botanical identity; supplier; origin; input state; gross mass; tare; accepted mass; reject mass; moisture | calibrated scale and lot identity review | kg; % w/w | every lot | representative reporting year | all supplying lots to modelled line | sum masses by botanical route; normalize only within the declared route | calibration, supplier document, lot trace |
| `cp_extraction_records` | `aqueous_extraction` | water, solvent, aids, and extraction liquor | batch sheet and meters | batch id; raw material; water; solvent; enzyme; time; temperature; liquor mass; solids | calibrated meters, dosing logs, and laboratory solids test | kg; °C; min; % w/w | every batch | representative reporting year | all modelled extractors | sum by declared extraction route and divide by released product | meter calibration, batch reconciliation |
| `cp_separation_records` | `solid_liquid_separation` | separation media and operation | maintenance and batch records | medium identity; installed mass; replacement date; processed mass; retained solids | stock issue plus equipment log | kg | every replacement and batch | representative reporting year | all modelled separators | allocate replacement mass over measured processed output | purchase and maintenance records |
| `cp_clarification_records` | `clarification_filtration` | aids, media, filtrate, and filter cake | batch, dosing, and maintenance records | aid identity; dose; medium identity; replacement mass; feed; permeate; cake; solids | dosing system, scale, and laboratory test | kg; % w/w | every batch | representative reporting year | all modelled clarification lines | retain one aid or medium per row; reconcile feed, permeate, and residue | dosing calibration, batch reconciliation |
| `cp_concentration_records` | `concentration` | concentrate output | batch and laboratory records | feed mass; feed solids; concentrate mass; concentrate solids; condensate; technology | calibrated tanks or scales and solids test | kg; % w/w | every batch | representative reporting year | all modelled concentrators | aggregate only compatible technology and botanical routes | calibration and solids method |
| `cp_aroma_records` | `aroma_recovery` | recovered aroma | recovery batch record | botanical route; recovered mass; composition or solids; return, sale, or disposal destination | calibrated receiver and batch trace | kg | every applicable batch | representative reporting year | all modelled recovery equipment | sum by botanical route and destination | calibration and destination record |
| `cp_drying_records` | `spray_drying`; `freeze_drying` | dried product output | dryer batch and laboratory records | drying route; feed mass; feed solids; powder mass; moisture; rejects | calibrated scales and moisture test | kg; % w/w | every batch | representative reporting year | all modelled dryers | never aggregate spray and freeze drying; normalize released output | calibration, moisture method, batch reconciliation |
| `cp_formulation_records` | `formulation_blending` | each declared ingredient | approved formula, issue, and batch records | ingredient identity; supplier; lot; issued mass; returned mass; final formulation | weigh scale and electronic batch record | kg | every batch | representative reporting year | all modelled blending lines | one atomic row per ingredient; reconcile issued, returned, output, and loss | approved formula and scale calibration |
| `cp_energy_records` | all foreground processes | electricity, purchased steam, and purchased heat | submeter and invoice records | carrier identity; meter start/end; energy; process; batch or period; supplier | calibrated submeter preferred; reconciled invoice otherwise | kWh; MJ | batch or monthly | representative reporting year | all modelled equipment | keep carriers separate; allocate shared meters by documented causal driver | calibration, invoice reconciliation |
| `cp_fuel_records` | `thermal_utility_generation` | each on-site fuel | meter, tank, and invoice records | fuel identity; quantity; lower heating value; sulfur; biogenic fraction; unit | calibrated meter or stock reconciliation | kg; m3; MJ | delivery and monthly reconciliation | representative reporting year | all foreground combustion units | one atomic row per fuel and unit; convert with documented properties | invoice, meter calibration, fuel certificate |
| `cp_refrigerant_records` | `refrigeration` | refrigerant make-up and leakage | equipment inventory and service logs | equipment id; refrigerant identity; opening charge; additions; recovery; closing charge; confirmed leaks | mass-balance inventory and service weighing | kg | every service and annual balance | representative reporting year | all foreground cooling systems | calculate loss separately for each refrigerant | service certificate and inventory reconciliation |
| `cp_cleaning_records` | `sanitation_wastewater` | cleaning water and each chemical | CIP or manual cleaning logs | cycle id; equipment; water; chemical identity; concentration; dose; return; discharge | flow meter and chemical dosing record | kg; L | every cleaning cycle | representative reporting year | all foreground cleaning systems | one atomic row per chemical; assign by cleaned equipment or batch | meter and dosing calibration |
| `cp_wastewater_records` | `sanitation_wastewater` | wastewater and sludge | discharge meter, sample, and sludge records | stream; flow; COD; TSS; N; P; pH; sludge wet mass; dry solids; destination | calibrated flow meter, accredited laboratory, and scale | kg; m3; mg/L; % w/w | continuous or batch; representative samples | representative reporting year | all foreground discharges and treatment units | retain streams and destinations; calculate pollutant loads from compatible flow and concentration periods | calibration, chain of custody, laboratory report |
| `cp_packaging_records` | `packaging_and_storage` | each packaging component | packaging BOM, stock issue, and line records | component identity; material; mass per item; items issued; returned; damaged; pallet trips | supplier specification plus calibrated count or scale | kg; item | each packaging run | representative reporting year | all modelled packaging lines | one atomic row per material component; calculate reuse per documented trips | BOM approval, supplier spec, scale check |
| `cp_waste_records` | all foreground processes | residues, filter waste, product loss, and packaging waste | scale, skip, rejection, and destination records | waste identity; botanical identity where relevant; wet mass; dry solids; destination; treatment | calibrated scale and waste transfer record | kg; % w/w | every batch or shipment | representative reporting year | all foreground waste points | never combine different waste identities or destinations | scale calibration and transfer receipt |
| `cp_emission_records` | `spray_drying`; `thermal_utility_generation` | direct air emissions | stack tests, continuous monitoring, and factor calculations | source; pollutant; concentration; gas flow; operating time; fuel; factor; abatement | standard measurement or approved factor with activity data | kg; mg/Nm3 | permit or representative frequency | representative reporting year | all foreground emission points | calculate each pollutant separately and reconcile to operating period | laboratory report, monitor QA, factor reference |
| `cp_mass_balance_records` | all production processes | yields, losses, and condensate | batch mass balance | input; output; water; residue; wastewater; loss; solids | reconciled calibrated measurements | kg; % w/w | every batch | representative reporting year | each declared botanical and product route | input mass plus additions equals products plus wastes, wastewater, emissions, and documented inventory change within uncertainty | signed reconciliation and meter QA |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory row | normalized amount = route-compatible reporting-period amount / net released mass of the same declared final product | exchange amount; net released product mass | amount 每 1 kg 最终产品 |  |
| `calc_dry_solids_balance` | extraction through packaging | dry solids in = dry solids in products + residues + wastewater + losses + documented inventory change; investigate unreconciled difference | measured masses; measured solids or moisture | dry-solids reconciliation | `fao-who-jmpr-boscalid-2019` |
| `calc_refrigerant_loss` | each refrigerant | loss = opening charge + additions - recovered quantity - closing charge, adjusted for documented equipment transfers | equipment inventory and service masses | refrigerant emission by identity |  |
| `calc_pollutant_load` | wastewater or air pollutant | load = compatible measured concentration × measured stream flow × operating duration, with unit conversion | concentration; flow; time | pollutant mass | `ec-jrc-fdm-bref-2019` |
| `calc_shared_meter` | shared equipment or utility meter | allocate only after subdivision is infeasible and use a documented causal driver such as equipment operating time, measured throughput, or delivered heat; disclose the driver | shared meter; route-specific causal driver | route-specific amount | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | raw materials, intermediates, final product, ingredients, aids, media, fuels, refrigerants, and packaging | Retain supplier, grade, botanical identity where relevant, formulation or material specification, lot, and exact flow-name evidence; unresolved UUIDs remain disclosed. | supplier documents, batch trace, Tiangong direct-read record |
| `dq_route` | all processes | Records shall distinguish tea from maté, liquid from powder, spray drying from freeze drying, each formulation, each fuel, and each refrigerant. | process map, batch and meter tags |
| `dq_measurement` | mass, water, energy, solids, emissions, and waste | Use calibrated instruments or documented reconciled invoices; retain units, conversions, detection limits, and missing-data treatment. | calibration and reconciliation records |
| `dq_temporal` | foreground data | Cover a representative continuous 12-month period or justify a shorter campaign period and seasonal representativeness. | production calendar and coverage report |
| `dq_completeness` | foreground inventory | Reconcile all batches and report excluded processes, missing providers, unmonitored direct emissions, and cut-offs; a missing range is not permission to omit a flow. | completeness and mass-balance check; `eu-pef-method-2021` |
| `dq_representativeness` | dataset publication | Report technology, geography, reference period, product specification, and route share; do not publish an averaged default that merges incompatible routes. | metadata and route-separated calculation workbook |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Exactly one botanical source and one delivered product state are declared, the output row matches them, and no approximate Tiangong reference-product UUID is used. | `unsd-cpc-3-0-2025`; `iso-6079-2021` |
| `validate_reference_mass` | reference amount | Net released product equals exactly 1 kg after normalization and packaging mass is separate. |  |
| `validate_route_exclusivity` | process map | Tea and maté, liquid and powder, spray and freeze drying, and different formulations are not simultaneously defaulted; every conditional process has a declared applicability decision. | `iso-6079-2021`; `dao-et-al-2021-tea-spray-drying` |
| `validate_atomic_inventory` | inventory rows | Every selected flow is one material, carrier, ingredient, aid, medium, waste, or elementary emission; combined collections and selector labels fail validation. | `eu-pef-method-2021` |
| `validate_mass_solids_balance` | production batch | Wet-mass and dry-solids balances reconcile within the site's documented measurement uncertainty, or the difference is investigated and disclosed. | `fao-who-jmpr-boscalid-2019` |
| `validate_energy_fuels` | utilities | Electricity, purchased steam, purchased heat, natural gas, and each other fuel are separately recorded; direct combustion emissions are present when fuel is combusted on site. | `ec-jrc-fdm-bref-2019` |
| `validate_formulation` | preparation route | The approved formulation BOM equals the sum of separately inventoried ingredients and processing aids after returns and losses; undeclared carriers, sugars, sweeteners, or additives fail validation. |  |
| `validate_wastewater_waste` | outputs | Tea residue, maté residue, filter residue, product loss, wastewater, sludge, and each packaging-waste material have separate amounts and destinations when applicable. | `ec-jrc-fdm-bref-2019` |
| `validate_refrigerants` | refrigeration | Each refrigerant identity, make-up, recovery, closing charge, and calculated leak are reconciled; a generic refrigerant row fails validation. | `ec-jrc-fdm-bref-2019` |
| `validate_data_quality` | published dataset | Temporal, technological, geographical, completeness, and precision evidence is retained and the data-quality assessment is reported. | `eu-pef-method-2021` |
| `validate_ranges` | quantitative guidance | No empirical range is accepted unless at least two independent original sources have compatible boundary, unit, and basis evidence; otherwise the range is omitted and the manifest evidence gap remains open. |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground manufacturing data package for one declared tea-derived or maté-derived product route. |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after review, UUID resolution, provider linking, quality assessment, and closure or acceptance of review blockers. |
| allowed_use | Route-matched LCA process or lifecyclemodel construction for the declared botanical source, product state, technology, formulation, geography, and reference period. |
| excluded_use | Generic substitution across tea and maté; substitution across liquid and powder or spray and freeze drying; comparative claims without equivalent functional and quality specifications; zero-burden treatment of unresolved providers. |
| required_metadata | PCR id; botanical source; delivered state; product specification; solids or moisture; extraction solvent; concentration method; aroma route; drying route; formulation; heat treatment; utility and refrigerant systems; packaging; storage; geography; reference period; allocation; provider links; exclusions. |
| required_quality_disclosure | Coverage, measurement methods, calibration, missing-data treatment, mass and solids reconciliation, wastewater and emissions monitoring, allocation, uncertainty, provider gaps, UUID gaps, and unresolved range evidence. |
| update_trigger | Change in botanical source, input state, extraction solvent, concentration or drying technology, formulation, heat treatment, fuel, refrigerant, packaging, storage, provider dataset, regulation, or evidence that materially changes the inventory. |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 23914, https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml (retrieved 2026-08-24) | Official category identity and scope. |
| `iso-6079-2021` | standard | ISO 6079:2021, Instant tea in solid form — Specification, https://www.iso.org/standard/80197.html (retrieved 2026-08-24) | Public scope distinguishes pure solid instant tea from filled, aromatic, decaffeinated, and non-tea products; supports mandatory product-state and formulation qualification. |
| `fao-who-jmpr-boscalid-2019` | official_guidance | FAO/WHO Joint Meeting on Pesticide Residues, Pesticide residues in food 2019 — Boscalid evaluation, pp. 82–84, https://www.fao.org/fileadmin/user_upload/IPM_Pesticide/JMPR/Evaluations/2019_Extra/BOSCALID_221.pdf (retrieved 2026-08-24) | Original verified tea-processing trial documenting hot-water extraction, centrifuge and sieve separation, vacuum concentration, conditional silica gel, maltodextrin, citric acid and sucrose addition, drying, and distinct extract/residue matrices; not used for category-wide ranges. |
| `ec-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-24) | Water, energy, raw-material, cleaning-agent, wastewater, waste, refrigerant, and direct-emission inventory and monitoring requirements. |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-24) | Functional unit and reference flow, completeness, company-specific data, data quality, system boundary, multi-functionality, allocation, and validation. |
| `dao-et-al-2021-tea-spray-drying` | literature | Dao, D.T.A. et al. (2021), Optimization of spray-drying process to manufacture green tea powder and its characters, Food Science & Nutrition 9:6566–6574, https://doi.org/10.1002/fsn3.2597 (full text verified 2026-08-24) | Original process evidence for conditional washing/blanching, water/enzyme and ethanol-assisted extraction, sieving, carrier addition, atomization, hot-air drying, powder separation, and route-specific electricity/heat/material collection; not used for category-wide ranges. |

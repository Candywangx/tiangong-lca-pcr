---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 橙子

## 1. 范围与适用性

本 PCR 覆盖受管理柑橘果园中的鲜食整橙，从声明的建植或生产周期起点至声明的农场出场状态。可纳入前景记录中的分选、清洗和农场端临时保护。必须声明品种、砧木、果园树龄、生产路线、地区、成熟度、等级和合格产量基准。

本 PCR 不覆盖橙汁、浓缩汁、精油、干制或蜜饯橙、零售配送、消费者使用和下游加工；除非另行声明，农场出场后的运输也不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges |
| classification_refs | CPC 3.0:01323; mapping relation: exact |
| covered_products | 受管理柑橘果园生产的鲜食整橙 |
| excluded_products | 橙汁、浓缩汁、精油、干制或保存橙、零售或消费者即食产品、农场出场后的运输 |
| representative_product | 在声明农场出场点验收的鲜食整橙 |
| production_route | 多年生柑橘果园建植、栽培、采收以及可选的农场端分选或包装 |
| market_state | 已声明成熟度和等级、在农场出场点验收的鲜食整橙 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在农场出场点验收的鲜食整橙 |
| How much | 1 kg 合格橙 |
| How well | 已知时的品种、砧木或果园路线、成熟度、等级、含水状态和农场出场质量 |
| How long or cycle | 一个声明的生产年度或生产周期；声明果园建植和结果年限 |
| reference_flow_link | orange_farm_gate_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 农场出场的鲜食整橙＼ |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 橙子品种；已知时的砧木；地区；果园树龄和生产路线；生产年度或生产周期基准；成熟度和等级；合格产量；农场出场状态；拒收品和副产品；采后去向 |

参考产品身份保持 证据缺口，直到获得经核验的平台身份；这不改变参考流语义或产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和产品输出归一化 | 质量 | kg | 将清单归一化为声明农场出场点 1 kg 合格整橙。 |
| `perennial_time_basis` | 果园建植和结果期栽培 | 面积时间和合格产出 | ha year；kg | 声明结果年限，并将建植、更新和非结果期投入按结果期和合格产量分配。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂投入 | 产品质量和养分基准 | kg product；kg N、P2O5 或 K2O | 每种实际肥料或改良剂产品单独列卡，保留实物质量、配方、养分组成和施用记录；养分量不是同一产品的另一次投入，不使用集合或分组标识代替具体流身份。 |
| `water_measurement_basis` | 灌溉和水源取水 | 体积 | m3 | 优先使用水表或供水记录；区分施用灌溉水和水源取水；无法直接计量时披露水量平衡方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 受管理果园土地或声明的建植事件进入生产系统；若不包含建植，则将现有果园声明为起点 |
| starting_condition_role | 多年生农业生产前景起点，并披露果园树龄、土地历史和建植分配 |
| product_classification_scope | CPC 3.0:01323 鲜食整橙 |
| recursive_input_rule | 仅在同类种植材料跨越前景边界时记录外购或转入材料；自繁材料需要披露来源和分配，而不是递归替代产品 |
| upstream_dataset_requirement | 对非前景作业的苗木、肥料、土壤改良剂、植保产品、能源、包装和承包服务使用上游数据集 |
| disclosure | 声明品种、路线、果园树龄、是否包含建植、结果年限、生产周期或果园年度基准、合格产量、农场出场状态和拒收果去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_condition` | 所有过程 | 从声明的果园建植或生产年度条件开始，纳入至合格农场出场橙的前景投入、资源使用、排放、采收和产品输出；排除零售、消费者使用和下游加工。 | `fao-gap-framework-2003`、`codex-fresh-fruits-vegetables-cxc-53` |
| `boundary_perennial_disclosure` | 建植和栽培 | 声明果园树龄、结果年限、更新或补植，以及是否包含建植；没有分配计算时不得混合年度和多年生时间基准。 | `fao-gap-framework-2003` |
| `boundary_recursive_input` | 种植材料 | 在外购或转入种植材料实际跨越边界的位置记录；若材料自繁，则披露亲本材料和分配。 | `fao-gap-framework-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01323_orchard_establishment` | 柑橘果园建植与更新 | conditional | 当种植、嫁接、场地准备、更新或建植投入对声明生产期有贡献时纳入。 | 建植和多年生时间基准节点 | 每单位建植面积并分配至果园年度合格产出 |
| `p01323_orchard_cultivation` | 橙园栽培 | required | 纳入声明生产年度或生产周期的田间和果园管理。 | 受管理生物生产节点 | 每果园年度和 1 kg 合格橙 |
| `p01323_harvest_farm_gate` | 橙子采收与农场端处理 | required | 当存在时纳入采收、场内分选或清洗、临时保护和农场端包装。 | 采收和交付节点 | 每采收和合格橙质量 |

### 过程：柑橘果园建植与更新（`p01323_orchard_establishment`）

#### 输入
##### 产品流

###### 提供橙树种植或嫁接材料（`orange_planting_material_input`）

记录苗木、砧木、嫁接材料或其他种植材料进入果园建植的边界。声明材料是外购、转入还是自繁，并保留数量到质量或件数基准的换算。

- 选定流：果园建植用橙树种植或嫁接材料
- 流属性/单位：质量或件数 / kg or item
- 数量规则：按地块和建植年度计量植物数量和类型；需要时计算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每单位建植面积并分配至 1 kg 合格橙.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`

###### 尿素肥料（`p01323_orchard_establishment_agricultural_nutrient_inputs_urea`）

**p01323_orchard_establishment_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每单位建植面积并分配至 1 kg 合格橙.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_establishment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`p01323_orchard_establishment_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_establishment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`p01323_orchard_establishment_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_establishment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

###### 氯化钾肥料（`p01323_orchard_establishment_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_establishment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`p01323_orchard_establishment_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_establishment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`p01323_orchard_establishment_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_establishment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-organic-nutrients`

##### 废物流

##### 基本流

###### 建植期果园土地占用（`orange_establishment_land_occupation`）

记录果园建植期间占用的面积和持续时间，包括声明边界内的非结果期。

- 选定流：柑橘果园生产的土地占用
- 流属性/单位：面积时间 / m2*a 或 ha year
- 数量规则：果园面积乘以声明占用时间，并分配至合格橙产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每单位建植面积并分配至 1 kg 合格橙.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`

#### 输出
##### 产品流

###### 已建成果园能力转入栽培（`orange_established_orchard_capacity`）

仅在建植被单独建模时记录该内部交接；它不是可销售橙产品。

- 选定流：已建成的柑橘果园生产能力
- 流属性/单位：面积或生产能力 / ha or orchard-year
- 数量规则：记录建植完成和生产期分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：关联声明的果园年度合格橙产出.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`

##### 废物流


###### 建植和更新残余物至声明去向（`orange_establishment_residue`）

记录移除植被、失败植株、砧木残余物和其他建植生物质离开建植过程的情况。保留作覆盖物或堆肥的材料应标明内部去向。

- 选定流：柑橘建植生物质残余物至声明去向
- 流属性/单位：质量 / kg 原状或 kg 干物质
- 数量规则：按地块和事件计量或计算残余物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每单位建植面积并分配至 1 kg 合格橙.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-gap-framework-2003`


##### 基本流

### 过程：橙园栽培（`p01323_orchard_cultivation`）

#### 输入
##### 产品流

###### 尿素肥料（`p01323_orchard_cultivation_agricultural_nutrient_inputs_urea`）

**p01323_orchard_cultivation_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每果园年度和 1 kg 合格橙.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_cultivation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`p01323_orchard_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_cultivation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`p01323_orchard_cultivation_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_cultivation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

###### 氯化钾肥料（`p01323_orchard_cultivation_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_cultivation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`p01323_orchard_cultivation_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_cultivation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`p01323_orchard_cultivation_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_01323_cultivation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-agriculture`；`fao-organic-nutrients`

###### 施用灌溉水（`orange_irrigation_water_input`）

记录施加到果园的灌溉水，并区分降雨和水源取水，声明计量或水量平衡方法。

- 选定流：灌溉水供应
- 流属性/单位：体积 / m3
- 数量规则：使用水表、供水记录或有文件依据的果园水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每果园年度和 1 kg 合格橙.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`

###### 柴油 (`orange_cultivation_energy_input_diesel`)

实际柴油果园拖拉机割草、喷施、修剪辅助及田间移动；其他动力系统须有独立记录。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_01323_cultivation_records`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_01323_cultivation_records`
- 来源：`route-energy-fao`

执行第8节`orange_cultivation_energy_input_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

##### 基本流

###### 结果期果园土地占用（`orange_cultivation_land_occupation`）

记录占用的果园面积和用于归一化的结果年度时长。

- 选定流：柑橘果园生产的土地占用
- 流属性/单位：面积时间 / m2*a 或 ha year
- 数量规则：果园面积乘以结果年度时长
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每果园年度和 1 kg 合格橙.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`

#### 输出
##### 基本流

###### 受管理果园土壤的直接氧化亚氮排放（`orange_soil_n2o_emission`）

根据施用氮和声明的排放方法计算受管理土壤直接排放，并单独保留施用养分基准。

- 选定流：受管理果园土壤向空气排放的氧化亚氮
- 流属性/单位: Mass / kg N2O
- 数量规则：根据采集氮投入和声明的排放方法计算，或使用现场测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每果园年度和 1 kg 合格橙.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`ipcc-2019-refinement-agriculture`

最终交换为 kg N2O。该物种的元素氮活动量以及按氮计的因子／范围保留在独立计算台账。归一化前将该物种的氮质量乘 44/28，仅换算一次；化合物质量不得再次换算，按氮计的范围不得直接校验化合物质量。未经有据拆分，不得将总氮损失作为该物种。保留实际接收环境与方法边界；未知身份或活动量不等于零。

##### 废物流

###### 修剪和果园残余物至声明去向（`orange_pruning_residue`）

记录修剪枝条和其他果园残余物离开前景系统的情况，并声明覆盖、焚烧、堆肥、处理或移除去向。

- 选定流：柑橘果园残余物至声明去向
- 流属性/单位：质量 / kg 原状或 kg 干物质
- 数量规则：称量残余物、体积到质量换算或修剪记录中的有依据比例
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每果园年度和 1 kg 合格橙.

- 归一化基准：每声明的参考流
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-gap-framework-2003`

### 过程：橙子采收与农场端处理（`p01323_harvest_farm_gate`）

#### 输入
##### 产品流

##### 废物流

##### 产品流

#### 输出
##### 基本流

##### 产品流

###### 农场出场的合格鲜橙（`orange_farm_gate_product`）

记录符合声明农场出场成熟度、等级和质量限定信息的整橙合格产出。这是唯一的参考产品输出。

- 选定流：农场出场的鲜食整橙＼
- 流属性/单位：质量 / kg
原始产出计量与核对要求：在采收以及纳入的农场端处理之后称量合格产出

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 农场出场合格橙.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_harvest_records`
- 来源：`fao-gap-framework-2003`、`codex-fresh-fruits-vegetables-cxc-53`


##### 废物流

###### 采收拒收品和果实损失至声明去向（`orange_harvest_rejects`）

记录采收、分选、清洗或农场端检验中被拒收的橙子，并标明饲料、堆肥、处理、丢弃或其他产品路线。

- 选定流：拒收或损失橙子至声明去向
- 流属性/单位：质量 / kg
- 数量规则：称量拒收品，或根据采收量、合格量和去向数量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每采收和合格橙质量.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_harvest_records`
- 来源：`codex-fresh-fruits-vegetables-cxc-53`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_output` | 果园栽培和采收 | 将投入和排放归一化至合格橙产出；单独报告采收但拒收的橙子，不得无说明地纳入参考产品。 | `codex-fresh-fruits-vegetables-cxc-53` |
| `allocation_establishment_over_life` | 果园建植和更新 | 按声明的结果年限和合格产量分配建植与更新负荷，并披露分配周期和更新事件。 | `fao-gap-framework-2003` |
| `allocation_co_products` | 拒收橙和其他路线 | 对有独立市场路线且有记录的拒收橙或副产品采用有依据的物理或经济分配，并报告基准；否则按声明去向处理，不声称存在第二参考产品。 | `fao-gap-framework-2003` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `orange_crop_protection_input_specific_input` | `cp_01323_cultivation_records` | 作业 p01323_orchard_cultivation：记录实际施用的制剂名称、有效成分、用量、处理面积和施用事件。 原数量方法：将产品发票、喷施日志或承包商记录与处理面积核对 |
| `orange_packaging_input_specific_input` | `cp_01323_harvest_records` | 作业 p01323_harvest_farm_gate：仅当包装跨越声明的农场端处理边界时记录箱、纸箱、托盘或其他包装，并声明重复使用、回收和损耗假设。 原数量方法：以合格橙产量归一化包装领用记录，并记录重复使用次数 |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `orange_cultivation_energy_input_identification` | `cp_01323_cultivation_records` | 实际柴油果园拖拉机割草、喷施、修剪辅助及田间移动；其他动力系统须有独立记录。 原始活动或阶段基准：每果园年度和 1 kg 合格橙. (`route-energy-fao`) |
| `orange_harvest_energy_input_identification` | `cp_01323_harvest_records` | 实际采摘及收集路线、周转箱移动及出口前搬运。增加载能体前先确认设备及承包服务包含项，排除出口后运输。 原始活动或阶段基准：每采收和合格橙质量. (`route-energy-fao`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_01323_establishment_records` | `p01323_orchard_establishment` | 种植、养分、残余物、土地、果园能力 | 苗圃记录、种植日志、地块图、更新记录 | 地块；品种；砧木；植株数量；产品；产品质量；养分分析；面积；年度；残余物去向 | 核对发票、田间日志、地图和实测或有依据的换算；原始汇总与分配：按地块汇总并按结果年限和合格产出分配 | kg、item、kg nutrient、ha year | 每次建植或更新事件 | 全建植期和声明分配期 | 果园地块 | 每声明的参考流 | 签署日志、发票、地图、产品分析 |
| `cp_01323_cultivation_records` | `p01323_orchard_cultivation` | 养分、灌溉、燃料、植保、残余物、排放; 必须完成的具体排放识别与计算 | 投入发票、喷施日志、水表记录、机械记录、土壤或水量平衡 | 地块；日期；产品；数量；养分基准；灌溉量；燃料；机械小时；处理面积；残余物质量；排放方法; 物质名称；接收环境；报告单位及元素或化合物基准；方法和因子来源；实际活动量；期间；数量不确定性；相关既有交换 | 按月或事件核对地块面积和果园年度产出；原始汇总与分配：汇总事件，保留产品和养分基准，并归一化至合格产出 按路线确认要求：`orange_cultivation_energy_input_identification`: 实际柴油果园拖拉机割草、喷施、修剪辅助及田间移动；其他动力系统须有独立记录。 原始活动或阶段基准：每果园年度和 1 kg 合格橙. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `orange_crop_protection_input_specific_input`: 作业 p01323_orchard_cultivation：记录实际施用的制剂名称、有效成分、用量、处理面积和施用事件。 原数量方法：将产品发票、喷施日志或承包商记录与处理面积核对 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。; orange_nitrogen_water_emission_specific_emission: 根据养分和水量平衡记录，确定实际果园年度有依据的氮径流及淋失。明确报告物质、适用时的溶解态或颗粒态基准，以及实际受纳水体或土壤环境。总 N 或平衡残差不能直接证明硝酸盐身份。保留果园年度归属及合格橙产出归一化。 这是必须落实的身份识别与计算要求，不是一项交换。完成数据集前，应按每个实际物质和接收环境建立具体基本流卡。kg 物质与 kg 元素 N 分开保留，只能依据已识别物种的有据组成或化学计量分数，将方法报告的基准换算为目标基准。不得把所有氮等同于某种化合物，也不得将元素 N 和对应化合物质量重复作为两项排放。保留原活动量、因子单位、期间、不确定性、边界与归一化；已有匹配卡时建立关联而不重复计数。确认兼容 UUID，或明确登记具体未解析身份。身份、方法或活动证据缺失不能表示零，也不能据此省略排放。 | kg product、kg nutrient、m3、MJ、kg residue; kg 具体物质与 kg N 分开记录 | 每个事件并按月汇总 | 一个生产年度或声明生产周期 | 果园地块和场址 | 每声明的参考流 | 水表核验、发票、喷施记录、因子文件、质量平衡 |
| `cp_01323_harvest_records` | `p01323_harvest_farm_gate` | 采收能源、包装、拒收品、排放、合格产品; 必须完成的具体排放识别与计算 | 采收票、地磅记录、包装记录、去向记录 | 日期；地块；采收质量；合格质量；拒收质量；去向；燃料或能源；包装类型；包装质量；重复使用次数; 物质名称；接收环境；报告单位及元素或化合物基准；方法和因子来源；实际活动量；期间；数量不确定性；相关既有交换 | 将采收和去向质量与农场出场产品总量核对；原始汇总与分配：汇总批次并分别保留合格、拒收和副产品路线 按路线确认要求：`orange_harvest_energy_input_identification`: 实际采摘及收集路线、周转箱移动及出口前搬运。增加载能体前先确认设备及承包服务包含项，排除出口后运输。 原始活动或阶段基准：每采收和合格橙质量. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `orange_packaging_input_specific_input`: 作业 p01323_harvest_farm_gate：仅当包装跨越声明的农场端处理边界时记录箱、纸箱、托盘或其他包装，并声明重复使用、回收和损耗假设。 原数量方法：以合格橙产量归一化包装领用记录，并记录重复使用次数 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。; orange_farm_gate_emissions_specific_emission: 对声明门内实际发生的清洗、处理和场内燃烧，根据测量或适用的活动量方法逐一识别直接污染物与接收介质。区分送往处理的废水转移与污染物的实际环境排放；核对场内和供方责任，避免重复计算已由整体服务覆盖的燃烧排放。保留采收量与合格橙量的关联以及门内归属。 这是必须落实的身份识别与计算要求，不是一项交换。完成数据集前，应按每个实际物质和接收环境建立具体基本流卡。kg 物质与 kg 元素 N 分开保留，只能依据已识别物种的有据组成或化学计量分数，将方法报告的基准换算为目标基准。不得把所有氮等同于某种化合物，也不得将元素 N 和对应化合物质量重复作为两项排放。保留原活动量、因子单位、期间、不确定性、边界与归一化；已有匹配卡时建立关联而不重复计数。确认兼容 UUID，或明确登记具体未解析身份。身份、方法或活动证据缺失不能表示零，也不能据此省略排放。 | kg、MJ、kg packaging、item; kg 具体物质与 kg N 分开记录 | 每个采收批次 | 全采收季和声明农场出场期 | 果园和处理点 | 每声明的参考流 | 校准秤、批次票、包装领用记录、去向收据 |
| `cp_phase1_environment_coverage` | p01323_orchard_establishment | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_output_normalization` | 所有定量行 | 将年度或生产周期清单量除以农场出场合格整橙质量，按每 1 kg 合格产出报告。 | 合格质量；行数量 | 归一化行值 | `mass-balance-identity` |
| `calc_establishment_allocation` | 建植行 | 按声明的结果年限和合格产量分配建植和更新量，并保留分配周期。 | 建植量；结果年限；合格产量 | 分配后的果园年度量 | `fao-gap-framework-2003` |
| `calc_nutrient_basis` | 养分投入行 | 保留产品质量，并根据产品分析和施用产品量计算养分质量；不得以养分质量替代产品投入。 | 产品数量；产品分析 | 产品质量和养分质量 | `ipcc-2019-refinement-agriculture` |
| `calc_reject_mass_balance` | 采收拒收品和产品输出 | 核对采收量与合格产出、拒收品、副产品和库存变化，并解释未解决差额。 | 采收量；合格量；拒收量；副产品；库存变化 | 已核对的质量平衡 | `mass-balance-identity` |
| `orange_nitrogen_water_emission_specific_emission` | `p01323_orchard_cultivation` | 根据养分和水量平衡记录，确定实际果园年度有依据的氮径流及淋失。明确报告物质、适用时的溶解态或颗粒态基准，以及实际受纳水体或土壤环境。总 N 或平衡残差不能直接证明硝酸盐身份。保留果园年度归属及合格橙产出归一化。 这是必须落实的身份识别与计算要求，不是一项交换。完成数据集前，应按每个实际物质和接收环境建立具体基本流卡。kg 物质与 kg 元素 N 分开保留，只能依据已识别物种的有据组成或化学计量分数，将方法报告的基准换算为目标基准。不得把所有氮等同于某种化合物，也不得将元素 N 和对应化合物质量重复作为两项排放。保留原活动量、因子单位、期间、不确定性、边界与归一化；已有匹配卡时建立关联而不重复计数。确认兼容 UUID，或明确登记具体未解析身份。身份、方法或活动证据缺失不能表示零，也不能据此省略排放。 | `cp_01323_cultivation_records` | 逐物质和介质的排放交换及独立元素台账 | `ipcc-2019-refinement-agriculture` |
| `orange_farm_gate_emissions_specific_emission` | `p01323_harvest_farm_gate` | 对声明门内实际发生的清洗、处理和场内燃烧，根据测量或适用的活动量方法逐一识别直接污染物与接收介质。区分送往处理的废水转移与污染物的实际环境排放；核对场内和供方责任，避免重复计算已由整体服务覆盖的燃烧排放。保留采收量与合格橙量的关联以及门内归属。 这是必须落实的身份识别与计算要求，不是一项交换。完成数据集前，应按每个实际物质和接收环境建立具体基本流卡。kg 物质与 kg 元素 N 分开保留，只能依据已识别物种的有据组成或化学计量分数，将方法报告的基准换算为目标基准。不得把所有氮等同于某种化合物，也不得将元素 N 和对应化合物质量重复作为两项排放。保留原活动量、因子单位、期间、不确定性、边界与归一化；已有匹配卡时建立关联而不重复计数。确认兼容 UUID，或明确登记具体未解析身份。身份、方法或活动证据缺失不能表示零，也不能据此省略排放。 | `cp_01323_harvest_records` | 逐物质和介质的排放交换及独立元素台账 | `fao-gap-framework-2003`; `ipcc-2019-refinement-agriculture` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_01323_cultivation_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 产品、路线和投入 | 已知时识别品种、果园路线、农场出场状态、投入产品和拒收去向。 | 产品说明、发票、批次记录 |
| `quality_measurement` | 质量、水、能源和面积时间行 | 可用时使用校准秤或水表；无法直接测量时记录换算、因子和不确定性。 | 校准记录、水表日志、因子说明 |
| `quality_temporal` | 所有过程 | 覆盖完整声明生产年度或生产周期，并披露缺失事件、异常天气、补植或淡季作业。 | 年度生产日志和缺口说明 |
| `quality_completeness` | 清单和排放 | 在归一化前核对采购投入、田间记录、采收量、合格产品、拒收品、副产品和去向。 | 投入核对和质量平衡 |
| `quality_disclosure` | 数据集元数据 | 声明起始条件、果园树龄、结果年限分配、地区、产量基准、农场出场边界和 证据缺口 身份。 | 数据集元数据和过程说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | 参考流 | 数据包缺少已知品种、路线、果园树龄或生产年度基准、成熟度、等级、农场出场状态、合格产量或拒收去向时拒绝。 | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_mass_balance` | 采收和农场端处理 | 核对采收量、合格产品、拒收品、副产品、库存变化和记录的不确定性；调查无法解释的质量不平衡。 | `mass-balance-identity` |
| `validation_nutrient_and_water_basis` | 栽培 | 确认肥料产品质量与养分质量、施用灌溉水与水源取水及其计量或计算方法。 | `ipcc-2019-refinement-agriculture`、`fao-gap-framework-2003` |
| `validation_perennial_allocation` | 建植和栽培 | 确认结果年限分配，防止在生产年度之间重复计算建植、更新或果园能力。 | `fao-gap-framework-2003` |
| `validation_identity_evidence` | 参考流和未映射流 | 将身份证据缺口保留为明确的前景解析要求；不得仅为填充 UUID 而替换为相近柑橘或产品流。 | `tidas-flow-identity-policy` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；完成质量检查后可作为 background_dataset |
| downstream_use | 橙园前景过程数据集、农场出场橙供应链模型以及以鲜食整橙为投入的生命周期模型 |
| allowed_use | 当保留品种、路线、时间基准、产量、农场出场状态、分配和质量披露时，用于区域或场址特定建模 |
| excluded_use | 橙汁、浓缩汁、精油、干果、零售配送、消费者使用，以及未披露产品身份或边界的路线 |
| required_metadata | 品种；已知时的砧木；地区；果园树龄；是否包含建植；结果年限；生产年度或生产周期基准；合格产量；成熟度；等级；农场出场状态；拒收去向；证据缺口 身份 |
| required_quality_disclosure | 时间覆盖、场址范围、计量和换算方法、养分和水量基准、质量平衡结果、分配规则和缺失数据处理 |
| update_trigger | 新的果园路线、品种或市场状态；结果年限或产量证据更新；具体流身份核验|

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-fresh-fruits-vegetables-cxc-53` | official_guidance | Codex 关于鲜食果蔬、产品质量和处理的指导 | 产品质量、处理和农场出场质量限定信息 |
| `ipcc-2019-refinement-agriculture` | method_factor | IPCC 2019 Refinement 第 4 卷农业方法 | 受管理土壤和养分相关排放计算 |
| `mass-balance-identity` | method_factor | 质量守恒方法身份 | 采收、拒收品、副产品和合格产出核对 |
| `tidas-flow-identity-policy` | official_guidance | 仓库流身份规则 | 保持语义并在无核验身份时显式保留 coverage finding |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

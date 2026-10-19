---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apples"
language: "zh-CN"
status: candidate
sync_with: "pcr.en-US.md"
content_maturity: authored_methodology
translation_status: aligned
---

# 果园门鲜苹果

## 1. 范围与适用性

本 PCR 用于构建商业栽培品种 *Malus domestica* 果园门鲜苹果的前景数据包。范围包括按声明生产寿命年化的建园与清园、年度果园管理、采收，以及获得可销售散装鲜果所需的果园内处理。

声明路线后可涵盖常规、综合、有机、雨养和灌溉生产。排除苹果苗木、苹果汁、苹果酒、干制或其他加工苹果、包装场或冷库产出，以及主要用于工业加工的果实。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apples` |
| classification_refs | CPC 3.0 `01341`, `Apples`; mapping relation: exact |
| covered_products | 商业栽培品种 *Malus domestica* 的果园门新鲜采收苹果 |
| excluded_products | 苗木；果汁；苹果酒；干制、腌制或其他加工苹果；包装场或冷库产出；主要用于工业加工的果实 |
| representative_product | 自然品种混合、果园门散装可销售鲜苹果 |
| production_route | 多年生果园建园、年度管理、采收及果园门处理 |
| market_state | 果园门新鲜、完整、未加工散装果实，并声明等级和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 果园门新鲜完整苹果 |
| How much | 1 kg |
| How well | 声明品种或混合、可销售性判据、等级、生产体系和水分状态 |
| How long or cycle | 一个声明采收年；建园和清园按声明生产寿命年化 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Apple, natural mix, at orchard |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种或品种混合；生产体系和认证状态；果园年龄与生产寿命假设；采收年或平均期；灌溉或雨养状态；地理；可销售性与等级判据；果园门；散装容器或包装状态 |

参考质量为验收后的可销售果实。工业级果和次果必须作为独立产出记录实测质量及有证据的去向。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流为果园门验收鲜苹果净质量，不含可重复使用果箱皮重。 |
| `yield_basis` | 产量及归一化投入 | Mass and area | kg and ha | 归一化前记录同一期间的总采收、验收、工业级和次果质量。 |
| `fertilizer_n_basis` | 肥料和氮排放 | Mass | kg product and kg N | 记录产品质量和养分含量；氮计算使用 kg N。 |
| `water_basis` | 灌溉和取水 | Volume or Mass | m3 or kg | 声明水源，区分取水、输送灌溉水、消耗和水足迹。 |
| `energy_inventory` | 燃料和电力 | Mass, Volume, or Energy | kg, L, MJ, or kWh | 保留燃料类型、能量单位、换算系数和果园作业。 |
| `perennial_annualization` | 建园和清园 | declared property | declared unit | 将可归属生命周期负荷除以终生产可销售产量；披露幼龄年和补植。 |

## 5. 系统边界

前景边界包括重要的苗木和支撑系统安装、整地、定植、可归属灌溉设施、年度施肥、灌溉、植保、修剪与地面管理、重要的外购授粉服务、机械、采收、田间运输、果园门处理及寿命末期清园。上游投入使用具有代表性的背景数据。包装场分级、零售包装、冷藏、配送、零售、消费和加工不在默认边界内。

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_life_cycle` | 所有数据集 | 通过年化多年生果园模型纳入建园、幼龄年、生产年、补植和清园，或证明替代模型具有代表性。 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `boundary_gate` | 参考产品 | 默认边界止于果园门验收新鲜散装苹果；包装场和冷库作业需要下游数据集。 | `codex-cxs-299-2010` |
| `boundary_input_completeness` | 果园管理 | 对肥料、灌溉、植保、燃料、电力、土地、建园材料、生物质去向及直接排放记录数值、有依据零值或有文件的排除。 | `baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020` |
| `boundary_quality_separation` | 苹果产出 | 按实测质量和去向分别记录验收鲜果、工业级果、次果和损失。 | `codex-cxs-299-2010`; `mass-balance-identity` |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | established_orchard_block |
| starting_condition_role | perennial_production_condition |
| product_classification_scope | 对应 CPC 3.0 `01341` 的鲜苹果；排除加工产出 |
| recursive_input_rule | 进入系统的同类苹果按来源和用途作为独立投入，不与果园产出合并 |
| upstream_dataset_requirement | 苗木、肥料、植保产品、能源、供水、支撑材料和废物处理使用代表性上游数据 |
| disclosure | 果园地块、品种、种植密度、建园年、年龄、生产寿命、路线、灌溉状态、地理、采收期、产量、可销售比例和门点 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_lifecycle_and_production | 果园生命周期与苹果生产 | required |  | foreground | 果园门 1 kg 验收鲜苹果 |
| orchard_gate_handling | 果园门处理 | conditional | 在门点前发生果园内清洗、预冷、分级或其他处理时纳入 | foreground | 果园门 1 kg 验收鲜苹果 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：果园生命周期与苹果生产（`orchard_lifecycle_and_production`）

#### 输入
##### 产品流

###### 尿素肥料（`orchard_lifecycle_and_production_agricultural_nutrient_inputs_urea`）

**orchard_lifecycle_and_production_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1 kg 参考产品.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`baima-apple-orchard-lca-2024`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`orchard_lifecycle_and_production_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`baima-apple-orchard-lca-2024`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`orchard_lifecycle_and_production_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`baima-apple-orchard-lca-2024`；`fao-fertilizer-identities`

###### 氯化钾肥料（`orchard_lifecycle_and_production_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`baima-apple-orchard-lca-2024`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`orchard_lifecycle_and_production_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`baima-apple-orchard-lca-2024`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`orchard_lifecycle_and_production_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`baima-apple-orchard-lca-2024`；`fao-organic-nutrients`

###### 灌溉水（`irrigation_water`）

灌溉水记录从各声明水源进入果园生产系统的输送水。

- 选定流：灌溉用水 `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- 流属性/单位：Mass / kg，同时保留 m3
- 数量规则：计量输送水；仅经核实的雨养生产为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`dzikiti-apple-water-footprint-2019`
范围证据需求：分别采集实际灌溉供水和水源取用量。引用的总水足迹观测值（187–237 m3/t，包含绿水和蓝水成分）仅为背景指标，不是这两种交换的数量范围。

###### 柴油（`orchard_energy_diesel`）

仅用于有记录的柴油动力作业。保留牌号和实际使用证据；油量L按供应商支持或实测的密度(kg/L)换算。燃料供应仅链接一次，实际燃烧排放另行核算，但供应服务已包含的不得重复计入。其他载能体及包含用能的机械服务须各用实际身份单独记录；条件卡不规定场址必用设备。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_energy_records`分别记录各作业包括抽水的该载能体。共用量仅归属一次，归属原始量除以实测且匹配的最终合格水果产出kg，再乘1 kg参考数量；保留阶段与最终产出比例，不对已归一化数量重复归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_records`
- 来源：`baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020`

###### 交流电（`orchard_energy_electricity`）

仅用于实际交流供电。记录电压、供应方及供电技术；电表kWh按1 kWh = 3.6 MJ仅换算一次。内部发电衔接前景发电过程，不另计外购电力负荷。其他载能体及包含用能的机械服务须各用实际身份单独记录；条件卡不规定场址必用设备。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_energy_records`分别记录各作业包括抽水的该载能体。共用量仅归属一次，归属原始量除以实测且匹配的最终合格水果产出kg，再乘1 kg参考数量；保留阶段与最终产出比例，不对已归一化数量重复归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_records`
- 来源：`baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020`

##### 废物流

通常不需要废物投入。跨越边界的废物衍生改良剂应单独标识、计量并链接负荷分担规则。

##### 基本流

###### 土地占用（`land_occupation`）

土地占用表示声明占用期内的生产果园面积。

- 选定流：适用于声明土地利用类别的土地占用基本流
- 流属性/单位：面积-时间 / ha a
- 数量规则：生产面积乘占用期，再除以可销售产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_output_records`

引用的平衡恒等式或方法不能确立通用数值界限。按相容基准，依据批次／场址实测投入、产出、水分、适用时的生长量、库存、损失与不确定性推导检查；未获支持前报告数值筛查不可用，保留实测交换，调查残差，不裁剪数值或代入默认值。

###### 取水（`water_withdrawal`）

取水表示为果园灌溉从环境中按水源取用的水量。

- 选定流：声明水类型及自然资源区室的分源自然取水
- 流属性/单位：Volume / m3
- 数量规则：按水源由计量灌溉水计算，不与输送水重复
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`dzikiti-apple-water-footprint-2019`
范围证据需求：分别采集实际灌溉供水和水源取用量。引用的总水足迹观测值（187–237 m3/t，包含绿水和蓝水成分）仅为背景指标，不是这两种交换的数量范围。

在实际水源取水边界按m³计量，与购买或输送供水量分开。采集淡水或海水、地表水或地下水、地点、资源区室、表计日期和读数及调拨；累计表按期末减期初并保留有据的表计修正。按相同时段汇总分源取水体积，按合格参考产出仅归一化一次。质量观测单列，只有密度及单位有相容证据时才按V=m/rho换算，不得隐含kg与m³等同。未特指水源的泛水身份不能代替实际水源。缺少水源、类型或换算证据时明确记录缺口，不得宣称水清单身份齐全或完整。

#### 输出
##### 产品流

###### 验收鲜苹果（`accepted_fresh_apples`）

验收鲜苹果是在声明果园门计量的可销售参考产品。

- 选定流：苹果 `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：果园门实测验收净质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：定量参考.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`codex-cxs-299-2010`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 工业级苹果（`industrial_grade_apples`）

工业级苹果是作为产品出售或转移用于加工的非参考果实。

- 选定流：苹果 `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- 流属性/单位：Mass / kg
- 数量规则：实测出售或转移用于加工的果实
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`codex-cxs-299-2010`
- 数量范围：采收质量平衡比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 总采收苹果
  - 基准：总采收苹果质量比例
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 弃置苹果果实 (`discarded_apple_fruit`)

仅在该材料身份分别明确且实际作为废物送往有据处理接收方时使用。计量本流实收净质量和含水率，使用干物质时另留台账。不包括有意销售产品、园内留存生物质或不明平衡损失。实际处置流为物理混合物时，应在独立的具体混合物卡中记录组成及唯一实际处理边界，不得编造分离或同时重复计入组分输出。不发生须有据；数量或去向缺失时完整性不成立。实际应归属质量按匹配的合格苹果产出归一化一次，不规定通用次果/木质比。

- 选定流： 送往处理的弃置苹果果实
- 流属性/单位： Mass / kg
- 数量规则： 实测本流净质量、实际含水率及去向；按最终参考量归一化一次
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_land_and_output_records`
- 来源： `ucdavis-orchard-lca-findings-2020`

###### 弃置苹果树木质材料 (`discarded_apple_wood`)

仅在该材料身份分别明确且实际作为废物送往有据处理接收方时使用。计量本流实收净质量和含水率，使用干物质时另留台账。不包括有意销售产品、园内留存生物质或不明平衡损失。实际处置流为物理混合物时，应在独立的具体混合物卡中记录组成及唯一实际处理边界，不得编造分离或同时重复计入组分输出。不发生须有据；数量或去向缺失时完整性不成立。实际应归属质量按匹配的合格苹果产出归一化一次，不规定通用次果/木质比。

- 选定流： 送往处理的弃置苹果树木质材料
- 流属性/单位： Mass / kg
- 数量规则： 实测本流净质量、实际含水率及去向；按最终参考量归一化一次
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_land_and_output_records`
- 来源： `ucdavis-orchard-lca-findings-2020`

##### 基本流

###### 管理土壤氧化亚氮排放到空气（`direct_soil_nitrous_oxide_emission`）

根据果园氮投入和选定的 IPCC 层级计算直接与间接氧化亚氮，并与氨和硝酸盐分开记录。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg N2O
- 数量规则：应用所选 IPCC 层级并以 44/28 将 N2O-N 换算为 N2O
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`

计算方法对应第 8 节规则：`calculate_direct_soil_n2o`。

###### 氨挥发排放到空气（`direct_soil_ammonia_emission`）

仅在果园施氮记录和声明的适用氨排放方法支持单独估计时纳入；不得用 N2O 因子代替。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 / kg NH3
- 数量规则：按声明方法计算氨；若结果以 NH3-N 表示，则以 17/14 换算为 NH3
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 硝酸盐排入淡水（`direct_soil_nitrate_freshwater_emission`）

仅在监测或声明的氮损失方法支持硝酸盐进入淡水时纳入，并保留受纳水体证据。

- 选定流：硝酸根 `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- 流属性/单位：质量 / kg nitrate
- 数量规则：计算或测量进入淡水的硝酸盐；若结果以 nitrate-N 表示，则以 62/14 换算为硝酸盐
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 燃料化石二氧化碳（`fossil_carbon_dioxide_from_fuel`）

燃料化石二氧化碳表示由燃料记录计算的场内直接燃烧排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：燃料记录乘以声明燃烧因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`

引用的平衡恒等式或方法不能确立通用数值界限。按相容基准，依据批次／场址实测投入、产出、水分、适用时的生长量、库存、损失与不确定性推导检查；未获支持前报告数值筛查不可用，保留实测交换，调查残差，不裁剪数值或代入默认值。

### 过程：果园门处理（`orchard_gate_handling`）

#### 输入
##### 产品流

仅在门点前发生果园内处理时记录水、电力、可重复使用果箱和材料，并使用上文适用的流标识和协议。

##### 废物流

废物衍生投入单独记录。

##### 基本流

不得重复记录果园生产中已记录的取水。

#### 输出
##### 产品流

###### 果园门处理后苹果（`orchard_gate_handled_apples`）

果园门处理后苹果是经过纳入范围的果园内处理后的验收参考产品。

- 选定流：苹果 `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：果园内处理后的实测验收产出

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：定量参考.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`codex-cxs-299-2010`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

计量新增次果并与投入果实核对。

##### 基本流

仅记录前景边界内发生的直接处理排放。


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：果园苹果，自然混合
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：果园苹果，自然混合
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与联产品处理

### 分配规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 子过程与等级 | 记录允许时首先拆分建园、管理、采收、处理、工业果和残余物管理以避免分配。 | `iso-14044-2006` |
| `allocation_perennial_time` | 建园与清园 | 按声明生产寿命及终生产可销售产量年化可归属负荷；披露未结果年、补植和产量假设。 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `allocation_multiple_apple_outputs` | 验收与工业苹果 | 无法拆分时采用质量分配；经济分配需要代表性价格及质量分配敏感性。 | `iso-14044-2006` |
| `allocation_residue_fate` | 果园生物质 | 果园承担收集和场内管理；仅在被替代产品、路线和市场有证据时采用替代。实际露天焚烧须明确建模。 | `ucdavis-orchard-lca-findings-2020`; `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `annualized_establishment_inputs_specific_input` | `cp_orchard_lifecycle_records` | 作业 orchard_lifecycle_and_production：年化建园投入表示可归属于参考产品的苗木、支撑系统、灌溉设施、补植和清园投入。 原数量方法：按终生产可销售产量年化的实测安装、补植和清园数量 使用实测寿命期产出；投入与产出质量比不以1为上限。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_lifecycle_records | orchard_lifecycle_and_production | 建园与清园 | 果园资产记录 | 地块；定植年；生产寿命；树木；补植；支撑；灌溉材料；清园；去向 | 发票、田间日志、资产台账；原始汇总与分配：按终生产可销售产出年化 `annualized_establishment_inputs_specific_input`: 作业 orchard_lifecycle_and_production：年化建园投入表示可归属于参考产品的苗木、支撑系统、灌溉设施、补植和清园投入。 原数量方法：按终生产可销售产量年化的实测安装、补植和清园数量 使用实测寿命期产出；投入与产出质量比不以1为上限。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | item, kg, L, kWh, year | 每次事件 | 完整果园模型 | 果园地块 | 每声明的参考流 | 发票、资产台账、计算工作簿 |
| cp_orchard_input_records | orchard_lifecycle_and_production | 肥料与植保 | 采购及施用记录 | 产品；活性成分或养分；质量；日期；面积；地块 | 发票、标签、施用日志；原始汇总与分配：按物质求和并按验收质量归一化 `crop_protection_inputs_specific_input`: 植保投入记录果园施用的每种命名配方产品及活性成分。 按命名产品和活性成分实测施用量 这是必需的具体投入采集要求，不是选定交换。按原始记录识别每种实际配方产品、载能体或独立供应服务，保留物理身份、状态、原生数量及供应商规格。完成数据集前，每种实际投入须单独建立具体卡片，核验兼容UUID或明确保留未解析身份。产品质量与所含有效成分质量是不同台账，仅凭有记录的组成换算，不将两者重复作为两次采购。成品饲料和另加组分不得重复核算成品配方。区分燃料采购、外购电力或热量及包含用能的机械服务，各按实际边界仅计一次。保留原作业、期间、归属及最终产出归一化规则。身份或记录缺失不等于零用量，不提供通用组分范围或编造配方。 `baima-apple-orchard-lca-2024` | kg 产品、kg 养分、kg 活性成分 | 每次施用 | 采收年 | 果园地块 | 每声明的参考流 | 发票、标签、施用日志 |
| cp_irrigation_records | orchard_lifecycle_and_production | 灌溉与取水 | 计量及抽水记录 | 水源；表计；读数；体积；抽水能源；日期；地块 | 校准水表、抽水日志、发票；原始汇总与分配：按水源求和并按验收质量归一化 | m3 和能源单位 | 每次或每月 | 灌溉季 | 地块及水源 | 每声明的参考流 | 校准、读数、发票 |
| cp_energy_records | orchard_lifecycle_and_production | 燃料与电力 | 能源记录 | 作业；机械；能源类型；数量；期间；地块 | 燃料日志、遥测、表计、发票；原始汇总与分配：按作业分配并按验收质量归一化 | L, kg, MJ, kWh | 每次作业或计费期 | 采收年 | 果园地块 | 每声明的参考流 | 发票、表计、设备日志 |
| cp_land_and_output_records | orchard_lifecycle_and_production | 土地及苹果产出 | 地块与采收记录 | 面积；年龄；品种；采收日；毛重；皮重；验收；工业级；次果；生物质；等级；去向 | GIS、校准秤、发运及去向记录；原始汇总与分配：核对产出并按验收质量归一化 | ha, year, kg | 每次采收及年度核对 | 完整采收年 | 地块及门点 | 每声明的参考流 | 地图、校准、票据、等级和去向记录 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_marketable_yield` | 参考产品 | 验收净质量 / 生产面积 | cp_land_and_output_records | kg 验收苹果/ha 及验收比例 | `mass-balance-identity` |
| `annualize_orchard_lifecycle` | 建园与清园 | 采用年龄特定数据或有文件的产量曲线，将可归属生命周期投入除以终生产验收产出 | cp_orchard_lifecycle_records; cp_land_and_output_records | 年化投入/kg 参考产品 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `calculate_water_withdrawal` | 灌溉 | 按水源计量取水 / 验收质量；消耗或水足迹单独报告 | cp_irrigation_records; cp_land_and_output_records | m3 水/kg 参考产品 | `dzikiti-apple-water-footprint-2019` |
| `calculate_direct_soil_n2o` | 肥料氮 | 应用所选 IPCC 层级并以 44/28 将 N2O-N 换算为 N2O | cp_orchard_input_records; 声明因子 | kg N2O/kg 参考产品 | `ipcc-2019-managed-soils-n2o` |
| `reconcile_apple_outputs` | 采收果实 | 验收 + 工业级 + 次果 + 实测损失 = 声明容差内总采收量 | cp_land_and_output_records | 质量平衡和未解释损失 | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_orchard_input_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 声明品种、地块、路线、灌溉、地理、期间、等级、门点和包装状态。 | 元数据、果园及发运记录 |
| `dq_temporal_representativeness` | 多年生生产 | 覆盖完整采收年并披露年龄和产量变异；代表性数据使用最近至少三年或说明单年合理性。 | 带日期采收和投入记录 |
| `dq_mass_balance` | 产出 | 核对采收、验收、工业级、次果和损失；记录皮重和校准。 | 称量记录和核对表 |
| `dq_input_completeness` | 管理 | 对肥料、灌溉、植保、能源、建园、土地、生物质去向和直接排放计量或说明零值/排除。 | 台账、日志、表计、发票 |
| `dq_geographic_representativeness` | 水与能源 | 记录水源、抽水、电力组合、燃料、气候和灌溉状态；引用水范围不得作为默认值。 | 水源记录和地理元数据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认唯一 1 kg 参考流使用已核验 Apple UUID 及所有必需限定词。 | `codex-cxs-299-2010` |
| `validation_scope` | 清单 | 确认建园、幼龄年、生产年、管理、采收、清园和处理已纳入或说明。 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `validation_mass_balance` | 产出 | 确认苹果产出在容差内与采收量核对，且每个非参考产出有去向。 | `mass-balance-identity` |
| `validation_nitrogen` | 肥料与含氮排放 | 确认产品质量与 kg N 不混用；分别核验 N2O、NH3 和硝酸盐的数量、接收介质、方法因子及氮当量质量平衡。按物质质量报告时，分别以 44/28、17/14、62/14 将 N2O-N、NH3-N、nitrate-N 换算。 | `ipcc-2019-managed-soils-n2o`; `mass-balance-identity` |
| `validation_water` | 水流 | 确认取水、输送灌溉水、消耗和水足迹未重复或错标。 | `dzikiti-apple-water-footprint-2019` |
| `validation_allocation` | 共享负荷 | 确认披露果园寿命、产量基准、年化、分配、残余物去向及敏感性。 | `iso-14044-2006` |
| `validation_completeness` | 数据包 | 确认每类要求有数值、有依据零值或排除，超出范围的数值有说明。 | `ucdavis-orchard-lca-findings-2020`; `baima-apple-orchard-lca-2024` |

## 10. 已发布数据集档案

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 品种、地理、路线、灌溉、果园年龄结构、期间、等级和门点匹配的果园门鲜苹果供应 |
| excluded_use | 苗木；主要用于加工的果实；包装场、冷藏、配送、零售、消费或加工产品 |
| required_metadata | 参考 UUID 与限定词；代表果园；地理；品种；路线；灌溉；年龄；生产寿命；期间；产量；验收比例；等级；包装；门点；分配；协议覆盖 |
| required_quality_disclosure | 年份；原始记录覆盖；质量平衡容差；校准；背景代表性；水源；因子；排除；不确定性和敏感性 |
| update_trigger | 品种、路线、水源、年龄模型、产量、验收比例、植保、施肥、能源、生物质去向、门点或代表期发生重大变化 |

## 11. 数据来源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-299-2010` | standard | Codex Alimentarius CXS 299-2010, Standard for Apples, <https://workspace.fao.org/sites/codex/Standards/CXS%20299-2010/CXS_299e.pdf> | 鲜苹果范围、加工排除、品质和可销售性 |
| `goossens-apple-orchard-lca-2017` | literature | Goossens et al., Agricultural Systems 153 (2017) 81-93, <https://doi.org/10.1016/j.agsy.2017.01.007> | 果园生命周期边界、高低产年、体系变异 |
| `baima-apple-orchard-lca-2024` | literature | Baima et al., Heliyon 10 (2024) e38397, <https://doi.org/10.1016/j.heliyon.2024.e38397> | 建园及管理清单、生产寿命建模 |
| `dzikiti-apple-water-footprint-2019` | literature | Dzikiti et al., Agricultural and Forest Meteorology 271 (2019) 135-147, <https://doi.org/10.1016/j.agrformet.2019.02.042> | 实测果园水足迹范围和水量区分 |
| `ucdavis-orchard-lca-findings-2020` | official_guidance | UC Davis SAREP, Orchard Life Cycle Assessment: Findings, <https://sarep.ucdavis.edu/are/energy/lcaorchard-findings> | 过程完整性、生物质去向、灌溉能耗差异 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤 N2O 计算 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级 |
| `mass-balance-identity` | method_factor | 将质量守恒用作 PCR 计算恒等式。 | 产出核对和年化检查 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |

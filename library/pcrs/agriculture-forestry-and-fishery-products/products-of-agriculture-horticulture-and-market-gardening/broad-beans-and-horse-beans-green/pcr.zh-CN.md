---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-green
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 青蚕豆和青马蚕豆

## 1. 范围与适用性

本 PCR 用于鲜食青蚕豆和青马蚕豆（Vicia faba L.）前景数据包，包括以鲜食产品销售的未成熟荚果或未成熟种子。范围覆盖露地和保护地栽培，从申报的苗床或种植单元起始条件开始，经作物建植、作物管理、灌溉、养分和作物保护管理、收获、分级、可选清洗与冷却、初级包装，到申报的农场门或包装场交接点。同一播种所对应的多次采摘在归一化前全部纳入并完成质量平衡。

干的或成熟的蚕豆和马蚕豆、种子生产、芽苗、罐装、冷冻、干燥、烹煮、发酵、碾磨、调制、零售、消费者储存和使用不在默认范围内。苗圃生产、耐久灌溉或保护地基础设施、土地利用变化、机械制造和出场后的运输不纳入，除非单独分配并披露。田间残体、次品、降级产品、清洗水和包装废弃物在申报去向或交接被记录前仍属于前景系统。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-green` |
| classification_refs | CPC 3.0 `01243`，Broad beans and horse beans, green; mapping relation: exact |
| covered_products | 处于申报成熟度、品种组、等级、水分、清洗、冷却和初级包装状态的鲜食整荚或去荚青蚕豆和青马蚕豆 |
| excluded_products | 干的或成熟的蚕豆和马蚕豆、种子生产、芽苗、保存或加工产品、下游零售和消费、资本品、土地利用变化及出场后服务 |
| representative_product | 符合申报成熟度、荚果或种子形态、大小、颜色、嫩度、洁净度、等级和缺陷标准的可销售鲜青蚕豆或青马蚕豆 |
| production_route | 播种或种植的露地或保护地栽培；作物建植；灌溉、养分和作物保护管理；多次收获；分级；可选清洗、冷却和初级包装 |
| market_state | 申报农场门或包装场交接点的新鲜未加工青蚕豆或青马蚕豆，可为散装或申报的初级包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 申报农场门或包装场交接点的可销售鲜青蚕豆和青马蚕豆 |
| How much | 1,000 kg |
| How well | 处于申报荚果或去荚形态、成熟度、品种组、大小、颜色、嫩度、洁净度、等级、水分和包装状态的新鲜未加工蚕豆或马蚕豆 |
| How long or cycle | 一个申报作物周期和完整收获批次；同一播种的所有采摘在归一化前完成质量平衡 |
| reference_flow_link | marketable_green_broad_beans |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 青蚕豆和马豆 `2a6f5664-5fda-45e8-81c2-989d822b3417` |
| 参考流属性 | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理位置；露地或保护地路线；品种或品种组；荚果或去荚形态；播种或种植日期；收获日期和采摘轮次；成熟度、大小、颜色、嫩度、等级和缺陷标准；灌溉水源和方式；肥料产品和养分基准；作物保护方案；清洗和冷却状态；包装状态；残体、拒收品和降级产品去向；以及申报交接点 |



构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_broad_bean_mass` | 参考流和输出流 | Mass | kg | 分别称量收获、可销售、降级、拒收、残体和损失流，并在归一化前完成质量平衡。 |
| `crop_cycle_normalization` | 田块和保护地单元记录 | Area and mass | ha and kg | 按田块、畦或保护地单元记录投入和采摘轮次，并归一化到同一申报作物周期的可销售输出。 |
| `nutrient_product_and_n_basis` | 养分投入 | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | 分别记录配方产品质量和有文件依据的养分浓度；复合产品在多个养分角色之间不得重复计量。 |
| `water_delivery_basis` | 灌溉、施肥灌溉、清洗和取水 | Volume | m3 | 区分作物供水、施肥灌溉载水、收获后清洗水和自然资源取水，并披露计量或水量平衡基准。 |
| `harvest_grade_reconciliation` | 多次采摘和分级 | Mass and grade | kg and declared fraction | 保留每个采摘轮次、总收获量、合格输出、降级产品、拒收品和损失，使申报等级可复现。 |
| `postharvest_mass_change` | 清洗、冷却和包装 | Mass and moisture | kg and declared fraction | 将测量的去土、吸水、冷却损失、皮重和包装损失与作物收获质量分开保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收青蚕豆或青马蚕豆种子或种植材料的整备田畦或保护地单元，并披露前期土地利用及排除的基础设施作业 |
| starting_condition_role | 申报青蚕豆和青马蚕豆作物周期及前景投入核算的起点 |
| product_classification_scope | CPC 3.0 `01243`，Broad beans and horse beans, green，至申报农场门或包装场交接点 |
| recursive_input_rule | 青蚕豆和青马蚕豆种子及种植材料按接收交接状态记录并链接上游数据集；本 PCR 不重建其生产。 |
| upstream_dataset_requirement | 当种子、养分产品、作物保护产品、供水、燃料、电力、包装、运输和废物处理服务跨越边界时，使用上游数据集。 |
| disclosure | 申报地理位置、路线、品种组、荚果或去荚形态、种植密度、作物周期日期、灌溉水源和方式、肥料产品和养分基准、作物保护方案、采摘轮次、可销售产量、降级和拒收产品、残体、清洗和冷却、包装、废物去向及交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和作物管理 | 纳入申报作物周期可归属的整地、种植、作物管理、灌溉、养分和作物保护以及直接作物排放；披露前期土地利用并排除无关基础设施。 | `fao-good-agricultural-practices` |
| `boundary_repeated_picking` | 收获批次 | 将同一播种的所有采摘轮次归属于同一作物周期，并平衡可销售、降级、拒收、损失和残体流。 | `unece-ffv-06-beans`；`mass-balance-identity` |
| `boundary_gate_conditioning` | 收获和出场前调理 | 默认前景边界止于申报农场门或包装场交接点。只有在交接点之前发生时，才纳入分级、清洗、冷却、初级包装和出场前运输。 | `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | 残体、次品和包装废弃物 | 对每种残体记录还田、堆肥、饲料利用、处理、运输或处置。没有有文件依据的接收方、用途、质量和交接时，不得分配共产品信用。 | `iso-14044-2006`；`mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 青蚕豆和青马蚕豆作物建植 | required | 每个申报播种、种植、畦或保护地单元 | 前景作物建植 | 种植面积、种植材料和作物周期日期 |
| `crop_management` | 青蚕豆和青马蚕豆作物管理 | required | 每个申报作物周期 | 前景管理生物生产 | 管理面积、水、养分和保护投入及完整收获批次 |
| `harvest_and_gate_preparation` | 青蚕豆和青马蚕豆收获与出场准备 | required | 每个申报收获批次和出场前处理路线 | 前景收获、分级、调理、包装和交接 | 1,000 kg 可销售鲜产品输出 |

### 过程：青蚕豆和青马蚕豆作物建植（`crop_establishment`）

#### 输入
##### 产品流

###### 青蚕豆或青马蚕豆种子（`planting_material_input`）

记录进入每个申报田块或保护地单元的种子或其他种植材料，包括批次、品种组、播种日期，以及材料是购买还是留种。

- 选定流: 青蚕豆或青马蚕豆种子或种植材料
- 流属性/单位: Mass or viable seed count / kg or seed
- 数量规则: 按田块、畦或保护地单元记录供应商批次质量或播种的有效种子数。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_establishment_records`
- 来源: `fao-good-agricultural-practices`
- 数量范围: 种植材料筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.5
  - 上限: 80
  - 单位: kg seed/1,000 kg output
  - 基准: 申报种植面积和作物周期输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 建植灌溉水（`establishment_irrigation_water`）

记录整地和出苗建植期施用的水量，并区分水源和施用方式。

- 选定流: 供应给作物的灌溉水
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation_records`
- 来源: `fao-crop-evapotranspiration-56`
- 数量范围: 建植灌溉筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: m3/ha
  - 基准: 从播种至群体整齐建立
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 青蚕豆和青马蚕豆生产占用土地（`crop_land_occupation`）

记录申报作物周期占用的田块或保护地单元，并将作物占用与耐久基础设施区分。

- 选定流: 农业土地占用
- 流属性/单位: Area-time / ha*a
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_area_cycle_records`
- 来源: `fao-good-agricultural-practices`
- 数量范围: 面积—输出筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.01
  - 上限: 1.0
  - 单位: ha/1,000 kg output
  - 基准: 申报作物面积和可销售作物周期输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 输出
##### 产品流

##### 废物流

##### 基本流


### 过程：青蚕豆和青马蚕豆作物管理（`crop_management`）

#### 输入
##### 产品流

###### 青蚕豆和青马蚕豆作物灌溉与施肥灌溉用水（`crop_irrigation_water`）

记录同一作物周期内送达田间的灌溉及施肥灌溉用水，区分降雨、水源、施用方式和回流水。

- 选定流：供应作物的灌溉用水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
原始活动或阶段基准：per 1,000 kg marketable fresh green broad-bean output.

- 归一化基准：每声明的参考流
- 基准类型：Process output (`process_output`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：Crop irrigation screening interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：6,000
  - 单位：m3/ha
  - 基准：complete green-broad-bean crop cycle
  - 基准类型：Crop cycle (`crop_cycle`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### 尿素肥料（`crop_management_agricultural_nutrient_inputs_urea`）

**crop_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-fertilizer-code-conduct`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`crop_management_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-fertilizer-code-conduct`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`crop_management_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-fertilizer-code-conduct`；`fao-fertilizer-identities`

###### 氯化钾肥料（`crop_management_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-fertilizer-code-conduct`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`crop_management_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-fertilizer-code-conduct`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`crop_management_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-fertilizer-code-conduct`；`fao-organic-nutrients`

###### 田间电力（`field_electricity_input`）

当泵、施肥灌溉控制、保护地或其他田间设备用电跨越边界时记录。

- 选定流: 供应给农业作业的电力
- 流属性/单位: Energy / kWh
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: `fao-good-agricultural-practices`
- 数量范围: 田间电力筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1,500
  - 单位: kWh/ha
  - 基准: 完整作物周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 从自然资源取用的水（`irrigation_water_withdrawal`）

将水源取用量与输送给作物的水量分开记录，并识别水源、计量、回流水和分配基准。

- 选定流: 水资源取用
- 流属性/单位: Volume / m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation_records`
- 来源: `fao-crop-evapotranspiration-56`

#### 输出
##### 产品流

##### 废物流

###### 田间作物残体（`crop_residue_output`）

记录离开管理生产节点的茎、叶、荚和其他作物残体，并申报其还田、堆肥、饲料利用、处理或处置去向。

- 选定流: 青蚕豆和青马蚕豆作物残体
- 流属性/单位: Mass / kg dry or as-received
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue_fate_records`
- 来源: `fao-good-agricultural-practices`

##### 基本流

###### 排入空气的氨（`air_ammonia_emission`）

使用申报的氮排放方法记录或计算与养分施用和管理残体有关的氨排放。

- 选定流: 排入空气的氨
- 流属性/单位: Mass / kg NH3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

最终交换质量为 kg NH3；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 17/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 排入空气的一氧化二氮（`air_nitrous_oxide_emission`）

记录或计算氮投入和残体路径产生的直接及适用间接一氧化二氮排放，避免重复计量。

- 选定流: 排入空气的一氧化二氮
- 流属性/单位: Mass / kg N2O
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

最终交换质量为 kg N2O；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 44/28，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 燃烧产生的氮氧化物（`air_nox_emission`）

当有燃料使用记录和适用排放因子方法时，记录申报燃烧设备产生的氮氧化物。

- 选定流: 排入空气的氮氧化物
- 流属性/单位：Mass / kg NOx on the documented method reporting basis
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2006-guidelines-energy`

明确保留NOx的方法报告口径。已按NO2当量质量给出的因子保持该口径并匹配兼容NOx身份，不改称实测纯NO或纯NO2。实际分别报告NO、NO2质量时，分别保留身份，或仅按明示摩尔口径换为NO2当量（NO质量×46/30加NO2质量）一次；合计与组成不得重复相加。气体体积观测须有物质浓度及匹配温压、湿干口径后才可换算质量，整股尾气体积不是污染物质量。缺少报告口径会阻止最终交换。

###### 排入水体的硝酸盐（`water_nitrate_emission`）

只有在有场址监测或申报养分损失计算方法支持时，才记录进入受纳水体的硝酸盐损失。

- 选定流: 排入水体的硝酸盐
- 流属性/单位: Mass / kg NO3-
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

最终交换质量为 kg NO3-；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 62/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 排入水体的磷酸盐（`water_phosphate_emission`）

只有在有监测或有证据支持的养分损失方法时，才记录进入受纳水体的磷酸盐损失。

- 选定流: 排入水体的磷酸盐
- 流属性/单位: Mass / kg PO4
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

最终交换质量为 kg PO4；按 P 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 P 质量乘 95/31，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 排入土壤的硝酸盐（`soil_nitrate_emission`）

只有所选方法将其定义为基本流且氮平衡支持该数值时，才记录进入或损失于土壤的硝酸盐。

- 选定流: 排入土壤的硝酸盐
- 流属性/单位: Mass / kg NO3-
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

最终交换质量为 kg NO3-；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 62/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 排入土壤的磷酸盐（`soil_phosphate_emission`）

只有所选方法将其定义为基本流且磷平衡支持该数值时，才记录进入或损失于土壤的磷酸盐。

- 选定流: 排入土壤的磷酸盐
- 流属性/单位: Mass / kg PO4
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

最终交换质量为 kg PO4；按 P 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 P 质量乘 95/31，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

### 过程：青蚕豆和青马蚕豆收获与出场准备（`harvest_and_gate_preparation`）

#### 输入
##### 产品流

###### 分级前收获的青蚕豆和青马蚕豆（`harvested_green_broad_beans`）

记录进入收获和出场准备节点、尚未分选、分级、清洗、冷却或包装的全部可食荚果或未成熟种子收获量。

- 选定流: 分级前收获的青蚕豆和青马蚕豆
- 流属性/单位：Mass / kg
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`; `codex-fresh-produce-hygiene`
- 数量范围: 收获量—可销售输出筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1,050
  - 上限: 3,000
  - 单位: kg harvested/1,000 kg marketable output
  - 基准: 完整收获批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

最终交换量为实际鲜材料质量kg。料箱/散装体积仅保留为原始观测，须有代表性批次堆积密度证据才可换算，不能把m3当kg或将两种表示重复相加。保留原批次、去向和最终参考量归一化。

###### 收获后清洗水（`postharvest_washing_water`）

记录申报出场点前用于清洗或冲洗收获青蚕豆和青马蚕豆的水量，包括水源、回用、处理和排放。

- 选定流: 收获后清洗使用的工艺水
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_records`
- 来源: `codex-fresh-produce-hygiene`
- 数量范围: 清洗水筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: m3/1,000 kg output
  - 基准: 申报出场前清洗作业
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收获后冷却电力（`postharvest_cooling_electricity`）

记录申报产品出场前强制通风、冷库或其他冷却所用电力，并与出场后的储存分开。

- 选定流: 供应给收获后冷却的电力
- 流属性/单位: Energy / kWh
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: `codex-fresh-produce-hygiene`

###### 出场前公路货运服务（`pre_gate_road_transport`）

当田地、包装场所和申报出场点之间的运输位于前景边界内时，使用货运质量和距离记录公路货运。

- 选定流: 公路货运服务
- 流属性/单位: Mass-distance / t*km
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_transport_records`
- 来源: `codex-fresh-produce-hygiene`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 可销售鲜青蚕豆和青马蚕豆（`marketable_green_broad_beans`）

记录分级以及出场前清洗、冷却和包装后的申报可销售输出，并保留等级、成熟度、洁净度和包装状态。

- 选定流：青蚕豆和马豆 `2a6f5664-5fda-45e8-81c2-989d822b3417`
- 流属性/单位：质量 / kg

原参考状态单位说明：Mass or volume / kg or m3

原始产出计量与核对要求：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。

- 数量规则：1000 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`; `codex-fresh-produce-hygiene`

###### 降级但可能可利用的青蚕豆和青马蚕豆（`downgraded_green_broad_beans`）

记录不符合主要市场等级、但转用于申报的次级用途、销售、饲料、加工或其他有文件依据交接的产品。

- 选定流: 降级青蚕豆和青马蚕豆
- 流属性/单位：Mass / kg
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`

最终交换量为实际鲜材料质量kg。料箱/散装体积仅保留为原始观测，须有代表性批次堆积密度证据才可换算，不能把m3当kg或将两种表示重复相加。保留原批次、去向和最终参考量归一化。

##### 废物流

###### 拒收荚果、种子和收获损失（`rejected_green_broad_beans`）

将不可销售产品和收获损失与可销售产品及有文件依据的次级输出分开记录，并申报其去向。

- 选定流: 拒收或损失的青蚕豆和青马蚕豆
- 流属性/单位：Mass / kg
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`

最终交换量为实际鲜材料质量kg。料箱/散装体积仅保留为原始观测，须有代表性批次堆积密度证据才可换算，不能把m3当kg或将两种表示重复相加。保留原批次、去向和最终参考量归一化。

###### 修整物和有机包装残体（`trim_and_residue_waste`）

记录分级或包装过程中去除的茎、荚片、土壤和其他有机固体，并申报其再利用、堆肥、处理或处置。

- 选定流: 青蚕豆和青马蚕豆有机处理残体
- 流属性/单位：Mass / kg
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue_fate_records`
- 来源: `codex-fresh-produce-hygiene`

最终交换量为实际鲜材料质量kg。料箱/散装体积仅保留为原始观测，须有代表性批次堆积密度证据才可换算，不能把m3当kg或将两种表示重复相加。保留原批次、去向和最终参考量归一化。

###### 收获后清洗废水（`postharvest_wastewater`）

记录清洗或调理过程排出的废水，并申报处理、排放、回用以及测量或计算的污染物负荷。

- 选定流: 收获后清洗产生的废水
- 流属性/单位: Volume / m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_records`
- 来源: `codex-fresh-produce-hygiene`

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_intended_outputs` | 可销售和降级输出 | 在每个交接点列出可销售输出以及有意转移的所有降级或次级输出。对共享投入和负荷一致地采用一种申报的归属方法。 | `iso-14044-2006`；`unece-ffv-06-beans` |
| `allocation_rejects_are_waste` | 拒收产品和残体 | 除非有文件依据的接收方、用途、质量和交接证明其具有共产品功能，否则将拒收产品和残体作为废物或残体处理。 | `iso-14044-2006` |
| `allocation_reusable_packaging` | 周转箱和托盘 | 按有文件依据的使用周期和回收损失分摊可重复使用周转箱和托盘；没有证据时不得将全部负荷分配给一次运输。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_product_specific_input` | `cp_crop_protection_records` | 作业 crop_management：记录施用于作物的每种作物保护产品或有效成分，包括用量、时间、靶标和施用方式；在核实前其身份保持场址特定。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 |
| `primary_crate_or_pallet_specific_input` | `cp_packaging_records` | 作业 harvest_and_gate_preparation：记录跨越出场边界的主要周转箱或托盘服务，包括材料、质量、重复使用次数、所有权和回收路线。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 |
| `carton_packaging_input_specific_input` | `cp_packaging_records` | 作业 harvest_and_gate_preparation：记录申报出场前投入的纸箱或盒装包装，并在其申报使用寿命内分摊可重复使用包装。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 |
| `flexible_packaging_input_specific_input` | `cp_packaging_records` | 作业 harvest_and_gate_preparation：记录跨越申报出场边界的薄膜、袋、内衬或其他柔性初级包装，包括聚合物类型和质量。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | crop_establishment | planting_material_input | 供应商和田间记录 | 批次；品种；种子质量或数量；播种日期；田块或单元 | 对账单和种植日志核对；原始汇总与分配：按申报作物周期求和 | kg 或 seed | 每次种植事件 | 完整作物周期 | 田块、畦或保护地单元 | 每声明的参考流 | 批次记录和种植日志完整性 |
| `cp_area_cycle_records` | crop_establishment | crop_land_occupation | 田间登记 | 面积；占用日期；基础设施标识 | 田块或保护地单元登记；原始汇总与分配：按周期计算面积时间 | ha 和日期 | 每个作物周期 | 完整作物周期 | 田块或单元 | 每声明的参考流 | 有日期的面积记录 |
| `cp_irrigation_records` | crop_establishment; crop_management | irrigation and withdrawal | 计量或水量平衡 | 水源；计量；供水；取水；方式；回用；排放 ；期初/期末累计读数、时间、水表位置/单位/回零、外部流入和回水、输配损失、期初/期末蓄水，田间排水单列 | 计量读数或有文件依据的平衡；原始汇总与分配：按水源和周期求和 ；按水量计算规则分别核对供水管网与田间边界。 | m3 | 每次灌溉或每月 | 完整作物周期 | 田块或单元 | 每声明的参考流 | 计量校准或平衡检查 |
| `cp_nutrient_records` | crop_management | nutrient inputs | 发票、标签、计划和施用日志 | 产品；质量；养分浓度；日期；田块；方式 | 供应商记录与施用日志核对；原始汇总与分配：按养分角色和周期求和 | kg product 和 kg nutrient | 每次施用 | 完整作物周期 | 田块或单元 | 每声明的参考流 | 标签、供应商规格或实验室结果 |
| `cp_crop_protection_records` | crop_management | crop-protection product | 施用日志 | 产品；有效成分；用量；靶标；日期；面积；方式 | 审查施用日志；原始汇总与分配：按产品和周期求和 `crop_protection_product_specific_input`: 作业 crop_management：记录施用于作物的每种作物保护产品或有效成分，包括用量、时间、靶标和施用方式；在核实前其身份保持场址特定。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg product 或 active substance | 每次施用 | 完整作物周期 | 田块或单元 | 每声明的参考流 | 产品标签和施用记录 |
| `cp_energy_records` | crop_establishment; crop_management; harvest_and_gate_preparation | fuel and electricity | 计量、发票或设备日志 | 燃料或电力；设备；日期；作业；数量 | 计量或活动日志；原始汇总与分配：分配至作业和输出 `establishment_machinery_fuel_specific_input`: 当拖拉机或其他移动机械燃料跨越前景边界时，记录整地和播种所用燃料。 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 这是必需的具体投入采集要求，不是选定交换。按原始记录识别每种实际配方产品、载能体或独立供应服务，保留物理身份、状态、原生数量及供应商规格。完成数据集前，每种实际投入须单独建立具体卡片，核验兼容UUID或明确保留未解析身份。产品质量与所含有效成分质量是不同台账，仅凭有记录的组成换算，不将两者重复作为两次采购。成品饲料和另加组分不得重复核算成品配方。区分燃料采购、外购电力或热量及包含用能的机械服务，各按实际边界仅计一次。保留原作业、期间、归属及最终产出归一化规则。身份或记录缺失不等于零用量，不提供通用组分范围或编造配方。 `fao-good-agricultural-practices` `harvest_machinery_fuel_specific_input`: 当收获、田间装载和出场前处理设备燃料跨越申报边界时记录。 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 这是必需的具体投入采集要求，不是选定交换。按原始记录识别每种实际配方产品、载能体或独立供应服务，保留物理身份、状态、原生数量及供应商规格。完成数据集前，每种实际投入须单独建立具体卡片，核验兼容UUID或明确保留未解析身份。产品质量与所含有效成分质量是不同台账，仅凭有记录的组成换算，不将两者重复作为两次采购。成品饲料和另加组分不得重复核算成品配方。区分燃料采购、外购电力或热量及包含用能的机械服务，各按实际边界仅计一次。保留原作业、期间、归属及最终产出归一化规则。身份或记录缺失不等于零用量，不提供通用组分范围或编造配方。 `fao-good-agricultural-practices` | L 或 kWh | 每次作业或每月 | 完整作物周期 | 田块或设施 | 每声明的参考流 | 发票、计量或设备记录 |
| `cp_emission_calculation` | crop_management | elementary emissions | 计算工作表 | 养分投入；燃料；方法；因子；结果 | 申报方法和可复现工作表；原始汇总与分配：按过程和输出计算 | kg substance | 每个作物周期 | 完整作物周期 | 田块或单元 | 每声明的参考流 | 有版本的方法和输入追溯 |
| `cp_residue_fate_records` | crop_management; harvest_and_gate_preparation | residues and rejects | 质量平衡和交接记录 | 流；质量；水分；去向；接收方；日期 | 地磅、日志和交接记录；原始汇总与分配：按流和去向平衡 | kg | 每次收获或处理事件 | 完整作物周期 | 田块或设施 | 每声明的参考流 | 称量记录和接收方证据 |
| `cp_harvest_grade_records` | harvest_and_gate_preparation | harvest and output grades | 收获和分级日志 | 采摘日期；总量；等级；拒收；降级；输出；损失 | 称重单和分级记录；原始汇总与分配：按轮次和交接点求和 | kg | 每个采摘轮次 | 完整收获批次 | 田块和包装场 | 每声明的参考流 | 秤校准和等级记录 |
| `cp_washing_records` | harvest_and_gate_preparation | washing and wastewater | 水表和排放记录 | 水；回用；去土；废水；处理；排放 | 计量、批次日志和处理记录；原始汇总与分配：按批次和交接点求和 | m3 和 kg | 每批 | 完整出场前处理 | 包装场 | 每声明的参考流 | 计量或处理记录 |
| `cp_packaging_records` | harvest_and_gate_preparation | packaging and packaging waste | 采购和包装记录 | 材料；质量；使用次数；损坏；废弃物；回收 | 包装台账和包装日志；原始汇总与分配：按产品质量和使用寿命分配 `primary_crate_or_pallet_specific_input`: 作业 harvest_and_gate_preparation：记录跨越出场边界的主要周转箱或托盘服务，包括材料、质量、重复使用次数、所有权和回收路线。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `carton_packaging_input_specific_input`: 作业 harvest_and_gate_preparation：记录申报出场前投入的纸箱或盒装包装，并在其申报使用寿命内分摊可重复使用包装。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `flexible_packaging_input_specific_input`: 作业 harvest_and_gate_preparation：记录跨越申报出场边界的薄膜、袋、内衬或其他柔性初级包装，包括聚合物类型和质量。 原数量方法：根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `packaging_waste_specific_output`: 记录申报出场前产生的破损、拒收或裁切初级包装，并区分供应商回收和废物处理。 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。 `codex-fresh-produce-hygiene` | kg | 每批或每月 | 完整出场前处理 | 包装场 | 每声明的参考流 | 供应商规格和废物记录 |
| `cp_transport_records` | harvest_and_gate_preparation | pre-gate road freight | 运输记录 | 起点；终点；距离；货运质量；车辆 | 运输记录和路线距离；原始汇总与分配：按路线和周期求和 | t*km | 每批运输 | 完整出场前处理 | 田地至交接点 | 每声明的参考流 | 发运记录和距离基准 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_normalization` | 所有过程 | 按 1,000 kg 可销售输出归一化：记录流量 / 可销售输出 × 1,000。 | 流质量；可销售输出 | 归一化流量 | `mass-balance-identity` |
| `calc_nutrient_equivalent` | 养分投入 | 产品质量 × 有文件依据的养分比例；将产品值和养分值作为分开字段保留。 | 产品质量；N、P2O5、K2O 或有机养分比例 | 养分当量 | `fao-fertilizer-code-conduct` |
| `calc_area_time` | 土地占用 | 面积 × 占用时长；纳入保护地结构时单独报告。 | 面积；日期 | ha*a | `fao-good-agricultural-practices` |
| `calc_irrigation_balance` | 灌溉和取水 | 逐个识别累计水表，期间水量 = 期末读数 - 期初读数，仅按有文件的回零、溢出及水表单位修正；保留两端读数、时间和水表位置。不同测点的源头总取水 W 与供水 D 分开保留。供水管网边界满足 W + 其他外部流入 = D + 向边界外的回水或排放 + 输配损失 + 期末蓄水 - 期初蓄水。边界内循环水相互抵销，不是新增取水，也不直接从总取水扣减。田间排水另属田间水量平衡，不得再次加到已经计量的供水量上。保留实测值并调查差额；缺读数不能推断零用水。 | 计量读数；取水；回流；回用 | m3 供水量和 m3 取水量 | `fao-crop-evapotranspiration-56` |
| `calc_grade_balance` | 收获和出场准备 | 在一致水分基准下，总收获量 = 可销售 + 降级 + 拒收 + 残体 + 测得的处理损失。 | 等级记录；损失记录 | 平衡后的输出集合 | `mass-balance-identity` |
| `calc_reusable_packaging` | 周转箱和托盘 | 包装质量 / 有文件依据的使用周期，并将回收损失分配至适用运输批次。 | 包装质量；使用周期；损失 | 每批包装量 | `iso-14044-2006` |
| `calc_nitrogen_emissions` | 土壤和空气排放 | 对有文件依据的养分投入和残体去向采用一种申报的、兼容 IPCC 的氮方法，并保留因子和中间值。 | 养分投入；残体去向；因子 | 氮排放流 | `ipcc-2019-refinement-nitrogen` |
| `calc_freight` | 出场前运输 | 货运质量 × 路线距离，并披露空返和分配处理。 | 质量；距离；路线 | t*km | `codex-fresh-produce-hygiene` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_emission_calculation`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 参考流和库存流 | 使用证据支持的最窄流身份；明确保留身份证据缺口，不得用邻近产品替代。 | 流描述、交接点、类型和映射审查 |
| `quality_measurement` | 质量、体积、面积、电力和养分数据 | 优先采用校准秤、计量器、供应商文件、实验室结果和可复现计算。 | 校准、发票、标签、实验室或工作表 |
| `quality_temporal` | 作物周期记录 | 覆盖完整申报播种和收获批次，并披露缺失期间。 | 有日期的田间、收获和施用日志 |
| `quality_geographic` | 生产单元 | 识别国家或地区以及田块、畦、保护地单元或包装场范围。 | 位置登记和场址元数据 |
| `quality_completeness` | 所有库存过程 | 将有意输出、拒收品、残体、废水、包装废弃物和损失与参考输出完成平衡。 | 质量平衡工作表 |
| `quality_nutrient` | 养分和排放计算 | 保留产品配方、养分基准、施用事件、方法、因子和中间结果。 | 标签、计划、实验室和计算记录 |
| `quality_boundary` | 交接点和上游投入 | 披露交接点、上游数据集链接、处理状态、包装状态和排除项。 | 数据集元数据和过程说明 |
| `quality_uncertainty` | 范围和估算 | 分开标记场址记录、计算值、外部范围和暂定估算。 | 数值来源模式和证据类型字段 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | 参考流 | 要求 1,000 kg 质量基准、kg 单位、完整限定信息，并在下游使用前使参考流身份已解析或明确标记为证据缺口。 | `iso-14044-2006` |
| `validate_cycle_balance` | 所有作物周期过程 | 当种植面积、作物周期日期、采摘轮次和可销售输出无法平衡时，拒绝数据包。 | `mass-balance-identity` |
| `validate_nutrient_basis` | 养分投入 | 要求产品质量、养分浓度、施用日期和田块或单元范围；没有有文件依据的养分基准时拒绝换算。 | `fao-fertilizer-code-conduct` |
| `validate_water_separation` | 灌溉、取水和清洗 | 在适用时要求分别记录作物供水、自然资源取水、清洗、回用和排放。 | `fao-crop-evapotranspiration-56`；`codex-fresh-produce-hygiene` |
| `validate_grade_reconciliation` | 收获和出场准备 | 要求可销售、降级、拒收、残体和损失流的质量总量，并要求每种非销售流有申报去向。 | `unece-ffv-06-beans` |
| `validate_emission_method` | 基本流排放 | 要求申报一种氮排放和燃烧排放方法，并防止产品、土壤、水体和空气流之间重复计量。 | `ipcc-2019-refinement-nitrogen` |
| `validate_gate_disclosure` | 参考流和边界 | 要求在数据集下游使用前披露交接点、处理状态、包装状态和出场前服务。 | `codex-fresh-produce-hygiene` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鲜青蚕豆和青马蚕豆前景农业生产数据集 |
| downstream_use | 用于申报农场门或包装场交接点之前产品系统研究的 secondary dataset 和 background dataset |
| allowed_use | 当路线、作物周期、交接点、等级和输出平衡已披露时，建模鲜青蚕豆或青马蚕豆生产 |
| excluded_use | 干豆生产、加工食品、种子生产、零售和消费，或无法识别路线和交接点的场址 |
| required_metadata | PCR id；CPC 参考；生产地理位置；路线；作物周期日期；品种组；荚果或去荚形态；产量；等级；水；养分；作物保护；能源；包装；残体去向；以及交接点 |
| required_quality_disclosure | 采摘轮次和质量平衡完整性；计量基准；养分和排放方法；时间和地理覆盖；以及暂定范围 |
| update_trigger | 路线、作物保护、灌溉、养分、分级、包装、交接点或证据发生重大变化，或出现新的经审查具体流身份核验 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO，良好农业实践和可持续作物生产指南 | 作物周期、投入、路线和边界记录 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO 灌溉与排水文件 56，《作物蒸散》 | 灌溉计划和水量平衡 |
| `fao-fertilizer-code-conduct` | official_guidance | FAO，《肥料可持续使用和管理国际行为守则》 | 肥料产品和养分基准记录 |
| `fao-international-code-pesticide-management` | official_guidance | FAO 和 WHO，《农药管理国际行为守则》 | 植保产品和施用记录 |
| `ipcc-2006-guidelines-energy` | method_factor | IPCC 2006 国家温室气体清单指南，能源和燃烧方法 | 燃料和能源排放计算 |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC 2019 年对 2006 指南的完善，农业土壤和氮排放 | 管理土壤氮排放计算 |
| `unece-ffv-06-beans` | standard | UNECE FFV-06，豆类上市和商业质量控制标准 | 成熟度、等级和采收质量限定 |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius CXC 53，《新鲜水果和蔬菜卫生操作规范》 | 清洗、冷却、包装和卫生要求 |
| `iso-14044-2006` | standard | ISO 14044:2006，《环境管理—生命周期评价—要求与指南》 | 分配和数据质量规则 |
| `mass-balance-identity` | method_factor | PCR 方法规则：申报质量流的守恒与平衡 | 归一化、输出核对和损失检查 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |

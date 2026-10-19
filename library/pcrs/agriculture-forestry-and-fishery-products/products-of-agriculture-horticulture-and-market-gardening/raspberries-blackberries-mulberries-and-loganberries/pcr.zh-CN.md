---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 覆盆子、黑莓、桑葚和罗甘莓

## 1. 适用范围

本候选 PCR 覆盖新鲜覆盆子、黑莓、桑葚和罗甘莓从作物管理、采收到农场交货或首个可销售出口前的初级调理、分级和发运。适用于已声明的露地、保护地和多年生系统。不包括苗木、零售、消费者使用以及冷冻、干燥、果汁、果酱或葡萄酒加工。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries |
| classification_refs | CPC 3.0 / 01353; mapping relation: exact |
| covered_products | 新鲜覆盆子、黑莓、桑葚和罗甘莓 |
| excluded_products | 加工产品；苗木和繁殖材料 |
| representative_product | 已声明物种、品种和等级的可销售新鲜浆果 |
| production_route | 受管理生物生产 → 采收 → 初级调理 → 分级/排序 → 发运 |
| market_state | 声明出口状态下的新鲜可销售产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明出口处的可销售新鲜浆果 |
| How much | 1 kg |
| How well | 声明物种、品种、系统、季节、质量等级、状态和可销售产量定义 |
| How long or cycle | 一个声明的生产季；披露多年生建植和跨年度归属 |
| reference_flow_link | marketable_berries |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| 参考产品流 | 覆盆子、黑莓、桑葚和罗甘莓 `562e96d5-9c9f-4b90-877c-b2ebf33c87cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；品种；生产系统；采收季；质量等级；可销售产量；出口状态；分配基础；作物年龄或建植处理 |

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `rule_mass_reference` | reference product | Mass | kg | 将结果归一化为声明出口处 1 kg 可销售新鲜产品。 |
| `rule_yield_basis` | yield and inventory | Mass | kg fresh product | 使用称量的可销售产量，并单独披露已采收但被拒收的量和田间损失。 |
| `rule_nutrient_basis` | fertilizer and soil amendment | Product mass and nutrient mass where available | kg product; kg nutrient | 记录实际产品及 N/P/K 基准，不得替换为未标识的通用肥料产品。 |
| `rule_perennial_attribution` | perennial inputs | Mass, area or time | kg, ha, year | 将建植和共享植株投入按声明生产期分配，并披露基础。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好声明季节生产的露地或保护地单元；采购投入在经营者接收时进入 |
| starting_condition_role | 前景从作物群管理开始，在农场交货或首个可销售出口结束 |
| product_classification_scope | 新鲜覆盆子、黑莓、桑葚和罗甘莓；由语义范围决定纳入 |
| recursive_input_rule | 按实际来源和声明的系统边界区分同类别水果投入。已纳入同一产品系统的过程之间的转移属于内部转移：保留实物数量并连接供给过程，不重复计算其生产负担。从所建模系统外购买或以其他方式接收的水果属于外部产品投入，必须连接兼容的上游数据集；不能仅因类别相同就视为内部转移。同类别递归在有记录的上游交接处停止，不得以将上游负担设为零的方式停止。 |
| upstream_dataset_requirement | 对于外部同类别水果，要求有记录的上游数据集与物种及产品身份、鲜果状态、生产路线和交接出口相匹配，并披露地域和时间代表性。核对上游已覆盖活动与接收方前景过程，避免遗漏或重复计算生产、调理及运输。对电力、燃料、肥料、改良剂、包装、供水和外购服务使用单独记录的背景数据集。缺失上游证据应明确列为完整性缺口，不得据此假定为内部转移或零负担。 |
| disclosure | 声明土地及设施、作物年龄、季节、出口、产量、损失、灌溉、养分产品、包装及排除项；对同类别投入记录内部或外部来源、供应商或供给过程、批次及数量、交接出口、上游数据集及其覆盖活动，以及尚未解决的上游证据缺口。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | all datasets | 纳入作物管理至发运；排除下游加工和零售。 | `fao-gap-framework-2003` |
| `boundary_perennial` | perennial systems | 披露建植和生产期归属，不得默认为单一季节承担全部建植负荷。 | `fao-gap-framework-2003` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `process_crop_establishment` | 作物建植和植株维护 | conditional | 有建植、补植或多年生管理时纳入 | biological production | 面积和生产期 |
| `process_crop_management` | 季节性作物管理 | required | 始终纳入 | biological production | 季节和可销售 kg |
| `process_harvest` | 采收和田间捕获 | required | 始终纳入 | harvest capture | 采收和可销售质量 |
| `process_conditioning_grading` | 初级调理和分级 | conditional | 出口前有清洗、冷却、排序或包装时纳入 | primary conditioning | 发运 kg |
| `process_reject_routing` | 拒收、损失和副产品去向 | conditional | 有不可销售浆果或副产品时纳入 | attribution and waste routing | 质量平衡 |

每个过程均按方向（`Inputs`、`Outputs`）和流类型（`Product flows`、`Waste flows`、`Elementary flows`）报告。每行均为 flow card，含 `row_id`、流身份、流属性/单位、数量规则、`value_mode`、`specificity`、`basis_kind`、`evidence_kind`、`collection_protocol_id` 和 `source_ids`。

### 过程：作物建植和植株维护（`process_crop_establishment`）
#### 输入
##### 产品流
###### 镀锌钢丝 (`establishment_inputs_wire`)

仅用于实际树莓镀锌钢丝支架。核对线材形态、镀层及供应商规格，与未镀层钢丝、钢架和钢绳区分。安装及更换投入仅按有记录的生产期归属一次。

- 选定流：镀锌钢丝 `6bebb982-c6c5-4250-88da-6607f8899574`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录本节点实际消耗的材料质量，扣除退回量及上游服务已含投入；期间及输出归属仅计算一次，再除以匹配的最终合格参考输出质量。保留原始量，不再次归一化已归一化的数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_establishment_records`
- 来源：`raspberry-trellis-materials`

不继承原集合卡的数值范围。采集实际用量及不确定性；缺少适用范围证据不构成使用默认值或零值的理由。

###### 木质支架立柱 (`establishment_inputs_post`)

仅在实际安装木质立柱时启用；记录树种、含水率、尺寸和防腐处理。安装及更换质量按生产期归属，不在每次采收重新计入整根立柱。

- 选定流：木质支架立柱
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录本节点实际消耗的材料质量，扣除退回量及上游服务已含投入；期间及输出归属仅计算一次，再除以匹配的最终合格参考输出质量。保留原始量，不再次归一化已归一化的数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_establishment_records`
- 来源：`raspberry-trellis-materials`

不继承原集合卡的数值范围。采集实际用量及不确定性；缺少适用范围证据不构成使用默认值或零值的理由。

##### 基本流
###### 建植土地占用（`establishment_land`）
记录声明种植区的面积、持续时间和土地转化状态。
- 选定流：耕地占用（UUID 未解析；仅表示占用）
土地占用按面积乘以实际占用时间计量。纳入土地转化时，应单独记录转化前后土地状态的面积事件、日期、既有利用、核算期间和归属；不能给转化赋面积时间数量或按每个作物周期重复计算。
- 流属性/单位：面积时间 / ha-year
- 数量规则：地块登记和面积图
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-gap-framework-2003`

### 过程：季节性作物管理（`process_crop_management`）
#### 输入
##### 产品流
###### 尿素肥料（`process_crop_management_agricultural_nutrient_inputs_urea`）

**process_crop_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`process_crop_management_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`process_crop_management_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 氯化钾肥料（`process_crop_management_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% `c8585965-5595-48da-9260-2970ed1905cb`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

此UUID限定粒状肥料级氯化钾，K2O当量质量分数至少60.0%。仅在供应商证据匹配时启用，否则另行解析实际等级。阈值是身份限定，不是计算时默认采用的养分比例。

###### 作为肥料施用的牛粪（`process_crop_management_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-organic-nutrients`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 施入土壤的植物残体堆肥（`process_crop_management_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-organic-nutrients`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 灌溉水（`irrigation_water_services`）
按地块、来源、作业和季节记录灌溉水。
- 选定流：灌溉供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 数量规则：水表、交付单、发票或作业日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`
###### 设备供电点的电力（`energy_services_electricity`）

**energy_services 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录田间作业和外购服务使用的电力、燃料及其他能源载体。
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`fao-agricultural-energy`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kWh / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

此绑定为使用点交流电，未特指供电技术、电压及供应方。须确认实际为交流供电，直流电需另选身份。数据库参考为1 MJ：保留电表kWh，链接参考数量时按1 kWh = 3.6 MJ仅换算一次。内部发电衔接前景发电过程，不额外计入外购电力负担。

###### 供应设备的柴油（`energy_services_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`fao-agricultural-energy`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

#### 输出
##### 基本流

###### 向空气排放的氧化亚氮，管理土壤直接路径（`soil_direct_n2o`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg N2O
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 44/28 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

此基本流身份以化合物质量计，不是氮质量。此UUID用于向空气排放（未特指），不包括长期、室内及高层大气变体。保留已知接收介质，数据集需要更具体介质时使用兼容身份。直接及间接方法贡献分别保留，兼容交换仅汇总一次；UUID核验不证明活动量、因子或前体拆分已核实。

###### 向空气排放的氧化亚氮，沉降或淋失间接路径（`soil_indirect_n2o`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg N2O
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 44/28 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

此基本流身份以化合物质量计，不是氮质量。此UUID用于向空气排放（未特指），不包括长期、室内及高层大气变体。保留已知接收介质，数据集需要更具体介质时使用兼容身份。直接及间接方法贡献分别保留，兼容交换仅汇总一次；UUID核验不证明活动量、因子或前体拆分已核实。

###### 按声明氮路径向空气排放的氨（`soil_ammonia`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 / kg NH3
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 17/14 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

此基本流身份以化合物质量计，不是氮质量。此UUID用于向空气排放（未特指），不包括长期、室内及高层大气变体。保留已知接收介质，数据集需要更具体介质时使用兼容身份。直接及间接方法贡献分别保留，兼容交换仅汇总一次；UUID核验不证明活动量、因子或前体拆分已核实。

###### 按声明淋失或径流路径向水排放的硝酸根（`soil_nitrate`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：硝酸根 `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- 流属性/单位：质量 / kg NO3
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 62/14 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

此基本流身份以化合物质量计，不是氮质量。此UUID仅用于向淡水排放。须确认实际接收介质，并保留数据集要求的更具体接收介质；海水或接收水体未明确的排放不得直接改记为淡水。直接及间接方法贡献分别保留，兼容交换仅汇总一次；UUID核验不证明活动量、因子或前体拆分已核实。

### 过程：采收和田间捕获（`process_harvest`）
#### 输入
##### 产品流
#### 输出
##### 产品流
###### 采收浆果（`harvested_berries`）
在调理前按物种和等级称量采收浆果。
- 选定流：采收鲜浆果（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：批次称量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_records`
- 来源：`fao-gap-framework-2003`
##### 废物流
###### 采收损失（`harvest_losses`）
记录田间损失或有文件依据的估算，并注明去向和估算方法。
- 选定流：采收损失（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：损失称量或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_records`
- 来源：`fao-gap-framework-2003`

### 过程：初级调理和分级（`process_conditioning_grading`）
#### 输入
##### 产品流
###### 调理用水（`conditioning_inputs`）
记录与各批次关联的清洗或其他调理用水。
- 选定流：调理供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 数量规则：接收、能源和包装记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`
###### 交流电 (`conditioning_energy_electricity`)

本节点浆果批次实际电动冷却、清洗、分选及包装设备；与上游田间消耗分开。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_conditioning_records`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_records`
- 来源：`route-energy-fao`

执行第8节`conditioning_energy_identification`要求。不继承原集合卡的数值范围或默认值。

###### 木制板条箱（`conditioning_packaging_wood_crate`）

**conditioning_packaging 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

适用时记录调理运行消耗的包装和呈现材料。
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`；`fao-package-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 瓦楞纸板箱（`conditioning_packaging_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`；`fao-package-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 聚乙烯包装薄膜（`conditioning_packaging_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`；`fao-package-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

#### 输出
##### 产品流
###### 可销售浆果（`marketable_berries`）
使用声明农场交付或首个可销售出口处的最终称量产品。
- 选定流：覆盆子、黑莓、桑葚和罗甘莓 `562e96d5-9c9f-4b90-877c-b2ebf33c87cc`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：批次发运重量

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_yield_records`
- 来源：`fao-gap-framework-2003`
##### 废物流
###### 调理拒收物（`conditioning_rejects`）
按去向和处理路线记录分级拒收物。
- 选定流：调理拒收物（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：拒收称量或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_records`
- 来源：`fao-gap-framework-2003`

## 7. 分配和副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_rejects` | outputs and rejects | 在适用时通过有依据的过程细分或明确论证的系统扩展避免分配。否则先确认实际独立转移的共产品，并按有依据的物理关系归属；仅在物理归属不适用时采用有记录的经济等替代分配，并做敏感性分析。处置不合格品不自动成为共产品，其生产及处理负担仍归属可售产出。共用建植负担按有记录的生产期及产出仅归属一次，不假定年产量相等或通用寿命。 | `ghg-protocol-product-standard-2011` |
| `allocation_multi_period` | perennial systems | 按声明的生产期及产量或时间份额分配共享建植和植株管理负荷。 | `ghg-protocol-product-standard-2011` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算和质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `harvest_materials_specific_input` | `cp_harvest_records` | 作业 process_harvest：按采收期记录实际采收辅助材料和田间包装。 原数量方法：领用和退回对账 |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `conditioning_energy_identification` | `cp_conditioning_records` | 本节点浆果批次实际电动冷却、清洗、分选及包装设备；与上游田间消耗分开。 原始活动或阶段基准：每 1 kg 可销售鲜浆果. (`route-energy-fao`) |


### 材料及服务身份采集要求

依据供应商及活动记录识别每种实际材料或独立供应服务，分别记录组成或规格、数量、单位、节点和期间。完成数据集前须为每个具体身份建立独立交换；这些要求本身不是一条交换。与已有卡片及含料服务核对以免重复。复用资产按有证据的使用情况归属并保留实物量，按匹配的最终参考输出仅归一化一次。身份或使用证据缺失是完整性缺口，不是零使用。下列条件式示例不是完整物料清单，也不规定必须使用或用量。

| requirement_id | collection_protocol_id | 必需覆盖范围 |
| --- | --- | --- |
| `establishment_inputs_identification` | `cp_establishment_records` | 按地块及事件记录实际苗木、支架部件、基质及更换材料 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `process_crop_establishment` | inputs and land | field log, invoice, area map | area, age, plants, materials, dates | 对账田间和采购记录；原始汇总与分配：按声明生产期归属 | kg, ha, year | event/annual | 建植和生产期 | each block | 每声明的参考流 | invoices, maps, review |
| `cp_input_records` | `process_crop_management` | inputs | invoice, meter, application log | product, nutrient content, amount, date, field | 采集原始记录并对账；原始汇总与分配：按季节汇总 | kg, kg nutrient, m3, kWh, L | event/monthly | full season | block/site | 每声明的参考流 | invoices, meters |
| `cp_yield_records` | `process_harvest` | outputs | weigh ticket, harvest log | species, grade, mass, date, block | 每批次和出口称量；原始汇总与分配：汇总批次和等级 | kg | each lot | full season | block/outlet | 每声明的参考流 | calibrated scale |
| `cp_harvest_records` | `process_harvest` | harvest materials | issue/waste log | material, quantity, route | 对账领用和退回；原始汇总与分配：按材料汇总 `harvest_materials_specific_input`: 作业 process_harvest：按采收期记录实际采收辅助材料和田间包装。 原数量方法：领用和退回对账 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg | harvest period | full season | harvest operation | 每声明的参考流 | inventory records |
| `cp_conditioning_records` | `process_conditioning_grading` | conditioning inputs | meter, packing log, invoice | input, amount, lot, energy | 与批次关联的记录；原始汇总与分配：按批次质量分配 按路线确认要求：`conditioning_energy_identification`: 本节点浆果批次实际电动冷却、清洗、分选及包装设备；与上游田间消耗分开。 原始活动或阶段基准：每 1 kg 可销售鲜浆果. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg, m3, kWh | lot/daily | full season | conditioning unit | 每声明的参考流 | meters, invoices |
| `cp_reject_records` | `process_reject_routing` | rejects and destinations | grading/destination log | mass, quality, destination, treatment | 每批次质量平衡；原始汇总与分配：对账全部输出 | kg | each lot | full season | site/outlet | 每声明的参考流 | receipts, balance |
| `cp_emission_calculation` | all relevant processes | elementary exchanges | calculation record | activity, factor, method, uncertainty | 应用声明方法；原始汇总与分配：计算后归一化 | kg substance or MJ | reporting period | declared period | site/block | 每声明的参考流 | cited method |
| `cp_managed_soil_nitrogen` | `process_crop_management` | direct and indirect soil emissions | nitrogen activity and method ledger | N sources and amounts; amendments; residue N and fate; area; dates; climate; soil; volatilisation; leaching; precursor; factors and units; receiving medium; upstream owner; stocks; accepted output | 按路径核对兼容氮活动，保留原始工作表和方法适用性，再归属并归一化一次。 逐条氮路径记录：本地量化、由具名兼容上游过程覆盖一次、有证据不适用或尚未解决。先选择IPCC层级及适用气候、土壤和投入类别，再选择因子；保留氮活动量、因子单位、不确定性及分子换算。NH3与NOx、硝酸盐与其他淋失物种须有依据地拆分，不把总前体氮视作单一化合物。另核对实际尿素和石灰施用的CO2，与制造及N2O区分，并记录方法、碳基准及上游归属。其他适用的土地利用、土壤碳、农药、磷、燃烧及水管理排放须采用兼容且有记录的方法；仅有四张氮排放卡不证明排放覆盖完整。实质性路径未量化时不得声明数据集完整。 | kg N; kg compound | application and period close | complete represented plot/season | actual plot | per declared reference flow | activity records; original factor source; precursor balance; uncertainty |
| `cp_species_route_evidence` | `process_crop_establishment`; `process_crop_management`; `process_harvest`; `process_conditioning_grading` | 路线及参数适用性 | 田间台账及来源评估 | 物种；品种；地理；土壤；水管理；用途；作业；参数来源；兼容性；产出 | 将树莓、黑莓及Logan类藤本或灌丛管理与桑属果树管理分开。悬钩子类记录枝条生长习性、支架及采收路线；桑葚记录果用树体管理。不把叶用或蚕桑产量、修剪、施肥及共产品假设移用到纯果品系统。记录物种、品种、地点、相关土壤及叶片证据、株龄、实际作业、产量、损失及报告期。每项采用的农艺参数须保留原始或地区来源，并解释产品、气候、土壤、技术及期间兼容性。所引地区指南支持路线调查，不提供通用用量。数据缺口限制相关数据集的结论，本PCR不虚构现场实测值。 | 原生单位及明确换算 | 每路线或季节及重大变化 | 完整所代表期间 | 实际来源地块 | per declared reference flow | 农场记录；来源适用性判定；不确定性及缺失数据台账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_marketable` | all rows | inventory amount / marketable fresh berry mass | process amount, marketable mass | per kg | `fao-gap-framework-2003` |
| `calc_nutrient_application` | fertilizer card | product mass × declared nutrient fraction; retain product mass | product mass, nutrient fraction | product and nutrient amounts | `fao-gap-framework-2003` |
| `calc_perennial_share` | establishment | shared burden × declared season/yield share | burden, period, yield | season amount | `fao-gap-framework-2003` |
| `calc_mass_balance` | harvest and routing | harvested = marketable + rejects + losses within declared tolerance | all mass records | reconciled balance | `fao-gap-framework-2003` |
| `calc_managed_soil_nitrogen` | `process_crop_management` | 为肥料、有机改良剂、还田残体及适用的管理土壤源选择兼容的直接和间接方法。直接 N2O-N 按适用氮活动乘以对应 EF1 分组因子并另计其他适用源；间接 N2O-N 按适用的挥发氮前体乘 EF4 加淋失或径流氮前体乘 EF5。N2O-N 仅乘44/28换算一次。NH3 与硝酸根须使用独立有依据的物种特定损失比例，不能把全部 NH3+NOx 当 NH3 或全部淋失氮当硝酸根。NH3-N 仅乘17/14、硝酸根氮仅乘62/14换算一次。分开保留组分、源库、介质、方法不确定性和负荷责任，已覆盖排放不得重复。缺少适用数据时不能声称完整，不虚构排放默认值。 | `cp_managed_soil_nitrogen` | molecular emission amounts per declared reference flow | `ipcc-managed-soils-2019`; `mass-balance-identity` |

必须具备可追溯身份、校准称量、完整季节覆盖、地块范围、批次对账、书面分配和缺失数据处理。披露代表性、不确定性、作物年龄、产量变异和未解析身份。
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `` | 按身份区分的交换和对账活动记录 |  |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference flow | 确认一个产品流、质量属性和 kg 单位；未解析身份保留为 review finding。 | `fao-gap-framework-2003` |
| `validation_completeness` | foreground package | 必需过程和协议必须存在，或有理由标记为不适用。 | `fao-gap-framework-2003` |
| `validation_mass_balance` | harvest and routing | 核对采收质量、可销售产品、拒收物和损失；无法解释的差额使验证失败。 | `fao-gap-framework-2003` |
| `validation_nutrient_basis` | fertilizer and amendments | 核对产品、养分含量、数量、日期、面积和原始记录；无标识通用总量不合格。 | `fao-gap-framework-2003`, `source-ipcc-2019-refinement` |
| `validation_managed_soil_coverage` | nitrogen inputs, residues and emissions | 每个适用氮路径须按声明方法定量，或由具名兼容上游数据集覆盖一次。有依据的不适用应记录；缺少活动、因子、物种拆分、介质或归属仍是完整性阻断缺口。拒绝自动置零或重复直接、间接组分。 | `ipcc-managed-soils-2019` |
| `validation_species_route_evidence` | 全部所代表过程 | 将树莓、黑莓及Logan类藤本或灌丛管理与桑属果树管理分开。悬钩子类记录枝条生长习性、支架及采收路线；桑葚记录果用树体管理。不把叶用或蚕桑产量、修剪、施肥及共产品假设移用到纯果品系统。记录物种、品种、地点、相关土壤及叶片证据、株龄、实际作业、产量、损失及报告期。每项采用的农艺参数须保留原始或地区来源，并解释产品、气候、土壤、技术及期间兼容性。所引地区指南支持路线调查，不提供通用用量。数据缺口限制相关数据集的结论，本PCR不虚构现场实测值。 | `osu-caneberry-nutrition`; `osu-caneberry-route`; `fao-mulberry-use` |
| `validation_evidence_based_ranges` | 数量及筛查界限 | 不对土地、材料、水、产品或损失统一套用0–1000范围。使用实测记录及有依据的不确定性，核对同单位物理平衡，并保留精确声明参考量。今后任何数值筛查界限须注明投入、单位、分母、适用性及证据；异常值触发调查，不自动替换数值。 | `mass-balance-identity` |
| `validation_field_emission_coverage` | 田间排放及上游覆盖 | 逐条氮路径记录：本地量化、由具名兼容上游过程覆盖一次、有证据不适用或尚未解决。先选择IPCC层级及适用气候、土壤和投入类别，再选择因子；保留氮活动量、因子单位、不确定性及分子换算。NH3与NOx、硝酸盐与其他淋失物种须有依据地拆分，不把总前体氮视作单一化合物。另核对实际尿素和石灰施用的CO2，与制造及N2O区分，并记录方法、碳基准及上游归属。其他适用的土地利用、土壤碳、农药、磷、燃烧及水管理排放须采用兼容且有记录的方法；仅有四张氮排放卡不证明排放覆盖完整。实质性路径未量化时不得声明数据集完整。 | `ipcc-managed-soils-2019`; `ipcc-liming-urea-2006`; `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；仅在完整并通过审查后作为 background_dataset |
| downstream_use | 新鲜浆果前景生产及其产品系统建模 |
| allowed_use | 已声明新鲜浆果系统、季节和出口 |
| excluded_use | 加工产品、零售、未指明系统或未披露季节 |
| required_metadata | 物种、品种、地理、年龄、系统、季节、出口、产量、产品、分配、损失 |
| required_quality_disclosure | 完整性、代表性、测量基础、不确定性和未解析身份 |
| update_trigger | 新季节、补植、路线/投入/出口变化或质量平衡更正 |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。不采用通用数值筛查区间；保留实物平衡、声明参考数量及有记录的不确定性要求。

## 11. 数据源

| source_id | type | Reference | Use |
| --- | --- | --- | --- |
| `source-ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines | 条件性田间排放和养分计算方法 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `ipcc-managed-soils-2019` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, sections 11.2.1 and 11.2.2 and Tables 11.1/11.3, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen activity and direct/indirect N2O methods; no berry-specific yield or universal per-product emission default |
| `mass-balance-identity` | method_factor | Physical conservation of mass and nitrogen, as defined by the stated PCR calculation and precursor ledgers | Conservation constraints only, not measured loss fractions or empirical factors |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `raspberry-trellis-materials` | extension_guidance | Iowa State University Extension, How would you construct a trellis for red raspberries? https://yardandgarden.extension.iastate.edu/faq/how-would-you-construct-trellis-red-raspberries | 仅支持实际树莓支架的木柱及镀锌钢丝材料，不要求所有浆果使用，也不设尺寸或寿命默认值。 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `osu-caneberry-nutrition` | extension_guidance | OSU Extension, PNW 780, Nutrient management of raspberries and blackberries in Oregon and Washington. https://extension.oregonstate.edu/catalog/pub/pnw-780-nutrient-management-raspberries-blackberries-oregon-washington | 地区性作物、土壤及叶片证据背景，不作为通用施肥量。 |
| `osu-caneberry-route` | extension_guidance | OSU Extension, EM 9180, Growing berries on the Oregon Coast: Raspberries and blackberries. https://extension.oregonstate.edu/catalog/em-9180-growing-berries-oregon-coast-raspberries-blackberries | 区分悬钩子类生长习性及Logan蔓生杂交类型；地区实例仅条件式适用。 |
| `fao-mulberry-use` | official_guidance | FAO, Mulberry cultivation and utilization in China. https://www.fao.org/4/X9895E/x9895e03.htm | 区分果用及叶用或蚕桑用途；叶产量及采叶建议不作为果品生产默认值。 |
| `ipcc-liming-urea-2006` | method_factor | IPCC 2006 Guidelines, Volume 4, Chapter 11, sections 11.3 and 11.4. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_11_Ch11_N2O%26CO2.pdf | 适用的石灰及尿素施用CO2覆盖，与肥料制造及管理土壤N2O区分。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配层级，不提供场址特定数值份额 |

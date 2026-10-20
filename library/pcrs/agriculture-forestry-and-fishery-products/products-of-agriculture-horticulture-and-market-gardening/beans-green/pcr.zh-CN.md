---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-green
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 青豆

## 1. 范围与适用性

本 PCR 为新鲜、整果、未加工青豆建立前景数据包，包含青刀豆及其他列为青豆的未成熟可食豆荚。默认路线从声明田块或设施单元准备开始，经过直播或移栽、作物管理、重复采收、可选分选、清洗、冷却、一次包装，到声明的农场门或包装场门交接。只要披露路线、作物周期和交付门，露地和设施栽培均可纳入。

干豆、成熟种子豆、豆类种子生产、芽菜、罐藏、冷冻、腌制、发酵、干燥、熟制、切割、预制食品、零售、消费者储存和使用不在默认范围内。苗圃生产、耐久灌溉或设施基础设施、机械制造、土地利用变化及交付门之后的运输被排除，除非另行归属并披露。田间残体、次品豆荚、拒收豆荚、包装废物以及清洗水或处理产出在声明去向或交接前仍属于前景范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-green` |
| classification_refs | CPC 3.0 `01241`，青豆; mapping relation: exact |
| covered_products | 露地或设施栽培的新鲜整果青豆，包括青刀豆和其他未成熟可食豆荚，交付时声明成熟度、大小、颜色、等级、清洗、冷却和包装状态 |
| excluded_products | 干豆、成熟种子豆、种子生产、芽菜、加工、罐藏、冷冻、腌制、发酵、干燥、熟制、切割、零售和消费阶段 |
| representative_product | 声明品种、成熟度、大小、颜色、等级和包装状态的商品新鲜整果青豆 |
| production_route | 声明的露地或设施直播/移栽、作物管理、重复采收、分选、清洗、冷却和农场门或包装场门交付路线 |
| market_state | 声明交付门的新鲜整果青豆，散装或一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交付门的商品新鲜整果青豆 |
| How much | 1,000 kg |
| How well | 新鲜、整果、未加工，符合声明的成熟度、大小、颜色、等级、清洗、冷却和包装状态 |
| How long or cycle | 一个完整声明作物周期及其中全部采收轮次，生产年度、采收窗口和交付门均需报告 |
| reference_flow_link | marketable_green_bean_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 绿豆 `ddf54bf7-5413-49f1-bf1c-2f3cc2724695` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 豆类类型或品种；地理范围；露地或设施路线；种植和采收日期；采收轮次；成熟度、大小、颜色和等级；灌溉或雨养状态；养分基准；植保方案；清洗、冷却和包装状态；商品、降级、拒收、残体和废水去向；声明交付门 |

参考产品流已按 CPC 3.0:01241 完成平台身份核验，选定 UUID 不包含数据集版本。不得用干豆、成熟种子豆或其他青豆分类替代。构建前景数据包时，`必需限定信息` 中的信息必须写入数据集元数据、过程说明、参考流备注、产品说明或等效字段。

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_bean_mass` | 商品豆荚、降级豆荚、拒收物、残余和损失 | 质量 | kg | 分别称量商品、降级、拒收、田间损失、搬运损失和残余物流；核对平衡后再换算至 1,000 kg 参考产出。 |
| `crop_cycle_normalization` | 田间和设施栽培记录 | 面积和质量 | ha 和 kg | 按田块、种植床或设施单元记录投入及各轮采摘，并按归属于同一声明作物周期的商品产出归一化。 |
| `nutrient_product_and_n_basis` | 矿质和有机养分投入 | 产品质量和养分质量 | kg 产品、kg N、kg P2O5、kg K2O | 分别记录配方产品质量和有文件支持的养分浓度。仅依据供应商规格、养分计划或实验室结果换算养分当量。同一复合产品可供应多种养分，但不得重复计入。 |
| `water_delivery_basis` | 灌溉、水肥一体化、清洗和水源取水 | 体积 | m3 | 分别记录作物灌溉水、水肥一体化载体水、采后清洗水和自然水资源取水，并披露计量或水平衡依据。 |
| `area_time_basis` | 露地种植床和设施单元 | 面积时间 | ha*a | 记录占用的生产面积和作物占用期间；纳入耐久结构和设备时，须单独归属其负荷。 |
| `harvest_grade_reconciliation` | 多轮采摘、分级和包装 | 质量和声明等级 | kg 和声明的比例 | 保留各轮采摘、采收毛量、合格量、降级豆荚、拒收物和损失，使声明等级和商品产出可复核。 |
| `postharvest_mass_change` | 清洗、冷却、分级和包装 | 质量和水分 | kg 和声明的比例 | 分别保留实测去土、吸水、冷却损失、皮重和包装损失，不与采收作物质量混同，并披露质量核对结果。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or 设施栽培 unit receiving green-bean seed or planting material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared green-bean 作物周期 and foreground input accounting |
| product_classification_scope | CPC 3.0 `01241`, 青豆, through the declared 农场门 or pack-house hand-off |
| recursive_input_rule | 青豆 seed or other planting material is recorded at its received hand-off state and linked to an upstream dataset; its own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare variety group, geography, route, planting density, crop-cycle dates, irrigation source and method, nutrient product and nutrient basis, crop-protection program, picking rounds, 商品 yield, downgraded and rejected pods, residues, washing and cooling, packaging, fate of wastes, and declared gate. |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include bed preparation attributable to the declared 作物周期, planting, crop management, irrigation, nutrient and crop protection, and direct crop emissions; disclose prior land use and exclude unrelated infrastructure construction. | `fao-good-agricultural-practices` |
| `boundary_repeated_picking` | harvest rounds | Attribute every picking round from one planting to the same 作物周期 and reconcile 商品 pods, downgraded pods, rejects, field losses, and residues before normalization. | `usda-snap-bean-standard`; `mass-balance-identity` |
| `boundary_gate_conditioning` | sorting, washing, cooling, and packing | End the default foreground boundary at the declared 农场门 or pack-house gate. Include sorting, washing, cooling, primary packaging, and pre-gate transport only when they occur before that gate. | `usda-snap-bean-standard`; `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | crop residues, pod culls, and packaging waste | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 青豆 crop establishment | required | every represented sowing, planting, bed, or 设施栽培 unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | 青豆 crop management | required | each represented 作物周期 | foreground managed biological production | managed area, irrigation, nutrient and protection applications, and complete picking campaign |
| `harvest_and_gate_preparation` | 青豆 harvest and gate preparation | required | each represented harvest campaign and declared pre-gate handling route | foreground harvest, grading, conditioning, packing, and hand-off | 1,000 kg 商品 fresh green-bean output |

### Process: 青豆 crop establishment (`crop_establishment`)

#### 输入
##### 产品流

###### Seed or planting material (`planting_material_input`)

Record green-bean seed or other planting material entering each declared field bed or protected unit, distinguishing purchased seed from any other planting route and preserving the supplier lot and planting date.

- 选定流： 青豆 seed or planting material
- Flow property / unit: Mass or viable count / kg, seed, or plant
- 数量规则： Record supplier lot quantity and planted viable seed or planting-material quantity by field, bed, or protected unit.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Planting-material screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.1
  - 上限： 20
  - 单位： kg seed or declared planting material per 1,000 kg output
  - 基准： declared planted area and crop-cycle output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied for bed preparation, seed emergence, or establishment by source and production unit, excluding rainfall unless a water-balance method explicitly includes it.

- 选定流：供应作物的灌溉用水
- Flow property / unit: Volume / m3
- 流集分组： `irrigation-water`
- 数量规则： Sum metered or documented water-balance deliveries during establishment and retain the source and application method.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Establishment irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： m3/ha
  - 基准： establishment period from planting to uniform stand
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### Occupied green-bean production area (`crop_land_occupation`)

Record the production area and time occupied by the field bed or 设施栽培 unit for the declared planting campaign.

- 选定流：农业用地占用
- Flow property / unit: Area-time / ha*a
- 数量规则： Multiply declared production area by crop occupation time and state whether protected structures are excluded or separately attributed.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_area_cycle_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Area-output screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.01
  - 上限： 0.8
  - 单位： ha per 1,000 kg output
  - 基准： declared crop area and 商品 crop-cycle output
  - 基准类型： process_output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出
##### 产品流

##### 废物流

##### 基本流

### Process: 青豆 crop management (`crop_management`)

#### 输入
##### 产品流

###### Production irrigation water (`production_irrigation_water`)

Record irrigation and fertigation water delivered to the green-bean crop after establishment, separating source, application method, and any recirculated carrier water.

- 选定流：供应作物的灌溉用水
- Flow property / unit: Volume / m3
- 流集分组： `irrigation-water`
- 数量规则： Sum field, bed, or protected-unit meter readings and documented water-balance estimates from establishment through final picking.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Crop irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 4,000
  - 单位： m3/ha
  - 基准： complete green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 尿素肥料（`crop_management_agricultural_nutrient_inputs_urea`）

**crop_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

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
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

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
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

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
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

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
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

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
- 来源：`fao-good-agricultural-practices`；`fao-organic-nutrients`

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
- 来源：`fao-good-agricultural-practices`；`fao-organic-nutrients`

###### 柴油 (`mobile_machinery_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`mobile_machinery_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_energy_records`采集`crop_management`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_records`
- 来源：`route-energy-fao`

###### Electricity for irrigation and crop management (`management_electricity_input`)

Record electricity used for pumping, fertigation, protected-unit operation, lighting, and other crop-management equipment when it occurs before the declared gate.

- 选定流：电力供应
- Flow property / unit: Energy / kWh
- 流集分组： `electricity-supply`
- 数量规则： Sum equipment meter or invoice records and allocate shared services by area-time, operating time, water delivered, or another declared physical basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`technology_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Management-electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kWh per 1,000 kg output
  - 基准： irrigation pumping and in-scope crop-management equipment
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### Water resource withdrawal (`water_resource_withdrawal`)

Record natural-resource water withdrawn for irrigation or fertigation separately from supplied irrigation water and report the source and return or consumption basis.

- 选定流：自然水资源取用
- Flow property / unit: Volume / m3
- 数量规则： Reconcile source-meter or permit records to water delivered to the crop and disclose any return flow or consumption calculation.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Water-withdrawal screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 6,000
  - 单位： m3/ha
  - 基准： crop-cycle natural-resource withdrawal
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出
##### 产品流

##### 废物流


###### Crop residues returned or removed (`crop_residue_output`)

Record leaves, stems, roots, pods left after final picking, and other crop residues leaving the crop-cycle process, with separate quantities and fates for field return, composting, feed use, treatment, or disposal.

- 选定流： 青豆 crop residues
- Flow property / unit: Mass / kg wet residue
- 数量规则： Weigh or calculate residues by field or protected unit and document the receiving fate; retain uncollected field residue as a declared residue or loss stream.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_residue_fate_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Crop-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 500
  - 上限： 10,000
  - 单位： kg wet residue/ha
  - 基准： crop-cycle residue mass before declared fate
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)


##### 基本流

###### Nitrous oxide to air (`nitrous_oxide_emission`)

Record or calculate direct and indirect nitrous oxide emissions attributable to managed nitrogen input and relevant crop residues; retain the declared calculation method and receiving medium.

- 选定流：一氧化二氮向环境空气排放
- Flow property / unit: Mass / kg N2O
- 数量规则： Apply one declared emissions method to documented nitrogen input, residue fate, and relevant environmental factors without double counting.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Nitrous-oxide screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 35
  - 单位： kg N2O/ha
  - 基准： nitrogen-managed green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_emission`)

Record or calculate ammonia emissions from nitrogen applications when the declared method and application records support the pathway.

- 选定流：氨向环境空气排放
- Flow property / unit: Mass / kg NH3
- 数量规则： Apply the declared nitrogen-emission method to documented nitrogen forms, application timing, and environmental conditions.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Ammonia screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 40
  - 单位： kg NH3/ha
  - 基准： nitrogen-managed green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_to_water`)

Record or calculate nitrate loss to water when nutrient, soil, drainage, and receiving-medium information supports the pathway.

- 选定流：硝酸根向水体排放
- Flow property / unit: Mass / kg nitrate
- 数量规则： Apply the declared nitrogen-loss method to recorded nutrient input, drainage or leaching evidence, and the receiving medium.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Nitrate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg nitrate/ha
  - 基准： nitrogen-managed 作物周期 and documented drainage pathway
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Phosphate to water (`phosphate_to_water`)

Record or calculate phosphate loss to water when nutrient application, runoff or drainage, soil conditions, and receiving-medium information support the pathway.

- 选定流：磷酸根向水体排放
- Flow property / unit: Mass / kg phosphate
- 数量规则： Apply the declared phosphorus-loss method to recorded nutrient input and documented runoff, drainage, or erosion pathway without assigning an unsupported default emission.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Phosphate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 25
  - 单位： kg phosphate/ha
  - 基准： phosphorus-managed 作物周期 and documented runoff or drainage pathway
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### Process: 青豆 harvest and gate preparation (`harvest_and_gate_preparation`)

#### 输入
##### 产品流

###### Washing water (`washing_water_input`)

Record water used to remove soil and foreign material when washing occurs before the declared gate; keep it separate from irrigation and source withdrawal.

- 选定流：清洗生产用水
- Flow property / unit: Volume / m3
- 流集分组： `process-water`
- 数量规则： Sum wash-water meter or batch records and disclose recirculation, treatment, and discharge handling.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`site_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_postharvest_records`
- 来源： `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling`
- 数量范围： Washing-water screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 8
  - 单位： m3 per 1,000 kg output
  - 基准： pre-gate washing of 新鲜整果 青豆
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Electricity for cooling, sorting, and packing (`postharvest_electricity_input`)

Record electricity for forced-air cooling, cold rooms, sorting lines, lighting, and packing equipment when those activities occur before the declared gate.

- 选定流：电力供应
- Flow property / unit: Energy / kWh
- 流集分组： `electricity-supply`
- 数量规则： Sum equipment meter or invoice records and allocate shared services by mass, operating time, or another declared basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`technology_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-fresh-produce-handling`
- 数量范围： Post-harvest electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kWh per 1,000 kg output
  - 基准： pre-gate cooling, sorting, and packing
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Pre-gate road freight (`pre_gate_road_transport`)

Record purchased transport from field to pack-house or another declared pre-gate hand-off when it occurs within the foreground boundary.

- 选定流：公路货运服务
- Flow property / unit: Transport service / t*km
- 流集分组： `road-freight-transport`
- 数量规则： Calculate transported mass times documented distance and state whether return or empty-leg burden is included.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`route_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_packaging_transport_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Pre-gate transport screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 250
  - 单位： t*km per 1,000 kg output
  - 基准： declared field-to-pack-house or pre-gate route
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### Marketable fresh green-bean output (`marketable_green_bean_output`)

Record the accepted 新鲜整果 green-bean pods delivered at the declared 农场门 or pack-house hand-off. The reference amount is normalized to 1,000 kg after all picking rounds and grade decisions are reconciled.

- 选定流：绿豆 `ddf54bf7-5413-49f1-bf1c-2f3cc2724695`
- Flow property / unit: Mass / kg
原始产出计量与核对要求：Sum accepted 商品 pods across all picking rounds and normalize the accepted output to the declared 1,000 kg reference flow.

- 数量规则：1000 千克
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围：`product_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： reference_flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `mass-balance-identity`; `usda-snap-bean-standard`
- 数量范围： Marketable-yield screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 500
  - 上限： 20,000
  - 单位： kg 商品 pods/ha
  - 基准： complete green-bean 作物周期 and harvest campaign
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Downgraded green-bean pods for a declared secondary use (`downgraded_green_bean_output`)

Record edible or potentially usable pods that fail the declared primary grade but leave the process for a documented secondary use. Keep the recipient, quality, intended use, and hand-off distinct from waste or field loss.

- 选定流：用于有记录的次级用途的降级青豆荚
- Flow property / unit: Mass / kg
- 数量规则： Weigh downgraded pods by picking or grading batch and record the recipient and intended use before assigning any co-product treatment.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`product_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `usda-snap-bean-standard`; `mass-balance-identity`
- 数量范围： Downgraded-pod screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg downgraded pods per 1,000 kg 商品 output
  - 基准： picking and grade reconciliation
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Sorting rejects and trimmings (`sorting_rejects_output`)

Record pods rejected during sorting, trimming, or quality inspection when they do not leave as a documented secondary product. Record their treatment, feed, compost, disposal, or other fate.

- 选定流： 青豆 sorting rejects and trimmings
- Flow property / unit: Mass / kg wet waste
- 数量规则： Weigh or calculate rejects by batch and retain the treatment or recipient record.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围：`product_specific`
原始活动或阶段基准：per 1,000 kg 商品 fresh green-bean output.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `mass-balance-identity`; `usda-snap-bean-standard`
- 数量范围： Sorting-reject screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 400
  - 单位： kg wet waste per 1,000 kg output
  - 基准： harvest and pack-house grade reconciliation
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 青豆清洗废水（`wash_water_wastewater_output`）

仅记录实际清洗水相排放或处理交接，保留组成和去向。留在该水相中的悬浮固体属于本废水，不另计固体交换。核验兼容的废物流身份及接收路线前，明确保留UUID未解析状态。

- 选定流：青豆清洗废水
- 流属性 / 单位：体积 / m3
- 数量规则：按`cp_postharvest_records`计量此独立物流。协调供水、循环水、蒸发、产品和移出固体保留水及实际排放，质量与体积平衡须分别保持量纲一致；仅凭本物流有依据的密度进行体积质量换算。归属物流量除以匹配的最终合格产出量，再乘相同产品单位下的声明参考数量，保留实测阶段与最终产出的比例，不重复归一化，不编造固体分流比例。单独保留处理责任且避免重复计入。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_postharvest_records`
- 来源：`codex-fresh-produce-hygiene`; `mass-balance-identity`

###### 青豆清洗分离固体（`wash_water_wastewater_output_separated_solids`）

仅在实际移出并交付独立固体流时适用，记录湿质量及含水率。仍悬浮于废水中的固体不得再次计入。核验兼容的废物流身份及接收路线前，明确保留UUID未解析状态。

- 选定流：青豆清洗分离固体
- 流属性 / 单位：质量 / kg
- 数量规则：按`cp_postharvest_records`计量此独立物流。协调供水、循环水、蒸发、产品和移出固体保留水及实际排放，质量与体积平衡须分别保持量纲一致；仅凭本物流有依据的密度进行体积质量换算。归属物流量除以匹配的最终合格产出量，再乘相同产品单位下的声明参考数量，保留实测阶段与最终产出的比例，不重复归一化，不编造固体分流比例。单独保留处理责任且避免重复计入。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_postharvest_records`
- 来源：`codex-fresh-produce-hygiene`; `mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_crop_inputs` | multiple crops or products sharing a field, bed, meter, facility, or transport | 有实测作物特定记录时按其分配共享投入；无法分离共享记录时，采用有据面积时间、运行时间、交付水或质量等物理基准并披露。 | `iso-14044-2006` |
| `allocation_downgraded_pods` | downgraded pods and other secondary outputs | 降级豆荚作为废物或残体，除非接收方、预期用途、质量及交接均有记录；仅在次级产出有明确功能且声明分配基准时使用共产品分配。 | `iso-14044-2006`; `mass-balance-identity` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算和质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | 作业 crop_management：Record each crop-protection product applied to the represented green-bean crop, retaining product name, active ingredient, formulation, rate, application method, date, and treated area. Use integrated pest management records to show when a treatment was unnecessary or omitted. 原数量方法：Reconcile application logs, product labels, stock movement, and treated area for the complete 作物周期. |
| `mobile_machinery_fuel_specific_input` | `cp_energy_records` | 作业 crop_management：Record diesel, gasoline, or another fuel used by tractors and mobile machinery for bed preparation, cultivation, spraying, irrigation support, and harvest operations. 原数量方法：Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented 作物周期. |
| `flexible_packaging_input_specific_input` | `cp_packaging_transport_records` | 作业 harvest_and_gate_preparation：Record flexible bags, films, liners, or other flexible primary packaging that crosses the foreground boundary before the declared gate, including material, tare, reuse, and loss information. 原数量方法：Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign. |
| `carton_packaging_input_specific_input` | `cp_packaging_transport_records` | 作业 harvest_and_gate_preparation：Record carton, box, tray, or other paper-based primary packaging that crosses the foreground boundary before the declared gate, including material grade, tare, reuse, and loss information. 原数量方法：Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign. |
| `crate_pallet_packaging_input_specific_input` | `cp_packaging_transport_records` | 作业 harvest_and_gate_preparation：Record reusable crates, pallets, bins, or other rigid handling packaging used before the declared gate, including material, tare, number of uses, return route, and loss rate. 原数量方法：Record package mass or item count, capacity, tare, reuse cycles, return route, and loss rate for the represented campaign. |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material | supplier lot and planting log | lot, seed or planting-material form, quantity, variety, date, field or bed | transcribe invoices and planting logs; verify lot against planting record；原始汇总与分配：sum planted viable quantity by crop-cycle unit | kg, seed, or plant | each planting event | complete 作物周期 | each represented field, bed, or protected unit | 每声明的参考流 | lot invoice, planting log, and supervisor check |
| `cp_area_cycle_records` | `crop_establishment` | land occupation | field or facility register | area, unit, crop dates, protected status, prior use | map or register production unit and verify start and end dates；原始汇总与分配：multiply area by declared occupation period | ha and date | each 作物周期 | full crop occupation period | each field, bed, or protected unit | 每声明的参考流 | field map, lease or facility record, date record |
| `cp_irrigation_records` | `crop_management` | irrigation and withdrawal | meter, permit, or water-balance record | source, meter, application, date, volume, return flow | read meter or reconstruct documented water balance；原始汇总与分配：sum by 作物周期 and separate source withdrawal from delivery | m3 | each application or daily total | establishment to final picking | each water source and crop unit | 每声明的参考流 | meter calibration, permit, or water-balance check |
| `cp_nutrient_records` | `crop_management` | nutrient inputs and soil emissions | invoice, label, nutrient plan, and application log | product, mass, nutrient fraction, date, method, area, residue fate | reconcile purchases to application records and calculate nutrient equivalents；原始汇总与分配：sum applications assigned to the 作物周期 | kg product and kg nutrient | each application | full 作物周期 | each crop unit | 每声明的参考流 | supplier label, nutrient plan, laboratory, or log review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray and stock record | product, active ingredient, dose, date, area, method | reconcile spray logs with invoices and stock movement；原始汇总与分配：sum by product and active ingredient `crop_protection_input_specific_input`: 作业 crop_management：Record each crop-protection product applied to the represented green-bean crop, retaining product name, active ingredient, formulation, rate, application method, date, and treated area. Use integrated pest management records to show when a treatment was unnecessary or omitted. 原数量方法：Reconcile application logs, product labels, stock movement, and treated area for the complete 作物周期. 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg product or active ingredient | each application | full 作物周期 | each crop unit | 每声明的参考流 | product label, application log, trained-operator check |
| `cp_energy_records` | `crop_management` | field and post-harvest energy | meter, fuel, or invoice record | carrier, quantity, operation, equipment, date, crop or batch assignment | read meter or reconcile fuel receipts and operating records；原始汇总与分配：allocate shared use by declared physical basis `mobile_machinery_fuel_specific_input`: 作业 crop_management：Record diesel, gasoline, or another fuel used by tractors and mobile machinery for bed preparation, cultivation, spraying, irrigation support, and harvest operations. 原数量方法：Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented 作物周期. 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kWh, MJ, L, or kg | each operation or billing period | full 作物周期 and pre-gate handling | field, facility, and shared equipment | 每声明的参考流 | meter, receipt, machine-hour, or allocation record |
| `cp_residue_fate_records` | `crop_management` | crop residues | residue and recipient record | stream, wet mass, fate, recipient, date, field | weigh or estimate residue and retain fate evidence；原始汇总与分配：sum by residue stream and fate | kg wet residue | each removal or crop-cycle close | crop-cycle close and post-harvest cleanup | each crop unit | 每声明的参考流 | weigh ticket, recipient record, or treatment receipt |
| `cp_harvest_grade_records` | `harvest_and_gate_preparation` | 商品 output, downgraded pods, and rejects | harvest and grading record | date, picking round, gross harvest, accepted mass, downgraded mass, rejects, grade, gate | weigh each picking round and reconcile grade outcomes；原始汇总与分配：sum by 作物周期 and declared gate | kg | each picking round | entire harvest campaign | each field, bed, or campaign | 每声明的参考流 | scale record, grade sheet, and mass-balance check |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | washing, cooling, and wastewater | batch, meter, or equipment record | batch, water, recirculation, cooling time, loss, solids, discharge | read batch or meter record and link to harvest lot；原始汇总与分配：aggregate by accepted output batch | m3, kWh, kg, and h | each batch | all pre-gate handling | pack-house or declared handling site | 每声明的参考流 | batch sheet, meter, sanitation, and treatment record |
| `cp_packaging_transport_records` | `harvest_and_gate_preparation` | packaging, packaging waste, and pre-gate transport | packaging issue and dispatch record | material, tare, reuse, item count, mass, distance, vehicle, load | reconcile packaging and dispatch records to accepted harvest lots；原始汇总与分配：sum packaging and transport by declared gate output `flexible_packaging_input_specific_input`: 作业 harvest_and_gate_preparation：Record flexible bags, films, liners, or other flexible primary packaging that crosses the foreground boundary before the declared gate, including material, tare, reuse, and loss information. 原数量方法：Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign. 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `carton_packaging_input_specific_input`: 作业 harvest_and_gate_preparation：Record carton, box, tray, or other paper-based primary packaging that crosses the foreground boundary before the declared gate, including material grade, tare, reuse, and loss information. 原数量方法：Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign. 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `crate_pallet_packaging_input_specific_input`: 作业 harvest_and_gate_preparation：Record reusable crates, pallets, bins, or other rigid handling packaging used before the declared gate, including material, tare, number of uses, return route, and loss rate. 原数量方法：Record package mass or item count, capacity, tare, reuse cycles, return route, and loss rate for the represented campaign. 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `packaging_waste_output_specific_output`: Record damaged, discarded, or unrecovered packaging generated before the declared gate, separating reusable packaging returned to service from packaging that becomes waste. Reconcile packaging issued, returned, reused, and discarded for the represented campaign. 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。 `mass-balance-identity`; `codex-fresh-produce-hygiene` | kg, item, km, or t*km | each campaign or dispatch | all in-scope pre-gate movements | field, pack-house, and route | 每声明的参考流 | package specification, dispatch note, route record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_occupation` | crop establishment | 面积时间＝声明生产面积×作物占用期；设施结构单独归属时保持分列。 | area, start date, end date, protected status | ha*a or declared area-time | `fao-good-agricultural-practices` |
| `calc_nutrient_equivalents` | nutrient inputs | 养分质量＝配方产品质量×有据养分分数；产品和养分基准分列，复合产品去重。 | product mass, label or plan concentration | kg N, kg P2O5, and kg K2O | `fao-good-agricultural-practices` |
| `calc_managed_soil_emissions` | nitrogen-related elementary outputs | 对养分投入、作物残体及环境因子采用一个声明的氮排放方法，不重复计算路径。 | nutrient input, residue fate, method factors | declared nitrogen emission flows | `ipcc-2019-managed-soils-n2o` |
| `calc_water_balance` | irrigation, withdrawal, washing, and wastewater | 核对水源取水、交付水、循环水、蒸发、固体滞留量及排水；灌溉系统与清洗系统分开。 | meter readings, batch records, return flow, and solids | water-delivery and wastewater values | `fao-crop-evapotranspiration-56`; `mass-balance-identity` |
| `calc_transport_service` | pre-gate road freight | 运输服务＝运输质量 t×有据距离 km；说明是否包含返程或空驶负担。 | mass, distance, load, and route record | t*km | `fao-good-agricultural-practices` |
| `calc_reference_normalization` | all inventory rows | normalized value = crop-cycle quantity × 1,000 kg / accepted 商品 output at the declared gate | crop-cycle quantity and accepted output mass | quantity per 1,000 kg reference flow | `mass-balance-identity` |
| `calc_mass_reconciliation` | harvest, downgraded pods, rejects, residues, losses, and packaging | 总收获质量＝合格产出＋降级豆荚＋拒收物＋田间或搬运损失＋声明残体流；披露实测水分及皮重处理。 | picking, grade, residue, packaging, and loss records | reconciled crop-cycle mass balance | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows and product qualifiers | 对每项流记录语义身份、物理状态、方向、过程角色及证据缺口或核实状态；最终数据集发布前解析参考身份。 | flow description, qualifier record, and foreground review |
| `dq_measurement` | quantities and conversions | 使用经校准秤、仪表、发票、日志或透明计算；保留原始数值及带单位的换算因子。 | measurement record and calculation worksheet |
| `dq_temporal` | 作物周期 and harvest campaign | 覆盖完整声明的栽植至交接期间，识别缺失采收轮次、异常天气及替代记录。 | planting, application, picking, and gate dates |
| `dq_completeness` | boundary inputs and outputs | 适用时，对种植材料、土地、水、养分、植保、能源、排放、产量、降级豆荚、拒收物、残体、包装、废水及交接前运输给出数值、有据零值或有记录的排除。 | completeness checklist and mass-balance review |
| `dq_allocation` | shared meters, fields, facilities, packaging, or transport | 记录服务多种作物、产品或生产活动时，说明分配基准并检验其影响。 | allocation record and sensitivity note |
| `dq_disclosure` | final dataset metadata | 声明品种组、地理、路线、栽植和采收日期、周期、交接点、产量和等级、灌溉及养分基准、植保、残体和拒收去向、包装、清洗、废水、交接前运输及身份缺口。 | dataset metadata and reference-flow comment |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_definition` | reference flow | 前景生成前确认 1,000 kg 功能单位、全部必需限定项及已核实参考产品、质量属性和单位组身份。 | `mass-balance-identity` |
| `validation_flow_identity_binding` | parameterized product inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validation_mass_reconciliation` | harvest and gate preparation | 按声明质量和水平衡基准检查合格产出、降级豆荚、拒收物、残体、田间和搬运损失、废水及包装废物；明确容器皮重及水分处理。 | `mass-balance-identity` |
| `validation_boundary_disclosure` | system boundary | 数据集缺少声明交接点、作物周期、路线、灌溉水源、养分基准、残体和拒收去向，或范围内交接前处理时，不予通过。 | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |
| `validation_soil_emissions` | managed nutrients and residues | 核实采用一个声明的排放方法，直接及间接氮路径不重复计算。 | `ipcc-2019-managed-soils-n2o` |
| `validation_data_quality` | all foreground records | 分别报告身份、测量、时间覆盖、完整性、分配及披露发现；不确定或错误发现默认不通过验证。 | `iso-14044-2006` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | Foreground primary dataset for 新鲜整果 green-bean production at the declared 农场门 or pack-house gate; usable downstream as `secondary_dataset` after review |
| downstream_use | Build process and lifecycle-model foreground inventories for fresh 青豆 and compare declared crop-cycle routes with disclosed qualifiers |
| allowed_use | Product-category studies that preserve the declared 作物周期, route, gate, maturity and grade state, input bases, emission method, and mass and water reconciliation |
| excluded_use | Direct substitution for dry beans, seed or sprout production, processed 青豆, retail or consumer stages, undisclosed protected infrastructure, or crops with materially different product and gate conditions |
| required_metadata | PCR id and version; variety group; geography; route; planting and picking dates; 作物周期; declared gate; yield and grade; irrigation and nutrient basis; crop protection; residue, downgraded, and reject fates; washing and wastewater; packaging; pre-gate transport; reference product qualifiers |
| required_quality_disclosure | Measurement sources, missing or estimated fields, allocation basis, crop-cycle completeness, mass-balance result, water balance, emission method, 具体流身份核验, and identity 证据缺口 findings |
| update_trigger | New cultivation or protected-production route, material change in gate conditioning or packaging, revised emission method, changed product qualifiers, or evidence that alters the default collection and validation rules |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration — https://www.fao.org/4/X0490E/X0490E00.htm | irrigation scheduling, water-balance context, and water-withdrawal records |
| `fao-good-agricultural-practices` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables — https://www.fao.org/family-farming/detail/en/c/1682483/ | crop-cycle decomposition, nutrient and crop-protection records, field operations, and boundary context |
| `fao-fresh-produce-handling` | official_guidance | FAO, Manual for the preparation and sale of fruits and vegetables — https://www.fao.org/4/y4893e/y4893e0a.htm | agricultural water, harvest, handling, sanitation, and post-harvest process context |
| `usda-snap-bean-standard` | official_guidance | USDA Agricultural Marketing Service, Snap Beans for Processing Grades and Standards — https://www.ams.usda.gov/grades-standards/snap-beans-processing-grades-and-standards | green-bean product identity, maturity, tenderness, defect, grade, and harvest-quality qualifiers |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables (CXC 53-2003) — https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+53-2003%2FCXC_053e.pdf | water quality, washing, packing, hygiene, and pre-gate handling requirements |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 IPCC Refinement, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application — https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil nitrogen-emission calculation and validation |
| `iso-14044-2006` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines — https://www.iso.org/standard/38498.html | allocation and data-quality validation rules |
| `mass-balance-identity` | method_factor | Declared crop-cycle, grade, water, residue, and packaging mass-balance reconciliation method | normalization, loss, cull, reject, residue, wastewater, and packaging checks |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |

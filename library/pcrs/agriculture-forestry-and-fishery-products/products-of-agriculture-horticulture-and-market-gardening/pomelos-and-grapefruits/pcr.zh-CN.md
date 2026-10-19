---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 柚子和葡萄柚

## 1. 范围与适用性

本 PCR 用于建立新鲜完整柚子和葡萄柚的前景数据包，边界从声明的果园生产年度开始，经过采收、可选的场内调理，到声明的农场门或包装场交接点。范围包括在研究中纳入时的多年生果园建植、结果期果园管理、灌溉、养分和植保管理、采收轮次，以及在交接点之前发生的分拣、清洗、冷却和初级包装。

苗木和嫁接树苗的育苗、育种、果汁和浓缩汁加工、切割和去皮、干燥、烹调、零售、消费者储存和使用，以及门之后的配送不属于默认边界。耐用果园基础设施、机械、建筑物和灌溉资产不纳入，除非另行分摊。田间残余物、次果、拒收果、废水和包装废物在声明其最终去向前仍属于前景过程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits` |
| classification_refs | CPC 3.0 `01321`，柚子和葡萄柚; mapping relation: exact |
| covered_products | 新鲜完整柚子和葡萄柚，包括声明的品种、生产路线、成熟度、等级、清洗、冷却和初级包装状态 |
| excluded_products | 苗木、种子和接穗生产、果汁、浓缩汁、去皮或切分水果、干燥或烹调产品、零售服务、耐用资本资产和门之后运输 |
| representative_product | 符合声明的物种或品种组、成熟度、大小、硬度、清洁度、等级和缺陷标准的可销售新鲜完整柚子或葡萄柚 |
| production_route | 适用时的多年生果园建植、果园和土壤管理、灌溉、植保、采收、可选调理，以及农场门或包装场交接 |
| market_state | 在声明的农场门或包装场交接点的新鲜、完整、未加工柚子或葡萄柚，可为散装或声明的初级包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的农场门或包装场交接点的新鲜完整柚子或葡萄柚 |
| How much | 1,000 kg |
| How well | 新鲜、完整、未加工，声明物种或品种组、成熟度、大小、硬度、清洁度、等级、缺陷容许度、水分状态和包装状态 |
| How long or cycle | 一个声明的果园生产年度和采收活动；同一果园区块的所有采收轮次在归一化前统一核算 |
| reference_flow_link | farm_gate_product_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 柚子和葡萄柚 `01323c69-b85f-4716-88f2-718888f2f780` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种和品种组；生产地理位置；果园树龄和结果状态；种植密度；生产年度和采收日期；灌溉或雨养状态；肥料产品和养分基准；植保方案；可销售产量；次果和残余物去向；清洗、冷却和包装状态；声明的交接点 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。参考产品身份在精确的农场门身份得到验证前保持 证据缺口；不得用邻近柑橘产品替代。

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_citrus_mass` | 采收果、可销售果、次果和残余物 | Mass | kg | 分别称量可销售果、降级果、拒收果、田间损失和残余果流，并在换算为 1,000 kg 参考产出前完成核算。 |
| `orchard_year_normalization` | 果园和采收记录 | Area and mass | ha and kg | 按果园区块和生产年度记录投入与采收轮次，再按同一区块和采收活动的可销售产出归一化。 |
| `nutrient_product_basis` | 肥料和土壤改良剂投入 | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | 每种实际肥料或改良剂产品单独列卡，保留实物质量、配方、养分组成和施用记录；养分量不是同一产品的另一次投入，不使用集合或分组标识代替具体流身份。 |
| `water_delivery_basis` | 灌溉、施肥灌溉、清洗和源头取水 | Volume | m3 | 将作物灌溉、施肥灌溉载水、采后清洗水和自然资源取水分别记录，并披露计量或水量平衡依据。 |
| `postharvest_mass_reconciliation` | 分拣、清洗、冷却和包装 | Mass and moisture | kg and declared fraction | 将测得的土壤去除、吸水、冷却损失、次果和包装损失与采收果质量分开，并披露质量核算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已建成果园区块接收声明生产年度投入；若纳入果园建植，则从整备果园土地接收种植材料开始，并披露既有土地利用和排除的基础设施 |
| starting_condition_role | 声明果园生产年度和前景投入核算的起点 |
| product_classification_scope | CPC 3.0 `01321`，柚子和葡萄柚，直到声明的农场门或包装场交接点 |
| recursive_input_rule | 柚子或葡萄柚种植材料按接收交接状态记录并连接上游数据集；本 PCR 不重新构建其育苗或繁殖生产。 |
| upstream_dataset_requirement | 对跨越边界的种植材料、养分产品、植保产品、供水、燃料、电力、包装、外购运输和废物处理服务使用上游数据集。 |
| disclosure | 声明物种和品种组、地理位置、果园树龄和密度、生产年度日期、灌溉来源和方法、养分基准、植保方案、采收轮次、可销售产量、次果和残余物、清洗和冷却、包装、废物去向及交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_year` | 建植和果园种植 |纳入声明生产年度的果园管理及直接作物排放。  即使本年没有新事件，也应纳入所代表林/果园应归属的历史建园、未结果期和更新贡献。上述归属记录是必需证据，不是允许省略负担的条件：数量、树龄/寿命或产出历史缺失时应明确保留完整性缺口，不能填零或自动排除。保留原事件，声明的期间/产出方法仅应用一次；另有研究排除须单独论证。 | `fao-gap-framework-2003` |
| `boundary_harvest_gate` | 采收、调理和包装 | 默认前景边界止于声明的农场门或包装场交接点。只有在交接点之前发生时，才纳入分拣、清洗、冷却、初级包装和门前运输。 | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |
| `boundary_residue_fate` | 次果、田间残余物、废水和包装废物 | 分别记录田间归还、堆肥、饲料利用、处理、运输或处置去向。没有文件化接收方和预期用途时，不得给予共产品抵扣。 | `iso-14044-2006`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | 柚子和葡萄柚果园建植 | conditional | 当所代表果园区块将栽植、补植或建植归入研究时纳入 | 前景果园建植 | 栽植面积、种植材料、树龄和分摊期间 |
| `orchard_cultivation` | 柚子和葡萄柚果园种植 | required | 每个所代表的结果果园生产年度 | 前景管理型生物生产 | 果园面积、投入记录、生产年度日期和归属产量 |
| `harvest_and_field_handling` | 柚子和葡萄柚采收及田间处理 | required | 每个所代表的采收活动 | 前景采收和初级田间处理 | 采收质量、采收轮次、次果和可销售产出 |
| `conditioning_and_farm_gate` | 柚子和葡萄柚调理及农场门交接 | conditional | 在声明交接点前发生分拣、清洗、冷却或初级包装时纳入 | 前景调理和交接 | 1,000 kg 可销售新鲜完整产出 |

### 过程：柚子和葡萄柚果园建植（`orchard_establishment`）

#### 输入
##### 产品流

###### 种植材料（`planting_material_input`）

记录进入声明果园区块的外购或内部转移嫁接树、苗木、砧木或接穗材料，并保留供应商批次、物种或品种、栽植日期和数量。

- 选定流：柚子或葡萄柚种植材料
- 流属性/单位：质量或植株数 / kg 或 plant
- 数量规则：按果园区块记录供应商或苗圃交付记录以及栽植的成活树木数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-gap-framework-2003`

##### 废物流

##### 基本流

###### 占用的果园土地（`orchard_land_occupation`）

记录所代表果园区块占用的面积和分摊期间，并披露建植期与结果期是否分别分配。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / ha*a
- 数量规则：将声明的果园面积乘以建植分摊期间，并按可销售产出归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-gap-framework-2003`

#### 输出
##### 产品流

##### 废物流

##### 基本流

### 过程：柚子和葡萄柚果园种植（`orchard_cultivation`）

#### 输入
##### 产品流

###### 尿素肥料（`orchard_cultivation_agricultural_nutrient_inputs_urea`）

**orchard_cultivation_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_protection_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-volume-4`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`orchard_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_protection_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-volume-4`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`orchard_cultivation_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_protection_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-volume-4`；`fao-fertilizer-identities`

###### 氯化钾肥料（`orchard_cultivation_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_protection_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-volume-4`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`orchard_cultivation_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_protection_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-volume-4`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`orchard_cultivation_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_protection_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement-volume-4`；`fao-organic-nutrients`

###### 灌溉及施肥灌溉用水（`orchard_irrigation_water`）

按水源和施用方式记录输送到果园的水量，分别记录灌溉水、施肥灌溉载水以及降雨假设。

- 选定流：作物灌溉供水
- 流属性/单位：体积 / m3
- 数量规则：对所代表的果园生产年度累加水表读数，或使用文件化的施用水量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_energy_records`
- 来源：`fao-crop-evapotranspiration-56`

###### 田间和抽水电力（`field_electricity_input`）

记录用于灌溉抽水、施肥灌溉、控制设备和其他果园作业的外购电力。

- 选定流：电力供给
- 流属性/单位：能量 / kWh
- 数量规则：按作业汇总电表或发票记录，并将共用电表分配至所代表果园区块。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_energy_records`
- 来源：`fao-gap-framework-2003`

###### 柴油 (`mobile_machinery_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`mobile_machinery_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_irrigation_and_energy_records`采集`orchard_cultivation`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_irrigation_and_energy_records`
- 来源：`route-energy-fao`

##### 废物流

##### 基本流

###### 水资源取水（`water_resource_withdrawal`）

将灌溉或施肥灌溉的自然资源取水与输送水分开记录，并披露回流或消耗假设。

- 选定流：水资源取水
- 流属性/单位：体积 / m3
- 数量规则：将源头计量或许可记录与果园输送水核对，并披露取水到输送的平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_and_energy_records`
- 来源：`fao-crop-evapotranspiration-56`

#### 输出
##### 产品流

##### 废物流

##### 基本流

###### 排入空气的氧化亚氮（`nitrous_oxide_emission`）

记录或计算归属于管理性氮投入和相关果园残余物的直接和间接氧化亚氮排放，并保留所选计算方法。

- 选定流：排入环境空气的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：依据文件化氮投入和声明的排放因子方法计算；不得重复计入上游数据集已经包含的排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`ipcc-2019-refinement-volume-4`

### 过程：柚子和葡萄柚采收及田间处理（`harvest_and_field_handling`）

#### 输入
##### 产品流

###### 柴油 (`harvest_support_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`harvest_support_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_harvest_and_packaging_records`采集`harvest_and_field_handling`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`route-energy-fao`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 转入调理的果实（`fruit_to_conditioning`）

记录从果园区块离开、转入可选调理和农场门交接过程的采收完整柚子和葡萄柚。

- 选定流：待调理的采收完整柚子或葡萄柚
- 流属性/单位：质量 / kg
- 数量规则：在分拣前称量离开果园区块的果实，并与田间损失和次果核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`usda-ams-citrus-standards`

##### 废物流

###### 采收次果和损伤果（`harvest_culls`）

记录采收或田间处理阶段拒收的果实，并说明其归还土壤、堆肥、饲料利用、处理或处置去向。

- 选定流：柚子和葡萄柚次果及损伤果
- 流属性/单位：质量 / kg
- 数量规则：按声明去向称量或估算拒收果，并与采收质量和可销售质量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`usda-ams-citrus-standards`; `mass-balance-identity`

##### 基本流

### 过程：柚子和葡萄柚调理及农场门交接（`conditioning_and_farm_gate`）

#### 输入
##### 产品流

###### 调理和清洗水（`conditioning_water`）

在声明交接点前发生清洗或湿法调理时，记录供水，并将接触产品的水与其他设施用水区分。

- 选定流：工艺用水
- 流属性/单位：体积 / m3
- 数量规则：汇总在声明交接点前处理果实的水表记录或批次水量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`codex-fresh-produce-hygiene`

###### 调理电力（`conditioning_electricity`）

记录声明交接点前用于分拣、清洗、冷却、通风和包装设备的电力。

- 选定流：电力供给
- 流属性/单位：能量 / kWh
- 数量规则：汇总电表或发票并将共用设备分配至所代表的果实吞吐量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售新鲜完整产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`codex-fresh-produce-hygiene`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 农场门可销售新鲜完整柚子或葡萄柚（`farm_gate_product_output`）

记录声明农场门或包装场交接点的最终可销售完整果实；在身份得到验证前保留 证据缺口 状态。

- 选定流：柚子和葡萄柚 `01323c69-b85f-4716-88f2-718888f2f780`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：在声明交接点称量经过边界内分拣、清洗、冷却和包装后的合格果实。

- 数量规则：1000 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：1,000 kg 参考产出.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`usda-ams-citrus-standards`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_citrus_output` | 产出柚子、葡萄柚或多个可销售等级的果园和采收作业 | 当记录支持质量分配时，按可销售质量将共用果园和采收投入分配到产品等级或物种。若不同质量等级具有实质不同的经济功能，应在使用替代分配前披露并论证。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_residue_fate` | 次果、残余物和包装废物 | 除非有文件化接收方和预期用途支持共产品声明，否则将次果、残余物和废物作为废物流。任何避免产品或替代声明应与前景清单分开记录。 | `iso-14044-2006`; `mass-balance-identity` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_nutrient_and_protection_records` | 作业 orchard_cultivation：记录跨越边界的除草剂、杀菌剂、杀虫剂、生物防治剂和助剂；在可获得时保留配方产品量与有效成分量。 原数量方法：汇总所代表果园年度的发票、喷施日志、施用记录和库存核算。 |
| `mobile_machinery_fuel_specific_input` | `cp_irrigation_and_energy_records` | 作业 orchard_cultivation：记录归属于所代表果园年度的拖拉机、喷雾机、割草机、采收辅助设备和其他移动机械燃料。 原数量方法：汇总燃料收据、储罐记录或机器工时计算，并归属于所代表果园年度。 |
| `harvest_crates_specific_input` | `cp_harvest_and_packaging_records` | 作业 harvest_and_field_handling：记录进入采收作业的可重复使用筐、箱或托盘化采收容器，并披露共用资产的分摊依据。 原数量方法：记录容器数量、材料、皮重、重复使用次数以及归属于该活动的损失或更换记录。 |
| `harvest_support_fuel_specific_input` | `cp_harvest_and_packaging_records` | 作业 harvest_and_field_handling：记录在声明交接点前用于采收辅助、果园通行和果实转运至场内处理点的燃料。 原数量方法：汇总活动燃料记录或机器工时计算，并分配至所代表的采收产出。 |
| `primary_packaging_specific_input` | `cp_harvest_and_packaging_records` | 作业 conditioning_and_farm_gate：在声明交接点前发生初级包装时，记录实际包装材料、质量、形式及重复使用或损失状态。 原数量方法：汇总包装领用记录并将包装质量分配至包装果实产出；散装或可重复使用形式单独记录。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `orchard_establishment` | 种植材料和占用面积 | 苗圃发票、栽植图和果园登记 | 物种、品种、批次、树数、面积、栽植日期、树龄 | 核对供应商记录、田间图和栽植登记；原始汇总与分配：按区块和分摊的果园年度产出汇总 | plant, kg, ha, ha*a | 每次建植活动 | 建植期和分摊年度 | 每个果园区块 | 每声明的参考流 | 发票、田间图、栽植登记和树龄披露 |
| `cp_nutrient_and_protection_records` | `orchard_cultivation` | 肥料、土壤改良剂、植保和养分相关排放 | 发票、标签、喷施日志、养分计划和库存记录 | 产品、配方、养分比例、有效成分、日期、区块、质量、施用方法 | 用田间日志和供应商文件核对领用记录；原始汇总与分配：按产品和区块汇总后按合格产出归一化 `crop_protection_input_specific_input`: 作业 orchard_cultivation：记录跨越边界的除草剂、杀菌剂、杀虫剂、生物防治剂和助剂；在可获得时保留配方产品量与有效成分量。 原数量方法：汇总所代表果园年度的发票、喷施日志、施用记录和库存核算。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg product, kg nutrient | 每次施用并按月核对 | 完整所代表果园年度 | 每个果园区块 | 每声明的参考流 | 供应商标签、施用日志和主管复核 |
| `cp_irrigation_and_energy_records` | `orchard_cultivation` | 灌溉、取水、电力和机械燃料 | 仪表、许可、发票、燃料日志或设备记录 | 来源、仪表、体积、能量、燃料、日期、区块、分配依据 | 直接读表或文件化水量和能量平衡；原始汇总与分配：核对来源总量、输送总量和共用服务分配 `mobile_machinery_fuel_specific_input`: 作业 orchard_cultivation：记录归属于所代表果园年度的拖拉机、喷雾机、割草机、采收辅助设备和其他移动机械燃料。 原数量方法：汇总燃料收据、储罐记录或机器工时计算，并归属于所代表果园年度。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | m3, kWh, MJ, kg | 每次或每月 | 完整所代表果园年度 | 各果园区块和共用设施 | 每声明的参考流 | 仪表检查、发票、许可和分配工作表 |
| `cp_harvest_and_packaging_records` | `harvest_and_field_handling` and `conditioning_and_farm_gate` | 采收、果实质量、次果、水、包装、电力和废物 | 称重单、采收日志、包装场记录、公共设施仪表和废物记录 | 日期、区块、批次、合格质量、次果质量、材料、水、能量、废物去向、交接点 | 每批称重或使用文件化校准估算方法；原始汇总与分配：按批次核对采收、合格、次果和废物流 `harvest_crates_specific_input`: 作业 harvest_and_field_handling：记录进入采收作业的可重复使用筐、箱或托盘化采收容器，并披露共用资产的分摊依据。 原数量方法：记录容器数量、材料、皮重、重复使用次数以及归属于该活动的损失或更换记录。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `harvest_support_fuel_specific_input`: 作业 harvest_and_field_handling：记录在声明交接点前用于采收辅助、果园通行和果实转运至场内处理点的燃料。 原数量方法：汇总活动燃料记录或机器工时计算，并分配至所代表的采收产出。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `primary_packaging_specific_input`: 作业 conditioning_and_farm_gate：在声明交接点前发生初级包装时，记录实际包装材料、质量、形式及重复使用或损失状态。 原数量方法：汇总包装领用记录并将包装质量分配至包装果实产出；散装或可重复使用形式单独记录。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `conditioning_waste_specific_output`: 记录声明交接点前产生的次果、去除的土壤或有机物、使用后的清洗材料和废弃包装，并按去向分开。 按流分别称量或估算，并与输入包装质量和果实质量核对。 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。 `mass-balance-identity`; `codex-fresh-produce-hygiene` | kg, m3, kWh, unit | 每个采收批次和活动核算 | 完整采收活动 | 果园区块和交接设施 | 每声明的参考流 | 校准秤、批次记录、仪表、废物收据和交接声明 |
| `cp_phase1_environment_coverage` | orchard_establishment | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_year_normalization` | 所有生产年度记录 | 将归属的果园年度清单除以声明交接点的合格新鲜完整果实质量，并缩放至 1,000 kg。 | 区块面积、归属投入记录、合格产出质量 | PCR 归一化清单 | `mass-balance-identity` |
| `calc_nutrient_equivalents` | 肥料和土壤改良剂行 | 养分当量 = 配方产品质量 × 文件化养分比例；产品质量和养分基准保留为独立字段。 | 产品质量、N/P2O5/K2O 比例 | 养分当量投入 | `fao-gap-framework-2003` |
| `calc_water_withdrawal_balance` | 灌溉和施肥灌溉 | 取水量 = 源头取水记录与输送水、声明回流或消耗平衡的核对结果；不得仅依据降雨推断取水。 | 源头仪表、输送水、回流 | 取水和输送灌溉水投入 | `fao-crop-evapotranspiration-56` |
| `calc_citrus_mass_balance` | 采收、调理和交接点产出 | 采收质量 = 合格产品 + 次果 + 已记录的田间、分拣和包装损失；无法解释的残余质量必须复核。 | 批次质量和废物记录 | 核对后的产品和废物流 | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_and_protection_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 产品和投入行 | 声明物种或品种、果园区块、批次、产品配方和交接状态；流身份未解决时保持 证据缺口，不得替换邻近流。 | 批次记录、供应商文件和复核说明 |
| `quality_measurement` | 质量、水、电力和燃料行 | 在可行时使用校准秤和仪表；否则记录估算方法和不确定性。 | 校准记录、仪表检查或估算工作表 |
| `quality_temporal` | 所有生产年度行 | 覆盖完整的所代表果园年度和采收活动，包括所有采收轮次和相关施用。 | 农事日历、施用日志和采收登记 |
| `quality_completeness` | 投入、产出和废物流 | 核对投入记录、合格产出、次果、残余物和包装废物；解释缺失记录或重要残余质量。 | 质量平衡工作表和废物收据 |
| `quality_disclosure` | 数据集元数据 | 披露交接边界、果园树龄、分配依据、水源、养分基准、植保方案和未解决身份。 | 数据集元数据和实践者复核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_mass_balance` | 采收、调理和交接点产出 | 合格产品、次果和已记录损失必须在声明计量容差内与采收果质量核对；无法解释的残余需要复核。 | `mass-balance-identity` |
| `validate_input_records` | 果园种植和调理 | 每个前景数量必须标识果园区块或设施、生产年度或活动期间、单位、采集协议，以及共用时的分配依据。 | `fao-gap-framework-2003`; `iso-14044-2006` |
| `validate_reference_qualifiers` | 参考流和数据集元数据 | 数据包在下游使用前必须声明物种或品种组、地理位置、果园树龄、生产年度、交接状态、可销售等级和未解决身份状态。 | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜完整柚子和葡萄柚生产的前景农业数据集 |
| downstream_use | 当声明的交接点、地理位置、年度和产品状态兼容时，可作为果园生产的二级数据集，或作为背景数据集使用 |
| allowed_use | 直到声明农场门或包装场的鲜完整柚子和葡萄柚生产的比较型或归因型建模 |
| excluded_use | 果汁、加工柑橘、零售、消费者使用、门后配送，或缺失必要产品、交接点、生产年度或残余物限定信息的研究 |
| required_metadata | 物种和品种组、地理位置、果园区块和树龄、生产年度、灌溉来源、养分和植保基准、采收活动、可销售产出、次果和废物去向、交接状态及未解决身份声明 |
| required_quality_disclosure | 计量依据、时间覆盖、分配方法、质量平衡结果、水和养分核算方法、数据缺口及流身份状态 |
| update_trigger | 新的果园路线、灌溉或植保技术、产量或等级结构发生实质变化、养分或排放方法更新、交接状态改变，或未解决身份得到确认 |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | 灌溉和水量平衡采集规则 |
| `ipcc-2019-refinement-volume-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 | 管理土壤和作物残余物排放计算 |
| `codex-fresh-produce-hygiene` | standard | Codex code of hygienic practice for fresh fruits and vegetables | 清洗、调理、包装和交接限定信息 |
| `usda-ams-citrus-standards` | official_guidance | USDA Agricultural Marketing Service citrus grade and condition standards | 可销售产出、等级、次果和交接质量 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management—Life cycle assessment—Requirements and guidelines | 分配和共产品处理 |
| `mass-balance-identity` | method_factor | PCR mass-balance and identity reconciliation method | 产品、次果、废物和交接点产出核对 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未列名柑橘类水果

## 1. 范围与适用性

本 PCR 覆盖 CPC 其他未列名柑橘类水果的鲜果、未加工前景生产，从果园或设施单元管理开始，经过采收、可选初级整理、初级包装，直至声明农场或首个包装场交接点。残余类别包含多个类型时，数据包必须声明通用名称或植物学身份。本 PCR 不包括销售用苗木生产、橙子、柠檬和酸橙、橘类、柚子或葡萄柚、加工或保藏柑橘、交接点后的配送、零售、消费，以及声明起始条件之前的土地利用变化。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c |
| classification_refs | CPC 3.0:01329 Other citrus fruit, n.e.c.; mapping relation: exact |
| covered_products | 在声明农场或首个包装场交接点交付的鲜食、未加工其他柑橘类水果 |
| excluded_products | 已有专门分类的柑橘、加工或保藏柑橘、作为产品销售的苗木，以及交接点后的配送 |
| representative_product | 在声明交接点采收、分级且处于声明清洗或未清洗、包装或散装状态的可销售鲜食其他柑橘类水果 |
| production_route | 多年生或半多年生果园管理、采收、可选初级整理和声明交接 |
| market_state | 声明交接点的整果鲜柑橘 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场或首个包装场交接点的可销售鲜食其他柑橘类水果 |
| How much | 1,000 kg |
| How well | 新鲜、未加工、可销售，并声明柑橘身份、品种组、产地、成熟度、等级、清洗、冷却、包装和交接点 |
| How long or cycle | 一个年度采收活动及所代表的生产果园期间，多年生负荷分配至报告期间 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 声明交接点的合格鲜食其他柑橘类水果（UUID 未解析） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 柑橘身份及名称；品种组；产地；路线；树龄；报告年度；生产面积；灌溉来源和方法；养分和植保基准；成熟度和等级；清洗；冷却；包装；拒收物和残余物去向；交接点 |


构建前景数据包时，`必需限定信息` 必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`primary_conditioning` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `marketable_gate_output` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收和交接产出 | 质量 | kg | 在归一化前分别保留采收总量、可销售水果、次果、修整物、田间损失和包装拒收物。 |
| `perennial_orchard_annualization` | 果园管理 | 面积时间和质量 | m2*a 和 kg | 记录树龄、生产面积、报告期和更新事件，跨年度分配多年生负荷且不重复计算。 |
| `nutrient_equivalent_basis` | 肥料和土壤改良剂 | 质量 | kg 产品、kg N、kg P2O5 或 kg K2O | 记录实际产品和浓度，同时保留产品质量及养分当量基准。 |
| `irrigation_volume` | 灌溉和取水 | 体积 | m3 | 分开记录输送灌溉水和降水，并在适用时核对取水、输送、回流和损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已建立的果园或设施柑橘单元接收本期间管理投入；起始前土地利用和苗圃生产需披露或排除 |
| starting_condition_role | 所代表生产期和采收活动的开始 |
| product_classification_scope | CPC 3.0:01329 下的鲜食其他未列名柑橘，直至声明农场或首个包装场交接点 |
| recursive_input_rule | 外购柑橘种植材料只作为一次上游投入关联，不在本 PCR 内递归展开为另一个果园周期。 |
| upstream_dataset_requirement | 使用时为种植材料、养分、植保、水、能源、燃料、包装和废物处理提供兼容上游数据集。 |
| disclosure | 声明柑橘身份、品种、产地、路线、树龄、面积、期间、灌溉、养分和植保基准、采收、等级、清洗、冷却、包装、残余物和拒收物去向、废水去向及交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_productive_period` | 果园管理 | 纳入所代表生产期和采收活动的管理投入、多年生归属和直接田间排放；单独披露建植和更新。 | `fao-gap-framework-2003` |
| `boundary_declared_gate` | 采收和整理 | 以声明农场或首个包装场为终点；仅纳入交接前发生的分级、清洗、冷却和初级包装。 | `fao-postharvest-handling-ae075e`; `iso-14067-2018` |
| `boundary_soil_and_residue_emissions` | 养分和残余物 | 对土壤和残余物排放采用一个声明的方法，避免氮基准重复计算。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 残余物和拒收物 | 记录去向；未说明去向的残余物或拒收物保留为损失或废物流，不作为副产品。 | `fao-gap-framework-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_management` | 其他柑橘果园管理 | required | 每个所代表的生产期 | 管理型生物生产 | 生产面积和年度采收产出 |
| `harvest` | 其他柑橘采收和田间处理 | required | 每个所代表的采收活动 | 采收和交接 | 采收批次及每 1,000 kg 可销售产出 |
| `primary_conditioning` | 其他柑橘初级整理和包装 | conditional | 交接前发生整理或初级包装时 | 初级整理 | 每 1,000 kg 的整理产出和拒收物 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1000 kg 同一声明交接点净合格产品 |

### 过程：其他柑橘果园管理（`orchard_management`）

#### 输入
##### 产品流

###### 进入果园的灌溉水（`irrigation_water_input`）

记录进入果园或设施单元的灌溉水，并与降水和水源取水分开。

- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 数量规则：按区块、水源、方法和期间计量或记录输送的灌溉水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每生产公顷及每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：作者暂定灌溉估计；不是 FAO 给出的区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20,000
  - 单位：m3/ha/year
  - 基准：生产果园面积和年度采收活动
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计 (`reasoned_estimate`)

###### 尿素肥料（`orchard_management_agricultural_nutrient_inputs_urea`）

**orchard_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每生产公顷及每 1,000 kg 可销售交接产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`orchard_management_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`orchard_management_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

###### 氯化钾肥料（`orchard_management_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`orchard_management_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-gap-framework-2003`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`orchard_management_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-gap-framework-2003`；`fao-organic-nutrients`

###### 果园用电（`orchard_electricity_input`）

记录抽水、施肥灌溉、通风或其他果园服务用电，并将共享电表分配到所代表区块和期间。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：按区块和报告期计量或分配电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每生产公顷及每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-gap-framework-2003`

###### 柴油 (`orchard_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`orchard_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_orchard_management_records`采集`orchard_management`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_orchard_management_records`
- 来源：`route-energy-fao`

##### 废物流

##### 基本流

###### 果园土地占用（`land_occupation_input`）

记录所代表期间占用的生产面积和持续时间。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / m2*a
- 数量规则：生产面积乘以所代表占用时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-gap-framework-2003`

#### 输出
##### 产品流

###### 可供采收的果园产出（`orchard_output_handoff`）

该内部交接与采收批次核对，不作为第二个可销售产出重复计算。

- 选定流：待采收的其他柑橘类水果作物＼
- 流属性/单位：质量 / kg fresh fruit
- 数量规则：将可获得产出与采收、田间损失和可销售产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每生产期及每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_yield_records`
- 来源：`fao-gap-framework-2003`

##### 废物流

###### 修剪物和果园残余物（`pruning_residue_output`）

按去向记录修剪生物量和其他果园残余物。

- 选定流：柑橘修剪物和果园残余物＼
- 流属性/单位：质量 / kg fresh or dry matter
- 数量规则：称量或估算残余物，记录含水率基准和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每生产公顷及每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-gap-framework-2003`

##### 基本流

###### 土壤直接氧化亚氮（`soil_nitrous_oxide`）

依据一个声明的方法和适用氮基准计算土壤和残余物氧化亚氮。

- 选定流：排放到大气环境的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：删除重复养分和残余物氮基准后应用声明因子或实测结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每生产公顷及每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils`

### 过程：其他柑橘采收和田间处理（`harvest`）

#### 输入
##### 产品流

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 采收的其他柑橘类水果（`harvested_fruit_output`）

称量初级整理前的采收水果，并保留产品、成熟度、等级和批次信息。

- 选定流：采收的鲜食其他柑橘类水果＼
- 流属性/单位：质量 / kg fresh fruit
- 数量规则：称量每批次，并与损失、次果和可销售产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_yield_records`
- 来源：`fao-gap-framework-2003`

##### 废物流

###### 采收损失和田间次果（`harvest_loss_output`）

记录留在田间、采收损伤或交接前移除的水果并说明去向。

- 选定流：采收损失或田间次果＼
- 流属性/单位：质量 / kg fresh fruit
- 数量规则：按批次称量或估算，并与采收总量和可销售量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_yield_records`
- 来源：`fao-gap-framework-2003`

### 过程：其他柑橘初级整理和包装（`primary_conditioning`）

#### 输入
##### 产品流

###### 整理和清洗用水（`conditioning_water_input`）

记录交接前用于清洗、卫生或初级整理的用水。

- 选定流：过程用水
- 流属性/单位：体积 / m3
- 数量规则：按批次计量或记录，并区分补充水和循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-postharvest-handling-ae075e`

###### 整理用电（`conditioning_electricity_input`）

记录交接前分选、分级、清洗、冷却和初级包装的用电。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：按所代表批次和整理期间计量或分配电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售交接产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-postharvest-handling-ae075e`

###### 木制板条箱（`primary_packaging_input_wood_crate`）

**primary_packaging_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

只记录交接前实际使用的纸箱、托盘、薄膜、标签或其他包装。
原始活动或阶段基准：每 1,000 kg 可销售交接产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_primary_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-postharvest-handling-ae075e`；`fao-package-identities`

###### 瓦楞纸板箱（`primary_packaging_input_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_primary_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-postharvest-handling-ae075e`；`fao-package-identities`

###### 聚乙烯包装薄膜（`primary_packaging_input_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_primary_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-postharvest-handling-ae075e`；`fao-package-identities`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 声明交接点的可销售其他柑橘（`marketable_gate_output`）

仅在 `primary_conditioning` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流：声明交接点的可销售鲜食其他柑橘类水果＼
- 流属性/单位：质量 / kg

原参考状态单位说明：质量 / kg fresh fruit

原始产出计量及核对：按 `cp_primary_conditioning_records` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_primary_conditioning_records` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-postharvest-handling-ae075e`

##### 废物流

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：声明交接点的合格鲜食其他柑橘类水果（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：本同一交接点实测净合格质量，按 R/R × 1000 kg 归一化；成对投入与合格产出相等，保留原始 R
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
##### 基本流
#### 输出
##### 产品流
###### 声明交接点参考产品 (`reference_product_at_declared_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：声明交接点的合格鲜食其他柑橘类水果（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：1000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
实际废物保留在其产生作业，不在此重复。
##### 基本流
实际释放保留在其负责的实体作业，不在此重复。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_and_rejects` | 果园和整理共享产出 | 先细分可直接计量的果园和处理作业。其余共享负荷仅在有意销售果实与独立有据共产品之间按有依据的物理关系分配。弃置残次果和修整物不取得共产品份额，其生产与处理负荷仍归属可销售产出。记录全部产出及合计为一的份额；仅在物理关系不可用时说明采用经济后备方法的理由。 | `iso-14044-2006`; `fao-postharvest-handling-ae075e` |
| `allocation_perennial_stand` | 果园建植和更新 | 根据生产年限、树龄和更新事件年度化建植、更新和共享多年生资产。 | `fao-gap-framework-2003`; `iso-14067-2018` |
| `allocation_reuse_packaging` | 可重复使用筐和托盘 | 按服务次数、损失率和所代表活动分配制造和清洗；一次性包装单独记录。 | `fao-postharvest-handling-ae075e` |

拒收、返田、堆肥、处理或丢弃的水果仍为废物或损失流，除非有独立销售和管理证据支持副产品处理。

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_orchard_management_records` | 作业 orchard_management：按产品、日期、处理面积以及标签或处方基准记录植保产品或有效成分。 原数量方法：按期间核对采购、库存、施用、处理面积和标签浓度。 |
| `orchard_fuel_input_specific_input` | `cp_orchard_management_records` | 作业 orchard_management：记录割草、喷施、修剪、施肥和内部搬运的机械燃料。 原数量方法：使用燃料记录或设备活动量乘以已确认耗油率，并保留燃料类型。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_management_records` | `orchard_management` | 果园投入、面积、能源、土地和残余物 | 果园日志、计量表、发票、田间记录 | 区块；面积；树龄；路线；灌溉；电力；燃料；残余物；期间 | 按区块记录并与计量表和发票核对；原始汇总与分配：先按区块和期间汇总，再按产出归一化 `crop_protection_input_specific_input`: 作业 orchard_management：按产品、日期、处理面积以及标签或处方基准记录植保产品或有效成分。 原数量方法：按期间核对采购、库存、施用、处理面积和标签浓度。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `orchard_fuel_input_specific_input`: 作业 orchard_management：记录割草、喷施、修剪、施肥和内部搬运的机械燃料。 原数量方法：使用燃料记录或设备活动量乘以已确认耗油率，并保留燃料类型。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg、m3、kWh、MJ、m2*a | 每次作业及月度结账 | 完整生产期 | 各区块或单元 | 每声明的参考流 | 计量或发票及田间日志核对 |
| `cp_nutrient_application_records` | `orchard_management` | 养分总量和土壤排放 | 标签、采购、库存、施用和土壤记录 | 产品；质量；N；P2O5；K2O；日期；区块；方法；土壤测试 | 将采购和施用与标签或实验室浓度核对；原始汇总与分配：产品级核对后计算养分当量 | kg 产品和 kg 养分 | 每次施用及年度结账 | 完整生产期 | 各区块 | 每声明的参考流 | 标签或实验室结果及施用记录 |
| `cp_harvest_yield_records` | `harvest` | 采收批次、筐、损失和交接 | 采收票、秤、筐和燃料记录 | 批次；身份；区块；日期；总量；可销售量；次果；损失；筐；燃料；交接点 | 按批次称量并与区块产量核对；原始汇总与分配：总量 = 可销售量 + 次果 + 损失 `harvest_crate_input_specific_input`: 记录采收筐或田间容器，并记录重复使用、清洗、更新和损失假设。 按声明的服务次数分配制造、清洗、更新和损失。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg、数量、MJ | 每个采收批次 | 完整采收活动 | 各区块和交接点 | 每声明的参考流 | 校准秤和采收票 |
| `cp_primary_conditioning_records` | `primary_conditioning` | 水、电、包装、产出、拒收物和废水 | 包装场日志、计量表、秤、领用和废物记录 | 批次；水；循环水；电力；包装；产出；拒收物；废水；交接点 | 按处理水果质量分配共享记录；原始汇总与分配：核对输入和输出批次 | m3、kWh、kg | 每批次或活动结账 | 完整整理期间 | 每条线或首个包装场 | 每声明的参考流 | 计量、称量、包装和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | 归一化数量 = 期间或批次数量 / 可销售交接产出 × 1,000 kg | 采集数量；交接产出 | 每参考产出的数量 | `iso-14067-2018` |
| `calc_nutrient_equivalent` | nutrient input total | 养分当量 = 产品质量 × 声明浓度 | 产品质量；标签或实验室浓度 | kg N、kg P2O5 或 kg K2O | `fao-gap-framework-2003` |
| `calc_perennial_attribution` | establishment and replacement | 年度归属量 = 已记录数量 / 声明归属期，并按面积和期间调整 | 建植；树龄；期间；面积 | 年度化果园数量 | `fao-gap-framework-2003`; `iso-14067-2018` |
| `calc_soil_emissions` | soil nitrous oxide | 删除重复基准后，对适用养分和残余物氮应用声明因子或测量结果 | 养分和残余物氮；因子或结果 | 排放量 | `ipcc-2019-managed-soils` |
| `calc_output_reconciliation` | harvest and conditioning | 采收总量 = 可销售量 + 次果 + 修整物 + 损失；调查未解释残差 | 批次称量和去向记录 | 核对后的产品和废物量 | `fao-postharvest-handling-ae075e` |
| `conditioning_reject_output_specific_exchanges` | `primary_conditioning` | 将柑橘拒收果、修整残余物和清洗废水分别枚举为实际物流。逐流计量，保留各自组成、状态、原生单位、批次／期间及去向；每个具体物流和边界角色建立一张独立卡。区分废物转移、外购处理服务及具体物质排放，不得把处理服务作为废水本身，也不得重复处理负荷。分别保留库存、返工、销售降级品及弃置废物；物理混合物流只计一次，不得再将其组分作为额外输出重复计入。 保留相连采集协议和实际过程归属，按原始阶段基准恢复各自可归属的原始分子量，再按匹配的合格参考产出归一化一次。缺少身份、数量、单位或去向会阻止数据集完整性通过；确认不存在必须有依据，不得默认零值。 | `cp_primary_conditioning_records` | 逐项独立交换；完成前必须补齐 | `fao-postharvest-handling-ae075e` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_application_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 产品和参考流 | 声明柑橘身份、品种组、路线、等级、交接点和处理状态；证据缺口 身份保持明确。 | 产品规格和批次记录 |
| `quality_measurement` | 数量和单位 | 尽量使用校准秤和计量表，并记录估算、含水率、换算因子和重复使用假设。 | 校准、计量、发票和计算记录 |
| `quality_temporal` | 果园和采收 | 覆盖完整生产期和活动，包括多次采收和更新事件。 | 田间日历、采收票、包装场日志 |
| `quality_completeness` | 清单 | 核对水、养分、能源、燃料、包装、产品、拒收物、残余物、排放和取水，并说明缺失物流。 | 质量平衡和缺失说明 |
| `quality_disclosure` | 数据集元数据 | 披露限定信息、水来源和去向、养分和植保基准、多年生分配及拒收物或残余物去向。 | 数据集元数据和场址记录 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1000 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1000 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1000 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | 参考流和交接产出 | 1,000 kg 参考产出必须使用 kg 质量，并与产品身份、等级、处理状态和交接点核对。 | `iso-14067-2018` |
| `validate_process_reconciliation` | 采收和整理 | 采收总量、可销售产出、次果、修整物、损失、拒收物和废水必须核对，或带有记录的残差。 | `fao-postharvest-handling-ae075e` |
| `validate_perennial_period` | 果园管理 | 年度化前必须具备树龄、生产面积、期间、建植或更新事件及年度化依据。 | `fao-gap-framework-2003` |
| `validate_flow_identity_resolution` | parameterized rows | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_qualifiers` | 参考流和元数据 | 必须提供柑橘身份、品种、产地、树龄、期间、灌溉、养分和植保基准、成熟度或等级、整理、包装、去向和交接点。 | `fao-gap-framework-2003`; `fao-postharvest-handling-ae075e` |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鲜食其他未列名柑橘类水果的农业前景生产数据集 |
| downstream_use | 在披露参考身份、交接点、地域、期间和 coverage finding 后作为 secondary_dataset 或 background_dataset 使用 |
| allowed_use | 路线、状态和交接点兼容时，用于鲜食柑橘供应的比较性或归因性 LCA |
| excluded_use | 加工、榨汁、保藏、干制、零售、消费或没有记录调整的实质不同边界 |
| required_metadata | 产品身份；品种；产地；路线；树龄；面积；期间；灌溉；养分和植保；采收批次；成熟度和等级；整理；包装；去向；交接点；UUID 和 具体流身份核验 状态 |
| required_quality_disclosure | 数据年份；测量与估算；分配和年度化；水源和去向；养分基准；质量平衡 |
| update_trigger | 类别解释、具体流身份核验|

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipcc-2019-managed-soils` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, managed-soils methods | 土壤排放计算 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | 分配和清单一致性 |
| `iso-14067-2018` | standard | ISO 14067:2018 Greenhouse gases — Carbon footprint of products | 归一化、分配披露和使用条件 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `fao-crop-evapotranspiration-56` | official_guidance | Allen et al., FAO Irrigation and Drainage Paper 56, Crop Evapotranspiration (1998), https://www.fao.org/4/X0490E/X0490E00.htm | 水量平衡和蒸散方法；不提供灌溉供水的经验范围。 |
| `fao-postharvest-handling-ae075e` | official_guidance | Kitinoja and Kader, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, 4th edition (2002), FAO-hosted original, https://www.fao.org/4/ae075e/ae075e00.htm | 仅为一般采后处理、冷却和损失记录背景；作物特定参数及本 PCR 截止点和归属须另行证据支持。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |

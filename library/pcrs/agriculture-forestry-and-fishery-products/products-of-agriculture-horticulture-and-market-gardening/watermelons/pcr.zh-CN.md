---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.watermelons
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 西瓜

## 1. 范围与适用性

本 PCR 覆盖从田地准备和播种或定植，到种植管理、采收、分级、可选清洗和农场大门交付的新鲜未加工西瓜商业生产。只要前景记录声明了生产路线，也覆盖露地和保护地种植。作为种植材料销售的西瓜种子或幼苗、加工或切开的西瓜、农场大门交付后的冷藏、配送、零售和消费均不在范围内。只有在作物残余物还田或作为声明的残余物或副产品离开农场时，残余物才继续留在系统边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.watermelons |
| classification_refs | CPC 3.0:01221 Watermelons; mapping relation: exact |
| covered_products | 为农场大门销售生产的新鲜、完整、未加工西瓜 |
| excluded_products | 作为种植材料销售的西瓜种子或幼苗，以及加工、切开、榨汁、冷冻、干燥或其他转化的西瓜和农场大门后的物流 |
| representative_product | 按声明的大小和质量分级并在农场大门交付的可销售完整西瓜 |
| production_route | 一年生播种或定植西瓜种植、田间管理、采收、分级和农场大门准备 |
| market_state | 农场大门的新鲜完整产品，以散装或声明的初级包装交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场大门的可销售新鲜完整西瓜 |
| How much | 1,000 kg |
| How well | 符合声明的品种、成熟度、大小、外观、缺陷和可销售等级标准的完整、新鲜、未加工果实 |
| How long or cycle | 从定植到该作物最后一次采收的一个声明生产周期，并报告生产年份和采收窗口 |
| reference_flow_link | watermelon_farm_gate_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 西瓜 `8979956d-8091-4c35-af7a-1ec80529bad3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 农场大门交付；生产地理位置；生产年份和作物周期；品种或种子类型；灌溉或雨养路线；果实成熟度和采收窗口；大小和等级标准；完整或受损状态；已清洗或未清洗；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收和农场大门的西瓜 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在归一化为参考流之前，分别记录总采收果实、可销售果实、淘汰果实和田间残余物的质量。 |
| `area_and_cycle_normalization` | 田间生产记录 | Area and mass | ha and kg | 分别记录每个地块和作物周期，再将所有投入和产出归一化为可销售农场大门西瓜。 |
| `nutrient_basis` | 肥料投入 | Mass | kg N, kg P2O5, or kg K2O | 只能依据有记录的养分浓度换算产品数量，并保留报告中的养分基准。 |
| `irrigation_volume` | 灌溉水 | Volume | m3 | 按地块和作物周期记录计量或有文件依据的灌溉供水；降雨与灌溉取水应分开。 |
| `seed_count_or_mass` | 种子或幼苗投入 | Number or mass | seed units or kg | 记录供应商声明的种子或幼苗数量和类型；没有有据可查的换算时，不得从数量推断种子质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好、接收西瓜种子或幼苗的农业地块，并披露前期土地利用、田地准备和排除的播种前作业 |
| starting_condition_role | 声明的一年生西瓜作物周期起点 |
| product_classification_scope | CPC 3.0:01221 下的新鲜完整西瓜，至农场大门交付 |
| recursive_input_rule | 购入的西瓜种子或幼苗是独立的上游产品投入，只链接一次，不在本 PCR 内重新创建西瓜生产过程。 |
| upstream_dataset_requirement | 在使用时，要求种子或幼苗、肥料、土壤改良剂、作物保护产品、灌溉水、能源、田间机械服务和包装的上游数据集。 |
| disclosure | 声明生产地理位置、前期土地利用、作物周期日期、品种或种子类型、灌溉制度、养分基准、作物保护计划、田间排放方法、残余物去向、采收和分级方法、清洗和包装。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_crop_cycle` | 从田地准备到最后一次采收 | 纳入声明的一年生作物周期的田地准备、播种或定植、种植管理和全部采收；共享田间作业应根据有文件依据的田间记录分配给报告作物。 | `fao-crop-production-framework`; `uga-watermelon-production-b996-2017` |
| `boundary_farm_gate` | 采收和准备 | 当可销售完整西瓜在农场大门转移时结束前景边界；仅在转移前发生时纳入农场内分级、受损果实修整、清洗、冷却和初级包装。 | `uga-watermelon-production-b996-2017`; `fao-postharvest-handling` |
| `boundary_managed_soils` | 肥料、改良剂和残余物流 | 按一种声明的计算方法纳入施用养分和还田残余物产生的直接和间接管理土壤排放，不重复计算上游数据集已表示的排放。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 淘汰果实和作物残余物 | 为每个残余物流记录还田、堆肥、饲料、处理、处置或其他声明去向；未报告去向属于数据质量缺口，不能自动作为副产品。 | `fao-crop-residue-management`; `fao-postharvest-handling` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_preparation_and_planting` | 田地准备和播种或定植 | required | 每个声明作物周期一次 | 前景田间建立 | 种植面积和种子或幼苗数量 |
| `watermelon_field_management` | 西瓜田间管理 | required | 整个声明作物周期 | 前景管理型生物生产 | 管理地块周期和作物投入记录 |
| `harvest_and_farm_gate_preparation` | 采收和农场大门准备 | required | 每次采收及最终农场大门交付 | 前景采收、分级和交付 | 1,000 kg 可销售完整西瓜 |

### 过程：田地准备和播种或定植（`field_preparation_and_planting`）

#### 输入
##### 产品流

##### 废物流

##### 基本流

###### 占用的农业土壤（`field_occupation`）

当把土地占用表示为基本流输入时，记录声明作物周期的地块面积和占用时间。普通田地占用不应作为产品投入。

- 选定流：农业用地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：地块面积乘以声明的作物周期占用时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售农场大门西瓜.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_operation_records`

#### 输出
##### 产品流

###### 已完成种植的地块（`planted_field_output`）

该内部交接记录进入西瓜田间管理的合格种植面积，不是参考产品。

- 选定流：已完成种植准备并栽种的西瓜田
- 流属性/单位：Area / ha
- 数量规则：播种或定植完成并扣除有记录的失败面积后的合格种植面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每次播种或定植作业.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_planting_records`

##### 废物流

##### 基本流

### 过程：西瓜田间管理（`watermelon_field_management`）

#### 输入
##### 产品流

###### 尿素肥料（`watermelon_field_management_agricultural_nutrient_inputs_urea`）

**watermelon_field_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 可销售农场大门西瓜.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`watermelon_field_management_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`watermelon_field_management_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-fertilizer-identities`

###### 氯化钾肥料（`watermelon_field_management_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`watermelon_field_management_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`watermelon_field_management_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-organic-nutrients`

###### 灌溉水（`irrigation_water_input`）

分别记录西瓜地块的灌溉供水、降雨和采后清洗用水。

- 选定流：灌溉供水
- 流属性/单位：Volume / m3
- 数量规则：按地块、来源和作物周期计量灌溉供水；没有水表时记录估算方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售农场大门西瓜.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：暂定灌溉水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：9000
  - 单位：m3/ha
  - 基准：等待田间用水记录和气候评估期间的灌溉或雨养作物周期宽泛范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力（`field_operation_energy_electricity`）

**field_operation_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录灌溉泵、田间机械和其他作物管理作业消耗的燃料与电力。保持每种能源载体和作业可识别。
原始活动或阶段基准：每 1,000 kg 可销售农场大门西瓜.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_field_operation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_operation_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-agricultural-energy`

此绑定为使用点交流电，未特指供电技术、电压及供应方。须确认实际为交流供电，直流电需另选身份。数据库参考为1 MJ：保留电表kWh，链接参考数量时按1 kWh = 3.6 MJ仅换算一次。内部发电衔接前景发电过程，不额外计入外购电力负担。

###### 供应设备的柴油（`field_operation_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_operation_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_operation_records`
- 来源：`uga-watermelon-production-b996-2017`；`fao-agricultural-energy`



##### 废物流

#### 输出
##### 产品流

###### 待采收西瓜作物（`harvest_ready_crop_output`）

记录进入采收作业前的作物产出。该中间产出必须与可销售农场大门西瓜和淘汰果实保持区分。

- 选定流：待收西瓜作物
- 流属性/单位：Mass / kg
- 数量规则：按地块和采收日期称量或估算进入采收和分级的总采收作物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个作物周期和每 1,000 kg 可销售农场大门西瓜.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`

##### 废物流

###### 田间作物残余物（`field_residue_output`）

记录采收后留在田间的藤蔓、叶、根及其他作物残余物，并声明其还田、移出、堆肥、处理或处置去向。

- 选定流：西瓜作物残余物
- 流属性/单位：Mass / kg wet residue
- 数量规则：按地块测量或记录残余物数量和去向；使用时应记录有据可查的干物质换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个作物周期和每 1,000 kg 可销售农场大门西瓜.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`fao-crop-residue-management`

##### 基本流

### 过程：采收和农场大门准备（`harvest_and_farm_gate_preparation`）

#### 输入
##### 产品流

###### 设备供电点的电力（`harvest_handling_energy_electricity`）

**harvest_handling_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

当采收、田间收集、分级、清洗、冷却和初级包装在农场大门转移前发生时，记录其能源消耗。
原始活动或阶段基准：每 1,000 kg 可销售农场大门西瓜.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_harvest_handling_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_handling_records`
- 来源：`fao-postharvest-handling`；`fao-agricultural-energy`

此绑定为使用点交流电，未特指供电技术、电压及供应方。须确认实际为交流供电，直流电需另选身份。数据库参考为1 MJ：保留电表kWh，链接参考数量时按1 kWh = 3.6 MJ仅换算一次。内部发电衔接前景发电过程，不额外计入外购电力负担。

###### 供应设备的柴油（`harvest_handling_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_harvest_handling_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_handling_records`
- 来源：`fao-postharvest-handling`；`fao-agricultural-energy`

###### 木制板条箱（`primary_packaging_input_wood_crate`）

**primary_packaging_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录在农场大门交付前跨越前景边界的初级包装。仅当明确声明该状态时，散装产品才记录为零包装。
原始活动或阶段基准：每 1,000 kg 可销售农场大门西瓜.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling`；`fao-package-identities`

###### 瓦楞纸板箱（`primary_packaging_input_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling`；`fao-package-identities`

###### 聚乙烯包装薄膜（`primary_packaging_input_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling`；`fao-package-identities`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 农场大门的可销售完整西瓜（`watermelon_farm_gate_output`）

这是本 PCR 的参考产品流。记录分级以及所声明的农场内清洗、冷却和初级包装之后，在农场大门交付的可销售质量。

- 选定流：西瓜 `8979956d-8091-4c35-af7a-1ec80529bad3`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：在声明的质量和分级检查后、农场大门转移时称量可销售完整西瓜。

- 数量规则：1000 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：1,000 kg 可销售农场大门西瓜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`

##### 废物流


###### 淘汰或受损西瓜（`rejected_fruit_output`）

记录采收或分级中淘汰的果实并识别去向。除非有文件证明的生产性用途符合副产品规则，淘汰果实均为废物流。

- 选定流：拒收或损伤西瓜
- 流属性/单位：Mass / kg
- 数量规则：将淘汰果实与可销售产出分开称量或估算，并保留去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售农场大门西瓜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`fao-postharvest-handling`


##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_fields` | 分配给单一作物的田间作业 | 当田间作业只服务于声明的作物周期时直接分配给西瓜；共享作业应在采用分配方法前记录。 | `fao-crop-production-framework` |
| `allocation_multiple_outputs` | 可销售果实和任何有据可查的残余物生产性用途 | 将可销售西瓜作为参考产出。若残余物或其他产出有有据可查的生产性用途并作为产品离开边界，应在共享过程中一致地采用声明的物理或经济分配方法，并披露分配基准。 | `fao-crop-residue-management` |
| `allocation_rejects_and_losses` | 无生产性用途的受损果实和作物残余物 | 根据声明去向将淘汰果实和残余物作为废物或损失处理。没有生产性用途和明确交接证据时，不得将废物流作为副产品分配负荷。 | `fao-postharvest-handling` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | 作业 watermelon_field_management：将声明周期中使用的除草剂、杀虫剂、杀菌剂和其他作物保护产品作为独立产品投入记录，并保留有效成分或配方信息。 原数量方法：根据施用记录获取产品数量，并保留配方和有效成分。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_records` | `field_preparation_and_planting` | `planting_material_input`, `planted_field_output` | 播种或定植及地块登记 | field_id; area; planting date; seed_or_transplant_type; supplier quantity; failures; replants | 供应商记录与田间日志核对；原始汇总与分配：先按地块汇总，再按可销售产出归一化 | seed units, kg, ha | 每个作物周期 | 声明的完整作物周期 | 每个地块或同质地块组 | 每声明的参考流 | 供应商发票及签署的田间登记或等效记录 |
| `cp_field_operation_records` | `field_preparation_and_planting`, `watermelon_field_management` | `field_preparation_energy`, `field_occupation`, `field_operation_energy_electricity`, `field_operation_energy_diesel` | 机械、水泵和田间登记 | field_id; operation; date; equipment; fuel or electricity; hours; area | 计量、燃料票据、机械日志或服务记录；原始汇总与分配：按有记录的面积或时间基准分配共享作业 `field_preparation_energy_specific_input`: 当整地、起垄、铺设覆盖物和播种或定植使用的柴油、电力或外购机械服务跨越前景边界时予以记录。应分别报告所选能源载体或服务。 按地块和作物周期使用燃料票据、机械日志、计量记录或供应商服务记录。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg, kWh, h, ha | 每项作业 | 声明的完整作物周期 | 每个地块或设备组 | 每声明的参考流 | 计量校准、票据或服务记录 |
| `cp_fertilizer_records` | `watermelon_field_management` | 肥料和管理土壤排放 | 养分施用登记 | field_id; product; formulation; nutrient concentration; amount; date; application method; soil or climate inputs | 肥料发票与施用日志；原始汇总与分配：按养分基准和地块求和后归一化 `managed_soil_nitrogen_emissions_specific_emission`: 使用声明的土壤排放方法，根据有记录的养分投入和相关还田残余物计算直接和间接氮排放。不得将同一排放既作为前景计算结果又作为额外的通用估算录入。 对有记录的养分投入和还田残余物应用声明的氮排放方法，并保留排放因子及气候或土壤参数。 这是必需的排放身份确认要求，不是集合式基本交换。每种适用物质及其实际接收介质须分别识别，保留兼容单位、实测活动量或有依据的计算方法、参数适用性及不确定性。保留原作业、期间、分配及最终参考流归一化规则。直接、间接路径及上游覆盖仅核算一次，不用总氮、燃烧总排放或泛称污染物替代具体化合物。适用时另行记录实际归还环境的材料及去向。完成数据集前须为每项必需交换建立具体卡片，并核验兼容UUID或明确保留未解析身份。缺少记录不等于零排放或不适用。 `ipcc-2019-managed-soils` | kg product, kg nutrient | 每次施用 | 声明的完整作物周期 | 每个地块 | 每声明的参考流 | 发票、标签、土壤测试和施用记录 |
| `cp_irrigation_records` | `watermelon_field_management` | `irrigation_water_input` | 灌溉登记 | field_id; source; date; meter start and end; estimated volume; rainfall context | 水表或有文件依据的水平衡估算；原始汇总与分配：按地块和水源汇总供水量 | m3 | 每次灌溉或每周 | 声明的完整作物周期 | 每个地块和水源 | 每声明的参考流 | 水表记录、水泵日志或供水分配记录 |
| `cp_crop_protection_records` | `watermelon_field_management` | `crop_protection_input` | 作物保护施用登记 | field_id; product; formulation; active ingredient; dose; area; date; target | 产品标签、发票和施用日志；原始汇总与分配：按产品和有效成分求和 `crop_protection_input_specific_input`: 作业 watermelon_field_management：将声明周期中使用的除草剂、杀虫剂、杀菌剂和其他作物保护产品作为独立产品投入记录，并保留有效成分或配方信息。 原数量方法：根据施用记录获取产品数量，并保留配方和有效成分。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg product, kg active ingredient, ha | 每次施用 | 声明的完整作物周期 | 每个地块 | 每声明的参考流 | 标签、发票和施用记录 |
| `cp_harvest_records` | `watermelon_field_management`, `harvest_and_farm_gate_preparation` | `harvest_ready_crop_output`, `field_residue_output`, `rejected_fruit_output`, `watermelon_farm_gate_output` | 采收和分级登记 | field_id; harvest date; gross harvested; marketable; rejected; residue; destination; grade; transfer weight | 称重单和采收或分级日志；原始汇总与分配：将总质量与可销售、淘汰和声明残余物去向核对 | kg | 每次采收 | 最终采收窗口和完整作物周期 | 每个地块、批次或采收区组 | 每声明的参考流 | 经校准的秤、称重单和去向记录 |
| `cp_residue_records` | `watermelon_field_management` | `field_residue_output` | 残余物去向记录 | field_id; residue type; wet or dry basis; amount; destination; date | 田间测量和去向确认；原始汇总与分配：按去向及适用的干物质基准汇总 | kg | 每次残余物事件 | 声明的完整作物周期 | 每个地块 | 每声明的参考流 | 称重记录、堆肥或饲料收据，或还田日志 |
| `cp_harvest_handling_records` | `harvest_and_farm_gate_preparation` | `harvest_handling_energy_electricity`, `harvest_handling_energy_diesel` | 处理和包装登记 | lot_id; operation; date; energy carrier; quantity; marketable mass | 计量、设备日志或服务记录；原始汇总与分配：按可销售质量分配能源并声明共享服务分配 | kg, kWh, h | 每批次或每项作业 | 最终采收窗口 | 包装或处理场所 | 每声明的参考流 | 计量或服务记录 |
| `cp_packaging_records` | `harvest_and_farm_gate_preparation` | `primary_packaging_input_wood_crate`, `primary_packaging_input_corrugated_box`, `primary_packaging_input_pe_film` | 包装登记 | lot_id; material; reusable or single-use; unit count; unit mass; losses; reuse cycles | 供应商规格和计数或称重记录；原始汇总与分配：汇总包装质量并记录重复使用分配 | kg, item | 每批次 | 最终采收窗口 | 包装场所 | 每声明的参考流 | 供应商规格和包装记录 |
| `cp_phase1_environment_coverage` | field_preparation_and_planting | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有库存行 | `normalized amount = field or lot amount × 1,000 kg / marketable farm-gate watermelon mass` | 地块或批次记录；可销售质量 | 每 1,000 kg 参考流的数量 |  |
| `calc_nutrient_mass` | 肥料投入 | `nutrient mass = product mass × declared nutrient concentration` | 产品质量；标签或供应商浓度 | kg N、kg P2O5 或 kg K2O | `uga-watermelon-production-b996-2017` |
| `calc_land_occupation` | 土地占用 | `occupation = field area × declared crop-cycle occupation duration` | 地块面积；播种或定植和最后采收日期 | m2*a 或声明的面积时间单位 |  |
| `calc_managed_soil_emissions` | 管理土壤氮排放 | 对有记录的养分投入和还田残余物应用一种声明的、兼容 IPCC 的方法，并将因子和假设保留在数据集内。 | 养分投入；残余物还田；土壤和气候参数 | 每参考流的基本氮排放 | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | 采收和分级 | `gross harvested = marketable + rejected + documented other destinations`，受称量精度和声明估算不确定度约束 | 采收、分级和去向记录 | 核对后的作物产出和损失记录 | `fao-postharvest-handling` |
| `calc_reusable_packaging` | 可重复使用初级包装 | 使用供应商或运营方记录，按声明的使用次数分配包装制造和损失；没有有据可查的使用次数时不得给予重复使用抵扣。 | 包装质量；使用次数；损失率 | 每参考流的包装质量 | `fao-postharvest-handling` |
| `planting_material_input_identity_and_fate` | `field_preparation_and_planting` | 对于本作业原有 planting_material_input 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_planting_records` | 按身份区分的交换和对账活动记录 | `uga-watermelon-production-b996-2017` |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考流和产出流 | 声明品种或种子类型、生产地理位置、作物周期日期、采收窗口、完整果实状态、等级和农场大门交付。 | 产品和地块登记 |
| `dq_mass_reconciliation` | 采收、淘汰、残余物和参考产出 | 在声明的称量或估算不确定度内，将总采收质量与可销售产出、淘汰果实、残余物和其他声明去向核对。 | 称重单和去向记录 |
| `dq_input_completeness` | 所有产品和基本流投入 | 核算种子或幼苗、肥料养分、灌溉、作物保护产品、田间能源、土地占用、土壤排放和纳入的处理投入；缺失记录须披露。 | 投入登记和完整性清单 |
| `dq_temporal_geographic_scope` | 所有前景记录 | 覆盖声明的完整作物周期，并识别地块、生产地理位置、生产年份、灌溉制度和任何保护地路线。 | 地块登记和生产元数据 |
| `dq_residue_destination` | 作物残余物和淘汰果实 | 为每条残余物流保留去向和数量；识别还田、饲料、堆肥、处理、处置或其他有文件依据的用途。 | 残余物和去向记录 |
| `dq_uncertainty_disclosure` | 估算值或计算值 | 标记估算、换算因子和缺少的测量，并说明其对参考流归一化结果的影响。 | 计算表和质量审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 参考数量是农场大门 1,000 kg 的完整、可销售西瓜质量，并包含所有必需限定信息。 |  |
| `validate_cycle_completeness` | 过程图和记录 | 声明的一年生作物周期包含田地准备、播种或定植、管理生产、采收和农场大门交付，并明确标记条件作业。 | `fao-crop-production-framework` |
| `validate_mass_balance` | 采收和分级 | 核对总采收、可销售、淘汰、残余物和其他去向质量，不得重复计算参考产出。 | `fao-postharvest-handling` |
| `validate_nutrient_and_water_basis` | 肥料和灌溉 | 肥料投入保留养分基准和浓度证据；灌溉量识别水源和地块，不得与降雨混淆。 | `fao-crop-evapotranspiration-56` |
| `validate_residue_and_loss_fate` | 淘汰果实和残余物 | 每条非销售物流都有声明去向或明确的数据质量发现；没有生产性用途证据时，废物不得作为副产品。 | `fao-crop-residue-management` |
| `validate_boundary_disclosure` | 数据集元数据 | 披露前期土地利用、作物周期、生产地理位置、灌溉制度、土壤排放方法、残余物去向和所有纳入的农场大门作业。 | `fao-crop-production-framework`; `ipcc-2019-managed-soils` |
| `validate_normalization` | 所有库存行 | 所有数量都可追溯到地块、作物周期、采收或批次记录，并归一化为 1,000 kg 可销售农场大门产出。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜完整西瓜农场大门生产的前景农业生产主数据集 |
| downstream_use | `secondary_dataset`；当农场大门产品和质量限定信息一致时，可作为 `background_dataset` |
| allowed_use | 对声明的农场大门交付及纳入的农场内准备过程进行新鲜完整西瓜生产 LCA 建模 |
| excluded_use | 加工或切开西瓜、种子或幼苗生产、农场大门后的储存和配送、零售、消费或未声明的作物路线 |
| required_metadata | 生产地理位置；生产年份；作物周期日期；品种或种子类型；地块面积；灌溉或雨养路线；农场大门状态；等级；清洗和包装状态；残余物去向 |
| required_quality_disclosure | 质量核对；投入完整性；养分和灌溉基准；土壤排放方法；残余物和淘汰物去向；估算值；时间和地理覆盖范围 |
| update_trigger | 种植路线、灌溉或养分实践、作物保护制度、农场大门准备、包装、分类范围或定量规则证据发生实质变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-production-framework` | official_guidance | FAO 作物生产和资源管理指南。https://www.fao.org/land-water/databases-and-software/crop-information/en/ | 一年生作物周期边界、田间记录和分配要求 |
| `uga-watermelon-production-b996-2017` | extension_guidance | University of Georgia Cooperative Extension, Commercial Watermelon Production, Bulletin 996 (2017), https://fieldreport.caes.uga.edu/publications/B996/commercial-watermelon-production/ | 佐治亚州播种、养分管理、田间作业和采收背景；PCR 边界与分配由本方法明确选择 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO 灌溉与排水文件 56《作物蒸散》。https://www.fao.org/4/X0490E/X0490E00.htm | 作物水平衡和灌溉记录方法 |
| `ipcc-2019-managed-soils` | method_factor | 2019 IPCC Refinement 农业、林业和其他土地利用部分的管理土壤方法。https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤氮排放方法 |
| `fao-crop-residue-management` | official_guidance | FAO 作物残余物和土壤管理指南。https://www.fao.org/3/y2779e/y2779e00.htm | 残余物还田和去向披露 |
| `fao-postharvest-handling` | official_guidance | FAO 采后处理指南。https://www.fao.org/4/ac301e/ac301e00.htm | 分级、损失记录、包装和农场大门准备 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-cereals-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未列名谷物籽粒

## 1. 范围与适用性

本 PCR 用于构建 CPC 3.0 `01199`“其他未列名谷物”项下栽培谷物籽粒的前景数据包，适用于没有被具名 CPC 谷物叶节点及其专用 PCR 覆盖的谷物。该类别是分类学上的剩余项，因此数据集必须说明生物学作物、在结果有影响时说明品种、预期用途和实物市场状态。

边界从播种用种子和作物建立开始，经过田间作业、收获、初级干燥、清理、调质和分级，至初级调制门或声明的后续储存、交接门的调质籽粒交付。较早农场门输出仅为实测内部转移，在本 PCR 下不能选择为参考输出。调质之前即结束的路线不属于本 PCR 范围。食品、饲料、工业和特色谷物用途均须声明用途和质量状态后才能纳入。

本 PCR 排除已有专用 PCR 的具名谷物类别，包括荞麦、金丝雀种子、福尼奥米、小米、藜麦、小黑麦、黑麦、高粱、小麦、大麦、燕麦、水稻、玉米，以及具有更窄适用 PCR 的其他作物。还排除播种用种子、全株饲草、干草、青贮、面粉、麦芽、淀粉、酒精、预制食品、饲料制造、零售包装、消费者使用及声明交付门之后的运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-cereals-n-e-c |
| classification_refs | CPC 3.0 `01199`，其他未列名谷物; mapping relation: narrower |
| covered_products | 不属于具名谷物叶节点、属于剩余类别的调质谷物籽粒，在声明的初级调制门交付 |
| excluded_products | 有专用 PCR 的具名谷物类别；播种用种子；饲草和全株产品；碾磨、制麦、发酵、预制或零售产品 |
| representative_product | 已识别的其他谷物籽粒，经初级调制调质后在声明交付门交付 |
| production_route | 一年生或多年生谷物建立、田间生产、收获、初级调制和声明交付门交接 |
| market_state | 散装或包装调质籽粒，并声明作物身份、用途、水分基准、等级、地理范围、作物年度和交付门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | CPC 01199 剩余类别中、在声明初级调制门或后续储存、交接门的已识别调质谷物籽粒 |
| How much | 1 kg |
| How well | 生物学作物及在结果有影响时的品种；用途；原样或干物质水分基准；等级或质量描述；调质和清理状态；地理范围；作物年度；声明交付门 |
| How long or cycle | 一个声明的作物周期和收获年度；当交付门位于储存之后时单独声明储存时长 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Tempered cereal grain |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 作物身份及在结果有影响时的品种；CPC 01199 剩余类别；用途；水分基准；等级或质量描述；调质/清理/干燥状态；地理范围；作物年度；所选初级调制门或后续储存、交接门；散装或包装状态 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明全部必需限定信息。若某具名谷物已有更窄 PCR，应转用该 PCR。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所选交付门报告 1 kg 已识别籽粒，并说明质量是原样质量还是水分归一化质量。 |
| `moisture_basis` | 收获和调制籽粒 | 质量和水分含量 | kg 和 percent | 记录原样质量和实测水分；若使用干物质换算，保留实测水分和公式。 |
| `nutrient_input_basis` | 肥料和氮排放 | 质量 | kg 产品和 kg 养分 | 分别保留商品肥料质量以及 N、P2O5、K2O 含量；氮排放计算使用 kg N。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分水源取水、输送灌溉水、田间消耗和排放，不得合并为一个数量。 |
| `energy_inventory` | 田间和调制能源 | 质量、体积或能量 | L、kg、MJ 或 kWh | 在归一化到籽粒产出前记录能源载体、作业、期间和换算基准。 |
| `output_reconciliation` | 收获和调制产出 | 质量 | kg | 在共同水分基准上核对合格籽粒、筛下物、残余物、拒收物和实测损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | seed_for_sowing_input_and_declared_other_cereal_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | CPC 3.0 `01199` 剩余类别中的调质其他谷物籽粒；须声明生物学身份，且不能由更窄的具名谷物 PCR 覆盖 |
| recursive_input_rule | 同类别籽粒作为播种用种子时，记录为有作物身份、批次、处理、来源和数量的上游播种投入；不得无说明地视为参考产品 |
| upstream_dataset_requirement | 上游种子、肥料、作物保护、能源、水、运输和废物处理投入须使用已识别数据集或供应商原始记录 |
| disclosure | 声明生物学作物身份、在结果有影响时的品种、作物周期、地理范围、作物年度、用途、种子来源、肥料和作物保护实践、灌溉状态、水分基准、收获和调制路线、调质状态、初级调制门、质量状态及每个非参考产出的去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | 田间生产 | 纳入播种用种子、土地占用、土壤准备、播种或定植、养分投入、适用时的灌溉、作物保护、田间作业以及收获前直接田间排放。 | `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56` |
| `boundary_harvest` | 收获和交接 | 当这些活动属于前景数据包时，纳入收获、脱粒或联合收割、田边收集以及至声明农场或初级调制交接点的交付。 | `fao-grain-postharvest-systems-1998` |
| `boundary_primary_conditioning` | 初级调制 | 纳入初级干燥、清理、分级、调质和拒收物处理至声明参考门。 | `fao-grain-postharvest-systems-1998` |
| `boundary_downstream_exclusion` | 下游加工 | 排除碾磨、制麦、淀粉或酒精转化、食品或饲料制造、零售和消费者使用；作为下游数据集建模。 | `iso-14044-2006` |
| `boundary_input_completeness` | 所有路线 | 对种子、N/P/K 及有机养分、灌溉、作物保护、土地、田间及收获能源、调制能源、直接排放、残余物、拒收物和损失进行量化或说明为零/排除。 | `ipcc-2019-managed-soils-n2o`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `other_cereal_crop_production` | 其他谷物田间生产 | required |  | foreground | 收获籽粒及相关田间残余物 |
| `other_cereal_harvest_delivery` | 收获和农场门交付 | required |  | foreground | 交付到选定交接点的收获籽粒 |
| `other_cereal_primary_conditioning` | 初级干燥、清理、调质和分级 | required | 生成调质参考流所必需 | foreground | 调制门的合格调质籽粒 |
| `other_cereal_storage_gate` | 储存和声明交付门交接 | conditional | 储存或包装改变声明交付门时纳入 | foreground | 选定交付门的籽粒 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：其他谷物田间生产（`other_cereal_crop_production`）

#### 输入
##### 产品流

###### 声明作物的播种用种子（`seed_for_sowing_input`）

记录作物专用播种种子作为上游产品投入，并保留批次身份和处理信息。种子身份须根据作物和供应商记录选择核实流，当前不强行固定。

- 选定流：作物专用播种用种子
- 流属性/单位：Mass / kg
- 数量规则：按田块和批次计量种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_input_records`
- 数量范围：暂定播种量筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：5
  - 上限：350
  - 单位：kg 种子 / ha
  - 基准：等待作物特定记录前的宽泛作物建立播种量范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 尿素肥料（`other_cereal_crop_production_agricultural_nutrient_inputs_urea`）

**other_cereal_crop_production_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`other_cereal_crop_production_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`other_cereal_crop_production_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-fertilizer-identities`

###### 氯化钾肥料（`other_cereal_crop_production_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`other_cereal_crop_production_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`other_cereal_crop_production_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-organic-nutrients`

###### 作物灌溉供水（`irrigation_water_input`）

将输送灌溉水与水源取水和田间消耗分开记录。雨养作物可以在有证据时将灌溉明确记录为零。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 数量规则：按水源和田块计量输送灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 数量范围：暂定灌溉水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3,000
  - 单位：m3 / 1,000 kg 籽粒
  - 基准：等待场址记录前的宽泛输送灌溉水范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`field_machinery_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`field_machinery_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_field_energy_records`采集`other_cereal_crop_production`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_energy_records`
- 来源：`route-energy-fao`

##### 废物流

不假定存在废物输入。只有在记录了来源和跨越前景边界时，才记录再利用有机物、回用水和废物衍生投入。

##### 基本流

当土地占用和资源取用属于前景数据包时，将其作为基本流交换记录。其身份和单位仍须服从最终过程数据集契约。

#### 输出
##### 产品流

###### 可收获其他谷物籽粒（`harvested_grain_output`）

分别记录收获籽粒总量和合格部分；合格部分进入收获过程并最终定义参考产出。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
- 数量规则：计量收获籽粒质量并记录水分和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定收获产量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：300
  - 上限：15,000
  - 单位：kg 籽粒 / ha
  - 基准：等待已识别作物和地区记录前的宽泛产量校验范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

在收获过程中记录返田残余物、移出田间的秸秆或茎秆、损坏籽粒和未收获损失，并分别记录去向。

##### 基本流

根据采集的养分和残余物记录计算直接田间排放，并分配至下述接收环境介质。

### 过程：收获和农场门交付（`other_cereal_harvest_delivery`）

#### 输入
##### 产品流

###### 来自田间生产的收获籽粒（`harvested_grain_input`）

在相同水分基准下将计量的收获产出转入交接过程，不得无说明地替换为具名谷物流。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
- 数量规则：计量从田间生产节点接收的籽粒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定收获至交接投入估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.20
  - 单位：kg 籽粒投入 / kg 合格籽粒
  - 基准：等待批次记录前的宽泛收获质量产出范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`harvest_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`harvest_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_harvest_energy_records`采集`other_cereal_harvest_delivery`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_energy_records`
- 来源：`route-energy-fao`

##### 废物流

将收获损失和移出的残余物作为有独立去向的废物或副产品流分别记录。

##### 基本流

除收获记录中说明的交换外，交接过程不假定有基本流输入。

#### 输出
##### 产品流

###### 交付至声明农场门的籽粒（`farm_gate_grain_output`）

农场门合格籽粒是进入必需初级调制过程的中间转移。在本 PCR 下不得将其作为最终参考输出；保留其独立实测质量和水分基准，并与后续合格调质产出区分。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
原始产出计量与核对要求：计量交接点合格籽粒并记录水分和质量限定信息

- 数量规则：带水分基准的实测内部转移谷物质量；与后续合格调质产出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：初级调制之前的实测农场门中间过程输出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定合格籽粒产出校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.0
  - 单位：kg 合格籽粒 / kg 收获籽粒
  - 基准：收获筛选后的合格籽粒比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 残余物、损坏籽粒和收获损失（`harvest_residue_and_loss`）

分别记录返田残余物、移出田间残余物、损坏籽粒和未计量损失及其去向。

- 选定流：收获残余物或损失流
- 流属性/单位：Mass / kg
- 数量规则：在共同水分基准上计量流质量或计算质量差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_loss_records`
- 数量范围：暂定残余物和损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：kg 干基或原样流 / 1,000 kg 合格籽粒
  - 基准：等待实测去向记录前的宽泛残余物和损失范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：初级干燥、清理和分级（`other_cereal_primary_conditioning`）

#### 输入
##### 产品流

###### 进入初级调制的收获籽粒（`conditioning_grain_input`）

当干燥、清理或分级属于声明交付门时纳入。调制前记录投入水分和质量。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
- 数量规则：称量调制线投入并测定水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 调制门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 数量范围：暂定调制投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.20
  - 单位：kg 投入籽粒 / kg 合格籽粒
  - 基准：水分校正前的宽泛质量产出校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调制用电（`conditioning_electricity_input`）

按批次或作业期记录干燥机、清理机、输送机、风机和分级设备用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：按计量或账单将用电分配至调制批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 调制门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 数量范围：暂定调制用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kWh / 1,000 kg 合格籽粒
  - 基准：清理、输送和分级的宽泛首轮能源范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

将筛下物、粉尘、损坏籽粒和拒收流分别记录，并记录实测水分和去向。

##### 基本流

干燥和燃烧排放根据确认的能源记录和声明因子计算。

#### 输出
##### 产品流

###### 调制后合格调质籽粒（`conditioned_grain_output`）

调制后的合格调质籽粒是声明初级调制门的参考产出。

- 选定流：调质谷物籽粒 `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：称量调制后合格批次产出并记录水分和等级

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：定量参考产出.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioned_output_records`
- 数量范围：暂定调制产出率筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.80
  - 上限：1.00
  - 单位：kg 合格籽粒 / kg 调制投入
  - 基准：水分和拒收物核对后的合格产出比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

干燥、粉尘和燃烧排放报告至前景过程数据集所选接收环境介质。

### 过程：储存和声明交付门交接（`other_cereal_storage_gate`）

#### 输入
##### 产品流

###### 进入声明储存或包装的籽粒（`storage_grain_input`）

当储存或包装属于声明交付门时，记录期初库存、水分、质量和批次身份。

- 选定流：前一交付门的其他谷物籽粒
- 流属性/单位：Mass / kg
- 数量规则：称量批次投入并记录期初水分和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_inventory_records`
- 数量范围：暂定储存投入质量估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.20
  - 单位：kg 籽粒投入 / kg 合格籽粒
  - 基准：等待批次核对前的宽泛储存投入范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存用电（`storage_electricity_input`）

按批次或储存期间记录风机、输送机、通风和其他储存用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：按计量或账单根据批次和时长分配储存用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_energy_records`
- 数量范围：暂定储存能源筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kWh / 1,000 kg 籽粒
  - 基准：等待批次记录前的宽泛储存和通风能源范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

记录储存损失、腐败和损坏产品，并记录时长、水分、质量和去向。

##### 基本流

除已有记录的储存资源交换外，不假定存在基本流输入。

#### 输出
##### 产品流

###### 声明参考交付门的调质籽粒（`declared_gate_grain_output`）

当储存或包装位于初级调制门之后时，最终合格调质批次是参考产出。

- 选定流：调质谷物籽粒 `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：称量合格产出并记录水分、质量、包装状态和储存时长

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：定量参考产出.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_gate_output_records`
- 数量范围：暂定储存产出率估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.90
  - 上限：1.00
  - 单位：kg 合格籽粒 / kg 储存籽粒
  - 基准：等待批次记录前的宽泛储存质量产出范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 储存损失或腐败（`storage_loss`）

将质量损失和去向与合格籽粒分开记录。

- 选定流：储存损失或腐败的谷物籽粒
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量实际受损、拒收或损失物流，各材料数量互斥。按匹配水分/组分基准核对：期初库存+接收=合格发运+其他外部转出+拒收移出+独立有据物理损失+期末库存。跨本节点返回的返工量只作为一对转移，仍留存时纳入期末库存，不是额外最终产出。未解释平衡差属于调查项，不能自动作为实体废物或排放。不将移出批次加到接收、不漏期末库存，也不重复扣除已属于本报告物流的损失。每一有据转出量归属后按合格最终产出归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交付门的合格籽粒.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_inventory_records`
- 数量范围：暂定储存损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 损失 / kg 储存籽粒
  - 基准：等待库存记录前的宽泛储存损失校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

当熏蒸、能源或废物处理跨越前景边界时，报告储存相关排放。


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：调质谷物籽粒
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
- 选定流：调质谷物籽粒
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

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 田间、收获、调制和储存 | 当田块、机械、批次或储存记录支持独立过程节点时，首先通过细分操作避免分配。 | `iso-14044-2006` |
| `allocation_grain_and_residue` | 合格籽粒和移出残余物 | 按声明去向处理返田残余物。当移出残余物或副产品与不可分过程共同产生时，采用明确声明的物理或经济分配并披露敏感性。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_screenings_and_rejects` | 筛下物、损坏籽粒和储存损失 | 将合格籽粒、筛下物、拒收物和损失作为有去向的独立流记录。没有记录返工或分配决定时，不得把拒收物分配给参考产出。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_substitution` | 残余物或副产品利用 | 只有在声明被替代产品、市场、路线和证据时才应用替代法；不得从通用残余物名称推断替代信用。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | 作业 other_cereal_crop_production：根据供应商或施用记录，按制剂产品或活性物质记录每种作物保护产品。不得用通用农药 UUID 替换具体产品身份。 原数量方法：按施用记录计量制剂产品或活性物质质量 |
| `field_machinery_fuel_specific_input` | `cp_field_energy_records` | 作业 other_cereal_crop_production：在换算至声明产出基准前，按田间作业、机械和作物批次记录燃料。 原数量方法：按田间作业计量燃料，并保留载体和原始单位 |
| `harvest_fuel_input_specific_input` | `cp_harvest_energy_records` | 作业 other_cereal_harvest_delivery：当属于声明边界时，记录联合收割、脱粒、机上干燥和田边收集能源。 原数量方法：按机械和收获批次计量收获燃料 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `other_cereal_crop_production` | seed for sowing | seed lot and receiving record | crop; cultivar; supplier; lot; treatment; mass; moisture; date; field | calibrated scale, invoice, supplier record, or farm log；原始汇总与分配：sum by field and crop lot | kg | per seed lot | crop cycle | field or farm | 每声明的参考流 | scale calibration, invoice, supplier record |
| `cp_nutrient_input_records` | `other_cereal_crop_production` | N, P, K, and organic nutrients | purchase and application record | product; nutrient; product mass; nutrient content; date; field; method | invoice, nutrient analysis, application log, or applicator record；原始汇总与分配：sum by product and nutrient, then normalize to output | kg product and kg nutrient | per application | crop cycle | field or farm | 每声明的参考流 | invoice, analysis, application log |
| `cp_irrigation_records` | `other_cereal_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pump log, invoice, or irrigation record；原始汇总与分配：distinguish withdrawal, delivery, and consumption before summing | m3, kg, and energy unit | event or period | irrigation season | field and source | 每声明的参考流 | meter calibration, readings, invoice |
| `cp_crop_protection_records` | `other_cereal_crop_production` | crop protection | application record | product; active substance; formulation; mass; date; field; method | spray log, label, invoice, or applicator record；原始汇总与分配：sum by product or active substance and normalize to output `crop_protection_input_specific_input`: 作业 other_cereal_crop_production：根据供应商或施用记录，按制剂产品或活性物质记录每种作物保护产品。不得用通用农药 UUID 替换具体产品身份。 原数量方法：按施用记录计量制剂产品或活性物质质量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg product or active substance | per application | crop cycle | field or farm | 每声明的参考流 | label, log, applicator record |
| `cp_field_energy_records` | `other_cereal_crop_production` | field fuel and electricity | field-operation record | operation; machine; carrier; quantity; field; date | fuel log, invoice, telematics, or meter；原始汇总与分配：sum by operation and normalize to selected gate output `field_machinery_fuel_specific_input`: 作业 other_cereal_crop_production：在换算至声明产出基准前，按田间作业、机械和作物批次记录燃料。 原数量方法：按田间作业计量燃料，并保留载体和原始单位 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | L, kg, MJ, or kWh | per operation | crop cycle | field or farm | 每声明的参考流 | invoice, machine log, telematics |
| `cp_harvest_output_records` | `other_cereal_crop_production` | harvested and accepted grain | harvest record | field; date; gross grain; accepted grain; moisture; grade; residue; loss | calibrated scale, harvest ticket, moisture test, and dispatch record；原始汇总与分配：reconcile gross, accepted, residue, and loss on common basis | kg and percent | harvest event | crop year | field and farm | 每声明的参考流 | scale calibration, ticket, moisture test |
| `cp_harvest_energy_records` | `other_cereal_harvest_delivery` | harvest fuel | machine or contractor record | machine; carrier; quantity; harvested mass; date; period | invoice, fuel log, telematics, or meter；原始汇总与分配：allocate by recorded harvested mass and operation `harvest_fuel_input_specific_input`: 作业 other_cereal_harvest_delivery：当属于声明边界时，记录联合收割、脱粒、机上干燥和田边收集能源。 原数量方法：按机械和收获批次计量收获燃料 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | L, kg, MJ, or kWh | event or period | crop cycle | field to hand-off | 每声明的参考流 | invoice, telematics, meter |
| `cp_residue_and_loss_records` | `other_cereal_harvest_delivery` | residue, damaged grain, and loss | residue/fate record | stream; mass; moisture; fate; destination; field; date | scale ticket, field log, transfer, sale, or disposal record；原始汇总与分配：sum by stream and fate; do not merge with accepted grain | kg | event or campaign | crop cycle | field and hand-off | 每声明的参考流 | scale ticket, fate record, field log |
| `cp_emission_activity_records` | `other_cereal_harvest_delivery` | direct emissions activity data | nutrient, residue, and energy ledger | N input; residue; fuel; factor tier; receiving compartment; period | linked activity records and method calculation sheet；原始汇总与分配：preserve factor selection and compartment in calculation output `direct_field_emissions_specific_emission`: 直接排放根据养分、残余物和能源记录计算，不纳入籽粒质量平衡。 根据采集投入和选定方法因子计算 这是必需的排放身份确认要求，不是集合式基本交换。每种适用物质及其实际接收介质须分别识别，保留兼容单位、实测活动量或有依据的计算方法、参数适用性及不确定性。保留原作业、期间、分配及最终参考流归一化规则。直接、间接路径及上游覆盖仅核算一次，不用总氮、燃烧总排放或泛称污染物替代具体化合物。适用时另行记录实际归还环境的材料及去向。完成数据集前须为每项必需交换建立具体卡片，并核验兼容UUID或明确保留未解析身份。缺少记录不等于零排放或不适用。  | kg N, kg residue, L, MJ, or kWh | crop cycle or operation | crop year | field and hand-off | 每声明的参考流 | linked records, factor declaration |
| `cp_conditioning_input_records` | `other_cereal_primary_conditioning` | conditioning input | line or batch record | batch; input mass; moisture; grade; date; source lot | calibrated scale and quality test；原始汇总与分配：sum batches and retain input identity | kg and percent | per batch | conditioning campaign | facility and line | 每声明的参考流 | scale calibration, quality test |
| `cp_conditioning_energy_records` | `other_cereal_primary_conditioning` | electricity and heat | facility energy record | line; carrier; quantity; batch; period; input/output mass | meter, bill, equipment log, or fuel record；原始汇总与分配：allocate to batch and normalize to accepted output `conditioning_heat_input_specific_input`: 当选择干燥时记录干燥机热载体和数量；在前景记录中区分燃料和供应热量。 计量热量或燃料，并换算为供应工艺热 这是必需的具体投入采集要求，不是选定交换。按原始记录识别每种实际配方产品、载能体或独立供应服务，保留物理身份、状态、原生数量及供应商规格。完成数据集前，每种实际投入须单独建立具体卡片，核验兼容UUID或明确保留未解析身份。产品质量与所含有效成分质量是不同台账，仅凭有记录的组成换算，不将两者重复作为两次采购。成品饲料和另加组分不得重复核算成品配方。区分燃料采购、外购电力或热量及包含用能的机械服务，各按实际边界仅计一次。保留原作业、期间、归属及最终产出归一化规则。身份或记录缺失不等于零用量，不提供通用组分范围或编造配方。  | kWh, MJ, L, or kg | batch or campaign | conditioning campaign | facility and line | 每声明的参考流 | meter, bill, equipment log |
| `cp_conditioning_reject_records` | `other_cereal_primary_conditioning` | screenings, dust, and rejects | reject/fate record | batch; stream; mass; moisture; quality; fate | calibrated scale, reject log, dust record, or transfer record；原始汇总与分配：reconcile input, accepted output, rejects, dust, and loss | kg and percent | batch or campaign | conditioning campaign | facility and line | 每声明的参考流 | scale, reject log, fate record |
| `cp_conditioned_output_records` | `other_cereal_primary_conditioning` | accepted conditioned grain | output and quality record | batch; mass; moisture; grade; cleaning status; gate | calibrated scale and quality test；原始汇总与分配：sum accepted batches at declared basis | kg and percent | per batch | conditioning campaign | facility and gate | 每声明的参考流 | scale, quality test, dispatch record |
| `cp_storage_inventory_records` | `other_cereal_storage_gate` | storage input and loss | inventory reconciliation | lot; opening; closing; moisture; duration; losses; transfers; fate ；期初期末库存；接收；发运；其他外部转出；实测拒收；独立有据损失；配对返工；水分/组分基准；未解释平衡差| 计量各实际物流并按匹配水分/组分基准核对：期初库存+接收=合格发运+其他外部转出+拒收移出+独立有据物理损失+期末库存。返工/返回配对，留存材料纳入库存。未解释差额为证据缺口，不能自动成为废物或排放。保留归属并按匹配最终合格产出归一化一次。 | kg, percent, days | lot or period | declared storage duration | storage site | 每声明的参考流 | inventory record, scale, log |
| `cp_storage_energy_records` | `other_cereal_storage_gate` | storage electricity | meter or utility record | lot; carrier; quantity; date; duration; allocation basis | meter, bill, or equipment log；原始汇总与分配：allocate by lot mass and duration unless dedicated meter exists | kWh or MJ | lot or period | storage duration | storage site | 每声明的参考流 | meter, bill, log |
| `cp_declared_gate_output_records` | `other_cereal_storage_gate` | final accepted grain | gate or dispatch record | lot; gate; date; mass; moisture; grade; packaging state | scale, weighbridge, quality record, and dispatch ticket；原始汇总与分配：sum accepted lots and preserve gate identity | kg and percent | shipment or gate event | declared gate period | declared gate | 每声明的参考流 | scale, quality, dispatch record |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |
| `cp_phase1_environment_coverage` | other_cereal_crop_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_output` | all foreground flows | 记录流数量 / 所选交付门的合格籽粒质量 * 1 kg 参考数量 | 适用协议记录和声明交付门产出 | 每 kg 参考籽粒的数量 | `mass-balance-identity` |
| `convert_moisture_basis` | 籽粒和残余物核对 | 干物质质量 = 原样质量 * (1 - 水分比例)；保留原样质量和实测水分 | 收获、调制、储存和残余物记录 | 共同比较质量基准 | `mass-balance-identity` |
| `calculate_nutrient_amounts` | 肥料投入 | 商品产品质量 * 声明养分比例；分别保留产品质量和养分质量 | `cp_nutrient_input_records` | kg N、kg P2O5 和 kg K2O 投入 | `mass-balance-identity` |
| `calculate_irrigation_withdrawal` | 灌溉 | 分别计算并报告按水源计量的取水量、输送量和有记录的消耗量 | `cp_irrigation_records`; 声明交付门产出 | 每参考产出的水量 | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_emissions` | 田间养分排放 | 对计入的养分投入使用所选 IPCC 层级和因子，适用时将 N2O-N 换算为 N2O，并披露因子和环境介质 | `cp_nutrient_input_records`; `cp_emission_activity_records` | 每参考产出的直接排放 | `ipcc-2019-managed-soils-n2o` |
| `reconcile_harvest_outputs` | 田间和收获 | 在共同水分基准上，合格籽粒 + 移出残余物 + 返田残余物 + 实测损失 = 收获产出；解释差额 | `cp_harvest_output_records`; `cp_residue_and_loss_records` | 收获质量平衡 | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | 初级调制 | 在共同水分基准上，合格籽粒 + 筛下物 + 粉尘 + 拒收物 + 实测损失 = 调制投入；解释差额 | `cp_conditioning_input_records`; `cp_conditioning_reject_records`; `cp_conditioned_output_records` | 调制产出率和损失 | `mass-balance-identity` |
| `allocate_storage_energy` | 储存 | 除非专用计量支持直接分配，否则根据批次质量和声明时长分配储存能源 | `cp_storage_energy_records`; `cp_storage_inventory_records` | 每参考产出的储存能源 | `iso-14044-2006` |
| `conditioning_rejects_identity_and_fate` | `other_cereal_primary_conditioning` | 原作业产生相关物料时，conditioning_rejects 的采集职责必须履行。每种物理上独立的物流须分别记录实际材料、组成、状态、实测质量与去向。粉尘、糠壳、籽粒、包装及产品拒收物不能仅因在同一作业产生而共用交换；真实混合物流仅在组成和处理边界有据时可单列一张卡。降级农产品须区分具有接收者和用途证据的预期可销售联产品与实际送处理的废物；等级较低本身不决定废物属性或分配。场内返工／回用和留田生物量保留在对账的内部台账，不作为外运废物。完整性通过前须按实际属性建立具体产品或废物卡，使用相容的已核验 UUID 或明确未解析身份；保留可归属负荷，不作无据替代抵扣，各物流不得双计。实测量仅按原有合格参考产出归一化一次。身份、数量或去向缺失时不得宣称完整，不推定聚合默认量或数值界限。 | `cp_conditioning_reject_records` | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_residual_cereal_identity` | 产品身份 | 声明生物学作物及在结果有影响时的品种，并确认产品属于 CPC 01199 剩余项，而非已有专用 PCR 的具名谷物叶节点。 | 产品元数据、作物记录、合同或分类审查 |
| `dq_gate_and_moisture` | 参考流和产出 | 记录所选交付门、原样质量、水分基准，并记录每个核对流的干物质换算。 | 称量、水分测试、交付记录和计算记录 |
| `dq_temporal_coverage` | 田间生产和收获 | 覆盖声明作物周期和收获年度，并披露单年度、多年度平均或情景状态。 | 有日期的农场、收获和投入记录 |
| `dq_input_completeness` | 田间和调制 | 对种子、养分、灌溉、作物保护、土地、田间能源、收获能源、调制能源和直接排放进行量化或说明为零/排除。 | 台账、发票、日志、计量器和方法声明 |
| `dq_output_fate` | 残余物、拒收物和损失 | 记录每个非参考产出的质量基准、边界交叉、目的地和去向；未解决的重要去向会阻止最终确定。 | 称量、田间日志、处置、转移或销售记录 |
| `dq_quality_descriptor` | 籽粒状态 | 记录用途、水分、等级、清理状态和与所选交付门有关的其他质量描述，不自行设定通用接收限值。 | 质量测试、买方规格或现场记录 |
| `dq_uuid_identity` | 身份引用 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | 身份记录和审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_residual_category` | 产品身份 | 确认生物学作物已声明、属于 CPC 01199，且不是已有更具体 PCR 的具名谷物；适用时转用更窄 PCR。 | `iso-14044-2006` |
| `validation_reference_flow` | 参考流 | 确认在声明交付门上以 1 kg 质量为基准，并具备作物身份、用途、水分基准、质量状态、地理范围、作物年度和交付门限定信息。 | `mass-balance-identity` |
| `validation_process_completeness` | 过程图和清单 | 确认已纳入作物生产、收获以及包含调质的初级调制。仅在所选最终输出之前实际发生储存或后续交接时纳入对应过程；农场门转移不能替代调质参考输出。 | `fao-grain-postharvest-systems-1998` |
| `validation_nutrient_and_emission_accounting` | 养分和排放 | 确认商品肥料质量与养分质量分开，因子选择已声明，N2O-N 换算透明，相关氮路径已处理。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | 灌溉 | 确认取水、输送、消耗和排放相互区分，且水量没有重复计算。 | `fao-crop-evapotranspiration-56` |
| `validation_moisture_and_mass_balance` | 产出 | 确认收获、调制、储存、残余物、拒收物和损失的核对使用共同水分基准，且每个流都有去向。 | `mass-balance-identity` |
| `validation_allocation` | 共产品和残余物 | 确认首先考虑细分；声明任何分配方法；替代法具有证据支持的被替代产品；重要时报告敏感性。 | `iso-14044-2006` |
| `validation_uuid_review` | 身份引用 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当声明的生物学身份、剩余分类、用途、交付门、地理范围、年度、水分、质量状态和路线与数据集元数据一致时，用于下游谷物、食品、饲料、工业或 LCA 数据构建 |
| excluded_use | 有专用 PCR 的具名谷物；播种用种子；饲草；面粉、麦芽、淀粉、酒精、预制食品、饲料制造、零售、消费者使用；交付门不兼容或重要物料去向未解决的数据集 |
| required_metadata | 参考流；生物学作物和品种；CPC 01199 剩余项状态；用途；地理范围；作物周期和年度；种子来源；灌溉；养分和作物保护记录；水分基准；质量描述；收获和调制路线；声明交付门；残余物、拒收物和损失去向；分配；数据质量声明 |
| required_quality_disclosure | 原始记录覆盖；时间和地理代表性；水分和质量平衡处理；养分和排放因子；身份覆盖和未映射流披露；遗漏投入；分配和敏感性；模块清单结果 |
| update_trigger | 作物身份、分类范围、路线、交付门、水分或质量表达、施肥或作物保护实践、灌溉、收获或调制技术、储存时长、因子来源、UUID 绑定或证据状态发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-grain-postharvest-systems-1998` | official_guidance | FAO, *Agricultural engineering in development — Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | 收获、干燥、清理、储存、损失和初级调制过程分解 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | 灌溉数据采集以及取水、输送和消耗的区分 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤 N2O 方法选择、活动数据和因子披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, <https://www.iso.org/standard/38498.html> | 分配层级、系统边界、清单和质量披露 |
| `mass-balance-identity` | method_factor | 应用于 PCR 计算的质量守恒计算恒等式。 | 收获、调制、储存、水分换算和产出核对 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

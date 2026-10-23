---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cashew-nuts-in-shell
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 带壳腰果

## 1. 范围与适用性

本 PCR 适用于在受管理的多年生腰果园中生产，并在声明的农场、初级调制或储存交接点交付的带壳腰果前景数据包。范围包括果园建立和补植、未结果期和结果期管理、采收与收集、腰果苹果分离、干燥、清理、带壳质量分选、储存以及声明交接。

规范参考流遵循平台记录 `Cashew nuts, in shell`，CPC 3.0 为 `01372`，平台限定信息为 `Production mix, at farm gate; Fresh, unprocessed produce`。数据集必须披露声明交接点是鲜品农场门参考状态，还是经过干燥、清理、分级或储存的延伸状态，不能将这些状态静默混合。

本 PCR 适用于常规、综合、有机、雨养和灌溉路线，但必须披露品种或品种组、地理位置、果园年龄、作物年度、采收方式、干燥路线、水分基准、质量状态和交接点。不包括苗圃生产、腰果脱壳取仁、烘烤、蒸煮、去皮、腰果壳液回收、仁分级、食用坚果加工、零售包装、消费者使用以及声明交接点后的运输或储存。本 PCR 不选择“other”或 n.e.c. 产品类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cashew-nuts-in-shell` |
| classification_refs | CPC 3.0 `01372`，Cashew nuts, in shell; mapping relation: exact |
| covered_products | 保留硬壳的腰果，包括农场门鲜收带壳腰果，以及在声明延伸交接点交付的干燥、清理、分级或储存带壳腰果批次 |
| excluded_products | 腰果仁和去壳腰果；烘烤、蒸煮、去皮、加盐、研磨、制油、糖果、饮料及其他下游腰果产品；苗圃投入和交接点后物流 |
| representative_product | 分离腰果苹果、保留硬壳、披露水分和质量状态，并在声明交接点交付的合格带壳腰果 |
| production_route | 多年生腰果园建立和管理、采收与收集、腰果苹果分离、初级干燥和清理、带壳分级、可选储存和声明交接 |
| market_state | 披露品种或品种组、尺寸或等级、壳和仁质量、水分基准、作物年度、地理位置、合格和拒收质量以及交接点的鲜品农场门或干燥调制带壳腰果批次 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交接点的带壳腰果，保留硬壳并已分离腰果苹果 |
| How much | 1,000 kg 净带壳腰果 |
| How well | 品种或品种组；生产国家、地区和气候；果园年龄和结果状态；作物年度；鲜品或干燥状态；水分基准；壳和仁质量；尺寸或等级；合格、降级和拒收质量；腰果苹果去向；交接点 |
| How long or cycle | 多年生果园结果寿命内声明的一个作物年度；建立、未结果年份、补植和清除按果园寿命和合格产出基准分配 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 带壳腰果 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或品种组；果园地块和地理位置；建立年份、果园年龄、结果状态和补植事件；土壤和气候；灌溉状态和水源；作物年度或平均期；采收成熟度和腰果苹果分离方式；鲜品或干燥状态；水分基准；壳状况；尺寸或等级；合格、降级、拒收和损失质量；腰果苹果去向；储存时间和条件；交接点 |

`必需限定信息` 必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。净产品质量不包括容器皮重。平台身份是鲜品农场门产品流；干燥或储存批次是延伸交接状态，必须保留该限定信息，不能伪装成新的产品类别。不得用去壳腰果仁作为本 PCR 的参考产品。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以声明交接点的净合格带壳腰果表示参考流，并排除容器皮重。 |
| `fresh_or_conditioned_gate` | 参考流和交接输出 | 质量和声明产品状态 | kg 和声明状态 | 分开记录鲜品农场门、干燥调制和储存交接状态；没有实测水分和质量换算时，不得将干燥后质量当作鲜品质量。 |
| `yield_and_output_basis` | 果园、采收、调制和储存输出 | 质量和面积 | kg 和 ha | 归一化前，对同一果园年度、批次或报告期记录采收腰果、合格等级、腰果苹果、拒收物、异物、储存损失和未解释损失。 |
| `moisture_basis` | 采收、干燥、储存和合格腰果 | 质量和水分分数 | kg 和声明分数 | 保留接收质量和水分；仅使用实测水分以及透明的水质量或干物质方程在鲜品和干燥状态之间换算。 |
| `shell_and_kernel_quality` | 合格带壳产品 | 声明质量属性 | 声明单位 | 保留壳完整性、壳变色、空壳、虫害或霉变、仁缺陷基准、异物、尺寸或等级和干燥充分状态，不用统一默认等级替代。 |
| `orchard_life_allocation_basis` | 建立、补植和未结果期投入 | 面积、时间或质量活动属性 | ha、果园年或 kg 产品 | 将多年生建立、未结果年份、补植树和清除按果园寿命及合格产出基准分配，并披露未结果年份和补植事件。 |
| `nutrient_product_and_n_basis` | 养分和土壤改良投入 | 产品和养分质量 | kg 产品及 kg N、P2O5 或 K2O | 分开记录配方产品质量和有文件支持的养分含量；氮排放计算使用声明的 kg N。 |
| `water_basis` | 灌溉和湿法处理 | 体积或质量 | m3 或 kg | 区分交付灌溉水、自然资源取水、排水或消耗指标以及可选湿法清理水；干法路线对湿法清理水记录有说明的零值。 |
| `energy_inventory` | 果园、采收、干燥、分级和储存 | 质量、体积或能量 | kg、L、MJ 或 kWh | 保留能源载体、单位、作业、设备、期间和换算基准，并区分燃料、电力和热干燥能源。 |
| `packaging_quantity` | 交接点内可选储存包装 | 质量或件数 | kg、g 或 item | 包装跨越声明边界时，记录包装质量或件数、包装容量、材料、重复使用状态和批次归属。 |

## 5. 系统边界

默认前景边界从声明的果园起始条件开始，经过多年生果园管理、采收与收集、腰果苹果分离，到合格带壳腰果在鲜品农场门的交接。延伸调制路线另纳入日晒或机械干燥、清理、带壳质量分选、储存和声明的后处理交接点。种植材料、肥料、植保产品、灌溉水、能源载体、机械服务和包装的上游生产使用有代表性的背景数据集。脱壳取仁、腰果壳液回收、仁加工、零售、交接点后运输和储存不在默认边界内。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 建园前或建立时的果园地块，种植材料和购买的管理投入跨越前景边界；既有土地用途和果园历史单独披露 |
| starting_condition_role | 受管理多年生腰果生产和果园资产核算的起点 |
| product_classification_scope | CPC 3.0 `01372`，Cashew nuts, in shell；去壳腰果和下游腰果产品不在本 PCR 内 |
| recursive_input_rule | 同类种植材料或跨越边界的保留带壳腰果作为上游投入记录，不递归展开为另一个带壳产品输出。果园、采收、调制和储存之间的内部交接是过程链接，不是额外市场输出。 |
| upstream_dataset_requirement | 苗圃材料、养分产品、植保、灌溉供水、燃料、电力、干燥能源、包装、机械服务和废物处理跨越边界时，使用有代表性的上游数据集。 |
| disclosure | 品种和果园地块；地理位置、土壤、气候和土地历史；建立年份、果园年龄、结果寿命和补植；灌溉水源和水质；养分和植保；采收成熟度和腰果苹果去向；鲜品或干燥状态；干燥方式和水分；壳和仁质量；等级、拒收和储存记录；交接点；以及任何有意腰果苹果副产品交付 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_to_farm_gate` | 所有符合条件的数据集 | 纳入多年生果园建立、未结果年份、结果期管理、采收、收集、腰果苹果分离和声明鲜品农场门交接。 | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `boundary_conditioning_extension` | 延伸后处理路线 | 只有声明交接点超出鲜品农场门，或这些作业属于前景数据包时，才纳入干燥、清理、带壳分级和储存；报告延伸交接点，不得重新标注为平台鲜品未加工状态。 | `fao-cashew-postharvest-2020`; `fao-cashew-minor-oil-crops` |
| `boundary_perennial_orchard_disclosure` | 建立和补植 | 将建立、未结果年份、补植树和清除按果园寿命及合格产出基准分配，并披露寿命、未结果年份和补植事件。 | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `boundary_no_shelling` | 带壳产品 | 硬壳属于产品边界；排除脱壳取仁、腰果壳液回收、仁分离、烘烤、蒸煮、去皮和仁分级，因为它们属于下游去壳仁路线。 | `fda-cashew-nut-methods`; `fao-cashew-minor-oil-crops` |
| `boundary_quality_and_fate` | 所有输出 | 按实测质量和声明去向区分合格带壳腰果、腰果苹果、降级批次、拒收腰果、异物、粉尘、水分损失和未解释损失。 | `fao-cashew-postharvest-2020`; `fda-cashew-nut-methods`; `mass-balance-identity` |

## 6. 过程清单结构

前景路线采用批次模式。每个采收轮次、调制批次、分级批次和储存收货都必须有批次或 campaign 标识，并声明开始、结束、输入集合、输出集合、清场或换批事件以及报告期间。共用设备和共用运行负荷只归属于相关批次或 campaign 一次。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cashew_orchard_establishment_and_management` | 腰果园建立和管理 | required |  | foreground | 果园年度投入和合格产出基准 |
| `cashew_harvest_and_collection` | 腰果采收、腰果苹果分离和收集 | required |  | foreground | 可选调制前的采收腰果 |
| `cashew_primary_drying_cleaning_and_grading` | 腰果初级干燥、清理和带壳分级 | conditional | 声明交接点超出鲜品农场门，或前景数据包包含这些作业时纳入 | primary conditioning and stabilization | 接收批次和等级输出 |
| `cashew_storage_and_gate_handoff` | 腰果储存和交接 | conditional | 声明前景边界包含储存或后处理交接点时纳入 | storage and delivery hand-off | 1,000 kg 声明交接输出 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：腰果园建立和管理（`cashew_orchard_establishment_and_management`）

#### 输入
##### 产品流

###### 腰果种植和补植材料（`cashew_planting_material`）

按地块和事件记录苗木、嫁接材料、补植树、支杆以及归属的建园材料，并将其按果园寿命和合格带壳产出年度化。

- 选定流：腰果苗木和补植材料
- 流属性/单位：件数或质量 / item 或 kg
- 数量规则：按地块和建立或补植事件实测数量，并按合格产出年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳腰果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cashew_orchard_lifecycle_records`
- 数量范围：暂定种植材料筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：150
  - 单位：每 1,000 kg 参考产品的 kg 或种植单位
  - 基准：果园建立和补植的宽范围首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 尿素肥料（`cashew_orchard_establishment_and_management_agricultural_nutrient_inputs_urea`）

**cashew_orchard_establishment_and_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 合格带壳腰果.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cashew_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_orchard_input_records`
- 来源：`ipcc-2019-afolu`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`cashew_orchard_establishment_and_management_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cashew_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_orchard_input_records`
- 来源：`ipcc-2019-afolu`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`cashew_orchard_establishment_and_management_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cashew_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_orchard_input_records`
- 来源：`ipcc-2019-afolu`；`fao-fertilizer-identities`

###### 氯化钾肥料（`cashew_orchard_establishment_and_management_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cashew_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_orchard_input_records`
- 来源：`ipcc-2019-afolu`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`cashew_orchard_establishment_and_management_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cashew_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_orchard_input_records`
- 来源：`ipcc-2019-afolu`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`cashew_orchard_establishment_and_management_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cashew_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_orchard_input_records`
- 来源：`ipcc-2019-afolu`；`fao-organic-nutrients`

###### 供应的灌溉水（`cashew_irrigation_water`）

按水源、地块和作物年度记录交付灌溉；经验证的雨养路线以水量平衡证据记录有说明的零值。

- 选定流：供应至腰果园的灌溉水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：按水源、地块和作物年度计量或有证据的交付灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳腰果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_irrigation_records`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：2,500
  - 单位：每 1,000 kg 参考产品的 m3
  - 基准：雨养至灌溉果园的宽范围用水区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`cashew_orchard_energy_diesel`)

实际柴油机械进行果园地表管理及作物照护；灌溉泵供能独立确认，不直接套用拖拉机燃料。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_cashew_energy_records`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cashew_energy_records`
- 来源：`route-energy-fao`

执行第8节`cashew_orchard_energy_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

##### 基本流
###### 腰果园土地占用（`cashew_land_occupation`）

按地块和作物年度记录种植面积与果园占用；土地转化单独记录，不能由占用量推断。

- 选定流：腰果园农业土地占用
- 流属性/单位：面积时间 / ha·果园年
- 数量规则：按面积和作物年度实测，并按合格产出年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳腰果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cashew_orchard_lifecycle_records`
- 数量范围：暂定土地占用筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0.1
  - 上限：6
  - 单位：每 1,000 kg 参考产品的 ha·果园年
  - 基准：多年生坚果作物果园面积宽范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出
##### 基本流

##### 废物流

###### 果园修剪和补植残余（`cashew_orchard_residue`）

按质量、水分、地块、期间和去向记录修剪、清除树木和补植残余；没有有证据的有意交付时，不将其当作副产品。

- 选定流：腰果园生物质残余
- 流属性/单位：质量 / kg 干物质或接收状态
- 数量规则：按去向称量或透明估算残余
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳腰果.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_orchard_lifecycle_records`
- 数量范围：暂定果园残余筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：1,500
  - 单位：每 1,000 kg 参考产品的 kg 接收状态残余
  - 基准：修剪、补植和果园地面残余的宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：腰果采收、腰果苹果分离和收集（`cashew_harvest_and_collection`）

#### 输入
##### 产品流

###### 可采收的带壳腰果作物（`cashew_crop_available_for_harvest`）

按地块和收集轮次记录可供采收的作物。平台参考身份只在鲜品、农场门、带壳限定下复用，不代表批次已经干燥或脱壳。

- 选定流：带壳腰果 `755b25eb-7579-4041-a5b1-69d12e4a3246`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按每次采收轮次实测或透明估算可采收作物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_harvest_lot_records`

本行不规定固定数值筛选界限。批次特定的一致性界限须按声明基准，依据实测进入量、水分、库存、损失和不确定性推导。守恒本身不能给出通用得率、用水量或计量容差区间。获得相容证据之前，明确报告数值范围筛查不可用，不得裁剪实测值或代入假定值。

##### 废物流

#### 输出

##### 废物流



###### 采收和收集残余（`cashew_harvest_residue`）

记录叶片、茎、土、石块和收集时移除的其他材料，并说明是否留在果园、堆肥或离开前景边界。

- 选定流：采收和收集残余
- 流属性/单位：质量 / kg 接收状态
- 数量规则：按去向称量或透明估算残余
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_harvest_lot_records`
- 数量范围：采收残余筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：每 1,000 kg 参考产品的 kg
  - 基准：收集碎屑和伴随材料比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）



###### 腰果苹果残余或有意副产品（`cashew_apple_destination`）

有意输出集合包括合格带壳等级批次，以及在有意收集时的腰果苹果副产品；每个有意输出都必须有声明交接点。苹果被有意收集并交付给声明用户时，作为具有实测去向的有意副产品记录；未作为产品收集时，记录其质量和残余去向，不分配市场信用。

- 选定流：交付至声明去向的腰果苹果或腰果苹果残余
- 流属性/单位：质量 / kg 接收状态
- 数量规则：按采收批次实测苹果质量和去向；只有有路线说明时才允许为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1,000 kg 合格鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_co_output_destination_records`
- 数量范围：腰果苹果去向筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：每 1,000 kg 参考产品的 kg 接收状态苹果
  - 基准：苹果与腰果质量宽范围；以实测批次替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


###### 未收集或田间损伤的腰果（`cashew_field_loss`）

记录留在果园、收集前受损或从收集批次排除的成熟腰果，并披露去向和水分基准。

- 选定流：田间损失或损伤的带壳腰果
- 流属性/单位：质量 / kg
- 数量规则：可采收质量与收集质量之差，实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cashew_harvest_lot_records`
- 数量范围：田间损失筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：可采收带壳腰果质量的 %
  - 基准：田间收集和成熟度损失比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：腰果初级干燥、清理和带壳分级（`cashew_primary_drying_cleaning_and_grading`）

本过程为条件过程。当声明交接点超出平台鲜品农场门，或前景数据包包含干燥、清理和质量分选时纳入。本过程是独立的物料处理节点，具有接收带壳批次、调制和分级输出状态以及声明交接点；不脱壳，也不产生去壳仁产品。

#### 输入
##### 产品流

###### 鲜收带壳腰果批次（`cashew_conditioning_input`）

使用已核实的平台鲜带壳批次身份，同时保留已收集、已分离腰果苹果、调制前状态限定信息。

- 选定流：带壳腰果 `755b25eb-7579-4041-a5b1-69d12e4a3246`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次实测接收质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1,000 kg 合格鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_drying_conditioning_records`

本行不规定固定数值筛选界限。批次特定的一致性界限须按声明基准，依据实测进入量、水分、库存、损失和不确定性推导。守恒本身不能给出通用得率、用水量或计量容差区间。获得相容证据之前，明确报告数值范围筛查不可用，不得裁剪实测值或代入假定值。

###### 干燥和清理用水或辅助服务（`cashew_conditioning_water`）

仅在湿法清理或其他用水调制作业发生时记录用水。日晒和干法清理路线对本行记录有说明的零值，并在需要时另行记录能源或劳动等服务。

- 选定流：可选湿法清理或调制用过程水
- 流属性/单位：体积或质量 / L、m3 或 kg
- 数量规则：按批次计量或有证据的用水；干法路线有说明时允许零值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_drying_conditioning_records`
- 数量范围：可选湿法调制用水筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：每 1,000 kg 参考产品的 L
  - 基准：干法路线至可选湿法清理的宽范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出
##### 产品流

###### 高等级合格带壳腰果（`cashew_premium_grade_output`）

记录作为有意输出的合格等级和交接；产品仍是带壳腰果，脱壳和仁分级不在本 PCR 内。

- 选定流：带壳腰果 `755b25eb-7579-4041-a5b1-69d12e4a3246`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：按批次、水分和交接点实测高等级合格质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_grade_and_reject_records`
- 数量范围：高等级输出筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：每 1,000 kg 鲜品参考产品的 kg
  - 基准：调制批次的一个声明合格等级份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 标准等级合格带壳腰果（`cashew_standard_grade_output`）

记录作为有意输出的独立标准等级和交接；高等级与标准等级必须互斥并合计为合格分级输出。

- 选定流：带壳腰果 `755b25eb-7579-4041-a5b1-69d12e4a3246`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：按批次、水分和交接点实测标准等级合格质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_grade_and_reject_records`
- 数量范围：标准等级输出筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：每 1,000 kg 鲜品参考产品的 kg
  - 基准：调制批次的一个声明合格等级份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级或可返工带壳批次（`cashew_downgraded_lot`）

将可能销售或返工的规格外带壳腰果与合格等级分开，并声明降级、返回清理或干燥、恢复至其他带壳去向或废弃路径。

- 选定流：降级或可返工的带壳腰果
- 流属性/单位：质量 / kg
- 数量规则：实测规格外质量和下游路径
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1,000 kg 鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_grade_and_reject_records`
- 数量范围：降级或可返工批次筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：调制输入质量的 %
  - 基准：需要声明路径的规格外比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收腰果和空壳（`cashew_rejected_nuts`）

记录空壳、霉变、虫害、明显变质或其他拒收腰果，保留拒收原因和去向；拒收质量不计入合格输出。

- 选定流：拒收带壳腰果
- 流属性/单位：质量 / kg
- 数量规则：按批次和拒收原因实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_grade_and_reject_records`
- 数量范围：拒收腰果筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：调制输入质量的 %
  - 基准：空壳、霉变、虫害、损伤或不可接受缺陷比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 异物和粉尘（`cashew_foreign_material`）

记录清理过程中移除的土、石、叶、茎、不属于合格腰果的壳片和粉尘；有意回收时记录去向，不得静默作为废物。

- 选定流：腰果清理产生的异物和粉尘
- 流属性/单位：质量 / kg
- 数量规则：按批次和去向称量或透明估算移除物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_grade_and_reject_records`
- 数量范围：异物筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：调制输入质量的 %
  - 基准：清理移除比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


###### 可选调制废水（`cashew_conditioning_wastewater`）

仅在湿法清理或湿法调制时记录废水；干法路线以过程说明记录零值。

- 选定流：可选湿法清理或调制废水
- 流属性/单位：体积或质量 / L、m3 或 kg
- 数量规则：按批次计量废水或用水量平衡，并记录处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_drying_conditioning_records`
- 数量范围：可选调制废水筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：每 1,000 kg 参考产品的 L
  - 基准：干法路线至可选湿法清理废水的宽范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

此卡仅用于向实际处理/排污接收方转移的废水，按匹配水平衡记录路线及体积/质量，不是基本污染物。实际边界内处理或直接环境排放，另须按适用出水数据实测或核算每一有据物质和接收环境，以及方法支持的水返回。采用兼容已核实UUID或明确未决身份；废水体积不是污染物质量，缺少出水组成属于完整性缺口。包含处理服务时承接一次，不将同一下游处理负担重复计入。

##### 基本流
###### 干燥水分损失（`cashew_drying_water_loss`）

根据接收和调制状态的实测质量与水分计算腰果批次移除的水；已有水分数据时不得使用未测量的通用干燥损失。

- 选定流：腰果干燥释放到空气中的水
- 流属性/单位：质量 / kg 水
- 数量规则：输入水量加额外加入的水，减去合格、降级、拒收和残余输出所保留的水、其他水去向及水库存增加；每条流的水量按湿质量乘以实测水分分数计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 鲜品农场门参考产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cashew_drying_conditioning_records`

引用的平衡恒等式或方法不能确立通用数值界限。按相容基准，依据批次／场址实测投入、产出、水分、适用时的生长量、库存、损失与不确定性推导检查；未获支持前报告数值筛查不可用，保留实测交换，调查残差，不裁剪数值或代入默认值。

### 过程：腰果储存和交接（`cashew_storage_and_gate_handoff`）

本过程为条件过程。当产品在声明交接点前储存，或数据包代表干燥、清理、分级和储存后的带壳批次而不是鲜品农场门参考状态时纳入。

#### 输入
##### 产品流

###### 储存用合格分级带壳批次（`cashew_storage_input`）

将高等级和标准等级作为互斥批次状态进入储存，并保留水分、等级、容器皮重和批次身份。

- 选定流：带壳腰果 `755b25eb-7579-4041-a5b1-69d12e4a3246`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测进入储存的合格分级质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1,000 kg 声明储存交接产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_storage_records`

本行不规定固定数值筛选界限。批次特定的一致性界限须按声明基准，依据实测进入量、水分、库存、损失和不确定性推导。守恒本身不能给出通用得率、用水量或计量容差区间。获得相容证据之前，明确报告数值范围筛查不可用，不得裁剪实测值或代入假定值。

###### 交流电 (`cashew_storage_energy_electricity`)

记录批次期间内实际电动储存通风或搬运。无动力储存不假定用电，防虫物质及服务仍单列。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_cashew_storage_records`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cashew_storage_records`
- 来源：`route-energy-fao`

执行第8节`cashew_storage_energy_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

#### 输出
##### 产品流

###### 声明交接点带壳腰果输出（`cashew_gate_output`）

记录声明交接点的发货批次，并保留鲜品或调制状态、水分、等级和储存时长。产品身份继续使用同一平台 UUID，过程状态由交接限定信息表达。

- 选定流：带壳腰果 `755b25eb-7579-4041-a5b1-69d12e4a3246`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：按净发货质量实测并排除皮重

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接输出.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cashew_storage_records`

本行不规定固定数值筛选界限。批次特定的一致性界限须按声明基准，依据实测进入量、水分、库存、损失和不确定性推导。守恒本身不能给出通用得率、用水量或计量容差区间。获得相容证据之前，明确报告数值范围筛查不可用，不得裁剪实测值或代入假定值。

##### 废物流

###### 储存损伤和质量损失（`cashew_storage_loss`）

仅记录本储存批次实际废弃移出的物料，保留实称质量、实际状态及处理/处置接收方。霉坏坚果等实际移出产品与水分蒸发、呼吸变化、内部返工、转移及未解释库存差额分开，按 calc_06 核对。实际独立物料的身份或去向不同时须各列具体卡；同一物理混合流及其组分不得重复计数。原始活动或阶段基准：最终参考归一化前保留原始批次质量及储存时长。

- 选定流：储存损伤或损失的带壳腰果
- 流属性/单位：质量 / kg
- 数量规则：按批次、身份及接收方实测实际废弃移出物料质量；依第8节储存核对要求 核对，不将未解释差额或蒸发损失计入本 Waste 数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1,000 kg 声明储存交接产品.

- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cashew_storage_records`

本实际废弃物交换不规定通用数值范围。将独立实测废弃质量与同一物料的匹配可用批次数量核对，并调和水分、库存和转移。包含蒸发或未解释差额的总储存减量筛查不能用于本 Waste 数量；界限不得生成数量或替代接收方证据。

### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：带壳腰果
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
- 选定流：带壳腰果
- 流属性 / 单位：质量 / kg
- 数量规则：1000 kg
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

## 7. 分配和副产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 有意腰果苹果输出的果园和采收 | 当果园、采收、苹果收集和腰果收集有独立记录时，优先采用过程细分。腰果苹果被有意收集并交付为副产品时，按实测干物质质量分配共用果园和采收负荷；没有干物质数据时使用实测接收质量，并披露局限。 | `iso-14044-2006`; `fao-cashew-india-production-1998` |
| `allocation_02` | 腰果苹果不作为产品收集 | 苹果留在果园或作为没有有意产品交接的残余处理时，不分配副产品信用；保留其质量和去向，并将共用负荷分配给有意生产的带壳腰果输出。 | `iso-14044-2006`; `fao-cashew-minor-oil-crops` |
| `allocation_03` | 高等级和标准等级带壳腰果 | 共用调制负荷无法过程细分时，在互斥的合格带壳等级之间按物理质量分配。等级专属作业归于对应等级；同一批次不得同时计入等级行和汇总输出行。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | 多年生果园期间和阶段 | 将建立、未结果年份、补植和清除按果园寿命及合格产出基准年度化；每项投入和输出连接到作物年度或生命周期阶段，不得在原果园和补植阶段重复计入补植事件。 | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `allocation_05` | 降级、返工、拒收和回收批次 | 将拒收和降级批次与合格产品分开；返工保留生产节点负荷并只连接一次；回收或有意销售材料必须有声明去向和分配决定；废弃材料承担声明的处理负荷。 | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_06` | 批次、campaign 和换批归属 | 将果园、采收、调制、清理、分级和储存投入与输出连接到产生它们的批次或 campaign；清场和换批事件只记录一次；没有有文件支持的分配驱动时，不得将共用运行负荷分配给多个批次。 | `mass-balance-identity`; `iso-14044-2006` |

腰果壳质量是带壳参考产品的一部分，在本 PCR 中不是单独副产品。腰果壳液、壳片、腰果仁、种皮和所有脱壳输出属于下游脱壳或腰果仁 PCR，不得引入本清单。任何输出不得同时作为腰果苹果副产品和果园残余计入。

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算和质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `cashew_crop_protection_specific_input` | `cp_cashew_orchard_input_records` | 作业 cashew_orchard_establishment_and_management：按产品、有效成分、日期和地块记录防虫、防病、除草或其他声明用途的配方和有效成分。 原数量方法：按产品、有效成分、日期和地块记录实测施用量 |
| `cashew_storage_packaging_specific_input` | `cp_cashew_storage_records` | 作业 cashew_storage_and_gate_handoff：仅在声明储存边界内时记录袋、托盘、箱、内衬和搬运能源；重复使用资产按有记录的使用次数或服务寿命分配。 原数量方法：按批次实测包装质量或搬运能源，并处理重复使用和服务寿命 |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `cashew_orchard_energy_identification` | `cp_cashew_energy_records` | 实际柴油机械进行果园地表管理及作物照护；灌溉泵供能独立确认，不直接套用拖拉机燃料。 原始活动或阶段基准：每 1,000 kg 合格带壳腰果. (`route-energy-fao`) |
| `cashew_harvest_energy_identification` | `cp_cashew_energy_records` | 实际收集、果梨分离及批次转移。人工收集及分离本身不证明动力投入，仅在实际采用时确认机械或包含能耗的服务。 原始活动或阶段基准：每 1,000 kg 合格鲜品农场门参考产品. (`cashew-drying-route`) |
| `cashew_drying_energy_identification` | `cp_cashew_drying_conditioning_records` | 按批次及含水率记录区分日晒、强制通风与机械加热干燥。日晒不要求外购热；实际动力辅助或干燥器须分别建立可计量的具体投入卡。 原始活动或阶段基准：每 1,000 kg 参考产品. (`cashew-drying-route`) |
| `cashew_storage_energy_identification` | `cp_cashew_storage_records` | 记录批次期间内实际电动储存通风或搬运。无动力储存不假定用电，防虫物质及服务仍单列。 原始活动或阶段基准：每 1,000 kg 声明储存交接产品. (`route-energy-fao`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cashew_orchard_lifecycle_records` | `cashew_orchard_establishment_and_management` | 果园资产、土地、种植、补植、残余 | 果园地块和资产登记 | 地块面积；建立年份；品种；树数；补植；清除；修剪残余；果园阶段；合格产出 | 地块登记、田间记录和年度核对；原始汇总与分配：将地块记录连接到作物年度和合格产出 | ha、item、kg、果园年 | 事件和年度 | 完整声明寿命或有文件支持的代表性期间 | 所有贡献地块 | 每声明的参考流 | 签署登记、GIS 或测量面积、补植证据 |
| `cp_cashew_orchard_input_records` | `cashew_orchard_establishment_and_management` | 养分、改良剂、植保 | 投入施用记录 | 产品名；配方；养分含量；有效成分；数量；日期；地块；用途；施用方法 | 发票、施用日志和供应商记录；原始汇总与分配：按产品、养分、地块和作物年度汇总 `cashew_crop_protection_specific_input`: 作业 cashew_orchard_establishment_and_management：按产品、有效成分、日期和地块记录防虫、防病、除草或其他声明用途的配方和有效成分。 原数量方法：按产品、有效成分、日期和地块记录实测施用量 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg 产品、kg 养分、kg 有效成分 | 每次施用 | 作物年度 | 所有贡献地块 | 每声明的参考流 | 发票、产品标签、施用日志 |
| `cp_cashew_irrigation_records` | `cashew_orchard_establishment_and_management` | 灌溉和水 | 灌溉计量或水量台账 | 水源；体积；地块；日期；计量表；水质；取水和回用 | 计量表、泵记录或透明水量平衡；原始汇总与分配：核对交付、取水和声明消耗 | m3 或 kg | 事件和月度 | 作物年度 | 所有灌溉地块 | 每声明的参考流 | 计量校准、泵记录、水量台账 |
| `cp_cashew_energy_records` | 所有田间、采收、调制和储存过程 | 能源和载体 | 燃料、电力和设备记录 | 载体；数量；设备；作业；批次或地块；日期；时长；换算因子 | 发票、计量、燃料日志或设备记录；原始汇总与分配：按载体、作业、批次和期间汇总 按路线确认要求：`cashew_orchard_energy_identification`: 实际柴油机械进行果园地表管理及作物照护；灌溉泵供能独立确认，不直接套用拖拉机燃料。 原始活动或阶段基准：每 1,000 kg 合格带壳腰果. (`route-energy-fao`) `cashew_harvest_energy_identification`: 实际收集、果梨分离及批次转移。人工收集及分离本身不证明动力投入，仅在实际采用时确认机械或包含能耗的服务。 原始活动或阶段基准：每 1,000 kg 合格鲜品农场门参考产品. (`cashew-drying-route`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | L、kg、MJ 或 kWh | 事件和月度 | 作物年度及声明后处理期 | 每项作业和设施 | 每声明的参考流 | 发票、计量、燃料日志、设备规格 |
| `cp_cashew_emission_records` | `cashew_orchard_establishment_and_management` | 直接和间接田间排放 | 排放计算输入记录 | 养分投入；残余；土壤条件；植保记录；排放物种；方法；因子 | 连接原始记录的计算工作簿；原始汇总与分配：保留物质、接收介质、因子和来源 `cashew_direct_field_emissions_specific_emission`: 按物质、来源、养分投入和作物年度记录实测或计算的田间排放；已知物种或接收介质时不得使用泛化排放交换。 由养分、残余、植保和田间作业记录计算或实测 这是必需的排放身份确认要求，不是集合式基本交换。每种适用物质及其实际接收介质须分别识别，保留兼容单位、实测活动量或有依据的计算方法、参数适用性及不确定性。保留原作业、期间、分配及最终参考流归一化规则。直接、间接路径及上游覆盖仅核算一次，不用总氮、燃烧总排放或泛称污染物替代具体化合物。适用时另行记录实际归还环境的材料及去向。完成数据集前须为每项必需交换建立具体卡片，并核验兼容UUID或明确保留未解析身份。缺少记录不等于零排放或不适用。 `ipcc-2019-afolu` | kg 物质 | 年度和事件 | 作物年度 | 所有贡献地块 | 每声明的参考流 | 计算复核、因子版本、来源引用 |
| `cp_cashew_harvest_lot_records` | `cashew_harvest_and_collection` | 采收、收集、田间损失、残余 | 采收批次登记 | 地块；收集轮次；成熟度；采收质量；未收集质量；碎屑；苹果分离；去向 | 地磅、田间秤和批次日志；原始汇总与分配：核对可采收、收集、损失和残余质量 | kg、日期、批次 | 每次收集轮次 | 采收季 | 所有贡献地块 | 每声明的参考流 | 计量校准、批次单、田间检查 |
| `cp_cashew_co_output_destination_records` | `cashew_harvest_and_collection` | 腰果苹果副产品或残余 | 去向和转移记录 | 苹果质量；干物质或水分；去向；接收方；价格或用途；去向；转移日期 | 称量、转移记录和去向确认；原始汇总与分配：分开记录有意输出与残余和废物 | kg 和声明分数 | 每次转移 | 采收季 | 每个苹果去向 | 每声明的参考流 | 收据、转移单、去向证据 |
| `cp_cashew_drying_conditioning_records` | `cashew_primary_drying_cleaning_and_grading` | 干燥、清理、用水、能源、水分 | 调制批次记录 | 输入质量；输入水分；方法；时长；能源；用水；输出水分；输出质量；清理损失；废水 | 批次日志、计量、水分检测和水量平衡；原始汇总与分配：将所有投入和输出连接至一个批次和交接点 按路线确认要求：`cashew_drying_energy_identification`: 按批次及含水率记录区分日晒、强制通风与机械加热干燥。日晒不要求外购热；实际动力辅助或干燥器须分别建立可计量的具体投入卡。 原始活动或阶段基准：每 1,000 kg 参考产品. (`cashew-drying-route`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg、%、小时、L、kWh | 每批次 | 声明后处理期 | 每个调制设施或农场单元 | 每声明的参考流 | 校准秤、水分检测、批次单 |
| `cp_cashew_grade_and_reject_records` | `cashew_primary_drying_cleaning_and_grading` | 等级、降级、拒收、异物 | 检验和分级记录 | 批次；等级；壳状况；仁缺陷；空壳；霉变；虫害；异物；合格质量；返工；去向 | 检验、抽样和称量记录；原始汇总与分配：等级和拒收状态互斥 | kg、%、等级代码 | 每批次 | 声明后处理期 | 每个分级点 | 每声明的参考流 | 检验单、抽样方案、秤校准 |
| `cp_cashew_storage_records` | `cashew_storage_and_gate_handoff` | 储存输入、损失、包装、交接输出 | 库存和发货台账 | 期初库存；收货；批次；水分；储存时间；包装；能源；损伤；期末库存；发货质量；交接点；外部转移、按物料及接收方实称废弃量、独立有据的蒸发/呼吸等物理损失、带符号未解释差额、不确定性、共同含水率/组分基准 | 按 calc_06 分别计量并核对库存、废弃物和物理损失台账；按身份及接收方汇总实际废弃物，不用总库存差额代替。 | kg、%、天、kWh、item | 收货、检查和发货 | 声明储存期 | 每个储存设施 | 每声明的参考流 | 库存核对、发货单、水分和虫害记录 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |
| `cp_phase1_environment_coverage` | cashew_orchard_establishment_and_management | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | 多年生果园投入 | 按果园寿命基准和各作物年度合格产出分配建立、未结果年份、补植和清除。 | 果园资产登记；果园寿命；作物年度产出 | 每参考流的年度化果园投入 | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `calc_02` | 所有采收、调制和储存批次 | `期初质量 + 投入 = 合格输出 + 联产品 + 拒收物 + 残余 + 实测损失 + 期末质量`；调查任何未解释差额。各项须匹配同一批次、期间和含水率基准；期末库存既不是已发运输出，也不是损失。 | 批次质量和去向 | 核对后的质量平衡 | `mass-balance-identity` |
| `calc_03` | 鲜品到干燥或调制批次 | 干物质 = 湿质量 ×（1 − 水分分数）；扣除非水损失后，移除水 = 输入湿质量 − 输出湿质量。 | 输入/输出质量和实测水分 | 水分修正质量和干燥水损失 | `mass-balance-identity`; `fao-cashew-minor-oil-crops` |
| `calc_04` | 腰果苹果副产品 | 苹果有意交付时，按实测干物质质量分配共用果园和采收负荷；无意交付时建模为残余去向，不分配副产品信用。 | 腰果质量；苹果质量；水分或干物质；声明去向 | 分配后的负荷和副产品份额 | `iso-14044-2006` |
| `calc_05` | 分级批次 | 合格输出仅等于互斥合格等级的质量之和。将批次输入、加入量和期初库存，与合格输出、单独销售的降级输出、拒收、残余物、实测水和非水损失及期末库存核对。内部返工是转移而非新增销售；调查未解释残差。 | 批次输入；加入量；库存；等级和拒收记录 | 合格输出与完整批次平衡 | `mass-balance-identity` |
| `calc_06` | 储存 | 在同一批次、期间及含水率/组分基准上核对：期初库存＋外部接收＝合格发运＋其他有据外部转出＋实际废弃移出量＋独立证实的物理损失＋期末库存＋带符号未解释差额。内部转移仅抵销一次。按物料身份及去向计量实际废弃物；蒸发、呼吸等有据物理损失与 Waste 分列。差额属于调查项，不能自动视为实测损失、废物交换或排放。保留实际测量及不确定性，不裁剪数值或推定零。将有据外部数量归属后，按匹配合格最终产出归一化一次。 | 批次/期间库存、接收、发运、其他转出、实称废弃物、有据物理损失及计量不确定性 | 独立的实体废物、物理损失和未解释差额台账；按最终参考流报告有据外部输出 | `mass-balance-identity` |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | 流身份 | 使用已核实的带壳腰果参考 UUID，并保留鲜品农场门或延伸交接限定信息；不得使用去壳腰果或腰果仁身份。 | 平台身份记录；数据集元数据 |
| `quality_02` | 果园和采收数量 | 使用校准秤、计量表或透明记录的估算；路线不使用灌溉、湿法清理、包装或储存时记录有说明的零值。 | 校准记录；田间和批次日志 |
| `quality_03` | 水分和干燥 | 在接收和发货时对代表性批次测量水分，并声明水分方法、采样点和湿基或干基。 | 水分检测；抽样方案；批次记录 |
| `quality_04` | 完整性 | 核对果园投入、采收输出、腰果苹果去向、调制输出、拒收物、残余、水分损失、储存损失和交接发货。 | 质量平衡工作簿；库存台账 |
| `quality_05` | 时间和多年生代表性 | 覆盖声明作物年度，报告果园阶段、结果年龄、补植事件、异常天气和平均方法。 | 作物年度登记；果园生命周期记录 |
| `quality_06` | 副产品和去向 | 为每个有意腰果苹果交接、降级去向、返工循环、拒收处理和残余去向提供证据；未经确认的去向不分配信用。 | 转移单；去向记录；处理记录 |
| `quality_07` | 地理和技术 | 披露国家、地区、气候、土壤、灌溉制度、采收方式、干燥方式、分级方式、储存条件和交接点。 | 场址说明；过程说明；设施记录 |
| `quality_08` | 不确定性和估计 | 将暂定范围标为候选阶段、可替换的估计，并在进入 reviewed 或 published 使用前替换为实测或有来源支持的值。 | 审查记录；更新后的前景数据集 |

## 9. 验证规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流 | 参考产品是已核实的 `Cashew nuts, in shell` UUID，属性为 Mass、单位为 kg；数据集声明鲜品农场门或延伸交接状态，不替换为去壳仁。 | `fda-cashew-nut-methods` |
| `validation_02` | 过程图 | 所有 required 过程存在；当声明交接点或路线需要时，条件性的干燥、清理、分级和储存过程必须存在。 | `fao-cashew-postharvest-2020` |
| `validation_03` | 多年生生产 | 果园建立、未结果期、结果期、补植和清除连接至声明作物年度，且不得重复计量。 | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `validation_04` | 采收和腰果苹果分离 | 采收、收集、未收集、腰果苹果、残余和合格腰果质量互相核对，并声明苹果去向。 | `mass-balance-identity` |
| `validation_05` | 调制和质量 | 鲜品输入、调制水分、高等级、标准等级、降级/返工、拒收、异物、水分损失和废水互斥并满足质量平衡。 | `mass-balance-identity`; `fao-cashew-minor-oil-crops` |
| `validation_06` | 储存和交接 | 期初库存、收货、发货、期末库存、储存损伤、水分、储存时间和交接输出互相核对；储存损失排除在合格输出之外。 | `mass-balance-identity`; `fao-cashew-postharvest-2020` |
| `validation_07` | 分配和返工 | 腰果苹果分配、等级分配、降级路径、返工循环和拒收处理明确，任何负荷或输出不得重复计入。 | `iso-14044-2006` |
| `validation_08` | 证据和披露 | 所有重要数量流具有前景采集规则及候选范围或方法约束；估计、未解析身份、交接状态、水分和证据局限必须披露。 | `fao-cashew-postharvest-2020`; `mass-balance-identity` |
| `validation_09` | 批次和 campaign 记录 | 每个采收轮次、调制批次、分级批次和储存收货都具有声明边界、关联投入与输出、清场或换批状态以及报告期间；共用运行负荷不得重复计入。 | `mass-balance-identity` |

## 10. 发布数据集简介

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查的带壳腰果前景数据集使用 `secondary_dataset`；只有通过规定审查和发布门槛后才可提升为 `background_dataset` |
| downstream_use | 构建和验证声明鲜品农场门或延伸后处理交接点的带壳腰果 process 和 lifecyclemodel 投影 |
| allowed_use | 当保留产品状态、水分、质量、作物年度、地理位置和分配处理时，用于果园、采收、腰果苹果分离、干燥、清理、带壳分级、储存和交接建模 |
| excluded_use | 去壳仁生产、脱壳、腰果壳液回收、烘烤、蒸煮、去皮、腰果仁加工、零售产品、消费者使用、交接点后物流以及未声明产品类别 |
| required_metadata | 参考 UUID；Mass 属性和 Units of mass 单位组；CPC 3.0 `01372`；品种；地理位置；果园阶段和年龄；作物年度；灌溉；水分基准；鲜品或延伸交接点；壳和仁质量；等级；腰果苹果去向；合格、拒收、残余、损失和储存记录 |
| required_quality_disclosure | 实测与估计区分；水分方法；质量平衡完整性；果园寿命分配；副产品分配；返工和拒收去向；储存时间；数据期间；地理位置；技术；未解析身份差距 |
| update_trigger | 新作物年度记录、果园阶段或补植重大变化、干燥或分级技术变化、新的腰果苹果有意路线、储存实践变化、有来源范围替换或平台身份修订 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cashew-india-production-1998` | official_guidance | FAO, Integrated Production Practices of Cashew in India, https://www.fao.org/4/ac451e/ac451e04.htm | 多年生果园阶段、采收成熟度、腰果苹果分离、干燥和果园寿命 |
| `fao-cashew-postharvest-2020` | extension_guidance | FAO TECA / African Cashew Initiative, Guide to harvesting and post-harvest handling of cashew nuts, https://www.fao.org/family-farming/detail/en/c/1619106/ | 采收质量、采后处理、储存和过程分解 |
| `fao-cashew-minor-oil-crops` | handbook | FAO, Minor oil crops: cashew nut monograph, https://www.fao.org/4/x5043e/x5043e06.htm | 腰果苹果分离、日晒、含水率背景和储存实践 |
| `fda-cashew-nut-methods` | official_guidance | U.S. FDA, MPM V-10 Nuts and Nut Products Methods, https://www.fda.gov/food/laboratory-methods-food/mpm-v-10-nuts-and-nut-products-methods | 缺陷、霉变、虫害、壳和带壳质量区分 |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 管理土壤和农业排放计算方法背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html | 分配层级、数据质量、边界和披露规则 |
| `mass-balance-identity` | method_factor | 用于批次核对的质量守恒方法身份 | 采收、调制、储存、拒收、残余和水分损失核对 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `cashew-drying-route` | official_guidance | FAO, Minor oil crops: Cashew nut, Harvesting and Post harvest treatment. https://www.fao.org/4/x5043e/x5043e06.htm | 支持不预设动力供热的人工及日晒路线，不采用目标含水率或干燥时长。 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

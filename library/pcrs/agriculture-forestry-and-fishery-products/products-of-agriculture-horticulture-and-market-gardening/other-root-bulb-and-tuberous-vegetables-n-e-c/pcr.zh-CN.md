---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-root-bulb-and-tuberous-vegetables-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他根、球茎和块茎蔬菜，未另列明

## 1. 范围与适用性

本 PCR 规定“其他”根、球茎和块茎蔬菜类别中鲜食根、球茎、根茎、球茎和块茎的前景生产。范围从播种或作物建立开始，经种植和收获，止于声明的农场门。只要产品以鲜蔬菜销售，土壤型露地和保护地种植均可纳入。场内清洗、修整、分级、冷却、包装、储存或发运属于条件性扩展，必须明确声明。

宽泛类别应通过产品身份和可食器官确定，不能只写“蔬菜”。即使分类叶很宽，数据包也必须记录作物及品种或类型。鲜重、商品等级、含水率和声明门的产品状态都是产品定义的一部分。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-root-bulb-and-tuberous-vegetables-n-e-c |
| classification_refs | CPC 3.0:01259 — Other root, bulb and tuberous vegetables, n.e.c.（精确分类背景）; mapping relation: exact |
| covered_products | CPC 01259 中未另分类的鲜食、可销售根、球茎、根茎、球茎或块茎，包括 oyster plant、jicama（Pachyrhizus erosus）、块根芹（celeriac），以及未单独归入具名根菜、球茎、块茎、种子、蘑菇或富淀粉根类的同类产品。 |
| excluded_products | 胡萝卜和萝卜；青蒜；洋葱；韭葱及其他葱属蔬菜；马铃薯、甘薯、木薯、山药、芋头及归入高淀粉或菊粉根茎产品的其他根茎；蔬菜种子；蘑菇和松露；活种苗；仅作饲料的作物；加工、腌制、干燥、冷冻、烹制、去皮或其他转化产品，除非另有审查过的扩展。 |
| representative_product | 声明农场门的鲜块根芹（celery root）商品 |
| production_route | 作物周期建立和种植、养分与水管理、作物保护、收获和初步分选，以及条件性的场内整理、包装、储存和发运 |
| market_state | 声明农场门的鲜商品；可为整根或修整品，也可为未清洗、已清洗、已分级、已冷却或已包装，但必须记录状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明农场门的可销售鲜食根、球茎、根茎、球茎或块茎蔬菜 |
| How much | 1 kg 到达状态的鲜商品 |
| How well | 记录产品身份、可食器官、品种或类型、含水率或干物质基准、商品状态和等级；不假定未声明的加工或质量属性 |
| How long or cycle | 一个作物周期及其收获或整理批次；优先使用年度记录，多年或多周期生产必须明确披露 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| 参考产品流 | 声明单一物种及状态的合格鲜食其他根、鳞茎、根茎、球茎或块茎蔬菜（UUID 未解析） |
| Reference flow property | Mass（`93a60a56-a3c8-11da-a746-0800200b9a66`） |
| Reference unit group | Mass units（`93a60a57-a4c8-11da-a746-0800200c9a66`） |
| Reference unit | kg |
| Required qualifiers | product identity; edible organ; cultivar or variety; fresh-mass basis; marketable condition（unwashed, washed, trimmed, cooled, or packed）; geography; production system; crop cycle and harvest date; declared farm gate |

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`farm_gate_storage_and_dispatch` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `gate_product` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和商品产品输出 | Mass＼ | kg | 参考流采用到达状态的鲜商品质量归一化。另行记录含水率或干物质，未经记录的换算不得混合干物质和鲜重数量。 |
| `crop_cycle_yield` | 田间、收获、整理和储存产品行 | Mass＼ | kg | 分母来自声明作物周期的实测商品量；毛收获量、分选量和商品量必须保持区分。 |
| `area_normalization` | 土地占用和作物周期记录 | Area-time＼ | m2*year | 将种植面积和声明作物周期折算为每 kg 参考产品的面积时间，并披露保护地短周期或完整年度占用的选择。 |
| `energy_measurement` | 燃料和电力行 | Energy or fuel amount＼ | kWh or L | 电力按电表 kWh 采集，燃料按采购或领用活动数据采集。燃料只有在燃料身份和低位热值因子有记录时才转换为能量。 |
| `water_measurement` | 灌溉水和整理用水行 | Volume＼ | m3 | 分开记录灌溉供水、来源取水和整理用水。记录水表、估算或供应商数据，并标明回用或循环水。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 在播种或作物建立时声明土地和作物周期。现有土壤状态和持续土地占用只有在声明生产系统中被测量或建模时才纳入；不假定之前的土地利用变化。 |
| starting_condition_role | 覆盖种植、收获以及所选农场门整理或发运活动的前景作物生产边界 |
| product_classification_scope | CPC 01259 语义类别中的鲜产品：未归入具名蔬菜或高淀粉根类的可食根、球茎、根茎、球茎或块茎 |
| recursive_input_rule | 田间收获、分选、整理或储存之间的同类别作物流作为过程连接产品流。只追溯一次种植负荷，不递归展开中间交接。种苗记录其物种或类型和批次；若种苗本身使用本类别数据集，可只链接一次上游数据集。 |
| upstream_dataset_requirement | 前景未生产的种苗、肥料或土壤改良剂、作物保护品、供水、能源、包装、运输和废物处理，最终 TIDAS 发布前必须具名供应商或背景数据集。 |
| disclosure | 声明物种或俗名、可食器官、品种或类型、作物周期、农场或地块、地理位置、生产系统、面积、播种和收获日期、收获量和商品量、含水率、整理状态和门、灌溉来源和体积、实际养分产品和养分基准、作物保护、燃料、电力、包装、运输、残体和损失，以及所选排放方法。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | whole PCR | 纳入作物建立、露地或保护地操作、收获和初步分选，直到声明农场门。整理、储存或发运只有在选择条件过程并提供记录时纳入。 | `unsd-cpc-3-01259`; `fao-ex-act-v9-2022` |
| `boundary_inputs` | cultivation and selected postharvest processes | 纳入种苗、实际使用的养分产品或土壤改良剂、作物保护品、灌溉和工艺水、田间和设施能源，以及跨越所选前景边界的包装或运输。 | `fao-ex-act-v9-2022` |
| `boundary_land` | crop cycle | 记录声明面积和作物周期的土地占用。土地利用变化或土壤碳变化只有在研究声明且有证据时纳入；不得添加假定的土地利用变化负荷。 | `fao-ex-act-v9-2022` |
| `boundary_emissions` | managed soils and residues | 按所选 IPCC 层级纳入声明氮投入、相关作物残体、石灰或尿素产生的直接和间接土壤排放。残体还田、移除、焚烧和处理去向必须互斥。 | `ipcc-2019-managed-soils` |
| `boundary_exclusions` | post-gate life cycle | 除非记录单独范围扩展，否则排除声明农场门后的运输、零售、消费者储存、准备、烹饪和报废。 | `unsd-cpc-3-01259`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | 作物建立和露地或保护地种植 | required | 始终纳入从播种或建立到可收获的声明作物周期。 | 前景作物生产 | 每 1 kg 鲜商品参考产品及每个声明作物周期 |
| `harvest_and_primary_sorting` | 收获和初步分选 | required | 始终纳入收获、去除田间土壤或植物材料以及首次商品性判定。 | 收获和产品准备 | 每 1 kg 鲜商品参考产品 |
| `postharvest_conditioning` | 采后整理和包装 | conditional | 当清洗、修整、分级、冷却、包装或废水处理位于声明农场门内时纳入。 | 条件性整理 | 每 1 kg 整理后商品 |
| `farm_gate_storage_and_dispatch` | 农场门储存和发运 | conditional | 当储存、储存冷却或到声明收集门/农场门的运输在范围内时纳入。 | 条件性储存和交付 | 每 1 kg 声明门产品，并在纳入运输时按吨公里 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1 kg 同一声明交接点净合格产品 |

### 过程：作物建立和露地或保护地种植（`field_cultivation`）

#### 输入
##### 产品流

###### 尿素肥料（`field_cultivation_agricultural_nutrient_inputs_urea`）

**field_cultivation_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

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
- 来源：`ipcc-2019-managed-soils`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`field_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`）

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
- 来源：`ipcc-2019-managed-soils`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`field_cultivation_agricultural_nutrient_inputs_triple_superphosphate`）

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
- 来源：`ipcc-2019-managed-soils`；`fao-fertilizer-identities`

###### 氯化钾肥料（`field_cultivation_agricultural_nutrient_inputs_potassium_chloride`）

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
- 来源：`ipcc-2019-managed-soils`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`field_cultivation_agricultural_nutrient_inputs_cattle_manure`）

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
- 来源：`ipcc-2019-managed-soils`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`field_cultivation_agricultural_nutrient_inputs_plant_compost`）

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
- 来源：`ipcc-2019-managed-soils`；`fao-organic-nutrients`

###### 供作物周期使用的灌溉水（`irrigation_water`）

灌溉水在输送到作物或保护地系统时记录。若同时建模来源取水，应与供给水分开。

- 选定流：作物生产供给的灌溉水＼
- 流属性/单位：Volume / m3（flow property; unit group）
- 数量规则：作物周期的水表、灌溉日志或供应商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定灌溉水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：m3/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`cultivation_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`cultivation_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_field_energy_records`采集`field_cultivation`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_energy_records`
- 来源：`route-energy-fao`

###### 灌溉或保护地种植电力（`cultivation_electricity`）

当电泵、环境控制设备或其他种植设备在边界内时，记录其电力。

- 选定流：灌溉或保护地种植电力＼
- 流属性/单位：Energy / kWh（flow property; unit group）
- 数量规则：按作物周期分配的农场、地块、水泵或设备电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定种植电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kWh/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 灌溉来源取水（`irrigation_withdrawal`）

只有在来源取水相对于输送灌溉水被单独计量或建模时才记录该条件性流。同一水量不得重复计算。

- 选定流：从明确天然水源直接取用的水；具体来源环境和UUID未决
- 流属性/单位：Volume / m3（flow property; unit group）
- 数量规则：本前景节点负责的天然水源直接取水实测量，与同期间供水台账核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定取水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4
  - 单位：m3/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品，仅在单独报告取水时使用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

仅用于本前景边界负责的直接天然水源取水。选择实际水源/环境及兼容体积或质量身份。市政或其他外购供水属于产品投入，供应商取水由上游覆盖一次，不能作为此基本流输入。保留水源至田间供应台账、泵能耗、输配损失及内部供水转移；不将同一供应商取水或内部交付再计为外部资源取用。缺少水源身份或数量属于完整性缺口。


###### 声明作物周期的土地占用（`land_occupation`）

土地占用表示获得参考产品所需的种植面积和声明持续时间。土地转化是另行声明的研究选择。

- 选定流：作物种植土地占用＼
- 流属性/单位：Area-time / m2*year（flow property; unit group）
- 数量规则：种植面积乘作物周期，再除以鲜商品产量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_cycle_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定土地占用筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m2*year/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输出
##### 产品流

###### 离开种植过程的可收获作物（`harvested_crop`）

该产品流连接田间种植与收获、分选，表示第一次商品判定前收获的可食器官。

- 选定流：鲜收获根、球茎、根茎、球茎或块茎作物＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：来自作物周期产量和质量记录的分选前收获量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定收获量到商品量比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg harvested crop/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 还田或翻入土壤的作物残体（`crop_residue_returned`）

记录留在土中或有意返回土壤的地上和地下作物残体，并将移除、焚烧或外部处理的残体分别记录。

- 选定流：返回管理土壤的作物残体＼
- 流属性/单位：Dry mass / kg dry matter（flow property; unit group）
- 数量规则：按声明含水率和残体去向记录测量或计算残体干物质
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_fate_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定还田残体筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1.5
  - 单位：kg dry matter/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未收获或田间受损作物材料（`field_losses`）

在可归属于声明作物周期且损失具有实质性时，记录留在田间或收获前受损的作物。

- 选定流：未收获或田间受损的作物材料＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：由潜在可收获量与收获量差额计算，并披露去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_fate_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定田间损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg fresh material/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤直接氧化亚氮（`direct_n2o_soil`）

根据声明氮源和所选 IPCC 方法层级计算土壤直接氧化亚氮。即使，也保留污染物种类和接收介质。

- 选定流：管理农业土壤排放到空气的氧化亚氮＼
- 流属性/单位：Mass / kg N2O（flow property; unit group）
- 数量规则：依据采集的氮投入、残体氮和声明土壤或气候因子的 IPCC 层级计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定土壤直接 N2O 筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg N2O/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤氨（`ammonia_soil`）

当所选方法和采集的氮施用数据支持时计算氨排放，并记录污染物和空气接收介质。

- 选定流：管理农业土壤排放到空气的氨＼
- 流属性/单位：Mass / kg NH3（flow property; unit group）
- 数量规则：依据采集的矿质和有机氮施用数据进行所选方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定氨筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg NH3/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 硝酸盐向水体淋失（`nitrate_leaching`）

当水或养分记录以及所选土壤排放方法支持损失估计时报告硝酸盐淋失。水体介质不能与土壤存量混淆。

- 选定流：管理农业土壤排放到水体的硝酸盐＼
- 流属性/单位：Mass / kg nitrate（flow property; unit group）
- 数量规则：将采集或建模的淋失比例应用于声明养分投入和水分制度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定硝酸盐淋失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg nitrate/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷酸盐向水体径流（`phosphate_runoff`）

当作物周期有记录的径流路径且方法或测量记录支持时报告磷酸盐径流，并保留计算使用的磷基准。

- 选定流：管理农业土壤排放到水体的磷酸盐＼
- 流属性/单位：Mass / kg phosphate（flow property; unit group）
- 数量规则：声明田块和水分制度的实测或方法推导磷损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定磷酸盐径流筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg phosphate/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 石灰或尿素产生的二氧化碳（`liming_urea_co2`）

只有养分记录显示使用石灰或尿素且所选方法要求直接二氧化碳核算时，才纳入该条件性基本流输出。

- 选定流：石灰或尿素施用排放到空气的二氧化碳＼
- 流属性/单位：Mass / kg CO2（flow property; unit group）
- 数量规则：依据实际石灰或尿素量和声明碳基准进行方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定石灰或尿素 CO2 筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.03
  - 单位：kg CO2/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品，仅在使用石灰或尿素时
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获和初步分选（`harvest_and_primary_sorting`）

#### 输入
##### 产品流

###### 接收分选的收获作物（`harvested_crop_input`）

收获作物作为种植过程输出进入分选操作；同一作物量不得再次计入新的上游生产负荷。

- 选定流：声明作物周期的鲜收获根、球茎、根茎、球茎或块茎作物＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：连接同一作物周期的 `harvested_crop` 并核对接收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：收获作物分选输入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg harvested crop/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`harvest_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`harvest_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_harvest_operation_records`采集`harvest_and_primary_sorting`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_operation_records`
- 来源：`route-energy-fao`

##### 废物流

#### 输出
##### 产品流

###### 可销售分选作物（`marketable_sorted_crop`）

该流是可送至声明农场门或条件性整理过程的分选鲜作物，必须记录商品性判定和产品状态。

- 选定流：鲜可销售其他根、球茎、根茎、球茎或块茎蔬菜＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：初步分选后的接收量，带质量和含水率记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定分选产品输出
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1
  - 单位：kg sorted product/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分选拒收和非等级作物（`sorting_rejects`）

记录因损伤、病害、尺寸、形状或其他声明质量原因被拒收的根、球茎、根茎、球茎或块茎，并说明还田、处理、另售或其他去向。

- 选定流：初步分选拒收的不可销售或非等级作物＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：按去向称量拒收量，并与接收作物和商品量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定分选拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg fresh reject/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选去除的土壤、土块和植物性修整物（`sorting_solids_waste`）

记录收获或初步分选中去除且跨越废物边界的土壤、土块、叶、茎和其他非产品固体。

- 选定流：从收获作物中去除的土壤、土块和植物固体＼
- 流属性/单位：Mass / kg wet or dry material（flow property; unit group）
- 数量规则：按去向测量固体，并记录湿基或干基及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定分选固体筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg removed solids/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 收获和初步分选粉尘（`harvest_dust`）

当收获或干式分选形成有记录的粉尘路径时报告颗粒物排放；有测量或方法要求时保留粒径或物种。

- 选定流：收获和分选产生的颗粒物到环境空气＼
- 流属性/单位：Mass / kg particulate matter（flow property; unit group）
- 数量规则：声明收获和分选操作的实测或方法推导粉尘量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_operation_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定收获粉尘筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.002
  - 单位：kg particulate matter/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采后整理和包装（`postharvest_conditioning`）

#### 输入
##### 产品流

###### 进入整理的分选作物（`conditioning_product_input`）

当清洗、修整、分级、冷却或包装在声明门内进行时，该条件性产品输入连接分选作物和整理过程。

- 选定流：进入整理的鲜可销售分选作物＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：连接 `marketable_sorted_crop` 并核对整理过程接收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_yield_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定整理输入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg sorted crop/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用水（`conditioning_water`）

清洗、冲洗、脱盐或其他整理用水作为工艺介质跨越边界。分别记录回用和排放。

- 选定流：清洗或整理用工艺水＼
- 流属性/单位：Volume / m3（flow property; unit group）
- 数量规则：整理批次的水表、批次日志或供应商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定整理用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m3/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用电（`conditioning_electricity`）

当清洗、分级、冷却、输送或包装设备在范围内时，纳入其电力。

- 选定流：采后整理和包装电力＼
- 流属性/单位：Energy / kWh（flow property; unit group）
- 数量规则：按整理批次分配的电表或设备记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定整理电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 木制板条箱（`conditioning_packaging_wood_crate`）

**conditioning_packaging 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

当整理环节使用包装材料或可重复包装服务来盛装或保护产品时，作为条件性投入记录。
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 瓦楞纸板箱（`conditioning_packaging_corrugated_box`）

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 聚乙烯包装薄膜（`conditioning_packaging_pe_film`）

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 废水处理服务（`conditioning_wastewater_treatment`）

当废水处理在声明边界内或作为整理批次相关服务购买时，记录该条件性投入。

- 选定流：整理排水的废水处理服务＼
- 流属性/单位：Treated wastewater volume / m3（flow property; unit group）
- 数量规则：处理日志或供应商记录的处理废水量，并与整理排水核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定废水处理筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m3 treated wastewater/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 整理后商品产品（`conditioned_marketable_product`）

纳入整理时，整理后产品就是参考产品；最终状态和质量基准必须符合参考流限定信息。

- 选定流：鲜整理后可销售其他根、球茎、根茎、球茎或块茎蔬菜＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：清洗、修整、分级、冷却或包装后的合格整理量，按 1 kg 参考输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_yield_records`
- 来源：`iso-14044-2006`
- 数量范围：整理产品参考输出 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.98
  - 上限：1.02
  - 单位：kg conditioned product/kg reference product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 整理废水（`conditioning_wastewater`）

记录跨越边界的清洗或整理废水，并记录水量和处理或排放去向。

- 选定流：清洗或整理产生的废水＼
- 流属性/单位：Volume / m3（flow property; unit group）
- 数量规则：批次、水表或处理记录的排放或处理量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定整理废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m3 wastewater/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 修整物和整理拒收物（`conditioning_rejects`）

记录整理产生的可食器官修整物、受损部分和其他拒收物，并披露每种去向。

- 选定流：整理产生的修整物和拒收物＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：按去向称量修整物和拒收物，并与整理输入及产品输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 整理后鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_yield_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定整理拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg fresh reject/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场门储存和发运（`farm_gate_storage_and_dispatch`）

#### 输入
##### 产品流

###### 进入农场门储存或发运的产品（`storage_dispatch_product_input`）

该条件性产品输入把商品分选或整理产品连接到声明农场门内的储存或发运。

- 选定流：进入农场门储存或发运的鲜商品＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：连接所选前一过程产品输出，并核对储存或发运接收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 声明门的鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定储存发运输入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.1
  - 单位：kg input product/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存或发运电力（`storage_electricity`）

记录所选边界内冷藏、通风、照明、搬运或其他储存发运设备的电力。

- 选定流：农场门储存或发运电力＼
- 流属性/单位：Energy / kWh（flow property; unit group）
- 数量规则：按声明产品批次和储存时长分配的储存或发运电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 声明门的鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定储存电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kWh/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 到声明门的公路货运服务（`dispatch_transport`）

只有当到声明收集门或农场门的运输仍在前景边界内时，才纳入该条件性公路运输。

- 选定流：产品发运公路货运服务＼
- 流属性/单位：Transport service / tonne-kilometre（flow property; unit group）
- 数量规则：实际运输质量吨数乘载货距离km；仅在无实际载荷时用容量乘利用率推得载荷一次，不能再将实测载荷乘利用率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1 kg 声明门的鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_transport_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定短途运输筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：tonne-km/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 木制板条箱（`storage_packaging_wood_crate`）

**storage_packaging 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

当包装未在整理过程中计入而是在储存或发运时添加或替换，记录该包装。
原始活动或阶段基准：每 1 kg 声明门的鲜商品参考产品.

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 瓦楞纸板箱（`storage_packaging_corrugated_box`）

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 聚乙烯包装薄膜（`storage_packaging_pe_film`）

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
- 来源：`iso-14044-2006`；`fao-package-identities`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 声明农场门的商品产品（`gate_product`）

仅在 `farm_gate_storage_and_dispatch` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流：声明农场门的鲜可销售其他根、球茎、根茎、球茎或块茎蔬菜＼
- 流属性/单位：质量 / kg

原参考状态单位说明：Mass / kg fresh product（flow property; unit group）

原始产出计量及核对：按 `cp_storage_dispatch_records` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_storage_dispatch_records` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`iso-14044-2006`

##### 废物流

###### 储存或发运损失（`storage_dispatch_loss`）

记录储存或发运中的产品损失及其时间、原因和去向。

- 选定流：农场门储存或发运损失的鲜产品＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：按原因和去向称量或核对损失量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 声明门的鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定储存损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg fresh loss/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 使用或废弃包装（`packaging_waste`）

记录以废物或可重复使用返还流离开边界的包装，并给出材料身份和去向。

- 选定流：储存或发运产生的使用后或废弃包装＼
- 流属性/单位：Mass / kg packaging（flow property; unit group）
- 数量规则：实测包装废物或记录的返还量，并连接发放包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 声明门的鲜商品参考产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定包装废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg packaging waste/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：声明单一物种及状态的合格鲜食其他根、鳞茎、根茎、球茎或块茎蔬菜（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：本同一交接点实测净合格质量，按 R/R × 1 kg 归一化；成对投入与合格产出相等，保留原始 R
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
- 选定流：声明单一物种及状态的合格鲜食其他根、鳞茎、根茎、球茎或块茎蔬菜（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：1 kg
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

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_primary_product` | all crop-cycle inputs and emissions | 在应用实测作物周期产量和所选分配方法后，将前景负荷分配给声明的商品参考产品。 | `iso-14044-2006` |
| `allocation_co_product` | saleable co-products or off-grade products leaving the system | 单独记录每项共产品。只有在记录产品可比性时才使用质量分配；否则使用经济分配并记录价格期间和来源。 | `iso-14044-2006` |
| `allocation_residue` | crop residues, field losses, rejects, soil, and wastewater | 按物理去向将残体和损失保持为废物流或基本流。不得将还田残体或处理输出作为共产品或避免负荷。 | `ipcc-2019-managed-soils`; `iso-14044-2006` |
| `allocation_reusable_packaging` | reusable bins, crates, and containers | 按有记录的重复使用次数和服务产品质量分配包装制造和维护；分别记录损失和替换。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_products_specific_input` | `cp_crop_protection_records` | 作业 field_cultivation：只有在声明作物周期实际使用时才记录农药、生物防治品、除草剂或其他作物保护品。即使产品流，也必须保留有效成分和施用记录。 原数量方法：实测采购或领用量，并保留有效成分比例 |
| `cultivation_fuel_specific_input` | `cp_field_energy_records` | 作业 field_cultivation：拖拉机和其他田间移动设备使用的燃料作为能量投入跨越种植边界。尽可能按作业记录燃料。 原数量方法：按声明作物周期分配的燃料领用、发票、油罐或机械记录 |
| `harvest_fuel_specific_input` | `cp_harvest_operation_records` | 作业 harvest_and_primary_sorting：记录收获、起挖、输送、清理和初步分选设备使用且跨越操作边界的燃料。 原数量方法：按声明收获批次分配的燃料领用、发票、油罐或机械记录 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_cultivation` | planting material | lot ledger and supplier record | crop identity; cultivar or type; material form; lot; mass or count; treatment; supplier; planting date; planted area | 收货称量并与发票和种植日志核对；原始汇总与分配：按作物周期汇总使用批次，再按商品量归一化 | kg or count | each lot and crop cycle | full declared crop cycle | farm and block | 每声明的参考流 | invoice, lot label, field log, scale record |
| `cp_nutrient_input_records` | `field_cultivation` | fertilizer or soil amendment; soil emissions | input ledger, label, test, and application log | product name; product mass or volume; N/P/K or other nutrient content; lot; application date; area; application method; lime or urea flag | 核对发票、产品标签、检测和施用日志，保留养分基准；原始汇总与分配：按作物周期汇总实际产品和养分，不推断未记录的产品类型 | kg product and kg nutrient | each product and application | full crop cycle | farm and block | 每声明的参考流 | invoice, label, laboratory test, application log |
| `cp_crop_protection_records` | `field_cultivation` | crop protection | spray or treatment log | product; active substance; dose; amount; area; date; application method; target | 将处理日志与产品领用和标签核对；原始汇总与分配：按作物周期汇总产品和有效成分 `crop_protection_products_specific_input`: 作业 field_cultivation：只有在声明作物周期实际使用时才记录农药、生物防治品、除草剂或其他作物保护品。即使产品流，也必须保留有效成分和施用记录。 原数量方法：实测采购或领用量，并保留有效成分比例 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg product or active substance | each application | full crop cycle | farm and block | 每声明的参考流 | application log, label, purchase record |
| `cp_irrigation_water_records` | `field_cultivation` | irrigation water and source withdrawal | meter, irrigation log, or supplier record | source; delivery or withdrawal volume; meter id; date; crop block; irrigation method; reuse fraction | 读取水表或核对供应商/来源记录；无水表时记录估算方法；原始汇总与分配：按地块汇总，分开供水和来源取水 | m3 | each irrigation event or monthly meter | full crop cycle | farm and block | 每声明的参考流 | meter calibration, pump log, supplier statement |
| `cp_field_energy_records` | `field_cultivation` | cultivation fuel and electricity | fuel ledger and utility meter | fuel identity; volume or mass; equipment; operation; date; electricity kWh; meter; crop block | 将燃料领用/发票和电表与田间作业核对；原始汇总与分配：按运行时间、面积或实测用量分配共享设备并披露因子 `cultivation_fuel_specific_input`: 作业 field_cultivation：拖拉机和其他田间移动设备使用的燃料作为能量投入跨越种植边界。尽可能按作业记录燃料。 原数量方法：按声明作物周期分配的燃料领用、发票、油罐或机械记录 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | L, kg fuel, or kWh | each issue or meter period | full crop cycle | farm, block, and equipment | 每声明的参考流 | invoice, tank record, meter record, operating log |
| `cp_land_and_cycle_records` | `field_cultivation` | land occupation | field register and crop plan | field or greenhouse id; area; crop; planting and harvest dates; cycle duration; land-use history; protected-cover status | 用 GIS、租约或生产记录核验地块登记；原始汇总与分配：面积乘周期再除以商品量 | ha, m2, and days | each field and crop cycle | declared crop cycle and prior land disclosure | farm and block | 每声明的参考流 | field register, map, lease, crop plan |
| `cp_yield_and_quality_records` | `field_cultivation`; `harvest_and_primary_sorting` | harvested and sorted products | harvest tickets and grading record | product identity; cultivar; harvest date; gross mass; sorted mass; marketable mass; rejects; moisture; grade; field | 称量批次并核对收获、分级和发运记录；原始汇总与分配：按作物周期和状态汇总，以合格商品量为分母 | kg fresh product and moisture fraction | each harvest lot | full harvest campaign | farm, block, and lot | 每声明的参考流 | calibrated scale, grading record, moisture test |
| `cp_residue_and_fate_records` | `field_cultivation`; `harvest_and_primary_sorting` | residues, soil, clods, and losses | residue and waste log | material; fresh or dry mass; moisture; fate; field or operation; date; treatment or return | 称量或按有记录的方法估算，并与质量平衡核对；原始汇总与分配：按物理去向汇总，不将产品共产品与废物合并 | kg wet or dry material | each event or crop cycle | full crop cycle and harvest campaign | farm, block, and operation | 每声明的参考流 | waste ticket, field log, dry-matter test, fate record |
| `cp_harvest_operation_records` | `harvest_and_primary_sorting` | harvest fuel and dust | equipment log and operation record | equipment; operation; fuel; run time; throughput; dust observation or measurement; date | 将燃料和运行记录与收获通量核对，有条件时测量粉尘；原始汇总与分配：按作物通量或运行时间分配共享作业 `harvest_fuel_specific_input`: 作业 harvest_and_primary_sorting：记录收获、起挖、输送、清理和初步分选设备使用且跨越操作边界的燃料。 原数量方法：按声明收获批次分配的燃料领用、发票、油罐或机械记录 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | L, kg fuel, hours, and kg particulate | each operation or campaign | harvest campaign | farm, block, and equipment | 每声明的参考流 | equipment log, fuel record, measurement or observation |
| `cp_conditioning_yield_records` | `postharvest_conditioning` | conditioning input, output, rejects | batch and grading record | input mass; output mass; trimmings; rejects; moisture; condition; date; batch | 称量输入和输出批次，并与水和废物记录核对；原始汇总与分配：按产品状态汇总批次，并按整理输出归一化 | kg fresh product and moisture fraction | each conditioning batch | conditioning campaign | facility and batch | 每声明的参考流 | calibrated scale, batch ticket, grade record |
| `cp_conditioning_water_records` | `postharvest_conditioning` | conditioning water and wastewater | water meter and discharge log | water input; reuse; discharge; treatment; meter; batch; date; source | 用水表或批次日志记录，并核对排放和处理量；原始汇总与分配：按产品批次汇总并披露回用和处理 | m3 | each batch or meter period | conditioning campaign | facility and batch | 每声明的参考流 | meter record, discharge log, treatment ticket |
| `cp_conditioning_energy_records` | `postharvest_conditioning` | conditioning electricity | facility meter and equipment log | electricity; equipment; runtime; batch; cooling setpoint where relevant; date | 按批次通量分配设施电表或设备记录；原始汇总与分配：按通量或运行时间分配共享能源并披露方法 | kWh | meter period or batch | conditioning campaign | facility and equipment | 每声明的参考流 | meter record, equipment log |
| `cp_packaging_records` | `postharvest_conditioning`; `farm_gate_storage_and_dispatch` | packaging input and waste | packaging issue and return log | material; mass or count; reusable flag; cycles; product mass served; waste or return; date | 称量或计数包装，并核对发放、返还和废弃记录；原始汇总与分配：按记录的使用次数和产品质量分摊可重复包装 | kg, count, and cycles | each issue or campaign | conditioning, storage, and dispatch campaign | facility and campaign | 每声明的参考流 | supplier record, issue log, return ticket, waste ticket |
| `cp_wastewater_treatment_records` | `postharvest_conditioning` | wastewater treatment service | treatment log or supplier ticket | wastewater volume; treatment route; date; batch; provider; discharge or reuse | 将处理票据与整理排水核对；原始汇总与分配：按批次汇总处理量，并分开未处理排放 | m3 | each batch or treatment period | conditioning campaign | facility and provider | 每声明的参考流 | treatment ticket, provider record, discharge log |
| `cp_storage_dispatch_records` | `farm_gate_storage_and_dispatch` | storage input, electricity, product output, loss | storage and dispatch register | intake mass; gate mass; storage duration; temperature; electricity; loss; cause; date; gate condition | 核对接收、储存、损失和门发运记录；原始汇总与分配：按批次汇总并按门产品归一化，披露储存时长 | kg, kWh, days, and temperature | each lot and storage period | selected storage and dispatch campaign | farm, store, and lot | 每声明的参考流 | scale, meter, temperature log, dispatch ticket |
| `cp_dispatch_transport_records` | `farm_gate_storage_and_dispatch` | road freight service | route and load record | origin; destination; distance; vehicle; load; product mass; return leg; date | 核验路线距离和装载记录并计算吨公里；原始汇总与分配：只汇总到声明门的路线，排除门后的运输 | km, t, and tonne-km | each dispatch route or lot | selected dispatch campaign | route and vehicle | 每声明的参考流 | route record, weigh ticket, carrier record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_marketable_yield` | field and harvest product rows | 商品量是声明分选和整理决定后的合格鲜产品质量；所有活动按 `marketable_output_kg` 归一化。 | `cp_yield_and_quality_records`; harvest tickets; grading records | kg reference product and crop-cycle yield | `fao-ex-act-v9-2022` |
| `calc_dry_matter_conversion` | residues, soil, clods, and moisture-dependent rows | `dry_mass = fresh_mass × (1 − moisture_fraction)`；记录含水率基准，分开鲜重和干重。 | `cp_yield_and_quality_records`; `cp_residue_and_fate_records`; moisture test | kg dry matter | `fao-ex-act-v9-2022`; `ipcc-2019-managed-soils` |
| `calc_nutrient_basis` | fertilizer or soil amendment | `nutrient_mass = product_mass × declared nutrient_fraction`；保留实际产品量和各 N、P、K 或其他养分基准，不用假定产品身份填补缺失含量。 | `cp_nutrient_input_records`; product label; laboratory test | kg product and kg nutrient | `ipcc-2019-managed-soils` |
| `calc_soil_n_emissions` | direct N2O, ammonia, nitrate, phosphate, and liming or urea CO2 | 对采集的氮投入、残体氮、石灰或尿素按所选 IPCC 层级和记录因子计算；披露层级、气候/土壤分层和残体去向，避免重复计算。 | `cp_nutrient_input_records`; `cp_residue_and_fate_records`; selected method factors | kg pollutant per kg marketable product | `ipcc-2019-managed-soils` |
| `calc_water_normalization` | irrigation, withdrawal, conditioning water, and wastewater | `water_per_kg = recorded_volume_m3 / marketable_output_kg`；供水、来源取水、回用和排放保持为不同记录。 | `cp_irrigation_water_records`; `cp_conditioning_water_records`; output records | m3 per kg reference product | `fao-ex-act-v9-2022` |
| `calc_energy_normalization` | fuel and electricity | 只有有燃料身份和低位热值因子时才转换燃料；用商品量归一化燃料或 kWh，并按采集的使用因子分配共享设备。 | field, harvest, conditioning, and storage energy records | L, kg fuel, or kWh per kg reference product | `fao-ex-act-v9-2022` |
| `calc_land_occupation` | land occupation | `area_time_per_kg = cultivated_area × crop_cycle_duration / marketable_output_kg`；披露面积单位、周期和保护地占用。 | `cp_land_and_cycle_records`; `cp_yield_and_quality_records` | m2*year per kg reference product | `fao-ex-act-v9-2022` |
| `calc_mass_balance` | product, reject, residue, wastewater, and storage rows | 每个操作核对：接收质量或水量加投入等于产品输出、废物输出、实测损失和有记录库存变化，且在声明容差内。 | batch, harvest, waste, water, and dispatch records | mass-balance check and normalized rows | `iso-14044-2006` |
| `calc_transport_service` | included dispatch transport | 运输工作量（吨公里）= 实际运输载荷吨数 * 载货路线公里数。实际载荷已反映装载情况，不得再乘装载率。只有额定容量和利用率记录时，先按容量 * 有据利用率推导实际载荷一次，再乘距离。空返与车辆利用率假设在运输服务数据集或因子边界中处理一次，同一燃料不得既计服务又计本地作业。保留货运批次、路线、质量、距离、原始单位和因子边界。 | `cp_dispatch_transport_records`; weigh and route records | tonne-km per kg gate product | `fao-ex-act-v9-2022` |
| `calc_reusable_packaging` | packaging input and waste | 按记录的使用次数和产品质量分配可重复包装负荷，并核对返还、丢失和废弃单元。 | `cp_packaging_records`; supplier and return records | kg packaging per kg product and packaging fate | `iso-14044-2006` |
| `planting_material_identity_and_fate` | `field_cultivation` | 对于本作业原有 planting_material 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_planting_material_records` | 按身份区分的交换和对账活动记录 | `fao-ex-act-v9-2022` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_input_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product, planting material, nutrient products, crop protection, packaging, and waste | 识别作物、可食器官、品种或类型、批次、产品状态和供应商/来源；不能只用宽泛类别名。 | product records, lot labels, supplier documents, identity review |
| `dq_temporal` | all foreground rows | 覆盖一个完整声明作物周期及相关收获或整理批次，说明缺失月份、替代时段和储存时长。 | field log, harvest tickets, meter periods, storage register |
| `dq_geography` | field, water, energy, and transport | 声明农场、地块或设施、国家/地区、生产系统、灌溉来源和纳入路线。 | field register, facility record, meter and route records |
| `dq_measurement` | amounts and conversions | 优先使用校准秤和水表、发票、供应商记录、实验室检测或路线票据；无法直接测量时记录估算和换算因子。 | calibration, invoices, tests, logs, conversion record |
| `dq_completeness` | all included processes and flow types | 对选定过程投入、输出、废物、残体、水、能源、养分产品和直接排放均纳入或明确标记不适用。 | completeness checklist, process map, inventory review |
| `dq_mass_balance` | product and waste rows | 在每个操作核对投入、输出、拒收、残体、废水、储存损失和库存变化，并解释残差。 | batch mass balance and waste-fate records |
| `dq_emissions_method` | elementary emissions | 记录氮形态、养分基准、残体去向、IPCC 层级、因子、接收介质及使用的气候/土壤分层。 | nutrient ledger, residue log, method calculation record |
| `dq_disclosure` | reference flow and published dataset | 披露产品状态、含水率、商品等级、门、边界扩展、分配、代理、推理估算和身份证据缺口。 | dataset metadata, process notes, quality statement |
| `dq_uncertainty` | ranges and modelled estimates | 将暂定推理范围标为可替换的作者估算；在影响决策的范围进入 active 或 published 前，应以审查证据替换。 | range review, site data, source update record |
| `dq_resolution` | all parameterized and unmapped rows | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | identity review and final binding audit |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference flow and product outputs | 使用一个 1 kg 鲜重参考流，确认产品身份、可食器官、状态、含水率基准、地理位置、作物周期和声明门齐全。 | `unsd-cpc-3-01259` |
| `validation_process_map` | process map and detailed inventory | 每个 required 过程都有对应详细清单；每个 conditional 过程说明是否纳入，纳入时必须有相应记录。 | `fao-ex-act-v9-2022` |
| `validation_amounts` | every flow row | 每行都要有数量规则、数值来源模式、适用范围、归一化基准、基准类型、证据类型；采集或计算证据必须引用有效采集协议。 | `iso-14044-2006` |
| `validation_mass_balance` | product, waste, residue, and water rows | 操作级质量或水量平衡无法解释、产品交接被重复计入或损失没有去向时，校验失败。 | `iso-14044-2006` |
| `validation_nutrient_emissions` | nutrient and elementary-emission rows | 检查排放计算使用记录的养分产品和声明因子，污染物种类及介质明确，残体或石灰路径没有重复计入。 | `ipcc-2019-managed-soils` |
| `validation_flow_identity` | parameterized and unmapped rows | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validation_boundary` | published dataset profile and process selection | 未声明边界扩展时，拒绝农场门后的运输、零售、消费者使用或加工。 | `unsd-cpc-3-01259` |
| `validation_bilingual_alignment` | English and Chinese Markdown | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`；只有独立审查、完整且身份解析后才可作为 `background_dataset` |
| downstream_use | 声明农场门的鲜根、球茎、根茎、球茎或块茎蔬菜前景作物过程数据集和 lifecyclemodel 投影 |
| allowed_use | 当产品限定信息、地理位置、作物周期、门状态、分配和数据质量披露相符时用于 LCA 建模和汇总；情景比较必须声明情景变化 |
| excluded_use | 加工、腌制、干燥、冷冻、烹制、饲料、种子或活植株产品；无边界扩展的消费者或零售建模；流或单位的发布 |
| required_metadata | reference flow; CPC scope; product identity and edible organ; cultivar or type; farm or block; geography; production system; area and crop cycle; planting and harvest dates; harvested and marketable mass; moisture; nutrient products and nutrient basis; crop protection; irrigation source and volume; fuel and electricity; conditioning, storage, and gate state; packaging; transport; residues and fates; 具体流身份核验; identity status; collection coverage; allocation; DQR |
| required_quality_disclosure | 时间和地理覆盖；测量和代理方法；质量平衡；产量、拒收和损失比例；N/P/K 基准；排放层级和因子；水和能源单位；分配；证据缺口或估算行；质量评分或说明 |
| update_trigger | 新审查作物或过程证据；路线、技术、产品状态或门发生重大变化；分类范围修订；具体流身份核验|

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-01259` | official_guidance | United Nations Statistics Division, CPC Version 3.0 classification detail for subclass 01259, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/01259 | 产品类别范围、包含示例、分类排除和鲜产品边界背景 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O、氨和养分路径、作物残体氮、石灰/尿素 CO2、因子选择和避免重复计算 |
| `fao-ex-act-v9-2022` | official_guidance | FAO, EX-ACT Guidelines, second edition, tool version 9, DOI:10.4060/cc0142en, https://doi.org/10.4060/cc0142en | 作物周期边界、土地占用、产量、水、能源、活动记录和农业数据披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 清单一致性、分配、共产品处理、可重复包装分配和质量平衡校验 |
| `fao-stat-crops` | dataset | FAOSTAT Crops and livestock products, Food and Agriculture Organization of the United Nations, https://www.fao.org/faostat/en/#data/QCL | 作物身份、产量和生产背景的可选交叉核对；不替代前景记录 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |

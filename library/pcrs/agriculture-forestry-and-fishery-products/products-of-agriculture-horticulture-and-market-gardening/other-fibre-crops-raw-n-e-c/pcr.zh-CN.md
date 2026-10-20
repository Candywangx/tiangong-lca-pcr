---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fibre-crops-raw-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未列明原纤维作物

## 1. 范围与适用性

本 PCR 适用于 CPC 01929 范围内一个明确命名的单一物种原纤维作物或产品，从受控种植、收获或初步提取，到所选择的首次原纤维制备交接点。可覆盖原状或沤制的亚麻与真麻、椰壳纤维、蕉麻、针茅草、芦荟、菠萝叶、虎尾兰、卡罗阿麻、苎麻、非洲麻、香蒲及丝兰纤维。每个数据包只能声明一个物种、纤维部位、制备状态、等级、含水率和交接点。

排除棉花、黄麻与红麻类别，以及纺纱、纱线、织物、成品制造和零售包装。首次制备可有条件包括沤制、剥麻、清洗、干燥、打麻、清理和分级，但不得把后续纺织加工并入。参考交接点固定为农场或首次原纤维制备交接，须明确一次。多年生作物须把建植期和生产期关联起来。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fibre-crops-raw-n-e-c |
| classification_refs | CPC 3.0:01929; mapping relation: exact |
| covered_products | 一个明确物种的原状或沤制原纤维作物产品，处于声明的收获、提取或首次制备状态 |
| excluded_products | 棉花；黄麻与红麻类别；纱线、织物、成品、混合纤维和下游制造 |
| representative_product | 在声明含水率、沤制/制备状态和等级下的 1 kg 单一物种原纤维 |
| production_route | 受控种植 → 收获/初步提取 → 可选沤制、剥麻、清洗、干燥、打麻、清理和分级 → 原纤维交接 |
| market_state | 散装、未纺纱、未制成织物的原纤维材料 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个明确物种、植物部位及制备状态的原纤维产品 |
| How much | 1 kg 净产品 |
| How well | 声明物种、品种（如已知）、纤维部位、原状/沤制状态、制备路线、等级、杂质和含水率 |
| How long or cycle | 一个已识别批次及其作物周期；多年生路线包括或归属建植期 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other fibre crops, raw, n.e.c. `99b99c66-1c44-40db-bb8e-2d5ec022aa28` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 植物物种；纤维部位；原状或沤制状态；制备路线；含水率；等级；杂质；地理位置；作物周期；农场或首次制备交接点 |

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`primary_fibre_preparation` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `reference_raw_fibre` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-balance products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用净质量；所有批次须在同一含水基准上比较，换算须使用批次实测含水率 |
| `moisture_state` | raw, retted and dried fibre states | water mass fraction | % wet basis | 在各交接点采样并声明方法；不得用类别默认含水率替代实测值 |
| `transport_service` | off-site transfer | mass-distance | t·km | 以净装载质量乘以载货距离；空返和自营燃料单独披露且不得重复 |
| `land_time` | annual and perennial crop periods | area-time | ha·year | 分别记录建植期和生产期的面积与时间 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 声明田块在建植前或所选生产期开始时的状态和既有多年生植株年龄 |
| starting_condition_role | 原纤维作物生产者 |
| product_classification_scope | 一个符合 CPC 01929 的命名原纤维产品；不跨物种、棉花或黄麻/红麻类别聚合 |
| recursive_input_rule | 场内留用繁殖材料仅记录一次内部转移；不得同时作为上游产品和同一前景产出递归计入 |
| upstream_dataset_requirement | 购入繁殖材料、肥料、植保、水、能源、运输和处理服务须采用已核实的实际产品或服务数据集 |
| disclosure | 声明物种、部位、路线、场址、时期、含水率、沤制和制备状态、等级、交接点、残余去向及归属选择 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_boundary` | complete route | 种植、收获/提取和首次制备作为独立责任节点；仅包括实际选择的制备工序 | `unsd-cpc-v3-2025` |
| `gate_exclusivity` | reference product | 选择农场交接或首次制备交接一次；中间材料不得重复作为参考产出 |  |
| `route_alternatives` | production and preparation | 雨养/灌溉、人工/机械收获、露沤/水沤/酶法及环境/机械干燥属于明确路线选择，不得无证据平均 | `fao-natural-fibres-2009` |
| `period_boundary` | perennial crops and shared assets | 实施明确的多期间归属：把建植、生产、更新和终止事件关联至相应报告期间；共享设备按记录的服务量和期间归属一次 |  |
| `material_state_handoff` | all nodes | 每次交接记录输入和输出状态、含水率、质量、去向和责任方，并以批次平衡连接 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | 受控纤维作物生产 | required | 声明一年生或多年生生产路线及生产期 | managed biological production | crop area, period and harvest-ready biomass |
| `harvest_extraction` | 收获与初步提取 | required | 按作物部位声明割取、拔取、剥离或回收路线 | harvest/capture | collected raw-material lot |
| `primary_fibre_preparation` | 首次纤维制备与分级 | conditional | 选择首次沤制、剥麻、清洗、干燥、打麻、清理或分级交接时纳入 | treatment, stabilization and grading | accepted prepared raw fibre |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1 kg 同一声明交接点净合格产品 |

### 过程：受控纤维作物生产 (`crop_production`)

#### 输入
##### 产品流

###### 种子、种苗或营养繁殖材料 (`propagation_material`)

记录进入作物系统的已识别种子、种苗、吸芽、根茎、插条或其他繁殖材料；场内留种仅在跨越所声明前景边界时记录。

- 选定流: 作物特定繁殖材料；物种及形态确定前 UUID 未解析
- 流属性/单位: Mass / kg, or count when the verified flow supports count
- 数量规则: 按物种、批次和种植面积计量购入或转移数量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留作物周期关联.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_propagation`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg reference product
  - 基准: 每 1 kg 参考产品，并保留作物周期关联; conditional routes impose zero only when inactive
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 尿素肥料投入（`fertilizer_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留田块和作物期.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 磷酸一铵肥料投入（`fertilizer_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留田块和作物期.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 氯化钾肥料投入（`fertilizer_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留田块和作物期.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 施用的牛粪肥投入（`fertilizer_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留田块和作物期.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 农业石灰石投入（`fertilizer_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留田块和作物期.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 灌溉水 (`irrigation_water`)

按水源记录实际供应的灌溉水；降雨属于场址背景，不作为供应产品交换。

- 选定流: 实际供应的灌溉水
- 流属性/单位: Volume / m3
- 数量规则：按事件/用途和匹配期间，计量实际跨此产品供水边界的供水量并保留声明原生单位。水源取水表不能自动当交付产品量，须核对两测点间输配损失、外部回水和存水变化。前景负责直接天然取水时，另设分水源基本流输入及本地供水作业，内部交付在聚合边界抵销，不能另加一笔外购水。外购水承接兼容供应商取水及供水负担一次。雨养/无供水须有据，缺少交付量或责任证据属于不完整而非零；归属后按合格最终产出归一化一次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷作物周期，随后归一化至参考产品.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: m3/ha crop cycle
  - 基准: 每公顷作物周期，随后归一化至参考产品; conditional routes impose zero only when inactive
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`crop_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留作业类型.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

###### 柴油投入（`crop_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 参考产品，并保留作业类型.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

##### 废物流

本类别无预设流；仅在前景记录证明发生时增加。

##### 基本流
###### 农业土地占用 (`crop_land_occupation`)

记录所声明一年生或多年生生产期的占地面积与时间。

- 选定流: 农业土地占用；基础流身份未解析
- 流属性/单位: Area-time / ha·year
- 数量规则: 实测种植面积乘以占用时间
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：按作物周期记录后再以产量归一化.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_area_period`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.00001
  - 上限: 1
  - 单位: ha·year/kg harvest-ready biomass
  - 基准: 按作物周期记录后再以产量归一化; conditional routes impose zero only when inactive
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 输出
##### 产品流

###### 达到收获条件的纤维作物生物质 (`harvest_ready_biomass`)

该中间产品是受控生产移交至收获环节的已识别植株或部位，尚不是原纤维参考产品。

- 选定流: 物种特定的待收获纤维作物生物质；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按声明含水率计量或平衡核算田间产出
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每作物生产过程产出.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 100
  - 单位: kg/kg raw fibre product
  - 基准: 每作物生产过程产出; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 移出田块的作物生产损失 (`field_losses`)

仅当失败或移除生物质跨越田块边界并进入明确废物去向时，将其记录为废物流。

- 选定流: 物种特定田间生物质废物；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量移出质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 待收获生物质.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residues`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg harvest-ready biomass
  - 基准: 每 1 kg 待收获生物质; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流
###### 土壤直接氧化亚氮排放 (`soil_nitrous_oxide`)

依据已记录氮投入，采用声明的 IPCC 层级或有依据的地方方法计算土壤直接 N2O。

- 选定流: 排放至空气的氧化亚氮；介质确认前 UUID 未解析
- 流属性/单位: Mass / kg N2O
- 数量规则: 应用声明排放因子，并在需要时将 N2O-N 换算为 N2O
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：按氮投入计算并归一化至参考产品.

- 归一化基准：每声明的参考流
- 基准类型: 氮投入 (`n_input`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_nutrients`
- 来源: `ipcc-2019-refinement-v4-ch11`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg N2O/kg N applied
  - 基准: 按氮投入计算并归一化至参考产品; conditional routes impose zero only when inactive
  - 基准类型: 氮投入 (`n_input`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：收获与初步提取 (`harvest_extraction`)

#### 输入
##### 产品流

###### 待收获纤维作物生物质投入 (`harvest_ready_input`)

记录进入割取、拔取、剥叶、果壳回收或适用提取路线的生产节点产出。

- 选定流: 物种特定待收获纤维作物生物质；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按实测含水状态记录转移批次质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每收获过程投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 100
  - 单位: kg/kg raw fibre product
  - 基准: 每收获过程投入; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`harvest_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 收集原料.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

###### 柴油投入（`harvest_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 收集原料.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

##### 废物流

本类别无预设流；仅在前景记录证明发生时增加。

##### 基本流
本类别无预设流；仅在前景记录证明发生时增加。

#### 输出
##### 产品流

###### 收集的原始纤维材料 (`raw_collected_fibre_material`)

记录移交至初级制备的物种特定茎、叶、韧皮、果壳或已分离纤维状态。

- 选定流: 物种及状态特定原始纤维材料；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 交接时计量合格批次质量和含水率
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每收获过程产出.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.01
  - 上限: 1
  - 单位: kg/kg harvest input
  - 基准: 每收获过程产出; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 其他预期收获产品 (`harvest_coproducts`)

仅当种子、木质芯、叶片或其他材料具有预期用途和有凭据的交接时，才作为产品记录。

- 选定流: 产品特定预期共产品；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按产品状态和去向计量质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每 1 kg 收集的原始纤维材料.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_output_destinations`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: kg/kg raw collected fibre material
  - 基准: 每 1 kg 收集的原始纤维材料; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 送往废物管理的收获残余物 (`harvest_residues`)

当附带生物质进入处置或处理时记录为废物；还田材料须单独披露且不得重复计算。

- 选定流: 纤维作物收获残余废物；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量残余质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 收集的原始纤维材料.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residues`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: kg/kg raw collected fibre material
  - 基准: 每 1 kg 收集的原始纤维材料; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流
本类别无预设流；仅在前景记录证明发生时增加。

### 过程：首次纤维制备与分级 (`primary_fibre_preparation`)

#### 输入
##### 产品流

###### 收集的原始纤维材料投入 (`raw_material_input`)

记录进入所声明首次制备路线的确切原始或沤制状态。

- 选定流: 物种及状态特定原始纤维材料；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按批次计量接收质量和含水率
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每初级制备过程投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_mass`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 100
  - 单位: kg/kg prepared raw fibre
  - 基准: 每初级制备过程投入; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 沤制与清洗工艺水 (`process_water`)

仅在实施水沤、清洗或漂洗时记录供应水，并保留水源及工序。

- 选定流: 用于沤制或清洗的工艺水
- 流属性/单位: Volume / m3
- 数量规则: 计量或有凭据的供应体积
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 制备原纤维.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_water`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3/kg prepared raw fibre
  - 基准: 每 1 kg 制备原纤维; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`conditioning_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 制备原纤维.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

###### 柴油投入（`conditioning_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 制备原纤维.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

###### 从收获地至首次制备地的运输 (`raw_material_transport`)

原料跨场址移动时记录第三方货运；自营运输燃料仅在运行节点记录一次。

- 选定流: 原始纤维作物材料货运服务
- 流属性/单位: Mass-distance / t·km
- 数量规则: 净运输质量乘以载货路线距离
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
原始活动或阶段基准：每一运输原料批次.

- 归一化基准：每声明的参考流
- 基准类型: 运输服务 (`transport_service`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_transport`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: t·km/t raw material
  - 基准: 每一运输原料批次; conditional routes impose zero only when inactive
  - 基准类型: 运输服务 (`transport_service`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 废水处理服务 (`wastewater_treatment`)

仅对移交至外部处理方的废水记录处理服务。

- 选定流: 按实际路线选择的废水处理服务
- 流属性/单位: Volume / m3
- 数量规则: 处理方接收的实测排放体积
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
原始活动或阶段基准：每 1 kg 制备原纤维.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastewater`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3/kg prepared raw fibre
  - 基准: 每 1 kg 制备原纤维; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本类别无预设流；仅在前景记录证明发生时增加。

##### 基本流
本类别无预设流；仅在前景记录证明发生时增加。

#### 输出
##### 产品流

###### 制备原纤维参考产品 (`reference_raw_fibre`)

仅在 `primary_fibre_preparation` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流: 其他未列明原纤维作物 `99b99c66-1c44-40db-bb8e-2d5ec022aa28`
- 流属性/单位: Mass / kg
原始产出计量及核对：按 `cp_conditioning_mass` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_conditioning_mass` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass`

###### 其他预期制备共产品 (`fibre_coproducts`)

仅在用途和交接均有记录时，将麻屑、木质芯、短纤、种子或其他产出记录为共产品。

- 选定流: 产品特定共产品；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按状态、等级和去向计量产出
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每 1 kg 制备原纤维.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_output_destinations`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: kg/kg prepared raw fibre
  - 基准: 每 1 kg 制备原纤维; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 不合格纤维与制备残余物 (`conditioning_rejects`)

按实测质量和去向记录不合格纤维、杂质及不可用残余物；可销售降级材料仍属于产品。

- 选定流: 制备残余废物；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量不合格品和残余质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 制备原纤维.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residues`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: kg/kg prepared raw fibre
  - 基准: 每 1 kg 制备原纤维; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 沤制或清洗废水 (`conditioning_wastewater`)

采用湿法工艺时记录废水体积和接收路线；未选择湿法路线时不得推定排放。

- 选定流: 工艺废水；组成和去向确定前 UUID 未解析
- 流属性/单位: Volume / m3
- 数量规则: 按去向计量或水量平衡计算排放量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：湿法路线适用时每 1 kg 制备原纤维.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_wastewater`
- 数量范围: 用于首轮筛查的宽泛 QA 范围；须由实际前景记录替换
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3/kg prepared raw fibre
  - 基准: 湿法路线适用时每 1 kg 制备原纤维; conditional routes impose zero only when inactive
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流
本类别无预设流；仅在前景记录证明发生时增加。


### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：其他纤维作物，未加工，未另分类 `99b99c66-1c44-40db-bb8e-2d5ec022aa28`
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
- 选定流：其他纤维作物，未加工，未另分类 `99b99c66-1c44-40db-bb8e-2d5ec022aa28`
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

### 分配规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `mass_balance_first` | all processes | 首先对投入、合格产品、共产品、残余、废物和实测含水变化进行批次质量平衡 |  |
| `coproduct_attribution` | intended co-products | 避免分配优先；可细分时细分。仍需分配时依据研究目标声明物理或经济方法、数据期和敏感性 | `iso-14044-2006` |
| `residue_classification` | residues and rejects | 仅有预期用途和有凭据交接的材料是共产品；废物、还田和无主损失不得获得产品产出量 |  |
| `multi_period_attribution` | perennial establishment and shared assets | 以有证据的生产年、服务量或寿命产出归属，记录更换与终止；同一负担不得在多个期间重复 |  |
| `shared_asset_attribution` | assets serving multiple nodes | 列出所有消费节点和期间，按记录的机器小时、质量处理量或其他因果服务量归属一次 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_propagation` | `crop_production` | propagation material | records | supplier invoices; lot and planting logs | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | kg or count | each planting event | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_nutrients` | `crop_production` | fertilizer and nutrients | records | product invoices; nutrient analysis; field application log | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | kg product and kg nutrient | each application | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_crop_protection` | `crop_production` | crop protection | records | application log; formulation and active ingredient | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | kg or L | each application | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_irrigation` | `crop_production` | irrigation water | records | meter reading or documented withdrawal ；实际供水边界及测点；产品交付量；直接取水责任方；水源至交付的损失回水及存水；供应商覆盖| direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | m3 | each irrigation period | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_energy` | `all processes` | energy carriers | records | meters; invoices; equipment and fuel logs | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | native carrier unit | monthly and by operation | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_area_period` | `crop_production` | area and period | records | georeferenced field register; establishment and productive dates | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | ha and days | each crop period | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_harvest_mass` | `harvest_extraction` | harvest mass | records | calibrated scale; lot moisture sample | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | kg and % wet basis | each harvest lot | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_output_destinations` | `harvest and preparation` | intended outputs | records | dispatch note; buyer or internal transfer record | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | kg | each output lot | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_residues` | `all processes` | residues and waste | records | scale ticket; destination and fate record | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | kg | each transfer | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_conditioning_mass` | `primary_fibre_preparation` | received and prepared fibre | records | calibrated scales; moisture and grade sample | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | kg and % wet basis | each lot | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_conditioning_water` | `primary_fibre_preparation` | process water | records | meter reading and source record | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | m3 | each batch or day | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_transport` | `primary_fibre_preparation` | transport service | records | dispatch mass; loaded route distance; vehicle record | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | t and km | each trip | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |
| `cp_wastewater` | `primary_fibre_preparation` | wastewater | records | discharge meter or water balance; destination receipt | direct record with traceable source；原始汇总与分配：sum by process and normalize through accepted output | m3 | each batch or day | representative declared period | all included sites and lots | 每声明的参考流 | calibration, invoice, log or receipt retained |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | 过程交换量 ÷ 同一批次合格参考产品净质量 | exchange amount; lot links; accepted reference mass | amount per kg reference product |  |
| `moisture_conversion` | fibre states | 干物质 = 湿质量 × (1 − 湿基含水率)；仅用配对批次测量 | wet mass; moisture fraction | comparable mass state |  |
| `transport_work` | freight | t·km = 净装载吨数 × 载货路线公里数 | dispatch mass; route distance | transport service |  |
| `soil_n2o` | managed soil | 采用声明 IPCC 层级由氮投入计算 N2O-N，并按 44/28 转为 N2O | N inputs; emission factors | kg N2O | `ipcc-2019-refinement-v4-ch11` |
| `lot_mass_balance` | harvest and preparation | 输入 = 合格产品 + 共产品 + 残余/废物 + 库存变化 + 经测量含水变化 | lot masses; moisture; stock | reconciliation result |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrients`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | reference product | 物种、部位、状态、等级和交接点与固定产品 UUID 兼容 | lot specification and flow detail verification |
| `coverage_quality` | foreground inventory | 覆盖所声明期间所有场址、田块、批次和实际工序；缺失须量化 | completeness ledger |
| `measurement_quality` | mass, moisture, water and energy | 记录仪表、校准、抽样方法、单位换算和异常值处理 | calibration and sampling records |
| `temporal_quality` | annual/perennial route | 数据期匹配作物周期，并明确建植、生产、更新和终止期 | dated crop and asset records |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 验证规则

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 固定 UUID、Mass 属性和 kg 单位须与命名原纤维产品及声明交接点一致 | error |
| `validate_gate_once` | route | 农场和首次制备交接不得同时作为参考产出 | error |
| `validate_ranges` | every flow card | 检查范围非负、下限不高于上限、分母与过程一致；条件路线不启用时不得强加正值 | error |
| `validate_flow_identitys` | parameterized inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | error |
| `validate_balance` | harvest and preparation | 在声明含水基准上平衡投入、产品、共产品、残余、废物和库存变化 | error |
| `validate_outputs` | intended outputs and rejects | 所有预期产出有交接；降级、不合格、回收或废物状态有明确去向且不重复 | error |
| `validate_period_assets` | perennial and shared infrastructure | 期间和消费节点完整，建植与共享资产负担仅归属一次 | error |
| `validate_route_delta` | alternative routes | 每个替代路线声明父活动及其对拓扑、清单、计算或验证的实际差异；互斥路线不得平均 | error |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 一个命名原纤维产品的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 物种、部位、状态、路线、地理和交接点兼容的产品系统 |
| excluded_use | 其他物种、棉花、黄麻/红麻、混合纤维、纱线、织物或成品的无条件代理 |
| required_metadata | 物种；部位；原状/沤制状态；制备技术；含水率；等级；杂质；场址；时期；交接点；分配 |
| required_quality_disclosure | 覆盖率、测量和校准、范围外值、缺失记录、路线代理、共产品和多周期归属 |
| update_trigger | 产品状态、路线、交接点、技术、物种范围、固定 UUID 兼容性或关键证据发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure and explanatory notes, 2025 | CPC 01929 product scope and examples |
| `fao-natural-fibres-2009` | official_guidance | FAO and Common Fund for Commodities, Proceedings of the Symposium on Natural Fibres, 2009 | natural-fibre crop routes, primary preparation and market states |
| `ipcc-2019-refinement-v4-ch11` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils | managed-soil N2O calculation |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and transparency |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |

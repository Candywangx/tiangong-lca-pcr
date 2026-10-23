---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他高淀粉或菊粉含量的食用根及块茎，未另分类

## 1. 范围与适用性

本PCR覆盖一个明确命名、具有可靠高淀粉或高菊粉食用贮藏器官证据且归入CPC 01599剩余类别的根或块茎物种。数据集可止于鲜品收获交接，也可包括申报交付点之前实际发生的愈伤、贮藏、分选和包装。

每个数据集必须申报物种、必要时品种、淀粉/菊粉依据、生产系统、批次或汇总规则、新鲜/愈伤/贮藏状态、水分基准和终端交付点。不得混合不同物种或状态。排除木薯、甘薯、山药、芋头、箭叶黄体芋、马铃薯等具名CPC产品、归入其他类别的菊苣根、以面积或面积时间计量的在田作物、作为种用商品出售的繁殖材料、粉末、淀粉、菊粉、提取物、干制品和制成食品。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c |
| classification_refs | CPC 3.0: 01599 其他高淀粉或菊粉含量的食用根及块茎，未另分类; mapping relation: narrower |
| covered_products | 一个明确命名的剩余食用根块茎物种，具有高淀粉或菊粉贮藏器官证据 |
| excluded_products | 具名CPC根块茎；在田作物；繁殖材料；粉末；淀粉/菊粉提取物；干制品；制成食品；混合物种批次 |
| representative_product | 申报的新鲜、愈伤或贮藏状态下的一个剩余高淀粉/菊粉食用根块茎物种 |
| production_route | 种植和管理生产、起收、轻柔处理、分选以及条件适用的愈伤、贮藏和包装 |
| market_state | 收获交接点鲜品，或在申报初级处理交付点的愈伤/贮藏合格品 |

同一类别允许多条路线，但一个数据集只选择实际路线和一个终端状态。投入、损失或交付点有实质差异的技术不得混合。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 选定终端交付点的一个申报物种其他高淀粉或菊粉食用根块茎 |
| How much | 1,000 kg 按接收状态计的合格产品 |
| How well | 申报物种、必要时品种、淀粉/菊粉资格证据、产地、生产系统、收获期、批次、表皮/附土状态、新鲜/愈伤/贮藏状态、水分基准、等级、包装和交付点 |
| How long or cycle | 一个作物周期及交付点之前仅实际包含的后处理批次和贮藏期间 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 声明的单一高淀粉/菊粉物种的合格收获完整食用根或块茎（UUID 未解析） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定项 | 物种；必要时品种；淀粉/菊粉证据；产地；生产系统；作物周期；批次；状态；水分基准；等级；包装；交付点；包含操作 |

不得绑定以面积时间计量的在田菊苣作物或制成的冬虫夏草粉。升为active或发布过程数据前必须解析兼容的已收获质量流。

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`sorting_packing` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `reference_product_output` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 终端合格品 | 质量 | kg | 报告按接收状态计的质量、水分和产品状态，干物质换算另行保留。 |
| `species_eligibility` | 参考身份 | 成分和分类证据 | 描述记录 | 保留该食用贮藏器官高淀粉/菊粉且非具名CPC产品的证据。 |
| `area_to_reference_conversion` | 作物生产 | 活动特定属性 | 活动特定单位 | 将同一作物及申报后处理路线的田间总量归一到合格终端质量。 |
| `nutrient_content_basis` | 养分投入 | 养分质量 | kg N、kg P2O5、kg K2O | 分别保留产品量、配方、含量及元素/氧化物基准。 |
| `batch_mass_balance` | 起收、愈伤、贮藏、分选和包装 | 质量 | kg | 核对进料、合格品、降级品、剔除物、异物、腐损和水分损失；蒸发水不得计作固废。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 种植时已准备好的生产区；种植材料及可归属共享设施进入边界 |
| starting_condition_role | 一个申报作物周期的起点 |
| product_classification_scope | CPC 01599内一个明确命名的其他高淀粉/菊粉食用根块茎物种 |
| recursive_input_rule | 从其他经营者接收的同类产品链接其实际上游数据集，不在本PCR内重建 |
| upstream_dataset_requirement | 兼容的种植材料、养分、植保、灌溉、能源、包装和废物处理数据集 |
| disclosure | 物种与资格证据、地理、生产系统、周期、面积、产量、状态、水分、交付点、路线启用、贮藏时间、批次、剔除物、包装、共享资产 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_residual_identity` | 全部路线 | 仅包括一个明确命名的剩余食用物种，并记录其淀粉/菊粉和CPC资格。 |  |
| `boundary_crop_cycle` | 生产 | 包括申报周期的种植材料、整地、养分、植保、灌溉、田间能源、起收和直接排放。 |  |
| `boundary_postharvest` | 后处理路线 | 仅包括交付点前实际发生的愈伤、清洁、贮藏、分选和包装，并保留配对批次和水分状态。 | `fao-root-tuber-postharvest` `fao-root-tuber-storage` |
| `boundary_downstream_exclusion` | 全部路线 | 止于制粉、切片制造、干制、淀粉/菊粉提取、食品制造、配送和零售之前。 |  |
| `boundary_direct_emissions` | 管理土壤和现场燃烧 | 依据库存中相同的养分、残余物和燃料记录计算排放。 | `ipcc-2019-managed-soils` `emep-eea-2023-guidebook` `ipcc-2006-stationary-combustion` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_production_lifting` | 种植、起收与收获交接 | `required` | 始终 | 生产并起收申报的食用贮藏器官 | 种植面积和一个作物周期 |
| `curing_storage` | 愈伤与贮藏 | `conditional` | 在申报交付点之前发生愈伤或贮藏 | 稳定并保存配对批次 | 进出批次质量和贮藏时间 |
| `sorting_packing` | 分选、分级与包装 | `conditional` | 在申报交付点之前发生分选、分级或包装 | 制备合格终端产品 | 配对的进料、合格品和剔除物质量 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1000 kg 同一声明交接点净合格产品 |

### 过程：种植、起收与收获交接 (`managed_production_lifting`)

#### 输入
##### 产品流

###### 物种专用种植材料 (`planting_material_input`)

收集并核对物种专用种植材料，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的繁殖材料或种植材料
- 流属性 / 单位: Mass or number / kg or item
- 数量规则: 分别计量外购和自留材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `product_specific`
原始活动或阶段基准：一个作物周期的鲜种植材料.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_inputs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5000
  - 单位: kg/ha·crop
  - 基准: 一个作物周期的鲜种植材料
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

###### 尿素肥料投入（`agricultural_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：申报养分量而非肥料产品质量.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_inputs`

###### 磷酸一铵肥料投入（`agricultural_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：申报养分量而非肥料产品质量.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_inputs`

###### 氯化钾肥料投入（`agricultural_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：申报养分量而非肥料产品质量.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_inputs`

###### 施用的牛粪肥投入（`agricultural_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：申报养分量而非肥料产品质量.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_inputs`

###### 农业石灰石投入（`agricultural_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：申报养分量而非肥料产品质量.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_inputs`

###### 灌溉水 (`irrigation_water_input`)

收集并核对灌溉水，保留本卡所需的身份、状态、来源和去向。

- 选定流: 灌溉供水
- 流属性 / 单位: Volume / m3
- 数量规则: 计量或计算施用水量；雨养系统有证据时记零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：施用灌溉水，不含有效降雨.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_crop_inputs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 20000
  - 单位: m3/ha·crop
  - 基准: 施用灌溉水，不含有效降雨
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

###### 中压电力（`field_energy_input`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：保留实际能源载体。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_crop_inputs`

###### 柴油（`field_energy_input_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：保留实际能源载体。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_crop_inputs`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 收获的未另分类根或块茎 (`harvested_root_tuber_output`)

收集并核对收获的未另分类根或块茎，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的未解析收获根或块茎
- 流属性 / 单位: Mass / kg
- 数量规则: 计量合格起收质量并记录附土、损伤、状态和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `product_specific`
原始活动或阶段基准：收获状态的合格贮藏器官.

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 500
  - 上限: 100000
  - 单位: kg/ha·crop
  - 基准: 收获状态的合格贮藏器官
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 送往处理的声明作物受损已采收根或块茎器官（`harvest_damaged_root_organs_waste`）

仅在本具体废物材料确实于原有过程边界内单独收集并送往有记录的处理时适用。本卡片不证明场址实际分选。真实混合流保留一条有明确组成的身份及其实际交接；不编造组分交换，也不重复计入混合物及其组分外运。留存存货、原位残余物或直接环境返回不属于本废物外运。

采集与交接范围：收集并核对田间残余物、损伤器官和附着土壤，保留本卡所需的身份、状态、来源和去向。 原始活动或阶段基准：所有类别按去向分别保留.

- 选定流：送往处理的声明作物受损已采收根或块茎器官
- 流属性/单位：Mass / kg
- 数量规则：在实际收集或处理交接点计量本具体废物材料质量；保留原过程、批次和期间基准，恰好一次执行原有产量关联与归一化规则。未分配的物理数量台账与第 7 节共享负担分配分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_lots`

不继承已退役集合卡片的数值范围。使用相容的实测数量及本身份专属证据；证据缺失仍是完整性缺口，不代表零数量。在确认兼容确切身份前，UUID 保持未解析。

##### 基本流

###### 氧化亚氮，排放至空气（`soil_n_emissions_output`）

仅在实测或所选适用方法确认该排放路径时，将氧化亚氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：各物质和环境介质分别保留。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：质量 / kg N2O
- 数量规则：实测或按方法计算氧化亚氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以 N2O-N 报告时，按 44/28 换算为 N2O 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### 氨，排放至空气（`soil_n_emissions_output_nh3`）

仅在实测或所选适用方法确认该排放路径时，将氨，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：各物质和环境介质分别保留。

- 选定流：氨，排放至空气
- 流属性/单位：质量 / kg NH3
- 数量规则：实测或按方法计算氨，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### 一氧化氮，排放至空气（`soil_n_emissions_output_no`）

仅在实测或所选适用方法确认该排放路径时，将一氧化氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：各物质和环境介质分别保留。

- 选定流：一氧化氮，排放至空气
- 流属性/单位：质量 / kg NO
- 数量规则：实测或按方法计算一氧化氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### 硝酸根，排放至水体（`soil_n_emissions_output_nitrate`）

仅在实测或所选适用方法确认该排放路径时，将硝酸根，排放至水体作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：各物质和环境介质分别保留。

- 选定流：硝酸根，排放至水体
- 流属性/单位：质量 / kg NO3-
- 数量规则：实测或按方法计算硝酸根，排放至水体的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以硝酸盐氮报告时，按 62/14 换算为 NO3- 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### 化石二氧化碳，排放至空气（`soil_n_emissions_output_co2_fossil`）

仅在实测或所选适用方法确认该排放路径时，将化石二氧化碳，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：各物质和环境介质分别保留。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg CO2
- 数量规则：实测或按方法计算化石二氧化碳，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

### 过程：愈伤与贮藏 (`curing_storage`)

#### 输入
##### 产品流

###### 进入愈伤或贮藏的收获产品 (`storage_product_input`)

收集并核对进入愈伤或贮藏的收获产品，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的未解析收获根或块茎
- 流属性 / 单位: Mass / kg
- 数量规则: 计量进料批次并记录状态、损伤和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `product_specific`
原始活动或阶段基准：按记录水分状态配对的批次.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_storage_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 2
  - 单位: kg incoming/kg accepted output
  - 基准: 按记录水分状态配对的批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 中压电力（`storage_energy_input`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：申报实际能源载体和时间。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_storage_lots`

###### 柴油（`storage_energy_input_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：申报实际能源载体和时间。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_storage_lots`

###### 愈伤或清洁用水 (`storage_water_input`)

收集并核对愈伤或清洁用水，保留本卡所需的身份、状态、来源和去向。

- 选定流: 工艺用水供应
- 流属性 / 单位: Volume / m3
- 数量规则: 计量供水；干法路线记零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：未用水时为零.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_storage_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted output
  - 基准: 未用水时为零
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 愈伤或贮藏后的合格产品 (`stored_root_tuber_output`)

收集并核对愈伤或贮藏后的合格产品，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的未解析愈伤或贮藏根或块茎
- 流属性 / 单位: Mass / kg
- 数量规则: 计量合格产出并记录期间、状态和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `product_specific`
原始活动或阶段基准：配对批次并申报水分和期间.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_storage_lots`
- 来源: `fao-root-tuber-postharvest` `fao-root-tuber-storage`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0.5
  - 上限: 1
  - 单位: kg accepted/kg incoming
  - 基准: 配对批次并申报水分和期间
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 贮藏损失和剔除物 (`storage_loss_output`)

收集并核对贮藏损失和剔除物，保留本卡所需的身份、状态、来源和去向。

- 选定流: 按去向区分的腐烂、萌芽、损伤或剔除产品
- 流属性 / 单位: Mass / kg
- 数量规则: 计量移出物并核对期初期末库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: `site_specific`
原始活动或阶段基准：实物剔除物；水分损失另计.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_storage_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming
  - 基准: 实物剔除物；水分损失另计
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 现场能源产生的化石二氧化碳 (`storage_fossil_co2_output`)

收集并核对现场能源产生的化石二氧化碳，保留本卡所需的身份、状态、来源和去向。

- 选定流: 排放至空气、未指定环境的化石二氧化碳 `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg CO2
- 数量规则: 依据实际化石燃料计算；无现场燃烧时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: `technology_specific`
原始活动或阶段基准：仅现场化石燃料燃烧.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_storage_lots`
- 来源: `ipcc-2006-stationary-combustion`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg CO2/1,000 kg accepted output
  - 基准: 仅现场化石燃料燃烧
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

### 过程：分选、分级与包装 (`sorting_packing`)

#### 输入
##### 产品流

###### 进入分选的产品批次 (`sorting_product_input`)

收集并核对进入分选的产品批次，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报的新鲜、愈伤或贮藏根块茎批次
- 流属性 / 单位: Mass / kg
- 数量规则: 计量进料质量并记录状态、水分和来源批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `product_specific`
原始活动或阶段基准：配对的分选批次.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_sorting_runs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 2
  - 单位: kg incoming/kg accepted terminal product
  - 基准: 配对的分选批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 中压电力投入（`packing_energy_input`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：保留实际能源载体.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_sorting_runs`

###### 柴油投入（`packing_energy_input_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围: `site_specific`
原始活动或阶段基准：保留实际能源载体.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_sorting_runs`

###### 纸板包装（`packaging_input`）

仅在纸板包装跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。 本卡为条件性材料示例，不要求使用该包装；计量重复使用和更换，按有记录的使用次数分摊材料一次。
原始活动或阶段基准：扣除有证据重复使用后的归属包装。

- 选定流：纸板包装
- 流属性/单位：质量 / kg
- 数量规则：实测纸板包装的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_sorting_runs`

###### 聚乙烯包装薄膜（`packaging_input_film`）

仅在聚乙烯包装薄膜跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。 本卡为条件性材料示例，不要求使用该包装；计量重复使用和更换，按有记录的使用次数分摊材料一次。
原始活动或阶段基准：扣除有证据重复使用后的归属包装。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：实测聚乙烯包装薄膜的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_sorting_runs`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格终端根块茎产品 (`reference_product_output`)

仅在 `sorting_packing` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流: 申报物种的未解析其他高淀粉或菊粉食用根块茎
- 流属性 / 单位: Mass / kg
原始产出计量及核对：按 `cp_sorting_runs` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_sorting_runs` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_runs`
- 来源: `mass-balance-identity`

##### 废物流

###### 分选剔除物和异物 (`sorting_reject_output`)

收集并核对分选剔除物和异物，保留本卡所需的身份、状态、来源和去向。

- 选定流: 按去向区分的不合格、损伤或污染器官及异物
- 流属性 / 单位: Mass / kg
- 数量规则: 与有用降级产品和返工品分开计量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: `site_specific`
原始活动或阶段基准：仅剔除物；有用降级品仍为产品.

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_sorting_runs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming
  - 基准: 仅剔除物；有用降级品仍为产品
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 基本流

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：声明的单一高淀粉/菊粉物种的合格收获完整食用根或块茎（UUID 未解析）
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
- 选定流：声明的单一高淀粉/菊粉物种的合格收获完整食用根或块茎（UUID 未解析）
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
| `allocation_crop_outputs` | 作物生产 | 优先物理细分；不可分的有用次级产品必须报告数量并采用有依据的一致分配。 |  |
| `allocation_grades` | 分选 | 合格等级和有用降级品均作为产品；不得为规避分配而记为废物。 |  |
| `allocation_residues` | 残余物 | 无功能弃置时不计收益；出售或利用时申报去向并采用经评审的分配或单独替代情景。 |  |
| `allocation_shared_assets` | 共享设施 | 按实测运行时间、面积时间、体积时间或吞吐量分配，防止节点间重复归属。 |  |
| `allocation_rework` | 返工 | 返工回到原批次，额外投入和损失仅计一次，验收后才计产出。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `managed_production_lifting` | 种植、养分、水、植保、能源 | 发票、田间日志、仪表、承包记录 | 物种、品种、田块、面积、日期、投入身份、配方、含量、数量、单位、载体、作业 | 将采购、自留材料和施用记录核对至田块；原始汇总与分配：按田块和投入汇总，共享用量因果分配，再除以配对终端产量 | 原单位及ha | 每事件 | 完整作物周期 | 每个田块和共享服务 | 每声明的参考流 | 发票、施用日志、仪表、田块图、承包凭证 |
| `cp_harvest_lots` | `managed_production_lifting` | 起收、合格收获物、残余物、土壤 | 称量单、收获日志、抽样 | 物种、田块、日期、毛皮重、合格质量、水分、附土、损伤、残余/剔除类别、去向、批次 |校准称量及代表性外观/水分抽样；原始汇总与分配：按批次和类别汇总，保留状态和去向 field_residue_output_specific_output：必需的材料、数量及边界角色确认要求，不是选定交换。保留的采集范围：收集并核对田间残余物、损伤器官和附着土壤，保留本卡所需的身份、状态、来源和去向。 原始活动或阶段基准：所有类别按去向分别保留. 保留每一实际材料及其去向，包括条件卡片尚未表示的材料。记录实际组成及状态、原生属性和单位、实测数量、群组和期间、接收方、处理责任及唯一交接；保留原产量关联、归一化及分配义务。完整性确认前，只对实际物理上不同的交换建立卡片，并使用兼容 UUID 或确切未解析身份。真实混合流保留一条有实测组成的明确身份；不编造分选，不重复计入混合物及其组分外运。留存或递延存货、原位残余物及直接返回环境的土壤保留实际平衡、存货或返回角色，不假定为技术圈废物外运；建立基本交换前须确认方法及边界责任。独立销售回收物须有实际 Product 交接，不得同时作为本废物。缺失记录不等于零数量，已退役类别数值筛选不是组分限值。 | kg、%、ha | 每批 | 完整起收期 | 每个田块和收集点 | 每声明的参考流 | 校准、批次号、照片/检验、水分和去向记录 |
| `cp_field_emissions` | `managed_production_lifting` | 管理土壤排放 | 计算前景记录 | 各形态N、残余N、土壤/气候、因子版本、物质、环境介质 | 对核对后的田间投入应用有文件依据的方法；原始汇总与分配：逐田块计算后按产出质量加权 | kg物质 | 每周期 | 同一周期及方法规定滞后期 | 每个管理田块 | 每声明的参考流 | 方法来源、工作表、投入核对、复核 |
| `cp_storage_lots` | `curing_storage` | 愈伤、贮藏、损失、能源、水 | 批次单、称量、仪表、环境日志 | 物种、批次、期初期末质量、水分、损伤、方法、时间、温湿度、通风、水、能源、剔除物、去向 | 使用 calc_batch_balance 的储存控制体；合格及降级品发运与期末库存分开，保留实测废物、有据物理释放和未解释差额。 | kg、%、day、m3、kWh、MJ | 每批及环境期间 | 完整申报期间 | 每个仓库、愈伤区和公用仪表 | 每声明的参考流 | 校准、环境记录器、批次链、盘点、去向 |
| `cp_sorting_runs` | `sorting_packing` | 分选、等级、返工、包装、剔除物 | 运行单、称量、包装记录、仪表 | 物种、批次、状态、进料、等级标准、合格/降级/剔除量、返工、包装材料/质量/复用、能源、交付点 | 配对运行质量平衡和包装数量核对；原始汇总与分配：按等级和去向汇总，共享运行按吞吐量分配 | kg、item、kWh | 每运行或批次 | 全部代表性运行 | 每条分选包装线及共享资产 | 每声明的参考流 | 校准、检验、包装规格、运行/批次链接、闭合检查 |
| `cp_phase1_environment_coverage` | managed_production_lifting | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | 作物周期流 | 田间总量/同一作物归属的终端合格质量×1000 | 田间量、配对合格量 | 每1000 kg参考产品量 |  |
| `calc_batch_balance` | 贮藏和分选 | 每次明确一个控制体。期间储存：期初库存＋外部接收＋实际添加物料/水＝合格发运＋独立销售的降级品发运＋废弃移出＋有据物理释放＋期末库存＋带符号未解释差额。仍存放的合格/降级品仅属期末库存，不计发运。分选/包装批次：期初在制品＋实际批次接收/添加＝合格移出＋独立转出的降级品＋废物/拒收移出＋有据物理释放＋期末在制品＋带符号未解释差额。同一收货不同时计进料和接收；同一合格发运不同时计合格产出和发运。使用匹配的组分/含水率基准，内部返工抵销一次；调查不闭合，不虚构废物或蒸发。物理平衡及归属完成后才作最终归一化。 | 匹配批次/控制体的期初期末库存、接收/添加、互斥移出量、含水率/组分及不确定性 | 已核对批次清单 | `mass-balance-identity` |
| `calc_dry_matter` | 水分换算 | 接收质量×(1−湿基水分分数) | 质量、水分 | 干物质质量 | `mass-balance-identity` |
| `calc_combustion_co2` | 现场燃料 | 燃料量×适用热值、碳和氧化因子 | 能源记录、因子 | kg化石CO2 | `ipcc-2006-stationary-combustion` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 命名物种和状态，并保留高淀粉/菊粉及CPC剩余资格证据。 | 植物/产品规格、成分来源、分类复核、批次记录 |
| `dq_completeness` | 全部节点 | 核对田块、投入、收获批次、库存、分选、损失、包装和去向。 | 完整性清单和平衡 |
| `dq_temporal` | 作物与贮藏 | 保持一个作物周期及配对后处理批次，披露贮藏时间和平均方法。 | 有日期的田间、批次、库存记录 |
| `dq_measurement` | 质量、水分、环境 | 使用校准秤及有文件依据的代表性水分/环境测量。 | 校准、抽样、记录器记录 |
| `dq_route` | 条件节点 | 仅包括实际愈伤、贮藏、分选和包装；披露未启用节点和终端交付点。 | 路线声明、过程图、记录 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1000 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1000 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1000 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | severity |
| --- | --- | --- | --- |
| `validate_residual_identity` | 参考产品 | 未命名单一物种、未证明高淀粉/菊粉和CPC 01599资格、状态或交付点时拒绝。 | error |
| `validate_exclusions` | 参考产品 | 拒绝具名CPC根块茎、在田作物、繁殖材料、粉末、提取物和制成品。 | error |
| `validate_reference_identity` | 参考产品 | candidate阶段UUID可空；active和过程发布前必须确认兼容的已收获质量流。 | error |
| `validate_reference_mass` | 终端产出 | 合格终端产出必须为1000 kg接收状态质量，不含剔除物和未验收返工。 | error |
| `validate_route_activation` | 条件节点 | 未启用时相关负荷为零或缺省；启用时必须有配对记录。 | error |
| `validate_nutrient_binding` | 作物养分 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | error |
| `validate_mass_balance` | 收获、贮藏、分选 | 核对合格、降级、剔除、异物、库存和水分损失并披露闭合误差。 | error |
| `validate_ranges` | 全部清单卡 | 范围例外需复核；临时筛查值不替代前景证据或构成生产限值。 | warning |
| `validate_flow_resolution` | 清单 | 过程发布前将参数化卡解析为经确认UUID，并解析当前未解决身份。 | error |
| `validate_shared_rework` | 共享资产和返工 | 拒绝共享服务或返工产品重复计量。 | error |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个明确命名的其他高淀粉/菊粉食用根块茎物种的前景产品系统 |
| downstream_use | `secondary_dataset`；仅在物种、路线、状态、地理和交付点匹配时作`background_dataset` |
| allowed_use | 限于申报物种、生产系统、周期、状态、贮藏时间、技术、地理和交付点 |
| excluded_use | 无物种剩余平均；具名CPC产品；在田作物；繁殖材料；粉末；提取物；制成品；跨新鲜/愈伤/贮藏交付点替代 |
| required_metadata | 物种/品种、成分和分类资格、产地、系统、周期、面积、批次、状态、水分、等级、交付点、启用节点、时间、包装、分配和身份解析 |
| required_quality_disclosure | 完整性、测量、缺失数据、范围例外、平衡闭合、共享资产、返工、分配和未解析身份 |
| update_trigger | 物种/分类纠正、交付点或路线变化、技术变化、新记录、因子修订、产量/损失变化或身份确认 |

## 11. 数据来源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `fao-root-tuber-postharvest` | official_guidance | FAO, https://www.fao.org/4/y4358e/y4358e05.htm | 轻柔收获、搬运、愈伤、劣变和后处理路线 |
| `fao-root-tuber-storage` | official_guidance | FAO, https://www.fao.org/4/x5415e/x5415e03.htm | 贮藏条件、库存控制和损失记录 |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤含氮排放 |
| `emep-eea-2023-guidebook` | method_factor | EEA EMEP/EEA 2023, https://www.eea.europa.eu/publications/emep-eea-guidebook-2023 | 农业氨排放 |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006, Volume 2 Chapter 2, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | 现场燃烧CO2 |
| `mass-balance-identity` | method_factor | 应用于配对前景记录的质量守恒恒等式 | 批次核对和精确参考产出 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |

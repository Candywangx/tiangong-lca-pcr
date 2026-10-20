---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw"
language: "zh-CN"
status: candidate
sync_with: "pcr.en-US.md"
content_maturity: authored_methodology
translation_status: aligned
---
# 初级干燥门的未加工干辣椒及多香果（辣椒属或多香果属）
## 1. 范围与适用性
本 PCR 指导 CPC 3.0 `01652` 辣椒属或多香果属未加工干果的前景数据包。声明产品是经采收、干燥、首次清理或分级后的整粒干果，交付点为初级干燥门。数据包须识别属、种或栽培品种；*Pimenta dioica* 多香果与辣椒属辣椒或红椒应分别记录生产路线。混合属产品须分开清单和产出，不得推定共同的作物系数或含水率目标。
边界从受管理栽培或明确来源的鲜果投入开始，到净合格未加工干果为止。包含采收、初次处理、自然/太阳能或机械干燥，以及交付点之前实施的首次清理和分选。外购上游投入连接背景数据集。鲜青辣椒和甜椒（`01231`）、胡椒属胡椒（`01651`）、压碎、研磨或其他加工干辣椒（`23922`）、混合制品、提取、灭菌、零售包装和下游配送均不属于本参考产出。只对外购鲜果进行干燥的前景数据包须声明其上游鲜果数据集，不得声称涵盖未采集的种植阶段。| `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024`

## 2. 产品类别身份
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-dry-capsicum-spp-pimenta-spp-raw` |
| classification_refs | CPC 3.0 `01652`，辣椒属或多香果属未加工干果; mapping relation: exact |
| covered_products | 整粒未加工干辣椒、干红椒果实或多香果，须声明属、种、形态和干燥路线 |
| excluded_products | 鲜青辣椒或甜椒；胡椒属胡椒；压碎、粉碎、混合、提取或其他加工香辛料 |
| representative_product | 声明的初级干燥门处 1 kg 净合格整粒未加工干果 |
| production_route | 一年生或季节性管理的辣椒属作物，或多年生管理的多香果果实生产，之后采收并按路线干燥 |
| market_state | 整粒未加工干果，散装或首次运输容器；按适用规格声明目标含水率和等级 |
辣椒属与多香果属是不同的生物生产路线，不得互换植物投入。自然/太阳能与机械干燥是同一干燥活动的替代技术；预干燥和最终干燥若并用，须分别记录。| `codex-cxs-353-2022`; `codex-cxs-358-2024`; `unece-ddp-24-2013`

## 3. 参考流
| Field | Value |
| --- | --- |
| What | 初级干燥门处整粒未加工辣椒属或多香果属干果 |
| How much | 1 kg 净合格干果 |
| How well | 声明属/种、整粒形态、进出含水率、等级、干燥路线、地域和交付点 |
| How long or cycle | 一个声明的采收季及其对应干燥批次 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| 参考产品流 | 完整未研磨的辣椒属（Capsicum）或多香果属（Pimenta）原料干果（UUID 未解析） |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 属和种；品种或商品类型；整粒未加工状态；含水率；等级；自然/太阳能或机械干燥；采收季；地域；声明交付点；散装或容器状态 |
参考量不包含皮重、去除的自由水、拒收物、交付点前分离的果柄和低等级果实。Tiangong 身份查询成功前不得声称已有 CPC 专用产品流 UUID。

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`first_cleaning_grading` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `accepted_dried_fruit` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格干果产出 | Mass | kg | 在声明交付点称量净合格整粒干果；排除皮重和拒收物。 |
| `moisture_basis` | 采收果实和干果 | Mass and moisture fraction | kg and % wet basis | 测量或记录各批次进出含水率；以干物质守恒换算，并单列实测移除物。 |
| `drying_water` | 干燥产出 | Mass | kg | 去除水量等于进料水分减去合格及拒收固体所含水分；如有加水须调整。 |
| `crop_area_time` | 管理种植 | Area-time | ha·season or ha·year | 一年生辣椒属使用作物季；多年生多香果使用声明的果园年度/结果期；若包括建园，记录分摊。 |
| `energy_carrier` | 干燥及田间能源 | Energy, Mass or Volume | kWh, MJ, kg or L | 保留能源载体、燃料含水率、换算基础、实测工序和批次关联。 |
| `nutrient_basis` | 肥料及排放 | Mass | kg product and kg nutrient | 分别记录制剂质量和养分组成；排放计算使用声明的养分投入。 |

## 5. 系统边界
受管理生产节点记录作物或结果树对象、地域、种植或果园面积、种苗或树苗、灌溉、养分和植保投入、田间能源、土地利用及相关直接排放。辣椒属和多香果属可能有不同种植周期、多年生设施和建园分摊；应分别采集，而非套用一个作物系数。采收作为独立节点，因为它形成有计量和采集损失的鲜果交接。干燥把含水易变质的鲜果稳定为实测整粒干果；首次清理分级分别交接合格、降级、拒收和废物流。| `codex-cxs-353-2022`; `codex-cxs-358-2024`; `ipcc-2019-managed-soils`
### 边界规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_dried` | 参考产品 | 纳入形成整粒未加工干果所需的干燥和首次清理；排除压碎、研磨、提取、混合和后续处理。 | `un-cpc-3-exp-2025`; `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_route_identity` | 生产 | 分别记录辣椒属一年生/季节性路线和多香果属多年生路线；声明种植是前景采集还是以外购鲜果上游数据集提供。 | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `boundary_drying_delta` | 干燥 | 声明自然/太阳能及机械步骤、批次或连续模式、能源和服务投入、含水变化和天气暴露；纳入交付点前所有步骤。 | `unece-ddp-24-2013`; `mass-balance-identity` |
| `boundary_output_states` | 采收、干燥、分选 | 按去向分别记录合格干果、降级果、拒收果、果柄/杂质、其他可回收残留物、蒸发水和未解释损失。 | `mass-balance-identity` |
### 边界抽象
| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别的受管理作物/果树及种植面积，或干燥入口处有来源记录的外购鲜果批次 |
| starting_condition_role | 生物生产投入或外购上游产品；绝非第二参考产出 |
| product_classification_scope | CPC 01652 整粒未加工辣椒属/多香果属干果；排除鲜品 01231、胡椒属 01651 和加工品 23922 |
| recursive_input_rule | 同类别干果若用于重新干燥或混配，须单独记录来源和质量；不得递归算作本次采收的新产出。 |
| upstream_dataset_requirement | 种植材料、肥料、水供应、燃料、电力、设备、外购鲜果和处理服务须有代表性背景数据集或记录排除理由。 |
| disclosure | 属/种、路线、季节/场址、鲜果来源、干燥前后含水率和等级、干燥技术、批次得率、拒收去向、交付点及分摊决策 |

## 6. 过程清单结构
### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_fruit_production` | 受管理果实生产 | conditional | 前景包含种植时 | foreground | 作物季或果园年度 |
| `fruit_harvest` | 果实采收与收集 | conditional | 前景包含种植时 | foreground | 收集鲜果 |
| `primary_drying` | 果实初级干燥 | required | 所有纳入的自然/太阳能及机械干燥步骤 | foreground | 实测含水率的干果 |
| `first_cleaning_grading` | 首次清理分级 | conditional | 交付点前实施清理或分级时 | foreground | 合格整粒干果 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1 kg 同一声明交接点净合格产品 |

### 过程：受管理果实生产（`managed_fruit_production`）
#### 输入
##### 产品流

###### 种植材料（`planting_stock`）
声明辣椒属种子或种植材料，以及多香果属树苗或树木维护。
- 选定流：种植材料
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`
- 来源：`codex-cxs-353-2022`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 尿素肥料投入（`managed_fruit_production_agricultural_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

###### 磷酸一铵肥料投入（`managed_fruit_production_agricultural_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

###### 氯化钾肥料投入（`managed_fruit_production_agricultural_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

###### 施用的牛粪肥投入（`managed_fruit_production_agricultural_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

###### 农业石灰石投入（`managed_fruit_production_agricultural_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 灌溉用水投入（`field_water_energy`）

仅当声明的过程实际使用灌溉用水时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：灌溉用水
- 流属性/单位：体积 / m3
- 数量规则：记录该过程和期间实际使用的灌溉用水数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

###### 中压电力投入（`field_water_energy_electricity`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

###### 柴油投入（`field_water_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_records`

##### 废物流
不预设废物投入；回用堆肥须记录来源及负担处理。

##### 基本流
依据采集的作物投入记录土地占用、按水源区分的取水和管理土壤排放；不得把记录缺失推定为零排放。| `ipcc-2019-managed-soils`

#### 输出
##### 产品流

###### 待采辣椒属或多香果属果实（`standing_fruit`）
按属和季节记录生产至采收交接处的受管理果实状态。
- 选定流：待采辣椒属或多香果属果实
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
分别记录田间残留物及拒收果实，并说明留田、移出、回收或处置去向。
##### 基本流
直接作物排放仅依据有记录的投入和方法计算。

### 过程：果实采收与收集（`fruit_harvest`）
#### 输入
##### 产品流

###### 中压电力（`harvest_services`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`

###### 柴油（`harvest_services_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`

##### 废物流
不预设通用废物投入。
##### 基本流
直接尾气若有测量则记录；燃料上游负担保留在背景数据集中。
#### 输出
##### 产品流

###### 辣椒属或多香果属鲜果（`fresh_fruit_handoff`）
称量整粒鲜果并记录含水率、植物身份、采收日期和批次。
- 选定流：辣椒属或多香果属鲜果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
分别记录未收集果实、田间拒收物和附带物料及其去向。
##### 基本流
不预设新的基本流产出。

### 过程：果实初级干燥（`primary_drying`）
#### 输入
##### 产品流

###### 整粒辣椒属或多香果属鲜果（`drying_fruit_input`）
记录鲜果交接或外购批次、入料质量和含水率。
- 选定流：整粒辣椒属或多香果属鲜果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_lot`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力（`drying_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_lot`
- 来源：`unece-ddp-24-2013`

###### 柴油（`drying_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_lot`
- 来源：`unece-ddp-24-2013`

###### 购入蒸汽（`drying_energy_steam`）

仅在本过程实际使用购入蒸汽时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：购入蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量本过程和期间实际使用的购入蒸汽，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_lot`
- 来源：`unece-ddp-24-2013`

##### 废物流
若回收热或废物衍生燃料进入干燥，须记录来源及负担处理；不作默认推定。
##### 基本流
燃料若在前景内燃烧，应记录直接燃烧排放。

#### 输出
##### 产品流

###### 整粒未加工辣椒属或多香果属干果（`dried_fruit_handoff`）
称量首次分级前、在实测含水率下稳定的整粒干果。
- 选定流：整粒未加工辣椒属或多香果属干果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_lot`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
记录损坏、霉变或其他拒收果实及其回收、处理或处置路线；重新干燥果实须保持与原批次的关联。
##### 基本流
蒸发水由实测水分平衡计算，并按清单约定报告为去除水分。

### 过程：首次清理分级（`first_cleaning_grading`）
#### 输入
##### 产品流

###### 分选前整粒干果（`sorting_input`）
记录整粒干果交接，不得算作新采收产品。
- 选定流：分选前整粒干果
- 流属性/单位：Mass / kg
- 数量规则：按具体工序和批次测量，再归一化至 1 kg 净合格未加工干果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 合格未加工干果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力（`sorting_inputs`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_records`
- 来源：`mass-balance-identity`

###### 纸板包装（`sorting_inputs_paper`）

仅在纸板包装跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。 本卡为条件性材料示例，不要求使用该包装；计量重复使用和更换，按有记录的使用次数分摊材料一次。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：纸板包装
- 流属性/单位：质量 / kg
- 数量规则：实测纸板包装的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_records`
- 来源：`mass-balance-identity`

###### 聚乙烯包装薄膜（`sorting_inputs_film`）

仅在聚乙烯包装薄膜跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。 本卡为条件性材料示例，不要求使用该包装；计量重复使用和更换，按有记录的使用次数分摊材料一次。
原始活动或阶段基准：每 1 kg 合格未加工干果。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：实测聚乙烯包装薄膜的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_records`
- 来源：`mass-balance-identity`

##### 废物流
不预设废物投入。
##### 基本流
若有测量，记录粉尘排放；分离的土壤或果柄不属于合格产品。
#### 输出
##### 产品流

###### 整粒未加工辣椒属或多香果属干果；UUID 待确认（`accepted_dried_fruit`）

仅在 `first_cleaning_grading` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流：整粒未加工辣椒属或多香果属干果；UUID 待确认
- 流属性/单位：Mass / kg
原始产出计量及核对：按 `cp_grade_records` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_grade_records` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`codex-cxs-353-2022`
- 数量范围：暂定非负筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.1
  - 单位：kg/kg
  - 基准：每 1 kg 合格干果的宽泛首轮筛选；以路线实测值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
分别记录降级但可用果实、拒收物、分离的果柄/杂质和粉尘。声明每项是否返工、销售、回收或弃置；仅有依据的联产品参与分配。
##### 基本流
不预设通用基本流。

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：完整未研磨的辣椒属（Capsicum）或多香果属（Pimenta）原料干果（UUID 未解析）
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
- 选定流：完整未研磨的辣椒属（Capsicum）或多香果属（Pimenta）原料干果（UUID 未解析）
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

## 7. 分配与联产品处理
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_primary` | 作物和干燥批次 | 先将实测工序归属至植物路线、场址、季节和批次；再按净合格整粒干果归一化全部负担。 | `mass-balance-identity` |
| `allocation_offgrade` | 降级果实 | 区分降级但可销售果实。优先按等级细分；真正无法细分的联产品须记录所选物理或经济分配及价格/数量。 | `mass-balance-identity` |
| `allocation_rework` | 重新干燥或分选果实 | 将返工能源和损失关联原批次；仅在最终出口计算合格质量，防止重复计算共享运行或切换负担。 | `mass-balance-identity` |
| `allocation_residue` | 果柄、拒收物、残留物 | 明确记录去向和回收抵扣；不得默认分配产品负担或避免负担。 | `mass-balance-identity` |
一年生辣椒属与多年生多香果属产出年份不能共用未声明的分母。多香果须记录结果年份以及建园或共享果园负担的归属。批次干燥机须记录运行级投入、产出、清理和切换；连续干燥须记录期间质量平衡和稳定运行窗口。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算和质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。

### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_records` | `managed_fruit_production` | 种植投入 | 农场记录 | 属；种；地块；面积；季节；种植材料；肥料；养分；农药；水；能源 | 票据、田间日志及仪表；原始汇总与分配：按植物路线和季节汇总 | kg; ha; m3; kWh | 每次作业 | 声明的完整作物季或多香果果园年度 | 各场址 | 每声明的参考流 | 带日期记录及仪表校准 |
| `cp_harvest_records` | `fruit_harvest` | 鲜果交接 | 采收票据 | 批次；日期；鲜果质量；含水率；地块；损失；机械燃料 | 地磅及采收日志；原始汇总与分配：汇总实测批次并保留损失 | kg; %; L | 每批 | 完整采收期 | 各来源地块 | 每声明的参考流 | 皮重及秤校验 |
| `cp_drying_lot` | `primary_drying` | 干燥质量及能源 | 干燥运行日志 | 批次；起止；进出质量及含水率；路线；燃料；电力；拒收物；返工 | 校准秤、含水率检测和仪表；原始汇总与分配：按批次进行干物质和水分平衡 | kg; %; kWh; MJ | 每运行批次或连续期间 | 声明的所有干燥 | 各干燥设备 | 每声明的参考流 | 校准、含水率方法及运行关联 |
| `cp_grade_records` | `first_cleaning_grading` | 合格及降级产出 | 等级日志 | 批次；合格等级质量；含水率；降级；拒收；果柄；去向；能源 | 校准秤及等级记录；原始汇总与分配：仅汇总合格等级 | kg; %; kWh | 每批 | 所有交付点产出 | 各分选设备 | 每声明的参考流 | 等级规格及核对表 |
| `cp_phase1_environment_coverage` | managed_fruit_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | 干燥批次 | 进料干物质＝进料质量 ×（1－进料湿基含水率）；与所有干燥固体和损失核对 | 质量及含水率检测 | 干物质平衡 | `mass-balance-identity` |
| `calc_water_removed` | 干燥批次 | 进料水分－所有干燥产出保留水分－单独实测液态出口，并调整任何加水 | 质量及含水率检测 | 去除水分，kg | `mass-balance-identity` |
| `calc_normalize` | 完整数据包 | 归属后的投入/排放除以声明交付点处净合格干果 kg | 已归属总量及合格质量 | 每 kg 清单 | `mass-balance-identity` |
### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有批次 | 每个合格产出均须追溯植物身份、整粒未加工形态和路线。 | 来源批次及等级记录 |
| `dq_moisture` | 干燥 | 须测量或记录进出含水率、方法和抽样方案；不得假定跨属的统一目标。 | 含水率检测及规格 |
| `dq_balance` | 采收至交付点 | 按批次核对合格、降级、拒收及损失质量，并解释差异。 | 签署的质量平衡表 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 验证规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | 产品身份 | 本参考产品不得包含鲜青果、胡椒属胡椒，以及压碎、研磨或其他加工干香辛料。 | `un-cpc-3-exp-2025` |
| `validation_route` | 过程图 | 根据当前记录核实辣椒属/多香果属路线、种植边界、日晒/太阳能或机械干燥阶段，以及批次或连续期间归属。 | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_moisture` | 干燥 | 按物种和市场分别检查实测进出含水率及适用产品规格；不得套用统一阈值。 | `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validation_balance` | 干燥及分选 | 核对干物质和水分；最终出口前，合格产出须排除拒收、降级及仍在返工中的质量。 | `mass-balance-identity` |
| `validation_identity_gap` | 参考流 | UUID 未确定时，数据集不得声称拥有固定的 Tiangong 参考产品流。 | `un-cpc-3-exp-2025` |



| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集概况
| Field | Value |
| --- | --- |
| dataset_role | 未加工干果生产前景数据包 |
| downstream_use | `secondary_dataset`；路线和身份审查后可作 `background_dataset` |
| allowed_use | 整粒未加工辣椒属或多香果属干果作为已声明下游加工或销售投入 |
| excluded_use | 将鲜青果、胡椒属胡椒、粉状香辛料、混合制品或提取物作为相同产出 |
| required_metadata | 物种；种植来源；场址；季节；干燥路线；批次模式；含水率；等级；交付点；确认后的参考流 UUID |
| required_quality_disclosure | 测量覆盖；含水率方法；缺失流；暂定范围；干物质平衡；分配及拒收处理 |
| update_trigger | 植物路线、干燥技术、目标含水率/等级、交付点、分配或代表性记录变化 |
## 11. 数据来源
| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-exp-2025` | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025 年 6 月 30 日，<https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf> | 01652 未加工干果的边界与排除项 |
| `codex-cxs-353-2022` | standard | 食品法典 CXS 353-2022，干制或脱水辣椒和红椒标准，<https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | 辣椒属干品形态及相应质量规格 |
| `codex-cxs-358-2024` | standard | 食品法典 CXS 358-2024，干制或脱水果实和浆果来源香辛料标准，<https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/> | 多香果身份及干品规格 |
| `unece-ddp-24-2013` | standard | 联合国欧洲经济委员会 DDP-24，整粒干辣椒，<https://unece.org/trade/documents/2013/02/standards/chilli-peppers-whole-dried> | 整粒辣椒形态及干燥路线 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC，2019 Refinement，第 4 卷第 11 章，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html> | 管理土壤排放核算输入 |
| `mass-balance-identity` | method_factor | 对实测采收、干燥与分选阶段应用干物质和水的守恒关系 | 干燥质量平衡与核对 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |

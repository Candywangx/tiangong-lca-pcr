---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 高粱，种子

## 1. 范围与适用性

本 PCR 适用于专门为播种而种植的 *Sorghum* 属种子，包括开放授粉种和杂交种、未处理种子和处理种子，产品状态为种子生产者门口交付的可销售种子批次。范围覆盖制种田栽培、收获、干燥与处理、清理与调理，以及在实际发生时的种子处理、包装和发运前储存。

本 PCR 不包括并非专门为制种而种植的高粱籽粒或饲料、甜高粱（*Sorghum saccharatum*）、下游分销、播种以及由该种子生产商品作物的种植。认证、质量申报种子（QDS）、品种真实性、发芽率、纯度或处理状态的声明必须有相应批次记录或检测支持；本 PCR 本身不产生此类声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed |
| classification_refs | CPC 3.0：01141，Sorghum, seed（exact） |
| covered_products | 专门为播种而种植的 *Sorghum* 属种子；开放授粉种和杂交种；清理、调理、未处理、包衣或以其他方式处理且处理状态已声明的种子 |
| excluded_products | 非专门为制种而种植的高粱（CPC 01142）；甜高粱（CPC 01809）；粮食、饲料、生物质及下游作物产品 |
| representative_product | 种子生产者门口交付、批次可追溯、经清理且达到所声明播种质量状态的高粱种子 |
| production_route | 亲本或基础种子投入；制种田栽培和收获；干燥和处理；清理和调理；条件性的处理、包装和储存 |
| market_state | 可销售净种子质量，达到所声明种子级且可供播种，并声明水分、质量、种子类别、处理和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在种子生产者门口交付的播种质量高粱种子生产 |
| How much | 1 kg 可销售净种子，不含包装 |
| How well | 声明物种和品种、杂交/开放授粉状态、种子类别、发芽率、分析纯度、品种纯度、水分、处理/包衣以及认证体系或无声明状态 |
| How long or cycle | 一个制种作物周期，加上直至生产者门口发运的收获后处理和储存 |
| reference_flow_link | rf_sorghum_seed_mass |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 高粱，种子 `0ad65fec-228e-47cf-8d8d-6d00f56c18ed` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及品种/栽培品种；杂交或开放授粉状态；种子类别/世代；生产地理和作物年份；认证或 QDS 体系及声明状态；发芽率检测结果/方法/日期；分析纯度和品种纯度结果/方法/日期；水分含量及测量基准；处理/包衣有效成分和施用量或未处理状态；包装状态；储存时长和条件；净种子质量 |

构建前景数据包时，`必需限定信息` 中的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 最终可销售高粱种子 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用不含包装的净种子质量，记录称量时批次水分，不得用标称袋重替代实测净质量。 |
| `moisture_basis` | 收获、干燥、调理和最终种子质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测水分基准。干物质换算必须使用实测水分分数并披露公式；本 PCR 不设默认水分。 |
| `seed_count_conversion` | 种子粒数转质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用批次特定的实测千粒重或等效粒数—质量检测，并保留取样记录。 |
| `nutrient_basis` | 肥料及有机改良物投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 产品和 kg 养分 | 分别记录配方产品质量和 N、P、K 养分；排放计算中的氮活动数据必须以 kg N 表示。 |
| `energy_basis` | 电力和燃料 | 数据集特定 | kWh、MJ 或 kg 燃料 | 保留计量电力和采购燃料原单位；换算使用适用于实际能源载体且已披露的仪表系数、密度或低位热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 单独识别的亲本、基础或其他合格高粱种子批次进入制种田周期；声明初始田块位置、前茬、土壤管理状态和作物年份。 |
| starting_condition_role | 前景制种周期的上游种子投入及已披露田块基线。 |
| product_classification_scope | 输出限于 CPC 01141 下专门为制种而种植的高粱；籽粒高粱、甜高粱和下游作物生产不在范围内。 |
| recursive_input_rule | 播种用高粱种子作为投入记录，并使用其独立上游数据集；不得在当前数据集中递归重建同一制种前景。 |
| upstream_dataset_requirement | 亲本种子、肥料、植保产品、能源、供水、处理材料和包装应采用地理、时间、技术和种子类别相适宜的上游数据集。 |
| disclosure | 声明田块地理和作物年份、种子类别和批次、灌溉制度、施肥和植保制度、收获水分、干燥/调理路线、处理、包装、储存、共产品、排除项和分配。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_chain` | 前景种子生产 | 纳入栽培和收获、干燥和处理、清理和调理，以及直至生产者门口发运前所有被触发的处理、包装和储存作业。 | `fao-qds-2006`; `oecd-seed-schemes-2026` |
| `boundary_inputs_outputs` | 清单完整性 | 记录亲本种子、养分、植保产品、灌溉、能源、处理材料、包装、可销售种子、筛下物、残余物、废物和直接排放。任何排除必须量化或有文件化筛查支持。 | `eu-pef-2021` |
| `boundary_managed_soils` | 栽培排放 | 对适用的合成和有机氮、作物残体、挥发以及淋失/径流路径计算直接和间接土壤 N2O，避免重复计算；适用时记录石灰和尿素 CO2。 | `ipcc-2019-managed-soils` |
| `boundary_downstream_exclusion` | 下游阶段 | 排除生产者门口发运后的分销、播种及商品作物生产或使用；披露任何研究特定的边界扩展。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_cultivation` | 高粱制种田栽培和收获 | required | 所表示生产周期中种植种子时始终纳入 | 前景作物生产和田间排放 | 每 kg 收获种子批次，并归一化至 1 kg 最终可销售种子 |
| `postharvest_drying` | 收获后干燥和处理 | required | 纳入实测处理；仅在无主动干燥时才可报告零干燥能耗 | 水分调整和处理 | 每 kg 干燥未清理种子，并归一化至 1 kg 最终可销售种子 |
| `seed_cleaning_conditioning` | 种子清理和调理 | required | 始终纳入 | 去除杂质、不合粒径种子和不合格组分 | 每 1 kg 调理种子输出 |
| `treatment_packaging_storage` | 种子处理、包装和储存 | conditional | 纳入生产者门口发运前实际发生的每项作业；未处理、散装或无储存情况须声明 | 最终市场状态准备 | 每 1 kg 最终可销售种子 |

### 过程：高粱制种田栽培和收获（`seed_crop_cultivation`）

#### 输入

##### 产品流

###### 亲本或基础高粱种子（`parent_seed_input`）

记录进入本作物周期的已识别播种种子批次。仅当制种用途范围及批次限定信息匹配时使用已确认的高粱种子流。

- 选定流：高粱，种子 `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测播种净种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终可销售高粱种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：可替换的暂定亲本种子 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg/kg 最终可销售种子
  - 基准：待评审作物特定证据替换的宽泛合理性筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养分和土壤改良产品（`nutrient_inputs`）

将各肥料、粪肥、堆肥、石灰、尿素和其他改良物分别记录为数据集流，同时记录产品质量和养分组成。

- 选定流：数据集特定的养分或改良产品；数据集发布前解析各自 Tiangong UUID
- 流属性/单位：Mass / kg 产品和 kg 养分
- 数量规则：与田块核对的采购、施用和养分分析记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售高粱种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：可替换的暂定养分产品 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 产品/kg 最终可销售种子
  - 基准：宽泛合理性筛查；不是默认清单值或合格限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉供水（`irrigation_water`）

当计量或供水数据集可以区分时，分别记录取水和交付灌溉水。

- 选定流：场址特定灌溉供水；按实际水源解析 Tiangong UUID
- 流属性/单位：Mass / kg water
- 数量规则：计量体积使用实测或文件化水密度换算，或采用质量表记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售高粱种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：可替换的暂定灌溉 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg water/kg 最终可销售种子
  - 基准：从雨养到灌溉情景的宽泛筛查；不是默认清单值或合格限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间能源载体（`field_energy`）

按实际地理和技术分别记录柴油、其他燃料和电力载体。

- 选定流：数据集特定燃料或电力流；不选取无地理默认流
- 流属性/单位：载体特定 / kg 燃料、MJ 或 kWh
- 数量规则：核对燃料领用、发票和计量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售高粱种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：可替换的暂定田间能源 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：MJ/kg 最终可销售种子
  - 基准：实际能源载体换算后的宽泛筛查；不是默认清单值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定默认废物投入。作为改良物输入的有机废物在 `nutrient_inputs` 中按其法律属性和养分状态记录。

##### 基本流

当土地占用、水资源取用及其他基本资源投入跨越模型边界时，使用场址特定 Tiangong 流记录。

#### 输出

##### 产品流

###### 干燥清理前收获高粱种子批次（`cultivated_seed_lot`）

将湿基收获制种批次记录为中间产品。不得仅因过程名称相似而替换为 CPC 01142 `Sorghum, other` 流。

- 选定流：未解析的制种用途中间流；单独数据集发布前需要语义完全匹配的 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：带水分和批次身份的实测收获质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每作物周期并归一化至 1 kg 最终可销售种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

##### 废物流

###### 移出田块的作物残体（`removed_crop_residues`）

仅记录离开田块边界的残体质量；留田残体作为养分和排放计算的活动数据。

- 选定流：数据集特定高粱作物残体或废物流
- 流属性/单位：Mass / kg 干物质
- 数量规则：实测移出残体质量及水分/干物质分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售高粱种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 来源：`ipcc-2019-managed-soils`

##### 基本流

###### 管理土壤直接一氧化二氮（`direct_soil_n2o`）

使用适用氮活动数据和选定 IPCC 层级或文件化高层级方法计算直接土壤 N2O。

- 选定流：一氧化二氮 `29061478-6556-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：`calc_managed_soil_n2o`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售高粱种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cultivation_records`
- 来源：`ipcc-2019-managed-soils`

### 过程：收获后干燥和处理（`postharvest_drying`）

#### 输入

##### 产品流

###### 接收的收获种子批次（`harvested_seed_input`）

保留接收时的栽培批次身份、质量和水分。

- 选定流：与 `cultivated_seed_lot` 相同的未解析制种用途中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥种子批次输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`

###### 干燥和处理能源（`drying_energy`）

分别记录电力和各燃料载体；仅在声明被动干燥路线时可将主动干燥能耗记录为零。

- 选定流：数据集特定电力或燃料流；不选取无地理默认流
- 流属性/单位：载体特定 / kWh、MJ 或 kg 燃料
- 数量规则：分配至批次的仪表、发票或燃料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干燥种子批次输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 数量范围：可替换的暂定干燥能源 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 干燥种子输出
  - 基准：从被动到主动干燥的宽泛筛查；不是默认清单值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定默认废物投入。

##### 基本流

按选定燃料数据集记录适用的直接燃烧资源投入。

#### 输出

##### 产品流

###### 干燥未清理高粱种子批次（`dried_seed_lot`）

记录干燥中间产品质量、水分、干燥路线和批次身份。

- 选定流：未解析的干燥制种用途中间流；单独数据集发布前需要语义完全匹配的 Tiangong UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测输出质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥种子批次输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`

##### 废物流

将散失和不可回收损失记录为实测废物输出。

##### 基本流

###### 干燥移除水分（`drying_water_vapour`）

按湿基水分质量平衡计算移除水分，并与实测输入输出质量核对。

- 选定流：水蒸气 `2905ed3f-6556-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：`calc_drying_water_balance`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 干燥种子批次输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_records`
- 来源：`mass-balance-identity`

### 过程：种子清理和调理（`seed_cleaning_conditioning`）

#### 输入

##### 产品流

###### 接收调理的干燥种子批次（`dried_seed_input`）

记录关联干燥批次并保留质量、水分和批次身份。

- 选定流：与 `dried_seed_lot` 相同的未解析制种用途中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调理种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`

###### 调理用电（`conditioning_electricity`）

使用地理和电压匹配的供电流记录计量或批次分配电力。

- 选定流：数据集特定电力流；不选取无地理默认流
- 流属性/单位：Energy / kWh
- 数量规则：计量或批次分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调理种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`

##### 废物流

不规定默认废物投入。

##### 基本流

不规定默认基本流投入。

#### 输出

##### 产品流

###### 调理后高粱种子（`conditioned_seed_output`）

仅在批次达到所声明市场和质量状态后使用目标流；保留实际检测结果，不得从流名称推断质量。

- 选定流：高粱，种子 `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测调理后净种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调理种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-qds-2006`; `oecd-seed-schemes-2026`

##### 废物流

###### 清理筛下物和杂质（`cleaning_rejects`）

当去向不同时，分别测量不合粒径种子、破碎种子、杂质和粉尘；可销售转用途物料应归为共产品而非废物。

- 选定流：按实际去向选择数据集特定筛下物、残余物或共产品流
- 流属性/单位：Mass / kg
- 数量规则：按出口和去向实测筛下组分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 调理种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 数量范围：可替换的暂定清理筛下物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 筛下物/kg 干燥种子投入
  - 基准：宽泛合理性筛查；不是默认产率或合格限值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

在实测或建模时分别记录捕集和未捕集颗粒物排放。

### 过程：种子处理、包装和储存（`treatment_packaging_storage`）

#### 输入

##### 产品流

###### 接收的调理种子（`conditioned_seed_input`）

保留调理批次身份及质量检测关联。

- 选定流：高粱，种子 `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终可销售种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_lot_records`

###### 种子处理和包装材料（`treatment_packaging_inputs`）

实际使用时，分别记录各有效成分、配方处理剂、包衣剂、着色剂、接种剂、袋、内衬、托盘和其他包装材料。

- 选定流：数据集特定处理和包装产品流；解析各自 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：批次配方、采购和包装领用记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终可销售种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_lot_records`
- 数量范围：可替换的暂定包装 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 包装/kg 最终可销售种子
  - 基准：从散装到小包装的宽泛筛查；不是默认清单值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存和包装能源（`storage_energy`）

按所声明储存时长和条件记录计量或按面积/时间分配的电力和燃料。

- 选定流：数据集特定电力或燃料流
- 流属性/单位：载体特定 / kWh、MJ 或 kg 燃料
- 数量规则：计量或文件化分配至种子批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售种子及声明的储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_lot_records`

##### 废物流

不规定默认废物投入。

##### 基本流

仅在处理或熏蒸排放跨越环境边界且有适用方法支持时记录直接排放。

#### 输出

##### 产品流

###### 最终可销售高粱种子（`final_sorghum_seed`）

这是参考产品。报告 1 kg 净种子质量和全部必需限定信息；包装质量单独记录。

- 选定流：高粱，种子 `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1 kg 可销售净种子
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 处理和包装损失（`final_lot_wastes`）

按去向分别记录未用处理混合物、散失、废包装和受损种子。

- 选定流：按实际物料和处理路线选择数据集特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物日志和质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终可销售种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_lot_records`

##### 基本流

不规定默认基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有多功能作业 | 首先通过过程细分以及种子、残体、筛下物和处理/包装作业的直接计量避免分配。 | `eu-pef-2021` |
| `allocation_residues` | 留田作物残体 | 不给留田残体分配单独产品负荷；将其养分返还和相关田间排放计入制种系统。 | `ipcc-2019-managed-soils` |
| `allocation_saleable_coproducts` | 有经济用途的移出残体或清理筛下物 | 有文件化替代功能时采用系统扩展；否则采用有依据的物理因果关系，仅在无合理物理关系时采用经济分配。记录质量、水分、价格、时期、地理和分配份额。 | `eu-pef-2021` |
| `allocation_wastes` | 法律和物理上作为废物处理的物料 | 直至文件化废物边界由种子系统承担处理负荷；没有有依据的替代情景时不得计入避免产品抵扣。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_records` | `seed_crop_cultivation` | 种子、养分、水、能源、产量、残体、排放活动 | 田间和批次记录 | field_id; lot_id; area; dates; seed_mass; fertiliser_product_mass; nutrient_N_P_K; amendment_mass; crop_protection_product_and_active; irrigation; fuel; electricity; harvested_mass; moisture; residue_mass_and_fate | 经校准仪表/秤、发票、施用日志、田间日志和实验室分析 | 原始单位及 kg、kg 养分、kWh、MJ、ha | 每次施用和收获事件 | 完整代表性作物周期 | 各纳入田块/场址 | 核对采购、施用、库存和收获批次；仅在最终可销售输出已知后归一化 | 校准、发票、批次、施用、取样和批次链记录 |
| `cp_postharvest_records` | `postharvest_drying` | 接收种子、能源、干燥种子、移除水分、损失 | 批次记录 | lot_id; input_mass; input_moisture; output_mass; output_moisture; drying_route; electricity; fuel; losses; timestamps | 经校准秤和水分仪、能源仪表、燃料记录 | kg、水分分数、kWh、MJ、kg 燃料 | 每批次 | 全部代表性批次 | 各干燥/处理场址 | 批次质量和干物质平衡；按输出质量汇总 | 校准、仪表、水分检测和批次记录 |
| `cp_conditioning_records` | `seed_cleaning_conditioning` | 投入、电力、可销售种子、筛下物 | 调理批次和质量记录 | lot_id; input_mass; output_mass; reject_mass_by_fate; electricity; germination; analytical_purity; varietal_purity; moisture; test_method; test_date | 秤、仪表、清理日志、代表性实验室样品 | kg、kWh、百分比或分数 | 每批次/批次号 | 全部代表性批次 | 各调理线/场址 | 按批次核对质量；按调理输出质量汇总 | 校准、批次、取样、实验室报告和批次链记录 |
| `cp_final_lot_records` | `treatment_packaging_storage` | 处理、包装、能源、最终产品、废物 | 配方、包装、储存和发运记录 | lot_id; active_substance; formulation_mass; coating_mass; packaging_material_mass; electricity; fuel; storage_duration; temperature_humidity; final_net_mass; waste_mass_and_fate | 批次单、领用记录、仪表、秤、储存日志、发运记录 | kg、kWh、MJ、day | 每批次和储存期 | 从调理到生产者门口发运 | 各处理、包装和储存场址 | 按发运净种子质量和声明储存时长汇总 | 批次签核、校准、库存核对、标签和发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_inventory_normalization` | 所有前景行 | 将归属于代表性批次的核对后数量除以最终可销售净种子质量；最终归一化前保留过程特定中间基准。 | 采集数量；批次关联；最终净种子质量 | 每 1 kg 参考流数量 | `mass-balance-identity` |
| `calc_drying_water_balance` | `drying_water_vapour` | 干物质 = 湿质量 ×（1 − 湿基水分分数）；移除水分 = 投入水质量 − 输出水质量。调查无法解释的不平衡，不得强制闭合。 | 投入/输出质量和水分 | kg 移除水分及质量平衡差异 | `mass-balance-identity` |
| `calc_managed_soil_n2o` | 田间直接和间接 N2O | 对合成氮、有机氮、作物残体、挥发以及淋失/径流采用适用的 IPCC 2019 第 11 章 Tier 1、Tier 2 或文件化高层级公式；一致地将 N2O-N 转为 N2O 并防止重复计算。 | 各来源 kg N；残体 N；适用因子；气候/土壤/管理情境 | 每参考流 kg 直接和间接 N2O | `ipcc-2019-managed-soils` |
| `calc_coproduct_allocation` | 可销售残体和筛下物 | 执行所声明层级，并按记录的物理关系或同期经济价值计算份额；所有被分配输出的份额合计必须为 1。 | 输出数量、水分、功能、价格、分配选择 | 每输出的已分配清单 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 种子投入、中间产品和输出 | 保留田块、收获、调理、处理、包装和发运批次关联，以及物种、品种、杂交状态和种子类别。 | 批次台账、标签、证书和追溯记录；`fao-qds-2006`; `oecd-seed-schemes-2026` |
| `dq_temporal_geographic` | 所有前景数据 | 覆盖完整声明作物周期和全部代表性收获后批次；报告场址地理、作物年份、技术、灌溉和储存时长。 | 田间和批次总体完整性核对；`eu-pef-2021` |
| `dq_measurement` | 质量、水分、能源、水和质量检测 | 使用经校准设备和代表性取样；保留方法、日期、实验室、不确定性或分辨率和缺失数据处理。 | 校准证书、取样计划、实验室报告和仪表记录 |
| `dq_emission_factors` | 计算的田间排放 | 记录方法层级、公式、因子数值和单位、因子地理/气候/土壤适用性及全部活动数据。 | 可复算计算及 `ipcc-2019-managed-soils` |
| `dq_reasoned_estimates` | 暂定 QA 范围 | 所有 `reasoned_estimate` 范围仅作为可替换筛查标记，不得填充最终清单或作为合格阈值。 | 发布前 QA 标记报告以及实测或经评审证据替换记录 |
| `dq_representativeness` | 发布数据集 | 评价完整性、方法一致性、技术、地理和时间代表性以及精度。 | 数据质量评价和局限性声明；`eu-pef-2021` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求数量 1 kg、Sorghum, seed UUID `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及单位 kg。 |  |
| `validation_product_scope` | 产品身份 | 拒绝默认用于 CPC 01142 高粱籽粒、甜高粱或无法证明专门为制种而种植的批次。 | `unsd-cpc3-2025` |
| `validation_qualifiers` | 参考产品 | 缺失任何必需限定信息，或认证/QDS/质量声明缺少批次特定证据时，完整性校验失败。 | `fao-qds-2006`; `oecd-seed-schemes-2026` |
| `validation_process_coverage` | 前景过程图 | 要求全部 required 过程和每个被触发的 conditional 过程，并核对相邻批次阶段之间的转移。 |  |
| `validation_mass_moisture_balance` | 从栽培到最终批次 | 按所声明水分基准核对投入、输出、筛下物、残体、损失和移除水分；披露实测差异，不得强制闭合。 | `mass-balance-identity` |
| `validation_n2o_method` | 管理土壤排放 | 要求文件化 N 活动数据、选定 IPCC 层级/公式/因子、单位换算，以及不重复计算的直接/间接路径。 | `ipcc-2019-managed-soils` |
| `validation_allocation` | 多功能输出 | 要求分配层级、数据和理由；所有分配份额必须非负且合计为 1。 | `eu-pef-2021` |
| `validation_reasoned_estimates` | 清单和 QA | 若将推理估算 QA 范围用作最终清单值、默认值或合格阈值，则发布就绪校验失败。 |  |
| `validation_data_quality` | 发布数据集 | 要求完整性和方法一致性，以及技术、地理、时间和精度披露。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 高粱种子生产的前景数据包，并投影为 LCA `process` 数据集及连接的 `lifecyclemodel` 系统 |
| allowed_use | 在所声明地理、作物年份、路线、种子类别、处理、包装、储存、分配和质量状态内建模高粱种子生产 |
| excluded_use | 高粱籽粒或甜高粱；下游商品作物种植；无证据的种子认证声明；无地理替换；将暂定 QA 范围用作清单默认值或合规阈值 |
| required_metadata | PCR id；CPC ref；参考 UUID；地理；作物年份；场址和技术；批次和种子类别；品种/杂交状态；质量检测；水分基准；处理；包装；储存；过程覆盖；分配；来源；数据质量评价；局限性 |
| required_quality_disclosure | 覆盖和缺失数据；测量和取样方法；代表性；因子层级；未解析 UUID；排除项；共产品处理；不确定性；任何剩余推理估算 QA 筛查范围 |
| update_trigger | 品种/种子类别、地理、作物年份或路线改变；重大技术/投入改变；新的种子质量或监管要求；排放因子修订；分配改变；来源修订；或证据表明 QA 筛查范围不再适用 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-07） | CPC 01141 制种用途纳入和排除范围 |
| `fao-qds-2006` | official_guidance | FAO, *Quality Declared Seed System*, Plant Production and Protection Paper 185, 2006, https://www.fao.org/4/a0503e/a0503e00.pdf（检索于 2026-08-07） | 高粱种子身份、田间/批次控制、取样、发芽率、纯度、水分和质量记录要求 |
| `oecd-seed-schemes-2026` | standard | OECD, *Seed Schemes Rules and Regulations 2026*, https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/rules-and-regulation-eng.pdf（检索于 2026-08-07） | 品种认证体系、批次身份、对照小区、田间检验和标签披露 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf（检索于 2026-08-07） | 直接和间接 N2O 路径、活动数据、公式和因子来源 |
| `eu-pef-2021` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-07） | 功能单位框架、边界完整性、分配层级、企业特定数据和数据质量维度 |
| `mass-balance-identity` | method_factor | 使用实测质量和水分分数的质量及干物质守恒；PCR 编写的物理恒等式 | 批次归一化、干燥移除水分计算和质量平衡校验 |

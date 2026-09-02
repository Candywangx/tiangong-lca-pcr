---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水稻种子

## 1. 范围与适用性

本 PCR 适用于播种用水稻种子的前景数据包，覆盖已声明亲本种子的繁殖、田间生产、收获、干燥、清选分级、种子批检验与放行、可选种子处理、包装，以及生产者或种子加工方发运门前的储存。具体数据包应识别生产地理、作物年份、品种或杂交类型、种子世代或级别、认证或质量保证体系、处理状态、包装状态和放行准则。

用于食用、饲用、碾米、酿造或其他非播种用途的稻谷不在范围内。大米、米糠、作为独立产品销售的稻壳、秧苗和移栽苗，以及主要用于保存的种质库材料不在范围内。种子离开发运门后的下游商品稻种植不属于前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed |
| classification_refs | CPC 3.0:01131（Rice, seed） |
| covered_products | 用于播种的稻属种子；包括杂交和非杂交种子批，以及作为播种种子出售或转移的已声明育种家种、原种、登记种、认证种或等效级别 |
| excluded_products | 未作为播种用种放行的稻谷；大米及碾米产品；秧苗和移栽苗；仅用于保存的种质库材料 |
| representative_product | 经质量保证、干燥、清选、分级、种子批检验并放行用于播种的水稻种子 |
| production_route | 亲本种子接收和身份控制；制种作物建植与田间管理；收获；干燥；清选分级；可选处理；种子批检验、包装和储存至发运 |
| market_state | 在生产者或种子加工方发运门处可销售或转移的种子批；按声明为散装或包装、未处理或已处理 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产者或种子加工方发运门处放行用于播种的水稻种子 |
| How much | 1,000 kg 净种子产品 |
| How well | 种子批符合其适用的已声明司法辖区、认证或质量保证体系，以及抽样方法、分析纯度、品种真实性或纯度、发芽率、水分、种子健康和处理要求 |
| How long or cycle | 一个已声明的种子繁殖、调制、放行及纳入储存的生产周期 |
| reference_flow_link | rf_rice_seed_at_dispatch |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理；作物年份和季节；稻属物种及品种或杂交类型；种子世代或级别；认证或质量保证体系；种子批标识；抽样和检验方法；分析纯度；品种真实性或纯度；发芽率；水分含量及基准；需要时的种子健康状态；处理活性成分和施加量或未处理声明；包装状态；发运门及纳入的储存时长 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任何必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告已放行水稻种子的净质量，不含包装质量；清单量归一化至 1,000 kg 已放行种子。 |
| `moisture_declaration` | 收获、调制和放行种子质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测水分的接收状态记录质量，并按已声明检验基准报告水分；不得无说明地折算为干物质。需要干物质比较时，应保留原质量和水分并声明公式。 |
| `mass_unit_conversion` | 以 g 或 t 提供的质量记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用已确认的质量单位组：1 t = 1,000 kg，1 g = 0.001 kg；原始记录保留源单位。 |
| `seed_count_conversion` | 从粒数换算种子质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只能采用该批次或品种实测的千粒重进行换算，并保留样品结果、水分和计算。 |
| `nutrient_and_active_ingredient_basis` | 肥料、植保或种子处理产品 | 已声明产品质量和成分质量 | kg | 分别记录制剂产品质量和计算得到的养分或活性成分质量；不得以 kg 产品代替 kg N、P、K 或活性成分。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | foreground_system_boundary | 纳入亲本种子接收和身份控制、制种作物建植和田间管理、田间直接排放、收获和田间处理、接收、干燥、清选分级、种子批抽样检验、实际采用时的处理、包装，以及至已声明发运门的储存。 | `fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018` |
| `boundary_upstream_inputs` | upstream_technosphere | 通过地理和技术适宜的数据集纳入亲本种子、肥料、土壤改良剂、植保产品、燃料、电力、灌溉供水、干燥能源、处理产品和包装的上游生产与交付。 | `eu-pef-2021` |
| `boundary_direct_field_emissions` | rice_field_emissions | 对淹水或其他甲烷相关生产，使用实测排放或已声明的现行且地理适宜的方法核算稻田 CH4；对土壤氮投入核算管理土壤直接和适用的间接 N2O。记录全部活动数据和因子，避免重复报告基本流。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils` |
| `boundary_land_and_carbon_change` | land_use_and_soil_carbon | 当代表性场址和研究目标适用时纳入土地利用变化、泥炭地或有机土壤排水及土壤碳变化；否则披露筛查依据和排除。 | `ipcc-2019-cropland` |
| `boundary_excluded_downstream` | excluded_downstream | 排除发运门后的运输、下游播种和商品稻种植、所收获商品作物的用途及下游产品的生命末期。资本品和育种研发默认排除，除非研究目标、适用项目规则或重要性评估要求纳入。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入繁殖周期的亲本水稻种子；声明供应方、品种或亲本系、种子世代或级别、处理状态、批次身份、质量、水分和质量状态 |
| starting_condition_role | 上游技术系统投入和种子谱系锚点 |
| product_classification_scope | CPC 3.0:01131 下用于播种的水稻种子，不依赖本地认证术语 |
| recursive_input_rule | 同类别亲本种子应以其实际世代或级别作为独立上游投入记录；不得让当前数据包为自身供给，也不得把相同参考输出递归为无界自循环。 |
| upstream_dataset_requirement | 链接地理、世代、处理和质量范围相容且独立表示的亲本种子数据集；如无可用数据，应披露数据缺口、代理和截断影响，不得赋予零负荷。 |
| disclosure | 声明亲本种子世代或级别、供应方和地理、播种量、处理、任何代理数据集、排除的世代，以及采用杂交亲本系还是非杂交种子。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | 水稻制种作物生产与收获 | `required` | 始终 | 前景繁殖、田间管理、收获和农业直接排放 | 与已放行批次关联的实测收获种子作物质量和种植面积 |
| `seed_conditioning` | 种子接收、干燥、清选和分级 | `required` | 始终 | 前景调制，并将可销售种子与降级物料和废物分离 | 离开清选分级的实测调制种子质量 |
| `lot_release_packaging_storage` | 种子批放行、可选处理、包装和储存 | `required` | 始终；未处理、散装和零储存路线应保留明确零值或不适用记录 | 前景检验、放行、最终准备和发运 | 发运门处 1,000 kg 净已放行水稻种子 |

### 过程：水稻制种作物生产与收获（`seed_crop_production`）

#### 输入

##### 产品流

###### 繁殖用亲本水稻种子（`parent_rice_seed`）

亲本种子作为已声明世代或级别的受控生物投入跨越前景边界。

- 选定流：水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- 流属性/单位：Mass / kg
- 数量规则：分配给代表性田块和放行批次的实测亲本种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`oecd-seed-schemes-2026`
- 数量范围：暂定亲本种子筛查估计，应由批次记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 肥料和土壤改良剂（`fertilizer_products`）

分别记录每种制剂肥料和改良剂并保留成分，使养分投入和管理土壤排放计算不混淆产品质量与养分质量。

- 选定流：在数据包实施时选择地理和配方特定的肥料或土壤改良剂产品流
- 流属性/单位：Mass / kg 产品；成分质量 / kg N、P、K 或其他已声明成分
- 数量规则：与田块和批次核对的实测采购或施用记录；按 `calc_nutrient_mass` 计算养分含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：宽泛暂定制剂产品筛查估计，应由区域证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg 制剂产品
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植物保护产品（`crop_protection_products`）

记录施用于代表性制种作物的每种除草剂、杀虫剂、杀菌剂、杀螺剂、生物防治剂或其他植保产品。

- 选定流：在数据包实施时选择产品特定的植保产品流
- 流属性/单位：Mass / kg 制剂产品和 kg 活性成分
- 数量规则：实测施用记录，并依据制剂浓度计算活性成分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：
- 数量范围：宽泛暂定制剂产品筛查估计，应由区域证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 制剂产品
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`irrigation_water`）

交付灌溉水只记录一次；区分取水、输送损失和购入水，防止基本流与产品流重复计算。

- 选定流：在数据包实施时选择地理和水源特定的灌溉供水流
- 流属性/单位：Volume / m3
- 数量规则：代表性作物和批次的计量供水、泵送记录或田间水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：
- 数量范围：宽泛暂定灌溉筛查估计，应由水分管理证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：m3
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间燃料（`field_fuels`）

按燃料种类记录整地、移栽或直播、田间管理、泵送、收获和田间处理所用且跨越前景边界的燃料。

- 选定流：为已声明地理和供应路线选择燃料特定产品流
- 流属性/单位：Mass / kg 或 Energy / MJ，并保留原采购单位
- 数量规则：与代表性田块和批次核对的实测燃料领用、发票或设备日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：
- 数量范围：宽泛暂定燃料筛查估计，应由区域设备证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg 燃料
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间电力（`field_electricity`）

按具有地理和时间代表性的供应组合记录泵送及其他田间作业电力。

- 选定流：为已声明地理和电压等级选择电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：实测电表、发票或设备功率乘运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：
- 数量范围：宽泛暂定田间电力筛查估计，应由泵送记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 进入调制的收获水稻种子作物（`harvested_seed_crop`）

记录最终干燥、清选和分级前分配给代表性批次的收获含种稻谷，并声明水分和杂质。

- 选定流：收获水稻种子作物，批次特定中间流
- 流属性/单位：Mass / kg
- 数量规则：与已放行批次关联的实测接收或收获质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_outputs`
- 来源：`fao-seeds-toolkit-processing-2018`
- 数量范围：宽泛暂定质量平衡筛查估计，应由批次产量记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：3000
  - 单位：kg 收获种子作物
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 稻草和其他田间共产品（`field_coproducts`）

分别记录每种收获或上市的田间共产品；留在或返回田间的物料是内部管理残余物，除非跨越过程边界，否则不是产品输出。

- 选定流：在数据包实施时选择共产品特定流
- 流属性/单位：Mass / kg
- 数量规则：实测或计算的干基或接收状态质量，并声明水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_outputs`
- 来源：
- 数量范围：宽泛暂定共产品筛查估计，应由田间记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg 共产品
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 水稻种植甲烷排放（`field_ch4`）

依据种植面积、种植期、种植期和种植前水分管理、有机改良剂及所选排放因子方法，计算甲烷相关水稻生产的 CH4。

- 选定流：在数据包实施时选择适用空气区室的 Methane
- 流属性/单位：Mass / kg CH4
- 数量规则：`calc_rice_field_ch4`；代表性实测场址排放优先，否则采用已声明 IPCC Tier 1 或更高阶方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-cropland`

###### 管理土壤氧化亚氮排放（`field_n2o`）

计算合成和有机氮、作物残体、矿化、挥发及淋溶或径流导致的直接和适用间接 N2O，不重复计算肥料上游生产。

- 选定流：在数据包实施时选择适用空气区室的 Dinitrogen monoxide
- 流属性/单位：Mass / kg N2O
- 数量规则：`calc_managed_soil_n2o`；代表性实测场址排放优先，否则采用已声明 IPCC Tier 1 或更高阶方法，并在需要时将 N2O-N 换算为 N2O
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`

### 过程：种子接收、干燥、清选和分级（`seed_conditioning`）

#### 输入

##### 产品流

###### 接收的收获水稻种子作物（`received_seed_crop`）

在干燥和分离前接收并识别收获批次，保留与田块、作物年份、品种和世代的关联。

- 选定流：收获水稻种子作物，批次特定中间流
- 流属性/单位：Mass / kg
- 数量规则：带水分和杂质比例的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seeds-toolkit-processing-2018`

###### 调制电力（`conditioning_electricity`）

记录输送、风机、干燥、清选、分级、除尘和辅助设备电力。

- 选定流：为设施地理和电压选择电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：代表性批次的分表计量或分配设施电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seeds-toolkit-processing-2018`
- 数量范围：宽泛暂定调制电力筛查估计，应由设施记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥燃料或热量（`drying_energy`）

分别记录降低种子水分所用燃料或外购热量，保留燃料类型和燃烧地点。

- 选定流：在数据包实施时选择燃料或热量特定产品流
- 流属性/单位：Energy / MJ 或燃料质量 / kg
- 数量规则：分配给代表性批次的实测燃料或热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seeds-toolkit-processing-2018`
- 数量范围：宽泛暂定干燥能源筛查估计，应由干燥机记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：MJ
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调制后的水稻种子候选批（`conditioned_seed`）

记录等待或通过批次放行的清洁分级种子，并将水分、纯度、发芽率和品种状态关联到批次。

- 选定流：水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- 流属性/单位：Mass / kg
- 数量规则：与种子批放行记录关联的实测调制种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seeds-toolkit-quality-2018`; `irri-rice-seed-quality`

###### 降级种子或粮食共产品（`downgraded_seed_product`）

只有在物料出售或转移至有文件证明的有益用途且满足接收市场规范时，才作为产品记录。

- 选定流：目的地特定的降级粮食或其他共产品流
- 流属性/单位：Mass / kg
- 数量规则：按处置类别实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：宽泛暂定降级产品筛查估计，应由批次质量平衡替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 需处理的清选废物（`conditioning_waste`）

无有益产品去向记录时，将惰性物、病害或破损种子、作为废物收集的粉尘和其他剔除物按废物记录。

- 选定流：在数据包实施时选择目的地和处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物处理路线实测剔除物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seeds-toolkit-processing-2018`
- 数量范围：宽泛暂定调制废物筛查估计，应由批次质量平衡替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：种子批放行、可选处理、包装和储存（`lot_release_packaging_storage`）

#### 输入

##### 产品流

###### 进入放行的调制水稻种子（`conditioned_seed_input`）

记录进入抽样、检验、适用时处理、包装和纳入储存的调制批次。

- 选定流：水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- 流属性/单位：Mass / kg
- 数量规则：从调制过程转入的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_storage`
- 来源：`ista-rules-seed-testing-2026`; `oecd-seed-schemes-2026`

###### 种子处理产品（`seed_treatment_product`）

仅在放行批次经过处理时纳入，并记录制剂产品、活性成分、施加量、施用损失和处理种子质量。

- 选定流：在数据包实施时选择产品特定种子处理流
- 流属性/单位：Mass / kg 制剂产品和 kg 活性成分
- 数量规则：实测批次领用和残余核对；未施用时记录零值及未处理声明
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_storage`
- 来源：`fao-seeds-toolkit-processing-2018`
- 数量范围：宽泛暂定处理产品筛查估计，应由产品标签和批次记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 制剂产品
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

记录发运门前纳入的各类袋、内衬、标签、托盘、缠绕膜或散装容器份额；无包装越过边界时以零值和明确散装声明表示。

- 选定流：材料和地理特定包装产品流
- 流属性/单位：Mass / kg
- 数量规则：每个放行批次实测包装领用量并计入损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_storage`
- 来源：`fao-seeds-toolkit-processing-2018`
- 数量范围：宽泛暂定包装筛查估计，应由物料清单记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 包装
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 放行和储存电力（`release_storage_electricity`）

记录检验区辅助、处理、包装、通风、湿度控制及发运前纳入储存的电力。

- 选定流：为设施地理和电压选择电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：在已声明纳入储存时长内计量或分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_storage`
- 来源：
- 数量范围：宽泛暂定放行和储存电力筛查估计，应由设施记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 已放行水稻种子及已声明储存时长
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运门处已放行水稻种子（`released_rice_seed`）

本行为参考输出，即通过已声明种子批放行规则、在发运门处可用于播种的种子净质量。

- 选定流：水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_reference_normalization` 归一化的实测放行净种子质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_release_packaging_storage`
- 来源：`fao-qds-2006`; `ista-rules-seed-testing-2026`; `oecd-seed-schemes-2026`

##### 废物流

###### 处理和包装废物（`release_packaging_waste`）

按实际处理路线记录未用处理产品、受污染包装、破损袋、清扫物和检验残余物。

- 选定流：在数据包实施时选择目的地和处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量和处置记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行水稻种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_packaging_storage`
- 来源：
- 数量范围：宽泛暂定放行废物筛查估计，应由设施记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 已放行水稻种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all_multifunctional_processes | 首先通过收集批次和作业特定数据，并细分田间、干燥、清选、处理、包装和储存作业来避免分配。只有附加功能和被替代产品得到明确论证时才采用系统扩展。 | `eu-pef-2021` |
| `allocation_physical_causality` | field_and_conditioning_coproducts | 无法细分或采用有充分依据的系统扩展时，只按能够反映投入或作业如何形成已放行种子及各共产品的、有文件证明的物理因果关系分配；不得仅因质量数据可得而选择质量分配。 | `eu-pef-2021` |
| `allocation_economic_fallback` | field_and_conditioning_coproducts | 不存在可辩护物理因果关系时，按分离点有文件证明且具代表性的价格进行经济分配；记录价格基准、币种、时期、地理、水分和质量状态，以及价格变化敏感性。 | `eu-pef-2021` |
| `allocation_waste_and_downgraded_material` | rejects_and_residues | 仅当有文件证明的有益去向和市场规范时，才把剔除物归为共产品；否则按废物处理并纳入处理负荷。没有明确论证的替代模型时不得给予避免产品信用。 | `eu-pef-2021`; `fao-seeds-toolkit-processing-2018` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `seed_crop_production` | 亲本种子、肥料、改良剂、植保、灌溉、燃料、电力 | 田间台账、供应方文件、发票、仪表和设备日志 | field_id; lot_id; area; dates; parent_seed_mass; parent_seed_class; product_name; formulation; nutrient_or_active_fraction; applied_mass; irrigation_volume; fuel_type_and_amount; electricity; allocation_key | 将源文件和田间日志核对至代表性田块及放行批次；保留原单位和缺失数据标志 | 原始记录单位及受控换算后的 kg、m3、MJ、kWh | 每次施用或作业；按田块和作物周期汇总 | 完整的代表性繁殖作物周期 | 对放行批次有贡献的全部田块 | 汇总可归属记录；共享作业仅按第 7 节批准规则分配；已知放行质量后归一化 | 供应方标签或证书、仪表校准证据、发票或领用记录、操作日志和核对签字 |
| `cp_crop_outputs` | `seed_crop_production` | 收获种子作物、稻草和田间共产品 | 收获单、秤重记录、水分检验、田块图和处置记录 | field_id; lot_id; harvested_mass; moisture; impurity_fraction; straw_mass; residue_management; co_product_mass; destination | 将经校准秤重和水分结果关联到各贡献田块和批次 | kg、百分比水分、ha | 每个收获载荷和最终田块核对 | 代表性作物周期的收获期 | 全部贡献田块 | 按批次汇总载荷；保留水分基准；核对产品、残余物和损失 | 秤校准、签字单据、水分方法、田块—批次谱系和处置证据 |
| `cp_field_emission_activity` | `seed_crop_production` | CH4 和 N2O 活动数据 | 田间台账、水分管理日志、改良剂和养分记录、土壤或排放测量 | area; cultivation_days; ecosystem; water_regime_during; pre_season_water_regime; organic_amendment_type_rate_and_timing; soil_type; cultivar; synthetic_N; organic_N; residue_N; mineralized_N; volatilization_and_leaching_context; method_and_factor_ids | 按最细的代表性田块或管理制度收集活动数据；仅在抽样具有代表性时采用实测排放 | ha、day、kg 改良剂、kg N 和方法特定单位 | 每个管理事件和作物周期 | 完整种植期及方法要求的种植前时期 | 对批次有贡献的各田块和水分管理制度 | 按田块或制度分别计算，再汇总并按放行质量归一化 | 完整活动数据表、方法版本、因子来源和层级、单位、换算检查及审核签字 |
| `cp_conditioning_records` | `seed_conditioning` | 接收、干燥、清选、分级、能源、调制产品、共产品和废物 | 批次台账、秤重、水分检验、仪表、燃料领用、设备日志和处置记录 | lot_id; input_mass_and_moisture; drying_method; electricity; fuel_or_heat; output_mass_and_moisture; clean_seed_mass; downgrade_mass; waste_mass; destinations; runtime | 对每批次的接收、干燥、清选和分级进行核对；可用时采用分表计量 | kg、百分比水分、kWh、MJ、hour | 每个批次和作业 | 数据集代表的完整调制期 | 处理该批次的全部调制场址 | 按批次做质量和能源平衡；共享公用工程仅按第 7 节批准规则分配 | 秤和仪表校准、水分检验、设备日志、批次谱系和签字处置记录 |
| `cp_release_packaging_storage` | `lot_release_packaging_storage` | 抽样、质量检验、处理、包装、储存、放行质量和废物 | 抽样记录、实验室证书、处理批次、包装领用、库存台账、仪表和发运单 | lot_id; sampling_method; laboratory; test_dates; purity; varietal_identity_or_purity; germination; moisture; seed_health; treatment_product_and_active; treatment_loading; package_material_and_mass; storage_dates_conditions_and_energy; released_mass; waste | 采用已声明国家、认证或兼容 ISTA 的批次抽样和检验程序；核对批次和发运记录 | kg、percent、kWh、day 和检验特定单位 | 每个批次；储存能源按仪表或账单间隔 | 从调制批次接收到发运 | 代表性批次的每个放行、包装和储存场址 | 参考输出只计入通过放行的质量；所有可归属记录归一化至 1,000 kg | 授权抽样员或实验室证据、检验证书、处理和包装核对、储存日志及发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | normalized_amount = attributable_amount / released_net_seed_mass * 1000 kg | attributable_amount; released_net_seed_mass | 每 1,000 kg 已放行水稻种子的清单量 |  |
| `calc_nutrient_mass` | 肥料和改良剂记录 | constituent_mass = formulated_product_mass * declared_constituent_mass_fraction；明确保留 N、P、P2O5、K 或 K2O 等养分约定，仅使用已声明化学计量因子换算 | product_mass; formulation_or_certificate; constituent_fraction; nutrient_convention | 各已声明成分的 kg 及制剂产品 kg | `ipcc-2019-managed-soils` |
| `calc_moisture_conversion` | 可选干物质比较 | dry_mass = as_received_mass * (1 - moisture_fraction_wet_basis)；保留接收状态质量，不替代参考流 | as_received_mass; moisture_fraction; moisture_basis | 诊断用干质量及保留的原始值 | `irri-rice-seed-quality` |
| `calc_rice_field_ch4` | 甲烷相关稻田 | 对每个同质田块或制度，CH4 = adjusted_daily_emission_factor * cultivation_period * annual_harvested_area；由已声明基准因子及适用的种植期水分管理、种植前水分管理、有机改良剂和更高阶土壤或品种缩放因子确定调整因子，再汇总田块并按放行种子归一化 | area; cultivation_days; water_regimes; organic_amendments; soil; cultivar; selected_factor_set | 每 1,000 kg 已放行水稻种子的 kg CH4 | `ipcc-2019-cropland` |
| `calc_managed_soil_n2o` | 管理土壤氮投入 | 对合成和有机氮、残体、矿化、挥发及淋溶或径流导致的直接和适用间接 N2O-N 应用所选 IPCC 方程；用 44/28 将 N2O-N 换算为 N2O，并按放行种子归一化 | N inputs by source; residue and mineralization N; volatilization and leaching fractions; selected emission factors | 每 1,000 kg 已放行水稻种子的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_allocation` | 共享多功能作业 | 应用第 7 节层级；记录分配前总量、所选关系、因子分子分母、分配后总量及归一核对 | shared inputs_and_outputs; co_product_quantities_or_values; approved_basis | 各产品的分配因子和已分配清单 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_genealogy` | 亲本种子、田块、调制和放行批次 | 保持亲本种子批、品种或亲本系、田块、收获载荷、调制批次、质量检验样品、包装或散装批次和发运之间的连续关联。 | 批次谱系、标签、田间检验和核对记录 |
| `dq_measurement` | 质量、水分、水、能源和检验结果 | 使用适于已声明方法且经校准或核验的仪器；保留原始读数、单位、校准状态和修正。 | 校准证书、核查标准、实验室认可或授权及原始结果 |
| `dq_seed_quality` | 已放行产品 | 报告实际适用的放行阈值和结果。FAO QDS、OECD 或 ISTA 资料可支持已声明路线，但不得覆盖更严格或产品特定的国家规则；不得混淆杂交与非杂交要求。 | 适用规则或体系、抽样记录、检验证书和放行决定 |
| `dq_temporal_representativeness` | 前景清单 | 覆盖完整作物周期及发运前纳入的全部调制和储存；只有记录生产加权和变异性时才能合并季节或年份。 | 按田块、批次、作业、月份和作物年份的覆盖矩阵 |
| `dq_completeness` | 重要投入、输出、排放和废物 | 核对质量和能源记录并披露所有估算、缺失、截断、代理和零值；零值表示已核实不存在，不表示缺失数据。 | 质量和能源平衡、缺失数据登记、截断评估及审核签字 |
| `dq_geographic_technology_match` | 背景链接和因子 | 选择与生产地理、电力供应、灌溉和水分管理、燃料、肥料路线、调制技术及废物处理相符的背景数据集和排放因子。 | 数据集选择记录和方法因子记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_flow | 要求产品流 UUID `14c42414-b19b-47c4-863f-1b86b50ff6bf`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及归一化后恰为 1,000 kg 净已放行种子。UUID 不得带数据集版本。 |  |
| `validation_required_qualifiers` | reference_flow_and_metadata | 缺失任何必需限定信息，或杂交/非杂交路线、种子级别、处理、包装、水分基准或发运门含糊时失败。 | `fao-qds-2006`; `oecd-seed-schemes-2026` |
| `validation_process_coverage` | process_inventory | 要求过程图中三个过程条目及田块—批次—发运谱系。条件活动应由实测值、明确零值或不适用状态、或有文件证明的排除表示。 | `fao-seeds-toolkit-processing-2018`; `fao-seeds-toolkit-quality-2018` |
| `validation_mass_balance` | crop_conditioning_and_release | 要求在收获投入、调制种子、放行种子、共产品、废物、样品、水分变化和记录损失之间做批次质量核对；调查无法解释的差额，不得强制闭合。 | `fao-seeds-toolkit-processing-2018` |
| `validation_seed_quality` | lot_release | 要求代表性批次抽样，并按已声明体系记录纯度、品种真实性或纯度、发芽率、水分及其他适用检验；核验阈值与准确种子类型和司法辖区对应。 | `ista-rules-seed-testing-2026`; `oecd-seed-schemes-2026`; `fao-qds-2006` |
| `validation_field_emissions` | rice_field_emissions | 甲烷相关生产要求面积、种植期、种植期和种植前水分管理、有机改良剂数据、因子集和层级；管理土壤 N2O 要求氮源及直接和适用间接路径。重复计算或无文件的因子替换失败。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils` |
| `validation_allocation` | multifunctional_processes | 要求第 7 节层级、分配前总量、分配份额合计为一的因子、分离点数值，以及采用经济分配时的敏感性。 | `eu-pef-2021` |
| `validation_reasoned_estimates` | provisional_ranges | 每个 `reasoned_estimate` 范围仅是可替换筛查辅助，不是前景证据或允许符合性区间。要求披露，并在用于发布关键决策前替换，除非审核明确接受。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景水稻种子生产数据包；经审核和核验后可发布为 secondary_dataset 和 background_dataset |
| downstream_use | 构建已放行水稻种子的 process 数据集，以及将种子作为播种投入的 lifecyclemodel 投影 |
| allowed_use | 与地理、作物年份、路线、种子级别、质量、处理、包装和储存相匹配的建模；按生产量加权的透明区域汇总 |
| excluded_use | 将食用或饲用稻谷作为参考产品；未披露地替代杂交和非杂交路线或认证制度；隐藏重大水分管理、亲本种子、质量、处理、地理或作物年份差异的通用使用 |
| required_metadata | PCR id；数据所有者；地理和场址；作物年份和季节；稻属物种及品种或杂交类型；亲本和放行种子的世代或级别；批次谱系；认证或质量体系；抽样和检验方法及结果；处理；包装；发运门；纳入储存；分配；背景数据集；排放方法和因子；推理估算；截断和代理 |
| required_quality_disclosure | 时间、地理和技术覆盖；田块和批次完整性；仪器和实验室证据；质量和能源平衡；不确定性和变异性；缺失数据；代理；分配敏感性；每项推理估算的状态 |
| update_trigger | 品种或杂交路线、亲本种子世代、生产地理、水分管理、田间投入、产量、调制或处理技术、包装、储存、质量或认证规则、背景数据集、排放因子方法、分配发生重大变化，或新证据使筛查范围失效 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-qds-2006` | 官方指南（`official_guidance`） | FAO. Quality Declared Seed System, Plant Production and Protection Paper 185. https://www.fao.org/4/a0503e/a0503e00.pdf（检索于 2026-08-07） | 种子生产者责任、种子批抽样检验，以及路线特定的发芽率、分析纯度、品种纯度、水分、健康和杂交稻要求 |
| `fao-seeds-toolkit-processing-2018` | 官方指南（`official_guidance`） | FAO and AfricaSeeds. Seeds Toolkit Module 2: Seed processing: principles, equipment and practice. https://openknowledge.fao.org/server/api/core/bitstreams/2019283b-6271-4b2e-82c0-19ac6256c591/content（检索于 2026-08-07） | 过程分解：接收、干燥、清选分级、处理、称量、包装和储存；批次追溯和质量核对 |
| `fao-seeds-toolkit-quality-2018` | 官方指南（`official_guidance`） | FAO and AfricaSeeds. Seeds Toolkit Module 3: Seed quality assurance. https://openknowledge.fao.org/server/api/core/bitstreams/b601435e-9c03-4ca5-8927-9f712418ec38/content（检索于 2026-08-07） | 纯度、发芽率、水分、生活力、活力、种子健康、品种核验、认证和质量控制记录 |
| `ista-rules-seed-testing-2026` | 标准（`standard`） | International Seed Testing Association. International Rules for Seed Testing 2026, Chapter 2 Sampling and official Rules portal. https://www.seedtest.org/api/rm/776HVE3532HC95N/free-chapter-2-sampling.pdf and https://www.seedtest.org/en/publications/international-rules-seed-testing.html（检索于 2026-08-07） | 代表性种子批抽样及适用纯度、发芽率、水分和其他检验方法的声明 |
| `oecd-seed-schemes-2026` | 标准（`standard`） | OECD. OECD Seed Schemes Rules and Regulations 2026. https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/rules-and-regulation-eng.pdf（检索于 2026-08-07） | 种子世代和认证身份、前茬、隔离、田间检验、品种真实性和纯度、批次控制及追溯 |
| `irri-rice-seed-quality` | 农技推广指南（`extension_guidance`） | International Rice Research Institute, Rice Knowledge Bank. Seed Quality and How to produce good seed. http://www.knowledgebank.irri.org/images/docs/seed-quality-management.pdf and http://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality/producing-good-seed（检索于 2026-08-07） | 水稻特定收获、脱粒、清选、干燥、储存、水分、发芽率、纯度和种子批质量背景 |
| `ipcc-2019-cropland` | 方法因子（`method_factor`） | IPCC. 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 5: Cropland. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf（检索于 2026-08-07） | 水稻种植 CH4 方程、种植面积、种植期、水分管理和有机改良剂缩放，以及土地或土壤碳筛查 |
| `ipcc-2019-managed-soils` | 方法因子（`method_factor`） | IPCC. 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf（检索于 2026-08-07） | 管理土壤直接和间接 N2O 活动数据、方程、因子及 N2O-N 至 N2O 报告 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method, corrected text. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021H2279R(01)（检索于 2026-08-07） | 多功能层级：细分或系统扩展、物理因果关系、再采用经济等其他关系；电力细分和文件要求 |

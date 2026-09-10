---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.kerosene-type-jet-fuel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 煤油型喷气燃料

## 1. 范围与适用性

本 PCR 适用于在炼油厂或制造型油品终端发运边界，以均质且通过质量认证的批次供应的成品煤油型航空涡轮燃料生产。范围包括 Jet A、Jet A-1 等石油衍生煤油型牌号，以及声明了适用规范和牌号的其他国家认可煤油型航空涡轮燃料。含有经批准的合成组分或协同加工组分的成品调合物，仅在其通过认可的煤油型航空燃料规范认证，且仍属于已声明的 CPC 石油产品上位范围——石油油类或按质量计石油油类含量不低于 70% 的制品——时纳入。

前景边界包括报告场址实际运行的路线：煤油馏分组分的制造或接收、实际发生的组分处理、批次调合与添加剂加注、规范检测与认证、成品储存，以及装载至制造点发运边界。对于在终端制造的产品，所购调合组分在炼油厂的制造应由上游数据集表示，不得虚构为终端的前景活动。

本 PCR 排除汽油型或宽馏分喷气燃料、用于照明或取暖的其他煤油、航空汽油、超出所声明 CPC 石油产品范围的纯合成航空燃料或调合物、作为单独产品销售的添加剂、机场加油管网运行、下游分销、航空器加油、航空器运行与燃烧，以及资本性建设，除非研究明确扩展边界并单独报告该扩展。符合本 PCR 本身不构成 ASTM、国防标准、CORSIA、可持续性或适航认证。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.kerosene-type-jet-fuel |
| classification_refs | CPC 3.0：33342 煤油型喷气燃料（精确语义参考；映射接受由独立治理流程决定） |
| covered_products | 用于航空燃气涡轮发动机的成品煤油型航空涡轮燃料，包括 Jet A、Jet A-1 和其他已声明煤油型牌号；仅当成品认证调合物仍属于已声明的 CPC 石油产品范围时，纳入经认可的合成组分或协同加工组分 |
| excluded_products | 汽油型或宽馏分喷气燃料；非航空用途的其他煤油；航空汽油；超出 CPC 石油产品范围的纯合成航空燃料或调合物；单独销售的添加剂；下游燃料交付与使用服务 |
| representative_product | 符合所声明航空涡轮燃料规范的均质成品煤油型喷气燃料批次 |
| production_route | 炼油厂一体化原油分馏和处理后进行调合与认证，或制造型终端将合格上游煤油馏分组分调合后进行认证 |
| market_state | 炼油厂或制造型终端发运罐内、位于下游分销和航空器使用之前的成品规范认证液体燃料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造点发运边界处的成品煤油型喷气燃料 |
| How much | 1 kg 净放行产品质量 |
| How well | 符合所声明煤油型航空涡轮燃料牌号与规范、具有有效质量证书或等效放行记录的均质批次 |
| How long or cycle | 一个放行批次；年度或生产期数据集在已声明报告期内汇总所有放行批次 |
| reference_flow_link | 定量参考交换为认证成品批次扣除实测储存和装载损失后装出的净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 适用燃料规范和牌号；石油衍生、合成及协同加工组分份额；制造点；地理范围；生产路线；批次或报告期；15°C 密度；低位热值及其基准；添加剂组合；质量证书标识；储存与装载边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有清单结果归一化至 1 kg 净放行燃料；不得以储罐毛体积或装载车辆体积作为参考数量。 |
| `volume_to_mass` | 液体产品和液体调合组分 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校正至 15°C 的体积和批次特定的 15°C 密度将实测体积换算为质量，并保留观测体积、温度、密度、试验方法和校正方法；不得使用通用默认密度。 |
| `energy_basis` | 热值和按能量归一化的报告 | Net calorific value | MJ/kg | 记录能量值采用低位热值还是高位热值；可选的 MJ 归一化结果应使用批次特定低位热值，且不得取代质量参考流。 |
| `grade_property_basis` | 燃料质量属性 | 牌号特定属性 | 规范规定单位 | 按所声明燃料规范要求的单位和试验基准记录每项质量结果；不得用批次平均值掩盖不合格批次。 |
| `utility_energy_conversion` | 电力、蒸汽、热和燃料使用 | Energy | kWh 或 MJ | 保留计量单位和换算基准；电力换算采用 1 kWh = 3.6 MJ，蒸汽或热量应声明压力、温度和焓值假设。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化炼油路线：在炼油过程边界接收的经调质原油或石油原料。制造型终端路线：随上游数据集和批次质量文件接收的合格煤油馏分调合组分。 |
| starting_condition_role | 前景起始条件标识场址记录从何处开始；该点之前的活动由关联上游数据集表示，不得直接遗漏。 |
| product_classification_scope | CPC 3.0 代码 33342 及其石油产品上位范围内的成品煤油型航空涡轮燃料；牌号和规范是数据集限定信息，不是独立的 canonical PCR 身份。 |
| recursive_input_rule | 在调合、返工或混合中投入的成品煤油型喷气燃料，作为具有自身上游数据集和批次身份的产品输入记录；不得在前景系统内递归展开同一产品类别。 |
| upstream_dataset_requirement | 为原油或石油原料、外购煤油组分、氢气、电力、燃料、蒸汽、水、添加剂、处理化学品和场外废物处理提供地理和技术代表性适当的上游数据集。 |
| disclosure | 声明场址类型、路线、原料和组分构成、规范和牌号、报告期、前景起止点、纳入的过程单元、储存和装载点、分配方法、截断及任何边界扩展。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景生产 | 纳入生产认证参考产品所需的实际组分制造或组分接收路线、处理、调合、质量放行、成品储存和制造点装载。 | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`; `mod-def-stan-91-091-14` |
| `boundary_rule_2` | 上游供应 | 对跨越前景边界的每种外购原料、调合组分、公用工程、添加剂和处理服务关联上游数据集；终端数据集不得声称其未实际运行的炼油作业。 | `eu-jrc-ref-bref-2015`; `eu-pef-2021-2279` |
| `boundary_rule_3` | 排放和废物 | 纳入来自所含单元的实测或计算直接大气排放、废水、含油残渣、废处理材料、不合格燃料、罐底物以及装载或储存损失，且不得重复计算回收物流。 | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| `boundary_rule_4` | 排除的下游阶段 | 默认排除下游管道、公路、铁路、海运、机场储存与加油管网、航空器加油和航空器燃烧；研究明确扩展边界时，应单独报告这些阶段。 | `eu-jrc-ref-bref-2015` |
| `boundary_rule_5` | 基础设施 | 默认前景生产数据集排除资本设备和一次性建设；当其对所声明研究目标具有实质影响时，应披露并单独建模。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture_or_receipt` | 煤油馏分组分制造或接收 | required | 一体化炼油厂对实际运行的分馏和处理建模；制造型终端记录外购合格组分并关联其上游生产数据集 | 前景组分供应与上游关联 | 每 1 kg 净放行参考产品 |
| `batch_blending_and_release` | 批次调合、添加剂加注、规范检测与放行 | required | 始终纳入 | 前景产品制造与批次认证 | 每 1 kg 净放行参考产品 |
| `finished_storage_and_loading` | 制造点成品储存与装载 | required | 始终纳入至发运计量表或等效制造点边界 | 前景储存与发运 | 1 kg 净放行参考产品 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 报告场址内处理炼油厂或终端废水时纳入 | 前景废物处理 | 每 1 kg 净放行参考产品 |

### 过程：煤油馏分组分制造或接收（`component_manufacture_or_receipt`）

#### 输入

##### 产品流

###### 石油原料或外购煤油馏分组分（`petroleum_feedstock_or_components`）

记录一体化炼油厂加工的经调质原油和石油中间体，或制造型终端接收的每种外购煤油馏分组分。保留供应商、来源、批次、规范、质量和上游数据集身份。

- 选定流：与所声明原料或调合组分相匹配的数据集特定 Tiangong 产品流
- 流属性/单位：质量 / kg
- 数量规则：扣除库存变化和退回物料后的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定原料或组分质量筛选校验；应以经评审的路线特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：20
  - 单位：kg/kg 净放行参考产品
  - 基准：覆盖终端组分接收与一体化炼油厂原料归属的宽泛临时范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际运行处理单元所用氢气（`treatment_hydrogen`）

当场址为煤油组分运行加氢精制或加氢处理时，记录跨越过程边界的计量氢气。不得重复计入已包含于外购组分上游数据集中的氢气。

- 选定流：与实际生产路线相匹配的数据集特定 Tiangong 氢气产品流
- 流属性/单位：质量 / kg
- 数量规则：计量氢气供应量扣除已在其他位置计入的实测排放或返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogen_and_chemicals`
- 来源：`eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- 数量范围：暂定氢气筛选校验；应以经评审的路线特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 净放行参考产品
  - 基准：包括未运行加氢处理路线的宽泛临时范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 组分作业消耗的电力（`component_electricity`）

记录实际运行的蒸馏、处理、泵送、分离和相关控制所用计量电力，并披露共享公用工程的分配。

- 选定流：与实际电网或供应组合相匹配的数据集特定 Tiangong 电力产品流
- 流属性/单位：能量 / kWh
- 数量规则：可归因于所含组分作业的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定组分作业电力筛选校验；应以经评审的路线特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净放行参考产品
  - 基准：涵盖实际运行的分离、处理、泵送和控制的宽泛临时范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 组分作业消耗的过程燃料、蒸汽和热（`component_thermal_energy`）

采用计量数量和实际能量基准，将每种燃料、蒸汽和热载体记录为独立数据集交换。不得将外购能量和内部回收炼厂燃料合并为一个无说明总量。

- 选定流：每种载体所对应的数据集特定 Tiangong 燃料、蒸汽或热产品流
- 流属性/单位：能量或载体特定属性 / MJ、kg 或 m3
- 数量规则：计量载体使用量；需要时声明焓值或热值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定组分作业热能筛选校验；应以经评审的路线特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 净放行参考产品
  - 基准：将各载体换算到所声明能量基准后的宽泛临时总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 组分作业消耗的工艺水（`component_process_water`）

记录跨越所选单元边界的外购或内部供应工艺水，扣除单独计量的循环水。

- 选定流：与水源和处理状态相匹配的数据集特定 Tiangong 水产品流
- 流属性/单位：体积 / m3
- 数量规则：供应至所含组分作业的计量补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定组分作业用水筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg 净放行参考产品
  - 基准：扣除实测循环水后的宽泛临时补充水范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 煤油馏分调合组分（`kerosene_blend_components`）

记录离开实际运行分馏或处理单元的每种煤油馏分组分，或转入调合的接收组分，并保留质量、批次身份和质量状态。

- 选定流：与处理和市场状态相匹配的数据集特定 Tiangong 煤油馏分产品流
- 流属性/单位：质量 / kg
- 数量规则：转入调合的实测组分质量，并与储罐库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- 数量范围：暂定调合组分质量筛选校验；应以经评审的路线特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.5
  - 单位：kg/kg 净放行参考产品
  - 基准：下游储存和装载损失之前转入组分的宽泛临时范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他炼油共产品（`other_refinery_coproducts`）

分别记录共享炼油单元产生的每种共产品。未分配生产清单和分配关系必须保留以供审查。

- 选定流：与每种实际炼油共产品相匹配的数据集特定 Tiangong 产品流
- 流属性/单位：质量或能量 / kg 或 MJ
- 数量规则：分配前的实测共产品输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配前每报告期炼油厂吞吐量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定共产品筛选校验；应以经评审的炼油厂产出证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：声明的产出单位/炼油厂吞吐量单位
  - 基准：分配前对各声明共产品分别应用的宽泛临时校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 转移至处理的工艺废水（`component_wastewater`）

按实测体积和相关污染物负荷记录离开所含组分作业的废水；关联场内或场外处理，且不得将回用水同时作为避免投入和废物输出重复计算。

- 选定流：与成分和接收处理相匹配的数据集特定 Tiangong 废水流
- 流属性/单位：体积 / m3
- 数量规则：从所含组分作业转出的实测废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定组分废水筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg 净放行参考产品
  - 基准：转移废水量的宽泛临时范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 含油污泥和废处理材料（`component_solid_wastes`）

对实际产生的含油污泥、废催化剂、废碱液、过滤材料和其他处理残渣，按废物种类分别建立交换。

- 选定流：与每种残渣和处理路线相匹配的数据集特定 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：转移至储存、回收或处理的称重或单据记录废物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定组分残余物筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净放行参考产品
  - 基准：保持各废物交换分列后求和的宽泛临时总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接燃烧和过程大气排放（`component_air_emissions`）

对跨越环境边界的每种报告物质和环境舱室分别建立基本流交换，包括所含单元实际排放的化石二氧化碳、甲烷、氮氧化物、硫氧化物、颗粒物和非甲烷挥发性有机物。

- 选定流：每种物质及其接收大气舱室所对应的数据集特定 Tiangong 基本流
- 流属性/单位：质量 / kg
- 数量规则：实测排放量，或基于场址活动记录和认可因子的有文件依据计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- 数量范围：暂定直接大气排放筛选校验；应以经评审的物质特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 物质/kg 净放行参考产品
  - 基准：对每种排放物质和区室分别应用的宽泛临时校验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：批次调合、添加剂加注、规范检测与放行（`batch_blending_and_release`）

#### 输入

##### 产品流

###### 投入批次的煤油馏分调合组分（`batch_components`）

按批次身份、质量、组分类型、来源和认证状态，分别记录投入批次的每种石油衍生、合成、协同加工和返工组分。

- 选定流：与每种调合组分相匹配的数据集特定 Tiangong 产品流
- 流属性/单位：质量 / kg
- 数量规则：批次转移质量；以体积计量时使用批次特定密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 储存和装载损失前的调合批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_blending`
- 来源：`mod-def-stan-91-091-14`; `astm-d1655-23`

###### 加注至批次的合格添加剂（`qualified_additives`）

分别记录每种添加剂的合格产品身份、活性浓度、剂量、加注点及批次证书条目。

- 选定流：与合格添加剂相匹配的数据集特定 Tiangong 添加剂产品流
- 流属性/单位：质量 / kg
- 数量规则：向放行批次加注的实测添加剂剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调合批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_blending`
- 来源：`mod-def-stan-91-091-14`; `astm-d1655-23`

###### 调合、转移和质量控制用电（`blending_electricity`）

在可归因于批次作业时，记录调合泵、转移、取样和场址实验室工作的计量电力。

- 选定流：与实际电网或供应组合相匹配的数据集特定 Tiangong 电力产品流
- 流属性/单位：能量 / kWh
- 数量规则：用于调合和质量放行的计量或透明分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 调合批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定调合电力筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 调合批次
  - 基准：调合、转移、取样与质量控制的宽泛临时范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行的煤油型喷气燃料批次（`released_jet_fuel_batch`）

仅记录按所声明规范放行的均质批次。保留该规范要求的证书身份及所有组分和添加剂声明。

- 选定流：煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位：质量 / kg
- 数量规则：成品储存和装载损失前的实测放行批次质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个放行批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch_quality_release`
- 来源：`mod-def-stan-91-091-14`; `astm-d1655-23`; `faa-ac-20-24d-chg1`
- 数量范围：放行批次质量归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 放行批次
  - 基准：放行批次过程行内的精确质量归一化
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 不合格或隔离批次物料（`off_spec_batch_material`）

记录转至返工、降级、回收或处理的不合格物料。重新投入后续批次的返工物料仍作为可追溯产品输入，不得作为避免废物处置信用。

- 选定流：与实际去向相匹配的数据集特定 Tiangong 产品流或废物流
- 流属性/单位：质量 / kg
- 数量规则：按去向路线计量的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行批次输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_quality_release`
- 来源：`mod-def-stan-91-091-14`
- 数量范围：暂定不合格物料筛选校验；应以经评审的批次证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 放行批次输出
  - 基准：按处置路线分别报告后求和的宽泛临时校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 调合和取样大气损失（`blending_air_losses`）

记录调合、取样和转移过程中跨越环境边界的物质特定挥发性排放。

- 选定流：每种排放物质和大气舱室所对应的数据集特定 Tiangong 基本流
- 流属性/单位：质量 / kg
- 数量规则：根据批次和场址记录实测或计算的挥发损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行批次输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`

### 过程：制造点成品储存与装载（`finished_storage_and_loading`）

#### 输入

##### 产品流

###### 进入成品储存的放行燃料（`released_fuel_to_storage`）

记录转入成品罐的认证燃料质量，并使其批次身份在装载过程中保持可追溯。

- 选定流：煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位：质量 / kg
- 数量规则：与放行证书关联的实测储罐接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_loading`
- 来源：`mod-def-stan-91-091-14`
- 数量范围：暂定认证燃料入罐筛选校验；应以经评审的罐区平衡证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 净发运参考产品
  - 基准：允许实测储存、取样和装载损失的宽泛临时范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 罐区和装载用电（`storage_loading_electricity`）

记录制造点边界内成品储存、循环、过滤和装载的计量电力。

- 选定流：与实际电网或供应组合相匹配的数据集特定 Tiangong 电力产品流
- 流属性/单位：能量 / kWh
- 数量规则：用于成品储存和装载的计量或透明分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定储存与装载电力筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh/kg 净发运参考产品
  - 基准：循环、过滤、泵送和装载的宽泛临时范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净发运煤油型喷气燃料参考产品（`reference_product_output`）

跨越炼油厂或制造型终端发运计量表的净数量为参考产品输出；该数量应核对认证储罐接收量、库存变化、循环量、样品、返工量和实测损失。

- 选定流：煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位：质量 / kg
- 数量规则：固定归一化为 1 kg 净发运合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`mass-balance-identity`
- 数量范围：参考归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 罐底物、过滤残渣和排水（`storage_loading_wastes`）

按实际去向路线，对罐底物、过滤残渣和排出水或受污染水分别建立废物交换。

- 选定流：与每种物料和处理路线相匹配的数据集特定 Tiangong 废物流
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：从成品储存和装载系统移出的实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定储存与装载废物筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：声明的 kg 或 m3/kg 净发运参考产品
  - 基准：保持质量和体积交换分列后求和的宽泛临时总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 成品储存与装载大气损失（`storage_loading_air_losses`）

记录未被回收且跨越环境边界的物质特定逸散或置换蒸气排放。

- 选定流：每种排放物质和大气舱室所对应的数据集特定 Tiangong 基本流
- 流属性/单位：质量 / kg
- 数量规则：根据储罐、装载和蒸气控制记录实测或计算的损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015`
- 数量范围：暂定储存与装载大气损失筛选校验；应以经评审的物质特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 物质/kg 净发运参考产品
  - 基准：对每种排放物质和大气区室分别应用的宽泛临时校验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理公用工程与化学品（`wastewater_treatment_inputs`）

对场内废水处理消耗的电力、处理化学品和补充水分别建立产品交换。

- 选定流：每种实际公用工程或处理化学品所对应的数据集特定 Tiangong 产品流
- 流属性/单位：载体特定属性 / kWh、kg 或 m3
- 数量规则：可归因于炼油厂或终端废水处理的计量或采购记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定废水处理投入筛选校验；应以经评审的载体特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：声明的交换单位/kg 净发运参考产品
  - 基准：按各公用工程或化学品的声明单位分别应用的宽泛临时校验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 进入场内处理的工艺废水（`wastewater_to_onsite_treatment`）

记录从所含作业转移至场内处理系统的废水，且不得将同一转移重复记录为基本流排放。

- 选定流：与成分和处理状态相匹配的数据集特定 Tiangong 废水流
- 流属性/单位：体积 / m3
- 数量规则：场内处理系统接收的实测废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定废水处理量筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg 净发运参考产品
  - 基准：进入场内处理的宽泛临时废水体积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 回收水或烃类（`wastewater_recovered_products`）

仅当回收水或烃类符合已声明回用规范且其后续用途有记录时，才将其记录为产品输出。

- 选定流：与回收物料状态相匹配的数据集特定 Tiangong 产品流
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：符合已声明回用规范的实测回收数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定回收产品筛选校验；应以经评审的物料特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：声明的 kg 或 m3/kg 净发运参考产品
  - 基准：保持回收水与烃类分列后求和的宽泛临时总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废水处理污泥和残渣（`wastewater_treatment_residuals`）

按去向路线分别建立污泥、废介质和其他残渣的废物交换。

- 选定流：与每种残渣和处理路线相匹配的数据集特定 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：转移至场外或进一步场内处理的实测残渣量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定废水处理残余物筛选校验；应以经评审的场址特定证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净发运参考产品
  - 基准：保持各残余物交换分列后求和的宽泛临时总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后废水向水体排放（`treated_effluent_to_water`）

使用实测排放体积和浓度，对每种报告物质及其接收水体舱室分别建立基本流交换。

- 选定流：每种物质及其接收水体舱室所对应的数据集特定 Tiangong 基本流
- 流属性/单位：质量 / kg
- 数量规则：排放体积乘以同期废水浓度，并按采样覆盖率校正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-jrc-ref-bref-2015`
- 数量范围：暂定处理后出水物质筛选校验；应以经评审的排放证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 物质/kg 净发运参考产品
  - 基准：对每种排放物质和水体区室分别应用的宽泛临时校验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 单元过程负荷 | 优先通过细分计量单元作业避免分配，将直接计量的原料、公用工程、排放和废物分配给实际导致这些负荷的过程输出。 | `eu-pef-2021-2279` |
| `allocation_rule_2` | 共享炼油单元 | 无法细分或系统扩展时，使用能够反映单元作业随各输出变化方式的有文件依据物理关系分配共享负荷；仅在对该单元具有合理依据时使用质量、能量或其他因果参数。 | `eu-pef-2021-2279` |
| `allocation_rule_3` | 经济分配后备方案 | 仅当细分、系统扩展和相关物理关系均不可行时使用经济分配；采用场址和期间特定的产品净价值，并披露价格、平均期间、币种和敏感性。 | `eu-pef-2021-2279` |
| `allocation_rule_4` | 回收物流和返工 | 内部循环、回收燃料、不合格返工物料或回收蒸气只要仍在前景系统内，就不得计为避免外部生产的信用；应记录转移并防止重复计算。 | `mass-balance-identity`; `eu-jrc-ref-bref-2015` |
| `allocation_rule_5` | 分配披露 | 发布未分配实测总量、输出数量、分配因子、分配方法和分配后清单，使审查者能够重现喷气燃料份额。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | `component_manufacture_or_receipt` | 原料、组分、中间体、共产品和库存平衡 | 质量台账和储罐记录 | batch_id; material_id; opening_inventory; receipts; transfers; outputs; closing_inventory; density_15c; meter_status | 校准质量或体积流量计及储罐核对 | kg 和 m3 | 每次转移和每月结算 | 报告期内所有纳入批次 | 所有纳入组分单元和储罐 | 按物料和期间核对期初库存 + 接收量 - 输出量 - 期末库存 | 仪表校准；储罐计量验证；核对签字 |
| `cp_hydrogen_and_chemicals` | `component_manufacture_or_receipt` | 氢气和处理化学品 | 仪表和领用记录 | material_id; supplier; quantity; purity; unit; unit_id; batch; destination | 校准仪表、称重单或受控领用记录 | kg | 每次转移或每班 | 所有实际运行处理生产期 | 所有纳入处理单元 | 按物料求和并在分配后归一化 | 校准；采购核对；纯度证书 |
| `cp_utility_meters` | all | 电力、燃料、蒸汽和热 | 公用工程计量记录 | meter_id; timestamp; opening; closing; unit; energy_basis; pressure; temperature; allocation_key | 校准场址仪表或分表读数 | kWh、MJ、kg 或 m3 | 依据仪表按小时、班次或月 | 完整报告期 | 纳入单元、罐区、装载和实验室 | 扣除外供和范围外用量；采用已披露共享公用工程分配 | 校准；仪表覆盖图；账单核对 |
| `cp_water_and_wastewater` | all | 补充水、废水、处理和排水 | 流量计和实验室记录 | stream_id; volume; timestamp; source_or_destination; sample_id; concentration; analyte; detection_limit | 校准流量计和代表性采样 | m3 和 kg | 连续或每次排放并配套同期采样 | 完整报告期 | 所有纳入水和废水系统 | 匹配浓度与流量期间；按物质负荷求和；避免重复记录转移和排放 | 仪表校准；实验室 QA/QC；采样计划 |
| `cp_waste_records` | all | 固体和液体残渣 | 称重单和转移联单 | waste_id; description; quantity; unit; date; treatment_route; carrier; recovery_status | 地磅、容器记录和废物联单 | kg 或 m3 | 每次装运或内部转移 | 完整报告期 | 所有纳入单元和废物储存区 | 按废物类型和路线求和；核对废物期初与期末库存 | 地磅校准；签字联单；接收方记录 |
| `cp_direct_emissions` | all | 直接大气和水体排放 | 监测和因子计算记录 | source_id; substance; compartment; measured_value; activity_data; factor; factor_source; control_status; period | 连续监测、定期测试、物料衡算或认可因子计算 | kg | 按排放源确定监测频率 | 完整报告期 | 每个纳入排放源 | 分别计算每种物质并在分配后归一化 | 监测校准；测试报告；因子溯源；治理设施停运日志 |
| `cp_batch_blending` | `batch_blending_and_release` | 调合组分和添加剂 | 批次配方和转移记录 | batch_id; component_batch_id; component_type; volume; mass; density_15c; additive_id; additive_dose; addition_point | 受控批次配方及校准转移计量 | kg、m3 和 mg/L | 每个批次 | 报告期内每个放行和拒收批次 | 调合罐和添加剂系统 | 采用批次特定密度换算体积；将配方与储罐质量核对 | 仪表校准；组分证书；添加剂合格与领用记录 |
| `cp_batch_quality_release` | `batch_blending_and_release` | 规范检测、均质性、放行、隔离和返工 | 证书和实验室记录 | batch_id; tank_id; specification; grade; sample_id; test_method; result; limit; additive_declaration; component_share; release_status; certificate_id | 代表性批次采样及认可或受控实验室测试 | 规范单位 | 每批放行前 | 报告期内每个批次 | 制造点 | 不得通过平均掩盖失败；仅汇总合格放行批次，并单独报告拒收或返工质量 | 质量证书；实验室 QA/QC；样品监管链；授权放行签字 |
| `cp_storage_and_loading` | `finished_storage_and_loading` | 认证储罐接收、库存、样品、损失和发运 | 储罐和装载台账 | batch_id; tank_id; receipt_mass; opening_inventory; closing_inventory; sample_mass; rework_mass; dispatch_mass; meter_id | 校准储罐计量和发运流量计，并维持批次追溯 | kg 和 m3 | 每次转移和发运；每日库存 | 报告期内所有放行燃料 | 成品储罐至制造点发运计量表 | 将认证接收量与净发运、库存变化、样品、返工和损失核对 | 仪表校准；储罐核对；发运单；证书关联 |
| `cp_allocation_records` | `component_manufacture_or_receipt` | 共享炼油负荷和共产品 | 分配工作表和源台账 | unit_id; input_total; output_id; output_quantity; physical_driver; price; currency; period; allocation_factor | 根据计量单元和产品记录完成审查计算 | 无量纲及源单位 | 每报告期及物料路线变更时 | 与前景清单相同期间 | 所有对产品有贡献的共享单元 | 应用所声明层级并保留未分配和分配后总量 | 独立复算；因子和校验；源台账关联；敏感性结果 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 所有清单行 | 归一化数量 = 分配后报告期数量 / 净发运合格产品质量 | 分配后数量；净发运质量 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_volume_to_mass` | 液体原料、组分和产品 | 质量 = 校正至 15°C 的观测体积 × 批次特定 15°C 密度 | 观测体积；温度；校正方法；density_15c | kg | `mod-def-stan-91-091-14` |
| `calc_energy_conversion` | 电力和能量载体 | electricity_MJ = kWh × 3.6；其他载体能量 = 计量数量 × 已声明低位或高位热值，或实测焓值 | 计量数量；载体属性；能量基准 | 保留原始单位的 MJ | `mass-balance-identity` |
| `calc_effluent_load` | 处理后排水 | 物质质量 = 同期排放体积 × 浓度，并记录单位和检出限处理 | 排放体积；分析物浓度；采样覆盖率 | 排向水体的物质 kg | `eu-jrc-ref-bref-2015` |
| `calc_allocation` | 共享炼油负荷 | 首先细分；否则应用有依据的物理关系；仅将经济分配作为有文件依据的后备方案；验证共享负荷的所有分配因子之和为 1 | 未分配清单；输出；分配驱动因子 | 分配后清单和因子集合 | `eu-pef-2021-2279` |
| `calc_storage_reconciliation` | 成品储存与装载 | 认证接收量 = 净发运量 + 期末库存 - 期初库存 + 样品 + 返工转移 + 实测损失，并披露无法解释的差额 | 储罐和发运台账字段 | 经核对的净参考输出和损失平衡 | `mass-balance-identity`; `mod-def-stan-91-091-14` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明燃料牌号、适用规范、制造点、组分份额、添加剂组合和 Tiangong 参考流 UUID；不得用通用煤油或狭窄且无代表性的产品流替代。 | 产品规范；质量证书；流身份记录 |
| `dq_batch_traceability` | 调合、放行、储存与装载 | 维持从每个调合组分经放行证书至发运记录的批次谱系；明确识别返工和混合批次。 | 组分证书；批次配方；质量证书；储罐和发运台账 |
| `dq_temporal` | 前景清单 | 使用完整且已声明、代表正常运行的报告期；识别会对结果产生实质影响的停工、异常事件、库存跨期和生产期。 | 带日期仪表、台账、运行日志和生产报告 |
| `dq_completeness` | 质量、能量、排放与废物 | 核对物料和能量台账，不得静默截断；披露每个排除物流、估算记录、未匹配平衡差额和监测缺口。 | 签字核对表；完整性登记；缺口日志 |
| `dq_measurement` | 仪表和实验室结果 | 使用校准测量系统，并保留方法、单位、检出限、校正基准和校准状态。 | 校准证书；实验室 QA/QC；采样计划 |
| `dq_allocation` | 共享炼油单元 | 保留未分配总量，并使用同一报告期源记录重现每个分配因子。 | 分配工作表；输出台账；物理驱动或价格证据；敏感性结果 |
| `dq_upstream_linkage` | 外购投入和场外处理 | 使用地理、技术和市场状态适当的上游数据集，并防止与前景作业重复。 | 供应商身份；数据集元数据；边界交叉检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 数据集产品若为汽油型喷气燃料、非航空煤油、航空汽油、超出 CPC 石油产品范围且未声明的合成调合物，或未声明煤油型航空涡轮燃料规范和牌号，应拒绝。 | `unsd-energy-product-definitions`; `astm-d1655-23`; `faa-ac-20-24d-chg1` |
| `validation_rule_2` | 参考流 | 要求恰好 1 kg 净发运合格产品，并关联流 `e1ede47a-b840-45e6-b711-98cb547902cf`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`。 | `mass-balance-identity` |
| `validation_rule_3` | 燃料牌号符合性 | 要求批次特定质量证书或等效放行记录，并应用所声明牌号和规范的限值。对于 ASTM D1655 牌号，Jet A-1 与 Jet A 的差异在于最高冰点更低，分别为 -47°C 和 -40°C；无证据时不得将一个牌号标签套用于另一个。 | `astm-d1655-23`; `faa-ac-20-24d-chg1` |
| `validation_rule_4` | Jet A-1 质量检查 | 数据集声明符合 Defence Standard 91-091 Issue 14 的 Jet A-1 时，至少验证闪点 ≥ 38.0°C、15°C 密度为 775.0–840.0 kg/m3、冰点 ≤ -47.0°C、-20°C 运动黏度 ≤ 8.000 mm2/s、低位热值 ≥ 42.80 MJ/kg，并同时满足标准的所有其他适用要求。 | `mod-def-stan-91-091-14` |
| `validation_rule_5` | 批次完整性和可追溯性 | 要求批次均质、代表性采样、组分和添加剂声明、授权放行，并从组分证书追溯至发运记录；对于 Defence Standard 91-091 Issue 14，批次内密度差大于 3.0 kg/m3 时应调查，而不得直接视为均质。 | `mod-def-stan-91-091-14` |
| `validation_rule_6` | 系统边界 | 确认已纳入实际运行组分供应或关联上游数据集、处理、调合、质量放行、成品储存和制造点装载，且未将下游分销和航空器使用静默混入前景结果。 | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| `validation_rule_7` | 清单完整性 | 适用时要求原料和组分、处理所用氢气、公用工程、水、共产品、直接排放、废水、废物、不合格物料、储存和装载损失以及场外处理关联的明确记录。 | `eu-jrc-ref-bref-2015`; `us-epa-ap42-5-1-2015` |
| `validation_rule_8` | 分配 | 验证分配层级、因果依据、因子之和、未分配总量、分配后总量，以及采用经济分配时的经济敏感性。 | `eu-pef-2021-2279` |
| `validation_rule_9` | 质量和批次核对 | 要求核对组分输入、放行批次质量、净发运、库存变化、样品、返工、共产品、废物和实测损失；无法解释的差额应披露，不得强制闭合。 | `mass-balance-identity`; `mod-def-stan-91-091-14` |
| `validation_rule_10` | 估算和 UUID | 标记缺少选择证据的任何模型数量、临时范围、非参考流 UUID 或过程 UUID；Tiangong 身份行本身不构成定量数量依据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造点发运边界处成品煤油型喷气燃料批次或代表性生产混合的前景生产数据集 |
| downstream_use | 供需要炼油厂门或终端门煤油型喷气燃料供应的产品系统模型用作二级数据集或背景数据集 |
| allowed_use | 关联完整上游数据集后的从摇篮到工厂门模型；边界匹配的炼油厂或终端基准分析；单独添加下游燃料分销和航空器使用阶段的模型 |
| excluded_use | 单独声称 ASTM 或 Defence Standard 认证；CORSIA 或可持续性资格；规范、分配、地理、技术和报告期不匹配的牌号或场址比较；直接表示机场交付或航空器燃烧 |
| required_metadata | PCR id；Tiangong 流 UUID；燃料牌号和规范；制造点；地理；技术和路线；组分份额；添加剂组合；批次或报告期；前景边界；分配方法；参考质量；15°C 密度；低位热值基准；数据源 |
| required_quality_disclosure | 批次追溯和放行状态；实测与计算数量；仪表和实验室覆盖；库存核对；直接排放方法；废水和废物覆盖；分配因子和敏感性；上游数据集选择；截断；数据缺口；临时估算 |
| update_trigger | 燃料规范或牌号、实质性路线、组分构成、合成或协同加工份额、炼油厂配置、处理强度、能源来源、分配方法、储存或装载系统、地理、法规或报告期代表性发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-energy-product-definitions` | official_guidance | United Nations Statistics Division, Energy Yearbook Definitions, Kerosene-type jet fuel, https://unstats.un.org/unsd/energy/yearbook/def_english_print.htm（检索日期 2026-08-09） | 类别边界及其与汽油型喷气燃料和其他煤油的区分 |
| `astm-d1655-23` | standard | ASTM International, ASTM D1655-23, Standard Specification for Aviation Turbine Fuels, https://www.astm.org/d1655-23.html（检索日期 2026-08-09） | Jet A 和 Jet A-1 范围、最低属性类别、添加剂、采样和测试 |
| `faa-ac-20-24d-chg1` | official_guidance | U.S. Federal Aviation Administration, AC 20-24D Change 1, Approval of Propulsion Fuels, Additives, and Lubricating Oils, https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-24D_Chg_1.pdf（检索日期 2026-08-09） | 可接受的煤油型牌号背景及 Jet A 与 Jet A-1 的冰点差异 |
| `mod-def-stan-91-091-14` | standard | UK Ministry of Defence, Defence Standard 91-091 Issue 14, Turbine Fuel, Kerosene Type, Jet A-1, 7 March 2022, hosted copy: https://kamino.fra1.cdn.digitaloceanspaces.com/jig/app/uploads/2022/07/91-091-Issue-14.pdf（检索日期 2026-08-09） | Jet A-1 限值、批次均质性、质量保证、认证、添加剂、组分和追溯 |
| `eu-jrc-ref-bref-2015` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas, 2015, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf（检索日期 2026-08-09） | 炼油过程分解、处理、调合、储存、装载、排放、废水和废物覆盖 |
| `us-epa-ap42-5-1-2015` | official_guidance | U.S. Environmental Protection Agency, AP-42 Section 5.1 Petroleum Refining, April 2015, https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf（检索日期 2026-08-09） | 炼油分离、转化、处理、储存、废水和直接排放源结构 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, Annex I, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30（检索日期 2026-08-09） | 数据生产、上游关联、分配层级、单元过程细分和质量披露 |
| `mass-balance-identity` | method_factor | 本 PCR 使用的质量守恒和单位换算恒等式；不提供经验默认清单值 | 参考归一化、物料核对和确定性单位换算 |

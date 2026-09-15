---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.motor-gasoline
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 车用汽油

## 1. 范围与适用性

本 PCR 适用于石油炼厂或汽油调合设施生产、并在所声明炼厂大门处放行的成品车用汽油前景数据包。本规则是产品类别方法学，不是针对某一辛烷值牌号、某一种炼厂配置或某一个国家市场的产品规范。

前景边界从原油、中间炼油原料、调合组分、含氧化合物、添加剂、外购能源、水、氢气和处理化学品进入炼厂边界时开始。边界涵盖归属于已放行汽油的分离、转化、精制、公用工程、环保控制、调合、批次认证、成品储存及炼厂大门发运作业。外购物料的上游生产和运输通过独立数据集连接。默认边界不含下游油库配送、加油站作业、车辆使用与燃烧以及寿命终止活动。

数据生产者应采用对所声明地域和生产期间有效的产品标准与法律要求。应披露而不得默认产品牌号、辛烷值标识、硫和苯含量、含氧化合物类型及比例、生物碳比例、季节或挥发性等级、密度参考条件以及放行批次状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.motor-gasoline |
| classification_refs | CPC 3.0：33311 车用汽油（精确分类语境；正向映射治理仍位于本 PCR 之外） |
| covered_products | 用于道路车辆点燃式发动机的成品车用汽油；当石油来源汽油仍为基本组分且产品依据适用市场规则被分类为车用汽油时，包括常规牌号和含氧牌号 |
| excluded_products | 航空汽油；汽油型喷气燃料；石脑油；以自身名义销售的未完成调合组分和辛烷值提升组分；炼厂燃料气；液化石油气；不属于所声明车用汽油分类的高醇或其他替代燃料；下游配送服务；车辆燃烧服务 |
| representative_product | 所声明炼厂或设施在规定地域和报告期内放行的合格成品车用汽油批次的产量加权组合 |
| production_route | 炼油原料接收与分离；路线特定的转化与精制；公用工程与环保控制服务；组分调合与批次认证；成品储存与炼厂大门发运 |
| market_state | 下游配送前，位于炼厂成品罐区或炼厂发运点的已放行合格批次散装液体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在炼厂大门处符合所声明适用产品规范的成品车用汽油 |
| How much | 1 kg |
| How well | 已放行且合格的批次，并披露必需的产品和市场限定信息 |
| How long or cycle | 用于构建产量加权数据集的设施报告期；不包括使用阶段服务时长 |
| reference_flow_link | motor_gasoline_ref |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 适用规范和放行状态；地域和设施大门；报告期；辛烷值牌号或牌号组合；硫和苯含量；含氧化合物类型及比例；化石与生物比例；季节或挥发性等级；密度值、温度基准及试验方法；炼厂配置和原油/原料构成；分配方法 |

构建前景数据包时，所有必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失任一限定信息将使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及全部质量归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将完整前景清单归一化为在所声明大门净发运的 1 kg 成品车用汽油。没有文件化的批次特定换算时，不得以体积替代质量。 |
| `volume_to_mass` | 以体积报告的液体原料、组分、成品批次和库存变化 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用所代表批次实测或认证的密度换算计量体积，并记录温度基准、试验方法、来源记录和换算公式。 |
| `energy_basis` | 外购燃料、炼厂燃料、蒸汽、电力和能量分配 | 适合所选流的能量或净热值 | 保留换算元数据的 MJ 和/或 kWh | 保留计费或计量原始单位。使用低位热值进行分配时，对所有产品采用一致的 LHV 基准，并保留产品特定 LHV 证据，不得采用通用汽油常数。 |
| `component_separation` | 含氧化合物、可再生成分和添加剂 | 质量；适用规范要求时另含体积分数 | kg 及所声明分数单位 | 在计算成品调合物前分别记录每种组分；化石汽油、生物含氧组分和其他调合组分不得合并为一个未限定投入。 |
| `inventory_change` | 储罐和在制品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致的密度和温度基准上核对期初库存、接收、内部转移、生产、发运、返工、损失和期末库存。 |
| `emission_basis` | 直接大气和水体排放 | 污染物种特定流属性和单位 | 除所选流要求其他单位外采用 kg | 分别记录实测或计算的各物种；适用时保留干/湿基准、氧基准、标准状态换算、监测期和方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在所声明炼厂边界接收并有计量或发票记录的原油、炼油原料、调合组分、含氧化合物、添加剂、外购能源、水、氢气和处理化学品，记录其数量、组成或牌号、来源、时间和库存状态 |
| starting_condition_role | 炼厂大门前景起始条件；上游生产与进厂运输采用关联的供应商或区域数据集，而不是在前景炼厂过程中重新构建 |
| product_classification_scope | 仅成品车用汽油；不含航空汽油、喷气燃料、石脑油、作为产品出售的未完成调合组分以及不属于所声明车用汽油分类的替代燃料 |
| recursive_input_rule | 进入前景系统的车用汽油或同类别返工料应作为独立产品投入记录，并带有供应商或前一批次身份。在所声明上游数据集处停止递归，避免其负荷或质量再次计为原生炼厂生产。 |
| upstream_dataset_requirement | 将每种外购原料、能源载体、氢气、含氧化合物、添加剂、化学品和进厂运输服务连接到时间、地域和技术上具有代表性的上游数据集；披露代理数据和重大缺口 |
| disclosure | 设施与大门；炼厂配置；纳入的过程单元；原油和原料构成；生产与库存期间；产品牌号组合；含氧与生物比例；适用产品标准；分配驱动量和系数；共享公用工程与控制系统；火炬、储存、废水和废物处理覆盖；排除项和代理项 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | foreground_system | 纳入从炼油原料和外购物料接收至成品车用汽油在所声明炼厂大门放行与发运的作业。 | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `boundary_required_operations` | process_completeness | 纳入对所代表汽油路线有实质服务的全部分离、转化、精制、耗氢、公用工程、调合、储存和环保控制作业；对不适用单元作明确标记。 | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `boundary_upstream_links` | purchased_inputs | 使用独立上游数据集建模外购原油、原料、能源、氢气、组分、化学品和运输，不得在前景炼厂内重复其生产。 | `eu-pef-method-2021` |
| `boundary_direct_releases` | foreground_emissions_and_waste | 纳入由所含作业产生的直接燃烧和过程排放、催化剂再生排放、火炬、无组织与储存/装载损失、废水排放、回收硫、废催化剂、污泥及其他废物。 | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `boundary_exclusions` | downstream_and_use | 下游油库配送、零售加注和车辆燃烧默认排除；若研究明确扩展边界，应分别报告这些阶段。 | `un-cpc-v3-2025`; `eu-pef-method-2021` |
| `boundary_capital_goods` | infrastructure | 只有在目标和适用项目规则允许时才可默认排除资本设备；应披露该排除，并在治理研究规则要求时纳入重要基础设施。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_separation` | 原料接收、脱盐与初级分离 | required | 始终纳入；对所代表原料构成未运行的单元应标记为不适用 | 前景原料预处理与常/减压分馏 | 报告期内转移至下游炼油单元的分离物流净质量 |
| `conversion_treating` | 汽油组分转化与精制 | required | 纳入实际路线所采用的裂化、加氢裂化、重整、异构化、烷基化、加氢处理、脱臭及相关回收作业组合 | 前景汽油调合组分生产与提质 | 转移至调合的精制汽油馏分净质量 |
| `utilities_environment` | 炼厂公用工程与环保控制 | required | 纳入服务于所含作业的厂内和外购公用工程以及控制与处理系统；透明分配共享服务 | 共享蒸汽、电力、燃料、氢气、冷却、火炬、硫回收、废水和废物处理 | 归属于所含作业的计量服务量和处理产出 |
| `blending_certification` | 成品汽油调合与批次认证 | required | 始终纳入最终组分调合、添加剂、含氧化合物、返工、质量检验和放行决定 | 前景合格成品车用汽油形成 | 转移至成品储存的已放行汽油净质量 |
| `storage_dispatch` | 成品储存与炼厂大门发运 | required | 始终纳入成品罐区和至所声明大门的发运；只有装载点位于该大门内时才纳入装载 | 前景储存、库存核对和参考产品发运 | 在所声明大门净发运的合格车用汽油质量 |

### 过程：原料接收、脱盐与初级分离（`feedstock_separation`）

#### 输入

##### 产品流

###### 接收的原油和其他炼油原料（`received_refinery_feedstocks`）

记录进入炼厂边界并对所代表汽油生产有贡献的每种原油、凝析油、未完成油品和外购中间物流。

- 选定流：按牌号和供应商分列的原油及炼油原料
- 流属性/单位：质量 / kg
- 数量规则：经文件化库存转移和退货调整的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_separation_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

###### 脱盐水和过程化学品（`separation_water_chemicals`）

记录专门供给原料预处理和初级分离的补充水、破乳剂、烧碱及其他化学品。

- 选定流：按独立产品流记录的过程水和分离化学品
- 流属性/单位：质量或带文件化换算的体积 / kg 或 m3
- 数量规则：按材料计量、开票或库存核对的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_separation_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

##### 废物流

没有强制废物投入。接收用于再加工的外部污油或残余物应作为独立废物投入记录，不得隐藏在原油数量中。

##### 基本流

除所选上游产品数据集外，不另行规定基本流投入。

#### 输出

##### 产品流

###### 分离炼油物流（`separated_refinery_streams`）

记录石脑油和其他馏分从初级分离转移至转化、精制、调合、燃料或共产品路线的实测量。

- 选定流：按物流身份分列的炼厂中间物流
- 流属性/单位：质量 / kg
- 数量规则：由经校准的转移流量计和储罐库存变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位过程产出，并与设施报告期核对
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feedstock_separation_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

##### 废物流

###### 送处理的脱盐污泥、含油固体和废水（`separation_residuals`）

记录离开分离过程并送至场内或场外处理的残余物；不得将回收烃从废物量中净扣除。

- 选定流：分别记录的含油污泥和炼厂废水
- 流属性/单位：带固体和含油量的质量或体积 / kg 或 m3
- 数量规则：保留组成或干物质基准的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_separation_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 基本流

###### 分离单元直接排放（`separation_direct_releases`）

对所含分离设备、加热炉和排口直接释放的每种实测或计算污染物分别建立交换，不得聚合不同物种。

- 选定流：物种特定的大气和水体基本流
- 流属性/单位：质量 / kg
- 数量规则：监测排放量或依据运行记录采用监管认可方法计算的排放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feedstock_separation_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

### 过程：汽油组分转化与精制（`conversion_treating`）

#### 输入

##### 产品流

###### 汽油馏分及转化进料（`conversion_feed_streams`）

记录进入路线特定转化与精制单元并用于汽油调合物的每种内部或外购进料物流。

- 选定流：按单元和物流身份分列的炼厂中间进料
- 流属性/单位：质量 / kg
- 数量规则：跨单元边界核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位过程产出和设施报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

###### 氢气、催化剂和精制化学品（`conversion_auxiliaries`）

按消耗单元记录外购和内部供应的氢气、催化剂补加、烧碱、胺、溶剂及其他过程化学品。

- 选定流：按独立产品流记录的氢气、催化剂和精制化学品
- 流属性/单位：质量 / kg
- 数量规则：归属于所含单元的计量、发票、批次装填或催化剂库存消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位过程产出，并归一化为 1 kg 成品车用汽油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 废物流

没有强制废物投入。跨越过程边界的回用催化剂细粉或炼厂残余物应明确记录。

##### 基本流

除所选上游和公用工程产品数据集外，不另行规定基本流投入。

#### 输出

##### 产品流

###### 精制汽油调合组分（`treated_gasoline_components`）

记录转移至最终调合的每种路线特定汽油组分，并保留其来源单元和实测性质。

- 选定流：精制汽油馏分调合组分
- 流属性/单位：质量 / kg
- 数量规则：扣除单元回流和库存变化后的实测组分净产量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位过程产出，并归一化为 1 kg 成品车用汽油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

###### 炼厂共产品和内部燃料（`conversion_co_products`）

分别记录 LPG、炼厂燃料气、含硫物流、焦炭及其他共产品，识别内部消耗和对外销售，避免重复计数。

- 选定流：单元特定炼厂共产品和内部燃料
- 流属性/单位：带文件化换算的质量或能量 / kg 或 MJ
- 数量规则：按去向和库存状态计量的净产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位过程产出和设施报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 废物流

###### 废催化剂和转化残余物（`spent_catalysts_residues`）

按处理或回收去向记录废催化剂、催化剂细粉、过滤固体和单元残余物。

- 选定流：按材料分列的废催化剂和炼厂过程残余物
- 流属性/单位：质量 / kg
- 数量规则：在所声明湿基或干基上称重的发运量或库存变化量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 基本流

###### 转化和催化剂再生排放（`conversion_direct_releases`）

对归属于所含路线的过程加热炉、裂化与催化剂再生、重整、耗氢单元、排口和火炬直接排放建立物种特定交换。

- 选定流：物种特定的 CO2、CH4、N2O、CO、NOx、SOx、VOC 和颗粒物基本流，以及其他受监测污染物
- 流属性/单位：质量 / kg
- 数量规则：连续监测、烟道测试、物料平衡或依据运行记录采用监管认可方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conversion_treating_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

### 过程：炼厂公用工程与环保控制（`utilities_environment`）

#### 输入

##### 产品流

###### 外购和厂内公用工程投入（`utility_inputs`）

记录服务于所含作业的外购电力和蒸汽、炼厂燃料、天然气、补充水、冷却补水、锅炉化学品和外供氢气。

- 选定流：按独立产品流记录的电力、蒸汽、燃料、水、氢气和处理化学品
- 流属性/单位：能量或质量 / 适用的 kWh、MJ、kg 或 m3
- 数量规则：采用所声明公用工程分配驱动量归属于所含作业的计量或开票数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities_environment_records`
- 来源：`eu-jrc-ref-bref-2015`; `argonne-refinery-allocation-2003`

##### 废物流

###### 送场内处理的废水和残余物（`waste_received_for_treatment`）

记录从所含前景单元转移至共享场内处理系统的废水、含油污泥、废碱液和其他残余物。

- 选定流：按来源和类型分列的炼厂废水和处理进料废物
- 流属性/单位：带组成的体积与质量 / m3 和 kg
- 数量规则：与处理厂进水核对的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每设施报告期，并分配至 1 kg 成品车用汽油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_environment_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 基本流

除为所代表地域选择的取水流外，不另行规定基本流投入。

#### 输出

##### 产品流

###### 公用工程服务和回收产品（`utility_services_recovered_products`）

记录输送至所含单元的内部蒸汽、电力和氢气，以及按去向记录的回收硫或其他可售处理产品。

- 选定流：按独立产品流记录的蒸汽、电力、氢气和回收产品
- 流属性/单位：能量或质量 / MJ、kWh 或 kg
- 数量规则：计量产出扣除有文件记录的输配损失，并按接收单元或分配池分列
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位服务产出和设施报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities_environment_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 废物流

###### 处理污泥和环保控制残余物（`treatment_residuals`）

记录送回收、处理或处置的废水处理污泥、硫回收残余物、废吸附剂及其他控制废物。

- 选定流：按材料和去向分列的处理残余物
- 流属性/单位：质量 / kg
- 数量规则：在所声明含水基准上称重的发运量或库存变化量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_environment_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 基本流

###### 公用工程、火炬和处理系统排放（`utility_environment_releases`）

对分配至所含汽油路线的燃烧、制氢、火炬、硫回收、废水处理和其他共享控制排放建立物种特定交换。

- 选定流：物种特定的大气和水体基本流
- 流属性/单位：质量 / kg
- 数量规则：采用获批准场址方法，根据燃料、火炬、进水、出水和运行记录监测或计算排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities_environment_records`
- 来源：`epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015`

### 过程：成品汽油调合与批次认证（`blending_certification`）

#### 输入

##### 产品流

###### 汽油组分、含氧化合物和添加剂（`blend_inputs`）

记录进入成品调合物的每种组分，包括来源单元或供应商、化石或生物属性、实测量和相关质量性质。

- 选定流：按独立产品流记录的汽油调合组分、含氧化合物和添加剂
- 流属性/单位：质量 / kg，同时保留要求的体积分数记录
- 数量规则：经库存和转移差异修正的实测批次加料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已放行成品批次，并归一化为 1 kg 成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_certification_records`
- 来源：`china-gb-17930-2016`; `us-40-cfr-1090`

###### 同类别汽油和返工投入（`motor_gasoline_recursive_input`）

将外购车用汽油、退回批次材料或内部返工作为独立同类别投入记录，并连接到递归投入规则所选的上游或前一批次数据集。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按供应商或前一批次身份实测的投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已放行成品批次，并归一化为 1 kg 成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_certification_records`
- 来源：`un-cpc-v3-2025`

##### 废物流

没有强制废物投入。场外污油进入调合或再加工时，在满足适用回收规则前应保留其废物状态。

##### 基本流

除上游数据集外，不另行规定基本流投入。

#### 输出

##### 产品流

###### 转移至储存的已放行车用汽油（`released_gasoline_to_storage`）

只记录通过适用规范和设施放行决定的批次；不合格物料仍为返工料或不合格库存。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由认证体积和批次密度计算，或直接按质量计量的已放行批次质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个已放行批次，并归一化为 1 kg 成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_blending_certification_records`
- 来源：`china-gb-17930-2016`; `us-40-cfr-1090`

##### 废物流

###### 不合格汽油、调合污油和罐底残余物（`blending_residuals`）

按实际去向记录不合格批次、污油和残余物；返回过程的物料是内部返工转移，不是负的废物输出。

- 选定流：按去向分列的不合格汽油和调合残余物
- 流属性/单位：质量 / kg
- 数量规则：来自批次处置和储罐核对记录的实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_certification_records`
- 来源：`us-40-cfr-1090`

##### 基本流

###### 调合与认证区域排放（`blending_releases`）

记录调合和批次处理期间跨越环境边界的物种特定蒸发、排口和泄漏相关排放。

- 选定流：物种特定 VOC 和其他受监测基本流
- 流属性/单位：质量 / kg
- 数量规则：依据批次和控制系统记录监测或通过物料平衡计算的排放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_blending_certification_records`
- 来源：`eu-jrc-ref-bref-2015`; `us-40-cfr-1090`

### 过程：成品储存与炼厂大门发运（`storage_dispatch`）

#### 输入

##### 产品流

###### 进入成品储存的已放行汽油（`stored_finished_gasoline_input`）

按批次和牌号记录从调合接收的已放行汽油，并采用与发运核对一致的密度和温度基准。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自认证批次记录和储罐接收记录的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每储存期间，并归一化为 1 kg 发运车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`eu-jrc-ref-bref-2015`; `us-40-cfr-1090`

##### 废物流

没有强制废物投入。

##### 基本流

除上游数据集外，不另行规定基本流投入。

#### 输出

##### 产品流

###### 在炼厂大门净发运的车用汽油（`motor_gasoline_ref`）

这是定量参考输出。在计入退货和文件化库存变化后，计量跨越所声明大门转移的合格汽油净量。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净发运质量；将完整数据集归一化为恰好 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`china-gb-17930-2016`; `us-40-cfr-1090`

##### 废物流

###### 罐底、回收泄漏物和发运残余物（`storage_dispatch_residuals`）

按实际回收、返工、处理或处置去向记录储存与装载残余物。

- 选定流：按独立废物流记录的罐底、泄漏回收物和发运残余物
- 流属性/单位：质量 / kg
- 数量规则：保留水分和烃含量的实测移除或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`eu-jrc-ref-bref-2015`

##### 基本流

###### 储存与装载损失（`storage_loading_releases`）

记录经过蒸气回收或控制后的物种特定呼吸、工作、转移和装载排放；无支持计算证据时，不得将总库存差异视为大气排放。

- 选定流：物种特定 VOC 和其他受监测基本流
- 流属性/单位：质量 / kg
- 数量规则：使用实际吞吐量、控制和运行条件监测或采用获批准储罐/装载方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在所声明大门发运的成品车用汽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`eu-jrc-ref-bref-2015`; `epa-ap42-petroleum-refining-2015`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_units` | multifunctional_refinery_units | 首先将炼厂细分为可计量单元操作，并把原料、能量、氢气、公用工程、产品和直接排放追溯至导致它们的单元和产品。 | `iso-14044-2006`; `eu-pef-method-2021`; `argonne-refinery-allocation-2003` |
| `allocation_shared_utilities` | shared_utility_and_control_systems | 使用有因果关系的实测驱动量分配共享蒸汽、电力、燃料、氢气、火炬、废水和环保控制负荷，例如计量服务量、燃料需求、氢气需求、处理负荷或污染物负荷。 | `eu-pef-method-2021`; `argonne-refinery-allocation-2003` |
| `allocation_remaining_multifunctionality` | unresolved_refinery_burdens | 当细分和直接因果分派仍不能解决共享负荷时，使用文件化的物理关系。对于含能炼油产品，基于产品特定净能量的过程级能量分配是优先筛选回退方法；偏离时应说明理由。 | `iso-14044-2006`; `argonne-refinery-allocation-2003` |
| `allocation_economic_fallback` | no_defensible_physical_relation | 仅在不存在可辩护物理关系且研究目标允许时采用经济分配；使用同期且有代表性的价格，并披露价格期间、地域和敏感性。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_internal_recycling` | internal_fuels_rework_and_recovered_material | 将炼厂内部燃料、返工、回收蒸气和回收烃作为内部转移追踪。其生产负荷只计一次，不得对同一数量重复抵扣或减除。 | `eu-pef-method-2021`; `eu-jrc-ref-bref-2015` |
| `allocation_sensitivity` | material_allocation_choice | 对每种具有实质差异且可辩护的分配方法报告敏感性结果，并说明发布数据集所选方法。 | `iso-14044-2006`; `argonne-refinery-allocation-2003` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_separation_records` | `feedstock_separation` | 原料接收、分离物流、脱盐投入、残余物和直接排放 | 校准流量计；储罐计量；发票；实验室分析；运行和排放记录 | 时间戳；材料/物流 id；供应商/来源；质量或体积；密度和温度；水分/硫或其他相关分析；期初/期末库存；去向；仪表 id；不确定性；污染物和监测基准 | 按物流和报告期核对接收、单元转移、储罐库存、残余物和监测排放 | kg；m3；kg 污染物 | 连续或每次转移、每批次和每报告期 | 完整前景报告期，包括开车、停车和异常事件 | 所有纳入的接收、脱盐和初级分离单元 | 汇总实测量，用批次密度换算体积，核对库存变化，分配后再归一化 | 仪表校准；实验室方法；发票/储罐核对；数据缺口和异常事件日志 |
| `cp_conversion_treating_records` | `conversion_treating` | 转化进料、辅助物、组分、共产品、废物料和直接排放 | 单元仪表；生产日志；催化剂和化学品库存；实验室分析；连续监测和认可计算 | 单元 id；路线；进/出物流；质量；能量；氢气；催化剂/化学品装填；回流；库存变化；运行小时；污染物；监测方法；控制状态 | 在聚合前核对每个所含单元，并保留路线特定转移和排放 | kg；MJ；kWh；kg 污染物 | 连续、批次装填和报告期 | 完整前景报告期，包括停机和异常运行 | 每个纳入的转化和精制单元 | 计算单元净产出和直接排放，再用所声明驱动量分派或分配 | 仪表校准；化验；催化剂库存；CEMS/烟道测试记录；单元物料与能量平衡 |
| `cp_utilities_environment_records` | `utilities_environment` | 外购及厂内公用工程、环保处理负荷、回收产品、残余物和排放 | 公用工程仪表；燃料分析；发票；火炬日志；氢/蒸汽/电力平衡；废水和废物记录 | 服务 id；来源；仪表；数量；能量基准；接收单元；进出水数量和组成；火炬流量/组成；废物质量/含水率；回收产品质量 | 核对生成、外购、输配、外送和损失服务；核对处理进料与产出 | MJ；kWh；kg；m3；kg 污染物 | 连续/月度和报告期 | 与生产相同期间，包括异常运行 | 服务于所含过程的全部共享公用工程和环保控制系统 | 优先分派直接计量服务；其余共享服务按所声明因果驱动量分配 | 校准仪表；燃料分析；处理实验室数据；火炬和废物联单；分配核对 |
| `cp_blending_certification_records` | `blending_certification` | 调合组分、同类别投入、放行批次、不合格物料和调合排放 | 批次单；调合控制系统；储罐计量；组分证书；认可实验室试验；放行/处置记录 | 批次 id；组分 id/来源；化石/生物属性；质量/体积；密度/温度；辛烷值；硫；苯；含氧组分；挥发性/RVP；馏程；牌号；规范；放行状态；返工去向 | 每批保留一套组分和质量记录，并将调合投入与放行、返工和损失数量核对 | kg；m3；性质特定单位 | 每次组分转移和每个成品批次 | 报告期内每个已放行和不合格批次 | 全部成品汽油调合罐和认证点 | 计算组分比例和批次质量；仅将合格放行批次聚合至所声明牌号组合 | 校准；分析证书；实验室方法；交接链；签署的放行/处置记录 |
| `cp_storage_dispatch_records` | `storage_dispatch` | 成品汽油接收、库存、发运、退货、残余物和排放 | 交接计量；储罐计量；发运单；蒸气控制记录；泄漏和残余物记录 | 批次/牌号；储罐；期初/期末库存；接收；发运；退货；密度/温度；仪表 id；去向；蒸气控制状态；残余物或泄漏处置 | 在汇总炼厂大门净发运前，按同一质量基准核对每个储罐和牌号 | kg；m3；kg 污染物 | 每次转移和报告期 | 完整前景报告期 | 所声明大门内全部成品储罐和发运点 | 接收 + 期初库存 - 期末库存 - 净发运 - 文件化转移 = 已核对损失或未解释差异；排放另行计算 | 交接仪表校准；储罐容积表；发运文件；蒸气控制运行；差异调查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_volume_to_mass` | all liquid streams reported by volume | 质量 = 实测或标准化体积 × 匹配温度基准上的批次特定密度 | 体积；密度；温度基准；试验方法 | 每批次或物流的 kg | `china-gb-17930-2016`; `us-40-cfr-1090` |
| `calc_component_fraction` | finished gasoline blend | 组分比例 = 组分质量或修正体积 ÷ 对应成品批次总基准；化石与生物组分保持分列 | 组分转移；密度；已放行批次总量 | 组分比例及化石/生物拆分 | `us-40-cfr-1090` |
| `calc_net_unit_output` | refinery unit and storage inventories | 净产出 = 实测转出 - 实测退回 - 可归属库存增加，并与转入和文件化损失核对 | 转移仪表；期初/期末库存；退回；返工；损失 | 按物流的过程净产出 | `eu-jrc-ref-bref-2015` |
| `calc_allocation_factor` | shared unit or refinery burden | 分配系数 = 汽油所选因果或物理驱动量 ÷ 全部共产品相同驱动量之和；分配池内系数在舍入容差内合计为 1 | 计量驱动量；产品能量或其他物理关系；共产品集合 | 负荷分配系数 | `iso-14044-2006`; `argonne-refinery-allocation-2003` |
| `calc_reference_normalization` | completed foreground inventory | 归一化量 = 已分配报告期数量 ÷ 在所声明大门净发运的合格车用汽油 kg | 已分配清单；参考发运质量 | 每 1 kg 参考流的清单量 | `eu-pef-method-2021` |
| `calc_storage_reconciliation` | finished-product tankage and dispatch | 先核对接收、发运、退货和库存变化；仅将有支持证据的释放分类为排放或废物，未解释差异保留为数据质量发现 | 储罐和交接记录；泄漏、蒸气和残余物记录 | 净发运、有支持的损失流和未解释差异 | `eu-jrc-ref-bref-2015` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 证明每个聚合产出批次为成品车用汽油，而不是航空汽油、喷气燃料、石脑油、未完成调合组分或其他替代燃料。 | 适用规范；分析证书；批次放行和分类记录 |
| `dq_technology` | refinery configuration and route | 识别纳入和不适用单元、原料构成、氢气来源、公用工程系统、调合路线和环保控制；不得未经限定地采用通用炼厂路线。 | 单元清单；工艺流程图；生产台账；配置记录 |
| `dq_temporal` | all foreground data | 使用涵盖正常、开车、停车和异常事件的一致生产与库存期间；披露排除项和时间不匹配的上游数据集。 | 仪表覆盖报告；事件日志；数据集日期；缺口清单 |
| `dq_geography` | foreground and upstream data | 声明设施位置和市场；使用地域上有代表性的上游数据集，或披露代理及敏感性。 | 设施元数据；供应商来源；上游数据集地域 |
| `dq_measurement` | volumes, masses, energy and emissions | 保留校准、密度/温度换算、实验室和排放监测证据及其不确定性或方法限制。 | 校准证书；实验室方法；CEMS/烟道测试报告；计算表 |
| `dq_completeness` | process and flow coverage | 覆盖全部所含单元、共享公用工程、火炬、储存、废水、废物和共产品；依据重要性和治理研究规则核对缺失或排除数据。 | 过程—数据矩阵；完整性检查；排除清单 |
| `dq_allocation` | multifunctional burdens | 保存分配池成员、驱动量、系数、系数合计、理由和敏感性；分配应能由采集数据重现。 | 分配工作簿或机器可读计算；替代方法结果 |
| `dq_mass_balance` | facility, unit, blend and storage balances | 在兼容基准上核对投入、产出、回流、库存变化、废物和文件化损失；调查未解释不平衡，不得自动将其分派为排放。 | 签署的平衡；差异阈值和调查记录 |
| `dq_no_generic_defaults` | quantitative inventory | 不得用无引用的通用过程数据集或未标记估计替代缺失炼厂测量。应报告缺口；任何后续暂定估计都应明确标记为 `reasoned_estimate`，规定范围、经过评审，并在发布关键使用前替换。 | 数据缺口清单；估计批准和替换计划 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_flow | 产品流 UUID、质量属性 UUID、单位组 UUID、参考单位和 1 kg 数量应与参考流表一致。 |  |
| `validation_product_scope` | released_batches | 每个参考产出批次应依据适用规范记录为成品车用汽油；排除的燃料类别和未完成调合组分不得聚合。 | `un-cpc-v3-2025`; `china-gb-17930-2016`; `us-40-cfr-1090` |
| `validation_required_qualifiers` | dataset_metadata | 所有必需限定信息应存在，并与所代表批次、地域、期间和路线内部一致。 | `china-gb-17930-2016`; `us-40-cfr-1090` |
| `validation_mass_conversion` | volume_based_records | 每个体积到质量换算都应包含密度、温度基准、试验方法和计算，否则受影响的质量结果不具结论性。 | `us-40-cfr-1090` |
| `validation_process_coverage` | foreground_process_map | 每个必需过程都应有记录或明确的不适用理由，服务于汽油路线的每个重要运行单元都应映射至一个过程。 | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `validation_recursive_input` | same_category_input | 同类别汽油和返工投入应带有供应商或前一批次身份，不得再次计作原生参考产出或获得重复上游负荷。 | `eu-pef-method-2021` |
| `validation_allocation` | multifunctionality | 分配池、驱动量、系数和系数合计应可重现；细分和因果分派应先于剩余物理或经济分配。 | `iso-14044-2006`; `eu-pef-method-2021`; `argonne-refinery-allocation-2003` |
| `validation_mass_balance` | unit_blend_and_storage_balances | 投入、产出、回流、库存、废物和文件化损失平衡应在设施批准的测量不确定性内闭合；未解释差异应报告为发现，不得强制写入某个流。 | `eu-jrc-ref-bref-2015` |
| `validation_direct_releases` | emissions_and_waste | 在记录允许时，直接过程、燃烧、再生、火炬、无组织、储存、废水和废物流应按物种和去向分列；聚合或遗漏的流需记录限制。 | `epa-ap42-petroleum-refining-2015`; `eu-jrc-ref-bref-2015` |
| `validation_representativeness` | published_dataset | 技术、原油/原料构成、产品组合、时间和地域应与所声明用途匹配；旧的或国外炼厂代理不得在没有明确限制和敏感性的情况下表示为当前本地基准。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | 向前景过程和生命周期模型提供炼厂大门成品车用汽油；研究需要时另行加入下游配送和燃烧 |
| allowed_use | 对所声明炼厂配置、地域、报告期、产品牌号组合和分配方法开展归因型产品与过程建模；保留限制条件时可用于透明情景或敏感性分析 |
| excluded_use | 单独用作车辆尾气或使用阶段排放；不含下游阶段时用作加油站或交付燃料供应；航空汽油或其他排除燃料；未经限定的全球、当前中国或当前市场基准；法规合规认证 |
| required_metadata | PCR id 和版本；设施与大门；地域；报告期；适用标准；批次和牌号组合；辛烷值；硫和苯；含氧化合物类型/比例；化石和生物比例；季节/挥发性等级；密度和温度基准；炼厂配置和原料构成；纳入单元；能源和氢气来源；分配池/驱动量/系数；参考流 UUID；上游数据集引用 |
| required_quality_disclosure | 技术、地域、时间和精度的数据质量评级或等效证据；覆盖与缺口清单；仪表/实验室基准；物料平衡结果；分配敏感性；代理和排除清单；异常运行处理；未解释差异 |
| update_trigger | 适用燃料规范、产品或含氧组分构成、炼厂配置、原油/原料构成、氢气或能源系统、环保控制、分配驱动量、大门定义发生变化，或有证据表明所代表期间在技术、地域或时间上已不再具有代表性 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | dataset | 联合国统计司，《Central Product Classification Version 3.0》结构，CPC 33311 Motor gasoline，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（仓库来源检索于 2026-06-23） | 产品类别识别以及与相邻 CPC 燃料类别的排除边界 |
| `china-gb-17930-2016` | standard | 国家市场监督管理总局/国家标准化管理委员会，GB 17930-2016《车用汽油》现行标准记录，https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D81743D3A7E05397BE0A0AB82A（访问于 2026-08-09） | 中国适用产品规范身份、批次合格性和必需质量披露 |
| `us-40-cfr-1090` | official_guidance | 美国《电子联邦法规汇编》，40 CFR Part 1090，Regulation of Fuels, Fuel Additives, and Regulated Blendstocks，https://www.ecfr.gov/current/title-40/chapter-I/subchapter-U/part-1090（访问于 2026-08-09） | 汽油批次身份、硫、苯、含氧组分、RVP、密度、取样、试验和报告记录 |
| `epa-ap42-petroleum-refining-2015` | official_guidance | 美国 EPA，AP-42 Section 5.1 Petroleum Refining，2015 年 4 月，https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf（访问于 2026-08-09） | 炼厂过程分解和直接排放源覆盖 |
| `eu-jrc-ref-bref-2015` | official_guidance | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Refining of Mineral Oil and Gas，2015，https://eippcb.jrc.ec.europa.eu/reference/refining-mineral-oil-and-gas-0（访问于 2026-08-09） | 所含炼厂单元、公用工程、储存、调合、废水、废物及排放控制覆盖 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，附件一 Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（访问于 2026-08-09） | 边界、细分、分配层级、上游连接以及技术/地域/时间数据质量 |
| `iso-14044-2006` | standard | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，含现行修订，https://www.iso.org/standard/38498.html（访问于 2026-08-09） | 生命周期清单、分配、报告和敏感性要求 |
| `argonne-refinery-allocation-2003` | official_guidance | 美国阿贡国家实验室 GREET，Wang、Lee 和 Molburg，Allocation of Energy Use in Petroleum Refineries to Petroleum Products: Implications for Life-Cycle Energy Use and Emission Inventory of Petroleum Transportation Fuels，2003，https://greet.anl.gov/files/1c49xpjg（访问于 2026-08-09） | 炼厂过程级分配，并支持不将未区分的全炼厂分配作为默认方法 |

---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-provisionally-preserved-not-for-immediate-consumption
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 暂时保藏、非供直接食用的水果和坚果

## 1. 范围与适用性

本 PCR 适用于将水果或坚果置于临时保藏状态，以便储存、运输或转交后续加工者的前景生产。产出仍拟进行后续加工，不得表述为可直接食用。具体数据包应识别水果或坚果品种、物理形态、临时保藏路线、保藏介质或处理方式、保持条件、质量基准和包装系统。

本类别可以包括盐水路线、二氧化硫或亚硫酸盐路线以及其他有记录的临时保藏路线。这些路线是备选路线，不是一个通用配方中的共同成分。实际采用组合路线时，应分别建模各实际处理阶段。本 PCR 不规定通用盐浓度、二氧化硫剂量、pH、接触时间、储存温度或介质与产品比。

不包括鲜品、冷冻品、简单干制品、糖渍品、即食腌渍品、最终罐藏品、果酱、果冻、果泥、烘烤或盐渍即食品，以及市场状态已不再是待后续加工的临时保藏品。Codex CXS 260-2007 明确排除拟继续加工的产品，因此本 PCR 不把该标准作为产品规范；未经另行适用性判定，不得把其中针对直接食用腌渍产品的要求移用于本类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-provisionally-preserved-not-for-immediate-consumption |
| classification_refs | CPC 3.0: 21496 — 暂时保藏、非供直接食用的水果和坚果 |
| covered_products | 处于声明的临时保藏状态且拟继续加工的水果、坚果、果皮及相关可食植物部分；路线可以是盐水、二氧化硫或亚硫酸盐，或其他有记录的临时保藏方法 |
| excluded_products | 鲜品、冷冻品、简单干制品、糖渍品、即食腌渍品、最终罐藏品、果酱、果冻、果泥、烘烤或盐渍即食品，以及适合直接食用或不再拟继续加工的其他产品 |
| representative_product | 采用一种已识别路线暂时保藏、在规定条件下保持并以声明包装交付后续加工的一批水果或坚果 |
| production_route | 接收与准备；一种已声明临时保藏路线；受控保持；有条件的发运前沥液、漂洗或介质调整；包装与出厂；路线特定的残余物管理 |
| market_state | 生产者工厂门口的包装或散装临时保藏中间产品，在该状态下不适合直接食用并拟进入后续加工工序 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一项已声明、经核实处于临时保藏状态并转交后续加工者的水果或坚果 |
| How much | 按声明质量基准计的 1 kg 可售临时保藏产品 |
| How well | 声明产品身份、物理形态、保藏路线与保藏剂、包装净含量或沥干产品质量基准、保留介质状态、保持条件、拟进行的下一加工步骤和包装系统；产品不得表述为可直接食用 |
| How long or cycle | 一个生产批次，从来料水果或坚果接收，经临时保藏、保持和包装至生产者工厂门口发运；记录实际保持时间 |
| reference_flow_link | 一个参考流等于下列参考流对象中的参考数量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Fruits and nuts, provisionally preserved, not for immediate consumption `70b546f4-bfbc-4e64-a70d-4ff57cedcc6d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水果或坚果物种及商品形态; 物理准备状态; 保藏路线标识; 保藏剂或介质身份; 施用配方或浓度; 组合处理的路线顺序; 接触时间与保持时间; 温度或其他受控保持条件; 包装净含量或沥干产品质量基准; 保留介质是否计入参考质量; 拟进行的下一加工步骤; 初级和次级包装系统; 地理范围; 参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单均按一种明确声明的质量基准归一化至 1 kg 可售产品。包装质量不得计入参考产品质量，应另行列入清单。 |
| `medium_mass_basis` | 保藏介质和处理后产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明参考质量是包装净含量还是沥干产品质量。仅当声明的商品质量基准包含保留介质时，才将其计入参考质量；分别报告介质添加、回收、保留、沥出和废弃量。 |
| `agent_as_supplied` | 盐、二氧化硫、亚硫酸盐和其他保藏剂 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按供应状态记录每种保藏剂，并记录有效成分浓度或纯度。没有书面换算时，不得比较或合并不同保藏剂。 |
| `energy_separation` | 电力和热能载体 | Energy | kWh and MJ | 电力以 kWh 记录，燃料或外购热以原始数量和 MJ 记录；不得合并成一个无说明的能源数量。 |
| `packaging_mass` | 包装材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料及每参考流质量记录各包装部件；适用时记录可重复使用容器的周转次数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 临时保藏设施门口的来料水果或坚果，声明物种或商品形态、准备状态、接收质量、供应商、来源和接收状况 |
| starting_condition_role | 前景门到门起点；上游种植、收获和更早的处理通过链接上游数据集表示，不在本前景清单中重复 |
| product_classification_scope | CPC 3.0 代码 21496 是临时保藏且非供直接食用产品的分类背景；规范 PCR 身份仍独立于分类系统 |
| recursive_input_rule | 若某项投入本身已属于同一产品类别，则将其作为带有自身保藏路线和上游数据集的上游产品投入记录；不得在当前过程中递归重建其此前的临时保藏作业 |
| upstream_dataset_requirement | 来料水果或坚果、水、盐、二氧化硫或亚硫酸盐、其他保藏剂、电力、热能载体、包装材料，以及纳入时的运输和场外废物或废水处理均需链接数据集 |
| disclosure | 声明产品身份、保藏路线及顺序、保藏剂配方、质量基准、保持条件和时间、介质保留或去除状态、拟进行的下一加工步骤、包装、纳入的处理、排除的下游加工、地理范围、参考期和任何暂定估算 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_start_to_gate` | 前景生产 | 纳入接收、分选与准备、实际临时保藏处理、受控保持、有条件的发运前调理、包装，以及生产者工厂门口发运前的场内残余物处理。 | `unsd-cpc-3-0-2025`; `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_route_specificity` | 保藏路线 | 单一路线数据集选择一种主要保藏路线。实际为组合路线时，分别表示各阶段及其投入、产出、保持条件和排放；不得采用混合盐与二氧化硫的通用默认配方。 | `unsd-cpc-3-0-2025` |
| `boundary_packaging` | 包装 | 纳入报告关口时随产品交付的初级、次级和三级包装；包装质量不计入参考产品质量，并披露可重复使用容器的周转次数。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_downstream_exclusion` | 下游加工 | 排除后续加工者实施的脱保藏和转化、最终食品制造、报告关口之后的分销、食用准备、使用和生命末期；更宽研究明确作为独立生命周期阶段加入者除外。 | `unsd-cpc-3-0-2025`; `codex-cxs-260-2007` |
| `boundary_inventory_completeness` | 前景投入与产出 | 记录水、能源、原料、包装、产品、废物、废水或废保藏介质和路线相关直接排放；非前景负荷链接适当的上游或处理数据集。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_receiving_preparation` | 原料水果或坚果接收与准备 | `required` | 始终 | 前景接收、检查、分选、修整及实际进行的清洗 | 按转入保藏的合格物料质量 |
| `temporary_preservation_holding` | 临时保藏与受控保持 | `required` | 始终；只填报实际路线的保藏剂行 | 声明保藏方法的前景实施和后续加工前保持 | 按临时保藏中间产品质量 |
| `predispatch_conditioning` | 发运前沥液、漂洗或介质调整 | `conditional` | 仅在生产者关口前实际进行时纳入 | 路线特定前景调理，不把产品转变为可直接食用产品 | 按调理后产品质量 |
| `packaging_dispatch` | 包装与生产者工厂门口发运 | `required` | 始终；散装可重复使用容器仍按周转次数记录为包装 | 前景包装和参考产品放行 | 1 kg 参考产品 |
| `onsite_residual_treatment` | 场内残余物或废水处理 | `conditional` | 处理在报告设施边界内发生时纳入 | 废次品、废介质、废水或路线特定排放的前景处理 | 按处理质量或体积 |

### 过程：原料水果或坚果接收与准备（`raw_receiving_preparation`）

#### 输入

##### 产品流

###### 来料水果或坚果（`received_fruit_or_nuts`）

记录临时保藏前跨越设施关口的来料水果或坚果批次。

- 选定流：声明的来料水果或坚果
- 流属性/单位：Mass / kg
- 数量规则：计量接收质量，并分配至批次合格和拒收部分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`
- 数量范围：暂定得率筛查投入；取得至少 10 个代表性批次或一个完整生产季的经评审产品和路线特定批次得率证据后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3.0
  - 单位：kg/kg reference product
  - 基准：每 kg 参考产品的来料水果或坚果质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备用水（`preparation_water`）

记录清洗、水力输送或其他准备作业中跨越前景边界的用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：分配至该批次的计量补水；循环水与补水分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定用水筛查范围；产品线计量表或经验证批次水量平衡覆盖一个代表性生产季后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg reference product
  - 基准：每 kg 参考产品的准备补水量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的已准备水果或坚果（`prepared_fruit_or_nuts`）

根据计量质量记录，记录转入临时保藏的合格产品。

- 选定流：Accepted prepared fruit or nut
- 流属性/单位：Mass / kg
- 数量规则：接收质量减去计量的准备废次品和其他有记录的质量变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass`

##### 废物流

###### 准备废次品（`preparation_rejects`）

按去向记录腐坏、受损、修整或其他被拒收的水果或坚果物料。

- 选定流：Fruit or nut preparation rejects
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量废次品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 来料水果或坚果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`
- 数量范围：暂定拒收比例筛查范围；取得至少 10 个代表性批次或一个完整生产季的经评审产品特定分选记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg received material
  - 基准：每 kg 来料水果或坚果的准备废次品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：临时保藏与受控保持（`temporary_preservation_holding`）

#### 输入

##### 产品流

###### 进入保藏的已准备水果或坚果（`preservation_product_input`）

记录进入声明临时保藏路线的合格已准备物料。

- 选定流：Accepted prepared fruit or nut
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 临时保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`

###### 水相路线的保藏用水（`preservation_water`）

仅在实际路线使用水配制盐水、含硫水、其他溶液、补液或保持介质时填报。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量补水；回收、循环、保留和排放量分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 临时保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定水相路线筛查范围；取得一个代表性生产季的产品、容器和路线特定补水及循环记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg preserved intermediate output
  - 基准：每 kg 保藏中间产品输出的补水量；内部循环量除非新增补水，否则不计入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水路线用盐（`brine_salt`）

仅在声明盐水路线实际使用盐时填报；不得在二氧化硫或其他路线中作为通用配方填报。

- 选定流：Salt as supplied
- 流属性/单位：Mass / kg
- 数量规则：计量加盐、补盐、回收量和保留介质中的盐量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`
- 数量范围：暂定盐水路线筛选估算；用实际产品规范、实测槽液浓度、投料记录和保留介质平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg preserved intermediate output
  - 基准：声明盐水路线每 kg 保藏中间产品输出的供应状态盐
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 二氧化硫路线的二氧化硫或亚硫酸盐保藏剂（`sulfur_dioxide_agent`）

仅在实际使用二氧化硫、含硫水或亚硫酸盐配方时填报。记录配方、纯度和活性 SO2 当量，不得从不适用标准移用某食品类别限值。

- 选定流：Declared sulfur dioxide or sulfite agent as supplied
- 流属性/单位：Mass / kg
- 数量规则：计量保藏剂投加和补充量，并记录有效成分浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`
- 数量范围：暂定 SO2 路线筛选估算；用产品特定工艺规范、供应商检验结果、投料记录、残留测量和适用法规要求替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.00001
  - 上限：0.1
  - 单位：kg/kg preserved intermediate output
  - 基准：声明 SO2 或亚硫酸盐路线每 kg 保藏中间产品输出的供应状态保藏剂
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他临时保藏剂（`other_preservation_agent`）

仅用于盐水或 SO2 行未表示的有记录路线。每种保藏剂应分别识别；本行不得作为合并未说明保藏剂的许可。

- 选定流：Declared other temporary preservation agent as supplied
- 流属性/单位：Mass / kg
- 数量规则：按具名保藏剂、配方和纯度计量投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`
- 数量范围：暂定其他路线筛选估算；在比较或发布关键用途前，用产品和保藏剂特定工艺规范及投料记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.00001
  - 上限：1
  - 单位：kg/kg preserved intermediate output
  - 基准：声明其他路线每 kg 保藏中间产品输出的一种具名供应状态保藏剂
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏用电（`preservation_electricity`）

记录计量的投配、泵送、搅拌、冷却、通风、监测和保持用电。

- 选定流：Electricity, supplied to facility
- 流属性/单位：Energy / kWh
- 数量规则：按路线和批次分配的电表或设备记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定用电筛查范围；用覆盖一个代表性生产季的路线特定分表记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg preserved intermediate output
  - 基准：每 kg 保藏中间产品输出的电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏热能（`preservation_thermal_energy`）

记录温控或其他路线作业消耗的外购热或燃料；未消耗热能时不使用本行。

- 选定流：Declared fuel or purchased heat
- 流属性/单位：Energy / MJ
- 数量规则：按路线和批次分配计量或发票能源；保留原始燃料数量和换算依据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定热能筛查范围；用覆盖一个代表性生产季的路线特定燃料或热量记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg preserved intermediate output
  - 基准：每 kg 保藏中间产品输出的热能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 临时保藏中间产品（`preserved_intermediate_product`）

记录任何可选发运前调理之前，离开保藏和保持过程的质量。

- 选定流：Provisionally preserved fruit or nut intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量输出质量，并分别识别保留的保藏介质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_route`

##### 废物流

###### 废保藏液或废水（`spent_preservation_liquid`）

按组成和去向分别记录废盐水、含硫水、其他废保藏溶液、冲洗液和废水。

- 选定流：Declared spent preservation liquid or wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放或转移质量，扣除并记录回用和保留部分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定废液筛查范围；用一个代表性生产季的路线特定液体质量平衡和排放记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg preserved intermediate output
  - 基准：每 kg 保藏中间产品输出的废液或废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏废次品（`preservation_rejects`）

按去向记录处理或保持期间移除的产品，包括腐坏和不合格物料。

- 选定流：Preservation rejects
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量废次品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 数量范围：暂定保藏损失筛查范围；取得至少 10 个代表性批次或一个完整生产季的经评审产品和路线特定损失记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg preserved intermediate output
  - 基准：每 kg 保藏中间产品输出的保藏废次品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 路线特定直接大气排放（`direct_preservation_emissions`）

在跨越至环境的点记录实测或计算的直接排放，适用时包括二氧化硫；不得把保藏剂投入等同于排放。

- 选定流：Declared direct preservation emission to air
- 流属性/单位：Mass / kg
- 数量规则：按具体物种实测，或根据采集的保藏剂投入、回收、残留、废物流和质量平衡记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定排放比例筛查范围；在比较或发布关键用途前，用路线特定监测或经评审质量平衡替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg corresponding preservation agent input
  - 基准：每 kg 对应供应状态保藏剂投入的直接排放质量；各排放物种分别评估
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：发运前沥液、漂洗或介质调整（`predispatch_conditioning`）

#### 输入

##### 产品流

###### 进入调理的临时保藏产品（`conditioning_product_input`）

记录转入调理的保藏产品，不得把其重新定义为可直接食用产品。

- 选定流：Provisionally preserved fruit or nut intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`

###### 调理用水（`conditioning_water`）

仅在生产者发运前实际执行漂洗或调整时记录用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：分配至调理产品的计量补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 调理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定调理用水筛查范围；用一个代表性生产季的产品和路线特定计量记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg conditioned output
  - 基准：每 kg 调理后输出的调理补水量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理后的临时保藏产品（`conditioned_product`）

记录调理后质量及其仍非供直接食用的状态。

- 选定流：Conditioned provisionally preserved fruit or nut
- 流属性/单位：Mass / kg
- 数量规则：计量调理后输出质量和保留介质状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`

##### 废物流

###### 沥出液或漂洗液（`drained_conditioning_liquid`）

按路线、组成和去向分别记录沥出介质和漂洗液。

- 选定流：Declared drained preservation medium or rinse wastewater
- 流属性/单位：Mass / kg
- 数量规则：扣除回收和回用部分后的计量沥出或排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 调理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定沥出液筛查范围；用一个代表性生产季的路线特定质量平衡和排放记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg conditioned output
  - 基准：每 kg 调理后输出的沥出液或漂洗液
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：包装与生产者工厂门口发运（`packaging_dispatch`）

#### 输入

##### 产品流

###### 进入包装的产品（`packaging_product_input`）

记录从保藏过程或有条件调理过程进入包装的保藏产品。

- 选定流：Provisionally preserved fruit or nut before packaging
- 流属性/单位：Mass / kg
- 数量规则：采用与参考流一致的声明质量基准计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

###### 初级包装（`primary_packaging`）

按材料和质量记录各容器、内衬、封口、密封件和其他产品接触包装部件。

- 选定流：Declared primary packaging material
- 流属性/单位：Mass / kg
- 数量规则：部件数量乘以实测部件质量，再除以可售参考产品质量；可重复使用包装采用有记录的周转次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定初级包装筛查范围；在比较或发布关键用途前，用产品特定包装物料清单和实测部件质量替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：按可重复使用次数分配后，每 kg 参考产品供应的初级包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 次级和三级包装（`secondary_tertiary_packaging`）

按材料和质量记录纸箱、捆带、缠绕膜、托盘和其他发运包装。

- 选定流：Declared secondary or tertiary packaging material
- 流属性/单位：Mass / kg
- 数量规则：按发运参考产品分配实测或物料清单包装数量；可重复使用物品采用有记录的周转次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定次级/三级包装筛查范围；用发运特定包装记录和可重复使用次数证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg reference product
  - 基准：每 kg 参考产品的次级和三级包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考临时保藏产品（`reference_product_output`）

这是生产者工厂门口唯一的参考产品产出。

- 选定流：Fruits and nuts, provisionally preserved, not for immediate consumption `70b546f4-bfbc-4e64-a70d-4ff57cedcc6d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按声明参考质量基准固定归一化输出 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 数量范围：参考流身份检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每参考流的参考产品输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 场内产生的包装废物（`packaging_waste`）

按材料和去向记录发运前产生的破损、修整或废弃包装材料。

- 选定流：Declared packaging waste
- 流属性/单位：Mass / kg
- 数量规则：按包装材料和去向计量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 数量范围：暂定场内包装废物筛查范围；用覆盖一个代表性生产季的产品线废物记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg reference product
  - 基准：每 kg 参考产品的场内包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：场内残余物或废水处理（`onsite_residual_treatment`）

#### 输入

##### 产品流

###### 处理公用工程和药剂（`treatment_inputs`）

纳入场内处理时，记录具名电力、燃料、水和处理药剂。

- 选定流：Declared treatment utility or reagent
- 流属性/单位：各投入的原始流属性和单位
- 数量规则：分配至相关残余物流和批次的计量处理投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 或 m3 处理残余物流，并换算至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`

##### 废物流

###### 进入场内处理的残余物流（`onsite_treatment_feed`）

记录进入场内处理的每项废次品、废介质或废水；不得在处理前将同一内部转移重复计为系统边界产出。

- 选定流：Declared residual or wastewater stream
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按物流计量转入场内处理的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 数量范围：暂定处理进料筛查范围；用一个代表性生产季的路线特定处理入口记录和质量平衡替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg reference product
  - 基准：每 kg 参考产品送场内处理的残余物流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理污泥和其他处理废物（`treatment_waste`）

按组成和去向记录处理污泥及其他残余物。

- 选定流：Declared treatment sludge or waste
- 流属性/单位：Mass / kg
- 数量规则：计量湿质量和干质量并声明含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 数量范围：暂定处理废物筛查范围；用一个代表性生产季的处理技术特定污泥和残余物记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg reference product
  - 基准：每 kg 参考产品的湿处理废物，并声明含水基准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后排放和直接处理排放（`treatment_emissions`）

在处理后跨越环境边界的点，按水、气或土壤环境介质记录物种特定排放。

- 选定流：Declared elementary flow from on-site treatment
- 流属性/单位：Mass / kg
- 数量规则：实测负荷，或实测浓度乘以实测排放量；各基本流和环境介质分别计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定处理排放筛查范围；在比较或发布关键用途前，用物种和处理技术特定监测数据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg residual stream treated
  - 基准：每 kg 对应已处理残余物流的排放物种质量；各物种分别评估
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有多功能前景过程 | 可行时，通过分别计量和细分路线、批次、保持、调理、包装和处理作业来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | 无法细分的共享作业 | 使用有记录的因果物理关系进行共享负荷分配，例如实测质量吞吐量、容器占用时间、泵送时间或处理负荷；所选关系应代表资源使用或排放的驱动因素。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 缺少可辩护物理关系的共享作业 | 仅将经济分配作为有记录的后备方法，记录价格、币种、参考期和敏感性；不得用其将废物重新归类为共产品。 | `eu-pef-2021-2279` |
| `allocation_recovered_material` | 废次品、回收介质和回收包装 | 仅当产出有明确预期用途、有接收使用者或市场，并按适用司法管辖规则不属于废物时，才按共产品处理；否则按废物建模并链接处理。 | `eu-pef-2021-2279` |
| `allocation_route_separation` | 盐水、SO2 或亚硫酸盐、其他及组合路线 | 不得把不同保藏路线的负荷平均成一个默认配方。多路线设施应报告路线特定清单，或披露生产量加权汇总及其路线份额。 | `unsd-cpc-3-0-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass` | `raw_receiving_preparation` | 接收、合格和拒收产品质量 | 地磅单和批次记录 | batch_id; product identity; supplier; origin; receipt date; gross mass; tare; accepted mass; reject mass; reject destination; preparation state | 经校准衡器并与批次台账核对 | kg | 每批 | 代表性生产季和声明参考期 | 范围内所有设施和生产线 | 按批次和产品求和，并归一化至可售参考产品 | 校准记录；签字批次核对；完整性检查 |
| `cp_preparation_water` | `raw_receiving_preparation` | 准备补水、回用水和排水 | 水表和批次日志 | meter_id; opening and closing readings; batch_id; make-up water; recirculated water; discharge water; allocation driver | 专用水表或经验证水量平衡 | kg or m3 | 每批或每班 | 代表性生产季和声明参考期 | 范围内每条准备生产线 | 按实测批次用水分配；使用实测或有记录密度换算体积 | 水表校准；水量平衡；异常日志 |
| `cp_preservation_route` | `temporary_preservation_holding` | 产品、介质、保藏剂、路线条件和保藏后产出 | 批次配方、检验、容器和保持记录 | batch_id; product identity; route_id; ordered route stages; vessel_id; input and output mass; water; each agent name; formulation; purity; charge; replenishment; recovered amount; retained amount; concentration; contact time; holding duration; temperature; other controlled condition | 经校准衡器、投配记录、浓度或残留分析及容器日志 | kg; concentration unit; h; °C as applicable | 每批及每次投加或调整 | 代表性生产季和声明参考期 | 范围内每个保藏容器和路线 | 保留路线特定记录；按保藏后产出计算；不得混合未使用路线行 | 衡器和投配校准；供应商检验；实验室结果；签字路线记录 |
| `cp_utilities` | `temporary_preservation_holding` | 电力、燃料和外购热 | 电表、发票和设备运行记录 | meter_id; fuel_type; native_quantity; energy_content; opening and closing readings; runtime; batch_id; allocation driver | 优先分表；否则基于设施记录采用有书面依据的工程分配 | kWh; MJ; native fuel unit | 连续、每批、每班或发票期间 | 至少一个代表性生产季和声明参考期 | 所有纳入的保藏和保持设备 | 使用因果驱动因素分配并换算至参考流 | 仪表校准；发票核对；分配工作表 |
| `cp_waste_emissions` | `temporary_preservation_holding` | 废液、废次品、处理进料、处理废物和直接排放 | 称重单、流量计、实验室分析、转移联单和排放记录 | batch_id; stream_id; route_id; mass or volume; composition; concentration; pH; temperature; pollutant species; compartment; recovery; destination; treatment; moisture basis | 直接测量，或根据实测活动数据与经评审因子或质量平衡计算 | kg; m3; mg/L or other analyte unit | 每批或每次排放事件；要求时连续 | 代表性生产季和声明参考期 | 所有纳入的排放、排水和处理点 | 计算物种特定负荷；防止内部处理转移重复计量 | 仪表校准；实验室报告；废物联单；质量平衡；监测记录 |
| `cp_conditioning` | `predispatch_conditioning` | 产品转移、调理用水、沥出介质和调理后产出 | 批次、水表和称重记录 | batch_id; route_id; input mass; water; recovered medium; drained medium; discharge; output mass; retained medium; continued further-processing designation | 经校准衡器、水表和批次平衡 | kg or m3 | 每个调理批次 | 代表性生产季和声明参考期 | 范围内每条调理生产线 | 归一化至调理后产出和参考流；保留路线身份 | 校准记录；批次质量平衡；去向记录 |
| `cp_packaging` | `packaging_dispatch` | 产品、包装材料、可重复使用次数和包装废物 | 包装物料表、部件称重、批次及发运记录 | batch_id; product net mass; declared mass basis; component_id; material; component mass; count; reusable trip count; waste mass; shipment_id | 经校准衡器、抽样核实的供应商规范和包装领用记录 | kg; count; trips | 每种包装形式和代表性发运 | 代表性生产季和声明参考期 | 范围内所有包装形式和发运点 | 部件质量乘数量再除以参考产品质量；可重复使用物品除以经验证周转次数 | 包装物料表；称重记录；供应商规范；周转日志；发运核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 批次归属数量 / 按声明包装净含量或沥干基准计的可售参考产品质量。包装绝不计入分母。 | batch-attributed amount; saleable reference product mass; declared mass basis | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_product_yield` | 接收、保藏和调理 | 得率 = 声明过程的实测可售产出质量 / 实测来料产品质量；另行核对保留介质、废次品、样品和未解释差异。 | input mass; output mass; retained medium; rejects; samples | 过程得率和质量平衡闭合 | `eu-fdm-bat-2019-2031` |
| `calc_active_agent` | 二氧化硫、亚硫酸盐、盐和其他配制保藏剂 | 活性成分量 = 配方质量 × 实测或供应商认证有效成分比例；供应状态数量保留为独立清单值。 | formulation mass; active fraction; assay basis | 活性保藏剂量和供应状态量 |  |
| `calc_liquid_load` | 废水和废介质 | 污染物负荷 = 实测液体数量 × 实测浓度，并记录密度和单位换算；不得把一条路线的组成套用于另一条路线。 | liquid mass or volume; density; species concentration; route_id | 按物流和环境介质的物种特定负荷 | `eu-fdm-bat-2019-2031` |
| `calc_packaging_amount` | 包装 | 包装数量 = 部件质量 × 部件数量 / 可售参考产品质量；仅在研究方法要求周转分配时，才将可重复使用部件负荷除以经验证寿命周转次数。 | component mass; count; trip count; reference product mass | 每 kg 参考产品的 kg 包装 | `eu-pef-2021-2279` |
| `calc_shared_burden` | 共享设备和处理 | 采用第 7 节分配层级，并保留实测或计算驱动因素、路线份额和敏感性记录。 | shared burden; physical driver; route share; economic fallback data if used | 路线和产品归属负荷 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 将声明产品与本类别匹配，保留准确参考 UUID，并声明全部必需限定信息。 | 产品规范；批次记录；参考流记录 |
| `dq_route_specificity` | 保藏清单 | 记录应识别一种主要路线或有顺序的组合路线，不得把盐、SO2 或亚硫酸盐和其他保藏剂行默认同时填入同一通用配方。 | 路线单；批次配方；保藏剂领用记录；容器日志 |
| `dq_temporal` | 前景活动数据 | 覆盖代表性生产季和声明参考期，并在显著时纳入季节或产品切换变异。 | 有日期边界的批次清单；生产日历；覆盖率计算 |
| `dq_completeness` | 质量、水、能源、废物和排放 | 核对产品、介质、水、保藏剂、废物和保留库存的进出；解释排除项和未解决的平衡差异。 | 质量和水量平衡；仪表核对；废物联单；异常日志 |
| `dq_measurement` | 实测值 | 使用经校准仪器或有记录的供应商资料，并保留单位、检出限、采样方法和换算。 | 校准证书；实验室报告；发票；换算工作表 |
| `dq_estimates` | 所有 reasoned_estimate 范围 | 标为 reasoned_estimate 的范围仅作为暂定筛查或默认值；达到声明的产品、路线、设施或生产季特定触发条件后必须替换。 | 估算登记；替换记录；经评审来源或前景数据 |
| `dq_source_limit` | Codex、UNECE、EU PEF 和 EU BAT 的使用 | 每项来源仅在其范围内使用：不得将直接食用腌渍产品要求、产品特定商业标准、法律门槛或行业绩效水平移用于本整个类别。 | 来源适用性评估；有记录的排除和假设 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 必须为 `70b546f4-bfbc-4e64-a70d-4ff57cedcc6d`，Mass 流属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，Units of mass UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位必须为 kg。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 缺少任何必需限定信息时校验失败，包括路线标识、质量基准、介质状态、保持时间、拟进行的下一加工步骤或包装系统。 | `unsd-cpc-3-0-2025` |
| `validate_not_immediate_consumption` | 产品范围 | 数据集必须说明产品仍拟继续加工且不供直接食用；否则应选择其他产品类别。 | `unsd-cpc-3-0-2025`; `codex-cxs-260-2007` |
| `validate_route_exclusivity` | 保藏清单 | 单一路线数据集只能填报适用路线的保藏剂行。组合路线应声明有顺序的阶段并分开活动数据；混合的通用盐/SO2/其他配方无效。 | `unsd-cpc-3-0-2025` |
| `validate_reference_mass` | 质量归一化 | 按声明包装净含量或沥干基准计的参考产出必须等于 1 kg；包装不计入，保留介质的计入方式必须与声明一致。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_inventory_balance` | 前景清单 | 检查产品和保藏介质质量平衡、显著时的水量平衡、能源覆盖、废次品、废液、处理转移和路线相关直接排放；未解释差异应披露并评审。 | `eu-fdm-bat-2019-2031` |
| `validate_packaging` | 包装 | 生产者关口表示的每种包装形式均应具备包装材料、质量、部件数量、可重复使用次数基准和场内包装废物记录。 | `eu-pef-2021-2279` |
| `validate_estimate_replacement` | 推理估算 | 每项 reasoned_estimate 应保留暂定标签和替换触发条件；不得表述为有来源支持的典型范围或允许范围。 |  |
| `validate_source_applicability` | 外部标准和指南 | 若未分别证明具体产品和设施的适用性，则不得使用 Codex 直接食用腌渍产品的组成或 pH 规则、产品特定 UNECE 标准或 EU BAT 绩效水平。 | `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明水果或坚果及其一种实际临时保藏路线在生产者工厂门口的前景生产数据集 |
| downstream_use | `secondary_dataset`; 在代表性、来源适用性、估算替换和数据质量评审后可作 `background_dataset` |
| allowed_use | 对拟继续加工的临时保藏水果或坚果进行产品、路线、地理、技术和时间代表性建模；仅在披露路线份额和分配时汇总 |
| excluded_use | 即食腌渍或罐藏产品；鲜品、冷冻品、简单干制品或糖渍品；未披露的路线混合；消费者使用；下游最终加工；基于未解决 reasoned_estimate 的比较声明 |
| required_metadata | 规范 PCR id；产品和商品形态；Tiangong 参考流 UUID；路线及阶段顺序；保藏剂身份、配方和浓度；质量基准；保留介质状态；保持时间和条件；拟进行的下一加工步骤；包装；设施和地理范围；参考期；分配；数据来源；估算登记 |
| required_quality_disclosure | 前景覆盖；仪表和衡器校准；批次和生产季覆盖；质量和水量平衡；分配基准；来源适用性；路线份额；处理去向；未解决 UUID；每项 reasoned_estimate 及其替换状态 |
| update_trigger | 水果或坚果、商品形态、保藏路线或保藏剂、配方、设备、保持条件、质量基准、保留介质、包装、处理、设施、地理范围、分配、法规或来源适用性变化，或取得可替换 reasoned_estimate 的经评审证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类 3.0 版解释性说明》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | CPC 21496 类别身份、临时保藏和后续加工边界及排除项；不提供路线配方或定量因子 |
| `codex-cxs-260-2007` | 标准（`standard`） | Codex Alimentarius，CXS 260-2007《腌渍水果和蔬菜标准》，2007 年通过、截至 2023 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+260-2007%2FCXS_260e.pdf（检索日期 2026-08-11） | 适用性限制：该标准涵盖直接食用腌渍产品并排除拟继续加工产品；其组成、pH、沥干重和添加剂条款不在本 PCR 中通用化 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会，Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 功能单位和参考流一致性、生命周期清单完整性、包装、多功能层级、数据采集、数据质量及下游 EF 使用 |
| `eu-fdm-bat-2019-2031` | 官方指南（`official_guidance`） | 欧盟委员会，Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，CELEX 32019D2031，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-11） | 水、能源、原料、废水、废气、残余物和处理的通用过程图与监测覆盖；其法律适用门槛和行业绩效水平不通用于本 PCR |

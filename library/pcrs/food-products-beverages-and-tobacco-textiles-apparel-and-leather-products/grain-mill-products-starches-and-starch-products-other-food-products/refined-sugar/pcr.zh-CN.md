---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-sugar
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 精制糖

## 1. 范围与适用性

本 PCR 适用于以甘蔗或甜菜原料制造精制蔗糖、并在声明的精炼厂或糖厂大门交付的前景数据包。覆盖未添加香味和着色物质的精制结晶糖，包括白砂糖、绵白糖、精制红糖、精制糖粉以及其他散装或包装等级，但数据包必须声明具体产品规格。

本 PCR 覆盖路线特定的原料准备、提取或溶糖、按需实施的净化和脱色、蒸发、结晶、离心分离、干燥或调质、散装处理，以及在声明大门包含包装时的包装环节。报告设施运行现场废水处理时应将其纳入；否则应报告废水流及其接收处理服务。

未经进一步精炼而销售的原蔗糖或原甜菜糖、作为主要产品销售的糖蜜、葡萄糖和果糖产品、糖浆、枫糖产品、糖果，以及添加香味或着色物质的精制糖不在本 PCR 范围内。除非声明的研究范围通过独立上游或下游数据集明确纳入，否则农业种植、进厂运输、分销、零售、使用和寿命终结均位于前景门到门清单之外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-sugar |
| classification_refs | CPC 3.0:23520（exact；Refined sugar） |
| covered_products | 来自甘蔗或甜菜、未添加香味或着色物质的精制蔗糖，包括白砂糖、绵白糖、精制红糖、糖粉、方糖、块糖及同等散装或包装精制糖等级 |
| excluded_products | 未进一步精炼的原蔗糖或原甜菜糖；作为主要产品的糖蜜；葡萄糖、果糖、乳糖、糖浆、枫糖产品、糖果；添加香味或着色物质的精制糖 |
| representative_product | 以 UUID 支撑的 Soft white sugar 作为精制糖代表流；每个数据包仍须声明实际精制糖子型和规格 |
| production_route | 甘蔗原糖精炼路线或一体化甜菜制糖路线，并识别声明的起始原料和所有纳入的精炼阶段 |
| market_state | 精炼厂/糖厂大门处的干燥或经调质的精制蔗糖；按声明为散装或包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在精炼厂或糖厂大门提供声明食品配料甜味功能的精制蔗糖 |
| How much | 1,000 kg 净精制糖，不含包装 |
| How well | 符合声明的精制糖子型和适用产品规格；对于以 UUID 支撑的绵白糖代表产品，应声明蔗糖加还原糖含量、水分或干燥失重、色度和添加剂 |
| How long or cycle | 报告期所代表的一个生产周期；本中间食品不赋予使用时长功能 |
| reference_flow_link | `crystallization_finishing.refined_sugar_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 声明大门处 1,000 kg 净精制糖 |
| 参考产品流 | Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精制糖子型；甘蔗、甜菜或混合来源；生产路线；起始原料状态；蔗糖含量或旋光度规格；水分或干燥失重；色度等级；添加剂状态；包装纳入状态；工厂大门；地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。Codex CXS 212-1999 提供产品描述和质量语境；若当地法规或客户规格更严格，应识别并采用该规格。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考精制糖 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1,000 kg 净糖产品；排除包装质量，并将包装投入单独报告。 |
| `product_quality_basis` | 参考精制糖质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明组成结果采用收到状态还是干基，并保留试验方法、取样日期及所代表的批次或生产周期。 |
| `utility_conversion` | 电力和热能投入 | 所选公用工程流的 Energy 属性 | 电力用 kWh；燃料、热和蒸汽用 MJ | 保留计量单位和换算因子；不得将蒸汽、燃料和电力合并为一个无差别能源流。 |
| `water_accounting` | 水投入、回用水、冷凝水和废水 | 所选流的 Volume 或 Mass 属性 | m3 或 kg | 分别报告取水、购水、内部回用、冷凝水回收和排放；内部循环不得重复计作新的技术圈投入。 |
| `co_product_mass` | 糖蜜、甜菜粕、滤泥及其他共产品或残余物 | 所选流的 Mass 属性 | kg | 对每项产出采用一致的湿基或干基，并在水分影响质量平衡或分配时予以声明。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 糖厂接收的甜菜、精炼厂接收的原蔗糖/原甜菜糖，或进入首个纳入前景操作且可追溯的中间糖液 |
| starting_condition_role | 进入精制糖制造前景系统的上游交接点 |
| product_classification_scope | 本 PCR 经审查语义范围内的精制蔗糖产品，不依赖任何单一分类代码 |
| recursive_input_rule | 同类精制糖投入应作为具有自身数据集的上游产品投入记录，不得在当前前景过程中递归展开。 |
| upstream_dataset_requirement | 每个被排除的上游阶段都必须以与声明原料、来源、技术、地理范围及交接状态相容的数据集表示。 |
| disclosure | 声明起始原料、纳入和排除阶段、截断、内部循环、公用工程边界、包装边界、废水去向、地理范围和报告期。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | 前景制造 | 纳入声明起始状态至声明工厂大门之间的所有精炼操作，包括公用工程、过程助剂、共产品、废物、废水和直接排放。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `boundary_02` | 过程完整性 | 维护工艺流程图以及原料、水、能源、废水和废气流清单，使其来源和接收处理步骤可追溯。 | `eu-fdm-bat-2019-2031` |
| `boundary_03` | 上下游连接 | 对排除的原料生产、运输、分销、使用和寿命终结阶段使用独立且相容的数据集；不得暗示其负荷为零。 | `eu-pef-2021-2279` |
| `boundary_04` | 包装 | 仅在包装随参考产品一同在声明大门交付时纳入初级、次级和三级包装；否则声明排除。 | `eu-pef-2021-2279` |
| `boundary_05` | 截断 | 报告并论证每项排除的物料或能量流；不得仅因难以计量而省略已知具有环境相关性的投入、共产品、排放和废物。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | 原料准备和提取或溶糖 | conditional | 当前景边界内接收甜菜或原糖，而非净化糖汁或糖浆时必需 | 制备可追溯、用于净化的糖液 | kg 预制糖液 |
| `purification_concentration` | 净化、脱色、过滤和浓缩 | required | 始终必需；仅当声明的进料中间体能证明相应操作已在上游完成时，路线特定操作方可缺省 | 去除非糖物质并浓缩糖液 | kg 浓缩糖液 |
| `crystallization_finishing` | 结晶、分离、干燥、调质和处理 | required | 始终必需 | 生产精制糖并分离共产品 | 1,000 kg 净精制糖 |
| `packaging` | 包装 | conditional | 包装随产品在声明大门交付时必需 | 包装成品糖并记录包装损耗 | 1,000 kg 已包装净精制糖 |
| `wastewater_treatment` | 现场废水处理 | conditional | 废水在现场处理时必需；否则记录转移至外部处理 | 处理出水并报告残余排放和污泥 | m3 处理废水 |

### 过程：原料准备和提取或溶糖（`feedstock_preparation`）

#### 输入

##### 产品流

###### 路线特定糖原料（`sugar_feedstock`）

记录进入首个前景操作的甜菜、原蔗糖或原甜菜糖，或者其他声明的中间体。投入身份和数量须有接收与库存记录支撑。

- 选定流：路线特定糖原料；选择与声明状态和来源匹配的 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：实测接收并消耗的净原料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 准备用水（`preparation_water`）

记录甜菜清洗和提取或原糖溶解使用的外部供水，扣除内部循环量。

- 选定流：与实际供水来源匹配的工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量或通过平衡计算的外部供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：可替换的暂定准备用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：m3
  - 基准：每 1,000 kg 净精制糖产出；依路线变化且不是符合性限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备用电（`preparation_electricity`）

记录接收、输送、清洗、切片、提取、溶糖及相关泵送在本过程使用的计量电力。

- 选定流：与工厂电压和地理范围匹配的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：分表计量值或经分配的全厂电表平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：可替换的暂定电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 净精制糖产出；依路线变化且不是默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预制糖液（`prepared_sugar_liquor`）

记录送入净化的路线特定糖液，并同时记录固形物或蔗糖浓度及计量基准。

- 选定流：与实际中间状态匹配的预制糖液
- 流属性/单位：Mass / kg
- 数量规则：实测转移量，或用体积和密度计算的罐内质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_liquor`
- 来源：

###### 甜菜粕或可回收准备残余物（`preparation_coproduct`）

将单独利用的甜菜粕或其他有市场用途的残余物记录为共产品；没有产品用途的物料则归为废物。

- 选定流：路线特定的粕或可回收残余物
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，并披露干物质或水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 准备工序拒收物和清洗固体（`preparation_rejects`）

记录离开准备工序的石块、泥土、筛余物、不合格原料及其他废物。

- 选定流：路线特定的准备工序废物
- 流属性/单位：Mass / kg
- 数量规则：实测废物运输量或容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 基本流

### 过程：净化、脱色、过滤和浓缩（`purification_concentration`）

#### 输入

##### 产品流

###### 预制糖液投入（`prepared_liquor_input`）

记录从路线特定准备工序转入的糖液，内部转移不得重复计作外部投入。

- 选定流：与 `prepared_sugar_liquor` 匹配的预制糖液
- 流属性/单位：Mass / kg
- 数量规则：实测转移量或计算的罐内质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_liquor`
- 来源：

###### 净化和脱色助剂（`purification_aids`）

记录实际消耗的石灰、二氧化碳、酸、碱、吸附剂、助滤剂、离子交换再生剂及其他助剂，并在产出数据集中分别建立交换。

- 选定流：与采购材料匹配的化学品特定产品流
- 流属性/单位：Mass / kg
- 数量规则：期初库存加采购量减期末库存，并修正调拨量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 净化和蒸发能源（`purification_energy`）

将电力、燃料、热和蒸汽分别记录。保留计量形式，并对任何现场热电联产系统采用一致核算。

- 选定流：与地理范围和技术匹配的公用工程特定产品流
- 流属性/单位：电力用 Energy / kWh；燃料、热或蒸汽用 Energy / MJ
- 数量规则：计量消耗量或有文件支撑的能源平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：可替换的暂定综合热能筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：8
  - 单位：GJ
  - 基准：每 1,000 kg 净精制糖产出；依技术变化且不是符合性限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 浓缩净化糖液（`concentrated_liquor`）

记录送入结晶的浓缩糖液，包括质量、干物质或可溶性固形物、蔗糖浓度及转移期间。

- 选定流：与路线匹配的浓缩净化糖液
- 流属性/单位：Mass / kg
- 数量规则：实测转移量，或通过体积、密度和浓度记录计算的罐内质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_liquor`
- 来源：

###### 回收冷凝水（`recovered_condensate`）

将作为有用产品输出的冷凝水记为产品流；内部回用仍作为水量平衡中的内部循环记录。

- 选定流：回收工艺冷凝水
- 流属性/单位：Volume / m3
- 数量规则：计量的前景系统外售冷凝水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 滤泥、废吸附剂和净化残余物（`purification_residue`）

分别记录各类残余物，并区分有市场用途的共产品与送往回收、处理或处置的废物。

- 选定流：按实际去向选择残余物特定的废物流或产品流
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，并披露水分或干物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 基本流

### 过程：结晶、分离、干燥、调质和处理（`crystallization_finishing`）

#### 输入

##### 产品流

###### 浓缩糖液投入（`concentrated_liquor_input`）

记录进入结晶的浓缩糖液，并与净化和浓缩过程的产出核对。

- 选定流：与 `concentrated_liquor` 匹配的浓缩净化糖液
- 流属性/单位：Mass / kg
- 数量规则：实测转移量或计算的罐内质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_liquor`
- 来源：

###### 结晶和成品处理能源（`finishing_energy`）

将结晶、离心、干燥、冷却、调质和散装处理使用的电力、燃料、热和蒸汽分别记为公用工程流。

- 选定流：与地理范围和技术匹配的公用工程特定产品流
- 流属性/单位：电力用 Energy / kWh；燃料、热或蒸汽用 Energy / MJ
- 数量规则：计量消耗量或有文件支撑的能源平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精制糖产出（`refined_sugar_output`）

记录声明大门处的合格精制糖。即使使用代表性 Tiangong 流，也必须声明实际产品子型。

- 选定流：Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1,000 kg 净精制糖
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明大门处 1,000 kg 净精制糖
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-212-1999`

###### 糖蜜共产品（`molasses_coproduct`）

当最终糖蜜或其他母液共产品离开前景系统用于有益用途时予以记录。

- 选定流：与甘蔗或甜菜来源和状态匹配的糖蜜产品流
- 流属性/单位：Mass / kg
- 数量规则：实测发运质量，并披露干物质或水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：
- 数量范围：可替换的暂定糖蜜筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：800
  - 单位：kg
  - 基准：每 1,000 kg 净精制糖产出；依路线变化且不是分配因子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不合格糖和捕集粉尘（`offspec_sugar_waste`）

记录作为废物离开产品系统的物料；内部返工糖仍属于内部循环，不得重复计量。

- 选定流：与实际去向匹配的含糖生产废物
- 流属性/单位：Mass / kg
- 数量规则：实测废物运输量或容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 基本流

###### 有组织颗粒物排放（`sugar_particulate_air`）

记录干燥、冷却、输送和处理环节经治理后释放的实测或计算颗粒物；捕集粉尘不得作为基本流排放报告。

- 选定流：与所报告粒径级别匹配的颗粒物基本流
- 流属性/单位：Mass / kg
- 数量规则：实测浓度乘以干烟气流量和运行时间，或采用有文件支撑的场址排放清单
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：包装（`packaging`）

#### 输入

##### 产品流

###### 包装材料（`packaging_materials`）

记录随产品提供的每一种初级、次级和三级包装材料，并在适用时核算可重复使用包装和托盘。

- 选定流：材料特定的包装产品流
- 流属性/单位：Mass / kg，或采用实测质量换算的件数
- 数量规则：包装材料清单减去有文件支撑的可重复使用回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 包装损耗（`packaging_losses`）

记录工厂大门前产生的破损袋、薄膜、纸箱、托盘及其他包装废物。

- 选定流：材料特定的包装废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物发运量或库存核对量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 基本流

### 过程：现场废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理公用工程和化学品（`wastewater_treatment_inputs`）

将现场系统使用的电力、曝气能源、化学品和外购处理材料分别记为产品流。

- 选定流：公用工程和化学品特定的产品流
- 流属性/单位：Energy 或 Mass 属性 / 流特定单位
- 数量规则：归属于糖厂废水的计量消耗量和库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 接收处理的精炼废水（`wastewater_received`）

记录进入现场或外部处理的废水体积及相关污染负荷。

- 选定流：制糖精炼废水
- 流属性/单位：Volume / m3
- 数量规则：计量的处理进水量，并与场址水量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：可替换的暂定废水体积筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：m3
  - 基准：每 1,000 kg 净精制糖产出；依路线变化且不是排放限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥（`treatment_sludge`）

记录送往回收、处理或处置的污泥和分离固体，并报告干物质含量和去向。

- 选定流：与实际分类匹配的废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，并披露干物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：

##### 基本流

###### 处理后出水排放到水体（`treated_effluent`）

记录排放水量及相关污染负荷，包括适用许可和场址清单要求的 COD 或 TOC、总氮、总磷和悬浮物。

- 选定流：物质特定的水体基本流
- 流属性/单位：污染物用 Mass / kg；水量另以 Volume / m3 报告
- 数量规则：实测浓度乘以报告期排放水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净精制糖产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-fdm-bat-2019-2031`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 多产出操作 | 首先通过细分避免分配，或对独立运行的准备、净化、结晶、能源和处理过程分别计量。 | `eu-pef-2021-2279` |
| `allocation_02` | 物理耦合共产品 | 无法细分时，仅在能表示过程变化如何驱动共产品产出的情况下采用经证明的基础物理关系，并记录关系和因子。 | `eu-pef-2021-2279` |
| `allocation_03` | 剩余多功能性 | 若不存在可辩护的物理关系，应采用明确记录的其他关系，通常为基于代表性价格的经济分配，并对重要共产品报告敏感性情景。 | `eu-pef-2021-2279` |
| `allocation_04` | 糖蜜、甜菜粕、滤泥和可回收残余物 | 仅当产出具有有文件支撑的有益用途并离开产品系统时才归为共产品；否则作为废物并承担其处理负荷。 | `eu-pef-2021-2279` |
| `allocation_05` | 内部循环 | 不对内部循环的糖液、糖、水、冷凝水或蒸汽分配负荷；闭合内部平衡，并仅计外部投入和产出。 | `eu-fdm-bat-2019-2031` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `feedstock_preparation`; `purification_concentration` | 原料和过程助剂投入 | 地磅单、发票、库存台账、批记录 | 日期；物料 id；供应商；毛重；皮重；净重；期初库存；采购量；期末库存；相关水分 | 校准秤加库存核对 | kg | 每次接收并按月核对 | 完整报告期 | 所有纳入生产线和仓库 | 汇总净消耗质量，再按合格精制糖产出归一化 | 秤校准；发票和库存核对；缺失记录清单 |
| `cp_water_balance` | 所有纳入过程 | 取水、购水、回用、冷凝水、废水和排放 | 水表和水量平衡记录 | 仪表 id；时间戳；来源或去向；体积；仪表状态；停机估算 | 校准水表加未计量支路的文件化平衡 | m3 | 每日或生产周期合计，并按月核对 | 完整报告期 | 所有纳入水节点 | 外部投入和排放总量扣除有文件支撑的内部循环 | 仪表校准；闭合残差；停机估算记录 |
| `cp_energy_records` | 所有纳入过程 | 电力、燃料、热和蒸汽 | 仪表、发票和能源平衡记录 | 仪表 id；时间戳；能源载体；数量；单位；供应商；低位或高位热值基准；热电联产外送 | 分表、发票或有文件支撑的全厂能源平衡 | kWh；MJ；带换算因子的 kg 或 m3 燃料 | 连续计量或账单周期，并按月核对 | 完整报告期 | 所有纳入生产和公用工程系统 | 各载体分别保留并按精制糖产出归一化 | 仪表校准；发票；换算因子来源；能源平衡闭合 |
| `cp_intermediate_liquor` | `feedstock_preparation`; `purification_concentration`; `crystallization_finishing` | 预制和浓缩糖液转移 | 过程间转移和实验室记录 | 罐 id；批次；质量或体积；密度；温度；干物质或可溶性固形物；蔗糖浓度 | 校准罐或流量测量加实验室试验 | kg；m3；% | 每批次或连续总量 | 完整报告期 | 纳入阶段之间的每个转移点 | 用匹配密度将体积换算为质量，并核对阶段转移 | 仪器校准；实验室方法；批次关联；平衡残差 |
| `cp_output_mass` | 所有纳入过程 | 精制糖、共产品、残余物和废物 | 发运、称量和废物记录 | 产品或废物 id；去向；毛重；皮重；净重；水分或干物质；处置方式 | 校准秤、发运记录和废物联单 | kg | 每批次或发运 | 完整报告期 | 所有纳入产出点 | 按产品身份和去向汇总，并按精制糖产出归一化 | 秤校准；发运或废物文件；水分试验 |
| `cp_direct_emissions` | `crystallization_finishing`; `wastewater_treatment` | 大气和水体排放 | 监测和排放计算记录 | 排口 id；取样时间；浓度；气体或水量；运行小时；方法；检出限；治理状态 | 直接监测或符合许可的计算 | kg 污染物；mg/Nm3；mg/L；m3 | 许可频次并覆盖生产周期 | 报告期内代表性运行条件 | 每个相关排放点 | 浓度乘以实测流量和时间，并披露未检出值处理 | 认可试验报告；流量计校准；许可记录；计算表 |
| `cp_packaging_records` | `packaging` | 包装材料和损耗 | 包装材料清单和核对记录 | 包装代码；材料；件数；单件质量；采购质量；返还件数；废物质量 | 材料清单、采购记录、单件称重和废物核对 | kg；件 | 每个包装规格及月度合计 | 完整报告期 | 随声明产品提供的所有包装 | 件数乘以核实的单件质量，并修正返还和损耗 | 规格；抽样称重记录；采购和废物核对 |
| `cp_treatment_records` | `wastewater_treatment` | 处理投入、污泥和运行数据 | 处理运行和废物记录 | 处理工艺；公用工程或化学品 id；数量；污泥质量；水分；运行时间；旁路 | 仪表、加药记录、实验室记录和废物联单 | 流特定 | 每日或每批次，并按月核对 | 完整报告期 | 服务于纳入操作的现场处理 | 汇总可归属投入和产出；披露共用处理分配 | 仪表和加药校准；实验室 QA；旁路和维护记录 |
| `cp_product_quality` | `crystallization_finishing` | 精制糖规格 | 实验室和产品放行记录 | 批次；子型；旋光度或蔗糖结果；还原糖；水分或干燥失重；色度；灰分；添加剂；试验方法 | 代表性实验室取样和产品放行记录 | 试验特定 | 每批次或有统计依据的混合样 | 数据集代表的全部产品 | 所有成品取样和放行点 | 产量加权结果及按声明规格的合格判定 | 实验室方法；校准；取样方案；放行证书 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 净精制糖质量 = 发运毛重 - 皮重 - 包装质量；排除未离开声明大门的不合格品或返工库存。 | 毛重；皮重；包装质量；产品处置 | kg 合格精制糖 | `codex-cxs-212-1999` |
| `calc_specific_inventory` | 每个外部清单流 | 单位清单量 = 报告期流量 / 报告期合格精制糖净产量 × 1,000 kg。 | 采集流量；净精制糖产出 | 每 1,000 kg 精制糖的流量 | `eu-pef-2021-2279` |
| `calc_liquor_mass` | 中间糖液 | 糖液质量 = 实测体积 × 匹配温度下密度；保留实测浓度和取样基准。 | 体积；密度；温度；浓度 | kg 中间糖液和组成字段 |  |
| `calc_emission_load` | 直接排放 | 排放负荷 = 实测浓度 × 实测干烟气量或废水量，并记录单位换算和运行覆盖。 | 浓度；流量；时间或总体积；未检出规则 | 报告期 kg 污染物 | `eu-fdm-bat-2019-2031` |
| `calc_mass_balance` | 各过程和完整前景系统 | 将外部和过程间质量投入与产品、共产品、废物、排放、库存变化以及可解释的除水或加水核对；调查重要残差。 | 所有含质量投入和产出；库存；水分和固形物数据 | 质量平衡残差及解释 |  |
| `calc_allocation_factor` | 多产出过程 | 仅在采用第 7 节层级后推导分配因子；所有共产品因子在舍入容差内合计为 1，且数据期须与清单一致。 | 细分记录或物理/经济分配驱动量 | 按产出的文件化分配因子 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及所有重要投入/产出 | 保留产品子型、来源、路线、起始状态、规格、所选 Tiangong UUID 及大门身份。 | 产品规格；供应商和发运记录；PCR 内容外的 UUID 查询记录 |
| `dq_temporal` | 前景清单 | 使用一个完整且具有代表性的报告期；覆盖季节性生产、开车、停车和异常期，或披露排除。 | 生产日历；仪表和批次覆盖；排除清单 |
| `dq_technology` | 前景清单 | 描述实际使用的提取或溶糖、净化、脱色、蒸发、结晶、干燥、能源系统、粉尘治理和废水处理技术。 | 工艺流程图；设备清单；运行记录 |
| `dq_geography` | 公用工程和上游连接 | 使用能代表工厂、原料来源、电网、燃料、水源、处理去向和运输地理范围的数据集。 | 供应商来源；厂址；公用工程合同；数据集元数据 |
| `dq_completeness` | 所有已知投入和产出 | 纳入所有已知原料、水、能源、产品、共产品、排放和废物；披露并论证任何截断。 | 物料、水和能源平衡；排放清单；截断清单 |
| `dq_precision` | 实测和计算值 | 保留足以复现各归一化值的校准、取样、实验室、密度、水分、换算和不确定性证据。 | 校准证书；实验室 QA；计算表；不确定性记录 |
| `dq_consistency` | 双语和多过程数据集 | 在各过程中一致应用湿/干基、净/毛重、报告期、分配方法和内部转移处理。 | 跨过程核对；审查清单；双语 rule_id 检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | PCR 身份 | canonical PCR id、CPC 引用、覆盖产品、排除项和声明产品子型必须存在且彼此一致。 |  |
| `validation_02` | 参考流 | 参考产出必须等于 1,000 kg 净精制糖，使用所选产品流、Mass 和 Units of mass UUID 且不含数据集版本，并声明全部必需限定信息。 | `codex-cxs-212-1999` |
| `validation_03` | 产品质量 | 产品放行证据必须证明符合声明子型规格；适用时披露纯度或旋光度、水分、色度、添加剂的值和试验基准。 | `codex-cxs-212-1999` |
| `validation_04` | 边界完整性 | 过程图中每个纳入过程必须有匹配清单记录；排除的上游或下游阶段必须具有明确数据集连接或范围披露。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validation_05` | 物料、水和能源平衡 | 过程和平衡应核对内部转移与外部流；必须报告并审查未解释残差、未计量估算和内部循环。 | `eu-fdm-bat-2019-2031` |
| `validation_06` | 多功能性 | 共产品分类和分配必须遵循第 7 节层级；因子在舍入容差内合计为 1，并对重要替代方法进行敏感性测试。 | `eu-pef-2021-2279` |
| `validation_07` | 排放和废物 | 不得遗漏或重复计量废水、有组织大气排放、捕集残余物、污泥、不合格糖及其去向。 | `eu-fdm-bat-2019-2031` |
| `validation_08` | 暂定范围 | 每个 `reasoned_estimate` 范围必须继续标记为可替换，不得覆盖场址采集数据，也不得作为法规、BAT 或符合性限值呈现。 |  |
| `validation_09` | 数据质量 | 必须保留公司特定活动数据和直接基本流的时间、技术、地理、完整性和精度证据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明糖厂或精炼厂大门处的前景精制糖生产数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要路线、地理范围、规格和大门相匹配的精制糖制造数据的产品碳足迹和 LCA 模型 |
| excluded_use | 未经限定地替代原糖、糖浆、葡萄糖或果糖、加味或着色糖、糖果、其他路线或地理范围，或在未连接其他阶段时用作摇篮到坟墓结果 |
| required_metadata | PCR id；产品子型和规格；甘蔗/甜菜来源；起始状态；路线；纳入阶段；工厂大门；地理范围；报告期；技术；公用工程组合；包装范围；共产品处理；分配方法；截断；UUID |
| required_quality_disclosure | 数据覆盖；实测和计算占比；校准和取样证据；物料、水和能源平衡残差；缺失数据；使用的暂定范围；分配敏感性；来源和数据集代表性 |
| update_trigger | 原料来源或状态、产品规格、工艺路线、能源或水系统、治理或处理、包装、分配基准、工厂地理范围或报告期代表性发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-212-1999` | standard | FAO/WHO Codex Alimentarius，CXS 212-1999，Standard for Sugars，修订至 2022 年，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+212-1999%2FCXS_212e.pdf（检索日期 2026-08-10） | 产品边界、精制糖子型描述、组成和质量限定信息及分析语境 |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission，Commission Implementing Decision (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031（检索日期 2026-08-10） | 制糖工艺和环境清单范围；水、能源、废水、废气、监测和处理记录 |
| `eu-pef-2021-2279` | official_guidance | European Commission，Commission Recommendation (EU) 2021/2279，Environmental Footprint methods，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-10） | 功能单位和参考流、系统边界、公司特定清单完整性、数据质量、截断、包装和多功能性层级 |

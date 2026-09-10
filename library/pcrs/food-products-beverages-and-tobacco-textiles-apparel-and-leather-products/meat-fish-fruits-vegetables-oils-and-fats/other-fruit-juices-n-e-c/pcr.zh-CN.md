---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fruit-juices-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类的果汁

## 1. 范围与适用性

本 PCR 适用于归入“其他未另分类的果汁”的未发酵果汁，包括未被五个单列 CPC 子类涵盖的水果品种制成的单一果汁以及混合果汁。直接榨取果汁、由浓缩物复原的果汁和浓缩果汁均可纳入，但所声明产品必须仍属于果汁，并应说明水果种类、浓度状态、可溶性固形物基准、保藏路线、包装形式和储存条件。

橙汁、葡萄柚汁、菠萝汁、葡萄汁和苹果汁在 CPC 中另有单独子类，故不在本 PCR 范围内。蔬菜汁、水果花蜜、作为果泥销售的水果泥、发酵或含酒精饮料、不符合适用果汁身份要求的调味饮料，以及下游零售或消费者使用均不纳入。前景边界始于果汁加工场址接收的水果、果汁或浓缩物，止于工厂门处所声明的散装或包装果汁。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fruit-juices-n-e-c |
| classification_refs | CPC 3.0：21439，其他未另分类的果汁 |
| covered_products | 柠檬、青柠、柑橘、杏、黑加仑、樱桃、椰子、梨、枣、无花果、覆盆子、番石榴、醋栗、芒果、桃、西梅、罗望子、荔枝、百香果及其他未单独分类的果汁；混合果汁；声明为直接榨取、浓缩物复原或浓缩状态的产品。 |
| excluded_products | 橙汁；葡萄柚汁；菠萝汁；葡萄汁；苹果汁；蔬菜汁；水果花蜜；作为果泥销售的水果泥；发酵或含酒精饮料；非果汁调味饮料。 |
| representative_product | 采用所声明可销售工厂门包装的未发酵单倍浓度百香果汁。 |
| production_route | 水果接收、清洗与预处理；以水果为起始原料时的机械破碎和提取；可选的酶处理、澄清、香气回收、浓缩或复原；稳定化；灌装与包装；条件性冷藏；清洁消毒和废水管理。 |
| market_state | 散装或包装；单倍浓度或浓缩；直接榨取或复原；清汁或浑汁；常温稳定、冷藏或冷冻，以声明为准。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 提供什么 | 提供保留所声明水果或水果混合物基本物理、化学、感官和营养特征的未发酵其他果汁。 |
| 提供多少 | 果汁加工场址工厂门处 1,000 kg 可销售其他果汁。 |
| 达到何种质量 | 符合所声明的水果种类或混合物、生产路线、浓度状态、可溶性固形物值、清澈度、保藏处理、包装形式和储存条件。 |
| 时间或周期 | 在工厂门交付的一个生产批次；不指定使用阶段持续时间。 |
| reference_flow_link | 参考产品输出行为 `stabilization_packaging` 中的 `reference_product_other_fruit_juice`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 百香果汁 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水果种类及植物学名称或通用名称；按质量计的混合组成；直接榨取、复原或浓缩路线；以 °Brix 表示的实测可溶性固形物及测量温度；清汁或浑汁；是否复配果肉或果粒；保藏处理；包装形式和物料清单；常温稳定、冷藏或冷冻状态；生产地域；参考期 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程注释、参考流注释、产品说明或等效字段中声明。缺少任何必需限定信息时，参考流均视为不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量维度清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` | kg | 将可销售参考产品归一化至 1,000 kg。水果、果汁、配料、包装、残余物、废物、制冷剂和直接质量排放均保留实测湿质量。 |
| `soluble_solids_declaration` | 参考产品及复原或浓缩控制 | 可溶性固形物 | °Brix | 记录实测 °Brix、测量温度、分析方法、水果种类，以及果汁属于直接榨取、复原还是浓缩；不得以通用类别值替代特定水果品种的规格。 |
| `energy_conversion` | 电力、蒸汽和燃料 | 能量 | kWh 或 MJ | 保留发票或计量所用单位及换算因子；不得将电力、外购蒸汽和天然气合并为一个能源行。 |
| `water_measurement` | 过程用水、复原用水和清洁消毒用水 | 体积 | m3 | 按过程水表、批次记录或共享水表的合理分配记录每项用水，并将循环水与外来水分开识别。 |
| `effluent_load_measurement` | 直接水排放 | 质量 | kg | 使用相匹配的出水体积和浓度记录计算各项污染物负荷；不得以废水体积替代单项污染物负荷。 |

## 5. 系统边界

前景边界遵循以下规则：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 加工场址 | 纳入接收、清洗、预处理、适用时的提取、配方调制、澄清、适用时的浓缩或复原、稳定化、包装、现场储存、清洁消毒、现场废水处理，以及由加工场址控制的全部直接排放。 | `conidi-2020-fruit-juice-membranes`; `fao-2001-fruit-juice-processing`; `codex-cxc-1-1969` |
| `boundary_upstream_links` | 外购投入 | 将水果、果汁、浓缩物、配料、加工助剂、包装组件、电力、蒸汽、燃料、制冷剂、水和场外废物处理服务保留为明确的产品流或废物流交换，并链接至适当的上游数据集。 | `eu-pef-2021-2279` |
| `boundary_no_silent_cutoff` | 清单完整性 | 不得仅因数量较小而省略任何物料、能源、废物或直接排放交换；任何排除均须依据研究适用的截断规则进行量化、论证和披露。 | `eu-pef-2021-2279` |
| `boundary_distribution` | 下游边界 | 默认前景数据集止于工厂门。配送、零售制冷、消费者储存、消费和包装寿命终止须通过单独声明的下游情景处理。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工商接收的合格水果，或为调配、复原或进一步加工而接收的外购果汁或果汁浓缩物。 |
| starting_condition_role | 前景入口；水果种植及外购果汁或浓缩物的生产属于上游。 |
| product_classification_scope | 其他未另分类的果汁，包括所列小宗水果果汁和混合果汁；排除五类单独分类的果汁及非果汁产品。 |
| recursive_input_rule | 属于同一产品类别的外购果汁或浓缩物仍作为明确的产品投入；不得在本前景过程中递归重建其上游生产。 |
| upstream_dataset_requirement | 每种外购水果、果汁、浓缩物、配料、加工助剂、公用工程、制冷剂、包装组件和场外处理服务均须链接至在地域和技术上具有代表性的上游数据集。 |
| disclosure | 声明水果种类及混合物、起始物料、浓度状态、生产路线、保藏、包装、储存、场址地域、参考期、排除项、分配方法，以及残余物属于产品还是废物。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fruit_receiving_preparation` | 水果接收与预处理 | 条件纳入 | 当前景场址接收整果或预处理水果时必须纳入。 | 前景预处理 | 转入提取工序的预处理水果 kg |
| `juice_extraction_separation` | 果汁提取与初步分离 | 条件纳入 | 当前景场址以机械方式从水果提取果汁时必须纳入。 | 前景转化 | 转入精制工序的原汁 kg |
| `formulation_finishing` | 配方调制、澄清、浓缩或复原 | 必须纳入 | 至少纳入所声明生产路线实际采用的操作。 | 前景精制 | 转入包装工序的稳定化散装果汁 kg |
| `stabilization_packaging` | 稳定化、灌装与包装 | 必须纳入 | 纳入所声明的热处理、非热处理或无菌稳定化，以及实际散装或零售包装路线。 | 前景生产 | 可销售参考产品 kg |
| `cold_storage` | 冷藏或冷冻储存 | 条件纳入 | 所声明市场状态在工厂门前采用温控储存时必须纳入。 | 前景储存 | 从储存放行的包装果汁 kg |
| `sanitation_wastewater` | 清洁消毒与废水管理 | 必须纳入 | 纳入全部范围内操作的清洗和消毒，并在存在现场废水处理时将其纳入。 | 前景辅助 | 参考期内分配至范围内生产的数量 |

### 过程：水果接收与预处理 (`fruit_receiving_preparation`)

#### 输入

##### 产品流

###### 接收的合格水果 (`fruit_received`)

生产混合果汁时，每种水果应分别作为独立交换记录。

- 选定流： 新鲜百香果
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 现场接收时、清洗前计量的合格水果质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_receiving_batch_balance`
- 来源： `codex-cxs-247-2005`; `fao-2001-fruit-juice-processing`

###### 水果清洗用水 (`fruit_wash_water`)

记录直接用于清洗水果的外来水。

- 选定流： 饮用水
- 流属性/单位： 体积 / m3
- 数量规则： 经流量计计量或按批次记录的外来清洗水，扣除单独计量的循环水
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_receiving_batch_balance`
- 来源： `fao-2001-fruit-juice-processing`

###### 水果清洗用次氯酸钠 (`fruit_wash_sodium_hypochlorite`)

仅在水果清洗水中实际投加次氯酸钠时记录该消毒剂。

- 选定流： 次氯酸钠
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 采购的有效产品质量，并与投加记录核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_receiving_batch_balance`
- 来源： `fao-2001-fruit-juice-processing`

###### 接收与预处理用电 (`receiving_electricity`)

记录分配给本过程的输送、清洗、分选、修整、去皮、去核和破碎用电。

- 选定流： 电力，电网组合
- 流属性/单位： 能量 / kWh
- 数量规则： 分表计量电量，或依据共享电表记录进行有文件支持的分配
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_receiving_batch_balance`
- 来源： `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理水果 (`prepared_fruit`)

记录清洗并完成物理预处理后转入提取工序的水果。

- 选定流： 经预处理的百香果
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量的转移质量或批次质量平衡
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_receiving_batch_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

##### 废物流

###### 剔除水果 (`rejected_fruit`)

记录在接收、分选、修整、去皮、去核或预处理过程中被剔除并作为废物离场的水果。

- 选定流： 废弃百香果
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按去向计量的废物质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_receiving_batch_balance`
- 来源： `esparza-2020-fruit-vegetable-waste`

###### 水果清洗废水 (`fruit_wash_wastewater`)

记录离开本过程并进入现场内或场外处理的清洗水。

- 选定流： 水果清洗废水
- 流属性/单位： 体积 / m3
- 数量规则： 计量排放量，或分配至水果清洗的水平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_receiving_batch_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

##### 基本流

### 过程：果汁提取与初步分离 (`juice_extraction_separation`)

#### 输入

##### 产品流

###### 预处理水果投入 (`prepared_fruit_input`)

记录进入磨碎、破碎、研磨、制浆或压榨工序的预处理水果。

- 选定流： 经预处理的百香果
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 从预处理工序转入的计量质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

###### 果胶酶投入 (`pectinase_input`)

仅在果胶酶实际用于浸渍、液化、提取或澄清时记录。

- 选定流： 果胶酶制剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 批次投加记录，并与库存变动核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `codex-cxs-247-2005`; `conidi-2020-fruit-juice-membranes`

###### 提取用水 (`extraction_water`)

仅当浸渍或提取期间加入的水构成过程投入时记录。

- 选定流： 饮用水
- 流属性/单位： 体积 / m3
- 数量规则： 经流量计计量或按批次投加的提取用水
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

###### 提取用电 (`extraction_electricity`)

记录磨碎、破碎、制浆、压榨、泵送、离心和初级过滤用电。

- 选定流： 电力，电网组合
- 流属性/单位： 能量 / kWh
- 数量规则： 分表计量电量，或依据共享电表记录进行有文件支持的分配
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 提取原汁 (`raw_juice`)

记录稳定化之前从提取工序转入精制工序的果汁。

- 选定流： 百香果原汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量的转移质量或批次质量平衡
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

###### 回收果香物质 (`recovered_fruit_aroma`)

仅当从同种水果回收的香气物质作为单独管理的共产品或中间产品离开提取工序时记录。

- 选定流： 回收的百香果香气物质
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量的回收质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `codex-cxs-247-2005`; `conidi-2020-fruit-juice-membranes`

###### 果渣共产品 (`fruit_pomace_coproduct`)

仅当果渣被销售或转移用于有文件证明的有益用途、因而不属于废物时使用该产品行。

- 选定流： 百香果果渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按有文件证明的去向计量的湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `esparza-2020-fruit-vegetable-waste`

##### 废物流

###### 果渣废物 (`fruit_pomace_waste`)

当果渣被丢弃或送往废物处理、而非作为共产品转移时使用该废物流行。

- 选定流： 百香果果渣废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `esparza-2020-fruit-vegetable-waste`

###### 提取废水 (`extraction_wastewater`)

记录提取过程中产生的液体废弃物或设备排水；能够单独计量时，应与清洁消毒废水分开。

- 选定流： 果汁提取废水
- 流属性/单位： 体积 / m3
- 数量规则： 计量排放量或过程水平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_extraction_batch_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

##### 基本流

### 过程：配料、澄清、浓缩或复原 (`formulation_finishing`)

#### 输入

##### 产品流

###### 原汁投入 (`raw_juice_input`)

记录进入精制工序的现场提取或外购单倍浓度果汁。

- 选定流： 百香果原汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按水果种类计量的转移或采购质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`

###### 果汁浓缩物 (`fruit_juice_concentrate`)

以浓缩物复原或调配果汁时，按水果种类分别记录每种外购浓缩物。

- 选定流： 百香果浓缩汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 接收质量，并与批次配方记录和实测 °Brix 核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`

###### 复原用水 (`reconstitution_water`)

记录掺入浓缩还原果汁的饮用水。

- 选定流： 饮用水
- 流属性/单位： 体积 / m3
- 数量规则： 按批次投加或经流量计计量并进入产品的水
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`

###### 澄清用膨润土 (`bentonite_clarifier`)

仅在膨润土实际用作澄清剂或助滤剂时记录。

- 选定流： 膨润土
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 批次投加记录，并与库存变动核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`

###### 过滤用硅藻土 (`diatomaceous_earth_filter_aid`)

仅在硅藻土实际用于过滤时记录。

- 选定流： 硅藻土
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 批次投加记录，并与库存变动核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`

###### 精制用电 (`finishing_electricity`)

记录泵送、离心、过滤、膜分离、均质、冷却和控制系统用电。

- 选定流： 电力，电网组合
- 流属性/单位： 能量 / kWh
- 数量规则： 分表计量电量，或依据共享电表记录进行有文件支持的分配
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `eu-pef-2021-2279`

###### 外购蒸汽 (`purchased_steam`)

记录本过程中用于蒸发、加热、巴氏杀菌或清洗供热的外购蒸汽。

- 选定流： 外购蒸汽
- 流属性/单位： 能量 / MJ
- 数量规则： 计量的外购蒸汽；排除已由天然气燃料行表示的现场产汽
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

###### 天然气 (`natural_gas`)

仅在天然气于现场燃烧并为精制工序提供过程热或蒸汽时记录。

- 选定流： 天然气
- 流属性/单位： 能量 / MJ
- 数量规则： 按低位或高位热值计量的燃料，并声明热值基准
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `eu-pef-2021-2279`

###### 精制设备补充制冷剂 R-134a (`finishing_refrigerant_r134a`)

仅当精制设备安装该制冷剂时，记录分配给精制设备的 R-134a 补充量。

- 选定流： 1,1,1,2-四氟乙烷（R-134a）
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 经核对的制冷剂采购量、补充量、回收量和库存变化
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `eu-pef-2021-2279`

###### 精制设备补充氨制冷剂 (`finishing_refrigerant_ammonia`)

仅当安装氨制冷系统时，记录分配给精制设备的无水氨补充量。

- 选定流： 无水氨（R-717）
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 经核对的制冷剂采购量、补充量、回收量和库存变化
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化散装果汁 (`stabilized_bulk_juice`)

记录完成所声明的精制和稳定化操作后转入灌装的散装果汁。

- 选定流： 稳定化百香果汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量转移质量和 °Brix，并与配方及浓缩记录核对
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`; `conidi-2020-fruit-juice-membranes`

##### 废物流

###### 澄清固形物 (`clarification_solids`)

记录作为废物离场的分离悬浮固形物。

- 选定流： 果汁澄清固形物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `conidi-2020-fruit-juice-membranes`; `esparza-2020-fruit-vegetable-waste`

###### 废硅藻土 (`spent_filter_aid`)

过滤后将废硅藻土单独记录。

- 选定流： 废硅藻土
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`

###### 废膨润土 (`spent_bentonite`)

澄清后将废膨润土单独记录。

- 选定流： 废膨润土
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `codex-cxs-247-2005`

###### 精制废水 (`finishing_wastewater`)

仅当蒸发器冷凝水、未回用的膜渗透液和过程排水具有所声明的共同处理去向时，将其记录为废水。

- 选定流： 果汁精制废水
- 流属性/单位： 体积 / m3
- 数量规则： 按去向计量的排放量或过程水平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_finishing_material_utility_balance`
- 来源： `conidi-2020-fruit-juice-membranes`

##### 基本流

###### 锅炉化石二氧化碳排放 (`boiler_carbon_dioxide_fossil`)

仅针对分配给本过程的现场天然气燃烧记录直接化石二氧化碳排放。

- 选定流： 化石二氧化碳，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 实测排放量，或燃料用量乘以有文件支持的设施或监管排放因子
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 锅炉甲烷排放 (`boiler_methane`)

将现场天然气燃烧产生的直接甲烷与二氧化碳分开记录。

- 选定流： 化石甲烷，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 实测排放量，或燃料用量乘以有文件支持的设施或监管排放因子
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 锅炉氧化亚氮排放 (`boiler_nitrous_oxide`)

将现场燃烧产生的直接氧化亚氮作为单项排放记录。

- 选定流： 氧化亚氮，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 实测排放量，或燃料用量乘以有文件支持的设施或监管排放因子
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 锅炉氮氧化物排放 (`boiler_nitrogen_oxides`)

依据适用的烟囱测试、连续监测、许可清单或有文件支持的因子记录直接氮氧化物排放。

- 选定流： 氮氧化物，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至果汁生产的实测排放量或因子计算排放量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 锅炉二氧化硫排放 (`boiler_sulfur_dioxide`)

现场燃烧源报告二氧化硫时，记录其直接排放。

- 选定流： 二氧化硫，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至果汁生产的实测排放量或因子计算排放量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 锅炉细颗粒物排放 (`boiler_particulate_matter_2_5`)

将现场燃烧产生的直接细颗粒物与气态污染物分开记录。

- 选定流： 粒径小于2.5 µm的颗粒物，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至果汁生产的实测排放量或因子计算排放量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 精制工序 R-134a 泄漏排放 (`finishing_r134a_emission`)

将精制制冷系统泄漏的 R-134a 作为基本流排放记录。

- 选定流： 1,1,1,2-四氟乙烷（R-134a），排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至精制设备的制冷剂质量平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 精制工序氨泄漏排放 (`finishing_ammonia_emission`)

将精制制冷系统泄漏的氨作为基本流排放记录。

- 选定流： 氨，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至精制设备的制冷剂质量平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

### 过程：稳定化、灌装与包装 (`stabilization_packaging`)

#### 输入

##### 产品流

###### 稳定化果汁投入 (`stabilized_juice_input`)

记录进入所声明热处理、非热处理、无菌、灌装和包装序列的果汁。

- 选定流： 稳定化百香果汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量的转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `fao-2001-fruit-juice-processing`

###### PET 瓶 (`pet_bottle`)

所声明包装路线使用 PET 瓶时，将瓶体单独记录。

- 选定流： 聚对苯二甲酸乙二醇酯瓶
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 产品特定物料清单，并与包装材料领用量和库存变化核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 聚丙烯瓶盖 (`polypropylene_closure`)

将聚丙烯瓶盖与瓶体分开记录。

- 选定流： 聚丙烯瓶盖
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 产品特定物料清单，并与包装材料领用量和库存变化核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 聚乙烯标签 (`polyethylene_label`)

使用聚乙烯标签或套标时，将其单独记录。

- 选定流： 聚乙烯瓶标签
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 产品特定物料清单，并与包装材料领用量和库存变化核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 瓦楞纸箱 (`corrugated_board_case`)

将瓦楞纸板二级包装与初级包装分开记录。

- 选定流： 瓦楞纸箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 产品特定物料清单，并与包装材料领用量和库存变化核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 木托盘 (`wooden_pallet`)

记录可归属于该批运输的托盘质量，并单独核算有文件证明的重复使用。

- 选定流： 木托盘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 运输记录乘以可归属托盘质量，并采用所声明的重复使用核算方法
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 包装用电 (`packaging_electricity`)

记录分配至本过程的稳定化设备、容器搬运、灌装、密封、喷码和装箱用电。

- 选定流： 电力，电网组合
- 流属性/单位： 能量 / kWh
- 数量规则： 分表计量电量，或依据共享电表记录进行有文件支持的分配
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `fao-2001-fruit-juice-processing`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品：其他果汁 (`reference_product_other_fruit_juice`)

这是处于所声明浓度、保藏、包装和储存状态的可销售参考产品。

- 选定流： 百香果汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量的可销售产品质量，并通过 `calc_reference_normalization` 归一化至 1,000 kg
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `codex-cxs-247-2005`

##### 废物流

###### 不合格果汁 (`off_spec_juice`)

将可销售果汁损失和被拒成品与废水分开记录。

- 选定流： 不合格果汁废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的被拒产品质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `esparza-2020-fruit-vegetable-waste`

###### 废 PET (`waste_pet`)

将被拒 PET 瓶材料与其他包装废物分开记录。

- 选定流： 废聚对苯二甲酸乙二醇酯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的包装废料质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 废聚丙烯 (`waste_polypropylene`)

将被拒聚丙烯瓶盖与其他包装废物分开记录。

- 选定流： 废聚丙烯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的包装废料质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 废聚乙烯 (`waste_polyethylene`)

将被拒聚乙烯标签或套标与其他包装废物分开记录。

- 选定流： 废聚乙烯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的包装废料质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

###### 废瓦楞纸板 (`waste_corrugated_board`)

将被拒瓦楞纸板与塑料包装废物分开记录。

- 选定流： 废瓦楞纸板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的包装废料质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom_balance`
- 来源： `eu-pef-2021-2279`

##### 基本流

### 过程：冷藏或冷冻储存 (`cold_storage`)

#### 输入

##### 产品流

###### 进入冷库的包装果汁 (`packaged_juice_input`)

记录在工厂门前进入温控储存的包装果汁。

- 选定流： 包装百香果汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 仓库接收质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_storage_energy_refrigerant`
- 来源： `fao-2001-fruit-juice-processing`

###### 冷库用电 (`cold_storage_electricity`)

记录按实测占用量和储存时间分配的冷藏或冷冻用电。

- 选定流： 电力，电网组合
- 流属性/单位： 能量 / kWh
- 数量规则： 分表计量电量，并按有文件支持的质量—时间占用量分配
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_storage_energy_refrigerant`
- 来源： `fao-2001-fruit-juice-processing`; `eu-pef-2021-2279`

###### 冷库补充制冷剂 R-134a (`cold_storage_refrigerant_r134a`)

仅当冷库安装该制冷剂时记录 R-134a 补充量。

- 选定流： 1,1,1,2-四氟乙烷（R-134a）
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至冷库设备的制冷剂库存平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_storage_energy_refrigerant`
- 来源： `eu-pef-2021-2279`

###### 冷库补充氨制冷剂 (`cold_storage_refrigerant_ammonia`)

仅当冷库安装氨制冷系统时记录无水氨补充量。

- 选定流： 无水氨（R-717）
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至冷库设备的制冷剂库存平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_storage_energy_refrigerant`
- 来源： `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏包装果汁 (`cold_stored_packaged_juice`)

记录在工厂门从温控储存放行的包装果汁。

- 选定流： 冷藏包装百香果汁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 仓库发出质量，并与储存损失核对
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_storage_energy_refrigerant`
- 来源： `fao-2001-fruit-juice-processing`

##### 废物流

##### 基本流

###### 冷库 R-134a 泄漏排放 (`cold_storage_r134a_emission`)

将冷库制冷系统泄漏的 R-134a 作为基本流排放记录。

- 选定流： 1,1,1,2-四氟乙烷（R-134a），排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至冷库设备的制冷剂质量平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_storage_energy_refrigerant`
- 来源： `eu-pef-2021-2279`

###### 冷库氨泄漏排放 (`cold_storage_ammonia_emission`)

将冷库制冷系统泄漏的氨作为基本流排放记录。

- 选定流： 氨，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 分配至冷库设备的制冷剂质量平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_storage_energy_refrigerant`
- 来源： `eu-pef-2021-2279`

### 过程：清洁消毒与废水管理 (`sanitation_wastewater`)

#### 输入

##### 产品流

###### 清洁消毒用水 (`sanitation_water`)

记录设备、生产线、容器和设施清洗及漂洗所用的外来水。

- 选定流： 饮用水
- 流属性/单位： 体积 / m3
- 数量规则： 分配至范围内生产的清洁消毒水表记录或单次清洗用水记录
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `codex-cxc-1-1969`

###### 清洁用氢氧化钠 (`sanitation_sodium_hydroxide`)

仅在碱洗循环中实际使用氢氧化钠时记录。

- 选定流： 氢氧化钠
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 采购产品质量，并与浓度、循环体积和库存记录核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `codex-cxc-1-1969`

###### 清洁用硝酸 (`sanitation_nitric_acid`)

仅在酸洗循环中实际使用硝酸时记录。

- 选定流： 硝酸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 采购产品质量，并与浓度、循环体积和库存记录核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `codex-cxc-1-1969`

###### 消毒用过氧乙酸 (`sanitation_peracetic_acid`)

仅在清洗后实际使用过氧乙酸作为消毒剂时记录。

- 选定流： 过氧乙酸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 采购产品质量，并与浓度、循环体积和库存记录核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `codex-cxc-1-1969`

###### 清洁消毒用电 (`sanitation_electricity`)

记录原位清洗泵、清洗机和现场废水设备用电。

- 选定流： 电力，电网组合
- 流属性/单位： 能量 / kWh
- 数量规则： 分表计量电量，或依据共享电表记录进行有文件支持的分配
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `eu-pef-2021-2279`

###### 清洁消毒用蒸汽 (`sanitation_steam`)

记录直接用于清洁消毒的外购蒸汽，并与过程蒸汽分开。

- 选定流： 外购蒸汽
- 流属性/单位： 能量 / MJ
- 数量规则： 分配至清洁消毒循环的计量外购蒸汽
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `codex-cxc-1-1969`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洁消毒废水 (`sanitation_wastewater`)

记录排往现场内或场外处理的合并清洗水和漂洗水。

- 选定流： 清洁消毒废水
- 流属性/单位： 体积 / m3
- 数量规则： 分配至清洁消毒的计量排放量或水平衡量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `codex-cxc-1-1969`

###### 废水处理污泥 (`wastewater_sludge`)

按实际去向记录现场废水处理产生的脱水污泥。

- 选定流： 果汁废水处理污泥
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量的湿质量，并保留干物质含量作为质量证据
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `esparza-2020-fruit-vegetable-waste`

###### 废水筛渣 (`wastewater_screenings`)

将现场废水筛分去除的粗大固形物与污泥分开记录。

- 选定流： 果汁废水筛渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 按处理去向计量的湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_wastewater_records`
- 来源： `esparza-2020-fruit-vegetable-waste`

##### 基本流

###### 现场废水处理甲烷排放 (`wastewater_treatment_methane`)

将现场废水处理产生的甲烷作为单项空气排放记录。

- 选定流： 生物源甲烷，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 实测排放量，或处理的有机负荷乘以有文件支持的设施或监管因子
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 现场废水处理氧化亚氮排放 (`wastewater_treatment_nitrous_oxide`)

将现场废水处理产生的氧化亚氮与甲烷分开记录。

- 选定流： 氧化亚氮，排放至空气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 实测排放量，或处理的氮负荷乘以有文件支持的设施或监管因子
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 出水化学需氧量 (`effluent_chemical_oxygen_demand`)

仅当现场处理后的废水直接排入受纳水体时，记录排放的化学需氧量。

- 选定流： 化学需氧量，排放至淡水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 相匹配的出水体积和实验室浓度记录
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 出水总氮 (`effluent_total_nitrogen`)

将排入受纳水体的总氮作为独立污染物负荷记录。

- 选定流： 总氮，排放至淡水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 相匹配的出水体积和实验室浓度记录
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

###### 出水总磷 (`effluent_total_phosphorus`)

将排入受纳水体的总磷作为独立污染物负荷记录。

- 选定流： 总磷，排放至淡水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 相匹配的出水体积和实验室浓度记录
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 工厂门参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_direct_release_records`
- 来源： `eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享操作 | 只要能够取得可直接归属的记录，就应通过分表计量或按水果种类、产品路线、批次、包装线、储存、清洁消毒和废水操作进行细分，以避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_second` | 不可避免的共享负荷 | 无法细分时，采用能够反映共享投入或服务因果使用关系、且有文件支持的物理关系；质量、运行时间、计量体积或质量—时间占用量仅可在与该共享操作相关时使用。 | `eu-pef-2021-2279` |
| `allocation_economic_last` | 共产品 | 若无法为可销售果汁、回收香气物质或果渣共产品论证相关的物理关系，则按一致的工厂门经济价值分配剩余共享负荷，采用具有代表性的价格期，并披露币种、期间、数量和敏感性。 | `eu-pef-2021-2279`; `esparza-2020-fruit-vegetable-waste` |
| `allocation_waste_destination` | 残余物和废物 | 根据有文件证明的去向，将每种残余物仅分类一次为产品或废物。同一质量不得同时使用果渣产品行和果渣废物流行，默认归因型前景数据集内不得计入避免产品抵扣。 | `esparza-2020-fruit-vegetable-waste`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch_balance` | `fruit_receiving_preparation` | 接收水果、预处理投入、预处理水果、剔除物、清洗废水 | 地磅、批次、仪表、投加和废物记录 | 水果种类；供应商；合格 kg；剔除 kg；预处理 kg；清洗水 m3；消毒剂 kg；电力 kWh；废水 m3；去向 | 将批次记录与月度采购、仪表和废物总量核对 | kg；m3；kWh | 每批次记录并按月核对 | 具有代表性的连续 12 个月或完整季节性生产期 | 所有范围内接收与预处理生产线 | 按水果种类和路线求和，再使用 `calc_reference_normalization` 归一化 | 经校准的秤和仪表；供应商票据；库存核对；废物转移联单 |
| `cp_extraction_batch_balance` | `juice_extraction_separation` | 提取投入、果汁、香气物质、果渣、废水 | 批次、仪表、投加、转移和废物记录 | 预处理水果 kg；酶 kg；水 m3；电力 kWh；原汁 kg 和 °Brix；香气物质 kg；果渣 kg 及去向；废水 m3 | 闭合每条提取路线的质量平衡和水平衡 | kg；m3；kWh；°Brix | 每批次记录并按月核对 | 具有代表性的连续 12 个月或完整季节性生产期 | 所有范围内提取生产线 | 在按参考流归一化之前保持水果种类和路线分开 | 经校准的秤和仪表；实验室 °Brix；投加日志；转移和去向记录 |
| `cp_finishing_material_utility_balance` | `formulation_finishing` | 果汁配方、助剂、公用工程、制冷剂、散装输出、精制废物 | 批次配方、库存、仪表、制冷剂、转移和废物记录 | 果汁和浓缩物 kg 及 °Brix；水 m3；各助剂 kg；电力 kWh；蒸汽 MJ；天然气 MJ；制冷剂补充和回收 kg；散装果汁 kg 及 °Brix；废物 kg 或 m3 | 将配方和浓缩平衡与公用工程及库存记录核对 | kg；m3；kWh；MJ；°Brix | 每批次；公用工程至少每月记录 | 具有代表性的连续 12 个月或完整季节性生产期 | 所有范围内精制设备 | 聚合前计算特定水果种类的可溶性固形物平衡和质量平衡 | 经校准的仪器；配方；发票；库存核对；制冷剂维护日志；实验室记录 |
| `cp_packaging_bom_balance` | `stabilization_packaging` | 果汁投入、实际包装组件、电力、产品和包装废品 | 物料清单、包装领用、生产线仪表、生产、仓库和废料记录 | 果汁投入 kg；各组件身份及 kg；电力 kWh；可销售输出 kg；不合格果汁 kg；各废料 kg 及去向 | 将产品特定 BoM 和包装领用量与可销售单元、库存变化及废料核对 | kg；kWh | 每次产品运行记录并按月核对 | 具有代表性的连续 12 个月或完整季节性生产期 | 所有范围内稳定化和包装生产线 | 归一化前将每个包装组件保留为独立交换 | 经批准的 BoM；采购和领用记录；生产线计数；经校准的秤；废料转移联单 |
| `cp_storage_energy_refrigerant` | `cold_storage` | 储存产品、电力、制冷剂及泄漏 | 仓库、分表、占用和制冷剂维护记录 | 产品 kg；入库和放行时间；温度设定值；电力 kWh；安装的制冷剂；补充量、回收量和库存变化 kg | 按有文件支持的质量—时间占用量分配分表能源，并闭合制冷剂质量平衡 | kg；kg·天；kWh；°C | 仓库移动连续记录；能源每月记录；制冷剂按每次维护事件及每年记录 | 具有代表性的连续 12 个月或完整季节性生产期 | 所有范围内冷库和制冷系统 | 仅归一化可归属于所声明产品的占用量和制冷剂份额 | 仓库日志；经校准的温度和能源仪表；维护发票；泄漏检查 |
| `cp_sanitation_wastewater_records` | `sanitation_wastewater` | 清洁消毒投入、废水、污泥和筛渣 | 清洗循环、采购、仪表、处理、实验室和废物记录 | 水 m3；各清洁剂和消毒剂 kg；电力 kWh；蒸汽 MJ；废水 m3；污泥和筛渣 kg；去向；处理操作 | 将清洗循环和处理记录与采购、仪表和废物总量核对 | kg；m3；kWh；MJ | 每个清洗循环；按许可要求的处理和实验室频率；每月核对 | 具有代表性的连续 12 个月或完整季节性生产期 | 所有范围内生产线和现场处理设施 | 按有文件支持的循环时间或已清洗产量分配共享清洁消毒负荷，并保持不同处理去向分开 | 经批准的清洗程序；化学品库存核对；经校准的仪表；实验室证书；废物转移联单 |
| `cp_direct_release_records` | `formulation_finishing` | 每项现场空气或水体基本流排放 | 烟囱、连续监测、许可、制冷剂、废水、燃料和实验室记录 | 排放源；物质；实测浓度或因子；气体、燃料、制冷剂或出水活动量；采样时间；计算基准 | 使用相匹配的活动量和浓度或有文件支持的因子，逐种物质分别计算 | kg；排放源活动单位 | 按每次测量、维护事件或许可频率记录，并进行年度核对 | 与前景活动数据相同的期间 | 所有范围内直接排放点 | 优先按直接过程记录归属，否则按有文件支持的因果物理关系分配 | 实验室报告；监测质量保证；许可申报；燃料和制冷剂核对；计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 期间数量 × 1,000 kg ÷ 同一期间和范围的可销售参考产品 kg | 期间交换数量；可销售输出 kg | 每 1,000 kg 参考产品的交换量 |  |
| `calc_juice_mass_balance` | 每条生产路线 | 核对水果、外购果汁、浓缩物、掺入水、助剂、可销售果汁、共产品、废物、库存留存和实测损失；发布前调查无法解释的不平衡 | 相匹配的质量和库存记录 | 已闭合的路线特定质量平衡 | `codex-cxs-247-2005`; `fao-2001-fruit-juice-processing` |
| `calc_reconstitution_control` | 复原果汁 | 使用浓缩物和掺入水记录核验最终实测 °Brix 及特定水果种类配方；保留适用的产品规格和方法 | 浓缩物质量和 °Brix；水；最终果汁质量和 °Brix | 已核验的复原记录 | `codex-cxs-247-2005` |
| `calc_packaging_bom` | 包装投入 | 组件质量 = 领用组件数量 × 经核验的单件质量，并与期初库存、采购、期末库存、可销售单元和组件特定废料核对 | 产品特定 BoM；数量；单件质量；库存和废料 | 每参考流各包装组件的 kg | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 每个制冷系统 | 制冷剂直接排放 = 期初库存 + 采购量 + 补充量 − 回收量 − 期末库存，并调查无法解释的差异 | 制冷剂库存和维护记录 | 各制冷剂排放 kg | `eu-pef-2021-2279` |
| `calc_effluent_load` | 每种直接水体污染物 | 污染物负荷 = 相匹配的出水体积 × 实验室浓度之和，并披露单位换算和采样覆盖 | 出水体积；物质浓度；采样覆盖 | 排放的一种污染物 kg | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留水果种类或混合物、路线、°Brix 和温度、清澈度、保藏、包装、储存状态、地域和参考期；核验适用的身份和真实性要求。 | 产品规格；配方；实验室报告；标签；`codex-cxs-247-2005` |
| `dq_company_specific_foreground` | 制造活动 | 产品配方、制造公用工程、包装 BoM、废物组成和直接排放采用企业特定活动数据；说明任何二手估算。 | 仪表；发票；库存记录；BoM；实验室和排放记录；`eu-pef-2021-2279` |
| `dq_temporal_coverage` | 所有前景行 | 覆盖具有代表性的连续 12 个月或完整季节性生产期，披露停机和排除的生产期，并使分子与分母期间一致。 | 带日期的源记录和核对工作表 |
| `dq_completeness` | 过程和交换覆盖 | 确认已表示每个适用过程以及每项物料、能源、废物和直接排放交换；为每项排除保留量化论证。 | 签署的完整性检查表；质量、水、能源和包装核对；`eu-pef-2021-2279` |
| `dq_representativeness` | 前景及所链接上游数据 | 评估技术、地域和时间代表性及精度；识别代理数据集及其局限。 | 数据质量评估和数据集元数据；`eu-pef-2021-2279` |
| `dq_waste_destination` | 残余物和废物 | 记录实际去向、产品或废物状态、适用时的水分或干物质含量以及转移证据，不得将同一质量分配至两条路线。 | 称量票据；合同；转移联单；处理发票；`esparza-2020-fruit-vegetable-waste` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 所声明产品必须属于 CPC 21439 范围内的未发酵果汁，且不得属于五类单独分类的果汁、蔬菜汁、水果花蜜、作为果泥销售的产品、含酒精饮料或非果汁饮料。 | `unstats-cpc-3-21439`; `codex-cxs-247-2005` |
| `validate_reference_flow` | 参考产品 | 输出须使用已确认的质量属性和单位组归一化至 1,000 kg，并具备全部必需产品限定信息。 | `codex-cxs-247-2005` |
| `validate_route_processes` | 过程覆盖 | 所声明路线采用的每个过程均须出现，包括清洁消毒；整果直接加工路线须包括接收和提取，浓缩物复原路线须包括浓缩物及掺入水记录，冷藏或冷冻路线须包括冷库。 | `conidi-2020-fruit-juice-membranes`; `fao-2001-fruit-juice-processing`; `codex-cxc-1-1969` |
| `validate_atomic_inventory` | 清单行 | 每种配料、助剂、包装组件、电力供应、外购蒸汽、燃料、制冷剂、废物和直接排放均须表示为一个原子交换；集合标签和合并载能体行不合规。 | `eu-pef-2021-2279` |
| `validate_no_double_count` | 公用工程和残余物 | 外购蒸汽与用于现场产汽的燃料不得表示同一热量，且同一残余物质量不得同时记录为共产品和废物。 | `eu-pef-2021-2279`; `esparza-2020-fruit-vegetable-waste` |
| `validate_balances` | 质量、水和包装 | 发布前须核对水果种类和路线特定的质量、复原、包装、水、制冷剂及废物平衡，并记录无法解释的差异。 | `codex-cxs-247-2005`; `eu-pef-2021-2279` |
| `validate_direct_releases` | 基本流 | 每项直接空气或水体排放均须识别一种物质、排放介质、计算方法、相匹配的活动记录和证据来源；仅有废水体积不能表示其中的污染物负荷。 | `eu-pef-2021-2279` |
| `validate_ranges` | 定量范围 | 在至少两份独立原始且边界兼容的来源支持相同单位和归一化基准之前，不得添加经验范围或质量保证范围；证据缺失时应保留为未解决的范围需求，而非虚构数值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工场址工厂门处其他未另分类果汁的前景生产数据集。 |
| downstream_use | 经评审和发布后用作 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 水果种类或混合物、浓度状态、路线、保藏、包装、储存、地域、技术和期间与本数据集兼容的产品特定 LCI 及生命周期模型。 |
| excluded_use | 通用替代单独分类的果汁；用于水果花蜜、蔬菜汁、果泥、发酵饮料或非果汁饮料；在产品限定信息和下游边界不等效时用于比较声明。 |
| required_metadata | 规范 PCR id；水果种类或混合物；路线和起始物料；°Brix 和测量温度；清澈度；保藏；包装 BoM；储存状态；场址地域；参考期；技术；分配；废物去向；排除项；数据来源；未解决身份和局限 |
| required_quality_disclosure | 前景覆盖与核对；仪表和记录质量；代表性和精度；上游代理；分配敏感性；实验室和排放方法；截断；未解决流 UUID 及未解决范围证据 |
| update_trigger | 水果种类或配方、起始物料、浓缩或保藏技术、包装、储存制度、能源或制冷剂系统、废物去向、分配、场址地域或代表性参考期发生变化；或者重要 UUID 或范围证据缺口得到解决。 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unstats-cpc-3-21439` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》，子类 21439“Other fruit juices, n.e.c.”。https://unstats.un.org/unsd/classifications/Econ/CPC（访问日期：2026-08-24）。 | 分类范围和排除项；另核验未变更子类的官方 CPC 2.1 解释性说明，以确认列举的水果示例和混合果汁 |
| `codex-cxs-247-2005` | standard | Codex Alimentarius，《General Standard for Fruit Juices and Nectars》，CXS 247-2005，2025 年修订。https://openknowledge.fao.org/handle/20.500.14283/cd9081en（访问日期：2026-08-24）。 | 果汁身份、直接榨取和复原路线、水果种类及混合规则、°Brix、真实性和加工助剂 |
| `codex-cxc-1-1969` | standard | FAO 和 WHO，2023，《General Principles of Food Hygiene》，CXC 1-1969。https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（访问日期：2026-08-24）。 | 卫生、清洗和消毒、废物管理、过程说明、监测和记录 |
| `fao-2001-fruit-juice-processing` | official_guidance | Bates, R.P., Morris, J.R. 和 Crandall, P.G.，2001，《Principles and Practices of Small- and Medium-scale Fruit Juice Processing》，FAO Agricultural Services Bulletin 146。https://www.fao.org/4/y2515e/y2515e00.htm（访问日期：2026-08-24）。 | 过程拆分、清洗、提取、分离、热稳定化、包装、制冷和储存 |
| `conidi-2020-fruit-juice-membranes` | literature | Conidi, C., Castro-Muñoz, R. 和 Cassano, A.，2020，“Membrane-Based Operations in the Fruit Juice Processing Industry: A Review”，Beverages 6(1):18。https://doi.org/10.3390/beverages6010018。 | 基于原文全文核验常规过程顺序、水和酶投入、固体残余物和废水、澄清、浓缩、巴氏杀菌及膜处理替代方案 |
| `esparza-2020-fruit-vegetable-waste` | literature | Esparza, I., Jiménez-Moreno, N., Bimbela, F., Ancín-Azpilicueta, C. 和 Gandía, L.M.，2020，“Fruit and Vegetable Waste Management: Conventional and Emerging Approaches”，Journal of Environmental Management 265:110510。https://doi.org/10.1016/j.jenvman.2020.110510。 | 基于原始接受稿全文核验果蔬废物定义、按去向拆分的清单、常规处理和资源化路线 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，《Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods》，附件一产品环境足迹方法。http://data.europa.eu/eli/reco/2021/2279/oj（访问日期：2026-08-24）。 | 企业特定物料清单和制造数据、清单完整性、分配层级、直接排放记录、数据质量和披露 |

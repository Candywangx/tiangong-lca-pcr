---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-uncooked-or-cooked-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未烹调或经烹调的冷冻水果和坚果

## 1. 范围与适用性

本 PCR 适用于以冷冻方式保藏、作为冷冻食品或配料供应的未烹调或经烹调水果和坚果的工厂门生产。产品可以是单一品种或已声明组成的混合物，也可以含有已声明的甜味剂或其他配料，但产品的主要身份必须仍为冷冻水果或冷冻坚果。前景边界从接收已识别的水果或坚果原料开始，包括预处理、条件适用时的烹调或漂烫、冷冻、条件适用时的包装，以及生产设施内直至出厂交付的冷冻储存。

本 PCR 不包括其主要市场身份并非冷冻水果或冷冻坚果的鲜品、干制品、罐藏品、发酵品、果汁、果泥、果酱、果糊、暂时保藏品、烘烤品、盐渍品或其他制品。农业生产、进厂运输、下游配送、零售、消费者解冻或烹调及生命末期不属于本工厂门前景过程边界；研究边界包含这些阶段时，应采用适当的上游或下游数据集表示。

选定的天工产品流名称为 **Banana**。UUID `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` 仅是冷冻香蕉代表情形的窄身份。不得将其视为本 PCR 中所有水果或坚果的产品流身份。任何其他品种、混合物或存在实质差异的香蕉产品，在发布数据集前都必须替换为适当且经过复核的天工产品流，或完成人工身份复核。

本文引用的 Codex 产品标准仅适用于各标准明确覆盖的产品。CXS 52-1981 适用于其规定的速冻草莓，CXS 69-1981 适用于其规定的速冻覆盆子。CXS 320-2015 是速冻蔬菜标准，不为本 PCR 覆盖的水果和坚果提供全类别要求。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-uncooked-or-cooked-frozen |
| classification_refs | CPC 3.0: 21493 - Fruits and nuts, uncooked or cooked, frozen |
| covered_products | 未烹调或经烹调的冷冻水果；未烹调或经烹调的冷冻坚果；主要身份仍为冷冻水果或冷冻坚果且组成已声明的混合物；仅在所声明产品和工艺符合适用的产品专用标准时，才包括相应的速冻产品 |
| excluded_products | 超出冷冻水果或冷冻坚果身份的鲜品、干制品、罐藏品、发酵品、果汁、果泥、果糊、果酱、暂时保藏品、烘烤品、盐渍品或其他制品；冷冻蔬菜；应由其他主要食品类别表示的产品 |
| representative_product | 仅针对给定天工产品流 UUID 的冷冻香蕉；该代表比产品类别窄，不能作为其他品种的默认身份 |
| production_route | 接收并预处理已识别的水果或坚果原料；条件适用时烹调或漂烫；冷冻；条件适用时包装；设施内冷冻储存并在工厂门交付 |
| market_state | 工厂门冷冻产品，并声明品种、组成、形态、热状态、包装状态及预期市场用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产设施门口供应已识别、处于声明冷冻和未烹调或经烹调状态的可食用水果或坚果产品 |
| How much | 1 kg 净冷冻产品，不含运输包装和销售包装 |
| How well | 符合所声明的品种或混合物、配料组成、预处理和烹调状态、呈现形式、冷冻工艺声明、放行温度规范及适用的产品专用质量标准 |
| How long or cycle | 一个生产批次直至工厂门放行；应报告设施内冷冻储存时长及已声明的货架期信息，不得假定 |
| reference_flow_link | 参考流是实现所声明 1 kg 单位所需的合格冷冻产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净冷冻产品 |
| 参考产品流 | Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水果或坚果品种及必要时的栽培品种；单一产品或混合物组成；原料状态；未烹调、经烹调或漂烫状态；整粒、切片、切丁、纯果块或其他呈现形式；单体速冻、块冻或其他已声明冷冻路线；产品中心放行温度规范及实测结果；添加配料和加工助剂；产品净质量及包装排除；包装形式；生产地域和参考期；设施内冷冻储存温度和时长；直接食用或工业用途；适用的产品专用标准；确认 Banana UUID 仅用于冷冻香蕉，或提供已替换产品流/人工身份复核的证据 |

构建前景数据包时，`必需限定信息` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。仅当所表示的产品是冷冻香蕉且其他限定信息均与数据集一致时，才可不替换 Banana UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 合格冷冻产品净质量；排除包装质量。冰衣、添加糖浆或其他纳入食品的配料应作为产品组成和产品净质量的一部分记录。 |
| `mass_basis_consistency` | 水果、坚果、配料、产品、共产品、剔除物和废物质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用各物料跨越过程边界时状态的实测湿质量。除非同时披露实测含水基准和换算，否则不得换算为干物质。 |
| `utility_unit_preservation` | 电力、热、燃料、水和制冷剂 | 计量属性 | 仪表或账单单位并记录换算 | 保留原始仪表或账单单位及换算因子；仅在将记录量分配到所表示批次后归一化。 |
| `temperature_claim` | 产品中心温度和储存温度 | Temperature | °C | 记录测量位置、仪器、时间戳、稳定条件和适用的产品规范。CXS 52-1981 和 CXS 69-1981 的 -18 °C 产品中心冷冻完成判据，仅对分别声称符合草莓或覆盆子标准的产品为强制要求；不得作为香蕉或其他产品的默认值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工设施接收的已识别水果或坚果原料，并记录品种或混合物、供应商、来源、预处理状态、质量以及温度或保藏状态 |
| starting_condition_role | 将接收的水果或坚果原料转化为合格冷冻产品的前景入口 |
| product_classification_scope | CPC 3.0 子类 21493 语义范围内的冷冻水果和坚果；分类本身不授权将 Banana UUID 用于非香蕉产品 |
| recursive_input_rule | 同一类别的外购冷冻水果或坚果应作为带有其供应商数据集的上游产品投入记录；除非前景设施确实执行所表示的操作，不得通过本 PCR 递归重处理 |
| upstream_dataset_requirement | 当研究边界包含相应过程时，农业生产、配料生产、包装生产、能源供应、供水、制冷剂生产、废物处理和进厂运输应采用在产品、地域、技术和时间上具有代表性的数据集 |
| disclosure | 声明原料入口状态、所含设施过程、排除的生命周期阶段、产品专用标准声明、冷链交接点、分配选择、数据缺口，以及参考 UUID 是保留用于冷冻香蕉还是已替换/人工复核 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景生产 | 纳入接收和预处理、实际执行的全部烹调或漂烫、冷冻、实际执行的全部包装、设施内冷冻储存、可归属于所表示生产的清洗、过程废物和废水、公用工程使用及直至工厂门放行的直接制冷剂损失。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 上游产品投入 | 研究边界纳入时，每项材料、配料、包装、能源载体、供水、制冷剂和废物处理服务都应链接到适当的上游数据集；不得用 Banana 参考流替代其他品种。 | `eu-pef-2021-2279` |
| `boundary_exclusions` | 排除阶段 | 记录并说明被排除的过程。下游配送、零售、使用和生命末期不属于本工厂门前景画像，除非所声明研究明确将其纳入。 | `eu-pef-2021-2279` |
| `boundary_standard_specificity` | 产品标准符合性声明 | CXS 52-1981 仅适用于其规定的速冻草莓，CXS 69-1981 仅适用于其规定的速冻覆盆子。CXS 320-2015 覆盖速冻蔬菜，不得作为全类别水果或坚果要求的证据。 | `codex-cxs-52-1981`; `codex-cxs-69-1981`; `codex-cxs-320-2015` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 原料接收与预处理 | `required` | 始终纳入 | 前景接收、分选、实际执行的清洗、去皮、去壳、修整、切分和配料 | 离开本过程的预处理水果或坚果材料 kg |
| `cooking_treatment` | 烹调、漂烫或热处理 | `conditional` | 销售产品为熟制品或设施执行漂烫或其他热处理时纳入 | 前景热预处理 | 离开本过程的热处理材料 kg |
| `freezing` | 冷冻与稳定 | `required` | 始终纳入 | 冷冻至所声明的放行状态 | 离开冷冻设备的合格冷冻材料 kg |
| `packaging` | 产品包装 | `conditional` | 工厂门交付前执行包装或重新包装时纳入 | 前景包装及包装材料使用 | 已包装冷冻产品净质量 kg |
| `frozen_storage_dispatch` | 设施内冷冻储存与发运 | `required` | 始终纳入；仅在发运记录支持时才记录零或极短停留 | 直至工厂门交接的前景冷藏 | 发运的 1 kg 合格冷冻产品净质量 |

### 过程：原料接收与预处理（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收的水果或坚果原料（`received_raw_material`）

记录进入所表示生产的每个水果或坚果原料批次，包括品种、供应商、来源、预处理状态和实测质量。

- 选定流：适合实际品种和状态的水果或坚果投入；为实际品种和状态选择经过复核的天工流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总可归属于所表示批次的接收合格和剔除批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开 `receiving_preparation` 的预处理水果或坚果材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`

###### 预处理用水和添加食品配料（`preparation_inputs`）

将清洗、预处理或配料过程中实际加入的水、甜味剂、抗氧化剂、酸、盐、油或其他食品配料作为独立前景子记录。

- 选定流：适合产品的水或配料流；本 PCR 不规定通用 UUID
- 流属性/单位：计量属性和单位；质量投入使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归属于所表示批次的仪表计量或批次领用量，并按物料身份拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `receiving_preparation` 的预处理水果或坚果材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理水果或坚果材料（`prepared_material`）

记录转移至冷冻或条件适用的烹调过程的实测质量及其预处理状态。

- 选定流：内部预处理水果或坚果中间体；不规定外部产品流 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：预处理材料实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每过程批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`

##### 废物流

###### 分选、去皮、去壳、修整和预处理残余物（`preparation_residues`）

分别记录各残余物流，并识别其为食物损失、共产品、动物饲料材料、回收材料、废水固形物或送处理废物。

- 选定流：适合去向和材料的废物流或产品流；在构建数据集时选择
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按物流和去向实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `receiving_preparation` 的预处理水果或坚果材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`

###### 预处理废水（`preparation_wastewater`）

记录离开预处理过程的实测或计量废水，包括去向及处理模型使用的实测污染物数据。

- 选定流：适合场址的废水流；在构建数据集时选择
- 流属性/单位：实测单位下的体积或质量
- 数量规则：可归属于所表示批次的计量排放量或有记录的水平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `receiving_preparation` 的预处理水果或坚果材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`

##### 基本流

### 过程：烹调、漂烫或热处理（`cooking_treatment`）

#### 输入

##### 产品流

###### 送往热处理的预处理材料（`material_to_treatment`）

执行烹调、漂烫或其他热处理时，记录预处理材料的实测转移量。

- 选定流：内部预处理水果或坚果中间体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测进入转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开 `cooking_treatment` 的热处理材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`

###### 热处理公用工程（`treatment_utilities`）

将实际处理路线使用的电力、燃料、热、蒸汽和工艺水作为独立仪表或分配记录。

- 选定流：针对场址供应选择的公用工程产品流
- 流属性/单位：仪表或账单属性和单位
- 数量规则：直接计量用量，或依据共享仪表形成有记录的分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开 `cooking_treatment` 的热处理材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经热处理的水果或坚果材料（`treated_material`）

记录转移至冷冻的处理后材料质量及声明的烹调或漂烫状态。

- 选定流：内部热处理水果或坚果中间体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：处理和沥水后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每过程批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`

##### 废物流

###### 热处理废水和损失（`treatment_losses`）

按去向记录废水、送处理冷凝水、洒漏和去除固形物；不得将烹调或沥水损失隐藏在产率中。

- 选定流：适合去向的废物流或废水流
- 流属性/单位：实测质量或体积单位
- 数量规则：可归属于处理批次的实测排放和损失量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `cooking_treatment` 的热处理材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`

##### 基本流

### 过程：冷冻与稳定（`freezing`）

#### 输入

##### 产品流

###### 送往冷冻的预处理或热处理材料（`material_to_freezing`）

记录进入冷冻设备的材料实测质量和温度，并识别其为未烹调或经烹调状态。

- 选定流：内部预处理或热处理水果或坚果中间体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测冷冻设备进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开 `freezing` 的合格冷冻材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`

###### 冷冻用电及其他能源（`freezing_energy`）

记录冷冻设备及可归属辅助设备使用的电力，以及任何燃料、热或冷却服务。

- 选定流：适合场址供应的电力或能源流
- 流属性/单位：仪表或账单单位下的能量
- 数量规则：代表批次的直接仪表读数，或有记录的共享公用工程分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开 `freezing` 的合格冷冻材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`

###### 可归属于冷冻的制冷剂补充（`freezing_refrigerant_input`）

根据维修或库存记录记载制冷剂身份和补充量；共享系统补充量仅可采用有记录的规则分配。

- 选定流：针对已安装系统选择的具体制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：可归属于冷冻系统和参考期的制冷剂补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `freezing` 的合格冷冻材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格冷冻水果或坚果材料（`frozen_material`）

记录冷冻产出质量、产品中心温度结果、冷冻路线、符合性状态，并单独记录不合格冷冻质量。

- 选定流：适合产品的冷冻水果或坚果流；Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` 仅用于冷冻香蕉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格冷冻产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每冷冻批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_and_release_records`
- 来源：`codex-cxs-52-1981`; `codex-cxs-69-1981`

##### 废物流

###### 不合格冷冻材料（`nonconforming_frozen_material`）

按去向分别记录剔除、返工、降级或废弃的冷冻材料。

- 选定流：适合去向的废物流或产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处置方式实测不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `freezing` 的合格冷冻材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`

##### 基本流

###### 冷冻过程直接制冷剂排放（`freezing_refrigerant_emission`）

根据设备维修、泄漏记录或有记录的存量平衡，对已识别的制冷剂向空气损失建模；不得指定不明确的通用制冷剂。

- 选定流：针对已安装系统选择的具体制冷剂基本流
- 流属性/单位：Mass / kg
- 数量规则：根据采集的补充、回收和库存记录计算可归属制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `freezing` 的合格冷冻材料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 进入包装的冷冻材料（`frozen_material_to_packaging`）

记录转入包装或重新包装的冷冻材料实测量。

- 选定流：适合产品的冷冻水果或坚果流；Banana UUID 仅用于冷冻香蕉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测进入冷冻材料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已包装冷冻产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 初级、次级和三级包装材料（`packaging_materials`）

按材料、供应商规范、必要时的再生含量声明和领用质量记录每个包装部件。包装不计入 1 kg 产品净质量参考量。

- 选定流：在构建数据集时选择材料特定的包装产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：包装领用质量减去退回未用材料，并按部件记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已包装冷冻产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已包装冷冻产品（`packed_frozen_product`）

产品净质量与包装质量分开记录，并保留批次到包装的可追溯性。

- 选定流：适合产品的冷冻水果或坚果流；Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` 仅用于冷冻香蕉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总合格包装内经核实的产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 废物流

###### 包装边角料和不合格包装（`packaging_waste`）

按材料和去向分别记录包装边角料及不合格已包装产品；可行时，将其中食品部分作为单独材料记录回收。

- 选定流：材料和去向特定的废物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按部件和去向实测边角料或不合格包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已包装冷冻产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 基本流

### 过程：设施内冷冻储存与发运（`frozen_storage_dispatch`）

#### 输入

##### 产品流

###### 进入设施内储存的冷冻产品（`product_to_storage`）

记录批次质量、入库时间、入库温度、储存区域和包装状态。

- 选定流：适合产品的冷冻水果或坚果流；Banana UUID 仅用于冷冻香蕉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入设施内储存的实测冷冻产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发运冷冻产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`

###### 冷库用电和制冷剂补充（`storage_utilities`）

记录设施内冷库的电力和制冷剂补充量，保持不同物料身份分离，并采用质量-时间或直接计量记录分配共享用量。

- 选定流：场址特定的电力和制冷剂产品流
- 流属性/单位：电力使用计量能量单位；制冷剂使用 Mass / kg
- 数量规则：直接计量用量，或按记录的储存停留时间形成有记录的分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运冷冻产品净质量
- 基准类型：储存时长（`storage_duration`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门冷冻产品（`reference_product`）

这是定量参考产出。仅冷冻香蕉数据集可保留选定的 Banana UUID；其他所有产品必须替换该流或完成人工身份复核。

- 选定流：Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后固定参考量为 1 kg 合格冷冻产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门 1 kg 合格冷冻产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 储存和发运损失（`storage_dispatch_losses`）

按质量和去向记录解冻、损坏、过期、洒漏或其他不合格产品。

- 选定流：适合去向的废物流或产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和处置方式实测损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运冷冻产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`

##### 基本流

###### 储存过程直接制冷剂排放（`storage_refrigerant_emission`）

根据冷库系统采集的存量、回收和补充记录，计算已识别制冷剂向空气的损失。

- 选定流：针对已安装系统选择的具体制冷剂基本流
- 流属性/单位：Mass / kg
- 数量规则：根据采集记录计算可归属制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运冷冻产品净质量
- 基准类型：储存时长（`storage_duration`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多产出和共享过程 | 首先通过过程细分，或采用直接计量的批次、产线、设备或储存区域数据来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_relation` | 无法避免的多产出过程 | 无法细分时，采用能反映产出数量变化如何引起负荷变化的既定物理关系分配投入和排放；披露参数、数据期和计算。 | `eu-pef-2021-2279` |
| `allocation_other_relation` | 不存在可辩护物理关系的情形 | 不存在可辩护物理关系时，采用其他经说明的关系，适用时包括经济分配，并报告价格、参考期、敏感性以及物理分配不适用的原因。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | 果皮、壳、修整物、剔除食品、回收材料和其他产出 | 分配前，将每项产出分类为产品、共产品、回收材料、动物饲料、废水成分或废物。记录去向；没有明确下游替代模型时，不得计入避免负荷。 | `eu-pef-2021-2279` |
| `allocation_shared_cold_store` | 共享冷冻储存 | 优先采用专用计量。否则，采用实测产品质量乘以实测停留时间来分配储存用电和可归属制冷剂损失；经验证的工程模型能更好反映区域或温度差异时可采用该模型。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `receiving_preparation` | 覆盖接收、热处理和冷冻过程的原料、中间体、配料和合格产品质量 | 地磅、秤、批次、配方和转移记录 | lot_id; species_or_mixture; supplier; origin; preparation_state; ingredient_id; gross_mass; tare_mass; net_mass; moisture_basis_if_used; timestamp; destination_batch | 校准称重并执行受控批次核对 | kg 和原始记录单位 | 每个所表示批次和原料批次 | 覆盖相关季节和运行条件的已声明代表性生产期 | 数据集纳入的所有设施和产线 | 按物料身份和批次汇总；扣除皮重；链接转移；仅在确定合格产出后归一化 | 校准记录；批次追溯；配方授权；核对签署 |
| `cp_utility_records` | `freezing` | 覆盖纳入的预处理、热处理和冷冻操作的水、电力、燃料、热、蒸汽和共享公用工程 | 仪表、账单、设备日志和生产计划 | meter_id; utility; opening_reading; closing_reading; unit; timestamp; equipment_or_area; batch_id; allocation_driver | 优先直接分表计量；否则依据同步生产记录从共享仪表形成有记录的分配 | 原始仪表或账单单位 | 可按批次计量时每批次；否则采用最短可用账期 | 与所表示生产相同的期间 | 所有纳入的过程设备和共享系统 | 计算读数差；扣除有记录的非生产用量；采用所披露的因果驱动量分配共享总量 | 仪表校准或核验；账单；运行时长日志；分配工作表 |
| `cp_temperature_and_release_records` | `freezing` | 冷冻设备运行、产品中心温度、稳定和放行符合性 | 校准探针、连续记录器、冷冻设备控制记录和放行测试 | lot_id; product; standard_claim; probe_id; measurement_location; start_time; end_time; core_temperature; stabilization_condition; freezer_temperature; conformity_decision | 按声明放行程序，在规定的代表位置或最不利位置测量 | °C 和时间戳 | 每个所表示批次或经验证的抽样计划 | 与所表示生产相同的期间 | 每台纳入的冷冻设备及产品路线 | 保留批次结果；不得用平均值掩盖放行失败；产品专用标准仅在其范围内应用 | 探针校准；抽样计划；签署的放行记录；偏差和纠正措施日志 |
| `cp_packaging_records` | `packaging` | 产品净质量、包装部件和包装废物 | 包装物料清单、领退记录、检重秤和废物日志 | packaging_component_id; material; supplier; unit_mass; issued_count; returned_count; net_product_mass; rejected_pack_count; scrap_mass; destination | 将包装领用、使用、退回和废弃与已包装产品净质量核对 | kg、件数和来源单位 | 每包装批次 | 与所表示生产相同的期间 | 每条纳入的包装线和包装形式 | 使用经核实部件质量换算件数；按材料汇总；包装质量与产品净质量分离 | 供应商规范；部件质量检查；检重秤核验；核对记录 |
| `cp_waste_and_water_records` | `receiving_preparation` | 覆盖纳入的预处理、热处理和冷冻操作的残余物、食品损失、不合格产品、废水和去向 | 秤、容器、废水仪表、转移联单和实验室报告 | stream_id; material_description; mass_or_volume; unit; batch_id; destination; treatment_route; recovery_status; pollutant_measurement; timestamp | 测量各物料流并保留去向证据 | kg、m3 和实验室单位 | 每批次或废物收集事件 | 与所表示生产相同的期间 | 所有纳入过程和排放点 | 按物流和去向汇总；避免产品损失与废水固形物重复计算 | 秤或仪表核验；废物转移记录；实验室报告；去向确认 |
| `cp_refrigerant_records` | `freezing` | 覆盖冷冻和冷冻储存的制冷剂存量、充注、补充、回收和可归属损失 | 制冷剂日志、维修账单、钢瓶称重和设备登记 | refrigerant_identity; equipment_id; opening_stock; additions; recovered_mass; closing_stock; service_date; leak_event; equipment_assignment | 按设备系统和期间核对已识别制冷剂质量 | kg | 每次维修、补充、回收或盘点事件 | 与所表示生产相同的期间，并有期初和期末存量 | 服务于纳入生产的全部冷冻和冷库系统 | 根据有记录的存量平衡计算损失；采用所披露的维修数据或质量-时间数据分配共享系统损失 | 技师记录；钢瓶质量；维修账单；设备充注登记；存量平衡复核 |
| `cp_storage_dispatch_records` | `frozen_storage_dispatch` | 储存质量、停留时间、储存温度、用电分配和发运损失 | 仓库管理系统、区域记录器、发运记录和储存分表 | lot_id; net_mass; entry_time; dispatch_time; storage_zone; setpoint; measured_temperature; electricity_reading; refrigerant_system; loss_mass; loss_destination | 将批次移动与区域温度和能源记录链接 | kg、h、°C、kWh 和来源单位 | 每次批次移动并进行连续记录或经验证的间隔记录 | 与所表示生产相同的期间 | 工厂门发运前使用的全部设施内冷库 | 按批次计算质量-时间；采用所披露规则分配区域总量；单独保留温度偏离和损失 | 记录器和仪表核验；仓储追溯；发运确认；温度偏离调查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 冷冻产品净质量 = 已包装总质量 - 皮重和包装质量；将完整清单归一化为恰好 1 kg 合格产品净质量。 | 已包装总质量；皮重；包装质量；符合性状态 | kg 产品净参考量 | `eu-pef-2021-2279` |
| `calc_inventory_normalization` | 每项前景流 | 归一化数量 = 可归属批次数量 / 同一所表示生产的工厂门合格产品净质量 kg。 | 可归属流数量；合格产品净质量 | 每 kg 参考产品的流数量 | `eu-pef-2021-2279` |
| `calc_process_mass_reconciliation` | 每个物料转化过程 | 将实测进入水果或坚果材料、添加食品配料和留存水，与产品、共产品、残余物、存在测量时的废水固形物、样品、洒漏和有记录质量变化核对；调查无法解释的差额，不得强行闭合。 | 全部实测物料投入和产出；必要时的含水或蒸发证据 | 批次质量核对记录 |  |
| `calc_shared_utility_allocation` | 共享公用工程 | 仅在扣除有记录的无关用量后分配；可用时采用直接分表，否则采用与生产同步且已披露的因果驱动量。 | 共享仪表总量；非生产用量；批次或设备驱动量 | 可归属于所表示产品的公用工程量 | `eu-pef-2021-2279` |
| `calc_storage_mass_time` | 共享冷冻储存 | 产品质量-时间 = 各批次产品净质量乘以记录停留时间之和；除非有直接计量或经验证的工程模型，否则以此作为共享区域的默认分配驱动量。 | 批次净质量；入库时间；发运时间；区域公用工程总量 | 分配至各产品批次的储存公用工程量 |  |
| `calc_refrigerant_loss` | 冷冻和储存制冷剂排放 | 已识别制冷剂损失 = 期初存量 + 补充量 - 回收量 - 期末存量，并与设备维修记录核对；负值必须调查。 | 期初存量；补充量；回收量；期末存量；设备归属 | kg 已识别制冷剂损失 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | 参考流和全部产品中间体 | 每个所表示批次都应可追溯到品种或混合物、预处理状态、组成、呈现形式、冷冻路线、放行条件和预期用途。除冷冻香蕉外，仅在有人工复核记录接受准确用途时才可出现 Banana UUID。 | 产品规范；批次记录；天工流选择；适用时的身份复核记录 |
| `dqr_temporal` | 前景活动数据 | 使用能代表生产路线及相关季节、启动、停机、除霜、清洗和储存条件的已声明期间；披露被排除的异常事件及原因。 | 数据集参考期；生产日历；异常日志 |
| `dqr_technology_geography` | 设施过程和上游链接 | 充分识别设施、产线、冷冻技术、储存系统、制冷剂、能源供应地域和原料来源，以选择具有代表性的上游数据。 | 设备登记；供应商记录；公用工程合同；数据集元数据 |
| `dqr_measurement` | 质量、公用工程、温度和制冷剂记录 | 保留仪器身份、单位、校准或核验状态、读数间隔、分配方法和记录责任人。 | 校准证书；仪表检查；维修日志；签署的批次记录 |
| `dqr_completeness` | 前景清单 | 纳入声明边界内实际执行的每个过程，并核对物料产出、食品损失、废水、包装、公用工程使用和直接制冷剂损失。任何遗漏应在可行时量化、说明并测试显著性。 | 过程图；核对记录；缺失数据登记；显著性评估 |
| `dqr_source_scope` | 基于 Codex 的要求 | 应证明品种、呈现形式、预期用途和工艺处于所引用 Codex 标准范围内后，方可应用其要求。不得将 CXS 52-1981、CXS 69-1981 或 CXS 320-2015 的限值转用于范围外产品。 | 适用标准；产品规范；符合性声明 |
| `dqr_uncertainty` | 计算值和分配值 | 识别实测输入、计算公式、分配驱动量、数据缺口，以及结果对重大分配或缺失数据选择的敏感性。 | 计算工作簿；分配记录；敏感性结果；质量披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品流 | Banana UUID `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` 用于非香蕉产品、未声明混合物或存在实质差异且没有人工复核记录的身份时，校验失败；其他产品必须替换天工产品流。 |  |
| `validate_reference_mass` | 参考流 | 确认定量参考恰为 1 kg 合格冷冻产品净质量，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并排除包装。 | `eu-pef-2021-2279` |
| `validate_process_coverage` | 前景系统 | 确认已表示接收与预处理、冷冻以及设施内冷冻储存/发运；实际执行时纳入烹调或漂烫及包装；适用时计入清洗、废物、废水、能源和直接制冷剂损失。 | `eu-pef-2021-2279` |
| `validate_temperature_claim` | 速冻草莓或覆盆子符合性声明 | 对 CXS 52-1981 草莓或 CXS 69-1981 覆盆子声明，核实有记录的产品中心温度在热稳定后达到 -18 °C，且处理、包装和产品范围与所引用标准一致。香蕉、坚果或其他未覆盖产品不得运行该判据。 | `codex-cxs-52-1981`; `codex-cxs-69-1981` |
| `validate_mass_reconciliation` | 物料转化过程 | 确认实测投入和产出已核对，剔除物、残余物、共产品、存在测量时的废水固形物、样品和损失未隐藏于产品产率。调查并披露无法解释的差额。 |  |
| `validate_allocation` | 多产出和共享过程 | 确认已优先在可行时避免分配；否则核实所选关系、驱动量、参考期和敏感性已记录且一致应用。 | `eu-pef-2021-2279` |
| `validate_source_scope` | 全部外部来源规则 | 当所表示产品或过程超出来源范围时，拒绝标准派生规则。特别是不得将 CXS 320-2015 视为冷冻水果或坚果标准。 | `codex-cxs-320-2015` |
| `validate_data_quality` | 前景数据包 | 确认可追溯性、时间和技术代表性、仪器证据、完整性、缺失数据披露及计算记录满足第 8 节要求。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已识别冷冻水果或坚果产品的工厂门前景数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 用于产品身份、组成、预处理状态、冷冻路线、地域、时间、包装状态、储存画像和系统边界均与已发布数据集兼容的过程或生命周期模型 |
| excluded_use | 以 Banana UUID 自动表示全部 CPC 21493 产品；未替换产品流或未经人工复核而用于非香蕉品种；用作鲜品、干制品、罐藏品、果泥、果酱、烘烤品、盐渍品或冷冻蔬菜数据集；将产品专用 Codex 要求外推至未覆盖产品；基于本工厂门画像提出未披露的从摇篮到坟墓声明 |
| required_metadata | PCR id 和状态；实际产品流名称与 UUID；明确的 Banana UUID 适用性决定；品种或混合物及必要时的栽培品种；配料组成；原料状态和来源；未烹调/经烹调/漂烫状态；呈现形式和冷冻路线；放行温度规范及结果；设施地域和技术；参考期；包装；设施内储存温度和时长；适用标准；边界；分配；上游数据集；数据质量和不确定性披露 |
| required_quality_disclosure | 初级数据覆盖；仪表、秤、探针和制冷剂记录证据；过程和质量核对；分配驱动量；数据缺口和排除；时间、地域和技术代表性；标准范围检查；偏差和敏感性结果 |
| update_trigger | 新增或纠正的天工产品流身份；用于任何非香蕉产品；品种、组成、烹调状态、冷冻技术、放行规范、包装、储存系统、制冷剂、设施、物料供应地区、分配关系或产品专用标准发生变化；前景数据发生实质变化；有证据表明引用来源已修订或被替代 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21493` | 官方指南（`official_guidance`） | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21493, *Fruits and nuts, uncooked or cooked, frozen*, explanatory notes dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 仅用于分类引用和类别范围背景；不作为过程、数量或 UUID 证据 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method and Annex II PEFCR requirements, consolidated text, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230（检索日期 2026-08-11） | 功能单位和参考流；系统边界记录；过程和流完整性；分配层级；数据质量和校验原则 |
| `codex-cxs-52-1981` | 标准（`standard`） | FAO and WHO Codex Alimentarius, CXS 52-1981, *Standard for Quick Frozen Strawberries*, amended 2019 and 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+52-1981%2FCXS_052e.pdf（检索日期 2026-08-11） | 仅用于草莓的速冻完成、处理、包装、产品身份和符合性检查；不外推至香蕉、其他水果或坚果 |
| `codex-cxs-69-1981` | 标准（`standard`） | FAO and WHO Codex Alimentarius, CXS 69-1981, *Standard for Quick-Frozen Raspberries*, amended 2019 and 2022 with 2023 editorial correction, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ru/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B69-1981%252FCXS_069e.pdf（检索日期 2026-08-11） | 仅用于覆盆子的速冻完成、处理、包装、产品身份和符合性检查；不外推至香蕉、其他水果或坚果 |
| `codex-cxs-320-2015` | 标准（`standard`） | FAO and WHO Codex Alimentarius, CXS 320-2015, *Standard for Quick-Frozen Vegetables*, amended 2017, 2020, and 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B320-2015%252FCXS_320e.pdf（检索日期 2026-08-11） | 仅作为范围限制证据：该蔬菜标准不作为水果或坚果的过程或定量证据 |

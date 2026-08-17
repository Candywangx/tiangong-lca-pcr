---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.molasses
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 糖蜜

## 1. 范围与适用性

本 PCR 适用于以甘蔗或甜菜制糖过程可销售液态共产品形式生产的未混配糖蜜，以及原糖精炼过程中回收的精炼糖蜜。产品在所声明生产厂门保持糖蜜属性时，黑糖蜜或最终糖蜜以及食品级或工业级糖蜜均在覆盖范围内。

前景边界从甘蔗、甜菜或原糖进入报告设施开始，到合格糖蜜在生产厂门处进入散装储存或所声明发运包装结束。适用时应纳入路线特定的原料准备、汁液提取或原糖蜜洗、净化、蒸发、结晶、离心分离、糖蜜调理与储存、直接运行的公用工程、直接排放以及场内废物和废水处理。

本 PCR 不包括混配餐桌糖浆；并非由结晶后母液获得的高糖蜜或转化蔗糖浆；加糖蜜甜菜粕；配合饲料；乙醇、酵母、柠檬酸或朗姆酒等发酵产品；以及生产厂门后的配送、使用或生命周期终结。被排除产品应采用其他适用 PCR，或经过明确评审的范围扩展。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.molasses |
| classification_refs | CPC 3.0：23540 糖蜜 |
| covered_products | 未混配甘蔗糖蜜、甜菜糖蜜、黑糖蜜或最终糖蜜，以及糖结晶或原糖精炼回收的精炼糖蜜 |
| excluded_products | 混配糖浆；并非结晶母液的高糖蜜或转化糖浆；加糖蜜甜菜粕；配合饲料；发酵产品；下游配方产品 |
| representative_product | 生产厂门处按接收状态计量、可销售的最终糖蜜 |
| production_route | 一体化甘蔗制糖、一体化甜菜制糖或原糖精炼回收，分别声明 |
| market_state | 散装储存或所声明发运包装中的黏稠液体，并声明路线、等级、干物质或可溶性固形物基准以及预期市场 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付作为富含碳水化合物的液态配料或工业/饲料原料的糖蜜 |
| How much | 按接收状态净质量计 1 kg 糖蜜 |
| How well | 符合生产者声明的等级和规格，并声明生产路线、预期用途/等级、干物质或可溶性固形物、水分、总糖或蔗糖基准以及任何适用的质量或污染物要求 |
| How long or cycle | 在生产厂门交付的一个合格生产批次；不指定使用寿命 |
| reference_flow_link | reference_molasses |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Molasses `dcc60867-03df-4ea1-be73-6d88987911bd` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产路线和原料；最终、黑糖蜜或精炼糖蜜标识；等级和预期用途；按接收状态质量基准；干物质或可溶性固形物方法及结果；水分；总糖或蔗糖基准；地理和时间范围；设施厂门；散装或包装发运状态；分配方法和因子期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考糖蜜 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告按接收状态计量的糖蜜净质量。不得在未声明的情况下将参考流换算为干物质、糖或标准固形物质量。 |
| `quality_basis` | 糖蜜质量结果 | 所声明分析属性 | 质量分数、% 或适用的 °Brix | 声明分析方法、采样基准、相关时的温度，以及结果按接收状态还是干物质基准表示。除非所声明方法证明等价，不得把 °Brix 视为干物质。 |
| `volume_to_mass` | 以体积报告的罐、仪表或发运记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅使用代表批次或生产期的实测密度及其测量温度把体积换算为质量；保留原始体积、密度、温度和换算记录。 |
| `net_utility_use` | 水、蒸汽、热和电力 | 能源载体特定属性 | 能源载体特定单位 | 分别记录外购与自产公用工程，内部循环仅扣除一次。保留总产出、外供、回流、冷凝水回收和净使用量，以便检查重复计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 甘蔗、甜菜或原糖进入首个前景设施厂门，并声明路线、质量、水分或固形物基准、供应商/来源和接收期间 |
| starting_condition_role | 进入一体化制糖或原糖精炼前景系统的原料 |
| product_classification_scope | 作为结晶母液或精炼回收糖浆回收并以糖蜜销售的糖蜜；不包括下游混配物和转化产品 |
| recursive_input_rule | 纳入单元过程之间内部转移的糖蜜是中间流，不另行指定上游数据集。进入调理、混配或重新包装过程的外购糖蜜是外部同类别输入，需要单独解析的上游糖蜜数据集；不得递归重建其负荷。 |
| upstream_dataset_requirement | 外购甘蔗、甜菜、原糖、燃料、电力、化学品、包装及其他技术圈输入均需上游数据集。明确标识任何截断或缺失的上游数据集。 |
| disclosure | 声明生产路线、设施配置、纳入的公用工程和处理过程、分配决策、共产品、内部循环流、发运状态、时间覆盖、地理范围和任何排除操作。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | 支持的生产路线 | 当相关操作由报告设施控制时，纳入从接收甘蔗、甜菜或原糖，经准备/蜜洗、汁液或糖液净化、蒸发、结晶、离心分离，到糖蜜调理与储存的路线特定链条。 | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `boundary_direct_operations` | 前景设施 | 在其服务于纳入路线的范围内，纳入直接运行的锅炉、热电联产、石灰制备或石灰窑、供水、制冷、压缩空气、储存及废物或废水处理；明确记录公用工程外供和处理转移。 | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `boundary_upstream_and_downstream` | 产品系统连接 | 外购输入连接上游数据集。除非研究明确扩展边界并披露该扩展，否则排除所声明生产厂门后的运输、下游混配、饲料制造、发酵、使用和生命周期终结。 | ghg-protocol-product-standard-2011 |
| `boundary_no_silent_cutoff` | 物料与能量平衡 | 不得仅因某个共享制糖操作、具有价值的共产品、残余物、废水流、公用工程流或直接排放并非糖蜜专用而将其省略；应通过细分、分配或明确记录的排除处理。 | ghg-protocol-product-standard-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `liquor_preparation` | 原料准备与糖液生产 | required | 不适用；选择并记录甘蔗、甜菜或原糖精炼路线 | 生产澄清汁、浓汁或标准糖液及路线共产品的前景过程 | 转入结晶的糖液质量和接收原料质量 |
| `crystallization_separation` | 蒸发、结晶与离心分离 | required | 不适用 | 糖和糖蜜的共享前景生产 | 糖膏或糖液处理量以及糖蜜和结晶糖输出质量 |
| `molasses_finishing_storage` | 糖蜜调理、质量放行、储存与发运 | required | 不适用 | 在生产厂门对可销售糖蜜进行专用或共享调理 | 按接收状态计量的 1 kg 合格糖蜜净发运量 |

### 过程：原料准备与糖液生产（`liquor_preparation`）

#### 输入

##### 产品流

###### 接收的含糖原料（`received_feedstock`）

记录前景设施接收并归属于报告生产期的路线特定甘蔗、甜菜或原糖质量。

- 选定流：Sugar cane、Sugar beet 或 Raw sugar；发布前选择路线特定 Tiangong 产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量净接收质量，并与库存变化和生产记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：分配后每 1 kg 合格糖蜜发运量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_receipts`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

###### 工艺水与净化投入（`preparation_water_chemicals`）

记录跨越设施边界的补充新水以及路线特定的石灰、二氧化碳、酸、絮凝剂、含硫化合物、杀菌剂或其他净化投入；循环水单独跟踪，不重复计作外购输入。

- 选定流：路线特定水和净化产品流；发布前选择 Tiangong 流
- 流属性/单位：Mass / kg；计量水量时保留体积
- 数量规则：采购、领用或仪表记录，并扣除库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 合格糖蜜发运量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_water_inputs`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

###### 准备过程能源与公用工程（`preparation_energy`）

记录接收、清洗、提取或蜜洗、净化及糖液准备消耗的电力、蒸汽、热、燃料及其他公用工程。

- 选定流：载体特定电力、燃料、蒸汽和热流；发布前选择 Tiangong 流
- 流属性/单位：Energy / kWh 或 MJ；燃料按计量保留 Mass / kg 或 Volume / m3
- 数量规则：与纳入操作相连的计量或计算净公用工程用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 合格糖蜜发运量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### 废物流

本 PCR 不要求废物输入。作为燃料或材料输入的任何外来废物应以适用废物流身份单独记录。

##### 基本流

不规定基本流输入。直接取用水和其他自然资源在跨越环境边界而非技术圈供应商边界时记录。

#### 输出

##### 产品流

###### 已准备糖液（`prepared_liquor`）

记录作为内部中间流转入结晶过程的澄清汁、浓汁、标准糖液或精炼糖液。

- 选定流：路线特定已准备糖液；内部中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或根据体积、实测密度和温度计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每单位转入 `crystallization_separation` 的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_outputs`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

###### 有价值的准备过程共产品（`preparation_coproducts`）

甘蔗渣、甜菜粕、滤泥、回收土石及其他输出具有已记录的有益用途或市场价值时记为产品流，否则记为废物。

- 选定流：路线特定共产品流；发布前选择 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：按共产品和去向计量净输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：分配前每个报告生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### 废物流

###### 准备残余物与废水（`preparation_wastes`）

按处理去向记录无价值的土、杂物、澄清泥、废净化介质、废水及其他残余物，不得在产品输出中直接净额扣除。

- 选定流：路线特定废物和废水流；发布前选择 Tiangong 废物流
- 流属性/单位：按计量采用 Mass / kg 或 Volume / m3
- 数量规则：按废物类型和去向计量产生量或转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配前每个报告生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes_and_emissions`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### 基本流

###### 准备过程直接排放（`preparation_direct_emissions`）

记录前景边界内燃料燃烧、石灰制备或石灰窑、碳酸饱充、物料装卸及废水处理的实测或因子计算直接排放。

- 选定流：污染物特定基本流；发布前选择 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据采集的活动数据和有引用的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配前每个报告生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_emissions`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

### 过程：蒸发、结晶与离心分离（`crystallization_separation`）

#### 输入

##### 产品流

###### 已准备糖液输入（`prepared_liquor_input`）

记录进入蒸发或真空煮糖结晶的内部糖液，不增加第二份上游负荷。

- 选定流：路线特定已准备糖液；内部中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：等于从 `liquor_preparation` 核对后的转移量，仅按有记录的库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个过程输出生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_outputs`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

###### 结晶公用工程与助剂（`crystallization_inputs`）

记录蒸发、煮糖、结晶、离心和洗糖所用净蒸汽、热、电力、洗涤水、晶种糖或晶种浆以及路线特定助剂。

- 选定流：载体和材料特定产品流；发布前选择 Tiangong 流
- 流属性/单位：载体或材料特定属性与单位
- 数量规则：内部回收后的计量、领用或计算净用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 合格糖蜜发运量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### 废物流

不规定废物输入。返回的不合格糖或糖液是内部产品流，应核对且不得重复计算。

##### 基本流

仅在水直接取自环境而非作为产品流供应时记录直接取水。

#### 输出

##### 产品流

###### 未调理糖蜜中间流（`unconditioned_molasses`）

记录所声明最后结晶或精炼回收步骤后剩余并转入糖蜜调理的母液。

- 选定流：Molasses `dcc60867-03df-4ea1-be73-6d88987911bd`，作为内部中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，并与罐存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位转入 `molasses_finishing_storage` 的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

###### 结晶糖和回收的有价值产品（`sugar_coproducts`）

分别记录结晶糖和共享过程中其他所有有价值输出，因为分配需要其数量和价值。

- 选定流：等级特定糖及回收产品流；发布前选择 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：按等级计量净输出质量，不含内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：分配前每个报告生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; ghg-protocol-product-standard-2011

##### 废物流

###### 结晶废水与残余物（`crystallization_wastes`）

按去向记录未循环的洗涤水、清洗废水、废助剂、泄漏物及其他无价值残余物。

- 选定流：路线特定废物和废水流；发布前选择 Tiangong 废物流
- 流属性/单位：按计量采用 Mass / kg 或 Volume / m3
- 数量规则：扣除有记录内部回流后的计量产生量或转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配前每个报告生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes_and_emissions`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019

##### 基本流

###### 结晶过程直接排放（`crystallization_direct_emissions`）

记录蒸发器、锅炉或其他直接运行能源设备、冷却系统和废水处理产生且未分配给其他纳入过程的直接排放。

- 选定流：污染物特定基本流；发布前选择 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据采集的活动数据和有引用的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配前每个报告生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_emissions`
- 来源：us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997

### 过程：糖蜜调理、质量放行、储存与发运（`molasses_finishing_storage`）

#### 输入

##### 产品流

###### 未调理糖蜜输入（`unconditioned_molasses_input`）

记录从离心分离内部转入的糖蜜，并与调理罐库存核对。

- 选定流：Molasses `dcc60867-03df-4ea1-be73-6d88987911bd`，作为内部中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：等于 `crystallization_separation` 核对后的输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调理生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_quality_dispatch`
- 来源：eu-jrc-fdm-bref-2019

###### 调理公用工程与发运材料（`finishing_inputs`）

仅在用于所声明发运状态时记录加热、泵送、冷却、质量控制耗材和包装。

- 选定流：载体和材料特定产品流；发布前选择 Tiangong 流
- 流属性/单位：载体或材料特定属性与单位
- 数量规则：归属于糖蜜调理和发运的计量或领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格糖蜜发运量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_quality_dispatch`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

不规定废物输入。

##### 基本流

除非设施为本过程直接取用水或其他资源，否则不规定基本流输入。

#### 输出

##### 产品流

###### 生产厂门参考糖蜜（`reference_molasses`）

这是储存和发运状态准备后质量放行的合格参考产品。

- 选定流：Molasses `dcc60867-03df-4ea1-be73-6d88987911bd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按接收状态计量的 1 kg 糖蜜固定参考量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考糖蜜
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 不合格产品、罐底物、泄漏与清洗废水（`finishing_wastes`）

按实际去向记录不合格糖蜜、罐内残余物、损失、泄漏和清洗废水，在物料平衡核对前不得从实测输入中直接扣除。

- 选定流：去向特定产品流或废物流；发布前选择 Tiangong 流
- 流属性/单位：按计量采用 Mass / kg 或 Volume / m3
- 数量规则：按材料和去向计量数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格糖蜜发运量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_quality_dispatch`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

###### 储存与调理直接释放（`finishing_direct_emissions`）

记录储存、加热、装卸、泄漏及场内处理产生的实际空气、水或土壤直接释放；排放未测量或不适用时不得创建零流。

- 选定流：污染物特定基本流；发布前选择 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或根据采集的活动数据和有引用的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格糖蜜发运量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_emissions`
- 来源：eu-jrc-fdm-bref-2019

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 所有多输出前景过程 | 首先通过过程细分、分表计量或工程模型，把直接计量的原料、公用工程、化学品、排放、废物和专用调理操作分配给导致其发生的输出。不得把糖蜜专用操作分配给糖或其他共产品。 | ghg-protocol-product-standard-2011 |
| `allocation_common_burdens` | 细分后剩余负荷 | 无法避免分配时，仅当量化物理关系能够代表共产品产量变化如何引起共享输入使用或排放变化时采用该关系。若不存在可辩护的因果物理关系，依据糖、糖蜜及其他有价值共产品离开共享过程时的价值进行经济分配。 | ghg-protocol-product-standard-2011 |
| `allocation_economic_period` | 经济分配 | 采用下游加工前共享过程出口处净价格，并与清单相同的代表性生产期或报告期取平均。记录币种、价格来源、平均期间、数量、价值和所有因子；价格波动可能实质影响结果时进行敏感性分析。 | ghg-protocol-product-standard-2011 |
| `allocation_waste_status` | 残余物和输出 | 具有已记录市场价值或有益利用价值的输出是共产品并参与所选分配方法。无经济价值的输出是废物；其处理负荷归于产生过程，不分配产品份额。 | ghg-protocol-product-standard-2011 |
| `allocation_completeness` | 分配计算 | 每个共享过程所有有价值输出的分配因子之和必须为 1。对共享输入、排放和清除一致采用所选方法，防止内部循环成为第二份产品输出，并单独披露任何系统扩展。 | ghg-protocol-product-standard-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_receipts` | `liquor_preparation` | 接收原料 | 地磅、接收、库存和质量记录 | 日期；供应商/来源；路线；毛重、皮重和净重；水分或固形物；批次；期初和期末库存 | 校准地磅或核对后的质量流量计，并进行实验室质量采样 | kg 和所声明质量单位 | 每次接收及每个库存期间 | 完整报告生产期，通常至少 12 个代表月或一个完整季节性生产期 | 数据集内所有设施 | 按路线和批次汇总接收量加期初库存减期末库存 | 校准、磅单、库存核对、采样方法及缺失记录日志 |
| `cp_material_and_water_inputs` | `liquor_preparation` | 水和工艺投入 | 采购、领用、储罐和仪表记录 | 材料身份；数量；浓度；补充新水；循环水；库存变化；过程去向 | 校准仪表、发票、库存领用或储罐核对 | kg、m3 和浓度单位 | 每笔交易或连续仪表累计 | 与产品输出相同期间 | 所有纳入操作 | 按材料计算外部净输入；内部循环单独报告 | 仪表校准、发票/领用记录、浓度证书及核对 |
| `cp_energy_and_utilities` | `liquor_preparation`; `crystallization_separation` | 电力、燃料、蒸汽、热、冷却和压缩空气 | 仪表、燃料、锅炉、热电联产和公用工程平衡记录 | 载体；数量；单位；仪表边界；自产；输入；外供；冷凝水回流；分配仪表 | 校准仪表，或根据采集的燃料和公用工程记录形成工程平衡 | 适用时为 kWh、MJ、kg 蒸汽、kg 或 m3 燃料 | 连续或每个账单/生产期间 | 与产品输出相同期间 | 所有纳入公用工程系统和用能操作 | 总产出与输入减外供和有记录回流；仅分配剩余共享用量 | 仪表图、校准、发票、燃料属性、锅炉/热电联产平衡及缺口处理 |
| `cp_process_outputs` | `liquor_preparation`; `crystallization_separation` | 内部转移、糖蜜、糖和共产品 | 质量仪表、储罐、地磅、生产和库存记录 | 产品身份；等级；质量或体积；密度；温度；期初/期末库存；去向；内部回流 | 校准质量计量，或使用密度的体积换算并进行库存核对 | kg；m3；kg/m3；°C | 每批次、转移或发运 | 完整报告生产期 | 所有纳入生产线和储罐 | 按产品和等级计算净输出；可销售输出不含内部循环 | 校准、批次/发运记录、密度方法、储罐核对及收率复核 |
| `cp_wastes_and_emissions` | `liquor_preparation`; `crystallization_separation`; `molasses_finishing_storage` | 废物、废水和直接释放 | 废物转移、废水仪表、烟气测试、连续监测、实验室和活动记录 | 流身份；数量；浓度；去向；处理；活动量；因子；采样时间 | 优先直接测量；否则根据采集的活动量和有引用的因子计算 | kg、m3 及污染物特定单位 | 每次转移或监测期间 | 与产品输出相同期间并代表运行条件 | 每个纳入直接排放源和处理系统 | 实测负荷或活动量乘以有引用因子；处理转移和直接释放分开 | 交接记录、实验室方法、监测校准、因子引用及完整性检查 |
| `cp_storage_quality_dispatch` | `molasses_finishing_storage` | 糖蜜质量、库存、损失、调理投入和发运 | 储罐、实验室、发运、包装和损失记录 | 批次；路线；等级；质量/体积；密度和温度；干物质/可溶性固形物；水分；糖基准；包装；不合格数量；去向 | 代表性采样和经验证实验室方法，加校准发运计量 | kg 和所声明分析单位 | 每批次或发运；按报告期盘点 | 与生产清单相同期间 | 所有糖蜜罐、调理线和发运点 | 合格净发运量加库存变化；不合格品和损失单独报告 | 采样计划、分析方法、证书、校准、放行授权及库存核对 |
| `cp_coproduct_values` | `crystallization_separation` | 经济分配输入 | 销售和转移定价记录 | 产品/等级；净数量；共享过程出口价格；币种；日期；折扣；下游成本调整 | 经审计销售台账或有记录的公平交易转移定价方法 | 货币/kg 和 kg | 每次销售或月均 | 与清单相同生产期或报告期 | 每个共享过程的所有有价值输出 | 按产品计算数量加权平均净出口价值；记录缺失或异常交易 | 台账摘录、价格基准、币种换算、平均方法及敏感性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 已分配生产期数量 / 合格糖蜜按接收状态净发运 kg，并核对糖蜜期初和期末库存 | 已分配生产期数量；合格发运质量；糖蜜库存变化 | 每 1 kg 参考糖蜜的数量 |  |
| `calc_volume_to_mass` | 糖蜜及液体体积记录 | 质量 = 实测体积 × 记录温度下代表性实测密度；不得使用无记录的默认密度 | 体积；密度；测量温度；批次/生产期连接 | kg 液体 |  |
| `calc_dry_matter` | 糖蜜质量披露 | 干物质质量分数 = 实测干物质质量 / 按接收状态样品质量；除非方法证明等价，°Brix 单独保留 | 样品质量；分析结果；方法；基准 | 所声明干物质分数及基准 | eu-jrc-fdm-bref-2019 |
| `calc_mass_balance` | 各纳入过程及全设施 | 在一致湿基和固形物基准上核对输入质量、产品输出、废物、直接质量释放、内部循环和库存变化；校验前定义并披露设施复核阈值 | 采集质量；质量/固形物结果；库存变化；循环记录 | 过程及设施平衡闭合与残差解释 |  |
| `calc_allocated_inventory` | 共享多输出过程 | 糖蜜已分配负荷 = 糖蜜细分负荷 + 分配因子 × 剩余共享负荷；因子遵循所记录物理或经济规则，全部因子之和为 1 | 细分负荷；共享负荷；共产品数量及因果属性或出口价值 | 按流分配的糖蜜清单 | ghg-protocol-product-standard-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考流与清单流 | 确认糖蜜参考 UUID，并在发布前选择路线、载体、废物和污染物特定 Tiangong 流；未解析的非参考流身份保留为评审发现。 | Tiangong 回读、流选择记录和身份评审 |
| `dq_temporal` | 前景生产期 | 覆盖一个完整且有代表性的生产期；季节性甜菜或甘蔗生产应包括完整加工季及相应储存/发运核对。说明停机、异常运行和替代。 | 带日期生产、仪表、库存和发运记录 |
| `dq_mass_quality` | 物料平衡和产品质量 | 使用校准净质量或有记录的体积-密度换算，对齐湿基和干基，并保留代表性糖蜜采样及分析方法。外部典型值仅作合理性背景，不替代前景结果。 | 校准、密度/温度记录、实验室方法、平衡复核和来源比较 |
| `dq_completeness` | 过程、公用工程和输出 | 证明每个过程图步骤、有价值共产品、废物、废水流、直接排放源和公用工程系统均已覆盖；列出缺失数据并量化其估计重要性，不得默认为零。 | 工艺流程图、仪表图、排放源清单及完整性检查表 |
| `dq_allocation` | 共享制糖负荷 | 分配数量、价格或物理因子和时间期间应与清单匹配；保留未分配共享过程清单及可复现因子计算。 | 分配工作簿、台账、工程依据、因子求和检查及敏感性记录 |
| `dq_geography_technology` | 数据集代表性 | 声明国家/区域、设施配置、甘蔗/甜菜/精炼路线、净化和结晶技术、能源系统、处理配置、产品等级及发运状态。 | 设施元数据和过程说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID、Mass 流属性 UUID、Units of mass 单位组 UUID 和 kg 单位必须可解析；数据集必须声明所有必需限定信息，并以按接收状态计量的恰好 1 kg 合格糖蜜净质量为定量参考。 |  |
| `validate_scope_route` | 过程覆盖 | 所声明甘蔗、甜菜或精炼路线必须映射至全部三个过程图阶段，包括路线特定准备、蒸发/结晶、离心分离和糖蜜调理；不发生的操作必须以实际设施配置说明。 | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `validate_mass_and_quality` | 前景物料平衡 | 湿质量和固形物基准平衡必须可由原始记录、库存变化、内部循环、废物和直接释放复现。超出设施预先声明复核阈值的残差需纠正或记录解释；不得以外部典型糖蜜收率或固形物值替代缺失场址数据。 | eu-jrc-fdm-bref-2019 |
| `validate_allocation` | 多输出过程 | 确认首先采用细分；纳入全部有价值输出；废物身份有证据；共享过程因子之和为 1；所选因子由物理因果关系或经济出口价值数据支持；且内部循环、系统扩展或外供公用工程未重复计算。 | ghg-protocol-product-standard-2011 |
| `validate_utilities_emissions` | 能源、水、废物和直接排放 | 核对输入、自产、回流、循环、外供和消耗的公用工程；验证所有适用的燃烧、石灰/碳酸饱充、蒸发器、物料装卸、废水、储存和泄漏排放已实测，或采用采集活动数据和有引用因子计算。 | us-epa-ap42-cane-sugar-1997; us-epa-ap42-beet-sugar-1997; eu-jrc-fdm-bref-2019 |
| `validate_data_lineage` | 每个非固定数量 | 每个前景或计算行必须连接采集协议和报告期。每个外部因子或方法必须连接来源 id，缺失值应保留为发现而非隐式零值。 | ghg-protocol-product-standard-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可销售糖蜜的前景门到门生产数据集；连接上游数据集后可形成从摇篮到厂门结果 |
| downstream_use | `secondary_dataset`；完成方法学、身份、代表性和分配评审后可作为 `background_dataset` |
| allowed_use | 对所声明路线、等级、地理、期间、分配方法和发运状态下的未混配糖蜜开展 LCA；限定信息匹配时作为饲料、发酵、食品或工业系统的上游数据集 |
| excluded_use | 未经代表性评审用于混配糖浆、高糖蜜/转化糖浆、加糖蜜甜菜粕、配合饲料、发酵产品或其他路线/等级；未经适用评审和验证用于比较性声明 |
| required_metadata | PCR id 和版本；参考 UUID；路线/原料；产品标识和等级；干物质或可溶性固形物方法/结果；水分和糖基准；设施地理/配置；报告期；过程边界；发运状态；分配方法/因子；共产品；上游数据集；数据所有者和评审状态 |
| required_quality_disclosure | 初级数据占比；仪表和采样覆盖；缺失数据处理；质量/固形物平衡闭合；分配依据和敏感性；重要未解析流 UUID；时间、地理和技术代表性；外部因子；不确定性和排除项 |
| update_trigger | 原料路线、净化/结晶技术、能源系统、产品等级/规格、干物质基准、设施边界、共产品身份、分配方法或价格、处理配置、发运包装、Tiangong 身份或实质改变清单的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `us-epa-ap42-cane-sugar-1997` | `official_guidance` | 美国 EPA，AP-42 第 9.10.1.1 节《Sugarcane Processing》，1997 年 6 月。https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1a.pdf（检索日期 2026-08-10） | 甘蔗制糖和精炼过程分解；甘蔗渣、滤泥、糖和糖蜜输出身份；蒸发、结晶、离心、公用工程及潜在排放操作 |
| `us-epa-ap42-beet-sugar-1997` | `official_guidance` | 美国 EPA，AP-42 第 9.10.1.2 节《Sugarbeet Processing》，1997 年 3 月。https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1b.pdf（检索日期 2026-08-10） | 甜菜接收、清洗、浸出、净化、蒸发、结晶、离心、糖蜜回收、共产品、公用工程、废物及潜在排放操作 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Food, Drink and Milk Industries》，JRC118627，2019。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索日期 2026-08-10） | 制糖行业过程与环境背景；精炼糖蜜回收；甜菜糖蜜形成、指示性收率和固形物背景；水、能源、共产品、废水、储存及数据质量检查 |
| `ghg-protocol-product-standard-2011` | `standard` | WRI 与 WBCSD，《Product Life Cycle Accounting and Reporting Standard》，2011，第 9 章 Allocation。https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索日期 2026-08-10） | 多输出过程定义；细分/系统扩展层级；物理后经济分配；废物身份；一致性、完整性、披露及分配校验 |

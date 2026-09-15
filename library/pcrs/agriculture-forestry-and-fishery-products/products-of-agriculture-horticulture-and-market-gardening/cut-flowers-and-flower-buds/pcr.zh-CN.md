---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 切花和花蕾

## 1. 范围与适用性

本 PCR 适用于以单枝形式供应，或组成花束、花环、花篮及类似装饰制品的新鲜切花和花蕾。范围包括露地和设施栽培、一年生和多年生生产、采收后的花材整理、保鲜处理、分级、冷却、扎束或制品组装、包装和发运。当声明的数据集边界延伸至首次发运之后时，还包括配送、储存、拍卖或交易、零售、消费者使用和生命末期。

本 PCR 不包括活体盆栽植物、用于栽培的球根或其他种植材料、花卉种子、干制或人工保藏花卉、人造花、提取香料、作为食品销售的食用花，以及正常采后保鲜之外会实质改变切花的染色或其他加工。只有当切花或花蕾提供主要功能时，花束或其他制品才属于本范围；非花材附件和容器应作为单独投入记录。

物种、品种、等级、花茎长度、栽培系统、生产地理、采收季节、采后处理、包装配置、冷链条件、预期观赏寿命和制品组成均可能实质改变清单结果。每个符合本 PCR 的前景数据包均应声明这些事实。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds |
| classification_refs | CPC 3.0: 01962，精确分类语境 |
| covered_products | 新鲜切花和花蕾；单枝；花束；花环；花篮；以及主要功能由切花或花蕾提供的类似装饰制品 |
| excluded_products | 活体盆栽植物；球根、插条和种植材料；花卉种子；干制或保藏花卉；人造花；香料和提取物；作为食品销售的食用花；单独建模的染色或其他实质加工 |
| representative_product | 一枝供装饰使用、达到消费者购买状态的新鲜切花 |
| production_route | 露地或设施系统中的起始材料和栽培；采收；采后整理和保鲜；包装和发运；在声明边界包含时延伸至下游配送和生命末期 |
| market_state | 新鲜、已分级、已保鲜并可销售的单枝，或已声明组成的多枝装饰制品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以一枝新鲜切花提供装饰功能 |
| How much | 消费者购买状态的一枝 |
| How well | 满足已声明的生产者或零售商对物种或品种、等级、花茎长度、外观、新鲜度和包装的规格 |
| How long or cycle | 针对特定产品及储存方式声明的预期观赏寿命或瓶插寿命 |
| reference_flow_link | 一枝消费者就绪花茎；对于花束、花环、花篮或类似制品，应将清单分解到所声明的花茎数量，并分别记录全部非花材组分 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Cut flower or flower bud, consumer-ready；Tiangong UUID 尚未解析 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 植物学物种和品种；产品形式及制品花茎数；等级和花茎长度；露地或设施栽培；基质或土壤系统；生产地理；采收期；采后处理；包装配置；冷链条件；预期观赏或瓶插寿命；所含生命周期阶段 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失这些限定信息时，参考流定义不完整。Tiangong 参考产品流 UUID 应保持未解析，不得使用范围更窄的 `Dye Flower` 流；PCR 激活或发布前必须取得语义匹配的公开产品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 将定量参考准确报告为一枝消费者就绪花茎。 |
| `article_stem_conversion` | 花束、花环、花篮和类似制品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 记录制品中合格花茎的实测数量；将制品层级投入和损失除以消费者就绪花茎数，同时保留制品配置限定信息。 |
| `mass_per_stem_measurement` | 以质量记录的材料、产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每个质量行测量或计算每枝质量；已有产品特定测量值时不得替换为通用花茎质量。 |
| `nutrient_basis` | 肥料和养分排放 | 产品质量和养分特定质量 | kg product; kg N; kg P; kg K | 保留肥料产品质量，并依据有文件支持的组成计算养分质量；不得把配制肥料质量当作养分质量。 |
| `active_ingredient_basis` | 植物保护产品 | Mass | kg active ingredient | 采集制剂产品和有效成分浓度，并将有效成分质量与制剂质量分别报告。 |
| `energy_conversion` | 电力和燃料 | Energy | kWh; MJ | 保留计量单位和声明的换算因子；合并电力与燃料能量时不得丢失载能体和技术身份。 |
| `water_source_separation` | 灌溉、清洗、保鲜和运输用水 | Volume | m3 | 按水源和用途记录；将循环水和补充水分开报告，防止重复计算。 |

## 5. 系统边界

默认方法学边界为从摇篮到坟墓。只有在明确较短边界、且下游用户能够无重复地接入遗漏阶段时，前景生产数据集才可止于发运。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入所声明切花生产系统的外购或内部生产的种子、插条、幼株、球根、砧木或其他繁殖材料 |
| starting_condition_role | 第一个前景栽培过程的上游产品投入 |
| product_classification_scope | 新鲜切花和花蕾，以及范围内装饰制品所含的花茎 |
| recursive_input_rule | 已代表范围内消费者就绪切花的投入流应记录为上游产品流，不得在接收它的前景过程中再次展开。 |
| upstream_dataset_requirement | 对外购繁殖材料、外部栽培花茎、包装、能源、肥料、植物保护产品、运输和废物处理使用单独记录的上游数据集；披露代理数据及其质量。 |
| disclosure | 声明起始材料类型和来源、栽培系统、土地和基础设施处理、所含采后操作、配送路线、制品组装、损失和准确的终止边界。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | 产品系统 | 包括起始材料生产和原材料获取、栽培和采收、采后处理、包装、配送、适用的储存或拍卖与零售、消费者使用假设，以及花材和包装的生命末期。较短的前景边界应列出所有遗漏的下游阶段。 | wur-floripefcr-2024; lan-cut-flower-review-2022 |
| `boundary_cultivation_inputs` | 栽培 | 包括繁殖材料、栽培基质、使用时的温室或设施栽培基础设施、灌溉水、肥料、植物保护产品、生物防治披露、CO2 施肥、能源、燃料、田间作业、直接排放、土地占用及相关土地利用变化。 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `boundary_post_harvest` | 采收到发运 | 包括采收、分级、修剪、清洗或补水、保鲜化学品、植物检疫处理、冷却、冷藏、扎束或制品组装、包装、场内搬运、产品损失、废水和废物。 | wur-floripefcr-2024 |
| `boundary_capital_goods` | 设施栽培 | 根据有文件支持的材料清单、使用寿命、占用面积及寿命期产量纳入温室结构和栽培专用基础设施；披露排除的资本品。 | wur-floripefcr-2024 |
| `boundary_cutoff_disclosure` | 所有阶段 | 不得仅因缺少数据而省略已知的材料、能源、运输、废物或直接排放流。应将其记为未解决项、使用已披露代理，或按所用研究规则说明排除理由。 | ec-pef-method-2021; wur-floripefcr-2024 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | 起始材料、栽培和采收 | required | 始终纳入 | 前景花卉生产 | 生产一枝消费者就绪花茎所需的采收花茎 |
| `post_harvest` | 采后整理和保鲜 | required | 始终纳入 | 前景分级、保鲜、冷却及扎束或制品组装 | 生产一枝消费者就绪花茎所需的可销售保鲜花茎 |
| `packaging_dispatch` | 包装和发运 | required | 始终纳入 | 前景包装和发运准备 | 首次发运点的一枝消费者就绪花茎 |
| `distribution_retail` | 配送、储存、拍卖或交易和零售 | conditional | 声明边界延伸至首次发运之后时纳入 | 下游运输、储存、交易、零售及相关损失 | 交付消费者的一枝花茎 |
| `end_of_life` | 花材和包装的生命末期 | conditional | 从摇篮到坟墓的数据集或生命周期模型纳入 | 下游废物收集和处理 | 购买一枝花产生的废物 |

### 过程：起始材料、栽培和采收（`cultivation`）

#### 输入

##### 产品流

###### 繁殖或起始材料（`starting_material`）

记录种子、插条、幼株、球根、砧木或其他繁殖材料及其来源、数量、损失、包装和供应路线。

- 选定流：选择匹配的 Tiangong 繁殖材料产品流
- 流属性/单位：Number of items / Item(s)，需要时附质量
- 数量规则：将实测起始材料数量和质量分配至采收花茎
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_materials`
- 来源：`wur-floripefcr-2024`

###### 栽培基质和栽培材料（`growing_media_materials`）

使用时记录基质组分、容器、覆盖物、支撑、绳线、薄膜和其他栽培材料。

- 选定流：选择组分特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；实测时使用 Volume / m3
- 数量规则：年度或作物周期购入量扣除有记录的未用库存，再按作物面积和产量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cultivation_materials`
- 来源：`wur-floripefcr-2024`

###### 灌溉和栽培用水（`cultivation_water`）

按水源记录补充水，并与循环水分开。

- 选定流：选择水源和地理特定的 Tiangong 水流
- 流属性/单位：Volume / m3
- 数量规则：将计量或平衡核算的补充水分配到声明作物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`wur-floripefcr-2024`

###### 肥料和土壤改良剂（`fertiliser_inputs`）

记录产品质量、组成、养分质量、有机或合成来源和施用位置。

- 选定流：选择配方特定的 Tiangong 肥料和改良剂流
- 流属性/单位：Mass / kg product；kg N；kg P；kg K
- 数量规则：实测施用量或采购与库存平衡量，使用有文件支持的组成换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fertiliser_records`
- 来源：`wur-floripefcr-2024`

###### 植物保护产品（`plant_protection_inputs`）

记录每次施用的制剂、有效成分、浓度、用量、处理位置和采后施用。

- 选定流：选择有效成分或制剂产品的 Tiangong 流
- 流属性/单位：Mass / kg formulated product；kg active ingredient
- 数量规则：施用制剂质量乘以有效成分浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_plant_protection_records`
- 来源：`wur-floripefcr-2024`

###### 栽培电力（`cultivation_electricity`）

记录照明、泵送、通风、冷却、自动化和其他栽培作业的电力。

- 选定流：选择电压、供应商和地理特定的 Tiangong 电力流
- 流属性/单位：Energy / kWh
- 数量规则：用分表计量或第 7 节分配规则将计量电量分配到声明作物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel_records`
- 来源：`wur-floripefcr-2024`

###### 加热燃料和外供热（`cultivation_heat_fuel`）

记录各燃料或热载体、数量、低位或高位热值口径、燃烧技术及其与 CHP 的关系。

- 选定流：选择载能体和技术特定的 Tiangong 燃料或热流
- 流属性/单位：Energy / MJ；燃料按计量单位
- 数量规则：用有文件支持的热值换算计量燃料或热量，并分配到作物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel_records`
- 来源：`wur-floripefcr-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采收花茎（`harvested_stems`）

记录分级前采收花茎的数量和代表性实测质量。

- 选定流：Harvested cut-flower stems；Tiangong UUID 尚未解析
- 流属性/单位：Number of items / Item(s)；Mass / kg
- 数量规则：按声明产品和采收期记录采收花茎数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_loss_records`
- 来源：`wur-floripefcr-2024`

##### 废物流

###### 栽培和采收生物质废物（`cultivation_biomass_waste`）

记录以废物离开过程的花茎、叶、根、失败植株和其他生物质，并注明处理路线。

- 选定流：选择匹配的 Tiangong 生物废物流
- 流属性/单位：Mass / kg
- 数量规则：按处理路线实测或通过质量平衡计算生物质废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_loss_records`
- 来源：`wur-floripefcr-2024`

##### 基本流

###### 栽培直接排放（`cultivation_direct_emissions`）

采用声明的方法和因子，根据采集的活动数据计算肥料、粪肥、植物保护产品、燃料燃烧、基质和田间作业对空气、水和土壤的直接排放。

- 选定流：选择物质和环境介质特定的 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：使用有引用的排放因子方法从采集活动数据计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产一枝消费者就绪花茎所需的采收花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_cultivation_emissions`
- 来源：`wur-floripefcr-2024`

### 过程：采后整理和保鲜（`post_harvest`）

#### 输入

##### 产品流

###### 进入采后处理的采收花茎（`post_harvest_stem_input`）

记录采收花茎的过程间转移，不重复计算栽培负担。

- 选定流：Harvested cut-flower stems；Tiangong UUID 尚未解析
- 流属性/单位：Number of items / Item(s)
- 数量规则：由可销售输出加实测剔除和处理损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一枝可销售保鲜花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_loss_records`
- 来源：`wur-floripefcr-2024`

###### 采后用水和保鲜剂（`post_harvest_water_agents`）

记录清洗、补水、花桶和保鲜用水，以及每种保鲜剂或植物检疫处理剂。

- 选定流：选择水源特定的水流和药剂产品流
- 流属性/单位：Volume / m3；Mass / kg
- 数量规则：批次计量用量除以该批可销售保鲜花茎数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一枝可销售保鲜花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_post_harvest_records`
- 来源：`wur-floripefcr-2024`

###### 采后电力和制冷剂（`post_harvest_energy_refrigerants`）

记录分拣、清洗、冷却、冷藏和制品组装用电，以及制冷剂充注和泄漏。

- 选定流：选择电压、地理和制冷剂特定的 Tiangong 流
- 流属性/单位：Energy / kWh；Mass / kg refrigerant
- 数量规则：按花茎吞吐量、储存体积和时间分配计量能源及平衡核算的制冷剂泄漏
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一枝可销售保鲜花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_post_harvest_records`
- 来源：`wur-floripefcr-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售保鲜花茎（`saleable_conditioned_stems`）

记录满足声明等级和采后规格的花茎。

- 选定流：Saleable conditioned cut-flower stems；Tiangong UUID 尚未解析
- 流属性/单位：Number of items / Item(s)
- 数量规则：分级和保鲜后的可销售花茎计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一枝可销售保鲜花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_loss_records`
- 来源：`wur-floripefcr-2024`

##### 废物流

###### 采后剔除物和废水（`post_harvest_waste`）

按处理路线记录剔除生物质、修剪材料、废保鲜液和废水。

- 选定流：选择匹配的 Tiangong 生物废物和废水流
- 流属性/单位：Mass / kg；Volume / m3
- 数量规则：实测废物加批次质量和水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一枝可销售保鲜花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_loss_records`
- 来源：`wur-floripefcr-2024`

##### 基本流

###### 制冷剂泄漏（`post_harvest_refrigerant_emission`）

记录排放到空气的特定制冷剂物质。

- 选定流：选择匹配的 Tiangong 空气基本流
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减回收量和期末充注量，再按储存体积和时间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一枝可销售保鲜花茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_post_harvest_records`
- 来源：`wur-floripefcr-2024`

### 过程：包装和发运（`packaging_dispatch`）

#### 输入

##### 产品流

###### 用于包装的可销售花茎（`packaging_stem_input`）

记录进入包装或制品组装的花茎数。

- 选定流：Saleable conditioned cut-flower stems；Tiangong UUID 尚未解析
- 流属性/单位：Number of items / Item(s)
- 数量规则：按包装或制品批次记录投入花茎数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一枝消费者就绪花茎
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch_records`
- 来源：`wur-floripefcr-2024`

###### 包装、附件和运输用水（`packaging_materials`）

记录一次、二次和三次包装、扎带、套袋、容器、花泥、支撑、非花材装饰物及随产品运输的水。

- 选定流：选择材料特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；Volume / m3
- 数量规则：实测包装材料清单除以包装后的消费者就绪花茎数；可重复使用包装除以核实的重复使用次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一枝消费者就绪花茎
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_dispatch_records`
- 来源：`wur-floripefcr-2024`

###### 包装和发运能源（`packaging_dispatch_energy`）

记录包装、制品组装、内部搬运和发运暂存使用的电力和燃料。

- 选定流：选择载能体、电压和地理特定的 Tiangong 能源流
- 流属性/单位：Energy / kWh；MJ
- 数量规则：批次计量能源除以发运的消费者就绪花茎数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一枝消费者就绪花茎
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_dispatch_records`
- 来源：`wur-floripefcr-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 消费者就绪切花花茎（`consumer_ready_stem`）

准确记录一枝符合要求的花茎。对于制品，该输出表示一个花茎当量，并保留制品组成限定信息。

- 选定流：Cut flower or flower bud, consumer-ready；Tiangong UUID 尚未解析
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：固定参考输出一枝
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一枝消费者就绪花茎
- 基准类型：参考流（`reference_flow`）
- 证据类型：外部来源（`external_source`）
- 来源：`wur-floripefcr-2024`

##### 废物流

###### 包装和组装废物（`packaging_assembly_waste`）

记录包装或组装过程中产生的边角料、损坏包装、不合格附件和花材损失。

- 选定流：选择材料特定废物流
- 流属性/单位：Mass / kg；Number of items / Item(s)
- 数量规则：按材料和处理路线计量的废物除以发运花茎数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一枝消费者就绪花茎
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_dispatch_records`
- 来源：`wur-floripefcr-2024`

##### 基本流

### 过程：配送、储存、拍卖或交易和零售（`distribution_retail`）

#### 输入

##### 产品流

###### 发运花茎和运输服务（`distribution_inputs`）

记录全部路线段、运输方式、距离、载荷、包装质量、温控、储存时长、拍卖或交易处理和零售储存。

- 选定流：消费者就绪花茎及方式特定的运输、储存和能源服务流
- 流属性/单位：Number of items / Item(s)；Transport work / tkm；Energy / kWh
- 数量规则：根据质量、体积、距离、装载率、储存体积和时间进行路线特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一枝交付消费者的花茎
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_distribution_records`
- 来源：`wur-floripefcr-2024`

##### 废物流

##### 基本流

###### 配送制冷剂泄漏（`distribution_refrigerant_emission`）

记录冷藏运输、储存和零售中的特定制冷剂泄漏。

- 选定流：选择匹配的 Tiangong 空气基本流
- 流属性/单位：Mass / kg
- 数量规则：按产品体积和储存时间或运输功分配平衡核算的泄漏量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一枝交付消费者的花茎
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_distribution_records`
- 来源：`wur-floripefcr-2024`

#### 输出

##### 产品流

###### 交付消费者的花茎（`delivered_stem`）

在按配送、储存、交易和零售实测损失放大上游生产后，记录一枝购买状态花茎。

- 选定流：Cut flower or flower bud, consumer-ready；Tiangong UUID 尚未解析
- 流属性/单位：Number of items / Item(s)
- 数量规则：损失放大后固定输出一枝交付花茎
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一枝交付花茎
- 基准类型：参考流（`reference_flow`）
- 证据类型：外部来源（`external_source`）
- 来源：`wur-floripefcr-2024`

##### 废物流

###### 配送和零售损失（`distribution_retail_losses`）

在各损失发生阶段记录损坏、萎蔫或未售出的花材及相关包装废物。

- 选定流：选择匹配的花卉生物废物和包装废物流
- 流属性/单位：Number of items / Item(s)；Mass / kg
- 数量规则：按阶段和处理路线记录损失数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一枝交付消费者的花茎
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distribution_records`
- 来源：`wur-floripefcr-2024`

##### 基本流

### 过程：花材和包装的生命末期（`end_of_life`）

#### 输入

##### 产品流

##### 废物流

###### 废弃花材和包装（`discarded_flower_packaging`）

按材料和当地处理路线记录花卉生物质、水、套袋、扎带、容器、花泥、花篮和其他包装。

- 选定流：选择材料特定的 Tiangong 废物流
- 流属性/单位：Mass / kg；Number of items / Item(s)
- 数量规则：实测产品和包装组成乘以当地收集和处理比例
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：购买一枝花产生的废物
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`wur-floripefcr-2024`

##### 基本流

#### 输出

##### 产品流

###### 废物处理服务和回收产品（`end_of_life_services`）

记录堆肥、厌氧消化、焚烧、填埋、回收和回收产品，不重复计算避免负担。

- 选定流：选择路线特定的 Tiangong 处理和回收产品流
- 流属性/单位：Mass / kg
- 数量规则：投入废物质量乘以有文件支持的处理比例和过程产率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：购买一枝花产生的废物
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`wur-floripefcr-2024`

##### 废物流

##### 基本流

###### 生命末期直接排放（`end_of_life_emissions`）

使用所选处理数据集或有文件支持的因子，记录处理对空气、水和土壤的特定排放。

- 选定流：选择物质和环境介质特定的 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：根据废物质量和有引用因子进行处理路线特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：购买一枝花产生的废物
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`wur-floripefcr-2024`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 所有多功能过程 | 首先细分过程并对花卉作物、温室分区、批次、制品或路线进行直接测量。仅对剩余共享投入或排放进行分配。 | ec-pef-method-2021; wur-floripefcr-2024 |
| `allocation_greenhouse_land_time` | 共用温室栽培 | 有作物特定分表数据时据此分配共享能源、清洁、土地占用和通用作业；否则使用生长时间积分的占用面积。只有无法物理分离的剩余共产品才使用经济分配。 | wur-floripefcr-2024 |
| `allocation_chp_energy` | 热电联产 | 按产出能量将燃料和直接排放细分给有用热和电，保留实测效率，并将用于栽培的回收 CO2 净化负担单独归属。 | wur-floripefcr-2024 |
| `allocation_rotation_inputs` | 轮作中的有机肥和绿肥 | 将矿质氮分配给接受施用的作物；其余有机养分和绿肥负担按占用面积和引用的园艺规则在轮作作物间分配。 | bsi-pas-2050-1-2012; wur-floripefcr-2024 |
| `allocation_transport_physical` | 共用运输 | 按限制装载能力的物理属性分配：质量受限时按质量，体积受限时按体积；包括有文件支持的空返和冷链运行。 | wur-floripefcr-2024 |
| `allocation_storage_volume_time` | 共用储存、拍卖、交易和零售 | 按产品占用体积乘以储存时间分配公用工程和泄漏。 | wur-floripefcr-2024 |
| `allocation_reuse_cycles` | 可重复使用的花桶、托盘、台车和容器 | 将制造和生命末期负担除以核实的寿命期使用次数，并纳入每次使用的清洗和返程运输。 | wur-floripefcr-2024 |
| `allocation_article_components` | 花束和类似制品 | 本 PCR 按实测花茎数归一化制品层级负担，同时将各非花材组分保留为单独投入；不得把附件负担分配出制品系统。 | wur-floripefcr-2024 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_materials` | cultivation | 起始材料、基质、基础设施和栽培材料 | 采购、库存、供应商和田间记录 | 材料身份；供应商；来源；数量；组成；再生含量；期初期末库存；作物面积；使用寿命；作物份额 | 核对采购和库存；验证材料清单与供应商规格 | item; kg; m3; m2-year | 每次接收及年度核对 | 一年生或设施作物至少最近三年，周期较短时最近三个周期；多年生采用稳态代表 | 每个纳入农场和栽培分区 | 汇总净使用量，按直接作物记录或第 7 节分配，再除以可销售花茎数 | 发票、库存表、供应商规格、基础设施记录和作物面积日志 |
| `cp_water_records` | cultivation | 灌溉和栽培用水 | 水表和水源记录 | 水源；取水或供水表；补充量；循环量；排放量；作物面积；花茎产出 | 读取校准水表并进行水量平衡 | m3 | 每月及每个作物周期 | 与栽培产出相同的代表期 | 每个水源和纳入栽培区 | 按水源汇总补充水并除以可销售花茎数；单独报告循环水 | 水表校准、账单、取水记录和水量平衡 |
| `cp_fertiliser_records` | cultivation | 肥料、粪肥、改良剂和养分投入 | 施用和组成记录 | 产品；批次；施用质量；N/P/K 组成；有机或合成来源；田块或分区；日期 | 将施用日志与采购、库存核对并验证组成 | kg product; kg N; kg P; kg K | 每次施用 | 与栽培产出相同的代表期 | 每个纳入田块或分区 | 将产品质量换算为养分，应用轮作分配并除以可销售花茎数 | 施用日志、发票、标签、实验室或供应商组成 |
| `cp_plant_protection_records` | cultivation | 植物保护和采后处理产品 | 施用记录 | 产品；有效成分；浓度；制剂量；处理面积或批次；日期；施用方法 | 记录每次施用并计算有效成分质量 | kg product; kg active ingredient | 每次施用 | 与栽培产出相同的代表期 | 每个纳入田块、温室和采后区 | 按有效成分汇总并除以可销售花茎数 | 施用日志、标签、发票和施药器校准 |
| `cp_energy_fuel_records` | cultivation | 电力、热、燃料、CHP 和 CO2 施肥 | 仪表、发票和运行记录 | 载能体；仪表；数量；单位；供应商；电压；燃料热值；CHP 热与电；CO2 来源；作物面积和时间 | 尽量分表；否则核对设施总量和分配因子 | kWh; MJ; kg; m3 | 每月及每个作物周期 | 与栽培产出相同的代表期 | 每个纳入能源系统和栽培分区 | 使用有文件支持的因子换算，按第 7 节分配并除以可销售花茎数 | 仪表校准、发票、燃料规格、CHP 日志和分配核对 |
| `cp_output_loss_records` | cultivation; post_harvest | 采收、可销售、剔除和损失花茎及生物质 | 采收、分级、废物和发运记录 | 采收数量和质量；可销售数；剔除数量和质量；原因；废物路线；产品限定信息 | 按批计数并称量代表性花茎和废物 | item; kg | 每个采收和分级批次 | 与栽培产出相同的代表期 | 每个纳入作物、等级和处理场址 | 核对采收花茎、可销售花茎、转移、剔除和库存变化 | 批次单、称重记录、等级报告、废物凭证和数量/质量平衡 |
| `cp_cultivation_emissions` | cultivation | 栽培直接排放 | 与活动记录关联的计算工作底稿 | 肥料和粪肥；土壤或基质；气候；排水；燃料；有效成分；因子及来源 | 将声明的因子方法应用于采集活动数据 | kg substance | 每个报告期 | 与栽培产出相同的代表期 | 每个纳入田块或分区 | 按物质和介质计算并除以可销售花茎数 | 公式审计、来源版本、输入追溯和独立复算 |
| `cp_post_harvest_records` | post_harvest | 水、保鲜剂、能源、储存、制冷剂和废水 | 批次、仪表、库存和维护记录 | 花茎数；水；药剂；能源；储存体积和时间；制冷剂充注、补充、回收；废水 | 按批测量或核对共享系统 | item; m3; kg; kWh; m3-day | 每批；共享公用工程按月 | 与处理产出相同的代表期 | 每个纳入采后场址 | 按批次、花茎吞吐量或体积-时间分配并除以可销售花茎数 | 批次表、仪表、发票、维护日志和公用工程核对 |
| `cp_packaging_dispatch_records` | packaging_dispatch | 包装、附件、可重复容器、组装和发运 | 材料清单和批次记录 | 材料；质量；再生含量；制品花茎数；重复使用次数；清洗；发运数；包装废物 | 称量代表性配置并核对采购和库存 | item; kg; m3 | 每种配置及年度核对 | 当前配置和代表报告年 | 每个纳入包装或组装场址 | 将批次材料和能源除以合格发运花茎数；可重复物品除以核实次数 | 包装规格、称重记录、采购数据、复用日志和批次核对 |
| `cp_distribution_records` | distribution_retail | 运输、储存、拍卖、交易、零售、损失和制冷剂 | 路线、装运、设施和销售记录 | 起点终点；方式；距离；燃料；载荷；质量体积；储存体积时间；公用工程；制冷剂；损失数和路线 | 采集每个路线段并核对设施活动 | km; tkm; m3-week; kWh; kg; item | 每次装运及设施月度总量 | 覆盖季节变化的代表报告年 | 每个纳入路线段和设施 | 计算运输功，按体积-时间分配储存，按阶段损失放大并除以交付花茎数 | 货运单、车载数据、公用工程账单、库存、销售和废物记录 |
| `cp_end_of_life_scenario` | end_of_life | 花材和包装处理 | 组成和情景记录 | 材料质量；当地收集比例；堆肥；厌氧消化；回收；焚烧；填埋；运输；回收产率 | 使用实测组成和当前地理特定处理证据 | kg; fraction | 每种产品配置；至少每年复核情景 | 当前市场和废物管理年份 | 声明的消费者市场 | 材料质量乘以处理比例和路线数据集；各比例合计为一 | 产品拆解记录、官方废物统计、处理证据和情景校验 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stem_normalization` | 所有过程行 | 归一化数量 = 归属期或批次数量 / 该数量代表的合格消费者就绪花茎数 | 归属数量；合格花茎数 | 每枝数量 | wur-floripefcr-2024 |
| `calc_article_to_stems` | 花束和类似制品 | 每枝数量 = 制品层级数量 / 实测合格花茎数；保留制品身份和非花材组分 | 制品数量；花茎数 | 每花茎当量数量 | wur-floripefcr-2024 |
| `calc_loss_scaling` | 连续生命周期阶段 | 所需上游花茎 = 一枝交付花茎 / 各纳入损失阶段留存率的乘积；不得在不保留阶段记录的情况下合并损失 | 各阶段投入、产出和损失计数 | 经损失放大的上游花茎需求 | wur-floripefcr-2024 |
| `calc_three_period_average` | 栽培 | 先计算每年或每周期清单，再平均三个代表年份或最近三个连续周期；仅在明确说明时使用较短时期，新的一年生系统不得少于一年。 | 各期投入；各期产出；花茎数 | 每枝代表性栽培清单 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_perennial_steady_state` | 多年生切花系统 | 对发育阶段加权，使报告期代表理论稳态；记录任何校正，且不得将仅投产前清单作为不加限定的成熟产品数据集。 | 阶段面积、时间、投入、产出、产量 | 每枝稳态清单 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_nutrient_mass` | 肥料和改良剂 | 养分质量 = 施用产品质量 × 有文件支持的养分质量分数 | 产品质量；N/P/K 组成 | kg nutrient | wur-floripefcr-2024 |
| `calc_active_ingredient` | 植物保护产品 | 有效成分质量 = 制剂产品质量 × 有效成分质量分数 | 制剂质量；浓度 | kg active ingredient | wur-floripefcr-2024 |
| `calc_transport_work` | 配送 | 吨公里 = 运输总质量（吨）× 单程载货距离；应用有文件支持的装载和空返处理，且不重复计算冷藏能源 | 质量；距离；载荷；空返；运输方式 | 各路线段 tkm | wur-floripefcr-2024 |
| `calc_reusable_packaging` | 可重复包装 | 每次使用的材料负担 = 包装制造和生命末期负担 / 核实的寿命期使用次数；加上本次清洗和返程运输 | 包装质量；复用次数；清洗；返程路线 | 每枝包装负担 | wur-floripefcr-2024 |
| `calc_dqr` | 数据质量 | 对重要活动数据和直接基本流评价精度、时间、地理和技术代表性；保留各项评分和证据。 | 活动和流证据；研究语境 | 数据质量记录 | ec-pef-method-2021; wur-floripefcr-2024 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留物种或品种、等级、花茎长度、产品形式、制品组成、生产地理、栽培系统、采收期、采后处理、包装、冷链条件和预期观赏寿命。 | 产品规格、批次记录和参考流元数据 |
| `dq_temporal` | 栽培 | 一年生和设施系统使用最近三个代表年份，周期短于一年时使用最近三个连续周期；多年生系统应用有文件支持的稳态处理。 | 时期覆盖表和带来源的计算 |
| `dq_site_coverage` | 多场址生产 | 描述总体、技术、农事实践、气候区和产能分层；记录纳入场址和产量覆盖。 | 场址名录、抽样依据和产量核对 |
| `dq_measurement` | 重要活动数据 | 优先采用校准仪表、核实发票、批次计数、秤量和供应商规格；保留原始单位和换算因子。 | 校准、发票、批次、称重和规格记录 |
| `dq_completeness` | 所有必需阶段和流 | 核对投入、产出、损失、库存变化、水、能源和废物；列出每个未解决或排除流及其实质性理由。 | 完整性清单和质量/数量/公用工程平衡 |
| `dq_representativeness` | 前景和次级数据 | 评价技术、地理、时间和精度代表性；披露代理及其预期偏差方向。 | DQR 工作底稿和代理登记表 |
| `dq_source_traceability` | 计算值和因子 | 保存公式、来源 id 和版本、原始输入、分配因子和计算输出，使独立复核者可复算。 | 计算工作底稿和引用来源 |
| `dq_uuid_readiness` | Tiangong 身份 | 激活或发布前，对照当前 Tiangong 行解析每个选定的公开流、流属性和单位组 UUID；不得替代为范围更窄的流。 | 保存在 PCR 内容之外的 Tiangong 回读记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | 参考产品 | 缺少物种或品种、等级、产品形式、制品花茎数、栽培系统、生产地理或边界时，判定不符合。 | wur-floripefcr-2024 |
| `validate_reference_flow` | 定量参考 | 要求以 Item(s) 表示准确的一枝消费者就绪花茎；或提供透明的制品到花茎计算，其合格花茎数为正且非花材组分保留在清单中。 | wur-floripefcr-2024; lan-cut-flower-review-2022 |
| `validate_reference_uuid` | Tiangong 参考流 | 在选定并回读语义匹配的通用切花产品流 UUID 之前，阻止激活、发布及完整 PCR 符合性声明；拒绝将范围较窄的 `Dye Flower` 流用于此角色。 |  |
| `validate_process_coverage` | 前景清单 | 要求栽培、采后和包装发运过程清单。当声明边界包含配送和生命末期时，还要求相应过程清单。 | wur-floripefcr-2024 |
| `validate_required_inputs` | 栽培 | 对起始材料、基质、栽培材料、水、肥料、植物保护产品、能源、加热或冷却、基础设施、直接排放、产出和损失，要求明确行或合理的不适用说明。 | wur-floripefcr-2024 |
| `validate_count_balance` | 花茎转移 | 各阶段要求投入花茎 = 合格产出花茎 + 剔除或损失花茎 ± 有记录的库存变化。 |  |
| `validate_water_balance` | 用水阶段 | 在声明测量不确定度内，要求补充水 = 产品中或运输水 + 排放 + 蒸发或其他损失 ± 库存变化；循环水应单独记录。 |  |
| `validate_allocation` | 共享过程 | 要求细分证据，或有引用的分配规则和实测因子；存在物理分离或因果关系时，拒绝无说明的经济分配。 | ec-pef-method-2021; wur-floripefcr-2024 |
| `validate_temporal_coverage` | 栽培 | 要求代表期，或符合一年生、短周期或多年生规则的明确例外。 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `validate_loss_scaling` | 下游阶段 | 要求各阶段实测损失率处于零到一之间，并验证上游花茎放大后得到一枝交付花茎。 | wur-floripefcr-2024 |
| `validate_source_traceability` | 计算行 | 每个方法因子、外部约束规则和非默认情景均应引用已列来源 id；每个前景计算行均应关联采集协议。 | ec-pef-method-2021 |
| `validate_data_quality` | 数据集画像 | 要求披露精度、时间、地理和技术代表性，并提供明确的代理登记表。 | ec-pef-method-2021; wur-floripefcr-2024 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景切花生产数据包，可带下游配送和生命末期扩展 |
| downstream_use | `secondary_dataset`; `background_dataset`; 作为 `process` 和 `lifecyclemodel` 投影的输入 |
| allowed_use | 当声明的物种、等级、栽培路线、地理、时间、采后处理、包装、配送、损失和边界与研究匹配时，用于产品特定的切花和花蕾建模 |
| excluded_use | 盆栽植物、种植材料、种子、干制或人造花、作为食品销售的食用花、未披露的通用全球代理，或不同产品规格和观赏寿命之间的比较 |
| required_metadata | PCR id 和版本；物种或品种；等级；花茎长度；产品或制品形式及花茎数；栽培系统和基质；地理；采收期和数据期；采后处理；包装；冷链和路线；预期观赏寿命；边界；分配；来源和代理登记表；Tiangong UUID 回读状态 |
| required_quality_disclosure | 场址和产量覆盖；采集期；测量和计算方法；数据质量指标；未解决流；排除过程；代理数据及偏差方向；分配因子；质量、数量、水和公用工程核对 |
| update_trigger | 物种或等级、栽培技术、能源系统、温室基础设施、水源、养分或植物保护制度、采后处理、包装、路线或冷链、损失模式、废物处理、来源方法或任何重要投入或排放发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| wur-floripefcr-2024 | standard | Broekema, R. et al. (2024), Product Environmental Footprint Category Rules for Cut Flowers and Potted Plants: Final version, Wageningen Economic Research Report 2024-023, DOI: 10.18174/549543，检索日期 2026-07-30 | 花卉特定功能单位和参考流；生命周期阶段；必需企业特定数据；分配；时间覆盖；包装、配送、损失、数据质量和生命末期规则 |
| ec-pef-method-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I: Product Environmental Footprint Method, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en，检索日期 2026-07-30 | 通用 PEF 边界、多功能性、数据需求、数据质量、次级数据和报告规则 |
| bsi-pas-2050-1-2012 | standard | BSI PAS 2050-1:2012, Assessment of life cycle greenhouse gas emissions from horticultural products - Supplementary requirements for the cradle-to-gate stages，BSI 官方记录，检索日期 2026-07-30 | 园艺时间平均、多年生稳态、轮作分配、土地利用变化和从摇篮到大门披露 |
| lan-cut-flower-review-2022 | literature | Lan, Y.-C., Tam, V. W. Y., Xing, W., Datt, R., and Chan, Z. (2022), Life cycle environmental impacts of cut flowers: A review, Journal of Cleaner Production 369, 133415, DOI: 10.1016/j.jclepro.2022.133415 | 对按花茎计数的功能单位、类别差异，以及栽培、采后、消费者、能源、水、化学品、土地利用和废物阶段重要性的独立证据 |

来源限制：2024 年 FloriPEFCR 文件注明的有效期截止日为 2025-12-31。本 PCR 将其中花卉特定技术规则作为目前找到的最强已发布方法学证据使用，并不据此声称该文件当前仍然有效。本候选 PCR 转为 active 前，应确认现行替代文件或续期有效性。

---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜品、未经染色的切花和花蕾

## 1. 范围与适用性

本 PCR 适用于以单枝形式供应，或组成花束、花环、花篮及类似装饰制品的新鲜切花和花蕾。范围包括露地和设施栽培、一年生和多年生生产、采收后的花材整理、保鲜处理、分级、冷却、扎束或制品组装、包装和发运。符合本PCR的数据集还须覆盖配送、储存、拍卖或交易、零售、消费者使用及生命末期；实测前景之外的阶段可由兼容链接数据集承接。

本 PCR 不包括活体盆栽植物、用于栽培的球根或其他种植材料、花卉种子、干制或人工保藏花卉、人造花、提取香料、作为食品销售的食用花，以及正常采后保鲜之外会实质改变切花的染色或其他加工。只有当切花或花蕾提供主要功能时，花束或其他制品才属于本范围；非花材附件和容器应作为单独投入记录。

物种、品种、等级、花茎长度、栽培系统、生产地理、采收季节、采后处理、包装配置、冷链条件、预期观赏寿命和制品组成均可能实质改变清单结果。每个符合本 PCR 的前景数据包均应声明这些事实。


本记录是采用有版本技术证据的独立天工候选方法，不认证当前FloriPEFCR符合性，也不延长外部方案有效期。分类查询必须保留鲜品、未经染色的范围；干燥、染色、漂白及保藏花卉路线不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds |
| classification_refs | CPC 3.0: 01962，较窄关系：仅限鲜品、未经染色的切花 |
| covered_products | 新鲜切花和花蕾；单枝；花束；花环；花篮；以及主要功能由切花或花蕾提供的类似装饰制品 |
| excluded_products | 活体盆栽植物；球根、插条和种植材料；花卉种子；干制或保藏花卉；人造花；香料和提取物；作为食品销售的食用花；单独建模的染色或其他实质加工 |
| representative_product | 一枝供装饰使用、达到消费者购买状态的新鲜切花 |
| production_route | 露地或设施系统中的起始材料和栽培；采收；采后整理和保鲜；包装和发运；完整系统必须覆盖下游配送、观赏使用和生命末期 |
| market_state | 新鲜、已分级、已保鲜并可销售的单枝，或已声明组成的多枝装饰制品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以一枝新鲜切花提供装饰功能 |
| How much | 消费者购买状态的一枝 |
| How well | 满足已声明的生产者或零售商对物种或品种、等级、花茎长度、外观、新鲜度和包装的规格 |
| How long or cycle | 针对特定产品及储存方式声明的预期观赏寿命或瓶插寿命 |
| reference_flow_link | delivered_stem |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 购买时已具备消费条件的鲜切花枝 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 植物学物种和品种；产品形式及制品花茎数；等级和花茎长度；露地或设施栽培；基质或土壤系统；生产地理；采收期；采后处理；包装配置；冷链条件；预期观赏或瓶插寿命；所含生命周期阶段 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失这些限定信息时，参考流定义不完整。Tiangong 参考产品流 UUID 应保持未解析，不得使用范围更窄的 `Dye Flower` 流；PCR 激活或发布前必须取得语义匹配的公开产品流。


仅完整摇篮到坟墓系统可声明符合本PCR及其一枝购买花枝参考。节点记录保留实际原生活动、节点产出和库存，不独立声明符合性，也不改变参考。最终购买枝数或下游情景未知时，保留未归一化原始贡献，不编造分母。兼容阶段覆盖及匹配台账齐备后，逐原始贡献归属并按最终购买枝数仅除一次。中间花枝为实测或按损失折算的转移量，仅delivered_stem固定为1 Item(s)。独立农场交付或其他短边界产品须另有适用的参考指导，不能将该产出改称delivered_stem。制品影响除以花枝数仅是声明的清单强度，不证明不同花束、物种或观赏寿命功能等价。

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


先核对期间、批次、库存及损失，再以最终购买花枝数作共同分母。保留原始阶段数量及本节点产出枝数；阶段强度乘以每购买枝所需阶段枝数仅一次。多年生负荷归属必须包含零产出的建立期。分源天然淡水取水是基本流输入，外购水是产品输入；内部循环不构成另一笔外部投入。密度、单枝质量和运输体积须采集，不假定常数。

## 5. 系统边界

符合性边界为从摇篮到坟墓。直接实测记录可只覆盖部分节点，但声明符合性前，必须由兼容链接数据集/情景补足所有其余阶段，再按最终参考归一化。短边界贡献不是完整符合本PCR的产品数据集。

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
| `boundary_required_stages` | 完整产品系统 | 符合性要求为一枝已购买未染色鲜切花建立完整摇篮到坟墓系统，覆盖繁殖材料、栽培、采后、包装、配送/零售、声明的观赏使用及物料特定终末处理。阶段可由覆盖登记表明确的兼容链接数据集承接，避免重复前景展开，但不得从完整系统中省略。原始节点记录仅为贡献，不是独立符合本PCR的数据集。 | count-mass-water-balance |
| `boundary_cultivation_inputs` | 栽培 | 包括繁殖材料、栽培基质、使用时的温室或设施栽培基础设施、灌溉水、肥料、植物保护产品、生物防治披露、CO2 施肥、能源、燃料、田间作业、直接排放、土地占用及相关土地利用变化。 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `boundary_post_harvest` | 采收到发运 | 包括采收、分级、修剪、清洗或补水、保鲜化学品、植物检疫处理、冷却、冷藏、扎束或制品组装、包装、场内搬运、产品损失、废水和废物。 | wur-floripefcr-2024 |
| `boundary_capital_goods` | 设施栽培 | 根据有文件支持的材料清单、使用寿命、占用面积及寿命期产量纳入温室结构和栽培专用基础设施；披露排除的资本品。 | wur-floripefcr-2024 |
| `boundary_cutoff_disclosure` | 所有阶段 | 不得仅因缺少数据而省略已知的材料、能源、运输、废物或直接排放流。应将其记为未解决项、使用已披露代理，或按所用研究规则说明排除理由。 | ec-pef-method-2021; wur-floripefcr-2024 |


完整参考系统包括运输/零售、声明的观赏使用情景及所有物料特定终末去向。仅上游的前景数据集仍为中间贡献。缺少下游损失、使用或处置证据时必须采集或采用明确有据情景，不能视为零。技术、地域和时间情景均须在数据集中保留。土地占用按实测面积乘归属时间并声明土地类型；土地转化及碳储量变化为独立有据台账，不能由占用量推定。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_water_ownership` | 供水及取水 | 外购水承接供应方取水/供水一次，供应方取水不另作为前景基本流投入。前景负责的直接取水为分源基本流投入并包含本地供水活动，其内部交付水转移在聚合边界内抵销。水源/交付表及损失分开，不将内部交付另加为一笔外部购水。 | count-mass-water-balance |
| `boundary_luc_method` | 土地转化和碳储量 | 采用GHG产品标准2011附录B核算应归属的直接土地利用变化。土地占用、建园资产和LUC独立核算。按此前H=max(20年,单次收获期)筛查人为且与产品生产有关的转化；植株使用寿命不自动等于单次收获期。采集带日期的地块历史及转化前后碳库，包括生物质、死有机物和土壤。有据的未变化历史可证明不适用，缺少历史不能。历史未知时须采用同一方法下地域和作物相容的公开土地历史/LUC情景，披露代理和不确定性，否则LUC清单不完整。 | ghg-product-standard-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | 种苗、栽培与收获 | required | 完整覆盖必需；前景或兼容链接承接，单节点不独立声明符合性 | 独立花枝及物料台账 | 与1枝购买花枝对应的实测节点数量 |
| `post_harvest` | 采后制备与调理 | required | 完整覆盖必需；前景或兼容链接承接，单节点不独立声明符合性 | 独立花枝及物料台账 | 与1枝购买花枝对应的实测节点数量 |
| `packaging_dispatch` | 包装与发运 | required | 完整覆盖必需；前景或兼容链接承接，单节点不独立声明符合性 | 独立花枝及物料台账 | 与1枝购买花枝对应的实测节点数量 |
| `distribution_retail` | 运输、储存与零售 | required | 完整覆盖必需；前景或兼容链接承接，单节点不独立声明符合性 | 独立花枝及物料台账 | 与1枝购买花枝对应的实测节点数量 |
| `consumer_use` | 声明的观赏使用 | required | 完整覆盖必需；前景或兼容链接承接，单节点不独立声明符合性 | 独立花枝及物料台账 | 与1枝购买花枝对应的实测节点数量 |
| `end_of_life` | 按物料区分的终末处理 | required | 完整覆盖必需；前景或兼容链接承接，单节点不独立声明符合性 | 独立花枝及物料台账 | 与1枝购买花枝对应的实测节点数量 |

以下具体投入或服务仅在实际使用时启用；缺失记录不得当作不适用。实际其他配方、载体、物料和排放须按第8节要求创建独立流卡，不得用示例代替。所有物理物流和负荷均保留，归属后以同一最终参考数量仅归一化一次。

下列每张流卡均执行validate_inventory_card_controls。各交换位置保留明确流、单位、采集协议及数量元数据；同一身份不能替代不同仪表、交接点或处理路线的记录。共同的最终参考换算执行calc_stem_normalization，原始数量执行关联的行特定方法。

### 过程：种苗、栽培与收获 (`cultivation`)

#### 输入

##### 产品流

###### 供应栽培水 (`cultivation_water`)

按交付仪表记录栽培供水；按boundary_water_ownership区分外购供水与自有取水后的内部供水。

- 选定流: 供应栽培水
- 流属性/单位: 体积 / m3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_records`
- 来源: `count-mass-water-balance`

###### 栽培设备受电点电力 (`cultivation_electricity`)

按cp_energy_fuel_records记录栽培设备用电及共享公用工程的归属份额。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 能量 / kWh
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_fuel_records`
- 来源: `count-mass-water-balance`

###### 供现场燃烧的天然气燃料 (`cultivation_heat_fuel_natural_gas`)

记录现场燃烧前实际供应的天然气，保留体积计量条件；燃料供应与直接燃烧排放分开核算。

- 选定流: 供现场燃烧的天然气燃料
- 流属性/单位: 体积 / m3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_fuel_records`
- 来源: `count-mass-water-balance`

###### 温室接口交付的外购热量 (`cultivation_purchased_heat`)

记录温室连接点的外购热量，区分供热方已覆盖负荷与现场燃料使用。

- 选定流: 温室接口交付的外购热量
- 流属性/单位: 能量 / MJ
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_fuel_records`
- 来源: `count-mass-water-balance`

###### 供应温室施用的二氧化碳 (`cultivation_enrichment_co2`)

记录交付的施肥用CO2质量与来源，核对供应、留存及释放台账。

- 选定流: 供应温室施用的二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cultivation_materials`
- 来源: `count-mass-water-balance`

##### 废物流

##### 基本流

###### 从声明水源提取的天然淡水 (`cultivation_water_withdrawal`)

仅记录前景自有取水边界内、实际自然水源的取水量，按boundary_water_ownership与供水及储存对账。

- 选定流: 从声明水源提取的天然淡水
- 流属性/单位: 体积 / m3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_records`
- 来源: `count-mass-water-balance`

###### 归属于合格土地利用碳库增加的大气CO2吸收 (`cultivation_luc_co2_uptake`)

仅按calc_luc_attribution记录有据、合格的土地碳库增加对应大气吸收，排除输入碳和已覆盖转移。

- 选定流: 二氧化碳（土地利用改变） `b3d7c693-6465-4aec-86cb-68b4e457fc98`
- 流属性/单位: 质量 / kg
- 数量规则: 按独立有据的有符号碳库台账、事件归属期、受益份额及匹配最终购买枝数分母核算；仅对有记录的合格数量采用本方向。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_luc_history`
- 来源: `ghg-product-standard-2011`; `count-mass-water-balance`

###### 声明栽培土地类型的占用 (`cultivation_land_occupation`)

记录实际种植用地类型及占用面积乘归属时间，将占用与基础设施、土地转化分开。

- 选定流: 声明栽培土地类型的占用
- 流属性/单位: 面积时间 / m2*a
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cultivation_materials`
- 来源: `count-mass-water-balance`

#### 输出

##### 产品流

###### 声明批次的已收获鲜切花枝 (`harvested_stems`)

按批次及库存台账记录采收花枝发出量，与post_harvest_stem_input核对同一交接。

- 选定流: 声明批次的已收获鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_output_loss_records`
- 来源: `count-mass-water-balance`

##### 废物流

###### 送往声明处理去向的栽培植物废弃生物质 (`cultivation_biomass_waste`)

记录栽培移除生物质的质量、水分及实际去向，区分有据废物移除和无法解释的库存残差。

- 选定流: 送往声明处理去向的栽培植物废弃生物质
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_output_loss_records`
- 来源: `count-mass-water-balance`

##### 基本流

###### 排入声明空气区室的一氧化二氮 (`cultivation_nitrous_oxide`)

按声明的养分排放方法及calc_species_mass，以N2O化合物质量计量并保留实际接收空气分区。

- 选定流: 排入声明空气区室的一氧化二氮
- 流属性/单位: 质量 / kg N2O
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cultivation_emissions`
- 来源: `count-mass-water-balance`

###### 排入声明空气区室的氨 (`cultivation_ammonia`)

按声明的养分排放方法及calc_species_mass，以NH3化合物质量计量并保留实际接收空气分区。

- 选定流: 排入声明空气区室的氨
- 流属性/单位: 质量 / kg NH3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cultivation_emissions`
- 来源: `count-mass-water-balance`

###### 排入声明接收水体区室的硝酸盐 (`cultivation_nitrate`)

按NO3-质量记录向实际接收水体的硝酸根释放，按cp_cultivation_emissions保留排放路径归属。

- 选定流: 排入声明接收水体区室的硝酸盐
- 流属性/单位: 质量 / kg NO3-
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cultivation_emissions`
- 来源: `count-mass-water-balance`

###### 排入空气的化石二氧化碳 (`cultivation_fossil_co2`)

记录直接化石源CO2及其空气分区，与外购能源CO2e及土地利用变化CO2分开。

- 选定流: 排入空气的化石二氧化碳
- 流属性/单位: 质量 / kg CO2
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cultivation_emissions`
- 来源: `count-mass-water-balance`

###### 归属于土地利用碳库损失的空气CO2释放 (`cultivation_luc_co2_release`)

按calc_luc_attribution记录有据的正向碳库释放并保留事件/期间归属，不将其表述为实测年度排气。

- 选定流: 归属于土地利用碳库损失的空气CO2释放
- 流属性/单位: 质量 / kg
- 数量规则: 按独立有据的有符号碳库台账、事件归属期、受益份额及匹配最终购买枝数分母核算；仅对有记录的合格数量采用本方向。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_luc_history`
- 来源: `ghg-product-standard-2011`; `count-mass-water-balance`

### 过程：采后制备与调理 (`post_harvest`)

#### 输入

##### 产品流

###### 声明批次的已收获鲜切花枝 (`post_harvest_stem_input`)

接收harvested_stems记录的同一批次，先核对接收枝数及库存，再核算处理损失。

- 选定流: 声明批次的已收获鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_output_loss_records`
- 来源: `count-mass-water-balance`

###### 供应采后工艺水 (`post_harvest_water`)

记录本节点补水、清洗或调理供水，按calc_water_components核对物料携带水及废水。

- 选定流: 供应采后工艺水
- 流属性/单位: 体积 / m3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_post_harvest_records`
- 来源: `count-mass-water-balance`

###### 采后设备受电点电力 (`post_harvest_electricity`)

按cp_post_harvest_records记录归属于采后处理、冷却及储存的用电。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 能量 / kWh
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_post_harvest_records`
- 来源: `count-mass-water-balance`

###### 供设备充注的R134a制冷剂 (`post_harvest_r134a`)

对实际使用R134a的设备，按calc_refrigerant_balance记录充注及补充产品质量；其他制冷剂另行记录。

- 选定流: 制冷剂，R134a（四氟乙烷） `210b4222-adda-4097-9e79-f2c9a6c172e4`
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_post_harvest_records`
- 来源: `count-mass-water-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可售调理鲜切花枝 (`saleable_conditioned_stems`)

扣除拒收并核对库存变化后记录合格调理花枝发出量，与packaging_stem_input匹配同一交接。

- 选定流: 可售调理鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_output_loss_records`
- 来源: `count-mass-water-balance`

##### 废物流

###### 废弃花枝修剪物及拒收植物生物质 (`post_harvest_biomass_waste`)

记录采后移除的修剪残余物及拒收花材质量、水分和去向。

- 选定流: 废弃花枝修剪物及拒收植物生物质
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_output_loss_records`
- 来源: `count-mass-water-balance`

###### 转交处理的采后废水 (`post_harvest_wastewater`)

记录转交接收处理系统的采后未处理废水，与直接环境排放区分。

- 选定流: 转交处理的采后废水
- 流属性/单位: 体积 / m3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_post_harvest_records`
- 来源: `count-mass-water-balance`

##### 基本流

###### 排入空气的R134a (`post_harvest_refrigerant_emission`)

对实际使用R134a的设备，按calc_refrigerant_balance核算未回收的空气释放量；充注质量不等于排放质量。

- 选定流: 排入空气的R134a
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_post_harvest_records`
- 来源: `count-mass-water-balance`

### 过程：包装与发运 (`packaging_dispatch`)

#### 输入

##### 产品流

###### 可售调理鲜切花枝 (`packaging_stem_input`)

接收saleable_conditioned_stems记录的调理花枝批次，保留枝数及制品组装台账。

- 选定流: 可售调理鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging_dispatch_records`
- 来源: `count-mass-water-balance`

###### 瓦楞纸板箱 (`packaging_corrugated_box`)

记录实际瓦楞纸箱质量、组成及归属使用次数，复用时执行calc_reusable_packaging。

- 选定流: 瓦楞纸板箱
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging_dispatch_records`
- 来源: `count-mass-water-balance`

###### 低密度聚乙烯包装薄膜 (`packaging_ldpe_film`)

单独记录实际LDPE包装膜质量，与其他聚合物及制品附件分开。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging_dispatch_records`
- 来源: `count-mass-water-balance`

###### 包装与发运设备受电点电力 (`packaging_dispatch_electricity`)

记录归属于声明批次的包装、组装及发运用电。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 能量 / kWh
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging_dispatch_records`
- 来源: `count-mass-water-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次发运时的已包装鲜切花枝 (`consumer_ready_stem`)

记录首次发运的包装花枝、制品配置及库存核对结果，与distribution_stem_input匹配。

- 选定流: 首次发运时的已包装鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_output_loss_records`
- 来源: `count-mass-water-balance`

##### 废物流

###### 送往声明处理的废瓦楞纸板 (`packaging_corrugated_waste`)

按质量及实际去向记录包装环节移除的瓦楞废纸板，与随产品保留的包装分开。

- 选定流: 送往声明处理的废瓦楞纸板
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging_dispatch_records`
- 来源: `count-mass-water-balance`

###### 送往声明处理的废低密度聚乙烯薄膜 (`packaging_ldpe_waste`)

按质量及实际去向记录包装环节移除的废LDPE膜，与随产品保留的膜分开。

- 选定流: 送往声明处理的废低密度聚乙烯薄膜
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging_dispatch_records`
- 来源: `count-mass-water-balance`

##### 基本流

### 过程：运输、储存与零售 (`distribution_retail`)

#### 输入

##### 产品流

###### 首次发运时的已包装鲜切花枝 (`distribution_stem_input`)

接收consumer_ready_stem记录的包装批次，保留储存库存及后续零售损失。

- 选定流: 首次发运时的已包装鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

###### 公路货运服务 (`distribution_road_transport`)

对实际公路段执行calc_transport_work及allocation_transport_physical，分别保留实际货批物理工作量与相容的分配服务量。

- 选定流: 货车 `d55f1329-cd61-44c0-8000-9367d38d5634`
- 流属性/单位: 运输功 / tkm
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

###### 航空货运服务 (`distribution_air_transport`)

对实际航空段执行calc_transport_work及allocation_transport_physical，采用边界、载荷及利用率相容的空运货运供应数据。

- 选定流: 航空货运服务
- 流属性/单位: 运输功 / tkm
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

###### 海运货运服务 (`distribution_sea_transport`)

对实际海运段执行calc_transport_work及allocation_transport_physical，保留相容的船舶/服务类型及覆盖范围。

- 选定流: 海运货运服务
- 流属性/单位: 运输功 / tkm
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

###### 仓储及零售设备受电点电力 (`distribution_electricity`)

按声明的储存分配驱动量，记录归属于批次的配送、储存及零售用电。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 能量 / kWh
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

###### 供设备充注的R134a制冷剂 (`distribution_r134a`)

对配送/零售实际使用R134a的设备，按calc_refrigerant_balance记录充注及补充；其他制冷剂另行记录。

- 选定流: 制冷剂，R134a（四氟乙烷） `210b4222-adda-4097-9e79-f2c9a6c172e4`
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 购买时已具备消费条件的鲜切花枝 (`delivered_stem`)

本卡是唯一的消费者购买参考产出：一枝，即1 Item(s)；与consumer_purchased_stem核对同一购买批次。

- 选定流: 购买时已具备消费条件的鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `generic`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `identity_reference`
- 来源: `count-mass-water-balance`

##### 废物流

###### 废弃未售出或受损鲜花生物质 (`distribution_retail_losses`)

记录移除的未售出或损坏花材质量、水分及去向，在零售库存台账中保留损失枝数。

- 选定流: 废弃未售出或受损鲜花生物质
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

##### 基本流

###### 排入空气的R134a (`distribution_refrigerant_emission`)

对配送/零售实际使用R134a的设备，按calc_refrigerant_balance核算未回收释放，与充注及供应方已计泄漏分开。

- 选定流: 排入空气的R134a
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_distribution_records`
- 来源: `count-mass-water-balance`

### 过程：声明的观赏使用 (`consumer_use`)

#### 输入

##### 产品流

###### 购买时已具备消费条件的鲜切花枝 (`consumer_purchased_stem`)

接收delivered_stem对应的同一购买批次，保留实际枝数、质量、水分及库存，不重复增加上游产品负荷。

- 选定流: 购买时已具备消费条件的鲜切花枝
- 流属性/单位: 件数 / Item(s)
- 数量规则: 按cp_consumer_use采集同一购买批次的实际数量、质量、水分及存量变化，按已声明的节点件数与组分水量平衡核对，再除以同一批次购买枝数；与相邻节点采用同一转移记录，不重复计入产品负荷或废物处理。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_consumer_use`
- 来源: `count-mass-water-balance`

###### 供应插瓶及养花用水 (`consumer_vase_water`)

按声明的观赏寿命情景记录花瓶及养护供水，保留换水记录和水平衡归属。

- 选定流: 供应插瓶及养花用水
- 流属性/单位: 体积 / m3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_consumer_use`
- 来源: `count-mass-water-balance`

###### 归属于声明鲜花养护的电力 (`consumer_electricity`)

按cp_consumer_use仅记录归属于实际声明花卉养护的用电；判定不适用须有依据。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 能量 / kWh
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_consumer_use`
- 来源: `count-mass-water-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 观赏使用后送至处理的废弃花卉生物质 (`consumer_discarded_flower`)

按实际枝数、质量、水分及去向记录使用后花材移除，核对同一批次及废弃处理接收。

- 选定流: 观赏使用后送至处理的废弃花卉生物质
- 流属性/单位: 质量 / kg
- 数量规则: 按cp_consumer_use采集同一购买批次的实际数量、质量、水分及存量变化，按已声明的节点件数与组分水量平衡核对，再除以同一批次购买枝数；与相邻节点采用同一转移记录，不重复计入产品负荷或废物处理。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_consumer_use`
- 来源: `count-mass-water-balance`

###### 转交处理的插瓶及清洗废水 (`consumer_wastewater`)

记录向实际处理系统转交的花瓶及清洗废水，不重复扣减物料携带水。

- 选定流: 转交处理的插瓶及清洗废水
- 流属性/单位: 体积 / m3
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_consumer_use`
- 来源: `count-mass-water-balance`

##### 基本流

### 过程：按物料区分的终末处理 (`end_of_life`)

#### 输入

##### 产品流

###### 鲜花生物质堆肥处理服务 (`flower_composting_service`)

使用有据的花材堆肥比例；处理服务覆盖及回收产品数量执行validate_end_of_life_materials。

- 选定流: 鲜花生物质堆肥处理服务
- 流属性/单位: 处理废物质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_end_of_life_scenario`
- 来源: `count-mass-water-balance`

###### 鲜花生物质填埋处理服务 (`flower_landfill_service`)

使用有据的花材填埋比例，与堆肥、焚烧及废物交接分开记录。

- 选定流: 鲜花生物质填埋处理服务
- 流属性/单位: 处理废物质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_end_of_life_scenario`
- 来源: `count-mass-water-balance`

###### 鲜花生物质焚烧处理服务 (`flower_incineration_service`)

使用有据的花材焚烧比例，保留处理方边界及另有证据的回收功能。

- 选定流: 鲜花生物质焚烧处理服务
- 流属性/单位: 处理废物质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_end_of_life_scenario`
- 来源: `count-mass-water-balance`

##### 废物流

###### 进入终末去向核算的废弃鲜花生物质 (`discarded_flower_biomass`)

分来源、状态、质量及水分核对接收花材与各移除节点，再分配处理比例。

- 选定流: 进入终末去向核算的废弃鲜花生物质
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_end_of_life_scenario`
- 来源: `count-mass-water-balance`

###### 进入终末去向核算的废瓦楞纸板 (`discarded_corrugated_board`)

按来源及质量核对接收瓦楞纸板与包装废物、产品废弃包装，保留本材料自身去向。

- 选定流: 进入终末去向核算的废瓦楞纸板
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_end_of_life_scenario`
- 来源: `count-mass-water-balance`

###### 进入终末去向核算的废低密度聚乙烯薄膜 (`discarded_ldpe_film`)

按来源及质量核对接收LDPE膜与包装废物、产品废弃包装，保留本聚合物自身去向。

- 选定流: 进入终末去向核算的废低密度聚乙烯薄膜
- 流属性/单位: 质量 / kg
- 数量规则: 按关联协议取得并归属原始量，再除以匹配的合格购买枝数，仅归一化一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_end_of_life_scenario`
- 来源: `count-mass-water-balance`

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

适用土壤路线默认采用IPCC 2019修订版受管理土壤Tier 1；只有完整相容的场址/区域方法及活动记录支持时才采用Tier 2/3，并列明方程、因子、物种基准和每项排除路径。不得仅按分类代码推定土壤路线或因子。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 所有多功能过程 | 首先细分过程并对花卉作物、温室分区、批次、制品或路线进行直接测量。仅对剩余共享投入或排放进行分配。 | ec-pef-method-2021; wur-floripefcr-2024 |
| `allocation_greenhouse_land_time` | 共用温室栽培 | 有作物特定分表数据时据此分配共享能源、清洁、土地占用和通用作业；否则使用生长时间积分的占用面积。只有无法物理分离的剩余共产品才使用经济分配。 | wur-floripefcr-2024 |
| `allocation_chp_energy` | 热电联产 | 对剩余共享燃料及直接排放按allocation_chp_boundary分配，以MJ计量净有用交付热量和电量；保留实测效率，单独归属供栽培使用的回收CO2净化负荷。 | wur-floripefcr-2024 |
| `allocation_rotation_inputs` | 轮作中的有机肥和绿肥 | 将直接归属的投入计入实际接受作物。对有残效的有机肥/绿肥，按同一完整轮作各作物实际或有据预计吸收的有效养分量分摊其剩余共享负荷，份额＝该作物量/全轮作总量；保留养分种类、可利用率、轮作期和不确定性，不把施用总量全部计给每种作物。养分因果关系不可证时适用allocation_complete_residual并披露代理，不能默认为零。 | count-mass-water-balance; ghg-product-standard-2011 |
| `allocation_transport_physical` | 同一路线段共享货运服务 | 逐恒定载荷路线段，先采用有据供应方分配将货运服务负荷与客运等其他服务分开。在该货运边界内，质量受限按实载质量份额、体积受限按货物实际占用体积份额分配，记录真实限制条件和全部货批。按calc_transport_work分配全段服务，不再对本货批物理吨公里重复分配。不得用假定密度将体积换成质量。 | count-mass-water-balance |
| `allocation_storage_volume_time` | 共用储存、拍卖、交易和零售 | 按产品占用体积乘以储存时间分配公用工程和泄漏。 | wur-floripefcr-2024 |
| `allocation_reuse_cycles` | 可重复使用的花桶、托盘、台车和容器 | 将制造和生命末期负担除以核实的寿命期使用次数，并纳入每次使用的清洗和返程运输。 | wur-floripefcr-2024 |
| `allocation_article_components` | 花束和类似制品 | 本 PCR 按实测花茎数归一化制品层级负担，同时将各非花材组分保留为单独投入；不得把附件负担分配出制品系统。 | wur-floripefcr-2024 |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_complete_residual` | all residual multifunctionality | 优先划分和直接计量，其次采用有证据的因果物理驱动量；无法建立因果物理关系的真实共产品采用同一交接点、同一代表期间的完整经济分配：份额＝本产品数量×价格/全部共产品数量×价格之和。记录所有产出，份额和为1；废物不因有处理成本而成为共产品，其产生负荷仍保留。缺少分母或价格时清单不完整，不推定单产出或零负荷。原始物料平衡不分配。 | `ghg-product-standard-2011` |
| `allocation_chp_boundary` | on-site CHP and recovered CO2 | 先按设备实测可直接归属的负荷划分；残余共用CHP负荷按本PCR声明的净有用电量和热量（同为MJ）分配，保留所有内用及外售有用产出，毛产出和内部损耗不伪装为交付能源。此为本PCR物理分配选择；外部PEF认证要求的特定规则须另行证明符合。回收CO2净化和交付负荷单列，碳来源/释放不重复核算。 | `ghg-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_materials` | cultivation | 起始材料、基质、基础设施和栽培材料 | 采购、库存、供应商和田间记录 | 实际繁殖材料物种/状态；逐一物料/配方；质量/件数/体积；占用面积和时间；群体年龄/阶段；建立期和不产花期投入；补植；终止；资产材料清单及寿命；寿命合格产出；CO2来源、供应质量及释放/固定台账 | 核对采购和库存；验证材料清单与供应商规格 | item; kg; m3; m2-year | 每次接收及年度核对 | 一年生或设施作物至少最近三年，周期较短时最近三个周期；多年生采用稳态代表 | 每个纳入农场和栽培分区 | 每声明的参考流 | 发票、库存表、供应商规格、基础设施记录和作物面积日志 |
| `cp_water_records` | cultivation | 灌溉和栽培用水 | 水表和水源记录 | 实际水源及资源区室；外购供水与自行取水区分；水源及交付表计；期初期末读数和存水；物料带水；补水、排水、蒸发和产品带出水；内部循环；质量/体积换算的密度和条件 ；表计所有者及实际前景取水/供水边界；供应方取水覆盖；内部供水抵销| 读取校准水表并进行水量平衡 | m3 | 每月及每个作物周期 | 与栽培产出相同的代表期 | 每个水源和纳入栽培区 | 每声明的参考流 | 水表校准、账单、取水记录和水量平衡 |
| `cp_fertiliser_records` | cultivation | 肥料、粪肥、改良剂和养分投入 | 施用和组成记录 | 产品；批次；施用质量；N/P/K 组成；有机或合成来源；田块或分区；日期 | 将施用日志与采购、库存核对并验证组成 | kg product; kg N; kg P; kg K | 每次施用 | 与栽培产出相同的代表期 | 每个纳入田块或分区 | 每声明的参考流 | 施用日志、发票、标签、实验室或供应商组成 |
| `cp_plant_protection_records` | cultivation | 植物保护和采后处理产品 | 施用记录 | 产品；有效成分；浓度；制剂量；处理面积或批次；日期；施用方法 ；施用路线（露地、温室/基质或采后）；各有效成分比例及存留/收集存量；关联cp_pesticide_fate的首次释放去向台账| 记录每次施用并计算有效成分质量 | kg product; kg active ingredient | 每次施用 | 与栽培产出相同的代表期 | 每个纳入田块、温室和采后区 | 每声明的参考流 | 施用日志、标签、发票和施药器校准 |
| `cp_energy_fuel_records` | cultivation | 电力、热、燃料、CHP 和 CO2 施肥 | 仪表、发票和运行记录 | 逐一实际载能体；原始数量/单位；换算所需密度或低位热值；现场燃烧与外购/含能服务区分；分表/设备使用；CHP内用和外售净有用热电；共享驱动总量；匹配花枝产出 | 尽量分表；否则核对设施总量和分配因子 | kWh; MJ; kg; m3 | 每月及每个作物周期 | 与栽培产出相同的代表期 | 每个纳入能源系统和栽培分区 | 每声明的参考流 | 仪表校准、发票、燃料规格、CHP 日志和分配核对 |
| `cp_output_loss_records` | cultivation; post_harvest | 采收、可销售、剔除和损失花茎及生物质 | 采收、分级、废物和发运记录 | 节点；批次；报告日期；期初期末花枝库存；接收；合格发运；其他转移；拒收枝；有据物理损失；实际水和生物质质量/水分；最终购买枝数；阶段与最终批次关联 | 按批计数并称量代表性花茎和废物 | item; kg | 每个采收和分级批次 | 与栽培产出相同的代表期 | 每个纳入作物、等级和处理场址 | 每声明的参考流 | 批次单、称重记录、等级报告、废物凭证和数量/质量平衡 |
| `cp_cultivation_emissions` | cultivation | 栽培直接排放 | 与活动记录关联的计算工作底稿 | 实际无机/有机N；残体；土壤/气候/排水；方法/层级/版本；因子及原始物种口径；直接和间接路径归属；实际现场燃料、石灰/尿素和CO2施用；物质特定接收区室 ；磷投入形态、径流/排水浓度和体积、溶解态/颗粒态P、泥沙量/P比例、作物带出与土壤存量；模型方程/版本及地域/土壤/管理适用性| 将声明的因子方法应用于采集活动数据 | kg substance | 每个报告期 | 与栽培产出相同的代表期 | 每个纳入田块或分区 | 每声明的参考流 | 公式审计、来源版本、输入追溯和独立复算 |
| `cp_post_harvest_records` | post_harvest | 水、保鲜剂、能源、储存、制冷剂和废水 | 批次、仪表、库存和维护记录 | 花茎数；水；药剂；能源；储存体积和时间；制冷剂充注、补充、回收；废水 | 按批测量或核对共享系统 | item; m3; kg; kWh; m3-day | 每批；共享公用工程按月 | 与处理产出相同的代表期 | 每个纳入采后场址 | 每声明的参考流 | 批次表、仪表、发票、维护日志和公用工程核对 |
| `cp_packaging_dispatch_records` | packaging_dispatch | 包装、附件、可重复容器、组装和发运 | 材料清单和批次记录 | 材料；质量；再生含量；制品花茎数；重复使用次数；清洗；发运数；包装废物 | 称量代表性配置并核对采购和库存 | item; kg; m3 | 每种配置及年度核对 | 当前配置和代表报告年 | 每个纳入包装或组装场址 | 每声明的参考流 | 包装规格、称重记录、采购数据、复用日志和批次核对 |
| `cp_distribution_records` | distribution_retail | 运输、储存、拍卖、交易、零售、损失和制冷剂 | 路线、装运、设施和销售记录 | 起点终点；方式；距离；燃料；载荷；质量体积；储存体积时间；公用工程；制冷剂；损失数和路线 ；逐恒载段全部适用货批总载荷质量（不含车辆自重）、占用体积、限制条件、载货距离、供应方客货分配、服务参考/因子单位、全段服务量、分配份额/数量、实际利用率、返程及制冷覆盖| 采集每个路线段并核对设施活动 | km; tkm; m3-week; kWh; kg; item | 每次装运及设施月度总量 | 覆盖季节变化的代表报告年 | 每个纳入路线段和设施 | 每声明的参考流 | 货运单、车载数据、公用工程账单、库存、销售和废物记录 |
| `cp_end_of_life_scenario` | end_of_life | 花材和包装处理 | 组成和情景记录 | 材料质量；当地收集比例；堆肥；厌氧消化；回收；焚烧；填埋；运输；回收产率 | 使用实测组成和当前地理特定处理证据 | kg; fraction | 每种产品配置；至少每年复核情景 | 当前市场和废物管理年份 | 声明的消费者市场 | 每声明的参考流 | 产品拆解记录、官方废物统计、处理证据和情景校验 |
| `cp_consumer_use` | consumer_use | 观赏使用 | 实测或有据情景 | 购买枝数；物种；花瓶及寿命；观赏天数；水更换次数与体积；养护制剂；用能；废水；去向 ；实际接收/使用后废弃花枝数、质量、水分与去向；期初期末存量| 按声明地域与实际配置采集原始用量；有据情景必须声明来源、年份及不确定性 | Item(s); day; m3; kg; kWh | 每配置 | 声明观赏期 | 声明消费市场 | 每声明的参考流 | 观测记录或有据情景 |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_system_coverage | cultivation; post_harvest; packaging_dispatch; distribution_retail; consumer_use; end_of_life | 完整系统链接 | 边界登记 | 逐阶段；实际供应方及交接点；前景/链接角色；批次/期间；原生产出；原始负荷；已含损失；消费市场/使用/去向；最终购买枝数 | 最终参考归一化前核对转移和阶段覆盖；分母缺失时仅保留原始贡献 | item; native activity units | 每系统 | 匹配报告期 | 完整链接系统 | per declared reference flow | 供应方边界、批次台账和覆盖登记 |
| cp_pesticide_fate | cultivation; post_harvest | 具体有效成分去向 | 施用及区室台账 | 成分/CAS及比例；路线；制剂/施用质量；期初期末存量；排气通量/体积及浓度；外排体积/浓度；土壤沉积；作物残留；收集废物；降解产物；模型版本/方程/参数/条件；实际接收方及后续处理覆盖 | 执行calc_pesticide_release的分路线首次释放质量平衡；采样须匹配实际外排及时间；区分模型约定和实测去向 | kg ingredient; native concentration; m3; time; area | 每次施用/批次 | 匹配施用及去向期 | 实际田块/设备/药浴 | per declared reference flow | 采样/校准、施用记录、模型及存量核对 |
| cp_luc_history | cultivation | 直接土地转化 | 地块历史及碳库台账 | 地块/地域/面积；原/现土地状态；转化原因/日期；转化前后生物质/死有机物/土壤碳及单位；转移/碳库边界；收获期及H；报告期重叠；气体因子/活动；大气吸收资格；受益产品及份额；供应方LUC覆盖；代理和不确定性 | 按boundary_luc_method筛查和calc_luc_attribution核算；保留带日期土地记录、相容碳库证据或明确允许代理；缺少历史不推定未发生 | m2; year; kg C; kg substance | 逐事件并年度复核 | H年事件窗口及匹配报告期 | 逐纳入地块/供应 | per declared reference flow | 土地登记/地图、碳库方法、带日期事件/期间台账及独立复算 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stem_normalization` | 所有过程行 | 归一化数量 = 归属期或批次数量 / 该数量代表的合格消费者就绪花茎数 | 归属数量；合格花茎数 | 每枝数量 | wur-floripefcr-2024 |
| `calc_article_to_stems` | 花束和类似制品 | 每枝数量 = 制品层级数量 / 实测合格花茎数；保留制品身份和非花材组分 | 制品数量；花茎数 | 每花茎当量数量 | wur-floripefcr-2024 |
| `calc_loss_scaling` | 连续生命周期阶段 | 按calc_stage_stock_loss核对成对批次及节点台账。仅在库存变化与路线划分已经对账时，每购买枝所需上游枝数＝1/互不重叠留存分数之积，各留存分数大于0且不超过1。损失因子仅用一次；本地实测强度和上游链接数据不得重复包含同一损失。 | 各阶段投入、产出和损失计数 | 经损失放大的上游花茎需求 | wur-floripefcr-2024 |
| `calc_three_period_average` | 栽培 | 适用时采用三个代表年度或三个近期完整种植周期，保留声明时间窗口及新系统较短期间的理由。先汇总各期间可归属原始活动量，再除以匹配合格购买花枝数之和；不得对各年度每枝强度作不加权平均。 | 各期投入；各期产出；花茎数 | 每枝代表性栽培清单 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_perennial_steady_state` | 多年生切花系统 | 按实测发育阶段面积、时间、投入及合格产出表示声明群体和生产寿命；按calc_perennial_cohort纳入建立期、不产花期及补植负荷。幼龄期零产出不构成排除负荷的理由。预测另有证据，并披露稳态假设。 | 阶段面积、时间、投入、产出、产量 | 每枝稳态清单 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_nutrient_mass` | 肥料和改良剂 | 养分质量 = 施用产品质量 × 有文件支持的养分质量分数 | 产品质量；N/P/K 组成 | kg nutrient | wur-floripefcr-2024 |
| `calc_active_ingredient` | 植物保护产品 | 有效成分质量 = 制剂产品质量 × 有效成分质量分数 | 制剂质量；浓度 | kg active ingredient | wur-floripefcr-2024 |
| `calc_transport_work` | distribution_road_transport, distribution_air_transport, distribution_sea_transport | 载荷或货批变化时拆分路线段。实际货批物理工作量=载荷吨数*载货公里（不含车辆自重），保留该物理台账；全段工作量=各货批实际工作量之和。链接的服务数量=全段工作量*allocation_transport_physical确定的质量或占用体积份额；全部适用货物份额和为1。体积受限时，该分配服务量不等于本货批物理tkm，不得伪称实测质量。采用与同一全段载荷、利用率、技术及供应方分配相容的货运数据集/因子；不相容时取得明确车辆/路线段负荷乘同一份额，否则保留服务相容性缺口。空返、利用率和制冷在所选服务边界内仅计一次，实际载荷不再乘装载率。归属服务/负荷按匹配购买花枝仅归一化一次。 | 采集协议中的原始匹配台账 | 按购买花枝归属的原生服务/物质量 | count-mass-water-balance |
| `calc_reusable_packaging` | 可重复包装 | 每次使用的材料负担 = 包装制造和生命末期负担 / 核实的寿命期使用次数；加上本次清洗和返程运输 | 包装质量；复用次数；清洗；返程路线 | 每枝包装负担 | wur-floripefcr-2024 |
| `calc_dqr` | 数据质量 | 对重要活动数据和直接基本流评价精度、时间、地理和技术代表性；保留各项评分和证据。 | 活动和流证据；研究语境 | 数据质量记录 | ec-pef-method-2021; wur-floripefcr-2024 |


| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stage_stock_loss` | all stem hand-offs | 在相同批次和件数基准下，期初库存＋接收＝合格外部发运＋其他转移＋拒收移出＋有据物理损失＋期末库存。返工按一对转移记录，未解释残差不自动为废物。仅在库存及路线一致时，每购买枝所需上游枝数＝1/各阶段实测留存分数之积，分母均为正；否则采用完整实测节点台账。 | 关联采集协议、物种/物料及匹配产出 | 有据数量及核对台账 | `count-mass-water-balance` |
| `calc_water_components` | water-using stages | 外部供水＋物料带入水＋期初存水＝产品带出水＋液体排出＋有据蒸发＋其他外带水＋期末存水。内部循环抵消；实测外排废水不再扣除一次回用或蒸发。转交处理废水与实际直接排放分别核算。 | 关联采集协议、物种/物料及匹配产出 | 有据数量及核对台账 | `count-mass-water-balance` |
| `calc_species_mass` | cultivation emissions | IPCC2019细化卷4第11章Tier1为适用土壤N2O及石灰/尿素CO2路径的默认方法；Tier2/3仅用于有完整地域/场址适用方法及活动记录时。NH3及硝酸盐优先使用路径特定实测物种质量（浓度×实测排出体积或通量×面积×时间）；无实测时使用有明确版本、方程、物种基准、地域和技术适用性的物种特定排放模型，并保留每一因子和活动输入的来源。总挥发N或总淋失N因子不能直接当成NH3或硝酸盐；未能分辨物种时保留缺口，不能假定为零。 使用一个声明且地域适用的方法/层级及实际N投入、路径因子。物种特定N2O-N乘44/28为N2O、NH3-N乘17/14为NH3、硝酸盐氮乘62/14为硝酸盐；实测化合物质量不重复换算。总养分损失不得全部归给单一物种；直接/间接路径负荷仅归属一次。现场燃料/石灰/尿素化石CO2按实际活动及相容物质因子计算；购电/购热生命周期CO2e不是现场CO2质量。 | 关联采集协议、物种/物料及匹配产出 | 有据数量及核对台账 | `count-mass-water-balance`; `ipcc-2019-managed-soils` |
| `calc_perennial_cohort` | cultivation and infrastructure | 即使当年没有事件，也包含建立期、不产花期、补植及终止负荷。按同一群体/资产寿命的合格产出归属有据总负荷：期间负荷＝总负荷×期间合格产出/全寿命合格产出。先汇总原始可归属负荷及花枝产出，再计算强度；未来产出预测须有场址特定情景及不确定性，不设默认寿命/得率，不将历史负荷视为零。  LUC按其独立固定事件/时间规则归属，不按本群体公式再摊销。| 关联采集协议、物种/物料及匹配产出 | 有据数量及核对台账 | `count-mass-water-balance` |
| `calc_refrigerant_balance` | refrigeration equipment | 同一制冷剂和设备按期初存量＋充注＝期末存量＋回收/移出＋实际释放核对，保留调拨及不确定性。不得将替换购入量等同泄漏、假定泄漏比例，或将kg CO2e作为制冷剂质量。含冷藏的运输数据集与现场设备清单不得重叠。 | 关联采集协议、物种/物料及匹配产出 | 有据数量及核对台账 | `count-mass-water-balance` |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_phosphorus_release` | 栽培磷 | 磷流失采用田块/设备至接收水体的边界。溶解P质量=匹配的溶解P浓度*实际径流/排水体积逐项之和；颗粒P质量=外排干泥沙*有据颗粒P比例。保留浓度物种/单位，仅对有据磷酸盐特定组分按94.97/30.97将元素P换算为磷酸盐，不对全部总P换算，实测磷酸盐质量不再换算。优先采用实测流失台账，否则采用有来源且田块/土壤/管理相容的径流/侵蚀质量平衡模型，明确方程及实际P投入、作物带出、存留、水/泥沙和存量参数。不明P平衡差不当排放，缺少参数时保留不完整。具体P/磷酸盐及接收区室独立建卡，不将同一P施用另计第二次排放，也不重复已含上游去向。 | cp_cultivation_emissions；P物种及物理水/泥沙台账 | 每购买枝实际P物种kg | ec-pef-method-2021; count-mass-water-balance |
| `calc_pesticide_release` | 栽培与采后植保施用 | 逐实际有效成分计算施用量=制剂量*该成分质量分数。制剂制造仅作为一笔上游产品投入，有效成分台账不构成另一笔上游采购。优先按成分建立首次释放质量平衡：期初容存+实际加入=期末容存+收集转移+随作物/物料外带残留+有据降解/转化+实际各空气/水/土壤区室释放。母体有效成分平衡采用母体活性质量当量；实际转化产物须按有据化学计量独立记录其化学质量和去向，不假定转化即无毒。内部循环抵销，平衡残差不能当排放。液体释放按时间匹配的浓度*外排体积逐项求和；空气释放按物质质量通量*面积*时间积分（或浓度*排气体积）；土壤释放采用有据沉积测量或声明的质量平衡模型。模型须用有版本方程、实际设备/通风/排水/施用输入和相容实测或有来源的去向参数闭合同一成分台账；监管最不利浓度不是清单质量。仅露地实际施用，在无更具体相容去向数据时，采用有版本PEF2021首次区室约定：实际施入田间有效成分量的0.90进入土壤、0.09进入空气、0.01进入水。标明这是模型约定而非实测物理去向，不另加同一施用质量的后续释放。该约定不得用于配药收集残液、温室/基质或采后药浴；这些路线按上述实测/模型首次释放台账执行，不准采用无据通用比例。转交处理的废物与直接环境释放分开，保留实际作物残留/收集液，处理只归属一次。缺少必要去向参数时，按此固定方法记录不完整，不得自由选零或把全部施用量当释放。识别实际成分后按具体成分/区室创建独立卡，禁止泛农药排放卡。 | 原始协议台账 | 归属后的原生量 | ec-pef-method-2021; count-mass-water-balance |
| `calc_luc_attribution` | 应归属土地变化事件 | 逐boundary_luc_method范围内事件，以H=max(20年,单次收获期)及相同面积、相同碳库的带日期储量核算。有符号CO2量=(转化前碳-转化后碳)*44/12，保留原质量单位；使用吨时明确乘1000转kg。剔除已由收获产品、外来有机物或其他过程计入的转移；转换产生的非CO2气体按相容事件活动和物种因子另列，基本物质卡不填kg CO2e。事件量从发生日起按H年等额归属：年份额=事件量/H，并按有据报告期重叠比例计入；超出归属窗口的事件不重新收费。期间份额按第7节分给实际受益产品，再按匹配最终购买花枝仅除一次。正释放与符合条件的负碳库变化保留独立物质台账；吸收须证明大气来源和存留碳库，不能把外来碳或自动永久性抵扣当吸收。LUC不再按calc_perennial_cohort摊到植株/温室寿命。事件日期、碳库或分母未知须采用声明方法下有据代理，否则完整性不成立，不自动为零。 | 原始协议台账 | 归属后的原生量 | ghg-product-standard-2011; count-mass-water-balance |

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



### 数据质量要求

这些是采集义务，不是交换。按照供应方配方、设备、物料去向及原始记录，为每一种实际物理产品、化学制剂、独立服务、废物和基本物质创建独立流卡；采用其原生属性与数量。保留未知身份，不假定示例已被使用，不假定未知为零。未知具体产品不允许后续自由决定PCR边界、分母、分配或损失方法；这些方法由本PCR规定。

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `starting_material_identity` | cultivation | 所有实际繁殖材料批次、物种及物理繁殖状态；不得对外购切花重复计入栽培。 采集协议：cp_cultivation_materials. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `growing_media_materials_identity` | cultivation | 所有实际使用的基质组分、支撑物、容器、温室结构及设施；采集原生数量、使用寿命及有效产出。 采集协议：cp_cultivation_materials. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `fertiliser_inputs_identity` | cultivation | 逐一采集实际肥料制剂、有机改良物及石灰产品，保留产品质量和养分分数。 采集协议：cp_fertiliser_records. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `plant_protection_inputs_identity` | cultivation | 按calc_pesticide_release和cp_pesticide_fate要求逐实际制剂产品投入及逐具体有效成分/首次释放区室基本流输出；成分台账不另增一笔上游产品负荷。 | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `other_cultivation_utilities_identity` | cultivation | 逐一采集适用具体流卡未表示的实际燃料、热载体及公用工程。 采集协议：cp_energy_fuel_records. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `post_harvest_water_agents_identity` | post_harvest | 逐一采集水合、保鲜、清洁及检疫处理实际药剂、浓度与单列的供水。 采集协议：cp_post_harvest_records. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `other_refrigerants_identity` | post_harvest; distribution_retail | 逐一采集实际制冷剂配方及充注、回收和物种特定释放；R134a卡仅适用于实际使用R134a的设备。 采集协议：cp_post_harvest_records; cp_distribution_records. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `packaging_materials_identity` | packaging_dispatch | 逐一采集实际制品配件、填料、周转桶/盘/台车及其余包装组分；不假定薄膜或纸板配方。 采集协议：cp_packaging_dispatch_records. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `consumer_care_materials_identity` | consumer_use | 逐一采集归属于声明观赏使用的实际养护产品及可重复使用花器组分。 采集协议：cp_consumer_use. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |
| `all_waste_material_routes_identity` | end_of_life | 逐一采集其他废弃物料、具体去向处理服务及真实回收产品；前景处理排放须按物质和环境区室独立列项。 采集协议：cp_end_of_life_scenario. | 现场记录、规格、原始计量及身份读回；尚未确定时保留缺口。 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_inventory_card_controls` | 所有过程清单流卡 | 每个实际交换均保留物料/物质、物理状态、过程节点、期间及来源/去向，适用时包括接收区室。确认实际使用及路线；记录缺失不能证明不适用。未核实身份保持未决，不用较窄或不同物料替代。对采集或计算的活动量行，按关联协议采集原始数量，核对匹配节点的枝数、库存及物料台账，并按实测驱动量归属共享活动。针对同一完整系统、期间及情景，以合格购买枝数为分母，仅执行一次calc_stem_normalization；已归一化量不再除以产出。固定的身份参考产出保持1 Item(s)，LUC及消费者交接保留各卡明确的特殊数量规则，不另加一次换算。相邻节点共用同一实物交接记录，汇总时抵消内部转移，不重复增加产品或处理负荷。核对现场燃料燃烧、外购热、施肥用CO2及公用服务已含覆盖；植物暂时吸收不自动构成负排放。处理服务中的实际回收产品须有自身实测数量和功能，并执行validate_end_of_life_materials规定的不重复排放及不自动抵扣规则。 | count-mass-water-balance |
| `validate_product_identity` | 参考产品 | 缺少物种或品种、等级、产品形式、制品花茎数、栽培系统、生产地理或边界时，判定不符合。 | wur-floripefcr-2024 |
| `validate_reference_flow` | 定量参考 | 在消费者购买产出delivered_stem处要求1 Item(s)；制品花枝数为正，配件仍保留清单。中间收获、调理及发运数量按实测库存/损失台账确定，不固定为1。 | wur-floripefcr-2024; lan-cut-flower-review-2022 |
| `validate_reference_uuid` | Tiangong 参考流 | 分类映射仅接受本PCR鲜切花语义范围，不证明当前外部方案认证或发布就绪。实际数据集须核实与具体物种、未染色鲜品、交接点及件数属性相容的产品身份；缺少身份时保留未解析，不宣称完全链接。不得以染色花代替鲜切花。激活及发布仍须独立满足身份与方法审查门禁。 |  |
| `validate_process_coverage` | 完整系统与来源贡献 | 要求过程图六阶段（含consumer_use和end_of_life）由前景记录或明确兼容的链接数据集覆盖一次，核对实际交接点、物流、期间/批次匹配、供应方覆盖及分配。短边界农场、包装场或零售数据集本身不能声明符合本PCR，也不能用节点产出替代delivered_stem。缺少下游情景、阶段覆盖或购买花枝分母时，完整系统不成立。 | count-mass-water-balance |
| `validate_required_inputs` | 栽培 | 对起始材料、基质、栽培材料、水、肥料、植物保护产品、能源、加热或冷却、基础设施、直接排放、产出和损失，要求明确行或合理的不适用说明。 | wur-floripefcr-2024 |
| `validate_count_balance` | 花茎转移 | 按calc_stage_stock_loss核对期初存量、接收、合格发运、其他转移、拒收移出、物理损失及期末存量；相邻节点转移数量一致，使用后废花还需质量及水分核对。 |  |
| `validate_water_balance` | 用水阶段 | 按calc_water_components核对外部供水、物料带入/带出水、排出、蒸发及期初期末存水，保留测量不确定性；内部循环不再计外部输入，实测废水不重复扣减。 |  |
| `validate_allocation` | 共享过程 | 要求细分证据，或有引用的分配规则和实测因子；存在物理分离或因果关系时，拒绝无说明的经济分配。 | ec-pef-method-2021; wur-floripefcr-2024 |
| `validate_temporal_coverage` | 栽培 | 要求代表期，或符合一年生、短周期或多年生规则的明确例外。 | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `validate_loss_scaling` | 下游阶段 | 交付正最终参考产出的路线，损失分数大于或等于0且严格小于1，保留正产出及匹配库存。核对完整节点台账和阶段因子归属，不将缺失损失赋零。 | wur-floripefcr-2024 |
| `validate_source_traceability` | 计算行 | 每个方法因子、外部约束规则和非默认情景均应引用已列来源 id；每个前景计算行均应关联采集协议。 | ec-pef-method-2021 |
| `validate_data_quality` | 数据集画像 | 要求披露精度、时间、地理和技术代表性，并提供明确的代理登记表。 | ec-pef-method-2021; wur-floripefcr-2024 |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_end_of_life_materials` | end_of_life | 每种实际材料的处理份额应在相同期间和地域下合计为1，质量先按物料组分和水分对账。处理服务属于投入，不能当作回收产出；已由服务表示的排放不得再次添加。缺少去向证据时不得宣称完整；回收或替代利益不自动抵扣，外部方案要求的循环公式须另行验证。 | `count-mass-water-balance` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_pesticide_fate` | 实际植保产品与释放 | 逐有效成分核对施用至首次释放区室或有据残留/收集/转化。执行声明路线和方法优先级；拒绝将露地默认比例套到设施/密闭/采后系统、重复有效成分供应负荷、重复后续去向、将不明平衡差当排放或把监管浓度当质量。缺少路线/去向证据时清单不完整。 | ec-pef-method-2021; count-mass-water-balance |
| `validate_luc_attribution` | 土地历史、碳库及归属 | 要求带日期地块/转化历史或允许的明确代理、碳库及单位、收获期证据、H、事件/报告期重叠、适用气体/吸收台账、受益份额及匹配产出。核对链接供应方LUC覆盖、土地占用及建园清单，负荷只计一次；拒绝因历史缺失推定零或任意按植株寿命摊销。 | ghg-product-standard-2011 |
| `validate_transport_service` | 货运路线段及分配服务量 | 分别核对物理货批tkm和分配服务tkm或车辆/路线段负荷。确认真实限制条件、适用总载荷/体积、份额和为1及供应方/服务边界相容性。分配数量之和须等于全段货运服务，不重复装载、返程或制冷修正。体积受限分配不能默用各货批物理tkm作为分配数量。 | count-mass-water-balance |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_phosphorus_fate` | 栽培P | 对实际P投入按calc_phosphorus_release要求溶解/颗粒P流失及存留证据，核对所选田块到接收水体边界、物种/单位换算及实测或模型径流/泥沙输入。不把总施用P或不明平衡差当实测磷酸盐释放，也不同时计同一P施用和接收水体排放。缺少适用去向证据时完整性不成立。 | ec-pef-method-2021; count-mass-water-balance |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 每购买枝鲜切花的完整摇篮到坟墓系统；原始节点贡献不独立符合本PCR |
| downstream_use | `secondary_dataset`; `background_dataset`; 作为 `process` 和 `lifecyclemodel` 投影的输入 |
| allowed_use | 当声明的物种、等级、栽培路线、地理、时间、采后处理、包装、配送、损失和边界与研究匹配时，用于产品特定的切花和花蕾建模 |
| excluded_use | 盆栽植物、种植材料、种子、干制或人造花、作为食品销售的食用花、未披露的通用全球代理，或不同产品规格和观赏寿命之间的比较 |
| required_metadata | PCR编号/版本；完整阶段覆盖登记（前景/链接供应方交接点、批次/期间及购买枝数分母）；产品限定信息；节点原始量；场址及情景证据；农药路线/去向；土地历史/LUC窗口和碳库；货运约束、物理及分配服务台账；来源/代理和身份读回状态 |
| required_quality_disclosure | 场址和产量覆盖；采集期；测量和计算方法；数据质量指标；未解决流；排除过程；代理数据及偏差方向；分配因子；质量、数量、水和公用工程核对 |
| update_trigger | 物种或等级、栽培技术、能源系统、温室基础设施、水源、养分或植物保护制度、采后处理、包装、路线或冷链、损失模式、废物处理、来源方法或任何重要投入或排放发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| wur-floripefcr-2024 | standard | Broekema, R. et al. (2024), Product Environmental Footprint Category Rules for Cut Flowers and Potted Plants: Final version, Wageningen Economic Research Report 2024-023, DOI: 10.18174/549543，检索日期 2026-07-30 | 花卉特定功能单位和参考流；生命周期阶段；必需企业特定数据；分配；时间覆盖；包装、配送、损失、数据质量和生命末期规则 |
| ec-pef-method-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, sections 4.4.1.4-4.4.1.5 and general PEF method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 边界、分配及质量指导；有版本露地农药首次区室约定和磷/区室区分。不声称当前认证。 |
| bsi-pas-2050-1-2012 | standard | BSI PAS 2050-1:2012, Assessment of life cycle greenhouse gas emissions from horticultural products - Supplementary requirements for the cradle-to-gate stages，BSI 官方记录，检索日期 2026-07-30 | 园艺时间平均、多年生稳态、轮作分配、土地利用变化和从摇篮到大门披露 |
| lan-cut-flower-review-2022 | literature | Lan, Y.-C., Tam, V. W. Y., Xing, W., Datt, R., and Chen, Z. (2022), Life cycle environmental impacts of cut flowers: A review, Journal of Cleaner Production 369, 133415, DOI: 10.1016/j.jclepro.2022.133415 | 对按花茎计数的功能单位、类别差异，以及栽培、采后、消费者、能源、水、化学品、土地利用和废物阶段重要性的独立证据 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| count-mass-water-balance | method_factor | Conservation of item count, material, water and attributable burdens; explicit choices defined in this PCR | 节点、库存、损失及换算一致性；不提供默认数量区间 |
| ghg-product-standard-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9 and Appendix B, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配层级及直接LUC筛查、碳库核算和时间归属；具体选择由本PCR声明 |
| ipcc-2019-managed-soils | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 适用土壤直接/间接氮排放与石灰/尿素CO2路径；不是现场数量证据 |
| fsi-benchmarking-2024 | official_guidance | FSI FloriPEFCR Benchmarking Guidance, July 2024, https://fsi2030.com/wp-content/uploads/2024/07/20240701-FSI-FloriPEFCR-Benchmarking-guidance.pdf, sections 2-3 | 区分技术方法证据、工具审核及正式方案符合性；不据网站继续使用推定有效期延长 |

已发布2024年FloriPEFCR规则作为本独立候选方法的有版本技术证据。本记录不声称历史所示截止日期之后已获续期，也不声称当前PEF/FSI认证。此类声明须另行核对当时适用的方法/数据库版本并独立验证；该不确定性不改变已审查的语义分类关系。缺少相容证据时明确数值范围筛查不可用，不编造限值、因子、寿命或配方。
